import Link from "next/link";
import { Logo } from "@/components/Logo";
import { siteConfig } from "@/lib/seo";

const legalLinks = [
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms" },
  { href: "/cookie-policy", label: "Cookie Policy" },
  { href: "/disclaimer", label: "Disclaimer" },
  { href: "/contact", label: "Contact" }
];

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white/80 dark:border-slate-800 dark:bg-slate-950/80">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 md:grid-cols-[1.2fr_1fr] lg:px-8">
        <div>
          <Logo />
          <p className="mt-4 max-w-xl text-sm leading-6 text-slate-600 dark:text-slate-400">
            {siteConfig.slogan} TextPulses provides browser-based writing metrics, channel
            fit checks, and practical estimates for planning content.
          </p>
          <p className="mt-4 text-xs leading-5 text-slate-500 dark:text-slate-500">
            Estimates are provided for convenience and may vary depending on language,
            formatting, and reading speed.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <h2 className="text-sm font-bold text-slate-950 dark:text-white">Product</h2>
            <div className="mt-3 grid gap-2 text-sm">
              <Link className="text-slate-600 hover:text-pulse-blue dark:text-slate-400" href="/#tool">
                Word counter
              </Link>
              <Link className="text-slate-600 hover:text-pulse-blue dark:text-slate-400" href="/#publishfit">
                PublishFit Score
              </Link>
              <Link className="text-slate-600 hover:text-pulse-blue dark:text-slate-400" href="/about">
                About TextPulses
              </Link>
            </div>
          </div>
          <div>
            <h2 className="text-sm font-bold text-slate-950 dark:text-white">Trust</h2>
            <div className="mt-3 grid gap-2 text-sm">
              {legalLinks.map((item) => (
                <Link key={item.href} className="text-slate-600 hover:text-pulse-blue dark:text-slate-400" href={item.href}>
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-slate-200 px-4 py-5 text-center text-xs text-slate-500 dark:border-slate-800 dark:text-slate-500">
        &copy; {new Date().getFullYear()} TextPulses. Free browser-based text analysis.
      </div>
    </footer>
  );
}
