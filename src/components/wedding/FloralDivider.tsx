import floralCorner from "@/assets/floral-corner.png";

export function FloralDivider({
  className = "",
  compact = false,
}: {
  className?: string;
  compact?: boolean;
}) {
  return (
    <div className={`flex items-center justify-center ${compact ? "py-4" : "py-8"} ${className}`}>
      <div className={`h-px bg-border ${compact ? "w-10" : "w-16"}`} />
      <img
        src={floralCorner}
        alt=""
        className={`rotate-90 object-contain opacity-80 ${compact ? "mx-3 h-8 w-8" : "mx-4 h-12 w-12"}`}
        loading="lazy"
      />
      <div className={`h-px bg-border ${compact ? "w-10" : "w-16"}`} />
    </div>
  );
}

export function FloralCorner({
  position = "top-left",
  className = "",
}: {
  position?: "top-left" | "top-right" | "bottom-left" | "bottom-right";
  className?: string;
}) {
  const rotation =
    position === "top-left"
      ? "rotate-0"
      : position === "top-right"
        ? "rotate-90"
        : position === "bottom-right"
          ? "rotate-180"
          : "-rotate-90";

  const placement =
    position === "top-left"
      ? "top-0 left-0"
      : position === "top-right"
        ? "top-0 right-0"
        : position === "bottom-right"
          ? "bottom-0 right-0"
          : "bottom-0 left-0";

  return (
    <img
      src={floralCorner}
      alt=""
      className={`pointer-events-none absolute ${placement} h-40 w-40 object-contain opacity-60 ${rotation} ${className}`}
      loading="lazy"
    />
  );
}
