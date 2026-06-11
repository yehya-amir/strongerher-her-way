import { createContext, useContext, useEffect, type ReactNode } from "react";

export type Lang = "en" | "ar";

type Dict = typeof en;

export const en = {
  dir: "ltr" as "ltr" | "rtl",
  nav: { joinNow: "Join Now", language: "العربية", switchTo: "العربية", switchHref: "/ar" },
  hero: {
    h1: "Feel proud of the woman you see in the mirror.",
    p1: "Lose belly fat, build muscle tone, and get stronger this summer with a 6-week fitness and nutrition program designed for busy Muslim women.",
    p2: "Without extreme diets, random workouts, or figuring it out alone.",
    cta: "Join StrongerHer Bootcamp",
    starts: "StrongerHer Bootcamp · Starts June 22, 2026",
    bannerStart: "STRONGERHER BOOTCAMP STARTS JUNE 22, 2026",
    bootcampStartsIn: "Bootcamp Starts In",
    videoSoon: "Sales video coming soon",
  },
  stories: { h2: "Real Women. Real Progress." },
  results: {
    h2: "What Results Can You Expect?",
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
    h2: "What Makes This Program Different?",
    one: {
      eyebrow: "01 · Live Coached",
      title: "Live Coached Workouts That Help You Stay Consistent",
      body: [
        "Most women don't need another saved workout. They need a time to show up.",
        "Inside StrongerHer, you'll train live with Coach Hebah and a group of women working toward the same goals. You'll have a scheduled time to exercise, a coach guiding you every step of the way, and sisters encouraging you to keep going.",
        "And if life gets busy? Every session is recorded so you can stay on track.",
        "Consistency changes your body. Live coaching helps you stay consistent.",
      ],
    },
    two: {
      eyebrow: "02 · Nutrition Deep Dives",
      title: "Weekly Nutrition Deep Dives That Teach You How Your Body Works",
      body: [
        "Most women have tried diets. Very few have actually been taught nutrition.",
        "Inside StrongerHer, you'll join 6 live nutrition deep dives + Q&A where Coach Hebah teaches the principles behind fat loss, muscle building, appetite control, cravings, energy, healthy aging, and long-term success.",
        "These sessions cover topics like protein, metabolism, blood sugar, muscle, Sunnah fasting, real-food nutrition, habits, herbs, supplements, and more.",
        "You'll not only learn what to do — you'll understand why it works.",
      ],
    },
    three: {
      eyebrow: "03 · Sisterhood",
      title: "A Community of Sisters Walking the Same Path",
      body: [
        "Getting healthy is hard when you're trying to do it alone.",
        "Inside StrongerHer, you'll be with women who understand your struggles, share your goals, and are committed to improving their health alongside you.",
        "Celebrate victories together. Share challenges. Ask questions. Stay accountable.",
        "And on the days when motivation is low, you'll have a coach and a community helping you keep moving forward.",
      ],
    },
  },
  community: { h2: "A Peek Inside the Program" },
  included: {
    h2: "Everything Included",
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
    note: "Everything you need to lose fat, build strength, understand how your body responds, and stay consistent — all in one place.",
  },
  coach: {
    h2: "Meet Coach Hebah",
    body: [
      "I wasn't always athletic or thin. I actually struggled with extra weight from childhood through my teenage years.",
      "During my college years, my real health and fitness journey began. I became interested in nutrition and exercise, started reading everything I could, began running daily, changed the way I ate, and eventually lost 37 kilograms (about 82 pounds).",
      "Shortly after, I attended my first group fitness class — and from that day on, I knew this field was my passion.",
      "At twenty I became a fitness instructor. In the more than 25 years since, I've taught over 3,500 classes and counting. Along the way I've learned a tremendous amount about a woman's body and how its needs change in every stage of life.",
      "Like many women, I discovered that my body changed after 40. The approaches that worked in my twenties and thirties stopped giving me the same results, and I had to learn a new way to keep my health, strength, and fitness.",
      "Today my approach is built on strength training, eating enough protein, Sunnah-style fasting to help regulate blood sugar, and simple healthy habits you can actually sustain long term.",
      "My goal is not only to help women lose weight, but to help them build a healthy lifestyle that feels realistic and possible to maintain.",
      "When I'm not coaching, you'll usually find me swimming, walking and exploring Istanbul, spending time with my kids, or learning something new about health and fitness. And I love helping other women achieve what I achieved for myself.",
    ],
    photoCaptions: [
      "Working in the lab — before my health journey",
      "Family days — still carrying extra weight",
      "Today — coaching women in strength & nutrition",
      "Today — staying active, at home in Istanbul",
    ],
    beforeLabel: "Then",
    todayLabel: "Now",
    timeline: [
      "Struggled with weight from childhood",
      "Lost 37 kg and transformed her health",
      "Became a certified fitness coach at 20",
      "25+ years helping women get stronger",
    ],
  },
  compare: {
    h2: "Why StrongerHer Is Different",
    feature: "Feature",
    summer: "StrongerHer",
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
    h2: "Learn nutrition that actually fits your everyday life.",
    p: "No meal replacements. No extreme diets. Just clear principles around protein, portions, cravings, energy, and optional Sunnah fasting — taught live, so you can ask the questions specific to your body.",
  },
  schedule: {
    h2: "Sample Weekly Class Schedule Across Time Zones",
    note: "Provided sufficient enrollment numbers.",
    tracks: [
      { title: "Europe, Middle East & Gulf", days: "Monday & Wednesday", time: "10:00 AM Istanbul" },
      { title: "North America East Coast", days: "Tuesday & Thursday", time: "9:00 AM EST" },
      { title: "North America West Coast", days: "Monday & Friday", time: "9:00 AM PST" },
    ],
  },
  privacy: {
    h2: "Women-Only & Private",
    p: "Privacy matters to both Coach Hebah and you. StrongerHer was designed to provide a comfortable, supportive environment where clients and Coach Hebah can focus on improving health without worrying about who may be watching.",
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
    h2: "Ready to Join?",
    p: "Lose fat. Build strength. Feel proud of the woman you see in the mirror.",
    title: "6-Week Women's Fitness & Nutrition Bootcamp",
    starts: "Starts June 22, 2026",
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
  faq: { h2: "Frequently Asked Questions" },
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
    { q: "Do I need to be fit before joining?", a: `No.\n\nBeginners are welcome, and all exercises can be modified to your current fitness level.\n\nWhether you're just getting started or returning to exercise after a long break, you'll be able to participate and progress at your own pace.` },
    { q: "I already work out. Will I still benefit?", a: `Yes.\n\nMany women in my programs already exercise regularly but struggle with consistency, progression, nutrition, or seeing the results they want.\n\nYou'll benefit from the coaching, structure, accountability, nutrition education, and community support built into the program.` },
    { q: "What if I have knee pain, back pain, injuries, or medical conditions?", a: `Many exercises can be modified to accommodate common aches, pains, and limitations.\n\nHowever, if you have a medical condition, recent surgery, pregnancy, or any situation that may affect your ability to exercise safely, you should obtain clearance from your healthcare provider before participating.` },
    { q: "Do I need equipment?", a: `For best results, I recommend having a set of light, medium, and heavy dumbbells.\n\nIdeally:\n• One light pair\n• One medium pair\n• One heavy pair\n\nIf that isn't possible, start with whatever you have available and we will help you make it work.` },
    { q: "How much time will this take each week?", a: `Most women attend 2–4 live workouts per week and one nutrition session.\n\nYou can participate at the level that fits your schedule, and all sessions are recorded if you need additional flexibility.` },
    { q: "Do I have to fast?", a: `No.\n\nThe nutrition system includes optional Sunnah fasting principles, but modifications are available based on your individual circumstances and goals.\n\nYou can still benefit from the program even if fasting is not appropriate for you.` },
    { q: "Do I need to follow a special diet?", a: `No.\n\nThe program is built around real food and practical habits that fit into everyday life.\n\nYou do not need to purchase special foods, meal replacements, or follow an extreme diet.` },
    { q: "What if I don't want to lose weight?", a: `That's perfectly fine.\n\nWhile many women join to lose fat, the program is also designed to help you build strength, improve fitness, increase energy, improve your health, and develop sustainable habits that support long-term wellbeing.` },
    { q: "What if I miss a class?", a: `Life happens.\n\nAll workout sessions and nutrition sessions are recorded, so you can catch up when it suits your schedule.` },
    { q: "What if I can't attend live?", a: `You can still participate.\n\nAll workouts and nutrition sessions are recorded, so you'll continue to have access to the coaching and content even if you occasionally miss a live session.` },
    { q: "Are recordings included?", a: `Yes.\n\nWorkout recordings and nutrition session recordings will be available throughout the program.` },
    { q: "Do participants sign a privacy agreement?", a: `Yes.\n\nAll participants will be required to agree to the program's privacy guidelines before joining.\n\nThis includes respecting the privacy of Coach Hebah and fellow participants and not sharing access links, recordings, screenshots, or program materials outside the program.` },
    { q: "Will I appear in the recordings?", a: `Workout and nutrition sessions will be recorded for participants who cannot attend live.\n\nParticipant video will not be featured in the recordings. However, participant audio may occasionally be captured if questions are asked during class or discussion.\n\nFor this reason, please avoid sharing any personal information that you would not want other program members to hear.\n\nRecordings are provided exclusively for StrongerHer participants and may not be shared, distributed, downloaded, reposted, or used outside the program.\n\nAll participants agree to respect the privacy of Coach Hebah and fellow members by not sharing recordings, screenshots, class links, or program materials outside the community.` },
    { q: "Do I have to turn my camera on?", a: `No.\n\nMany women choose to keep their cameras off.\n\nHowever, if you turn your camera on, Coach Hebah can provide real-time coaching, form corrections, and more personalized guidance during class.` },
  ],
};

// ============================================================================
// ARABIC — source of truth: uploaded PDFs (salespagearabictranslation.pdf,
// meet_coach_hebah_arabic.pdf, testimonials_arabic.pdf). Wording follows the
// PDFs as closely as possible; PDF formatting artifacts are removed.
// ============================================================================
export const ar: Dict = {
  dir: "rtl",
  nav: { joinNow: "انضمي الآن", language: "English", switchTo: "English", switchHref: "/" },
  hero: {
    h1: "افتخري بالمرأة التي ترينها في المرآة",
    p1: "اخسري دهون البطن، وابني عضلاتك، واصبحي أقوى هذا الصيف من خلال برنامج لياقة وتغذية لمدة ٦ أسابيع للنساء.",
    p2: "بدون حميات قاسية، وبدون تمارين عشوائية، ومع كوتش ومجتمع داعم من الأخوات يساعدكِ على الاستمرار والنجاح.",
    cta: "انضمي إلى البرنامج الآن",
    starts: "برنامج سترانجر هِر الصيفي · يبدأ ٢٢ يونيو ٢٠٢٦",
    bannerStart: "يبدأ برنامج سترانجر هِر الصيفي في ٢٢ يونيو ٢٠٢٦",
    bootcampStartsIn: "يبدأ البرنامج خلال",
    videoSoon: "فيديو البرنامج قريباً",
  },
  stories: { h2: "قصص نجاح وتجارب المشاركات" },
  results: {
    h2: "ماذا يمكنكِ أن تحققي من خلال هذا البرنامج؟",
    items: [
      "خسارة دهون البطن وتقليل محيط الخصر",
      "بناء عضلات وجسم أقوى وأكثر تناسقاً",
      "زيادة الطاقة والتخلص من دوامة الجوع والرغبة المستمرة في الأكل",
      "تعلّم أسلوب تغذية واقعي يمكنكِ الاستمرار عليه حتى بعد انتهاء البرنامج",
      "اكتساب الثقة من خلال رؤية نتائج حقيقية",
      "الالتزام بشكل أكبر بفضل المتابعة والدعم من الكوتش والمجموعة",
    ],
  },
  midCta: {
    title: "جاهزة لتبدئي رحلتكِ؟",
    sub: "احجزي مكانكِ في برنامج سترانجر هِر الصيفي اليوم.",
  },
  pillars: {
    h2: "ما الذي يميّز برنامج سترانجر هِر الصيفي؟",
    one: {
      eyebrow: "١ · تدريب مباشر",
      title: "تمارين مباشرة مع كوتش تساعدكِ على الاستمرار",
      body: [
        "معظم النساء لا يحتجن إلى المزيد من التمارين المحفوظة على الهاتف. ما يحتجن إليه فعلاً هو وقت محدد يلتزمن به.",
        "داخل برنامج سترانجر هِر الصيفي ستتدربين مباشرة مع كوتش هبة. سيكون لديكِ وقت ثابت للتمرين، وكوتش ترشدكِ خطوة بخطوة، ومجموعة من الأخوات يشجعنكِ على الاستمرار.",
        "وإذا انشغلتِ في بعض الأيام؟ جميع الحصص مسجلة حتى تتمكني من متابعة البرنامج في الوقت الذي يناسبكِ.",
        "الاستمرارية هي ما يغيّر جسمكِ، والتدريب المباشر يساعدكِ على الحفاظ على هذه الاستمرارية.",
      ],
    },
    two: {
      eyebrow: "٢ · جلسات تغذية أسبوعية",
      title: "جلسات تغذية أسبوعية تفهمين فيها جسمكِ",
      body: [
        "معظم النساء جرّبن حميات كثيرة، لكن القليل منهن تعلّمن فعلاً كيف تعمل التغذية، وكيف يتعامل الجسم مع الأكل، والدهون، والطاقة، والجوع، والرغبة في السكريات.",
        "داخل البرنامج، ستحضرين ٦ جلسات تغذية مباشرة مع أسئلة وأجوبة، حيث أشرح لكِ أساسيات خسارة الدهون، وبناء العضلات، والتحكم بالشهية، وتقليل الرغبة في الأكل، وزيادة الطاقة، ودعم الصحة مع التقدم في العمر.",
        "سنتكلم عن البروتين، والتمثيل الغذائي، وسكر الدم، والعضلات، وصيام السنّة، والتغذية الحقيقية، والعادات، والأعشاب، والمكملات، وغير ذلك.",
        "لن تعرفي فقط ماذا تفعلين، بل ستفهمين لماذا ينجح هذا الأسلوب. وبما أن الجلسات مباشرة، يمكنكِ طرح أسئلتكِ والحصول على توجيه يناسب وضعكِ أنتِ.",
      ],
    },
    three: {
      eyebrow: "٣ · مجتمع داعم من الأخوات",
      title: "مجتمع داعم من الأخوات يسرن معكِ في نفس الطريق",
      body: [
        "تحسين صحتكِ ولياقتكِ يصبح أصعب بكثير عندما تحاولين فعل كل شيء وحدكِ.",
        "داخل البرنامج، ستكونين مع نساء يفهمن تحدياتكِ، ويشاركنكِ أهدافكِ، ويردن أن يصبحن أقوى وأكثر صحة مثلكِ.",
        "نفرح بالإنجازات معاً، نتشارك التحديات، نسأل ونتعلم، ونساعد بعضنا على الاستمرار.",
        "وفي الأيام التي تشعرين فيها أن حماسكِ قلّ، سيكون لديكِ كوتش ومجتمع داعم يساعدانكِ على الاستمرار خطوة بعد خطوة. لأن التغيير الحقيقي يصبح أسهل بكثير عندما لا تكونين وحدكِ.",
      ],
    },
  },
  included: {
    h2: "كل ما يشمله البرنامج",
    items: [
      "حتى ٢٤ حصة لياقة مباشرة للنساء فقط مع كوتش",
      "٦ جلسات تغذية مباشرة مع أسئلة وأجوبة",
      "نظام متكامل للياقة والتغذية",
      "تسجيلات التمارين وجلسات التغذية",
      "تواصل مباشر مع كوتش هبة",
      "متابعة ودعم أسبوعي",
      "مجتمع نسائي خاص",
      "أدلة وملفات PDF مساعدة",
    ],
    note: "كل ما تحتاجينه لخسارة الدهون، وبناء القوة، وفهم طريقة جسمكِ، والاستمرار — في مكان واحد.",
  },
  coach: {
    h2: "تعرّفي على كوتش هبة",
    body: [
      "لم أكن دائماً رياضية أو نحيفة. في الحقيقة، كنت أعاني من زيادة الوزن منذ الطفولة وحتى سنوات المراهقة.",
      "خلال سنوات الجامعة، بدأت رحلتي الحقيقية مع الصحة واللياقة. أصبحت مهتمة بالتغذية والرياضة، وبدأت أقرأ وأتعلم كل ما أستطيع عنهما. كما بدأت بالجري يومياً، وغيّرت طريقة أكلي، وتمكنت في النهاية من خسارة ٣٧ كيلوغراماً.",
      "بعد ذلك بفترة قصيرة، حضرت أول حصة رياضية في حياتي، ومن يومها عرفت أن هذا المجال هو شغفي.",
      "وفي سن العشرين أصبحت مدربة لياقة. وخلال أكثر من ٢٥ عاماً منذ ذلك الوقت، قدمت أكثر من ٣٥٠٠ حصة رياضية، وما زال هذا الرقم يزداد كل عام. وخلال هذه الرحلة الطويلة تعلّمت الكثير عن جسم المرأة وكيف تتغير احتياجاته في المراحل المختلفة من الحياة.",
      "وكحال كثير من النساء، اكتشفت أن جسمي تغيّر بعد سن الأربعين. فالأساليب التي كانت تنجح معي في العشرينات والثلاثينات لم تعد تعطي النتائج نفسها، واضطررت إلى تعلّم طريقة جديدة للحفاظ على صحتي وقوتي ولياقتي.",
      "واليوم يعتمد أسلوبي على تمارين القوة، والاهتمام بتناول كمية كافية من البروتين، والصيام على الطريقة النبوية للمساعدة في تنظيم سكر الدم، إلى جانب عادات صحية بسيطة يمكن الاستمرار عليها على المدى الطويل.",
      "هدفي ليس فقط أن أساعد النساء على خسارة الوزن، بل أن أساعدهن على بناء أسلوب حياة صحي يشعرن أنه واقعي وممكن الاستمرار عليه.",
      "وعندما لا أكون في التدريب أو مع المشتركات، غالباً ستجدينني أمارس السباحة، أو أمشي وأستكشف إسطنبول، أو أقضي وقتاً مع أطفالي، أو أتعلم شيئاً جديداً عن الصحة واللياقة. وأحب أن أساعد نساءً أخريات على تحقيق ما حققته أنا.",
    ],
    photoCaptions: [
      "في المختبر — قبل بداية رحلتي مع الصحة",
      "أيام العائلة — قبل خسارة الوزن",
      "اليوم — أدرّب النساء على القوة والتغذية",
      "اليوم — في بيتي في إسطنبول، ما زلت أتحرّك",
    ],
    beforeLabel: "قبل",
    todayLabel: "اليوم",
    timeline: [
      "عانت من زيادة الوزن منذ الطفولة",
      "خسرت ٣٧ كيلوغراماً وغيّرت صحتها",
      "أصبحت مدربة لياقة في سن العشرين",
      "أكثر من ٢٥ عاماً تساعد النساء",
    ],
  },
  compare: {
    h2: "لماذا برنامج سترانجر هِر الصيفي مختلف؟",
    feature: "الميزة",
    summer: "سترانجر هِر",
    recorded: "البرامج المسجّلة",
    rows: [
      "حصص لياقة مباشرة",
      "تدريب تغذية مباشر",
      "تواصل مباشر مع الكوتش",
      "دعم من المجتمع",
      "متابعة ومحاسبة",
      "تسجيلات",
    ],
  },
  who: {
    h2: "لمن صُمم هذا البرنامج؟",
    intro: "هذا البرنامج مناسب لكِ إذا كنتِ:",
    items: [
      "تريدين خسارة الدهون وبناء القوة",
      "تريدين طاقة وثقة أكبر",
      "تحتاجين إلى نظام واضح ومتابعة",
      "تعبتِ من محاولة فهم كل شيء وحدكِ",
      "تريدين أسلوباً واقعياً يناسب العمل، والبيت، والأولاد، والحياة اليومية",
      "تريدين بناء عادات تستمر معكِ، وليس الاعتماد على الحماس فقط",
    ],
  },
  how: {
    h2: "كيف يعمل البرنامج؟",
    items: [
      "برنامج لياقة من ٣ تمارين أسبوعياً",
      "حصتان مباشرتان مع كوتش لمدة ٦٠ دقيقة في الوقت المناسب لكِ",
      "تمرين إضافي من خلال التسجيل أو من خلال حضور حصة مباشرة أخرى",
      "تمارين قوة، وكارديو، وحركة، ويوغا، وبيلاتس",
      "جلسة تغذية أسبوعية مباشرة مع أسئلة وأجوبة بالعربي والإنجليزي",
      "جميع الحصص مسجلة لتسهيل المتابعة",
    ],
    note: "يمكنكِ حضور أي حصة تناسب جدولكِ. كثير من النساء يحضرن في الوقت الأساسي لهن، ويستخدمن التسجيلات أو الحصص الإضافية عند الحاجة. سواء حضرتِ مباشرة أو تابعتِ التسجيل لاحقاً، سيكون لديكِ دائماً طريق واضح للاستمرار.",
  },
  nutritionBand: {
    h2: "تعلّمي تغذية تناسب حياتكِ اليومية فعلاً.",
    p: "لا بدائل وجبات. لا حميات قاسية. فقط مبادئ واضحة حول البروتين، والحصص، والرغبات، والطاقة، والصيام النبوي الاختياري — تُدرَّس مباشرة، لتسألي عن جسمكِ أنتِ تحديداً.",
  },
  schedule: {
    h2: "نموذج جدول أسبوعي حسب التوقيت",
    note: "يُفتح هذا المسار عند اكتمال عدد كافٍ من المشتركات.",
    tracks: [
      { title: "مسار أوروبا والشرق الأوسط والخليج", days: "الإثنين والأربعاء", time: "١٠:٠٠ صباحاً بتوقيت إسطنبول" },
      { title: "مسار الساحل الشرقي لأمريكا الشمالية", days: "الثلاثاء والخميس", time: "٩:٠٠ صباحاً (EST)" },
      { title: "مسار الساحل الغربي لأمريكا الشمالية", days: "الإثنين والجمعة", time: "٩:٠٠ صباحاً (PST)" },
    ],
  },
  privacy: {
    h2: "برنامج نسائي خاص — الخصوصية مهمة لي ولكِ",
    p: "صُمم برنامج سترانجر هِر الصيفي ليكون بيئة نسائية خاصة ومريحة، بحيث تتمكن كل مشتركة من التركيز على صحتها ولياقتها براحة واطمئنان، دون القلق بشأن خصوصيتها.",
    items: [
      "برنامج لياقة وتغذية للنساء فقط",
      "التسجيل الخاص في زوم مطلوب",
      "روابط دخول فردية للمشتركات المسجلات فقط",
      "الموافقة على تعليمات الخصوصية مطلوبة من جميع المشتركات",
      "فيديو المشاركات لا يظهر في التسجيلات",
      "تشغيل الكاميرا اختياري",
      "يمنع مشاركة روابط الحصص",
      "التسجيلات مخصصة للمشتركات فقط",
    ],
    footer:
      "توافق كل مشتركة على احترام خصوصية كوتش هبة وباقي المشاركات، وعدم مشاركة روابط الحصص أو التسجيلات أو الصور أو مواد البرنامج خارج المجتمع الخاص.",
  },
  checkout: {
    h2: "جاهزة للانضمام؟",
    p: "اخسري الدهون. ابني القوة. افتخري بالمرأة التي ترينها في المرآة.",
    title: "برنامج لياقة وتغذية للنساء لمدة ٦ أسابيع",
    starts: "يبدأ ٢٢ يونيو ٢٠٢٦",
    usd: "دولار",
    priceNote: "احصلي على التدريب، والنظام، والمتابعة، والدعم الذي تحتاجينه حتى تستمرّي.",
    includes: [
      "حتى ٢٤ حصة لياقة مباشرة للنساء فقط",
      "٦ جلسات تغذية مباشرة مع أسئلة وأجوبة",
      "تواصل مباشر مع كوتش هبة",
      "مجتمع نسائي خاص",
      "جميع الحصص مسجّلة",
    ],
    button: "انضمي الآن",
    footer: "احصلي على التدريب، والنظام، والمتابعة، والدعم الذي تحتاجينه حتى تستمرّي.",
  },
  faq: { h2: "الأسئلة الشائعة" },
  finalCta: {
    h2: "جاهزة لتشعري بقوة وثقة والتزام أكبر هذا الصيف؟",
    p: "انضمي إلى برنامج سترانجر هِر الصيفي لمدة ٦ أسابيع، واحصلي على التدريب والنظام والمتابعة والدعم النسائي الذي تحتاجينه للاستمرار.",
  },
  footer: { rights: "© {year} سترانجر هِر · تدريب للمرأة المسلمة", instagram: "إنستغرام" },
  whatsapp: "لديكِ أسئلة؟ تواصلي معنا",
  misc: {
    countdownLabel: "يبدأ البرنامج خلال",
    days: "يوم",
    hours: "ساعة",
    minutes: "دقيقة",
    seconds: "ثانية",
    bootcampMember: "مشتركة في البرنامج",
    readFull: "اقرئي القصة كاملة ←",
    successStory: "قصة نجاح",
    close: "إغلاق",
  },
  faqs: [
    { q: "هل يجب أن أكون رياضية أو لائقة قبل الانضمام؟", a: "لا.\n\nالمبتدئات مرحب بهن، وجميع التمارين يمكن تعديلها حسب مستواكِ الحالي.\n\nسواء كنتِ تبدأين من الصفر أو تعودين للرياضة بعد انقطاع طويل، ستتمكنين من المشاركة والتقدم حسب قدرتكِ." },
    { q: "أنا أتمرن أصلاً. هل سأستفيد؟", a: "نعم.\n\nكثير من النساء في برامجي يتمرّن بالفعل، لكن يواجهن صعوبة في الاستمرارية، أو تطوير المستوى، أو التغذية، أو الوصول إلى النتائج التي يردنها.\n\nستستفيدين من التدريب، والنظام، والمتابعة، وتعليم التغذية، ودعم المجتمع داخل البرنامج." },
    { q: "ماذا لو عندي ألم في الركبة أو الظهر أو إصابات أو حالة صحية؟", a: "يمكن تعديل كثير من التمارين لتناسب الآلام أو الإصابات أو المحدوديات الشائعة.\n\nلكن إذا كان لديكِ حالة صحية، أو عملية حديثة، أو حمل، أو أي وضع قد يؤثر على قدرتكِ على التمرين بأمان، فيجب أخذ موافقة طبيبكِ قبل المشاركة." },
    { q: "هل أحتاج إلى معدات؟", a: "لأفضل النتائج، أنصح بوجود أوزان خفيفة، ومتوسطة، وثقيلة.\n\nالأفضل أن يكون لديكِ:\n• زوج أوزان خفيف\n• زوج أوزان متوسط\n• زوج أوزان ثقيل\n\nإذا لم يكن ذلك متاحاً، ابدئي بما لديكِ وسنساعدكِ على استخدامه بطريقة مناسبة." },
    { q: "كم وقت يحتاج البرنامج كل أسبوع؟", a: "معظم النساء يحضرن من حصتين إلى ٤ حصص مباشرة أسبوعياً، بالإضافة إلى جلسة التغذية.\n\nيمكنكِ المشاركة بالقدر الذي يناسب جدولكِ، وجميع الحصص مسجلة إذا احتجتِ إلى مرونة أكثر." },
    { q: "هل يجب أن أصوم؟", a: "لا.\n\nنظام التغذية يشمل مبادئ اختيارية من صيام السنّة، لكن توجد تعديلات حسب ظروفكِ وأهدافكِ.\n\nيمكنكِ الاستفادة من البرنامج حتى لو لم يكن الصيام مناسباً لكِ." },
    { q: "هل يجب أن أتبع حمية خاصة؟", a: "لا.\n\nالبرنامج مبني على الطعام الحقيقي والعادات العملية التي تناسب الحياة اليومية.\n\nلا تحتاجين إلى شراء أطعمة خاصة، أو بدائل وجبات، أو اتباع حمية قاسية." },
    { q: "ماذا لو لا أريد خسارة الوزن؟", a: "هذا طبيعي تماماً.\n\nرغم أن كثيراً من النساء ينضممن بهدف خسارة الدهون، إلا أن البرنامج صُمم أيضاً لمساعدتكِ على بناء القوة، وتحسين اللياقة، وزيادة الطاقة، ودعم صحتكِ، وبناء عادات مستمرة على المدى الطويل." },
    { q: "ماذا لو فاتتني حصة؟", a: "هذا طبيعي، لأن الحياة فيها انشغالات.\n\nكل حصص التمارين وجلسات التغذية مسجلة، ويمكنكِ تعويضها في الوقت الذي يناسبكِ." },
    { q: "ماذا لو لا أستطيع الحضور مباشرة؟", a: "ما زال بإمكانكِ المشاركة.\n\nجميع التمارين وجلسات التغذية مسجلة، وستبقين قادرة على الاستفادة من التدريب والمحتوى حتى لو فاتتكِ بعض الحصص المباشرة." },
    { q: "هل التسجيلات مشمولة؟", a: "نعم.\n\nتسجيلات التمارين وجلسات التغذية ستكون متاحة خلال فترة البرنامج." },
    { q: "هل توقع المشاركات على اتفاقية خصوصية؟", a: "نعم.\n\nكل المشاركات سيُطلب منهن الموافقة على تعليمات الخصوصية قبل الانضمام.\n\nوهذا يشمل احترام خصوصية كوتش هبة وباقي المشاركات، وعدم مشاركة روابط الدخول، أو التسجيلات، أو الصور، أو مواد البرنامج خارج البرنامج." },
    { q: "هل سأظهر في التسجيلات؟", a: "سيتم تسجيل حصص التمارين وجلسات التغذية للمشاركات اللواتي لا يستطعن الحضور مباشرة.\n\nفيديو المشاركات لن يظهر في التسجيلات. لكن قد يظهر الصوت أحياناً إذا طرحتِ سؤالاً أثناء الحصة أو النقاش.\n\nلذلك، يرجى عدم مشاركة أي معلومات شخصية لا ترغبين أن تسمعها باقي المشتركات.\n\nالتسجيلات مخصصة فقط لمشتركات برنامج سترانجر هِر الصيفي، ولا يجوز مشاركتها، أو توزيعها، أو تحميلها، أو إعادة نشرها، أو استخدامها خارج البرنامج." },
    { q: "هل يجب أن أفتح الكاميرا؟", a: "لا.\n\nكثير من النساء يخترن إبقاء الكاميرا مغلقة.\n\nلكن إذا فتحتِ الكاميرا، أستطيع أن أقدم لكِ توجيهاً مباشراً، وتصحيحاً لطريقة أداء التمارين، وملاحظات أكثر خصوصية أثناء الحصة." },
  ],
};

const translations = { en, ar };

// ============================================================================
// Testimonials are language-specific (EN written, AR sourced verbatim from
// testimonials_arabic.pdf). Exported so LandingPage can pick by language.
// ============================================================================
export type Testimonial = {
  name: string;
  badge: string;
  excerpt: string;
  full: string;
};

export const testimonialsEn: Testimonial[] = [
  { name: "Salma Hassan", badge: "Lost 3 kg and Finally Stayed Consistent",
    excerpt: "For years, I would lose weight and then gain it back again. I also found it difficult to stay consistent because of the demands of daily life.",
    full: `For years, I would lose weight and then gain it back again. I also found it difficult to stay consistent because of the demands of daily life.\n\nThe two things that helped me most were understanding calories more clearly and following the 5:2 fasting system. Together, they gave me a simple structure I could actually stick to.\n\nDuring the program, I noticed improvements in both my energy and consistency. The support, encouragement, and sharing within the group made a huge difference. In about 6 weeks, I lost nearly 3 kg, but more importantly, I gained knowledge and habits that I can continue with, inshaAllah.` },
  { name: "Shazia Ahmad", badge: "Everything Improved",
    excerpt: "Everything improved — my energy, my headaches, my strength, and my confidence.",
    full: `Everything improved — my energy, my headaches, my strength, and my confidence.\n\nBefore joining, I lived a very sedentary lifestyle and struggled with consistency, back pain, and low energy.\n\nThe nutrition coaching helped me understand how to build my plate properly, prioritize protein, and recognize the habits that were holding me back. The workouts were supportive, challenging, and adapted to my level.\n\nThe biggest surprise was how much stronger I became. I was even able to do push-ups on my toes for the first time.\n\nI highly recommend this program to women over 45 who want to become stronger, healthier, and more confident.` },
  { name: "Ateka Ali", badge: "Accountability Makes the Difference",
    excerpt: "I recently completed Coach Hebah's 6-week boot camp, and it was an incredible experience.",
    full: `I recently completed Coach Hebah's 6-week boot camp, and it was an incredible experience. I already knew a lot about nutrition and fitness, but one thing I've learned is that consistency comes from being part of a supportive community.\n\nThe cohort-based format was one of the most valuable aspects of the program. With live classes three times a week, you show up. It's much harder to make excuses when your instructor and classmates are expecting you. That built-in accountability makes a huge difference.\n\nI also loved the nutrition component. Sharing my meals, tracking protein, and receiving feedback helped me become much more intentional about my daily habits.\n\nCoach Hebah is an exceptional instructor. She meets people where they are, adapts workouts to different fitness levels, and always encourages you to push just a little beyond what you think you can do.` },
  { name: "Sadiya Khan", badge: "Stronger After Injury",
    excerpt: "I gained strength, consistency, energy, and confidence — and I'm no longer afraid to challenge myself.",
    full: `I gained strength, consistency, energy, and confidence — and I'm no longer afraid to challenge myself.\n\nBefore joining, I was afraid to exercise because of an elbow injury. With Coach Hebah, I felt safe pushing myself because she always knew when to modify an exercise, when to push through, and when to stop.\n\nI gained strength, improved my sleep, started lifting heavier, and became much more confident in what my body can do.\n\nI've trained with Coach Hebah on and off for 18 years through pregnancies, injuries, weight gain, and life's challenges. As a busy mom of seven, people often ask me what my secret is — and a big part of the answer is having Hebah as my coach.` },
  { name: "Maya Rahman", badge: "She Understood Exactly What I Needed",
    excerpt: "I was struggling with insulin resistance and constant fatigue, and I needed an approach to nutrition and exercise that I could actually sustain.",
    full: `I was struggling with insulin resistance and constant fatigue, and I needed an approach to nutrition and exercise that I could actually sustain.\n\nOne of the things that surprised me most was how much better I felt once I changed my eating habits. My energy increased, and exercise became part of my routine instead of something I kept putting off.\n\nWhat makes Coach Hebah different is that she pays attention to the small details and understands the needs of each woman. During training, it often felt like she was talking about exactly what my body was experiencing in that moment.\n\nToday I feel stronger and more capable of continuing toward my goals with confidence.` },
  { name: "Ruba Khaled", badge: "I No Longer Feel Guilty After Meals",
    excerpt: "Before the program, I moved between random eating and restriction, and I didn't know how to organize my meals in a way I could maintain.",
    full: `Before the program, I moved between random eating and restriction, and I didn't know how to organize my meals in a way I could maintain.\n\nI learned how to balance my calories and prioritize protein, but the biggest change was that my relationship with food became much healthier. I no longer feel guilty after meals the way I used to.\n\nI also noticed improvements in my energy and endurance, and the workouts were flexible and easy to follow. Even when I couldn't attend the live sessions, the recordings helped me stay consistent.\n\nWhat I loved most was that the program was practical and fit into everyday life.` },
  { name: "Huda Mansour", badge: "The Recordings Removed My Excuses",
    excerpt: "Before joining, my activity level was mostly limited to household chores, and the idea of committing to exercise felt difficult.",
    full: `Before joining, my activity level was mostly limited to household chores, and the idea of committing to exercise felt difficult.\n\nI loved that the workouts were suitable for different fitness levels. Over time, I noticed a clear improvement in my energy and endurance. The biggest surprise was that I could complete an entire workout without feeling exhausted the way I did at the beginning.\n\nI also learned how to organize my calories and protein intake, and I liked the practical combination of fasting and calorie control.\n\nThe recordings were a huge advantage for me because they removed my excuses. There was always a way to stay consistent.` },
  { name: "Zara Karim", badge: "I Never Felt Deprived",
    excerpt: "One of my biggest struggles was self-control around food and finding the motivation to exercise consistently.",
    full: `One of my biggest struggles was self-control around food and finding the motivation to exercise consistently.\n\nOne of the biggest lessons I learned was that when I made protein a priority, I felt much fuller and was far less likely to binge eat or reach for junk food. I also noticed that focusing on filling, nutritious foods helped me snack much less.\n\nWhat surprised me most was that the program wasn't restrictive. The 5:2 fasting days provided structure, but I never felt deprived or like I was constantly dieting.\n\nThe support, encouragement, and flexibility made all the difference.` },
  { name: "Tasmiya Khalid", badge: "Simple, Manageable, and Sustainable",
    excerpt: "Before joining, I struggled with inconsistent meals, low activity levels, and not knowing where to start with nutrition or exercise.",
    full: `Before joining, I struggled with inconsistent meals, low activity levels, and not knowing where to start with nutrition or exercise.\n\nWhat I loved most about this program was how simple and manageable it felt. The 5:2 structure gave me a clear plan to follow, and the nutrition lessons helped me finally understand portion sizes and protein intake without feeling overwhelmed.\n\nI noticed improvements in my strength, energy, and consistency, and for the first time I felt like I was building habits I could actually maintain long term.\n\nWhat surprised me most was how much progress I could make without following a restrictive diet or spending hours exercising.` },
  { name: "Mina Ahmed", badge: "The Accountability I Was Missing",
    excerpt: "I wasn't looking to lose weight. My goal was to cope better with perimenopause symptoms, build strength, and support my joints.",
    full: `I wasn't looking to lose weight. My goal was to cope better with perimenopause symptoms, build strength, and support my joints.\n\nBefore joining, I struggled with consistency in both exercise and healthy eating. The combination of live sessions, nutrition guidance, and the WhatsApp group gave me the accountability and support I was missing and helped me stop procrastinating.\n\nOver the six weeks, I noticed positive changes in my physique, felt stronger, and became much more consistent with my habits.\n\nCoach Hebah was truly the answer to my duaa, and the support from both the coaching and community made all the difference.` },
  { name: "Rahma Saleh", badge: "My Aches and Pains Improved Tremendously",
    excerpt: "Going through perimenopause, I knew how important regular exercise was, but I struggled to stay disciplined on my own.",
    full: `Going through perimenopause, I knew how important regular exercise was, but I struggled to stay disciplined on my own.\n\nCoach Hebah's motivating words, careful explanations, and guidance truly revitalized me. Her program is suitable for all levels and ages, with exercises that work the whole body.\n\nI started noticing a difference after the very first week. Within a few short weeks, my muscles felt stronger and the aches and pains I had been experiencing improved tremendously. Allahumma barik.\n\nI am so grateful for this experience and definitely want to continue, inshaAllah.` },
];

export const testimonialsAr: Testimonial[] = [
  { name: "سلمى حسن", badge: "نزلت ٣ كيلو وأخيراً قدرت أستمر",
    excerpt: "سنين وأنا عايشة بنفس الدوامة، أنزل وزني وبعدها أرجع أزيده من جديد، ومع مشاغل الحياة كان صعب عليّ ألتزم بأي نظام لفترة طويلة.",
    full: `سنين وأنا عايشة بنفس الدوامة، أنزل وزني وبعدها أرجع أزيده من جديد، ومع مشاغل الحياة كان صعب عليّ ألتزم بأي نظام لفترة طويلة.\n\nأكثر إشي فادني هو إني فهمت موضوع السعرات بشكل أبسط، ومع نظام الصيام ٥:٢ صار عندي أسلوب واضح أمشي عليه وألتزم فيه.\n\nخلال البرنامج حسّيت بفرق بطاقتي وبقدرتي إني أستمر، والدعم والتشجيع من المجموعة فرق معي كثير، خلال حوالي ٦ أسابيع نزلت تقريباً ٣ كيلو، والأهم إني اكتسبت معلومات وعادات بقدر أكمل عليها إن شاء الله.` },
  { name: "مايا رحمن", badge: "حسّيت إنها فاهمة بالضبط شو بحتاج",
    excerpt: "كنت أعاني من مقاومة الإنسولين والتعب المستمر، وكنت محتاجة طريقة أقدر أستمر عليها بالتغذية والرياضة.",
    full: `كنت أعاني من مقاومة الإنسولين والتعب المستمر، وكنت محتاجة طريقة أقدر أستمر عليها بالتغذية والرياضة.\n\nمن أكثر الأشياء اللي فاجأتني إني صرت أحس بطاقة أكبر بعد ما عدّلت عاداتي الغذائية، والرياضة صارت جزء من روتيني اليومي بدل ما أضل أجلها.\n\nاللي بيميز الكوتش هبة إنها بتنتبه للتفاصيل الصغيرة وبتفهم احتياجات كل متدربة، أحياناً أثناء التمرين كنت أحس كأنها بتحكي بالضبط عن اللي جسمي حاسّه بهاي اللحظة.\n\nاليوم بحس إني أقوى وعندي قدرة أكبر إني أكمل بطريقي نحو هدفي بثقة.` },
  { name: "ربا خالد", badge: "بطلت أحس بالذنب بعد الأكل",
    excerpt: "قبل البرنامج كنت أتنقل بين الأكل العشوائي والحرمان، وما كنت عارفة كيف أنظم أكلي بطريقة أقدر أستمر عليها.",
    full: `قبل البرنامج كنت أتنقل بين الأكل العشوائي والحرمان، وما كنت عارفة كيف أنظم أكلي بطريقة أقدر أستمر عليها.\n\nتعلمت كيف أوازن سعراتي وأركز على البروتين، لكن أكبر فرق صار معي هو إن علاقتي مع الأكل صارت أفضل بكثير، بطلت أحس بتأنيب الضمير بعد الوجبات مثل أول.\n\nكمان لاحظت تحسن بطاقتي وقدرتي على التحمل، والتمارين كانت مرنة وسهلة التطبيق، وحتى لما ما كنت أحضر الحصص المباشرة، التسجيلات ساعدتني أكمل بدون انقطاع.\n\nأكثر إشي عجبني إن البرنامج عملي وناسب حياتي اليومية، ومش مجرد خطة صعب الالتزام فيها.` },
  { name: "هدى منصور", badge: "التسجيلات شالت عني الأعذار",
    excerpt: "قبل البرنامج كان نشاطي يقتصر غالباً على شغل البيت، وكانت فكرة الالتزام بالرياضة صعبة بالنسبة إلي.",
    full: `قبل البرنامج كان نشاطي يقتصر غالباً على شغل البيت، وكانت فكرة الالتزام بالرياضة صعبة بالنسبة إلي.\n\nعجبني إن التمارين كانت مناسبة لمستويات مختلفة، ومع الوقت لاحظت فرق واضح بطاقتي وقدرتي على التحمل، أكثر إشي فاجأني إني صرت أقدر أكمل التمرين كامل بدون التعب الشديد اللي كنت أحس فيه بالبداية.\n\nكمان تعلمت كيف أنظم سعراتي وأركز على البروتين، وعجبتني فكرة الجمع بين الصيام وخفض السعرات بطريقة عملية ومريحة.\n\nالتسجيلات كانت ميزة كبيرة بالنسبة إلي لأنها شالت عني الأعذار، صار دائماً في طريقة إني ألتزم وأكمل.` },
  { name: "زارا كريم", badge: "ما حسّيت إني محرومة",
    excerpt: "من أكبر المشاكل اللي كنت أعاني منها إني ما كنت أسيطر على أكلي بسهولة، وكمان كنت أواجه صعوبة إني ألتزم بالرياضة بشكل مستمر.",
    full: `من أكبر المشاكل اللي كنت أعاني منها إني ما كنت أسيطر على أكلي بسهولة، وكمان كنت أواجه صعوبة إني ألتزم بالرياضة بشكل مستمر.\n\nمن أهم الأشياء اللي تعلمتها أهمية البروتين، لما صرت أركز عليه حسّيت بالشبع لفترة أطول وصرت أقل ميلاً إني أفرط بالأكل أو أروح للوجبات السريعة، وحتى التسالي بين الوجبات خفّت بشكل واضح.\n\nأكثر إشي فاجأني إن البرنامج ما كان قاسياً أو مُقيّداً، أيام الصيام ٥:٢ أعطتني هيكل واضح أمشي عليه، لكن ما حسّيت إني محرومة أو إني طول الوقت على دايت.\n\nالدعم والتشجيع والمرونة كانوا السبب الأكبر إني أستمر وألتزم.` },
  { name: "تسمية خالد", badge: "بسيط وسهل ألتزم فيه",
    excerpt: "قبل ما أنضم للبرنامج كنت أعاني من عدم انتظام بالأكل، وقلة بالنشاط، وما كنت أعرف من وين أبدأ بالتغذية أو الرياضة.",
    full: `قبل ما أنضم للبرنامج كنت أعاني من عدم انتظام بالأكل، وقلة بالنشاط، وما كنت أعرف من وين أبدأ بالتغذية أو الرياضة.\n\nأكثر إشي حبيته بالبرنامج إنه كان بسيط وسهل التطبيق، نظام ٥:٢ أعطاني خطة واضحة أمشي عليها، ودروس التغذية ساعدتني أفهم البروتين وحجم الحصص بطريقة سهلة ومش معقدة.\n\nلاحظت تحسن بقوتي وطاقتي والتزامي، ولأول مرة حسّيت إني ببني عادات بقدر أكمل عليها على المدى الطويل.\n\nوأكثر إشي فاجأني قديش ممكن أحقق نتائج بدون دايت قاسي أو ساعات طويلة من التمارين.` },
  { name: "مينا أحمد", badge: "المحاسبة اللي كنت محتاجتها",
    excerpt: "أنا أصلاً ما دخلت البرنامج عشان أنزل وزن، هدفي كان أتعامل بشكل أفضل مع أعراض ما قبل انقطاع الطمث، وأبني قوة أكبر وأدعم مفاصلي.",
    full: `أنا أصلاً ما دخلت البرنامج عشان أنزل وزن، هدفي كان أتعامل بشكل أفضل مع أعراض ما قبل انقطاع الطمث، وأبني قوة أكبر وأدعم مفاصلي.\n\nقبل البرنامج كنت أعاني من عدم الاستمرارية بالرياضة والأكل الصحي، وجود الحصص المباشرة والتوجيه الغذائي ومجموعة الواتساب أعطاني المحاسبة والدعم اللي كنت محتاجته وساعدني أبطل تأجيل.\n\nخلال ٦ أسابيع حسّيت إني أقوى، ولاحظت تغييرات إيجابية بجسمي، وصرت أكثر التزاماً بعاداتي الصحية.\n\nالكوتش هبة كانت فعلاً جواب دعائي، والدعم اللي أخذته منها ومن المجموعة عمل فرق كبير معي.` },
  { name: "رحمة صالح", badge: "آلامي خفّت بشكل كبير",
    excerpt: "مع مرحلة ما قبل انقطاع الطمث كنت أعرف أهمية الرياضة، لكن كان صعب عليّ ألتزم لحالي.",
    full: `مع مرحلة ما قبل انقطاع الطمث كنت أعرف أهمية الرياضة، لكن كان صعب عليّ ألتزم لحالي.\n\nكلمات الكوتش هبة المشجعة، وشرحها الواضح، وتوجيهها المستمر أعطوني دفعة كبيرة، البرنامج مناسب لكل المستويات والأعمار، والتمارين فيه بتشغل الجسم كله.\n\nبدأت ألاحظ فرق من أول أسبوع، وخلال أسابيع قليلة حسّيت إن عضلاتي صارت أقوى، والآلام والأوجاع اللي كنت أعاني منها خفّت بشكل كبير، اللهم بارك.\n\nأنا ممتنة جداً لهاي التجربة، وإن شاء الله ناوية أكمل.` },
  { name: "سعدية خان", badge: "رجعت أثق بجسمي بعد الإصابة",
    excerpt: "اكتسبت قوة أكثر، والتزام أكثر، وطاقة أكثر، والأهم إني بطلّت أخاف أتحدى نفسي.",
    full: `اكتسبت قوة أكثر، والتزام أكثر، وطاقة أكثر، والأهم إني بطلّت أخاف أتحدى نفسي.\n\nقبل البرنامج كنت مترددة أرجع أتمرن بسبب إصابة بالمرفق، مع الكوتش هبة حسّيت بالأمان لأنها كانت تعرف متى أعدل التمرين، ومتى أكمل، ومتى أتوقف.\n\nصرت أقوى، ونومي تحسن، وصرت أرفع أوزان أثقل، وصرت أوثق أكثر بقدرات جسمي.\n\nأنا أتدرب مع الكوتش هبة بشكل متقطع من ١٨ سنة، خلال الحمل والإصابات وزيادة الوزن وكل ظروف الحياة، وفي كل مرة كانت تساعدني أرجع أشوف شو أنا قادرة أعمل، كأم لـ٧ أطفال ناس بيسألوني شو السر، وجزء كبير من الجواب هو وجود الكوتش هبة بحياتي.` },
  { name: "شازية أحمد", badge: "كل إشي تحسّن",
    excerpt: "كل إشي تحسّن، طاقتي، والصداع عندي، وقوتي، وثقتي بنفسي.",
    full: `كل إشي تحسّن، طاقتي، والصداع عندي، وقوتي، وثقتي بنفسي.\n\nقبل البرنامج كنت أعيش حياة قليلة الحركة وأعاني من قلة النشاط وآلام الظهر وصعوبة بالالتزام.\n\nالتوجيه الغذائي ساعدني أفهم كيف أبني وجباتي بشكل أفضل وأركز على البروتين وأنتبه للعادات اللي كانت تعطل تقدمي، والتمارين كانت داعمة ومناسبة لمستواي.\n\nأكثر إشي فاجأني هو قديش صرت أقوى، حتى إني قدرت أعمل تمارين الضغط على أصابع قدمي لأول مرة.\n\nأنصح أي امرأة فوق سن ٤٥ بدها تصير أقوى وأصح وأكثر ثقة بنفسها إنها تنضم للبرنامج.` },
  { name: "عتيكة علي", badge: "الالتزام أسهل مع المجتمع المناسب",
    excerpt: "أنهيت برنامج الكوتش هبة لمدة ٦ أسابيع، وكانت تجربة فعلاً، مع إني كنت أعرف كثير عن التغذية والرياضة، إلا إني تعلمت إن الاستمرارية غالباً بتجي من وجود مجتمع داعم حواليك.",
    full: `أنهيت برنامج الكوتش هبة لمدة ٦ أسابيع، وكانت تجربة فعلاً، مع إني كنت أعرف كثير عن التغذية والرياضة، إلا إني تعلمت إن الاستمرارية غالباً بتجي من وجود مجتمع داعم حواليك.\n\nنظام المجموعات كان من أكثر الأشياء اللي استفدت منها، لما يكون عندك حصص مباشرة ٣ مرات بالأسبوع بتحضري، بصير أصعب بكثير تلاقي أعذار لما تعرفي إن المدربة والمجموعة مستنيينك، هاي المحاسبة لحالها بتعمل فرق كبير.\n\nكمان حبيت جانب التغذية كتير، مشاركة الوجبات ومتابعة البروتين والحصول على ملاحظات ونصائح بشكل مستمر خلاني أكثر وعياً بعاداتي اليومية.\n\nالكوتش هبة مدربة استثنائية، بتقابل كل شخص بالمستوى اللي هو فيه، وبتعرف كيف تشجعك تدفعي نفسك خطوة زيادة، طاقتها الإيجابية واهتمامها الحقيقي بنجاح المتدربات بيخليك تحبي ترجعي للحصة مرة بعد مرة.` },
];

// ============================================================================
// Language is driven by route. The provider just reads the `lang` prop set by
// the route component (/ → en, /ar → ar) and applies <html dir/lang>.
// ============================================================================
const LangContext = createContext<{ lang: Lang; t: Dict }>({ lang: "en", t: en });

export function LanguageProvider({ lang, children }: { lang: Lang; children: ReactNode }) {
  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  }, [lang]);
  return (
    <LangContext.Provider value={{ lang, t: translations[lang] }}>
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
