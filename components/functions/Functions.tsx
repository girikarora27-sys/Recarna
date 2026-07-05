import { Container } from "@/components/shared/Container";
import { functions } from "@/data/Functions";
import {
  Briefcase,
  ShoppingCart,
  Warehouse,
  Database,
  Users,
  Package,
  Boxes,
  ClipboardList,
  Truck,
  FolderKanban,
  BarChart3,
  Receipt,
} from "lucide-react";

const icons = [
  Briefcase,
  BarChart3,
  ShoppingCart,
  Package,
  Warehouse,
  Receipt,
  Boxes,
  Users,
 ClipboardList,
  Database,
  Truck,
  FolderKanban,
];

export function Functions() {
  return (
    <section className="bg-slate-950 py-24">
      <Container>

        <div className="text-center">

          <p className="text-sm uppercase tracking-[0.3em] text-[#B88A44] font-semibold">
            Business Functions We Cover
          </p>

          <h2 className="mt-4 text-5xl font-semibold text-white">
            One Unified System.
            <br />
            Every Business Function.
          </h2>

        </div>

        <div className="mt-16 grid grid-cols-2 gap-6 md:grid-cols-4 lg:grid-cols-6">

          {functions.map((item, index) => {

            const Icon = icons[index];

            return (
              <div
                key={item}
                className="group rounded-3xl border border-slate-800 bg-slate-900 p-6 text-center transition-all duration-300 hover:-translate-y-2 hover:border-[#B88A44] hover:bg-slate-800"
              >
                <Icon
                  size={28}
                  className="mx-auto mb-4 text-[#B88A44]"
                />

                <p className="font-medium text-white">
                  {item}
                </p>

              </div>
            );
          })}

        </div>

      </Container>
    </section>
  );
}