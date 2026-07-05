import { Container } from "@/components/shared/Container";
export function Hero() {
  return (
    <section className="flex min-h-screen items-center bg-white pt-24">
      <Container>
        <span className="inline-flex rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-700">
          Enterprise ERP Consulting
        </span>

        <h1 className="mt-8 max-w-4xl text-5xl font-bold leading-tight tracking-tight md:text-7xl">
          Digital Transformation
          <br />
          Built for
          <br />
          Modern Businesses
        </h1>

       <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-600 md:text-xl">
          We help manufacturers, distributors, retailers, and enterprises
          implement ERP solutions that streamline operations, increase
          efficiency, and accelerate growth.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <button className="rounded-xl border border-slate-300 bg-white px-8 py-4 font-medium transition-all hover:border-slate-900 hover:bg-slate-100">
            Book Consultation
          </button>

          <button className="rounded-xl border border-slate-300 px-8 py-4 hover:bg-slate-100">
            Explore Solutions
          </button>
        </div>
      </Container>
    </section>
  );
}