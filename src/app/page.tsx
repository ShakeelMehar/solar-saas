import { Hero } from '@/components/sections/Hero';
import { TrustBar } from '@/components/sections/TrustBar';
import { WhySolar } from '@/components/sections/WhySolar';
import { Solutions } from '@/components/sections/Solutions';
import { SystemSizes } from '@/components/sections/SystemSizes';
import { NetMetering } from '@/components/sections/NetMetering';
import { Process } from '@/components/sections/Process';
import { Projects } from '@/components/sections/Projects';
import { WhyChooseUs } from '@/components/sections/WhyChooseUs';
import { Reviews } from '@/components/sections/Reviews';
import { FaqSection } from '@/components/sections/FaqSection';
import { FinalCta } from '@/components/sections/FinalCta';
import { localBusinessSchema, faqSchema } from '@/lib/schema';

/** Statically generated — Google must see the full markup on first load. */
export const dynamic = 'force-static';

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <Hero />
      <TrustBar />
      <WhySolar />
      <Solutions />
      <SystemSizes />
      <NetMetering />
      <Process />
      <Projects />
      <WhyChooseUs />
      <Reviews />
      <FaqSection />
      <FinalCta />
    </>
  );
}
