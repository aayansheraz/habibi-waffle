import type { Category } from "../data/menu";

type ArtProps = { className?: string };

const STROKE = "#2a1726";

/** Cartoon ice-cream-on-waffle (placeholder for the Waffle & Dessert slide). */
function WaffleArt({ className }: ArtProps) {
  return (
    <svg viewBox="0 0 300 420" className={className} xmlns="http://www.w3.org/2000/svg">
      <g stroke={STROKE} strokeWidth="6" strokeLinejoin="round" strokeLinecap="round">
        {/* cone */}
        <path d="M110 250 L150 410 L190 250 Z" fill="#F4A93C" />
        <path d="M122 268 H178 M132 300 H168 M142 332 H158" fill="none" strokeWidth="4" opacity="0.7" />
        {/* scoops */}
        <circle cx="150" cy="210" r="58" fill="#FFF3DA" />
        <circle cx="112" cy="170" r="48" fill="#F7B9D6" />
        <circle cx="188" cy="170" r="48" fill="#9BD6A6" />
        <circle cx="150" cy="150" r="52" fill="#FCD9A0" />
        {/* cherry */}
        <circle cx="150" cy="92" r="18" fill="#E0463C" />
        <path d="M150 74 C150 58 168 56 172 44" fill="none" strokeWidth="5" />
        {/* drip + sprinkles */}
        <path d="M104 196 q8 22 22 10 q10 20 24 4" fill="none" strokeWidth="5" stroke="#E0463C" />
        <line x1="132" y1="138" x2="140" y2="150" stroke="#E0463C" strokeWidth="5" />
        <line x1="170" y1="132" x2="176" y2="146" stroke="#5BA0E0" strokeWidth="5" />
        <line x1="150" y1="120" x2="152" y2="136" stroke="#6BBF7A" strokeWidth="5" />
      </g>
    </svg>
  );
}

/** Cartoon noodle bowl with chopsticks (placeholder for the Chinese slide). */
function ChineseArt({ className }: ArtProps) {
  return (
    <svg viewBox="0 0 300 420" className={className} xmlns="http://www.w3.org/2000/svg">
      <g stroke={STROKE} strokeWidth="6" strokeLinejoin="round" strokeLinecap="round">
        {/* steam */}
        <path d="M120 150 q-12 -26 6 -46 q14 -16 2 -40" fill="none" strokeWidth="5" opacity="0.7" />
        <path d="M180 150 q12 -26 -6 -46 q-14 -16 -2 -40" fill="none" strokeWidth="5" opacity="0.7" />
        {/* chopsticks */}
        <line x1="196" y1="120" x2="262" y2="60" stroke="#C77B3A" strokeWidth="7" />
        <line x1="186" y1="134" x2="252" y2="74" stroke="#C77B3A" strokeWidth="7" />
        {/* noodles mound */}
        <path d="M96 196 q54 -56 108 0" fill="#FAD98A" />
        <path d="M104 188 q46 -40 92 0 M112 178 q38 -30 76 0" fill="none" strokeWidth="4" opacity="0.7" />
        {/* bowl */}
        <path d="M70 196 H230 a80 80 0 0 1 -160 0 Z" fill="#D8443B" />
        <path d="M70 196 H230" fill="none" />
        <path d="M96 250 q54 26 108 0" fill="none" strokeWidth="4" stroke="#FFF3DA" opacity="0.8" />
        {/* base */}
        <path d="M118 300 q32 18 64 0 l-10 24 q-22 12 -44 0 Z" fill="#B8332B" />
      </g>
    </svg>
  );
}

/** Cartoon burger (placeholder for the Broast / Pizza / Wrap slide). */
function BurgerArt({ className }: ArtProps) {
  return (
    <svg viewBox="0 0 300 420" className={className} xmlns="http://www.w3.org/2000/svg">
      <g stroke={STROKE} strokeWidth="6" strokeLinejoin="round" strokeLinecap="round">
        {/* top bun */}
        <path d="M70 168 q80 -90 160 0 Z" fill="#F4A93C" />
        <circle cx="120" cy="130" r="4" fill="#FFF3DA" stroke="none" />
        <circle cx="150" cy="118" r="4" fill="#FFF3DA" stroke="none" />
        <circle cx="180" cy="130" r="4" fill="#FFF3DA" stroke="none" />
        {/* lettuce */}
        <path d="M64 176 q12 16 28 4 q14 16 30 2 q16 16 30 2 q16 16 30 2 q14 14 26 0 l0 14 H64 Z" fill="#7BC47F" />
        {/* patty */}
        <rect x="66" y="196" width="168" height="30" rx="14" fill="#7A4326" />
        {/* cheese */}
        <path d="M66 224 h168 l-26 26 l-30 -16 l-30 16 l-30 -16 l-26 -10 Z" fill="#F6C544" />
        {/* bottom bun */}
        <path d="M70 250 h160 q-16 40 -80 40 q-64 0 -80 -40 Z" fill="#E89A3C" />
      </g>
    </svg>
  );
}

const ART: Record<Category, (p: ArtProps) => JSX.Element> = {
  waffle: WaffleArt,
  chinese: ChineseArt,
  fastfood: BurgerArt,
};

export default function FoodArt({
  category,
  className,
}: {
  category: Category;
  className?: string;
}) {
  const Art = ART[category];
  return <Art className={className} />;
}
