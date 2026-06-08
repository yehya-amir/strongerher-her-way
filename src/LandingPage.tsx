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
} from "lucide-react";

import portrait from "@/assets/coach-hebah-portrait.jpg";
import dumbbell from "@/assets/coach-hebah-dumbbell.jpg";
import coaching from "@/assets/coaching-setup.jpg";
import nutrition from "@/assets/nutrition-bowl.jpg";
import lifestyle from "@/assets/lifestyle-tea.jpg";

import { Countdown } from "@/components/Countdown";
import { TestimonialSlider, type Testimonial } from "@/components/TestimonialSlider";
import { FAQ, type FAQItem } from "@/components/FAQ";
import { CommunityMockup } from "@/components/CommunityMockup";
import { StickyMobileCTA } from "@/components/StickyMobileCTA";


const testimonials: Testimonial[] = [
  {
    name: "Salma Ali",
    badge: "Lost around 3 kg in 6 weeks",
    excerpt:
      "Before the program, I kept losing weight and then gaining it back again. The biggest difference was learning a clear approach I could actually stick with.",
    full: `Before the program, I kept having the same problem: I would lose weight, then gain it back again. I also struggled to stay consistent because of how busy life gets.

What helped me most was understanding calories in a simpler and clearer way, along with the 5:2 fasting system, which helped me organize my eating in a way I could actually maintain.

During the program, I did not only notice weight loss. I also felt a difference in my energy and consistency. I became more motivated and benefited so much from the support, encouragement, and shared information inside the group.

In about 6 weeks, I lost around 3 kilograms. More importantly, I gained knowledge and habits that I can continue, inshaAllah.

Coach Hebah is very encouraging, and her beautiful energy brings life and motivation to the sessions. I recommend this program to any woman who wants to lose weight, improve her health, and move toward a better lifestyle.

— Salma Ali`,
  },
  {
    name: "May",
    badge: "More energy and better consistency",
    excerpt:
      "I struggled with insulin resistance and constant fatigue. Changing my eating habits helped me feel more energetic, and exercise became part of my routine.",
    full: `I was struggling with insulin resistance and constant fatigue, and I needed an approach to nutrition and exercise that I could actually continue.

One of the things that surprised me most during the program was that changing my eating habits helped me feel more energetic, and exercise became part of my daily routine.

What makes Coach Hebah special is that she pays attention to the small details and understands each participant's needs. During training, you feel as if she is speaking directly to your body and how you are feeling in that moment.

Today, I feel stronger and more capable of continuing toward my goal, and I am still moving forward with confidence.

— May`,
  },
  {
    name: "Ruba Mouayed",
    badge: "Improved energy, endurance & consistency",
    excerpt:
      "I used to go between random eating and restriction. I learned how to balance calories, focus on protein, and improve my relationship with food.",
    full: `Before the program, I used to go back and forth between random eating and restriction. I did not know how to organize my meals in a way I could continue.

I learned how to balance my calories and focus on protein. The best part is that my relationship with food became much better. I no longer feel guilty after meals the way I used to.

I also noticed an improvement in my energy and endurance. The workouts were flexible and easy to apply. Even when I could not attend the live classes, the recordings helped me continue without stopping.

What I liked most was that the program was practical and suitable for everyday life. It was not just another plan that is hard to follow. I started to feel a difference in my energy and body tone, and most importantly, I was able to stay consistent.

— Ruba Mouayed`,
  },
  {
    name: "Huda",
    badge: "Improved stamina, completed full workouts",
    excerpt:
      "At first, exercise felt difficult for me. Over time, I noticed a clear improvement in my energy and endurance.",
    full: `Before the program, my activity was mostly limited to housework, and the idea of committing to exercise felt difficult for me.

I liked that the workouts were suitable for different levels. Over time, I noticed a clear improvement in my energy and endurance. What surprised me most was that I became able to complete the full workout without feeling extremely tired like I did in the beginning.

I also benefited from learning how to organize calories and protein, and I liked the idea of combining fasting with calorie reduction in a practical and comfortable way.

Having the recordings was a big advantage for me because there was no longer an excuse to skip the workout or stop being consistent.

Coach Hebah's style is supportive and mature, and I feel this program is suitable for any woman who wants to improve her fitness and health step by step.

— Huda`,
  },
  {
    name: "Zehra Deniz Ali",
    badge: "Better control around food + more energy",
    excerpt:
      "The program was not restrictive. I learned how to prioritize protein, feel fuller, avoid binge eating, and stay more consistent.",
    full: `One of my biggest struggles was self-control around food and finding the motivation to exercise consistently.

One of the biggest things I learned was that if I made protein a priority at iftar, I felt much fuller and was far less likely to binge eat or reach for junk food afterward. I also noticed that when I focused on filling, nutritious foods, I snacked much less throughout the day.

What surprised me most was that the program was not restrictive. The 5:2 fasting days gave structure, but I never felt deprived or like I was constantly dieting.

The fitness classes were challenging at first, but Hebah was always encouraging and gave modifications whenever needed. Over time, I became more active, had more energy, and realized how much my fitness had improved.

For me, the biggest difference was the support, encouragement, and flexibility. If you are a busy woman who needs accountability without feeling restricted, I highly recommend this program.

— Zehra Deniz Ali`,
  },
  {
    name: "Tasmiya Khalid",
    badge: "Stronger, more consistent, less overwhelmed",
    excerpt:
      "The program felt simple and manageable. I finally understood portions, protein, and how to build habits I could maintain.",
    full: `Before joining, I struggled with inconsistent meals, low activity levels, and not knowing where to start with either nutrition or exercise.

What I loved most about this program was how simple and manageable it felt. The 5:2 structure gave me a clear plan to follow, and the nutrition lessons helped me finally understand portion sizes and protein intake without feeling overwhelmed.

I noticed improvements in my strength, energy, and consistency, and for the first time I felt like I was building habits I could actually maintain long term.

Coach Hebah's support, encouragement, and responsiveness made a huge difference. I always felt guided, motivated, and never pressured.

What surprised me most was how much progress I could make without following a restrictive diet or spending hours exercising. The program fit naturally into my daily life and helped me build a healthier routine that I can continue long after the program ends.

— Tasmiya Khalid`,
  },
  {
    name: "Meeda",
    badge: "Built strength and consistency",
    excerpt:
      "I was not trying to lose weight. I wanted to manage perimenopause symptoms, build strength, and support my joints.",
    full: `I was not looking to lose weight. My goal was to cope better with perimenopause symptoms, build strength, and support my weak joints.

Before joining, I struggled with consistency in both exercise and healthy eating. The combination of the live sessions, nutrition guidance, and WhatsApp group gave me the accountability and support I was missing and helped me stop procrastinating.

Over the 6 weeks, I noticed positive changes in my physique, felt stronger, and became much more consistent with my habits.

What I appreciated most was that the program focused on building health and strength in a realistic, supportive way. Coach Hebah was truly the answer to my duaa, and the support from both the coaching and community made all the difference.

— Meeda`,
  },
  {
    name: "Rahma",
    badge: "Stronger muscles, fewer aches",
    excerpt:
      "I started noticing a difference after the first week. Within a few weeks, my muscles felt stronger and my aches improved tremendously.",
    full: `The fitness sessions gave me the dedication and consistency I was missing. Going through perimenopause, I know how important it is to exercise regularly, but I struggled to stay disciplined on my own.

Coach Hebah's motivating words, careful explanations, and guidance truly revitalized me. Her fitness program is suitable for all levels and ages, with a variety of exercises that work the whole body.

I started noticing a difference after the very first week. Within a few short weeks, my muscles felt stronger and the aches and pains I had been experiencing improved tremendously. Allahumma barik.

I am so grateful for this experience and definitely want to continue, inshaAllah.

— Rahma`,
  },
];

const results = [
  "Lose belly fat and reduce inches around your waist",
  "Build muscle tone and develop a stronger body",
  "Improve energy and reduce the cycle of overeating and cravings",
  "Learn a realistic nutrition approach you can continue after the program ends",
  "Gain confidence from seeing results",
  "Become more consistent with the support of a coach and community",
];

const included = [
  { icon: Video, title: "Up to 24 Live Coached Women-Only Fitness Classes" },
  { icon: MessageCircle, title: "6 Live Nutrition Deep Dives + Q&A" },
  { icon: Sparkles, title: "Complete Fitness & Nutrition System" },
  { icon: Play, title: "Workout & Nutrition Recordings" },
  { icon: Heart, title: "Direct Access to Coach Hebah" },
  { icon: Check, title: "Weekly Accountability & Support" },
  { icon: Users, title: "Women-Only Community" },
  { icon: Calendar, title: "PDF Guides & Resources" },
];

const whoFor = [
  "Want to lose fat and build strength",
  "Want more energy and confidence",
  "Need structure and accountability",
  "Are tired of trying to figure everything out alone",
  "Want a realistic approach that fits around work, family, and everyday life",
  "Want to create lasting habits instead of relying on motivation",
];

const howWorks = [
  "3-workout-per-week fitness program",
  "2 live coached sessions, 60 minutes each, in your home time slot",
  "1 additional workout completed through a recording or another live session",
  "Strength training, cardio, mobility, yoga, and Pilates",
  "1 weekly nutrition deep dive + Q&A in Arabic and English",
  "All sessions recorded for flexibility",
];

const privacyList = [
  "Women-only fitness and nutrition program",
  "Private Zoom registration required",
  "Individual access links for registered participants",
  "Privacy agreement required for all members",
  "Participant video not included in recordings",
  "Camera optional",
  "Class links may not be shared",
  "Recordings intended for registered participants only",
];

const tracks = [
  {
    title: "Europe, Middle East & Gulf",
    days: "Monday & Wednesday",
    time: "10:00 AM Istanbul / GMT+3",
  },
  {
    title: "North America East Coast",
    days: "Tuesday & Thursday",
    time: "9:00 AM EST",
  },
  {
    title: "North America West Coast",
    days: "Monday & Friday",
    time: "9:00 AM PST",
  },
];

const compareRows: [string, boolean, boolean][] = [
  ["Live Fitness Classes", true, false],
  ["Live Nutrition Coaching", true, false],
  ["Direct Coach Access", true, false],
  ["Community Support", true, false],
  ["Accountability", true, false],
  ["Recordings", true, true],
];

const faqs: FAQItem[] = [
  {
    q: "Do I need to be fit before joining?",
    a: `No.

Beginners are welcome, and all exercises can be modified to your current fitness level.

Whether you're just getting started or returning to exercise after a long break, you'll be able to participate and progress at your own pace.`,
  },
  {
    q: "I already work out. Will I still benefit?",
    a: `Yes.

Many women in my programs already exercise regularly but struggle with consistency, progression, nutrition, or seeing the results they want.

You'll benefit from the coaching, structure, accountability, nutrition education, and community support built into the program.`,
  },
  {
    q: "What if I have knee pain, back pain, injuries, or medical conditions?",
    a: `Many exercises can be modified to accommodate common aches, pains, and limitations.

However, if you have a medical condition, recent surgery, pregnancy, or any situation that may affect your ability to exercise safely, you should obtain clearance from your healthcare provider before participating.`,
  },
  {
    q: "Do I need equipment?",
    a: `For best results, I recommend having a set of light, medium, and heavy dumbbells.

Ideally:
• One light pair
• One medium pair
• One heavy pair

If that isn't possible, start with whatever you have available and we will help you make it work.`,
  },
  {
    q: "How much time will this take each week?",
    a: `Most women attend 2–4 live workouts per week and one nutrition session.

You can participate at the level that fits your schedule, and all sessions are recorded if you need additional flexibility.`,
  },
  {
    q: "Do I have to fast?",
    a: `No.

The nutrition system includes optional Sunnah fasting principles, but modifications are available based on your individual circumstances and goals.

You can still benefit from the program even if fasting is not appropriate for you.`,
  },
  {
    q: "Do I need to follow a special diet?",
    a: `No.

The program is built around real food and practical habits that fit into everyday life.

You do not need to purchase special foods, meal replacements, or follow an extreme diet.`,
  },
  {
    q: "What if I don't want to lose weight?",
    a: `That's perfectly fine.

While many women join to lose fat, the program is also designed to help you build strength, improve fitness, increase energy, improve your health, and develop sustainable habits that support long-term wellbeing.`,
  },
  {
    q: "What if I miss a class?",
    a: `Life happens.

All workout sessions and nutrition sessions are recorded, so you can catch up when it suits your schedule.`,
  },
  {
    q: "What if I can't attend live?",
    a: `You can still participate.

All workouts and nutrition sessions are recorded, so you'll continue to have access to the coaching and content even if you occasionally miss a live session.`,
  },
  {
    q: "Are recordings included?",
    a: `Yes.

Workout recordings and nutrition session recordings will be available throughout the program.`,
  },
  {
    q: "Do participants sign a privacy agreement?",
    a: `Yes.

All participants will be required to agree to the program's privacy guidelines before joining.

This includes respecting the privacy of Coach Hebah and fellow participants and not sharing access links, recordings, screenshots, or program materials outside the program.`,
  },
  {
    q: "Will I appear in the recordings?",
    a: `Workout and nutrition sessions will be recorded for participants who cannot attend live.

Participant video will not be featured in the recordings. However, participant audio may occasionally be captured if questions are asked during class or discussion.

For this reason, please avoid sharing any personal information that you would not want other program members to hear.

Recordings are provided exclusively for Summer Strong participants and may not be shared, distributed, downloaded, reposted, or used outside the program.

All participants agree to respect the privacy of Coach Hebah and fellow members by not sharing recordings, screenshots, class links, or program materials outside the community.`,
  },
  {
    q: "Do I have to turn my camera on?",
    a: `No.

Many women choose to keep their cameras off.

However, if you turn your camera on, Coach Hebah can provide real-time coaching, form corrections, and more personalized guidance during class.`,
  },
];

export default function LandingPage() {
  return (
    <main className="bg-background text-foreground overflow-x-hidden">
      {/* NAV */}
      <header className="absolute top-0 inset-x-0 z-30">
        <div className="container-narrow flex items-center justify-between py-6">
          <a href="#top" className="font-display text-xl sm:text-2xl text-primary-deep">
            Stronger<span className="text-primary-soft">Her</span>
          </a>
          <a href="#checkout" className="hidden sm:inline-flex btn-ghost">
            Join Now
          </a>
        </div>
      </header>

      {/* HERO */}
      <section id="top" className="relative pt-28 pb-20 md:pt-36 md:pb-28">
        <div
          aria-hidden
          className="absolute top-0 right-0 w-[60%] h-[70%] rounded-bl-[40%] bg-gradient-to-br from-accent/60 via-blush/30 to-transparent -z-10"
        />
        <div className="container-narrow grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div className="text-center md:text-left">
            <p className="eyebrow">Fitness · Nutrition · Lifestyle Coaching for Women</p>
            <h1 className="mt-5 text-4xl sm:text-5xl md:text-6xl font-medium leading-[1.05]">
              Feel proud of the woman you see in the mirror.
            </h1>
            <p className="mt-6 text-lg text-foreground/75 max-w-xl mx-auto md:mx-0">
              Lose belly fat, build muscle tone, and get stronger this summer with a 6-week fitness
              and nutrition program designed for busy Muslim women.
            </p>
            <p className="mt-4 text-base text-muted-foreground italic max-w-xl mx-auto md:mx-0">
              Without extreme diets, random workouts, or figuring it out alone. Finally get
              consistent with a coach and a community of sisters supporting you every step of the
              way.
            </p>

            <div className="mt-8 flex flex-col items-center md:items-start gap-6">
              <a href="#checkout" className="btn-primary">
                Join the 6-Week Bootcamp
              </a>
              <Countdown />
              <p className="text-sm text-muted-foreground">
                <Calendar className="inline w-4 h-4 mr-1.5 -mt-0.5 text-primary" />
                StrongerHer Summer Bootcamp · Starts June 21, 2026
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-6 bg-gradient-to-br from-primary/25 to-blush/40 rounded-[3rem] blur-2xl -z-10" />
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-[var(--shadow-glow)] border-[10px] border-card aspect-[4/5] max-w-md mx-auto">
              <img
                src={portrait}
                alt="Coach Hebah, founder of StrongerHer"
                className="w-full h-full object-cover"
                width={1024}
                height={1280}
              />
            </div>
            <div className="absolute -bottom-4 -left-4 sm:-left-8 card-soft px-5 py-4 max-w-[210px]">
              <p className="text-xs uppercase tracking-widest text-primary-soft">Live coached</p>
              <p className="mt-1 font-display text-lg text-primary-deep leading-tight">
                Women-only · Private · Recorded
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SALES VIDEO */}
      <section id="video" className="section-pad">
        <div className="container-narrow text-center">
          <p className="eyebrow">Watch & Learn</p>
          <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl">
            Watch How the StrongerHer Summer Bootcamp Works
          </h2>
          <p className="mt-5 max-w-2xl mx-auto text-foreground/75 text-lg">
            In this short video, Coach Hebah explains how the 6-week bootcamp helps women lose fat,
            build strength, understand nutrition, and stay consistent with the support of live
            coaching and a women-only community.
          </p>

          <div className="mt-10 max-w-3xl mx-auto">
            <div className="relative aspect-video rounded-3xl overflow-hidden border border-border bg-gradient-to-br from-primary-deep via-primary to-primary-soft shadow-[var(--shadow-glow)]">
              <div className="absolute inset-0 flex flex-col items-center justify-center text-primary-foreground text-center px-6">
                <div className="w-20 h-20 rounded-full bg-primary-foreground/15 backdrop-blur grid place-items-center border border-primary-foreground/30">
                  <Play size={32} className="ml-1" />
                </div>
                <p className="mt-6 font-display text-2xl sm:text-3xl">Sales video coming soon</p>
                <p className="mt-2 text-sm opacity-80">
                  Coach Hebah explains the bootcamp here
                </p>
              </div>
            </div>
            <div className="mt-8">
              <a href="#checkout" className="btn-primary">
                Join the 6-Week Bootcamp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="success-stories" className="section-pad bg-gradient-to-b from-accent/40 to-background">
        <div className="container-narrow text-center mb-10">
          <p className="eyebrow">Success Stories</p>
          <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl">Real women. Real progress.</h2>
          <p className="mt-5 max-w-2xl mx-auto text-foreground/75 text-lg">
            See what women have experienced through Coach Hebah's coaching, nutrition guidance,
            accountability, and supportive community.
          </p>
        </div>
        <div className="max-w-6xl mx-auto">
          <TestimonialSlider items={testimonials} />
        </div>
      </section>

      {/* RESULTS */}
      <section id="results" className="section-pad">
        <div className="container-narrow">
          <div className="text-center max-w-2xl mx-auto">
            <p className="eyebrow">Outcomes</p>
            <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl">What Results Can You Expect?</h2>
            <p className="mt-5 text-foreground/75 text-lg">
              Inside the 6-week bootcamp, you will be supported to:
            </p>
          </div>
          <ul className="mt-12 grid sm:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {results.map((r) => (
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

      {/* THREE PILLARS */}
      <section id="program" className="section-pad bg-gradient-to-b from-background via-accent/30 to-background">
        <div className="container-narrow">
          <div className="text-center max-w-2xl mx-auto">
            <p className="eyebrow">The Method</p>
            <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl">
              What Makes This Program Different?
            </h2>
          </div>

          <div className="mt-16 space-y-16 md:space-y-24">
            <Pillar
              imgSrc={dumbbell}
              imgAlt="Coach Hebah with dumbbell"
              eyebrow="01 · Live Coached"
              title="Live Coached Workouts That Help You Stay Consistent"
              body={[
                "Most women don't need another saved workout. They need a time to show up.",
                "Inside Summer Strong, you'll train live with Coach Hebah and a group of women working toward the same goals. You'll have a scheduled time to exercise, a coach guiding you every step of the way, and sisters encouraging you to keep going.",
                "And if life gets busy? Every session is recorded so you can stay on track.",
                "Consistency changes your body. Live coaching helps you stay consistent.",
              ]}
            />
            <Pillar
              imgSrc={coaching}
              imgAlt="Online nutrition coaching setup with laptop and notebook"
              eyebrow="02 · Nutrition Deep Dives"
              title="Weekly Nutrition Deep Dives That Teach You How Your Body Works"
              reverse
              body={[
                "Most women have tried diets. Very few have actually been taught nutrition.",
                "Inside Summer Strong, you'll join 6 live nutrition deep dives + Q&A where Coach Hebah teaches the principles behind fat loss, muscle building, appetite control, cravings, energy, healthy aging, and long-term success.",
                "These sessions cover topics like protein, metabolism, blood sugar, muscle, Sunnah fasting, real-food nutrition, habits, herbs, supplements, and more.",
                "You'll not only learn what to do — you'll understand why it works.",
              ]}
            />
            <Pillar
              customVisual={<CommunityMockup />}
              eyebrow="03 · Sisterhood"
              title="A Community of Sisters Walking the Same Path"
              body={[
                "Getting healthy is hard when you're trying to do it alone.",
                "Inside Summer Strong, you'll be with women who understand your struggles, share your goals, and are committed to improving their health alongside you.",
                "Celebrate victories together. Share challenges. Ask questions. Stay accountable.",
                "And on the days when motivation is low, you'll have a coach and a community helping you keep moving forward.",
              ]}
            />
          </div>

          <div className="mt-16 text-center">
            <a href="#checkout" className="btn-primary">
              Join the 6-Week Bootcamp
            </a>
          </div>
        </div>
      </section>

      {/* INCLUDED */}
      <section id="included" className="section-pad">
        <div className="container-narrow">
          <div className="text-center max-w-2xl mx-auto">
            <p className="eyebrow">What's Inside</p>
            <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl">Everything Included</h2>
            <p className="mt-5 text-foreground/75 text-lg">
              Everything you need to lose fat, build strength, understand how your body responds,
              and stay consistent — all in one place.
            </p>
          </div>

          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {included.map(({ icon: Icon, title }) => (
              <div key={title} className="card-soft p-6 text-center">
                <div className="mx-auto w-12 h-12 rounded-full bg-accent grid place-items-center text-primary">
                  <Icon size={22} />
                </div>
                <p className="mt-4 font-display text-lg text-primary-deep leading-snug">{title}</p>
              </div>
            ))}
          </div>

          <p className="mt-10 text-center text-muted-foreground max-w-2xl mx-auto">
            Summer Strong combines live coaching, nutrition education, accountability, community,
            and ongoing support for less than the cost of a couple of personal training sessions.
          </p>

          <div className="mt-10 text-center">
            <a href="#checkout" className="btn-primary">
              Join the 6-Week Bootcamp
            </a>
          </div>
        </div>
      </section>

      {/* MEET COACH */}
      <section id="coach" className="section-pad bg-gradient-to-b from-accent/40 to-background">
        <div className="container-narrow grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div className="relative order-1 md:order-1">
            <div className="absolute -inset-5 bg-gradient-to-br from-primary/25 to-blush/40 rounded-[3rem] blur-2xl -z-10" />
            <div className="relative rounded-[2.5rem] overflow-hidden border-[10px] border-card shadow-[var(--shadow-glow)] aspect-[4/5] max-w-md mx-auto">
              <img
                src={dumbbell}
                alt="Coach Hebah holding a dumbbell"
                className="w-full h-full object-cover"
                loading="lazy"
                width={1024}
                height={1280}
              />
            </div>
          </div>
          <div className="order-2 md:order-2">
            <p className="eyebrow">Your Coach</p>
            <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl">Meet Coach Hebah</h2>
            <div className="mt-6 space-y-4 text-foreground/80 text-[17px] leading-relaxed max-w-xl">
              <p>
                Coach Hebah has been helping women build strength, improve their fitness, and feel
                more confident in their bodies for over 20 years.
              </p>
              <p>
                Her journey began with her own struggles around weight, confidence, and
                consistency. Over time, she discovered how strength training, smart nutrition, and
                supportive accountability can completely change the way a woman feels in her body.
              </p>
              <p>
                Today, she helps Muslim women lose fat, build strength, improve energy, and create
                realistic habits — without extreme dieting or all-or-nothing workout plans.
              </p>
              <p>
                Her coaching style is supportive, practical, encouraging, and focused on helping
                women understand their bodies so they can make progress in a way that fits real
                life.
              </p>
              <p className="text-sm text-muted-foreground italic">
                Coach Hebah's full personal story can be added here later.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* COMPARISON */}
      <section id="compare" className="section-pad">
        <div className="container-narrow">
          <div className="text-center max-w-2xl mx-auto">
            <p className="eyebrow">Why It Works</p>
            <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl">Why Summer Strong Is Different</h2>
          </div>

          <div className="mt-12 max-w-3xl mx-auto card-soft overflow-hidden">
            <div className="grid grid-cols-3 bg-muted/60 text-xs sm:text-sm uppercase tracking-widest text-muted-foreground">
              <div className="p-4 sm:p-5">Feature</div>
              <div className="p-4 sm:p-5 text-center bg-primary text-primary-foreground font-semibold">
                Summer Strong
              </div>
              <div className="p-4 sm:p-5 text-center">Recorded Program</div>
            </div>
            {compareRows.map(([feat, a, b], i) => (
              <div
                key={feat}
                className={`grid grid-cols-3 text-sm sm:text-base ${
                  i % 2 ? "bg-cream/60" : "bg-card"
                }`}
              >
                <div className="p-4 sm:p-5 font-medium text-foreground/90">{feat}</div>
                <div className="p-4 sm:p-5 text-center bg-primary/8 border-x border-primary/15">
                  {a ? (
                    <Check className="inline text-primary" size={22} strokeWidth={3} />
                  ) : (
                    <span className="text-muted-foreground/60">—</span>
                  )}
                </div>
                <div className="p-4 sm:p-5 text-center">
                  {b ? (
                    <Check className="inline text-muted-foreground" size={20} />
                  ) : (
                    <span className="text-muted-foreground/60">—</span>
                  )}
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
            <p className="eyebrow">Is This You?</p>
            <h2 className="mt-3 text-3xl">Who This Is For</h2>
            <p className="mt-3 text-foreground/75">This program is for women who:</p>
            <ul className="mt-6 space-y-3">
              {whoFor.map((w) => (
                <li key={w} className="flex gap-3 items-start">
                  <Check className="shrink-0 mt-1 text-primary" size={18} />
                  <span className="text-[15px] leading-relaxed">{w}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <img
                src={lifestyle}
                alt="Tea and journal — wellness lifestyle"
                className="w-full rounded-2xl object-cover aspect-[16/9]"
                loading="lazy"
                width={1280}
                height={896}
              />
            </div>
          </div>

          <div className="card-soft p-8 sm:p-10">
            <p className="eyebrow">The Format</p>
            <h2 className="mt-3 text-3xl">How the Program Works</h2>
            <ul className="mt-6 space-y-3">
              {howWorks.map((w) => (
                <li key={w} className="flex gap-3 items-start">
                  <Dumbbell className="shrink-0 mt-1 text-primary" size={18} />
                  <span className="text-[15px] leading-relaxed">{w}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm text-muted-foreground leading-relaxed">
              You are welcome to attend any session that works for your schedule. Many women attend
              their home time slot and use recordings or additional sessions as needed.
            </p>
            <div className="mt-8 text-center">
              <a href="#checkout" className="btn-primary">
                Join the 6-Week Bootcamp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* NUTRITION CTA / VISUAL BAND */}
      <section className="section-pad">
        <div className="container-narrow grid md:grid-cols-2 items-center gap-10">
          <img
            src={nutrition}
            alt="Healthy balanced meal bowl"
            className="rounded-3xl shadow-[var(--shadow-card)] aspect-[4/3] object-cover w-full"
            loading="lazy"
            width={1280}
            height={896}
          />
          <div>
            <p className="eyebrow">Real food. Real life.</p>
            <h2 className="mt-3 text-3xl sm:text-4xl">
              Learn nutrition that actually fits your everyday life.
            </h2>
            <p className="mt-5 text-foreground/75">
              No meal replacements. No extreme diets. Just clear principles around protein, portions,
              cravings, energy, and optional Sunnah fasting — taught live, so you can ask the
              questions specific to your body.
            </p>
          </div>
        </div>
      </section>

      {/* FLEXIBLE ATTENDANCE + SCHEDULE */}
      <section id="schedule" className="section-pad bg-gradient-to-b from-accent/40 to-background">
        <div className="container-narrow">
          <div className="text-center max-w-2xl mx-auto">
            <p className="eyebrow">Flexible Attendance</p>
            <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl">
              Sample Weekly Class Schedule Across Time Zones
            </h2>
            <p className="mt-5 text-foreground/75 text-lg">
              You may attend any session that works for your schedule. Whether you attend live or
              catch up later, you'll always have a clear path to stay on track.
            </p>
          </div>

          <div className="mt-12 grid md:grid-cols-3 gap-5">
            {tracks.map((t) => (
              <div key={t.title} className="card-soft p-7 text-center">
                <Clock className="mx-auto text-primary" size={28} />
                <p className="mt-4 font-display text-xl text-primary-deep">{t.title}</p>
                <p className="mt-3 text-sm uppercase tracking-widest text-muted-foreground">
                  {t.days}
                </p>
                <p className="mt-2 text-lg font-medium">{t.time}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-center text-xs text-muted-foreground italic">
            Provided sufficient enrollment numbers.
          </p>
        </div>
      </section>

      {/* PRIVACY */}
      <section id="privacy" className="section-pad">
        <div className="container-narrow grid md:grid-cols-[1fr_1.3fr] gap-10 items-start">
          <div>
            <div className="w-14 h-14 rounded-2xl bg-primary text-primary-foreground grid place-items-center">
              <Lock size={26} />
            </div>
            <p className="eyebrow mt-6">Safe Space</p>
            <h2 className="mt-3 text-3xl sm:text-4xl">Women-Only & Private</h2>
            <p className="mt-5 text-foreground/75">
              Privacy matters to both Coach Hebah and you. Summer Strong was designed to provide a
              comfortable, supportive environment where clients and Coach Hebah can focus on
              improving health without worrying about who may be watching.
            </p>
          </div>
          <div className="card-soft p-7 sm:p-9">
            <ul className="grid sm:grid-cols-2 gap-3">
              {privacyList.map((p) => (
                <li key={p} className="flex gap-3 items-start text-[15px]">
                  <ShieldCheck className="shrink-0 mt-0.5 text-primary" size={18} />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
            <p className="mt-7 pt-7 border-t border-border text-sm text-muted-foreground leading-relaxed">
              Every participant agrees to respect the privacy of Coach Hebah and fellow members by
              not sharing class links, recordings, screenshots, or program materials outside the
              community.
            </p>
          </div>
        </div>
      </section>

      {/* CHECKOUT */}
      <section
        id="checkout"
        className="section-pad bg-gradient-to-br from-primary-deep via-primary to-primary-soft text-primary-foreground"
      >
        <div className="container-narrow text-center">
          <p className="eyebrow !text-primary-foreground/70">Investment</p>
          <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl !text-primary-foreground">
            Ready to Join?
          </h2>
          <p className="mt-5 max-w-xl mx-auto opacity-90">
            Lose fat. Build strength. Feel proud of the woman you see in the mirror.
          </p>

          <div className="mt-12 max-w-lg mx-auto rounded-[2.5rem] bg-card text-foreground p-8 sm:p-10 shadow-[var(--shadow-glow)] text-left">
            <p className="eyebrow">Summer Strong for Her</p>
            <h3 className="mt-2 text-2xl sm:text-3xl">
              6-Week Women's Fitness & Nutrition Bootcamp
            </h3>
            <p className="mt-3 text-sm text-muted-foreground">
              <Calendar size={14} className="inline -mt-0.5 mr-1 text-primary" />
              Starts June 21, 2026
            </p>

            <div className="mt-7 pt-7 border-t border-border flex items-baseline gap-2">
              <span className="font-display text-6xl text-primary-deep">$147</span>
              <span className="text-muted-foreground">USD</span>
            </div>
            <p className="mt-3 text-sm text-muted-foreground">
              Less than the cost of a couple of personal training sessions.
            </p>

            <ul className="mt-6 space-y-2.5 text-[15px]">
              {[
                "Up to 24 live women-only fitness classes",
                "6 live nutrition deep dives + Q&A",
                "Direct access to Coach Hebah",
                "Women-only private community",
                "All sessions recorded",
              ].map((x) => (
                <li key={x} className="flex gap-2.5 items-start">
                  <Check size={18} className="shrink-0 mt-0.5 text-primary" />
                  <span>{x}</span>
                </li>
              ))}
            </ul>

            <a href="#checkout" className="btn-primary w-full mt-8">
              Join Now
            </a>
            <p className="mt-4 text-center text-xs text-muted-foreground">
              Get the coaching, structure, accountability, and support you need to stay consistent.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="section-pad">
        <div className="container-read">
          <div className="text-center">
            <p className="eyebrow">FAQ</p>
            <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl">Frequently Asked Questions</h2>
          </div>
          <div className="mt-12">
            <FAQ items={faqs} />
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="section-pad bg-gradient-to-b from-background to-accent/50">
        <div className="container-read text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl">
            Ready to feel stronger, more confident, and more consistent this summer?
          </h2>
          <p className="mt-6 text-foreground/75 text-lg">
            Join the 6-week StrongerHer Summer Bootcamp and get the coaching, structure,
            accountability, and women-only support you need to stay consistent.
          </p>
          <div className="mt-10">
            <a href="#checkout" className="btn-primary">
              Join the 6-Week Bootcamp
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-10 border-t border-border">
        <div className="container-narrow flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p className="font-display text-lg text-primary-deep">
            Stronger<span className="text-primary-soft">Her</span>
          </p>
          <p>© {new Date().getFullYear()} StrongerHer · Coaching for Muslim women</p>
        </div>
      </footer>

      <StickyMobileCTA />
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
    <div
      className={`grid md:grid-cols-2 gap-10 md:gap-14 items-center ${
        reverse ? "md:[&>*:first-child]:order-2" : ""
      }`}
    >
      <div>
        {customVisual ? (
          customVisual
        ) : (
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-blush/30 rounded-[2.5rem] blur-xl -z-10" />
            <img
              src={imgSrc}
              alt={imgAlt}
              className="w-full rounded-3xl object-cover aspect-[4/5] max-w-md mx-auto shadow-[var(--shadow-card)]"
              loading="lazy"
              width={1024}
              height={1280}
            />
          </div>
        )}
      </div>
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h3 className="mt-3 text-2xl sm:text-3xl md:text-4xl leading-tight">{title}</h3>
        <div className="mt-5 space-y-4 text-foreground/80 text-[16px] leading-relaxed">
          {body.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </div>
    </div>
  );
}
