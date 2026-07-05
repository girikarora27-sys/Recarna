import { ArrowRight } from "lucide-react";

type ServiceCardProps = {
  title: string;
  description: string;
};

export function ServiceCard({
  title,
  description,
}: ServiceCardProps) {
  return (
    <div className="group rounded-3xl border border-slate-200 bg-white p-8 transition-all duration-300 hover:-translate-y-2 hover:border-[#B88A44] hover:shadow-2xl">

      <div className="mb-6 h-12 w-12 rounded-2xl bg-[#F7F5F2]" />

      <h3 className="text-xl font-semibold text-slate-900">
        {title}
      </h3>

      <p className="mt-4 text-slate-600 leading-7">
        {description}
      </p>

      <div className="mt-8 flex items-center gap-2 font-medium text-[#B88A44]">

        Learn More

        <ArrowRight
          size={16}
          className="transition group-hover:translate-x-1"
        />

      </div>

    </div>
  );
}