import {
  Boxes,
  Home,
  Settings,
  Users,
  Database,
  BarChart3,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";

const cards = [
  {
    title: "ERP Implementation",
    desc: "From planning to go-live",
  },
  {
    title: "Process Automation",
    desc: "Streamline operations",
  },
  {
    title: "Customization",
    desc: "Built for your business",
  },
  {
    title: "Data Migration",
    desc: "Secure & seamless",
  },
  {
    title: "Integration",
    desc: "Connect systems",
  },
  {
    title: "Reporting & Analytics",
    desc: "Insightful decisions",
  },
  {
    title: "User Training",
    desc: "Empower your teams",
  },
  {
    title: "Support & Maintenance",
    desc: "Continuous support",
  },
  {
    title: "Performance Optimization",
    desc: "Drive efficiency",
  },
];

const icons = [
  Boxes,
  Home,
  Database,
  Users,
  Settings,
  BarChart3,
  ShieldCheck,
];

export function HeroVisual() {
  return (
    <div className="overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-2xl">

      <div className="flex">

        {/* Sidebar */}

        <div className="flex w-20 flex-col items-center gap-7 bg-slate-950 py-8">

          {icons.map((Icon, index) => (
            <Icon
              key={index}
              size={20}
              className="text-[#C8A35F]"
            />
          ))}

        </div>

        {/* Content */}

        <div className="flex-1 p-8">

          {/* Header */}

          <div className="mb-8 flex items-start justify-between">

            <div>

              <h3 className="text-2xl font-semibold text-slate-900">
                We Help You Implement
              </h3>

              <p className="mt-1 text-4xl font-semibold text-[#B88A44]">
                Smarter ERP Solutions
              </p>

            </div>

            <div className="text-right">

              <p className="text-xs uppercase tracking-widest text-slate-400">
                System Status
              </p>

              <p className="mt-2 text-sm font-medium text-green-600">
                ● All Systems Operational
              </p>

            </div>

          </div>

          {/* Cards */}

          <div className="grid grid-cols-3 gap-4">

            {cards.map((card) => (
              <div
                key={card.title}
                className="rounded-2xl border border-slate-200 bg-white p-5 transition duration-300 hover:-translate-y-1 hover:border-[#B88A44] hover:shadow-xl"
              >
                <h4 className="text-sm font-semibold text-slate-900">
                  {card.title}
                </h4>

                <p className="mt-2 text-xs leading-5 text-slate-500">
                  {card.desc}
                </p>

              </div>
            ))}

          </div>

          {/* Bottom */}

          <div className="mt-6 flex items-center justify-between rounded-2xl border border-slate-200 bg-slate-50 px-6 py-5">

            <div>

              <h4 className="font-semibold text-slate-900">
                Business Intelligence
              </h4>

              <p className="mt-1 text-sm text-slate-500">
                Unified reporting and decision-ready insights.
              </p>

            </div>

            <button className="flex items-center gap-2 font-medium text-[#B88A44]">
              Learn More
              <ArrowRight size={16} />
            </button>

          </div>

        </div>

      </div>

    </div>
  );
}