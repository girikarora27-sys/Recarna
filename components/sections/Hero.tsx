export function Hero() {
  return (
    <section className="flex min-h-screen items-center bg-white pt-20">
      <div className="mx-auto max-w-7xl px-6">
        <span className="rounded-full border border-slate-300 px-4 py-2 text-sm text-slate-600">
          Enterprise ERP Consulting
        </span>

        <h1 className="mt-8 max-w-4xl text-6xl font-bold leading-tight text-slate-900 md:text-7xl">
          Digital Transformation
          <br />
          Built for
          <br />
          Modern Businesses
        </h1>

        <p className="mt-8 max-w-2xl text-xl text-slate-600">
          We help manufacturers, distributors, retailers, and enterprises
          implement ERP solutions that streamline operations, increase
          efficiency, and accelerate growth.
        </p>

        <div className="mt-10 flex gap-4">
          <button className="rounded-xl bg-black px-8 py-4 text-white hover:bg-slate-800">
            Book Consultation
          </button>

          <button className="rounded-xl border border-slate-300 px-8 py-4 hover:bg-slate-100">
            Explore Solutions
          </button>
        </div>
      </div>
    </section>
  );
}