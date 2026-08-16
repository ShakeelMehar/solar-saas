import type { ReactNode } from 'react';

/**
 * Shared primitives. All server-renderable — nothing here needs client JS.
 *
 * Colour discipline: `bg-accent` — the logo's amber — is reserved for solid
 * CTAs and nothing else, always with `text-ink` on top. Blue is structural,
 * split by ground: `text-brand-ink` on light, `text-brand-on-ink` on dark.
 * WhatsApp green is reserved exclusively for the floating platform button,
 * where it reads as the WhatsApp mark rather than as a third colour.
 */

export function WhatsappIcon({
  size = 18,
  className = '',
}: {
  size?: number;
  className?: string;
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  );
}

/** The solid amber CTA. Min height 44px for mobile tap targets. */
export function WhatsappCta({
  href,
  children,
  className = '',
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex min-h-12 items-center justify-center gap-2.5 rounded-pill bg-accent px-6 py-3 text-sm font-semibold text-ink shadow-[0_2px_14px_rgba(254,191,20,0.38)] transition-all duration-200 hover:bg-accent-hover hover:shadow-[0_4px_22px_rgba(254,191,20,0.55)] hover:-translate-y-0.5 active:translate-y-0 active:bg-accent-press focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent ${className}`}
    >
      <WhatsappIcon size={17} />
      {children}
    </a>
  );
}

/** Outlined secondary action. `onDark` flips it for use over the hero image. */
export function SecondaryCta({
  href,
  children,
  onDark = false,
  className = '',
}: {
  href: string;
  children: ReactNode;
  onDark?: boolean;
  className?: string;
}) {
  /* The border is this control's only boundary, so it has to clear 3:1
     (WCAG 1.4.11) against the worst ground it lands on — which is not the flat
     navy but a blown-out white panel frame in the hero photograph. white/35
     managed 3.03:1 on `ink` and only 2.25:1 there; /55 holds at 3.33:1. */
  const tone = onDark
    ? 'border-white/55 text-white hover:border-white/80 hover:bg-white/10 focus-visible:outline-white'
    : 'border-line-strong text-ink hover:border-ink hover:bg-canvas-tint focus-visible:outline-brand';

  return (
    <a
      href={href}
      className={`inline-flex min-h-12 items-center justify-center gap-2.5 rounded-pill border px-6 py-3 text-sm font-semibold transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 ${tone} ${className}`}
    >
      {children}
    </a>
  );
}

/**
 * Section shell — keeps vertical rhythm and max width identical throughout.
 *
 * Hairlines are drawn only between two light sections. A dark band is its own
 * boundary, so adding a rule there just paints an invisible line.
 */
export function Section({
  id,
  children,
  tone = 'canvas',
  className = '',
}: {
  id?: string;
  children: ReactNode;
  tone?: 'canvas' | 'tint' | 'ink';
  className?: string;
}) {
  const tones = {
    canvas: 'bg-canvas border-t border-line',
    tint: 'bg-canvas-tint border-t border-line',
    /* Headings default to `ink` in the base layer, which is invisible on this
       ground. Flipping them here means a heading dropped into a dark section
       later is legible without the author having to remember. */
    ink: 'bg-ink text-inverse-muted [&_:is(h2,h3,h4)]:text-white',
  };

  return (
    <section
      id={id}
      className={`${tones[tone]} py-20 md:py-24 lg:py-28 ${className}`}
    >
      <div className="mx-auto max-w-6xl px-6 md:px-10">{children}</div>
    </section>
  );
}

/**
 * The one section header used everywhere.
 *
 * Heading left, supporting copy right on wide screens. Previously each
 * section invented its own arrangement, and the ones with no supporting copy
 * left the right half of the page empty — most visibly on "How we work".
 * Making the two-column pairing the system fixes that in one place.
 */
export function SectionHeading({
  children,
  sub,
  onDark = false,
}: {
  children: ReactNode;
  sub?: ReactNode;
  onDark?: boolean;
}) {
  if (!sub) {
    return (
      <h2
        className={`max-w-2xl text-title ${onDark ? 'text-white' : 'text-ink'}`}
      >
        {children}
      </h2>
    );
  }

  return (
    <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:items-end lg:gap-16">
      <h2 className={`text-title ${onDark ? 'text-white' : 'text-ink'}`}>
        {children}
      </h2>
      <p
        className={`text-lead text-pretty ${
          onDark ? 'text-inverse-muted' : 'text-body'
        }`}
      >
        {sub}
      </p>
    </div>
  );
}

/** Uppercase micro-label. Used only where it names a real field or column. */
export function Eyebrow({
  children,
  onDark = false,
  className = '',
}: {
  children: ReactNode;
  onDark?: boolean;
  className?: string;
}) {
  return (
    <p
      className={`text-eyebrow uppercase ${
        onDark ? 'text-brand-on-ink' : 'text-brand-ink'
      } ${className}`}
    >
      {children}
    </p>
  );
}
