import { Container } from "@/components/shared/Container";
import { services } from "@/data/services";
import { ServiceCard } from "./ServiceCard";

export function Services() {
  return (
    <section className="bg-[#F7F5F2] py-24">
      <Container>

        {/* Section Heading */}

        <div className="text-center">

          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#B88A44]">
            End-to-End ERP Services
          </p>

          <h2 className="mt-4 text-5xl font-semibold text-slate-900">
            Solutions Tailored for Modern Businesses
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            From ERP implementation to long-term optimization,
            we help organizations streamline operations,
            automate workflows and scale with confidence.
          </p>

        </div>

        {/* Service Cards */}

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          {services.map((service) => (
            <ServiceCard
              key={service.title}
              title={service.title}
              description={service.description}
            />
          ))}

        </div>

      </Container>
    </section>
  );
}