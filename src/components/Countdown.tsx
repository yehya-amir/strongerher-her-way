import { useEffect, useState } from "react";
import { useLang } from "@/i18n";

const TARGET = new Date("2026-06-21T00:00:00Z").getTime();

function diff() {
  const now = Date.now();
  const d = Math.max(0, TARGET - now);
  return {
    days: Math.floor(d / 86400000),
    hours: Math.floor((d / 3600000) % 24),
    minutes: Math.floor((d / 60000) % 60),
    seconds: Math.floor((d / 1000) % 60),
  };
}

export function Countdown() {
  const { t: tr } = useLang();
  const [t, setT] = useState(diff);
  useEffect(() => {
    const i = setInterval(() => setT(diff()), 1000);
    return () => clearInterval(i);
  }, []);

  const cells: [string, number][] = [
    [tr.misc.days, t.days],
    [tr.misc.hours, t.hours],
    [tr.misc.minutes, t.minutes],
    [tr.misc.seconds, t.seconds],
  ];

  return (
    <div className="inline-flex flex-col items-center gap-3">
      <p className="eyebrow">{tr.misc.countdownLabel}</p>
      <div className="grid grid-cols-4 gap-2 sm:gap-3">
        {cells.map(([label, v]) => (
          <div
            key={label}
            className="min-w-[64px] sm:min-w-[80px] rounded-2xl bg-card px-3 py-3 sm:px-4 sm:py-4 text-center shadow-[var(--shadow-soft)] border border-border"
          >
            <div className="font-display text-2xl sm:text-4xl font-semibold text-primary tabular-nums leading-none">
              {String(v).padStart(2, "0")}
            </div>
            <div className="mt-1.5 text-[10px] sm:text-xs uppercase tracking-widest text-muted-foreground">
              {label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
