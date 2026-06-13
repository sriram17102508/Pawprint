import { useState, useEffect, useRef } from "react";

/* ================================================================
   PAWPRINT  —  Complete Website  v3
   Fonts  : BL Melody (CDN) + Inter (Google Fonts)
   Pages  : Home · About · Services · Adopt · Vet · Shop ·
            Lost & Found · Dashboard · Login · Signup · Contact
   Nav    : 5 fields with dropdowns
================================================================ */

// ── Font injection ────────────────────────────────────────────────
const FONTS_CSS = `
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,400&display=swap');

/*
  Typography system:
  • .melody / .melody-italic  → Bebas Neue  (all large headings, display text, stats)
  • body / buttons / labels   → Inter        (everything else: subheadings, body, buttons, numbers)
*/
.melody {
  font-family: 'Bebas Neue', Impact, 'Arial Narrow', sans-serif;
  letter-spacing: 0.02em;
  font-weight: 400;        /* Bebas Neue has only one weight — 400 renders bold by design */
  font-style: normal;
  line-height: 1;
}
.melody-italic {
  font-family: 'Bebas Neue', Impact, 'Arial Narrow', sans-serif;
  letter-spacing: 0.02em;
  font-weight: 400;
  font-style: normal;      /* Bebas Neue has no italic; keep upright, same visual impact */
  line-height: 1;
}

/* Report Form Grid Styling */
.report-form-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;
}
@media (min-width: 768px) {
  .report-form-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (min-width: 1024px) {
  .report-form-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
`;

// ── Design tokens ─────────────────────────────────────────────────
const C = {
  cream: "#F5F1EB",
  creamDk: "#EDE8DF",
  white: "#FFFFFF",
  ink: "#111111",
  inkMd: "#222222",
  inkSft: "#555555",
  sand: "#C9C2B5",
  orange: "#E55D1A",
  orangeLt: "#FEF0E7",
  blue: "#1D5FC4",
  blueLt: "#EBF2FF",
  green: "#1E6B45",
  greenLt: "#E8F5EE",
  red: "#C0392B",
  redLt: "#FDECEA",
  border: "rgba(17,17,17,0.10)",
  borderMd: "rgba(17,17,17,0.18)",
};

// ── Placeholder images (Unsplash - no auth needed) ────────────────
const P = {
  hero: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=1400&q=80&fit=crop",
  dog1: "https://images.unsplash.com/photo-1561037404-61cd46aa615b?w=600&q=80&fit=crop",
  dog2: "https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?w=600&q=80&fit=crop",
  dog3: "https://images.unsplash.com/photo-1477884213360-7e9d7dcc1e48?w=600&q=80&fit=crop",
  dog4: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=600&q=80&fit=crop",
  cat1: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=600&q=80&fit=crop",
  cat2: "https://images.unsplash.com/photo-1573865526739-10659fec78a5?w=600&q=80&fit=crop",
  vet1: "https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?w=700&q=80&fit=crop",
  vet2: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&q=80&fit=crop",
  groom: "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?w=700&q=80&fit=crop",
  train: "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=700&q=80&fit=crop",
  shop1: "https://images.unsplash.com/photo-1589924691995-400dc9ecc119?w=500&q=80&fit=crop",
  shop2: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=500&q=80&fit=crop",
  about1: "https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=900&q=80&fit=crop",
  about2: "https://images.unsplash.com/photo-1444212477490-ca407925329e?w=600&q=80&fit=crop",
  team1: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&q=80&fit=crop",
  team2: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=400&q=80&fit=crop",
  team3: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&q=80&fit=crop",
  lost1: "https://images.unsplash.com/photo-1518717758536-85ae29035b6d?w=600&q=80&fit=crop",
  lost2: "https://images.unsplash.com/photo-1533743983669-94fa5c4338ec?w=600&q=80&fit=crop",
  community: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=600&q=80&fit=crop",
  boarding: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=600&q=80&fit=crop",
};

// ── Global styles ─────────────────────────────────────────────────
function GlobalStyles() {
  useEffect(() => {
    const el = document.createElement("style");
    el.innerHTML = FONTS_CSS + `
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0;}
html{scroll-behavior:smooth;}
body{
  font-family:'Inter',system-ui,sans-serif;
  background:${C.cream};color:${C.ink};
  overflow-x:hidden;-webkit-font-smoothing:antialiased;
}
button,input,textarea,select{font-family:inherit;}
img{display:block;max-width:100%;}
a{text-decoration:none;color:inherit;}

/* ---------- Keyframes ---------- */
@keyframes fadeUp{from{opacity:0;transform:translateY(24px);}to{opacity:1;transform:translateY(0);}}
@keyframes fadeIn{from{opacity:0;}to{opacity:1;}}
@keyframes scaleIn{from{opacity:0;transform:scale(.93);}to{opacity:1;transform:scale(1);}}
@keyframes float{0%,100%{transform:translateY(0);}50%{transform:translateY(-10px);}}
@keyframes marquee{from{transform:translateX(0);}to{transform:translateX(-50%);}}
@keyframes spin{from{transform:rotate(0);}to{transform:rotate(360deg);}}
@keyframes slideDown{from{opacity:0;transform:translateY(-8px);}to{opacity:1;transform:translateY(0);}}

.fade-up   {animation:fadeUp .6s cubic-bezier(.22,1,.36,1) both;}
.fade-in   {animation:fadeIn .5s ease both;}
.scale-in  {animation:scaleIn .6s cubic-bezier(.22,1,.36,1) both;}
.d1{animation-delay:.08s;}.d2{animation-delay:.16s;}.d3{animation-delay:.26s;}
.d4{animation-delay:.38s;}.d5{animation-delay:.52s;}.d6{animation-delay:.68s;}

/* ---------- Reusable components ---------- */
.card{background:#fff;border-radius:20px;border:1px solid ${C.border};overflow:hidden;}
.card-lift{transition:transform .28s cubic-bezier(.22,1,.36,1),box-shadow .28s ease;}
.card-lift:hover{transform:translateY(-6px);box-shadow:0 24px 60px rgba(0,0,0,.11);}

.btn{display:inline-flex;align-items:center;justify-content:center;gap:8px;border:none;cursor:pointer;font-weight:600;transition:all .22s cubic-bezier(.22,1,.36,1);white-space:nowrap;}
.btn-sm{padding:9px 20px;border-radius:100px;font-size:13px;}
.btn-md{padding:12px 26px;border-radius:100px;font-size:15px;}
.btn-lg{padding:15px 34px;border-radius:100px;font-size:16px;}
.btn-primary{background:${C.orange};color:#fff;box-shadow:0 4px 18px ${C.orange}44;}
.btn-primary:hover{background:#C94E12;transform:translateY(-2px);box-shadow:0 8px 28px ${C.orange}55;}
.btn-dark{background:${C.ink};color:#fff;}
.btn-dark:hover{background:${C.inkMd};transform:translateY(-2px);}
.btn-outline{background:transparent;color:${C.ink};border:1.5px solid ${C.borderMd};}
.btn-outline:hover{background:${C.ink};color:#fff;border-color:${C.ink};}
.btn-ghost{background:transparent;color:${C.inkSft};border:1.5px solid ${C.border};}
.btn-ghost:hover{border-color:${C.inkMd};color:${C.ink};}
.btn-blue{background:${C.blue};color:#fff;box-shadow:0 4px 18px ${C.blue}33;}
.btn-blue:hover{background:#1549A8;transform:translateY(-2px);}

.pill{display:inline-flex;align-items:center;gap:5px;padding:4px 14px;border-radius:100px;font-size:11px;font-weight:700;letter-spacing:.06em;text-transform:uppercase;}
.pill-orange{background:${C.orangeLt};color:${C.orange};}
.pill-blue{background:${C.blueLt};color:${C.blue};}
.pill-green{background:${C.greenLt};color:${C.green};}
.pill-dark{background:rgba(17,17,17,.08);color:${C.inkSft};}
.pill-red{background:${C.redLt};color:${C.red};}

.field{display:flex;flex-direction:column;gap:6px;}
.field label{font-size:12px;font-weight:700;letter-spacing:.06em;text-transform:uppercase;color:${C.inkSft};}
.field input,.field textarea,.field select{
  padding:13px 16px;border-radius:12px;border:1.5px solid ${C.border};
  font-size:14px;color:${C.ink};background:#fff;outline:none;
  transition:border-color .18s;width:100%;
}
.field input:focus,.field textarea:focus,.field select:focus{border-color:${C.orange};}
.field select{cursor:pointer;}

/* scrollbar */
::-webkit-scrollbar{width:4px;}
::-webkit-scrollbar-track{background:${C.cream};}
::-webkit-scrollbar-thumb{background:${C.sand};border-radius:4px;}

/* ---------- Bento Pet Card Design ---------- */
.bento-pet-card {
  background: ${C.white};
  border-radius: 24px;
  border: 1px solid ${C.border};
  padding: 16px;
  display: grid;
  grid-template-rows: 240px auto;
  gap: 12px;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  position: relative;
  overflow: hidden;
  cursor: pointer;
}

.bento-pet-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 20px 40px rgba(17, 17, 17, 0.08);
  border-color: rgba(229, 93, 26, 0.3);
}

.bento-pet-card .photo-box {
  grid-row: 1;
  position: relative;
  border-radius: 18px;
  overflow: hidden;
  height: 240px;
}

.bento-pet-card .photo-box img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.bento-pet-card:hover .photo-box img {
  transform: scale(1.04);
}

.bento-pet-card .fav-btn {
  position: absolute;
  top: 12px;
  right: 12px;
  width: 38px;
  height: 38px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(0, 0, 0, 0.05);
  font-size: 16px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
  z-index: 2;
}

.bento-pet-card .fav-btn:hover {
  transform: scale(1.1);
  background: #fff;
}

.bento-pet-card .badge-box {
  position: absolute;
  top: 12px;
  left: 12px;
  background: ${C.green};
  color: #fff;
  font-size: 10px;
  font-weight: 700;
  padding: 5px 12px;
  border-radius: 100px;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  box-shadow: 0 4px 12px rgba(30, 107, 69, 0.25);
  z-index: 2;
}

.bento-pet-card .info-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
}

.bento-pet-card .info-main {
  grid-column: span 2;
  background: ${C.cream};
  border-radius: 16px;
  padding: 16px 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  transition: background 0.2s ease;
}

.bento-pet-card:hover .info-main {
  background: ${C.creamDk};
}

.bento-pet-card .info-main .pet-name {
  font-family: 'Bebas Neue', Impact, sans-serif;
  color: ${C.ink};
  font-size: 26px;
  font-weight: 400;
  letter-spacing: 0.02em;
  line-height: 1;
}

.bento-pet-card .info-main .pet-meta {
  color: ${C.inkSft};
  font-size: 13px;
  margin-top: 4px;
  font-weight: 500;
}

.bento-pet-card .info-chip {
  background: #fff;
  border: 1px solid ${C.border};
  border-radius: 14px;
  padding: 10px;
  text-align: center;
  font-size: 12px;
  font-weight: 700;
  color: ${C.inkMd};
  display: flex;
  align-items: center;
  justify-content: center;
}

.bento-pet-card .info-action {
  grid-column: span 2;
  background: ${C.orange};
  color: #fff;
  border-radius: 16px;
  padding: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  font-weight: 700;
  font-size: 14px;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;
}

.bento-pet-card .info-action:hover {
  background: #C94E12;
  box-shadow: 0 4px 12px rgba(229, 93, 26, 0.25);
}
    `;
    document.head.appendChild(el);
    return () => el.remove();
  }, []);
  return null;
}

// ── Counter hook ──────────────────────────────────────────────────
function useCounter(target, active = true) {
  const [v, setV] = useState(0);
  useEffect(() => {
    if (!active) return;
    let raf;
    const start = performance.now();
    const dur = 1800;
    const tick = (now) => {
      const t = Math.min((now - start) / dur, 1);
      const e = 1 - Math.pow(1 - t, 3);
      setV(Math.floor(e * target));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, active]);
  return v;
}

// ── Img with fallback ─────────────────────────────────────────────
function Img({ src, alt = "", style = {}, className = "" }) {
  const [err, setErr] = useState(false);
  if (err) return (
    <div style={{ background: C.creamDk, display: "flex", alignItems: "center", justifyContent: "center", color: C.sand, fontSize: 32, ...style }}>🐾</div>
  );
  return <img src={src} alt={alt} style={style} className={className} onError={() => setErr(true)} />;
}

// ── Marquee ───────────────────────────────────────────────────────
function Marquee() {
  const items = ["Pet Adoption", "Veterinary Care", "Grooming", "Training", "Smart Tracking", "Pet Shop", "Boarding", "Emergency Care", "AI Health", "Lost & Found"];
  const all = [...items, ...items];
  return (
    <div style={{ overflow: "hidden", background: C.inkMd, borderTop: `1px solid ${C.border}`, borderBottom: `1px solid ${C.border}`, padding: "12px 0" }}>
      <div style={{ display: "flex", gap: 56, animation: "marquee 32s linear infinite", width: "max-content" }}>
        {all.map((t, i) => (
          <span key={i} style={{ color: "rgba(255,255,255,.45)", fontSize: 11, fontWeight: 700, letterSpacing: ".1em", textTransform: "uppercase", whiteSpace: "nowrap", display: "flex", alignItems: "center", gap: 20 }}>
            {t} <span style={{ color: C.orange, fontSize: 7 }}>◆</span>
          </span>
        ))}
      </div>
    </div>
  );
}

// ══════════════════════════════════════════════════════════════════
//  NAVBAR  (5 nav items with dropdowns)
// ══════════════════════════════════════════════════════════════════
function Navbar({ page, nav }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(null);
  const ref = useRef();

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);

  useEffect(() => {
    const h = (e) => { if (ref.current && !ref.current.contains(e.target)) setOpen(null); };
    document.addEventListener("mousedown", h);
    return () => document.removeEventListener("mousedown", h);
  }, []);

  /* ── Services mega-menu data ── */
  const SERVICE_CATS = [
    {
      cat: "Health & Care", icon: "🏥", page: "svc-health",
      items: [
        { label: "General Checkups", page: "svc-health" },
        { label: "Vaccinations", page: "svc-health" },
        { label: "Deworming", page: "svc-health" },
        { label: "Flea & Tick Treatment", page: "svc-health" },
        { label: "Dental Care", page: "svc-health" },
        { label: "Spay & Neuter", page: "svc-health" },
        { label: "Emergency Care", page: "svc-health" },
        { label: "Surgery", page: "svc-health" },
        { label: "Nutrition Consultation", page: "svc-health" },
        { label: "Senior Dog Care", page: "svc-health" },
        { label: "Puppy Care", page: "svc-health" },
        { label: "Physiotherapy & Rehabilitation", page: "svc-health" },
      ],
    },
    {
      cat: "Grooming & Hygiene", icon: "✂️", page: "svc-grooming",
      items: [
        { label: "Full Grooming", page: "svc-grooming" },
        { label: "Bath & Blow Dry", page: "svc-grooming" },
        { label: "Hair Trimming & Styling", page: "svc-grooming" },
        { label: "Nail Clipping", page: "svc-grooming" },
        { label: "Ear Cleaning", page: "svc-grooming" },
        { label: "Teeth Brushing", page: "svc-grooming" },
        { label: "De-shedding Treatment", page: "svc-grooming" },
        { label: "Flea Bath", page: "svc-grooming" },
        { label: "Paw Care", page: "svc-grooming" },
        { label: "Skin & Coat Treatment", page: "svc-grooming" },
      ],
    },
    {
      cat: "Training & Behavior", icon: "🎓", page: "svc-training",
      items: [
        { label: "Puppy Training", page: "svc-training" },
        { label: "Obedience Training", page: "svc-training" },
        { label: "Leash Training", page: "svc-training" },
        { label: "Potty Training", page: "svc-training" },
        { label: "Behavioral Correction", page: "svc-training" },
        { label: "Aggression Management", page: "svc-training" },
        { label: "Socialization Training", page: "svc-training" },
        { label: "Guard Dog Training", page: "svc-training" },
        { label: "Advanced Training", page: "svc-training" },
        { label: "Therapy Dog Training", page: "svc-training" },
      ],
    },
    {
      cat: "Boarding & Sitting", icon: "🏠", page: "svc-boarding",
      items: [
        { label: "Dog Boarding", page: "svc-boarding" },
        { label: "Luxury Boarding", page: "svc-boarding" },
        { label: "Overnight Stay", page: "svc-boarding" },
        { label: "Dog Daycare", page: "svc-boarding" },
        { label: "Pet Sitting", page: "svc-boarding" },
        { label: "Home Visit Care", page: "svc-boarding" },
        { label: "Long-Term Boarding", page: "svc-boarding" },
        { label: "Cage-Free Boarding", page: "svc-boarding" },
        { label: "Puppy Daycare", page: "svc-boarding" },
      ],
    },
    {
      cat: "Activity & Lifestyle", icon: "🏃", page: "svc-activity",
      items: [
        { label: "Dog Walking", page: "svc-activity" },
        { label: "Exercise Sessions", page: "svc-activity" },
        { label: "Playtime Activities", page: "svc-activity" },
        { label: "Adventure Walks", page: "svc-activity" },
        { label: "Swimming Sessions", page: "svc-activity" },
        { label: "Fitness Training", page: "svc-activity" },
        { label: "Outdoor Socialization", page: "svc-activity" },
        { label: "Hiking Trips", page: "svc-activity" },
        { label: "Dog Park Visits", page: "svc-activity" },
      ],
    },
    {
      cat: "Specialty Services", icon: "⭐", page: "svc-specialty",
      items: [
        { label: "Adoption Assistance", page: "svc-specialty" },
        { label: "Breeding Consultation", page: "svc-specialty" },
        { label: "Pregnancy & Whelping Care", page: "svc-specialty" },
        { label: "Rehabilitation Therapy", page: "svc-specialty" },
        { label: "Hospice & End-of-Life Care", page: "svc-specialty" },
        { label: "Pet Photography", page: "svc-specialty" },
        { label: "Dog Events & Parties", page: "svc-specialty" },
        { label: "Emotional Support Dog Assistance", page: "svc-specialty" },
        { label: "Microchipping", page: "svc-specialty" },
        { label: "Pet Relocation Services", page: "svc-specialty" },
      ],
    },
    {
      cat: "Retail & Extras", icon: "🛍️", page: "svc-retail",
      items: [
        { label: "Dog Food", page: "svc-retail" },
        { label: "Treats & Supplements", page: "svc-retail" },
        { label: "Toys", page: "svc-retail" },
        { label: "Collars & Leashes", page: "svc-retail" },
        { label: "Beds & Crates", page: "svc-retail" },
        { label: "Grooming Products", page: "svc-retail" },
        { label: "Clothing & Accessories", page: "svc-retail" },
        { label: "Training Tools", page: "svc-retail" },
        { label: "ID Tags", page: "svc-retail" },
        { label: "Travel Accessories", page: "svc-retail" },
      ],
    },
  ];

  const [activeServiceCat, setActiveServiceCat] = useState(SERVICE_CATS[0].cat);

  const NAV = [
    { label: "Home", page: "home" },
    {
      label: "Company",
      children: [
        { label: "📖 Our Story", page: "about" },
        { label: "✉️ Contact Us", page: "contact" },
      ],
    },
    { label: "Services", page: "services" },
    { label: "Adopt", page: "adopt" },
    {
      label: "Explore",
      children: [
        { label: "🛍️ Pet Shop", page: "shop" },
        { label: "🔍 Lost & Found", page: "lost" },
        { label: "📋 Dog Breeds", page: "dog-breeds" },
        { label: "🎥 Pet Videos", page: "pet-videos" },
        { label: "💻 Dashboard", page: "dashboard" },
      ],
    },
  ];

  const isTabActive = (item) => {
    if (item.page === page) return true;
    if (item.page === "services" && page.startsWith("svc-")) return true;
    if (item.children && item.children.some(ch => ch.page === page)) return true;
    return false;
  };

  const activeCatData = SERVICE_CATS.find(c => c.cat === activeServiceCat) || SERVICE_CATS[0];

  return (
    <nav ref={ref} style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 900,
      background: scrolled ? "rgba(245,241,235,.97)" : "transparent",
      backdropFilter: scrolled ? "blur(20px)" : "none",
      borderBottom: scrolled ? `1px solid ${C.border}` : "none",
      transition: "all .35s cubic-bezier(.22,1,.36,1)",
    }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 32px", display: "flex", alignItems: "center", height: 96, gap: 6 }}>
        {/* Logo */}
        <button onClick={() => nav("home")} style={{ display: "flex", alignItems: "center", gap: 10, background: "none", border: "none", marginRight: 28, cursor: "pointer" }}>
          <img src="Logo.png" alt="Pawprint Logo" style={{ width: 55, height: 55, objectFit: "contain", flexShrink: 0 }} />
          <span style={{ fontFamily: "'Inter', system-ui, -apple-system, BlinkMacSystemFont, sans-serif", fontSize: 20, fontWeight: 800, color: C.ink, letterSpacing: "0.05em", textTransform: "uppercase" }}>Pawprint</span>
        </button>

        {/* Links */}
        <div style={{ display: "flex", gap: 2, flex: 1, alignItems: "center" }}>
          {NAV.map((item) => {
            const active = isTabActive(item) || open === item.label;
            return (
              <div key={item.label} style={{ position: "relative" }}>
                <button
                  onClick={() => {
                    if (item.page) { nav(item.page); setOpen(null); }
                    else setOpen(open === item.label ? null : item.label);
                  }}
                  onMouseEnter={() => { if (item.children || item.isMega) setOpen(item.label); }}
                  className={`${item.children ? "nav-trigger" : "nav-link"} ${active ? "active" : ""}`}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 5,
                  }}>
                  {item.label}
                  {(item.children || item.isMega) && (
                    <svg width="10" height="6" viewBox="0 0 10 6" fill="none" className="arrow-icon">
                      <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  )}
                </button>

                {/* ── Standard dropdown (Company / Explore) ── */}
                {item.children && open === item.label && (
                  <div onMouseLeave={() => setOpen(null)} className="dropdown-menu" style={{
                    position: "absolute",
                    top: "calc(100% + 8px)",
                    left: 0,
                    background: C.white,
                    border: `1px solid ${C.border}`,
                  }}>
                    {item.children.map((ch, ci) => (
                      <button key={ci} onClick={() => { nav(ch.page); setOpen(null); }}
                        className="dropdown-item">
                        {ch.label}
                      </button>
                    ))}
                  </div>
                )}

                {/* ── Services MEGA-MENU ── */}
                {item.isMega && open === "Services" && (
                  <div onMouseLeave={() => setOpen(null)} style={{
                    position: "fixed", top: 96, left: 0, right: 0,
                  background: C.white, borderBottom: `1px solid ${C.border}`,
                  boxShadow: "0 24px 60px rgba(0,0,0,.13)",
                  animation: "slideDown .2s cubic-bezier(.22,1,.36,1) both",
                  zIndex: 99, display: "flex",
                }}>
                  {/* Left: category list */}
                  <div style={{
                    width: 260, flexShrink: 0,
                    background: C.cream, borderRight: `1px solid ${C.border}`,
                    padding: "20px 0",
                  }}>
                    {SERVICE_CATS.map(sc => (
                      <button key={sc.cat}
                        onMouseEnter={() => setActiveServiceCat(sc.cat)}
                        onClick={() => { nav(sc.page); setOpen(null); }}
                        style={{
                          display: "flex", alignItems: "center", gap: 12,
                          width: "100%", padding: "11px 22px",
                          background: activeServiceCat === sc.cat ? C.white : "transparent",
                          border: "none", textAlign: "left", cursor: "pointer",
                          borderLeft: activeServiceCat === sc.cat ? `3px solid ${C.orange}` : "3px solid transparent",
                          transition: "all .15s",
                        }}>
                        <span style={{ fontSize: 17 }}>{sc.icon}</span>
                        <span style={{
                          fontSize: 13.5, fontWeight: activeServiceCat === sc.cat ? 700 : 500,
                          color: activeServiceCat === sc.cat ? C.orange : C.inkMd,
                        }}>{sc.cat}</span>
                        <svg style={{ marginLeft: "auto", opacity: .4 }} width="7" height="12" viewBox="0 0 7 12" fill="none">
                          <path d="M1 1l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </button>
                    ))}
                  </div>

                  {/* Right: sub-items grid */}
                  <div style={{ flex: 1, padding: "28px 36px" }}>
                    <div style={{
                      display: "flex", alignItems: "center", gap: 10,
                      marginBottom: 20, paddingBottom: 16, borderBottom: `1px solid ${C.border}`,
                    }}>
                      <span style={{ fontSize: 24 }}>{activeCatData.icon}</span>
                      <span style={{ fontSize: 17, fontWeight: 700, color: C.ink }}>{activeCatData.cat}</span>
                      <button onClick={() => { nav(activeCatData.page); setOpen(null); }}
                        style={{ marginLeft: "auto", background: C.orange, color: "#fff", border: "none", borderRadius: 100, padding: "6px 16px", fontSize: 12, fontWeight: 700, cursor: "pointer", letterSpacing: ".03em" }}>
                        View All →
                      </button>
                    </div>
                    <div style={{
                      display: "grid",
                      gridTemplateColumns: "repeat(auto-fill,minmax(190px,1fr))",
                      gap: "4px 8px",
                    }}>
                      {activeCatData.items.map((it, idx) => (
                        <button key={idx}
                          onClick={() => { nav(it.page); setOpen(null); }}
                          style={{
                            display: "flex", alignItems: "center", gap: 8,
                            padding: "9px 12px", borderRadius: 10,
                            background: "none", border: "none",
                            textAlign: "left", cursor: "pointer",
                            fontSize: 13.5, color: C.inkSft, fontWeight: 400,
                            transition: "background .14s,color .14s",
                          }}
                          onMouseEnter={e => { e.currentTarget.style.background = C.cream; e.currentTarget.style.color = C.orange; }}
                          onMouseLeave={e => { e.currentTarget.style.background = "none"; e.currentTarget.style.color = C.inkSft; }}>
                          <span style={{ width: 5, height: 5, borderRadius: "50%", background: C.orange, flexShrink: 0, display: "inline-block" }} />
                          {it.label}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div style={{ display: "flex", gap: 10 }}>
          <button className="btn btn-md btn-ghost" onClick={() => nav("login")}>Sign In</button>
          <button className="btn btn-md btn-primary" onClick={() => nav("signup")}>Get Started →</button>
        </div>
      </div>
    </nav>
  );
}

// ══════════════════════════════════════════════════════════════════
//  HOME
// ══════════════════════════════════════════════════════════════════
function HomePage({ nav }) {
  const [faq, setFaq] = useState(null);
  const [activeTesti, setActiveTesti] = useState(0);

  const stats = [
    { to: 45000, suf: "+", label: "Happy Pets" },
    { to: 8200, suf: "+", label: "Adoptions" },
    { to: 1200, suf: "+", label: "Vet Partners" },
    { to: 85, suf: "", label: "Cities" },
  ];

  const features = [
    { icon: "🏥", title: "Veterinary Care", sub: "Book certified vets — home, clinic, or video.", color: C.blue, page: "vet", img: P.vet1 },
    { icon: "✂️", title: "Grooming", sub: "Professional grooming with pickup & drop.", color: C.green, page: "services", img: P.groom },
    { icon: "🎓", title: "Training", sub: "Certified trainers using positive methods.", color: C.orange, page: "services", img: P.train },
  ];

  const adoptPets = [
    { name: "Bruno", breed: "Labrador", age: "2y", gender: "M", img: P.dog1, loc: "Coimbatore", vacc: true },
    { name: "Luna", breed: "Persian", age: "1y", gender: "F", img: P.cat1, loc: "Chennai", vacc: true },
    { name: "Milo", breed: "Beagle", age: "3y", gender: "M", img: P.dog2, loc: "Bangalore", vacc: true },
    { name: "Rex", breed: "Shepherd", age: "4y", gender: "M", img: P.dog3, loc: "Mumbai", vacc: false },
  ];

  const testis = [
    { name: "Priya Sharma", city: "Chennai", initials: "PS", text: "Finding Bruno through Pawprint was the most seamless, joyful experience. The whole adoption process was transparent and humane.", role: "Dog Parent" },
    { name: "Rahul Nair", city: "Bangalore", initials: "RN", text: "Managing 3 pets is finally stress-free. Vet booking, vaccination reminders, grooming — all in one place. Game changer.", role: "Multi-pet Parent" },
    { name: "Ananya Reddy", city: "Hyderabad", initials: "AR", text: "The AI symptom checker flagged something my vet later confirmed as early kidney stress. Pawprint may have saved my cat's life.", role: "Cat Parent" },
  ];

  const faqs = [
    { q: "How does pet adoption work?", a: "Browse verified shelter listings, apply online, meet the pet, and complete adoption paperwork with our guidance — typically 3–5 business days." },
    { q: "Can I consult a vet online?", a: "Yes. Our video consultation connects you with licensed vets 24/7. For emergencies we also offer rapid in-home vet dispatch." },
    { q: "Is there a free plan?", a: "Yes — free tier includes one pet profile, community access, and basic vet listings. Premium unlocks AI tools, unlimited bookings, and shop discounts." },
    { q: "Which cities is Pawprint in?", a: "Currently live in 85+ cities across India, including all metros and major Tier-2 cities." },
    { q: "How does the AI health assistant work?", a: "Describe your pet's symptoms in plain language. Our AI provides an initial triage and recommends next steps — always encouraging a real vet for anything serious." },
  ];

  const StatItem = ({ to, suf, label }) => {
    const v = useCounter(to, true);
    return (
      <div style={{ textAlign: "center" }}>
        <div className="melody" style={{ fontSize: 52, fontWeight: 700, color: "#fff", lineHeight: 1 }}>{v.toLocaleString()}{suf}</div>
        <div style={{ fontSize: 14, color: "rgba(255,255,255,.65)", marginTop: 6 }}>{label}</div>
      </div>
    );
  };

  return (
    <div>

      {/* ═══════════════════════════════════════════════════
          HERO  v4  —  Clean · Minimal · Editorial
      ═══════════════════════════════════════════════════ */}
      <section style={{
        minHeight: "100vh",
        background: C.cream,
        display: "flex",
        flexDirection: "column",
        position: "relative",
        overflow: "hidden",
      }}>

        {/* ── Very subtle dot-grid background ── */}
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: `radial-gradient(circle, ${C.sand}55 1px, transparent 1px)`,
          backgroundSize: "32px 32px",
          pointerEvents: "none",
          zIndex: 0,
        }} />

        {/* ── Thin top progress bar (brand accent) ── */}
        <div style={{
          position: "absolute", top: 0, left: 0, right: 0, height: 3,
          background: `linear-gradient(to right,${C.orange},${C.blue})`,
          zIndex: 10,
        }} />

        {/* ══ MAIN CONTENT — full height flex center ══ */}
        <div style={{
          flex: 1, display: "flex", alignItems: "center",
          maxWidth: 1280, margin: "0 auto", width: "100%",
          padding: "100px 48px 60px",
          position: "relative", zIndex: 2,
          gap: 64,
        }}>

          {/* ── LEFT — text ── */}
          <div style={{ flex: "0 0 auto", maxWidth: 500 }}>

            {/* Category label */}
            <div className="fade-up pill pill-orange" style={{ marginBottom: 28 }}>
              India's Dog Care Platform
            </div>

            {/* Headline */}
            <h1 className="melody fade-up d1" style={{
              fontSize: "clamp(68px,7.5vw,108px)",
              color: C.ink,
              lineHeight: .88,
              letterSpacing: ".02em",
              marginBottom: 28,
            }}>
              CARE<br />
              FOR<br />
              <span style={{ color: C.orange }}>PETS.</span>
            </h1>

            {/* One-liner */}
            <p className="fade-up d2" style={{
              fontSize: 17,
              color: C.inkSft,
              lineHeight: 1.85,
              maxWidth: 380,
              marginBottom: 40,
            }}>
              Adoption, healthcare, grooming, training, and AI-powered pet management — all in one place for 45,000+ pet families across India.
            </p>

            {/* CTAs */}
            <div className="fade-up d3" style={{
              display: "flex", gap: 12, alignItems: "center",
              marginBottom: 52,
            }}>
              <button className="btn btn-lg btn-primary"
                onClick={() => nav("adopt")}>
                Adopt a Pet →
              </button>
              <button
                onClick={() => nav("services")}
                className="btn btn-lg btn-outline">
                Our Services
              </button>
            </div>

            {/* Stats — inline, clean */}
            <div className="fade-up d4" style={{
              display: "flex", gap: 32,
              paddingTop: 24,
              borderTop: `1px solid ${C.border}`,
            }}>
              {[
                { v: "45K+", l: "Happy Pets" },
                { v: "85+", l: "Cities" },
                { v: "4.9★", l: "Rating" },
              ].map(s => (
                <div key={s.l}>
                  <div className="melody" style={{
                    fontSize: 26, color: C.ink, lineHeight: 1,
                  }}>{s.v}</div>
                  <div style={{
                    fontSize: 11, color: C.sand, marginTop: 5,
                    fontWeight: 600, letterSpacing: ".04em",
                    textTransform: "uppercase",
                  }}>{s.l}</div>
                </div>
              ))}
            </div>
          </div>

          {/* ── RIGHT — image collage ── */}
          <div style={{
            flex: 1,
            position: "relative",
            height: 580,
            minWidth: 0,
          }}>

            {/* Main large image */}
            <div style={{
              position: "absolute",
              top: 0, left: 0,
              width: "68%", height: "78%",
              borderRadius: 28, overflow: "hidden",
              boxShadow: "0 32px 80px rgba(0,0,0,.13)",
            }}>
              <Img src={P.hero}
                style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 20%" }} />
              {/* subtle inner shadow */}
              <div style={{
                position: "absolute", inset: 0,
                boxShadow: "inset 0 0 0 1px rgba(0,0,0,.08)",
                borderRadius: 28,
              }} />
            </div>

            {/* Secondary — top right */}
            <div style={{
              position: "absolute",
              top: "6%", right: 0,
              width: "34%", height: "44%",
              borderRadius: 22, overflow: "hidden",
              boxShadow: "0 20px 50px rgba(0,0,0,.11)",
            }}>
              <Img src={P.cat1}
                style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>

            {/* Tertiary — bottom right */}
            <div style={{
              position: "absolute",
              bottom: 0, right: 0,
              width: "38%", height: "42%",
              borderRadius: 22, overflow: "hidden",
              boxShadow: "0 20px 50px rgba(0,0,0,.11)",
            }}>
              <Img src={P.groom}
                style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>

            {/* Small accent — bottom left overlapping */}
            <div style={{
              position: "absolute",
              bottom: "8%", left: "3%",
              width: "26%", height: "28%",
              borderRadius: 18, overflow: "hidden",
              boxShadow: "0 16px 40px rgba(0,0,0,.13)",
              border: `4px solid ${C.cream}`,
            }}>
              <Img src={P.cat2}
                style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>

            {/* Floating info pill — top */}
            <div className="scale-in d3" style={{
              position: "absolute",
              top: "50%", left: "60%",
              transform: "translate(-50%,-50%)",
              background: C.white,
              borderRadius: 100,
              padding: "10px 18px 10px 12px",
              display: "flex", alignItems: "center", gap: 10,
              boxShadow: "0 16px 48px rgba(0,0,0,.14)",
              border: `1px solid ${C.border}`,
              whiteSpace: "nowrap",
              animation: "float 5s ease-in-out infinite",
              zIndex: 5,
            }}>
              <div style={{
                width: 34, height: 34, borderRadius: "50%",
                background: C.orangeLt,
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 16, flexShrink: 0,
              }}>🐾</div>
              <div>
                <div style={{ fontSize: 13, fontWeight: 700, color: C.ink, lineHeight: 1 }}>New adoption</div>
                <div style={{ fontSize: 11, color: C.inkSft, marginTop: 2 }}>Bruno · Labrador · Coimbatore</div>
              </div>
            </div>

            {/* Floating stat pill — bottom */}
            <div className="scale-in d5" style={{
              position: "absolute",
              bottom: "20%", left: "50%",
              transform: "translateX(-50%)",
              background: C.ink,
              borderRadius: 100,
              padding: "10px 18px",
              display: "flex", alignItems: "center", gap: 10,
              boxShadow: "0 16px 40px rgba(0,0,0,.25)",
              whiteSpace: "nowrap",
              animation: "float 6s 1s ease-in-out infinite",
              zIndex: 5,
            }}>
              <div style={{
                width: 8, height: 8, borderRadius: "50%",
                background: "#22C55E", flexShrink: 0,
              }} />
              <span style={{ fontSize: 12, fontWeight: 600, color: "rgba(255,255,255,.9)" }}>
                1,200+ vets online now
              </span>
            </div>

            {/* Orange accent square — decorative */}
            <div style={{
              position: "absolute",
              top: "-16px", right: "28%",
              width: 56, height: 56,
              borderRadius: 14,
              background: C.orange,
              opacity: .12,
              zIndex: 0,
            }} />
            <div style={{
              position: "absolute",
              bottom: "-12px", left: "58%",
              width: 36, height: 36,
              borderRadius: "50%",
              background: C.blue,
              opacity: .12,
              zIndex: 0,
            }} />
          </div>
        </div>

        {/* ── Bottom service bar ── */}
        <div style={{
          position: "relative", zIndex: 2,
          borderTop: `1px solid ${C.border}`,
          background: C.white,
        }}>
          <div style={{
            maxWidth: 1280, margin: "0 auto",
            padding: "0 48px",
            display: "flex", alignItems: "stretch",
          }}>
            {[
              { icon: "🏥", label: "Veterinary", page: "vet" },
              { icon: "✂️", label: "Grooming", page: "svc-grooming" },
              { icon: "🎓", label: "Training", page: "svc-training" },
              { icon: "🏠", label: "Boarding", page: "svc-boarding" },
              { icon: "🐾", label: "Adopt", page: "adopt" },
              { icon: "🛍️", label: "Shop", page: "shop" },
              { icon: "🐕", label: "Breeds", page: "dog-breeds" },
              { icon: "📍", label: "Lost & Found", page: "lost" },
              { icon: "🎬", label: "Videos", page: "pet-videos" },
              { icon: "🤖", label: "AI Health", page: "svc-health" },
            ].map((s, i, arr) => (
              <button key={i} onClick={() => nav(s.page)} style={{
                flex: 1,
                display: "flex", flexDirection: "column",
                alignItems: "center", justifyContent: "center",
                gap: 5,
                padding: "14px 8px",
                background: "none", border: "none",
                borderRight: i < arr.length - 1 ? `1px solid ${C.border}` : "none",
                cursor: "pointer",
                transition: "background .18s",
              }}
                onMouseEnter={e => { e.currentTarget.style.background = C.orangeLt; }}
                onMouseLeave={e => { e.currentTarget.style.background = "none"; }}>
                <span style={{ fontSize: 17 }}>{s.icon}</span>
                <span style={{
                  fontSize: 10, color: C.inkSft, fontWeight: 600,
                  letterSpacing: ".04em", textTransform: "uppercase",
                  whiteSpace: "nowrap",
                }}>{s.label}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Marquee */}
      <Marquee />

      {/* ── Services overview ── */}
      <section style={{ padding: "100px 0", background: C.white }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 32px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: 64, alignItems: "start" }}>
            <div style={{ position: "sticky", top: 88 }}>
              <div className="pill pill-dark" style={{ marginBottom: 20 }}>What We Offer</div>
              <h2 className="melody" style={{ fontSize: "clamp(34px,3.5vw,50px)", fontWeight: 700, lineHeight: 1.05, color: C.ink, marginBottom: 20 }}>
                Every kind of care, one platform.
              </h2>
              <p style={{ fontSize: 16, color: C.inkSft, lineHeight: 1.8, marginBottom: 28 }}>From the day you bring your pet home to every vet visit and grooming session — Pawprint is there.</p>
              <button className="btn btn-md btn-primary" onClick={() => nav("services")}>All Services →</button>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              {features.map((f, i) => (
                <div key={i} className="card card-lift" onClick={() => nav(f.page)} style={{ display: "grid", gridTemplateColumns: "1fr 200px", cursor: "pointer", minHeight: 160 }}>
                  <div style={{ padding: "32px 36px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                    <div>
                      <span style={{ fontSize: 28, display: "block", marginBottom: 12 }}>{f.icon}</span>
                      <h3 className="melody" style={{ fontSize: 22, fontWeight: 700, color: C.ink, marginBottom: 16 }}>{f.title}</h3>
                      <p style={{ fontSize: 14, color: C.inkSft, lineHeight: 1.65 }}>{f.sub}</p>
                    </div>
                    <span style={{ fontSize: 13, fontWeight: 600, color: f.color, marginTop: 16 }}>Explore →</span>
                  </div>
                  <div style={{ overflow: "hidden" }}>
                    <Img src={f.img} style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform .5s cubic-bezier(.22,1,.36,1)" }}
                      onMouseEnter={e => e.target.style.transform = "scale(1.07)"}
                      onMouseLeave={e => e.target.style.transform = "scale(1)"} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Adoption showcase ── */}
      <section style={{ padding: "100px 0", background: C.inkMd, position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: -100, right: -100, width: 400, height: 400, borderRadius: "50%", background: `${C.orange}15`, pointerEvents: "none" }} />
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 32px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 56 }}>
            <div>
              <div className="pill" style={{ background: "rgba(255,255,255,.1)", color: "rgba(255,255,255,.65)", marginBottom: 20 }}>🐾 Open for Adoption</div>
              <h2 className="melody" style={{ fontSize: "clamp(34px,4vw,58px)", fontWeight: 700, color: "#fff", lineHeight: 1 }}>Find your<br />perfect match.</h2>
            </div>
            <button className="btn btn-md btn-ghost" onClick={() => nav("adopt")} style={{ color: "rgba(255,255,255,.65)", borderColor: "rgba(255,255,255,.2)" }}>View All Pets →</button>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 20 }}>
            {adoptPets.map((p, i) => (
              <div key={i} className="card-lift" onClick={() => nav("adopt")} style={{ borderRadius: 20, overflow: "hidden", cursor: "pointer", background: C.white }}>
                <div style={{ position: "relative", height: 220 }}>
                  <Img src={p.img} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                  <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top,rgba(0,0,0,.55) 0%,transparent 50%)" }} />
                  {p.vacc && <div style={{ position: "absolute", top: 12, left: 12, background: C.green, color: "#fff", fontSize: 9, fontWeight: 700, padding: "3px 9px", borderRadius: 100, textTransform: "uppercase", letterSpacing: ".05em" }}>Vaccinated</div>}
                  <div style={{ position: "absolute", bottom: 14, left: 14 }}>
                    <div style={{ color: "#fff", fontSize: 18, fontWeight: 700, letterSpacing: "-.02em" }}>{p.name}</div>
                    <div style={{ color: "rgba(255,255,255,.75)", fontSize: 11, marginTop: 2 }}>{p.breed} · {p.age} · {p.loc}</div>
                  </div>
                </div>
                <div style={{ padding: "12px 14px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ fontSize: 12, color: C.inkSft }}>{p.gender === "M" ? "Male" : "Female"}</span>
                  <button className="btn btn-sm btn-primary" onClick={e => { e.stopPropagation(); nav("adopt"); }}>Adopt</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Stats ── */}
      <section style={{ padding: "72px 0", background: C.orange }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 32px", display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 32 }}>
          {stats.map(s => <StatItem key={s.label} {...s} />)}
        </div>
      </section>

      {/* ── AI features ── */}
      <section style={{ padding: "100px 0", background: C.cream }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 32px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }}>
          <div style={{ position: "relative", height: 520 }}>
            <div style={{ position: "absolute", top: 0, left: 0, width: "58%", height: "62%", borderRadius: 24, overflow: "hidden", boxShadow: "0 20px 60px rgba(0,0,0,.15)" }}>
              <Img src={P.vet1} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
            <div style={{ position: "absolute", bottom: 0, right: 0, width: "52%", height: "55%", borderRadius: 24, overflow: "hidden", boxShadow: "0 20px 60px rgba(0,0,0,.15)" }}>
              <Img src={P.dog3} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
            <div style={{ position: "absolute", bottom: "30%", left: "26%", background: C.white, borderRadius: 16, padding: "16px 20px", boxShadow: "0 16px 48px rgba(0,0,0,.13)", border: `1px solid ${C.border}`, minWidth: 180, animation: "float 5s ease-in-out infinite" }}>
              <div style={{ fontSize: 9, fontWeight: 700, letterSpacing: ".08em", textTransform: "uppercase", color: C.blue, marginBottom: 6 }}>🤖 AI Analysis</div>
              <div style={{ fontWeight: 700, fontSize: 14, color: C.ink }}>No anomalies detected</div>
              <div style={{ fontSize: 12, color: C.inkSft, marginTop: 2 }}>Health score: <strong style={{ color: "#22C55E" }}>96/100</strong></div>
            </div>
          </div>
          <div>
            <div className="pill pill-blue" style={{ marginBottom: 24 }}>🤖 Powered by AI</div>
            <h2 className="melody" style={{ fontSize: "clamp(32px,3.5vw,50px)", fontWeight: 700, lineHeight: 1.05, color: C.ink, marginBottom: 24 }}>Your pet's health,<br />intelligently watched.</h2>
            <p style={{ fontSize: 16, color: C.inkSft, lineHeight: 1.8, marginBottom: 36 }}>Our AI health assistant analyzes symptoms, predicts risks based on breed genetics, and sends smart reminders — so you're always one step ahead.</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 20, marginBottom: 36 }}>
              {[
                { icon: "🔬", t: "AI Symptom Checker", d: "Describe symptoms in plain language, get instant triage." },
                { icon: "🍽️", t: "Smart Nutrition Plans", d: "Personalized diet based on breed, age & health conditions." },
                { icon: "💉", t: "Vaccination Reminders", d: "Never miss a shot with intelligent scheduling alerts." },
                { icon: "📈", t: "Health Trend Tracking", d: "Weight, activity, and vitals visualized beautifully." },
              ].map((f, i) => (
                <div key={i} style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
                  <div style={{ width: 44, height: 44, borderRadius: 12, background: C.blueLt, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20, flexShrink: 0 }}>{f.icon}</div>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: 15, color: C.ink, marginBottom: 2 }}>{f.t}</div>
                    <div style={{ fontSize: 14, color: C.inkSft, lineHeight: 1.6 }}>{f.d}</div>
                  </div>
                </div>
              ))}
            </div>
            <button className="btn btn-md btn-primary">Try AI Health Check →</button>
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section style={{ padding: "100px 0", background: C.white }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 32px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 56 }}>
            <div>
              <div className="pill pill-orange" style={{ marginBottom: 20 }}>Testimonials</div>
              <h2 className="melody" style={{ fontSize: "clamp(34px,4vw,54px)", fontWeight: 700, lineHeight: 1, color: C.ink }}>Loved by<br />pet parents.</h2>
            </div>
            <div style={{ display: "flex", gap: 8 }}>
              {testis.map((_, i) => (
                <button key={i} onClick={() => setActiveTesti(i)} style={{ width: i === activeTesti ? 32 : 10, height: 10, borderRadius: 100, background: i === activeTesti ? C.orange : C.sand, border: "none", transition: "all .3s", cursor: "pointer" }} />
              ))}
            </div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 24 }}>
            {testis.map((t, i) => {
              const active = i === activeTesti;
              const themes = ['theme-warm', 'theme-blue', 'theme-green', 'theme-pink', 'theme-orange'];
              const theme = themes[i % themes.length];
              return (
                <div key={i} onClick={() => setActiveTesti(i)} className={`dog-card ${theme}`} style={{
                  transform: active ? "translateY(-6px) scale(1.02)" : "translateY(0)",
                  boxShadow: active ? "0 20px 40px rgba(0,0,0,0.12)" : "none",
                  cursor: "pointer",
                }}>
                  <div className="ear-left"></div>
                  <div className="ear-right"></div>
                  <div className="pop-dog">{t.dogEmoji || "🐶"}</div>
                  <div className="tail"></div>
                  <div className="dog-card-body">
                    <div className="paw-watermark">🐾</div>

                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
                      <span style={{ fontSize: 11, fontWeight: 700, textTransform: "uppercase", background: "rgba(229,93,26,0.12)", color: C.orange, padding: "4px 12px", borderRadius: 100, letterSpacing: ".02em" }}>{t.badge || "🐶 Loved Parent"}</span>
                    </div>

                    <p style={{ fontSize: 14, lineHeight: 1.6, color: C.ink, marginBottom: 16, fontStyle: "italic", display: "-webkit-box", WebkitLineClamp: 4, WebkitBoxOrient: "vertical", overflow: "hidden" }}>"{t.text}"</p>

                    <div style={{ display: "flex", gap: 12, alignItems: "center", marginTop: "auto" }}>
                      <div style={{ width: 40, height: 40, borderRadius: "50%", background: C.orange, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: 13, color: "#fff" }}>{t.initials}</div>
                      <div>
                        <div style={{ fontWeight: 700, fontSize: 13.5, color: C.ink }}>{t.name}</div>
                        <div style={{ fontSize: 11, color: C.inkSft, marginTop: 1 }}>{t.role} · {t.city}</div>
                      </div>
                    </div>

                    <div className="nose-dot"></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ padding: "100px 0", background: C.ink, position: "relative", overflow: "hidden" }}>
        {/* Glowing background blobs */}
        <div className="cta-blob"></div>
        <div className="cta-blob-left"></div>

        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 32px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "center", position: "relative", zIndex: 2 }}>
          <div>
            <h2 className="melody-italic" style={{ fontSize: "clamp(40px,5vw,70px)", fontWeight: 700, color: "#fff", lineHeight: .93, marginBottom: 24 }}>
              Your pet<br />deserves<br />the best.
            </h2>
            <p style={{ fontSize: 17, color: "rgba(255,255,255,.5)", lineHeight: 1.75, marginBottom: 36 }}>Join 45,000 pet parents across India who trust Pawprint for everything their animals need.</p>
            <div style={{ display: "flex", gap: 14 }}>
              <button className="btn btn-lg btn-primary" onClick={() => nav("signup")}>Get Started Free →</button>
              <button className="btn btn-lg btn-ghost" style={{ color: "rgba(255,255,255,.55)", borderColor: "rgba(255,255,255,.18)" }}>Watch Demo</button>
            </div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
            {[P.dog1, P.cat1, P.dog4, P.cat2].map((src, i) => (
              <div key={i} className={`cta-img-card ${i % 2 === 1 ? 'offset' : ''}`}>
                <Img src={src} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section style={{ padding: "60px 0", background: C.cream }}>
        <div style={{ maxWidth: 800, margin: "0 auto", padding: "0 32px" }}>
          <div style={{ textAlign: "center", marginBottom: 36 }}>
            <div className="pill pill-dark" style={{ marginBottom: 12 }}>FAQ</div>
            <h2 className="melody" style={{ fontSize: "clamp(32px,4vw,50px)", fontWeight: 700, color: C.ink }}>Questions, answered.</h2>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
            {faqs.slice(0, 5).map((f, i) => (
              <div key={i} style={{ background: C.white, borderRadius: 16, border: `1px solid ${C.border}`, overflow: "hidden" }}>
                <button onClick={() => setFaq(faq === i ? null : i)} style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "20px 26px", background: "none", border: "none", cursor: "pointer", textAlign: "left" }}>
                  <span style={{ fontSize: 15, fontWeight: 600, color: C.ink, paddingRight: 20, lineHeight: 1.4 }}>{f.q}</span>
                  <div style={{ width: 28, height: 28, borderRadius: "50%", background: faq === i ? C.orange : C.creamDk, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, transition: "background .2s" }}>
                    <span style={{ color: faq === i ? "#fff" : C.inkSft, fontSize: 18, lineHeight: 1, transform: faq === i ? "rotate(45deg)" : "", display: "block", transition: "transform .25s" }}>+</span>
                  </div>
                </button>
                {faq === i && (
                  <div style={{ padding: "0 26px 20px" }}>
                    <p style={{ fontSize: 14, color: C.inkSft, lineHeight: 1.8, borderTop: `1px solid ${C.border}`, paddingTop: 16 }}>{f.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

// ══════════════════════════════════════════════════════════════════
//  ABOUT
// ══════════════════════════════════════════════════════════════════
function AboutPage({ nav }) {

  /* ── Data ────────────────────────────────────────────────────── */
  const milestones = [
    { year: "2023", title: "Born from Love (Idea)", desc: "Frustrated by disconnected records and hard-to-reach vet clinics, Dr. Sriram and Sharmila sketch a blueprint of Pawprint on a napkin." },
    { year: "2024", title: "Execution & Launch", desc: "Making the dream a reality. Launched pet onboarding, verified vet directory, and custom shelters. Expanded to 100+ Indian cities." },
    { year: "2025", title: "Expanding India-Wide", desc: "Scaling nationwide. Expanding verified veterinary consultation, emergency care, and custom adoption shelters to every tier-1 and tier-2 city in India." },
    { year: "2026", title: "Shining Future", desc: "Leading with intelligence. Scaling our AI-driven disease predictors, smart feeding calculators, and predictive vet monitoring." },
  ];

  const values = [
    { icon: "🐾❤️", title: "Compassion First", desc: "Every product decision, every hire, every partnership - animal welfare always comes first.", bg: "#FEF2F2", border: "#FCA5A5", accent: "#EF4444", shadowRgb: "239, 68, 68" },
    { icon: "🦮🔬", title: "Science-Backed", desc: "We partner with leading veterinary institutions and never recommend what isn't evidence-based.", bg: "#EFF6FF", border: "#BFDBFE", accent: "#3B82F6", shadowRgb: "59, 130, 246" },
    { icon: "🐕🔍", title: "Radical Transparency", desc: "Open pricing, honest advice, and no hidden fees - ever. What you see is exactly what you get.", bg: "#FFFBEB", border: "#FDE68A", accent: "#D97706", shadowRgb: "217, 119, 6" },
    { icon: "🌱🐾", title: "Sustainability", desc: "Eco-conscious products, paperless records, and carbon-offset delivery on all shop orders.", bg: "#F0FDF4", border: "#BBF7D0", accent: "#22C55E", shadowRgb: "34, 197, 94" },
    { icon: "🐩🐺", title: "Community", desc: "We're building a nation of confident, informed, and responsible pet parents - one family at a time.", bg: "#FAF5FF", border: "#E9D5FF", accent: "#8B5CF6", shadowRgb: "139, 92, 246" },
  ];

  const leadership = [
    {
      name: "Dr. Kiran Patel", role: "CEO & Co-founder",
      img: P.team1, linkedin: "#",
      quote: "\"Every pet deserves the same standard of care as any family member. That's not a tagline — it's a design principle.\"",
      bio: "Board-certified veterinarian with 15 years of clinical practice across small animal medicine, emergency care, and rehabilitation. Founded Pawprint after his third rescue dog, Diesel, nearly died due to a missed diagnosis. Dr. Kiran leads product vision and all veterinary partnerships.",
      credentials: ["BVSc — Tamil Nadu Veterinary & Animal Sciences University", "MVSc — Small Animal Medicine, IVRI Bareilly", "VCPN Certified Veterinary Professional", "Mentor, Y Combinator India"],
    },
    {
      name: "Sneha Krishnamurthy", role: "CTO & Co-founder",
      img: P.team2, linkedin: "#",
      quote: "\"The hardest engineering challenge isn't the algorithm — it's making technology disappear so the human-pet bond comes through.\"",
      bio: "Machine learning engineer with a decade at Google (Search, Health AI) and two successful exits before Pawprint. Sneha architected the AI health assistant, smart symptom engine, and real-time GPS infrastructure. She is a STEM mentor and frequent speaker at AI India conferences.",
      credentials: ["B.Tech — IIT Madras, Computer Science", "MSc AI — Carnegie Mellon University", "Ex-Google Brain (Health AI)", "Forbes 30 Under 30 Asia — Technology"],
    },
    {
      name: "Arjun Mehta", role: "Head of Growth",
      img: P.team3, linkedin: "#",
      quote: "\"Growth that doesn't serve the customer isn't growth — it's debt. We grow by making pet parents' lives genuinely easier.\"",
      bio: "Hyperlocal operations leader with 8 years at Swiggy (scaled 0→500 cities) and Ola (international expansion). At Pawprint, Arjun owns city launches, supply-side partnerships, and all growth functions. He has a rescue Labrador named Butter who supervises his Zoom calls.",
      credentials: ["MBA — Indian School of Business, Hyderabad", "B.Com — Shri Ram College, Delhi", "Ex-Swiggy VP City Operations", "Ex-Ola International Expansion Lead"],
    },
  ];

  const extended = [
    { name: "Priya Venkatesh", role: "Head of Veterinary Ops", dept: "Medical", img: P.vet2, note: "Manages all 1,200+ vet partner relationships and clinical quality standards." },
    { name: "Rahul Desai", role: "VP Engineering", dept: "Product", img: P.team1, note: "Leads the 60-person engineering team building Pawprint's core platform." },
    { name: "Meenakshi Iyer", role: "Head of Grooming Ops", dept: "Operations", img: P.team2, note: "Certified master groomer overseeing training and quality for all grooming partners." },
    { name: "Siddharth Nair", role: "Chief of Staff", dept: "Strategy", img: P.team3, note: "Ex-McKinsey. Coordinates cross-functional strategy and investor relations." },
    { name: "Lakshmi Subramanian", role: "Head of Brand & Design", dept: "Brand", img: P.vet2, note: "Award-winning designer who shaped Pawprint's identity from day one." },
    { name: "Vivek Krishnan", role: "Head of AI Research", dept: "Medical AI", img: P.team1, note: "PhD in computational biology. Leads the AI health assistant and disease-prediction models." },
  ];

  const deptColors = { Medical: C.blue, Product: C.orange, Operations: C.green, Strategy: "#7C3AED", Brand: "#B45309", "Medical AI": C.red };

  /* ── Render ──────────────────────────────────────────────────── */
  return (
    <div style={{ paddingTop: 96, fontFamily: "'Inter',sans-serif" }}>

      {/* ════ 1. CINEMATIC HERO ════ */}
      <section style={{ position: "relative", minHeight: 620, overflow: "hidden", display: "flex", alignItems: "center", padding: "116px 0 100px" }}>
        <Img src={P.about1} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 30%" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(160deg, rgba(17,17,17,.72) 0%, rgba(17,17,17,.3) 60%, rgba(17,17,17,.75) 100%)" }} />

        {/* Decorative orange arc */}
        <div style={{ position: "absolute", top: -120, right: -120, width: 480, height: 480, borderRadius: "50%", border: `2px solid ${C.orange}30`, pointerEvents: "none" }} />
        <div style={{ position: "absolute", top: -60, right: -60, width: 320, height: 320, borderRadius: "50%", border: `2px solid ${C.orange}20`, pointerEvents: "none" }} />

        <div style={{ position: "relative", zIndex: 2, maxWidth: 1280, margin: "0 auto", padding: "0 48px", width: "100%" }}>
          {/* Label */}
          <div className="pill pill-orange" style={{ marginBottom: 24 }}>
            Our Story · Our Team · Our Mission
          </div>

          <h1 className="melody" style={{ fontSize: "clamp(58px,7.5vw,110px)", color: "#fff", lineHeight: .9, marginBottom: 28, maxWidth: 900 }}>
            Born from love.<br />
            <span style={{ color: C.orange }}>Built for pets.</span>
          </h1>

          <p style={{ fontSize: 19, color: "rgba(255,255,255,.7)", lineHeight: 1.75, maxWidth: 580, marginBottom: 44 }}>
            Pawprint started when Dr. Kiran couldn't find a single trusted platform to manage his three rescue dogs. That frustration became a mission — and that mission became India's most loved pet care platform.
          </p>

          {/* Inline stats */}
          <div style={{ display: "flex", gap: 0, background: "rgba(255,255,255,.08)", backdropFilter: "blur(12px)", borderRadius: 18, border: "1px solid rgba(255,255,255,.12)", overflow: "hidden", width: "fit-content" }}>
            {[["45K+", "Happy Pets"], ["1,200+", "Vet Partners"], ["8,200+", "Adoptions"], ["85+", "Cities"]].map(([v, l], i, arr) => (
              <div key={l} style={{ padding: "18px 32px", textAlign: "center", borderRight: i < arr.length - 1 ? "1px solid rgba(255,255,255,.1)" : "none" }}>
                <div className="melody" style={{ fontSize: 30, color: C.orange, lineHeight: 1 }}>{v}</div>
                <div style={{ fontSize: 11, color: "rgba(255,255,255,.55)", marginTop: 4, fontWeight: 500, letterSpacing: ".03em" }}>{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════ 2. STORY + MISSION + VISION ════ */}
      <section style={{ padding: "100px 0", background: C.white }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 32px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }}>

            {/* Left: Story */}
            <div>
              <div className="pill pill-orange" style={{ marginBottom: 20 }}>
                The Origin Story
              </div>
              <h2 className="melody" style={{ fontSize: "clamp(38px,4vw,58px)", color: C.ink, lineHeight: .95, marginBottom: 28 }}>
                A vet, an engineer,<br />and a rescue dog<br />named Diesel.
              </h2>
              <p style={{ fontSize: 16, color: C.inkSft, lineHeight: 1.85, marginBottom: 20 }}>
                In 2019, Dr. Kiran Patel's rescue Labrador Diesel developed a kidney condition that went undetected for months — not because good vets didn't exist, but because there was no single, trusted platform to book them, track health records, or even get a timely reminder.
              </p>
              <p style={{ fontSize: 16, color: C.inkSft, lineHeight: 1.85, marginBottom: 20 }}>
                Dr. Kiran called his college friend Sneha Krishnamurthy, then a machine learning engineer at Google. They sketched Pawprint on a napkin that night. Six months later, they both quit their jobs. Arjun Mehta joined soon after, bringing operational scale from his years at Swiggy.
              </p>
              <p style={{ fontSize: 16, color: C.inkSft, lineHeight: 1.85 }}>
                Today Pawprint serves 45,000+ pets across 85+ cities — but the mission hasn't changed. Every decision, every feature, every hire still comes back to the same question: <em style={{ color: C.ink, fontStyle: "italic" }}>does this make life better for pets and the people who love them?</em>
              </p>
            </div>

            {/* Right: Mission + Vision stacked with increased spacing */}
            <div style={{ display: "flex", flexDirection: "column", gap: 40 }}>
              {/* Mission */}
              <div style={{ padding: "40px 44px", borderRadius: 24, background: C.cream, border: `1px solid ${C.border}`, position: "relative", overflow: "hidden" }}>
                <div style={{ position: "absolute", top: -50, right: -50, width: 180, height: 180, borderRadius: "50%", background: `${C.orange}12` }} />
                <div style={{ display: "flex", gap: 14, alignItems: "flex-start", marginBottom: 18 }}>
                  <div style={{ width: 44, height: 44, borderRadius: 12, background: C.orangeLt, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22, flexShrink: 0 }}>🎯</div>
                  <div>
                    <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: ".12em", textTransform: "uppercase", color: C.orange, marginBottom: 4 }}>Our Mission</div>
                    <div className="melody" style={{ fontSize: 15, color: C.inkSft, letterSpacing: ".03em" }}>Why we exist</div>
                  </div>
                </div>
                <p style={{ fontSize: 17, color: C.ink, lineHeight: 1.75, fontWeight: 500 }}>
                  To make world-class pet care accessible, affordable, and joyful for every pet family in India — from the smallest hamlet to the largest city.
                </p>
              </div>

              {/* Vision */}
              <div style={{ padding: "40px 44px", borderRadius: 24, background: C.ink, position: "relative", overflow: "hidden" }}>
                <div style={{ position: "absolute", top: -50, right: -50, width: 180, height: 180, borderRadius: "50%", background: `${C.blue}20` }} />
                <div style={{ display: "flex", gap: 14, alignItems: "flex-start", marginBottom: 18 }}>
                  <div style={{ width: 44, height: 44, borderRadius: 12, background: "rgba(255,255,255,.1)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22, flexShrink: 0 }}>🌟</div>
                  <div>
                    <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: ".12em", textTransform: "uppercase", color: C.blue, marginBottom: 4 }}>Our Vision</div>
                    <div className="melody" style={{ fontSize: 15, color: "rgba(255,255,255,.45)", letterSpacing: ".03em" }}>Where we're going</div>
                  </div>
                </div>
                <p style={{ fontSize: 17, color: "rgba(255,255,255,.85)", lineHeight: 1.75, fontWeight: 500 }}>
                  A world where no pet goes without proper healthcare, no animal waits too long for adoption, and every pet parent has the confidence to give their very best.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════ 3. VALUES (Single Row of Squared Cards) ════ */}
      <section style={{ padding: "100px 0", background: C.cream }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 32px", textAlign: "center" }}>
          <div className="pill pill-orange" style={{ marginBottom: 20, display: "inline-block" }}>
            Our Values
          </div>
          <h2 className="melody" style={{ fontSize: "clamp(36px,4vw,54px)", color: C.ink, lineHeight: .95, marginBottom: 20 }}>
            What we stand for.
          </h2>
          <p style={{ fontSize: 16, color: C.inkSft, lineHeight: 1.8, maxWidth: 600, margin: "0 auto 52px" }}>
            These five principles aren't wall decor. They're the filter every decision at Pawprint passes through.
          </p>

          <div className="values-grid">
            {values.map((v, i) => (
              <div key={i}
                className="value-card"
                style={{
                  '--card-bg': v.bg,
                  '--card-border': v.border,
                  '--card-accent': v.accent,
                  '--card-hover-bg': `linear-gradient(145deg, ${v.bg} 0%, #FFFFFF 100%)`,
                  '--card-shadow': `0 20px 40px rgba(${v.shadowRgb}, 0.12)`,
                }}
              >
                <div className="value-icon">{v.icon}</div>
                <div className="melody value-title">{v.title}</div>
                <p className="value-desc">{v.desc}</p>
                <svg className="card-paw-watermark" viewBox="0 0 24 24" fill="currentColor">
                  <circle cx="7.5" cy="9.5" r="2" />
                  <circle cx="10.5" cy="6.5" r="2" />
                  <circle cx="14.5" cy="6.5" r="2" />
                  <circle cx="17.5" cy="9.5" r="2" />
                  <path d="M12 11.5c-2 0-3.5 1.5-3.5 3.5 0 2.5 1.5 4 3.5 4s3.5-1.5 3.5-4c0-2-1.5-3.5-3.5-3.5z" />
                </svg>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════ 4. TIMELINE (3 components) ════ */}
      <section style={{ padding: "100px 0", background: C.inkMd, position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: "50%", right: -100, transform: "translateY(-50%)", width: 400, height: 400, borderRadius: "50%", border: `1px solid ${C.orange}15`, pointerEvents: "none" }} />

        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 32px" }}>
          <div className="pill pill-orange" style={{ marginBottom: 20 }}>
            Our Journey
          </div>
          <h2 className="melody" style={{ fontSize: "clamp(36px,4vw,56px)", color: "#fff", lineHeight: .95, marginBottom: 64 }}>
            Four years.<br />One relentless mission.
          </h2>

          {/* Timeline — horizontal line with cards */}
          <div style={{ position: "relative" }}>
            {/* Connecting line */}
            <div style={{ position: "absolute", top: 28, left: 0, right: 0, height: 2, background: `linear-gradient(to right, ${C.orange}, ${C.blue})`, borderRadius: 1 }} />

            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 28 }}>
              {milestones.map((m, i) => (
                <div key={i} style={{ paddingTop: 56, position: "relative", display: "flex", flexDirection: "column", height: "100%" }}>
                  {/* Dot */}
                  <div style={{ position: "absolute", top: 16, left: "50%", transform: "translateX(-50%)", zIndex: 2 }}>
                    <div className={i === 3 ? "timeline-glow-dot" : ""} style={{
                      width: 24, height: 24, borderRadius: "50%",
                      background: i === 3 ? C.orange : C.inkMd,
                      border: `3px solid ${i === 3 ? C.orange : "rgba(255,255,255,.3)"}`,
                      boxShadow: i === 3 ? `0 0 0 6px ${C.orange}30` : "none",
                    }} />
                  </div>

                  {/* Card */}
                  <div style={{
                    flex: 1,
                    background: "rgba(255,255,255,.06)", border: "1px solid rgba(255,255,255,.08)",
                    borderRadius: 16, padding: "22px 20px", textAlign: "center",
                    borderTop: i === 3 ? `3px solid ${C.orange}` : "1px solid rgba(255,255,255,.08)",
                    display: "flex", flexDirection: "column", justifyContent: "flex-start",
                    height: "100%",
                  }}>
                    <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: ".08em", textTransform: "uppercase", color: C.orange, marginBottom: 6 }}>{m.year}</div>
                    <div className="melody" style={{ fontSize: 19, color: "#fff", marginBottom: 8, lineHeight: 1.1 }}>{m.title}</div>
                    <p style={{ fontSize: 12, color: "rgba(255,255,255,.45)", lineHeight: 1.7, margin: 0 }}>{m.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ════ 5. LEADERSHIP TEAM (Side-by-Side Cards) ════ */}
      <section style={{ padding: "100px 0", background: C.white }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 32px" }}>

          {/* Header */}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 64, flexWrap: "wrap", gap: 20 }}>
            <div>
              <div className="pill pill-orange" style={{ marginBottom: 20 }}>
                Leadership
              </div>
              <h2 className="melody" style={{ fontSize: "clamp(36px,4vw,56px)", color: C.ink, lineHeight: .95 }}>
                The founders<br />behind Pawprint.
              </h2>
            </div>
            <p style={{ fontSize: 15, color: C.inkSft, lineHeight: 1.8, maxWidth: 360 }}>Three people who left stable careers to build something they believed the world needed.</p>
          </div>

          {/* Side-by-side founders cards grid */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 32 }}>
            {leadership.map((l, i) => (
              <div key={i} className="card card-lift founder-card" style={{ position: "relative", overflow: "hidden", borderRadius: 24, background: C.white, border: `1px solid ${C.border}`, display: "flex", flexDirection: "column", height: "100%" }}>
                <div style={{ height: 330, overflow: "hidden", position: "relative" }}>
                  <Img src={l.img} style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.5s cubic-bezier(0.22, 1, 0.36, 1)" }} />
                  {/* Quote overlay on hover */}
                  <div className="founder-overlay" style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(229, 93, 26, 0.96), rgba(29, 95, 196, 0.96))", padding: 28, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", textAlign: "center", opacity: 0, transition: "opacity 0.35s ease", pointerEvents: "none", zIndex: 5 }}>
                    <p style={{ color: "#fff", fontSize: 14, fontStyle: "italic", lineHeight: 1.7, fontWeight: 500, textShadow: "0 2px 4px rgba(0,0,0,0.1)" }}>{l.quote}</p>
                  </div>
                </div>
                <div style={{ padding: 24, display: "flex", flexDirection: "column", flex: 1, justifyContent: "space-between" }}>
                  <div style={{ marginBottom: 20 }}>
                    <div className="pill pill-orange" style={{ fontSize: 10, padding: "4px 10px", marginBottom: 12, width: "fit-content", textTransform: "uppercase" }}>{l.role}</div>
                    <h3 className="melody" style={{ fontSize: 26, color: C.ink, marginBottom: 8, lineHeight: 1.1 }}>{l.name}</h3>
                    <p style={{ fontSize: 13.5, color: C.inkSft, lineHeight: 1.7, marginBottom: 0 }}>{l.bio.split(". ").slice(0, 2).join(". ")}.</p>
                  </div>
                  <div>
                    <div style={{ fontSize: 10, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.05em", color: C.sand, marginBottom: 8 }}>Key Background</div>
                    <div style={{ display: "flex", flexDirection: "column", gap: 6, marginBottom: 20 }}>
                      {l.credentials.slice(0, 2).map((c, ci) => (
                        <div key={ci} style={{ display: "flex", alignItems: "flex-start", gap: 8, fontSize: 12.5, color: C.ink, lineHeight: 1.4 }}>
                          <span style={{ color: C.orange, fontWeight: 700, flexShrink: 0, marginTop: 1 }}>✓</span>
                          <span>{c}</span>
                        </div>
                      ))}
                    </div>
                    <button onClick={() => window.open(l.linkedin, "_blank")} style={{
                      width: "100%", padding: "8px", borderRadius: 12,
                      border: `1.5px solid ${C.border}`, background: "#fff",
                      display: "flex", alignItems: "center", justifyContent: "center", gap: 6,
                      cursor: "pointer", fontSize: 12, fontWeight: 600, color: C.ink,
                      transition: "border-color .18s",
                    }}
                      onMouseEnter={e => e.currentTarget.style.borderColor = C.orange}
                      onMouseLeave={e => e.currentTarget.style.borderColor = C.border}>
                      <span style={{ fontWeight: 800, fontFamily: "sans-serif", marginRight: 4, fontSize: 13 }}>in</span> View LinkedIn Profile
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════ 6. EXTENDED TEAM (Horizontal Bento Cards Scrolling Marquee) ════ */}
      <section style={{ padding: "80px 0 100px", background: C.cream, overflow: "hidden" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 32px" }}>
          <div className="pill pill-orange" style={{ marginBottom: 16 }}>
            The Team
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 48, flexWrap: "wrap", gap: 16 }}>
            <h2 className="melody" style={{ fontSize: "clamp(32px,4vw,50px)", color: C.ink, lineHeight: .95 }}>
              The people who make<br />it happen every day.
            </h2>
            <p style={{ fontSize: 15, color: C.inkSft, maxWidth: 360, lineHeight: 1.75 }}>
              A 120-person team of vets, engineers, designers, and dog lovers — united by one mission.
            </p>
          </div>
        </div>

        {/* Bento scrolling marquee wrapper */}
        <div className="team-marquee-wrap" style={{ overflow: "hidden", padding: "20px 0", background: "transparent", position: "relative" }}>
          <div style={{ position: "absolute", top: 0, bottom: 0, left: 0, width: 100, background: `linear-gradient(to right, ${C.cream}, transparent)`, zIndex: 2, pointerEvents: "none" }} />
          <div style={{ position: "absolute", top: 0, bottom: 0, right: 0, width: 100, background: `linear-gradient(to left, ${C.cream}, transparent)`, zIndex: 2, pointerEvents: "none" }} />

          <div className="team-marquee-track" style={{ display: "flex", gap: 20, width: "max-content" }}>
            {[...extended, ...extended].map((p, i) => (
              <div key={i} className="card card-lift team-bento-card" style={{ width: 240, height: 240, flexShrink: 0, borderRadius: 24, position: "relative", overflow: "hidden", border: `1px solid ${C.border}` }}>
                <Img src={p.img} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(17,17,17,0.85) 0%, rgba(17,17,17,0.2) 60%, transparent 100%)", zIndex: 1 }} />
                {/* Text overlay */}
                <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: 18, display: "flex", flexDirection: "column", zIndex: 2 }}>
                  <span style={{ fontSize: 10, fontWeight: 700, textTransform: "uppercase", color: C.orange, letterSpacing: "0.05em", marginBottom: 2 }}>{p.role}</span>
                  <span className="melody" style={{ fontSize: 22, color: "#fff", lineHeight: 1.1 }}>{p.name}</span>
                </div>
                {/* Hover details overlay */}
                <div className="team-bento-hover" style={{ position: "absolute", inset: 0, background: "rgba(17,17,17,0.92)", padding: 20, display: "flex", flexDirection: "column", justifyContent: "center", textalign: "center", opacity: 0, transition: "opacity 0.3s cubic-bezier(0.22, 1, 0.36, 1)", zIndex: 3, pointerEvents: "none" }}>
                  <span style={{ fontSize: 13.5, color: "rgba(255,255,255,0.8)", lineHeight: 1.6, fontStyle: "italic" }}>"{p.note}"</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Hiring CTA */}
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 32px" }}>
          <div style={{ marginTop: 48, padding: "44px 48px", borderRadius: 24, background: C.ink, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 24 }}>
            <div>
              <div className="melody" style={{ fontSize: 32, color: "#fff", lineHeight: 1, marginBottom: 8 }}>We're hiring.</div>
              <p style={{ fontSize: 15, color: "rgba(255,255,255,.55)", lineHeight: 1.7 }}>Open roles in Engineering, Veterinary Ops, Design, and Growth. Remote-friendly.</p>
            </div>
            <div style={{ display: "flex", gap: 12 }}>
              <button className="btn btn-lg btn-primary" onClick={() => nav("contact")}>View Open Roles →</button>
              <button className="btn btn-lg btn-ghost" style={{ color: "rgba(255,255,255,.6)", borderColor: "rgba(255,255,255,.2)" }} onClick={() => nav("contact")}>Send Your CV</button>
            </div>
          </div>
        </div>
      </section>

      {/* ════ 7. PRESS & RECOGNITION (Vector Brand Logos) ════ */}
      <section style={{ padding: "60px 0", background: C.white, borderTop: `1px solid ${C.border}` }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 32px" }}>
          <div style={{ textAlign: "center", marginBottom: 32 }}>
            <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: ".12em", textTransform: "uppercase", color: C.inkSft }}>Recognised By</span>
          </div>
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 48, flexWrap: "wrap" }}>
            {/* Y Combinator */}
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 10, maxWidth: 160 }}>
              <svg width="110" height="24" viewBox="0 0 110 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="24" height="24" rx="4" fill="#E55D1A" />
                <text x="7" y="18" fill="#fff" fontFamily="sans-serif" fontWeight="bold" fontSize="16">Y</text>
                <text x="32" y="17" fill="var(--color-sand)" fontFamily="sans-serif" fontWeight="bold" fontSize="14">Combinator</text>
              </svg>
              <div style={{ fontSize: 11, fontWeight: 600, color: C.sand, textTransform: "uppercase", letterSpacing: "0.05em", lineHeight: 1.3 }}>S21 Alumni</div>
            </div>

            {/* Google for Startups */}
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 10, maxWidth: 160 }}>
              <svg width="120" height="24" viewBox="0 0 120 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.5 12c0-3.3 2.7-6 6-6 1.8 0 3.3.8 4.4 2.1l4.2-4.2C20.6 1.5 17.5 0 14.5 0 6.5 0 0 6.5 0 14.5S6.5 29 14.5 29c7.5 0 13.5-5.5 14.5-12.5h-14.5v-4.5h19c.3 1 .5 2 .5 3 0 8.5-5.8 14.5-14.5 14.5-8 0-14.5-6.5-14.5-14.5z" fill={C.sand} transform="scale(0.6)" />
                <text x="24" y="16" fill="var(--color-sand)" fontFamily="sans-serif" fontWeight="bold" fontSize="14">Google</text>
              </svg>
              <div style={{ fontSize: 11, fontWeight: 600, color: C.sand, textTransform: "uppercase", letterSpacing: "0.05em", lineHeight: 1.3 }}>India Cohort</div>
            </div>

            {/* Forbes India */}
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 10, maxWidth: 160 }}>
              <svg width="80" height="24" viewBox="0 0 80 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <text x="0" y="18" fill="var(--color-sand)" fontFamily="Georgia, serif" fontWeight="bold" fontSize="20" fontStyle="italic" letterSpacing="-0.5">Forbes</text>
              </svg>
              <div style={{ fontSize: 11, fontWeight: 600, color: C.sand, textTransform: "uppercase", letterSpacing: "0.05em", lineHeight: 1.3 }}>Ones to Watch 2023</div>
            </div>

            {/* Economic Times */}
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 10, maxWidth: 160 }}>
              <svg width="120" height="24" viewBox="0 0 120 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <text x="0" y="18" fill="var(--color-sand)" fontFamily="sans-serif" fontWeight="900" fontSize="16" letterSpacing="1">THE ECONOMIC TIMES</text>
              </svg>
              <div style={{ fontSize: 11, fontWeight: 600, color: C.sand, textTransform: "uppercase", letterSpacing: "0.05em", lineHeight: 1.3 }}>Startup of the Year 2024</div>
            </div>

            {/* NASSCOM */}
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 10, maxWidth: 160 }}>
              <svg width="90" height="24" viewBox="0 0 90 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <text x="0" y="18" fill="var(--color-sand)" fontFamily="sans-serif" fontWeight="800" fontSize="16" letterSpacing="1.5">NASSCOM</text>
              </svg>
              <div style={{ fontSize: 11, fontWeight: 600, color: C.sand, textTransform: "uppercase", letterSpacing: "0.05em", lineHeight: 1.3 }}>Top 10 DeepTech</div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

// ══════════════════════════════════════════════════════════════════
//  SERVICES
// ══════════════════════════════════════════════════════════════════
function ServicesPage({ nav }) {
  const cats = [
    {
      icon: "🏥", name: "Health & Care", page: "svc-health", color: C.blue, img: P.vet1,
      price: "from ₹149",
      tagline: "Expert medical care for every stage of life.",
      desc: "From routine checkups and vaccinations to emergency surgeries and physiotherapy — our 1,200+ certified vets have every health need covered.",
      highlights: ["General Checkups", "Vaccinations", "Emergency Care", "Surgery", "Dental Care", "Puppy & Senior Care"],
      stats: [["1,200+", "Certified Vets"], ["24/7", "Emergency"], ["4.9★", "Rating"]],
    },
    {
      icon: "✂️", name: "Grooming & Hygiene", page: "svc-grooming", color: C.green, img: P.groom,
      price: "from ₹149",
      tagline: "Professional pampering, every time.",
      desc: "Certified groomers, premium cruelty-free products, and free pickup & drop — so your pet always walks out looking (and smelling) incredible.",
      highlights: ["Full Grooming", "Bath & Blow Dry", "Nail Clipping", "De-shedding", "Flea Bath", "Skin & Coat Treatment"],
      stats: [["500+", "Groomers"], ["Pickup", "& Drop Free"], ["4.9★", "Rating"]],
    },
    {
      icon: "🎓", name: "Training & Behavior", page: "svc-training", color: C.orange, img: P.train,
      price: "from ₹799/mo",
      tagline: "Force-free training that actually works.",
      desc: "CPDT-certified trainers using only positive reinforcement — from basic puppy commands to advanced obedience, behavioural correction, and therapy dog preparation.",
      highlights: ["Puppy Training", "Obedience Training", "Behavioral Correction", "Aggression Management", "Therapy Dog Training", "Leash Training"],
      stats: [["200+", "Trainers"], ["98%", "Success Rate"], ["Force-Free", "Methods"]],
    },
    {
      icon: "🏠", name: "Boarding & Sitting", page: "svc-boarding", color: "#7C3AED", img: P.boarding,
      price: "from ₹299/visit",
      tagline: "Safe, loving care when you can't be there.",
      desc: "CCTV-monitored facilities, background-checked home sitters, cage-free options, and daily photo updates — your pet is always in the best hands.",
      highlights: ["Dog Boarding", "Luxury Boarding", "Dog Daycare", "Pet Sitting", "Cage-Free Boarding", "Puppy Daycare"],
      stats: [["CCTV", "24/7"], ["Daily", "Updates"], ["4.9★", "Rating"]],
    },
    {
      icon: "🏃", name: "Activity & Lifestyle", page: "svc-activity", color: "#D97706", img: P.dog3,
      price: "from ₹199/walk",
      tagline: "Active pets are happy pets.",
      desc: "GPS-tracked walks, canine fitness programmes, adventure hikes, swimming sessions, and outdoor socialisation — keeping your dog physically and mentally thriving.",
      highlights: ["Dog Walking", "Exercise Sessions", "Adventure Walks", "Swimming Sessions", "Hiking Trips", "Dog Park Visits"],
      stats: [["GPS", "Every Walk"], ["Insured", "Walkers"], ["10K+", "Walks Done"]],
    },
    {
      icon: "⭐", name: "Specialty Services", page: "svc-specialty", color: C.red, img: P.about1,
      price: "Varies",
      tagline: "Unique care for life's special moments.",
      desc: "From pet photography and dog parties to hospice care, microchipping, pet relocation, and emotional support dog training — specialised services for when standard isn't enough.",
      highlights: ["Pet Photography", "Microchipping", "Pet Relocation", "Dog Events & Parties", "Hospice Care", "Rehabilitation Therapy"],
      stats: [["Specialist", "Team"], ["100%", "Compassionate"], ["5,000+", "Families Helped"]],
    },
    {
      icon: "🛍️", name: "Retail & Extras", page: "svc-retail", color: "#0EA5E9", img: P.shop1,
      price: "from ₹99",
      tagline: "Everything your pet needs, curated by vets.",
      desc: "Premium food, toys, accessories, grooming products, training tools, and travel essentials — vet-reviewed and delivered fast.",
      highlights: ["Dog Food", "Toys", "Collars & Leashes", "Grooming Products", "Training Tools", "Travel Accessories"],
      stats: [["1,000+", "Products"], ["Vet", "Reviewed"], ["Next-Day", "Delivery"]],
    },
  ];

  return (
    <div style={{ paddingTop: 96 }}>
      {/* Hero */}
      <section style={{ padding: "90px 0 70px", background: C.inkMd, position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: -100, right: -100, width: 500, height: 500, borderRadius: "50%", background: `${C.orange}12`, pointerEvents: "none" }} />
        <div style={{ position: "absolute", bottom: -60, left: -60, width: 300, height: 300, borderRadius: "50%", background: `${C.blue}10`, pointerEvents: "none" }} />
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 32px" }}>
          <div className="pill" style={{ background: "rgba(255,255,255,.1)", color: "rgba(255,255,255,.65)", marginBottom: 24 }}>All Services</div>
          <h1 className="melody" style={{ fontSize: "clamp(52px,7vw,100px)", color: "#fff", lineHeight: .93, marginBottom: 20 }}>Every care,<br />under one roof.</h1>
          <p style={{ fontSize: 18, color: "rgba(255,255,255,.6)", lineHeight: 1.75, maxWidth: 560, marginBottom: 40 }}>
            7 comprehensive service categories, 70+ individual services, 1,200+ certified professionals — all bookable through Pawprint.
          </p>
          {/* Quick stats */}
          <div style={{ display: "flex", gap: 40, flexWrap: "wrap" }}>
            {[["70+", "Services"], ["1,200+", "Professionals"], ["85+", "Cities"], ["4.9★", "Platform Rating"]].map(([v, l]) => (
              <div key={l}>
                <div className="melody" style={{ fontSize: 32, color: C.orange, lineHeight: 1 }}>{v}</div>
                <div style={{ fontSize: 13, color: "rgba(255,255,255,.5)", marginTop: 4 }}>{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories hub */}
      <section style={{ padding: "80px 0 100px", background: C.cream }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 32px" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 3, marginBottom: 60 }}>
            <div className="pill pill-dark" style={{ alignSelf: "flex-start", marginBottom: 12 }}>Browse by Category</div>
            <h2 className="melody" style={{ fontSize: "clamp(34px,4vw,54px)", color: C.ink, lineHeight: 1 }}>What would you like<br />to book today?</h2>
          </div>

          <div className="services-bento-grid">
            {cats.map((cat, index) => {
              return (
                <div key={index} className="bento-card card-lift" style={{ cursor: "pointer", borderTop: `4px solid ${cat.color}` }} onClick={() => nav(cat.page)}>
                  <div style={{ height: 180, overflow: "hidden", position: "relative" }}>
                    <Img src={cat.img} style={{ width: "100%", height: "100%", objectFit: "cover" }} alt={cat.name} />
                    <div style={{ position: "absolute", bottom: 12, left: 16, display: "flex", alignItems: "center", gap: 8, zIndex: 2 }}>
                      <span style={{ fontSize: 20 }}>{cat.icon}</span>
                      <span className="melody" style={{ color: "#fff", fontSize: 20, lineHeight: 1 }}>{cat.name}</span>
                    </div>
                    <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,.65) 0%, transparent 60%)" }} />
                    <div style={{ position: "absolute", top: 12, right: 12, background: "rgba(0,0,0,.6)", borderRadius: 100, padding: "4px 12px", zIndex: 2 }}>
                      <span style={{ color: "#fff", fontSize: 11, fontWeight: 700 }}>{cat.price}</span>
                    </div>
                  </div>
                  <div style={{ padding: 24, flex: 1, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                    <div>

                      {/* Stats row */}
                      <div style={{ display: "flex", marginBottom: 18 }}>
                        <div style={{ flex: 1, textAlign: "center", borderRight: `1px solid ${C.border}` }}>
                          <div className="melody" style={{ fontSize: 20, color: cat.color, lineHeight: 1 }}>{cat.stats[0][0]}</div>
                          <div style={{ fontSize: 10, color: C.inkSft, marginTop: 3 }}>{cat.stats[0][1]}</div>
                        </div>
                        <div style={{ flex: 1, textAlign: "center" }}>
                          <div className="melody" style={{ fontSize: 20, color: cat.color, lineHeight: 1 }}>{cat.stats[1][0]}</div>
                          <div style={{ fontSize: 10, color: C.inkSft, marginTop: 3 }}>{cat.stats[1][1]}</div>
                        </div>
                      </div>

                      {/* Explore Button */}
                      <button className="btn btn-md" style={{ width: "100%", background: cat.color, color: "#fff", boxShadow: `0 4px 12px ${cat.color}25`, justifyContent: "center", fontWeight: 700 }} onClick={e => { e.stopPropagation(); nav(cat.page); }}>
                        Explore {cat.name} →
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <section style={{ padding: "60px 0", background: C.white }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 32px", textAlign: "center" }}>
          <h2 className="melody" style={{ fontSize: "clamp(28px,3.5vw,46px)", color: C.ink, marginBottom: 16, lineHeight: 1 }}>Why 45,000+ pet parents choose Pawprint</h2>
          <p style={{ fontSize: 16, color: C.inkSft, maxWidth: 580, margin: "0 auto 48px", lineHeight: 1.75 }}>Every professional is verified. Every booking is insured. Every experience is backed by our satisfaction guarantee.</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))", gap: 24 }}>
            {[
              { icon: "✅", t: "Verified Professionals", d: "Every vet, groomer, and trainer is credentialed, insured, and background-checked." },
              { icon: "🛡️", t: "Booking Guarantee", d: "Not satisfied? We'll rebook you with a different professional at no charge." },
              { icon: "📱", t: "Real-Time Updates", d: "GPS tracking, live photos, and instant notifications — you're always in the loop." },
              { icon: "💳", t: "Transparent Pricing", d: "No hidden fees. No surprise charges. What you see is what you pay." },
              { icon: "🏥", t: "Vet on Call", d: "Every service category has a supervising vet available for health questions." },
              { icon: "⭐", t: "4.9★ Average", d: "Across 50,000+ verified reviews on the Pawprint platform." },
            ].map((t, i) => (
              <div key={i} style={{ padding: "28px 20px", borderRadius: 20, background: C.cream, border: `1px solid ${C.border}`, textAlign: "left" }}>
                <div style={{ fontSize: 28, marginBottom: 12 }}>{t.icon}</div>
                <div style={{ fontWeight: 700, fontSize: 15, color: C.ink, marginBottom: 8 }}>{t.t}</div>
                <p style={{ fontSize: 13, color: C.inkSft, lineHeight: 1.65 }}>{t.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section style={{ padding: "80px 0", background: C.inkMd }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 32px" }}>
          <div className="pill" style={{ background: "rgba(255,255,255,.1)", color: "rgba(255,255,255,.65)", marginBottom: 20 }}>How It Works</div>
          <h2 className="melody" style={{ fontSize: "clamp(32px,4vw,52px)", color: "#fff", marginBottom: 52, lineHeight: 1 }}>Book a service in<br />under 2 minutes.</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 24 }}>
            {[
              { step: "01", icon: "🔍", t: "Browse", d: "Choose from 70+ services across 7 categories. Filter by location, price, and availability." },
              { step: "02", icon: "📅", t: "Book", d: "Select your preferred date, time, and professional. Instant confirmation in the app." },
              { step: "03", icon: "🐾", t: "Experience", d: "Your certified professional arrives on time. You receive real-time updates throughout." },
              { step: "04", icon: "⭐", t: "Review", d: "Rate your experience and earn Pawprint points redeemable against future bookings." },
            ].map((s, i) => (
              <div key={i} style={{ padding: "32px 24px", borderRadius: 20, background: "rgba(255,255,255,.06)", border: "1px solid rgba(255,255,255,.08)" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 16 }}>
                  <span style={{ fontSize: 36 }}>{s.icon}</span>
                  <span className="melody" style={{ fontSize: 42, color: C.orange, lineHeight: 1, opacity: .4 }}>{s.step}</span>
                </div>
                <div className="melody" style={{ fontSize: 22, color: "#fff", marginBottom: 10 }}>{s.t}</div>
                <p style={{ fontSize: 13, color: "rgba(255,255,255,.5)", lineHeight: 1.7 }}>{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "80px 0", background: C.orange }}>
        <div style={{ maxWidth: 900, margin: "0 auto", padding: "0 32px", textAlign: "center" }}>
          <h2 className="melody" style={{ fontSize: "clamp(36px,5vw,64px)", color: "#fff", lineHeight: .95, marginBottom: 20 }}>
            Your pet deserves<br />the very best.
          </h2>
          <p style={{ fontSize: 17, color: "rgba(255,255,255,.75)", lineHeight: 1.75, marginBottom: 36 }}>
            Browse all services, book instantly, and experience world-class pet care — guaranteed.
          </p>
          <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
            <button className="btn btn-lg" style={{ background: "#fff", color: C.orange, fontWeight: 700 }} onClick={() => nav("svc-health")}>Browse Health & Care</button>
            <button className="btn btn-lg" style={{ background: "transparent", color: "#fff", border: "2px solid rgba(255,255,255,.5)", fontWeight: 600 }} onClick={() => nav("adopt")}>Adopt a Pet</button>
          </div>
        </div>
      </section>
    </div>
  );
}

// ══════════════════════════════════════════════════════════════════
//  ADOPT  (no rabbit)
// ══════════════════════════════════════════════════════════════════
function AdoptPage({ nav }) {
  const [filters, setFilters] = useState({ species: "All", size: "All", gender: "All" });
  const [favs, setFavs] = useState([]);
  const [detail, setDetail] = useState(null);
  const [step, setStep] = useState("list"); // list | detail | form | success

  const ALL_PETS = [
    { id: 1, name: "Bruno", breed: "Labrador Retriever", species: "Dog", size: "Large", gender: "Male", age: "2 yrs", img: P.dog1, loc: "Coimbatore", vacc: true, neut: false, tags: ["Friendly", "Energetic", "Loves kids"], story: "Bruno was rescued from a flood shelter. Fully trained, loves fetch, and is wonderful with children." },
    { id: 2, name: "Luna", breed: "Persian Cat", species: "Cat", size: "Small", gender: "Female", age: "1 yr", img: P.cat1, loc: "Chennai", vacc: true, neut: true, tags: ["Calm", "Indoor", "Affectionate"], story: "Luna was found as a stray kitten. She's grown into a gentle, affectionate soul who loves warm laps." },
    { id: 3, name: "Milo", breed: "Beagle", species: "Dog", size: "Medium", gender: "Male", age: "3 yrs", img: P.dog2, loc: "Bangalore", vacc: true, neut: true, tags: ["Curious", "Playful", "Social"], story: "Milo is a therapy dog candidate who responds to 20+ commands and has never met a stranger." },
    { id: 4, name: "Cleo", breed: "Tabby Cat", species: "Cat", size: "Small", gender: "Female", age: "8 mo", img: P.cat2, loc: "Hyderabad", vacc: true, neut: false, tags: ["Kitten", "Playful", "Spirited"], story: "Cleo is full of energy and personality — she will absolutely steal your socks and your heart." },
    { id: 5, name: "Rex", breed: "German Shepherd", species: "Dog", size: "Large", gender: "Male", age: "4 yrs", img: P.dog3, loc: "Mumbai", vacc: true, neut: false, tags: ["Loyal", "Trained", "Protective"], story: "Rex is a retired police assistance dog. Disciplined, loyal, and ready for a loving family home." },
    { id: 6, name: "Daisy", breed: "Golden Retriever", species: "Dog", size: "Large", gender: "Female", age: "1 yr", img: P.dog4, loc: "Pune", vacc: false, neut: false, tags: ["Gentle", "Puppy", "Playful"], story: "Daisy is the softest soul you'll ever meet. Loves cuddles, belly rubs, and chasing butterflies." },
  ];

  const filtered = ALL_PETS.filter(p =>
    (filters.species === "All" || p.species === filters.species) &&
    (filters.size === "All" || p.size === filters.size) &&
    (filters.gender === "All" || p.gender === filters.gender)
  );

  const pet = ALL_PETS.find(x => x.id === detail);

  // Adoption form state
  const [aForm, setAForm] = useState({ fname: "", lname: "", email: "", phone: "", address: "", city: "", pincode: "", housing: "", ownOrRent: "", petAllowed: "", hadPets: "", currentPets: "", workHours: "", reason: "", agree: false });
  const af = (k) => (e) => setAForm(x => ({ ...x, [k]: e.target.type === "checkbox" ? e.target.checked : e.target.value }));

  if (step === "success") return (
    <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", background: C.cream, paddingTop: 96 }}>
      <div style={{ textAlign: "center", padding: 60 }}>
        <div style={{ fontSize: 80, marginBottom: 24, animation: "float 2s ease-in-out infinite" }}>🎉</div>
        <h2 className="melody" style={{ fontSize: 52, fontWeight: 700, color: C.ink, marginBottom: 16 }}>Application Sent!</h2>
        <p style={{ fontSize: 17, color: C.inkSft, lineHeight: 1.7, maxWidth: 400, margin: "0 auto 36px" }}>We've received your request for <strong>{pet?.name}</strong>. Our team will call you within 24 hours to arrange a meet & greet.</p>
        <button className="btn btn-lg btn-primary" onClick={() => { setStep("list"); setDetail(null); setAForm({ fname: "", lname: "", email: "", phone: "", address: "", city: "", pincode: "", housing: "", ownOrRent: "", petAllowed: "", hadPets: "", currentPets: "", workHours: "", reason: "", agree: false }); }}>← Browse More Pets</button>
      </div>
    </div>
  );

  if (step === "form" && pet) return (
    <div style={{ paddingTop: 96, background: C.cream, minHeight: "100vh" }}>
      <div style={{ maxWidth: 860, margin: "0 auto", padding: "48px 32px 80px" }}>
        <button className="btn btn-md btn-ghost" onClick={() => setStep("detail")} style={{ marginBottom: 32 }}>← Back to {pet.name}'s Profile</button>
        <div style={{ display: "flex", alignItems: "center", gap: 20, marginBottom: 40, padding: "20px 24px", background: C.white, borderRadius: 20, border: `1px solid ${C.border}` }}>
          <Img src={pet.img} style={{ width: 72, height: 72, objectFit: "cover", borderRadius: 14, flexShrink: 0 }} />
          <div>
            <h2 className="melody" style={{ fontSize: 24, fontWeight: 700, color: C.ink }}>Adopting {pet.name}</h2>
            <p style={{ color: C.inkSft, fontSize: 14, marginTop: 2 }}>{pet.breed} · {pet.age} · {pet.loc}</p>
          </div>
          <div className="pill pill-green" style={{ marginLeft: "auto" }}>Step 1 of 1</div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
          {/* Personal details */}
          <div style={{ background: C.white, borderRadius: 20, padding: "32px", border: `1px solid ${C.border}` }}>
            <h3 className="melody" style={{ fontSize: 20, fontWeight: 700, color: C.ink, marginBottom: 24 }}>👤 Personal Details</h3>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
              <div className="field"><label>First Name *</label><input placeholder="Geetha" value={aForm.fname} onChange={af("fname")} /></div>
              <div className="field"><label>Last Name *</label><input placeholder="Sharma" value={aForm.lname} onChange={af("lname")} /></div>
              <div className="field"><label>Email Address *</label><input type="email" placeholder="geetha@example.com" value={aForm.email} onChange={af("email")} /></div>
              <div className="field"><label>Phone Number *</label><input type="tel" placeholder="+91 98765 43210" value={aForm.phone} onChange={af("phone")} /></div>
            </div>
          </div>

          {/* Address */}
          <div style={{ background: C.white, borderRadius: 20, padding: "32px", border: `1px solid ${C.border}` }}>
            <h3 className="melody" style={{ fontSize: 20, fontWeight: 700, color: C.ink, marginBottom: 24 }}>🏠 Address & Housing</h3>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              <div className="field"><label>Street Address *</label><input placeholder="123, MG Road, Apartment 4B" value={aForm.address} onChange={af("address")} /></div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                <div className="field"><label>City *</label><input placeholder="Coimbatore" value={aForm.city} onChange={af("city")} /></div>
                <div className="field"><label>Pincode *</label><input placeholder="641018" value={aForm.pincode} onChange={af("pincode")} /></div>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                <div className="field">
                  <label>Housing Type *</label>
                  <select value={aForm.housing} onChange={af("housing")}>
                    <option value="">Select…</option>
                    <option>Apartment</option>
                    <option>Independent House</option>
                    <option>Villa</option>
                    <option>Shared Accommodation</option>
                  </select>
                </div>
                <div className="field">
                  <label>Own or Rent? *</label>
                  <select value={aForm.ownOrRent} onChange={af("ownOrRent")}>
                    <option value="">Select…</option>
                    <option>Own</option>
                    <option>Rent</option>
                    <option>Staying with Family</option>
                  </select>
                </div>
              </div>
              {aForm.ownOrRent === "Rent" && (
                <div className="field">
                  <label>Is Pet Allowed in Your Rental? *</label>
                  <select value={aForm.petAllowed} onChange={af("petAllowed")}>
                    <option value="">Select…</option>
                    <option>Yes, confirmed by landlord</option>
                    <option>Yes, verbally confirmed</option>
                    <option>Not yet confirmed</option>
                    <option>No (please reconsider adopting until resolved)</option>
                  </select>
                </div>
              )}
            </div>
          </div>

          {/* Pet experience */}
          <div style={{ background: C.white, borderRadius: 20, padding: "32px", border: `1px solid ${C.border}` }}>
            <h3 className="melody" style={{ fontSize: 20, fontWeight: 700, color: C.ink, marginBottom: 24 }}>🐾 Pet Experience</h3>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                <div className="field">
                  <label>Have you owned a pet before? *</label>
                  <select value={aForm.hadPets} onChange={af("hadPets")}>
                    <option value="">Select…</option>
                    <option>Yes, currently have pets</option>
                    <option>Yes, in the past</option>
                    <option>No, first time</option>
                  </select>
                </div>
                <div className="field">
                  <label>Current Pets at Home</label>
                  <input placeholder="e.g. 1 cat, 2 dogs or None" value={aForm.currentPets} onChange={af("currentPets")} />
                </div>
              </div>
              <div className="field">
                <label>Average Work Hours per Day *</label>
                <select value={aForm.workHours} onChange={af("workHours")}>
                  <option value="">Select…</option>
                  <option>Work from home</option>
                  <option>Less than 4 hours away</option>
                  <option>4–8 hours away</option>
                  <option>More than 8 hours away</option>
                </select>
              </div>
              <div className="field">
                <label>Why do you want to adopt {pet.name}? *</label>
                <textarea placeholder={`Tell us what made you fall in love with ${pet.name} and how you plan to care for them…`} rows={5} value={aForm.reason} onChange={af("reason")} style={{ resize: "vertical" }} />
              </div>
            </div>
          </div>

          {/* Agree */}
          <div style={{ background: C.white, borderRadius: 20, padding: "28px 32px", border: `1px solid ${C.border}` }}>
            <label style={{ display: "flex", alignItems: "flex-start", gap: 14, cursor: "pointer" }}>
              <input type="checkbox" checked={aForm.agree} onChange={af("agree")} style={{ width: 18, height: 18, marginTop: 2, accentColor: C.orange, flexShrink: 0 }} />
              <span style={{ fontSize: 14, color: C.inkSft, lineHeight: 1.7 }}>I confirm that all information provided is accurate. I understand that providing a safe, loving home is a lifelong commitment, and I agree to Pawprint's <a href="#" style={{ color: C.orange, fontWeight: 600 }}>Adoption Terms & Conditions</a>.</span>
            </label>
          </div>

          <button className="btn btn-lg btn-primary" style={{ alignSelf: "flex-start" }}
            onClick={() => { if (!aForm.fname || !aForm.email || !aForm.phone || !aForm.reason || !aForm.agree) { alert("Please fill all required fields and agree to the terms."); return; } setStep("success"); }}>
            Submit Adoption Application 🐾
          </button>
        </div>
      </div>
    </div>
  );

  if (step === "detail" && pet) return (
    <div style={{ paddingTop: 96, background: C.cream, minHeight: "100vh" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "48px 32px" }}>
        <button className="btn btn-md btn-ghost" onClick={() => setStep("list")} style={{ marginBottom: 32 }}>← All Pets</button>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "start" }}>
          <div>
            <div style={{ borderRadius: 28, overflow: "hidden", boxShadow: "0 24px 60px rgba(0,0,0,.14)" }}>
              <Img src={pet.img} style={{ width: "100%", height: 500, objectFit: "cover" }} />
            </div>
            <div style={{ display: "flex", gap: 10, marginTop: 16, flexWrap: "wrap" }}>
              {pet.tags.map(t => <span key={t} style={{ background: C.white, border: `1px solid ${C.border}`, borderRadius: 100, padding: "6px 16px", fontSize: 13, fontWeight: 500, color: C.inkMd }}>{t}</span>)}
            </div>
          </div>
          <div style={{ paddingTop: 8 }}>
            <div className="pill pill-orange" style={{ marginBottom: 20 }}>{pet.species} · {pet.loc}</div>
            <h1 className="melody" style={{ fontSize: 68, fontWeight: 700, lineHeight: .9, color: C.ink, marginBottom: 12 }}>{pet.name}</h1>
            <p style={{ fontSize: 17, color: C.inkSft, marginBottom: 20 }}>{pet.breed} · {pet.age} · {pet.gender}</p>
            <p style={{ fontSize: 16, color: C.inkSft, lineHeight: 1.8, marginBottom: 32 }}>{pet.story}</p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 12, marginBottom: 32 }}>
              {[["Size", pet.size], ["Vaccinated", pet.vacc ? "Yes" : "No"], ["Neutered", pet.neut ? "Yes" : "No"]].map(([l, v]) => (
                <div key={l} style={{ background: C.white, borderRadius: 14, padding: "14px 16px", border: `1px solid ${C.border}` }}>
                  <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: ".06em", textTransform: "uppercase", color: C.inkSft, marginBottom: 4 }}>{l}</div>
                  <div style={{ fontWeight: 700, color: C.ink, fontSize: 15 }}>{v}</div>
                </div>
              ))}
            </div>
            <div style={{ display: "flex", gap: 14 }}>
              <button className="btn btn-lg btn-primary" style={{ flex: 1 }} onClick={() => setStep("form")}>🐾 Apply to Adopt</button>
              <button className="btn btn-lg btn-outline" onClick={() => setFavs(f => f.includes(pet.id) ? f.filter(x => x !== pet.id) : [...f, pet.id])}>
                {favs.includes(pet.id) ? "❤️" : "🤍"} Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  // LIST
  return (
    <div style={{ paddingTop: 96 }}>
      <section style={{ padding: "90px 0 60px", background: C.cream }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 32px" }}>
          <div className="pill pill-green" style={{ marginBottom: 24 }}>Adoption</div>
          <h1 className="melody-italic" style={{ fontSize: "clamp(52px,7vw,94px)", fontWeight: 700, lineHeight: .92, color: C.ink, marginBottom: 24 }}>Find your<br />forever friend.</h1>
          <p style={{ fontSize: 18, color: C.inkSft, lineHeight: 1.7, maxWidth: 480 }}>Every pet here is verified, health-checked, and waiting for exactly the right person — maybe that's you.</p>
        </div>
      </section>
      <section style={{ padding: "40px 0 100px", background: C.cream }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 32px" }}>
          {/* Filters */}
          <div style={{ display: "flex", gap: 12, marginBottom: 36, flexWrap: "wrap", alignItems: "center", padding: "18px 22px", background: C.white, borderRadius: 18, border: `1px solid ${C.border}` }}>
            <span style={{ fontSize: 13, fontWeight: 700, color: C.inkSft, letterSpacing: ".04em", textTransform: "uppercase" }}>Filter:</span>
            {[["species", ["All", "Dog", "Cat"]], ["size", ["All", "Small", "Medium", "Large"]], ["gender", ["All", "Male", "Female"]]].map(([key, opts]) => (
              <div key={key} style={{ display: "flex", gap: 6 }}>
                {opts.map(o => (
                  <button key={o} onClick={() => setFilters(f => ({ ...f, [key]: o }))}
                    style={{ padding: "7px 16px", borderRadius: 100, border: `1.5px solid ${filters[key] === o ? C.orange : C.border}`, background: filters[key] === o ? C.orange : "transparent", color: filters[key] === o ? "#fff" : C.inkSft, fontSize: 13, fontWeight: 500, cursor: "pointer", transition: "all .18s" }}>{o}</button>
                ))}
              </div>
            ))}
            <span style={{ marginLeft: "auto", fontSize: 13, color: C.inkSft }}>{filtered.length} pets found</span>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 24 }}>
            {filtered.map(p => (
              <div key={p.id} className="card card-lift" style={{ cursor: "pointer" }} onClick={() => { setDetail(p.id); setStep("detail"); }}>
                <div style={{ position: "relative", height: 260 }}>
                  <Img src={p.img} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                  <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top,rgba(0,0,0,.55) 0%,transparent 50%)" }} />
                  <button onClick={e => { e.stopPropagation(); setFavs(f => f.includes(p.id) ? f.filter(x => x !== p.id) : [...f, p.id]); }}
                    style={{ position: "absolute", top: 14, right: 14, width: 36, height: 36, borderRadius: "50%", background: "rgba(255,255,255,.9)", border: "none", fontSize: 16, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    {favs.includes(p.id) ? "❤️" : "🤍"}
                  </button>
                  {p.vacc && <div style={{ position: "absolute", top: 14, left: 14, background: C.green, color: "#fff", fontSize: 9, fontWeight: 700, padding: "3px 9px", borderRadius: 100, textTransform: "uppercase", letterSpacing: ".05em" }}>Vaccinated</div>}
                  <div style={{ position: "absolute", bottom: 16, left: 18 }}>
                    <div className="melody" style={{ color: "#fff", fontSize: 22, fontWeight: 700, lineHeight: 1 }}>{p.name}</div>
                    <div style={{ color: "rgba(255,255,255,.75)", fontSize: 12, marginTop: 3 }}>{p.breed} · {p.loc}</div>
                  </div>
                </div>
                <div style={{ padding: "16px 18px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <div style={{ display: "flex", gap: 6 }}>
                    <span style={{ background: C.cream, borderRadius: 100, padding: "4px 10px", fontSize: 11, color: C.inkSft, fontWeight: 600 }}>{p.age}</span>
                    <span style={{ background: C.cream, borderRadius: 100, padding: "4px 10px", fontSize: 11, color: C.inkSft, fontWeight: 600 }}>{p.gender}</span>
                  </div>
                  <button className="btn btn-sm btn-primary" onClick={e => { e.stopPropagation(); setDetail(p.id); setStep("detail"); }}>Adopt →</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

// ══════════════════════════════════════════════════════════════════
//  VET
// ══════════════════════════════════════════════════════════════════
function VetPage() {
  const [booking, setBooking] = useState(null);
  const [slot, setSlot] = useState("");
  const [date, setDate] = useState("");
  const [confirmed, setConfirmed] = useState(false);

  const vets = [
    { name: "Dr. Meera Iyer", spec: "Small Animal Medicine", exp: "15 yrs", rating: 4.9, reviews: 1240, img: P.vet2, price: "₹499", slots: ["9:00 AM", "11:00 AM", "2:00 PM", "4:00 PM", "6:00 PM"], avail: "Today", langs: ["Tamil", "English", "Hindi"] },
    { name: "Dr. Rajan Pillai", spec: "Exotic Pets & Birds", exp: "12 yrs", rating: 4.8, reviews: 870, img: P.team2, price: "₹599", slots: ["10:00 AM", "12:00 PM", "3:00 PM", "5:00 PM"], avail: "Today", langs: ["Malayalam", "English"] },
    { name: "Dr. Anita Desai", spec: "Veterinary Surgery", exp: "20 yrs", rating: 4.9, reviews: 2100, img: P.team3, price: "₹799", slots: ["8:00 AM", "1:00 PM", "4:30 PM", "7:00 PM"], avail: "Tomorrow", langs: ["Hindi", "English", "Marathi"] },
  ];

  if (confirmed) return (
    <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", background: C.cream, paddingTop: 96 }}>
      <div style={{ textAlign: "center", padding: 60 }}>
        <div style={{ width: 80, height: 80, borderRadius: "50%", background: C.green, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 36, color: "#fff", margin: "0 auto 24px", animation: "float 2s ease-in-out infinite" }}>✓</div>
        <h2 className="melody" style={{ fontSize: 48, fontWeight: 700, color: C.ink, marginBottom: 12 }}>Appointment Confirmed!</h2>
        <p style={{ fontSize: 16, color: C.inkSft, marginBottom: 6, fontWeight: 600 }}>{booking?.name}</p>
        <p style={{ fontSize: 15, color: C.inkSft, marginBottom: 36 }}>{date} at {slot} · Confirmation SMS sent.</p>
        <button className="btn btn-lg btn-primary" onClick={() => { setConfirmed(false); setBooking(null); setSlot(""); setDate(""); }}>← Back to Vets</button>
      </div>
    </div>
  );

  return (
    <div style={{ paddingTop: 96 }}>
      <section style={{ padding: "90px 0 60px", background: C.cream }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 32px" }}>
          <div className="pill pill-blue" style={{ marginBottom: 24 }}>Veterinary</div>
          <h1 className="melody-italic" style={{ fontSize: "clamp(52px,7vw,94px)", fontWeight: 700, lineHeight: .92, color: C.ink, marginBottom: 24 }}>World-class<br />vet care.</h1>
          <p style={{ fontSize: 18, color: C.inkSft, lineHeight: 1.7, maxWidth: 480, marginBottom: 36 }}>Book certified veterinarians for home visits, clinic appointments, or live video consultations — 24/7.</p>
          <div style={{ display: "flex", alignItems: "center", gap: 20, padding: "18px 24px", background: C.blueLt, borderRadius: 16, border: `1px solid ${C.blue}22`, maxWidth: 580 }}>
            <span style={{ fontSize: 28 }}>🤖</span>
            <div style={{ flex: 1 }}>
              <div style={{ fontWeight: 700, color: C.blue, fontSize: 15, marginBottom: 2 }}>Not sure if your pet needs a vet?</div>
              <div style={{ fontSize: 13, color: C.inkSft }}>Use our AI Symptom Checker for instant triage guidance.</div>
            </div>
            <button className="btn btn-sm btn-blue" style={{ flexShrink: 0 }}>Try AI →</button>
          </div>
        </div>
      </section>
      <section style={{ padding: "20px 0 100px", background: C.cream }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 32px", display: "flex", flexDirection: "column", gap: 24 }}>
          {vets.map((v, i) => (
            <div key={i} className="card" style={{ overflow: "visible", transition: "box-shadow .25s" }}
              onMouseEnter={e => e.currentTarget.style.boxShadow = "0 16px 60px rgba(0,0,0,.09)"}
              onMouseLeave={e => e.currentTarget.style.boxShadow = "none"}>
              <div style={{ display: "grid", gridTemplateColumns: `8px 1fr auto`, alignItems: "stretch" }}>
                <div style={{ background: [C.blue, C.green, C.orange][i], borderRadius: "20px 0 0 20px" }} />
                <div style={{ padding: "36px 40px" }}>
                  <div style={{ display: "grid", gridTemplateColumns: "64px 1fr", gap: 22, alignItems: "start", marginBottom: 24 }}>
                    <Img src={v.img} style={{ width: 64, height: 64, borderRadius: "50%", objectFit: "cover", border: `3px solid ${C.creamDk}` }} />
                    <div>
                      <div style={{ display: "flex", gap: 12, alignItems: "center", marginBottom: 4 }}>
                        <h3 className="melody" style={{ fontSize: 20, fontWeight: 700, color: C.ink }}>{v.name}</h3>
                        <span style={{ background: C.greenLt, color: C.green, padding: "3px 12px", borderRadius: 100, fontSize: 11, fontWeight: 700 }}>🟢 {v.avail}</span>
                      </div>
                      <p style={{ fontSize: 14, color: C.inkSft, marginBottom: 6 }}>{v.spec} · {v.exp} experience</p>
                      <div style={{ display: "flex", gap: 14, fontSize: 13, color: C.inkSft }}>
                        <span style={{ color: C.orange, fontWeight: 600 }}>⭐ {v.rating}</span>
                        <span>({v.reviews.toLocaleString()} reviews)</span>
                        <span>🗣 {v.langs.join(", ")}</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: ".06em", textTransform: "uppercase", color: C.inkSft, marginBottom: 10 }}>Available Slots</p>
                    <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                      {v.slots.map(s => (
                        <button key={s} onClick={() => { setBooking(v); setSlot(s); }}
                          style={{ padding: "8px 16px", borderRadius: 100, border: `1.5px solid ${booking?.name === v.name && slot === s ? C.blue : C.border}`, background: booking?.name === v.name && slot === s ? C.blueLt : "transparent", color: booking?.name === v.name && slot === s ? C.blue : C.inkSft, fontSize: 13, fontWeight: 500, cursor: "pointer", transition: "all .18s" }}>
                          {s}
                        </button>
                      ))}
                    </div>
                    {booking?.name === v.name && (
                      <div style={{ marginTop: 18, display: "flex", gap: 12, alignItems: "center" }}>
                        <input type="date" value={date} onChange={e => setDate(e.target.value)} style={{ padding: "10px 14px", borderRadius: 12, border: `1.5px solid ${C.border}`, fontSize: 14, outline: "none", color: C.ink }} />
                        <button className="btn btn-md btn-primary" onClick={() => { if (date && slot) setConfirmed(true); else alert("Please select a date and a time slot."); }}>Confirm ✓</button>
                        <button className="btn btn-md btn-ghost" onClick={() => { setBooking(null); setSlot(""); }}>Cancel</button>
                      </div>
                    )}
                  </div>
                </div>
                <div style={{ padding: "36px 36px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "flex-end", gap: 14, borderLeft: `1px solid ${C.border}`, minWidth: 200 }}>
                  <div style={{ textAlign: "right" }}>
                    <div className="melody" style={{ fontSize: 28, fontWeight: 700, color: C.ink }}>{v.price}</div>
                    <div style={{ fontSize: 12, color: C.inkSft }}>per session</div>
                  </div>
                  <button className="btn btn-md btn-primary" style={{ width: "100%" }} onClick={() => { setBooking(v); setSlot(""); }}>Book Visit</button>
                  <button className="btn btn-md btn-outline" style={{ width: "100%" }} onClick={() => alert("Opening video consultation…")}>📹 Video Consult</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

// ══════════════════════════════════════════════════════════════════
//  SHOP
// ══════════════════════════════════════════════════════════════════
function ShopPage() {
  const [cat, setCat] = useState("All");
  const [cart, setCart] = useState([]);
  const [wish, setWish] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);

  const cats = ["All", "Food", "Toys", "Accessories", "Medicines", "Grooming", "Tech"];
  const products = [
    { id: 1, name: "Royal Canin Medium Adult 4kg", cat: "Food", price: 2499, old: 2999, img: P.shop1, rating: 4.8, rev: 1240, badge: "Best Seller", bc: C.orange },
    { id: 2, name: "Kong Extreme Chew Toy", cat: "Toys", price: 899, old: 1100, img: P.dog2, rating: 4.7, rev: 890, badge: "Popular", bc: C.blue },
    { id: 3, name: "GPS Pet Tracker Pro 2026", cat: "Tech", price: 3999, old: 4999, img: P.shop2, rating: 4.9, rev: 456, badge: "New", bc: C.green },
    { id: 4, name: "Himalaya PetCare Shampoo", cat: "Grooming", price: 349, old: 449, img: P.groom, rating: 4.6, rev: 2100, badge: "", bc: "" },
    { id: 5, name: "Complete Pet First Aid Kit", cat: "Medicines", price: 799, old: 999, img: P.vet1, rating: 4.8, rev: 560, badge: "Essential", bc: C.red },
    { id: 6, name: "Premium Adjustable Harness", cat: "Accessories", price: 1299, old: 1599, img: P.train, rating: 4.7, rev: 780, badge: "", bc: "" },
  ];

  const shown = cat === "All" ? products : products.filter(p => p.cat === cat);
  const total = cart.reduce((s, p) => s + p.price, 0);

  return (
    <div style={{ paddingTop: 96 }}>
      <section style={{ padding: "90px 0 60px", background: C.cream }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 32px", display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
          <div>
            <div className="pill pill-orange" style={{ marginBottom: 24 }}>Shop</div>
            <h1 className="melody-italic" style={{ fontSize: "clamp(52px,7vw,94px)", fontWeight: 700, lineHeight: .92, color: C.ink }}>Premium.<br />Trusted. Fast.</h1>
          </div>
          <button className="btn btn-md btn-outline" onClick={() => setCartOpen(o => !o)} style={{ position: "relative" }}>
            🛒 Cart
            {cart.length > 0 && <span style={{ position: "absolute", top: -8, right: -8, width: 22, height: 22, borderRadius: "50%", background: C.orange, color: "#fff", fontSize: 11, fontWeight: 700, display: "flex", alignItems: "center", justifyContent: "center" }}>{cart.length}</span>}
          </button>
        </div>
      </section>

      {/* Cart drawer */}
      {cartOpen && (
        <div style={{ position: "fixed", top: 0, right: 0, bottom: 0, width: 380, background: C.white, boxShadow: "-20px 0 60px rgba(0,0,0,.14)", zIndex: 800, display: "flex", flexDirection: "column", paddingTop: 96 }}>
          <div style={{ padding: "22px 26px", borderBottom: `1px solid ${C.border}`, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <h3 className="melody" style={{ fontWeight: 700, color: C.ink, fontSize: 18 }}>Cart ({cart.length})</h3>
            <button onClick={() => setCartOpen(false)} style={{ background: C.cream, border: "none", borderRadius: "50%", width: 32, height: 32, cursor: "pointer", fontSize: 16 }}>✕</button>
          </div>
          <div style={{ flex: 1, overflowY: "auto", padding: "16px 26px" }}>
            {cart.length === 0 ? <p style={{ color: C.inkSft, textAlign: "center", marginTop: 60, fontSize: 15 }}>Your cart is empty 🛒</p> : cart.map((item, i) => (
              <div key={i} style={{ display: "flex", gap: 14, padding: "14px 0", borderBottom: `1px solid ${C.border}` }}>
                <Img src={item.img} style={{ width: 56, height: 56, objectFit: "cover", borderRadius: 10 }} />
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 14, fontWeight: 600, color: C.ink, lineHeight: 1.3 }}>{item.name}</div>
                  <div style={{ fontSize: 15, fontWeight: 700, color: C.orange, marginTop: 4 }}>₹{item.price.toLocaleString()}</div>
                </div>
              </div>
            ))}
          </div>
          {cart.length > 0 && (
            <div style={{ padding: "18px 26px", borderTop: `1px solid ${C.border}` }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 16 }}>
                <span style={{ fontWeight: 600, color: C.inkSft }}>Total</span>
                <span className="melody" style={{ fontWeight: 700, fontSize: 22, color: C.ink }}>₹{total.toLocaleString()}</span>
              </div>
              <button className="btn btn-lg btn-primary" style={{ width: "100%" }} onClick={() => alert("Proceeding to secure checkout! 🛍️")}>Checkout →</button>
            </div>
          )}
        </div>
      )}

      <section style={{ padding: "40px 0 100px", background: C.cream }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 32px" }}>
          <div style={{ display: "flex", gap: 8, marginBottom: 36, flexWrap: "wrap" }}>
            {cats.map(c => (
              <button key={c} onClick={() => setCat(c)} style={{ padding: "9px 22px", borderRadius: 100, border: `1.5px solid ${cat === c ? C.orange : C.border}`, background: cat === c ? C.orange : C.white, color: cat === c ? "#fff" : C.inkSft, fontSize: 14, fontWeight: 500, cursor: "pointer", transition: "all .2s" }}>{c}</button>
            ))}
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 24 }}>
            {shown.map(p => (
              <div key={p.id} className="card card-lift">
                <div style={{ position: "relative", height: 240 }}>
                  <Img src={p.img} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                  {p.badge && <div style={{ position: "absolute", top: 14, left: 14, background: p.bc, color: "#fff", fontSize: 9, fontWeight: 700, padding: "3px 10px", borderRadius: 100, textTransform: "uppercase", letterSpacing: ".05em" }}>{p.badge}</div>}
                  <button onClick={() => setWish(w => w.includes(p.id) ? w.filter(x => x !== p.id) : [...w, p.id])}
                    style={{ position: "absolute", top: 14, right: 14, width: 36, height: 36, borderRadius: "50%", background: "rgba(255,255,255,.9)", border: "none", fontSize: 16, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    {wish.includes(p.id) ? "❤️" : "🤍"}
                  </button>
                </div>
                <div style={{ padding: "20px 22px" }}>
                  <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: ".07em", textTransform: "uppercase", color: C.inkSft }}>{p.cat}</span>
                  <h3 style={{ fontSize: 16, fontWeight: 700, color: C.ink, margin: "6px 0 8px", lineHeight: 1.3 }}>{p.name}</h3>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 14 }}>
                    <div style={{ display: "flex", gap: 8, alignItems: "baseline" }}>
                      <span className="melody" style={{ fontSize: 20, fontWeight: 700, color: C.ink }}>₹{p.price.toLocaleString()}</span>
                      <span style={{ fontSize: 13, color: C.sand, textDecoration: "line-through" }}>₹{p.old.toLocaleString()}</span>
                    </div>
                    <span style={{ fontSize: 12, color: C.orange, fontWeight: 600 }}>⭐ {p.rating}</span>
                  </div>
                  <button className="btn btn-md btn-primary" style={{ width: "100%" }} onClick={() => setCart(c => [...c, p])}>Add to Cart →</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

// ══════════════════════════════════════════════════════════════════
//  LOST & FOUND  — complete forms
// ══════════════════════════════════════════════════════════════════
// ── Image Upload Widget (used in Lost & Found) ────────────────────
function LostImageUpload({ label, hint, accentColor }) {
  const [previews, setPreviews] = useState([]);
  const inputRef = useRef();

  const handleFiles = (files) => {
    const arr = Array.from(files).slice(0, 5 - previews.length);
    arr.forEach(file => {
      const reader = new FileReader();
      reader.onload = e => setPreviews(p => [...p, { src: e.target.result, name: file.name }]);
      reader.readAsDataURL(file);
    });
  };

  const [dragging, setDragging] = useState(false);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
      <label style={{ fontSize: 11, fontWeight: 700, letterSpacing: ".06em", textTransform: "uppercase", color: C.inkSft, display: "block" }}>{label}</label>
      <p style={{ fontSize: 12, color: C.sand, marginBottom: 6 }}>{hint}</p>

      {/* Drop zone */}
      <div
        onClick={() => previews.length < 5 && inputRef.current?.click()}
        onDragOver={e => { e.preventDefault(); setDragging(true); }}
        onDragLeave={() => setDragging(false)}
        onDrop={e => { e.preventDefault(); setDragging(false); handleFiles(e.dataTransfer.files); }}
        style={{
          border: `2px dashed ${dragging ? accentColor : C.border}`,
          borderRadius: 14,
          padding: "28px 20px",
          textAlign: "center",
          cursor: previews.length >= 5 ? "not-allowed" : "pointer",
          background: dragging ? `${accentColor}08` : C.cream,
          transition: "border-color .2s, background .2s",
        }}>
        <div style={{ fontSize: 36, marginBottom: 10 }}>📸</div>
        <div style={{ fontWeight: 600, color: C.ink, fontSize: 14, marginBottom: 4 }}>
          {previews.length >= 5 ? "Maximum 5 photos reached" : "Click to upload or drag & drop"}
        </div>
        <div style={{ fontSize: 12, color: C.sand }}>JPG, PNG, WEBP · Max 10MB per photo · Up to 5 photos</div>
        <input
          ref={inputRef}
          type="file"
          accept="image/*"
          multiple
          style={{ display: "none" }}
          onChange={e => handleFiles(e.target.files)}
        />
      </div>

      {/* Previews */}
      {previews.length > 0 && (
        <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 4 }}>
          {previews.map((p, i) => (
            <div key={i} style={{ position: "relative", width: 90, height: 90 }}>
              <img src={p.src} alt={p.name} style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: 10, border: `2px solid ${accentColor}` }} />
              <button
                onClick={() => setPreviews(prev => prev.filter((_, j) => j !== i))}
                style={{
                  position: "absolute", top: -6, right: -6,
                  width: 22, height: 22, borderRadius: "50%",
                  background: C.red, border: "2px solid #fff",
                  color: "#fff", fontSize: 11, fontWeight: 700,
                  cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center",
                }}>✕</button>
              {i === 0 && (
                <div style={{ position: "absolute", bottom: 4, left: 4, background: accentColor, borderRadius: 4, padding: "1px 5px", fontSize: 9, fontWeight: 700, color: "#fff" }}>MAIN</div>
              )}
            </div>
          ))}
          {previews.length < 5 && (
            <div onClick={() => inputRef.current?.click()} style={{
              width: 90, height: 90, borderRadius: 10,
              border: `2px dashed ${C.border}`, display: "flex",
              flexDirection: "column", alignItems: "center", justifyContent: "center",
              cursor: "pointer", color: C.sand, fontSize: 22, background: C.cream,
              transition: "border-color .18s",
            }}
              onMouseEnter={e => e.currentTarget.style.borderColor = accentColor}
              onMouseLeave={e => e.currentTarget.style.borderColor = C.border}>
              +
            </div>
          )}
        </div>
      )}
    </div>
  );
}

function LostFoundPage() {
  const [tab, setTab] = useState("browse"); // default to browse
  const [type, setType] = useState("lost"); // lost | found (for report tab)
  const [submitted, setSubmitted] = useState(false);
  const [filterType, setFilterType] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [detailListing, setDetailListing] = useState(null);
  const [filterDropOpen, setFilterDropOpen] = useState(false);

  // Lost pet form
  const [lForm, setLForm] = useState({
    petName: "", species: "", breed: "", gender: "", age: "", color: "", size: "", microchip: "", distinctiveMarks: "",
    lastSeenDate: "", lastSeenTime: "", lastSeenAddress: "", lastSeenCity: "", lastSeenArea: "", lastSeenLandmark: "",
    ownerName: "", ownerPhone: "", ownerPhone2: "", ownerEmail: "", ownerAddress: "", reward: "",
    description: "", vaccinated: "", collar: "", collarDescription: "",
  });
  const lf = (k) => (e) => setLForm(x => ({ ...x, [k]: e.target.value }));

  // Found pet form
  const [fForm, setFForm] = useState({
    species: "", breed: "", gender: "", estimatedAge: "", color: "", size: "", distinctiveMarks: "", hasCollar: "", collarDesc: "", microchipScanned: "",
    foundDate: "", foundTime: "", foundAddress: "", foundCity: "", foundArea: "", foundLandmark: "",
    finderName: "", finderPhone: "", finderEmail: "", currentlyWith: "", safeLocation: "",
    photos: "", notes: "",
  });
  const ff = (k) => (e) => setFForm(x => ({ ...x, [k]: e.target.value }));

  // Sample listings
  const initialListings = [
    {
      id: 1,
      type: "lost",
      name: "Bruno",
      species: "Dog",
      breed: "Labrador Retriever",
      color: "Golden",
      area: "RS Puram, Coimbatore",
      date: "2026-06-04",
      img: P.dog4,
      contact: "98765 43210",
      reward: "Yes — ₹5,000",
      gender: "Male",
      age: "2 years",
      size: "Large (15-30kg)",
      microchip: "981022300481",
      features: "Friendly golden retriever with a black collar. Responds to the name Bruno.",
      collar: "Yes",
      collarDescription: "Black collar with silver name tag",
      time: "08:00 AM",
      address: "14, East TV Swamy Road, near Post Office",
      city: "Coimbatore",
      landmark: "Near Post Office",
      ownerName: "Sriram",
      email: "sriram@example.com",
      phone2: "",
      currentlyWith: "",
      notes: "Bruno is highly friendly and loves to play. Please contact if you spot him."
    },
    {
      id: 2,
      type: "found",
      name: "Unknown",
      species: "Cat",
      breed: "Domestic Shorthair",
      color: "Grey tabby",
      area: "Gandhipuram, Coimbatore",
      date: "2026-05-20",
      img: P.cat2,
      contact: "87654 32109",
      reward: "N/A",
      gender: "Unknown",
      age: "Adult",
      size: "Medium",
      microchip: "Not yet scanned",
      features: "Stripe pattern, very vocal, found near food court.",
      collar: "No",
      collarDescription: "",
      time: "8:00 PM",
      address: "Crosscut Road Market",
      city: "Coimbatore",
      landmark: "Near Lakshmi Complex",
      ownerName: "Ankit",
      email: "ankit@example.com",
      phone2: "",
      currentlyWith: "Local shelter",
      notes: "Currently staying at the local rescue center."
    },
    {
      id: 3,
      type: "lost",
      name: "Cleo",
      species: "Dog",
      breed: "Beagle",
      color: "Tri-colour",
      area: "Saibaba Colony, Coimbatore",
      date: "2026-05-19",
      img: P.dog2,
      contact: "76543 21098",
      reward: "Yes — ₹2,000",
      gender: "Female",
      age: "1.5 years",
      size: "Medium (5-15kg)",
      microchip: "None",
      features: "Distinct brown spot on her back, floppy ears.",
      collar: "Yes",
      collarDescription: "Red leather collar",
      time: "4:00 PM",
      address: "NSR Road",
      city: "Coimbatore",
      landmark: "Behind Annapoorna Restaurant",
      ownerName: "Vikram",
      email: "vikram@example.com",
      phone2: "",
      currentlyWith: "",
      notes: "Skittish around cars, please approach gently."
    },
    {
      id: 4,
      type: "found",
      name: "Unknown",
      species: "Dog",
      breed: "Labrador mix",
      color: "Black & white",
      area: "Peelamedu, Coimbatore",
      date: "2026-05-21",
      img: P.dog3,
      contact: "65432 10987",
      reward: "N/A",
      gender: "Male",
      age: "Approx 2 years",
      size: "Large",
      microchip: "Yes — has chip",
      features: "Black coat with a white star-shaped chest patch, wearing blue collar.",
      collar: "Yes",
      collarDescription: "Blue fabric collar, no tags",
      time: "11:30 AM",
      address: "Avinashi Road near PSG",
      city: "Coimbatore",
      landmark: "Near fun mall",
      ownerName: "Ganesh",
      email: "ganesh@example.com",
      phone2: "",
      currentlyWith: "Me (safe at home)",
      notes: "Very healthy and energetic dog. Walks well on leash."
    }
  ];

  const [listingsList, setListingsList] = useState(initialListings);

  useEffect(() => {
    const navEl = document.getElementById("main-navbar");
    if (detailListing) {
      document.body.style.overflow = "hidden";
      if (navEl) navEl.style.zIndex = "800";
    } else {
      document.body.style.overflow = "";
      if (navEl) navEl.style.zIndex = "900";
    }
    return () => {
      document.body.style.overflow = "";
      if (navEl) navEl.style.zIndex = "900";
    };
  }, [detailListing]);

  if (submitted) return (
    <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", background: C.cream, paddingTop: 96 }}>
      <div style={{ textAlign: "center", padding: 60 }}>
        <div style={{ fontSize: 80, marginBottom: 24, animation: "float 2s ease-in-out infinite" }}>✅</div>
        <h2 className="melody" style={{ fontSize: 48, fontWeight: 700, color: C.ink, marginBottom: 16 }}>{type === "lost" ? "Report Submitted!" : "Found Report Submitted!"}</h2>
        <p style={{ fontSize: 17, color: C.inkSft, lineHeight: 1.7, maxWidth: 420, margin: "0 auto 12px" }}>
          {type === "lost"
            ? "Your lost pet report is live. We're sending alerts to nearby Pawprint users. Check your email for confirmation."
            : "Thank you for reporting a found pet. The owner may already be searching — we'll match records and notify you."}
        </p>
        <p style={{ fontSize: 14, color: C.inkSft, marginBottom: 36 }}>Report ID: <strong>PAW-{Math.floor(Math.random() * 900000 + 100000)}</strong></p>
        <div style={{ display: "flex", gap: 14, justifyContent: "center" }}>
          <button className="btn btn-lg btn-primary" onClick={() => { setSubmitted(false); setTab("browse"); }}>View All Reports</button>
          <button className="btn btn-lg btn-outline" onClick={() => { setSubmitted(false); }}>Make Another Report</button>
        </div>
      </div>
    </div>
  );

  const inputStyle = { padding: "12px 15px", borderRadius: 11, border: `1.5px solid ${C.border}`, fontSize: 14, color: C.ink, background: "#fff", outline: "none", width: "100%", transition: "border-color .18s" };
  const labelStyle = { fontSize: 11, fontWeight: 700, letterSpacing: ".06em", textTransform: "uppercase", color: C.inkSft, display: "block", marginBottom: 6 };
  const sectionBox = (children, title, icon) => (
    <div style={{ background: C.white, borderRadius: 20, padding: "32px", border: `1px solid ${C.border}`, marginBottom: 20 }}>
      <h3 className="melody" style={{ fontSize: 19, fontWeight: 700, color: C.ink, marginBottom: 22 }}>{icon} {title}</h3>
      {children}
    </div>
  );

  return (
    <div style={{ paddingTop: 96 }}>
      {/* Hero */}
      <section style={{ padding: "90px 0 60px", background: C.inkMd, position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: -60, right: -60, width: 320, height: 320, borderRadius: "50%", background: `${C.orange}15`, pointerEvents: "none" }} />
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 32px" }}>
          <div className="pill pill-red" style={{ marginBottom: 24 }}>📍 Lost & Found</div>
          <h1 className="melody-italic" style={{ fontSize: "clamp(48px,6vw,88px)", fontWeight: 700, lineHeight: .93, color: "#fff", marginBottom: 24 }}>Every second<br />counts.</h1>
          <p style={{ fontSize: 18, color: "rgba(255,255,255,.6)", lineHeight: 1.7, maxWidth: 480 }}>Report a missing pet, flag a found animal, or browse active cases in your area. Our community finds pets faster together.</p>
        </div>
      </section>

      {/* Quick stats */}
      <section style={{ background: C.white, padding: "24px 0", borderBottom: `1px solid ${C.border}` }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 32px", display: "flex", gap: 40, justifyContent: "center", flexWrap: "wrap" }}>
          {[["1,240", "Pets Reunited This Year"], ["48h", "Avg. Reunion Time"], ["85+", "Cities with Active Alerts"], ["24/7", "Community Support"]].map(([v, l]) => (
            <div key={l} style={{ textAlign: "center" }}>
              <div className="melody" style={{ fontSize: 26, fontWeight: 700, color: C.orange }}>{v}</div>
              <div style={{ fontSize: 12, color: C.inkSft, marginTop: 2 }}>{l}</div>
            </div>
          ))}
        </div>
      </section>



      <section style={{ padding: "48px 0 100px", background: C.cream }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 32px" }}>

          {/* ─ REPORT TAB ─ */}
          {tab === "report" && (
            <div>
              {/* Back to Browsings */}
              <div style={{ marginBottom: 28 }}>
                <button
                  onClick={() => setTab("browse")}
                  style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "10px 20px", borderRadius: 10, border: `1.5px solid ${C.border}`, background: C.white, color: C.ink, fontWeight: 600, fontSize: 14, cursor: "pointer", transition: "all .18s", fontFamily: "inherit" }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = C.orange; e.currentTarget.style.color = C.orange; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = C.border; e.currentTarget.style.color = C.ink; }}
                >
                  ← Back to Browsings
                </button>
              </div>
              {/* Lost / Found toggle — centered */}
              <div style={{ display: "flex", justifyContent: "center", marginBottom: 0 }}>

                <div style={{ display: "flex", gap: 12, padding: "6px", background: C.white, borderRadius: 14, border: `1px solid ${C.border}`, width: "fit-content" }}>
                  {[
                    { id: "lost", label: "🔴 Lost Pet — I lost my pet" },
                    { id: "found", label: "🟢 Found Pet — I found someone's pet" },
                  ].map(t => (
                    <button key={t.id} onClick={() => setType(t.id)} style={{ padding: "10px 22px", borderRadius: 10, border: "none", background: type === t.id ? (t.id === "lost" ? C.red : C.green) : "transparent", color: type === t.id ? "#fff" : C.inkSft, fontWeight: type === t.id ? 700 : 500, cursor: "pointer", fontSize: 14, transition: "all .2s" }}>
                      {t.label}
                    </button>
                  ))}
                </div>
              </div>
              {/* Gap below toggle */}
              <div style={{ height: 36 }} />
              {/* Centered form wrapper */}
              <div style={{ maxWidth: 960, margin: "0 auto" }}>

              {/* ── LOST PET FORM ── */}
              {type === "lost" && (
                <div>
                  {sectionBox(
                    <div className="report-form-grid">
                      {[["Pet's Name *", "petName", "text", "e.g. Max"], ["Species *", "species", "select", ""], ["Breed", "breed", "text", "e.g. Golden Retriever"], ["Gender", "gender", "select", ""], ["Approximate Age", "age", "text", "e.g. 3 years"], ["Primary Colour *", "color", "text", "e.g. Golden brown"], ["Size", "size", "select", ""], ["Microchip ID", "microchip", "text", "If available"]].map(([l, k, t, ph]) => (
                        <div key={k} style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                          <label style={labelStyle}>{l}</label>
                          {t === "select"
                            ? <select value={lForm[k]} onChange={lf(k)} style={inputStyle}>
                              <option value="">Select…</option>
                              {k === "species" && <><option>Dog</option><option>Cat</option><option>Bird</option><option>Other</option></>}
                              {k === "gender" && <><option>Male</option><option>Female</option><option>Unknown</option></>}
                              {k === "size" && <><option>Small (under 5kg)</option><option>Medium (5–15kg)</option><option>Large (15–30kg)</option><option>Extra Large (30kg+)</option></>}
                            </select>
                            : <input type={t} placeholder={ph} value={lForm[k]} onChange={lf(k)} style={inputStyle} onFocus={e => e.target.style.borderColor = C.orange} onBlur={e => e.target.style.borderColor = C.border} />
                          }
                        </div>
                      ))}
                      <div style={{ gridColumn: "1/-1", display: "flex", flexDirection: "column", gap: 6 }}>
                        <label style={labelStyle}>Distinctive Marks / Features *</label>
                        <textarea placeholder="Describe any unique markings, scars, spots, or features that would help identify your pet…" value={lForm.distinctiveMarks} onChange={lf("distinctiveMarks")} rows={3} style={{ ...inputStyle, resize: "vertical" }} onFocus={e => e.target.style.borderColor = C.orange} onBlur={e => e.target.style.borderColor = C.border} />
                      </div>
                      <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                        <label style={labelStyle}>Wearing Collar?</label>
                        <select value={lForm.collar} onChange={lf("collar")} style={inputStyle}>
                          <option value="">Select…</option><option>Yes</option><option>No</option><option>Sometimes</option>
                        </select>
                      </div>
                      {lForm.collar === "Yes" && (
                        <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                          <label style={labelStyle}>Collar Description</label>
                          <input placeholder="Color, tag text, material…" value={lForm.collarDescription} onChange={lf("collarDescription")} style={inputStyle} onFocus={e => e.target.style.borderColor = C.orange} onBlur={e => e.target.style.borderColor = C.border} />
                        </div>
                      )}

                      {/* ── Upload Images ── */}
                      <div style={{ gridColumn: "1/-1" }}>
                        <LostImageUpload
                          label="Upload Pet Photos *"
                          hint="Upload 1–5 clear photos of your pet. Recent photos help the community identify them faster."
                          accentColor={C.orange}
                        />
                      </div>
                    </div>,
                    "Pet Details", "🐾"
                  )}

                  {sectionBox(
                    <div className="report-form-grid">
                      <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                        <label style={labelStyle}>Date Last Seen *</label>
                        <input type="date" value={lForm.lastSeenDate} onChange={lf("lastSeenDate")} style={inputStyle} onFocus={e => e.target.style.borderColor = C.orange} onBlur={e => e.target.style.borderColor = C.border} />
                      </div>
                      <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                        <label style={labelStyle}>Approximate Time *</label>
                        <input type="time" value={lForm.lastSeenTime} onChange={lf("lastSeenTime")} style={inputStyle} onFocus={e => e.target.style.borderColor = C.orange} onBlur={e => e.target.style.borderColor = C.border} />
                      </div>
                      <div style={{ gridColumn: "1/-1", display: "flex", flexDirection: "column", gap: 6 }}>
                        <label style={labelStyle}>Street / Address Last Seen *</label>
                        <input placeholder="123 MG Road, near the park…" value={lForm.lastSeenAddress} onChange={lf("lastSeenAddress")} style={inputStyle} onFocus={e => e.target.style.borderColor = C.orange} onBlur={e => e.target.style.borderColor = C.border} />
                      </div>
                      <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                        <label style={labelStyle}>City *</label>
                        <input placeholder="Coimbatore" value={lForm.lastSeenCity} onChange={lf("lastSeenCity")} style={inputStyle} onFocus={e => e.target.style.borderColor = C.orange} onBlur={e => e.target.style.borderColor = C.border} />
                      </div>
                      <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                        <label style={labelStyle}>Area / Locality</label>
                        <input placeholder="RS Puram, Gandhipuram…" value={lForm.lastSeenArea} onChange={lf("lastSeenArea")} style={inputStyle} onFocus={e => e.target.style.borderColor = C.orange} onBlur={e => e.target.style.borderColor = C.border} />
                      </div>
                      <div style={{ gridColumn: "1/-1", display: "flex", flexDirection: "column", gap: 6 }}>
                        <label style={labelStyle}>Nearby Landmark</label>
                        <input placeholder="Near ABC School, opposite XYZ Temple…" value={lForm.lastSeenLandmark} onChange={lf("lastSeenLandmark")} style={inputStyle} onFocus={e => e.target.style.borderColor = C.orange} onBlur={e => e.target.style.borderColor = C.border} />
                      </div>
                    </div>,
                    "Last Seen Location", "📍"
                  )}

                  {sectionBox(
                    <div className="report-form-grid">
                      <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                        <label style={labelStyle}>Your Full Name *</label>
                        <input placeholder="Geetha Sharma" value={lForm.ownerName} onChange={lf("ownerName")} style={inputStyle} onFocus={e => e.target.style.borderColor = C.orange} onBlur={e => e.target.style.borderColor = C.border} />
                      </div>
                      <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                        <label style={labelStyle}>Primary Phone *</label>
                        <input type="tel" placeholder="+91 98765 43210" value={lForm.ownerPhone} onChange={lf("ownerPhone")} style={inputStyle} onFocus={e => e.target.style.borderColor = C.orange} onBlur={e => e.target.style.borderColor = C.border} />
                      </div>
                      <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                        <label style={labelStyle}>Alternate Phone</label>
                        <input type="tel" placeholder="Optional second number" value={lForm.ownerPhone2} onChange={lf("ownerPhone2")} style={inputStyle} onFocus={e => e.target.style.borderColor = C.orange} onBlur={e => e.target.style.borderColor = C.border} />
                      </div>
                      <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                        <label style={labelStyle}>Email Address *</label>
                        <input type="email" placeholder="you@email.com" value={lForm.ownerEmail} onChange={lf("ownerEmail")} style={inputStyle} onFocus={e => e.target.style.borderColor = C.orange} onBlur={e => e.target.style.borderColor = C.border} />
                      </div>
                      <div style={{ gridColumn: "1/-1", display: "flex", flexDirection: "column", gap: 6 }}>
                        <label style={labelStyle}>Your Address (for verification)</label>
                        <input placeholder="Full address for shelter/finder reference" value={lForm.ownerAddress} onChange={lf("ownerAddress")} style={inputStyle} onFocus={e => e.target.style.borderColor = C.orange} onBlur={e => e.target.style.borderColor = C.border} />
                      </div>
                      <div style={{ gridColumn: "1/-1", display: "flex", flexDirection: "column", gap: 6 }}>
                        <label style={labelStyle}>Additional Details / Behaviour Notes</label>
                        <textarea placeholder="Is your pet friendly with strangers? Afraid of loud sounds? Any medical needs? The more detail the better…" value={lForm.description} onChange={lf("description")} rows={4} style={{ ...inputStyle, resize: "vertical" }} onFocus={e => e.target.style.borderColor = C.orange} onBlur={e => e.target.style.borderColor = C.border} />
                      </div>
                      <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                        <label style={labelStyle}>Reward Offered</label>
                        <input placeholder="e.g. ₹5,000 or 'None'" value={lForm.reward} onChange={lf("reward")} style={inputStyle} onFocus={e => e.target.style.borderColor = C.orange} onBlur={e => e.target.style.borderColor = C.border} />
                      </div>
                    </div>,
                    "Owner & Contact Information", "👤"
                  )}

                  <button className="btn btn-lg btn-primary" style={{ width: "100%" }}
                    onClick={() => {
                      if (!lForm.petName || !lForm.ownerName || !lForm.ownerPhone || !lForm.ownerEmail || !lForm.lastSeenDate || !lForm.lastSeenCity) {
                        alert("Please fill in all required (*) fields.");
                        return;
                      }
                      const newPet = {
                        id: Date.now(),
                        type: "lost",
                        name: lForm.petName,
                        species: lForm.species || "Dog",
                        breed: lForm.breed || "Unknown",
                        color: lForm.color || "Unknown",
                        area: lForm.lastSeenArea ? `${lForm.lastSeenArea}, ${lForm.lastSeenCity}` : lForm.lastSeenCity,
                        date: lForm.lastSeenDate,
                        img: P.dog4,
                        contact: lForm.ownerPhone,
                        reward: lForm.reward ? `Yes — ${lForm.reward}` : "N/A",
                        gender: lForm.gender || "Unknown",
                        age: lForm.age || "Unknown",
                        size: lForm.size || "Unknown",
                        microchip: lForm.microchip || "None",
                        features: lForm.distinctiveMarks || "None",
                        collar: lForm.collar || "No",
                        collarDescription: lForm.collarDescription || "",
                        time: lForm.lastSeenTime || "Unknown",
                        address: lForm.lastSeenAddress || "",
                        city: lForm.lastSeenCity,
                        landmark: lForm.lastSeenLandmark || "",
                        ownerName: lForm.ownerName,
                        email: lForm.ownerEmail,
                        phone2: lForm.ownerPhone2 || "",
                        currentlyWith: "",
                        notes: lForm.description || ""
                      };
                      setListingsList(prev => [newPet, ...prev]);
                      setSubmitted(true);
                    }}>
                    🚨 Submit Lost Pet Report
                  </button>
                </div>
              </div>{/* end lost form */}

              {/* ── FOUND PET FORM ── */}
              {type === "found" && (
                <div>
                  {sectionBox(
                    <div className="report-form-grid">
                      {[["Species *", "species", "select", ""], ["Breed (best guess)", "breed", "text", "e.g. Labrador mix"], ["Gender", "gender", "select", ""], ["Estimated Age", "estimatedAge", "text", "e.g. 1–2 years"], ["Colour / Markings *", "color", "text", "e.g. Brown with white chest"], ["Size", "size", "select", ""]].map(([l, k, t, ph]) => (
                        <div key={k} style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                          <label style={labelStyle}>{l}</label>
                          {t === "select"
                            ? <select value={fForm[k]} onChange={ff(k)} style={inputStyle}>
                              <option value="">Select…</option>
                              {k === "species" && <><option>Dog</option><option>Cat</option><option>Bird</option><option>Other</option></>}
                              {k === "gender" && <><option>Male</option><option>Female</option><option>Unknown</option></>}
                              {k === "size" && <><option>Small</option><option>Medium</option><option>Large</option><option>Extra Large</option></>}
                            </select>
                            : <input type={t} placeholder={ph} value={fForm[k]} onChange={ff(k)} style={inputStyle} onFocus={e => e.target.style.borderColor = C.green} onBlur={e => e.target.style.borderColor = C.border} />
                          }
                        </div>
                      ))}
                      <div style={{ gridColumn: "1/-1", display: "flex", flexDirection: "column", gap: 6 }}>
                        <label style={labelStyle}>Distinctive Marks / Features</label>
                        <textarea placeholder="Any unique spots, scars, missing fur, limping, collar marks…" value={fForm.distinctiveMarks} onChange={ff("distinctiveMarks")} rows={3} style={{ ...inputStyle, resize: "vertical" }} onFocus={e => e.target.style.borderColor = C.green} onBlur={e => e.target.style.borderColor = C.border} />
                      </div>
                      <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                        <label style={labelStyle}>Has Collar?</label>
                        <select value={fForm.hasCollar} onChange={ff("hasCollar")} style={inputStyle}>
                          <option value="">Select…</option><option>Yes</option><option>No</option>
                        </select>
                      </div>
                      {fForm.hasCollar === "Yes" && <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                        <label style={labelStyle}>Collar Description</label>
                        <input placeholder="Color, tag, text on tag…" value={fForm.collarDesc} onChange={ff("collarDesc")} style={inputStyle} onFocus={e => e.target.style.borderColor = C.green} onBlur={e => e.target.style.borderColor = C.border} />
                      </div>}
                      <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                        <label style={labelStyle}>Microchip Scanned?</label>
                        <select value={fForm.microchipScanned} onChange={ff("microchipScanned")} style={inputStyle}>
                          <option value="">Select…</option><option>Yes — has chip</option><option>Yes — no chip found</option><option>Not yet scanned</option>
                        </select>
                      </div>

                      {/* ── Upload Images ── */}
                      <div style={{ gridColumn: "1/-1" }}>
                        <LostImageUpload
                          label="Upload Photos of the Found Pet *"
                          hint="Upload 1–5 clear photos. Good photos help owners recognise their pet immediately."
                          accentColor={C.green}
                        />
                      </div>
                    </div>,
                    "Found Pet Details", "🐾"
                  )}

                  {sectionBox(
                    <div className="report-form-grid">
                      <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                        <label style={labelStyle}>Date Found *</label>
                        <input type="date" value={fForm.foundDate} onChange={ff("foundDate")} style={inputStyle} onFocus={e => e.target.style.borderColor = C.green} onBlur={e => e.target.style.borderColor = C.border} />
                      </div>
                      <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                        <label style={labelStyle}>Approximate Time</label>
                        <input type="time" value={fForm.foundTime} onChange={ff("foundTime")} style={inputStyle} onFocus={e => e.target.style.borderColor = C.green} onBlur={e => e.target.style.borderColor = C.border} />
                      </div>
                      <div style={{ gridColumn: "1/-1", display: "flex", flexDirection: "column", gap: 6 }}>
                        <label style={labelStyle}>Street / Address Found *</label>
                        <input placeholder="Where exactly did you find the pet?" value={fForm.foundAddress} onChange={ff("foundAddress")} style={inputStyle} onFocus={e => e.target.style.borderColor = C.green} onBlur={e => e.target.style.borderColor = C.border} />
                      </div>
                      <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                        <label style={labelStyle}>City *</label>
                        <input placeholder="Coimbatore" value={fForm.foundCity} onChange={ff("foundCity")} style={inputStyle} onFocus={e => e.target.style.borderColor = C.green} onBlur={e => e.target.style.borderColor = C.border} />
                      </div>
                      <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                        <label style={labelStyle}>Area / Locality</label>
                        <input placeholder="RS Puram, Saibaba Colony…" value={fForm.foundArea} onChange={ff("foundArea")} style={inputStyle} onFocus={e => e.target.style.borderColor = C.green} onBlur={e => e.target.style.borderColor = C.border} />
                      </div>
                      <div style={{ gridColumn: "1/-1", display: "flex", flexDirection: "column", gap: 6 }}>
                        <label style={labelStyle}>Nearby Landmark</label>
                        <input placeholder="Near ABC School, opposite XYZ Temple…" value={fForm.foundLandmark} onChange={ff("foundLandmark")} style={inputStyle} onFocus={e => e.target.style.borderColor = C.green} onBlur={e => e.target.style.borderColor = C.border} />
                      </div>
                    </div>,
                    "Where was the Pet Found?", "📍"
                  )}

                  {sectionBox(
                    <div className="report-form-grid">
                      <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                        <label style={labelStyle}>Your Full Name *</label>
                        <input placeholder="Rahul Nair" value={fForm.finderName} onChange={ff("finderName")} style={inputStyle} onFocus={e => e.target.style.borderColor = C.green} onBlur={e => e.target.style.borderColor = C.border} />
                      </div>
                      <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                        <label style={labelStyle}>Your Phone *</label>
                        <input type="tel" placeholder="+91 98765 43210" value={fForm.finderPhone} onChange={ff("finderPhone")} style={inputStyle} onFocus={e => e.target.style.borderColor = C.green} onBlur={e => e.target.style.borderColor = C.border} />
                      </div>
                      <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                        <label style={labelStyle}>Your Email</label>
                        <input type="email" placeholder="rahul@email.com" value={fForm.finderEmail} onChange={ff("finderEmail")} style={inputStyle} onFocus={e => e.target.style.borderColor = C.green} onBlur={e => e.target.style.borderColor = C.border} />
                      </div>
                      <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                        <label style={labelStyle}>Pet Currently With</label>
                        <select value={fForm.currentlyWith} onChange={ff("currentlyWith")} style={inputStyle}>
                          <option value="">Select…</option><option>Me (safe at home)</option><option>Neighbor / friend</option><option>Local shelter</option><option>Vet clinic</option><option>Still at found location</option>
                        </select>
                      </div>
                      <div style={{ gridColumn: "1/-1", display: "flex", flexDirection: "column", gap: 6 }}>
                        <label style={labelStyle}>Additional Notes</label>
                        <textarea placeholder="Condition of the pet, behaviour, injuries, anything else the owner should know…" value={fForm.notes} onChange={ff("notes")} rows={3} style={{ ...inputStyle, resize: "vertical" }} onFocus={e => e.target.style.borderColor = C.green} onBlur={e => e.target.style.borderColor = C.border} />
                      </div>
                    </div>,
                    "Your Contact Information", "👤"
                  )}

                  <button className="btn btn-lg btn-primary" style={{ width: "100%", background: C.green, boxShadow: `0 4px 18px ${C.green}44` }}
                    onClick={() => {
                      if (!fForm.species || !fForm.finderName || !fForm.finderPhone || !fForm.foundDate || !fForm.foundCity) {
                        alert("Please fill in all required (*) fields.");
                        return;
                      }
                      const newPet = {
                        id: Date.now(),
                        type: "found",
                        name: "Unknown",
                        species: fForm.species,
                        breed: fForm.breed || "Unknown",
                        color: fForm.color || "Unknown",
                        area: fForm.foundArea ? `${fForm.foundArea}, ${fForm.foundCity}` : fForm.foundCity,
                        date: fForm.foundDate,
                        img: P.cat2,
                        contact: fForm.finderPhone,
                        reward: "N/A",
                        gender: fForm.gender || "Unknown",
                        age: fForm.estimatedAge || "Unknown",
                        size: fForm.size || "Unknown",
                        microchip: fForm.microchipScanned || "Not yet scanned",
                        features: fForm.distinctiveMarks || "None",
                        collar: fForm.hasCollar || "No",
                        collarDescription: fForm.collarDesc || "",
                        time: fForm.foundTime || "Unknown",
                        address: fForm.foundAddress || "",
                        city: fForm.foundCity,
                        landmark: fForm.foundLandmark || "",
                        ownerName: fForm.finderName,
                        email: fForm.finderEmail || "",
                        phone2: "",
                        currentlyWith: fForm.currentlyWith || "",
                        notes: fForm.notes || ""
                      };
                      setListingsList(prev => [newPet, ...prev]);
                      setSubmitted(true);
                    }}>
                    🐾 Submit Found Pet Report
                  </button>
                </div>
              )}
              </div>{/* end centered form wrapper */}
            </div>
          )}

          {/* ─ BROWSE TAB ─ */}
          {tab === "browse" && (
            <div>
              {/* Filter bar: [Search full-width] [Filter▼] [Report Pet] */}
              <div style={{ display: "flex", gap: 12, marginBottom: 28, padding: "14px 20px", background: C.white, borderRadius: 16, border: `1px solid ${C.border}`, alignItems: "center", flexWrap: "wrap" }}>
                {/* Search — full width */}
                <input
                  placeholder="Search by breed, area, city…"
                  value={searchQuery}
                  onChange={e => setSearchQuery(e.target.value)}
                  style={{ ...inputStyle, flex: "1 1 200px" }}
                  onFocus={e => e.target.style.borderColor = C.orange}
                  onBlur={e => e.target.style.borderColor = C.border}
                />

                {/* Filter dropdown */}
                <div style={{ position: "relative", flexShrink: 0 }}>
                  <button
                    onClick={() => setFilterDropOpen(v => !v)}
                    style={{ display: "flex", alignItems: "center", gap: 8, padding: "10px 16px", borderRadius: 12, border: `1.5px solid ${C.border}`, background: filterType !== "All" ? C.orange : C.white, color: filterType !== "All" ? "#fff" : C.ink, fontWeight: 600, fontSize: 14, cursor: "pointer", transition: "all .18s", outline: "none", height: 42 }}
                  >
                    <span>{filterType === "All" ? "All Listings" : filterType === "lost" ? "Lost 🔴" : "Found 🟢"}</span>
                    <span style={{ fontSize: 10, opacity: 0.6 }}>▼</span>
                  </button>
                  {filterDropOpen && (
                    <div style={{ position: "absolute", top: "calc(100% + 8px)", left: 0, background: C.white, borderRadius: 12, border: `1px solid ${C.border}`, boxShadow: "0 12px 40px rgba(0,0,0,0.12)", zIndex: 100, minWidth: 180, overflow: "hidden" }}
                      onMouseLeave={() => setFilterDropOpen(false)}
                    >
                      {[["All Listings", "All"], ["Lost 🔴", "lost"], ["Found 🟢", "found"]].map(([label, val]) => (
                        <button key={val} onClick={() => { setFilterType(val); setFilterDropOpen(false); }}
                          style={{ display: "block", width: "100%", textAlign: "left", padding: "11px 18px", border: "none", background: filterType === val ? C.orangeLt : "transparent", color: filterType === val ? C.orange : C.ink, fontSize: 14, fontWeight: filterType === val ? 700 : 400, cursor: "pointer", transition: "background .15s" }}
                          onMouseEnter={e => e.currentTarget.style.background = filterType === val ? C.orangeLt : C.cream}
                          onMouseLeave={e => e.currentTarget.style.background = filterType === val ? C.orangeLt : "transparent"}
                        >
                          {label}
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* Report CTA */}
                <button className="btn btn-sm btn-primary" onClick={() => setTab("report")}
                  style={{ borderRadius: 10, padding: "10px 22px", fontSize: 13, fontWeight: 700, height: 42, display: "flex", alignItems: "center", gap: 6, whiteSpace: "nowrap", flexShrink: 0 }}>
                  📝 Report Pet
                </button>
              </div>

              {/* 3-column grid for vertical bento cards */}
              <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
                {listingsList.filter(l => {
                  const typeMatch = filterType === "All" || l.type === filterType;
                  const searchMatch = !searchQuery ||
                    l.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                    l.breed.toLowerCase().includes(searchQuery.toLowerCase()) ||
                    l.area.toLowerCase().includes(searchQuery.toLowerCase()) ||
                    l.color.toLowerCase().includes(searchQuery.toLowerCase());
                  return typeMatch && searchMatch;
                }).map((l, i) => (
                  <div key={l.id || i} onClick={() => setDetailListing(l)}
                    style={{ borderRadius: 20, overflow: "hidden", cursor: "pointer", display: "flex", flexDirection: "column", background: "#fff", border: `1px solid ${C.border}`, boxShadow: "0 2px 16px rgba(0,0,0,0.06)", transition: "transform .2s, box-shadow .2s" }}
                    onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = "0 12px 36px rgba(0,0,0,0.12)"; }}
                    onMouseLeave={e => { e.currentTarget.style.transform = ""; e.currentTarget.style.boxShadow = "0 2px 16px rgba(0,0,0,0.06)"; }}
                  >
                    {/* Image top */}
                    <div style={{ position: "relative", width: "100%", aspectRatio: "4/3", overflow: "hidden", background: C.cream }}>
                      <Img src={l.img} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
                      <div style={{ position: "absolute", top: 12, left: 12 }}>
                        <span className={`pill ${l.type === "lost" ? "pill-red" : "pill-green"}`} style={{ fontSize: 11, fontWeight: 700 }}>{l.type === "lost" ? "🔴 LOST" : "🟢 FOUND"}</span>
                      </div>
                      {l.reward !== "N/A" && <div style={{ position: "absolute", top: 12, right: 12, background: C.orange, color: "#fff", fontSize: 11, fontWeight: 700, padding: "4px 10px", borderRadius: 100 }}>🏆 Reward</div>}
                    </div>
                    {/* Details */}
                    <div style={{ padding: "18px 20px 20px", display: "flex", flexDirection: "column", gap: 10, flex: 1 }}>
                      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                        <div className="melody" style={{ fontSize: 19, fontWeight: 700, color: C.ink, lineHeight: 1.1 }}>{l.name}</div>
                        <div style={{ fontSize: 11, color: C.inkSft, background: C.cream, padding: "3px 10px", borderRadius: 100 }}>{l.species}</div>
                      </div>
                      <div style={{ fontSize: 13, color: C.inkSft }}>{l.breed} · {l.color}</div>
                      <div style={{ display: "flex", flexDirection: "column", gap: 4, fontSize: 12.5, color: C.inkSft, borderTop: `1px solid ${C.border}`, paddingTop: 10, marginTop: 2 }}>
                        <div>📍 {l.area}</div>
                        <div>📅 {l.date}</div>
                        {l.reward !== "N/A" && <div style={{ color: C.orange, fontWeight: 600 }}>🏆 {l.reward}</div>}
                      </div>
                    </div>
                  </div>
                ))}
              </div>


            </div>
          )}
        </div>
      </section>

      {/* Detail Modal Overlay */}
      {detailListing && (
        <div style={{ position: "fixed", inset: 0, background: "rgba(17, 17, 17, 0.6)", backdropFilter: "blur(8px)", zIndex: 1100, display: "flex", alignItems: "flex-start", justifyContent: "center", padding: "120px 24px 40px", overflowY: "auto" }} onClick={() => setDetailListing(null)}>
          <div style={{ background: C.white, borderRadius: 28, width: "100%", maxWidth: 800, maxHeight: "90vh", overflowY: "auto", boxShadow: "0 40px 100px rgba(0,0,0,0.25)", position: "relative", animation: "scaleIn 0.3s cubic-bezier(.22,1,.36,1) both" }} onClick={e => e.stopPropagation()}>
            {/* Close button */}
            <button onClick={() => setDetailListing(null)} style={{ position: "absolute", top: 20, right: 20, width: 36, height: 36, borderRadius: "50%", border: "none", background: "rgba(17,17,17,0.06)", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16, fontWeight: "bold", zIndex: 10, transition: "all 0.2s" }} onMouseEnter={e => e.currentTarget.style.background='rgba(17,17,17,0.12)'} onMouseLeave={e => e.currentTarget.style.background='rgba(17,17,17,0.06)'}>✕</button>

            {detailListing.type === 'lost' ? (
              <div style={{ padding: 32 }}>
                {/* Form Header */}
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 28, borderBottom: `2px solid ${C.redLt}`, paddingBottom: 16 }}>
                  <span style={{ fontSize: 32 }}>🔴</span>
                  <div>
                    <h2 className="melody" style={{ fontSize: 32, color: C.ink, margin: 0, lineHeight: 1.1 }}>I Lost My Pet — Report Form</h2>
                    <p style={{ fontSize: 13, color: C.inkSft, margin: "4px 0 0 0" }}>This form was submitted by the owner. Below are the registered details.</p>
                  </div>
                </div>

                {/* Form Body */}
                <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
                  {/* Photo Display */}
                  <div style={{ width: "100%", height: 280, borderRadius: 16, overflow: "hidden", background: "#eee" }}>
                    <img src={detailListing.img} style={{ width: "100%", height: "100%", objectFit: "cover" }} alt={detailListing.name} />
                  </div>

                  {/* Section 1: Pet Details */}
                  <div style={{ background: C.cream, borderRadius: 20, padding: 24, border: `1px solid ${C.border}` }}>
                    <h3 style={{ fontSize: 16, fontWeight: 700, color: C.ink, marginBottom: 20, display: "flex", alignItems: "center", gap: 8 }}>
                      <span>🐾</span> Pet Details
                    </h3>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 16 }}>
                      <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                        <label style={{ fontSize: 11, fontWeight: 700, textTransform: "uppercase", color: C.inkSft }}>Pet's Name</label>
                        <input style={{ padding: "10px 14px", borderRadius: 8, border: `1.5px solid ${C.border}`, background: "#fff", color: C.ink, width: "100%", fontSize: 14 }} value={detailListing.name || ''} disabled />
                      </div>
                      <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                        <label style={{ fontSize: 11, fontWeight: 700, textTransform: "uppercase", color: C.inkSft }}>Species</label>
                        <input style={{ padding: "10px 14px", borderRadius: 8, border: `1.5px solid ${C.border}`, background: "#fff", color: C.ink, width: "100%", fontSize: 14 }} value={detailListing.species || ''} disabled />
                      </div>
                      <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                        <label style={{ fontSize: 11, fontWeight: 700, textTransform: "uppercase", color: C.inkSft }}>Breed</label>
                        <input style={{ padding: "10px 14px", borderRadius: 8, border: `1.5px solid ${C.border}`, background: "#fff", color: C.ink, width: "100%", fontSize: 14 }} value={detailListing.breed || ''} disabled />
                      </div>
                      <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                        <label style={{ fontSize: 11, fontWeight: 700, textTransform: "uppercase", color: C.inkSft }}>Gender</label>
                        <input style={{ padding: "10px 14px", borderRadius: 8, border: `1.5px solid ${C.border}`, background: "#fff", color: C.ink, width: "100%", fontSize: 14 }} value={detailListing.gender || ''} disabled />
                      </div>
                      <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                        <label style={{ fontSize: 11, fontWeight: 700, textTransform: "uppercase", color: C.inkSft }}>Approximate Age</label>
                        <input style={{ padding: "10px 14px", borderRadius: 8, border: `1.5px solid ${C.border}`, background: "#fff", color: C.ink, width: "100%", fontSize: 14 }} value={detailListing.age || ''} disabled />
                      </div>
                      <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                        <label style={{ fontSize: 11, fontWeight: 700, textTransform: "uppercase", color: C.inkSft }}>Primary Colour</label>
                        <input style={{ padding: "10px 14px", borderRadius: 8, border: `1.5px solid ${C.border}`, background: "#fff", color: C.ink, width: "100%", fontSize: 14 }} value={detailListing.color || ''} disabled />
                      </div>
                      <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                        <label style={{ fontSize: 11, fontWeight: 700, textTransform: "uppercase", color: C.inkSft }}>Size</label>
                        <input style={{ padding: "10px 14px", borderRadius: 8, border: `1.5px solid ${C.border}`, background: "#fff", color: C.ink, width: "100%", fontSize: 14 }} value={detailListing.size || ''} disabled />
                      </div>
                      <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                        <label style={{ fontSize: 11, fontWeight: 700, textTransform: "uppercase", color: C.inkSft }}>Microchip ID</label>
                        <input style={{ padding: "10px 14px", borderRadius: 8, border: `1.5px solid ${C.border}`, background: "#fff", color: C.ink, width: "100%", fontSize: 14 }} value={detailListing.microchip || 'None'} disabled />
                      </div>
                      <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                        <label style={{ fontSize: 11, fontWeight: 700, textTransform: "uppercase", color: C.inkSft }}>Wearing Collar?</label>
                        <input style={{ padding: "10px 14px", borderRadius: 8, border: `1.5px solid ${C.border}`, background: "#fff", color: C.ink, width: "100%", fontSize: 14 }} value={detailListing.collar || 'No'} disabled />
                      </div>
                      <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                        <label style={{ fontSize: 11, fontWeight: 700, textTransform: "uppercase", color: C.inkSft }}>Collar Description</label>
                        <input style={{ padding: "10px 14px", borderRadius: 8, border: `1.5px solid ${C.border}`, background: "#fff", color: C.ink, width: "100%", fontSize: 14 }} value={detailListing.collarDescription || 'N/A'} disabled />
                      </div>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", gap: 6, marginTop: 16 }}>
                      <label style={{ fontSize: 11, fontWeight: 700, textTransform: "uppercase", color: C.inkSft }}>Distinctive Marks / Features</label>
                      <textarea style={{ padding: "10px 14px", borderRadius: 8, border: `1.5px solid ${C.border}`, background: "#fff", color: C.ink, width: "100%", fontSize: 14, resize: "none", minHeight: 60, fontFamily: "inherit" }} value={detailListing.features || 'None'} disabled />
                    </div>
                  </div>

                  {/* Section 2: Last Seen Location */}
                  <div style={{ background: C.cream, borderRadius: 20, padding: 24, border: `1px solid ${C.border}` }}>
                    <h3 style={{ fontSize: 16, fontWeight: 700, color: C.ink, marginBottom: 20, display: "flex", alignItems: "center", gap: 8 }}>
                      <span>📍</span> Last Seen Location
                    </h3>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 16 }}>
                      <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                        <label style={{ fontSize: 11, fontWeight: 700, textTransform: "uppercase", color: C.inkSft }}>Date Last Seen</label>
                        <input style={{ padding: "10px 14px", borderRadius: 8, border: `1.5px solid ${C.border}`, background: "#fff", color: C.ink, width: "100%", fontSize: 14 }} value={detailListing.date || ''} disabled />
                      </div>
                      <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                        <label style={{ fontSize: 11, fontWeight: 700, textTransform: "uppercase", color: C.inkSft }}>Approximate Time</label>
                        <input style={{ padding: "10px 14px", borderRadius: 8, border: `1.5px solid ${C.border}`, background: "#fff", color: C.ink, width: "100%", fontSize: 14 }} value={detailListing.time || ''} disabled />
                      </div>
                      <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                        <label style={{ fontSize: 11, fontWeight: 700, textTransform: "uppercase", color: C.inkSft }}>City</label>
                        <input style={{ padding: "10px 14px", borderRadius: 8, border: `1.5px solid ${C.border}`, background: "#fff", color: C.ink, width: "100%", fontSize: 14 }} value={detailListing.city || 'Coimbatore'} disabled />
                      </div>
                      <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                        <label style={{ fontSize: 11, fontWeight: 700, textTransform: "uppercase", color: C.inkSft }}>Area / Locality</label>
                        <input style={{ padding: "10px 14px", borderRadius: 8, border: `1.5px solid ${C.border}`, background: "#fff", color: C.ink, width: "100%", fontSize: 14 }} value={detailListing.area || ''} disabled />
                      </div>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", gap: 6, marginTop: 16 }}>
                      <label style={{ fontSize: 11, fontWeight: 700, textTransform: "uppercase", color: C.inkSft }}>Street / Address Last Seen</label>
                      <input style={{ padding: "10px 14px", borderRadius: 8, border: `1.5px solid ${C.border}`, background: "#fff", color: C.ink, width: "100%", fontSize: 14 }} value={detailListing.address || ''} disabled />
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", gap: 6, marginTop: 16 }}>
                      <label style={{ fontSize: 11, fontWeight: 700, textTransform: "uppercase", color: C.inkSft }}>Nearby Landmark</label>
                      <input style={{ padding: "10px 14px", borderRadius: 8, border: `1.5px solid ${C.border}`, background: "#fff", color: C.ink, width: "100%", fontSize: 14 }} value={detailListing.landmark || 'None'} disabled />
                    </div>
                  </div>

                  {/* Section 3: Owner & Contact Info */}
                  <div style={{ background: C.cream, borderRadius: 20, padding: 24, border: `1px solid ${C.border}` }}>
                    <h3 style={{ fontSize: 16, fontWeight: 700, color: C.ink, marginBottom: 20, display: "flex", alignItems: "center", gap: 8 }}>
                      <span>👤</span> Owner & Contact Information
                    </h3>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 16 }}>
                      <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                        <label style={{ fontSize: 11, fontWeight: 700, textTransform: "uppercase", color: C.inkSft }}>Your Full Name</label>
                        <input style={{ padding: "10px 14px", borderRadius: 8, border: `1.5px solid ${C.border}`, background: "#fff", color: C.ink, width: "100%", fontSize: 14 }} value={detailListing.ownerName || 'Anonymous'} disabled />
                      </div>
                      <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                        <label style={{ fontSize: 11, fontWeight: 700, textTransform: "uppercase", color: C.inkSft }}>Primary Phone</label>
                        <input style={{ padding: "10px 14px", borderRadius: 8, border: `1.5px solid ${C.border}`, background: "#fff", color: C.ink, width: "100%", fontSize: 14 }} value={detailListing.contact || ''} disabled />
                      </div>
                      <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                        <label style={{ fontSize: 11, fontWeight: 700, textTransform: "uppercase", color: C.inkSft }}>Alternate Phone</label>
                        <input style={{ padding: "10px 14px", borderRadius: 8, border: `1.5px solid ${C.border}`, background: "#fff", color: C.ink, width: "100%", fontSize: 14 }} value={detailListing.phone2 || 'None'} disabled />
                      </div>
                      <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                        <label style={{ fontSize: 11, fontWeight: 700, textTransform: "uppercase", color: C.inkSft }}>Email Address</label>
                        <input style={{ padding: "10px 14px", borderRadius: 8, border: `1.5px solid ${C.border}`, background: "#fff", color: C.ink, width: "100%", fontSize: 14 }} value={detailListing.email || ''} disabled />
                      </div>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", gap: 6, marginTop: 16 }}>
                      <label style={{ fontSize: 11, fontWeight: 700, textTransform: "uppercase", color: C.inkSft }}>Additional Details / Behaviour Notes</label>
                      <textarea style={{ padding: "10px 14px", borderRadius: 8, border: `1.5px solid ${C.border}`, background: "#fff", color: C.ink, width: "100%", fontSize: 14, resize: "none", minHeight: 60, fontFamily: "inherit" }} value={detailListing.notes || ''} disabled />
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", gap: 6, marginTop: 16, maxWidth: 300 }}>
                      <label style={{ fontSize: 11, fontWeight: 700, textTransform: "uppercase", color: C.inkSft }}>Reward Offered</label>
                      <input style={{ padding: "10px 14px", borderRadius: 8, border: `1.5px solid ${C.border}`, background: "#fff", color: C.orange, fontWeight: "bold", width: "100%", fontSize: 14 }} value={detailListing.reward || 'N/A'} disabled />
                    </div>
                  </div>
                </div>

                {/* Footer Actions */}
                <div style={{ display: "flex", gap: 12, justifyContent: "flex-end", marginTop: 28, borderTop: `1px solid ${C.border}`, paddingTop: 20 }}>
                  <button className="btn btn-md btn-outline" onClick={() => setDetailListing(null)}>Close Form</button>
                  <a className="btn btn-md btn-primary" href={`tel:${detailListing.contact}`} style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", textDecoration: "none" }}>📞 Contact Owner</a>
                </div>
              </div>
            ) : (
              <div style={{ padding: 32 }}>
                {/* Form Header */}
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 28, borderBottom: `2px solid ${C.greenLt}`, paddingBottom: 16 }}>
                  <span style={{ fontSize: 32 }}>🟢</span>
                  <div>
                    <h2 className="melody" style={{ fontSize: 32, color: C.ink, margin: 0, lineHeight: 1.1 }}>I Found a Pet — Report Form</h2>
                    <p style={{ fontSize: 13, color: C.inkSft, margin: "4px 0 0 0" }}>This form was submitted by the finder. Below are the registered details.</p>
                  </div>
                </div>

                {/* Form Body */}
                <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
                  {/* Photo Display */}
                  <div style={{ width: "100%", height: 280, borderRadius: 16, overflow: "hidden", background: "#eee" }}>
                    <img src={detailListing.img} style={{ width: "100%", height: "100%", objectFit: "cover" }} alt={detailListing.name} />
                  </div>

                  {/* Section 1: Found Pet Details */}
                  <div style={{ background: C.cream, borderRadius: 20, padding: 24, border: `1px solid ${C.border}` }}>
                    <h3 style={{ fontSize: 16, fontWeight: 700, color: C.ink, marginBottom: 20, display: "flex", alignItems: "center", gap: 8 }}>
                      <span>🐾</span> Found Pet Details
                    </h3>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 16 }}>
                      <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                        <label style={{ fontSize: 11, fontWeight: 700, textTransform: "uppercase", color: C.inkSft }}>Species</label>
                        <input style={{ padding: "10px 14px", borderRadius: 8, border: `1.5px solid ${C.border}`, background: "#fff", color: C.ink, width: "100%", fontSize: 14 }} value={detailListing.species || ''} disabled />
                      </div>
                      <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                        <label style={{ fontSize: 11, fontWeight: 700, textTransform: "uppercase", color: C.inkSft }}>Breed (best guess)</label>
                        <input style={{ padding: "10px 14px", borderRadius: 8, border: `1.5px solid ${C.border}`, background: "#fff", color: C.ink, width: "100%", fontSize: 14 }} value={detailListing.breed || ''} disabled />
                      </div>
                      <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                        <label style={{ fontSize: 11, fontWeight: 700, textTransform: "uppercase", color: C.inkSft }}>Gender</label>
                        <input style={{ padding: "10px 14px", borderRadius: 8, border: `1.5px solid ${C.border}`, background: "#fff", color: C.ink, width: "100%", fontSize: 14 }} value={detailListing.gender || ''} disabled />
                      </div>
                      <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                        <label style={{ fontSize: 11, fontWeight: 700, textTransform: "uppercase", color: C.inkSft }}>Estimated Age</label>
                        <input style={{ padding: "10px 14px", borderRadius: 8, border: `1.5px solid ${C.border}`, background: "#fff", color: C.ink, width: "100%", fontSize: 14 }} value={detailListing.age || ''} disabled />
                      </div>
                      <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                        <label style={{ fontSize: 11, fontWeight: 700, textTransform: "uppercase", color: C.inkSft }}>Colour / Markings</label>
                        <input style={{ padding: "10px 14px", borderRadius: 8, border: `1.5px solid ${C.border}`, background: "#fff", color: C.ink, width: "100%", fontSize: 14 }} value={detailListing.color || ''} disabled />
                      </div>
                      <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                        <label style={{ fontSize: 11, fontWeight: 700, textTransform: "uppercase", color: C.inkSft }}>Size</label>
                        <input style={{ padding: "10px 14px", borderRadius: 8, border: `1.5px solid ${C.border}`, background: "#fff", color: C.ink, width: "100%", fontSize: 14 }} value={detailListing.size || ''} disabled />
                      </div>
                      <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                        <label style={{ fontSize: 11, fontWeight: 700, textTransform: "uppercase", color: C.inkSft }}>Has Collar?</label>
                        <input style={{ padding: "10px 14px", borderRadius: 8, border: `1.5px solid ${C.border}`, background: "#fff", color: C.ink, width: "100%", fontSize: 14 }} value={detailListing.collar || 'No'} disabled />
                      </div>
                      <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                        <label style={{ fontSize: 11, fontWeight: 700, textTransform: "uppercase", color: C.inkSft }}>Collar Description</label>
                        <input style={{ padding: "10px 14px", borderRadius: 8, border: `1.5px solid ${C.border}`, background: "#fff", color: C.ink, width: "100%", fontSize: 14 }} value={detailListing.collarDescription || 'N/A'} disabled />
                      </div>
                      <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                        <label style={{ fontSize: 11, fontWeight: 700, textTransform: "uppercase", color: C.inkSft }}>Microchip Scanned?</label>
                        <input style={{ padding: "10px 14px", borderRadius: 8, border: `1.5px solid ${C.border}`, background: "#fff", color: C.ink, width: "100%", fontSize: 14 }} value={detailListing.microchip || 'Not yet scanned'} disabled />
                      </div>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", gap: 6, marginTop: 16 }}>
                      <label style={{ fontSize: 11, fontWeight: 700, textTransform: "uppercase", color: C.inkSft }}>Distinctive Marks / Features</label>
                      <textarea style={{ padding: "10px 14px", borderRadius: 8, border: `1.5px solid ${C.border}`, background: "#fff", color: C.ink, width: "100%", fontSize: 14, resize: "none", minHeight: 60, fontFamily: "inherit" }} value={detailListing.features || 'None'} disabled />
                    </div>
                  </div>

                  {/* Section 2: Found Location */}
                  <div style={{ background: C.cream, borderRadius: 20, padding: 24, border: `1px solid ${C.border}` }}>
                    <h3 style={{ fontSize: 16, fontWeight: 700, color: C.ink, marginBottom: 20, display: "flex", alignItems: "center", gap: 8 }}>
                      <span>📍</span> Where was the Pet Found?
                    </h3>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 16 }}>
                      <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                        <label style={{ fontSize: 11, fontWeight: 700, textTransform: "uppercase", color: C.inkSft }}>Date Found</label>
                        <input style={{ padding: "10px 14px", borderRadius: 8, border: `1.5px solid ${C.border}`, background: "#fff", color: C.ink, width: "100%", fontSize: 14 }} value={detailListing.date || ''} disabled />
                      </div>
                      <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                        <label style={{ fontSize: 11, fontWeight: 700, textTransform: "uppercase", color: C.inkSft }}>Approximate Time</label>
                        <input style={{ padding: "10px 14px", borderRadius: 8, border: `1.5px solid ${C.border}`, background: "#fff", color: C.ink, width: "100%", fontSize: 14 }} value={detailListing.time || ''} disabled />
                      </div>
                      <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                        <label style={{ fontSize: 11, fontWeight: 700, textTransform: "uppercase", color: C.inkSft }}>City</label>
                        <input style={{ padding: "10px 14px", borderRadius: 8, border: `1.5px solid ${C.border}`, background: "#fff", color: C.ink, width: "100%", fontSize: 14 }} value={detailListing.city || 'Coimbatore'} disabled />
                      </div>
                      <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                        <label style={{ fontSize: 11, fontWeight: 700, textTransform: "uppercase", color: C.inkSft }}>Area / Locality</label>
                        <input style={{ padding: "10px 14px", borderRadius: 8, border: `1.5px solid ${C.border}`, background: "#fff", color: C.ink, width: "100%", fontSize: 14 }} value={detailListing.area || ''} disabled />
                      </div>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", gap: 6, marginTop: 16 }}>
                      <label style={{ fontSize: 11, fontWeight: 700, textTransform: "uppercase", color: C.inkSft }}>Street / Address Found</label>
                      <input style={{ padding: "10px 14px", borderRadius: 8, border: `1.5px solid ${C.border}`, background: "#fff", color: C.ink, width: "100%", fontSize: 14 }} value={detailListing.address || ''} disabled />
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", gap: 6, marginTop: 16 }}>
                      <label style={{ fontSize: 11, fontWeight: 700, textTransform: "uppercase", color: C.inkSft }}>Nearby Landmark</label>
                      <input style={{ padding: "10px 14px", borderRadius: 8, border: `1.5px solid ${C.border}`, background: "#fff", color: C.ink, width: "100%", fontSize: 14 }} value={detailListing.landmark || 'None'} disabled />
                    </div>
                  </div>

                  {/* Section 3: Finder Contact Info */}
                  <div style={{ background: C.cream, borderRadius: 20, padding: 24, border: `1px solid ${C.border}` }}>
                    <h3 style={{ fontSize: 16, fontWeight: 700, color: C.ink, marginBottom: 20, display: "flex", alignItems: "center", gap: 8 }}>
                      <span>👤</span> Finder & Contact Information
                    </h3>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 16 }}>
                      <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                        <label style={{ fontSize: 11, fontWeight: 700, textTransform: "uppercase", color: C.inkSft }}>Your Full Name</label>
                        <input style={{ padding: "10px 14px", borderRadius: 8, border: `1.5px solid ${C.border}`, background: "#fff", color: C.ink, width: "100%", fontSize: 14 }} value={detailListing.ownerName || 'Anonymous'} disabled />
                      </div>
                      <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                        <label style={{ fontSize: 11, fontWeight: 700, textTransform: "uppercase", color: C.inkSft }}>Primary Phone</label>
                        <input style={{ padding: "10px 14px", borderRadius: 8, border: `1.5px solid ${C.border}`, background: "#fff", color: C.ink, width: "100%", fontSize: 14 }} value={detailListing.contact || ''} disabled />
                      </div>
                      <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                        <label style={{ fontSize: 11, fontWeight: 700, textTransform: "uppercase", color: C.inkSft }}>Your Email</label>
                        <input style={{ padding: "10px 14px", borderRadius: 8, border: `1.5px solid ${C.border}`, background: "#fff", color: C.ink, width: "100%", fontSize: 14 }} value={detailListing.email || ''} disabled />
                      </div>
                      <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                        <label style={{ fontSize: 11, fontWeight: 700, textTransform: "uppercase", color: C.inkSft }}>Pet Currently With</label>
                        <input style={{ padding: "10px 14px", borderRadius: 8, border: `1.5px solid ${C.border}`, background: "#fff", color: C.ink, width: "100%", fontSize: 14 }} value={detailListing.currentlyWith || 'Not specified'} disabled />
                      </div>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", gap: 6, marginTop: 16 }}>
                      <label style={{ fontSize: 11, fontWeight: 700, textTransform: "uppercase", color: C.inkSft }}>Additional Notes</label>
                      <textarea style={{ padding: "10px 14px", borderRadius: 8, border: `1.5px solid ${C.border}`, background: "#fff", color: C.ink, width: "100%", fontSize: 14, resize: "none", minHeight: 60, fontFamily: "inherit" }} value={detailListing.notes || ''} disabled />
                    </div>
                  </div>
                </div>

                {/* Footer Actions */}
                <div style={{ display: "flex", gap: 12, justifyContent: "flex-end", marginTop: 28, borderTop: `1px solid ${C.border}`, paddingTop: 20 }}>
                  <button className="btn btn-md btn-outline" onClick={() => setDetailListing(null)}>Close Form</button>
                  <a className="btn btn-md btn-primary" href={`tel:${detailListing.contact}`} style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", textDecoration: "none", background: C.green, borderColor: C.green }}>📞 Contact Finder</a>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

// ══════════════════════════════════════════════════════════════════
//  DASHBOARD
// ══════════════════════════════════════════════════════════════════
function DashboardPage({ nav, pets, setPets, currentUser }) {
  const [tab, setTab] = useState("overview");
  const [showAddPet, setShowAddPet] = useState(false);
  const [addStep, setAddStep] = useState(1); // 1=form, 2=success

  const emptyPet = { name: "", species: "", breed: "", gender: "", dob: "", color: "", weight: "", microchip: "", allergies: "", conditions: "", food: "", vetName: "", vetPhone: "", emergencyContact: "", emergencyPhone: "", notes: "" };
  const [newPet, setNewPet] = useState(emptyPet);
  const [petImgPreview, setPetImgPreview] = useState(null);
  const petImgRef = useRef();
  const np = k => e => setNewPet(x => ({ ...x, [k]: e.target.value }));

  const iS = {
    padding: "11px 15px", borderRadius: 11, border: `1.5px solid ${C.border}`,
    fontSize: 14, color: C.ink, background: "#fff", outline: "none",
    width: "100%", transition: "border-color .18s", fontFamily: "inherit",
  };
  const focus = e => e.target.style.borderColor = C.orange;
  const blur = e => e.target.style.borderColor = C.border;
  const lS = { fontSize: 11, fontWeight: 700, letterSpacing: ".06em", textTransform: "uppercase", color: C.inkSft, display: "block", marginBottom: 5 };

  const handleAddPet = () => {
    if (!newPet.name || !newPet.species || !newPet.breed || !newPet.gender) {
      alert("Please fill in Name, Species, Breed, and Gender."); return;
    }
    const img = petImgPreview || P.dog4;
    setPets(p => [...p, { ...newPet, img, health: 90, nextVet: "TBD", nextVacc: "TBD" }]);
    setAddStep(2);
  };

  const resetAddPet = () => { setNewPet(emptyPet); setPetImgPreview(null); setAddStep(1); setShowAddPet(false); };

  return (
    <div style={{ paddingTop: 96, minHeight: "100vh", background: C.cream }}>

      {/* ── Header ── */}
      <div style={{ background: "linear-gradient(135deg, var(--color-ink-md), #0d0d0d)", padding: "44px 0", position: "relative", overflow: "hidden" }}>
        <img src="https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=1400&q=80&fit=crop" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", opacity: 0.25, mixBlendMode: "overlay", pointerEvents: "none" }} />
        {/* Ambient Blobs */}
        <div className="ambient-blob-container">
          <div className="ambient-blob ambient-blob-orange"></div>
          <div className="ambient-blob ambient-blob-blue"></div>
        </div>

        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 32px", position: "relative", zIndex: 2 }}>
          <div style={{ width: "100%" }}>
            <div className="pill" style={{ background: "rgba(255,255,255,.08)", color: "rgba(255,255,255,.7)", border: "1px solid rgba(255,255,255,0.1)", marginBottom: 12, backdropFilter: "blur(4px)" }}>Dashboard</div>
            <h1 className="melody" style={{ fontSize: 44, color: "#fff", marginBottom: 2 }}>Good morning, {currentUser.name} 👋</h1>
            
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 24, marginTop: 14, flexWrap: "wrap" }}>
              {/* Vaccination Alert Glass Widget */}
              <div className="glass-form" style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)", display: "flex", alignItems: "center", gap: 16, padding: "16px 20px", borderRadius: 18, boxShadow: "0 16px 40px rgba(0,0,0,0.2)", flex: 1, minWidth: 300, maxWidth: 680 }}>
                <div className="pulsing-alert-icon" style={{ background: C.red, marginLeft: 2 }}></div>
                <div style={{ color: "rgba(255,255,255,0.85)", fontSize: "13.5px", lineHeight: 1.5, flex: 1 }}>
                  🛡️ <strong>{currentUser.name !== "Geetha" && pets.length > 2 ? pets[pets.length - 1].name : (pets.length > 0 ? pets[0].name : "Max")}'s</strong> booster shot is due in <strong>9 days</strong>. Book a certified clinic vet now to maintain immunity.
                </div>
                <button className="btn btn-sm btn-primary" onClick={() => nav("vet")} style={{ background: C.orange, border: "none", fontSize: 12, fontWeight: 700, padding: "8px 16px", boxShadow: "0 4px 12px rgba(229,93,26,0.3)", flexShrink: 0 }}>Book Vet</button>
              </div>

              {/* Buttons on the right side of the book vet card */}
              <div style={{ display: "flex", gap: 12, flexShrink: 0, alignItems: "center" }}>
                <button className="btn btn-md btn-ghost" style={{ color: "rgba(255,255,255,.7)", borderColor: "rgba(255,255,255,.15)", background: "rgba(255,255,255,0.03)", backdropFilter: "blur(4px)" }} onClick={() => nav("lost")}>📍 Lost & Found</button>
                <button className="btn btn-md btn-primary" onClick={() => { setShowAddPet(true); setAddStep(1); }}>+ Add Pet</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── ADD PET MODAL ── */}
      {showAddPet && (
        <div style={{
          position: "fixed", inset: 0, background: "rgba(17,17,17,.55)", zIndex: 1000,
          display: "flex", alignItems: "center", justifyContent: "center", padding: 24,
          backdropFilter: "blur(6px)",
        }} onClick={e => e.target === e.currentTarget && resetAddPet()}>
          <div style={{
            background: C.white, borderRadius: 28, width: "100%", maxWidth: 780,
            maxHeight: "90vh", overflowY: "auto", boxShadow: "0 40px 100px rgba(0,0,0,.25)",
            animation: "scaleIn .3s cubic-bezier(.22,1,.36,1) both",
          }}>

            {/* Success state */}
            {addStep === 2 ? (
              <div style={{ textAlign: "center", padding: "60px 40px" }}>
                <div style={{ fontSize: 72, marginBottom: 20, animation: "float 2s ease-in-out infinite" }}>🐾</div>
                <h2 className="melody" style={{ fontSize: 44, color: C.ink, marginBottom: 12 }}>{newPet.name} is added!</h2>
                <p style={{ fontSize: 16, color: C.inkSft, lineHeight: 1.75, maxWidth: 400, margin: "0 auto 32px" }}>
                  {newPet.name}'s profile is live on your dashboard. Start tracking health, vaccines, and appointments.
                </p>
                {petImgPreview && <img src={petImgPreview} alt={newPet.name} style={{ width: 120, height: 120, borderRadius: "50%", objectFit: "cover", border: `4px solid ${C.orange}`, margin: "0 auto 28px", display: "block" }} />}
                <div style={{ display: "flex", gap: 12, justifyContent: "center" }}>
                  <button className="btn btn-lg btn-primary" onClick={() => { resetAddPet(); setTab("pets"); }}>View My Pets →</button>
                  <button className="btn btn-lg btn-outline" onClick={() => { setNewPet(emptyPet); setPetImgPreview(null); setAddStep(1); }}>Add Another Pet</button>
                </div>
              </div>
            ) : (
              <>
                {/* Modal header */}
                <div style={{ padding: "28px 32px 0", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <div>
                    <h2 className="melody" style={{ fontSize: 32, color: C.ink, lineHeight: 1 }}>Add a New Pet</h2>
                    <p style={{ fontSize: 14, color: C.inkSft, marginTop: 6 }}>Fill in your pet's details to start tracking their health and care.</p>
                  </div>
                  <button onClick={resetAddPet} style={{ width: 36, height: 36, borderRadius: "50%", background: C.cream, border: "none", fontSize: 18, cursor: "pointer", color: C.inkSft, flexShrink: 0 }}>✕</button>
                </div>

                <div style={{ padding: "24px 32px 32px" }}>

                  {/* Photo upload */}
                  <div style={{ display: "flex", alignItems: "center", gap: 24, marginBottom: 28, padding: "20px 24px", background: C.cream, borderRadius: 16, border: `1px solid ${C.border}` }}>
                    <div style={{ position: "relative", flexShrink: 0 }}>
                      <div style={{
                        width: 88, height: 88, borderRadius: "50%",
                        background: petImgPreview ? "transparent" : C.creamDk,
                        border: `3px solid ${C.orange}`,
                        overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center",
                        cursor: "pointer",
                      }} onClick={() => petImgRef.current?.click()}>
                        {petImgPreview
                          ? <img src={petImgPreview} alt="pet" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                          : <span style={{ fontSize: 32 }}>🐾</span>
                        }
                      </div>
                      <button onClick={() => petImgRef.current?.click()} style={{ position: "absolute", bottom: -2, right: -2, width: 26, height: 26, borderRadius: "50%", background: C.orange, border: "2px solid #fff", color: "#fff", fontSize: 12, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>📷</button>
                      <input ref={petImgRef} type="file" accept="image/*" style={{ display: "none" }} onChange={e => {
                        const f = e.target.files[0];
                        if (f) { const r = new FileReader(); r.onload = ev => setPetImgPreview(ev.target.result); r.readAsDataURL(f); }
                      }} />
                    </div>
                    <div>
                      <div style={{ fontWeight: 700, color: C.ink, fontSize: 15, marginBottom: 4 }}>Upload a Photo</div>
                      <div style={{ fontSize: 13, color: C.inkSft, lineHeight: 1.6 }}>A photo helps identify your pet quickly.<br />JPG or PNG, max 5MB.</div>
                    </div>
                  </div>

                  {/* Section: Basic Info */}
                  <div style={{ marginBottom: 6 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
                      <div style={{ width: 28, height: 28, borderRadius: 8, background: C.orangeLt, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14 }}>🐾</div>
                      <span style={{ fontWeight: 700, fontSize: 15, color: C.ink }}>Basic Information</span>
                    </div>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
                      {[
                        ["Pet's Name *", "name", "text", "e.g. Bruno"],
                        ["Breed *", "breed", "text", "e.g. Labrador Retriever"],
                        ["Date of Birth", "dob", "date", ""],
                        ["Primary Colour", "color", "text", "e.g. Golden brown"],
                      ].map(([l, k, t, ph]) => (
                        <div key={k}>
                          <label style={lS}>{l}</label>
                          <input type={t} placeholder={ph} value={newPet[k]} onChange={np(k)} style={iS} onFocus={focus} onBlur={blur} />
                        </div>
                      ))}
                      <div>
                        <label style={lS}>Species *</label>
                        <select value={newPet.species} onChange={np("species")} style={{ ...iS, cursor: "pointer" }}>
                          <option value="">Select…</option>
                          <option>Dog</option><option>Cat</option><option>Bird</option><option>Rabbit</option><option>Fish</option><option>Other</option>
                        </select>
                      </div>
                      <div>
                        <label style={lS}>Gender *</label>
                        <select value={newPet.gender} onChange={np("gender")} style={{ ...iS, cursor: "pointer" }}>
                          <option value="">Select…</option>
                          <option>Male</option><option>Female</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div style={{ height: 1, background: C.border, margin: "20px 0" }} />

                  {/* Section: Health */}
                  <div style={{ marginBottom: 6 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
                      <div style={{ width: 28, height: 28, borderRadius: 8, background: C.blueLt, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14 }}>🏥</div>
                      <span style={{ fontWeight: 700, fontSize: 15, color: C.ink }}>Health & Medical</span>
                    </div>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
                      {[
                        ["Weight (kg)", "weight", "text", "e.g. 28"],
                        ["Microchip ID", "microchip", "text", "e.g. 985000123456789"],
                      ].map(([l, k, t, ph]) => (
                        <div key={k}>
                          <label style={lS}>{l}</label>
                          <input type={t} placeholder={ph} value={newPet[k]} onChange={np(k)} style={iS} onFocus={focus} onBlur={blur} />
                        </div>
                      ))}
                      <div>
                        <label style={lS}>Known Allergies</label>
                        <input placeholder="e.g. Dairy, Chicken, None" value={newPet.allergies} onChange={np("allergies")} style={iS} onFocus={focus} onBlur={blur} />
                      </div>
                      <div>
                        <label style={lS}>Medical Conditions</label>
                        <input placeholder="e.g. Hip Dysplasia, None" value={newPet.conditions} onChange={np("conditions")} style={iS} onFocus={focus} onBlur={blur} />
                      </div>
                      <div style={{ gridColumn: "1/-1" }}>
                        <label style={lS}>Current Food / Diet</label>
                        <input placeholder="e.g. Royal Canin Medium Adult, Raw diet" value={newPet.food} onChange={np("food")} style={iS} onFocus={focus} onBlur={blur} />
                      </div>
                    </div>
                  </div>

                  <div style={{ height: 1, background: C.border, margin: "20px 0" }} />

                  {/* Section: Vet & Emergency */}
                  <div style={{ marginBottom: 6 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
                      <div style={{ width: 28, height: 28, borderRadius: 8, background: C.greenLt, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14 }}>📞</div>
                      <span style={{ fontWeight: 700, fontSize: 15, color: C.ink }}>Vet & Emergency Contacts</span>
                    </div>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
                      {[
                        ["Primary Vet Name", "vetName", "text", "Dr. Meera Iyer"],
                        ["Vet Phone", "vetPhone", "tel", "+91 98765 43210"],
                        ["Emergency Contact Name", "emergencyContact", "text", "Family member name"],
                        ["Emergency Contact Phone", "emergencyPhone", "tel", "+91 87654 32109"],
                      ].map(([l, k, t, ph]) => (
                        <div key={k}>
                          <label style={lS}>{l}</label>
                          <input type={t} placeholder={ph} value={newPet[k]} onChange={np(k)} style={iS} onFocus={focus} onBlur={blur} />
                        </div>
                      ))}
                      <div style={{ gridColumn: "1/-1" }}>
                        <label style={lS}>Additional Notes</label>
                        <textarea placeholder="Personality traits, special care instructions, favourite treats, anything else…" value={newPet.notes} onChange={np("notes")} rows={3} style={{ ...iS, resize: "vertical" }} onFocus={focus} onBlur={blur} />
                      </div>
                    </div>
                  </div>

                  {/* Submit */}
                  <div style={{ display: "flex", gap: 12, marginTop: 8 }}>
                    <button className="btn btn-lg btn-primary" style={{ flex: 1 }} onClick={handleAddPet}>
                      Save Pet Profile 🐾
                    </button>
                    <button className="btn btn-lg btn-ghost" onClick={resetAddPet}>Cancel</button>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      )}

      {/* ── Content ── */}
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "32px 32px 80px" }}>
        {/* Tabs */}
        <div style={{ display: "flex", gap: 4, marginBottom: 32, background: C.white, padding: 5, borderRadius: 14, width: "fit-content", border: `1px solid ${C.border}` }}>
          {["overview", "pets", "bookings", "orders"].map(t => (
            <button key={t} onClick={() => setTab(t)} style={{ padding: "9px 22px", borderRadius: 10, border: "none", background: tab === t ? C.orange : "transparent", color: tab === t ? "#fff" : C.inkSft, fontWeight: tab === t ? 600 : 400, cursor: "pointer", fontSize: 14, textTransform: "capitalize", transition: "all .2s" }}>{t}</button>
          ))}
        </div>

        {/* Overview */}
        {tab === "overview" && (
          <>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 16, marginBottom: 24 }}>
              {[["🐾", "My Pets", String(pets.length), C.orange], ["📋", "Bookings", "4", C.blue], ["📦", "Orders", "3", C.green], ["💉", "Due Vaccines", "1", C.red]].map(([ic, l, v, c]) => (
                <div key={l} className="card" style={{ padding: "24px" }}>
                  <div style={{ fontSize: 22, marginBottom: 10 }}>{ic}</div>
                  <div className="melody" style={{ fontSize: 36, color: c, lineHeight: 1 }}>{v}</div>
                  <div style={{ fontSize: 13, color: C.inkSft, marginTop: 6 }}>{l}</div>
                </div>
              ))}
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: 20 }}>
              <div className="card" style={{ padding: "28px" }}>
                <h3 className="melody" style={{ fontSize: 18, color: C.ink, marginBottom: 24 }}>Pet Health Overview</h3>
                {pets.map(p => (
                  <div key={p.name} style={{ display: "flex", gap: 16, marginBottom: 24, alignItems: "center" }}>
                    <Img src={p.img} style={{ width: 54, height: 54, borderRadius: "50%", objectFit: "cover", flexShrink: 0 }} />
                    <div style={{ flex: 1 }}>
                      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
                        <div><span style={{ fontWeight: 700, color: C.ink, fontSize: 15 }}>{p.name}</span><span style={{ fontSize: 13, color: C.inkSft, marginLeft: 8 }}>{p.breed}</span></div>
                        <span style={{ fontWeight: 700, color: "#22C55E", fontSize: 14 }}>{p.health}%</span>
                      </div>
                      <div style={{ background: C.creamDk, borderRadius: 100, height: 6 }}>
                        <div style={{ background: `linear-gradient(90deg,${C.green},#22C55E)`, width: `${p.health}%`, height: 6, borderRadius: 100 }} />
                      </div>
                      <div style={{ fontSize: 12, color: C.inkSft, marginTop: 5, display: "flex", gap: 14 }}>
                        <span>Weight: {p.weight}</span><span>Next vet: {p.nextVet}</span><span>Vaccine: {p.nextVacc}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="card" style={{ padding: "28px" }}>
                <h3 className="melody" style={{ fontSize: 18, color: C.ink, marginBottom: 20 }}>Upcoming</h3>
                {[
                  { ic: "💉", t: "Max — Rabies vaccine", d: "Jun 20", urgent: true },
                  { ic: "✂️", t: "Bella — Grooming", d: "Jun 25" },
                  { ic: "🏥", t: "Annual checkup — both", d: "Jul 1" },
                  { ic: "📦", t: "Royal Canin subscription", d: "Jul 3" },
                ].map((a, i) => (
                  <div key={i} style={{ padding: "11px 0", borderBottom: `1px solid ${C.border}`, display: "flex", gap: 10, alignItems: "flex-start" }}>
                    <div style={{ width: 34, height: 34, borderRadius: 9, background: a.urgent ? "#FEF2F2" : C.cream, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 15, flexShrink: 0 }}>{a.ic}</div>
                    <div>
                      <div style={{ fontWeight: 600, color: a.urgent ? C.red : C.ink, fontSize: 13 }}>{a.t}</div>
                      <div style={{ fontSize: 11, color: C.inkSft, marginTop: 2 }}>{a.d}{a.urgent && <span style={{ color: C.red, marginLeft: 8, fontWeight: 600 }}>⚠️ Due soon</span>}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}

        {/* My Pets Subtab */}
        {tab === "pets" && (
          <div className="app-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 20 }}>
            {pets.map(p => (
              <div key={p.name} className="card" style={{ borderRadius: 24, overflow: "hidden", display: "flex", flexDirection: "column", height: "100%" }}>
                <div style={{ height: 180, overflow: "hidden", position: "relative" }}>
                  <Img src={p.img} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                  <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,.45), transparent)" }} />
                  <h3 className="melody" style={{ position: "absolute", bottom: 14, left: 18, color: "#fff", fontSize: 24 }}>{p.name}</h3>
                </div>
                <div style={{ padding: "20px 24px", display: "flex", flexDirection: "column", flex: 1, justifyContent: "space-between" }}>
                  <div>
                    <p style={{ color: C.inkSft, fontSize: 14, marginBottom: 16 }}>{p.breed} · {p.age || 'Unknown age'} · {p.weight}</p>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 16 }}>
                      <div style={{ background: C.cream, borderRadius: 11, padding: "10px 14px" }}>
                        <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: ".06em", textTransform: "uppercase", color: C.inkSft }}>Next Vet</div>
                        <div style={{ fontWeight: 700, color: C.ink, fontSize: 14, marginTop: 2 }}>{p.nextVet}</div>
                      </div>
                      <div style={{ background: C.cream, borderRadius: 11, padding: "10px 14px" }}>
                        <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: ".06em", textTransform: "uppercase", color: C.inkSft }}>Next Vaccine</div>
                        <div style={{ fontWeight: 700, color: C.ink, fontSize: 14, marginTop: 2 }}>{p.nextVacc}</div>
                      </div>
                    </div>
                    {p.food && <p style={{ fontSize: 12, color: C.inkSft, marginBottom: 12 }}>🍽 {p.food}</p>}
                    {p.allergies && p.allergies !== 'None' && <p style={{ fontSize: 12, color: C.red, marginBottom: 12 }}>⚠️ Allergies: {p.allergies}</p>}
                  </div>
                  <div style={{ display: "flex", gap: 10, marginTop: "auto" }}>
                    <button className="btn btn-md btn-ghost" style={{ flex: 1 }} onClick={() => alert('Profile details edit is mock-only.')}>Edit</button>
                    <button className="btn btn-md btn-primary" style={{ flex: 1 }} onClick={() => alert('Loading full health reports charts...')}>Health Records</button>
                  </div>
                </div>
              </div>
            ))}
            {/* Add Pet Card */}
            <div className="add-pet-dash-card" onClick={() => { setShowAddPet(true); setAddStep(1); }} style={{
              border: `2px dashed ${C.border}`, borderRadius: 24, padding: "32px 24px",
              display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
              cursor: "pointer", background: "rgba(255,255,255,0.4)", height: "100%", minHeight: 320,
              transition: "all .25s ease"
            }}>
              <div style={{ width: 56, height: 56, borderRadius: "50%", background: C.orangeLt, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 24, marginBottom: 14, color: C.orange }}>+</div>
              <div className="melody" style={{ color: C.inkSft, fontSize: 20 }}>Add a New Pet</div>
              <div style={{ fontSize: 13, color: C.sand, marginTop: 6, textAlign: "center" }}>Track health, vaccines, diet & more</div>
            </div>
          </div>
        )}

        {/* Bookings Subtab */}
        {tab === "bookings" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {[
              { id: "BK-1082", petName: "Max", service: "Veterinary Consultation", date: "Jun 15, 2026", time: "10:30 AM", provider: "Dr. Kiran Patel", status: "Upcoming", price: "₹650", icon: "🏥" },
              { id: "BK-1054", petName: "Bella", service: "Full Grooming Session", date: "Jun 25, 2026", time: "02:00 PM", provider: "Pawprint Grooming Studio", status: "Upcoming", price: "₹1,499", icon: "✂️" },
              { id: "BK-0982", petName: "Max", service: "Behavioral Puppy Training", date: "Jun 20, 2026", time: "09:00 AM", provider: "Priya Venkatesh", status: "Upcoming", price: "₹1,200", icon: "🎓" },
              { id: "BK-0841", petName: "Bella", service: "Deworming Clinic Visit", date: "May 28, 2026", time: "11:00 AM", provider: "Dr. Kiran Patel", status: "Completed", price: "₹450", icon: "💉" }
            ].map(b => (
              <div key={b.id} className="card" style={{ padding: 24, flexDirection: "row", alignItems: "center", gap: 20, flexWrap: "wrap" }}>
                <div style={{ width: 50, height: 50, borderRadius: 12, background: C.cream, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22, flexShrink: 0 }}>
                  {b.icon}
                </div>
                <div style={{ flex: 1, minWidth: 200 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }}>
                    <span style={{ fontWeight: 700, color: C.ink, fontSize: 16 }}>{b.service}</span>
                    <span className="pill" style={{ background: C.creamDk, color: C.inkSft, fontSize: 11 }}>{b.id}</span>
                  </div>
                  <div style={{ fontSize: 13.5, color: C.inkSft, display: "flex", gap: 12, flexWrap: "wrap" }}>
                    <span>Pet: <strong>{b.petName}</strong></span>
                    <span>Date: <strong>{b.date} · {b.time}</strong></span>
                    <span>With: <strong>{b.provider}</strong></span>
                  </div>
                </div>
                <div style={{ textAlign: "right", flexShrink: 0, marginLeft: "auto" }}>
                  <div style={{ fontWeight: 800, fontSize: 16, color: C.ink }}>{b.price}</div>
                  <span className="pill" style={{ marginTop: 6, display: "inline-block", background: b.status === 'Upcoming' ? C.blueLt : C.greenLt, color: b.status === 'Upcoming' ? C.blue : C.green, fontWeight: 700 }}>
                    {b.status}
                  </span>
                </div>
                <div style={{ display: "flex", gap: 8, flexShrink: 0, marginLeft: "auto", width: "100%", borderTop: `1px solid ${C.border}`, paddingTop: 16, marginTop: 8 }}>
                  {b.status === 'Upcoming' ? (
                    <>
                      <button className="btn btn-sm btn-ghost" onClick={() => alert(`Rescheduling booking ${b.id}...`)}>Reschedule</button>
                      <button className="btn btn-sm btn-primary" style={{ background: C.red, borderColor: C.red, color: "white" }} onClick={() => alert(`Cancelling booking ${b.id}...`)}>Cancel</button>
                    </>
                  ) : (
                    <>
                      <button className="btn btn-sm btn-ghost" onClick={() => alert(`Downloading invoice for ${b.id}...`)}>View Invoice</button>
                      <button className="btn btn-sm btn-primary" onClick={() => alert('Rebooking service...')}>Book Again</button>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Orders Subtab */}
        {tab === "orders" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {[
              { id: "PW-9951", date: "Jun 13, 2026", item: "Reflective Safe-Grip Leash", category: "Accessories", price: "₹1,199", status: "Processing", icon: "🦮" },
              { id: "PW-9904", date: "Jun 12, 2026", item: "Organic Chicken & Oats Treats (Pack of 2)", category: "Food & Treats", price: "₹799", status: "In Transit", icon: "🦴" },
              { id: "PW-9823", date: "Jun 10, 2026", item: "Premium Orthopedic Dog Bed", category: "Bedding", price: "₹2,499", status: "Delivered", icon: "🛏️" }
            ].map(o => (
              <div key={o.id} className="card" style={{ padding: 24, flexDirection: "row", alignItems: "center", gap: 20, flexWrap: "wrap" }}>
                <div style={{ width: 50, height: 50, borderRadius: 12, background: C.cream, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22, flexShrink: 0 }}>
                  {o.icon}
                </div>
                <div style={{ flex: 1, minWidth: 200 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }}>
                    <span style={{ fontWeight: 700, color: C.ink, fontSize: 16 }}>{o.item}</span>
                    <span className="pill" style={{ background: C.creamDk, color: C.inkSft, fontSize: 11 }}>{o.id}</span>
                  </div>
                  <div style={{ fontSize: 13.5, color: C.inkSft, display: "flex", gap: 12 }}>
                    <span>Category: <strong>{o.category}</strong></span>
                    <span>Order Date: <strong>{o.date}</strong></span>
                  </div>
                </div>
                <div style={{ textAlignment: "right", flexShrink: 0, marginLeft: "auto" }}>
                  <div style={{ fontWeight: 800, fontSize: 16, color: C.ink }}>{o.price}</div>
                  <span className="pill" style={{ marginTop: 6, display: "inline-block", background: o.status === 'Processing' ? C.orangeLt : o.status === 'In Transit' ? C.blueLt : C.greenLt, color: o.status === 'Processing' ? C.orange : o.status === 'In Transit' ? C.blue : C.green, fontWeight: 700 }}>
                    {o.status}
                  </span>
                </div>
                <div style={{ display: "flex", gap: 8, flexShrink: 0, marginLeft: "auto", width: "100%", borderTop: `1px solid ${C.border}`, paddingTop: 16, marginTop: 8 }}>
                  {o.status !== 'Delivered' ? (
                    <>
                      <button className="btn btn-sm btn-ghost" onClick={() => alert(`Tracking order ${o.id}...`)}>Track Order</button>
                      <button className="btn btn-sm btn-primary" onClick={() => alert(`Opening customer support for order ${o.id}...`)}>Support</button>
                    </>
                  ) : (
                    <>
                      <button className="btn btn-sm btn-ghost" onClick={() => alert('Opening return policy...')}>Return/Replace</button>
                      <button className="btn btn-sm btn-primary" onClick={() => alert('Item added to cart for reorder.')}>Buy Again</button>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
  const [step, setStep] = useState(1);
  const [signupGender, setSignupGender] = useState("Male");
  const [form, setForm] = useState({
    name: "", email: "", password: "",
    petName: "", breed: "", age: "", weight: ""
  });
  
  const f = (k) => (e) => setForm(x => ({ ...x, [k]: e.target.value }));
  
  const iStyle = {
    padding: "14px 18px", borderRadius: 14, border: `1.5px solid ${C.border}`,
    fontSize: 15, outline: "none", background: "#fff", color: C.ink,
    transition: "all .3s cubic-bezier(.22, 1, .36, 1)", width: "100%"
  };

  const handleNext = () => {
    if (type === "login") {
      if (!form.email) {
        alert("Please fill in your email address.");
        return;
      }
      const prefix = form.email.split('@')[0];
      const capitalized = prefix.charAt(0).toUpperCase() + prefix.slice(1);
      setCurrentUser({ name: capitalized, email: form.email });
      alert(`Welcome back, ${capitalized}! 🐾`);
      nav("dashboard");
    } else {
      if (step === 1) {
        if (!form.name || !form.email || !form.password) {
          alert("Please fill in Name, Email, and Password.");
          return;
        }
        setStep(2);
      } else if (step === 2) {
        if (!form.petName || !form.breed || !form.age || !form.weight) {
          alert("Please fill in all your dog's profile details.");
          return;
        }
        setStep(3);
      } else {
        const newDog = {
          name: form.petName,
          breed: form.breed,
          species: "Dog",
          age: form.age.includes("yr") || form.age.includes("mo") ? form.age : `${form.age} yrs`,
          gender: signupGender,
          img: P.dog4,
          health: 100,
          weight: form.weight.includes("kg") ? form.weight : `${form.weight} kg`,
          color: "Golden Brown",
          microchip: "MX" + Math.floor(100000 + Math.random() * 900000),
          allergies: "None",
          conditions: "None",
          nextVet: "TBD",
          nextVacc: "TBD",
          food: "Premium Kibble"
        };
        setPets(p => [...p, newDog]);
        setCurrentUser({ name: form.name, email: form.email });
        alert(`Account created successfully and ${form.petName} is registered! 🎉`);
        nav("dashboard");
      }
    }
  };

  const handleFocus = (e) => {
    e.target.style.borderColor = C.orange;
    e.target.style.boxShadow = `0 0 0 4px rgba(229, 93, 26, 0.14)`;
  };

  const handleBlur = (e) => {
    e.target.style.borderColor = C.border;
    e.target.style.boxShadow = "none";
  };

  // Gender Toggle Styles
  const gBtnStyle = (active) => ({
    flex: 1, padding: "14px", borderRadius: 14,
    border: `1.5px solid ${active ? C.orange : C.border}`,
    background: active ? C.orange : "#fff",
    color: active ? "#fff" : C.inkMd,
    fontSize: 14, fontWeight: 600, cursor: "pointer",
    display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
    boxShadow: active ? `0 6px 20px rgba(229, 93, 26, 0.25)` : "none",
    transition: "all 0.25s cubic-bezier(0.22, 1, 0.36, 1)"
  });

  return (
    <div style={{ minHeight: "100vh", display: "grid", gridTemplateColumns: "1fr 1fr", paddingTop: 96, background: C.cream }}>
      <div style={{ position: "relative", overflow: "hidden" }}>
        <Img src={P.about1} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        <div style={{ position: "absolute", inset: 0, background: "rgba(17,17,17,.52)" }} />
        <div style={{ position: "absolute", bottom: 60, left: 48 }}>
          <h2 className="melody-italic" style={{ fontSize: 52, fontWeight: 700, color: "#fff", lineHeight: .93, marginBottom: 16 }}>The best<br />for your<br />best friend.</h2>
          <p style={{ color: "rgba(255,255,255,.55)", fontSize: 15, lineHeight: 1.7 }}>45,000+ pet parents trust Pawprint.</p>
        </div>
      </div>

      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", background: `radial-gradient(circle at 10% 20%, rgba(229, 93, 26, 0.03) 0%, rgba(29, 95, 196, 0.03) 90%), ${C.cream}`, padding: 48 }}>
        <div className="glass-form fade-up" style={{ width: "100%", maxWidth: 460, padding: "40px 36px" }}>
          <div style={{ marginBottom: 24, display: "flex", alignItems: "center", gap: 10, cursor: "pointer" }} onClick={() => nav("home")}>
            <div style={{ width: 36, height: 36, borderRadius: 10, background: C.orange, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 17 }}>🐾</div>
            <span className="melody" style={{ fontSize: 20, fontWeight: 700, color: C.ink, letterSpacing: "0.04em" }}>Pawprint</span>
          </div>

          {type === "signup" && (
            <div className="wizard-progress">
              <div className="wizard-progress-bar" style={{ width: step === 1 ? "0%" : (step === 2 ? "50%" : "100%") }}></div>
              <div className={`wizard-progress-step ${step === 1 ? "active" : (step > 1 ? "completed" : "")}`}>1</div>
              <div className={`wizard-progress-step ${step === 2 ? "active" : (step > 2 ? "completed" : "")}`}>2</div>
              <div className={`wizard-progress-step ${step === 3 ? "active" : ""}`}>3</div>
            </div>
          )}

          {/* Form Fields */}
          {type === "login" && (
            <div>
              <h1 className="melody" style={{ fontSize: 36, fontWeight: 700, color: C.ink, marginBottom: 8 }}>Welcome back.</h1>
              <p style={{ fontSize: 15, color: C.inkSft, marginBottom: 32 }}>Sign in to your Pawprint account.</p>
              <div style={{ display: "flex", flexDirection: "column", gap: 16, marginBottom: 24 }}>
                <div className="field">
                  <label style={{ fontSize: 12, fontWeight: 700, letterSpacing: ".06em", textTransform: "uppercase", color: C.inkSft }}>Email Address</label>
                  <input type="email" placeholder="geetha@example.com" value={form.email} onChange={f("email")} style={iStyle} onFocus={handleFocus} onBlur={handleBlur} />
                </div>
                <div className="field">
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <label style={{ fontSize: 12, fontWeight: 700, letterSpacing: ".06em", textTransform: "uppercase", color: C.inkSft }}>Password</label>
                    <button style={{ background: "none", border: "none", color: C.orange, fontSize: 11, fontWeight: 700, cursor: "pointer" }}>Forgot?</button>
                  </div>
                  <input type="password" placeholder="••••••••" value={form.password} onChange={f("password")} style={iStyle} onFocus={handleFocus} onBlur={handleBlur} />
                </div>
              </div>
            </div>
          )}

          {type === "signup" && step === 1 && (
            <div>
              <h1 className="melody" style={{ fontSize: 34, fontWeight: 700, color: C.ink, marginBottom: 6 }}>Create account.</h1>
              <p style={{ fontSize: 14.5, color: C.inkSft, marginBottom: 24 }}>Join 45,000+ pet parents.</p>
              <div style={{ display: "flex", flexDirection: "column", gap: 14, marginBottom: 20 }}>
                <div className="field">
                  <label style={{ fontSize: 12, fontWeight: 700, letterSpacing: ".06em", textTransform: "uppercase", color: C.inkSft }}>Full Name</label>
                  <input placeholder="e.g. Geetha Sharma" value={form.name} onChange={f("name")} style={iStyle} onFocus={handleFocus} onBlur={handleBlur} />
                </div>
                <div className="field">
                  <label style={{ fontSize: 12, fontWeight: 700, letterSpacing: ".06em", textTransform: "uppercase", color: C.inkSft }}>Email Address</label>
                  <input type="email" placeholder="geetha@example.com" value={form.email} onChange={f("email")} style={iStyle} onFocus={handleFocus} onBlur={handleBlur} />
                </div>
                <div className="field">
                  <label style={{ fontSize: 12, fontWeight: 700, letterSpacing: ".06em", textTransform: "uppercase", color: C.inkSft }}>Password</label>
                  <input type="password" placeholder="••••••••" value={form.password} onChange={f("password")} style={iStyle} onFocus={handleFocus} onBlur={handleBlur} />
                </div>
              </div>
            </div>
          )}

          {type === "signup" && step === 2 && (
            <div>
              <h1 className="melody" style={{ fontSize: 34, fontWeight: 700, color: C.ink, marginBottom: 6 }}>Pet's Profile.</h1>
              <p style={{ fontSize: 14.5, color: C.inkSft, marginBottom: 24 }}>Tell us about your dog to personalize care.</p>
              <div style={{ display: "flex", flexDirection: "column", gap: 14, marginBottom: 24 }}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
                  <div className="field">
                    <label style={{ fontSize: 12, fontWeight: 700, letterSpacing: ".06em", textTransform: "uppercase", color: C.inkSft }}>Dog's Name *</label>
                    <input placeholder="e.g. Rocky" value={form.petName} onChange={f("petName")} style={iStyle} onFocus={handleFocus} onBlur={handleBlur} />
                  </div>
                  <div className="field">
                    <label style={{ fontSize: 12, fontWeight: 700, letterSpacing: ".06em", textTransform: "uppercase", color: C.inkSft }}>Breed *</label>
                    <input placeholder="e.g. Labrador" value={form.breed} onChange={f("breed")} style={iStyle} onFocus={handleFocus} onBlur={handleBlur} />
                  </div>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
                  <div className="field">
                    <label style={{ fontSize: 12, fontWeight: 700, letterSpacing: ".06em", textTransform: "uppercase", color: C.inkSft }}>Age (years/months) *</label>
                    <input placeholder="e.g. 2" value={form.age} onChange={f("age")} style={iStyle} onFocus={handleFocus} onBlur={handleBlur} />
                  </div>
                  <div className="field">
                    <label style={{ fontSize: 12, fontWeight: 700, letterSpacing: ".06em", textTransform: "uppercase", color: C.inkSft }}>Weight (kg) *</label>
                    <input placeholder="e.g. 25" value={form.weight} onChange={f("weight")} style={iStyle} onFocus={handleFocus} onBlur={handleBlur} />
                  </div>
                </div>
                <div className="field">
                  <label style={{ fontSize: 12, fontWeight: 700, letterSpacing: ".06em", textTransform: "uppercase", color: C.inkSft }}>Gender *</label>
                  <div style={{ display: "flex", gap: 12 }}>
                    <button type="button" style={gBtnStyle(signupGender === "Male")} onClick={() => setSignupGender("Male")}>♂ Male</button>
                    <button type="button" style={gBtnStyle(signupGender === "Female")} onClick={() => setSignupGender("Female")}>♀ Female</button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {type === "signup" && step === 3 && (
            <div>
              <h1 className="melody" style={{ fontSize: 34, fontWeight: 700, color: C.ink, marginBottom: 6 }}>Verify email.</h1>
              <p style={{ fontSize: 14.5, color: C.inkSft, marginBottom: 28 }}>Enter the 6-digit code sent to your email.</p>
              <div style={{ display: "flex", gap: 8, justifyContent: "center", marginBottom: 28 }}>
                {[...Array(6)].map((_, i) => (
                  <input key={i} maxLength={1} style={{ width: 44, height: 52, textAlign: "center", fontSize: 20, fontWeight: 700, borderRadius: 12, border: `1.5px solid ${C.border}`, outline: "none", background: "#fff", color: C.ink }} onFocus={handleFocus} onBlur={handleBlur} onChange={(e) => {
                    if (e.target.value.length === 1 && e.target.nextSibling) {
                      e.target.nextSibling.focus();
                    }
                  }} onKeyDown={(e) => {
                    if (e.key === "Backspace" && e.target.value.length === 0 && e.target.previousSibling) {
                      e.target.previousSibling.focus();
                    }
                  }} />
                ))}
              </div>
            </div>
          )}

          {/* Action Buttons */}
          <div style={{ display: "flex", gap: 12, marginTop: 20 }}>
            {type === "signup" && step > 1 && (
              <button className="btn btn-lg btn-outline" style={{ flex: 1 }} onClick={() => setStep(step - 1)}>Back</button>
            )}
            <button className="btn btn-lg btn-primary" style={{ flex: 2 }} onClick={handleNext}>
              {type === "login" ? "Sign In →" : (step === 1 ? "Continue to Pet Profile →" : (step === 2 ? "Verify Account →" : "Create Account →"))}
            </button>
          </div>

          <div style={{ display: "flex", gap: 8, margin: "24px 0", alignItems: "center" }}>
            <div style={{ flex: 1, height: 1, background: C.border }} /><span style={{ fontSize: 12, color: C.inkSft, fontWeight: 500 }}>or continue with</span><div style={{ flex: 1, height: 1, background: C.border }} />
          </div>

          <div style={{ display: "flex", gap: 12, marginBottom: 28 }}>
            {["🍎 Apple", "G Google"].map(s => (
              <button key={s} style={{ flex: 1, padding: "12px", border: `1.5px solid ${C.border}`, borderRadius: 14, background: "#fff", fontSize: 13.5, cursor: "pointer", fontWeight: 600, color: C.inkMd, transition: "border .18s" }} onMouseEnter={e => e.currentTarget.style.borderColor = C.inkMd} onMouseLeave={e => e.currentTarget.style.borderColor = C.border} onClick={handleNext}>{s}</button>
            ))}
          </div>

          <p style={{ textAlign: "center", fontSize: 14.5, color: C.inkSft }}>
            {type === "login" ? "Don't have an account? " : "Already have an account? "}
            <button style={{ background: "none", border: "none", color: C.orange, fontWeight: 700, cursor: "pointer", fontSize: 14.5 }} onClick={() => { setStep(1); nav(type === "login" ? "signup" : "login"); }}>
              {type === "login" ? "Sign Up Free" : "Sign In"}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}

// ══════════════════════════════════════════════════════════════════
//  CONTACT
// ══════════════════════════════════════════════════════════════════
function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const f = (k) => (e) => setForm(x => ({ ...x, [k]: e.target.value }));
  const iStyle = { padding: "13px 16px", borderRadius: 12, border: `1.5px solid ${C.border}`, fontSize: 15, outline: "none", color: C.ink, background: "#fff", transition: "border .18s", width: "100%" };

  return (
    <div style={{ paddingTop: 96 }}>
      <section style={{ padding: "100px 0", background: C.cream }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 32px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "start" }}>
          <div>
            <div className="pill pill-dark" style={{ marginBottom: 24 }}>Contact</div>
            <h1 className="melody-italic" style={{ fontSize: "clamp(48px,6vw,80px)", fontWeight: 700, lineHeight: .92, color: C.ink, marginBottom: 24 }}>Let's talk<br />about your<br />pet.</h1>
            <p style={{ fontSize: 17, color: C.inkSft, lineHeight: 1.8, marginBottom: 48 }}>Whether it's a question about adoption, a partnership, or you just want to say hello — we're here.</p>
            {[
              { icon: "📧", l: "Email", v: "hello@pawprint.in" },
              { icon: "📞", l: "Phone", v: "+91 98765 43210" },
              { icon: "📍", l: "Address", v: "Avinashi Road, Coimbatore, Tamil Nadu 641018" },
              { icon: "⏰", l: "Hours", v: "Mon–Sat, 9 AM – 6 PM IST" },
            ].map(c => (
              <div key={c.l} style={{ display: "flex", gap: 16, alignItems: "flex-start", marginBottom: 22 }}>
                <div style={{ width: 44, height: 44, borderRadius: 12, background: C.white, border: `1px solid ${C.border}`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20, flexShrink: 0 }}>{c.icon}</div>
                <div>
                  <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: ".07em", textTransform: "uppercase", color: C.inkSft, marginBottom: 2 }}>{c.l}</div>
                  <div style={{ fontSize: 15, color: C.ink, fontWeight: 500 }}>{c.v}</div>
                </div>
              </div>
            ))}
          </div>

          <div style={{ background: C.white, borderRadius: 28, padding: "48px 44px", border: `1px solid ${C.border}` }}>
            <h2 className="melody" style={{ fontSize: 22, fontWeight: 700, color: C.ink, marginBottom: 28 }}>Send a message</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {[["Full Name", "name", "text", "Your name"], ["Email", "email", "email", "you@email.com"], ["Subject", "subject", "text", "How can we help?"]].map(([l, k, t, ph]) => (
                <div key={k} className="field">
                  <label>{l}</label>
                  <input type={t} placeholder={ph} value={form[k]} onChange={f(k)} style={iStyle} onFocus={e => e.target.style.borderColor = C.orange} onBlur={e => e.target.style.borderColor = C.border} />
                </div>
              ))}
              <div className="field">
                <label>Message</label>
                <textarea placeholder="Tell us more…" rows={5} value={form.message} onChange={f("message")} style={{ ...iStyle, resize: "vertical", fontFamily: "inherit" }} onFocus={e => e.target.style.borderColor = C.orange} onBlur={e => e.target.style.borderColor = C.border} />
              </div>
            </div>
            <button className="btn btn-lg btn-primary" style={{ marginTop: 20, width: "100%" }} onClick={() => alert("Message sent! We'll reply within 24 hours 🐾")}>Send Message →</button>
          </div>
        </div>
      </section>
    </div>
  );
}

// ══════════════════════════════════════════════════════════════════
//  FOOTER
// ══════════════════════════════════════════════════════════════════
function Footer({ nav }) {
  const links = [
    { h: "Services", items: [["Veterinary", "vet"], ["Grooming", "svc-grooming"], ["Training", "svc-training"], ["Boarding", "svc-boarding"], ["Pet Walking", "svc-activity"], ["Specialty", "svc-specialty"]] },
    { h: "Explore", items: [["Adopt a Pet", "adopt"], ["Dog Breeds", "dog-breeds"], ["Pet Shop", "shop"], ["Lost & Found", "lost"], ["Pet Videos", "pet-videos"], ["Dashboard", "dashboard"]] },
    { h: "Company", items: [["About Us", "about"], ["Contact Us", "contact"], ["Careers", "home"], ["Privacy Policy", "home"], ["Terms of Use", "home"], ["Sitemap", "home"]] },
  ];

  return (
    <footer style={{ background: C.ink }}>

      {/* ── CTA strip ── */}
      <div style={{ background: C.orange, padding: "28px 0" }}>
        <div style={{
          maxWidth: 1280, margin: "0 auto", padding: "0 48px",
          display: "flex", justifyContent: "space-between", alignItems: "center",
          gap: 20, flexWrap: "wrap",
        }}>
          <div>
            <div className="melody" style={{ fontSize: 24, color: "#fff", letterSpacing: ".02em" }}>Ready to give your pet the best life?</div>
            <p style={{ color: "rgba(255,255,255,.75)", fontSize: 14, marginTop: 4 }}>Join 45,000+ pet parents. Free to start.</p>
          </div>
          <div style={{ display: "flex", gap: 12 }}>
            <button onClick={() => nav("signup")} style={{
              padding: "12px 28px", borderRadius: 100,
              background: "#fff", color: C.orange,
              fontWeight: 700, fontSize: 14, border: "none", cursor: "pointer",
            }}>Get Started Free →</button>
            <button onClick={() => nav("adopt")} style={{
              padding: "12px 24px", borderRadius: 100,
              background: "transparent", color: "#fff",
              fontWeight: 600, fontSize: 14,
              border: "2px solid rgba(255,255,255,.5)", cursor: "pointer",
            }}>Adopt a Pet</button>
          </div>
        </div>
      </div>

      {/* ── Main footer body ── */}
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "60px 48px 40px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr 1fr 1fr", gap: 48, marginBottom: 48 }}>

            {/* Brand */}
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
                <div style={{ width: 48, height: 48, borderRadius: 12, background: C.orange, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22 }}>🐾</div>
                <span className="melody" style={{ fontSize: 22, color: "#fff", letterSpacing: ".03em" }}>Pawprint</span>
              </div>
              <p style={{ color: "rgba(255,255,255,.38)", fontSize: 13, lineHeight: 1.8, maxWidth: 220, marginBottom: 24 }}>
                India's most loved pet care ecosystem — adoption, healthcare, grooming, and more.
              </p>
              {/* Social */}
              <div style={{ display: "flex", gap: 8 }}>
                {[
                  { k: "fb", svg: <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z"/></svg> },
                  { k: "insta", svg: <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg> },
                  { k: "x", svg: <svg width="12" height="12" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg> },
                  { k: "in", svg: <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg> },
                  { k: "yt", svg: <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.163a3.003 3.003 0 00-2.11-2.11C19.528 3.545 12 3.545 12 3.545s-7.528 0-9.388.508a3.003 3.003 0 00-2.11 2.11C0 8.022 0 12 0 12s0 3.978.502 5.837a3.003 3.003 0 002.11 2.11c1.86.508 9.388.508 9.388.508s7.528 0 9.388-.508a3.003 3.003 0 002.11-2.11C24 15.978 24 12 24 12s0-3.978-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg> }
                ].map(item => (
                  <button key={item.k} onClick={() => alert(`Redirecting to ${item.k}...`)} style={{
                    width: 34, height: 34, borderRadius: "50%",
                    background: "rgba(255,255,255,.07)",
                    border: "1px solid rgba(255,255,255,.1)",
                    color: "rgba(255,255,255,.5)",
                    cursor: "pointer", transition: "all .2s",
                    display: "flex", alignItems: "center", justifyContent: "center"
                  }}
                    onMouseEnter={e => { e.currentTarget.style.background = C.orange; e.currentTarget.style.color = "#fff"; e.currentTarget.style.borderColor = C.orange; }}
                    onMouseLeave={e => { e.currentTarget.style.background = "rgba(255,255,255,.07)"; e.currentTarget.style.color = "rgba(255,255,255,.5)"; e.currentTarget.style.borderColor = "rgba(255,255,255,.1)"; }}>
                    {item.svg}
                  </button>
                ))}
              </div>
            </div>

          {/* Link columns */}
          {links.map(col => (
            <div key={col.h}>
              <h4 style={{
                fontSize: 14, fontWeight: 700, letterSpacing: ".08em",
                textTransform: "uppercase", color: "rgba(255,255,255,.35)",
                marginBottom: 18,
              }}>{col.h}</h4>
              {col.items.map(([l, p]) => (
                <button key={l} onClick={() => nav(p)} style={{
                  display: "block", background: "none", border: "none",
                  color: "rgba(255,255,255,.5)", fontSize: 13,
                  marginBottom: 11, cursor: "pointer", textAlign: "left",
                  padding: 0, transition: "color .18s", lineHeight: 1.4,
                }}
                  onMouseEnter={e => e.currentTarget.style.color = "#fff"}
                  onMouseLeave={e => e.currentTarget.style.color = "rgba(255,255,255,.5)"}>
                  {l}
                </button>
              ))}
            </div>
          ))}
        </div>

        {/* ── Contact row ── */}
        <div style={{
          display: "flex", gap: 32, flexWrap: "wrap",
          padding: "20px 0",
          borderTop: "1px solid rgba(255,255,255,.07)",
          borderBottom: "1px solid rgba(255,255,255,.07)",
          marginBottom: 24,
        }}>
          {[
            { icon: "📧", v: "hello@pawprint.in" },
            { icon: "📞", v: "+91 98765 43210" },
            { icon: "📍", v: "Avinashi Road, Coimbatore – 641018" },
            { icon: "⏰", v: "Mon–Sat · 9 AM – 6 PM IST" },
          ].map(c => (
            <div key={c.v} style={{ display: "flex", gap: 8, alignItems: "center" }}>
              <span style={{ fontSize: 14 }}>{c.icon}</span>
              <span style={{ fontSize: 12, color: "rgba(255,255,255,.45)" }}>{c.v}</span>
            </div>
          ))}
        </div>

        {/* ── Bottom bar ── */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 10 }}>
          <p style={{ color: "rgba(255,255,255,.22)", fontSize: 12 }}>
            © 2026 Pawprint Technologies Pvt. Ltd. · Made with ❤️ in Coimbatore, India
          </p>
          <div style={{ display: "flex", gap: 20 }}>
          </div>
        </div>
      </div>
    </footer>
  );
}

// ══════════════════════════════════════════════════════════════════
//  SHARED SERVICE PAGE BUILDER
// ══════════════════════════════════════════════════════════════════

/* Reusable booking form */
function BookingForm({ serviceName, nav }) {
  const [f, setF] = useState({ name: "", phone: "", email: "", pet: "", breed: "", date: "", time: "", notes: "" });
  const [done, setDone] = useState(false);
  const upd = k => e => setF(x => ({ ...x, [k]: e.target.value }));
  const iS = { padding: "12px 15px", borderRadius: 11, border: `1.5px solid ${C.border}`, fontSize: 14, color: C.ink, background: "#fff", outline: "none", width: "100%", transition: "border-color .18s", fontFamily: "inherit" };
  const focus = e => e.target.style.borderColor = C.orange;
  const blur = e => e.target.style.borderColor = C.border;
  if (done) return (
    <div style={{ textAlign: "center", padding: "40px 32px", background: C.greenLt, borderRadius: 20, border: `1px solid ${C.green}33` }}>
      <div style={{ fontSize: 48, marginBottom: 12 }}>✅</div>
      <div className="melody" style={{ fontSize: 28, color: C.ink, marginBottom: 8 }}>Booking Confirmed!</div>
      <p style={{ color: C.inkSft, fontSize: 14, lineHeight: 1.7 }}>
        We've received your booking for <strong>{serviceName}</strong>.<br />
        Our team will call <strong>{f.phone}</strong> within 2 hours to confirm your slot.
      </p>
      <button className="btn btn-md btn-primary" style={{ marginTop: 20 }} onClick={() => setDone(false)}>Book Another →</button>
    </div>
  );
  return (
    <div style={{ background: C.white, borderRadius: 20, border: `1px solid ${C.border}`, padding: "32px" }}>
      <div className="melody" style={{ fontSize: 26, color: C.ink, marginBottom: 6 }}>Book {serviceName}</div>
      <p style={{ fontSize: 14, color: C.inkSft, marginBottom: 24 }}>Fill in your details and we'll confirm within 2 hours.</p>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
        {[["Your Full Name", "name", "text", "Geetha Sharma"], ["Phone Number", "phone", "tel", "+91 98765 43210"],
        ["Email Address", "email", "email", "geetha@email.com"], ["Pet's Name", "pet", "text", "Bruno"],
        ["Breed / Species", "breed", "text", "Labrador / Dog"]].map(([l, k, t, ph]) => (
          <div key={k} style={{ display: "flex", flexDirection: "column", gap: 5 }}>
            <label style={{ fontSize: 11, fontWeight: 700, letterSpacing: ".06em", textTransform: "uppercase", color: C.inkSft }}>{l}</label>
            <input type={t} placeholder={ph} value={f[k]} onChange={upd(k)} style={iS} onFocus={focus} onBlur={blur} />
          </div>
        ))}
        <div style={{ display: "flex", flexDirection: "column", gap: 5 }}>
          <label style={{ fontSize: 11, fontWeight: 700, letterSpacing: ".06em", textTransform: "uppercase", color: C.inkSft }}>Preferred Date</label>
          <input type="date" value={f.date} onChange={upd("date")} style={iS} onFocus={focus} onBlur={blur} />
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 5 }}>
          <label style={{ fontSize: 11, fontWeight: 700, letterSpacing: ".06em", textTransform: "uppercase", color: C.inkSft }}>Preferred Time</label>
          <select value={f.time} onChange={upd("time")} style={{ ...iS, cursor: "pointer" }}>
            <option value="">Select slot…</option>
            {["9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM", "6:00 PM"].map(s => <option key={s}>{s}</option>)}
          </select>
        </div>
        <div style={{ gridColumn: "1/-1", display: "flex", flexDirection: "column", gap: 5 }}>
          <label style={{ fontSize: 11, fontWeight: 700, letterSpacing: ".06em", textTransform: "uppercase", color: C.inkSft }}>Additional Notes</label>
          <textarea placeholder="Any specific requirements or concerns…" rows={3} value={f.notes} onChange={upd("notes")} style={{ ...iS, resize: "vertical" }} onFocus={focus} onBlur={blur} />
        </div>
      </div>
      <button className="btn btn-lg btn-primary" style={{ marginTop: 20, width: "100%" }}
        onClick={() => { if (!f.name || !f.phone || !f.date) { alert("Please fill Name, Phone & Date."); return; } setDone(true); }}>
        Confirm Booking →
      </button>
    </div>
  );
}

/* Generic service category page template */
function SvcCatPage({ cat, icon, color, accent, heroImg, tagline, about, services, whyUs, faqItems, nav }) {
  const [activeSvc, setActiveSvc] = useState(null);



  const activeSvcData = activeSvc ? services.find(s => s.name === activeSvc) : null;

  if (activeSvcData) return (
    <div style={{ paddingTop: 96, background: C.cream, minHeight: "100vh" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "48px 32px 80px" }}>
        <button className="btn btn-md btn-ghost" style={{ marginBottom: 32 }} onClick={() => setActiveSvc(null)}>← Back to {cat}</button>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "start" }}>
          <div>
            <div style={{ borderRadius: 24, overflow: "hidden", height: 380, marginBottom: 20 }}>
              <Img src={activeSvcData.img} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
            <div style={{ background: C.white, borderRadius: 16, padding: "24px", border: `1px solid ${C.border}` }}>
              <div className="melody" style={{ fontSize: 18, color: C.ink, marginBottom: 12 }}>What's Included</div>
              <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: 8 }}>
                {activeSvcData.includes.map((inc, i) => (
                  <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: 10, fontSize: 14, color: C.inkSft, lineHeight: 1.6 }}>
                    <span style={{ width: 18, height: 18, borderRadius: "50%", background: color, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 9, color: "#fff", flexShrink: 0, marginTop: 2 }}>✓</span>
                    {inc}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div>
            <div className="pill" style={{ background: `${color}15`, color, marginBottom: 16 }}>{icon} {cat}</div>
            <h1 className="melody" style={{ fontSize: 58, color: C.ink, lineHeight: 1, marginBottom: 12 }}>{activeSvcData.name}</h1>
            <p style={{ fontSize: 17, color: C.inkSft, lineHeight: 1.8, marginBottom: 24 }}>{activeSvcData.desc}</p>
            <div style={{ display: "flex", gap: 16, marginBottom: 32, flexWrap: "wrap" }}>
              <div style={{ background: C.white, borderRadius: 14, padding: "14px 20px", border: `1px solid ${C.border}`, flex: 1, minWidth: 120 }}>
                <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: ".07em", textTransform: "uppercase", color: C.inkSft, marginBottom: 4 }}>Starting From</div>
                <div className="melody" style={{ fontSize: 26, color: color }}>{activeSvcData.price}</div>
              </div>
              <div style={{ background: C.white, borderRadius: 14, padding: "14px 20px", border: `1px solid ${C.border}`, flex: 1, minWidth: 120 }}>
                <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: ".07em", textTransform: "uppercase", color: C.inkSft, marginBottom: 4 }}>Duration</div>
                <div className="melody" style={{ fontSize: 26, color: C.ink }}>{activeSvcData.duration}</div>
              </div>
              <div style={{ background: C.white, borderRadius: 14, padding: "14px 20px", border: `1px solid ${C.border}`, flex: 1, minWidth: 120 }}>
                <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: ".07em", textTransform: "uppercase", color: C.inkSft, marginBottom: 4 }}>Rating</div>
                <div className="melody" style={{ fontSize: 26, color: C.orange }}>⭐ {activeSvcData.rating}</div>
              </div>
            </div>
            <BookingForm serviceName={activeSvcData.name} nav={nav} />
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div style={{ paddingTop: 96 }}>
      {/* Hero */}
      <section style={{ position: "relative", height: 440, overflow: "hidden" }}>
        <Img src={heroImg} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        <div style={{ position: "absolute", inset: 0, background: `linear-gradient(to right, rgba(17,17,17,.75) 0%, rgba(17,17,17,.35) 60%, transparent 100%)` }} />
        <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center" }}>
          <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 32px", width: "100%" }}>
            <div className="pill" style={{ background: "rgba(255,255,255,.15)", color: "#fff", marginBottom: 20, backdropFilter: "blur(4px)" }}>{icon} {cat}</div>
            <h1 className="melody" style={{ fontSize: "clamp(52px,6vw,88px)", color: "#fff", lineHeight: 1, marginBottom: 16 }}>{tagline}</h1>
            <p style={{ fontSize: 18, color: "rgba(255,255,255,.75)", lineHeight: 1.7, maxWidth: 520, marginBottom: 28 }}>{about}</p>
            <div style={{ display: "flex", gap: 14 }}>
              <button className="btn btn-lg btn-primary" onClick={() => { if (services[0]) setActiveSvc(services[0].name); }}>Book a Service →</button>
              <button className="btn btn-lg btn-ghost" style={{ color: "rgba(255,255,255,.7)", borderColor: "rgba(255,255,255,.3)" }} onClick={() => nav("contact")}>Talk to Us</button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <div style={{ background: color, padding: "20px 0" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 32px", display: "flex", gap: 48, justifyContent: "center", flexWrap: "wrap" }}>
          {whyUs.stats.map(([v, l]) => (
            <div key={l} style={{ textAlign: "center" }}>
              <div className="melody" style={{ fontSize: 32, color: "#fff", lineHeight: 1 }}>{v}</div>
              <div style={{ fontSize: 12, color: "rgba(255,255,255,.7)", marginTop: 4 }}>{l}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Services grid */}
      <section style={{ padding: "80px 0", background: C.cream }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 32px" }}>
          <div className="pill" style={{ background: `${color}15`, color, marginBottom: 16 }}>{icon} All {cat} Services</div>
          <h2 className="melody" style={{ fontSize: "clamp(36px,4vw,56px)", color: C.ink, marginBottom: 48, lineHeight: 1 }}>Everything you need,<br />in one place.</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(280px,1fr))", gap: 24 }}>
            {services.map((s, i) => (
              <div key={i} className="card card-lift" style={{ cursor: "pointer", borderTop: `3px solid ${color}` }} onClick={() => setActiveSvc(s.name)}>
                <div style={{ height: 180, overflow: "hidden", position: "relative" }}>
                  <Img src={s.img} style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform .5s cubic-bezier(.22,1,.36,1)" }}
                    onMouseEnter={e => e.target.style.transform = "scale(1.07)"}
                    onMouseLeave={e => e.target.style.transform = "scale(1)"} />
                  <div style={{ position: "absolute", bottom: 12, right: 12, background: "rgba(0,0,0,.55)", borderRadius: 100, padding: "4px 12px" }}>
                    <span style={{ color: "#fff", fontSize: 12, fontWeight: 600 }}>{s.price}</span>
                  </div>
                </div>
                <div style={{ padding: "20px 22px" }}>
                  <h3 className="melody" style={{ fontSize: 22, color: C.ink, marginBottom: 6 }}>{s.name}</h3>
                  <p style={{ fontSize: 13, color: C.inkSft, lineHeight: 1.65, marginBottom: 14 }}>{s.shortDesc}</p>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <span style={{ fontSize: 12, color: C.orange, fontWeight: 600 }}>⭐ {s.rating} · {s.duration}</span>
                    <button className="btn btn-sm btn-primary" onClick={e => { e.stopPropagation(); setActiveSvc(s.name); }}>Book →</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section style={{ padding: "80px 0", background: C.inkMd }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 32px" }}>
          <h2 className="melody" style={{ fontSize: "clamp(34px,4vw,52px)", color: "#fff", marginBottom: 48, lineHeight: 1 }}>Why choose Pawprint<br />for {cat}?</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(240px,1fr))", gap: 20 }}>
            {whyUs.points.map((p, i) => (
              <div key={i} style={{ padding: "28px", borderRadius: 20, background: "rgba(255,255,255,.06)", border: "1px solid rgba(255,255,255,.08)" }}>
                <div style={{ fontSize: 32, marginBottom: 14 }}>{p.icon}</div>
                <div className="melody" style={{ fontSize: 20, color: "#fff", marginBottom: 8 }}>{p.title}</div>
                <p style={{ fontSize: 13, color: "rgba(255,255,255,.5)", lineHeight: 1.7 }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section style={{ padding: "60px 0", background: color }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 32px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 20 }}>
          <div>
            <h2 className="melody" style={{ fontSize: 40, color: "#fff", lineHeight: 1, marginBottom: 8 }}>Ready to book {cat}?</h2>
            <p style={{ color: "rgba(255,255,255,.7)", fontSize: 16 }}>Certified professionals · Guaranteed satisfaction · Easy booking</p>
          </div>
          <div style={{ display: "flex", gap: 12 }}>
            <button className="btn btn-lg" style={{ background: "#fff", color: color, fontWeight: 700 }} onClick={() => { if (services[0]) setActiveSvc(services[0].name); }}>Book Now →</button>
            <button className="btn btn-lg btn-ghost" style={{ color: "rgba(255,255,255,.7)", borderColor: "rgba(255,255,255,.3)" }} onClick={() => nav("contact")}>Contact Us</button>
          </div>
        </div>
      </section>
    </div>
  );
}

// ── HEALTH & CARE PAGE ────────────────────────────────────────────
function SvcHealthPage({ nav }) {
  const services = [
    { name: "General Checkups", price: "₹299", duration: "30 min", rating: "4.9", img: P.vet1, shortDesc: "Full physical examination, vitals check, and health assessment by a certified vet.", desc: "Our general checkup includes a comprehensive nose-to-tail physical examination. The vet checks eyes, ears, teeth, skin, coat, weight, and all vital signs. You'll receive a written health report and recommendations.", includes: ["Full physical examination", "Vitals & weight check", "Parasite screening", "Dietary recommendations", "Written health report", "Follow-up advice"] },
    { name: "Vaccinations", price: "₹199", duration: "20 min", rating: "4.9", img: P.vet2, shortDesc: "All core and lifestyle vaccines administered by certified veterinarians with digital records.", desc: "We offer complete vaccination drives covering all core vaccines (Distemper, Parvovirus, Rabies) and lifestyle vaccines. You receive a digital health passport with all records and smart reminders for upcoming doses.", includes: ["Core & lifestyle vaccines", "Digital health passport", "Vaccine certificate", "Smart reminder setup", "Post-vaccine guidance", "Free 24h helpline"] },
    { name: "Deworming", price: "₹149", duration: "15 min", rating: "4.8", img: P.groom, shortDesc: "Safe, vet-prescribed deworming treatments for all ages and breeds.", desc: "Deworming is essential every 3–6 months. Our vets assess your pet's weight, age, and risk factors to prescribe the right treatment. Includes follow-up to ensure full efficacy.", includes: ["Weight-based dosing", "Broad-spectrum coverage", "Puppy-safe options", "Follow-up check", "Treatment record", "Preventive schedule"] },
    { name: "Flea & Tick Treatment", price: "₹349", duration: "30 min", rating: "4.8", img: P.train, shortDesc: "Effective flea and tick prevention and treatment for a comfortable, healthy pet.", desc: "Our certified vets provide both topical and systemic flea & tick treatments, selecting the safest and most effective option for your pet's breed, age, and lifestyle.", includes: ["Vet-selected product", "Topical or oral option", "Environmental advice", "Collar options", "Safe for all ages", "Monthly plan available"] },
    { name: "Dental Care", price: "₹599", duration: "45 min", rating: "4.7", img: P.vet1, shortDesc: "Professional dental cleaning and oral health assessment to prevent disease.", desc: "Periodontal disease affects 80% of dogs over 3. Our dental care service includes professional scaling, polishing, full oral exam, and a home care plan.", includes: ["Professional scaling", "Polishing", "Full oral examination", "X-ray if needed", "Home care kit", "Dietary guidance"] },
    { name: "Spay & Neuter", price: "₹3,999", duration: "2–3 hrs", rating: "4.9", img: P.vet2, shortDesc: "Safe, medically supervised spay and neuter procedures by experienced surgeons.", desc: "Our spay/neuter surgeries are performed by experienced veterinary surgeons with full pre-op bloodwork, anesthesia monitoring, and post-op care included.", includes: ["Pre-op blood panel", "General anesthesia", "Expert surgery", "Post-op care kit", "Pain management", "Free follow-up visit"] },
    { name: "Emergency Care", price: "₹999", duration: "As needed", rating: "4.9", img: P.vet1, shortDesc: "24/7 emergency veterinary dispatch — rapid response when every second matters.", desc: "When your pet faces a crisis, our emergency team dispatches a vet to your location within 60 minutes. Available 24/7, 365 days a year.", includes: ["24/7 availability", "60-min dispatch goal", "First aid on arrival", "Specialist referral", "Emergency medication", "Crisis helpline"] },
    { name: "Surgery", price: "₹5,999", duration: "Varies", rating: "4.8", img: P.vet2, shortDesc: "Soft tissue and orthopaedic surgeries by board-certified veterinary surgeons.", desc: "Our surgical suite is equipped with modern anaesthesia and monitoring equipment. We perform a range of soft tissue and orthopaedic procedures with full pre- and post-op care.", includes: ["Pre-surgical assessment", "General anaesthesia", "Sterile surgical suite", "Intra-op monitoring", "Post-op nursing", "Pain management"] },
    { name: "Nutrition Consultation", price: "₹399", duration: "40 min", rating: "4.8", img: P.shop1, shortDesc: "Personalised diet plans crafted by veterinary nutritionists for optimal health.", desc: "What your pet eats directly impacts longevity. Our veterinary nutritionists assess your pet's breed, weight, activity level, and medical history to craft a tailored diet plan.", includes: ["Full nutritional assessment", "Custom diet plan", "Brand recommendations", "Allergy identification", "Supplement advice", "Monthly check-in"] },
    { name: "Senior Dog Care", price: "₹599", duration: "45 min", rating: "4.9", img: P.dog3, shortDesc: "Comprehensive health packages designed for the unique needs of senior pets (7+ years).", desc: "Senior pets need more frequent, targeted care. Our senior wellness package includes arthritis screening, cognitive assessment, bloodwork, and a tailored care plan.", includes: ["Geriatric health screening", "Arthritis assessment", "Cognitive evaluation", "Full bloodwork panel", "Pain management plan", "Nutritional guidance"] },
    { name: "Puppy Care", price: "₹499", duration: "45 min", rating: "4.9", img: P.dog1, shortDesc: "Complete puppy wellness visits covering vaccinations, deworming, socialisation, and diet.", desc: "The first year is crucial. Our puppy care packages cover all age-appropriate vaccines, deworming schedules, microchipping, dental checks, and socialisation guidance.", includes: ["Age-appropriate vaccines", "Deworming schedule", "Microchipping", "Dental check", "Socialisation tips", "Nutrition plan"] },
    { name: "Physiotherapy & Rehabilitation", price: "₹799", duration: "60 min", rating: "4.8", img: P.train, shortDesc: "Post-surgery and injury rehabilitation through certified animal physiotherapy.", desc: "Our certified animal physiotherapists use hydrotherapy, massage, laser therapy, and therapeutic exercises to restore mobility and reduce pain after surgery or injury.", includes: ["Initial assessment", "Custom rehab plan", "Hydrotherapy option", "Laser therapy", "Home exercise guide", "Weekly progress tracking"] },
  ];
  return <SvcCatPage cat="Health & Care" icon="🏥" color={C.blue} heroImg={P.vet1} tagline={"Expert Care,\nHealthier Lives."} about="Certified veterinarians, advanced diagnostics, and compassionate care — for every stage of your pet's life." services={services} whyUs={{ stats: [["1,200+", "Certified Vets"], ["24/7", "Emergency Care"], ["4.9★", "Average Rating"], ["50K+", "Consultations"]], points: [{ icon: "🏥", title: "Certified Vets Only", desc: "Every vet on Pawprint is VCPN-verified with minimum 3 years of clinical experience." }, { icon: "🔬", title: "Evidence-Based Medicine", desc: "We follow the latest veterinary clinical guidelines — no guesswork, only science." }, { icon: "📋", title: "Digital Health Records", desc: "Every visit, prescription, and report is stored securely and accessible anytime." }, { icon: "🚑", title: "24/7 Emergency", desc: "Our emergency line and rapid-response vets are available round the clock." }] }} faqItems={[{ q: "How often should I take my dog for a checkup?", a: "Healthy adult dogs benefit from bi-annual checkups. Puppies and senior dogs (7+) should visit every 3–4 months." }, { q: "Are your vets qualified?", a: "All Pawprint vets hold a BVSc or MVSc degree and are registered with the Veterinary Council of India." }, { q: "Can I consult online first?", a: "Absolutely. Our video consultation service connects you with a vet in minutes — available 24/7." }, { q: "What vaccines does my puppy need?", a: "Core vaccines include Distemper, Parvovirus, Hepatitis, and Rabies. Our vets will create a tailored schedule at your first visit." }, { q: "Do you offer home visits?", a: "Yes. All services, including checkups, vaccinations, and deworming, are available as home visits at a small additional charge." }]} nav={nav} />;
}

// ── GROOMING & HYGIENE PAGE ───────────────────────────────────────
function SvcGroomingPage({ nav }) {
  const services = [
    { name: "Full Grooming", price: "₹799", duration: "90 min", rating: "4.9", img: P.groom, shortDesc: "Complete bath, haircut, nail trim, ear clean, and finishing — the full spa experience.", desc: "Our full grooming session covers everything your pet needs: breed-specific shampoo bath, blow dry, haircut, nail clipping, ear cleaning, and a final fragrance spritz. Walk in, walk out pampered.", includes: ["Breed-specific bath", "Professional blow dry", "Custom haircut", "Nail clipping", "Ear cleaning", "Fragrance & bow"] },
    { name: "Bath & Blow Dry", price: "₹399", duration: "45 min", rating: "4.8", img: P.groom, shortDesc: "Thorough medicated or regular bath followed by professional blow dry and brush-out.", desc: "A deep cleanse with premium, pet-safe shampoo followed by a professional blow dry and thorough brush-out to leave your pet's coat clean, tangle-free, and glossy.", includes: ["Medicated or regular shampoo", "Conditioning treatment", "Professional blow dry", "Brush-out", "Coat check", "Basic hygiene check"] },
    { name: "Hair Trimming & Styling", price: "₹499", duration: "60 min", rating: "4.8", img: P.groom, shortDesc: "Expert breed-standard and custom styling by certified groomers.", desc: "Our groomers are trained in breed standards as well as custom cuts. Whether it's a precise Poodle clip or a practical trim, we deliver clean, consistent results.", includes: ["Breed-standard or custom cut", "Scissor & clipper finishing", "Fringe & face trim", "Paw & sanitary trim", "Final inspection", "Style photo"] },
    { name: "Nail Clipping", price: "₹149", duration: "15 min", rating: "4.9", img: P.groom, shortDesc: "Safe, stress-free nail trimming with grinding option for perfectly smooth edges.", desc: "Overgrown nails can cause pain and postural issues. Our groomers use sharp, proper-sized clippers with an optional grinder finish to ensure smooth, safe nails.", includes: ["All four paws", "Quick detection & care", "Grinder finish option", "Paw massage", "Paw pad check", "Moisturiser application"] },
    { name: "Ear Cleaning", price: "₹199", duration: "20 min", rating: "4.8", img: P.groom, shortDesc: "Gentle, thorough ear cleaning to prevent infection and remove wax build-up.", desc: "Ear infections are one of the most common vet visits. Our safe ear cleaning service removes debris, wax, and checks for signs of infection or mites.", includes: ["Both ears cleaned", "Vet-approved solution", "Wax removal", "Infection check", "Mite inspection", "Aftercare advice"] },
    { name: "Teeth Brushing", price: "₹249", duration: "20 min", rating: "4.7", img: P.groom, shortDesc: "Pet-safe dental brushing to prevent plaque, tartar, and bad breath.", desc: "Regular teeth brushing significantly reduces the risk of periodontal disease. We use pet-safe enzymatic toothpaste and soft brushes for a gentle, effective clean.", includes: ["Pet-safe toothpaste", "Full brush session", "Tartar check", "Bad breath assessment", "Home brushing guide", "Dental treat recommendation"] },
    { name: "De-shedding Treatment", price: "₹599", duration: "60 min", rating: "4.9", img: P.groom, shortDesc: "Professional de-shedding to dramatically reduce loose fur and keep your home cleaner.", desc: "Our de-shedding treatment combines a specialised shampoo, high-velocity blow dry, and deshedding brush to remove up to 90% of loose undercoat — leaving your home fur-free.", includes: ["Deshedding shampoo", "Conditioning mask", "High-velocity dry", "Furminator brush", "Coat health check", "Shedding reduction guarantee"] },
    { name: "Flea Bath", price: "₹449", duration: "45 min", rating: "4.8", img: P.groom, shortDesc: "Medicated flea bath using vet-approved products to eliminate fleas safely.", desc: "Our flea bath uses medicated, vet-approved shampoo to kill fleas on contact. We check the entire coat and recommend a follow-up treatment schedule to prevent reinfestation.", includes: ["Medicated flea shampoo", "Full coat inspection", "Flea comb treatment", "Environmental advice", "Aftercare plan", "Product recommendations"] },
    { name: "Paw Care", price: "₹299", duration: "30 min", rating: "4.8", img: P.groom, shortDesc: "Complete paw treatment including nail trim, pad massage, moisturising, and cracked pad treatment.", desc: "Paws carry your pet everywhere. Our paw care service addresses cracked pads, overgrown nails, interdigital fur, and dryness with a moisturising soak and treatment.", includes: ["Nail clip & file", "Pad inspection & treatment", "Moisturiser soak", "Interdigital fur trim", "Cracked pad repair", "Protective balm"] },
    { name: "Skin & Coat Treatment", price: "₹699", duration: "60 min", rating: "4.9", img: P.groom, shortDesc: "Targeted treatments for dry skin, dandruff, dull coat, or medically recommended skin issues.", desc: "Our skin and coat treatments use medically formulated shampoos, conditioning masks, and ozone therapy to restore coat lustre, treat dandruff, and soothe irritated skin.", includes: ["Skin condition assessment", "Medicated or nourishing shampoo", "Deep conditioning mask", "Ozone therapy option", "Coat serum finish", "Home care routine"] },
  ];
  return <SvcCatPage cat="Grooming & Hygiene" icon="✂️" color={C.green} heroImg={P.groom} tagline={"Looking Good,\nFeeling Great."} about="Certified groomers, premium products, and stress-free sessions — because your pet deserves to look and feel their very best." services={services} whyUs={{ stats: [["500+", "Certified Groomers"], ["4.9★", "Client Rating"], ["Pickup", "& Drop Available"], ["All", "Breeds Welcome"]], points: [{ icon: "✂️", title: "Breed-Certified Groomers", desc: "All groomers complete a 120-hour breed-specific certification programme." }, { icon: "🌿", title: "Premium Products", desc: "We use only pet-safe, cruelty-free, dermatologically tested grooming products." }, { icon: "🚗", title: "Free Pickup & Drop", desc: "Available in all major cities — we come to you, saving you time and stress." }, { icon: "📸", title: "Before & After Photos", desc: "We capture the transformation so you can share your pet's glow-up." }] }} faqItems={[{ q: "How often should I groom my dog?", a: "Most dogs benefit from professional grooming every 4–8 weeks depending on breed and coat type. Double-coated breeds may need more frequent de-shedding." }, { q: "Is your grooming salon safe for anxious pets?", a: "Yes. We use calm, force-free handling techniques. For very anxious pets, we offer one-on-one sessions with extra patience and breaks." }, { q: "Do you offer mobile grooming?", a: "We offer pickup and drop at no extra charge. Full mobile grooming vans are available in select cities." }, { q: "What shampoo do you use?", a: "We use pH-balanced, breed-appropriate shampoos — medicated options are available for skin conditions on vet recommendation." }, { q: "Can I request a specific grooming style?", a: "Absolutely. Bring reference photos and our groomers will do their best to achieve your desired look." }]} nav={nav} />;
}

// ── TRAINING & BEHAVIOR PAGE ──────────────────────────────────────
function SvcTrainingPage({ nav }) {
  const services = [
    { name: "Puppy Training", price: "₹1,499/mo", duration: "60 min/session", rating: "4.9", img: P.train, shortDesc: "Foundation skills for puppies 8–16 weeks: sit, stay, come, socialisation, and bite inhibition.", desc: "The first weeks are the most important. Our puppy training programme establishes a positive foundation through socialisation, basic commands, and confidence building — all using reward-based methods.", includes: ["Basic commands (sit, stay, come)", "Bite inhibition", "Socialisation exercises", "Leash introduction", "Crate training", "Parent coaching"] },
    { name: "Obedience Training", price: "₹1,999/mo", duration: "60 min/session", rating: "4.9", img: P.train, shortDesc: "Comprehensive obedience for dogs of all ages: heel, down, recall, stay, and off-leash control.", desc: "Our obedience curriculum covers all foundational and advanced commands. Dogs graduate with reliable on- and off-leash responses in a variety of environments.", includes: ["14 core commands", "On & off-leash control", "Distraction training", "Group & solo sessions", "Progress tracking", "Certificate on completion"] },
    { name: "Leash Training", price: "₹999/mo", duration: "45 min/session", rating: "4.8", img: P.dog3, shortDesc: "Stop pulling, reactive barking, and lunging — walk your dog calmly and confidently.", desc: "Loose-leash walking is one of the most requested skills. Our trainers use positive reinforcement and structured exercises to teach dogs to walk calmly beside their owners.", includes: ["Loose-leash fundamentals", "Anti-pull techniques", "Reactive dog protocols", "Equipment guidance", "Real-world practice", "Owner coaching"] },
    { name: "Potty Training", price: "₹799/mo", duration: "30 min/session", rating: "4.8", img: P.dog1, shortDesc: "Reliable house-training using positive, consistent methods for puppies and adult dogs.", desc: "Accidents happen, but they don't have to be a regular occurrence. Our potty training protocol establishes a clear schedule, reward system, and environmental management strategy.", includes: ["Custom schedule plan", "Reward-based method", "Indoor & outdoor options", "Parent instruction", "Accident prevention tips", "Ongoing support"] },
    { name: "Behavioral Correction", price: "₹2,499/mo", duration: "75 min/session", rating: "4.8", img: P.train, shortDesc: "Identify and correct unwanted behaviors: jumping, barking, chewing, separation anxiety.", desc: "Our certified behaviourists identify the root cause of problem behaviours and develop a tailored modification plan — no punishment, just science-backed positive techniques.", includes: ["Full behaviour assessment", "Custom modification plan", "Root cause analysis", "Weekly sessions", "Progress reports", "Emergency support line"] },
    { name: "Aggression Management", price: "₹3,499/mo", duration: "90 min/session", rating: "4.9", img: P.train, shortDesc: "Safe, certified protocols for dog-to-dog and dog-to-human aggression using desensitisation.", desc: "Aggression requires specialised handling. Our certified behaviourists use systematic desensitisation and counter-conditioning — never aversive tools — to manage and reduce aggressive responses safely.", includes: ["Full aggression assessment", "Certified behaviourist only", "Desensitisation programme", "Counter-conditioning", "Management strategies", "Family coaching"] },
    { name: "Socialization Training", price: "₹1,299/mo", duration: "60 min/session", rating: "4.9", img: P.community, shortDesc: "Structured socialisation for fearful, under-socialised, or reactive dogs in safe, controlled environments.", desc: "Proper socialisation prevents fear and reactivity. Our group and individual socialisation sessions expose dogs to new people, animals, sounds, and environments at a safe, comfortable pace.", includes: ["Controlled exposure", "Positive associations", "Group dog interaction", "New environment visits", "Fear reduction techniques", "Owner guidance"] },
    { name: "Guard Dog Training", price: "₹4,999/mo", duration: "90 min/session", rating: "4.8", img: P.dog3, shortDesc: "Professional protection and guarding training for working breeds.", desc: "For owners who need a reliable protection dog, our certified trainers teach alert barking, controlled guarding, off-switch commands, and discrimination between threats and non-threats.", includes: ["Breed suitability assessment", "Alert & bark-on-command", "Controlled guarding", "Off-command training", "Discrimination training", "Monthly evaluation"] },
    { name: "Advanced Training", price: "₹2,999/mo", duration: "75 min/session", rating: "4.9", img: P.train, shortDesc: "Beyond basic obedience: distance commands, hand signals, tricks, and agility foundations.", desc: "For dogs who've mastered the basics, our advanced curriculum introduces hand signals, distance commands, trick training, and agility foundation work.", includes: ["Hand signal commands", "Distance & distraction work", "Trick training package", "Agility introduction", "Competitive preparation", "AKC-equivalent standards"] },
    { name: "Therapy Dog Training", price: "₹3,999/mo", duration: "75 min/session", rating: "4.9", img: P.dog4, shortDesc: "Prepare your dog for official therapy dog certification to visit hospitals, schools, and care homes.", desc: "Therapy dogs bring immense comfort to those in need. Our programme prepares dogs (and their handlers) for official therapy dog certification, covering temperament, exposure, and handler skills.", includes: ["Temperament evaluation", "Public access training", "Handler skills coaching", "Hospital/school prep", "Certification prep", "Official test assistance"] },
  ];
  return <SvcCatPage cat="Training & Behavior" icon="🎓" color={C.orange} heroImg={P.train} tagline={"Well-Trained,\nWell-Loved."} about="Certified, force-free trainers using reward-based science to build obedient, confident, and happy dogs." services={services} whyUs={{ stats: [["200+", "Certified Trainers"], ["98%", "Success Rate"], ["10,000+", "Dogs Trained"], ["Force-Free", "Methods Only"]], points: [{ icon: "🎓", title: "CPDT-Certified Trainers", desc: "All trainers hold international certifications and follow force-free, science-backed methods." }, { icon: "❤️", title: "No Aversive Tools", desc: "We never use choke chains, prong collars, or shock collars. Positive reinforcement only." }, { icon: "📊", title: "Progress Tracking", desc: "Weekly session reports and a training app to practice between sessions." }, { icon: "🏠", title: "Home & Group Options", desc: "In-home sessions, group classes, and board & train packages available." }] }} faqItems={[{ q: "What age can I start training my puppy?", a: "Training can begin as early as 8 weeks old. Early socialisation and basic commands at this stage have the most lasting impact." }, { q: "Do you use punishment-based methods?", a: "Never. All Pawprint trainers are force-free certified. We use positive reinforcement exclusively." }, { q: "How many sessions will my dog need?", a: "This varies by the dog and goal. Basic obedience typically takes 6–8 sessions. Behaviour modification may require 3–6 months." }, { q: "Can older dogs be trained?", a: "Absolutely. The saying 'you can't teach an old dog new tricks' is a myth. Dogs of any age respond well to reward-based training." }, { q: "Do you offer group classes?", a: "Yes — our group classes run weekly in all major cities and are a great way to practise around distractions." }]} nav={nav} />;
}

// ── BOARDING & SITTING PAGE ───────────────────────────────────────
function SvcBoardingPage({ nav }) {
  const services = [
    { name: "Dog Boarding", price: "₹599/night", duration: "Per night", rating: "4.9", img: P.boarding, shortDesc: "Safe, supervised overnight boarding in clean, comfortable facilities.", desc: "Our boarding facilities provide a home-away-from-home experience. Each dog gets their own cozy space, regular feeding, two exercise walks, and playtime.", includes: ["Private sleeping area", "3 meals/day", "2 exercise walks", "Supervised playtime", "Daily health check", "Photo updates to owner"] },
    { name: "Luxury Boarding", price: "₹1,499/night", duration: "Per night", rating: "4.9", img: P.boarding, shortDesc: "Premium suites with AC, plush bedding, TV, and dedicated one-on-one attention.", desc: "Our luxury suites feature air conditioning, orthopedic bedding, calming music, individual playtime, and real-time camera access for owners.", includes: ["AC premium suite", "Orthopedic bedding", "Live camera access", "1-on-1 attention", "Gourmet meals", "Bedtime story (seriously!)"] },
    { name: "Overnight Stay", price: "₹799/night", duration: "Per night", rating: "4.8", img: P.boarding, shortDesc: "Comfortable overnight care with evening and morning routines maintained.", desc: "Maintains your pet's normal evening and morning routine in a caring environment. Perfect for one or two nights away.", includes: ["Evening & morning walks", "Consistent routine", "Comfort items welcome", "Evening check-in call", "Morning departure report", "Medication management"] },
    { name: "Dog Daycare", price: "₹399/day", duration: "8 hrs", rating: "4.9", img: P.boarding, shortDesc: "Full-day supervised play, socialisation, and rest while you're at work.", desc: "Drop off in the morning, pick up in the evening. Your dog enjoys a full day of supervised play, rest, feeding, and socialisation with other friendly dogs.", includes: ["Supervised group play", "Rest periods", "2 meals provided", "Socialisation sessions", "Real-time photo updates", "Behaviour report"] },
    { name: "Pet Sitting", price: "₹499/visit", duration: "2 hrs/visit", rating: "4.9", img: P.about2, shortDesc: "A trusted sitter visits your home to care for your pet in their own environment.", desc: "Sometimes home is best. Our background-checked pet sitters visit your home to feed, play, walk, and care for your pet in the comfort of their own environment.", includes: ["In-home visit", "Feeding & fresh water", "30-min play/walk", "Litter/potty care", "Home security check", "Post-visit report"] },
    { name: "Home Visit Care", price: "₹299/visit", duration: "45 min", rating: "4.8", img: P.about2, shortDesc: "Shorter wellness check visits for pets who just need a midday check-in.", desc: "Perfect for pets who need a midday check. Our carers visit, check food and water, give a quick play session, and ensure your pet is happy and comfortable.", includes: ["Food & water check", "Quick play session", "Potty/litter care", "Medication if needed", "Visit report", "Emergency contact"] },
    { name: "Long-Term Boarding", price: "₹499/night", duration: "7+ nights", rating: "4.8", img: P.boarding, shortDesc: "Extended boarding packages for holidays or travel, with weekly vet check-ins.", desc: "Heading on a long trip? Our long-term boarding includes weekly vet check-ins, regular grooming, and a detailed daily log sent to you throughout your absence.", includes: ["Weekly vet check-in", "Daily log & photos", "Grooming included", "Discounted rates", "Medication management", "Owner video calls"] },
    { name: "Cage-Free Boarding", price: "₹899/night", duration: "Per night", rating: "4.9", img: P.boarding, shortDesc: "Free-roam boarding in a home environment for dogs who don't do well in kennels.", desc: "Some dogs thrive in a home setting. Our cage-free boarding partners are thoroughly vetted pet lovers who host small groups of dogs in their homes for a truly family experience.", includes: ["Home environment", "No kennels or cages", "Limited dog group", "Regular outdoor time", "Owner video calls", "Personalised care"] },
    { name: "Puppy Daycare", price: "₹449/day", duration: "8 hrs", rating: "4.9", img: P.dog1, shortDesc: "Specialised daycare for puppies under 1 year with puppy-safe play and puppy training included.", desc: "Puppies have special needs. Our puppy daycare groups are age-appropriate, with separate play areas, gentle handling, nap schedules, and basic training reinforcement woven into the day.", includes: ["Age-appropriate grouping", "Basic training reinforcement", "Nap schedule", "3 puppy-safe meals", "Socialisation programme", "Daily development report"] },
  ];
  return <SvcCatPage cat="Boarding & Sitting" icon="🏠" color="#7C3AED" heroImg={P.boarding} tagline={"Safe, Loved,\nWell Cared For."} about="CCTV-monitored facilities, background-checked sitters, and daily updates — so you can relax knowing your pet is in the best hands." services={services} whyUs={{ stats: [["CCTV", "Monitored 24/7"], ["Background", "Checked Staff"], ["Daily", "Owner Updates"], ["4.9★", "Trust Rating"]], points: [{ icon: "🏠", title: "Home-Like Environment", desc: "Our facilities are designed to feel comfortable and calming, not institutional." }, { icon: "📹", title: "24/7 CCTV", desc: "Cameras throughout facilities with live access available for select premium packages." }, { icon: "🩺", title: "Vet On Call", desc: "A vet is always on call for our boarding facilities — your pet's health is never left to chance." }, { icon: "📱", title: "Daily Updates", desc: "Photo and video updates sent each morning so you can see your pet thriving." }] }} faqItems={[{ q: "What vaccinations are required for boarding?", a: "We require up-to-date Distemper, Parvovirus, and Rabies vaccines. Kennel Cough vaccination is highly recommended." }, { q: "Can I visit the facility before booking?", a: "Absolutely. We encourage facility tours before your first booking. Contact us to schedule a visit." }, { q: "What happens if my pet gets sick while boarding?", a: "We have a vet on call 24/7. If your pet requires treatment, we will contact you immediately and arrange veterinary care." }, { q: "Can I bring my pet's food and bedding?", a: "Yes — in fact, we encourage it. Familiar smells and food help pets feel at home." }, { q: "Is there a minimum stay for boarding?", a: "Our minimum boarding stay is one night. Long-term discounts start from 7 nights." }]} nav={nav} />;
}

// ── ACTIVITY & LIFESTYLE PAGE ─────────────────────────────────────
function SvcActivityPage({ nav }) {
  const services = [
    { name: "Dog Walking", price: "₹199/walk", duration: "30 min", rating: "4.9", img: P.dog3, shortDesc: "GPS-tracked, insured, background-checked walkers for safe daily walks.", desc: "Our walkers are fully background-checked, insured, and trained in animal behaviour. Every walk is GPS-tracked and you receive a post-walk report with a map of the route.", includes: ["GPS-tracked route", "Real-time tracking", "Insured walker", "Post-walk report", "Fresh water provided", "Emergency protocol"] },
    { name: "Exercise Sessions", price: "₹349/session", duration: "45 min", rating: "4.8", img: P.train, shortDesc: "Structured physical exercise sessions tailored to your dog's breed and energy level.", desc: "More than a walk — our exercise sessions are designed by canine fitness specialists and tailored to your dog's breed, age, and health status.", includes: ["Fitness assessment", "Breed-specific plan", "Varied exercises", "Heart rate monitoring", "Hydration check", "Progress report"] },
    { name: "Playtime Activities", price: "₹249/session", duration: "45 min", rating: "4.9", img: P.community, shortDesc: "Supervised play sessions with enrichment toys, puzzles, and social interaction.", desc: "Mental stimulation is as important as physical exercise. Our enrichment play sessions include puzzle feeders, scent games, fetch, and tug in a safe, supervised environment.", includes: ["Mental enrichment", "Puzzle feeders", "Scent games", "Social play", "Safe equipment", "Energy release report"] },
    { name: "Adventure Walks", price: "₹499/walk", duration: "90 min", rating: "4.9", img: P.dog3, shortDesc: "Extended trail and nature walks for high-energy dogs — off the beaten path.", desc: "For dogs that need more than a city stroll, our adventure walks take dogs to parks, trails, and open spaces for a 90-minute exploration experience.", includes: ["90-min trail walk", "Nature environments", "Off-leash option (assessed)", "Trail safety kit", "Photo journal", "Hydration stops"] },
    { name: "Swimming Sessions", price: "₹599/session", duration: "60 min", rating: "4.9", img: P.boarding, shortDesc: "Hydrotherapy pool sessions for fitness, recovery, and pure fun.", desc: "Swimming is a full-body, low-impact exercise perfect for all dogs, especially those recovering from injury or with joint issues. Sessions are supervised by trained hydrotherapy staff.", includes: ["Hydrotherapy pool", "Trained supervisor", "Life jacket (if needed)", "Pre/post warm-up", "Health check", "Session report"] },
    { name: "Fitness Training", price: "₹799/mo", duration: "60 min/session", rating: "4.8", img: P.train, shortDesc: "Canine fitness programmes designed by certified specialists for athletic dogs.", desc: "For working dogs, sporting breeds, or owners who want their dog at peak physical condition, our canine fitness trainers design periodised programmes with measurable outcomes.", includes: ["Fitness assessment", "Periodised programme", "Strength & conditioning", "Flexibility work", "Performance tracking", "Monthly review"] },
    { name: "Outdoor Socialization", price: "₹349/session", duration: "60 min", rating: "4.9", img: P.dog1, shortDesc: "Structured outdoor social sessions with other dogs in parks and open spaces.", desc: "Group outdoor sessions where dogs learn to interact politely in real-world settings — parks, open fields, and public spaces — under trainer supervision.", includes: ["Trainer-supervised", "4–8 dog groups", "Park or open space", "Positive interaction", "Behaviour coaching", "Owner included"] },
    { name: "Hiking Trips", price: "₹799/trip", duration: "Half day", rating: "4.8", img: P.dog3, shortDesc: "Guided half-day hiking adventures for active dogs and their owners.", desc: "Join one of our guided dog-friendly hikes in nature. Our experienced guides know dog-friendly trails and carry a full pet first aid kit.", includes: ["Guided trail", "Pet first aid kit", "Group 6–10 dogs", "Rest and hydration stops", "Trail photography", "Post-hike report"] },
    { name: "Dog Park Visits", price: "₹199/session", duration: "45 min", rating: "4.9", img: P.community, shortDesc: "Supervised, facilitated dog park visits with behaviour coaching included.", desc: "We take your dog to vetted, safe dog parks and supervise their interaction — ideal for dogs who need controlled socialisation experience before going independently.", includes: ["Transport to park", "Supervisor present", "Socialisation coaching", "Behaviour monitoring", "Exit if needed", "Report to owner"] },
  ];
  return <SvcCatPage cat="Activity & Lifestyle" icon="🏃" color={C.orange} heroImg={P.dog3} tagline={"Active Dogs,\nHappy Lives."} about="GPS-tracked walkers, certified fitness trainers, and adventure guides — keeping your pet physically and mentally thriving every day." services={services} whyUs={{ stats: [["GPS", "Every Walk"], ["Insured", "All Walkers"], ["4.9★", "Pet Rating"], ["10K+", "Walks Done"]], points: [{ icon: "📍", title: "GPS Every Walk", desc: "Every walk is GPS-tracked and shared with you in real-time via the Pawprint app." }, { icon: "🛡️", title: "Insured & Background Checked", desc: "All walkers and activity specialists carry insurance and are fully vetted." }, { icon: "🎯", title: "Breed-Appropriate Activity", desc: "We match exercise intensity and type to your dog's breed, age, and health." }, { icon: "📸", title: "Activity Journal", desc: "Photo and video updates from every session keep you connected." }] }} faqItems={[{ q: "How do I know my dog is safe during walks?", a: "All walks are GPS-tracked. You can follow the route live in the Pawprint app. Walkers carry a pet first aid kit and emergency protocols." }, { q: "What if my dog doesn't like other dogs?", a: "Solo walks and private sessions are always available. We assess every dog before placing them in group activities." }, { q: "Are your walkers experienced with large breeds?", a: "Yes. All walkers are matched to dogs based on size, strength, and temperament. We never mismatch." }, { q: "Can I join the hiking trips?", a: "Absolutely! Most hiking trips are owner-inclusive. Check the Pawprint app for upcoming group hikes near you." }, { q: "Do you offer daily walking subscriptions?", a: "Yes — monthly packages offer significant discounts. Set up recurring walks through the app." }]} nav={nav} />;
}

// ── SPECIALTY SERVICES PAGE ───────────────────────────────────────
function SvcSpecialtyPage({ nav }) {
  const services = [
    { name: "Adoption Assistance", price: "Free", duration: "Ongoing", rating: "4.9", img: P.dog1, shortDesc: "Expert guidance through the entire adoption process — paperwork, matching, and follow-up.", desc: "Our adoption advisors help you find the right pet, navigate paperwork, coordinate shelter visits, and provide post-adoption coaching to ensure a smooth transition.", includes: ["Pet matching consultation", "Shelter visit coordination", "Paperwork guidance", "Post-adoption coaching", "30-day support", "Behaviour orientation"] },
    { name: "Breeding Consultation", price: "₹1,999", duration: "60 min", rating: "4.8", img: P.dog3, shortDesc: "Responsible breeding guidance from certified veterinary specialists.", desc: "For responsible breeders, our specialist consultations cover health testing, genetic screening, whelping preparation, and ethical breeding practices.", includes: ["Health testing guidance", "Genetic screening advice", "Whelping preparation", "Stud selection", "Breeding schedule", "Legal compliance guidance"] },
    { name: "Pregnancy & Whelping Care", price: "₹2,999", duration: "Full care", rating: "4.9", img: P.vet1, shortDesc: "Comprehensive prenatal and whelping support from conception to healthy puppies.", desc: "Our veterinary team provides full prenatal monitoring, nutritional guidance, whelping preparation, and emergency support throughout your dog's pregnancy and delivery.", includes: ["Prenatal check-ups", "Nutritional plan", "Whelping kit", "24/7 whelping support", "Puppy health checks", "Post-natal care"] },
    { name: "Rehabilitation Therapy", price: "₹799/session", duration: "60 min", rating: "4.9", img: P.train, shortDesc: "Post-surgery and injury recovery through certified animal physiotherapy.", desc: "Certified animal physiotherapists use hydrotherapy, laser therapy, therapeutic massage, and structured exercises to restore your pet's mobility and quality of life.", includes: ["Initial assessment", "Custom rehab plan", "Hydrotherapy sessions", "Laser therapy", "Home exercise guide", "Weekly progress tracking"] },
    { name: "Hospice & End-of-Life Care", price: "Compassionate", duration: "As needed", rating: "5.0", img: P.vet2, shortDesc: "Dignified, compassionate care for terminally ill pets and support for their families.", desc: "When a pet reaches the end of their journey, our compassionate hospice team provides pain management, comfort care, and emotional support for both pet and family.", includes: ["In-home visits", "Pain management", "Comfort & palliative care", "Family support", "Peaceful euthanasia option", "Memorial support"] },
    { name: "Pet Photography", price: "₹2,499", duration: "2 hrs", rating: "4.9", img: P.dog4, shortDesc: "Professional pet photography sessions to capture your companion at their best.", desc: "Our certified pet photographers know how to get the best out of animal subjects. Choose from studio, outdoor, or in-home sessions for portraits, family photos, or action shots.", includes: ["2-hr session", "20+ edited images", "Studio or outdoor", "Digital & print options", "Instagram-ready edits", "Rush delivery available"] },
    { name: "Dog Events & Parties", price: "₹4,999", duration: "3 hrs", rating: "4.9", img: P.community, shortDesc: "Fully planned dog birthday parties and pet events with catering, decor, and activities.", desc: "Celebrate your dog's birthday or milestone in style! We plan and execute themed dog parties with pet-safe treats, decorations, games, and professional photography.", includes: ["Custom theme", "Pet-safe catering", "Decorations", "Party games", "Photographer", "10 dog invites"] },
    { name: "Emotional Support Dog Assistance", price: "₹3,999", duration: "Assessment+", rating: "4.9", img: P.dog1, shortDesc: "Training and documentation support for emotional support and therapy dog certification.", desc: "We help identify suitable dogs for ESA roles, provide targeted training, and assist with the official documentation required for emotional support animal status.", includes: ["Temperament evaluation", "ESA training programme", "Handler coaching", "Documentation support", "Certification preparation", "Ongoing support"] },
    { name: "Microchipping", price: "₹399", duration: "15 min", rating: "4.9", img: P.vet2, shortDesc: "ISO-standard microchip implantation with national database registration.", desc: "Microchipping is the most reliable form of permanent pet identification. Our vets implant an ISO-standard chip and register it with the national pet recovery database.", includes: ["ISO 15-digit chip", "Painless implantation", "National DB registration", "ID card issued", "Lifetime registration", "Lost pet alert setup"] },
    { name: "Pet Relocation Services", price: "₹9,999", duration: "Full service", rating: "4.8", img: P.boarding, shortDesc: "Stress-free domestic and international pet relocation with all documentation handled.", desc: "Relocating? Our pet relocation specialists handle everything: health certificates, import/export permits, airline-approved crating, flight arrangements, and destination vet check.", includes: ["Route planning", "Health certificate", "Import/export permits", "Airline crate", "Flight booking assistance", "Destination check"] },
  ];
  return <SvcCatPage cat="Specialty Services" icon="⭐" color="#B45309" heroImg={P.about1} tagline={"Beyond the\nOrdinary."} about="Unique, specialist services designed for moments that matter most — from life's milestones to its most difficult transitions." services={services} whyUs={{ stats: [["Specialist", "Team",], ["100%", "Compassionate"], ["Award", "Winning"], ["5,000+", "Families Helped"]], points: [{ icon: "⭐", title: "Specialist Experts", desc: "Each specialty service is delivered by a domain expert — not a generalist." }, { icon: "❤️", title: "Compassion First", desc: "Especially in difficult moments, our team leads with empathy and care." }, { icon: "📋", title: "Full Documentation", desc: "We handle all paperwork, certificates, and compliance so you don't have to." }, { icon: "🤝", title: "End-to-End Support", desc: "We're with you from first enquiry to final follow-up, whatever the service." }] }} faqItems={[{ q: "How does pet relocation work?", a: "Our specialists assess your route, advise on quarantine requirements, prepare all health certificates, book airline-approved transport, and coordinate the full journey." }, { q: "Can any dog become an emotional support animal?", a: "Any well-tempered, trained dog can be an ESA. We assess suitability and guide the training and documentation process." }, { q: "Is microchipping painful?", a: "The procedure is quick and similar to a standard vaccination. Most dogs show no discomfort." }, { q: "How do I plan a dog birthday party?", a: "Book a consultation through the Pawprint app. We'll discuss theme, guest list, venue, and catering to design the perfect event." }, { q: "What hospice care options do you provide?", a: "In-home comfort visits, palliative pain management, and, when the time comes, peaceful in-home euthanasia with full family support." }]} nav={nav} />;
}

// ── RETAIL & EXTRAS PAGE ─────────────────────────────────────────
function SvcRetailPage({ nav }) {
  const products = [
    { name: "Dog Food", price: "₹499 onwards", img: P.shop1, shortDesc: "Premium dry, wet, raw, and prescription diets for all breeds and life stages.", desc: "From breed-specific kibble to raw and prescription diets, our food range covers every nutritional need. All products are FSSAI-compliant and vet-reviewed.", includes: ["All life stages", "Breed-specific options", "Prescription diets", "Grain-free options", "Sample packs", "Subscribe & save"] },
    { name: "Treats & Supplements", price: "₹199 onwards", img: P.shop1, shortDesc: "Training treats, dental chews, joint supplements, and health boosters.", desc: "Our treats are made from natural ingredients with no artificial preservatives. Supplements cover joints, skin, coat, digestion, and immunity — all vet-formulated.", includes: ["Natural ingredients", "Joint health", "Skin & coat", "Digestive health", "Dental chews", "Training treats"] },
    { name: "Toys", price: "₹149 onwards", img: P.dog2, shortDesc: "Durable chew toys, puzzle feeders, fetch toys, and interactive games.", desc: "Enrichment toys reduce boredom, anxiety, and destructive behaviour. We stock everything from indestructible chew toys to advanced puzzle feeders.", includes: ["Chew toys", "Puzzle feeders", "Fetch & tug toys", "Interactive games", "Safe materials", "Size-appropriate options"] },
    { name: "Collars & Leashes", price: "₹249 onwards", img: P.train, shortDesc: "Adjustable collars, harnesses, retractable and fixed leashes for every size.", desc: "Safety and comfort in every walk. Our range covers flat collars, martingale collars, step-in harnesses, no-pull harnesses, and fixed and retractable leads.", includes: ["All sizes", "No-pull harnesses", "Martingale options", "Reflective options", "Custom engraved tags", "Waterproof materials"] },
    { name: "Beds & Crates", price: "₹999 onwards", img: P.boarding, shortDesc: "Orthopedic beds, travel crates, and soft carriers for comfort at home and on the go.", desc: "From orthopedic memory foam beds for senior dogs to IATA-compliant airline crates and soft carriers for everyday use — comfort and safety wherever you go.", includes: ["Orthopedic options", "Memory foam beds", "Airline-approved crates", "Soft carriers", "Washable covers", "Anti-anxiety designs"] },
    { name: "Grooming Products", price: "₹199 onwards", img: P.groom, shortDesc: "Professional-grade shampoos, conditioners, brushes, and grooming tools.", desc: "The same products our professional groomers use — available for home use. pH-balanced, breed-specific, and cruelty-free. Includes tools for every coat type.", includes: ["pH-balanced shampoos", "Conditioning masks", "Deshedding brushes", "Nail clippers", "Dental kits", "Grooming wipes"] },
    { name: "Clothing & Accessories", price: "₹299 onwards", img: P.dog4, shortDesc: "Stylish and functional dog clothing, raincoats, boots, and bandanas.", desc: "Keep your pet stylish and protected. Our clothing range includes monsoon raincoats, winter sweaters, cooling vests, protective boots, and festive outfits.", includes: ["Monsoon raincoats", "Winter sweaters", "Cooling vests", "Protective boots", "Festive outfits", "Size exchange policy"] },
    { name: "Training Tools", price: "₹349 onwards", img: P.train, shortDesc: "Clickers, treat pouches, long lines, and target sticks for effective training.", desc: "Quality training tools make all the difference. Our range includes professional-grade clickers, treat pouches, long training lines, and target sticks — all recommended by our trainers.", includes: ["Training clickers", "Treat pouches", "Long lines (5m, 10m)", "Target sticks", "Slip leads", "Training flags"] },
    { name: "ID Tags", price: "₹99 onwards", img: P.shop2, shortDesc: "Custom engraved pet ID tags in stainless steel, brass, and silicone.", desc: "An ID tag is the fastest way to reunite a lost pet with its owner. We offer custom engraved tags in stainless steel, brass, and silicone — with QR code options.", includes: ["Custom engraving", "Stainless steel", "Brass & silicone options", "QR code option", "24hr turnaround", "Bulk discounts"] },
    { name: "Travel Accessories", price: "₹499 onwards", img: P.boarding, shortDesc: "Portable water bottles, collapsible bowls, car seat covers, and travel bags.", desc: "For pet parents on the move, our travel range covers everything: spill-proof travel bottles, collapsible silicone bowls, car seat covers, and organised travel bags.", includes: ["Spill-proof bottles", "Collapsible bowls", "Car seat covers", "Travel bags", "First aid kits", "Airline pouches"] },
  ];
  const [cart, setCart] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);
  const total = cart.reduce((s, p) => s + parseInt(p.price.replace(/[^0-9]/g, "") || 0), 0);

  return (
    <div style={{ paddingTop: 96 }}>
      {/* Hero */}
      <section style={{ position: "relative", height: 360, overflow: "hidden" }}>
        <Img src={P.shop1} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        <div style={{ position: "absolute", inset: 0, background: "rgba(17,17,17,.65)" }} />
        <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center" }}>
          <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 32px", width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div>
              <div className="pill pill-orange" style={{ marginBottom: 16 }}>🛍️ Retail & Extras</div>
              <h1 className="melody" style={{ fontSize: "clamp(48px,5vw,76px)", color: "#fff", lineHeight: 1, marginBottom: 12 }}>Everything Your<br />Pet Needs.</h1>
              <p style={{ fontSize: 17, color: "rgba(255,255,255,.7)", lineHeight: 1.7, maxWidth: 400 }}>Premium food, toys, accessories, and more — curated by vets, loved by pets.</p>
            </div>
            <button className="btn btn-lg btn-outline" style={{ color: "rgba(255,255,255,.7)", borderColor: "rgba(255,255,255,.3)", position: "relative" }} onClick={() => setCartOpen(o => !o)}>
              🛒 Cart
              {cart.length > 0 && <span style={{ position: "absolute", top: -8, right: -8, width: 22, height: 22, borderRadius: "50%", background: C.orange, color: "#fff", fontSize: 11, fontWeight: 700, display: "flex", alignItems: "center", justifyContent: "center" }}>{cart.length}</span>}
            </button>
          </div>
        </div>
      </section>

      {/* Cart drawer */}
      {cartOpen && (
        <div style={{ position: "fixed", top: 0, right: 0, bottom: 0, width: 380, background: C.white, boxShadow: "-20px 0 60px rgba(0,0,0,.14)", zIndex: 800, display: "flex", flexDirection: "column", paddingTop: 96 }}>
          <div style={{ padding: "22px 26px", borderBottom: `1px solid ${C.border}`, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div className="melody" style={{ fontWeight: 700, color: C.ink, fontSize: 22 }}>Cart ({cart.length})</div>
            <button onClick={() => setCartOpen(false)} style={{ background: C.cream, border: "none", borderRadius: "50%", width: 32, height: 32, cursor: "pointer", fontSize: 16 }}>✕</button>
          </div>
          <div style={{ flex: 1, overflowY: "auto", padding: "16px 26px" }}>
            {cart.length === 0 ? <p style={{ color: C.inkSft, textAlign: "center", marginTop: 60, fontSize: 15 }}>Your cart is empty 🛒</p> : cart.map((item, i) => (
              <div key={i} style={{ display: "flex", gap: 14, padding: "14px 0", borderBottom: `1px solid ${C.border}` }}>
                <Img src={item.img} style={{ width: 56, height: 56, objectFit: "cover", borderRadius: 10 }} />
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 14, fontWeight: 600, color: C.ink, lineHeight: 1.3 }}>{item.name}</div>
                  <div style={{ fontSize: 14, color: C.orange, marginTop: 4 }}>{item.price}</div>
                </div>
                <button onClick={() => setCart(c => c.filter((_, j) => j !== i))} style={{ background: "none", border: "none", color: C.sand, cursor: "pointer", fontSize: 18, padding: "0 4px" }}>✕</button>
              </div>
            ))}
          </div>
          {cart.length > 0 && (
            <div style={{ padding: "18px 26px", borderTop: `1px solid ${C.border}` }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 16 }}>
                <span style={{ fontWeight: 600, color: C.inkSft }}>Estimated Total</span>
                <span className="melody" style={{ fontSize: 22, color: C.ink }}>₹{total.toLocaleString()}+</span>
              </div>
              <button className="btn btn-lg btn-primary" style={{ width: "100%" }} onClick={() => { nav("shop"); setCartOpen(false); }}>Checkout in Shop →</button>
            </div>
          )}
        </div>
      )}

      {/* Products */}
      <section style={{ padding: "60px 0 100px", background: C.cream }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 32px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(280px,1fr))", gap: 24 }}>
            {products.map((p, i) => (
              <div key={i} className="card card-lift">
                <div style={{ height: 200, overflow: "hidden" }}>
                  <Img src={p.img} style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform .5s cubic-bezier(.22,1,.36,1)" }}
                    onMouseEnter={e => e.target.style.transform = "scale(1.07)"}
                    onMouseLeave={e => e.target.style.transform = "scale(1)"} />
                </div>
                <div style={{ padding: "20px 22px" }}>
                  <h3 className="melody" style={{ fontSize: 22, color: C.ink, marginBottom: 6 }}>{p.name}</h3>
                  <p style={{ fontSize: 13, color: C.inkSft, lineHeight: 1.65, marginBottom: 12 }}>{p.shortDesc}</p>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 14 }}>
                    <span className="melody" style={{ fontSize: 20, color: C.ink }}>{p.price}</span>
                  </div>
                  <div style={{ display: "flex", gap: 8 }}>
                    <button className="btn btn-sm btn-primary" style={{ flex: 1 }} onClick={() => { setCart(c => [...c, p]); setCartOpen(true); }}>Add to Cart</button>
                    <button className="btn btn-sm btn-outline" onClick={() => nav("shop")}>View in Shop</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

// ══════════════════════════════════════════════════════════════════
//  CHATBOT
// ══════════════════════════════════════════════════════════════════
function ChatBot({ nav }) {
  const [open, setOpen] = useState(false);
  const [screen, setScreen] = useState("home"); // home | chat
  const [msgs, setMsgs] = useState([]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const [activeTopic, setActiveTopic] = useState(null);
  const endRef = useRef();
  const inputRef = useRef();

  useEffect(() => { endRef.current?.scrollIntoView({ behavior: "smooth" }); }, [msgs, typing]);
  useEffect(() => { if (screen === "chat") setTimeout(() => inputRef.current?.focus(), 100); }, [screen]);

  /* ── Complete site knowledge base ── */
  const KB = [
    // Adoption
    {
      keys: ["adopt", "adoption", "pet", "find pet", "rescue", "shelter", "get a dog", "get a cat", "foster"],
      answer: "We have 6 verified pets available right now — Bruno (Labrador, 2yrs, Coimbatore), Luna (Persian Cat, Chennai), Milo (Beagle, Bangalore), Cleo (Tabby Kitten, Hyderabad), Rex (German Shepherd, Mumbai), and Daisy (Golden Retriever, Pune). All are health-checked. The adoption process takes 3–5 business days: browse, apply online, meet & greet, then paperwork. Would you like me to take you to the adoption listings? 🐾", page: "adopt", cta: "Browse Pets"
    },
    {
      keys: ["how adopt", "adoption process", "adoption steps", "adoption form", "apply adopt"],
      answer: "The Pawprint adoption process has 4 steps:\n1️⃣ Browse verified pet listings and save your favourites\n2️⃣ Submit an online adoption application (takes ~5 minutes)\n3️⃣ Our team arranges a meet & greet with the pet\n4️⃣ Complete paperwork and take your new family member home 🎉\nThe whole process typically takes 3–5 business days. Shall I take you to the listings?", page: "adopt", cta: "Start Adoption"
    },
    {
      keys: ["adoption fee", "adoption cost", "how much adopt", "price adopt"],
      answer: "Adoption through Pawprint is completely free — there's no platform fee. Shelters may charge a small adoption fee (typically ₹500–₹2,000) which goes directly to animal welfare. This usually includes vaccinations already given. Want to browse available pets?", page: "adopt", cta: "View Pets"
    },

    // Veterinary
    {
      keys: ["vet", "veterinary", "doctor", "animal doctor", "book vet", "vet appointment", "consultation", "checkup"],
      answer: "We have 1,200+ certified vets across 85 cities. You can book:\n• Clinic visit (from ₹299)\n• Home visit (small additional charge)\n• Video consultation — available 24/7\n\nTop vets include Dr. Meera Iyer (Small Animal Medicine, ⭐4.9), Dr. Rajan Pillai (Exotic Pets, ⭐4.8), and Dr. Anita Desai (Surgery, ⭐4.9). Want to book an appointment?", page: "vet", cta: "Book a Vet"
    },
    {
      keys: ["emergency", "urgent", "emergency vet", "24/7 vet", "vet emergency", "critical", "sick dog", "sick cat"],
      answer: "🚨 For pet emergencies, Pawprint offers 24/7 emergency vet dispatch. A certified vet can be at your location within 60 minutes. Emergency call-out starts at ₹999. Our emergency line also provides first-aid guidance over the phone while the vet is on the way. Shall I take you to the booking page?", page: "vet", cta: "Emergency Booking"
    },
    {
      keys: ["video consult", "online vet", "consult online", "video call vet"],
      answer: "Video consultations with licensed vets are available 24/7 on Pawprint — no travel needed. Just choose a vet, select 'Video Consult', and join from your phone or laptop. Sessions typically last 15–30 minutes. Price varies by vet (₹299–₹799). Want to book one?", page: "vet", cta: "Book Video Consult"
    },

    // Services
    {
      keys: ["services", "what services", "all services", "what do you offer", "what can pawprint"],
      answer: "Pawprint offers 7 service categories with 70+ individual services:\n\n🏥 Health & Care — checkups, vaccines, surgery, emergency\n✂️ Grooming & Hygiene — full groom, bath, nail clipping, de-shedding\n🎓 Training & Behavior — puppy, obedience, aggression management\n🏠 Boarding & Sitting — luxury boarding, daycare, pet sitting\n🏃 Activity & Lifestyle — dog walking, adventure walks, swimming\n⭐ Specialty — microchipping, relocation, pet photography\n🛍️ Retail — food, toys, accessories, training tools\n\nWhich service are you interested in?", page: "services", cta: "Browse All Services"
    },

    // Grooming
    {
      keys: ["groom", "grooming", "bath", "haircut", "trim", "nail", "nail clip", "de-shed", "shed", "paw", "ear clean"],
      answer: "Our certified groomers offer:\n• Full Grooming — ₹799 (bath, cut, nail, ears, finishing)\n• Bath & Blow Dry — ₹399\n• Nail Clipping — ₹149\n• De-shedding Treatment — ₹599\n• Skin & Coat Treatment — ₹699\n\nFree pickup & drop available. All sessions use pH-balanced, cruelty-free products. Want to book?", page: "svc-grooming", cta: "Book Grooming"
    },

    // Training
    {
      keys: ["train", "training", "obedience", "leash", "puppy train", "behavior", "aggressive", "pull", "commands", "tricks"],
      answer: "Our CPDT-certified trainers use 100% force-free, positive reinforcement methods:\n\n• Puppy Training — ₹1,499/month\n• Obedience Training — ₹1,999/month\n• Leash Training — ₹999/month\n• Behavioral Correction — ₹2,499/month\n• Aggression Management — ₹3,499/month\n• Therapy Dog Training — ₹3,999/month\n\n98% success rate across 10,000+ dogs trained. Shall I take you to training?", page: "svc-training", cta: "Book Training"
    },

    // Boarding
    {
      keys: ["board", "boarding", "daycare", "dog daycare", "pet sit", "sitting", "overnight", "kennel", "boarding cost", "board price"],
      answer: "Our boarding options:\n\n🏠 Dog Boarding — ₹599/night (CCTV monitored, daily updates)\n👑 Luxury Boarding — ₹1,499/night (AC suite, live camera access)\n🏡 Cage-Free Boarding — ₹899/night (home environment)\n☀️ Dog Daycare — ₹399/day (full-day supervised play)\n🏠 Pet Sitting — ₹499/visit (in your home)\n\nAll facilities have a vet on call. Want to book?", page: "svc-boarding", cta: "Book Boarding"
    },

    // Activity
    {
      keys: ["walk", "dog walk", "walking", "exercise", "hiking", "hike", "swim", "swimming", "adventure", "activity", "play"],
      answer: "Keep your pet active with our GPS-tracked, insured services:\n\n🚶 Dog Walking — ₹199/walk (30 min, real-time GPS)\n🏃 Exercise Sessions — ₹349/session (breed-specific fitness)\n🥾 Adventure Walks — ₹499/walk (90-min trail walks)\n🏊 Swimming Sessions — ₹599/session (hydrotherapy pool)\n🎾 Playtime Activities — ₹249/session (enrichment & games)\n\nAll walkers are background-checked and insured. Book one?", page: "svc-activity", cta: "Book Activity"
    },

    // Shop
    {
      keys: ["shop", "buy", "food", "toy", "toys", "collar", "leash", "accessories", "grooming product", "product", "order", "purchase"],
      answer: "The Pawprint Shop stocks 1,000+ vet-reviewed products:\n\n🍗 Dog Food — Royal Canin, Hills, Drools from ₹499\n🧸 Toys — Kong, tug toys, puzzle feeders from ₹149\n📡 GPS Tracker — ₹3,999 (real-time tracking)\n✂️ Grooming Products — pH-balanced shampoos from ₹199\n🦺 Collars & Leashes — from ₹249\n💊 Treats & Supplements — from ₹199\n\nNext-day delivery available. Want to visit the shop?", page: "shop", cta: "Go to Shop"
    },

    // Lost & Found
    {
      keys: ["lost", "found", "missing", "lost pet", "missing dog", "missing cat", "lost dog", "lost cat", "found dog", "found cat", "report lost"],
      answer: "If your pet is missing, act fast — most pets are found within 24 hours!\n\n📋 Report Lost Pet — fill our form with pet details, last seen location, your contact, and upload photos. We send alerts to nearby Pawprint users immediately.\n\n🔍 Found a Pet — report with photos and location. We match records to help reunite them.\n\n📍 Browse active cases in your city.\n\nWould you like to go to Lost & Found?", page: "lost", cta: "Go to Lost & Found"
    },

    // Dog Breeds
    {
      keys: ["breed", "dog breed", "breeds", "labrador", "golden retriever", "german shepherd", "poodle", "bulldog", "husky", "beagle", "indian breed", "pariah", "rajapalayam"],
      answer: "Our Dog Breeds encyclopedia has 67+ recognized breeds with full details:\n\n📋 A–Z list of all breeds\n🇮🇳 8 Indian breeds (Pariah, Rajapalayam, Mudhol Hound, Chippiparai, Kombai, Kanni, Himalayan Sheepdog, Indian Spitz)\n⭐ Most popular breeds\n🛡 Guard dog breeds\n🏡 Family-friendly breeds\n\nEach breed includes origin, temperament, size, lifespan, care guide, and more. Want to explore?", page: "dog-breeds", cta: "Browse Dog Breeds"
    },

    // Pet Videos
    {
      keys: ["video", "videos", "tutorial", "how to train", "training video", "watch", "groom video", "learn", "tips"],
      answer: "Our free Pet Videos library has 12+ expert tutorials:\n\n🎓 Puppy Training (8:24) — Dr. Kiran Patel\n🐕 5 Essential Commands (12:10) — CPDT Trainer\n🦮 Stop Leash Pulling (9:55) — Behavioral Specialist\n✂️ At-Home Grooming (14:30) — Master Groomer\n🏥 10 Warning Signs (11:00) — Head Vet\n🍗 Nutrition Guide (13:15) — Dr. Kiran Patel\n\nAll free, no sign-up needed. Want to watch?", page: "pet-videos", cta: "Watch Videos"
    },

    // Dashboard / Account
    {
      keys: ["dashboard", "account", "my pets", "login", "sign in", "profile", "register", "signup", "sign up"],
      answer: "Your Pawprint Dashboard lets you:\n\n🐾 Add & manage multiple pet profiles\n💉 Track vaccination history & get reminders\n📅 View upcoming vet & grooming bookings\n📦 Track shop orders\n🏥 Access full health records\n\nSign in to access your dashboard, or create a free account to get started!", page: "dashboard", cta: "Go to Dashboard"
    },

    // Pricing / Plans
    {
      keys: ["price", "pricing", "cost", "plan", "subscription", "free", "premium", "pro", "membership", "how much"],
      answer: "Pawprint offers flexible plans:\n\n🆓 Free — 1 pet profile, basic listings, community access\n💙 Premium — ₹499/month (5 pets, AI tools, priority booking, 10% shop discount)\n🔶 Pro — ₹999/month (unlimited pets, all features, 20% discount, insurance management)\n🏢 Enterprise — Custom (shelters, vet clinics, bulk tools)\n\nAll plans have a free trial. Want to explore plans?", page: "signup", cta: "See Plans"
    },

    // About
    {
      keys: ["about", "who", "company", "founded", "team", "founder", "history", "story", "mission"],
      answer: "Pawprint was founded in 2020 by Dr. Kiran Patel (CEO, veterinarian) and Sneha Krishnamurthy (CTO, ex-Google AI engineer) after struggling to find reliable vet care for rescue dogs.\n\n📊 Today: 45,000+ happy pets · ₹42Cr raised · 85+ cities · 1,200+ vet partners\n🏆 ET Startup of the Year 2024 · Forbes 30 Under 30 · Y Combinator Alumni\n\nOur mission: world-class pet care, accessible to every pet family in India. Want to learn more?", page: "about", cta: "Our Story"
    },

    // Contact
    {
      keys: ["contact", "call", "phone", "email", "address", "support", "help", "reach", "talk to"],
      answer: "Reach us anytime:\n\n📧 hello@pawprint.in\n📞 +91 98765 43210\n📍 Avinashi Road, Coimbatore, Tamil Nadu 641018\n⏰ Mon–Sat, 9 AM – 6 PM IST\n\nFor 24/7 pet emergencies, our vet line is always open. Want to open the contact page?", page: "contact", cta: "Contact Us"
    },

    // Health questions
    {
      keys: ["vaccination", "vaccine", "vaccinate", "rabies", "parvo", "distemper", "shot", "immunise"],
      answer: "Core vaccines every dog needs:\n\n💉 Distemper + Parvo + Hepatitis (DA2PP) — every 3 years after puppy series\n💉 Rabies — annually or every 3 years (law requires it)\n💉 Kennel Cough (Bordetella) — annually for social dogs\n💉 Leptospirosis — annually in high-risk areas\n\nPuppy first vaccines start at 6–8 weeks. Our vets create a personalised schedule and send digital reminders. Want to book a vaccination?", page: "vet", cta: "Book Vaccination"
    },
    {
      keys: ["feed", "food", "diet", "what to feed", "how much food", "puppy food", "adult food", "nutrition", "eat", "meal", "raw"],
      answer: "General feeding guidelines by life stage:\n\n🐶 Puppies (under 1yr) — 3–4 meals/day, puppy formula with high protein (28%+)\n🐕 Adults (1–7yrs) — 2 meals/day, body weight ×30kcal approximately\n👴 Seniors (7yr+) — 2 smaller meals, lower calorie, joint support formula\n\nAvoid: chocolate, grapes, onions, xylitol, avocado — all toxic to dogs.\n\nOur AI nutrition tool gives personalised recommendations based on breed & weight. Shall I take you there?", page: "svc-health", cta: "Nutrition Consultation"
    },
    {
      keys: ["microchip", "chip", "microchipping", "id", "identify", "identification"],
      answer: "Microchipping is the most reliable form of permanent pet ID — it's a tiny ISO chip implanted painlessly under the skin (similar to a vaccine injection). At Pawprint:\n\n💉 Cost: ₹399\n⏱ Duration: 15 minutes\n📋 Includes national database registration\n🆔 ID card issued\n🔔 Lost pet alert setup\n\nWe highly recommend microchipping for all pets. Want to book?", page: "svc-specialty", cta: "Book Microchipping"
    },
    {
      keys: ["spay", "neuter", "sterilise", "sterilize", "castrate", "surgery", "spayed"],
      answer: "Spaying (females) and neutering (males) offers major health benefits — reduced cancer risk, longer lifespan, and better behaviour. At Pawprint:\n\n💰 Cost: from ₹3,999\n⏱ Procedure: 2–3 hours under general anaesthesia\n✅ Includes: pre-op blood panel, anaesthesia monitoring, post-op care kit, pain management & free follow-up\n\nRecommended age: 6–12 months (varies by breed). Want to book a consultation?", page: "vet", cta: "Book Consultation"
    },

    // Greetings
    {
      keys: ["hi", "hello", "hey", "hii", "helo", "namaste", "good morning", "good evening", "good afternoon", "start", "begin"],
      answer: "Hello! 👋 I'm Paws, Pawprint's AI assistant. I know everything about our platform — services, adoption, vets, shop, dog breeds, training, and more.\n\nWhat can I help you with today?", page: null, cta: null
    },
    {
      keys: ["thank", "thanks", "thank you", "great", "awesome", "perfect", "good", "helpful"],
      answer: "Happy to help! 🐾 Is there anything else you'd like to know about Pawprint — adoption, services, vets, or anything else?", page: null, cta: null
    },
    {
      keys: ["bye", "goodbye", "see you", "later", "done", "exit", "close"],
      answer: "Goodbye! 🐾 Come back anytime — Paws is always here. Wishing you and your pets a wonderful day! 🌟", page: null, cta: null
    },
  ];

  const QUICK_TOPICS = [
    { label: "🐾 Adopt a Pet", query: "I want to adopt a pet" },
    { label: "🏥 Book a Vet", query: "How do I book a vet?" },
    { label: "✂️ Grooming", query: "Tell me about grooming services" },
    { label: "🎓 Pet Training", query: "What training options do you have?" },
    { label: "🐕 Dog Breeds", query: "Tell me about dog breeds" },
    { label: "🏠 Boarding", query: "What boarding options are available?" },
    { label: "📍 Lost & Found", query: "How do I report a lost pet?" },
    { label: "💉 Vaccination", query: "What vaccines does my pet need?" },
    { label: "🛍️ Shop", query: "What's in the pet shop?" },
    { label: "💰 Pricing & Plans", query: "What are the pricing plans?" },
    { label: "🍗 Pet Nutrition", query: "What should I feed my dog?" },
    { label: "🎬 Pet Videos", query: "Show me pet training videos" },
  ];

  const getBotReply = (text) => {
    const q = text.toLowerCase();
    for (const item of KB) {
      if (item.keys.some(k => q.includes(k))) return item;
    }
    return {
      answer: `I'm not sure about that specific topic, but I can help with:\n• Adoption & pets 🐾\n• Veterinary bookings 🏥\n• Grooming & training ✂️\n• Dog breeds & nutrition 🐕\n• Lost & found 📍\n• Pricing & plans 💰\n\nCould you rephrase, or pick a topic from the suggestions?`,
      page: null, cta: null,
    };
  };

  const send = (text) => {
    const t = (text || input).trim();
    if (!t) return;
    setMsgs(m => [...m, { from: "user", text: t }]);
    setInput("");
    setTyping(true);
    setScreen("chat");
    const delay = 600 + Math.min(t.length * 12, 1000);
    setTimeout(() => {
      const reply = getBotReply(t);
      setMsgs(m => [...m, { from: "bot", text: reply.answer, page: reply.page, cta: reply.cta }]);
      setTyping(false);
    }, delay);
  };

  const handleQuickTopic = (topic) => {
    setActiveTopic(topic.label);
    send(topic.query);
  };

  /* ─ Render ─ */
  return (
    <div style={{ position: "fixed", bottom: 28, right: 28, zIndex: 1000 }}>

      {/* Chat window */}
      {open && (
        <div style={{
          width: 380, marginBottom: 14,
          background: "#0F0F14",
          borderRadius: 24,
          boxShadow: "0 32px 80px rgba(0,0,0,.5)",
          border: "1px solid rgba(255,255,255,.1)",
          overflow: "hidden",
          display: "flex", flexDirection: "column",
          maxHeight: "80vh",
          animation: "scaleIn .25s cubic-bezier(.22,1,.36,1) both",
        }}>

          {/* ─ Header ─ */}
          <div style={{
            background: "linear-gradient(135deg,#1A1A22,#111118)",
            padding: "16px 20px",
            borderBottom: "1px solid rgba(255,255,255,.07)",
            display: "flex", justifyContent: "space-between", alignItems: "center",
          }}>
            <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
              <div style={{
                width: 42, height: 42, borderRadius: 12,
                background: `linear-gradient(135deg,${C.orange},#C94E12)`,
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 20, flexShrink: 0,
                boxShadow: `0 4px 16px ${C.orange}44`,
              }}>🐾</div>
              <div>
                <div style={{ color: "#fff", fontWeight: 700, fontSize: 15, letterSpacing: ".01em" }}>Paws AI</div>
                <div style={{ display: "flex", gap: 5, alignItems: "center", marginTop: 2 }}>
                  <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#22C55E" }} />
                  <span style={{ color: "rgba(255,255,255,.45)", fontSize: 11 }}>Online · Instant replies</span>
                </div>
              </div>
            </div>
            <div style={{ display: "flex", gap: 8 }}>
              {screen === "chat" && (
                <button onClick={() => { setScreen("home"); setMsgs([]); setInput(""); }}
                  title="Home"
                  style={{ width: 30, height: 30, borderRadius: "50%", background: "rgba(255,255,255,.08)", border: "none", color: "rgba(255,255,255,.55)", cursor: "pointer", fontSize: 14, display: "flex", alignItems: "center", justifyContent: "center" }}>⌂</button>
              )}
              <button onClick={() => setOpen(false)}
                style={{ width: 30, height: 30, borderRadius: "50%", background: "rgba(255,255,255,.08)", border: "none", color: "rgba(255,255,255,.55)", cursor: "pointer", fontSize: 14, display: "flex", alignItems: "center", justifyContent: "center" }}>✕</button>
            </div>
          </div>

          {/* ─ HOME SCREEN ─ */}
          {screen === "home" && (
            <div style={{ flex: 1, overflowY: "auto", padding: "20px 18px 16px" }}>
              {/* Welcome */}
              <div style={{
                background: "linear-gradient(135deg,rgba(229,93,26,.15),rgba(229,93,26,.05))",
                border: "1px solid rgba(229,93,26,.2)",
                borderRadius: 16, padding: "18px 18px", marginBottom: 18,
              }}>
                <div style={{ fontSize: 24, marginBottom: 8 }}>👋</div>
                <div style={{ fontWeight: 700, color: "#fff", fontSize: 15, marginBottom: 4 }}>Hi! I'm Paws</div>
                <p style={{ fontSize: 13, color: "rgba(255,255,255,.55)", lineHeight: 1.65 }}>
                  I know everything about Pawprint — ask me about adoption, vets, grooming, training, dog breeds, or anything else!
                </p>
              </div>

              {/* Quick type */}
              <div style={{ marginBottom: 16 }}>
                <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: ".1em", textTransform: "uppercase", color: "rgba(255,255,255,.3)", marginBottom: 10 }}>Quick questions</div>
                <div style={{
                  display: "flex", gap: 8,
                  padding: "10px 14px",
                  background: "rgba(255,255,255,.05)",
                  borderRadius: 12,
                  border: "1px solid rgba(255,255,255,.08)",
                  cursor: "text",
                }} onClick={() => { setScreen("chat"); setTimeout(() => inputRef.current?.focus(), 100); }}>
                  <span style={{ fontSize: 14, color: "rgba(255,255,255,.2)" }}>💬</span>
                  <span style={{ fontSize: 13, color: "rgba(255,255,255,.3)" }}>Ask anything about Pawprint…</span>
                </div>
              </div>

              {/* Topic grid */}
              <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: ".1em", textTransform: "uppercase", color: "rgba(255,255,255,.3)", marginBottom: 10 }}>Browse topics</div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
                {QUICK_TOPICS.map((t, i) => (
                  <button key={i} onClick={() => handleQuickTopic(t)}
                    style={{
                      padding: "10px 12px", borderRadius: 12,
                      background: activeTopic === t.label ? "rgba(229,93,26,.2)" : "rgba(255,255,255,.05)",
                      border: `1px solid ${activeTopic === t.label ? "rgba(229,93,26,.4)" : "rgba(255,255,255,.08)"}`,
                      color: activeTopic === t.label ? "#fff" : "rgba(255,255,255,.65)",
                      fontSize: 12, fontWeight: 500, cursor: "pointer",
                      textAlign: "left", lineHeight: 1.4,
                      transition: "all .18s",
                    }}
                    onMouseEnter={e => { e.currentTarget.style.background = "rgba(229,93,26,.12)"; e.currentTarget.style.borderColor = "rgba(229,93,26,.25)"; }}
                    onMouseLeave={e => { if (activeTopic !== t.label) { e.currentTarget.style.background = "rgba(255,255,255,.05)"; e.currentTarget.style.borderColor = "rgba(255,255,255,.08)"; } }}
                  >{t.label}</button>
                ))}
              </div>
            </div>
          )}

          {/* ─ CHAT SCREEN ─ */}
          {screen === "chat" && (
            <>
              <div style={{ flex: 1, overflowY: "auto", padding: "16px 16px 8px", display: "flex", flexDirection: "column", gap: 12 }}>
                {msgs.length === 0 && (
                  <div style={{ textAlign: "center", padding: "24px 12px" }}>
                    <div style={{ fontSize: 32, marginBottom: 10 }}>🐾</div>
                    <p style={{ fontSize: 13, color: "rgba(255,255,255,.35)", lineHeight: 1.65 }}>Ask me anything about Pawprint — I know every service, price, breed, and more.</p>
                  </div>
                )}

                {msgs.map((m, i) => (
                  <div key={i} style={{ display: "flex", flexDirection: "column", alignItems: m.from === "user" ? "flex-end" : "flex-start", gap: 4 }}>
                    {m.from === "bot" && (
                      <div style={{ display: "flex", gap: 6, alignItems: "flex-end", maxWidth: "92%" }}>
                        <div style={{ width: 26, height: 26, borderRadius: 8, background: `linear-gradient(135deg,${C.orange},#C94E12)`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, flexShrink: 0 }}>🐾</div>
                        <div>
                          <div style={{
                            background: "rgba(255,255,255,.07)",
                            border: "1px solid rgba(255,255,255,.09)",
                            color: "rgba(255,255,255,.88)",
                            padding: "12px 15px", borderRadius: "4px 16px 16px 16px",
                            fontSize: 13, lineHeight: 1.65, whiteSpace: "pre-line",
                          }}>{m.text}</div>
                          {/* CTA button */}
                          {m.cta && m.page && (
                            <button onClick={() => { nav(m.page); setOpen(false); }}
                              style={{
                                marginTop: 8,
                                display: "inline-flex", alignItems: "center", gap: 6,
                                padding: "7px 16px", borderRadius: 100,
                                background: C.orange, border: "none",
                                color: "#fff", fontSize: 12, fontWeight: 700, cursor: "pointer",
                                boxShadow: `0 4px 14px ${C.orange}44`,
                                transition: "all .18s",
                              }}
                              onMouseEnter={e => e.currentTarget.style.background = "#C94E12"}
                              onMouseLeave={e => e.currentTarget.style.background = C.orange}>
                              {m.cta} →
                            </button>
                          )}
                        </div>
                      </div>
                    )}
                    {m.from === "user" && (
                      <div style={{
                        maxWidth: "80%",
                        background: `linear-gradient(135deg,${C.orange},#C94E12)`,
                        color: "#fff", padding: "11px 15px",
                        borderRadius: "16px 4px 16px 16px",
                        fontSize: 13, lineHeight: 1.55,
                        boxShadow: `0 4px 16px ${C.orange}33`,
                      }}>{m.text}</div>
                    )}
                  </div>
                ))}

                {/* Typing indicator */}
                {typing && (
                  <div style={{ display: "flex", gap: 6, alignItems: "flex-end" }}>
                    <div style={{ width: 26, height: 26, borderRadius: 8, background: `linear-gradient(135deg,${C.orange},#C94E12)`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, flexShrink: 0 }}>🐾</div>
                    <div style={{ background: "rgba(255,255,255,.07)", border: "1px solid rgba(255,255,255,.09)", padding: "12px 16px", borderRadius: "4px 16px 16px 16px", display: "flex", gap: 5, alignItems: "center" }}>
                      {[0, 1, 2].map(j => (
                        <div key={j} style={{ width: 7, height: 7, borderRadius: "50%", background: "rgba(255,255,255,.4)", animation: `blink 1.2s ${j * 0.2}s ease-in-out infinite` }} />
                      ))}
                    </div>
                  </div>
                )}
                <div ref={endRef} />
              </div>

              {/* Quick topics scrollable chips */}
              <div style={{ padding: "8px 12px", borderTop: "1px solid rgba(255,255,255,.06)", overflowX: "auto", display: "flex", gap: 7, whiteSpace: "nowrap" }}>
                {QUICK_TOPICS.slice(0, 8).map((t, i) => (
                  <button key={i} onClick={() => send(t.query)} style={{
                    flexShrink: 0, padding: "5px 12px", borderRadius: 100,
                    background: "rgba(255,255,255,.06)", border: "1px solid rgba(255,255,255,.1)",
                    color: "rgba(255,255,255,.6)", fontSize: 11, fontWeight: 500, cursor: "pointer",
                    transition: "all .15s",
                  }}
                    onMouseEnter={e => { e.currentTarget.style.background = "rgba(229,93,26,.15)"; e.currentTarget.style.color = "#fff"; }}
                    onMouseLeave={e => { e.currentTarget.style.background = "rgba(255,255,255,.06)"; e.currentTarget.style.color = "rgba(255,255,255,.6)"; }}>
                    {t.label}
                  </button>
                ))}
              </div>

              {/* Input */}
              <div style={{ padding: "12px 14px 14px", borderTop: "1px solid rgba(255,255,255,.06)", display: "flex", gap: 10, alignItems: "center" }}>
                <input
                  ref={inputRef}
                  value={input}
                  onChange={e => setInput(e.target.value)}
                  onKeyDown={e => e.key === "Enter" && !e.shiftKey && send()}
                  placeholder="Ask about adoption, vets, services…"
                  style={{
                    flex: 1, padding: "11px 16px",
                    borderRadius: 100,
                    border: "1.5px solid rgba(255,255,255,.1)",
                    background: "rgba(255,255,255,.06)",
                    fontSize: 13, outline: "none",
                    color: "rgba(255,255,255,.88)",
                    transition: "border .18s",
                  }}
                  onFocus={e => e.target.style.borderColor = C.orange}
                  onBlur={e => e.target.style.borderColor = "rgba(255,255,255,.1)"}
                />
                <button onClick={() => send()} style={{
                  width: 40, height: 40, borderRadius: "50%",
                  background: input.trim() ? `linear-gradient(135deg,${C.orange},#C94E12)` : "rgba(255,255,255,.08)",
                  border: "none", color: input.trim() ? "#fff" : "rgba(255,255,255,.3)",
                  fontSize: 17, cursor: input.trim() ? "pointer" : "default",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  transition: "all .2s",
                  boxShadow: input.trim() ? `0 4px 16px ${C.orange}44` : "none",
                }}>➤</button>
              </div>
            </>
          )}
        </div>
      )}

      {/* ─ FAB button ─ */}
      <div style={{ position: "relative", display: "flex", justifyContent: "flex-end" }}>
        <button
          onClick={() => setOpen(o => !o)}
          style={{
            width: 58, height: 58, borderRadius: "50%",
            background: open ? "rgba(255,255,255,.12)" : `linear-gradient(135deg,${C.orange},#C94E12)`,
            border: `2px solid ${open ? "rgba(255,255,255,.15)" : C.orange}`,
            cursor: "pointer", fontSize: 22,
            display: "flex", alignItems: "center", justifyContent: "center",
            boxShadow: open ? "0 8px 24px rgba(0,0,0,.3)" : `0 8px 32px ${C.orange}55`,
            transition: "all .25s cubic-bezier(.22,1,.36,1)",
            transform: open ? "rotate(0deg)" : "rotate(0deg)",
          }}
          onMouseEnter={e => e.currentTarget.style.transform = "scale(1.1)"}
          onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}>
          {open ? "✕" : "🐾"}
        </button>
      </div>
    </div>
  );
}

// ══════════════════════════════════════════════════════════════════
//  PET VIDEOS PAGE
// ══════════════════════════════════════════════════════════════════
function PetVideosPage({ nav }) {
  const [activeCategory, setActiveCategory] = useState("All");
  const [playing, setPlaying] = useState(null);

  const categories = ["All", "Puppy Training", "Obedience", "Grooming Tips", "Health & Care", "Nutrition", "Behavior", "Fun & Tricks"];

  const videos = [
    {
      id: 1, cat: "Puppy Training", duration: "8:24", level: "Beginner", views: "124K",
      title: "Puppy's First Week Home — Complete Training Guide",
      instructor: "Dr. Kiran Patel", role: "CEO & Head Vet",
      thumb: P.dog1,
      desc: "Everything you need to know for the first 7 days with your new puppy — sleeping, feeding, crate training, and first commands.",
      chapters: ["0:00 Welcome home", "1:30 Setting up the sleep space", "3:10 First commands: Sit & Stay", "5:45 Crate training basics", "7:00 Q&A tips"],
      tags: ["Puppy", "Beginners", "Crate Training", "Commands"],
    },
    {
      id: 2, cat: "Obedience", duration: "12:10", level: "Intermediate", views: "89K",
      title: "5 Essential Commands Every Dog Must Know",
      instructor: "Rahul Sharma", role: "CPDT-Certified Trainer",
      thumb: P.dog2,
      desc: "Sit, Down, Stay, Come, and Leave It — the five commands that form the backbone of a safe, well-behaved dog. Step-by-step with real dogs.",
      chapters: ["0:00 Introduction", "1:00 Sit", "3:15 Down", "5:30 Stay", "8:00 Come (Recall)", "10:20 Leave It"],
      tags: ["Obedience", "Commands", "Positive Reinforcement"],
    },
    {
      id: 3, cat: "Obedience", duration: "9:55", level: "Intermediate", views: "67K",
      title: "Stop Leash Pulling in 10 Minutes — Proven Method",
      instructor: "Priya Venkatesh", role: "Behavioral Specialist",
      thumb: P.dog3,
      desc: "The most requested skill. This video shows the exact loose-leash walking technique that works for all breeds, sizes, and ages.",
      chapters: ["0:00 Why dogs pull", "1:40 Equipment guide", "3:00 The anchor technique", "6:00 Real-time demo", "8:30 Common mistakes"],
      tags: ["Leash Training", "Walking", "Reactive Dogs"],
    },
    {
      id: 4, cat: "Grooming Tips", duration: "14:30", level: "Beginner", views: "156K",
      title: "At-Home Grooming for Beginners — Full Walkthrough",
      instructor: "Meenakshi Iyer", role: "Master Groomer",
      thumb: P.groom,
      desc: "Learn to bathe, brush, clip nails, clean ears, and brush teeth at home with tools you already own. Covers all coat types.",
      chapters: ["0:00 Tools you need", "2:00 Bathing step-by-step", "5:30 Brushing technique", "8:00 Nail clipping safely", "11:00 Ear & teeth care"],
      tags: ["Grooming", "At-Home", "All Breeds", "Beginners"],
    },
    {
      id: 5, cat: "Grooming Tips", duration: "7:45", level: "Beginner", views: "43K",
      title: "How to Clip Dog Nails Without Fear — Step by Step",
      instructor: "Meenakshi Iyer", role: "Master Groomer",
      thumb: P.groom,
      desc: "Nail clipping anxiety affects both dogs and owners. This calm, positive method makes it stress-free every time.",
      chapters: ["0:00 Why nail care matters", "1:30 Reading the quick", "3:00 The clip technique", "5:00 If you hit the quick", "6:30 Desensitisation tips"],
      tags: ["Nail Care", "Grooming", "Anxiety-Free"],
    },
    {
      id: 6, cat: "Health & Care", duration: "11:00", level: "All Levels", views: "201K",
      title: "10 Early Warning Signs Your Dog Needs a Vet",
      instructor: "Dr. Kiran Patel", role: "CEO & Head Vet",
      thumb: P.vet1,
      desc: "Changes in appetite, energy, breathing, and behaviour that every pet parent must recognise immediately. Could save your dog's life.",
      chapters: ["0:00 Introduction", "1:00 Lethargy & energy changes", "2:30 Appetite changes", "4:00 Breathing issues", "6:00 Skin & coat signals", "8:30 Behavioural red flags"],
      tags: ["Health", "Emergency Signs", "Vet Tips", "Must Watch"],
    },
    {
      id: 7, cat: "Health & Care", duration: "6:20", level: "All Levels", views: "88K",
      title: "Vaccination Schedule Explained — From 8 Weeks to Adult",
      instructor: "Dr. Anita Desai", role: "Veterinary Specialist",
      thumb: P.vet2,
      desc: "A clear, no-jargon guide to exactly which vaccines your dog or cat needs, when, and why. Includes a downloadable schedule.",
      chapters: ["0:00 Why vaccines matter", "1:30 Core vaccines list", "3:00 Puppy schedule", "4:30 Adult boosters", "5:30 Cat vaccine guide"],
      tags: ["Vaccination", "Puppy Care", "Adult Dogs", "Cats"],
    },
    {
      id: 8, cat: "Nutrition", duration: "13:15", level: "All Levels", views: "112K",
      title: "What Should You Feed Your Dog? — Complete Nutrition Guide",
      instructor: "Dr. Kiran Patel", role: "CEO & Head Vet",
      thumb: P.shop1,
      desc: "Kibble vs wet vs raw vs home-cooked — the real science behind dog nutrition. Learn how to read labels and choose the right food.",
      chapters: ["0:00 Introduction to dog nutrition", "2:00 Reading food labels", "4:30 Kibble pros & cons", "7:00 Raw feeding basics", "9:30 Foods to avoid", "11:30 Portion guide"],
      tags: ["Nutrition", "Dog Food", "Kibble", "Raw Diet"],
    },
    {
      id: 9, cat: "Nutrition", duration: "5:40", level: "All Levels", views: "56K",
      title: "Human Foods Safe (and Dangerous) for Dogs",
      instructor: "Dr. Anita Desai", role: "Veterinary Specialist",
      thumb: P.shop2,
      desc: "Which fruits, vegetables, and kitchen staples are safe for dogs — and which ones can be fatal. A must-watch for every pet parent.",
      chapters: ["0:00 Safe fruits", "1:30 Safe vegetables", "2:45 Dangerous foods", "4:00 Toxic plants", "5:00 Emergency what to do"],
      tags: ["Nutrition", "Food Safety", "Toxic Foods", "Emergency"],
    },
    {
      id: 10, cat: "Behavior", duration: "10:30", level: "Intermediate", views: "78K",
      title: "Why Your Dog is Aggressive — And How to Fix It",
      instructor: "Priya Venkatesh", role: "Behavioral Specialist",
      thumb: P.train,
      desc: "Aggression is almost always fear or pain. Understanding the root cause is the only way to fix it safely. No punishment methods.",
      chapters: ["0:00 Types of aggression", "2:00 Fear-based aggression", "4:30 Resource guarding", "6:30 Desensitisation protocol", "9:00 When to get professional help"],
      tags: ["Aggression", "Behavior", "Fear", "Training"],
    },
    {
      id: 11, cat: "Behavior", duration: "8:50", level: "Beginner", views: "93K",
      title: "Separation Anxiety — Complete Guide to Calm Departures",
      instructor: "Priya Venkatesh", role: "Behavioral Specialist",
      thumb: P.dog4,
      desc: "Howling, destruction, accidents — separation anxiety is stressful for dogs and owners. This step-by-step protocol rebuilds confidence.",
      chapters: ["0:00 Signs of separation anxiety", "2:00 Graduated departure training", "4:30 Enrichment while alone", "6:30 What not to do", "8:00 Severe cases — getting help"],
      tags: ["Separation Anxiety", "Behavior", "Alone Time", "Calm Dog"],
    },
    {
      id: 12, cat: "Fun & Tricks", duration: "9:00", level: "All Levels", views: "185K",
      title: "Teach Your Dog 5 Impressive Tricks in One Weekend",
      instructor: "Rahul Sharma", role: "CPDT-Certified Trainer",
      thumb: P.dog1,
      desc: "Spin, Roll Over, Play Dead, High Five, and Wave — five crowd-pleasing tricks taught with positive reinforcement in easy steps.",
      chapters: ["0:00 Getting started", "1:30 Spin", "3:00 Roll Over", "4:30 Play Dead", "6:00 High Five", "7:30 Wave"],
      tags: ["Tricks", "Fun", "Positive Reinforcement", "All Dogs"],
    },
  ];

  const filtered = activeCategory === "All" ? videos : videos.filter(v => v.cat === activeCategory);
  const featured = videos.find(v => v.id === 6); // Most viewed

  const levelColor = { Beginner: C.green, Intermediate: C.orange, "All Levels": C.blue };

  const VideoModal = ({ v }) => (
    <div style={{
      position: "fixed", inset: 0, background: "rgba(17,17,17,.88)", zIndex: 1000,
      display: "flex", alignItems: "center", justifyContent: "center", padding: 24,
      backdropFilter: "blur(8px)",
    }} onClick={e => e.target === e.currentTarget && setPlaying(null)}>
      <div style={{ background: C.white, borderRadius: 24, width: "100%", maxWidth: 820, maxHeight: "90vh", overflowY: "auto", animation: "scaleIn .3s cubic-bezier(.22,1,.36,1) both" }}>
        {/* Video player placeholder */}
        <div style={{ position: "relative", background: C.ink, borderRadius: "24px 24px 0 0", overflow: "hidden", height: 360 }}>
          <Img src={v.thumb} style={{ width: "100%", height: "100%", objectFit: "cover", opacity: .55 }} />
          <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <div style={{ width: 80, height: 80, borderRadius: "50%", background: "rgba(255,255,255,.15)", backdropFilter: "blur(6px)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 36, cursor: "pointer", border: "2px solid rgba(255,255,255,.3)" }}>▶</div>
          </div>
          <div style={{ position: "absolute", bottom: 16, left: 20, right: 20, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <span style={{ color: "#fff", fontSize: 13, fontWeight: 600, background: "rgba(0,0,0,.6)", padding: "4px 10px", borderRadius: 6 }}>🎬 Full video in Pawprint app</span>
            <span style={{ color: "#fff", fontSize: 13, background: "rgba(0,0,0,.6)", padding: "4px 10px", borderRadius: 6 }}>{v.duration}</span>
          </div>
          <button onClick={() => setPlaying(null)} style={{ position: "absolute", top: 16, right: 16, width: 36, height: 36, borderRadius: "50%", background: "rgba(255,255,255,.15)", border: "none", color: "#fff", fontSize: 18, cursor: "pointer" }}>✕</button>
        </div>

        <div style={{ padding: "28px 32px 32px" }}>
          <div style={{ display: "flex", gap: 10, marginBottom: 14, flexWrap: "wrap" }}>
            <span className="pill" style={{ background: `${levelColor[v.level]}15`, color: levelColor[v.level] }}>{v.level}</span>
            <span className="pill pill-dark">{v.cat}</span>
            <span className="pill pill-dark">👁 {v.views} views</span>
            <span className="pill pill-dark">⏱ {v.duration}</span>
          </div>
          <h2 className="melody" style={{ fontSize: 28, color: C.ink, lineHeight: 1.05, marginBottom: 10 }}>{v.title}</h2>
          <div style={{ display: "flex", gap: 10, alignItems: "center", marginBottom: 16 }}>
            <div style={{ width: 36, height: 36, borderRadius: "50%", background: C.orangeLt, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16 }}>👤</div>
            <div>
              <div style={{ fontWeight: 700, fontSize: 14, color: C.ink }}>{v.instructor}</div>
              <div style={{ fontSize: 12, color: C.inkSft }}>{v.role}</div>
            </div>
          </div>
          <p style={{ fontSize: 15, color: C.inkSft, lineHeight: 1.75, marginBottom: 24 }}>{v.desc}</p>

          {/* Chapters */}
          <div style={{ background: C.cream, borderRadius: 14, padding: "20px 22px", marginBottom: 24 }}>
            <div style={{ fontWeight: 700, fontSize: 14, color: C.ink, marginBottom: 12 }}>📋 Chapters</div>
            {v.chapters.map((ch, i) => (
              <div key={i} style={{ display: "flex", gap: 12, alignItems: "center", padding: "8px 0", borderBottom: i < v.chapters.length - 1 ? `1px solid ${C.border}` : "none" }}>
                <div style={{ width: 24, height: 24, borderRadius: "50%", background: C.orange, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 10, color: "#fff", fontWeight: 700, flexShrink: 0 }}>▶</div>
                <span style={{ fontSize: 13.5, color: C.inkMd }}>{ch}</span>
              </div>
            ))}
          </div>

          {/* Tags */}
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 24 }}>
            {v.tags.map(t => <span key={t} style={{ fontSize: 12, color: C.inkSft, background: C.white, border: `1px solid ${C.border}`, borderRadius: 100, padding: "4px 12px" }}>{t}</span>)}
          </div>

          <div style={{ display: "flex", gap: 12 }}>
            <button className="btn btn-lg btn-primary" style={{ flex: 1 }} onClick={() => { setPlaying(null); nav("signup"); }}>Watch Full Video — Get App →</button>
            <button className="btn btn-lg btn-outline" onClick={() => setPlaying(null)}>Close</button>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div style={{ paddingTop: 96 }}>
      {playing && <VideoModal v={videos.find(v => v.id === playing)} />}

      {/* Hero */}
      <section style={{ background: C.ink, padding: "90px 0 70px", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: -100, right: -100, width: 400, height: 400, borderRadius: "50%", background: `${C.orange}12`, pointerEvents: "none" }} />
        <div style={{ position: "absolute", bottom: -60, left: -60, width: 300, height: 300, borderRadius: "50%", background: `${C.blue}10`, pointerEvents: "none" }} />
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 32px" }}>
          <div className="pill" style={{ background: "rgba(255,255,255,.1)", color: "rgba(255,255,255,.65)", marginBottom: 24 }}>🎬 Pet Videos</div>
          <h1 className="melody" style={{ fontSize: "clamp(52px,7vw,96px)", color: "#fff", lineHeight: .93, marginBottom: 20 }}>
            Learn. Train.<br /><span style={{ color: C.orange }}>Love Smarter.</span>
          </h1>
          <p style={{ fontSize: 18, color: "rgba(255,255,255,.6)", lineHeight: 1.75, maxWidth: 560, marginBottom: 40 }}>
            Free training videos, health guides, grooming tutorials, and behavior tips — taught by Pawprint's certified vets and trainers.
          </p>
          <div style={{ display: "flex", gap: 36 }}>
            {[["12+", "Free Videos"], ["6", "Expert Instructors"], ["8", "Topic Categories"], ["4.9★", "Avg. Rating"]].map(([v, l]) => (
              <div key={l}>
                <div className="melody" style={{ fontSize: 32, color: C.orange, lineHeight: 1 }}>{v}</div>
                <div style={{ fontSize: 13, color: "rgba(255,255,255,.5)", marginTop: 4 }}>{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured video */}
      {featured && (
        <section style={{ padding: "60px 0 40px", background: C.cream }}>
          <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 32px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 24 }}>
              <div style={{ width: 20, height: 2, background: C.orange }} />
              <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: ".12em", textTransform: "uppercase", color: C.orange }}>Most Watched This Week</span>
            </div>
            <div className="card card-lift" style={{ display: "grid", gridTemplateColumns: "1fr 420px", cursor: "pointer" }} onClick={() => setPlaying(featured.id)}>
              <div style={{ padding: "44px 48px" }}>
                <div style={{ display: "flex", gap: 10, marginBottom: 18, flexWrap: "wrap" }}>
                  <span className="pill" style={{ background: `${levelColor[featured.level]}15`, color: levelColor[featured.level] }}>{featured.level}</span>
                  <span className="pill pill-dark">{featured.cat}</span>
                  <span className="pill pill-orange">👁 {featured.views} views</span>
                </div>
                <h2 className="melody" style={{ fontSize: "clamp(28px,3vw,42px)", color: C.ink, lineHeight: 1.05, marginBottom: 14 }}>{featured.title}</h2>
                <p style={{ fontSize: 15, color: C.inkSft, lineHeight: 1.75, marginBottom: 24 }}>{featured.desc}</p>
                <div style={{ display: "flex", gap: 10, alignItems: "center", marginBottom: 28 }}>
                  <div style={{ width: 40, height: 40, borderRadius: "50%", background: C.orangeLt, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18 }}>👤</div>
                  <div>
                    <div style={{ fontWeight: 700, color: C.ink }}>{featured.instructor}</div>
                    <div style={{ fontSize: 13, color: C.inkSft }}>{featured.role}</div>
                  </div>
                  <span style={{ marginLeft: 16, fontSize: 14, color: C.inkSft }}>⏱ {featured.duration}</span>
                </div>
                <button className="btn btn-lg btn-primary">▶ Watch Now</button>
              </div>
              <div style={{ position: "relative", overflow: "hidden" }}>
                <Img src={featured.thumb} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                <div style={{ position: "absolute", inset: 0, background: "rgba(17,17,17,.35)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <div style={{ width: 72, height: 72, borderRadius: "50%", background: "rgba(255,255,255,.2)", backdropFilter: "blur(6px)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 30, border: "2px solid rgba(255,255,255,.4)" }}>▶</div>
                </div>
                <div style={{ position: "absolute", bottom: 16, right: 16, background: "rgba(0,0,0,.7)", borderRadius: 8, padding: "4px 10px", color: "#fff", fontSize: 13, fontWeight: 600 }}>{featured.duration}</div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Category filter + Grid */}
      <section style={{ padding: "20px 0 100px", background: C.cream }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 32px" }}>
          {/* Filter tabs */}
          <div style={{ display: "flex", gap: 8, marginBottom: 40, flexWrap: "wrap" }}>
            {categories.map(c => (
              <button key={c} onClick={() => setActiveCategory(c)} style={{
                padding: "9px 20px", borderRadius: 100,
                border: `1.5px solid ${activeCategory === c ? C.orange : C.border}`,
                background: activeCategory === c ? C.orange : C.white,
                color: activeCategory === c ? "#fff" : C.inkSft,
                fontSize: 14, fontWeight: activeCategory === c ? 600 : 400, cursor: "pointer", transition: "all .2s",
              }}>{c}</button>
            ))}
            <span style={{ marginLeft: "auto", fontSize: 13, color: C.inkSft, alignSelf: "center" }}>{filtered.length} videos</span>
          </div>

          {/* Video grid */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(300px,1fr))", gap: 24 }}>
            {filtered.map(v => (
              <div key={v.id} className="card card-lift" style={{ cursor: "pointer" }} onClick={() => setPlaying(v.id)}>
                {/* Thumbnail */}
                <div style={{ position: "relative", height: 190, overflow: "hidden" }}>
                  <Img src={v.thumb} style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform .5s cubic-bezier(.22,1,.36,1)" }}
                    onMouseEnter={e => e.target.style.transform = "scale(1.07)"}
                    onMouseLeave={e => e.target.style.transform = "scale(1)"} />
                  <div style={{ position: "absolute", inset: 0, background: "rgba(17,17,17,.3)", display: "flex", alignItems: "center", justifyContent: "center", opacity: 0, transition: "opacity .25s" }}
                    onMouseEnter={e => e.currentTarget.style.opacity = "1"}
                    onMouseLeave={e => e.currentTarget.style.opacity = "0"}>
                    <div style={{ width: 56, height: 56, borderRadius: "50%", background: "rgba(255,255,255,.2)", backdropFilter: "blur(4px)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22, border: "2px solid rgba(255,255,255,.5)" }}>▶</div>
                  </div>
                  <div style={{ position: "absolute", top: 10, left: 10 }}>
                    <span className="pill" style={{ background: `${levelColor[v.level]}dd`, color: "#fff", fontSize: 10 }}>{v.level}</span>
                  </div>
                  <div style={{ position: "absolute", bottom: 10, right: 10, background: "rgba(0,0,0,.7)", borderRadius: 6, padding: "3px 8px", color: "#fff", fontSize: 12, fontWeight: 600 }}>{v.duration}</div>
                </div>

                {/* Info */}
                <div style={{ padding: "18px 20px" }}>
                  <div style={{ display: "flex", gap: 8, marginBottom: 10, flexWrap: "wrap" }}>
                    <span style={{ fontSize: 11, fontWeight: 600, color: C.orange }}>{v.cat}</span>
                    <span style={{ fontSize: 11, color: C.sand }}>·</span>
                    <span style={{ fontSize: 11, color: C.inkSft }}>👁 {v.views}</span>
                  </div>
                  <h3 style={{ fontSize: 15, fontWeight: 700, color: C.ink, lineHeight: 1.35, marginBottom: 10 }}>{v.title}</h3>
                  <div style={{ display: "flex", gap: 8, alignItems: "center", paddingTop: 10, borderTop: `1px solid ${C.border}` }}>
                    <div style={{ width: 28, height: 28, borderRadius: "50%", background: C.creamDk, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12 }}>👤</div>
                    <div>
                      <div style={{ fontSize: 12, fontWeight: 600, color: C.ink }}>{v.instructor}</div>
                      <div style={{ fontSize: 11, color: C.inkSft }}>{v.role}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "70px 0", background: C.orange }}>
        <div style={{ maxWidth: 900, margin: "0 auto", padding: "0 32px", textAlign: "center" }}>
          <h2 className="melody" style={{ fontSize: "clamp(36px,5vw,60px)", color: "#fff", lineHeight: .95, marginBottom: 16 }}>
            Want personalised training?
          </h2>
          <p style={{ fontSize: 17, color: "rgba(255,255,255,.8)", lineHeight: 1.75, marginBottom: 32 }}>
            Our certified trainers offer 1-on-1 sessions tailored to your dog's breed, age, and specific challenges.
          </p>
          <div style={{ display: "flex", gap: 14, justifyContent: "center" }}>
            <button className="btn btn-lg" style={{ background: "#fff", color: C.orange, fontWeight: 700 }} onClick={() => nav("svc-training")}>Book a Training Session →</button>
            <button className="btn btn-lg" style={{ background: "transparent", color: "#fff", border: "2px solid rgba(255,255,255,.5)", fontWeight: 600 }} onClick={() => nav("contact")}>Talk to a Trainer</button>
          </div>
        </div>
      </section>
    </div>
  );
}

// ══════════════════════════════════════════════════════════════════
//  DOG BREEDS PAGE
// ══════════════════════════════════════════════════════════════════
const ALL_BREEDS = [
  { name: "Affenpinscher", origin: "Germany", size: "Small", type: ["companion"], temperament: "Curious, stubborn, playful", lifespan: "12–14 yrs", weight: "3–6 kg", img: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=400&q=75&fit=crop" },
  { name: "Afghan Hound", origin: "Afghanistan", size: "Large", type: ["sighthound"], temperament: "Aloof, dignified, independent", lifespan: "12–14 yrs", weight: "23–27 kg", img: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=400&q=75&fit=crop" },
  { name: "Airedale Terrier", origin: "United Kingdom", size: "Large", type: ["guard", "family"], temperament: "Confident, alert, intelligent", lifespan: "11–14 yrs", weight: "18–29 kg", img: "https://images.unsplash.com/photo-1477884213360-7e9d7dcc1e48?w=400&q=75&fit=crop" },
  { name: "Akita", origin: "Japan", size: "Large", type: ["guard"], temperament: "Loyal, dignified, protective", lifespan: "10–13 yrs", weight: "32–59 kg", img: "https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?w=400&q=75&fit=crop" },
  { name: "Alaskan Malamute", origin: "United States", size: "Large", type: ["working"], temperament: "Affectionate, loyal, playful", lifespan: "10–14 yrs", weight: "34–43 kg", img: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=400&q=75&fit=crop" },
  { name: "American Bulldog", origin: "United States", size: "Large", type: ["guard", "family"], temperament: "Friendly, assertive, energetic", lifespan: "10–15 yrs", weight: "27–54 kg", img: "https://images.unsplash.com/photo-1561037404-61cd46aa615b?w=400&q=75&fit=crop" },
  { name: "Anatolian Shepherd Dog", origin: "Turkey", size: "Large", type: ["guard"], temperament: "Independent, reserved, protective", lifespan: "11–13 yrs", weight: "41–68 kg", img: "https://images.unsplash.com/photo-1477884213360-7e9d7dcc1e48?w=400&q=75&fit=crop" },
  { name: "Australian Cattle Dog", origin: "Australia", size: "Medium", type: ["working", "family"], temperament: "Alert, curious, intelligent", lifespan: "12–16 yrs", weight: "14–16 kg", img: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=400&q=75&fit=crop" },
  { name: "Australian Shepherd", origin: "United States", size: "Medium", type: ["working", "family"], temperament: "Energetic, intelligent, loyal", lifespan: "12–15 yrs", weight: "16–32 kg", img: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=400&q=75&fit=crop" },
  { name: "Basenji", origin: "Democratic Republic of the Congo", size: "Small", type: ["companion"], temperament: "Independent, clever, energetic", lifespan: "13–14 yrs", weight: "9–11 kg", img: "https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?w=400&q=75&fit=crop" },
  { name: "Basset Hound", origin: "France", size: "Medium", type: ["family"], temperament: "Tenacious, friendly, calm", lifespan: "12–13 yrs", weight: "20–29 kg", img: "https://images.unsplash.com/photo-1477884213360-7e9d7dcc1e48?w=400&q=75&fit=crop" },
  { name: "Beagle", origin: "United Kingdom", size: "Medium", type: ["family", "popular"], temperament: "Curious, merry, friendly", lifespan: "12–15 yrs", weight: "9–11 kg", img: "https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?w=400&q=75&fit=crop" },
  { name: "Beauceron", origin: "France", size: "Large", type: ["guard", "working"], temperament: "Loyal, calm, versatile", lifespan: "10–12 yrs", weight: "30–45 kg", img: "https://images.unsplash.com/photo-1561037404-61cd46aa615b?w=400&q=75&fit=crop" },
  { name: "Belgian Malinois", origin: "Belgium", size: "Large", type: ["guard", "working"], temperament: "Confident, alert, hardworking", lifespan: "14–16 yrs", weight: "25–30 kg", img: "https://images.unsplash.com/photo-1477884213360-7e9d7dcc1e48?w=400&q=75&fit=crop" },
  { name: "Bernese Mountain Dog", origin: "Switzerland", size: "Large", type: ["family", "popular"], temperament: "Gentle, calm, affectionate", lifespan: "7–10 yrs", weight: "32–52 kg", img: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=400&q=75&fit=crop" },
  { name: "Bichon Frise", origin: "Spain", size: "Small", type: ["companion", "family"], temperament: "Cheerful, playful, gentle", lifespan: "14–15 yrs", weight: "5–10 kg", img: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=400&q=75&fit=crop" },
  { name: "Bloodhound", origin: "Belgium", size: "Large", type: ["working"], temperament: "Stubborn, curious, gentle", lifespan: "10–12 yrs", weight: "36–50 kg", img: "https://images.unsplash.com/photo-1477884213360-7e9d7dcc1e48?w=400&q=75&fit=crop" },
  { name: "Border Collie", origin: "United Kingdom", size: "Medium", type: ["working", "popular"], temperament: "Intelligent, energetic, responsive", "lifespan": "12–15 yrs", weight: "14–20 kg", img: "https://images.unsplash.com/photo-1561037404-61cd46aa615b?w=400&q=75&fit=crop" },
  { name: "Borzoi", origin: "Russia", size: "Large", type: ["sighthound"], temperament: "Calm, intelligent, independent", lifespan: "9–14 yrs", weight: "27–48 kg", img: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=400&q=75&fit=crop" },
  { name: "Boston Terrier", origin: "United States", size: "Small", type: ["companion", "family"], temperament: "Friendly, lively, intelligent", lifespan: "13–15 yrs", weight: "5–11 kg", img: "https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?w=400&q=75&fit=crop" },
  { name: "Boxer", origin: "Germany", size: "Large", type: ["guard", "family", "popular"], temperament: "Playful, patient, loyal", lifespan: "10–12 yrs", weight: "25–32 kg", img: "https://images.unsplash.com/photo-1561037404-61cd46aa615b?w=400&q=75&fit=crop" },
  { name: "Bulldog", origin: "United Kingdom", size: "Medium", type: ["companion", "popular"], temperament: "Calm, courageous, friendly", lifespan: "8–10 yrs", weight: "18–25 kg", img: "https://images.unsplash.com/photo-1477884213360-7e9d7dcc1e48?w=400&q=75&fit=crop" },
  { name: "Bullmastiff", origin: "United Kingdom", size: "Large", type: ["guard"], temperament: "Docile, loyal, devoted", lifespan: "7–9 yrs", weight: "45–59 kg", img: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=400&q=75&fit=crop" },
  { name: "Cane Corso", origin: "Italy", size: "Large", type: ["guard"], temperament: "Stable, quiet, reserved", lifespan: "10–12 yrs", weight: "40–50 kg", img: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=400&q=75&fit=crop" },
  { name: "Cavalier King Charles Spaniel", origin: "United Kingdom", size: "Small", type: ["companion", "family"], temperament: "Gentle, affectionate, graceful", lifespan: "12–15 yrs", weight: "5–8 kg", img: "https://images.unsplash.com/photo-1561037404-61cd46aa615b?w=400&q=75&fit=crop" },
  { name: "Chihuahua", origin: "Mexico", size: "Small", type: ["companion", "popular"], temperament: "Charming, bold, alert", lifespan: "14–16 yrs", weight: "1–3 kg", img: "https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?w=400&q=75&fit=crop" },
  { name: "Chow Chow", origin: "China", size: "Large", type: ["guard", "companion"], temperament: "Aloof, loyal, quiet", lifespan: "9–15 yrs", weight: "20–32 kg", img: "https://images.unsplash.com/photo-1477884213360-7e9d7dcc1e48?w=400&q=75&fit=crop" },
  { name: "Cocker Spaniel", origin: "United Kingdom", size: "Medium", type: ["family", "popular"], temperament: "Playful, affectionate, gentle", lifespan: "12–15 yrs", weight: "7–14 kg", img: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=400&q=75&fit=crop" },
  { name: "Collie", origin: "Scotland", size: "Large", type: ["family", "working"], temperament: "Loyal, graceful, intelligent", lifespan: "12–14 yrs", weight: "23–34 kg", img: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=400&q=75&fit=crop" },
  { name: "Dachshund", origin: "Germany", size: "Small", type: ["companion", "popular"], temperament: "Stubborn, clever, lively", lifespan: "12–16 yrs", weight: "4–15 kg", img: "https://images.unsplash.com/photo-1561037404-61cd46aa615b?w=400&q=75&fit=crop" },
  { name: "Dalmatian", origin: "Croatia", size: "Large", type: ["family", "working"], temperament: "Energetic, loyal, outgoing", lifespan: "13–16 yrs", weight: "23–27 kg", img: "https://images.unsplash.com/photo-1477884213360-7e9d7dcc1e48?w=400&q=75&fit=crop" },
  { name: "Doberman Pinscher", origin: "Germany", size: "Large", type: ["guard", "popular"], temperament: "Alert, loyal, fearless", lifespan: "10–13 yrs", weight: "32–45 kg", img: "https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?w=400&q=75&fit=crop" },
  { name: "Dogo Argentino", origin: "Argentina", size: "Large", type: ["guard", "working"], temperament: "Loyal, cheerful, protective", lifespan: "9–15 yrs", weight: "35–45 kg", img: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=400&q=75&fit=crop" },
  { name: "French Bulldog", origin: "France", size: "Small", type: ["companion", "popular"], temperament: "Adaptable, playful, smart", lifespan: "10–12 yrs", weight: "8–13 kg", img: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=400&q=75&fit=crop" },
  { name: "German Shepherd", origin: "Germany", size: "Large", type: ["guard", "working", "popular"], temperament: "Confident, courageous, smart", lifespan: "9–13 yrs", weight: "22–40 kg", img: "https://images.unsplash.com/photo-1477884213360-7e9d7dcc1e48?w=400&q=75&fit=crop" },
  { name: "Golden Retriever", origin: "Scotland", size: "Large", type: ["family", "popular"], temperament: "Friendly, reliable, trustworthy", lifespan: "10–12 yrs", weight: "25–34 kg", img: "https://images.unsplash.com/photo-1561037404-61cd46aa615b?w=400&q=75&fit=crop" },
  { name: "Great Dane", origin: "Germany", size: "Large", type: ["guard", "family"], temperament: "Friendly, patient, dependable", lifespan: "7–10 yrs", weight: "50–90 kg", img: "https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?w=400&q=75&fit=crop" },
  { name: "Greyhound", origin: "United Kingdom", size: "Large", type: ["sighthound", "family"], temperament: "Gentle, affectionate, even-tempered", "lifespan": "10–14 yrs", weight: "27–40 kg", img: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=400&q=75&fit=crop" },
  { name: "Irish Setter", origin: "Ireland", size: "Large", type: ["family", "working"], temperament: "Spirited, playful, affectionate", lifespan: "12–15 yrs", weight: "25–32 kg", img: "https://images.unsplash.com/photo-1561037404-61cd46aa615b?w=400&q=75&fit=crop" },
  { name: "Irish Wolfhound", origin: "Ireland", size: "Large", type: ["family"], temperament: "Calm, dignified, generous", lifespan: "6–10 yrs", weight: "48–55 kg", img: "https://images.unsplash.com/photo-1477884213360-7e9d7dcc1e48?w=400&q=75&fit=crop" },
  { name: "Jack Russell Terrier", origin: "United Kingdom", size: "Small", type: ["companion", "family"], temperament: "Alert, lively, inquisitive", lifespan: "13–16 yrs", weight: "6–8 kg", img: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=400&q=75&fit=crop" },
  { name: "Japanese Spitz", origin: "Japan", size: "Small", type: ["companion", "family"], temperament: "Obedient, playful, affectionate", lifespan: "10–16 yrs", weight: "5–10 kg", img: "https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?w=400&q=75&fit=crop" },
  { name: "Labrador Retriever", origin: "Canada", size: "Large", type: ["family", "popular"], temperament: "Friendly, outgoing, active", lifespan: "10–12 yrs", weight: "25–36 kg", img: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=400&q=75&fit=crop" },
  { name: "Lhasa Apso", origin: "Tibet", size: "Small", type: ["companion"], temperament: "Confident, assertive, comical", lifespan: "12–15 yrs", weight: "6–8 kg", img: "https://images.unsplash.com/photo-1561037404-61cd46aa615b?w=400&q=75&fit=crop" },
  { name: "Maltese", origin: "Malta", size: "Small", type: ["companion", "popular"], temperament: "Gentle, playful, fearless", lifespan: "12–15 yrs", weight: "2–4 kg", img: "https://images.unsplash.com/photo-1477884213360-7e9d7dcc1e48?w=400&q=75&fit=crop" },
  { name: "Newfoundland", origin: "Canada", size: "Large", type: ["family", "working"], temperament: "Gentle, sweet, patient", lifespan: "8–10 yrs", weight: "45–68 kg", img: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=400&q=75&fit=crop" },
  { name: "Pekingese", origin: "China", size: "Small", type: ["companion"], temperament: "Opinionated, loyal, regal", lifespan: "12–15 yrs", weight: "3–6 kg", img: "https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?w=400&q=75&fit=crop" },
  { name: "Pembroke Welsh Corgi", origin: "Wales", size: "Small", type: ["family", "popular"], temperament: "Bold, tenacious, playful", lifespan: "12–15 yrs", weight: "10–14 kg", img: "https://images.unsplash.com/photo-1561037404-61cd46aa615b?w=400&q=75&fit=crop" },
  { name: "Pomeranian", origin: "Germany", size: "Small", type: ["companion", "popular"], temperament: "Lively, bold, inquisitive", lifespan: "12–16 yrs", weight: "1–3 kg", img: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=400&q=75&fit=crop" },
  { name: "Poodle", origin: "Germany", size: "Medium", type: ["family", "popular"], temperament: "Intelligent, active, alert", lifespan: "12–15 yrs", weight: "20–32 kg", img: "https://images.unsplash.com/photo-1477884213360-7e9d7dcc1e48?w=400&q=75&fit=crop" },
  { name: "Pug", origin: "China", size: "Small", type: ["companion", "popular"], temperament: "Charming, mischievous, loving", lifespan: "12–15 yrs", weight: "6–9 kg", img: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=400&q=75&fit=crop" },
  { name: "Rottweiler", origin: "Germany", size: "Large", type: ["guard", "popular"], temperament: "Calm, confident, devoted", lifespan: "8–10 yrs", weight: "35–60 kg", img: "https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?w=400&q=75&fit=crop" },
  { name: "Saint Bernard", origin: "Switzerland", size: "Large", type: ["family", "working"], temperament: "Gentle, patient, friendly", lifespan: "8–10 yrs", weight: "54–82 kg", img: "https://images.unsplash.com/photo-1561037404-61cd46aa615b?w=400&q=75&fit=crop" },
  { name: "Samoyed", origin: "Russia", size: "Large", type: ["family", "popular"], temperament: "Gentle, adaptable, friendly", lifespan: "12–14 yrs", weight: "16–30 kg", img: "https://images.unsplash.com/photo-1477884213360-7e9d7dcc1e48?w=400&q=75&fit=crop" },
  { name: "Shiba Inu", origin: "Japan", size: "Small", type: ["companion", "popular"], temperament: "Alert, active, attentive", lifespan: "13–16 yrs", weight: "8–11 kg", img: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=400&q=75&fit=crop" },
  { name: "Shih Tzu", origin: "China", size: "Small", type: ["companion", "popular"], temperament: "Outgoing, happy, affectionate", lifespan: "10–16 yrs", weight: "4–8 kg", img: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=400&q=75&fit=crop" },
  { name: "Siberian Husky", origin: "Russia", size: "Large", type: ["working", "popular"], temperament: "Outgoing, mischievous, loyal", lifespan: "12–15 yrs", weight: "16–27 kg", img: "https://images.unsplash.com/photo-1561037404-61cd46aa615b?w=400&q=75&fit=crop" },
  { name: "Weimaraner", origin: "Germany", size: "Large", type: ["working", "family"], temperament: "Friendly, fearless, alert", lifespan: "11–14 yrs", weight: "25–40 kg", img: "https://images.unsplash.com/photo-1477884213360-7e9d7dcc1e48?w=400&q=75&fit=crop" },
  { name: "Yorkshire Terrier", origin: "United Kingdom", size: "Small", type: ["companion", "popular"], temperament: "Bold, confident, intelligent", lifespan: "13–16 yrs", weight: "3–7 kg", img: "https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?w=400&q=75&fit=crop" },
  /* ── Indian breeds ── */
  { name: "Indian Pariah Dog", origin: "India", size: "Medium", type: ["indian", "guard", "family"], temperament: "Alert, intelligent, adaptable", lifespan: "14–16 yrs", weight: "14–22 kg", img: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=400&q=75&fit=crop" },
  { name: "Rajapalayam", origin: "India", size: "Large", type: ["indian", "guard"], temperament: "Loyal, courageous, reserved", lifespan: "10–12 yrs", weight: "22–25 kg", img: "https://images.unsplash.com/photo-1561037404-61cd46aa615b?w=400&q=75&fit=crop" },
  { name: "Mudhol Hound", origin: "India", size: "Large", type: ["indian", "working"], temperament: "Alert, athletic, sensitive", lifespan: "10–12 yrs", weight: "20–30 kg", img: "https://images.unsplash.com/photo-1477884213360-7e9d7dcc1e48?w=400&q=75&fit=crop" },
  { name: "Chippiparai", origin: "India", size: "Medium", type: ["indian", "working"], temperament: "Loyal, self-reliant, alert", lifespan: "12–14 yrs", weight: "15–20 kg", img: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=400&q=75&fit=crop" },
  { name: "Kombai", origin: "India", size: "Medium", type: ["indian", "guard"], temperament: "Aggressive, loyal, alert", lifespan: "12–14 yrs", weight: "22–25 kg", img: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=400&q=75&fit=crop" },
  { name: "Kanni", origin: "India", size: "Medium", type: ["indian", "working"], temperament: "Shy, loyal, gentle", lifespan: "14–16 yrs", weight: "15–22 kg", img: "https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?w=400&q=75&fit=crop" },
  { name: "Himalayan Sheepdog", origin: "India", size: "Large", type: ["indian", "guard", "working"], temperament: "Devoted, energetic, strong-willed", lifespan: "10–11 yrs", weight: "25–45 kg", img: "https://images.unsplash.com/photo-1561037404-61cd46aa615b?w=400&q=75&fit=crop" },
  { name: "Indian Spitz", origin: "India", size: "Small", type: ["indian", "companion"], temperament: "Lively, intelligent, playful", lifespan: "13–15 yrs", weight: "5–7 kg", img: "https://images.unsplash.com/photo-1477884213360-7e9d7dcc1e48?w=400&q=75&fit=crop" },
];

function DogBreedsPage({ nav }) {
  const [search, setSearch] = useState("");
  const [activeFilter, setActiveFilter] = useState("A–Z List");
  const [activeLetter, setActiveLetter] = useState("All");
  const [selectedBreed, setSelectedBreed] = useState(null);
  const [sizeFilter, setSizeFilter] = useState("All");
  const [originFilter, setOriginFilter] = useState("All");

  const FILTERS = [
    "A–Z List",
    "Indian Breeds",
    "Most Popular",
    "Guard Dogs",
    "Friendly Family Dogs",
  ];

  // Derived breed list based on active filter
  const getFiltered = () => {
    let list = [...ALL_BREEDS];
    if (activeFilter === "Indian Breeds") list = list.filter(b => b.type.includes("indian"));
    else if (activeFilter === "Most Popular") list = list.filter(b => b.type.includes("popular"));
    else if (activeFilter === "Guard Dogs") list = list.filter(b => b.type.includes("guard"));
    else if (activeFilter === "Friendly Family Dogs") list = list.filter(b => b.type.includes("family"));
    if (search) list = list.filter(b => b.name.toLowerCase().includes(search.toLowerCase()) || b.origin.toLowerCase().includes(search.toLowerCase()));
    if (activeLetter !== "All") list = list.filter(b => b.name.startsWith(activeLetter));
    if (sizeFilter !== "All") list = list.filter(b => b.size === sizeFilter);
    if (originFilter !== "All") list = list.filter(b => b.origin === originFilter);
    return list.sort((a, b) => a.name.localeCompare(b.name));
  };

  const filtered = getFiltered();
  const letters = ["All", ...Array.from(new Set(ALL_BREEDS.map(b => b.name[0]))).sort()];
  const origins = ["All", ...Array.from(new Set(ALL_BREEDS.map(b => b.origin))).sort()];

  const filterColors = {
    "A–Z List": { bg: C.ink, text: "#fff" },
    "Indian Breeds": { bg: "#FF6B35", text: "#fff" },
    "Most Popular": { bg: C.orange, text: "#fff" },
    "Guard Dogs": { bg: C.red, text: "#fff" },
    "Friendly Family Dogs": { bg: C.green, text: "#fff" },
  };

  // Breed detail modal
  const BreedModal = ({ b }) => {
    const traits = b.type.filter(t => !["indian"].includes(t));
    const traitLabels = { guard: "Guard Dog", family: "Family Dog", popular: "Most Popular", working: "Working Dog", companion: "Companion", sighthound: "Sighthound" };
    const isIndian = b.type.includes("indian");

    return (
      <div style={{ position: "fixed", inset: 0, background: "rgba(17,17,17,.75)", zIndex: 1000, display: "flex", alignItems: "center", justifyContent: "center", padding: 20, backdropFilter: "blur(8px)" }}
        onClick={e => e.target === e.currentTarget && setSelectedBreed(null)}>
        <div style={{ background: C.white, borderRadius: 28, width: "100%", maxWidth: 720, maxHeight: "92vh", overflowY: "auto", animation: "scaleIn .3s cubic-bezier(.22,1,.36,1) both", boxShadow: "0 40px 100px rgba(0,0,0,.3)" }}>
          {/* Header image */}
          <div style={{ position: "relative", height: 280, overflow: "hidden", borderRadius: "28px 28px 0 0" }}>
            <Img src={b.img} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top,rgba(17,17,17,.8) 0%,transparent 60%)" }} />
            <button onClick={() => setSelectedBreed(null)} style={{ position: "absolute", top: 16, right: 16, width: 36, height: 36, borderRadius: "50%", background: "rgba(255,255,255,.25)", backdropFilter: "blur(8px)", WebkitBackdropFilter: "blur(8px)", border: "none", color: "#fff", fontSize: 18, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>✕</button>
            {isIndian && (
              <div style={{ position: "absolute", top: 16, left: 16 }}>
                <span style={{ background: C.orange, color: "#fff", padding: "5px 14px", borderRadius: 100, fontSize: 11, fontWeight: 700, letterSpacing: "0.05em", textTransform: "uppercase", boxShadow: "0 4px 12px rgba(229,93,26,0.3)" }}>🇮🇳 Indian Breed</span>
              </div>
            )}
            <div style={{ position: "absolute", bottom: 20, left: 24, right: 24, display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: 16 }}>
              <div>
                <h2 className="melody" style={{ fontSize: 40, color: "#fff", lineHeight: 1.1, margin: 0, textShadow: "0 2px 4px rgba(0,0,0,0.2)" }}>{b.name}</h2>
                <p style={{ color: "rgba(255,255,255,.85)", fontSize: 15, marginTop: 6, fontWeight: 500 }}>Origin: {b.origin}</p>
              </div>
              <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 2 }}>
                {traits.map(t => (
                  <span key={t} className="glass-badge">{traitLabels[t] || t.charAt(0).toUpperCase() + t.slice(1)}</span>
                ))}
                <span className="glass-badge">{b.size} Size</span>
              </div>
            </div>
          </div>

          {/* Content */}
          <div style={{ padding: "28px 32px 32px" }}>
            {/* Stats grid */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 12, marginBottom: 28 }}>
              <div style={{ background: C.blueLt, borderRadius: 14, padding: "14px 12px", textAlign: "center", border: `1px solid rgba(29, 95, 196, 0.08)` }}>
                <div style={{ fontSize: 22, marginBottom: 6 }}>📏</div>
                <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: ".06em", textTransform: "uppercase", color: C.blue, opacity: 0.8, marginBottom: 4 }}>Size</div>
                <div style={{ fontWeight: 700, color: C.ink, fontSize: 13, lineHeight: 1.3 }}>{b.size}</div>
              </div>
              <div style={{ background: C.orangeLt, borderRadius: 14, padding: "14px 12px", textAlign: "center", border: `1px solid rgba(229, 93, 26, 0.08)` }}>
                <div style={{ fontSize: 22, marginBottom: 6 }}>⚖️</div>
                <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: ".06em", textTransform: "uppercase", color: C.orange, opacity: 0.8, marginBottom: 4 }}>Weight</div>
                <div style={{ fontWeight: 700, color: C.ink, fontSize: 13, lineHeight: 1.3 }}>{b.weight}</div>
              </div>
              <div style={{ background: C.greenLt, borderRadius: 14, padding: "14px 12px", textAlign: "center", border: `1px solid rgba(30, 107, 69, 0.08)` }}>
                <div style={{ fontSize: 22, marginBottom: 6 }}>⏳</div>
                <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: ".06em", textTransform: "uppercase", color: C.green, opacity: 0.8, marginBottom: 4 }}>Lifespan</div>
                <div style={{ fontWeight: 700, color: C.ink, fontSize: 13, lineHeight: 1.3 }}>{b.lifespan}</div>
              </div>
              <div style={{ background: C.creamDk, borderRadius: 14, padding: "14px 12px", textAlign: "center", border: `1px solid rgba(17, 17, 17, 0.05)` }}>
                <div style={{ fontSize: 22, marginBottom: 6 }}>🌍</div>
                <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: ".06em", textTransform: "uppercase", color: C.inkSft, marginBottom: 4 }}>Origin</div>
                <div style={{ fontWeight: 700, color: C.ink, fontSize: 13, lineHeight: 1.3, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }} title={b.origin}>{b.origin}</div>
              </div>
            </div>

            {/* Information */}
            <div style={{ marginBottom: 24 }}>
              <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: ".08em", textTransform: "uppercase", color: C.inkSft, marginBottom: 10 }}>Information</div>
              <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                {b.temperament.split(", ").map(t => (
                  <span key={t} style={{ background: C.white, border: `1px solid ${C.border}`, borderRadius: 100, padding: "5px 14px", fontSize: 13, color: C.inkMd, fontWeight: 500 }}>
                    {t.split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')}
                  </span>
                ))}
              </div>
            </div>

            {/* Care guide */}
            <div style={{ background: C.cream, borderRadius: 18, padding: "22px 24px", marginBottom: 28, border: `1px solid ${C.border}` }}>
              <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: ".08em", textTransform: "uppercase", color: C.inkSft, marginBottom: 14 }}>Quick Care Guide</div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px 24px" }}>
                {[
                  ["Exercise Needs", b.size === "Large" ? "High 🔥" : "Moderate ⚡"],
                  ["Grooming", b.type.includes("companion") ? "High 🧼" : "Low–Moderate ✂️"],
                  ["Good with Kids", b.type.includes("family") ? "Yes ✓" : "With supervision ⚠️"],
                  ["Guard Ability", b.type.includes("guard") ? "Excellent 🛡️" : "Low–Moderate 🐕"],
                  ["Trainability", b.type.includes("working") || b.type.includes("popular") ? "High 🎓" : "Moderate ⚡"],
                  ["Apartment Friendly", b.size === "Small" ? "Yes ✓" : "Needs space 🏡"],
                ].map(([l, v]) => (
                  <div key={l} style={{ display: "flex", justifyContent: "space-between", padding: "8px 0", borderBottom: `1px solid ${C.border}` }}>
                    <span style={{ fontSize: 13, color: C.inkSft, fontWeight: 500 }}>{l}</span>
                    <span style={{ fontSize: 13, fontWeight: 600, color: v.includes("✓") || v.includes("Excellent") ? C.green : C.ink }}>{v}</span>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ display: "flex", gap: 12 }}>
              <button className="btn btn-lg btn-outline" style={{ flex: 1, borderRadius: 14, fontWeight: 700 }} onClick={() => setSelectedBreed(null)}>Close</button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div style={{ paddingTop: 96 }}>
      {selectedBreed && <BreedModal b={selectedBreed} />}

      {/* ── Hero ── */}
      <section style={{ padding: "120px 0 80px", position: "relative", overflow: "hidden" }}>
        <Img src="dog_breeds_hero.png" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 30%" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(160deg, rgba(17,17,17,.82) 0%, rgba(17,17,17,.4) 60%, rgba(17,17,17,.85) 100%)" }} />

        <div style={{ position: "relative", zIndex: 2, maxWidth: 1280, margin: "0 auto", padding: "0 32px" }}>
          <div>
            <div className="pill" style={{ background: "rgba(255,255,255,.1)", color: "rgba(255,255,255,.85)", marginBottom: 24, display: "inline-block" }}>🐕 Encyclopedia</div>
            <h1 className="melody-italic" style={{ fontSize: "clamp(52px,7vw,94px)", fontWeight: 700, lineHeight: .92, color: "#fff", margin: "0 0 20px" }}>
              Dog Breeds<br />A to Z.
            </h1>
            <p style={{ fontSize: 18, color: "rgba(255,255,255,.75)", lineHeight: 1.7, maxWidth: 560, marginBottom: 40 }}>
              An A–Z encyclopedia of recognized dog breeds in the world — with origin, temperament, care guides, and Indian breeds celebrated separately.
            </p>
            {/* Quick counts */}
            <div style={{ display: "flex", gap: 24, flexWrap: "wrap" }}>
              {[
                [ALL_BREEDS.length + "+", "Total Breeds"],
                [ALL_BREEDS.filter(b => b.type.includes("indian")).length, "Indian Breeds"],
                [ALL_BREEDS.filter(b => b.type.includes("popular")).length, "Most Popular"],
                [ALL_BREEDS.filter(b => b.type.includes("guard")).length, "Guard Breeds"],
                [ALL_BREEDS.filter(b => b.type.includes("family")).length, "Family Breeds"],
              ].map(([v, l]) => (
                <div key={l}>
                  <div className="melody" style={{ fontSize: 28, color: C.orange, lineHeight: 1 }}>{v}</div>
                  <div style={{ fontSize: 12, color: "rgba(255,255,255,.5)", marginTop: 4 }}>{l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: "48px 0 100px", background: C.cream }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 32px" }}>

          {/* ── Search & consolidated filters ── */}
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", alignItems: "center", marginBottom: 28, padding: "16px 20px", background: C.white, borderRadius: 18, border: `1px solid ${C.border}` }}>
            {/* Search */}
            <div style={{ position: "relative", flex: 1, minWidth: 200 }}>
              <span style={{ position: "absolute", left: 14, top: "50%", transform: "translateY(-50%)", fontSize: 16, color: C.sand }}>🔍</span>
              <input
                value={search} onChange={e => setSearch(e.target.value)}
                placeholder="Search breeds or origin country…"
                style={{ width: "100%", padding: "10px 14px 10px 42px", borderRadius: 100, border: `1.5px solid ${C.border}`, fontSize: 14, outline: "none", color: C.ink, transition: "border-color .18s", boxSizing: "box-sizing" }}
                onFocus={e => e.target.style.borderColor = C.orange} onBlur={e => e.target.style.borderColor = C.border}
              />
            </div>
            {/* Type */}
            <select value={activeFilter} onChange={e => { setActiveFilter(e.target.value); setActiveLetter("All"); }}
              className="filter-select"
              style={{ padding: "10px 16px", borderRadius: 100, border: `1.5px solid ${C.border}`, fontSize: 14, cursor: "pointer", outline: "none", color: C.ink, background: "#fff", minWidth: 150 }}>
              <option value="A–Z List">All Breeds</option>
              <option value="Indian Breeds">🇮🇳 Indian Breeds</option>
              <option value="Most Popular">⭐ Most Popular</option>
              <option value="Guard Dogs">🛡 Guard Dogs</option>
              <option value="Friendly Family Dogs">🏡 Family Dogs</option>
            </select>
            {/* Origin */}
            <select value={originFilter} onChange={e => setOriginFilter(e.target.value)}
              className="filter-select"
              style={{ padding: "10px 16px", borderRadius: 100, border: `1.5px solid ${C.border}`, fontSize: 14, cursor: "pointer", outline: "none", color: C.ink, background: "#fff", minWidth: 150, maxWidth: 200 }}>
              {origins.map(o => <option key={o}>{o === "All" ? "All Origins" : o}</option>)}
            </select>
            {/* Size */}
            <select value={sizeFilter} onChange={e => setSizeFilter(e.target.value)}
              className="filter-select"
              style={{ padding: "10px 16px", borderRadius: 100, border: `1.5px solid ${C.border}`, fontSize: 14, cursor: "pointer", outline: "none", color: C.ink, background: "#fff", minWidth: 130 }}>
              <option value="All">All Sizes</option>
              <option>Small</option><option>Medium</option><option>Large</option>
            </select>
          </div>

          {/* Letter Indices & Count Row */}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 28, flexWrap: "wrap", gap: 16 }}>
            {activeFilter === "A–Z List" ? (
              <div style={{ display: "flex", gap: 4, flexWrap: "wrap" }}>
                {letters.map(l => (
                  <button key={l} onClick={() => setActiveLetter(l)} style={{
                    width: l === "All" ? 44 : 34, height: 34, borderRadius: 8, border: `1.5px solid ${activeLetter === l ? C.orange : C.border}`,
                    background: activeLetter === l ? C.orange : "#fff", color: activeLetter === l ? "#fff" : C.inkSft,
                    fontSize: 13, fontWeight: activeLetter === l ? 700 : 400, cursor: "pointer", transition: "all .18s",
                  }}>{l}</button>
                ))}
              </div>
            ) : <div />}
            <div style={{ background: C.white, padding: "8px 18px", borderRadius: 100, border: `1px solid ${C.border}`, display: "inline-flex", alignItems: "center", gap: 6, boxShadow: "0 2px 8px rgba(17,17,17,0.02)", marginLeft: "auto" }}>
              <span style={{ fontSize: 13.5, fontWeight: 700, color: C.inkMd }}>📊 {filtered.length} breeds</span>
            </div>
          </div>

          {/* ── Indian Breeds special header ── */}
          {activeFilter === "Indian Breeds" && (
            <div style={{ background: "linear-gradient(135deg, rgba(255, 107, 53, 0.08), rgba(255, 140, 85, 0.08))", border: "1px solid rgba(255, 107, 53, 0.2)", borderRadius: 20, padding: "28px 32px", marginBottom: 32, display: "flex", gap: 24, alignItems: "center" }}>
              <div style={{ fontSize: 52 }}>🇮🇳</div>
              <div>
                <h2 className="melody" style={{ fontSize: 32, color: "#FF6B35", lineHeight: 1, marginBottom: 6 }}>Indian Dog Breeds</h2>
                <p style={{ fontSize: 13, color: C.inkSft, lineHeight: 1.65, margin: 0 }}>Ancient, hardy, and perfectly adapted to the Indian subcontinent — these indigenous breeds are intelligent, low-maintenance, and deeply loyal. Many are endangered today and deserve your love.</p>
              </div>
            </div>
          )}

          {/* ── Category special headers ── */}
          {activeFilter === "Most Popular" && (
            <div style={{ background: `linear-gradient(135deg, rgba(229, 93, 26, 0.08), rgba(201, 78, 18, 0.08))`, border: `1px solid ${C.orange}33`, borderRadius: 20, padding: "28px 32px", marginBottom: 32 }}>
              <h2 className="melody" style={{ fontSize: 28, color: C.orange, marginBottom: 6 }}>⭐ Most Popular Breeds</h2>
              <p style={{ color: C.inkSft, fontSize: 13, lineHeight: 1.65, margin: 0 }}>The world's most beloved and widely recognized dog breeds — chosen for temperament, adaptability, and all-round family compatibility.</p>
            </div>
          )}
          {activeFilter === "Guard Dogs" && (
            <div style={{ background: `linear-gradient(135deg, rgba(192, 57, 43, 0.08), rgba(160, 32, 32, 0.08))`, border: `1px solid ${C.red}33`, borderRadius: 20, padding: "28px 32px", marginBottom: 32 }}>
              <h2 className="melody" style={{ fontSize: 28, color: C.red, marginBottom: 6 }}>🛡 Guard Dog Breeds</h2>
              <p style={{ color: C.inkSft, fontSize: 13, lineHeight: 1.65, margin: 0 }}>Naturally protective, loyal, and alert — these breeds are ideal for home protection when paired with proper training and socialisation.</p>
            </div>
          )}
          {activeFilter === "Friendly Family Dogs" && (
            <div style={{ background: `linear-gradient(135deg, rgba(30, 107, 69, 0.08), rgba(21, 92, 56, 0.08))`, border: `1px solid ${C.green}33`, borderRadius: 20, padding: "28px 32px", marginBottom: 32 }}>
              <h2 className="melody" style={{ fontSize: 28, color: C.green, marginBottom: 6 }}>🏡 Friendly Family Dog Breeds</h2>
              <p style={{ color: C.inkSft, fontSize: 13, lineHeight: 1.65, margin: 0 }}>Gentle, patient, and great with children — these breeds thrive in family environments and are perfect companions for all ages.</p>
            </div>
          )}

          {/* ── Breed grid ── */}
          {filtered.length === 0 ? (
            <div style={{ textAlign: "center", padding: "80px 0" }}>
              <div style={{ fontSize: 56, marginBottom: 16 }}>🔍</div>
              <h3 className="melody" style={{ fontSize: 28, color: C.ink, marginBottom: 8 }}>No breeds found</h3>
              <p style={{ color: C.inkSft }}>Try a different search term or clear the filters.</p>
              <button className="btn btn-md btn-primary" style={{ marginTop: 20 }} onClick={() => { setSearch(""); setActiveLetter("All"); setSizeFilter("All"); setOriginFilter("All"); }}>Clear Filters</button>
            </div>
          ) : (
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(240px,1fr))", gap: 20 }}>
              {filtered.map((b, i) => (
                <div key={i} className="card card-lift" style={{ cursor: "pointer" }} onClick={() => setSelectedBreed(b)}>
                  {/* Image */}
                  <div style={{ position: "relative", height: 190, overflow: "hidden" }}>
                    <Img src={b.img} style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform .5s cubic-bezier(.22,1,.36,1)" }}
                      onMouseEnter={e => e.target.style.transform = "scale(1.07)"}
                      onMouseLeave={e => e.target.style.transform = "scale(1)"} />
                    <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top,rgba(17,17,17,.6) 0%,transparent 50%)" }} />

                    {/* Name overlay */}
                    <div style={{ position: "absolute", bottom: 12, left: 14, right: 14 }}>
                      <h3 className="melody" style={{ color: "#fff", fontSize: 20, lineHeight: 1, marginBottom: 2 }}>{b.name}</h3>
                      <p style={{ color: "rgba(255,255,255,.75)", fontSize: 11 }}>🌍 {b.origin}</p>
                    </div>
                  </div>

                  {/* Info strip */}
                  <div style={{ padding: "14px 16px", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 8 }}>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ fontSize: 11, color: C.inkSft, lineHeight: 1.4, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{b.temperament}</div>
                    </div>
                    <div style={{ display: "flex", gap: 6, flexShrink: 0 }}>
                      <div style={{ fontSize: 10, fontWeight: 600, color: C.inkSft, background: C.cream, borderRadius: 6, padding: "3px 8px", whiteSpace: "nowrap" }}>⏳ {b.lifespan}</div>
                    </div>
                  </div>

                  {/* View details */}
                  <div style={{ padding: "0 16px 14px" }}>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", paddingTop: 10, borderTop: `1px solid ${C.border}` }}>
                      <span style={{ fontSize: 12, color: C.inkSft }}>Weight: {b.weight}</span>
                      <span style={{ fontSize: 12, fontWeight: 700, color: C.orange }}>View Details →</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

    </div>
  );
}

// ══════════════════════════════════════════════════════════════════
//  ROOT
// ══════════════════════════════════════════════════════════════════
export default function App() {
  const [page, setPage] = useState("home");
  const [pets, setPets] = useState([
    { name: "Max", breed: "German Shepherd", species: "Dog", age: "3 yrs", gender: "Male", img: "https://images.unsplash.com/photo-1589941013453-ec89f33b5e95?w=600&q=80&fit=crop", health: 95, weight: "35 kg", color: "Black & Tan", microchip: "MX001234", allergies: "None", conditions: "None", nextVet: "Jun 15", nextVacc: "Jul 20", food: "Royal Canin German Shepherd Adult" },
    { name: "Bella", breed: "Pomeranian", species: "Dog", age: "2 yrs", gender: "Female", img: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?w=600&q=80&fit=crop", health: 88, weight: "4.5 kg", color: "Orange Sable", microchip: "MX005678", allergies: "None", conditions: "None", nextVet: "Jul 3", nextVacc: "Aug 5", food: "Purina Pro Plan Small Breed" },
  ]);
  const [currentUser, setCurrentUser] = useState({ name: "Geetha", email: "geetha@example.com" });

  const nav = (p) => { setPage(p); window.scrollTo({ top: 0, behavior: "smooth" }); };

  const noFooter = ["login", "signup"];

  const PAGE_MAP = {
    home: <HomePage nav={nav} />,
    about: <AboutPage nav={nav} />,
    services: <ServicesPage nav={nav} />,
    adopt: <AdoptPage nav={nav} />,
    vet: <VetPage nav={nav} />,
    shop: <ShopPage nav={nav} />,
    lost: <LostFoundPage nav={nav} />,
    dashboard: <DashboardPage nav={nav} pets={pets} setPets={setPets} currentUser={currentUser} />,
    login: <AuthPage type="login" nav={nav} pets={pets} setPets={setPets} currentUser={currentUser} setCurrentUser={setCurrentUser} />,
    signup: <AuthPage type="signup" nav={nav} pets={pets} setPets={setPets} currentUser={currentUser} setCurrentUser={setCurrentUser} />,
    contact: <ContactPage nav={nav} />,
    "pet-videos": <PetVideosPage nav={nav} />,
    "dog-breeds": <DogBreedsPage nav={nav} />,
    /* ── Service category pages ── */
    "svc-health": <SvcHealthPage nav={nav} />,
    "svc-grooming": <SvcGroomingPage nav={nav} />,
    "svc-training": <SvcTrainingPage nav={nav} />,
    "svc-boarding": <SvcBoardingPage nav={nav} />,
    "svc-activity": <SvcActivityPage nav={nav} />,
    "svc-specialty": <SvcSpecialtyPage nav={nav} />,
    "svc-retail": <SvcRetailPage nav={nav} />,
  };

  return (
    <>
      <GlobalStyles />
      {/* Thin top progress brand accent bar */}
      <div style={{
        position: "fixed", top: 0, left: 0, right: 0, height: 3,
        background: `linear-gradient(to right, ${C.orange}, ${C.blue})`,
        zIndex: 1001
      }} />
      <Navbar page={page} nav={nav} />
      <main key={page} style={{ animation: "fadeIn .3s ease both" }}>
        {PAGE_MAP[page] ?? PAGE_MAP.home}
      </main>
      {!noFooter.includes(page) && <Footer nav={nav} />}
      <ChatBot />
    </>
  );
}
