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
  variant?: "light" | "dark" | "white";
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
    return <div className="h-14 w-56" aria-hidden="true" />;
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
      : variant === "white"
        ? "border-black/10 bg-white text-black"
        : "border-border/60 text-plum";
  const labelClass =
    variant === "dark" ? "text-white/70" : variant === "white" ? "text-black/60" : "text-muted-foreground";

  return (
    <div className="flex flex-nowrap items-center justify-center gap-1.5 sm:gap-2">
      {units.map((unit) => (
        <div
          key={unit.label}
          className={`flex h-12 w-12 shrink-0 flex-col items-center justify-center rounded-lg border sm:h-14 sm:w-14 ${boxClass}`}
        >
          <span className="font-display text-base sm:text-lg">{String(unit.value).padStart(2, "0")}</span>
          <span className={`text-[7px] uppercase tracking-[0.08em] sm:text-[8px] sm:tracking-[0.1em] ${labelClass}`}>
            {unit.label}
          </span>
        </div>
      ))}
    </div>
  );
}
