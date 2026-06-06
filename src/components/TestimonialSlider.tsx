import { useState } from "react";
import { X } from "lucide-react";

export type Testimonial = {
  name: string;
  badge: string;
  excerpt: string;
  full: string;
};

export function TestimonialSlider({ items }: { items: Testimonial[] }) {
  const [open, setOpen] = useState<Testimonial | null>(null);

  return (
    <>
      <div className="relative">
        <div className="flex gap-5 overflow-x-auto pb-6 px-5 md:px-8 snap-x snap-mandatory scroll-px-5 [scrollbar-width:thin]">
          {items.map((t) => (
            <article
              key={t.name}
              className="snap-start shrink-0 w-[85%] sm:w-[420px] card-soft p-7 flex flex-col"
            >
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-full bg-gradient-to-br from-primary to-primary-deep flex items-center justify-center text-primary-foreground font-display text-lg">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="font-display text-lg text-primary-deep leading-tight">{t.name}</p>
                  <p className="text-xs text-muted-foreground">Bootcamp Member</p>
                </div>
              </div>
              <span className="mt-5 self-start inline-block rounded-full bg-accent px-3 py-1 text-xs font-medium text-primary-deep">
                {t.badge}
              </span>
              <p className="mt-4 text-[15px] leading-relaxed text-foreground/85">
                "{t.excerpt}"
              </p>
              <button
                onClick={() => setOpen(t)}
                className="mt-6 self-start text-sm font-semibold text-primary hover:text-primary-deep underline underline-offset-4 decoration-primary/40"
              >
                Read full story →
              </button>
            </article>
          ))}
        </div>
      </div>

      {open && (
        <div
          className="fixed inset-0 z-50 grid place-items-center bg-primary-deep/60 backdrop-blur-sm p-4"
          onClick={() => setOpen(null)}
        >
          <div
            className="relative max-w-2xl w-full max-h-[85vh] overflow-y-auto bg-card rounded-3xl p-7 sm:p-10 shadow-[var(--shadow-glow)]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setOpen(null)}
              className="absolute top-4 right-4 p-2 rounded-full hover:bg-muted text-muted-foreground"
              aria-label="Close"
            >
              <X size={20} />
            </button>
            <p className="eyebrow">Success Story</p>
            <h3 className="mt-2 text-2xl sm:text-3xl">{open.name}</h3>
            <span className="mt-3 inline-block rounded-full bg-accent px-3 py-1 text-xs font-medium text-primary-deep">
              {open.badge}
            </span>
            <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-foreground/85 whitespace-pre-line">
              {open.full}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
