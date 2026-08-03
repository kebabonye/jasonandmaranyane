import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { type ReactNode, useEffect, useRef, useState } from "react";

import appCss from "../styles.css?url";
import musicSrc from "@/assets/Music.mp3";

// Rendered by the router when a URL doesn't match any route.
function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-7xl text-foreground">404</h1>
        <h2 className="mt-4 font-display text-xl text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

// Rendered by the router when a route's loader or component throws.
function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-xl tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-6 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Jason & Maranyane — Wedding Invitation" },
      { name: "description", content: "You are invited to celebrate the wedding of Jason and Maranyane." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;1,400&family=Lato:wght@300;400;500;700&display=swap",
      },
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "preload", href: musicSrc, as: "audio" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

// Outermost HTML document — wraps every page, including the error/not-found boundaries above.
function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body className="antialiased">
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function SpeakerIcon({ muted, className }: { muted: boolean; className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M13.5 4.06c0-1.336-1.616-2.005-2.56-1.06l-4.5 4.5H4.508c-1.141 0-2.318.664-2.66 1.905A9.76 9.76 0 001.5 12c0 .898.121 1.768.35 2.595.341 1.24 1.518 1.905 2.659 1.905h1.93l4.5 4.5c.945.945 2.561.276 2.561-1.06V4.06z" />
      {muted ? (
        <path d="M17.78 9.22a.75.75 0 10-1.06 1.06L18.44 12l-1.72 1.72a.75.75 0 101.06 1.06l1.72-1.72 1.72 1.72a.75.75 0 101.06-1.06L20.56 12l1.72-1.72a.75.75 0 10-1.06-1.06l-1.72 1.72-1.72-1.72z" />
      ) : (
        <path d="M18.584 5.106a.75.75 0 011.06 0c3.808 3.807 3.808 9.98 0 13.788a.75.75 0 11-1.06-1.06 8.25 8.25 0 000-11.668.75.75 0 010-1.06z" />
      )}
    </svg>
  );
}

// Background wedding music, played from a hidden <audio> element: starts
// muted (the only autoplay browsers reliably allow) and switches to audible
// on the first user interaction with the page.
function AudioPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [muted, setMuted] = useState(true);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.play().catch(() => {});

    const unmute = () => {
      audio.muted = false;
      setMuted(false);
      audio.play().catch(() => {});
    };

    document.addEventListener("click", unmute, { once: true });
    document.addEventListener("touchstart", unmute, { once: true });
    document.addEventListener("scroll", unmute, { once: true });

    return () => {
      document.removeEventListener("click", unmute);
      document.removeEventListener("touchstart", unmute);
      document.removeEventListener("scroll", unmute);
    };
  }, []);

  function toggleMute() {
    const audio = audioRef.current;
    if (!audio) return;
    if (muted) {
      audio.muted = false;
      audio.play().catch(() => {});
      setMuted(false);
    } else {
      audio.muted = true;
      setMuted(true);
    }
  }

  return (
    <>
      <audio ref={audioRef} src={musicSrc} loop autoPlay muted playsInline preload="auto" />
      <button
        onClick={toggleMute}
        aria-label={muted ? "Unmute music" : "Mute music"}
        className="fixed bottom-20 right-5 z-50 flex items-center gap-2 rounded-full border border-white/40 bg-black/40 px-4 py-2 text-xs font-medium uppercase tracking-widest text-white shadow-lg backdrop-blur-sm transition hover:bg-black/60"
      >
        <SpeakerIcon muted={muted} className="h-4 w-4" />
        {muted ? "Unmute" : "Mute"}
      </button>
    </>
  );
}

// Rendered inside the shell for every matched route: provides React Query
// context and the persistent audio player alongside the active page.
function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <AudioPlayer />
      <Outlet />
    </QueryClientProvider>
  );
}
