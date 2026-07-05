import { Factory, ShoppingBag, Truck, HeartPulse, Building2, Briefcase } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/shared/Container";

const industries = [
  { icon: Factory, title: "Manufacturing" },
  { icon: ShoppingBag, title: "Retail" },
  { icon: Truck, title: "Distribution" },
  { icon: HeartPulse, title: "Healthcare" },
  { icon: Building2, title: "Construction" },
  { icon: Briefcase, title: "Professional Services" },
];

export function Industries() {
  return (
    <section className="py-24">
      <Container>
        <div className="text-center mb-16">
          <p className="text-sm font-semibold uppercase tracking-widest text-slate-500">
            Industries
          </p>

          <h2 className="mt-4 text-4xl font-bold">
            Built for Every Industry
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-slate-600">
            Every business is unique. Our ERP implementations are tailored to
            industry-specific workflows and operational challenges.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {industries.map((industry) => {
            const Icon = industry.icon;

            return (
              <Card
                key={industry.title}
                className="group rounded-2xl p-8 text-center transition-all hover:-translate-y-2 hover:shadow-xl"
              >
                <Icon className="mx-auto mb-6 h-12 w-12 text-slate-700 transition-transform group-hover:scale-110" />

                <h3 className="text-xl font-semibold">
                  {industry.title}
                </h3>
              </Card>
            );
          })}
        </div>
      </Container>
    </section>
  );
}