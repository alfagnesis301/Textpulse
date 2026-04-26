type MetricsCardProps = {
  label: string;
  value: string | number;
  helper?: string;
  title?: string;
};

export function MetricsCard({ label, value, helper, title }: MetricsCardProps) {
  return (
    <article
      className="rounded-2xl border border-slate-200 bg-white/82 p-4 shadow-sm hover:-translate-y-0.5 hover:shadow-soft dark:border-slate-800 dark:bg-slate-900/82"
      title={title}
    >
      <div className="text-xs font-bold uppercase tracking-[0.14em] text-slate-500 dark:text-slate-400">
        {label}
      </div>
      <div className="mt-2 text-2xl font-extrabold tracking-tight text-slate-950 dark:text-white">
        {value}
      </div>
      {helper ? <p className="mt-1 text-xs leading-5 text-slate-500 dark:text-slate-400">{helper}</p> : null}
    </article>
  );
}
