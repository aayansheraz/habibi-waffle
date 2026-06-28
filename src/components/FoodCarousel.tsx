import { useEffect, useRef, useState, type CSSProperties } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { CATEGORIES, CATEGORY_ORDER } from "../data/menu";
import FoodArt from "./FoodArt";
import Grain from "./Grain";
import { ArrowLeft, ArrowRight } from "./icons";

const EASE = "cubic-bezier(0.4,0,0.2,1)";
const DUR = 650;
const N = CATEGORY_ORDER.length;

type Role = "center" | "left" | "right";

function roleOf(index: number, active: number): Role {
  if (index === active) return "center";
  if (index === (active + 1) % N) return "right";
  return "left";
}

function roleStyle(role: Role, mobile: boolean): CSSProperties {
  const base: CSSProperties = {
    position: "absolute",
    transform: "translateX(-50%)",
    transition: `transform ${DUR}ms ${EASE}, filter ${DUR}ms ${EASE}, opacity ${DUR}ms ${EASE}, left ${DUR}ms ${EASE}, bottom ${DUR}ms ${EASE}, height ${DUR}ms ${EASE}`,
    willChange: "transform, filter, opacity, left",
  };
  if (role === "center")
    return {
      ...base,
      left: "50%",
      bottom: mobile ? "22%" : "8%",
      height: mobile ? "36%" : "58%",
      transform: `translateX(-50%) scale(${mobile ? 1.05 : 1.2})`,
      filter: "drop-shadow(0 18px 24px rgba(42,23,38,0.35))",
      opacity: 1,
      zIndex: 20,
    };
  const side: CSSProperties = {
    ...base,
    bottom: mobile ? "34%" : "22%",
    height: mobile ? "16%" : "26%",
    transform: "translateX(-50%) scale(1)",
    filter: "blur(1.5px)",
    opacity: 0.9,
    zIndex: 10,
  };
  if (role === "left") return { ...side, left: mobile ? "16%" : "26%" };
  return { ...side, left: mobile ? "84%" : "74%" };
}

export default function FoodCarousel() {
  const navigate = useNavigate();
  const [active, setActive] = useState(1); // start on Waffle (the famous one)
  const [mobile, setMobile] = useState(false);
  const lock = useRef(false);

  useEffect(() => {
    const onResize = () => setMobile(window.innerWidth < 640);
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const rotate = (dir: "next" | "prev") => {
    if (lock.current) return;
    lock.current = true;
    setActive((p) => (dir === "next" ? (p + 1) % N : (p + N - 1) % N));
    window.setTimeout(() => (lock.current = false), DUR);
  };

  const activeCat = CATEGORIES[CATEGORY_ORDER[active]];

  return (
    <section
      className="relative w-full overflow-hidden"
      style={{
        backgroundColor: activeCat.color,
        transition: `background-color ${DUR}ms ${EASE}`,
        fontFamily: "Inter, sans-serif",
      }}
    >
      <div className="relative h-screen w-full overflow-hidden">
        <Grain className="z-50" />

        {/* giant ghost word behind the art */}
        <motion.div
          key={activeCat.word}
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="pointer-events-none absolute inset-x-0 z-[2] flex select-none items-center justify-center"
          style={{ top: "16%" }}
        >
          <span
            className="font-display uppercase leading-none text-white"
            style={{
              fontSize: "clamp(80px, 26vw, 360px)",
              letterSpacing: "-0.02em",
              whiteSpace: "nowrap",
            }}
          >
            {activeCat.word}
          </span>
        </motion.div>

        {/* brand top-left */}
        <div className="absolute left-4 top-6 z-[60] sm:left-8">
          <p className="font-body text-xs font-semibold uppercase tracking-[0.18em] text-white/90">
            Habibi Waffle
          </p>
          <p className="font-brand text-2xl leading-none text-white">Habibi</p>
        </div>

        {/* section label top-right */}
        <div className="absolute right-4 top-6 z-[60] hidden text-right sm:right-8 sm:block">
          <p className="font-body text-xs font-semibold uppercase tracking-[0.18em] text-white/90">
            What we offer
          </p>
        </div>

        {/* carousel */}
        <div className="absolute inset-0 z-[3]">
          {CATEGORY_ORDER.map((slug, i) => {
            const role = roleOf(i, active);
            return (
              <button
                key={slug}
                type="button"
                onClick={() =>
                  role === "center" ? navigate(`/menu/${slug}`) : rotate(role === "right" ? "next" : "prev")
                }
                style={roleStyle(role, mobile)}
                className="block cursor-pointer"
                aria-label={`${CATEGORIES[slug].title}`}
              >
                <FoodArt
                  category={slug}
                  className={`h-full w-auto ${role === "center" ? "animate-float" : ""}`}
                />
              </button>
            );
          })}
        </div>

        {/* bottom-left: title + blurb + nav */}
        <div className="absolute bottom-6 left-4 z-[60] max-w-[340px] sm:bottom-16 sm:left-16">
          <motion.div
            key={activeCat.slug}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
          >
            <p className="mb-1 font-body text-xs font-semibold uppercase tracking-[0.2em] text-white/85">
              {activeCat.kicker}
            </p>
            <p className="mb-2 font-display text-2xl uppercase leading-none tracking-wide text-white sm:mb-3 sm:text-[34px]">
              {activeCat.title}
            </p>
            <p className="mb-4 hidden font-body text-sm leading-relaxed text-white/90 sm:mb-5 sm:block">
              {activeCat.blurb}
            </p>
          </motion.div>

          <div className="flex gap-3">
            <button
              type="button"
              onClick={() => rotate("prev")}
              className="grid h-12 w-12 place-items-center rounded-full border-2 border-white/90 text-white transition-all duration-150 hover:scale-110 hover:bg-white/15 sm:h-16 sm:w-16"
              aria-label="Previous"
            >
              <ArrowLeft className="h-6 w-6" strokeWidth={2.25} />
            </button>
            <button
              type="button"
              onClick={() => rotate("next")}
              className="grid h-12 w-12 place-items-center rounded-full border-2 border-white/90 text-white transition-all duration-150 hover:scale-110 hover:bg-white/15 sm:h-16 sm:w-16"
              aria-label="Next"
            >
              <ArrowRight className="h-6 w-6" strokeWidth={2.25} />
            </button>
          </div>
        </div>

        {/* bottom-right: view menu link */}
        <button
          type="button"
          onClick={() => navigate(`/menu/${activeCat.slug}`)}
          className="absolute bottom-6 right-4 z-[60] flex items-center gap-2 text-white opacity-95 transition-opacity duration-200 hover:opacity-100 sm:bottom-16 sm:right-10"
        >
          <span
            className="font-display uppercase leading-none"
            style={{ fontSize: "clamp(20px, 4vw, 52px)", letterSpacing: "-0.02em" }}
          >
            View Menu
          </span>
          <ArrowRight className="h-6 w-6 sm:h-8 sm:w-8" strokeWidth={2.25} />
        </button>
      </div>
    </section>
  );
}
