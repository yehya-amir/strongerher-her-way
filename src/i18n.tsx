import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Lang = "en" | "ar";

type Dict = typeof en;

export const en = {
  dir: "ltr" as "ltr" | "rtl",
  nav: { joinNow: "Join Now", language: "العربية" },
  hero: {
    h1: "Feel proud of the woman you see in the mirror.",
    p1: "Lose belly fat, build muscle tone, and get stronger this summer with a 6-week fitness and nutrition program designed for busy Muslim women.",
    p2: "Without extreme diets, random workouts, or figuring it out alone.",
    cta: "Join StrongerHer Bootcamp",
    starts: "StrongerHer Bootcamp · Starts June 22, 2026",
    bannerStart: "STRONGERHER BOOTCAMP STARTS JUNE 22, 2026",
    bootcampStartsIn: "Bootcamp Starts In",
    badgeTop: "Live coached",
    badgeBottom: "Women-only · Private · Recorded",
  },
  stories: {
    h2: "Real Women. Real Progress.",
  },
  results: {
    eyebrow: "Outcomes",
    h2: "What Results Can You Expect?",
    p: "Inside the 6-week bootcamp, you will be supported to:",
    items: [
      "Lose belly fat and reduce inches around your waist",
      "Build muscle tone and develop a stronger body",
      "Improve energy and reduce the cycle of overeating and cravings",
      "Learn a realistic nutrition approach you can continue after the program ends",
      "Gain confidence from seeing results",
      "Become more consistent with the support of a coach and community",
    ],
  },
  midCta: {
    title: "Ready to start your transformation?",
    sub: "Secure your spot in the StrongerHer Summer Bootcamp today.",
  },
  pillars: {
    eyebrow: "The Method",
    h2: "What Makes This Program Different?",
    one: {
      eyebrow: "01 · Live Coached",
      title: "Live Coached Workouts That Help You Stay Consistent",
      body: [
        "Most women don't need another saved workout. They need a time to show up.",
        "Inside Summer Strong, you'll train live with Coach Hebah and a group of women working toward the same goals. You'll have a scheduled time to exercise, a coach guiding you every step of the way, and sisters encouraging you to keep going.",
        "And if life gets busy? Every session is recorded so you can stay on track.",
        "Consistency changes your body. Live coaching helps you stay consistent.",
      ],
    },
    two: {
      eyebrow: "02 · Nutrition Deep Dives",
      title: "Weekly Nutrition Deep Dives That Teach You How Your Body Works",
      body: [
        "Most women have tried diets. Very few have actually been taught nutrition.",
        "Inside Summer Strong, you'll join 6 live nutrition deep dives + Q&A where Coach Hebah teaches the principles behind fat loss, muscle building, appetite control, cravings, energy, healthy aging, and long-term success.",
        "These sessions cover topics like protein, metabolism, blood sugar, muscle, Sunnah fasting, real-food nutrition, habits, herbs, supplements, and more.",
        "You'll not only learn what to do — you'll understand why it works.",
      ],
    },
    three: {
      eyebrow: "03 · Sisterhood",
      title: "A Community of Sisters Walking the Same Path",
      body: [
        "Getting healthy is hard when you're trying to do it alone.",
        "Inside Summer Strong, you'll be with women who understand your struggles, share your goals, and are committed to improving their health alongside you.",
        "Celebrate victories together. Share challenges. Ask questions. Stay accountable.",
        "And on the days when motivation is low, you'll have a coach and a community helping you keep moving forward.",
      ],
    },
  },
  included: {
    eyebrow: "What's Inside",
    h2: "Everything Included",
    p: "Everything you need to lose fat, build strength, understand how your body responds, and stay consistent — all in one place.",
    items: [
      "Up to 24 Live Coached Women-Only Fitness Classes",
      "6 Live Nutrition Deep Dives + Q&A",
      "Complete Fitness & Nutrition System",
      "Workout & Nutrition Recordings",
      "Direct Access to Coach Hebah",
      "Weekly Accountability & Support",
      "Women-Only Community",
      "PDF Guides & Resources",
    ],
    note: "Summer Strong combines live coaching, nutrition education, accountability, community, and ongoing support for less than the cost of a couple of personal training sessions.",
  },
  coach: {
    eyebrow: "Your Coach",
    h2: "Meet Coach Hebah",
    body: [
      "Coach Hebah has been helping women build strength, improve their fitness, and feel more confident in their bodies for over 20 years.",
      "Her journey began with her own struggles around weight, confidence, and consistency. Over time, she discovered how strength training, smart nutrition, and supportive accountability can completely change the way a woman feels in her body.",
      "Today, she helps Muslim women lose fat, build strength, improve energy, and create realistic habits — without extreme dieting or all-or-nothing workout plans.",
      "Her coaching style is supportive, practical, encouraging, and focused on helping women understand their bodies so they can make progress in a way that fits real life.",
    ],
  },
  compare: {
    eyebrow: "Why It Works",
    h2: "Why Summer Strong Is Different",
    feature: "Feature",
    summer: "Summer Strong",
    recorded: "Recorded Program",
    rows: [
      "Live Fitness Classes",
      "Live Nutrition Coaching",
      "Direct Coach Access",
      "Community Support",
      "Accountability",
      "Recordings",
    ],
  },
  who: {
    eyebrow: "Is This You?",
    h2: "Who This Is For",
    intro: "This program is for women who:",
    items: [
      "Want to lose fat and build strength",
      "Want more energy and confidence",
      "Need structure and accountability",
      "Are tired of trying to figure everything out alone",
      "Want a realistic approach that fits around work, family, and everyday life",
      "Want to create lasting habits instead of relying on motivation",
    ],
  },
  how: {
    eyebrow: "The Format",
    h2: "How the Program Works",
    items: [
      "3-workout-per-week fitness program",
      "2 live coached sessions, 60 minutes each, in your home time slot",
      "1 additional workout completed through a recording or another live session",
      "Strength training, cardio, mobility, yoga, and Pilates",
      "1 weekly nutrition deep dive + Q&A in Arabic and English",
      "All sessions recorded for flexibility",
    ],
    note: "You are welcome to attend any session that works for your schedule. Many women attend their home time slot and use recordings or additional sessions as needed.",
  },
  nutritionBand: {
    eyebrow: "Real food. Real life.",
    h2: "Learn nutrition that actually fits your everyday life.",
    p: "No meal replacements. No extreme diets. Just clear principles around protein, portions, cravings, energy, and optional Sunnah fasting — taught live, so you can ask the questions specific to your body.",
  },
  schedule: {
    eyebrow: "Flexible Attendance",
    h2: "Sample Weekly Class Schedule Across Time Zones",
    p: "You may attend any session that works for your schedule. Whether you attend live or catch up later, you'll always have a clear path to stay on track.",
    note: "Provided sufficient enrollment numbers.",
    tracks: [
      { title: "Europe, Middle East & Gulf", days: "Monday & Wednesday", time: "10:00 AM Istanbul / GMT+3" },
      { title: "North America East Coast", days: "Tuesday & Thursday", time: "9:00 AM EST" },
      { title: "North America West Coast", days: "Monday & Friday", time: "9:00 AM PST" },
    ],
  },
  privacy: {
    eyebrow: "Safe Space",
    h2: "Women-Only & Private",
    p: "Privacy matters to both Coach Hebah and you. Summer Strong was designed to provide a comfortable, supportive environment where clients and Coach Hebah can focus on improving health without worrying about who may be watching.",
    items: [
      "Women-only fitness and nutrition program",
      "Private Zoom registration required",
      "Individual access links for registered participants",
      "Privacy agreement required for all members",
      "Participant video not included in recordings",
      "Camera optional",
      "Class links may not be shared",
      "Recordings intended for registered participants only",
    ],
    footer:
      "Every participant agrees to respect the privacy of Coach Hebah and fellow members by not sharing class links, recordings, screenshots, or program materials outside the community.",
  },
  checkout: {
    eyebrow: "Investment",
    h2: "Ready to Join?",
    p: "Lose fat. Build strength. Feel proud of the woman you see in the mirror.",
    badge: "Summer Strong for Her",
    title: "6-Week Women's Fitness & Nutrition Bootcamp",
    starts: "Starts June 21, 2026",
    usd: "USD",
    priceNote: "Less than the cost of a couple of personal training sessions.",
    includes: [
      "Up to 24 live women-only fitness classes",
      "6 live nutrition deep dives + Q&A",
      "Direct access to Coach Hebah",
      "Women-only private community",
      "All sessions recorded",
    ],
    button: "Join Now",
    footer: "Get the coaching, structure, accountability, and support you need to stay consistent.",
  },
  faq: {
    eyebrow: "FAQ",
    h2: "Frequently Asked Questions",
  },
  finalCta: {
    h2: "Ready to feel stronger, more confident, and more consistent this summer?",
    p: "Join the 6-week StrongerHer Summer Bootcamp and get the coaching, structure, accountability, and women-only support you need to stay consistent.",
  },
  footer: {
    rights: "© {year} StrongerHer · Coaching for Muslim women",
    instagram: "Instagram",
  },
  whatsapp: "Have questions? Contact",
  misc: {
    countdownLabel: "Bootcamp starts in",
    days: "Days",
    hours: "Hours",
    minutes: "Min",
    seconds: "Sec",
    bootcampMember: "Bootcamp Member",
    readFull: "Read full story →",
    successStory: "Success Story",
    close: "Close",
  },
  faqs: [
    {
      q: "Do I need to be fit before joining?",
      a: `No.\n\nBeginners are welcome, and all exercises can be modified to your current fitness level.\n\nWhether you're just getting started or returning to exercise after a long break, you'll be able to participate and progress at your own pace.`,
    },
    {
      q: "I already work out. Will I still benefit?",
      a: `Yes.\n\nMany women in my programs already exercise regularly but struggle with consistency, progression, nutrition, or seeing the results they want.\n\nYou'll benefit from the coaching, structure, accountability, nutrition education, and community support built into the program.`,
    },
    {
      q: "What if I have knee pain, back pain, injuries, or medical conditions?",
      a: `Many exercises can be modified to accommodate common aches, pains, and limitations.\n\nHowever, if you have a medical condition, recent surgery, pregnancy, or any situation that may affect your ability to exercise safely, you should obtain clearance from your healthcare provider before participating.`,
    },
    {
      q: "Do I need equipment?",
      a: `For best results, I recommend having a set of light, medium, and heavy dumbbells.\n\nIdeally:\n• One light pair\n• One medium pair\n• One heavy pair\n\nIf that isn't possible, start with whatever you have available and we will help you make it work.`,
    },
    {
      q: "How much time will this take each week?",
      a: `Most women attend 2–4 live workouts per week and one nutrition session.\n\nYou can participate at the level that fits your schedule, and all sessions are recorded if you need additional flexibility.`,
    },
    {
      q: "Do I have to fast?",
      a: `No.\n\nThe nutrition system includes optional Sunnah fasting principles, but modifications are available based on your individual circumstances and goals.\n\nYou can still benefit from the program even if fasting is not appropriate for you.`,
    },
    {
      q: "Do I need to follow a special diet?",
      a: `No.\n\nThe program is built around real food and practical habits that fit into everyday life.\n\nYou do not need to purchase special foods, meal replacements, or follow an extreme diet.`,
    },
    {
      q: "What if I don't want to lose weight?",
      a: `That's perfectly fine.\n\nWhile many women join to lose fat, the program is also designed to help you build strength, improve fitness, increase energy, improve your health, and develop sustainable habits that support long-term wellbeing.`,
    },
    {
      q: "What if I miss a class?",
      a: `Life happens.\n\nAll workout sessions and nutrition sessions are recorded, so you can catch up when it suits your schedule.`,
    },
    {
      q: "What if I can't attend live?",
      a: `You can still participate.\n\nAll workouts and nutrition sessions are recorded, so you'll continue to have access to the coaching and content even if you occasionally miss a live session.`,
    },
    {
      q: "Are recordings included?",
      a: `Yes.\n\nWorkout recordings and nutrition session recordings will be available throughout the program.`,
    },
    {
      q: "Do participants sign a privacy agreement?",
      a: `Yes.\n\nAll participants will be required to agree to the program's privacy guidelines before joining.\n\nThis includes respecting the privacy of Coach Hebah and fellow participants and not sharing access links, recordings, screenshots, or program materials outside the program.`,
    },
    {
      q: "Will I appear in the recordings?",
      a: `Workout and nutrition sessions will be recorded for participants who cannot attend live.\n\nParticipant video will not be featured in the recordings. However, participant audio may occasionally be captured if questions are asked during class or discussion.\n\nFor this reason, please avoid sharing any personal information that you would not want other program members to hear.\n\nRecordings are provided exclusively for Summer Strong participants and may not be shared, distributed, downloaded, reposted, or used outside the program.\n\nAll participants agree to respect the privacy of Coach Hebah and fellow members by not sharing recordings, screenshots, class links, or program materials outside the community.`,
    },
    {
      q: "Do I have to turn my camera on?",
      a: `No.\n\nMany women choose to keep their cameras off.\n\nHowever, if you turn your camera on, Coach Hebah can provide real-time coaching, form corrections, and more personalized guidance during class.`,
    },
  ],
};

export const ar: Dict = {
  dir: "rtl",
  nav: { joinNow: "اشتركي الآن", language: "English" },
  hero: {
    h1: "افتخري بالمرأة التي ترينها في المرآة.",
    p1: "تخلصي من دهون البطن، وابني عضلاتك، واكتسبي القوة هذا الصيف من خلال برنامج لياقة وتغذية لمدة 6 أسابيع مصمم للمرأة المسلمة المشغولة.",
    p2: "بدون حميات قاسية، أو تمارين عشوائية، أو محاولة اكتشاف كل شيء بمفردك.",
    cta: "انضمي إلى معسكر StrongerHer",
    starts: "معسكر StrongerHer · يبدأ 22 يونيو 2026",
    bannerStart: "معسكر STRONGERHER يبدأ 22 يونيو 2026",
    bootcampStartsIn: "يبدأ المعسكر خلال",
    badgeTop: "تدريب مباشر",
    badgeBottom: "للنساء فقط · خاص · مسجّل",
  },
  stories: {
    h2: "نساء حقيقيات. تقدّم حقيقي.",
  },
  results: {
    eyebrow: "النتائج",
    h2: "ما النتائج التي يمكنك توقعها؟",
    p: "خلال البرنامج لمدة 6 أسابيع، ستحصلين على الدعم لتحقيق:",
    items: [
      "فقدان دهون البطن وتقليل محيط الخصر",
      "بناء عضلات وتطوير جسم أقوى",
      "تحسين الطاقة وتقليل الإفراط في الأكل والرغبة الشديدة",
      "تعلّم منهج تغذية واقعي يمكنك الاستمرار به بعد البرنامج",
      "اكتساب الثقة من رؤية النتائج",
      "أن تصبحي أكثر التزامًا بدعم المدربة والمجتمع",
    ],
  },
  midCta: {
    title: "هل أنت جاهزة لبدء التحول؟",
    sub: "احجزي مكانك في معسكر StrongerHer الصيفي اليوم.",
  },
  pillars: {
    eyebrow: "المنهج",
    h2: "ما الذي يميّز هذا البرنامج؟",
    one: {
      eyebrow: "01 · تدريب مباشر",
      title: "تمارين مباشرة مع المدربة تساعدك على الالتزام",
      body: [
        "معظم النساء لا يحتجن إلى تمرين محفوظ جديد، بل إلى موعد للظهور والالتزام.",
        "داخل Summer Strong، ستتدربين مباشرة مع المدربة هبة ومجموعة من النساء يسعين لنفس الأهداف. ستحصلين على وقت محدد للتمرين، ومدربة ترشدك خطوة بخطوة، وأخوات يشجعنك على الاستمرار.",
        "وإذا انشغلت الحياة؟ كل جلسة مسجّلة لتبقي على المسار.",
        "الالتزام هو ما يغيّر جسمك، والتدريب المباشر يساعدك على الالتزام.",
      ],
    },
    two: {
      eyebrow: "02 · جلسات التغذية المعمّقة",
      title: "جلسات تغذية أسبوعية تعلّمك كيف يعمل جسمك",
      body: [
        "معظم النساء جرّبن الحميات، لكن قلة منهن تعلّمن التغذية فعلًا.",
        "داخل البرنامج، ستحضرين 6 جلسات تغذية مباشرة + أسئلة وأجوبة تعلّمك مبادئ فقدان الدهون، بناء العضلات، التحكم بالشهية، الرغبات، الطاقة، الشيخوخة الصحية، والنجاح طويل الأمد.",
        "تشمل المواضيع: البروتين، الأيض، سكر الدم، العضلات، الصيام السنّة، التغذية الحقيقية، العادات، الأعشاب، المكمّلات وغيرها.",
        "لن تتعلمي فقط ماذا تفعلين، بل ستفهمين لماذا ينجح ذلك.",
      ],
    },
    three: {
      eyebrow: "03 · أخوية",
      title: "مجتمع من الأخوات يسرن في نفس الطريق",
      body: [
        "أن تصبحي صحية أمر صعب عندما تحاولين وحدك.",
        "داخل البرنامج، ستكونين مع نساء يفهمن صعوباتك، ويشاركنك أهدافك، وملتزمات بتحسين صحتهن معك.",
        "احتفلن بالإنجازات معًا. شاركن التحديات. اسألن الأسئلة. ابقَين ملتزمات.",
        "وفي أيام انخفاض الحافز، ستجدين مدربة ومجتمعًا يساعدانك على المضي قدمًا.",
      ],
    },
  },
  included: {
    eyebrow: "ما بالداخل",
    h2: "كل شيء مُتضمّن",
    p: "كل ما تحتاجينه لفقدان الدهون وبناء القوة وفهم استجابة جسمك والالتزام — في مكان واحد.",
    items: [
      "ما يصل إلى 24 حصة لياقة مباشرة للنساء فقط",
      "6 جلسات تغذية مباشرة معمّقة + أسئلة وأجوبة",
      "نظام كامل للياقة والتغذية",
      "تسجيلات التمارين وجلسات التغذية",
      "تواصل مباشر مع المدربة هبة",
      "متابعة ودعم أسبوعي",
      "مجتمع للنساء فقط",
      "أدلة PDF وموارد",
    ],
    note: "يجمع البرنامج بين التدريب المباشر، التثقيف الغذائي، المساءلة، المجتمع، والدعم المستمر بسعر أقل من جلستين من التدريب الشخصي.",
  },
  coach: {
    eyebrow: "مدربتك",
    h2: "تعرّفي على المدربة هبة",
    body: [
      "تساعد المدربة هبة النساء على بناء القوة، وتحسين لياقتهن، والشعور بثقة أكبر بأجسادهن منذ أكثر من 20 عامًا.",
      "بدأت رحلتها بصعوباتها الخاصة مع الوزن والثقة والالتزام. ومع الوقت، اكتشفت كيف يغيّر تدريب القوة، والتغذية الذكية، والدعم المساءلة شعور المرأة في جسدها بالكامل.",
      "اليوم، تساعد النساء المسلمات على فقدان الدهون وبناء القوة وتحسين الطاقة وخلق عادات واقعية — دون حميات قاسية أو خطط تمرين متطرفة.",
      "أسلوبها داعم وعملي ومشجّع، يركّز على مساعدة النساء على فهم أجسادهن للتقدّم بطريقة تناسب الحياة الواقعية.",
    ],
  },
  compare: {
    eyebrow: "لماذا ينجح",
    h2: "ما الذي يجعل Summer Strong مختلفًا",
    feature: "الميزة",
    summer: "Summer Strong",
    recorded: "برنامج مسجّل",
    rows: [
      "حصص لياقة مباشرة",
      "تدريب تغذية مباشر",
      "تواصل مباشر مع المدربة",
      "دعم مجتمعي",
      "المساءلة",
      "التسجيلات",
    ],
  },
  who: {
    eyebrow: "هل هذا أنت؟",
    h2: "لمن هذا البرنامج",
    intro: "هذا البرنامج للنساء اللواتي:",
    items: [
      "يرغبن في فقدان الدهون وبناء القوة",
      "يردن طاقة وثقة أكثر",
      "بحاجة إلى هيكل ومساءلة",
      "تعبن من محاولة اكتشاف كل شيء وحدهن",
      "يردن منهجًا واقعيًا يناسب العمل والعائلة والحياة اليومية",
      "يردن بناء عادات دائمة بدل الاعتماد على الحافز",
    ],
  },
  how: {
    eyebrow: "الصيغة",
    h2: "كيف يعمل البرنامج",
    items: [
      "برنامج لياقة 3 تمارين في الأسبوع",
      "جلستان مباشرتان، 60 دقيقة لكل منهما، في توقيتك المحلي",
      "تمرين إضافي يُكمل عبر تسجيل أو جلسة مباشرة أخرى",
      "تدريب قوة، كارديو، مرونة، يوغا، وبيلاتس",
      "جلسة تغذية أسبوعية معمّقة + أسئلة وأجوبة بالعربية والإنجليزية",
      "جميع الجلسات مسجّلة للمرونة",
    ],
    note: "يمكنك حضور أي جلسة تناسب جدولك. كثير من النساء يحضرن جلسة توقيتهن ويستخدمن التسجيلات أو جلسات إضافية حسب الحاجة.",
  },
  nutritionBand: {
    eyebrow: "طعام حقيقي. حياة حقيقية.",
    h2: "تعلّمي تغذية تناسب حياتك اليومية فعلًا.",
    p: "لا بدائل وجبات. لا حميات قاسية. فقط مبادئ واضحة حول البروتين، الحصص، الرغبات، الطاقة، والصيام السنّة الاختياري — تُدرَّس مباشرة لتسألي عن جسمك تحديدًا.",
  },
  schedule: {
    eyebrow: "حضور مرن",
    h2: "نموذج للجدول الأسبوعي عبر المناطق الزمنية",
    p: "يمكنك حضور أي جلسة تناسب جدولك. سواء حضرت مباشرة أو لاحقًا، سيكون لديك دائمًا مسار واضح للبقاء على المسار.",
    note: "وفقًا لأعداد التسجيل الكافية.",
    tracks: [
      { title: "أوروبا والشرق الأوسط والخليج", days: "الإثنين والأربعاء", time: "10:00 صباحًا بتوقيت إسطنبول / GMT+3" },
      { title: "الساحل الشرقي لأمريكا الشمالية", days: "الثلاثاء والخميس", time: "9:00 صباحًا EST" },
      { title: "الساحل الغربي لأمريكا الشمالية", days: "الإثنين والجمعة", time: "9:00 صباحًا PST" },
    ],
  },
  privacy: {
    eyebrow: "مكان آمن",
    h2: "للنساء فقط · خاص",
    p: "الخصوصية مهمة للمدربة هبة ولك. صُمم Summer Strong لتوفير بيئة مريحة وداعمة يمكن للمتدربات وللمدربة فيها التركيز على تحسين الصحة دون قلق من المراقبة.",
    items: [
      "برنامج لياقة وتغذية للنساء فقط",
      "تسجيل Zoom خاص مطلوب",
      "روابط دخول فردية للمسجّلات",
      "اتفاقية خصوصية مطلوبة لجميع الأعضاء",
      "فيديو المشاركات غير مضمّن في التسجيلات",
      "الكاميرا اختيارية",
      "لا يجوز مشاركة روابط الحصص",
      "التسجيلات للمسجّلات فقط",
    ],
    footer: "تتعهد كل مشاركة باحترام خصوصية المدربة هبة والأعضاء بعدم مشاركة الروابط أو التسجيلات أو لقطات الشاشة أو مواد البرنامج خارج المجتمع.",
  },
  checkout: {
    eyebrow: "الاستثمار",
    h2: "هل أنت جاهزة للانضمام؟",
    p: "فقدان الدهون. بناء القوة. الفخر بالمرأة التي ترينها في المرآة.",
    badge: "Summer Strong للنساء",
    title: "معسكر لياقة وتغذية للنساء لمدة 6 أسابيع",
    starts: "يبدأ 21 يونيو 2026",
    usd: "دولار",
    priceNote: "أقل من تكلفة جلستين من التدريب الشخصي.",
    includes: [
      "ما يصل إلى 24 حصة لياقة مباشرة للنساء",
      "6 جلسات تغذية مباشرة + أسئلة وأجوبة",
      "تواصل مباشر مع المدربة هبة",
      "مجتمع خاص للنساء فقط",
      "جميع الجلسات مسجّلة",
    ],
    button: "اشتركي الآن",
    footer: "احصلي على التدريب والهيكل والمساءلة والدعم الذي تحتاجينه للالتزام.",
  },
  faq: { eyebrow: "الأسئلة الشائعة", h2: "الأسئلة الشائعة" },
  finalCta: {
    h2: "هل أنت جاهزة لتشعري بمزيد من القوة والثقة والالتزام هذا الصيف؟",
    p: "انضمي إلى معسكر StrongerHer الصيفي لمدة 6 أسابيع واحصلي على التدريب والهيكل والمساءلة والدعم النسائي للالتزام.",
  },
  footer: { rights: "© {year} StrongerHer · تدريب للمرأة المسلمة", instagram: "إنستغرام" },
  whatsapp: "لديك أسئلة؟ تواصلي معنا",
  misc: {
    countdownLabel: "يبدأ المعسكر خلال",
    days: "أيام",
    hours: "ساعات",
    minutes: "دقيقة",
    seconds: "ثانية",
    bootcampMember: "عضوة في المعسكر",
    readFull: "اقرئي القصة كاملة ←",
    successStory: "قصة نجاح",
    close: "إغلاق",
  },
  faqs: [
    { q: "هل يجب أن أكون لائقة قبل الانضمام؟", a: "لا.\n\nالمبتدئات مرحب بهن، ويمكن تعديل جميع التمارين حسب مستواك الحالي.\n\nسواء كنت تبدئين للتو أو تعودين بعد انقطاع، يمكنك المشاركة والتقدم بوتيرتك." },
    { q: "أنا أتمرّن بالفعل. هل سأستفيد؟", a: "نعم.\n\nكثير من النساء في برامجي يتمرّن بانتظام لكن يعانين من الالتزام أو التقدم أو التغذية أو رؤية النتائج المرجوّة.\n\nستستفيدين من التدريب والهيكل والمساءلة والتثقيف الغذائي ودعم المجتمع." },
    { q: "ماذا لو كنت أعاني من ألم ركبة أو ظهر أو إصابات أو حالات طبية؟", a: "يمكن تعديل كثير من التمارين لتناسب الآلام والقيود الشائعة.\n\nلكن إذا كانت لديك حالة طبية أو عملية حديثة أو حمل أو أي ظرف يؤثر على ممارسة الرياضة بأمان، يجب الحصول على إذن من طبيبك قبل المشاركة." },
    { q: "هل أحتاج إلى معدات؟", a: "للحصول على أفضل النتائج، أنصح بمجموعة دمبلز خفيفة ومتوسطة وثقيلة.\n\nمثاليًا:\n• زوج خفيف\n• زوج متوسط\n• زوج ثقيل\n\nإن لم يكن ذلك ممكنًا، ابدئي بما لديك وسنساعدك." },
    { q: "كم من الوقت سيستغرق هذا أسبوعيًا؟", a: "معظم النساء يحضرن 2-4 تمارين مباشرة أسبوعيًا وجلسة تغذية واحدة.\n\nيمكنك المشاركة بالمستوى الذي يناسب جدولك، وجميع الجلسات مسجّلة لمزيد من المرونة." },
    { q: "هل يجب أن أصوم؟", a: "لا.\n\nيتضمن نظام التغذية مبادئ الصيام السنّة الاختيارية، لكن التعديلات متاحة حسب ظروفك وأهدافك.\n\nيمكنك الاستفادة من البرنامج حتى لو لم يكن الصيام مناسبًا لك." },
    { q: "هل أحتاج إلى اتباع حمية خاصة؟", a: "لا.\n\nالبرنامج مبني على طعام حقيقي وعادات عملية تناسب الحياة اليومية.\n\nلست بحاجة لشراء أطعمة خاصة أو بدائل وجبات أو اتباع حمية قاسية." },
    { q: "ماذا لو لم أرد فقدان الوزن؟", a: "لا بأس تمامًا.\n\nرغم أن كثيرات ينضممن لفقدان الدهون، فالبرنامج مصمم أيضًا لبناء القوة وتحسين اللياقة والطاقة والصحة وتطوير عادات مستدامة." },
    { q: "ماذا لو فاتتني حصة؟", a: "الحياة تحدث.\n\nجميع جلسات التمارين والتغذية مسجّلة لتتمكني من اللحاق بها." },
    { q: "ماذا لو لم أتمكن من الحضور المباشر؟", a: "يمكنك المشاركة.\n\nجميع التمارين وجلسات التغذية مسجّلة لتبقي على وصول للتدريب والمحتوى." },
    { q: "هل التسجيلات مضمّنة؟", a: "نعم.\n\nستتوفر تسجيلات التمارين والتغذية طوال البرنامج." },
    { q: "هل توقّع المشاركات على اتفاقية خصوصية؟", a: "نعم.\n\nستوقع جميع المشاركات على اتفاقية الخصوصية قبل الانضمام.\n\nيشمل ذلك احترام خصوصية المدربة والمشاركات وعدم مشاركة الروابط أو التسجيلات أو لقطات الشاشة." },
    { q: "هل سأظهر في التسجيلات؟", a: "ستُسجَّل الجلسات للمشاركات اللواتي لا يستطعن الحضور المباشر.\n\nفيديو المشاركات لن يظهر في التسجيلات. لكن قد يُلتقط الصوت إذا طُرحت أسئلة.\n\nلذلك، تجنّبي مشاركة معلومات شخصية لا ترغبين في أن يسمعها الآخرون.\n\nالتسجيلات لمشاركات Summer Strong فقط ولا يجوز مشاركتها أو توزيعها خارج البرنامج." },
    { q: "هل يجب أن أفتح الكاميرا؟", a: "لا.\n\nكثير من النساء يفضّلن إغلاق الكاميرا.\n\nلكن إذا فتحتها، يمكن للمدربة هبة تقديم توجيه مباشر وتصحيحات للوضعية." },
  ],
};

const translations = { en, ar };

const LangContext = createContext<{ lang: Lang; setLang: (l: Lang) => void; t: Dict }>({
  lang: "en",
  setLang: () => {},
  t: en,
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(() => {
    if (typeof window === "undefined") return "en";
    const saved = localStorage.getItem("lang") as Lang | null;
    return saved === "ar" || saved === "en" ? saved : "en";
  });

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    localStorage.setItem("lang", lang);
  }, [lang]);

  const setLang = (l: Lang) => setLangState(l);
  return (
    <LangContext.Provider value={{ lang, setLang, t: translations[lang] }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  return useContext(LangContext);
}

export const STRIPE_URL = "https://buy.stripe.com/00w9ASfym4EUfqtf6TefC00";
export const INSTAGRAM_URL = "https://instagram.com/coachhebahsalem";
export const INSTAGRAM_HANDLE = "@coachhebahsalem";
export const WHATSAPP_NUMBER = "+90 551 961 60 33";
export const WHATSAPP_URL = "https://wa.me/905519616033";
