import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useLang } from "@/i18n";

import boat from "@/assets/comm-ar-boat.jpg.asset.json";
import firstClass from "@/assets/comm-ar-firstclass.jpg.asset.json";
import gettingThere from "@/assets/comm-both-gettingthere.jpg.asset.json";
import iftars from "@/assets/comm-both-iftars.jpg.asset.json";
import seeYou from "@/assets/comm-both-seeyou.jpg.asset.json";
import fasting from "@/assets/comm-en-fasting-v2.jpg.asset.json";
import peer from "@/assets/comm-en-peerpressure.jpg.asset.json";

type Shot = { src: string; alt: string; langs: ("en" | "ar")[] };

const SHOTS: Shot[] = [
  { src: peer.url, alt: "Members holding each other accountable", langs: ["en"] },
  { src: fasting.url, alt: "Member sharing first time exercising while fasting", langs: ["en"] },
  { src: firstClass.url, alt: "Member after her first class", langs: ["ar"] },
  { src: boat.url, alt: "Member sharing her iftar plate and 12,000 steps", langs: ["ar"] },
  { src: seeYou.url, alt: "Member thanking coach for the live session", langs: ["en", "ar"] },
  { src: gettingThere.url, alt: "Great session — I'm getting there", langs: ["en", "ar"] },
  { src: iftars.url, alt: "Members sharing healthy iftar plates", langs: ["en", "ar"] },
];

export function CommunityScreenshots() {
  const { lang } = useLang();
  const items = SHOTS.filter((s) => s.langs.includes(lang));
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  const scrollTo = (i: number) => {
    const el = scrollerRef.current;
    if (!el) return;
    const card = el.children[i] as HTMLElement | undefined;
    if (card) el.scrollTo({ left: card.offsetLeft - el.offsetLeft, behavior: "smooth" });
  };

  const step = (dir: 1 | -1) => {
    const next = Math.max(0, Math.min(items.length - 1, active + dir));
    setActive(next);
    scrollTo(next);
  };

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    const onScroll = () => {
      const center = el.scrollLeft + el.clientWidth / 2;
      let bestIdx = 0;
      let bestDist = Infinity;
      Array.from(el.children).forEach((c, i) => {
        const node = c as HTMLElement;
        const mid = node.offsetLeft - el.offsetLeft + node.clientWidth / 2;
        const d = Math.abs(center - mid);
        if (d < bestDist) { bestDist = d; bestIdx = i; }
      });
      setActive(bestIdx);
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, [items.length]);

  return (
    <div className="relative">
      {/* Desktop arrows */}
      <button
        type="button"
        onClick={() => step(-1)}
        aria-label="Previous"
        className="hidden md:grid absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 z-10 w-11 h-11 rounded-full bg-card border border-border shadow-md place-items-center text-primary-deep hover:bg-primary hover:text-primary-foreground transition-colors disabled:opacity-30"
        disabled={active === 0}
      >
        <ChevronLeft size={22} />
      </button>
      <button
        type="button"
        onClick={() => step(1)}
        aria-label="Next"
        className="hidden md:grid absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 z-10 w-11 h-11 rounded-full bg-card border border-border shadow-md place-items-center text-primary-deep hover:bg-primary hover:text-primary-foreground transition-colors disabled:opacity-30"
        disabled={active === items.length - 1}
      >
        <ChevronRight size={22} />
      </button>

      <div
        ref={scrollerRef}
        dir="ltr"
        className="flex gap-4 sm:gap-6 overflow-x-auto snap-x snap-mandatory pb-6 px-[10%] sm:px-[15%] md:px-[20%] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {items.map((s, i) => (
          <figure
            key={s.src}
            className="snap-center shrink-0 w-[80%] sm:w-[60%] md:w-[42%] lg:w-[32%]"
          >
            <div className="relative rounded-[2rem] border-[10px] border-primary-deep bg-primary-deep shadow-[var(--shadow-glow)] overflow-hidden">
              <img
                src={s.src}
                alt={s.alt}
                className="block w-full h-auto select-none"
                draggable={false}
                loading={i < 2 ? "eager" : "lazy"}
              />
            </div>
          </figure>
        ))}
      </div>

      {/* Dots */}
      <div className="mt-2 flex justify-center gap-2">
        {items.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => { setActive(i); scrollTo(i); }}
            aria-label={`Go to screenshot ${i + 1}`}
            className={`h-2 rounded-full transition-all ${
              i === active ? "w-6 bg-primary" : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/60"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
