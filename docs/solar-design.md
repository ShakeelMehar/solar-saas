# Solar Solutions Pakistan - UI/UX Design System

This document serves as the single source of truth for the frontend styling and UI/UX guidelines for the Solar Solutions Pakistan landing page. It is strictly based on the "Modern & Minimalist" prototype (Version 2).

## 1. Design Philosophy

- **Minimalist & Breathable:** Generous use of whitespace (`padding` and `margin`) to prevent visual clutter and maintain a premium feel.
- **Trust & Clean Energy:** A balanced color palette relying on crisp whites, modern slate grays for text readability, and soft greens to signify renewable energy.
- **Localized (Pakistan):** Clean layouts that accommodate both English and localized content seamlessly, featuring clear visual hierarchies for services like "Solar Pumping" and "Residential Solar."

---

## 2. Color Palette (Tailwind CSS Configuration)

### Primary Colors (Brand & Action)

- **Primary Green:** `#10B981` (Tailwind: `emerald-500`) - Used for primary buttons, active states, and key highlights.
- **Primary Green Hover:** `#059669` (Tailwind: `emerald-600`) - Used for button hover states.
- **Soft Accent Green:** `#D1FAE5` (Tailwind: `emerald-100`) - Used for icon backgrounds or subtle badge highlights.

### Neutral Colors (Text & Structure)

- **Background Main:** `#F8FAFC` (Tailwind: `slate-50`) - The overall page background color to provide a soft contrast against white cards.
- **Surface (Cards):** `#FFFFFF` (Tailwind: `white`) - Used for all grids, feature cards, and contact forms.
- **Heading Text:** `#0F172A` (Tailwind: `slate-900`) - Deep slate for high-contrast, modern headings.
- **Body Text:** `#475569` (Tailwind: `slate-600`) - Softer slate for readable, extended paragraphs.

### Gradients

- **Hero Gradient:** `bg-gradient-to-r from-emerald-50 to-slate-50` - A very subtle, refreshing background gradient for the hero section, fading from soft green to light slate.

---

## 3. Typography

**Primary Font:** `Inter` or `Poppins` (Google Fonts)

- **Why:** Highly legible, modern, and perfectly suited for minimalist interfaces.
- **Urdu Fallback:** `Noto Nastaliq Urdu` (For any localized strings).

**Scale & Weights:**

- **Hero Headline (h1):** `text-5xl` to `text-6xl`, Font Weight: `font-extrabold` (800), Tracking: `tracking-tight`.
- **Section Titles (h2):** `text-3xl` to `text-4xl`, Font Weight: `font-bold` (700), Text Transform: `uppercase` (optional, for sections like "Why We Stand Out").
- **Card Titles (h3):** `text-xl`, Font Weight: `font-semibold` (600).
- **Body Text (p):** `text-base` or `text-lg`, Font Weight: `font-normal` (400), Leading: `leading-relaxed`.

---

## 4. UI Components

### 4.1 Buttons

- **Primary CTA (e.g., "GET QUOTE"):**
    - _Classes:_ `bg-emerald-500 text-white px-6 py-3 rounded-full font-medium hover:bg-emerald-600 transition-colors shadow-sm`
    - _Shape:_ Pill-shaped (`rounded-full`) as per the modern design prototype.
- **Secondary CTA (e.g., "DISCOVER SAVINGS"):**
    - _Classes:_ `bg-white text-emerald-600 border-2 border-emerald-500 px-6 py-3 rounded-full font-medium hover:bg-emerald-50 transition-colors`

### 4.2 Cards & Containers (The "Skeleton" Grids)

- **Base Card Style (Used in "Why We Stand Out", "Solutions", "Success Stories"):**
    - _Classes:_ `bg-white rounded-2xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-slate-100 p-6`
    - _Note:_ The shadow is extremely subtle and dispersed to create a "floating" effect rather than a heavy box.

### 4.3 Images

- All project and hero images should have `rounded-2xl` or `rounded-xl` to match the soft, modern aesthetic of the cards.

---

## 5. Layout & Spacing (Whitespace Rules)

- **Section Spacing:** Minimum `py-20` or `py-24` (80px - 96px) between major sections (e.g., between Hero and "Why We Stand Out") to let the layout breathe.
- **Grid Layouts:**
    - Use CSS Grid (`grid cols-1 md:grid-cols-3 gap-8`) for features and solutions.
    - Generous gaps (`gap-8` or `gap-10`) between grid items.

---

## 6. Iconography

- **Library:** `Lucide-React`
- **Style:** Stroke-based, minimalist line icons.
- **Usage:** Typically placed in a soft circular wrapper.
    - _Wrapper Classes:_ `w-12 h-12 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600 mb-4`
