import { ImageResponse } from 'next/og';
import { BUSINESS_NAME, PHONE_DISPLAY } from '@/lib/constants';

/**
 * Generated at build time so the WhatsApp/Facebook share card is never missing.
 * Next picks this up by file convention and injects og:image + twitter:image.
 */
export const alt = 'Bhatti Solar System — solar installation in Lahore';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background: 'linear-gradient(135deg, #00202e 0%, #0a3145 100%)',
          padding: '72px 80px',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <div
            style={{
              width: 14,
              height: 14,
              borderRadius: 999,
              background: '#00a3e0',
            }}
          />
          <div
            style={{
              fontSize: 26,
              letterSpacing: 2,
              textTransform: 'uppercase',
              color: '#9fb7c4',
            }}
          >
            {BUSINESS_NAME}
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          <div
            style={{
              fontSize: 86,
              lineHeight: 1.05,
              letterSpacing: -2,
              color: '#ffffff',
              maxWidth: 900,
            }}
          >
            Solar System Installation in Lahore
          </div>
          <div style={{ fontSize: 34, color: '#57d2ff' }}>
            150+ installations · Net metering handled for you
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderTop: '1px solid rgba(255,255,255,0.15)',
            paddingTop: 28,
            fontSize: 28,
            color: '#9fb7c4',
          }}
        >
          <div>On-grid · Hybrid · Off-grid · Commercial</div>
          <div style={{ color: '#ffffff' }}>{PHONE_DISPLAY}</div>
        </div>
      </div>
    ),
    size
  );
}
