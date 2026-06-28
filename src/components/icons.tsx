import type { SVGProps } from "react";

export const ArrowUpRight = (p: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} {...p}>
    <path d="M7 17L17 7" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M7 7h10v10" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const ArrowLeft = (p: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} {...p}>
    <path d="M19 12H5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M12 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const ArrowRight = (p: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} {...p}>
    <path d="M5 12h14" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const ChevronDown = (p: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} {...p}>
    <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const Star = (p: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
    <path d="M12 2l2.9 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77 5.82 21l1.18-6.88-5-4.87 7.1-1.01z" />
  </svg>
);

export const MapPin = (p: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} {...p}>
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0116 0z" strokeLinejoin="round" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

export const Phone = (p: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} {...p}>
    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.8 19.8 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.8 19.8 0 012.12 4.18 2 2 0 014.11 2h3a2 2 0 012 1.72c.13.96.36 1.9.7 2.81a2 2 0 01-.45 2.11L8.1 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0122 16.92z" />
  </svg>
);

export const IceCream = (p: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
    <path d="M12 2a6 6 0 00-5.66 8H17.66A6 6 0 0012 2z" />
    <path d="M7 12l5 10 5-10z" />
  </svg>
);

export const Noodles = (p: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
    <path d="M4 10h16v1a8 8 0 01-16 0v-1z" />
    <path d="M6 8c0-2 1-4 3-4M10 8c0-3 1-5 3-5M14 8c0-2 1-3 3-3" fill="none" stroke="currentColor" strokeWidth={1.4} strokeLinecap="round" />
    <path d="M3 21h18" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" />
  </svg>
);

export const Instagram = (p: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} {...p}>
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.4" cy="6.6" r="1" fill="currentColor" stroke="none" />
  </svg>
);

export const Facebook = (p: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
    <path d="M13.5 22v-8h2.7l.4-3.1h-3.1V8.9c0-.9.25-1.5 1.55-1.5h1.65V4.7c-.29-.04-1.27-.12-2.41-.12-2.39 0-4.04 1.46-4.04 4.14v2.31H7.6V14h2.64v8h3.26z" />
  </svg>
);

export const Whatsapp = (p: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
    <path d="M12 2a10 10 0 00-8.5 15.3L2 22l4.8-1.5A10 10 0 1012 2zm0 18.2c-1.46 0-2.9-.39-4.16-1.13l-.3-.18-2.88.9.92-2.8-.2-.31A8.2 8.2 0 1112 20.2z" />
    <path d="M17.4 14.38c-.29-.15-1.7-.84-1.96-.93-.26-.1-.45-.15-.64.14-.19.29-.74.93-.9 1.12-.17.19-.33.21-.62.07-.29-.15-1.23-.45-2.34-1.44-.86-.77-1.45-1.72-1.62-2.01-.17-.29-.02-.45.13-.59.13-.13.29-.34.43-.5.15-.17.19-.29.29-.48.1-.2.05-.37-.02-.52-.07-.15-.64-1.55-.88-2.12-.23-.55-.47-.48-.64-.48l-.55-.01c-.19 0-.5.07-.76.36s-1 .98-1 2.39 1.03 2.77 1.17 2.96c.14.19 2 3.05 4.85 4.28.68.29 1.2.47 1.61.6.68.21 1.29.18 1.78.11.54-.08 1.67-.68 1.9-1.34.24-.66.24-1.22.17-1.34-.07-.12-.26-.19-.55-.34z" />
  </svg>
);

export const Pizza = (p: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
    <path d="M12 2L2 7c1.5 7 5 12 10 15 5-3 8.5-8 10-15L12 2z" opacity={0.25} />
    <path d="M12 2L4 6c1.2 5.5 4 9.5 8 12 4-2.5 6.8-6.5 8-12L12 2z" />
    <circle cx="10" cy="8" r="1.1" fill="#0c0710" />
    <circle cx="14" cy="9" r="1.1" fill="#0c0710" />
    <circle cx="12" cy="13" r="1.1" fill="#0c0710" />
  </svg>
);
