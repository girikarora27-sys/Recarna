import { Card } from "@/components/ui/card";
import { Container } from "@/components/shared/Container";

const solutions = [
  {
    title: "ERP Implementation",
    description:
      "End-to-end Odoo ERP implementation tailored to your business processes.",
  },
  {
    title: "Business Automation",
    description:
      "Automate repetitive workflows and improve operational efficiency.",
  },
  {
    title: "Cloud Migration",
    description:
      "Move your ERP securely to the cloud with minimal downtime.",
  },
];

export function Solutions() {
  return (
    <section className="py-24">
      <Container>
        <div className="mb-16 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-slate-500">
            Solutions
          </p>

          <h2 className="mt-4 text-4xl font-bold">
            Everything Your Business Needs
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-slate-600">
            We help organizations modernize operations through ERP,
            automation, cloud technologies, and digital transformation.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {solutions.map((solution) => (
            <Card
              key={solution.title}
              className="rounded-2xl p-8 transition-all hover:-translate-y-2 hover:shadow-xl"
            >
              <h3 className="text-2xl font-semibold">
                {solution.title}
              </h3>

              <p className="mt-4 text-slate-600">
                {solution.description}
              </p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}