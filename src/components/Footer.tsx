import {
  Facebook,
  Instagram,
  MapPin,
  Phone,
  Star,
  Whatsapp,
} from "./icons";
import Grain from "./Grain";

const SOCIALS = [
  { label: "Instagram", href: "https://instagram.com/habibiwafflepk", Icon: Instagram },
  { label: "Facebook", href: "https://facebook.com/Habibiwaffle", Icon: Facebook },
  { label: "WhatsApp", href: "https://wa.me/923114444237", Icon: Whatsapp },
];

export default function Footer() {
  return (
    <footer
      id="visit"
      className="relative overflow-hidden px-6 py-20"
      style={{ backgroundColor: "#2A1726" }}
    >
      <Grain opacity={0.25} />
      <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center gap-8 text-center">
        <img
          src="/images/logo-habibi-light.webp"
          alt="Häbibi"
          className="h-16 w-auto sm:h-20"
          draggable={false}
        />

        <h2
          className="font-display uppercase leading-[0.9] text-white"
          style={{ fontSize: "clamp(40px, 8vw, 88px)" }}
        >
          Come say Habibi
        </h2>

        <div className="grid w-full gap-5 sm:grid-cols-3">
          <div className="toon-card flex flex-col items-center gap-2 rounded-[1.25rem] bg-toon-pink p-6">
            <MapPin className="h-7 w-7 text-white" />
            <p className="font-body text-sm font-medium text-white">
              Shop No 1, Block A, Pak-Arab Housing Scheme, Lahore 54000
            </p>
          </div>
          <div className="toon-card flex flex-col items-center gap-2 rounded-[1.25rem] bg-toon-red p-6">
            <Phone className="h-7 w-7 text-white" />
            <p className="font-body text-sm font-medium text-white">
              Home delivery
              <br />
              <a href="tel:03114444237" className="font-display text-2xl tracking-wide">
                0311 4444237
              </a>
            </p>
          </div>
          <div className="toon-card flex flex-col items-center gap-2 rounded-[1.25rem] bg-toon-amber p-6">
            <Star className="h-7 w-7 text-white" />
            <p className="font-body text-sm font-medium text-white">
              3.9 &#9733; on Google
              <br />
              234 reviews &middot; Open till 9pm
            </p>
          </div>
        </div>

        {/* social media */}
        <div className="flex flex-col items-center gap-3">
          <p className="font-body text-xs font-bold uppercase tracking-[0.3em] text-white/60">
            Follow us
          </p>
          <div className="flex items-center gap-4">
            {SOCIALS.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="grid h-12 w-12 place-items-center rounded-full bg-white/10 text-white transition-all duration-150 hover:scale-110 hover:bg-toon-pink"
              >
                <Icon className="h-6 w-6" />
              </a>
            ))}
          </div>
        </div>

        <p className="font-body text-xs font-semibold uppercase tracking-[0.3em] text-white/45">
          &copy; {new Date().getFullYear()} Habibi Waffle &middot; Lahore
        </p>
      </div>
    </footer>
  );
}
