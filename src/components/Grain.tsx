type Props = {
  className?: string;
  opacity?: number;
};

/** Film-grain overlay (fractal-noise SVG, tiled). */
export default function Grain({ className = "", opacity = 0.4 }: Props) {
  return (
    <div
      aria-hidden
      className={`grain pointer-events-none absolute inset-0 ${className}`}
      style={{ opacity }}
    />
  );
}
