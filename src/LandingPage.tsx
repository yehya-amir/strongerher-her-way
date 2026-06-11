import {
  Check,
  Lock,
  Heart,
  Users,
  Dumbbell,
  Sparkles,
  Calendar,
  Video,
  MessageCircle,
  ShieldCheck,
  Clock,
  Instagram,
  Play,
  Languages,
} from "lucide-react";

import dumbbell from "@/assets/coach-hebah-dumbbell.jpg";
import coaching from "@/assets/coaching-setup.jpg";
import nutrition from "@/assets/nutrition-bowl.jpg";
import coachDeskAsset from "@/assets/coach-hebah-desk.jpg.asset.json";
import logoAsset from "@/assets/strongerher-logo.png.asset.json";
import coachBeforeLabAsset from "@/assets/coach-before-lab-v2.jpg.asset.json";
import coachBeforeRainbowAsset from "@/assets/coach-before-rainbow-v2.jpg.asset.json";
import coachCurrentDumbbellAsset from "@/assets/coach-current-dumbbell.png.asset.json";
import coachCurrentLivingRoomAsset from "@/assets/coach-current-living-room.jpg.asset.json";
import salesVideoEnAsset from "@/assets/sales-video-en.mp4.asset.json";
import salesVideoArAsset from "@/assets/sales-video-ar.mp4.asset.json";
import videoThumbEnAsset from "@/assets/video-thumb-en.png.asset.json";
import videoThumbArAsset from "@/assets/video-thumb-ar.png.asset.json";

import { Countdown } from "@/components/Countdown";
import { TestimonialSlider } from "@/components/TestimonialSlider";
import { FAQ, type FAQItem } from "@/components/FAQ";
import { CommunityMockup } from "@/components/CommunityMockup";
import { CommunityScreenshots } from "@/components/CommunityScreenshots";
import { StickyMobileCTA } from "@/components/StickyMobileCTA";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import {
  useLang,
  STRIPE_URL,
  INSTAGRAM_URL,
  INSTAGRAM_HANDLE,
  testimonialsEn,
  testimonialsAr,
} from "@/i18n";


const includedIcons = [Video, MessageCircle, Sparkles, Play, Heart, Check, Users, Calendar];

export default function LandingPage() {
  const { t, lang } = useLang();
  const testimonials = lang === "ar" ? testimonialsAr : testimonialsEn;
  const salesVideo = lang === "ar" ? salesVideoArAsset.url : salesVideoEnAsset.url;
  const videoPoster = lang === "ar" ? videoThumbArAsset.url : videoThumbEnAsset.url;
  const beforePhotos = [
    { src: coachBeforeLabAsset.url, caption: t.coach.photoCaptions[0] },
    { src: coachBeforeRainbowAsset.url, caption: t.coach.photoCaptions[1] },
  ];
  const todayPhotos = [
    { src: coachCurrentDumbbellAsset.url, caption: t.coach.photoCaptions[2] },
    { src: coachCurrentLivingRoomAsset.url, caption: t.coach.photoCaptions[3] },
  ];

  const faqItems: FAQItem[] = t.faqs.map((f) => ({ q: f.q, a: f.a }));
  const compareRows = t.compare.rows.map((label, i) => {
    const isRecordings = i === t.compare.rows.length - 1;
    return [label, true, isRecordings] as [string, boolean, boolean];
  });

  return (
    <main className="bg-background text-foreground overflow-x-hidden">
      {/* NAV */}
      <header className="relative z-30 bg-background/80 backdrop-blur-sm border-b border-border/50">
        <div className="container-narrow flex items-center justify-between py-3 sm:py-4 gap-3">
          <a href="#top" className="flex items-center shrink-0">
            <img
              src={logoAsset.url}
              alt="StrongerHer — Fitness & Nutrition for Women"
              className="h-14 sm:h-20 w-auto"
            />
          </a>
          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Instagram ${INSTAGRAM_HANDLE}`}
              className="inline-flex items-center gap-1.5 text-sm text-primary-deep hover:text-primary transition-colors"
            >
              <Instagram size={20} />
              <span className="hidden sm:inline">{INSTAGRAM_HANDLE}</span>
            </a>
            <a
              href={t.nav.switchHref}
              className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-5 sm:px-6 py-3 text-base sm:text-lg font-bold shadow-md hover:shadow-lg hover:scale-105 transition-all"
              aria-label={`Switch to ${t.nav.switchTo}`}
            >
              <Languages size={20} />
              {t.nav.switchTo}
            </a>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section id="top" className="relative pt-6 pb-8 md:pt-10 md:pb-12">
        <div aria-hidden className="absolute top-0 right-0 w-[60%] h-[60%] rounded-bl-[40%] bg-gradient-to-br from-accent/60 via-blush/30 to-transparent -z-10" />
        <div className="container-narrow max-w-3xl text-center">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-medium leading-[1.1]">{t.hero.h1}</h1>

          {/* Above-video CTA (mobile-priority) */}
          <div className="mt-5 sm:mt-6">
            <a href="#checkout" className="btn-primary">{t.hero.cta}</a>
          </div>

          {/* Sales video */}
          <div className="mt-5 sm:mt-7">
            <div className="relative aspect-square rounded-2xl overflow-hidden border border-border bg-primary-deep shadow-[var(--shadow-glow)] max-w-3xl mx-auto">
              <video
                key={salesVideo}
                src={salesVideo}
                poster={videoPoster}
                controls
                playsInline
                preload="metadata"
                className="w-full h-full object-cover block"
              />
            </div>
          </div>

          <p className="mt-5 sm:mt-6 text-base sm:text-lg text-foreground/80 max-w-2xl mx-auto">{t.hero.p1}</p>
          <p className="mt-3 text-sm sm:text-base text-muted-foreground italic max-w-xl mx-auto">{t.hero.p2}</p>

          <div className="mt-6">
            <a href="#checkout" className="btn-primary">{t.hero.cta}</a>
          </div>

          {/* Gold announcement banner */}
          <div className="mt-6 rounded-2xl bg-gold text-primary-deep px-5 py-4 shadow-[var(--shadow-card)] font-display text-lg sm:text-2xl font-semibold tracking-wide">
            {t.hero.bannerStart}
          </div>

          <div className="mt-6 flex flex-col items-center gap-3">
            <p className="text-sm sm:text-base font-medium text-primary-deep">{t.hero.bootcampStartsIn}</p>
            <Countdown showLabel={false} />
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="success-stories" className="section-pad bg-gradient-to-b from-accent/40 to-background">
        <div className="container-narrow text-center mb-6">
          <h2 className="text-3xl sm:text-4xl md:text-5xl">{t.stories.h2}</h2>
        </div>
        <div className="max-w-6xl mx-auto">
          <TestimonialSlider items={testimonials} />
        </div>
      </section>

      {/* RESULTS */}
      <section id="results" className="section-pad">
        <div className="container-narrow">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl">{t.results.h2}</h2>
          </div>
          <ul className="mt-8 grid sm:grid-cols-2 gap-3 max-w-4xl mx-auto">
            {t.results.items.map((r) => (
              <li key={r} className="card-soft p-5 flex gap-3 items-start">
                <span className="shrink-0 mt-0.5 w-8 h-8 rounded-full bg-primary text-primary-foreground grid place-items-center">
                  <Check size={16} />
                </span>
                <span className="text-[15px] leading-relaxed">{r}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* MID-PAGE CTA */}
      <section className="py-8 md:py-10">
        <div className="container-narrow">
          <div className="card-soft text-center p-6 sm:p-10 bg-gradient-to-br from-accent/60 via-blush/30 to-card">
            <h3 className="font-display text-2xl sm:text-3xl text-primary-deep">{t.midCta.title}</h3>
            <p className="mt-2 text-foreground/75 max-w-xl mx-auto">{t.midCta.sub}</p>
            <div className="mt-5">
              <a href={STRIPE_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">{t.hero.cta}</a>
            </div>
          </div>
        </div>
      </section>

      {/* THREE PILLARS */}
      <section id="program" className="section-pad bg-gradient-to-b from-background via-accent/30 to-background">
        <div className="container-narrow">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl">{t.pillars.h2}</h2>
          </div>
          <div className="mt-10 space-y-12 md:space-y-16">
            <Pillar imgSrc={dumbbell} imgAlt="Coach Hebah with dumbbell" eyebrow={t.pillars.one.eyebrow} title={t.pillars.one.title} body={t.pillars.one.body} />
            <Pillar imgSrc={coaching} imgAlt="Online nutrition coaching setup" eyebrow={t.pillars.two.eyebrow} title={t.pillars.two.title} reverse body={t.pillars.two.body} />
            <Pillar imgSrc={coachDeskAsset.url} imgAlt="Coach Hebah at her desk" eyebrow={t.pillars.three.eyebrow} title={t.pillars.three.title} body={t.pillars.three.body} />
          </div>

          {/* Community screenshots carousel */}
          <div className="mt-12 md:mt-16">
            <CommunityScreenshots />
          </div>

          <div className="mt-10 text-center">
            <a href="#checkout" className="btn-primary">{t.hero.cta}</a>
          </div>
        </div>
      </section>

      {/* INCLUDED */}
      <section id="included" className="section-pad">
        <div className="container-narrow">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl">{t.included.h2}</h2>
          </div>
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {t.included.items.map((title, i) => {
              const Icon = includedIcons[i] ?? Check;
              return (
                <div key={title} className="card-soft p-5 text-center">
                  <div className="mx-auto w-11 h-11 rounded-full bg-accent grid place-items-center text-primary">
                    <Icon size={20} />
                  </div>
                  <p className="mt-3 font-display text-base text-primary-deep leading-snug">{title}</p>
                </div>
              );
            })}
          </div>
          <div className="mt-8 text-center">
            <a href="#checkout" className="btn-primary">{t.hero.cta}</a>
          </div>
        </div>
      </section>

      {/* MEET COACH */}
      <section id="coach" className="section-pad bg-gradient-to-b from-accent/40 to-background">
        <div className="container-narrow">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl">{t.coach.h2}</h2>
          </div>

          {/* Timeline: BEFORE pair → TODAY pair, with chip labels between */}
          <div className="mt-10 max-w-5xl mx-auto space-y-8">
            {/* BEFORE row */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="inline-flex items-center rounded-full bg-muted text-muted-foreground px-4 py-1.5 text-xs sm:text-sm font-semibold uppercase tracking-widest">
                  {t.coach.beforeLabel}
                </span>
                <div className="flex-1 h-px bg-gradient-to-r from-muted-foreground/40 to-transparent" />
              </div>
              <div className="grid grid-cols-2 gap-3 sm:gap-5">
                {beforePhotos.map((p, i) => (
                  <figure key={i}>
                    <div className="relative rounded-2xl overflow-hidden border-4 border-card shadow-[var(--shadow-card)] aspect-[4/5] bg-muted">
                      <img src={p.src} alt={p.caption} className="w-full h-full object-cover" loading="lazy" />
                    </div>
                    <figcaption className="mt-2 text-center text-xs sm:text-sm text-muted-foreground">{p.caption}</figcaption>
                  </figure>
                ))}
              </div>
            </div>

            {/* Arrow / transformation indicator */}
            <div className="flex flex-col items-center gap-2 py-2">
              <div className="h-10 w-px bg-gradient-to-b from-transparent via-primary/50 to-primary" />
              <span className="inline-block rounded-full bg-gold text-primary-deep px-4 py-1.5 text-xs sm:text-sm font-display font-semibold">
                {t.coach.timeline[1]}
              </span>
              <div className="h-10 w-px bg-gradient-to-b from-primary via-primary/50 to-transparent" />
            </div>

            {/* TODAY row */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="inline-flex items-center rounded-full bg-primary text-primary-foreground px-4 py-1.5 text-xs sm:text-sm font-semibold uppercase tracking-widest shadow-md">
                  {t.coach.todayLabel}
                </span>
                <div className="flex-1 h-px bg-gradient-to-r from-primary/40 to-transparent" />
              </div>
              <div className="grid grid-cols-2 gap-3 sm:gap-5">
                {todayPhotos.map((p, i) => (
                  <figure key={i}>
                    <div className="relative rounded-2xl overflow-hidden border-4 border-card shadow-[var(--shadow-card)] aspect-[4/5] bg-muted ring-2 ring-primary/20">
                      <img src={p.src} alt={p.caption} className="w-full h-full object-cover" loading="lazy" />
                    </div>
                    <figcaption className="mt-2 text-center text-xs sm:text-sm font-medium text-primary-deep">{p.caption}</figcaption>
                  </figure>
                ))}
              </div>
            </div>
          </div>

          {/* Story copy */}
          <div className="mt-10 max-w-2xl mx-auto space-y-4 text-foreground/85 text-[16px] leading-relaxed">
            {t.coach.body.map((p, i) => <p key={i}>{p}</p>)}
          </div>

          <div className="mt-8 text-center">
            <a href="#checkout" className="btn-primary">{t.hero.cta}</a>
          </div>
        </div>
      </section>


      {/* COMPARISON */}
      <section id="compare" className="section-pad">
        <div className="container-narrow">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl">{t.compare.h2}</h2>
          </div>
          <div className="mt-8 max-w-3xl mx-auto card-soft overflow-hidden">
            <div className="grid grid-cols-3 bg-muted/60 text-xs sm:text-sm uppercase tracking-widest text-muted-foreground">
              <div className="p-3 sm:p-5">{t.compare.feature}</div>
              <div className="p-3 sm:p-5 text-center bg-primary text-primary-foreground font-semibold">{t.compare.summer}</div>
              <div className="p-3 sm:p-5 text-center">{t.compare.recorded}</div>
            </div>
            {compareRows.map(([feat, a, b], i) => (
              <div key={feat} className={`grid grid-cols-3 text-sm sm:text-base ${i % 2 ? "bg-cream/60" : "bg-card"}`}>
                <div className="p-3 sm:p-5 font-medium text-foreground/90">{feat}</div>
                <div className="p-3 sm:p-5 text-center bg-primary/8 border-x border-primary/15">
                  {a ? <Check className="inline text-primary" size={22} strokeWidth={3} /> : <span className="text-muted-foreground/60">—</span>}
                </div>
                <div className="p-3 sm:p-5 text-center">
                  {b ? <Check className="inline text-muted-foreground" size={20} /> : <span className="text-muted-foreground/60">—</span>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHO + HOW */}
      <section id="who-how" className="section-pad bg-gradient-to-b from-background via-accent/30 to-background">
        <div className="container-narrow grid md:grid-cols-2 gap-6">
          <div className="card-soft p-6 sm:p-8">
            <h2 className="text-2xl sm:text-3xl">{t.who.h2}</h2>
            <p className="mt-2 text-foreground/75">{t.who.intro}</p>
            <ul className="mt-5 space-y-2.5">
              {t.who.items.map((w) => (
                <li key={w} className="flex gap-3 items-start">
                  <Check className="shrink-0 mt-1 text-primary" size={18} />
                  <span className="text-[15px] leading-relaxed">{w}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <img src={coachDeskAsset.url} alt="Coach Hebah at her desk" className="w-full rounded-2xl object-cover aspect-[4/3]" loading="lazy" />
            </div>
          </div>
          <div className="card-soft p-6 sm:p-8">
            <h2 className="text-2xl sm:text-3xl">{t.how.h2}</h2>
            <ul className="mt-5 space-y-2.5">
              {t.how.items.map((w) => (
                <li key={w} className="flex gap-3 items-start">
                  <Dumbbell className="shrink-0 mt-1 text-primary" size={18} />
                  <span className="text-[15px] leading-relaxed">{w}</span>
                </li>
              ))}
            </ul>
            <p className="mt-5 text-sm text-muted-foreground leading-relaxed">{t.how.note}</p>
            <div className="mt-6 text-center">
              <a href="#checkout" className="btn-primary">{t.hero.cta}</a>
            </div>
          </div>
        </div>
      </section>

      {/* NUTRITION BAND */}
      <section className="section-pad">
        <div className="container-narrow grid md:grid-cols-2 items-center gap-8">
          <img src={nutrition} alt="" className="rounded-3xl shadow-[var(--shadow-card)] aspect-[4/3] object-cover w-full" loading="lazy" />
          <div>
            <h2 className="text-3xl sm:text-4xl">{t.nutritionBand.h2}</h2>
            <p className="mt-4 text-foreground/75">{t.nutritionBand.p}</p>
          </div>
        </div>
      </section>

      {/* SCHEDULE */}
      <section id="schedule" className="section-pad bg-gradient-to-b from-accent/40 to-background">
        <div className="container-narrow">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl">{t.schedule.h2}</h2>
          </div>
          <div className="mt-8 grid md:grid-cols-3 gap-4">
            {t.schedule.tracks.map((tr) => (
              <div key={tr.title} className="card-soft p-6 text-center">
                <Clock className="mx-auto text-primary" size={26} />
                <p className="mt-3 font-display text-lg text-primary-deep">{tr.title}</p>
                <p className="mt-2 text-xs uppercase tracking-widest text-muted-foreground">{tr.days}</p>
                <p className="mt-1 text-base font-medium">{tr.time}</p>
              </div>
            ))}
          </div>
          <p className="mt-4 text-center text-xs text-muted-foreground italic">{t.schedule.note}</p>
        </div>
      </section>

      {/* PRIVACY */}
      <section id="privacy" className="section-pad">
        <div className="container-narrow grid md:grid-cols-[1fr_1.3fr] gap-8 items-start">
          <div>
            <div className="w-12 h-12 rounded-2xl bg-primary text-primary-foreground grid place-items-center">
              <Lock size={22} />
            </div>
            <h2 className="mt-4 text-3xl sm:text-4xl">{t.privacy.h2}</h2>
            <p className="mt-3 text-foreground/75">{t.privacy.p}</p>
          </div>
          <div className="card-soft p-6 sm:p-8">
            <ul className="grid sm:grid-cols-2 gap-2.5">
              {t.privacy.items.map((p) => (
                <li key={p} className="flex gap-3 items-start text-[15px]">
                  <ShieldCheck className="shrink-0 mt-0.5 text-primary" size={18} />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
            <p className="mt-5 pt-5 border-t border-border text-sm text-muted-foreground leading-relaxed">{t.privacy.footer}</p>
          </div>
        </div>
      </section>

      {/* CHECKOUT */}
      <section id="checkout" className="section-pad bg-gradient-to-br from-primary-deep via-primary to-primary-soft text-primary-foreground">
        <div className="container-narrow text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl !text-primary-foreground">{t.checkout.h2}</h2>
          <p className="mt-3 max-w-xl mx-auto opacity-90">{t.checkout.p}</p>
          <div className="mt-8 max-w-lg mx-auto rounded-[2rem] bg-card text-foreground p-6 sm:p-9 shadow-[var(--shadow-glow)] text-start">
            <h3 className="text-2xl sm:text-3xl">{t.checkout.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              <Calendar size={14} className="inline -mt-0.5 mx-1 text-primary" />
              {t.checkout.starts}
            </p>
            <div className="mt-5 pt-5 border-t border-border flex items-baseline gap-2">
              <span className="font-display text-6xl text-primary-deep">$147</span>
              <span className="text-muted-foreground">{t.checkout.usd}</span>
            </div>
            <p className="mt-2 text-sm text-muted-foreground">{t.checkout.priceNote}</p>
            <ul className="mt-5 space-y-2 text-[15px]">
              {t.checkout.includes.map((x) => (
                <li key={x} className="flex gap-2.5 items-start">
                  <Check size={18} className="shrink-0 mt-0.5 text-primary" />
                  <span>{x}</span>
                </li>
              ))}
            </ul>
            <a
              href={STRIPE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary w-full mt-6"
            >
              {t.checkout.button}
            </a>
            <p className="mt-3 text-center text-xs text-muted-foreground">{t.checkout.footer}</p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="section-pad">
        <div className="container-read">
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl">{t.faq.h2}</h2>
          </div>
          <div className="mt-8">
            <FAQ items={faqItems} />
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="section-pad bg-gradient-to-b from-background to-accent/50">
        <div className="container-read text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl">{t.finalCta.h2}</h2>
          <p className="mt-4 text-foreground/75 text-lg">{t.finalCta.p}</p>
          <div className="mt-7">
            <a href="#checkout" className="btn-primary">{t.hero.cta}</a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-8 border-t border-border">
        <div className="container-narrow flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-muted-foreground">
          <img src={logoAsset.url} alt="StrongerHer" className="h-8 w-auto" />
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 hover:text-primary transition-colors"
          >
            <Instagram size={16} />
            {INSTAGRAM_HANDLE}
          </a>
          <p>{t.footer.rights.replace("{year}", String(new Date().getFullYear()))}</p>
        </div>
      </footer>

      <StickyMobileCTA />
      <WhatsAppButton />
    </main>
  );
}

function Pillar({
  imgSrc,
  imgAlt,
  customVisual,
  eyebrow,
  title,
  body,
  reverse,
}: {
  imgSrc?: string;
  imgAlt?: string;
  customVisual?: React.ReactNode;
  eyebrow: string;
  title: string;
  body: string[];
  reverse?: boolean;
}) {
  return (
    <div className={`grid md:grid-cols-2 gap-8 md:gap-12 items-center ${reverse ? "md:[&>*:first-child]:order-2" : ""}`}>
      <div>
        {customVisual ? (
          customVisual
        ) : (
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-blush/30 rounded-[2.5rem] blur-xl -z-10" />
            <img src={imgSrc} alt={imgAlt} className="w-full rounded-3xl object-cover aspect-[4/5] max-w-md mx-auto shadow-[var(--shadow-card)]" loading="lazy" />
          </div>
        )}
      </div>
      <div>
        <p className="text-xs font-semibold uppercase tracking-widest text-primary">{eyebrow}</p>
        <h3 className="mt-2 text-2xl sm:text-3xl md:text-4xl leading-tight">{title}</h3>
        <div className="mt-4 space-y-3 text-foreground/80 text-[16px] leading-relaxed">
          {body.map((p, i) => <p key={i}>{p}</p>)}
        </div>
      </div>
    </div>
  );
}
