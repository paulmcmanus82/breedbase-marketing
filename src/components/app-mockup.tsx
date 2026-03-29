export function AppMockup() {
  const sessions = [
    {
      time: "9:00am",
      client: "Sophie W.",
      dog: "Biscuit",
      type: "Assessment",
      color: "#C8F04A",
      textColor: "#1A1A18",
    },
    {
      time: "11:00am",
      client: "Tom H.",
      dog: "Loki",
      type: "1:1 Session",
      color: "#86BBFD",
      textColor: "#1A1A18",
    },
    {
      time: "2:00pm",
      client: "Claire M.",
      dog: "Pepper",
      type: "Follow-up",
      color: "#FDBA74",
      textColor: "#1A1A18",
    },
    {
      time: "4:30pm",
      client: "Dan B.",
      dog: "Zeus",
      type: "Group Class",
      color: "#C084FC",
      textColor: "#1A1A18",
    },
  ];

  const days = [
    { d: "M", n: "2" },
    { d: "T", n: "3" },
    { d: "W", n: "4", active: true },
    { d: "T", n: "5" },
    { d: "F", n: "6" },
  ];

  return (
    <div className="relative w-full flex items-center justify-center lg:justify-end py-12 lg:py-0 select-none">
      {/* Background client profile card */}
      <div
        className="absolute top-4 lg:top-0 right-0 lg:right-[-16px] w-52 bg-white border border-hairline p-4 shadow-md z-0"
        style={{ transform: "rotate(2deg) translateY(8px)" }}
      >
        <div className="flex items-center gap-2.5 mb-3">
          <div className="w-8 h-8 bg-accent flex items-center justify-center text-[11px] font-semibold text-near-black font-manrope shrink-0">
            SW
          </div>
          <div className="min-w-0">
            <p className="text-xs font-semibold text-ink font-manrope truncate">
              Sophie W.
            </p>
            <p className="text-[11px] text-muted font-manrope">
              Biscuit · Labrador
            </p>
          </div>
        </div>
        <div className="space-y-1.5 mb-3">
          {[
            { label: "Sessions", value: "6 total" },
            { label: "Programme", value: "Reactive dog" },
            { label: "Progress", value: "Week 3 of 6" },
          ].map(({ label, value }) => (
            <div key={label} className="flex justify-between items-center">
              <span className="text-[11px] text-muted font-manrope">{label}</span>
              <span className="text-[11px] font-medium text-ink font-manrope">
                {value}
              </span>
            </div>
          ))}
        </div>
        {/* Progress bar */}
        <div className="h-1 bg-surface overflow-hidden">
          <div className="h-full bg-accent" style={{ width: "50%" }} />
        </div>
        <p className="text-[10px] text-muted font-manrope mt-1.5">50% complete</p>
      </div>

      {/* Main schedule card */}
      <div
        className="relative bg-white border border-[#E0E0DB] shadow-2xl w-[288px] z-10 overflow-hidden"
        style={{ transform: "rotate(-1.5deg)" }}
      >
        {/* Dark header */}
        <div className="bg-near-black px-4 pt-4 pb-3">
          <div className="flex items-center justify-between mb-3">
            <span className="font-manrope text-[11px] font-semibold text-dark-muted uppercase tracking-widest">
              Today
            </span>
            <span className="font-manrope text-[11px] text-dark-muted">
              Wed 4 June
            </span>
          </div>
          {/* Day strip */}
          <div className="grid grid-cols-5 gap-1">
            {days.map(({ d, n, active }) => (
              <div
                key={n}
                className={`py-1.5 text-center ${
                  active ? "bg-accent" : "bg-[#1A1A18]"
                }`}
              >
                <p
                  className={`text-[9px] leading-none mb-0.5 font-manrope font-medium ${
                    active ? "text-near-black" : "text-dark-muted"
                  }`}
                >
                  {d}
                </p>
                <p
                  className={`text-[13px] leading-none font-fraunces ${
                    active ? "text-near-black" : "text-dark-muted"
                  }`}
                >
                  {n}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Session rows */}
        <div className="divide-y divide-[#F5F5F2]">
          {sessions.map(({ time, client, dog, type, color }) => (
            <div key={time} className="flex items-stretch gap-0 px-4 py-2.5">
              <div className="w-[52px] text-[11px] text-muted font-manrope pt-0.5 shrink-0">
                {time}
              </div>
              <div
                className="flex-1 pl-3 border-l-[2.5px]"
                style={{ borderLeftColor: color }}
              >
                <p className="text-[12px] font-semibold text-ink font-manrope leading-snug">
                  {client}
                  <span className="font-normal text-muted"> · {dog}</span>
                </p>
                <p className="text-[11px] text-muted font-manrope mt-0.5">
                  {type}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Footer hint */}
        <div className="px-4 py-3 border-t border-[#F5F5F2] bg-[#FAFAF7]">
          <p className="text-[11px] text-muted font-manrope">
            4 sessions today · 2 notes pending
          </p>
        </div>
      </div>

      {/* Notification pill — floating bottom-left of the cluster */}
      <div
        className="absolute bottom-8 lg:bottom-4 left-4 lg:left-0 bg-near-black text-white font-manrope text-[11px] px-3 py-2 shadow-lg flex items-center gap-2 z-20"
        style={{ transform: "rotate(-0.5deg)" }}
      >
        <span
          className="w-2 h-2 bg-accent shrink-0"
          style={{ borderRadius: "50%" }}
        />
        Synced to Google Calendar
      </div>
    </div>
  );
}
