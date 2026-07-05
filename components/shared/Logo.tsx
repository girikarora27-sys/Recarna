type LogoProps = {
  compact?: boolean;
};

export function Logo({ compact = false }: LogoProps) {
  if (compact) {
    return (
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900 text-white font-bold">
        R
      </div>
    );
  }

  return (
    <div className="flex items-center gap-3">
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900 text-white font-bold">
        R
      </div>

      <div>
        <p className="text-lg font-semibold tracking-tight text-slate-900">
          Recarna
        </p>

        <p className="text-xs text-slate-500">
          Enterprise ERP Consulting
        </p>
      </div>
    </div>
  );
}