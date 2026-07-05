export function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-gray-200 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <h1 className="text-2xl font-bold tracking-tight">
          Recarna
        </h1>

        <nav className="hidden items-center gap-8 md:flex">
          <a href="#">Solutions</a>
          <a href="#">Industries</a>
          <a href="#">Insights</a>
          <a href="#">Company</a>
        </nav>

        <button className="rounded-xl bg-black px-5 py-3 text-white">
          Book Consultation
        </button>
      </div>
    </header>
  );
}