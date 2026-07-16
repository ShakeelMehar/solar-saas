'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { DISCO_DATA } from '@/lib/discoData';
import {
  WHATSAPP_URL,
  PHONE_TEL,
  PHONE_DISPLAY,
  COST_PER_KW,
} from '@/lib/constants';
import solarHeroImg from '@/assets/solar-hero.jpeg';
import {
  ChevronRight,
  Cpu,
  MapPin,
  Headphones,
  ArrowRight,
  CheckCircle,
  Compass,
  Phone,
} from 'lucide-react';

export function HomePage() {
  const [monthlyUnits, setMonthlyUnits] = useState<number>(500);
  const [isUrdu, setIsUrdu] = useState<boolean>(false);
  const [systemSize, setSystemSize] = useState<number>(3.5);
  const [monthlySavings, setMonthlySavings] = useState<number>(18200);

  const activeDisco = DISCO_DATA.find((d) => d.code === 'lesco') || DISCO_DATA[0];

  useEffect(() => {
    const neededSize = Number((monthlyUnits / 120).toFixed(1));
    setSystemSize(neededSize < 1 ? 1 : neededSize);

    const savings = monthlyUnits * activeDisco.ratePerUnit;
    setMonthlySavings(savings);
  }, [monthlyUnits, activeDisco.ratePerUnit]);

  const estimatedSystemCost = systemSize * COST_PER_KW;
  const paybackYears =
    monthlySavings > 0
      ? Math.max(1, Math.round((estimatedSystemCost / (monthlySavings * 12)) * 10) / 10)
      : 0;

  const t = {
    heroTitle: isUrdu ? 'سمارٹ سولر تنصیب، لاہور کی حقیقی بچت۔' : 'Smart Solar Installation, Real Lahore Savings.',
    heroSubtitle: isUrdu
      ? 'سائٹ وزٹ سے نیٹ میٹرنگ تک — پینلز، انورٹرز، بیٹریز سمیت تنصیب اور سامان ایک ہی جگہ۔ پورے لاہور میں سروس۔'
      : 'From site visit to net metering, Bhatti Solar System handles installation and equipment — panels, inverters, batteries — under one roof. Serving all of Lahore.',
    localizationLabel: isUrdu ? 'مقام:' : 'Service Area:',
    unitsLabel: isUrdu ? 'ماہانہ یونٹس:' : 'Monthly Units Consumed:',
  };

  return (
    <div className="space-y-0 bg-canvas font-sans text-slate">
      <section className="relative flex h-screen min-h-[700px] flex-col items-center justify-center overflow-hidden bg-ink text-center">
        <Image
          src={solarHeroImg}
          alt="Solar panels with bright blue sky"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, rgba(0,30,43,0.55) 0%, rgba(0,30,43,0.42) 45%, rgba(0,30,43,0.58) 100%)',
          }}
        />
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 70% 55% at 50% 42%, rgba(0,30,43,0.35) 0%, transparent 70%)',
          }}
        />

        <div className="relative z-10 mx-auto mt-20 w-full max-w-4xl px-6 md:px-12">
          <div className="flex flex-col items-center space-y-6">
            <h1 className="text-[2.25rem] leading-[1.10] font-medium tracking-[-0.03em] text-balance text-white sm:text-5xl lg:text-[4.5rem]">
              {t.heroTitle}
            </h1>

            <p className="max-w-2xl text-lg leading-[1.50] font-normal text-pretty text-white/90 sm:text-xl">
              {t.heroSubtitle}
            </p>

            <div className="flex flex-col items-center gap-3 pt-6 sm:flex-row sm:gap-4">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-brand-green px-[22px] py-2.5 text-sm font-semibold text-ink shadow-[0_4px_12px_rgba(0,174,239,0.28)] transition-colors duration-150 hover:bg-brand-green-hover"
              >
                Get a Free Quote
                <ArrowRight size={16} />
              </a>

              <a
                href={PHONE_TEL}
                className="inline-flex items-center gap-2 rounded-full border border-white/35 bg-transparent px-[22px] py-2.5 text-sm font-semibold text-white transition-colors duration-150 hover:bg-white/10"
              >
                <Phone size={16} />
                Call Us
              </a>
            </div>

            <p className="pt-8 text-sm font-medium tracking-wide text-white/90 sm:text-base">
              Free Site Survey · Material + Installation Included
            </p>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2">
          <span className="text-[10px] font-bold tracking-[0.3em] text-white/70 uppercase">Scroll</span>
          <div className="h-10 w-[1px] bg-gradient-to-b from-white/70 to-transparent" />
        </div>
      </section>

      <section id="calculator-section" className="border-y border-hairline bg-white py-16 text-ink lg:py-20">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <div className="mb-12 space-y-2 text-center">
            <div className="text-[11px] font-semibold tracking-[1px] text-brand-green-dark uppercase">Savings calculator</div>
            <h2 className="text-2xl font-medium tracking-[-0.02em] text-ink md:text-3xl">
              How much can you save?
            </h2>
            <p className="mx-auto max-w-md text-sm leading-relaxed text-slate">
              Tell us about your home — we&apos;ll show your estimated solar savings instantly.
            </p>
          </div>

          <div className="grid grid-cols-1 items-stretch gap-6 lg:grid-cols-2 lg:gap-10">
            <div id="calculator" className="flex flex-col justify-between gap-7 rounded-lg border border-hairline bg-canvas p-8">
              <div className="flex items-center justify-between">
                <h3 className="flex items-center gap-2 text-base font-bold text-ink">
                  <Compass className="text-brand-green-dark" size={18} />
                  Your Details
                </h3>
                <div className="flex items-center gap-1 rounded-full bg-surface-soft p-1 text-xs font-semibold">
                  <button type="button" onClick={() => setIsUrdu(false)} className={`rounded-full px-3 py-1 transition-all ${!isUrdu ? 'bg-ink text-white shadow-sm' : 'text-slate'}`}>EN</button>
                  <button type="button" onClick={() => setIsUrdu(true)} className={`rounded-full px-3 py-1 transition-all ${isUrdu ? 'bg-ink text-white shadow-sm' : 'text-slate'}`}>اردو</button>
                </div>
              </div>

              <div className="space-y-3">
                <label className="block text-xs font-bold tracking-wider text-steel uppercase">{t.localizationLabel}</label>
                <div className="flex flex-wrap gap-2">
                  <span className="rounded-full border border-ink bg-ink px-4 py-2 text-xs font-semibold text-white shadow-sm">
                    Lahore
                  </span>
                </div>
                <p className="flex items-center gap-1.5 text-[11px] text-steel">
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-brand-green-dark"></span>
                  {activeDisco.fullName} · Serving all of Lahore
                </p>
              </div>

              <div className="space-y-3">
                <div className="flex items-baseline justify-between">
                  <label className="text-xs font-bold tracking-wider text-steel uppercase">{t.unitsLabel}</label>
                  <span className="text-xl font-bold text-ink">{monthlyUnits} <span className="text-xs font-medium text-slate">units/mo</span></span>
                </div>
                <input
                  type="range"
                  min="200"
                  max="3000"
                  step="50"
                  value={monthlyUnits}
                  onChange={(e) => setMonthlyUnits(Number(e.target.value))}
                  className="h-2 w-full cursor-pointer appearance-none rounded-lg accent-brand-green-dark"
                />
                <div className="flex justify-between text-[10px] font-medium text-steel">
                  <span>200</span>
                  <span>1,500</span>
                  <span>3,000 units</span>
                </div>
              </div>

              <div className="space-y-2">
                <label className="block text-xs font-bold tracking-wider text-steel uppercase">Usage Profile</label>
                <div className="flex gap-2">
                  {[
                    { label: 'Small Home', units: 300 },
                    { label: 'Family Home', units: 700 },
                    { label: 'Large Villa', units: 1500 },
                    { label: 'Commercial', units: 2500 },
                  ].map((preset) => (
                    <button
                      key={preset.label}
                      type="button"
                      onClick={() => setMonthlyUnits(preset.units)}
                      className={`flex-1 rounded-xl border px-2 py-2 text-center text-[10px] font-semibold transition-all ${monthlyUnits === preset.units
                        ? 'border-brand-green bg-brand-green-soft text-brand-green-dark'
                        : 'border-hairline bg-surface-soft text-slate hover:border-ink/20 hover:text-ink'
                        }`}
                    >
                      {preset.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <div className="overflow-hidden rounded-lg border border-hairline bg-canvas shadow-[0_4px_12px_rgba(0,30,43,0.08)]">
                <div className="bg-brand-teal-deep px-7 py-8 text-white">
                  <p className="mb-1 text-[11px] font-semibold tracking-[1px] text-on-dark-muted uppercase">Estimated Annual Savings</p>
                  <p className="text-5xl font-medium tracking-tight">
                    Rs. {(monthlySavings * 12).toLocaleString()}
                  </p>
                  <p className="mt-2 text-xs text-on-dark-muted">Based on LESCO tariff (~Rs.{activeDisco.ratePerUnit}/unit) · {monthlyUnits} units/month</p>
                </div>

                <div className="grid grid-cols-2 gap-x-8 gap-y-5 bg-surface-soft px-7 py-6">
                  <div>
                    <p className="text-[10px] font-bold tracking-wider text-steel uppercase">Monthly Savings</p>
                    <p className="mt-1 text-xl font-bold text-ink">Rs. {monthlySavings.toLocaleString()}</p>
                  </div>
                  <div>
                    <p className="text-[10px] font-bold tracking-wider text-steel uppercase">System Size</p>
                    <p className="mt-1 text-xl font-bold text-ink">{systemSize} <span className="text-xs font-medium text-slate">kW</span></p>
                  </div>
                  <div>
                    <p className="text-[10px] font-bold tracking-wider text-steel uppercase">CO₂ Reduced</p>
                    <p className="mt-1 text-xl font-bold text-ink">{(systemSize * 0.82).toFixed(1)} <span className="text-xs font-medium text-slate">T/yr</span></p>
                  </div>
                  <div>
                    <p className="text-[10px] font-bold tracking-wider text-steel uppercase">Approx. Payback</p>
                    <p className="mt-1 text-xl font-bold text-ink">~{paybackYears} <span className="text-xs font-medium text-slate">yrs</span></p>
                  </div>
                </div>

                <div className="flex flex-col gap-3 border-t border-hairline px-7 py-5">
                  <p className="text-[11px] leading-relaxed text-steel">These estimates are indicative. We&apos;ll provide a precise calculation after a free site consultation.</p>
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-full bg-brand-green px-[22px] py-2.5 text-center text-sm font-semibold text-ink transition-colors duration-150 hover:bg-brand-green-hover"
                  >
                    Get a Free Quote
                    <ChevronRight size={16} />
                  </a>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3">
                <div className="rounded-xl border border-hairline bg-canvas p-4 text-center shadow-[0_1px_4px_rgba(0,30,43,0.04)]">
                  <p className="text-xs font-bold tracking-wide text-steel uppercase">Net-Metering</p>
                  <p className="mt-1 text-base font-black text-brand-green-dark">LESCO</p>
                </div>
                <div className="rounded-xl border border-hairline bg-canvas p-4 text-center shadow-[0_1px_4px_rgba(0,30,43,0.04)]">
                  <p className="text-xs font-bold tracking-wide text-steel uppercase">Coverage</p>
                  <p className="mt-1 text-base font-black text-ink">Lahore</p>
                </div>
                <div className="rounded-xl border border-hairline bg-canvas p-4 text-center shadow-[0_1px_4px_rgba(0,30,43,0.04)]">
                  <p className="text-xs font-bold tracking-wide text-steel uppercase">Rate</p>
                  <p className="mt-1 text-base font-black text-ink">Rs.{activeDisco.ratePerUnit}<span className="text-[9px] font-medium text-slate">/u</span></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-surface py-20 lg:py-24">
        <div className="mx-auto max-w-7xl space-y-12 px-6 text-center md:px-12">
          <div className="mx-auto max-w-3xl space-y-3">
            <div className="text-[11px] font-semibold tracking-[1px] text-brand-green-dark uppercase">Why Bhatti Solar</div>
            <h2 className="text-3xl font-medium tracking-[-0.02em] text-balance text-ink md:text-4xl">
              Why we stand out
            </h2>
            <p className="mx-auto max-w-xl pt-1 text-base leading-relaxed text-slate">
              We design and construct premium solar structures matching strict structural safety standards in Pakistan.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="space-y-4 rounded-lg bg-surface p-8 text-left">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-brand-green-soft text-brand-green-dark">
                <MapPin size={24} />
              </div>
              <h3 className="text-lg font-semibold text-ink">Local expertise</h3>
              <p className="text-sm leading-relaxed text-slate">
                Based in Lahore, we know LESCO&apos;s net metering process inside out.
              </p>
            </div>

            <div className="space-y-4 rounded-lg bg-surface p-8 text-left">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-brand-green-soft text-brand-green-dark">
                <Cpu size={24} />
              </div>
              <h3 className="text-lg font-semibold text-ink">Smart technology</h3>
              <p className="text-sm leading-relaxed text-slate">
                Quality panels and inverters, supplied and installed by our own team.
              </p>
            </div>

            <div className="space-y-4 rounded-lg bg-surface p-8 text-left">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-brand-green-soft text-brand-green-dark">
                <Headphones size={24} />
              </div>
              <h3 className="text-lg font-semibold text-ink">24/7 support</h3>
              <p className="text-sm leading-relaxed text-slate">
                Our support team is always active. Enjoy physical check-ups, system performance tuning, and instant online chat assistance.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-hairline bg-canvas py-20 lg:py-24">
        <div className="mx-auto max-w-7xl space-y-12 px-6 text-center md:px-12">
          <div className="mx-auto max-w-3xl space-y-3">
            <div className="text-[11px] font-semibold tracking-[1px] text-brand-green-dark uppercase">Tailored inclusions</div>
            <h2 className="text-3xl font-medium tracking-[-0.02em] text-balance text-ink md:text-4xl">
              Solar configuration tiers
            </h2>
            <p className="mx-auto max-w-xl pt-1 text-base leading-relaxed text-slate">
              Select a category configured explicitly to maximize output based on space and energy consumption.
            </p>
          </div>

          <div className="grid grid-cols-1 items-stretch gap-8 pt-6 md:grid-cols-3">
            <div className="relative flex h-full flex-col justify-between rounded-lg border border-hairline bg-canvas p-8 text-left">
              <div className="space-y-6">
                <div className="space-y-2">
                  <span className="text-[11px] font-semibold tracking-[1px] text-steel uppercase">Tier 01</span>
                  <h3 className="text-xl font-medium text-ink">Free feasibility audit</h3>
                </div>
                <div className="flex items-baseline gap-1 border-b border-hairline pb-4 text-ink">
                  <span className="text-3xl font-medium">Rs. 0</span>
                  <span className="text-xs font-medium text-slate">/ site survey</span>
                </div>
                <p className="text-sm leading-relaxed text-slate">
                  For residential and small commercial owners looking to understand roof space capacity, shade profiles, and LESCO grid compliance.
                </p>
                <ul className="space-y-2.5 text-sm text-slate">
                  <li className="flex items-center gap-2">
                    <CheckCircle size={14} className="shrink-0 text-brand-green-dark" /> Custom sizing estimation
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle size={14} className="shrink-0 text-brand-green-dark" /> Shade loss percentage log
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle size={14} className="shrink-0 text-brand-green-dark" /> Regional tariff ROI graph
                  </li>
                </ul>
              </div>
              <div className="pt-8">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full rounded-full border border-hairline-strong bg-transparent px-[22px] py-2.5 text-center text-sm font-semibold text-ink transition-colors duration-150 hover:bg-surface-soft"
                >
                  Request Free Survey
                </a>
              </div>
            </div>

            <div className="relative flex h-full flex-col justify-between rounded-lg border-2 border-brand-green bg-surface-feature p-8 text-left">
              <span className="absolute -top-3.5 right-6 rounded-full bg-brand-teal-deep px-2.5 py-1 text-[11px] font-semibold tracking-[0.5px] text-brand-yellow">
                Most Popular
              </span>
              <div className="space-y-6">
                <div className="space-y-2">
                  <span className="text-[11px] font-semibold tracking-[1px] text-brand-green-dark uppercase">Tier 02</span>
                  <h3 className="text-xl font-medium text-ink">Net metering installation</h3>
                </div>
                <div className="flex items-baseline gap-1 border-b border-brand-green-soft pb-4 text-ink">
                  <span className="text-3xl font-medium text-brand-green-dark">Export Energy</span>
                  <span className="text-xs font-medium text-slate">/ on-grid setup</span>
                </div>
                <p className="text-sm leading-relaxed text-slate">
                  For homes and businesses wanting to offset their electricity bill through LESCO net metering. Includes full installation and paperwork handling.
                </p>
                <ul className="space-y-2.5 text-sm text-slate">
                  <li className="flex items-center gap-2">
                    <CheckCircle size={14} className="shrink-0 text-brand-green-dark" /> Full installation included
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle size={14} className="shrink-0 text-brand-green-dark" /> LESCO paperwork handling
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle size={14} className="shrink-0 text-brand-green-dark" /> Site survey & system sizing
                  </li>
                </ul>
              </div>
              <div className="pt-8">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full rounded-full bg-brand-green px-[22px] py-2.5 text-center text-sm font-semibold text-ink transition-colors duration-150 hover:bg-brand-green-hover"
                >
                  Get a Quote
                </a>
              </div>
            </div>

            <div className="relative flex h-full flex-col justify-between rounded-lg border border-hairline bg-canvas p-8 text-left">
              <div className="space-y-6">
                <div className="space-y-2">
                  <span className="text-[11px] font-semibold tracking-[1px] text-steel uppercase">Tier 03</span>
                  <h3 className="text-xl font-medium text-ink">Hybrid battery backup</h3>
                </div>
                <div className="flex items-baseline gap-1 border-b border-hairline pb-4 text-ink">
                  <span className="text-3xl font-medium">Battery Backup</span>
                  <span className="text-xs font-medium text-slate">/ hybrid setup</span>
                </div>
                <p className="text-sm leading-relaxed text-slate">
                  For homes and businesses that need power during load shedding. Battery-backed systems built for Lahore&apos;s grid.
                </p>
                <ul className="space-y-2.5 text-sm text-slate">
                  <li className="flex items-center gap-2">
                    <CheckCircle size={14} className="shrink-0 text-brand-green-dark" /> Load-shedding backup
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle size={14} className="shrink-0 text-brand-green-dark" /> Sized for major appliances
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle size={14} className="shrink-0 text-brand-green-dark" /> 24/7 support available
                  </li>
                </ul>
              </div>
              <div className="pt-8">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full rounded-full border border-hairline-strong bg-transparent px-[22px] py-2.5 text-center text-sm font-semibold text-ink transition-colors duration-150 hover:bg-surface-soft"
                >
                  Get a Quote
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-hairline bg-surface py-20 lg:py-24">
        <div className="mx-auto max-w-4xl space-y-12 px-6 text-center">
          <div className="space-y-3">
            <div className="text-[11px] font-semibold tracking-[1px] text-brand-green-dark uppercase">Answers & support</div>
            <h2 className="text-3xl font-medium tracking-[-0.02em] text-balance text-ink">
              Frequently asked questions
            </h2>
          </div>

          <div className="divide-y divide-hairline border-t border-b border-hairline space-y-0 text-left">
            <div className="bg-transparent px-1 py-6">
              <h3 className="mb-2 text-lg font-semibold text-ink">How long does net metering approval take?</h3>
              <p className="text-sm leading-relaxed text-slate">
                We handle the entire LESCO net metering process for you — timelines vary case to case, but we manage it start to finish.
              </p>
            </div>
            <div className="bg-transparent px-1 py-6">
              <h3 className="mb-2 text-lg font-semibold text-ink">What is the warranty on panels?</h3>
              <p className="text-sm leading-relaxed text-slate">
                Warranty terms depend on the panel and inverter brands selected for your system. We&apos;ll share exact manufacturer and workmanship coverage during your free site survey.
              </p>
            </div>
            <div className="bg-transparent px-1 py-6">
              <h3 className="mb-2 text-lg font-semibold text-ink">Can hybrid systems run ACs?</h3>
              <p className="text-sm leading-relaxed text-slate">
                Yes, our hybrid systems are sized to support major appliances including air conditioners — confirmed during your site survey.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="border-t border-hairline bg-canvas py-20 lg:py-24">
        <div className="mx-auto max-w-7xl space-y-12 px-6 md:px-12">
          <div className="space-y-3 text-center">
            <div className="text-[11px] font-semibold tracking-[1px] text-brand-green-dark uppercase">Inquiries & locations</div>
            <h2 className="text-3xl font-medium tracking-[-0.02em] text-balance text-ink">
              Connect with us
            </h2>
          </div>

          <div className="grid grid-cols-1 items-stretch gap-8 md:grid-cols-2">
            <div className="flex h-full flex-col justify-center space-y-8 rounded-lg border border-hairline bg-surface p-10">
              <div className="space-y-6 text-sm">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-brand-green-soft text-brand-green-dark">
                    <MapPin size={22} />
                  </div>
                  <div>
                    <h4 className="text-base font-semibold text-ink">Headquarters</h4>
                    <p className="mt-1 text-base text-slate">Lahore, Pakistan</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-brand-green-soft text-brand-green-dark">
                    <Phone size={22} />
                  </div>
                  <div>
                    <h4 className="text-base font-semibold text-ink">Phone / WhatsApp</h4>
                    <p className="mt-1 text-base text-slate">
                      <a href={PHONE_TEL} className="transition-colors hover:text-brand-green-dark">{PHONE_DISPLAY}</a>
                    </p>
                    <a
                      href={WHATSAPP_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 inline-block text-sm font-medium text-brand-green-dark hover:underline"
                    >
                      Chat on WhatsApp →
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative flex h-full min-h-[320px] flex-col items-center justify-center overflow-hidden rounded-lg border border-hairline bg-surface p-8">
              <svg className="h-72 w-72 text-brand-green-soft/50" viewBox="0 0 700 700" fill="currentColor" aria-hidden="true">
                <path d="M416.4,473.4 L412.0,478.4 L408.7,488.3 L403.8,493.6 L401.1,498.0 L388.8,509.4 L385.7,516.4 L383.8,528.8 L385.6,532.4 L392.7,535.3 L399.9,540.3 L410.9,539.7 L415.6,542.7 L415.8,550.8 L414.6,560.5 L412.1,564.6 L411.5,570.7 L413.9,575.7 L418.5,580.5 L420.9,585.0 L425.3,586.2 L437.8,584.6 L439.0,588.1 L438.7,598.4 L442.3,605.7 L448.7,613.1 L450.4,620.1 L458.5,636.2 L454.5,638.5 L453.5,641.3 L454.7,647.4 L459.6,650.0 L455.6,652.9 L452.0,652.6 L448.4,655.5 L449.2,657.3 L444.5,659.4 L438.2,659.0 L435.3,656.6 L433.4,649.7 L428.6,650.9 L420.5,654.6 L414.3,656.0 L411.7,661.2 L408.0,663.1 L398.5,663.3 L393.9,662.0 L388.8,657.5 L375.7,657.2 L369.5,658.6 L364.8,657.2 L360.8,658.6 L357.5,655.4 L355.5,659.3 L353.2,654.9 L349.8,656.9 L349.7,673.4 L336.0,673.3 L323.8,679.7 L323.1,687.0 L318.7,685.6 L320.6,680.9 L316.4,674.6 L318.3,680.2 L316.4,683.3 L309.7,679.1 L309.0,675.9 L307.9,681.1 L298.5,681.4 L294.6,676.5 L292.0,677.2 L292.7,672.6 L290.2,671.9 L285.7,667.6 L283.2,661.7 L282.7,654.4 L286.2,653.7 L282.0,652.4 L276.9,637.4 L281.4,633.5 L277.8,632.6 L276.2,630.2 L273.5,631.7 L267.7,628.0 L264.2,627.6 L254.8,628.5 L256.0,625.4 L263.4,619.5 L268.3,617.9 L271.2,611.9 L276.4,606.1 L278.0,599.0 L280.4,594.8 L287.6,586.1 L290.7,576.5 L291.3,567.0 L290.8,563.8 L279.3,541.9 L278.2,536.0 L278.1,501.4 L280.2,492.3 L284.3,484.7 L287.5,480.7 L290.3,474.6 L292.1,473.6 L303.1,471.6 L314.0,466.7 L317.4,462.1 L330.3,452.2 L335.0,449.9 L337.3,446.2 L340.1,444.5 L344.8,443.9 L352.5,444.4 L379.9,443.3 L384.7,441.2 L389.1,441.8 L390.0,443.4 L395.5,444.3 L398.6,447.9 L399.2,451.3 L403.2,462.3 L406.7,467.8 Z" stroke="#ffffff" strokeWidth="1" />
              </svg>
              <div className="absolute top-[35%] right-[32%] flex h-3 w-3">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-green opacity-75"></span>
                <span className="relative inline-flex h-3 w-3 rounded-full bg-brand-green-dark"></span>
              </div>
              <div className="absolute bottom-6 text-center">
                <p className="text-[11px] font-semibold tracking-[1px] text-steel uppercase">Headquarters</p>
                <p className="mt-1 text-sm font-medium text-ink">Lahore, Pakistan</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
