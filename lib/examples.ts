export type ExamplePage = {
  slug: string;
  title: string;
  description: string;
  toolHref: string;
  rows: { before: string; after: string; why: string }[];
};

const why = "The revised version is more specific, removes filler, and gives the reader a clearer reason to continue.";

export const examplePages: ExamplePage[] = [
  {
    slug: "seo-title-examples",
    title: "SEO Title Examples",
    description: "Original before and after SEO title examples with practical editing notes.",
    toolHref: "/tools/seo-title-checker",
    rows: [
      {
        before: "Best Project Software For Everyone",
        after: "Project Planning Software for Small Creative Teams",
        why: "The before title makes a broad best-for-everyone claim that is hard to support and does not name a useful audience. The after version narrows the reader to small creative teams, which better matches comparison or product-intent searches. It avoids an exaggerated superlative, but this pattern is not right if the page truly compares enterprise software."
      },
      {
        before: "Tips for Better Website Content and SEO",
        after: "Website Content Checklist for Service Pages",
        why: "The before title is vague because tips, content, and SEO could describe thousands of pages. The after version names a concrete format and use case: a checklist for service pages. It helps readers looking for a practical workflow, but it should not be used if the page is only a broad opinion article."
      },
      {
        before: "Our New Product Is Finally Here",
        after: "Launch Notes: Faster Team Scheduling for Agencies",
        why: "The before title centers the publisher rather than the searcher and hides what changed. The after version states the page type, feature benefit, and audience in one line. It avoids vague launch hype, but it only works when the page actually contains launch notes or release details."
      },
      {
        before: "Affordable Consultant in Your Area",
        after: "Operations Consultant for Growing Austin Teams",
        why: "The before title is generic and could look duplicated across local pages. The after version adds specialty, audience, and location, which supports local service intent. It avoids thin location swapping, but it should not be used unless the page genuinely serves Austin teams."
      },
      {
        before: "Complete Guide to Email Marketing",
        after: "Email Marketing Guide for Small Retail Brands",
        why: "The before title overpromises completeness and does not explain who the guide is for. The after version keeps the guide format while narrowing the audience to small retail brands. It reduces broad keyword competition, but it is not suitable for a general encyclopedia-style guide."
      },
      {
        before: "Improve Your Writing Today",
        after: "Readability Checker for Web Drafts",
        why: "The before title is motivational but does not describe the tool or task. The after version names the feature and the draft type, helping users who want a checker rather than generic writing advice. It avoids vagueness, but it would be too narrow for a page about editing services."
      },
      {
        before: "Everything About Remote Work",
        after: "Remote Work Policy Template for Hybrid Teams",
        why: "The before title is too broad and risks promising coverage the page cannot deliver. The after version identifies a template and a hybrid-team use case, which matches readers looking for a practical document. Do not use this pattern if the page does not provide an actual template or policy structure."
      },
      {
        before: "The Ultimate CRM Comparison",
        after: "CRM Comparison Checklist for Nonprofits",
        why: "The before title leans on a common exaggerated phrase and gives no selection criteria. The after title turns the page into a checklist for nonprofits, making the evaluation context clearer. It avoids empty authority claims, but it should not be used for a vendor-neutral comparison unless nonprofit needs are actually covered."
      },
      {
        before: "New Features and Updates",
        after: "May Product Update: Export Cleaner Reports",
        why: "The before title is easy to duplicate across monthly update pages and does not reveal the change. The after version adds date context and the main feature improvement. It helps readers looking for release details, but it should be changed if several updates share equal importance."
      },
      {
        before: "How to Make More Sales",
        after: "Sales Page Copy Review Checklist",
        why: "The before title makes a broad outcome promise that the page may not be able to prove. The after version reframes the page as a review checklist for sales-page copy, which is more specific and safer. It avoids a guarantee-style claim, but it is not ideal for a case study with measured sales results."
      }
    ]
  },
  {
    slug: "meta-description-examples",
    title: "Meta Description Examples",
    description: "Original before and after meta description examples for clearer snippets.",
    toolHref: "/tools/meta-description-checker",
    rows: [
      ["We help teams do more with our platform.", "Plan weekly work, assign owners, and export simple status reports from one private workspace."],
      ["Read this guide about better titles.", "Learn practical title length checks, common mistakes, and examples you can adapt before publishing."],
      ["Our services are high quality and affordable.", "Compare operations consulting options for small teams that need clearer workflows and reporting."],
      ["This page explains the product.", "See how the scheduler works, what it stores locally, and when it fits a small agency."],
      ["Everything you need to know is here.", "Review word count, readability, and repetition signals before your next article goes live."],
      ["Sign up for our webinar now.", "Join a 30-minute workflow session for editors preparing repeatable content checklists."],
      ["A guide to policies.", "Use this practical checklist to make internal policy drafts easier to scan and review."],
      ["The best tool for creators.", "Check YouTube titles, descriptions, and repeated terms before publishing your next video."],
      ["Improve emails quickly.", "Test subject length, preview clarity, and risky urgency before sending a newsletter."],
      ["Learn about reports.", "Download a local Publish Readiness Report with length, readability, and scanability signals."]
    ].map(([before, after]) => ({ before, after, why }))
  },
  {
    slug: "linkedin-post-examples",
    title: "LinkedIn Post Examples",
    description: "Original LinkedIn post before and after examples for clearer professional updates.",
    toolHref: "/tools/linkedin-post-checker",
    rows: [
      ["Big news!!! We launched something amazing.", "We shipped a scheduling update today. It helps project leads see owner gaps before Monday planning."],
      ["Hiring now apply below.", "We are hiring a support specialist who likes clear docs, calm queues, and practical customer follow-up."],
      ["Our team had a great week.", "This week we replaced three manual report steps with one export. The useful lesson: fix the repeated task first."],
      ["Thought leadership matters.", "A practical note for founders: if your launch post needs five claims, the product page probably needs one clearer promise."],
      ["Join my webinar.", "I am hosting a 30-minute editing session on turning long drafts into publishable checklists."],
      ["AI will change everything.", "A more useful question: which writing decisions should stay human even when tools speed up the draft?"],
      ["Here are some tips.", "Three checks I run before publishing: opening clarity, repeated terms, and whether the reader knows the next step."],
      ["We won an award.", "Our support team was recognized for response quality. The process behind it was simpler templates and weekly review."],
      ["New blog post.", "I published a guide on readability signals for teams that edit technical pages before launch."],
      ["Thanks to everyone.", "Thank you to the beta users who flagged confusing labels. Your notes shaped the final checklist."]
    ].map(([before, after]) => ({ before, after, why }))
  },
  {
    slug: "email-subject-line-examples",
    title: "Email Subject Line Examples",
    description: "Original email subject line examples with safer before and after edits.",
    toolHref: "/tools/email-subject-line-checker",
    rows: [
      ["Important update you need now", "Your May workspace export is ready"],
      ["Open this before it is too late", "Reminder: workflow session starts Thursday"],
      ["Newsletter number 42", "3 editing checks before publishing a guide"],
      ["Huge announcement from our team", "New report export for project leads"],
      ["Question for you", "Can we improve your onboarding checklist?"],
      ["Don't miss this amazing offer", "20% off annual plans through Friday"],
      ["Product update", "May update: cleaner reports and faster search"],
      ["We need your feedback immediately", "Two-minute survey about draft review tools"],
      ["Your account", "Security settings changed for your account"],
      ["Webinar tomorrow", "Tomorrow: live readability review session"]
    ].map(([before, after]) => ({ before, after, why }))
  },
  {
    slug: "youtube-description-examples",
    title: "YouTube Description Examples",
    description: "Original YouTube description before and after examples for clearer video summaries.",
    toolHref: "/tools/youtube-title-description-checker",
    rows: [
      ["Watch this video about our new tool.", "In this walkthrough, we check a draft title, review repeated terms, and export a local readiness report."],
      ["This tutorial explains everything.", "Learn how to structure a short product demo with a clear problem, example, and next step."],
      ["Subscribe and like.", "If this checklist helps, subscribe for practical editing workflows and browser-based writing tools."],
      ["Here is my interview.", "A conversation with an operations lead about clearer handoffs, weekly planning, and useful team notes."],
      ["New episode is live.", "This episode covers three readability signals that often make technical pages easier to scan."],
      ["We test software.", "I compare two planning workflows using the same fictional project brief and review checklist."],
      ["Marketing tips.", "Five cautious copy checks for launch pages: clarity, proof, repetition, length, and next action."],
      ["Full webinar replay.", "Replay of a 30-minute session on preparing a blog draft for editorial review before publishing."],
      ["Quick update.", "A short update on exported reports, local analysis, and what changed in the latest tool version."],
      ["Description goes here.", "Use this section to summarize the video, name the viewer benefit, and link to the related checklist."]
    ].map(([before, after]) => ({ before, after, why }))
  }
];

export function getExamplePage(slug: string) {
  return examplePages.find((page) => page.slug === slug);
}
