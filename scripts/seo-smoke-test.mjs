import fs from "node:fs";
import path from "node:path";

const root = process.cwd();

function read(file) {
  return fs.readFileSync(path.join(root, file), "utf8");
}

function exists(file) {
  return fs.existsSync(path.join(root, file));
}

function assert(condition, message) {
  if (!condition) {
    throw new Error(message);
  }
}

function listFiles(dir) {
  const fullDir = path.join(root, dir);

  if (!fs.existsSync(fullDir)) {
    return [];
  }

  return fs.readdirSync(fullDir, { withFileTypes: true }).flatMap((entry) => {
    const entryPath = path.join(dir, entry.name);
    return entry.isDirectory() ? listFiles(entryPath) : [entryPath];
  });
}

function findBuiltHtml(route) {
  const appFiles = listFiles(".next/server/app").filter((file) => file.endsWith(".html"));
  const routePath = route === "/" ? "index.html" : `${route.replace(/^\//, "")}.html`;
  const routeIndexPath = route === "/" ? "index.html" : `${route.replace(/^\//, "")}/index.html`;

  return appFiles.find((file) => {
    const normalised = file.replace(/\\/g, "/").replace(/^\.next\/server\/app\//, "");
    return normalised === routePath || normalised === routeIndexPath;
  });
}

const requiredFiles = [
  "components/seo/JsonLd.tsx",
  "lib/seo/schema.ts",
  "lib/seo/metadata.ts",
  "app/page.tsx",
  "app/sitemap.ts",
  "app/robots.ts"
];

for (const file of requiredFiles) {
  assert(exists(file), `Missing required SEO file: ${file}`);
}

const page = read("app/page.tsx");
const toolsHub = read("app/tools/page.tsx");
const examplesHub = read("app/examples/page.tsx");
const contactForm = read("components/ContactForm.tsx");
const guides = read("lib/guides.ts");
const tools = read("lib/tools.ts");
const schema = read("lib/seo/schema.ts");
const jsonLd = read("components/seo/JsonLd.tsx");
const sitemap = read("app/sitemap.ts");
const robots = read("app/robots.ts");

assert(page.includes("TextPulses - Free Text Analysis Tools for Writers & SEO"), "Homepage title is not the requested hub title.");
assert(page.includes("Free browser-based SEO text checker for writers, marketers and website owners."), "Homepage H1 is missing.");
assert(!page.includes("SeoSnippetChecker"), "Homepage still imports or renders the old snippet checker.");

for (const href of [
  "/tools/word-counter",
  "/tools/seo-title-checker",
  "/tools/meta-description-checker",
  "/tools/speech-time-calculator",
  "/guides/seo-title-length-guide",
  "/guides/meta-description-length-checker-guide",
  "/guides/linkedin-post-length-guide"
]) {
  assert(page.includes(`href: "${href}"`) || page.includes(`href="${href}"`) || page.includes(`href={${JSON.stringify(href)}}`), `Homepage missing internal link to ${href}`);
}

for (const text of [
  "LinkedIn Post Length: Ideal Character Count by Format (2026)",
  "SEO Title Length: Ideal Character & Pixel Limits (2026)",
  "Meta Description Length: Ideal Characters & Free Checker (2026)",
  "Format\", \"Suggested range\", \"Best for\", \"Risk if too long\", \"Risk if too short",
  "SEO title length by page type",
  "Meta description by page type",
  "toolHref: \"/tools/linkedin-post-checker\"",
  "toolHref: \"/tools/seo-title-checker\"",
  "toolHref: \"/tools/meta-description-checker\""
]) {
  assert(guides.includes(text), `Guide content missing: ${text}`);
}

assert(tools.includes("Meta Description Checker: Free Length & SERP Preview Tool"), "Meta description checker title is missing.");
assert(tools.includes("Paste a meta description to check character count, mobile risk, desktop preview and truncation risk before publishing."), "Meta description checker description is missing.");
assert(tools.includes("SEO Title Checker: Free Length & SERP Preview Tool"), "SEO title checker title is missing.");
assert(tools.includes("Why the metric matters") || read("app/tools/[slug]/page.tsx").includes("Why the metric matters"), "Tool education section is missing.");
assert(toolsHub.includes("How to choose the right TextPulses tool"), "/tools hub guidance is missing.");
assert(toolsHub.includes("Recommended workflows"), "/tools recommended workflows are missing.");
assert(toolsHub.includes("Privacy-first text analysis"), "/tools privacy section is missing.");
assert(toolsHub.includes("Are the tools free?"), "/tools FAQ is missing.");
assert(examplesHub.includes("Why before-and-after examples help writers"), "/examples educational hub section is missing.");
assert(examplesHub.includes("How to use these examples safely"), "/examples safe-use section is missing.");
assert(examplesHub.includes("Example categories"), "/examples category section is missing.");
assert(examplesHub.includes("Suggested workflow"), "/examples workflow section is missing.");
assert(contactForm.includes('aria-hidden="true"'), "Contact honeypot should be hidden from assistive technology.");
assert(contactForm.includes("tabIndex={-1}"), "Contact honeypot should not be keyboard focusable.");
assert(contactForm.includes('autoComplete="off"'), "Contact honeypot should disable autocomplete.");
assert(!contactForm.includes("Do not fill this out:"), "Contact honeypot warning should not be visible in source copy.");

assert(jsonLd.includes("HomeJsonLd"), "Homepage JSON-LD component is missing.");
assert(jsonLd.includes("GuideJsonLd"), "Guide JSON-LD component is missing.");
assert(jsonLd.includes("ToolJsonLd"), "Tool JSON-LD component is missing.");
assert(schema.includes("SiteNavigationElement"), "SiteNavigationElement schema is missing.");
assert(schema.includes("SoftwareApplication"), "SoftwareApplication schema is missing.");
assert(schema.includes("WebApplication"), "WebApplication schema is missing.");
assert(schema.includes("BreadcrumbList"), "BreadcrumbList schema is missing.");
assert(schema.includes("FAQPage"), "FAQPage schema is missing.");
assert(jsonLd.includes("faqPageSchema"), "JSON-LD component should emit FAQPage when visible FAQ content exists.");
assert(!schema.includes("aggregateRating") && !jsonLd.includes("aggregateRating"), "Structured data must not include invented aggregateRating.");
assert(!schema.includes("ratingValue") && !jsonLd.includes("ratingValue"), "Structured data must not include invented ratingValue.");

assert(sitemap.includes("toolPages.map") && sitemap.includes("guides.map"), "Sitemap is not generated from canonical tools and guides.");
assert(robots.includes("allow: \"/\""), "robots.txt should allow public crawling.");
assert(robots.includes("sitemap:"), "robots.txt should point to sitemap.xml.");

const titleMatches = [
  ...listFiles("app")
    .filter((file) => file.endsWith("page.tsx"))
    .flatMap((file) => [...read(file).matchAll(/createMetadata\(\{\s*title:\s*"([^"]+)"/gs)].map((match) => match[1])),
  ...[...guides.matchAll(/seoTitle:\s*"([^"]+)"/g)].map((match) => match[1]),
  ...[...tools.matchAll(/metaTitle:\s*"([^"]+)"/g)].map((match) => match[1])
];
const duplicates = titleMatches.filter((title, index) => titleMatches.indexOf(title) !== index);
assert(duplicates.length === 0, `Duplicate SEO titles found: ${[...new Set(duplicates)].join(", ")}`);

for (const file of listFiles("app").filter((entry) => entry.endsWith(".tsx"))) {
  const source = read(file).toLowerCase();

  for (const phrase of ["todo", "coming soon", "lorem", "under construction", "test page"]) {
    assert(!source.includes(phrase), `${file} contains placeholder-like phrase: ${phrase}`);
  }
}

for (const route of [
  "/",
  "/tools",
  "/examples",
  "/guides/linkedin-post-length-guide",
  "/guides/seo-title-length-guide",
  "/guides/meta-description-length-checker-guide",
  "/tools/seo-title-checker",
  "/tools/meta-description-checker"
]) {
  const htmlFile = findBuiltHtml(route);

  if (htmlFile) {
    const html = read(htmlFile);
    assert(html.includes("application/ld+json"), `Built HTML for ${route} is missing JSON-LD.`);
    assert(html.includes("canonical"), `Built HTML for ${route} is missing canonical metadata.`);
  }
}

console.log("SEO smoke checks passed.");
