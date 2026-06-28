import { Link } from "react-router-dom";
import { Phone } from "./icons";

export default function Navbar() {
  return (
    <nav className="fixed left-0 right-0 top-4 z-[70] flex items-center justify-between px-4 sm:px-8">
      <Link to="/" className="flex items-center gap-2">
        <span className="font-brand text-2xl text-white drop-shadow-[0_2px_6px_rgba(0,0,0,0.5)]">
          Habibi
        </span>
        <span className="hidden font-body text-[11px] font-semibold uppercase tracking-[0.2em] text-white/80 sm:inline">
          Waffle
        </span>
      </Link>

      <a
        href="tel:03114444237"
        className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 font-body text-sm font-bold uppercase tracking-wide text-toon-ink shadow-toon-sm transition-transform duration-150 hover:scale-105 sm:px-5"
      >
        <Phone className="h-4 w-4" />
        <span className="hidden sm:inline">Order Now</span>
        <span className="sm:hidden">Order</span>
      </a>
    </nav>
  );
}
