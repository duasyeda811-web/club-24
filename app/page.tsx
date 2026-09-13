"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
  Gamepad2,
  Tv,
  Flame,
  Clock,
  MapPin,
  Phone,
  Calendar,
  Users,
  ChevronRight,
  Sparkles,
  CheckCircle2,
  ShieldCheck,
  Zap,
  Award,
  Coffee,
  X,
  Menu,
  MessageCircle,
  ExternalLink,
  ChevronDown,
  Compass,
  Star,
  Car,
  Wind,
  VolumeX,
  HeartHandshake,
  Wifi,
  ArrowRight,
  TrendingUp,
  CircleDot,
  Dices,
  Trophy,
} from "lucide-react";

// Types
interface Activity {
  id: string;
  title: string;
  category: "cues" | "racing" | "vip" | "table" | "classic";
  price: number;
  rateUnit: string;
  tag: string;
  badgeColor: string;
  specs: string[];
  description: string;
  image: string;
  featured?: boolean;
}

interface FoodItem {
  id: string;
  name: string;
  category: "Burgers" | "Loaded Fries" | "Wings & Bites" | "Drinks & Coffee";
  price: number;
  description: string;
  image: string;
  tag?: string;
  spicy?: boolean;
}

interface Testimonial {
  id: string;
  name: string;
  role: string;
  avatar: string;
  rating: number;
  comment: string;
  highlight: string;
  gamePlayed: string;
}

// Activity Data from plan.md
const ACTIVITIES: Activity[] = [
  {
    id: "racing-simulator",
    title: "Racing Simulator Cockpit",
    category: "racing",
    price: 1200,
    rateUnit: "hr",
    tag: "High-Octane Immersion",
    badgeColor: "bg-red-600/20 text-red-400 border-red-500/40",
    featured: true,
    description:
      "Feel every curb and apex with ultra-responsive direct-drive force feedback, pro load-cell racing pedals, and immersive panoramic triple display setup.",
    specs: [
      "Direct-Drive Pro Wheel Base",
      "Load-Cell Hydraulic Pedals",
      "Panoramic Triple Display Rig",
      "F1 / GT Custom Steering Setup",
    ],
    image:
      "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "private-snooker",
    title: "Private Snooker Suite",
    category: "vip",
    price: 1200,
    rateUnit: "hr",
    tag: "VIP Soundproof Room",
    badgeColor: "bg-amber-500/20 text-amber-300 border-amber-500/40",
    featured: true,
    description:
      "Dedicated soundproof VIP suite featuring international championship tournament Rasson table, private leather lounge seating, and personal waiter service.",
    specs: [
      "Championship Rasson Tournament Table",
      "Soundproof VIP Acoustic Wall Design",
      "Luxury Leather Squad Lounge",
      "Independent Climate Control & Queue Stand",
    ],
    image:
      "/images/Private Snooker Suite.jpg",
  },
  {
    id: "ps5-vip",
    title: "PS5 VIP Private Room",
    category: "vip",
    price: 900,
    rateUnit: "hr",
    tag: "4K OLED Gaming Suite",
    badgeColor: "bg-cyan-500/20 text-cyan-300 border-cyan-500/40",
    featured: true,
    description:
      "Immerse your squad in a private soundproofed gaming cave equipped with 65-inch 4K 120Hz display, dual wireless DualSense controllers, and latest AAA titles.",
    specs: [
      "65\" 4K 120Hz HDR Low-Latency Display",
      "Dual Sony DualSense Controllers",
      "Full Library: FC 24/25, Tekken 8, MK1, CoD",
      "Ultra-Plush Reclining Leather Sofa",
    ],
    image:
      "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "snooker-hall",
    title: "Snooker (Main Arena)",
    category: "cues",
    price: 800,
    rateUnit: "hr",
    tag: "Tournament Standard",
    badgeColor: "bg-emerald-500/20 text-emerald-300 border-emerald-500/40",
    description:
      "Tournament-grade Xing Pai tables with 6811 Strachan English cloth, pro shadowless overhead lighting, and championship leveling for dedicated cueists.",
    specs: [
      "Official Xing Pai Tournament Tables",
      "Strachan 6811 Tournament Cloth",
      "Shadowless Overhead LED Lighting",
      "Precision Ashwood Cue Sticks Provided",
    ],
    image:
      "/images/Snooker (Main Arena).jpg",
  },
  {
    id: "american-pool",
    title: "American Pool",
    category: "cues",
    price: 800,
    rateUnit: "hr",
    tag: "8-Ft Slate Table",
    badgeColor: "bg-blue-500/20 text-blue-300 border-blue-500/40",
    description:
      "8-foot precision diamond-slate tournament table with Aramith tournament balls, high-speed rail cushions, and vibrant sports lounge vibes for fast matches.",
    specs: [
      "8-Foot Diamond Precision Slate",
      "Aramith Pro Tournament Balls",
      "High-Response Rubber Rail Cushions",
      "Spacious Stance Room Around All Pockets",
    ],
    image:
      "/images/American Pool.jpg",
  },
  {
    id: "table-tennis",
    title: "Table Tennis (Ping Pong)",
    category: "table",
    price: 700,
    rateUnit: "hr",
    tag: "Smash & Spin Zone",
    badgeColor: "bg-purple-500/20 text-purple-300 border-purple-500/40",
    description:
      "Competition-grade indoor rollway table with 25mm high-density bounce top, tournament carbon paddles, and 3-star ITTF approved competition balls.",
    specs: [
      "25mm High-Density Tournament Top",
      "ITTF Certified 3-Star Balls",
      "Carbon Reinforced Pro Paddles",
      "Non-Slip High Traction Sports Matting",
    ],
    image:
      "https://images.unsplash.com/photo-1609710228159-0fa9bd7c0827?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "foosball",
    title: "Foosball Championship",
    category: "classic",
    price: 500,
    rateUnit: "hr",
    tag: "High-Speed Battles",
    badgeColor: "bg-orange-500/20 text-orange-300 border-orange-500/40",
    description:
      "Professional tournament steel-rod table featuring counterbalanced robot figures, ergonomic octagonal grips, and high-speed textured game balls.",
    specs: [
      "Heavy-Duty Solid Steel Rods",
      "Counterbalanced Pro Figures",
      "High-Traction Textured Tournament Balls",
      "Dual Side Ball Returns & Score Sliders",
    ],
    image:
      "/images/Foosball Championship.jpg",
  },
  {
    id: "carrom-lounge",
    title: "Carrom Lounge",
    category: "classic",
    price: 500,
    rateUnit: "hr",
    tag: "Smooth Championship Board",
    badgeColor: "bg-rose-500/20 text-rose-300 border-rose-500/40",
    description:
      "Smooth surface english plywood championship carrom boards with precision acrylic strikers, weighted wooden coins, and micro-fine boric powder.",
    specs: [
      "3-Inch Jumbo Frame Championship Board",
      "Precision Balanced Acrylic Strikers",
      "Weighted Hardwood Carrom Men & Queen",
      "Dedicated Soft Glare Spotlight",
    ],
    image:
      "/images/Carrom Lounge.jpg",
  },
];

// Food Menu Data
const FOOD_ITEMS: FoodItem[] = [
  {
    id: "smash-burger",
    name: "Club 24 Double Smash Beef Burger",
    category: "Burgers",
    price: 690,
    description: "Dual 100% prime beef patties, melted cheddar, caramelized onions, house secret sauce in a toasted brioche bun.",
    image: "/images/Club 24 Double Smash Beef Burger.jpg",
    tag: "Chef's Special",
  },
  {
    id: "crispy-zinger",
    name: "Thunder Zinger Crunch Burger",
    category: "Burgers",
    price: 590,
    description: "Crispy battered chicken fillet, spicy chipotle mayo, iceberg lettuce, served hot & crispy with seasoning.",
    image: "/images/Thunder Zinger Crunch Burger.jpg",
    spicy: true,
  },
  {
    id: "bbq-bacon-burger",
    name: "Smoky BBQ Bacon Beef Burger",
    category: "Burgers",
    price: 750,
    description: "Flame-grilled prime beef patty, crispy smoked bacon, sharp cheddar, caramelized onion rings, and tangy smoky BBQ glaze in a toasted sesame bun.",
    image: "https://images.unsplash.com/photo-1553979459-d2229ba7433b?auto=format&fit=crop&w=400&q=80",
    tag: "New",
  },
  {
    id: "jalapeno-melt-burger",
    name: "Crispy Jalapeño Melt Burger",
    category: "Burgers",
    price: 620,
    description: "Crunchy breaded chicken fillet, melted pepper jack cheese, crispy fried jalapeño slices, and creamy sriracha mayo in a warm brioche bun.",
    image: "/images/Crispy Jalapeño Melt Burger.jpg",
    spicy: true,
  },
  {
    id: "dynamite-fries",
    name: "Loaded Cheesy Dynamite Fries",
    category: "Loaded Fries",
    price: 550,
    description: "Crispy shoestring fries drenched in warm liquid cheddar, jalapenos, minced spiced beef, and signature dynamite glaze.",
    image: "/images/Loaded Cheesy Dynamite Fries.jpg",
    tag: "Crowd Favorite",
  },
  {
    id: "pizza-fries",
    name: "Supreme Pizza Fries",
    category: "Loaded Fries",
    price: 520,
    description: "Golden fries baked with mozzarella, marinara sauce, pepperoni slices, olives, and oregano herb seasoning.",
    image: "/images/Supreme Pizza Fries.jpg",
  },
  {
    id: "hot-wings",
    name: "Fiery Buffalo Hot Wings (6 Pcs)",
    category: "Wings & Bites",
    price: 480,
    description: "Jumbo crispy wings tossed in authentic tangy Buffalo glaze, served with cool buttermilk ranch dip.",
    image: "https://images.unsplash.com/photo-1567620832903-9fc6debc209f?auto=format&fit=crop&w=800&q=80",
    spicy: true,
  },
  {
    id: "chicken-tenders",
    name: "Crispy Strips & Honey Mustard (4 Pcs)",
    category: "Wings & Bites",
    price: 450,
    description: "Tender golden fried chicken tenders served with house honey mustard and BBQ dipping sauce.",
    image: "https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: "blue-neon",
    name: "Electric Blue Lagoon Mocktail",
    category: "Drinks & Coffee",
    price: 380,
    description: "Zesty blue curacao, freshly squeezed lime, crushed ice, mint sprigs, topped with bubbling soda.",
    image: "/images/Electric Blue Lagoon Mocktail.jpg",
    tag: "Signature Drink",
  },
  {
    id: "spanish-latte",
    name: "Iced Spanish Latte / Espresso",
    category: "Drinks & Coffee",
    price: 420,
    description: "Freshly pulled double shot of dark roast arabica espresso blended with condensed sweet milk and chilled foam.",
    image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: "mint-lemonade",
    name: "Fresh Mint & Ice Cooler",
    category: "Drinks & Coffee",
    price: 320,
    description: "Blended fresh mountain mint, black salt, fresh lemon juice, and crushed crystal ice for instant hydration.",
    image: "/images/Fresh Mint & Ice Cooler.jpg",
  },
];

type BookingServiceType = "instant" | "birthday" | "corporate" | "vip";

// Experience Pillars
const EXPERIENCE_PILLARS = [
  {
    id: "instant" as BookingServiceType,
    title: "Instant Table Reservation",
    description: "Zero waiting lines. Pre-book your favorite snooker table, PS5 room, or racing rig in seconds via instant WhatsApp confirmation.",
    icon: Calendar,
    badge: "Fast Track",
  },
  {
    id: "birthday" as BookingServiceType,
    title: "Squad & Birthday Packages",
    description: "Turn your celebration into an epic tournament with custom party packages, private VIP lounge floor access, and combo meal platters.",
    icon: Flame,
    badge: "Party Time",
  },
  {
    id: "corporate" as BookingServiceType,
    title: "Corporate Tournaments & Events",
    description: "Host team-building sports nights, community esports brackets, or brand launches with dedicated event hosts and live scoreboards.",
    icon: Trophy,
    badge: "Team Building",
  },
  {
    id: "vip" as BookingServiceType,
    title: "Club 24 VIP Membership",
    description: "Enjoy priority reservation privileges, exclusive off-peak hourly discounts, members-only tournaments, and complimentary café perks.",
    icon: Award,
    badge: "Elite Access",
  },
];

// Testimonials
const TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    name: "Hamza Alvi",
    role: "Competitive Snooker Player",
    avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&q=80",
    rating: 5,
    highlight: "Best snooker tables in Karachi",
    comment:
      "The Xing Pai tables and the private Rasson room are immaculate. The cloth is smooth, balls roll true, and shadowless lighting makes long pots effortless. Hands down the highest quality arena in town.",
    gamePlayed: "Private Snooker Suite",
  },
  {
    id: "2",
    name: "Saad & The Squad",
    role: "Esports & FIFA Enthusiasts",
    avatar: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&w=150&q=80",
    rating: 5,
    highlight: "Unmatched PS5 VIP Experience",
    comment:
      "We booked the VIP PS5 room for a 4-hour weekend tournament. Soundproofing is legit, the 65-inch 4K screen is buttery smooth, and having hot smash burgers delivered right into the lounge was top tier!",
    gamePlayed: "PS5 VIP Room",
  },
  {
    id: "3",
    name: "Bilal & Family",
    role: "Weekend Leisure",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=150&q=80",
    rating: 5,
    highlight: "Clean, Safe & Family Friendly",
    comment:
      "Finding a late-night gaming spot in Karachi that is genuinely safe, smoke-free, air-conditioned, and welcoming for families with kids is rare. Club 24 sets the gold standard.",
    gamePlayed: "Table Tennis & Foosball",
  },
];

// Key Amenities
const AMENITIES = [
  { icon: Clock, title: "24/7 Non-Stop", desc: "Open 24 hours a day, 7 days a week, 365 days a year" },
  { icon: ShieldCheck, title: "Family & Safe", desc: "Welcoming, secure environment with 24/7 CCTV surveillance" },
  { icon: Wind, title: "100% Chilled AC", desc: "Central high-capacity climate control kept crisp year-round" },
  { icon: VolumeX, title: "Acoustic Suites", desc: "Soundproof VIP rooms for ultimate gaming privacy" },
  { icon: Car, title: "Valet & Parking", desc: "Dedicated on-site parking on Main Shaheed-e-Millat Road" },
  { icon: Wifi, title: "Ultra-Fast Fiber", desc: "High-speed zero-lag 5G Wi-Fi throughout the entire arena" },
  { icon: Zap, title: "0% Downtime", desc: "Automatic heavy-duty backup generators with zero interruption" },
  { icon: Coffee, title: "Full Dining Café", desc: "Hot meals, specialty coffee, and snacks served to your table" },
];

export default function Club24LandingPage() {
  // Navigation & UI State
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [foodCategory, setFoodCategory] = useState<string>("all");

  // Booking Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [serviceType, setServiceType] = useState<BookingServiceType>("instant");
  const [selectedActivityId, setSelectedActivityId] = useState<string>("racing-simulator");
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    activity: "Racing Simulator Cockpit",
    date: new Date().toISOString().split("T")[0],
    time: "20:00",
    players: "2",
    duration: "1",
    specialRequests: "",

    // Birthday specific
    groupSize: "10-20 Guests",
    packageTier: "Pro Party Package (Games + Smash Burgers + Drinks)",

    // Corporate specific
    companyName: "",
    attendeeCount: "25-50 People",
    eventDuration: "Half-Day (3-4 Hours)",
    preferredGames: "Snooker & Pool Tournament",

    // VIP specific
    membershipPlan: "Gold Cue Pass (15% Off Off-Peak + Priority Booking)",
    primaryGame: "Snooker & Pool",
  });
  const [bookingSuccess, setBookingSuccess] = useState(false);

  // Scroll listener for sticky glass header
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Filter Activities
  const filteredActivities =
    activeCategory === "all"
      ? ACTIVITIES
      : ACTIVITIES.filter((act) => act.category === activeCategory);

  // Filter Food
  const filteredFood =
    foodCategory === "all"
      ? FOOD_ITEMS
      : FOOD_ITEMS.filter((item) => item.category === foodCategory);

  // Modal open handler with activity / service pre-selection
  const handleOpenBooking = (
    activityTitle?: string,
    activityId?: string,
    type: BookingServiceType = "instant"
  ) => {
    setServiceType(type);
    if (activityTitle) {
      setFormData((prev) => ({ ...prev, activity: activityTitle }));
    }
    if (activityId) {
      setSelectedActivityId(activityId);
    }
    setIsModalOpen(true);
    setBookingSuccess(false);
  };

  // WhatsApp Submission Builder
  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    let messageLines: string[] = [];

    if (serviceType === "instant") {
      const selectedAct = ACTIVITIES.find((a) => a.title === formData.activity);
      const hourlyRate = selectedAct ? selectedAct.price : 800;
      const estTotal = hourlyRate * Number(formData.duration || 1);

      messageLines = [
        "Hi Club 24! I want to reserve a table/slot:",
        "",
        "- Service: Instant Table Reservation",
        `- Game/Facility: ${formData.activity}`,
        `- Name: ${formData.name}`,
        `- Phone: ${formData.phone}`,
        `- Date: ${formData.date}`,
        `- Time Slot: ${formData.time}`,
        `- Players: ${formData.players}`,
        `- Duration: ${formData.duration} hour(s)`,
        `- Est. Rate: Rs. ${estTotal.toLocaleString()}`,
        formData.specialRequests ? `- Special Request: ${formData.specialRequests}` : "",
        "",
        "Please confirm slot availability. Thank you!",
      ];
    } else if (serviceType === "birthday") {
      messageLines = [
        "Hi Club 24! I want to inquire about a Squad & Birthday Package:",
        "",
        "- Service: Squad & Birthday Packages",
        `- Name: ${formData.name}`,
        `- Phone: ${formData.phone}`,
        `- Group Size: ${formData.groupSize}`,
        `- Package Tier: ${formData.packageTier}`,
        `- Preferred Date: ${formData.date}`,
        `- Preferred Time: ${formData.time}`,
        formData.specialRequests ? `- Setup Notes: ${formData.specialRequests}` : "",
        "",
        "Please send package details & pricing. Thank you!",
      ];
    } else if (serviceType === "corporate") {
      messageLines = [
        "Hi Club 24! I want to inquire about hosting a Corporate Event / Tournament:",
        "",
        "- Service: Corporate Tournaments & Events",
        `- Name: ${formData.name}`,
        `- Phone: ${formData.phone}`,
        `- Company Name: ${formData.companyName}`,
        `- Attendee Count: ${formData.attendeeCount}`,
        `- Event Duration: ${formData.eventDuration}`,
        `- Preferred Games: ${formData.preferredGames}`,
        `- Proposed Date: ${formData.date}`,
        formData.specialRequests ? `- Event Notes: ${formData.specialRequests}` : "",
        "",
        "Please provide a custom event proposal & quotation. Thank you!",
      ];
    } else if (serviceType === "vip") {
      messageLines = [
        "Hi Club 24! I want to apply for VIP Membership:",
        "",
        "- Service: Club 24 VIP Membership",
        `- Name: ${formData.name}`,
        `- Phone: ${formData.phone}`,
        `- Membership Plan: ${formData.membershipPlan}`,
        `- Primary Game: ${formData.primaryGame}`,
        `- Preferred Start Date: ${formData.date}`,
        formData.specialRequests ? `- Member Notes: ${formData.specialRequests}` : "",
        "",
        "Please guide me through membership registration & perks. Thank you!",
      ];
    }

    const rawMessage = messageLines
      .filter(Boolean)
      .join("\n")
      .replace(/[\u2013\u2014]/g, "-")
      .replace(/\u00A0/g, " ");

    const encodedMessage = encodeURIComponent(rawMessage);
    const whatsappUrl = `https://wa.me/923052201777?text=${encodedMessage}`;

    // Mark success state and open WhatsApp in a new tab
    setBookingSuccess(true);
    setTimeout(() => {
      window.open(whatsappUrl, "_blank");
    }, 400);
  };

  return (
    <div className="min-h-screen bg-[#050505] text-[#ededed] font-sans antialiased overflow-x-hidden selection:bg-[#FF1E27] selection:text-white">
      {/* Top Live Ticker Bar */}
      <div className="bg-[#0b0c10] border-b border-white/5 py-1.5 px-4 text-xs font-medium text-zinc-400">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1.5 text-emerald-400 font-semibold bg-emerald-950/60 border border-emerald-500/30 px-2 py-0.5 rounded-full text-[11px] animate-pulse">
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              LIVE NOW • OPEN 24/7
            </span>
            <span className="hidden sm:inline text-zinc-400">
              📍 Star Home, Shop No. 03, Main Shaheed-e-Millat Road, Karachi
            </span>
          </div>
          <div className="flex items-center gap-4 text-zinc-300">
            <a
              href="tel:03052201777"
              className="flex items-center gap-1.5 hover:text-[#FF1E27] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#FF1E27]" />
              <span className="font-semibold">0305 2201777</span>
            </a>
            <span className="text-zinc-600 hidden md:inline">|</span>
            <a
              href="https://www.instagram.com/club24.pk"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex items-center gap-1 text-zinc-400 hover:text-white transition-colors"
            >
              <span>@club24.pk</span>
            </a>
          </div>
        </div>
      </div>

      {/* Sticky Glassmorphic Header / Navbar */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          scrolled
            ? "bg-[#08080a]/90 backdrop-blur-xl border-b border-white/10 shadow-2xl py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand / Logo Component */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="relative flex items-center justify-center w-11 h-11 rounded-xl bg-gradient-to-br from-[#1b1c22] to-[#0d0e12] border border-white/15 group-hover:border-[#FF1E27]/80 transition-all shadow-lg group-hover:shadow-[0_0_20px_rgba(255,30,39,0.3)]">
              <span className="font-black italic text-lg tracking-tighter text-white">
                C<span className="text-[#FF1E27]">24</span>
              </span>
              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-[#FF1E27] ring-2 ring-[#050505] animate-ping"></span>
              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-[#FF1E27] ring-2 ring-[#050505]"></span>
            </div>
            <div className="flex flex-col">
              <div className="flex items-baseline tracking-tight font-black uppercase text-xl leading-none">
                <span className="text-white italic tracking-wider">CLUB</span>
                <span className="text-[#FF1E27] ml-1 text-2xl font-black italic">24</span>
              </div>
              <span className="text-[9px] font-bold tracking-[0.28em] text-red-500 uppercase mt-0.5">
                HIGH SCORES & HOT MEALS
              </span>
            </div>
          </a>

          {/* Center Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-semibold tracking-wide">
            <a
              href="#facilities"
              className="text-zinc-300 hover:text-white transition-colors relative hover:after:w-full after:w-0 after:h-[2px] after:bg-[#FF1E27] after:absolute after:-bottom-1 after:left-0 after:transition-all"
            >
              Facilities & Games
            </a>
            <a
              href="#rates"
              className="text-zinc-300 hover:text-white transition-colors relative hover:after:w-full after:w-0 after:h-[2px] after:bg-[#FF1E27] after:absolute after:-bottom-1 after:left-0 after:transition-all"
            >
              Official Rates
            </a>
            <a
              href="#vip-suites"
              className="text-zinc-300 hover:text-white transition-colors relative hover:after:w-full after:w-0 after:h-[2px] after:bg-[#FF1E27] after:absolute after:-bottom-1 after:left-0 after:transition-all"
            >
              VIP Suites
            </a>
            <a
              href="#cafe"
              className="text-zinc-300 hover:text-white transition-colors relative hover:after:w-full after:w-0 after:h-[2px] after:bg-[#FF1E27] after:absolute after:-bottom-1 after:left-0 after:transition-all"
            >
              Hot Meals Café
            </a>
            <a
              href="#experience"
              className="text-zinc-300 hover:text-white transition-colors relative hover:after:w-full after:w-0 after:h-[2px] after:bg-[#FF1E27] after:absolute after:-bottom-1 after:left-0 after:transition-all"
            >
              Packages & Events
            </a>
            <a
              href="#location"
              className="text-zinc-300 hover:text-white transition-colors relative hover:after:w-full after:w-0 after:h-[2px] after:bg-[#FF1E27] after:absolute after:-bottom-1 after:left-0 after:transition-all"
            >
              Location & Map
            </a>
          </nav>

          {/* Right Action CTA */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={() => handleOpenBooking()}
              className="relative group overflow-hidden rounded-xl bg-gradient-to-r from-[#FF1E27] to-[#D6131C] px-5 py-2.5 text-sm font-bold text-white shadow-[0_0_25px_rgba(255,30,39,0.4)] hover:shadow-[0_0_35px_rgba(255,30,39,0.7)] transition-all duration-300 transform active:scale-95 flex items-center gap-2"
            >
              <span className="relative z-10">Book Table</span>
              <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" />
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => handleOpenBooking()}
              className="bg-[#FF1E27] text-white text-xs font-bold px-3 py-1.5 rounded-lg sm:hidden shadow-[0_0_15px_rgba(255,30,39,0.4)]"
            >
              Book
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-zinc-900 border border-white/10 text-zinc-300 hover:text-white"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Slide-Out Drawer Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden fixed inset-x-0 top-[65px] bg-[#09090c]/98 backdrop-blur-2xl border-b border-white/15 p-6 shadow-2xl transition-all duration-300 animate-fadeIn">
            <div className="flex flex-col gap-4 text-base font-semibold">
              <a
                href="#facilities"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 border-b border-white/5 hover:text-[#FF1E27] flex items-center justify-between"
              >
                <span>Facilities & Games</span>
                <ChevronRight className="w-4 h-4 text-zinc-500" />
              </a>
              <a
                href="#rates"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 border-b border-white/5 hover:text-[#FF1E27] flex items-center justify-between"
              >
                <span>Official Price Rates</span>
                <ChevronRight className="w-4 h-4 text-zinc-500" />
              </a>
              <a
                href="#vip-suites"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 border-b border-white/5 hover:text-[#FF1E27] flex items-center justify-between"
              >
                <span>Private VIP Suites</span>
                <ChevronRight className="w-4 h-4 text-zinc-500" />
              </a>
              <a
                href="#cafe"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 border-b border-white/5 hover:text-[#FF1E27] flex items-center justify-between"
              >
                <span>Hot Meals & Café</span>
                <ChevronRight className="w-4 h-4 text-zinc-500" />
              </a>
              <a
                href="#experience"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 border-b border-white/5 hover:text-[#FF1E27] flex items-center justify-between"
              >
                <span>Party & Corporate Packages</span>
                <ChevronRight className="w-4 h-4 text-zinc-500" />
              </a>
              <a
                href="#location"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 border-b border-white/5 hover:text-[#FF1E27] flex items-center justify-between"
              >
                <span>Location & Contact</span>
                <ChevronRight className="w-4 h-4 text-zinc-500" />
              </a>

              <div className="pt-2 flex flex-col gap-3">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    handleOpenBooking();
                  }}
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-[#FF1E27] to-[#D6131C] text-white font-bold text-center shadow-[0_0_20px_rgba(255,30,39,0.4)]"
                >
                  Reserve Your Table / Slot
                </button>
                <a
                  href="https://wa.me/923052201777?text=Hi%20Club%2024,%20I%20want%20to%20inquire%20about%20booking"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 rounded-xl bg-emerald-600/20 border border-emerald-500/40 text-emerald-400 font-bold text-center flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* HERO SECTION */}
      <section className="relative pt-8 pb-20 md:pt-16 md:pb-32 overflow-hidden">
        {/* Ambient Neon Glows & Grids */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-red-600/15 rounded-full blur-[140px] pointer-events-none"></div>
        <div className="absolute top-10 right-10 w-[350px] h-[350px] bg-cyan-600/10 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-zinc-900/90 border border-red-500/40 shadow-[0_0_20px_rgba(255,30,39,0.25)] mb-6 animate-pulse">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500"></span>
              <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-white">
                🔴 LIVE NOW • OPEN 24/7 • SHAHEED-E-MILLAT ROAD, KARACHI
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase tracking-tight text-white leading-[0.95] mb-6">
              HIGH SCORES <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-zinc-400">
                &amp;
              </span>{" "}
              <span className="text-[#FF1E27] drop-shadow-[0_0_35px_rgba(255,30,39,0.5)]">
                HOT MEALS
              </span>
            </h1>

            {/* Sub-headline */}
            <p className="text-base sm:text-lg md:text-xl text-zinc-300 max-w-3xl leading-relaxed mb-10 font-normal">
              Karachi&apos;s premier <span className="text-white font-semibold">24/7 indoor sports arena &amp; gaming lounge</span>. Where tournament-grade snooker, high-octane racing cockpits, soundproofed 4K PS5 suites, American pool, and late-night hot dining collide under one roof.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
              <button
                onClick={() => handleOpenBooking()}
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-[#FF1E27] to-[#D6131C] text-white font-black text-base uppercase tracking-wider shadow-[0_0_30px_rgba(255,30,39,0.5)] hover:shadow-[0_0_45px_rgba(255,30,39,0.8)] hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 group"
              >
                <span>Reserve A Slot</span>
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href="#rates"
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-zinc-900/80 hover:bg-zinc-800/90 text-zinc-200 hover:text-white font-bold text-base uppercase tracking-wider border border-white/15 hover:border-red-500/50 transition-all flex items-center justify-center gap-2"
              >
                <span>View All Rates</span>
                <ChevronDown className="w-4 h-4 text-red-500" />
              </a>

              <a
                href="https://wa.me/923052201777?text=Hi%20Club%2024,%20I'd%20like%20to%20inquire%20about%20booking%20a%20table%20tonight."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-4 rounded-xl bg-emerald-600/15 hover:bg-emerald-600/30 text-emerald-400 font-bold text-base border border-emerald-500/40 transition-all flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                <span>WhatsApp Us</span>
              </a>
            </div>

            {/* Hero Stats Bar */}
            <div className="mt-14 pt-10 border-t border-white/10 w-full grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 text-center">
              <div className="flex flex-col items-center">
                <span className="text-3xl sm:text-4xl font-black text-[#FF1E27] tracking-tight">
                  24/7
                </span>
                <span className="text-xs sm:text-sm font-semibold text-zinc-400 mt-1 uppercase tracking-wider">
                  Non-Stop Action
                </span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                  8+
                </span>
                <span className="text-xs sm:text-sm font-semibold text-zinc-400 mt-1 uppercase tracking-wider">
                  Gaming Zones
                </span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-3xl sm:text-4xl font-black text-[#FF1E27] tracking-tight">
                  4K HDR
                </span>
                <span className="text-xs sm:text-sm font-semibold text-zinc-400 mt-1 uppercase tracking-wider">
                  VIP PS5 Suites
                </span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                  100%
                </span>
                <span className="text-xs sm:text-sm font-semibold text-zinc-400 mt-1 uppercase tracking-wider">
                  Safe &amp; Family Friendly
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CORE FACILITIES & OFFICIAL PRICE GRID (EXACT RATES) */}
      <section id="rates" className="py-20 bg-[#09090b] relative border-t border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-red-600/10 border border-red-500/30 text-red-400 text-xs font-bold uppercase tracking-widest mb-3">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Verified Rates &amp; Equipment</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-black uppercase text-white tracking-tight">
                Official Price List <span className="text-[#FF1E27]">&amp;</span> Facilities
              </h2>
              <p className="text-zinc-400 mt-2 text-sm sm:text-base max-w-2xl">
                Tournament-grade tables, high-spec gaming rigs, and soundproof private lounges. Transparent hourly rates with zero hidden charges.
              </p>
            </div>

            {/* Category Filter Tabs */}
            <div className="flex flex-wrap gap-2">
              {[
                { id: "all", label: "All Activities" },
                { id: "vip", label: "VIP Rooms" },
                { id: "cues", label: "Snooker & Pool" },
                { id: "racing", label: "Sim Racing" },
                { id: "table", label: "Table Tennis" },
                { id: "classic", label: "Classic Games" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveCategory(tab.id)}
                  className={`px-3.5 py-2 rounded-lg text-xs sm:text-sm font-bold uppercase tracking-wider transition-all ${
                    activeCategory === tab.id
                      ? "bg-[#FF1E27] text-white shadow-[0_0_15px_rgba(255,30,39,0.4)]"
                      : "bg-zinc-900/90 text-zinc-400 hover:text-white border border-white/10"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Interactive Activity Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredActivities.map((act) => (
              <div
                key={act.id}
                className="group relative rounded-2xl bg-[#121214] border border-white/10 hover:border-red-600/50 transition-all duration-300 hover:-translate-y-1.5 shadow-xl hover:shadow-[0_12px_35px_rgba(0,0,0,0.8),0_0_25px_rgba(255,30,39,0.2)] flex flex-col overflow-hidden"
              >
                {/* Image Container with Zoom effect */}
                <div className="relative h-48 w-full overflow-hidden bg-zinc-950">
                  <Image
                    src={act.image}
                    alt={act.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-85 group-hover:opacity-100"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#121214] via-transparent to-black/40"></div>

                  {/* Badge */}
                  <div className="absolute top-3 left-3">
                    <span
                      className={`text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-md border backdrop-blur-md ${act.badgeColor}`}
                    >
                      {act.tag}
                    </span>
                  </div>

                  {/* Hourly Rate Chip */}
                  <div className="absolute bottom-3 right-3 bg-black/80 backdrop-blur-md border border-red-500/40 px-3 py-1 rounded-lg">
                    <span className="text-xs font-semibold text-zinc-400">Rs. </span>
                    <span className="text-lg font-black text-white">{act.price.toLocaleString()}</span>
                    <span className="text-xs text-red-400 font-bold"> /{act.rateUnit}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-white group-hover:text-[#FF1E27] transition-colors leading-snug mb-2">
                      {act.title}
                    </h3>
                    <p className="text-xs text-zinc-400 leading-relaxed mb-4 line-clamp-2">
                      {act.description}
                    </p>

                    {/* Specs Bullet Points */}
                    <div className="space-y-1.5 mb-5 border-t border-white/5 pt-3">
                      {act.specs.map((spec, i) => (
                        <div key={i} className="flex items-start gap-2 text-[11px] text-zinc-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-red-500 shrink-0 mt-0.5" />
                          <span className="line-clamp-1">{spec}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Book Button */}
                  <button
                    onClick={() => handleOpenBooking(act.title, act.id)}
                    className="w-full py-2.5 rounded-xl bg-zinc-800/80 hover:bg-[#FF1E27] text-zinc-200 hover:text-white font-bold text-xs uppercase tracking-wider transition-all duration-300 border border-white/10 hover:border-transparent flex items-center justify-center gap-2 group/btn shadow-md hover:shadow-[0_0_20px_rgba(255,30,39,0.4)]"
                  >
                    <span>Book This Slot</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VIP SUITES & PRIVATE ROOMS SPOTLIGHT */}
      <section id="vip-suites" className="py-24 bg-[#050505] relative overflow-hidden">
        {/* Background glow */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-red-600/10 rounded-full blur-[130px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-widest mb-4">
                <Award className="w-3.5 h-3.5" />
                <span>Executive &amp; Squad Privacy</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-black uppercase text-white tracking-tight leading-tight mb-6">
                Private VIP Rooms <br />
                <span className="text-[#FF1E27]">Zero Distractions.</span>
              </h2>
              <p className="text-zinc-300 text-base leading-relaxed mb-6">
                Whether you’re planning a serious snooker tournament with friends or an intense FIFA / Tekken marathon with your squad, our soundproof private suites offer complete luxury and exclusivity.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3.5 p-4 rounded-xl bg-zinc-900/60 border border-white/10">
                  <div className="p-2.5 rounded-lg bg-red-500/10 text-red-500 border border-red-500/30 shrink-0">
                    <VolumeX className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">100% Acoustically Soundproofed</h4>
                    <p className="text-xs text-zinc-400 mt-0.5">
                      Scream, celebrate, and strategize without holding back. Total privacy for you and your friends.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-4 rounded-xl bg-zinc-900/60 border border-white/10">
                  <div className="p-2.5 rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 shrink-0">
                    <Tv className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">65&quot; 4K 120Hz Displays &amp; Recliners</h4>
                    <p className="text-xs text-zinc-400 mt-0.5">
                      Low latency HDR OLED panels, dual Sony wireless controllers, and luxury leather seating.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-4 rounded-xl bg-zinc-900/60 border border-white/10">
                  <div className="p-2.5 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 shrink-0">
                    <Coffee className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">Direct Café In-Room Waiter Service</h4>
                    <p className="text-xs text-zinc-400 mt-0.5">
                      Order hot smash burgers, loaded fries, and specialty mocktails delivered right to your suite.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <button
                  onClick={() => handleOpenBooking("PS5 VIP Private Room", "ps5-vip")}
                  className="px-6 py-3.5 rounded-xl bg-[#FF1E27] hover:bg-red-700 text-white font-black text-xs sm:text-sm uppercase tracking-wider shadow-[0_0_25px_rgba(255,30,39,0.4)] transition-all"
                >
                  Book PS5 VIP Suite (Rs. 900/hr)
                </button>
                <button
                  onClick={() => handleOpenBooking("Private Snooker Suite", "private-snooker")}
                  className="px-6 py-3.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-200 border border-white/15 font-bold text-xs sm:text-sm uppercase tracking-wider transition-all"
                >
                  Book Snooker Suite (Rs. 1,200/hr)
                </button>
              </div>
            </div>

            {/* Right Interactive Image Showcase */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden border border-white/15 shadow-2xl">
                <div className="relative h-[380px] sm:h-[450px] w-full">
                  <Image
                    src="https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?auto=format&fit=crop&w=1000&q=80"
                    alt="Club 24 VIP Private Gaming Room"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent"></div>
                </div>

                <div className="absolute bottom-6 left-6 right-6 p-5 rounded-xl bg-black/80 backdrop-blur-xl border border-white/10 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-black uppercase text-red-500 tracking-widest">
                      VIP Lounge Suite
                    </span>
                    <h3 className="text-base sm:text-lg font-bold text-white">
                      Tournament Ready &amp; Private
                    </h3>
                    <p className="text-xs text-zinc-400">Shaheed-e-Millat Road • Open 24/7</p>
                  </div>
                  <div className="text-right">
                    <span className="text-xs text-zinc-400">Starting from</span>
                    <div className="text-lg sm:text-xl font-black text-[#FF1E27]">Rs. 900/hr</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* "HOT MEALS & FUEL" CAFÉ SECTION */}
      <section id="cafe" className="py-24 bg-[#0a0a0c] relative border-t border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-red-600/10 border border-red-500/30 text-red-400 text-xs font-bold uppercase tracking-widest mb-3">
                <Flame className="w-3.5 h-3.5" />
                <span>The 24/7 Kitchen &amp; Chill Bar</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-black uppercase text-white tracking-tight">
                Hot Meals <span className="text-[#FF1E27]">&amp;</span> Fuel
              </h2>
              <p className="text-zinc-400 mt-2 text-sm sm:text-base max-w-2xl">
                Refuel between matches without breaking your streak. Gourmet smash burgers, sizzling loaded fries, wings, and specialty coffees made fresh round the clock.
              </p>
            </div>

            {/* Food Filter Tabs */}
            <div className="flex flex-wrap gap-2">
              {["all", "Burgers", "Loaded Fries", "Wings & Bites", "Drinks & Coffee"].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFoodCategory(cat)}
                  className={`px-3.5 py-2 rounded-lg text-xs sm:text-sm font-bold uppercase tracking-wider transition-all ${
                    foodCategory === cat
                      ? "bg-[#FF1E27] text-white shadow-[0_0_15px_rgba(255,30,39,0.4)]"
                      : "bg-zinc-900/90 text-zinc-400 hover:text-white border border-white/10"
                  }`}
                >
                  {cat === "all" ? "All Items" : cat}
                </button>
              ))}
            </div>
          </div>

          {/* Food Menu Grid with Hero Promo Card */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Promo Banner / Image (4 cols) */}
            <div className="lg:col-span-4 relative rounded-2xl overflow-hidden border border-white/10 group min-h-[350px]">
              <Image
                src="/images/Club 24 Double Smash Beef Burger.jpg"
                alt="Club 24 Gourmet Burgers & Hot Meals"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <span className="text-[10px] font-black uppercase tracking-widest text-[#FF1E27] bg-black/60 px-2.5 py-1 rounded border border-red-500/30">
                  Made Fresh 24/7
                </span>
                <h3 className="text-2xl font-black uppercase text-white mt-2 leading-tight">
                  High Scores &amp; Hot Meals
                </h3>
                <p className="text-xs text-zinc-300 mt-1">
                  Food served directly to your snooker table, PS5 room, or lounge seating.
                </p>
              </div>
            </div>

            {/* Menu Items Grid (8 cols) */}
            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {filteredFood.map((food) => (
                <div
                  key={food.id}
                  className="rounded-xl bg-[#121214] border border-white/10 hover:border-red-500/40 transition-all duration-200 flex flex-col justify-between group overflow-hidden"
                >
                  {/* Food Thumbnail */}
                  <div className="relative h-36 w-full overflow-hidden bg-zinc-950">
                    <Image
                      src={food.image}
                      alt={food.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                      sizes="(max-width: 640px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#121214] via-transparent to-black/20" />
                    {food.tag && (
                      <span className="absolute top-2.5 left-2.5 text-[10px] font-bold text-red-400 bg-black/70 backdrop-blur-sm px-2 py-0.5 rounded border border-red-500/30">
                        {food.tag}
                      </span>
                    )}
                    <div className="absolute bottom-2.5 right-2.5 bg-black/70 backdrop-blur-sm px-2.5 py-1 rounded-lg border border-white/10">
                      <span className="text-sm font-black text-white">Rs. {food.price}</span>
                    </div>
                  </div>

                  <div className="p-4 flex flex-col flex-1 justify-between">
                    <div>
                      <div className="flex items-center gap-2 mb-1.5">
                        <h4 className="text-sm font-bold text-white group-hover:text-[#FF1E27] transition-colors">
                          {food.name}
                        </h4>
                        {food.spicy && (
                          <span className="text-xs text-red-400" title="Spicy">
                            🌶️
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-zinc-400 leading-relaxed mb-3">
                        {food.description}
                      </p>
                    </div>

                    <div className="flex items-center justify-between pt-2 border-t border-white/5 text-[11px]">
                      <span className="text-zinc-500 uppercase font-semibold">
                        {food.category}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* EXPERIENCE PILLARS & PARTY PACKAGES */}
      <section id="experience" className="py-24 bg-[#050505] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-red-600/10 border border-red-500/30 text-red-400 text-xs font-bold uppercase tracking-widest mb-3">
              <Compass className="w-3.5 h-3.5" />
              <span>Plan Your Visit</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black uppercase text-white tracking-tight">
              More Than A Gaming Lounge
            </h2>
            <p className="text-zinc-400 mt-3 text-sm sm:text-base">
              From casual friend showdowns to private floor takeovers and corporate tournaments, we build unforgettable entertainment experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {EXPERIENCE_PILLARS.map((pillar, index) => {
              const IconComp = pillar.icon;
              return (
                <div
                  key={index}
                  className="p-6 rounded-2xl bg-[#111113] border border-white/10 hover:border-red-500/50 transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between group shadow-lg hover:shadow-[0_10px_30px_rgba(255,30,39,0.15)]"
                >
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-12 h-12 rounded-xl bg-red-600/10 border border-red-500/30 flex items-center justify-center text-[#FF1E27] group-hover:scale-110 transition-transform">
                        <IconComp className="w-6 h-6" />
                      </div>
                      <span className="text-[10px] font-black uppercase tracking-wider text-red-400 bg-red-950/60 px-2.5 py-1 rounded-full border border-red-500/30">
                        {pillar.badge}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-white group-hover:text-[#FF1E27] transition-colors mb-2">
                      {pillar.title}
                    </h3>
                    <p className="text-xs text-zinc-400 leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>

                  <button
                    onClick={() => handleOpenBooking(undefined, undefined, pillar.id)}
                    className="mt-6 text-xs font-bold text-red-400 group-hover:text-white flex items-center gap-1.5 transition-colors"
                  >
                    <span>Inquire Now</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE CLUB 24 / AMENITIES GRID */}
      <section className="py-20 bg-[#09090c] border-t border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-2xl sm:text-4xl font-black uppercase text-white tracking-tight">
              The Club 24 Advantage
            </h2>
            <p className="text-zinc-400 text-sm mt-2">
              Purpose-built facilities engineered for elite performance, total comfort, and uninterrupted fun.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {AMENITIES.map((amenity, i) => {
              const Icon = amenity.icon;
              return (
                <div
                  key={i}
                  className="p-5 rounded-xl bg-[#121214] border border-white/5 hover:border-white/20 transition-all flex flex-col items-center text-center"
                >
                  <div className="w-10 h-10 rounded-lg bg-zinc-800/80 text-[#FF1E27] flex items-center justify-center mb-3">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h4 className="text-sm font-bold text-white mb-1">{amenity.title}</h4>
                  <p className="text-[11px] text-zinc-400 leading-tight">{amenity.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CUSTOMER TESTIMONIALS & SOCIAL PROOF */}
      <section className="py-24 bg-[#050505] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-600/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase tracking-widest mb-3">
              <Star className="w-3.5 h-3.5 fill-emerald-400" />
              <span>5-Star Rated Experience</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black uppercase text-white tracking-tight">
              Loved By Karachi&apos;s Gamers
            </h2>
            <p className="text-zinc-400 mt-3 text-sm sm:text-base">
              Real feedback from cue masters, racing enthusiasts, and squads who make Club 24 their second home.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((test) => (
              <div
                key={test.id}
                className="p-6 rounded-2xl bg-[#121214] border border-white/10 flex flex-col justify-between relative group hover:border-red-500/40 transition-all"
              >
                <div>
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(test.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <h4 className="text-base font-bold text-white mb-2">&quot;{test.highlight}&quot;</h4>
                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mb-6">
                    {test.comment}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-white/10">
                  <div className="flex items-center gap-3">
                    <div className="relative w-10 h-10 rounded-full overflow-hidden border border-red-500/40">
                      <Image
                        src={test.avatar}
                        alt={test.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white">{test.name}</div>
                      <div className="text-[10px] text-zinc-400">{test.role}</div>
                    </div>
                  </div>
                  <span className="text-[10px] font-bold text-red-400 bg-red-950/40 px-2 py-0.5 rounded border border-red-500/20">
                    {test.gamePlayed}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LOCATION, MAP & VISIT DETAILS */}
      <section id="location" className="py-24 bg-[#09090c] border-t border-white/5 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Location Details (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-red-600/10 border border-red-500/30 text-red-400 text-xs font-bold uppercase tracking-widest mb-3">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>Prime Karachi Location</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-black uppercase text-white tracking-tight">
                  Visit Us Anytime <br />
                  <span className="text-[#FF1E27]">Open 24/7</span>
                </h2>
                <p className="text-zinc-400 mt-2 text-sm">
                  Conveniently situated on Main Shaheed-e-Millat Road near Medicare Hospital and Star Flyover. Easy access with dedicated parking.
                </p>
              </div>

              {/* Info Cards */}
              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-[#121214] border border-white/10 flex items-start gap-3.5">
                  <div className="p-2.5 rounded-lg bg-red-600/10 text-[#FF1E27] shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase text-zinc-400">Physical Address</h4>
                    <p className="text-sm font-semibold text-white mt-0.5">
                      Shop No. 03, Star Home, Main Shaheed-e-Millat Road (Near Medicare Hospital / Star Flyover), Karachi, Pakistan.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-[#121214] border border-white/10 flex items-start gap-3.5">
                  <div className="p-2.5 rounded-lg bg-emerald-600/10 text-emerald-400 shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase text-zinc-400">Direct Call &amp; WhatsApp</h4>
                    <p className="text-sm font-bold text-white mt-0.5">
                      0305 2201777 <span className="text-zinc-400 text-xs font-normal">(+92 305 2201777)</span>
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-[#121214] border border-white/10 flex items-start gap-3.5">
                  <div className="p-2.5 rounded-lg bg-cyan-600/10 text-cyan-400 shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase text-zinc-400">Operating Schedule</h4>
                    <p className="text-sm font-semibold text-white mt-0.5">
                      Open 24 Hours / 7 Days a Week (All Holidays Included)
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4 pt-2">
                <a
                  href="https://maps.google.com/?q=Shaheed-e-Millat+Road+Karachi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 px-4 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-white text-xs sm:text-sm font-bold text-center border border-white/15 flex items-center justify-center gap-2"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Open in Google Maps</span>
                </a>
                <button
                  onClick={() => handleOpenBooking()}
                  className="flex-1 py-3 px-4 rounded-xl bg-[#FF1E27] hover:bg-red-700 text-white text-xs sm:text-sm font-bold text-center shadow-[0_0_20px_rgba(255,30,39,0.4)]"
                >
                  Book A Slot
                </button>
              </div>
            </div>

            {/* Google Map Embed (7 cols) */}
            <div className="lg:col-span-7 rounded-2xl overflow-hidden border border-white/15 shadow-2xl bg-zinc-950 h-[380px] lg:h-[480px] relative">
              <iframe
                title="Club 24 Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14479.595679268612!2d67.0600!3d24.8700!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33eedb556fdb7%3A0x9a888c3a5ce39968!2sShaheed-e-Millat%20Rd%2C%20Karachi!5e0!3m2!1sen!2spk!4v1700000000000!5m2!1sen!2spk"
                width="100%"
                height="100%"
                style={{ border: 0, filter: "invert(90%) hue-rotate(180deg)" }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>

              <div className="absolute top-4 left-4 bg-black/85 backdrop-blur-md px-3.5 py-2 rounded-xl border border-white/15 text-xs font-semibold text-white flex items-center gap-2 shadow-lg">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-ping"></span>
                <span>CLUB 24 • Shaheed-e-Millat Rd</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COMPREHENSIVE FOOTER */}
      <footer className="bg-[#040405] text-zinc-400 border-t border-white/10 pt-16 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
            {/* Col 1: Brand (2 cols) */}
            <div className="lg:col-span-2 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#1b1c22] to-[#0d0e12] border border-white/20 flex items-center justify-center font-black italic text-lg text-white">
                  C<span className="text-[#FF1E27]">24</span>
                </div>
                <div>
                  <div className="text-xl font-black italic uppercase text-white">
                    CLUB <span className="text-[#FF1E27]">24</span>
                  </div>
                  <div className="text-[9px] font-bold tracking-[0.25em] text-red-500 uppercase">
                    HIGH SCORES &amp; HOT MEALS
                  </div>
                </div>
              </div>

              <p className="text-xs text-zinc-400 leading-relaxed max-w-sm">
                Karachi&apos;s ultimate 24/7 sports arena and gaming lounge. Professional snooker, racing simulators, private PS5 suites, table tennis, foosball, and late-night hot kitchen.
              </p>

              <div className="pt-2">
                <span className="inline-flex items-center gap-2 text-xs font-bold text-emerald-400 bg-emerald-950/60 border border-emerald-500/30 px-3 py-1 rounded-full">
                  <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                  Open 24/7 • Non-Stop Service
                </span>
              </div>
            </div>

            {/* Col 2: Facilities */}
            <div>
              <h4 className="text-sm font-bold uppercase text-white tracking-wider mb-4">
                Gaming &amp; Sports
              </h4>
              <ul className="space-y-2.5 text-xs">
                <li>
                  <a
                    href="#rates"
                    onClick={() => handleOpenBooking("Racing Simulator Cockpit", "racing-simulator")}
                    className="hover:text-[#FF1E27] transition-colors"
                  >
                    Racing Simulator (Rs. 1,200/hr)
                  </a>
                </li>
                <li>
                  <a
                    href="#rates"
                    onClick={() => handleOpenBooking("Private Snooker Suite", "private-snooker")}
                    className="hover:text-[#FF1E27] transition-colors"
                  >
                    Private Snooker Suite (Rs. 1,200/hr)
                  </a>
                </li>
                <li>
                  <a
                    href="#rates"
                    onClick={() => handleOpenBooking("PS5 VIP Private Room", "ps5-vip")}
                    className="hover:text-[#FF1E27] transition-colors"
                  >
                    PS5 VIP 4K Room (Rs. 900/hr)
                  </a>
                </li>
                <li>
                  <a
                    href="#rates"
                    onClick={() => handleOpenBooking("Snooker (Main Arena)", "snooker-hall")}
                    className="hover:text-[#FF1E27] transition-colors"
                  >
                    Snooker Arena (Rs. 800/hr)
                  </a>
                </li>
                <li>
                  <a
                    href="#rates"
                    onClick={() => handleOpenBooking("American Pool", "american-pool")}
                    className="hover:text-[#FF1E27] transition-colors"
                  >
                    American Pool (Rs. 800/hr)
                  </a>
                </li>
                <li>
                  <a
                    href="#rates"
                    onClick={() => handleOpenBooking("Table Tennis (Ping Pong)", "table-tennis")}
                    className="hover:text-[#FF1E27] transition-colors"
                  >
                    Table Tennis (Rs. 700/hr)
                  </a>
                </li>
                <li>
                  <a
                    href="#rates"
                    onClick={() => handleOpenBooking("Foosball Championship", "foosball")}
                    className="hover:text-[#FF1E27] transition-colors"
                  >
                    Foosball &amp; Carrom (Rs. 500/hr)
                  </a>
                </li>
              </ul>
            </div>

            {/* Col 3: Quick Links */}
            <div>
              <h4 className="text-sm font-bold uppercase text-white tracking-wider mb-4">
                Quick Links
              </h4>
              <ul className="space-y-2.5 text-xs">
                <li>
                  <a href="#rates" className="hover:text-white transition-colors">
                    Official Rates Grid
                  </a>
                </li>
                <li>
                  <a href="#vip-suites" className="hover:text-white transition-colors">
                    Private VIP Lounges
                  </a>
                </li>
                <li>
                  <a href="#cafe" className="hover:text-white transition-colors">
                    Hot Meals &amp; Café Menu
                  </a>
                </li>
                <li>
                  <a href="#experience" className="hover:text-white transition-colors">
                    Party &amp; Squad Packages
                  </a>
                </li>
                <li>
                  <a href="#location" className="hover:text-white transition-colors">
                    Google Maps Directions
                  </a>
                </li>
              </ul>
            </div>

            {/* Col 4: Connect */}
            <div>
              <h4 className="text-sm font-bold uppercase text-white tracking-wider mb-4">
                Contact &amp; Social
              </h4>
              <ul className="space-y-2.5 text-xs">
                <li className="flex items-center gap-2 text-white font-semibold">
                  <Phone className="w-4 h-4 text-[#FF1E27]" />
                  <span>0305 2201777</span>
                </li>
                <li className="flex items-center gap-2">
                  <MessageCircle className="w-4 h-4 text-emerald-400" />
                  <a
                    href="https://wa.me/923052201777"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-emerald-400"
                  >
                    WhatsApp Reservation
                  </a>
                </li>
                <li className="pt-2">
                  <a
                    href="https://www.instagram.com/club24.pk"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-zinc-900 border border-white/10 hover:border-red-500/50 text-zinc-300 hover:text-white transition-all text-xs"
                  >
                    <span>Instagram: @club24.pk</span>
                    <ExternalLink className="w-3 h-3 text-red-500" />
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Copyright Bar */}
          <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-500 gap-4">
            <div>
              &copy; 2026 <span className="text-white font-semibold">CLUB 24</span> (Karachi). All Rights Reserved.
            </div>
            <div className="flex items-center gap-6">
              <span>Main Shaheed-e-Millat Road</span>
              <span>•</span>
              <span>Open 24/7</span>
              <span>•</span>
              <span className="text-red-500 font-bold">High Scores &amp; Hot Meals</span>
            </div>
          </div>
        </div>
      </footer>

      {/* FLOATING WHATSAPP BUTTON */}
      <a
        href="https://wa.me/923052201777?text=Hi%20Club%2024,%20I%20want%20to%20book%20a%20table%20tonight!"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-400 text-white flex items-center justify-center shadow-[0_0_25px_rgba(16,185,129,0.5)] hover:scale-110 active:scale-95 transition-all duration-300 group"
      >
        <MessageCircle className="w-7 h-7" />
        <span className="absolute right-16 bg-zinc-900 text-white text-xs font-bold py-1.5 px-3 rounded-lg border border-white/10 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-xl">
          Quick WhatsApp Booking
        </span>
      </a>

      {/* INTERACTIVE BOOKING MODAL (WITH WHATSAPP REDIRECTION) */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
          <div
            className="relative w-full max-w-lg rounded-2xl bg-[#111113] border border-white/15 p-6 sm:p-8 shadow-[0_0_50px_rgba(0,0,0,0.9),0_0_30px_rgba(255,30,39,0.25)] max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-start justify-between pb-4 border-b border-white/10 mb-4">
              <div>
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FF1E27] animate-ping"></span>
                  <h3 className="text-xl font-black uppercase text-white tracking-tight">
                    {serviceType === "instant" && "Instant Table Reservation"}
                    {serviceType === "birthday" && "Squad & Birthday Packages"}
                    {serviceType === "corporate" && "Corporate Tournaments & Events"}
                    {serviceType === "vip" && "Club 24 VIP Membership"}
                  </h3>
                </div>
                <p className="text-xs text-zinc-400 mt-1">
                  Fast confirmation via WhatsApp to <span className="text-red-400 font-bold">0305 2201777</span>
                </p>
              </div>
              <button
                onClick={() => setIsModalOpen(false)}
                className="p-2 rounded-lg bg-zinc-800 text-zinc-400 hover:text-white hover:bg-zinc-700 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Service Type Switcher Tabs */}
            <div className="flex gap-1 bg-zinc-900/90 p-1 rounded-xl border border-white/10 mb-5 overflow-x-auto">
              {[
                { id: "instant", label: "Table Reservation" },
                { id: "birthday", label: "Squad & Birthday" },
                { id: "corporate", label: "Corporate Event" },
                { id: "vip", label: "VIP Membership" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setServiceType(tab.id as BookingServiceType)}
                  className={`flex-1 py-1.5 px-2 rounded-lg text-[10px] sm:text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-all ${
                    serviceType === tab.id
                      ? "bg-[#FF1E27] text-white shadow-md"
                      : "text-zinc-400 hover:text-white"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {bookingSuccess ? (
              /* Success State */
              <div className="py-8 text-center flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mb-4 animate-bounce">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-black text-white uppercase mb-2">
                  Redirecting to WhatsApp...
                </h4>
                <p className="text-xs text-zinc-400 max-w-xs mb-6">
                  Your inquiry details have been generated. Click below if WhatsApp didn&apos;t launch automatically.
                </p>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="px-6 py-2.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-white font-bold text-xs uppercase"
                >
                  Close Window
                </button>
              </div>
            ) : (
              /* Booking Form */
              <form onSubmit={handleBookingSubmit} className="space-y-4">
                {/* Full Name */}
                <div>
                  <label className="block text-xs font-bold uppercase text-zinc-300 mb-1.5">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Daniyal Khan"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-white/10 text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-[#FF1E27] transition-colors"
                  />
                </div>

                {/* Phone / WhatsApp Number */}
                <div>
                  <label className="block text-xs font-bold uppercase text-zinc-300 mb-1.5">
                    WhatsApp Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. 0300 1234567"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-white/10 text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-[#FF1E27] transition-colors"
                  />
                </div>

                {/* DYNAMIC FORM FIELDS ACCORDING TO SERVICE TYPE */}
                {serviceType === "instant" && (
                  <>
                    {/* Activity Dropdown */}
                    <div>
                      <label className="block text-xs font-bold uppercase text-zinc-300 mb-1.5">
                        Select Game / Activity *
                      </label>
                      <select
                        value={formData.activity}
                        onChange={(e) => setFormData({ ...formData, activity: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-white/10 text-white text-sm focus:outline-none focus:border-[#FF1E27] transition-colors"
                      >
                        {ACTIVITIES.map((act) => (
                          <option key={act.id} value={act.title} className="bg-zinc-900 text-white">
                            {act.title} — Rs. {act.price}/hr
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Date & Time Row */}
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold uppercase text-zinc-300 mb-1.5">
                          Date *
                        </label>
                        <input
                          type="date"
                          required
                          value={formData.date}
                          onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-white/10 text-white text-sm focus:outline-none focus:border-[#FF1E27]"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase text-zinc-300 mb-1.5">
                          Time Slot *
                        </label>
                        <input
                          type="time"
                          required
                          value={formData.time}
                          onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-white/10 text-white text-sm focus:outline-none focus:border-[#FF1E27]"
                        />
                      </div>
                    </div>

                    {/* Players & Duration */}
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold uppercase text-zinc-300 mb-1.5">
                          Players
                        </label>
                        <select
                          value={formData.players}
                          onChange={(e) => setFormData({ ...formData, players: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-white/10 text-white text-sm focus:outline-none focus:border-[#FF1E27]"
                        >
                          <option value="1">1 Player</option>
                          <option value="2">2 Players</option>
                          <option value="3-4">3 - 4 Players</option>
                          <option value="5-8">5 - 8 Players</option>
                          <option value="8+">8+ Players (Squad)</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase text-zinc-300 mb-1.5">
                          Duration
                        </label>
                        <select
                          value={formData.duration}
                          onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-white/10 text-white text-sm focus:outline-none focus:border-[#FF1E27]"
                        >
                          <option value="1">1 Hour</option>
                          <option value="2">2 Hours</option>
                          <option value="3">3 Hours</option>
                          <option value="4+">4+ Hours</option>
                        </select>
                      </div>
                    </div>

                    {/* Special Requests */}
                    <div>
                      <label className="block text-xs font-bold uppercase text-zinc-300 mb-1.5">
                        Special Requests / In-Room Café Order (Optional)
                      </label>
                      <textarea
                        rows={2}
                        placeholder="e.g. VIP room setup, order 2 smash burgers upon arrival..."
                        value={formData.specialRequests}
                        onChange={(e) => setFormData({ ...formData, specialRequests: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-zinc-900 border border-white/10 text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-[#FF1E27] resize-none"
                      ></textarea>
                    </div>
                  </>
                )}

                {serviceType === "birthday" && (
                  <>
                    {/* Group Size & Package Tier */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold uppercase text-zinc-300 mb-1.5">
                          Group Size *
                        </label>
                        <select
                          value={formData.groupSize}
                          onChange={(e) => setFormData({ ...formData, groupSize: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-white/10 text-white text-sm focus:outline-none focus:border-[#FF1E27]"
                        >
                          <option value="5-10 Guests">5 - 10 Guests</option>
                          <option value="10-20 Guests">10 - 20 Guests</option>
                          <option value="20-30 Guests">20 - 30 Guests</option>
                          <option value="30+ Guests (Full Floor)">30+ Guests (Full Floor)</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase text-zinc-300 mb-1.5">
                          Package Tier *
                        </label>
                        <select
                          value={formData.packageTier}
                          onChange={(e) => setFormData({ ...formData, packageTier: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-white/10 text-white text-sm focus:outline-none focus:border-[#FF1E27]"
                        >
                          <option value="Rookie Squad Package (Games + Soft Drinks)">Rookie Squad Package (Games + Drinks)</option>
                          <option value="Pro Party Package (Games + Smash Burgers + Drinks)">Pro Party Package (Burgers + Games)</option>
                          <option value="VIP Floor Takeover (All Access + Full Gourmet Catering)">VIP Floor Takeover (All Access)</option>
                        </select>
                      </div>
                    </div>

                    {/* Preferred Date & Time */}
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold uppercase text-zinc-300 mb-1.5">
                          Preferred Date *
                        </label>
                        <input
                          type="date"
                          required
                          value={formData.date}
                          onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-white/10 text-white text-sm focus:outline-none focus:border-[#FF1E27]"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase text-zinc-300 mb-1.5">
                          Preferred Time *
                        </label>
                        <input
                          type="time"
                          required
                          value={formData.time}
                          onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-white/10 text-white text-sm focus:outline-none focus:border-[#FF1E27]"
                        />
                      </div>
                    </div>

                    {/* Setup Notes */}
                    <div>
                      <label className="block text-xs font-bold uppercase text-zinc-300 mb-1.5">
                        Party Setup Notes &amp; Requests (Optional)
                      </label>
                      <textarea
                        rows={2}
                        placeholder="e.g. Cake cutting table setup, custom music playlist..."
                        value={formData.specialRequests}
                        onChange={(e) => setFormData({ ...formData, specialRequests: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-zinc-900 border border-white/10 text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-[#FF1E27] resize-none"
                      ></textarea>
                    </div>
                  </>
                )}

                {serviceType === "corporate" && (
                  <>
                    {/* Company Name */}
                    <div>
                      <label className="block text-xs font-bold uppercase text-zinc-300 mb-1.5">
                        Company / Organization Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Acme Corp / Tech Solutions"
                        value={formData.companyName}
                        onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-white/10 text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-[#FF1E27]"
                      />
                    </div>

                    {/* Attendee Count & Event Duration */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold uppercase text-zinc-300 mb-1.5">
                          Attendee Count *
                        </label>
                        <select
                          value={formData.attendeeCount}
                          onChange={(e) => setFormData({ ...formData, attendeeCount: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-white/10 text-white text-sm focus:outline-none focus:border-[#FF1E27]"
                        >
                          <option value="10-25 People">10 - 25 People</option>
                          <option value="25-50 People">25 - 50 People</option>
                          <option value="50-100 People">50 - 100 People</option>
                          <option value="100+ People (Full Arena)">100+ People (Full Arena)</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase text-zinc-300 mb-1.5">
                          Event Duration *
                        </label>
                        <select
                          value={formData.eventDuration}
                          onChange={(e) => setFormData({ ...formData, eventDuration: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-white/10 text-white text-sm focus:outline-none focus:border-[#FF1E27]"
                        >
                          <option value="Half-Day (3-4 Hours)">Half-Day (3-4 Hours)</option>
                          <option value="Full-Day (6-8 Hours)">Full-Day (6-8 Hours)</option>
                          <option value="Multi-Day Corporate Tournament">Multi-Day Tournament</option>
                        </select>
                      </div>
                    </div>

                    {/* Preferred Games & Event Date */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold uppercase text-zinc-300 mb-1.5">
                          Preferred Games / Setup *
                        </label>
                        <select
                          value={formData.preferredGames}
                          onChange={(e) => setFormData({ ...formData, preferredGames: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-white/10 text-white text-sm focus:outline-none focus:border-[#FF1E27]"
                        >
                          <option value="Snooker & Pool Tournament">Snooker &amp; Pool Tournament</option>
                          <option value="Esports & PS5 Championship">Esports &amp; PS5 Championship</option>
                          <option value="Sim Racing Grand Prix">Sim Racing Grand Prix</option>
                          <option value="Full Multi-Sport Arena Takeover">Full Arena Takeover</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase text-zinc-300 mb-1.5">
                          Proposed Date *
                        </label>
                        <input
                          type="date"
                          required
                          value={formData.date}
                          onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-white/10 text-white text-sm focus:outline-none focus:border-[#FF1E27]"
                        />
                      </div>
                    </div>

                    {/* Event Notes */}
                    <div>
                      <label className="block text-xs font-bold uppercase text-zinc-300 mb-1.5">
                        Catering &amp; Branding Notes (Optional)
                      </label>
                      <textarea
                        rows={2}
                        placeholder="e.g. Need live leaderboard screen, buffet lunch setup..."
                        value={formData.specialRequests}
                        onChange={(e) => setFormData({ ...formData, specialRequests: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-zinc-900 border border-white/10 text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-[#FF1E27] resize-none"
                      ></textarea>
                    </div>
                  </>
                )}

                {serviceType === "vip" && (
                  <>
                    {/* Membership Plan & Primary Game */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold uppercase text-zinc-300 mb-1.5">
                          Membership Plan *
                        </label>
                        <select
                          value={formData.membershipPlan}
                          onChange={(e) => setFormData({ ...formData, membershipPlan: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-white/10 text-white text-sm focus:outline-none focus:border-[#FF1E27]"
                        >
                          <option value="Gold Cue Pass (15% Off Off-Peak + Priority Booking)">Gold Pass (15% Off)</option>
                          <option value="Platinum VIP Pass (25% Off + VIP Room Hours + Free Drinks)">Platinum Pass (25% Off + VIP Hours)</option>
                          <option value="Diamond All-Access Pass (Unlimited Off-Peak + VIP Lounge Privileges)">Diamond Pass (All-Access)</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase text-zinc-300 mb-1.5">
                          Primary Game Focus *
                        </label>
                        <select
                          value={formData.primaryGame}
                          onChange={(e) => setFormData({ ...formData, primaryGame: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-white/10 text-white text-sm focus:outline-none focus:border-[#FF1E27]"
                        >
                          <option value="Snooker & Pool">Snooker &amp; Pool</option>
                          <option value="PS5 & Sim Racing">PS5 &amp; Sim Racing</option>
                          <option value="Table Tennis & Classics">Table Tennis &amp; Classics</option>
                          <option value="All-Rounder Gamer">All-Rounder Gamer</option>
                        </select>
                      </div>
                    </div>

                    {/* Preferred Start Date */}
                    <div>
                      <label className="block text-xs font-bold uppercase text-zinc-300 mb-1.5">
                        Preferred Start Date *
                      </label>
                      <input
                        type="date"
                        required
                        value={formData.date}
                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-white/10 text-white text-sm focus:outline-none focus:border-[#FF1E27]"
                      />
                    </div>

                    {/* Member Notes */}
                    <div>
                      <label className="block text-xs font-bold uppercase text-zinc-300 mb-1.5">
                        Member Notes / Referral Code (Optional)
                      </label>
                      <textarea
                        rows={2}
                        placeholder="e.g. Referred by member #104..."
                        value={formData.specialRequests}
                        onChange={(e) => setFormData({ ...formData, specialRequests: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-zinc-900 border border-white/10 text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-[#FF1E27] resize-none"
                      ></textarea>
                    </div>
                  </>
                )}

                {/* Submit Action */}
                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-[#FF1E27] to-[#D6131C] text-white font-black text-sm uppercase tracking-wider shadow-[0_0_25px_rgba(255,30,39,0.5)] hover:shadow-[0_0_35px_rgba(255,30,39,0.8)] transition-all flex items-center justify-center gap-2 mt-4"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>
                    {serviceType === "instant" && "Send WhatsApp Booking"}
                    {serviceType === "birthday" && "Inquire Squad & Birthday Package"}
                    {serviceType === "corporate" && "Send Corporate Inquiry"}
                    {serviceType === "vip" && "Apply for VIP Membership"}
                  </span>
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
