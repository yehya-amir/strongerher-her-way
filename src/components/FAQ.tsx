import { useState } from "react";
import { Plus, Minus } from "lucide-react";

export type FAQItem = { q: string; a: string };

export function FAQ({ items }: { items: FAQItem[] }) {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <div className="space-y-3">
      {items.map((it, i) => {
        const isOpen = open === i;
        return (
          <div
            key={i}
            className="rounded-2xl border border-border bg-card overflow-hidden transition-shadow"
            style={isOpen ? { boxShadow: "var(--shadow-soft)" } : undefined}
          >
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              className="w-full flex items-start justify-between gap-4 text-left px-5 sm:px-7 py-5"
              aria-expanded={isOpen}
            >
              <span className="font-display text-lg sm:text-xl text-primary-deep">{it.q}</span>
              <span className="shrink-0 mt-1 text-primary">
                {isOpen ? <Minus size={20} /> : <Plus size={20} />}
              </span>
            </button>
            {isOpen && (
              <div className="px-5 sm:px-7 pb-6 -mt-1 text-[15px] leading-relaxed text-foreground/85 whitespace-pre-line">
                {it.a}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
