// A hint + affordance for guests to keep scrolling past a full-height hero:
// bouncing chevron, click/tap scrolls one viewport down.
export function ScrollDownButton({
  label = "Scroll Down",
  className = "",
}: {
  label?: string;
  className?: string;
}) {
  function handleClick() {
    window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label="Scroll down"
      className={`group flex items-center justify-center text-white ${className}`}
    >
      <span className="sr-only">{label}</span>
      <span className="relative flex h-8 w-8 shrink-0 items-center justify-center sm:h-9 sm:w-9">
        <span className="absolute inset-0 animate-ping rounded-full bg-blush/40" />
        <span className="absolute inset-0 rounded-full border border-white/70 bg-black/20 backdrop-blur-sm transition-colors group-hover:bg-black/40" />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="relative h-4 w-4 animate-bounce text-blush drop-shadow-[0_1px_2px_rgba(0,0,0,0.6)]"
          aria-hidden="true"
        >
          <path d="M12 5v14M5 12l7 7 7-7" />
        </svg>
      </span>
    </button>
  );
}
