import { Logo } from "@/components/shared/Logo";
export function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-gray-200 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <Logo />

        <nav className="hidden items-center gap-8 md:flex">
          <nav className="hidden items-center gap-8 md:flex">
  <a
    href="#"
    className="text-sm font-medium text-slate-600 transition-colors hover:text-slate-900"
  >
    Solutions
  </a>

  <a
    href="#"
    className="text-sm font-medium text-slate-600 transition-colors hover:text-slate-900"
  >
    Industries
  </a>

  <a
    href="#"
    className="text-sm font-medium text-slate-600 transition-colors hover:text-slate-900"
  >
    Products
  </a>

  <a
    href="#"
    className="text-sm font-medium text-slate-600 transition-colors hover:text-slate-900"
  >
    Resources
  </a>

  <a
    href="#"
    className="text-sm font-medium text-slate-600 transition-colors hover:text-slate-900"
  >
    Company
  </a>
</nav>
        </nav>

        <button
  className="rounded-xl bg-black px-6 py-3 text-sm font-medium text-white transition-all hover:scale-105 hover:bg-slate-800"
>
  Book Consultation
</button>
      </div>
    </header>
  );
}