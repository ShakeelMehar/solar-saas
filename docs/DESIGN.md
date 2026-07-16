# Solar Solutions Pakistan - UI/UX Design System & Specification

This document serves as the single source of truth for the styling, interface guidelines, and layout architecture of the **Solar Solutions Pakistan** landing page and lead-generation portal.

---

## 1. Design Philosophy
The website is designed with a **"Modern & Minimalist"** aesthetic that balances engineering authority with clean energy values. 
- **Generous Whitespace:** Promotes visual breathing room and establishes a premium, trustworthy feel.
- **Visual Competence:** Replaces cluttered boxes with high-contrast typography and subtle borders.
- **Conversion-Driven Layout:** Incorporates prominent localized components (Pakistan-focused utility tools, quick language configurations, clear CTAs, and a floating WhatsApp button).

---

## 2. Design Tokens & Styling Constants

### 2.1 Color Palette
Our color system builds trust through a professional engineering base (Deep Tech Blue) coupled with environmental action highlights (Vibrant/Fresh Green) and clean solar accents (Solar Amber).

| Color Name | Hex Code | Tailwind Variable Name | CSS Custom Property | Primary UI Application |
| :--- | :--- | :--- | :--- | :--- |
| **Deep Tech Blue** | `#0B192C` | `brand-blue-dark` | `--color-brand-blue-dark` | Headings, hero background overlays, primary brand elements, and footer |
| **Active Tech Blue** | `#1E3A8A` | `brand-blue-medium` | `--color-brand-blue-medium` | Focused interactive states, links, and grid accents |
| **Vibrant Green** | `#10B981` | `brand-green` | `--color-brand-green` | Primary CTAs, Success Badges, active stats, and icon accents |
| **Vibrant Green Hover** | `#059669` | `brand-green-hover` | `--color-brand-green-hover` | Button hover states and interactive icons |
| **Soft Green Accent** | `#D1FAE5` | `brand-green-soft` | `--color-brand-green-soft` | Icon background bubbles, tag container borders, alerts |
| **Solar Amber** | `#F59E0B` | `brand-amber` | `--color-brand-amber` | Highlights, ratings, localized DISCO savings indicators |
| **Soft Background** | `#F8FAFC` | `slate-50` | `--color-slate-50` | Primary page container backgrounds |
| **Surface Card** | `#FFFFFF` | `white` | `--color-white` | Information cards, form modules, selector inputs |
| **Body Paragraphs** | `#475569` | `slate-600` | `--color-slate-600` | Readability text, description tags, subtitles |

### 2.2 Typography
We use **Inter** as the primary font family for english text due to its crisp geometric rendering and modern readability.
- **Heading Font:** `Inter` (Sans-serif)
- **Body Font:** `Inter` (Sans-serif)
- **Urdu Fallback:** `Noto Nastaliq Urdu`, `system-ui`, `sans-serif` (for localized names/labels)

#### Typographic Hierarchy

| Token Name | Tailwind Classes | Weight & Transform | Usage Example |
| :--- | :--- | :--- | :--- |
| **Display Title (Hero)** | `text-4xl md:text-5xl lg:text-6xl` | `font-extrabold tracking-tight text-brand-blue-dark leading-tight` | "MODERN SOLAR. CLEAN POWER." |
| **Section Title (H2)** | `text-2xl md:text-3xl` | `font-bold tracking-tight text-brand-blue-dark uppercase` | "WHY WE STAND OUT" |
| **Subsection Header (H3)** | `text-xl` | `font-semibold text-brand-blue-dark` | "Residential Solar", card headers |
| **Lead Body Paragraph** | `text-lg` | `font-normal text-slate-600 leading-relaxed` | Hero subheaders |
| **Standard Body Text** | `text-base` | `font-normal text-slate-600 leading-relaxed` | Card descriptions, body text |
| **Micro/Label Text** | `text-sm` | `font-medium text-slate-500` | Form labels, helper text, badges |

---

## 3. UI/UX Principles & Geometric Signatures

### 3.1 Corners & Rounding
A unified radius system is applied across all surfaces to maintain a friendly yet professional curvature:
- **Card Containers:** `rounded-2xl` (16px) - Used for Why Choose Us, Solutions, and Success Stories.
- **Buttons / Tabs / Badge Labels:** `rounded-full` (9999px) - Employs a pill-shaped layout to mirror clean design patterns.
- **Inputs & Form Controls:** `rounded-xl` (12px) - Creates a distinct, sharp-but-soft outline for text areas.

### 3.2 Spacing & Breathing Room
Minimalism is enforced through strict vertical spacing limits:
- **Section Dividers:** `py-20 lg:py-24` (80px to 96px padding) to ensure sections do not feel squeezed.
- **Grid Layout Gaps:** `gap-8` or `gap-10` columns on desktop systems.
- **Internal Card Padding:** `p-6` to `p-8` depending on layout density.

### 3.3 Elevation & Shadows
We employ flat, minimal depth. Heavy black shadows are forbidden:
- **Default Card Shadows:** `shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)]` (an extremely soft, modern, diffuse gray shadow).
- **Interactive Card Hover / Form Panels:** `shadow-[0_8px_30px_rgb(0,0,0,0.08)]` (a slightly stronger elevation for active inputs or configurators).

---

## 4. Component Specifications

### 4.1 Buttons
- **Primary CTA (e.g., "GET QUOTE" or "SUBMIT REQUEST"):**
  - **Styles:** Solid Green fill (`bg-brand-green`), white text (`text-white`), pill shape (`rounded-full`), smooth translation transitions.
  - **Tailwind:** `bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-6 py-3 rounded-full transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-2`
- **Secondary CTA (e.g., "DISCOVER SAVINGS" or "VIEW DETAILS"):**
  - **Styles:** Outlined borders with green/blue text and subtle light background transitions.
  - **Tailwind:** `bg-transparent border-2 border-emerald-500 hover:bg-emerald-50 text-emerald-600 font-semibold px-6 py-3 rounded-full transition-all duration-300 flex items-center justify-center gap-2`

### 4.2 Form Inputs
- **Base State:** Solid white background, light gray borders (`border-slate-200`), comfortable padding.
- **Tailwind:** `w-full bg-white text-brand-blue-dark border border-slate-200 rounded-xl px-4 py-3 text-base placeholder-slate-400 focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100 transition-all`
- **Error State:** Focus states shift to crimson/red to signal correction.

### 4.3 Floating WhatsApp Button
- **Placement:** Always anchored at `bottom-6 right-6` with higher elevation index (`z-50`).
- **Interactive Action:** Pulse animation to draw attention. Displays a custom tool tip indicating online availability.
- **Styles:** WhatsApp Brand Green (`#25D366`) wrapper containing the WhatsApp Lucide/SVG icon.
- **Tailwind:** `fixed bottom-6 right-6 bg-[#25D366] hover:bg-[#20BA5A] text-white p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 flex items-center justify-center z-50 group`

---

## 5. Localized Architecture (Pakistan Context)
Our platform includes special elements contextualized for the Pakistani solar market:
- **DISCO Selection Selector:** Integration for national distribution companies (K-Electric, LESCO, IESCO, FESCO, MEPCO, etc.) allowing users to estimate savings based on local tariffs.
- **Language Switcher:** Quick toggling between English (default translation) and localized labels (Urdu script fallback).
- **Address & Contacts:** Highlighting local physical addresses (Lahore headquarters) with localized numbers matching cellular formats (`+92 XXX XXXXXXX`).
