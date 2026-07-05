import { Container } from "@/components/shared/Container";

export function TrustedBy() {
  const companies = [
    "Odoo",
    "ErpNext",
    "ZOHO",
    "Salesorce",
    "MSDynamics",
  ];

  return (
    <section className="border-y bg-slate-50 py-16">
      <Container>
        <p className="mb-10 text-center text-sm font-medium uppercase tracking-widest text-slate-500">
          Trusted Technology Ecosystem
        </p>

        <div className="flex flex-wrap items-center justify-center gap-10">
          {companies.map((company) => (
            <div
              key={company}
              className="text-xl font-semibold text-slate-400 transition-colors hover:text-slate-900"
            >
              {company}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}