import { CheckCircle2 } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/shared/Container";

const features = [
  {
    title: "Deep ERP Expertise",
    description:
      "Years of hands-on experience implementing enterprise ERP solutions.",
  },
  {
    title: "Industry Best Practices",
    description:
      "Solutions designed around proven business processes and scalability.",
  },
  {
    title: "Faster Implementation",
    description:
      "Accelerated delivery using modern development and deployment practices.",
  },
  {
    title: "Long-term Partnership",
    description:
      "Continuous support, optimization, and business consulting after launch.",
  },
];

export function WhyRecarna() {
  return (
    <section className="bg-slate-50 py-24">
      <Container>
        <div className="mb-16 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-slate-500">
            Why Recarna
          </p>

          <h2 className="mt-4 text-4xl font-bold">
            Built Around Business Success
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-slate-600">
            We don't just implement software—we build digital systems that
            help businesses grow efficiently.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {features.map((feature) => (
            <Card
              key={feature.title}
              className="rounded-2xl p-8 transition-all hover:-translate-y-2 hover:shadow-xl"
            >
              <CheckCircle2 className="mb-6 h-10 w-10 text-green-600" />

              <h3 className="text-2xl font-semibold">
                {feature.title}
              </h3>

              <p className="mt-4 text-slate-600">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}