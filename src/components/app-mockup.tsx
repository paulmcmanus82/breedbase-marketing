export function AppMockup() {
  const sessions = [
    {
      time: "9:00am",
      client: "Sophie W.",
      dog: "Biscuit",
      type: "Assessment",
      color: "var(--color-teal)",
    },
    {
      time: "11:00am",
      client: "Tom H.",
      dog: "Loki",
      type: "1:1 Session",
      color: "var(--color-success)",
    },
    {
      time: "2:00pm",
      client: "Claire M.",
      dog: "Pepper",
      type: "Follow-up",
      color: "var(--color-amber)",
    },
    {
      time: "4:30pm",
      client: "Dan B.",
      dog: "Zeus",
      type: "Group Class",
      color: "var(--color-group-class)",
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
      <div
        style={{
          maxWidth: "300px",
          width: "100%",
          transform: "rotate(2deg)",
          boxShadow: "0 24px 60px rgba(0,0,0,0.14)",
          background: "var(--color-surface)",
          border: "1px solid var(--color-border)",
          overflow: "hidden",
        }}
      >
        {/* Dark header */}
        <div
          style={{
            background: "var(--color-charcoal-dark)",
            padding: "12px 16px",
          }}
        >
          {/* TODAY / date row */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: "10px",
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-inter), system-ui, sans-serif",
                fontWeight: 600,
                fontSize: "10px",
                textTransform: "uppercase",
                letterSpacing: "0.12em",
                color: "rgba(255,255,255,0.5)",
              }}
            >
              TODAY
            </span>
            <span
              style={{
                fontFamily: "var(--font-inter), system-ui, sans-serif",
                fontSize: "11px",
                color: "rgba(255,255,255,0.5)",
              }}
            >
              Wed 4 June
            </span>
          </div>

          {/* Date strip */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(5, 1fr)",
              gap: "4px",
            }}
          >
            {days.map(({ d, n, active }) => (
              <div
                key={n}
                style={{
                  background: active
                    ? "var(--color-amber)"
                    : "rgba(255,255,255,0.08)",
                  padding: "6px 4px",
                  textAlign: "center",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-inter), system-ui, sans-serif",
                    fontWeight: 500,
                    fontSize: "9px",
                    lineHeight: 1,
                    marginBottom: "3px",
                    color: active
                      ? "var(--color-charcoal-dark)"
                      : "rgba(255,255,255,0.6)",
                  }}
                >
                  {d}
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-fraunces), Georgia, serif",
                    fontSize: "13px",
                    lineHeight: 1,
                    color: active
                      ? "var(--color-charcoal-dark)"
                      : "rgba(255,255,255,0.6)",
                  }}
                >
                  {n}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Session rows */}
        <div
          style={{
            background: "var(--color-surface)",
          }}
        >
          {sessions.map(({ time, client, dog, type, color }, i) => (
            <div
              key={time}
              style={{
                display: "flex",
                alignItems: "stretch",
                padding: "10px 12px",
                borderTop:
                  i === 0
                    ? "none"
                    : "1px solid var(--color-border)",
              }}
            >
              <div
                style={{
                  width: "52px",
                  flexShrink: 0,
                  fontFamily: "var(--font-inter), system-ui, sans-serif",
                  fontSize: "11px",
                  color: "var(--color-text-muted)",
                  paddingTop: "1px",
                }}
              >
                {time}
              </div>
              <div
                style={{
                  flex: 1,
                  paddingLeft: "12px",
                  borderLeft: `2px solid ${color}`,
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-inter), system-ui, sans-serif",
                    fontWeight: 600,
                    fontSize: "12px",
                    color: "var(--color-text-primary)",
                    lineHeight: 1.3,
                  }}
                >
                  {client}{" "}
                  <span
                    style={{
                      fontWeight: 400,
                      color: "var(--color-text-muted)",
                    }}
                  >
                    · {dog}
                  </span>
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-inter), system-ui, sans-serif",
                    fontSize: "11px",
                    color: "var(--color-text-muted)",
                    marginTop: "2px",
                  }}
                >
                  {type}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div
          style={{
            background: "var(--color-teal-light)",
            borderTop: "1px solid var(--color-border)",
            padding: "8px 12px",
            display: "flex",
            alignItems: "center",
            gap: "6px",
          }}
        >
          <span
            style={{
              width: "6px",
              height: "6px",
              borderRadius: "50%",
              background: "var(--color-success)",
              flexShrink: 0,
            }}
          />
          <span
            style={{
              fontFamily: "var(--font-inter), system-ui, sans-serif",
              fontSize: "10px",
              color: "var(--color-teal)",
            }}
          >
            Synced to Google Calendar · 4 sessions today · 2 notes pending
          </span>
        </div>
      </div>
    </div>
  );
}
