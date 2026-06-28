import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown } from "./icons";

/**
 * Scroll-scrubbed background video.
 *
 * The video already contains the brand story/text, so nothing is overlaid on
 * top of it (besides a small scroll hint at the very bottom edge). The section
 * is a couple of screens tall; scroll position maps to the video playhead
 * (down = forward, up = rewind). A rAF loop eases currentTime toward the
 * scroll target so the scrub stays smooth.
 *
 * Tuning knobs:
 *   TRACK height  -> how much scrolling plays the whole clip (smaller = faster)
 *   LERP          -> how tightly the playhead follows scroll (higher = snappier)
 */
const TRACK = "h-[150vh]";
const LERP = 0.28;

export default function ScrollVideoStory() {
  const trackRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const currentRef = useRef(0);
  const [ready, setReady] = useState(false);

  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ["start start", "end end"],
  });

  // small scroll hint only at the very start
  const hintOpacity = useTransform(scrollYProgress, [0, 0.08], [1, 0]);

  useEffect(() => {
    let raf = 0;
    const tick = () => {
      const video = videoRef.current;
      if (video && video.duration && !Number.isNaN(video.duration)) {
        const target = scrollYProgress.get() * video.duration;
        currentRef.current += (target - currentRef.current) * LERP;
        if (Math.abs(target - currentRef.current) < 0.004) {
          currentRef.current = target;
        }
        try {
          video.currentTime = currentRef.current;
        } catch {
          /* not seekable yet */
        }
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [scrollYProgress]);

  return (
    <section ref={trackRef} className={`relative ${TRACK} bg-black`}>
      <div className="sticky top-0 flex h-screen w-full items-center justify-center overflow-hidden bg-black">
        <video
          ref={videoRef}
          src="/videos/hero.mp4"
          muted
          playsInline
          preload="auto"
          onLoadedData={() => setReady(true)}
          className={`h-full w-full object-contain transition-opacity duration-500 ${
            ready ? "opacity-100" : "opacity-0"
          }`}
        />

        {/* scroll hint — pinned to the bottom edge so it never covers video text */}
        <motion.div
          style={{ opacity: hintOpacity }}
          className="pointer-events-none absolute inset-x-0 bottom-5 z-10 flex flex-col items-center gap-1 text-white/70"
        >
          <span className="font-body text-[11px] uppercase tracking-[0.3em]">
            Scroll
          </span>
          <ChevronDown className="h-5 w-5 animate-bounce" />
        </motion.div>
      </div>
    </section>
  );
}
