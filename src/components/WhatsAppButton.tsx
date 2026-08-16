import { WHATSAPP_URL } from '@/lib/constants';
import { WhatsappIcon } from '@/components/ui';

/**
 * Floating WhatsApp action, fixed on every screen size.
 *
 * Deliberately a plain link, not a chat widget: it ships zero client JS, and
 * one tap goes straight to the conversation instead of opening a simulated
 * chat panel first. WhatsApp green is used here and nowhere else on the site —
 * at this size and position it reads as the platform mark, so people recognise
 * what it does before reading anything.
 */
export function WhatsAppButton() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Bhatti Solar System on WhatsApp"
      className="fixed right-5 bottom-5 z-50 flex h-14 w-14 items-center justify-center rounded-pill bg-[#25D366] text-white shadow-[0_8px_28px_rgba(37,211,102,0.45)] transition-all duration-200 hover:scale-110 hover:shadow-[0_12px_36px_rgba(37,211,102,0.6)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink motion-reduce:transition-none motion-reduce:hover:scale-100"
    >
      <WhatsappIcon size={26} />
    </a>
  );
}
