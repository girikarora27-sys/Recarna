import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Logo } from "@/components/shared/Logo";
import { Container } from "@/components/shared/Container";

export function Navbar() {
  const navItems = [
    { name: "Home", href: "#" },
    { name: "Services", href: "#" },
    { name: "ERP Modules", href: "#" },
    { name: "Industries", href: "#" },
    { name: "Insights", href: "#" },
    { name: "About", href: "#" },
    { name: "Contact", href: "#" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/80 backdrop-blur-xl">
      <Container>
        <div className="flex h-20 items-center justify-between">

          <Logo />

          <nav className="hidden items-center gap-8 lg:flex">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-slate-700 transition hover:text-indigo-600"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <button className="hidden items-center gap-2 rounded-full bg-slate-900 px-6 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 lg:flex">
            Book Consultation
            <ArrowRight size={16} />
          </button>

        </div>
      </Container>
    </header>
  );
}