import { Container } from "@/components/shared/Container";
import { ArrowRight } from "lucide-react";
import { HeroVisual } from "./HeroVisual";

export function Hero() {
  return (
   <section className="bg-[#F7F5F2] pt-12 pb-20">
      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* LEFT CONTENT */}

          <div>

            <span className="text-xs font-semibold uppercase tracking-[0.35em] text-[#B88A44]">
              BUSINESS TRANSFORMATION THROUGH INTELLIGENT ERP SYSTEMS
            </span>

            <h1 className="mt-6 text-6xl font-semibold leading-tight text-slate-900">
              Transform
              <br />
              Operations.
              <br />

              <span className="text-[#B88A44]">
                Accelerate Growth.
              </span>
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-8 text-slate-600">
              We design, implement and optimize enterprise ERP systems that
              connect people, processes and technology—helping organizations
              scale with confidence.
            </p>

            <div className="mt-10 flex gap-4">

              <button className="flex items-center gap-2 rounded-full bg-slate-900 px-7 py-4 text-white transition hover:bg-indigo-700">
                Book Consultation
                <ArrowRight size={18} />
              </button>

              <button className="rounded-full border border-slate-300 bg-white px-7 py-4 transition hover:border-indigo-500">
                Explore Services
              </button>

            </div>

          </div>

          {/* RIGHT VISUAL */}

          <HeroVisual />

        </div>
      </Container>
    </section>
  );
}