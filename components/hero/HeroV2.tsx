import { DashboardPreview } from "@/components/dashboard/DashboardPreview";

export function HeroV2() {
  return (
    <section className="min-h-screen bg-white">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 py-24 lg:grid-cols-2">

        {/* Left Side */}

        <div>

          <span className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600">
            Enterprise ERP + AI
          </span>

          <h1 className="mt-8 text-6xl font-bold leading-tight text-slate-900">
            Transform
            <br />
            Operations.
            <br />
            Accelerate
            <br />
            Growth.
          </h1>

          <p className="mt-8 max-w-xl text-xl leading-8 text-slate-600">
            Modern ERP implementation, AI automation,
            and enterprise transformation built for
            ambitious organizations.
          </p>

          <div className="mt-10 flex gap-4">

            <button className="rounded-2xl bg-black px-8 py-4 text-white">
              Book Consultation
            </button>

            <button className="rounded-2xl border border-slate-300 px-8 py-4">
              Explore Solutions
            </button>

          </div>

        </div>

        {/* Right Side */}

        <DashboardPreview />

      </div>
    </section>
  );
}