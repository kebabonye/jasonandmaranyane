import { useEffect, useState } from "react";

// White Wedding day, Africa/Gaborone (UTC+2, no DST). Exact celebration start time TBC.
const WHITE_WEDDING_DATE = "2026-10-31T00:00:00+02:00";

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

function getTimeLeft(target: number): TimeLeft {
  const total = Math.max(0, target - Date.now());
  return {
    days: Math.floor(total / (1000 * 60 * 60 * 24)),
    hours: Math.floor((total / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((total / (1000 * 60)) % 60),
    seconds: Math.floor((total / 1000) % 60),
  };
}

export function Countdown({
  variant = "light",
  targetDate = WHITE_WEDDING_DATE,
}: {
  variant?: "light" | "dark";
  targetDate?: string;
}) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);

  useEffect(() => {
    const target = new Date(targetDate).getTime();
    setTimeLeft(getTimeLeft(target));
    const interval = setInterval(() => {
      setTimeLeft(getTimeLeft(target));
    }, 1000);
    return () => clearInterval(interval);
  }, [targetDate]);

  // Avoid an SSR/client mismatch: render nothing until mounted, then tick client-side.
  if (!timeLeft) {
    return <div className="h-44 w-44" aria-hidden="true" />;
  }

  const units: Array<{ label: string; value: number }> = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds },
  ];

  const boxClass =
    variant === "dark"
      ? "border-white/30 text-white"
      : "border-border/60 text-plum";
  const labelClass = variant === "dark" ? "text-white/70" : "text-muted-foreground";

  return (
    <div className="flex flex-nowrap items-center justify-center gap-3 sm:gap-4">
      {units.map((unit) => (
        <div
          key={unit.label}
          className={`flex h-16 w-16 shrink-0 flex-col items-center justify-center rounded-lg border sm:h-20 sm:w-20 ${boxClass}`}
        >
          <span className="font-display text-lg sm:text-2xl">{String(unit.value).padStart(2, "0")}</span>
          <span className={`text-[9px] uppercase tracking-[0.1em] sm:text-[10px] sm:tracking-[0.15em] ${labelClass}`}>
            {unit.label}
          </span>
        </div>
      ))}
    </div>
  );
}
