import { useState, useEffect } from 'react';
import { DISCO_DATA } from '../utils/discoData';
import solarHouseImg from '../assets/solarhouse.jpeg';
import { 
  Sun, 
  ChevronRight, 
  Cpu, 
  MapPin, 
  Headphones, 
  ArrowRight, 
  CheckCircle,
  FileText,
  Star,
  Compass,
  Phone,
  Mail
} from 'lucide-react';

export const Home = () => {
  // Configurator States
  const [selectedDiscoCode, setSelectedDiscoCode] = useState<string>('lesco');
  const [monthlyUnits, setMonthlyUnits] = useState<number>(500);
  const [isUrdu, setIsUrdu] = useState<boolean>(false);
  const [buildProgress, setBuildProgress] = useState<number>(20);
  const [systemSize, setSystemSize] = useState<number>(3.5);
  const [monthlySavings, setMonthlySavings] = useState<number>(18200);

  // Form States
  const [formName, setFormName] = useState('');
  const [formEmail, setFormEmail] = useState('');
  const [formMessage, setFormMessage] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Find active DISCO details
  const activeDisco = DISCO_DATA.find(d => d.code === selectedDiscoCode) || DISCO_DATA[0];

  // Update calculator when inputs change
  useEffect(() => {
    // 1 kW usually generates roughly 120 units per month in Pakistan
    const neededSize = Number((monthlyUnits / 120).toFixed(1));
    setSystemSize(neededSize < 1 ? 1 : neededSize);

    // Calculate savings based on regional DISCO rates
    const savings = monthlyUnits * activeDisco.ratePerUnit;
    setMonthlySavings(savings);

    // Recalculate build progress based on interaction
    let progress = 20;
    if (selectedDiscoCode !== 'lesco') progress += 30;
    if (monthlyUnits !== 500) progress += 30;
    if (isUrdu) progress += 20;
    setBuildProgress(progress > 100 ? 100 : progress);
  }, [selectedDiscoCode, monthlyUnits, isUrdu, activeDisco.ratePerUnit]);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formName && formEmail) {
      setFormSubmitted(true);
      setTimeout(() => {
        setFormSubmitted(false);
        setFormName('');
        setFormEmail('');
        setFormMessage('');
      }, 5000);
    }
  };

  // Translations
  const t = {
    heroTitle: isUrdu ? 'جدید سولر۔ صاف توانائی۔' : 'MODERN SOLAR. CLEAN POWER.',
    heroSubtitle: isUrdu 
      ? 'پاکستان میں آپ کے گھر اور کاروبار کے لیے سستے اور قابل اعتماد سولر سلوشنز۔' 
      : 'Affordable Solar Solutions for Your Home & Business in Pakistan.',
    savingsTitle: isUrdu ? 'بچت دریافت کریں' : 'DISCOVER SAVINGS',
    calculatorHeader: isUrdu ? 'سولر کیلکولیٹر' : 'Solar Configurator',
    localizationLabel: isUrdu ? 'مقام:' : 'Localization:',
    discoLabel: isUrdu ? 'ڈسکو نیٹ ورک:' : 'DISCO Integration:',
    unitsLabel: isUrdu ? 'ماہانہ یونٹس:' : 'Monthly Units Consumed:',
    langLabel: isUrdu ? 'زبان:' : 'Language:',
    progressLabel: isUrdu ? 'تعمیراتی پیشرفت:' : 'Build Progress:',
    estimatedSize: isUrdu ? 'تجویز کردہ سسٹم سائز:' : 'Estimated System Size:',
    estSavings: isUrdu ? 'تخمینی ماہانہ بچت:' : 'Estimated Monthly Savings:',
  };

  return (
    <div className="space-y-0 font-sans text-slate bg-canvas -mt-28">
      {/* 1. HERO SECTION — Full Cover Light Image */}
      <section className="relative min-h-[90vh] flex items-end justify-start overflow-hidden">
        {/* Full-cover background image */}
        <img
          src={solarHouseImg}
          alt="Modern solar panels on a home rooftop"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        {/* Light gradient: strong at bottom-left for text legibility, fades to transparent top-right */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/60 to-white/10 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-transparent to-transparent pointer-events-none" />

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full pb-20 pt-40">
          <div className="max-w-2xl space-y-7">

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-green-soft border border-brand-green/30 text-brand-green-dark text-xs font-bold tracking-wider uppercase">
              <Sun className="w-3.5 h-3.5" />
              Verified Net-Metering Solutions
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-medium text-ink tracking-tight leading-tight uppercase font-sans">
              {t.heroTitle}
            </h1>

            <p className="text-lg sm:text-xl text-slate font-normal leading-relaxed max-w-xl">
              {t.heroSubtitle}
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href="#calculator-section"
                className="bg-brand-green hover:bg-brand-green-hover text-brand-teal-deep font-bold py-3.5 px-8 rounded-full transition-all duration-300 flex items-center gap-2 cursor-pointer text-sm shadow-lg"
              >
                {t.savingsTitle}
                <ArrowRight size={16} />
              </a>
              <a
                href="#contact"
                className="bg-ink/10 hover:bg-ink/15 border border-ink/20 text-ink font-semibold py-3.5 px-8 rounded-full transition-all duration-300 flex items-center gap-2 text-sm backdrop-blur-sm"
              >
                GET FREE AUDIT
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* 2. SOLAR CONFIGURATOR SECTION */}
      <section id="calculator-section" className="py-16 lg:py-20 bg-white border-y border-hairline text-ink">
        <div className="max-w-7xl mx-auto px-6 md:px-12">

          {/* Section Header */}
          <div className="text-center space-y-2 mb-12">
            <div className="text-brand-green-dark font-bold text-xs uppercase tracking-widest font-sans">Savings Calculator</div>
            <h2 className="text-2xl md:text-3xl font-medium text-ink tracking-tight font-sans">
              How much can you save?
            </h2>
            <p className="text-sm text-slate max-w-md mx-auto">
              Tell us about your home — we'll show your estimated solar savings instantly.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 items-stretch">

            {/* LEFT: Configurator inputs with pill chips */}
            <div id="calculator" className="bg-canvas rounded-2xl p-7 border border-hairline shadow-[0_2px_16px_rgba(0,30,43,0.06)] flex flex-col justify-between gap-7">

              {/* Language toggle */}
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

              {/* Region: pill chips */}
              <div className="space-y-3">
                <label className="text-xs font-bold text-steel uppercase tracking-wider block">{t.localizationLabel}</label>
                <div className="flex flex-wrap gap-2">
                  {[
                    { value: 'lesco', label: 'Lahore' },
                    { value: 'ke', label: 'Karachi' },
                    { value: 'iesco', label: 'Islamabad' },
                    { value: 'fesco', label: 'Faisalabad' },
                    { value: 'mepco', label: 'Multan' },
                    { value: 'pesco', label: 'Peshawar' },
                  ].map((region) => (
                    <button
                      key={region.value}
                      type="button"
                      onClick={() => setSelectedDiscoCode(region.value)}
                      className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-200 border ${
                        selectedDiscoCode === region.value
                          ? 'bg-ink text-white border-ink shadow-sm'
                          : 'bg-surface-soft text-slate border-hairline hover:border-ink/30 hover:text-ink'
                      }`}
                    >
                      {region.label}
                    </button>
                  ))}
                </div>
                {/* Show the full DISCO name for selected */}
                <p className="text-[11px] text-steel flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-green-dark inline-block"></span>
                  {activeDisco.fullName} · {activeDisco.city}
                </p>
              </div>

              {/* Monthly Units Slider */}
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

              {/* Quick preset buttons */}
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
                      className={`flex-1 py-2 px-2 rounded-xl text-[10px] font-semibold transition-all border text-center ${
                        monthlyUnits === preset.units
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

            {/* RIGHT: Beautiful results card */}
            <div className="flex flex-col gap-4">

              {/* Main savings card */}
              <div className="bg-canvas rounded-2xl border border-hairline shadow-[0_2px_16px_rgba(0,30,43,0.06)] overflow-hidden">

                {/* Top: big savings number */}
                <div className="bg-brand-teal-deep px-7 py-8 text-white">
                  <p className="text-xs font-bold uppercase tracking-widest text-on-dark-muted mb-1">Estimated Annual Savings</p>
                  <p className="text-5xl font-black tracking-tight">
                    Rs. {(monthlySavings * 12).toLocaleString()}
                  </p>
                  <p className="text-on-dark-muted text-xs mt-2">Based on {activeDisco.name} tariff · {monthlyUnits} units/month</p>
                </div>

                {/* Bottom: detail metrics grid */}
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
                    <p className="text-xl font-bold text-ink mt-1">~{Math.round(12 / (monthlySavings / 85000))} <span className="text-xs font-medium text-slate">yrs</span></p>
                  </div>
                </div>

                {/* CTA */}
                <div className="px-7 py-5 border-t border-hairline flex flex-col gap-3">
                  <p className="text-[11px] text-steel leading-relaxed">These estimates are indicative. We'll provide a precise calculation after a free site consultation.</p>
                  <a
                    href="#contact"
                    className="w-full bg-brand-green hover:bg-brand-green-hover text-brand-teal-deep py-3.5 px-4 rounded-full font-bold transition-all text-center flex items-center justify-center gap-2 cursor-pointer text-sm"
                  >
                    Get a Free Quote
                    <ChevronRight size={16} />
                  </a>
                </div>
              </div>

              {/* Mini stats row */}
              <div className="grid grid-cols-3 gap-3">
                <div className="bg-canvas rounded-xl border border-hairline p-4 text-center shadow-[0_1px_4px_rgba(0,30,43,0.04)]">
                  <p className="text-xs text-steel font-bold uppercase tracking-wide">Net-Metering</p>
                  <p className="text-brand-green-dark font-black text-base mt-1">Active</p>
                </div>
                <div className="bg-canvas rounded-xl border border-hairline p-4 text-center shadow-[0_1px_4px_rgba(0,30,43,0.04)]">
                  <p className="text-xs text-steel font-bold uppercase tracking-wide">Efficiency</p>
                  <p className="text-ink font-black text-base mt-1">98.4%</p>
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
            <div className="text-brand-green-dark font-bold text-xs uppercase tracking-widest font-mono">Engineering Competence</div>
            <h2 className="text-3xl md:text-4xl font-medium text-ink tracking-tight uppercase font-sans">
              WHY WE STAND OUT
            </h2>
            <div className="w-16 h-1 bg-brand-green mx-auto rounded-full"></div>
            <p className="text-base text-slate max-w-xl mx-auto pt-2">
              We design and construct premium solar structures matching strict structural safety standards in Pakistan.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Card 1: Local Expertise */}
            <div className="bg-canvas rounded-lg p-8 border border-hairline shadow-[0_1px_2px_rgba(0,30,43,0.04)] text-left space-y-4">
              <div className="w-12 h-12 rounded-lg bg-brand-green-soft text-brand-green-dark flex items-center justify-center">
                <MapPin size={24} />
              </div>
              <h3 className="text-lg font-bold text-ink font-sans uppercase">LOCAL EXPERTISE</h3>
              <p className="text-sm text-slate leading-relaxed">
                Customized systems engineered for local Pakistani grids. We navigate complex net metering regulations with LESCO, KE, IESCO and others seamlessly.
              </p>
            </div>

            {/* Card 2: Smart Technology */}
            <div className="bg-canvas rounded-lg p-8 border border-hairline shadow-[0_1px_2px_rgba(0,30,43,0.04)] text-left space-y-4">
              <div className="w-12 h-12 rounded-lg bg-brand-green-soft text-brand-green-dark flex items-center justify-center">
                <Cpu size={24} />
              </div>
              <h3 className="text-lg font-bold text-ink font-sans uppercase">SMART TECHNOLOGY</h3>
              <p className="text-sm text-slate leading-relaxed">
                Tier-1 N-Type solar panels and top-tier hybrid/on-grid smart inverters with live smartphone monitoring capabilities.
              </p>
            </div>

            {/* Card 3: 24/7 Support */}
            <div className="bg-canvas rounded-lg p-8 border border-hairline shadow-[0_1px_2px_rgba(0,30,43,0.04)] text-left space-y-4">
              <div className="w-12 h-12 rounded-lg bg-brand-green-soft text-brand-green-dark flex items-center justify-center">
                <Headphones size={24} />
              </div>
              <h3 className="text-lg font-bold text-ink font-sans uppercase">24/7 SUPPORT</h3>
              <p className="text-sm text-slate leading-relaxed">
                Our support team is always active. Enjoy physical check-ups, system performance tuning, and instant online chat assistance.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 3. 3-TIER COMPARISON PACKAGES (Redesigned Solutions) */}
      <section className="py-20 lg:py-24 bg-canvas border-t border-hairline">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center space-y-12">
          
          <div className="space-y-3 max-w-3xl mx-auto">
            <div className="text-brand-green-dark font-bold text-xs uppercase tracking-widest font-mono">Tailored Inclusions</div>
            <h2 className="text-3xl md:text-4xl font-medium text-ink tracking-tight uppercase font-sans">
              SOLAR CONFIGURATION TIERS
            </h2>
            <div className="w-16 h-1 bg-brand-green mx-auto rounded-full"></div>
            <p className="text-base text-slate max-w-xl mx-auto pt-2">
              Select a category configured explicitly to maximize output based on space and energy consumption.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch pt-6">
            
            {/* Free Audit Tier */}
            <div className="bg-canvas rounded-lg border border-hairline p-8 flex flex-col justify-between h-full text-left relative">
              <div className="space-y-6">
                <div className="space-y-2">
                  <span className="text-[11px] font-bold tracking-wider text-steel font-mono uppercase">Tier 01</span>
                  <h3 className="text-xl font-bold text-ink">FREE FEASIBILITY AUDIT</h3>
                </div>
                <div className="flex items-baseline gap-1 text-ink border-b border-hairline pb-4">
                  <span className="text-3xl font-extrabold">Rs. 0</span>
                  <span className="text-xs font-semibold text-slate">/ site survey</span>
                </div>
                <p className="text-sm text-slate leading-relaxed">
                  For residential and small commercial owners looking to understand roof space capacity, shade profiles, and local DISCO network grid compliance.
                </p>
                <ul className="space-y-2.5 text-xs text-slate">
                  <li className="flex items-center gap-2">
                    <CheckCircle size={14} className="text-brand-green-dark" /> Custom sizing estimation
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle size={14} className="text-brand-green-dark" /> Shade loss percentage log
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle size={14} className="text-brand-green-dark" /> Regional tariff ROI graph
                  </li>
                </ul>
              </div>
              <div className="pt-8">
                <a 
                  href="#contact" 
                  className="w-full block bg-transparent hover:bg-surface-soft border border-hairline-strong text-ink py-2.5 px-4 rounded-full font-bold text-center text-xs transition-all uppercase"
                >
                  Request Free Survey
                </a>
              </div>
            </div>

            {/* Flex Net-Metering Tier (Featured Mint Background) */}
            <div className="bg-surface-feature rounded-lg border-2 border-brand-green p-8 flex flex-col justify-between h-full text-left relative shadow-[0_12px_24px_-4px_rgba(0,237,100,0.12)]">
              <span className="absolute -top-3.5 right-6 bg-brand-teal-deep text-brand-green text-[10px] font-extrabold px-3 py-1 rounded-full tracking-wider uppercase font-mono">
                Most Popular
              </span>
              <div className="space-y-6">
                <div className="space-y-2">
                  <span className="text-[11px] font-bold tracking-wider text-brand-green-dark font-mono uppercase">Tier 02</span>
                  <h3 className="text-xl font-bold text-ink">FLEX NET-METERING</h3>
                </div>
                <div className="flex items-baseline gap-1 text-ink border-b border-brand-green-soft pb-4">
                  <span className="text-3xl font-extrabold text-brand-green-dark">Export Energy</span>
                  <span className="text-xs font-semibold text-slate">/ on-grid setup</span>
                </div>
                <p className="text-sm text-slate leading-relaxed">
                  For active grid export. Offload up to 95% of your electricity bill. Includes bidirectional meter liaison and smartphone production diagnostics.
                </p>
                <ul className="space-y-2.5 text-xs text-slate">
                  <li className="flex items-center gap-2">
                    <CheckCircle size={14} className="text-brand-green-dark" /> Full NEPRA license filing
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle size={14} className="text-brand-green-dark" /> Live smartphone sync
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle size={14} className="text-brand-green-dark" /> 25-yr panel warranty
                  </li>
                </ul>
              </div>
              <div className="pt-8">
                <a 
                  href="#contact" 
                  className="w-full block bg-brand-green hover:bg-brand-green-hover text-brand-teal-deep py-2.5 px-4 rounded-full font-bold text-center text-xs transition-all uppercase"
                >
                  Configure System
                </a>
              </div>
            </div>

            {/* Dedicated Hybrid Grid (Premium Tier) */}
            <div className="bg-canvas rounded-lg border border-hairline p-8 flex flex-col justify-between h-full text-left relative">
              <div className="space-y-6">
                <div className="space-y-2">
                  <span className="text-[11px] font-bold tracking-wider text-steel font-mono uppercase">Tier 03</span>
                  <h3 className="text-xl font-bold text-ink">DEDICATED HYBRID GRID</h3>
                </div>
                <div className="flex items-baseline gap-1 text-ink border-b border-hairline pb-4">
                  <span className="text-3xl font-extrabold">Battery Backup</span>
                  <span className="text-xs font-semibold text-slate">/ hybrid setup</span>
                </div>
                <p className="text-sm text-slate leading-relaxed">
                  For industrial plants, offices, and luxury residences. Complete backup security using premium N-type cells and structural wind-resistant frames.
                </p>
                <ul className="space-y-2.5 text-xs text-slate">
                  <li className="flex items-center gap-2">
                    <CheckCircle size={14} className="text-brand-green-dark" /> Zero fluctuations backup
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle size={14} className="text-brand-green-dark" /> Heavy wind load structure
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle size={14} className="text-brand-green-dark" /> 24/7 engineering monitoring
                  </li>
                </ul>
              </div>
              <div className="pt-8">
                <a 
                  href="#contact" 
                  className="w-full block bg-transparent hover:bg-surface-soft border border-hairline-strong text-ink py-2.5 px-4 rounded-full font-bold text-center text-xs transition-all uppercase"
                >
                  Deploy Hybrid
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. SUCCESS STORIES (Redesigned as University Course Tiles) */}
      <section className="py-20 lg:py-24 bg-surface border-t border-hairline">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center space-y-12">
          
          <div className="space-y-3 max-w-3xl mx-auto">
            <div className="text-brand-green-dark font-bold text-xs uppercase tracking-widest font-mono">Completed Implementations</div>
            <h2 className="text-3xl md:text-4xl font-medium text-ink tracking-tight uppercase font-sans">
              PORTFOLIO CATALOG
            </h2>
            <div className="w-16 h-1 bg-brand-green mx-auto rounded-full"></div>
            <p className="text-base text-slate max-w-xl mx-auto pt-2">
              Explore our record of high-performance custom solar installs across Pakistan, categorized by grid network.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Project 1 */}
            <div className="bg-canvas rounded-lg border border-hairline shadow-[0_1px_2px_rgba(0,30,43,0.04)] p-6 text-left flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="bg-accent-orange text-white text-[10px] font-bold px-2 py-0.5 rounded-[4px] font-mono tracking-wider uppercase">LESCO</span>
                  <span className="text-[11px] font-semibold text-brand-green-dark uppercase">15 kW Grid</span>
                </div>
                <h4 className="font-bold text-lg text-ink font-sans">DHA Phase 6, Lahore</h4>
                <p className="text-xs text-slate leading-relaxed">
                  Hybrid storage install delivering complete independence during local load shedding with zero battery failure.
                </p>
              </div>
              <div className="pt-3 border-t border-hairline-soft flex items-center justify-between text-xs font-semibold">
                <span className="text-steel font-mono">Savings: Rs. 95k/mo</span>
                <a href="#contact" className="text-brand-green-dark hover:underline flex items-center gap-1">
                  View Case Study <ChevronRight size={12} />
                </a>
              </div>
            </div>

            {/* Project 2 */}
            <div className="bg-canvas rounded-lg border border-hairline shadow-[0_1px_2px_rgba(0,30,43,0.04)] p-6 text-left flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="bg-accent-purple text-white text-[10px] font-bold px-2 py-0.5 rounded-[4px] font-mono tracking-wider uppercase">KE</span>
                  <span className="text-[11px] font-semibold text-brand-green-dark uppercase">150 kW Grid</span>
                </div>
                <h4 className="font-bold text-lg text-ink font-sans">SITE Area, Karachi</h4>
                <p className="text-xs text-slate leading-relaxed">
                  Industrial-scale net-metering project for textile stitching plant, reducing carbon footprint and power overheads.
                </p>
              </div>
              <div className="pt-3 border-t border-hairline-soft flex items-center justify-between text-xs font-semibold">
                <span className="text-steel font-mono">Savings: Rs. 840k/mo</span>
                <a href="#contact" className="text-brand-green-dark hover:underline flex items-center gap-1">
                  View Case Study <ChevronRight size={12} />
                </a>
              </div>
            </div>

            {/* Project 3 */}
            <div className="bg-canvas rounded-lg border border-hairline shadow-[0_1px_2px_rgba(0,30,43,0.04)] p-6 text-left flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="bg-accent-blue text-white text-[10px] font-bold px-2 py-0.5 rounded-[4px] font-mono tracking-wider uppercase">IESCO</span>
                  <span className="text-[11px] font-semibold text-brand-green-dark uppercase">80 kW Grid</span>
                </div>
                <h4 className="font-bold text-lg text-ink font-sans">Sector I-9, Islamabad</h4>
                <p className="text-xs text-slate leading-relaxed">
                  On-grid solarization of corporate warehouse facilities with bi-directional net meters producing energy surplus.
                </p>
              </div>
              <div className="pt-3 border-t border-hairline-soft flex items-center justify-between text-xs font-semibold">
                <span className="text-steel font-mono">Savings: Rs. 420k/mo</span>
                <a href="#contact" className="text-brand-green-dark hover:underline flex items-center gap-1">
                  View Case Study <ChevronRight size={12} />
                </a>
              </div>
            </div>

            {/* Project 4 */}
            <div className="bg-canvas rounded-lg border border-hairline shadow-[0_1px_2px_rgba(0,30,43,0.04)] p-6 text-left flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="bg-brand-green-dark text-white text-[10px] font-bold px-2 py-0.5 rounded-[4px] font-mono tracking-wider uppercase">MEPCO</span>
                  <span className="text-[11px] font-semibold text-brand-green-dark uppercase">10 kW Grid</span>
                </div>
                <h4 className="font-bold text-lg text-ink font-sans">Wapda Town, Multan</h4>
                <p className="text-xs text-slate leading-relaxed">
                  On-grid residential net-metering project bringing immediate electricity bill optimization.
                </p>
              </div>
              <div className="pt-3 border-t border-hairline-soft flex items-center justify-between text-xs font-semibold">
                <span className="text-steel font-mono">Savings: Rs. 62k/mo</span>
                <a href="#contact" className="text-brand-green-dark hover:underline flex items-center gap-1">
                  View Case Study <ChevronRight size={12} />
                </a>
              </div>
            </div>

            {/* Project 5 */}
            <div className="bg-canvas rounded-lg border border-hairline shadow-[0_1px_2px_rgba(0,30,43,0.04)] p-6 text-left flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="bg-accent-blue text-white text-[10px] font-bold px-2 py-0.5 rounded-[4px] font-mono tracking-wider uppercase">IESCO</span>
                  <span className="text-[11px] font-semibold text-brand-green-dark uppercase">45 kW Grid</span>
                </div>
                <h4 className="font-bold text-lg text-ink font-sans">Faisal Margalla, Attock</h4>
                <p className="text-xs text-slate leading-relaxed">
                  Private clinic hybrid backup with high efficiency storage, securing critical medical equipment power.
                </p>
              </div>
              <div className="pt-3 border-t border-hairline-soft flex items-center justify-between text-xs font-semibold">
                <span className="text-steel font-mono">Savings: Rs. 210k/mo</span>
                <a href="#contact" className="text-brand-green-dark hover:underline flex items-center gap-1">
                  View Case Study <ChevronRight size={12} />
                </a>
              </div>
            </div>

            {/* Project 6 */}
            <div className="bg-canvas rounded-lg border border-hairline shadow-[0_1px_2px_rgba(0,30,43,0.04)] p-6 text-left flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="bg-accent-orange text-white text-[10px] font-bold px-2 py-0.5 rounded-[4px] font-mono tracking-wider uppercase">LESCO</span>
                  <span className="text-[11px] font-semibold text-brand-green-dark uppercase">30 kW Grid</span>
                </div>
                <h4 className="font-bold text-lg text-ink font-sans">Okara Farmland, Punjab</h4>
                <p className="text-xs text-slate leading-relaxed">
                  Solar tubewell structure powering large-scale agricultural crop irrigation on automatic cycles.
                </p>
              </div>
              <div className="pt-3 border-t border-hairline-soft flex items-center justify-between text-xs font-semibold">
                <span className="text-steel font-mono">Savings: Rs. 165k/mo</span>
                <a href="#contact" className="text-brand-green-dark hover:underline flex items-center gap-1">
                  View Case Study <ChevronRight size={12} />
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. TESTIMONIALS */}
      <section className="py-20 lg:py-24 bg-canvas border-t border-hairline">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center space-y-12">
          
          <div className="space-y-3 max-w-3xl mx-auto">
            <div className="text-brand-green-dark font-bold text-xs uppercase tracking-widest font-mono">Client Feedback</div>
            <h2 className="text-3xl md:text-4xl font-medium text-ink tracking-tight uppercase font-sans">
              TESTIMONIALS
            </h2>
            <div className="w-16 h-1 bg-brand-green mx-auto rounded-full"></div>
            <p className="text-base text-slate max-w-xl mx-auto pt-2">
              Read how residential, commercial, and agricultural properties achieved energy independence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Testimonial 1 */}
            <div className="bg-canvas rounded-lg p-6 border border-hairline shadow-[0_1px_2px_rgba(0,30,43,0.04)] text-left flex flex-col justify-between space-y-6">
              <div className="space-y-3">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} className="text-accent-orange fill-accent-orange" />
                  ))}
                </div>
                <p className="text-sm italic text-slate leading-relaxed">
                  "Reduced bills significantly! Our LESCO bill dropped by almost 90% after setting up the 15kW residential net-metering grid. Highly recommended team!"
                </p>
              </div>
              <div className="flex items-center gap-3 border-t border-hairline-soft pt-4">
                <div className="w-10 h-10 rounded-full bg-surface-soft flex items-center justify-center font-bold text-ink text-sm">
                  S
                </div>
                <div>
                  <h4 className="text-sm font-bold text-ink">Suhail Ahmad</h4>
                  <p className="text-xs text-steel">Homeowner, DHA Lahore</p>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-canvas rounded-lg p-6 border border-hairline shadow-[0_1px_2px_rgba(0,30,43,0.04)] text-left flex flex-col justify-between space-y-6">
              <div className="space-y-3">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} className="text-accent-orange fill-accent-orange" />
                  ))}
                </div>
                <p className="text-sm italic text-slate leading-relaxed">
                  "Professional services. The engineers drafted structural strength reports and custom mappings for our manufacturing units in SITE Karachi. Extreme competence shown."
                </p>
              </div>
              <div className="flex items-center gap-3 border-t border-hairline-soft pt-4">
                <div className="w-10 h-10 rounded-full bg-surface-soft flex items-center justify-center font-bold text-ink text-sm">
                  N
                </div>
                <div>
                  <h4 className="text-sm font-bold text-ink">Naheed Malik</h4>
                  <p className="text-xs text-steel">Operations Director, SITE Karachi</p>
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-canvas rounded-lg p-6 border border-hairline shadow-[0_1px_2px_rgba(0,30,43,0.04)] text-left flex flex-col justify-between space-y-6">
              <div className="space-y-3">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} className="text-accent-orange fill-accent-orange" />
                  ))}
                </div>
                <p className="text-sm italic text-slate leading-relaxed">
                  "Peace of mind for family. The hybrid batteries backup instantly during power load shedding without causing fluctuations to air conditioners or sensitive electronics."
                </p>
              </div>
              <div className="flex items-center gap-3 border-t border-hairline-soft pt-4">
                <div className="w-10 h-10 rounded-full bg-surface-soft flex items-center justify-center font-bold text-ink text-sm">
                  M
                </div>
                <div>
                  <h4 className="text-sm font-bold text-ink">Mohammad Fayyaz</h4>
                  <p className="text-xs text-steel">Business Owner, Islamabad</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 6. FAQ ACCORDION SECTION */}
      <section className="py-20 lg:py-24 bg-surface border-t border-hairline">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-12">
          <div className="space-y-3">
            <div className="text-brand-green-dark font-bold text-xs uppercase tracking-widest font-mono">Answers & Support</div>
            <h2 className="text-3xl font-medium text-ink tracking-tight uppercase font-sans">
              FREQUENTLY ASKED QUESTIONS
            </h2>
            <div className="w-16 h-1 bg-brand-green mx-auto rounded-full"></div>
          </div>

          <div className="space-y-4 text-left">
            <div className="bg-canvas rounded-lg border border-hairline p-6 shadow-[0_1px_2px_rgba(0,30,43,0.04)]">
              <h3 className="font-semibold text-lg text-ink font-sans mb-2">How long does net metering approval take?</h3>
              <p className="text-sm text-slate leading-relaxed">
                The entire NEPRA license application and bi-directional meter activation process takes around 4 to 6 weeks. Our engineering team manages the complete process from end to end.
              </p>
            </div>
            <div className="bg-canvas rounded-lg border border-hairline p-6 shadow-[0_1px_2px_rgba(0,30,43,0.04)]">
              <h3 className="font-semibold text-lg text-ink font-sans mb-2">What is the physical warranty on Tier-1 panels?</h3>
              <p className="text-sm text-slate leading-relaxed">
                All premium N-Type Bifacial panels we construct come with a standard 12-year manufacturer physical warranty and a 25-year performance yield guarantee.
              </p>
            </div>
            <div className="bg-canvas rounded-lg border border-hairline p-6 shadow-[0_1px_2px_rgba(0,30,43,0.04)]">
              <h3 className="font-semibold text-lg text-ink font-sans mb-2">Can hybrid structures run central air conditioners?</h3>
              <p className="text-sm text-slate leading-relaxed">
                Yes. Our high-performance smart backup systems are configured with surge protection inverters specifically rated to carry motor loads of central air conditioners seamlessly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. CONNECT WITH US */}
      <section id="contact" className="py-20 lg:py-24 bg-canvas border-t border-hairline">
        <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-12">
          
          <div className="space-y-3 text-center">
            <div className="text-brand-green-dark font-bold text-xs uppercase tracking-widest font-mono">Inquiries & Locations</div>
            <h2 className="text-3xl font-medium text-ink tracking-tight uppercase font-sans">
              CONNECT WITH US
            </h2>
            <div className="w-16 h-1 bg-brand-green mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            
            {/* Contact Details */}
            <div className="space-y-8 bg-surface-soft p-10 rounded-2xl border border-hairline shadow-[0_1px_4px_rgba(0,30,43,0.04)] h-full flex flex-col justify-center">
              <div className="space-y-6 text-sm">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-brand-green-dark shrink-0 border border-hairline shadow-sm">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-ink uppercase text-base">HEADQUARTERS</h4>
                    <p className="text-slate mt-1 text-base">Lahore Address Section, Lahore, Pakistan</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-brand-green-dark shrink-0 border border-hairline shadow-sm">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-ink uppercase text-base">PHONE</h4>
                    <p className="text-slate mt-1 text-base">
                      <a href="tel:+92123456789" className="hover:text-brand-green-dark">+92 123 456 789</a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-brand-green-dark shrink-0 border border-hairline shadow-sm">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-ink uppercase text-base">EMAIL</h4>
                    <p className="text-slate mt-1 text-base">
                      <a href="mailto:email@example.com" className="hover:text-brand-green-dark">email@example.com</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Stylized Pakistan Vector Map Graphic */}
            <div className="p-8 bg-surface rounded-2xl border border-hairline relative overflow-hidden flex flex-col items-center justify-center h-full min-h-[320px] shadow-[inset_0_1px_4px_rgba(0,30,43,0.03)]">
              <svg className="w-72 h-72 text-brand-green-soft/40 drop-shadow-sm hover:text-brand-green-soft/60 transition-colors" viewBox="0 0 700 700" fill="currentColor">
                <path d="M416.4,473.4 L412.0,478.4 L408.7,488.3 L403.8,493.6 L401.1,498.0 L388.8,509.4 L385.7,516.4 L383.8,528.8 L385.6,532.4 L392.7,535.3 L399.9,540.3 L410.9,539.7 L415.6,542.7 L415.8,550.8 L414.6,560.5 L412.1,564.6 L411.5,570.7 L413.9,575.7 L418.5,580.5 L420.9,585.0 L425.3,586.2 L437.8,584.6 L439.0,588.1 L438.7,598.4 L442.3,605.7 L448.7,613.1 L450.4,620.1 L458.5,636.2 L454.5,638.5 L453.5,641.3 L454.7,647.4 L459.6,650.0 L455.6,652.9 L452.0,652.6 L448.4,655.5 L449.2,657.3 L444.5,659.4 L438.2,659.0 L435.3,656.6 L433.4,649.7 L428.6,650.9 L420.5,654.6 L414.3,656.0 L411.7,661.2 L408.0,663.1 L398.5,663.3 L393.9,662.0 L388.8,657.5 L375.7,657.2 L369.5,658.6 L364.8,657.2 L360.8,658.6 L357.5,655.4 L355.5,659.3 L353.2,654.9 L349.8,656.9 L349.7,673.4 L336.0,673.3 L323.8,679.7 L323.1,687.0 L318.7,685.6 L320.6,680.9 L316.4,674.6 L318.3,680.2 L316.4,683.3 L309.7,679.1 L309.0,675.9 L307.9,681.1 L298.5,681.4 L294.6,676.5 L292.0,677.2 L292.7,672.6 L290.2,671.9 L285.7,667.6 L283.2,661.7 L282.7,654.4 L286.2,653.7 L282.0,652.4 L276.9,637.4 L281.4,633.5 L277.8,632.6 L276.2,630.2 L273.5,631.7 L267.7,628.0 L264.2,627.6 L254.8,628.5 L256.0,625.4 L263.4,619.5 L268.3,617.9 L271.2,611.9 L276.4,606.1 L278.0,599.0 L280.4,594.8 L287.6,586.1 L290.7,576.5 L291.3,567.0 L290.8,563.8 L279.3,541.9 L278.2,536.0 L278.1,501.4 L280.2,492.3 L284.3,484.7 L287.5,480.7 L290.3,474.6 L292.1,473.6 L303.1,471.6 L314.0,466.7 L317.4,462.1 L330.3,452.2 L335.0,449.9 L337.3,446.2 L340.1,444.5 L344.8,443.9 L352.5,444.4 L379.9,443.3 L384.7,441.2 L389.1,441.8 L390.0,443.4 L395.5,444.3 L398.6,447.9 L399.2,451.3 L403.2,462.3 L406.7,467.8 Z" stroke="#ffffff" strokeWidth="1" />
              </svg>
              {/* Active Marker on Lahore */}
              <div className="absolute top-[35%] right-[32%] flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-green opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-brand-green-dark"></span>
              </div>
              <div className="absolute bottom-6 text-center">
                <p className="text-[10px] text-steel font-bold tracking-wider uppercase font-mono">Headquarters Location</p>
                <p className="text-sm text-ink font-semibold mt-1">Lahore, Pakistan</p>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};
