import Link from "next/link";
import { Logo } from "@/components/Logo";

const navItems = [
  { href: "/#tool", label: "Word counter" },
  { href: "/#publishfit", label: "PublishFit Score" },
  { href: "/guides", label: "Writing guides" },
  { href: "/methodology", label: "Methodology" },
  { href: "/about", label: "About TextPulses" },
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms" },
  { href: "/cookie-policy", label: "Cookie Policy" },
  { href: "/disclaimer", label: "Disclaimer" },
  { href: "/contact", label: "Contact" }
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/70 bg-white/92 backdrop-blur-xl dark:border-slate-800 dark:bg-slate-950/92">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 pt-3 sm:px-6 lg:px-8">
        <Link href="/" aria-label="TextPulses home">
          <Logo />
        </Link>
      </div>
      <div className="mx-auto max-w-7xl px-4 pb-3 pt-2 sm:px-6 lg:px-8">
        <nav
          className="flex gap-1 overflow-x-auto whitespace-nowrap pb-1"
          aria-label="Primary navigation"
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-100 hover:text-slate-950 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
