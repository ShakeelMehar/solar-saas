import { useState, useEffect } from 'react';
import { DISCO_DATA } from '../utils/discoData';
import solarHeroImg from '../assets/solar-hero.jpeg';
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

const WHATSAPP_URL =
  'https://wa.me/923044854300?text=' +
  encodeURIComponent(
    'As-salamu alaykum, I am visiting the Bhatti Solar System website and would like to request a free solar quote for my home/business in Lahore.'
  );
const PHONE_TEL = 'tel:+923044854300';
const PHONE_DISPLAY = '+92 304 4854300';
/** Installed cost estimate (PKR/kW) for realistic Lahore payback ~2–4 years */
const COST_PER_KW = 200000;

export const Home = () => {
  const [monthlyUnits, setMonthlyUnits] = useState<number>(500);
  const [isUrdu, setIsUrdu] = useState<boolean>(false);
  const [systemSize, setSystemSize] = useState<number>(3.5);
  const [monthlySavings, setMonthlySavings] = useState<number>(18200);

  const activeDisco = DISCO_DATA.find((d) => d.code === 'lesco') || DISCO_DATA[0];

  useEffect(() => {
    // 1 kW usually generates roughly 120 units per month in Pakistan
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
    savingsTitle: isUrdu ? 'بچت دریافت کریں' : 'DISCOVER SAVINGS',
    calculatorHeader: isUrdu ? 'سولر کیلکولیٹر' : 'Solar Configurator',
    localizationLabel: isUrdu ? 'مقام:' : 'Service Area:',
    unitsLabel: isUrdu ? 'ماہانہ یونٹس:' : 'Monthly Units Consumed:',
  };

  return (
    <div className="space-y-0 font-sans text-slate bg-canvas">
      {/* 1. HERO SECTION */}
      <section className="relative h-screen min-h-[700px] flex flex-col justify-center items-center text-center overflow-hidden bg-ink">
        <img
          src={solarHeroImg}
          alt="Solar panels with bright blue sky"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        {/* Darken bright sky so white copy stays readable */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'linear-gradient(180deg, rgba(0,30,43,0.55) 0%, rgba(0,30,43,0.42) 45%, rgba(0,30,43,0.58) 100%)',
          }}
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse 70% 55% at 50% 42%, rgba(0,30,43,0.35) 0%, transparent 70%)',
          }}
        />

        <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-12 w-full mt-20">
          <div className="flex flex-col items-center space-y-6">
            <h1 className="text-[2.25rem] sm:text-5xl lg:text-[4.5rem] font-medium text-white tracking-[-0.03em] leading-[1.10] text-balance">
              {t.heroTitle}
            </h1>

            <p className="text-lg sm:text-xl text-white/90 font-normal leading-[1.50] max-w-2xl text-pretty">
              {t.heroSubtitle}
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 pt-6">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-brand-green text-ink font-semibold text-sm py-2.5 px-[22px] rounded-full transition-colors duration-150 hover:bg-brand-green-hover shadow-[0_4px_12px_rgba(0,30,43,0.12)]"
              >
                Get a Free Quote
                <ArrowRight size={16} />
              </a>

              <a
                href={PHONE_TEL}
                className="inline-flex items-center gap-2 bg-transparent border border-white/35 text-white font-semibold text-sm py-2.5 px-[22px] rounded-full transition-colors duration-150 hover:bg-white/10"
              >
                <Phone size={16} />
                Call Us
              </a>
            </div>

            <p className="pt-8 text-sm sm:text-base text-white/90 font-medium tracking-wide">
              Free Site Survey · Material + Installation Included
            </p>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10">
          <span className="text-white/70 text-[10px] font-bold uppercase tracking-[0.3em]">Scroll</span>
          <div className="w-[1px] h-10 bg-gradient-to-b from-white/70 to-transparent" />
        </div>
      </section>

      {/* 2. SOLAR CONFIGURATOR SECTION */}
      <section id="calculator-section" className="py-16 lg:py-20 bg-white border-y border-hairline text-ink">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center space-y-2 mb-12">
            <div className="text-brand-green-dark font-semibold text-[11px] uppercase tracking-[1px]">Savings calculator</div>
            <h2 className="text-2xl md:text-3xl font-medium text-ink tracking-[-0.02em]">
              How much can you save?
            </h2>
            <p className="text-sm text-slate max-w-md mx-auto leading-relaxed">
              Tell us about your home — we'll show your estimated solar savings instantly.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 items-stretch">
            <div id="calculator" className="bg-canvas rounded-lg p-8 border border-hairline flex flex-col justify-between gap-7">
              <div className="flex items-center justify-between">
                <h3 className="text-base font-bold text-ink flex items-center gap-2">
                  <Compass className="text-brand-green-dark" size={18} />
                  Your Details
                </h3>
                <div className="flex items-center gap-1 bg-surface-soft p-1 rounded-full text-xs font-semibold">
                  <button type="button" onClick={() => setIsUrdu(false)} className={`px-3 py-1 rounded-full transition-all ${!isUrdu ? 'bg-ink text-white shadow-sm' : 'text-slate'}`}>EN</button>
                  <button type="button" onClick={() => setIsUrdu(true)} className={`px-3 py-1 rounded-full transition-all ${isUrdu ? 'bg-ink text-white shadow-sm' : 'text-slate'}`}>اردو</button>
                </div>
              </div>

              <div className="space-y-3">
                <label className="text-xs font-bold text-steel uppercase tracking-wider block">{t.localizationLabel}</label>
                <div className="flex flex-wrap gap-2">
                  <span className="px-4 py-2 rounded-full text-xs font-semibold bg-ink text-white border border-ink shadow-sm">
                    Lahore
                  </span>
                </div>
                <p className="text-[11px] text-steel flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-green-dark inline-block"></span>
                  {activeDisco.fullName} · Serving all of Lahore
                </p>
              </div>

              <div className="space-y-3">
                <div className="flex justify-between items-baseline">
                  <label className="text-xs font-bold text-steel uppercase tracking-wider">{t.unitsLabel}</label>
                  <span className="text-xl font-bold text-ink">{monthlyUnits} <span className="text-xs font-medium text-slate">units/mo</span></span>
                </div>
                <input
                  type="range"
                  min="200"
                  max="3000"
                  step="50"
                  value={monthlyUnits}
                  onChange={(e) => setMonthlyUnits(Number(e.target.value))}
                  className="w-full h-2 rounded-lg appearance-none cursor-pointer accent-brand-green-dark"
                />
                <div className="flex justify-between text-[10px] text-steel font-medium">
                  <span>200</span>
                  <span>1,500</span>
                  <span>3,000 units</span>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-steel uppercase tracking-wider block">Usage Profile</label>
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
                      className={`flex-1 py-2 px-2 rounded-xl text-[10px] font-semibold transition-all border text-center ${monthlyUnits === preset.units
                        ? 'bg-brand-green-soft border-brand-green text-brand-green-dark'
                        : 'bg-surface-soft border-hairline text-slate hover:border-ink/20 hover:text-ink'
                        }`}
                    >
                      {preset.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <div className="bg-canvas rounded-lg border border-hairline overflow-hidden shadow-[0_4px_12px_rgba(0,30,43,0.08)]">
                <div className="bg-brand-teal-deep px-7 py-8 text-white">
                  <p className="text-[11px] font-semibold uppercase tracking-[1px] text-on-dark-muted mb-1">Estimated Annual Savings</p>
                  <p className="text-5xl font-medium tracking-tight">
                    Rs. {(monthlySavings * 12).toLocaleString()}
                  </p>
                  <p className="text-on-dark-muted text-xs mt-2">Based on LESCO tariff (~Rs.{activeDisco.ratePerUnit}/unit) · {monthlyUnits} units/month</p>
                </div>

                <div className="bg-surface-soft px-7 py-6 grid grid-cols-2 gap-x-8 gap-y-5">
                  <div>
                    <p className="text-[10px] text-steel font-bold uppercase tracking-wider">Monthly Savings</p>
                    <p className="text-xl font-bold text-ink mt-1">Rs. {monthlySavings.toLocaleString()}</p>
                  </div>
                  <div>
                    <p className="text-[10px] text-steel font-bold uppercase tracking-wider">System Size</p>
                    <p className="text-xl font-bold text-ink mt-1">{systemSize} <span className="text-xs font-medium text-slate">kW</span></p>
                  </div>
                  <div>
                    <p className="text-[10px] text-steel font-bold uppercase tracking-wider">CO₂ Reduced</p>
                    <p className="text-xl font-bold text-ink mt-1">{(systemSize * 0.82).toFixed(1)} <span className="text-xs font-medium text-slate">T/yr</span></p>
                  </div>
                  <div>
                    <p className="text-[10px] text-steel font-bold uppercase tracking-wider">Approx. Payback</p>
                    <p className="text-xl font-bold text-ink mt-1">~{paybackYears} <span className="text-xs font-medium text-slate">yrs</span></p>
                  </div>
                </div>

                <div className="px-7 py-5 border-t border-hairline flex flex-col gap-3">
                  <p className="text-[11px] text-steel leading-relaxed">These estimates are indicative. We'll provide a precise calculation after a free site consultation.</p>
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-brand-green hover:bg-brand-green-hover text-ink py-2.5 px-[22px] rounded-full font-semibold transition-colors duration-150 text-center flex items-center justify-center gap-2 cursor-pointer text-sm"
                  >
                    Get a Free Quote
                    <ChevronRight size={16} />
                  </a>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3">
                <div className="bg-canvas rounded-xl border border-hairline p-4 text-center shadow-[0_1px_4px_rgba(0,30,43,0.04)]">
                  <p className="text-xs text-steel font-bold uppercase tracking-wide">Net-Metering</p>
                  <p className="text-brand-green-dark font-black text-base mt-1">LESCO</p>
                </div>
                <div className="bg-canvas rounded-xl border border-hairline p-4 text-center shadow-[0_1px_4px_rgba(0,30,43,0.04)]">
                  <p className="text-xs text-steel font-bold uppercase tracking-wide">Coverage</p>
                  <p className="text-ink font-black text-base mt-1">Lahore</p>
                </div>
                <div className="bg-canvas rounded-xl border border-hairline p-4 text-center shadow-[0_1px_4px_rgba(0,30,43,0.04)]">
                  <p className="text-xs text-steel font-bold uppercase tracking-wide">Rate</p>
                  <p className="text-ink font-black text-base mt-1">Rs.{activeDisco.ratePerUnit}<span className="text-[9px] font-medium text-slate">/u</span></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. WHY WE STAND OUT */}
      <section className="py-20 lg:py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center space-y-12">
          <div className="space-y-3 max-w-3xl mx-auto">
            <div className="text-brand-green-dark font-semibold text-[11px] uppercase tracking-[1px]">Why Bhatti Solar</div>
            <h2 className="text-3xl md:text-4xl font-medium text-ink tracking-[-0.02em] text-balance">
              Why we stand out
            </h2>
            <p className="text-base text-slate max-w-xl mx-auto pt-1 leading-relaxed">
              We design and construct premium solar structures matching strict structural safety standards in Pakistan.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-surface rounded-lg p-8 text-left space-y-4">
              <div className="w-12 h-12 rounded-lg bg-brand-green-soft text-brand-green-dark flex items-center justify-center">
                <MapPin size={24} />
              </div>
              <h3 className="text-lg font-semibold text-ink">Local expertise</h3>
              <p className="text-sm text-slate leading-relaxed">
                Based in Lahore, we know LESCO's net metering process inside out.
              </p>
            </div>

            <div className="bg-surface rounded-lg p-8 text-left space-y-4">
              <div className="w-12 h-12 rounded-lg bg-brand-green-soft text-brand-green-dark flex items-center justify-center">
                <Cpu size={24} />
              </div>
              <h3 className="text-lg font-semibold text-ink">Smart technology</h3>
              <p className="text-sm text-slate leading-relaxed">
                Quality panels and inverters, supplied and installed by our own team.
              </p>
            </div>

            <div className="bg-surface rounded-lg p-8 text-left space-y-4">
              <div className="w-12 h-12 rounded-lg bg-brand-green-soft text-brand-green-dark flex items-center justify-center">
                <Headphones size={24} />
              </div>
              <h3 className="text-lg font-semibold text-ink">24/7 support</h3>
              <p className="text-sm text-slate leading-relaxed">
                Our support team is always active. Enjoy physical check-ups, system performance tuning, and instant online chat assistance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SOLAR CONFIGURATION TIERS */}
      <section className="py-20 lg:py-24 bg-canvas border-t border-hairline">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center space-y-12">
          <div className="space-y-3 max-w-3xl mx-auto">
            <div className="text-brand-green-dark font-semibold text-[11px] uppercase tracking-[1px]">Tailored inclusions</div>
            <h2 className="text-3xl md:text-4xl font-medium text-ink tracking-[-0.02em] text-balance">
              Solar configuration tiers
            </h2>
            <p className="text-base text-slate max-w-xl mx-auto pt-1 leading-relaxed">
              Select a category configured explicitly to maximize output based on space and energy consumption.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch pt-6">
            <div className="bg-canvas rounded-lg border border-hairline p-8 flex flex-col justify-between h-full text-left relative">
              <div className="space-y-6">
                <div className="space-y-2">
                  <span className="text-[11px] font-semibold tracking-[1px] text-steel uppercase">Tier 01</span>
                  <h3 className="text-xl font-medium text-ink">Free feasibility audit</h3>
                </div>
                <div className="flex items-baseline gap-1 text-ink border-b border-hairline pb-4">
                  <span className="text-3xl font-medium">Rs. 0</span>
                  <span className="text-xs font-medium text-slate">/ site survey</span>
                </div>
                <p className="text-sm text-slate leading-relaxed">
                  For residential and small commercial owners looking to understand roof space capacity, shade profiles, and LESCO grid compliance.
                </p>
                <ul className="space-y-2.5 text-sm text-slate">
                  <li className="flex items-center gap-2">
                    <CheckCircle size={14} className="text-brand-green-dark shrink-0" /> Custom sizing estimation
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle size={14} className="text-brand-green-dark shrink-0" /> Shade loss percentage log
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle size={14} className="text-brand-green-dark shrink-0" /> Regional tariff ROI graph
                  </li>
                </ul>
              </div>
              <div className="pt-8">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full block bg-transparent border border-hairline-strong text-ink py-2.5 px-[22px] rounded-full font-semibold text-center text-sm transition-colors duration-150 hover:bg-surface-soft"
                >
                  Request Free Survey
                </a>
              </div>
            </div>

            <div className="bg-surface-feature rounded-lg border-2 border-brand-green p-8 flex flex-col justify-between h-full text-left relative">
              <span className="absolute -top-3.5 right-6 bg-brand-teal-deep text-brand-green text-[11px] font-semibold px-2.5 py-1 rounded-full tracking-[0.5px]">
                Most Popular
              </span>
              <div className="space-y-6">
                <div className="space-y-2">
                  <span className="text-[11px] font-semibold tracking-[1px] text-brand-green-dark uppercase">Tier 02</span>
                  <h3 className="text-xl font-medium text-ink">Net metering installation</h3>
                </div>
                <div className="flex items-baseline gap-1 text-ink border-b border-brand-green-soft pb-4">
                  <span className="text-3xl font-medium text-brand-green-dark">Export Energy</span>
                  <span className="text-xs font-medium text-slate">/ on-grid setup</span>
                </div>
                <p className="text-sm text-slate leading-relaxed">
                  For homes and businesses wanting to offset their electricity bill through LESCO net metering. Includes full installation and paperwork handling.
                </p>
                <ul className="space-y-2.5 text-sm text-slate">
                  <li className="flex items-center gap-2">
                    <CheckCircle size={14} className="text-brand-green-dark shrink-0" /> Full installation included
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle size={14} className="text-brand-green-dark shrink-0" /> LESCO paperwork handling
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle size={14} className="text-brand-green-dark shrink-0" /> Site survey & system sizing
                  </li>
                </ul>
              </div>
              <div className="pt-8">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full block bg-brand-green hover:bg-brand-green-hover text-ink py-2.5 px-[22px] rounded-full font-semibold text-center text-sm transition-colors duration-150"
                >
                  Get a Quote
                </a>
              </div>
            </div>

            <div className="bg-canvas rounded-lg border border-hairline p-8 flex flex-col justify-between h-full text-left relative">
              <div className="space-y-6">
                <div className="space-y-2">
                  <span className="text-[11px] font-semibold tracking-[1px] text-steel uppercase">Tier 03</span>
                  <h3 className="text-xl font-medium text-ink">Hybrid battery backup</h3>
                </div>
                <div className="flex items-baseline gap-1 text-ink border-b border-hairline pb-4">
                  <span className="text-3xl font-medium">Battery Backup</span>
                  <span className="text-xs font-medium text-slate">/ hybrid setup</span>
                </div>
                <p className="text-sm text-slate leading-relaxed">
                  For homes and businesses that need power during load shedding. Battery-backed systems built for Lahore's grid.
                </p>
                <ul className="space-y-2.5 text-sm text-slate">
                  <li className="flex items-center gap-2">
                    <CheckCircle size={14} className="text-brand-green-dark shrink-0" /> Load-shedding backup
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle size={14} className="text-brand-green-dark shrink-0" /> Sized for major appliances
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle size={14} className="text-brand-green-dark shrink-0" /> 24/7 support available
                  </li>
                </ul>
              </div>
              <div className="pt-8">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full block bg-transparent border border-hairline-strong text-ink py-2.5 px-[22px] rounded-full font-semibold text-center text-sm transition-colors duration-150 hover:bg-surface-soft"
                >
                  Get a Quote
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. FAQ */}
      <section className="py-20 lg:py-24 bg-surface border-t border-hairline">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-12">
          <div className="space-y-3">
            <div className="text-brand-green-dark font-semibold text-[11px] uppercase tracking-[1px]">Answers & support</div>
            <h2 className="text-3xl font-medium text-ink tracking-[-0.02em] text-balance">
              Frequently asked questions
            </h2>
          </div>

          <div className="space-y-0 text-left divide-y divide-hairline border-t border-b border-hairline">
            <div className="bg-transparent py-6 px-1">
              <h3 className="font-semibold text-lg text-ink mb-2">How long does net metering approval take?</h3>
              <p className="text-sm text-slate leading-relaxed">
                We handle the entire LESCO net metering process for you — timelines vary case to case, but we manage it start to finish.
              </p>
            </div>
            <div className="bg-transparent py-6 px-1">
              <h3 className="font-semibold text-lg text-ink mb-2">What is the warranty on panels?</h3>
              <p className="text-sm text-slate leading-relaxed">
                Warranty terms depend on the panel and inverter brands selected for your system. We'll share exact manufacturer and workmanship coverage during your free site survey.
              </p>
            </div>
            <div className="bg-transparent py-6 px-1">
              <h3 className="font-semibold text-lg text-ink mb-2">Can hybrid systems run ACs?</h3>
              <p className="text-sm text-slate leading-relaxed">
                Yes, our hybrid systems are sized to support major appliances including air conditioners — confirmed during your site survey.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. CONNECT WITH US */}
      <section id="contact" className="py-20 lg:py-24 bg-canvas border-t border-hairline">
        <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-12">
          <div className="space-y-3 text-center">
            <div className="text-brand-green-dark font-semibold text-[11px] uppercase tracking-[1px]">Inquiries & locations</div>
            <h2 className="text-3xl font-medium text-ink tracking-[-0.02em] text-balance">
              Connect with us
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            <div className="space-y-8 bg-surface p-10 rounded-lg border border-hairline h-full flex flex-col justify-center">
              <div className="space-y-6 text-sm">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-brand-green-soft flex items-center justify-center text-brand-green-dark shrink-0">
                    <MapPin size={22} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-ink text-base">Headquarters</h4>
                    <p className="text-slate mt-1 text-base">Lahore, Pakistan</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-brand-green-soft flex items-center justify-center text-brand-green-dark shrink-0">
                    <Phone size={22} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-ink text-base">Phone / WhatsApp</h4>
                    <p className="text-slate mt-1 text-base">
                      <a href={PHONE_TEL} className="hover:text-brand-green-dark transition-colors">{PHONE_DISPLAY}</a>
                    </p>
                    <a
                      href={WHATSAPP_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mt-3 text-sm font-medium text-brand-green-dark hover:underline"
                    >
                      Chat on WhatsApp →
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-8 bg-surface rounded-lg border border-hairline relative overflow-hidden flex flex-col items-center justify-center h-full min-h-[320px]">
              <svg className="w-72 h-72 text-brand-green-soft/50" viewBox="0 0 700 700" fill="currentColor" aria-hidden="true">
                <path d="M416.4,473.4 L412.0,478.4 L408.7,488.3 L403.8,493.6 L401.1,498.0 L388.8,509.4 L385.7,516.4 L383.8,528.8 L385.6,532.4 L392.7,535.3 L399.9,540.3 L410.9,539.7 L415.6,542.7 L415.8,550.8 L414.6,560.5 L412.1,564.6 L411.5,570.7 L413.9,575.7 L418.5,580.5 L420.9,585.0 L425.3,586.2 L437.8,584.6 L439.0,588.1 L438.7,598.4 L442.3,605.7 L448.7,613.1 L450.4,620.1 L458.5,636.2 L454.5,638.5 L453.5,641.3 L454.7,647.4 L459.6,650.0 L455.6,652.9 L452.0,652.6 L448.4,655.5 L449.2,657.3 L444.5,659.4 L438.2,659.0 L435.3,656.6 L433.4,649.7 L428.6,650.9 L420.5,654.6 L414.3,656.0 L411.7,661.2 L408.0,663.1 L398.5,663.3 L393.9,662.0 L388.8,657.5 L375.7,657.2 L369.5,658.6 L364.8,657.2 L360.8,658.6 L357.5,655.4 L355.5,659.3 L353.2,654.9 L349.8,656.9 L349.7,673.4 L336.0,673.3 L323.8,679.7 L323.1,687.0 L318.7,685.6 L320.6,680.9 L316.4,674.6 L318.3,680.2 L316.4,683.3 L309.7,679.1 L309.0,675.9 L307.9,681.1 L298.5,681.4 L294.6,676.5 L292.0,677.2 L292.7,672.6 L290.2,671.9 L285.7,667.6 L283.2,661.7 L282.7,654.4 L286.2,653.7 L282.0,652.4 L276.9,637.4 L281.4,633.5 L277.8,632.6 L276.2,630.2 L273.5,631.7 L267.7,628.0 L264.2,627.6 L254.8,628.5 L256.0,625.4 L263.4,619.5 L268.3,617.9 L271.2,611.9 L276.4,606.1 L278.0,599.0 L280.4,594.8 L287.6,586.1 L290.7,576.5 L291.3,567.0 L290.8,563.8 L279.3,541.9 L278.2,536.0 L278.1,501.4 L280.2,492.3 L284.3,484.7 L287.5,480.7 L290.3,474.6 L292.1,473.6 L303.1,471.6 L314.0,466.7 L317.4,462.1 L330.3,452.2 L335.0,449.9 L337.3,446.2 L340.1,444.5 L344.8,443.9 L352.5,444.4 L379.9,443.3 L384.7,441.2 L389.1,441.8 L390.0,443.4 L395.5,444.3 L398.6,447.9 L399.2,451.3 L403.2,462.3 L406.7,467.8 Z" stroke="#ffffff" strokeWidth="1" />
              </svg>
              <div className="absolute top-[35%] right-[32%] flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-green opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-brand-green-dark"></span>
              </div>
              <div className="absolute bottom-6 text-center">
                <p className="text-[11px] text-steel font-semibold tracking-[1px] uppercase">Headquarters</p>
                <p className="text-sm text-ink font-medium mt-1">Lahore, Pakistan</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
