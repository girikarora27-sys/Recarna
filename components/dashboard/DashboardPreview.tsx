import { MetricCard } from "./MetricCard";

export function DashboardPreview() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      <MetricCard
        title="Revenue"
        value="₹12.8M"
        change="+18.2%"
      />

      <MetricCard
        title="Inventory"
        value="98.6%"
        change="+2.4%"
      />

      <MetricCard
        title="Projects"
        value="128"
        change="+11"
      />

      <MetricCard
        title="AI Insights"
        value="94%"
        change="+8%"
      />
    </div>
  );
}