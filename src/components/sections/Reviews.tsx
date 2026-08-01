import { Section, SectionHeading } from '@/components/ui';

/**
 * Reviews slot — built and wired, but renders nothing while REVIEWS is empty.
 *
 * The copy deck asks for the slot to exist now and activate later. Showing a
 * visible "reviews coming soon" box on a live page advertises the absence of
 * reviews, so the section self-hides until there is something to show. Drop
 * real Google reviews into REVIEWS (or swap in the Google widget) and the
 * section appears with no other change.
 */
interface Review {
  name: string;
  area: string;
  quote: string;
}

const REVIEWS: Review[] = [];

export function Reviews() {
  if (REVIEWS.length === 0) return null;

  return (
    <Section id="reviews" tone="tint">
      <SectionHeading>What our customers say</SectionHeading>

      <ul className="mt-14 grid gap-4 md:grid-cols-2">
        {REVIEWS.map((review) => (
          <li
            key={review.name}
            className="rounded-panel border border-line bg-canvas p-8"
          >
            <blockquote className="text-lead text-pretty text-ink">
              {review.quote}
            </blockquote>
            <p className="mt-5 text-sm font-semibold text-ink">
              {review.name}
              <span className="font-normal text-muted"> · {review.area}</span>
            </p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
