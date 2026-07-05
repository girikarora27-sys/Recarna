interface MetricCardProps {
  title: string;
  value: string;
  change: string;
}

export function MetricCard({
  title,
  value,
  change,
}: MetricCardProps) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <p className="text-sm text-slate-500">
        {title}
      </p>

      <h3 className="mt-3 text-3xl font-bold text-slate-900">
        {value}
      </h3>

      <p className="mt-2 text-sm font-medium text-emerald-600">
        {change}
      </p>
    </div>
  );
}