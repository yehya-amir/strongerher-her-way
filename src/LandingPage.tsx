import {
  Check,
  Play,
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
  Globe,
} from "lucide-react";

import portrait from "@/assets/coach-hebah-portrait.jpg";
import dumbbell from "@/assets/coach-hebah-dumbbell.jpg";
import coaching from "@/assets/coaching-setup.jpg";
import nutrition from "@/assets/nutrition-bowl.jpg";
import lifestyle from "@/assets/lifestyle-tea.jpg";
import heroProfile from "@/assets/coach-profile-hero.jpg";

import { Countdown } from "@/components/Countdown";
import { TestimonialSlider, type Testimonial } from "@/components/TestimonialSlider";
import { FAQ, type FAQItem } from "@/components/FAQ";
import { CommunityMockup } from "@/components/CommunityMockup";
import { StickyMobileCTA } from "@/components/StickyMobileCTA";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import {
  useLang,
  STRIPE_URL,
  INSTAGRAM_URL,
  INSTAGRAM_HANDLE,
} from "@/i18n";

const testimonials: Testimonial[] = [
  { name: "Salma Ali", badge: "Lost around 3 kg in 6 weeks", excerpt: "Before the program, I kept losing weight and then gaining it back again. The biggest difference was learning a clear approach I could actually stick with.", full: `Before the program, I kept having the same problem: I would lose weight, then gain it back again. I also struggled to stay consistent because of how busy life gets.\n\nWhat helped me most was understanding calories in a simpler and clearer way, along with the 5:2 fasting system, which helped me organize my eating in a way I could actually maintain.\n\nDuring the program, I did not only notice weight loss. I also felt a difference in my energy and consistency. I became more motivated and benefited so much from the support, encouragement, and shared information inside the group.\n\nIn about 6 weeks, I lost around 3 kilograms. More importantly, I gained knowledge and habits that I can continue, inshaAllah.\n\nCoach Hebah is very encouraging, and her beautiful energy brings life and motivation to the sessions. I recommend this program to any woman who wants to lose weight, improve her health, and move toward a better lifestyle.\n\n— Salma Ali` },
  { name: "May", badge: "More energy and better consistency", excerpt: "I struggled with insulin resistance and constant fatigue. Changing my eating habits helped me feel more energetic, and exercise became part of my routine.", full: `I was struggling with insulin resistance and constant fatigue, and I needed an approach to nutrition and exercise that I could actually continue.\n\nOne of the things that surprised me most during the program was that changing my eating habits helped me feel more energetic, and exercise became part of my daily routine.\n\nWhat makes Coach Hebah special is that she pays attention to the small details and understands each participant's needs. During training, you feel as if she is speaking directly to your body and how you are feeling in that moment.\n\nToday, I feel stronger and more capable of continuing toward my goal, and I am still moving forward with confidence.\n\n— May` },
  { name: "Ruba Mouayed", badge: "Improved energy, endurance & consistency", excerpt: "I used to go between random eating and restriction. I learned how to balance calories, focus on protein, and improve my relationship with food.", full: `Before the program, I used to go back and forth between random eating and restriction. I did not know how to organize my meals in a way I could continue.\n\nI learned how to balance my calories and focus on protein. The best part is that my relationship with food became much better. I no longer feel guilty after meals the way I used to.\n\nI also noticed an improvement in my energy and endurance. The workouts were flexible and easy to apply. Even when I could not attend the live classes, the recordings helped me continue without stopping.\n\nWhat I liked most was that the program was practical and suitable for everyday life. It was not just another plan that is hard to follow. I started to feel a difference in my energy and body tone, and most importantly, I was able to stay consistent.\n\n— Ruba Mouayed` },
  { name: "Huda", badge: "Improved stamina, completed full workouts", excerpt: "At first, exercise felt difficult for me. Over time, I noticed a clear improvement in my energy and endurance.", full: `Before the program, my activity was mostly limited to housework, and the idea of committing to exercise felt difficult for me.\n\nI liked that the workouts were suitable for different levels. Over time, I noticed a clear improvement in my energy and endurance. What surprised me most was that I became able to complete the full workout without feeling extremely tired like I did in the beginning.\n\nI also benefited from learning how to organize calories and protein, and I liked the idea of combining fasting with calorie reduction in a practical and comfortable way.\n\nHaving the recordings was a big advantage for me because there was no longer an excuse to skip the workout or stop being consistent.\n\nCoach Hebah's style is supportive and mature, and I feel this program is suitable for any woman who wants to improve her fitness and health step by step.\n\n— Huda` },
  { name: "Zehra Deniz Ali", badge: "Better control around food + more energy", excerpt: "The program was not restrictive. I learned how to prioritize protein, feel fuller, avoid binge eating, and stay more consistent.", full: `One of my biggest struggles was self-control around food and finding the motivation to exercise consistently.\n\nOne of the biggest things I learned was that if I made protein a priority at iftar, I felt much fuller and was far less likely to binge eat or reach for junk food afterward. I also noticed that when I focused on filling, nutritious foods, I snacked much less throughout the day.\n\nWhat surprised me most was that the program was not restrictive. The 5:2 fasting days gave structure, but I never felt deprived or like I was constantly dieting.\n\nThe fitness classes were challenging at first, but Hebah was always encouraging and gave modifications whenever needed. Over time, I became more active, had more energy, and realized how much my fitness had improved.\n\nFor me, the biggest difference was the support, encouragement, and flexibility. If you are a busy woman who needs accountability without feeling restricted, I highly recommend this program.\n\n— Zehra Deniz Ali` },
  { name: "Tasmiya Khalid", badge: "Stronger, more consistent, less overwhelmed", excerpt: "The program felt simple and manageable. I finally understood portions, protein, and how to build habits I could maintain.", full: `Before joining, I struggled with inconsistent meals, low activity levels, and not knowing where to start with either nutrition or exercise.\n\nWhat I loved most about this program was how simple and manageable it felt. The 5:2 structure gave me a clear plan to follow, and the nutrition lessons helped me finally understand portion sizes and protein intake without feeling overwhelmed.\n\nI noticed improvements in my strength, energy, and consistency, and for the first time I felt like I was building habits I could actually maintain long term.\n\nCoach Hebah's support, encouragement, and responsiveness made a huge difference. I always felt guided, motivated, and never pressured.\n\nWhat surprised me most was how much progress I could make without following a restrictive diet or spending hours exercising. The program fit naturally into my daily life and helped me build a healthier routine that I can continue long after the program ends.\n\n— Tasmiya Khalid` },
  { name: "Meeda", badge: "Built strength and consistency", excerpt: "I was not trying to lose weight. I wanted to manage perimenopause symptoms, build strength, and support my joints.", full: `I was not looking to lose weight. My goal was to cope better with perimenopause symptoms, build strength, and support my weak joints.\n\nBefore joining, I struggled with consistency in both exercise and healthy eating. The combination of the live sessions, nutrition guidance, and WhatsApp group gave me the accountability and support I was missing and helped me stop procrastinating.\n\nOver the 6 weeks, I noticed positive changes in my physique, felt stronger, and became much more consistent with my habits.\n\nWhat I appreciated most was that the program focused on building health and strength in a realistic, supportive way. Coach Hebah was truly the answer to my duaa, and the support from both the coaching and community made all the difference.\n\n— Meeda` },
  { name: "Rahma", badge: "Stronger muscles, fewer aches", excerpt: "I started noticing a difference after the first week. Within a few weeks, my muscles felt stronger and my aches improved tremendously.", full: `The fitness sessions gave me the dedication and consistency I was missing. Going through perimenopause, I know how important it is to exercise regularly, but I struggled to stay disciplined on my own.\n\nCoach Hebah's motivating words, careful explanations, and guidance truly revitalized me. Her fitness program is suitable for all levels and ages, with a variety of exercises that work the whole body.\n\nI started noticing a difference after the very first week. Within a few short weeks, my muscles felt stronger and the aches and pains I had been experiencing improved tremendously. Allahumma barik.\n\nI am so grateful for this experience and definitely want to continue, inshaAllah.\n\n— Rahma` },
];

const includedIcons = [Video, MessageCircle, Sparkles, Play, Heart, Check, Users, Calendar];

export default function LandingPage() {
  const { t, lang, setLang } = useLang();

  const faqItems: FAQItem[] = t.faqs.map((f) => ({ q: f.q, a: f.a }));
  const compareRows = t.compare.rows.map((label, i) => {
    // first 5 rows: Summer Strong yes, recorded no; last row (Recordings): both yes
    const isRecordings = i === t.compare.rows.length - 1;
    return [label, true, isRecordings] as [string, boolean, boolean];
  });

  return (
    <main className="bg-background text-foreground overflow-x-hidden">
      {/* NAV */}
      <header className="absolute top-0 inset-x-0 z-30">
        <div className="container-narrow flex items-center justify-between py-6 gap-3">
          <a href="#top" className="font-display text-xl sm:text-2xl text-primary-deep">
            Stronger<span className="text-primary-soft">Her</span>
          </a>
          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Instagram ${INSTAGRAM_HANDLE}`}
              className="inline-flex items-center gap-1.5 text-sm text-primary-deep hover:text-primary transition-colors"
            >
              <Instagram size={18} />
              <span className="hidden sm:inline">{INSTAGRAM_HANDLE}</span>
            </a>
            <button
              onClick={() => setLang(lang === "en" ? "ar" : "en")}
              className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-3 py-1.5 text-xs sm:text-sm font-medium text-primary-deep hover:bg-accent transition-colors"
              aria-label="Toggle language"
            >
              <Globe size={14} />
              {t.nav.language}
            </button>
            <a href="#checkout" className="hidden sm:inline-flex btn-ghost">
              {t.nav.joinNow}
            </a>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section id="top" className="relative pt-28 pb-20 md:pt-36 md:pb-28">
        <div aria-hidden className="absolute top-0 right-0 w-[60%] h-[70%] rounded-bl-[40%] bg-gradient-to-br from-accent/60 via-blush/30 to-transparent -z-10" />
        <div className="container-narrow grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div className="text-center md:text-start">
            <p className="eyebrow">{t.hero.eyebrow}</p>
            <h1 className="mt-5 text-4xl sm:text-5xl md:text-6xl font-medium leading-[1.05]">{t.hero.h1}</h1>
            <p className="mt-6 text-lg text-foreground/75 max-w-xl mx-auto md:mx-0">{t.hero.p1}</p>
            <p className="mt-4 text-base text-muted-foreground italic max-w-xl mx-auto md:mx-0">{t.hero.p2}</p>
            <div className="mt-8 flex flex-col items-center md:items-start gap-6">
              <a href="#checkout" className="btn-primary">{t.hero.cta}</a>
              <Countdown />
              <p className="text-sm text-muted-foreground">
                <Calendar className="inline w-4 h-4 mx-1.5 -mt-0.5 text-primary" />
                {t.hero.starts}
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-6 bg-gradient-to-br from-primary/25 to-blush/40 rounded-[3rem] blur-2xl -z-10" />
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-[var(--shadow-glow)] border-[10px] border-card aspect-[4/5] max-w-md mx-auto">
              <img src={heroProfile} alt="Coach Hebah, founder of StrongerHer" className="w-full h-full object-cover" width={1024} height={1280} />
            </div>
            <div className="absolute -bottom-4 -left-4 sm:-left-8 card-soft px-5 py-4 max-w-[210px]">
              <p className="text-xs uppercase tracking-widest text-primary-soft">{t.hero.badgeTop}</p>
              <p className="mt-1 font-display text-lg text-primary-deep leading-tight">{t.hero.badgeBottom}</p>
            </div>
          </div>
        </div>
      </section>

      {/* SALES VIDEO */}
      <section id="video" className="section-pad">
        <div className="container-narrow text-center">
          <p className="eyebrow">{t.video.eyebrow}</p>
          <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl">{t.video.h2}</h2>
          <p className="mt-5 max-w-2xl mx-auto text-foreground/75 text-lg">{t.video.p}</p>
          <div className="mt-10 max-w-3xl mx-auto">
            <div className="relative aspect-video rounded-3xl overflow-hidden border border-border bg-gradient-to-br from-primary-deep via-primary to-primary-soft shadow-[var(--shadow-glow)]">
              <div className="absolute inset-0 flex flex-col items-center justify-center text-primary-foreground text-center px-6">
                <div className="w-20 h-20 rounded-full bg-primary-foreground/15 backdrop-blur grid place-items-center border border-primary-foreground/30">
                  <Play size={32} className="ml-1" />
                </div>
                <p className="mt-6 font-display text-2xl sm:text-3xl">{t.video.soon}</p>
                <p className="mt-2 text-sm opacity-80">{t.video.soonSub}</p>
              </div>
            </div>
            <div className="mt-8">
              <a href="#checkout" className="btn-primary">{t.hero.cta}</a>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="success-stories" className="section-pad bg-gradient-to-b from-accent/40 to-background">
        <div className="container-narrow text-center mb-10">
          <p className="eyebrow">{t.stories.eyebrow}</p>
          <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl">{t.stories.h2}</h2>
          <p className="mt-5 max-w-2xl mx-auto text-foreground/75 text-lg">{t.stories.p}</p>
        </div>
        <div className="max-w-6xl mx-auto">
          <TestimonialSlider items={testimonials} />
        </div>
      </section>

      {/* RESULTS */}
      <section id="results" className="section-pad">
        <div className="container-narrow">
          <div className="text-center max-w-2xl mx-auto">
            <p className="eyebrow">{t.results.eyebrow}</p>
            <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl">{t.results.h2}</h2>
            <p className="mt-5 text-foreground/75 text-lg">{t.results.p}</p>
          </div>
          <ul className="mt-12 grid sm:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {t.results.items.map((r) => (
              <li key={r} className="card-soft p-6 flex gap-4 items-start">
                <span className="shrink-0 mt-0.5 w-9 h-9 rounded-full bg-primary text-primary-foreground grid place-items-center">
                  <Check size={18} />
                </span>
                <span className="text-[16px] leading-relaxed">{r}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* MID-PAGE CTA (between Results and Pillars) */}
      <section className="py-12 md:py-16">
        <div className="container-narrow">
          <div className="card-soft text-center p-8 sm:p-12 bg-gradient-to-br from-accent/60 via-blush/30 to-card">
            <h3 className="font-display text-2xl sm:text-3xl text-primary-deep">{t.midCta.title}</h3>
            <p className="mt-3 text-foreground/75 max-w-xl mx-auto">{t.midCta.sub}</p>
            <div className="mt-7">
              <a href="#checkout" className="btn-primary">{t.hero.cta}</a>
            </div>
          </div>
        </div>
      </section>

      {/* THREE PILLARS */}
      <section id="program" className="section-pad bg-gradient-to-b from-background via-accent/30 to-background">
        <div className="container-narrow">
          <div className="text-center max-w-2xl mx-auto">
            <p className="eyebrow">{t.pillars.eyebrow}</p>
            <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl">{t.pillars.h2}</h2>
          </div>
          <div className="mt-16 space-y-16 md:space-y-24">
            <Pillar imgSrc={dumbbell} imgAlt="Coach Hebah with dumbbell" eyebrow={t.pillars.one.eyebrow} title={t.pillars.one.title} body={t.pillars.one.body} />
            <Pillar imgSrc={coaching} imgAlt="Online nutrition coaching setup with laptop and notebook" eyebrow={t.pillars.two.eyebrow} title={t.pillars.two.title} reverse body={t.pillars.two.body} />
            <Pillar customVisual={<CommunityMockup />} eyebrow={t.pillars.three.eyebrow} title={t.pillars.three.title} body={t.pillars.three.body} />
          </div>
          <div className="mt-16 text-center">
            <a href="#checkout" className="btn-primary">{t.hero.cta}</a>
          </div>
        </div>
      </section>

      {/* INCLUDED */}
      <section id="included" className="section-pad">
        <div className="container-narrow">
          <div className="text-center max-w-2xl mx-auto">
            <p className="eyebrow">{t.included.eyebrow}</p>
            <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl">{t.included.h2}</h2>
            <p className="mt-5 text-foreground/75 text-lg">{t.included.p}</p>
          </div>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {t.included.items.map((title, i) => {
              const Icon = includedIcons[i] ?? Check;
              return (
                <div key={title} className="card-soft p-6 text-center">
                  <div className="mx-auto w-12 h-12 rounded-full bg-accent grid place-items-center text-primary">
                    <Icon size={22} />
                  </div>
                  <p className="mt-4 font-display text-lg text-primary-deep leading-snug">{title}</p>
                </div>
              );
            })}
          </div>
          <p className="mt-10 text-center text-muted-foreground max-w-2xl mx-auto">{t.included.note}</p>
          <div className="mt-10 text-center">
            <a href="#checkout" className="btn-primary">{t.hero.cta}</a>
          </div>
        </div>
      </section>

      {/* MEET COACH */}
      <section id="coach" className="section-pad bg-gradient-to-b from-accent/40 to-background">
        <div className="container-narrow grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div className="relative">
            <div className="absolute -inset-5 bg-gradient-to-br from-primary/25 to-blush/40 rounded-[3rem] blur-2xl -z-10" />
            <div className="relative rounded-[2.5rem] overflow-hidden border-[10px] border-card shadow-[var(--shadow-glow)] aspect-[4/5] max-w-md mx-auto">
              <img src={portrait} alt="Coach Hebah" className="w-full h-full object-cover" loading="lazy" width={1024} height={1280} />
            </div>
          </div>
          <div>
            <p className="eyebrow">{t.coach.eyebrow}</p>
            <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl">{t.coach.h2}</h2>
            <div className="mt-6 space-y-4 text-foreground/80 text-[17px] leading-relaxed max-w-xl">
              {t.coach.body.map((p, i) => <p key={i}>{p}</p>)}
            </div>
          </div>
        </div>
      </section>

      {/* COMPARISON */}
      <section id="compare" className="section-pad">
        <div className="container-narrow">
          <div className="text-center max-w-2xl mx-auto">
            <p className="eyebrow">{t.compare.eyebrow}</p>
            <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl">{t.compare.h2}</h2>
          </div>
          <div className="mt-12 max-w-3xl mx-auto card-soft overflow-hidden">
            <div className="grid grid-cols-3 bg-muted/60 text-xs sm:text-sm uppercase tracking-widest text-muted-foreground">
              <div className="p-4 sm:p-5">{t.compare.feature}</div>
              <div className="p-4 sm:p-5 text-center bg-primary text-primary-foreground font-semibold">{t.compare.summer}</div>
              <div className="p-4 sm:p-5 text-center">{t.compare.recorded}</div>
            </div>
            {compareRows.map(([feat, a, b], i) => (
              <div key={feat} className={`grid grid-cols-3 text-sm sm:text-base ${i % 2 ? "bg-cream/60" : "bg-card"}`}>
                <div className="p-4 sm:p-5 font-medium text-foreground/90">{feat}</div>
                <div className="p-4 sm:p-5 text-center bg-primary/8 border-x border-primary/15">
                  {a ? <Check className="inline text-primary" size={22} strokeWidth={3} /> : <span className="text-muted-foreground/60">—</span>}
                </div>
                <div className="p-4 sm:p-5 text-center">
                  {b ? <Check className="inline text-muted-foreground" size={20} /> : <span className="text-muted-foreground/60">—</span>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHO + HOW */}
      <section id="who-how" className="section-pad bg-gradient-to-b from-background via-accent/30 to-background">
        <div className="container-narrow grid md:grid-cols-2 gap-10">
          <div className="card-soft p-8 sm:p-10">
            <p className="eyebrow">{t.who.eyebrow}</p>
            <h2 className="mt-3 text-3xl">{t.who.h2}</h2>
            <p className="mt-3 text-foreground/75">{t.who.intro}</p>
            <ul className="mt-6 space-y-3">
              {t.who.items.map((w) => (
                <li key={w} className="flex gap-3 items-start">
                  <Check className="shrink-0 mt-1 text-primary" size={18} />
                  <span className="text-[15px] leading-relaxed">{w}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <img src={lifestyle} alt="" className="w-full rounded-2xl object-cover aspect-[16/9]" loading="lazy" width={1280} height={896} />
            </div>
          </div>
          <div className="card-soft p-8 sm:p-10">
            <p className="eyebrow">{t.how.eyebrow}</p>
            <h2 className="mt-3 text-3xl">{t.how.h2}</h2>
            <ul className="mt-6 space-y-3">
              {t.how.items.map((w) => (
                <li key={w} className="flex gap-3 items-start">
                  <Dumbbell className="shrink-0 mt-1 text-primary" size={18} />
                  <span className="text-[15px] leading-relaxed">{w}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm text-muted-foreground leading-relaxed">{t.how.note}</p>
            <div className="mt-8 text-center">
              <a href="#checkout" className="btn-primary">{t.hero.cta}</a>
            </div>
          </div>
        </div>
      </section>

      {/* NUTRITION BAND */}
      <section className="section-pad">
        <div className="container-narrow grid md:grid-cols-2 items-center gap-10">
          <img src={nutrition} alt="" className="rounded-3xl shadow-[var(--shadow-card)] aspect-[4/3] object-cover w-full" loading="lazy" width={1280} height={896} />
          <div>
            <p className="eyebrow">{t.nutritionBand.eyebrow}</p>
            <h2 className="mt-3 text-3xl sm:text-4xl">{t.nutritionBand.h2}</h2>
            <p className="mt-5 text-foreground/75">{t.nutritionBand.p}</p>
          </div>
        </div>
      </section>

      {/* SCHEDULE */}
      <section id="schedule" className="section-pad bg-gradient-to-b from-accent/40 to-background">
        <div className="container-narrow">
          <div className="text-center max-w-2xl mx-auto">
            <p className="eyebrow">{t.schedule.eyebrow}</p>
            <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl">{t.schedule.h2}</h2>
            <p className="mt-5 text-foreground/75 text-lg">{t.schedule.p}</p>
          </div>
          <div className="mt-12 grid md:grid-cols-3 gap-5">
            {t.schedule.tracks.map((tr) => (
              <div key={tr.title} className="card-soft p-7 text-center">
                <Clock className="mx-auto text-primary" size={28} />
                <p className="mt-4 font-display text-xl text-primary-deep">{tr.title}</p>
                <p className="mt-3 text-sm uppercase tracking-widest text-muted-foreground">{tr.days}</p>
                <p className="mt-2 text-lg font-medium">{tr.time}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-center text-xs text-muted-foreground italic">{t.schedule.note}</p>
        </div>
      </section>

      {/* PRIVACY */}
      <section id="privacy" className="section-pad">
        <div className="container-narrow grid md:grid-cols-[1fr_1.3fr] gap-10 items-start">
          <div>
            <div className="w-14 h-14 rounded-2xl bg-primary text-primary-foreground grid place-items-center">
              <Lock size={26} />
            </div>
            <p className="eyebrow mt-6">{t.privacy.eyebrow}</p>
            <h2 className="mt-3 text-3xl sm:text-4xl">{t.privacy.h2}</h2>
            <p className="mt-5 text-foreground/75">{t.privacy.p}</p>
          </div>
          <div className="card-soft p-7 sm:p-9">
            <ul className="grid sm:grid-cols-2 gap-3">
              {t.privacy.items.map((p) => (
                <li key={p} className="flex gap-3 items-start text-[15px]">
                  <ShieldCheck className="shrink-0 mt-0.5 text-primary" size={18} />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
            <p className="mt-7 pt-7 border-t border-border text-sm text-muted-foreground leading-relaxed">{t.privacy.footer}</p>
          </div>
        </div>
      </section>

      {/* CHECKOUT */}
      <section id="checkout" className="section-pad bg-gradient-to-br from-primary-deep via-primary to-primary-soft text-primary-foreground">
        <div className="container-narrow text-center">
          <p className="eyebrow !text-primary-foreground/70">{t.checkout.eyebrow}</p>
          <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl !text-primary-foreground">{t.checkout.h2}</h2>
          <p className="mt-5 max-w-xl mx-auto opacity-90">{t.checkout.p}</p>
          <div className="mt-12 max-w-lg mx-auto rounded-[2.5rem] bg-card text-foreground p-8 sm:p-10 shadow-[var(--shadow-glow)] text-start">
            <p className="eyebrow">{t.checkout.badge}</p>
            <h3 className="mt-2 text-2xl sm:text-3xl">{t.checkout.title}</h3>
            <p className="mt-3 text-sm text-muted-foreground">
              <Calendar size={14} className="inline -mt-0.5 mx-1 text-primary" />
              {t.checkout.starts}
            </p>
            <div className="mt-7 pt-7 border-t border-border flex items-baseline gap-2">
              <span className="font-display text-6xl text-primary-deep">$147</span>
              <span className="text-muted-foreground">{t.checkout.usd}</span>
            </div>
            <p className="mt-3 text-sm text-muted-foreground">{t.checkout.priceNote}</p>
            <ul className="mt-6 space-y-2.5 text-[15px]">
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
              className="btn-primary w-full mt-8"
            >
              {t.checkout.button}
            </a>
            <p className="mt-4 text-center text-xs text-muted-foreground">{t.checkout.footer}</p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="section-pad">
        <div className="container-read">
          <div className="text-center">
            <p className="eyebrow">{t.faq.eyebrow}</p>
            <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl">{t.faq.h2}</h2>
          </div>
          <div className="mt-12">
            <FAQ items={faqItems} />
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="section-pad bg-gradient-to-b from-background to-accent/50">
        <div className="container-read text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl">{t.finalCta.h2}</h2>
          <p className="mt-6 text-foreground/75 text-lg">{t.finalCta.p}</p>
          <div className="mt-10">
            <a href="#checkout" className="btn-primary">{t.hero.cta}</a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-10 border-t border-border">
        <div className="container-narrow flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p className="font-display text-lg text-primary-deep">
            Stronger<span className="text-primary-soft">Her</span>
          </p>
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
    <div className={`grid md:grid-cols-2 gap-10 md:gap-14 items-center ${reverse ? "md:[&>*:first-child]:order-2" : ""}`}>
      <div>
        {customVisual ? (
          customVisual
        ) : (
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-blush/30 rounded-[2.5rem] blur-xl -z-10" />
            <img src={imgSrc} alt={imgAlt} className="w-full rounded-3xl object-cover aspect-[4/5] max-w-md mx-auto shadow-[var(--shadow-card)]" loading="lazy" width={1024} height={1280} />
          </div>
        )}
      </div>
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h3 className="mt-3 text-2xl sm:text-3xl md:text-4xl leading-tight">{title}</h3>
        <div className="mt-5 space-y-4 text-foreground/80 text-[16px] leading-relaxed">
          {body.map((p, i) => <p key={i}>{p}</p>)}
        </div>
      </div>
    </div>
  );
}
