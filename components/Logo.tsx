type LogoProps = {
  variant?: "horizontal" | "icon";
  className?: string;
  labelClassName?: string;
};

export function Logo({ variant = "horizontal", className = "", labelClassName = "" }: LogoProps) {
  return (
    <div className={`inline-flex items-center gap-3 ${className}`} aria-label="TextPulse">
      <svg
        className="h-10 w-10 shrink-0"
        viewBox="0 0 48 48"
        role="img"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="textpulse-mark-gradient" x1="7" y1="7" x2="41" y2="41">
            <stop offset="0" stopColor="#2563EB" />
            <stop offset="1" stopColor="#7C3AED" />
          </linearGradient>
        </defs>
        <rect width="48" height="48" rx="14" fill="url(#textpulse-mark-gradient)" />
        <path
          d="M13 14h18M22 14v20"
          stroke="white"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12 31h7l3-7 5 13 4-10h5"
          fill="none"
          stroke="white"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      {variant === "horizontal" ? (
        <span className={`text-xl font-extrabold tracking-tight text-slate-950 dark:text-white ${labelClassName}`}>
          TextPulse
        </span>
      ) : null}
    </div>
  );
}
