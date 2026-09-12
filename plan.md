You are an expert full-stack developer and UI/UX designer specializing in high-performance, dark-mode entertainment and gaming lounge websites.

Create a modern, responsive website for "Club 24", an exact counterpart and upgrade to the reference site (supergame.pk). The concept is a premium, 24/7 indoor sports and gaming lounge featuring professional snooker, pool, PS5 private rooms, table tennis, foosball, and a café.

---

### 1. TECH STACK & DESIGN SYSTEM
- **Framework**: Next.js 14/15 (App Router) or React + Tailwind CSS + Lucide React icons + Framer Motion.
- **Theme & Aesthetics**:
  - Dark Luxury & Neon Gaming aesthetic (rich dark slate `#0B0F17` / `#050811` background).
  - Accent Colors: Electric Neon Cyan / Vibrant Emerald Green (`#00F5A0` / `#00D2FF`) for highlights, borders, and CTA glow effects.
  - Surface: Subtle glassmorphism (`backdrop-blur-md bg-white/5 border border-white/10`).
  - Typography: Sleek, athletic, modern sans-serif (e.g., Montserrat, Inter, or Syne) with bold uppercase headings.
- **Responsiveness**: Mobile-first with smooth slide-out hamburger navigation for mobile and tablet.

---

### 2. PAGE STRUCTURE & SECTIONS (MIRRORED FROM SUPERGAME.PK)

#### A. Sticky Glassmorphism Header / Navbar
- **Left**: "Club 24" logo with a neon gaming icon or sleek monogram.
- **Center**: Navigation Links:
  - About Us
  - Facilities / Games
  - Corporate & Private Events
  - Gallery
  - Contact & Location
- **Right**: High-contrast CTA button: `"Book Now"` (opens booking modal or triggers direct WhatsApp reservation).
- **Mobile**: Hamburger menu trigger with clean full-screen overlay.

#### B. Hero Section
- **Badge**: `"⚡ Open 24/7 • Family-Friendly • Premium Ambiance"`
- **Headline**: `"REDEFINING GAMING & SPORTS ENTERTAINMENT"`
- **Sub-headline**: `"Karachi's Premium 24/7 Indoor Sports & Gaming Lounge. Where competition meets comfort. Enjoy tournament-grade snooker, American pool, PS5 VIP rooms, table tennis, foosball, and specialty café dining — all under one roof."`
- **CTA Buttons**:
  - Primary: `"Reserve Your Slot"` (glowing neon effect)
  - Secondary: `"Explore Facilities"` (glass/outline button with smooth scroll)
- **Hero Stats Bar**:
  - `24/7` Non-Stop Action | `10+` Tournament Tables | `4K HDR` VIP PS5 Lounges | `100%` Safe & Secure

#### C. Core Facilities & Gaming Zones (Interactive Grid/Cards)
Replicate the exact facility cards from the reference site with high-resolution imagery, hover zoom, tags, and individual "Book Slot" buttons:
1. **Snooker Arena**: "International-grade Rasson & Xing Pai tables, tournament lighting, and professional ambiance for serious cueists."
2. **American Pool**: "Sleek 8-ft professional slate pool tables in an energetic hall — built for friendly wagers and chill matches."
3. **Table Tennis (Ping Pong)**: "Fast-paced, smash-and-spin action in a glass-walled TT zone with premium competition rollway tables."
4. **PS5 Private VIP Rooms**: "Soundproof immersive lounges, 65\" 4K low-latency displays, dual controllers, comfortable recliners — your squad's ultimate battlefield."
5. **Foosball & Board Games**: "Pro-grade competitive foosball tables, carrom boards, and classic party games."
6. **The 24/7 Café & Chill Lounge**: "Grab specialty coffee, mocktails, loaded fries, and burgers. Refuel without leaving the lounge."

#### D. "Plan Your Visit" Experience Pillars
A 4-card feature showcase highlighting services:
1. **Reserve Your Table**: Instant slot confirmation without the waiting line.
2. **Weekend Party Packages**: Perfect for birthdays, friend reunions, and exclusive floor access.
3. **Corporate & Private Tournaments**: Host team-building nights, esports tournaments, or influencer meetups with dedicated staff.
4. **Club 24 VIP Membership**: Priority bookings, exclusive hourly discounts, and members-only tournament nights.

#### E. Customer Testimonials / Social Proof
- Testimonial cards with 5-star ratings, quotes praising ambiance, table quality, staff hospitality, and safe family environment.

#### F. Location, Hours & Visit Details
- **Badges**: `"Open 24 Hours / 7 Days a Week"` | `"Safe & Family Friendly"` | `"Valet & Parking Available"`
- **Address Card**: Detailed address in Karachi (e.g., Alamgir Road / Bahadurabad / Clifton), direct Google Maps embed or link.
- **Direct WhatsApp Widget**: Floating WhatsApp chat button pre-configured with: `"Hi Club 24, I'd like to book a table for [Game] tonight."`

#### G. Comprehensive Footer
- **Col 1 (Brand)**: Club 24 logo, brief mission statement, 24/7 operating status.
- **Col 2 (Facilities)**: Direct links to Snooker, American Pool, PS5 Rooms, TT, Foosball, Cafe.
- **Col 3 (Quick Links)**: About Us, Event Booking, Pricing & Packages, FAQs, Terms & Policies.
- **Col 4 (Connect)**: Phone / WhatsApp number, Email address, Physical address, and Social Media icons (Instagram, TikTok, Facebook).
- **Bottom**: `© 2026 Club 24. All Rights Reserved.`

---

### 3. INTERACTIVE FUNCTIONALITY REQUIRED
1. **Booking Modal**:
   - Fields: Name, Phone/WhatsApp number, Select Game (Snooker, Pool, PS5, TT, Foosball), Date, Time Slot, and Number of Players.
   - Action: Submits and redirects directly to WhatsApp with the formatted booking details.
2. **Framer Motion Animations**:
   - Smooth reveal animations on scroll (`viewport: { once: true }`).
   - Card hover lift and neon glow borders.
3. **Responsive Image Placeholders**:
   - Use high-quality Unsplash sports/gaming photography for snooker, pool, controllers, ping pong, and moody lounge interiors.You are an expert full-stack UI engineer. Build a high-performance, mobile-first, dark-mode web application for "CLUB 24" (Karachi), an indoor gaming lounge and sports arena.

---

### 1. BRANDING & DESIGN SYSTEM
- **Logo**: "CLUB" (White, bold italic) + "24" (Crimson Red `#FF1E27`) with the subtitle "HIGH SCORES & HOT MEALS".
- **Color Theme**:
  - Background: Obsidian Black (`#050505` to `#0A0A0A`).
  - Cards: Dark Charcoal (`#121214`) with subtle red/white hairline borders (`border border-white/10 hover:border-red-600/50 transition-all`).
  - Accent / CTA: High-Octane Crimson (`#FF1E27`) with soft red neon shadows (`shadow-[0_0_20px_rgba(255,30,39,0.35)]`).
  - Typography: Heavy athletic/modern sans-serif (e.g., Oswald or Syne for titles, Inter for body).

---

### 2. REAL VERIFIED DATA & LOCATION
- **Taglines**: 
  - "HIGH SCORES & HOT MEALS"
  - "Your New Playground — Open 24/7"
- **Address**: Star Home, Shop No. 03, Main Shaheed-e-Millat Road (Near Medicare Hospital / Star Flyover), Karachi.
- **Phone / WhatsApp**: 0305 2201777
- **Operating Hours**: Open 24 Hours / 7 Days a Week

---

### 3. CORE WEBSITE SECTIONS

#### A. Header / Navbar (Sticky Glassmorphic)
- **Left**: Club 24 logo (White "CLUB" + Red "24").
- **Center Links**: Games & Facilities, Price List, Private Rooms, Food Menu, Location.
- **Right**: "Book Table" button (Crimson Red `#FF1E27`, redirects to WhatsApp or opens booking modal).

#### B. Hero Section
- **Status Badge**: "🔴 LIVE NOW • OPEN 24/7 • SHAHEED-E-MILLAT RD"
- **Heading**: "HIGH SCORES & HOT MEALS."
- **Subheading**: "Karachi's ultimate 24/7 entertainment hub. Pro snooker, high-octane racing simulators, private PS5 VIP lounges, pool, and hot dining under one roof."
- **CTAs**: 
  - Primary: "Reserve a Slot"
  - Secondary: "View Price List" (Scrolls directly to pricing grid)

#### C. Official Price List & Facilities Grid (Exact Rates)
Display an interactive grid with individual cards, game icon, hourly rate, and quick "Book" action:
1. **Foosball**: Rs. 500 / hr
2. **Carrom**: Rs. 500 / hr
3. **Table Tennis**: Rs. 700 / hr
4. **American Pool**: Rs. 800 / hr
5. **Snooker (Hall Table)**: Rs. 800 / hr
6. **PS5 Private Room**: Rs. 900 / hr (Soundproofed, 4K displays, dual controllers)
7. **Private Snooker Room**: Rs. 1,200 / hr (Exclusive private suite for tournaments)
8. **Racing Simulator**: Rs. 1,200 / hr (Full cockpit, force feedback wheel, immersive displays)

#### D. "Hot Meals & Fuel" (Café Section)
- Quick showcase of hot meals, loaded fries, burgers, specialty mocktails, and coffee so gamers can refuel without leaving their station.

#### E. WhatsApp Instant Booking Modal
- Triggered by any "Book Now" button on any game card.
- User selects: Game Type, Date, Time Slot, and Guest Count.
- Formats message and launches WhatsApp chat to `+923052201777` with prefilled text:
  "Hi Club 24! I want to book [Game] on [Date] at [Time] for [X] people."

#### F. Location, Map & Footer
- Embed interactive Google Map centered on Star Home, Main Shaheed-e-Millat Road, Karachi.
- Highlight key badges: Valet Available, Air Conditioned, Soundproof Rooms, Family Friendly.
- Footer with operating hours, full phone contact (`0305 2201777`), Instagram link (`@club24.pk`), and copyright.Generate a complete, fully responsive single-page frontend application for "CLUB 24" in Next.js 14 (App Router) and Tailwind CSS. Write the entire implementation inside one comprehensive 'app/page.tsx' file. Do not use placeholders, truncated comments, or external local image assets.

---

### 1. TECHNICAL & DESIGN SPECIFICATIONS
- **Framework**: Next.js 14 App Router, React (`"use client"`), Lucide React icons, Tailwind CSS.
- **Color Palette**:
  - Background: `#050505` to `#0A0A0A` (deep obsidian black).
  - Cards & Surfaces: `#111113` with subtle border `#27272A` and hover border `#EF4444`.
  - Brand Red: `#FF1E27` (racing crimson) with glow utility `shadow-[0_0_25px_rgba(255,30,39,0.35)]`.
  - Accent / Text: `#FFFFFF` and muted text `#9CA3AF`.
- **Branding / Logo Component**:
  - Build an inline logo: A dark circular badge featuring italicized, bold white text "CLUB" fused with crimson red text "24", with tracking-widest red subtext below reading "HIGH SCORES & HOT MEALS".

---

### 2. CORE SECTIONS TO IMPLEMENT

#### A. Sticky Glass Navbar
- Club 24 inline logo on the left.
- Nav links: Facilities, Rates, VIP Rooms, Food, Location.
- Right CTA: Red glowing "Book Table" button that opens the Booking Modal.
- Mobile drawer menu for small screens.

#### B. Hero Section
- Badge: "🔴 LIVE NOW • OPEN 24/7 • SHAHEED-E-MILLAT ROAD, KARACHI"
- Main Title: "HIGH SCORES & HOT MEALS" (Large uppercase, metallic gradient/white).
- Subtitle: "Karachi's 24/7 gaming lounge and sports arena. Featuring tournament snooker, pro racing cockpits, private 4K PS5 suites, and late-night dining."
- Action Buttons: "Reserve Slot" (primary red) and "View All Rates" (outline).
- Stats row: "8+ Gaming Zones" | "Open 24 Hours" | "Private VIP Suites" | "Full Dining Menu".

#### C. Official Interactive Price Grid (8 Core Activities)
Render each activity as an interactive card displaying the title, hourly price, feature tags, and a "Book This" button that prefills the booking modal. Use these verified details and image URLs:
1. **Racing Simulator** — Rs. 1,200/hr (Direct-drive force feedback, pro pedals, triple display setup)
   - Image: `https://images.unsplash.com/photo-1547394765-185e131e14af?auto=format&fit=crop&w=800&q=80`
2. **Private Snooker Room** — Rs. 1,200/hr (Dedicated soundproof VIP suite, tournament Rasson table, private lounge)
   - Image: `https://images.unsplash.com/photo-1534158914592-062992fbe900?auto=format&fit=crop&w=800&q=80`
3. **PS5 VIP Private Room** — Rs. 900/hr (65" 4K OLED, dual DualSense controllers, leather recliners)
   - Image: `https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?auto=format&fit=crop&w=800&q=80`
4. **Snooker (Main Hall)** — Rs. 800/hr (Xing Pai tournament tables, pro overhead lighting)
   - Image: `https://images.unsplash.com/photo-1615671524827-c1fe3973b648?auto=format&fit=crop&w=800&q=80`
5. **American Pool** — Rs. 800/hr (8-ft slate tournament table, premium cues)
   - Image: `https://images.unsplash.com/photo-1588850561407-ed78c282e89b?auto=format&fit=crop&w=800&q=80`
6. **Table Tennis** — Rs. 700/hr (Competition-grade indoor rollway table, tournament paddles)
   - Image: `https://images.unsplash.com/photo-1609710228159-0fa9bd7c0827?auto=format&fit=crop&w=800&q=80`
7. **Foosball** — Rs. 500/hr (Pro-grade tournament rod table, high-speed balls)
   - Image: `https://images.unsplash.com/photo-1526232761682-d26e03ac148e?auto=format&fit=crop&w=800&q=80`
8. **Carrom Lounge** — Rs. 500/hr (Smooth surface championship boards with powder & striker sets)
   - Image: `https://images.unsplash.com/photo-1610890716171-6b1bb98ffd09?auto=format&fit=crop&w=800&q=80`

#### D. "Hot Meals" Dining Showcase
A visually rich section displaying food items (Burgers, Loaded Fries, Wings, Shakes, Specialty Coffee) with prices and tags to emphasize the "Hot Meals" promise.
- Image: `https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=800&q=80`

#### E. Interactive Booking Modal (With WhatsApp Redirection)
- Form inputs:
  - Full Name
  - Phone Number
  - Activity (Dropdown pre-populated with the 8 activities)
  - Date & Time Slot
  - Number of Players
- Submit Action:
  - Generates a pre-filled WhatsApp link to `+923052201777` formatted as:
    `https://wa.me/923052201777?text=Hi%20Club%2024,%20I%20want%20to%20reserve%20[Activity]%20for%20[Players]%20players%20on%20[Date]%20at%20[Time].%20Name:%20[Name]`
  - Automatically opens WhatsApp in a new tab upon form submission.

#### F. Location, Contact & Footer
- Direct address card: "Shop No. 03, Star Home, Main Shaheed-e-Millat Road (Near Medicare Hospital / Star Flyover), Karachi".
- Phone: `0305 2201777`.
- Hours: "Open 24/7, All Day, Every Day".
- Google Map iframe embed pointing to Shaheed-e-Millat Road, Karachi.
- Footer with links, copyright notice, and Instagram link (`https://www.instagram.com/club24.pk`).

---

### 3. OUTPUT REQUIREMENTS
- Output a single, complete React functional component in `app/page.tsx`.
- Include full working TypeScript types and state logic for the modal (`isModalOpen`, `selectedGame`, `formData`).
- Do not omit any JSX or logic.