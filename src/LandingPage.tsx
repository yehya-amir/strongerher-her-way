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
import coachBeforeLabAsset from "@/assets/coach-before-lab.jpg.asset.json";
import coachBeforeRainbowAsset from "@/assets/coach-before-rainbow.jpg.asset.json";
import coachCurrentDumbbellAsset from "@/assets/coach-current-dumbbell.png.asset.json";
import coachCurrentLivingRoomAsset from "@/assets/coach-current-living-room.jpg.asset.json";

import { Countdown } from "@/components/Countdown";
import { TestimonialSlider } from "@/components/TestimonialSlider";
import { FAQ, type FAQItem } from "@/components/FAQ";
import { CommunityMockup } from "@/components/CommunityMockup";
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

const _unused = [
  {
    name: "Salma Hassan",
    badge: "Lost 3 kg and Finally Stayed Consistent",
    excerpt: "For years, I would lose weight and then gain it back again. I also found it difficult to stay consistent because of the demands of daily life.",
    full: `For years, I would lose weight and then gain it back again. I also found it difficult to stay consistent because of the demands of daily life.\n\nThe two things that helped me most were understanding calories more clearly and following the 5:2 fasting system. Together, they gave me a simple structure I could actually stick to.\n\nDuring the program, I noticed improvements in both my energy and consistency. The support, encouragement, and sharing within the group made a huge difference. In about 6 weeks, I lost nearly 3 kg, but more importantly, I gained knowledge and habits that I can continue with, inshaAllah.`,
  },
  {
    name: "Shazia Ahmad",
    badge: "Everything Improved",
    excerpt: "Everything improved—my energy, my headaches, my strength, and my confidence.",
    full: `Everything improved—my energy, my headaches, my strength, and my confidence.\n\nBefore joining, I lived a very sedentary lifestyle and struggled with consistency, back pain, and low energy.\n\nThe nutrition coaching helped me understand how to build my plate properly, prioritize protein, and recognize the habits that were holding me back. The workouts were supportive, challenging, and adapted to my level.\n\nThe biggest surprise was how much stronger I became. I was even able to do push-ups on my toes for the first time.\n\nI highly recommend this program to women over 45 who want to become stronger, healthier, and more confident.`,
  },
  {
    name: "Ateka Ali",
    badge: "Accountability Makes the Difference",
    excerpt: "I recently completed Coach Hebah's 6-week boot camp, and it was an incredible experience.",
    full: `I recently completed Coach Hebah's 6-week boot camp, and it was an incredible experience. I already knew a lot about nutrition and fitness, but one thing I've learned is that consistency comes from being part of a supportive community.\n\nThe cohort-based format was one of the most valuable aspects of the program. With live classes three times a week, you show up. It's much harder to make excuses when your instructor and classmates are expecting you. That built-in accountability makes a huge difference.\n\nI also loved the nutrition component. Sharing my meals, tracking protein, and receiving feedback helped me become much more intentional about my daily habits.\n\nCoach Hebah is an exceptional instructor. She meets people where they are, adapts workouts to different fitness levels, and always encourages you to push just a little beyond what you think you can do. Her positive energy and genuine investment in her students' success create an environment where you want to keep showing up and improving.`,
  },
  {
    name: "Sadiya Khan",
    badge: "Stronger After Injury",
    excerpt: "I gained strength, consistency, energy, and confidence—and I'm no longer afraid to challenge myself.",
    full: `I gained strength, consistency, energy, and confidence—and I'm no longer afraid to challenge myself.\n\nBefore joining, I was afraid to exercise because of an elbow injury. With Coach Hebah, I felt safe pushing myself because she always knew when to modify an exercise, when to push through, and when to stop.\n\nI gained strength, improved my sleep, started lifting heavier, and became much more confident in what my body can do.\n\nI've trained with Coach Hebah on and off for 18 years through pregnancies, injuries, weight gain, and life's challenges. Every time, she has helped me get results and reminded me what I'm capable of. As a busy mom of seven, people often ask me what my secret is—and a big part of the answer is having Hebah as my coach.`,
  },
  {
    name: "Maya Rahman",
    badge: "It Felt Like She Understood Exactly What I Needed",
    excerpt: "I was struggling with insulin resistance and constant fatigue, and I needed an approach to nutrition and exercise that I could actually sustain.",
    full: `I was struggling with insulin resistance and constant fatigue, and I needed an approach to nutrition and exercise that I could actually sustain.\n\nOne of the things that surprised me most was how much better I felt once I changed my eating habits. My energy increased, and exercise became part of my routine instead of something I kept putting off.\n\nWhat makes Coach Hebah different is that she pays attention to the small details and understands the needs of each woman. During training, it often felt like she was talking about exactly what my body was experiencing in that moment.\n\nToday I feel stronger and more capable of continuing toward my goals with confidence.`,
  },
  {
    name: "Ruba Khaled",
    badge: "I No Longer Feel Guilty After Meals",
    excerpt: "Before the program, I moved between random eating and restriction, and I didn't know how to organize my meals in a way I could maintain.",
    full: `Before the program, I moved between random eating and restriction, and I didn't know how to organize my meals in a way I could maintain.\n\nI learned how to balance my calories and prioritize protein, but the biggest change was that my relationship with food became much healthier. I no longer feel guilty after meals the way I used to.\n\nI also noticed improvements in my energy and endurance, and the workouts were flexible and easy to follow. Even when I couldn't attend the live sessions, the recordings helped me stay consistent.\n\nWhat I loved most was that the program was practical and fit into everyday life. It wasn't just another plan that was difficult to follow.`,
  },
  {
    name: "Huda Mansour",
    badge: "The Recordings Removed My Excuses",
    excerpt: "Before joining, my activity level was mostly limited to household chores, and the idea of committing to exercise felt difficult.",
    full: `Before joining, my activity level was mostly limited to household chores, and the idea of committing to exercise felt difficult.\n\nI loved that the workouts were suitable for different fitness levels. Over time, I noticed a clear improvement in my energy and endurance. The biggest surprise was that I could complete an entire workout without feeling exhausted the way I did at the beginning.\n\nI also learned how to organize my calories and protein intake, and I liked the practical combination of fasting and calorie control.\n\nThe recordings were a huge advantage for me because they removed my excuses. There was always a way to stay consistent.`,
  },
  {
    name: "Zara Karim",
    badge: "I Never Felt Deprived",
    excerpt: "One of my biggest struggles was self-control around food and finding the motivation to exercise consistently.",
    full: `One of my biggest struggles was self-control around food and finding the motivation to exercise consistently.\n\nOne of the biggest lessons I learned was that when I made protein a priority, I felt much fuller and was far less likely to binge eat or reach for junk food. I also noticed that focusing on filling, nutritious foods helped me snack much less.\n\nWhat surprised me most was that the program wasn't restrictive. The 5:2 fasting days provided structure, but I never felt deprived or like I was constantly dieting.\n\nThe support, encouragement, and flexibility made all the difference. If you're a busy woman who needs accountability without feeling restricted, I highly recommend this program.`,
  },
  {
    name: "Tasmiya Khalid",
    badge: "Simple, Manageable, and Sustainable",
    excerpt: "Before joining, I struggled with inconsistent meals, low activity levels, and not knowing where to start with nutrition or exercise.",
    full: `Before joining, I struggled with inconsistent meals, low activity levels, and not knowing where to start with nutrition or exercise.\n\nWhat I loved most about this program was how simple and manageable it felt. The 5:2 structure gave me a clear plan to follow, and the nutrition lessons helped me finally understand portion sizes and protein intake without feeling overwhelmed.\n\nI noticed improvements in my strength, energy, and consistency, and for the first time I felt like I was building habits I could actually maintain long term.\n\nWhat surprised me most was how much progress I could make without following a restrictive diet or spending hours exercising.`,
  },
  {
    name: "Mina Ahmed",
    badge: "The Accountability I Was Missing",
    excerpt: "I wasn't looking to lose weight. My goal was to cope better with perimenopause symptoms, build strength, and support my joints.",
    full: `I wasn't looking to lose weight. My goal was to cope better with perimenopause symptoms, build strength, and support my joints.\n\nBefore joining, I struggled with consistency in both exercise and healthy eating. The combination of live sessions, nutrition guidance, and the WhatsApp group gave me the accountability and support I was missing and helped me stop procrastinating.\n\nOver the six weeks, I noticed positive changes in my physique, felt stronger, and became much more consistent with my habits.\n\nCoach Hebah was truly the answer to my duaa, and the support from both the coaching and community made all the difference.`,
  },
  {
    name: "Rahma Saleh",
    badge: "My Aches and Pains Improved Tremendously",
    excerpt: "Going through perimenopause, I knew how important regular exercise was, but I struggled to stay disciplined on my own.",
    full: `Going through perimenopause, I knew how important regular exercise was, but I struggled to stay disciplined on my own.\n\nCoach Hebah's motivating words, careful explanations, and guidance truly revitalized me. Her program is suitable for all levels and ages, with exercises that work the whole body.\n\nI started noticing a difference after the very first week. Within a few short weeks, my muscles felt stronger and the aches and pains I had been experiencing improved tremendously. Allahumma barik.\n\nI am so grateful for this experience and definitely want to continue, inshaAllah.`,
  },
];

const includedIcons = [Video, MessageCircle, Sparkles, Play, Heart, Check, Users, Calendar];

export default function LandingPage() {
  const { t, lang } = useLang();
  const testimonials = lang === "ar" ? testimonialsAr : testimonialsEn;
  const coachPhotos = [
    { src: coachBeforeLabAsset.url, caption: t.coach.photoCaptions[0] },
    { src: coachBeforeRainbowAsset.url, caption: t.coach.photoCaptions[1] },
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
              className="h-9 sm:h-12 w-auto"
            />
          </a>
          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Instagram ${INSTAGRAM_HANDLE}`}
              className="hidden sm:inline-flex items-center gap-1.5 text-sm text-primary-deep hover:text-primary transition-colors"
            >
              <Instagram size={18} />
              <span>{INSTAGRAM_HANDLE}</span>
            </a>
            <button
              onClick={() => setLang(lang === "en" ? "ar" : "en")}
              className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-4 sm:px-5 py-2.5 text-sm sm:text-base font-bold shadow-md hover:shadow-lg hover:scale-105 transition-all"
              aria-label="Toggle language"
            >
              <Languages size={18} />
              {t.nav.language}
            </button>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section id="top" className="relative pt-6 pb-8 md:pt-10 md:pb-12">
        <div aria-hidden className="absolute top-0 right-0 w-[60%] h-[60%] rounded-bl-[40%] bg-gradient-to-br from-accent/60 via-blush/30 to-transparent -z-10" />
        <div className="container-narrow max-w-3xl text-center">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-medium leading-[1.1]">{t.hero.h1}</h1>

          {/* Sales video placeholder */}
          <div className="mt-6 sm:mt-8">
            <div className="relative aspect-video rounded-2xl overflow-hidden border border-border bg-gradient-to-br from-primary-deep via-primary to-primary-soft shadow-[var(--shadow-glow)] max-w-2xl mx-auto">
              <div className="absolute inset-0 flex flex-col items-center justify-center text-primary-foreground text-center px-6">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-primary-foreground/15 backdrop-blur grid place-items-center border border-primary-foreground/30">
                  <Play size={28} className="ml-1" />
                </div>
                <p className="mt-4 font-display text-lg sm:text-2xl">Sales video coming soon</p>
              </div>
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
            <Pillar customVisual={<CommunityMockup />} eyebrow={t.pillars.three.eyebrow} title={t.pillars.three.title} body={t.pillars.three.body} />
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
        <div className="container-narrow grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="relative">
            <div className="absolute -inset-5 bg-gradient-to-br from-primary/25 to-blush/40 rounded-[3rem] blur-2xl -z-10" />
            <div className="relative rounded-[2rem] overflow-hidden border-[8px] border-card shadow-[var(--shadow-glow)] aspect-[4/5] max-w-md mx-auto">
              <img src={coachDeskAsset.url} alt="Coach Hebah" className="w-full h-full object-cover" loading="lazy" />
            </div>
          </div>
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl">{t.coach.h2}</h2>
            <div className="mt-4 space-y-3 text-foreground/80 text-[16px] leading-relaxed max-w-xl">
              {t.coach.body.map((p, i) => <p key={i}>{p}</p>)}
            </div>
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
