import { Container } from "@/components/shared/Container";

const technologies = [
  "Odoo",
  "ERPNext",
  "Salesforce",
  "Zoho",
  "Microsoft Dynamics 365",
  "AWS",
  "Claude",
];

export function TechnologyStrip() {
  return (
    <section className="border-y border-slate-200 bg-white py-10">
      <Container>
        <p className="mb-8 text-center text-xs font-semibold uppercase tracking-[0.35em] text-[#B88A44]">
          Technologies We Work With
        </p>

        <div className="flex flex-wrap items-center justify-center gap-10">
          {technologies.map((tech) => (
            <div
              key={tech}
              className="rounded-full border border-slate-200 px-6 py-3 text-sm font-semibold text-slate-700 transition-all duration-300 hover:-translate-y-1 hover:border-[#B88A44] hover:text-[#B88A44] hover:shadow-lg"
            >
              {tech}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}