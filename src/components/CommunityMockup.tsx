const messages = [
  { from: "S", text: "Workout done today! 💪", side: "left" as const },
  { from: "Coach", text: "Proud of you, sister! Keep going.", side: "right" as const, coach: true },
  { from: "A", text: "I stayed consistent this week.", side: "left" as const },
  { from: "M", text: "Feeling stronger already.", side: "left" as const },
  { from: "Coach", text: "Alhamdulillah — that's how habits build.", side: "right" as const, coach: true },
  { from: "R", text: "Alhamdulillah, I feel more energetic.", side: "left" as const },
];

export function CommunityMockup() {
  return (
    <div className="relative mx-auto w-full max-w-[320px]">
      <div className="absolute -inset-6 bg-gradient-to-br from-primary/15 via-accent to-blush/30 rounded-[3rem] blur-2xl" />
      <div className="relative rounded-[2.5rem] border-[10px] border-primary-deep bg-cream shadow-[var(--shadow-glow)] overflow-hidden">
        <div className="bg-primary text-primary-foreground text-center py-3 text-xs uppercase tracking-widest">
          Sisters Group · 124 online
        </div>
        <div className="p-4 space-y-2.5 bg-cream min-h-[440px]">
          {messages.map((m, i) => (
            <div
              key={i}
              className={`flex ${m.side === "right" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-[78%] rounded-2xl px-3.5 py-2.5 text-sm leading-snug ${
                  m.coach
                    ? "bg-primary text-primary-foreground rounded-br-sm"
                    : "bg-card text-foreground rounded-bl-sm border border-border"
                }`}
              >
                {!m.coach && (
                  <div className="text-[10px] font-semibold text-primary-soft mb-0.5">
                    Sister {m.from}.
                  </div>
                )}
                {m.text}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
