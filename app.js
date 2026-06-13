/* ================================================================
   PAWPRINT  —  Complete Application Logic  v3
   ================================================================ */

// ── Global Design Tokens ──────────────────────────────────────────
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
  dogBed: "https://images.unsplash.com/photo-1541599540903-216a46ca1ad0?w=600&q=80&fit=crop",
  treats: "https://images.unsplash.com/photo-1608454509000-193f03fc2a21?w=600&q=80&fit=crop",
  dog5: "https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=600&q=80&fit=crop",
  dog6: "https://images.unsplash.com/photo-1552053831-71594a27632d?w=600&q=80&fit=crop",
  dog7: "https://images.unsplash.com/photo-1534361960057-19889db9621e?w=600&q=80&fit=crop",
  dog8: "https://images.unsplash.com/photo-1517849845537-4d257902454a?w=600&q=80&fit=crop",
};

// ── Service Mega-Menu Categories ───────────────────────────────────
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
      { label: "Physiotherapy & Rehab", page: "svc-health" },
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
      { label: "Pregnancy & Whelping", page: "svc-specialty" },
      { label: "Rehabilitation Therapy", page: "svc-specialty" },
      { label: "Hospice & End-of-Life Care", page: "svc-specialty" },
      { label: "Pet Photography", page: "svc-specialty" },
      { label: "Dog Events & Parties", page: "svc-specialty" },
      { label: "Emotional Support Dog", page: "svc-specialty" },
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
      { label: "Clothing & Extras", page: "svc-retail" },
      { label: "Training Tools", page: "svc-retail" },
      { label: "ID Tags", page: "svc-retail" },
      { label: "Travel Accessories", page: "svc-retail" },
    ],
  },
];

// ── Database lists ───────────────────────────────────────────────
const ALL_PETS = [
  { id: 1, name: "Bruno", breed: "Labrador Retriever", species: "Dog", size: "Large", gender: "Male", age: "2 yrs", img: P.dog1, loc: "Coimbatore", vacc: true, neut: false, tags: ["Friendly", "Energetic", "Loves kids"], story: "Bruno was rescued from a flood shelter. Fully trained, loves fetch, and is wonderful with children." },
  { id: 2, name: "Luna", breed: "Siberian Husky", species: "Dog", size: "Large", gender: "Female", age: "1 yr", img: P.dog5, loc: "Chennai", vacc: true, neut: true, tags: ["Playful", "Active", "Vocal"], story: "Luna is a beautiful Husky who loves running and cool spaces. Extremely friendly and playful." },
  { id: 3, name: "Milo", breed: "Beagle", species: "Dog", size: "Medium", gender: "Male", age: "3 yrs", img: P.dog2, loc: "Bangalore", vacc: true, neut: true, tags: ["Curious", "Playful", "Social"], story: "Milo is a therapy dog candidate who responds to 20+ commands and has never met a stranger." },
  { id: 4, name: "Cleo", breed: "Shih Tzu", species: "Dog", size: "Small", gender: "Female", age: "8 mo", img: P.dog6, loc: "Hyderabad", vacc: true, neut: false, tags: ["Cuddly", "Quiet", "Friendly"], story: "Cleo is a sweet lap dog who loves belly rubs and soft treats. Perfect for apartments." },
  { id: 5, name: "Rex", breed: "German Shepherd", species: "Dog", size: "Large", gender: "Male", age: "4 yrs", img: P.dog3, loc: "Mumbai", vacc: true, neut: false, tags: ["Loyal", "Trained", "Protective"], story: "Rex is a retired police assistance dog. Disciplined, loyal, and ready for a loving family home." },
  { id: 6, name: "Daisy", breed: "Golden Retriever", species: "Dog", size: "Large", gender: "Female", age: "1 yr", img: P.dog4, loc: "Pune", vacc: false, neut: false, tags: ["Gentle", "Puppy", "Playful"], story: "Daisy is the softest soul you'll ever meet. Loves cuddles, belly rubs, and chasing butterflies." },
  { id: 7, name: "Rocky", breed: "Boxer", species: "Dog", size: "Large", gender: "Male", age: "2 yrs", img: P.dog7, loc: "Delhi", vacc: true, neut: true, tags: ["Energetic", "Protective", "Athletic"], story: "Rocky is an active Boxer who enjoys outdoor hikes and long play sessions. Very loyal." },
  { id: 8, name: "Coco", breed: "Cocker Spaniel", species: "Dog", size: "Medium", gender: "Female", age: "1.5 yrs", img: P.dog8, loc: "Kolkata", vacc: true, neut: true, tags: ["Gentle", "Friendly", "Loves treats"], story: "Coco is a sweet Cocker Spaniel with a beautiful coat. Loves chasing balls and cuddling on the sofa." }
];

const vets = [
  { name: "Dr. Meera Iyer", spec: "Small Animal Medicine", exp: "15 yrs", rating: 4.9, reviews: 1240, img: P.vet2, price: "₹499", slots: ["9:00 AM", "11:00 AM", "2:00 PM", "4:00 PM", "6:00 PM"], avail: "Today", langs: ["Tamil", "English", "Hindi"] },
  { name: "Dr. Rajan Pillai", spec: "Exotic Pets & Birds", exp: "12 yrs", rating: 4.8, reviews: 870, img: P.team2, price: "₹599", slots: ["10:00 AM", "12:00 PM", "3:00 PM", "5:00 PM"], avail: "Today", langs: ["Malayalam", "English"] },
  { name: "Dr. Anita Desai", spec: "Veterinary Surgery", exp: "20 yrs", rating: 4.9, reviews: 2100, img: P.team3, price: "₹799", slots: ["8:00 AM", "1:00 PM", "4:30 PM", "7:00 PM"], avail: "Tomorrow", langs: ["Hindi", "English", "Marathi"] },
];

const products = [
  { id: 1, name: "Royal Canin Medium Adult 4kg", cat: "Food", price: 2499, old: 2999, img: P.shop1, rating: 4.8, rev: 1240, badge: "Food", bc: C.orange },
  { id: 2, name: "Kong Extreme Chew Toy", cat: "Toys", price: 899, old: 1100, img: P.dog2, rating: 4.7, rev: 890, badge: "Toys", bc: C.blue },
  { id: 3, name: "GPS Pet Tracker Pro 2026", cat: "Tech", price: 3999, old: 4999, img: P.shop2, rating: 4.9, rev: 456, badge: "Tech", bc: C.green },
  { id: 4, name: "Himalaya PetCare Shampoo", cat: "Grooming", price: 349, old: 449, img: P.groom, rating: 4.6, rev: 2100, badge: "Grooming", bc: "#8B5CF6" },
  { id: 5, name: "Complete Pet First Aid Kit", cat: "Medicines", price: 799, old: 999, img: P.vet1, rating: 4.8, rev: 560, badge: "Medicines", bc: C.red },
  { id: 6, name: "Premium Adjustable Harness", cat: "Accessories", price: 1299, old: 1599, img: P.train, rating: 4.7, rev: 780, badge: "Accessories", bc: "#0EA5E9" },
  { id: 7, name: "Orthopedic Memory Foam Bed", cat: "Accessories", price: 2999, old: 3999, img: P.dogBed, rating: 4.8, rev: 320, badge: "Accessories", bc: "#0EA5E9" },
  { id: 8, name: "Organic Peanut Butter Treats", cat: "Food", price: 499, old: 699, img: P.treats, rating: 4.9, rev: 840, badge: "Food", bc: C.orange },
];

const milestones = [
  { year: "2023", title: "Born from Love (Idea)", desc: "Frustrated by disconnected records and hard-to-reach vet clinics, Dr. Sriram and Sharmila sketch a blueprint of Pawprint on a napkin." },
  { year: "2024", title: "Execution & Launch", desc: "Making the dream a reality. Launched pet onboarding, verified vet directory, and custom shelters. Expanded to 100+ Indian cities." },
  { year: "2025", title: "Expanding Nation-Wide", desc: "Scaling nationwide. Expanding verified veterinary consultation, emergency care, and custom adoption shelters to every tier-1 and tier-2 city in India." },
  { year: "2026", title: "Shining Future", desc: "Leading with intelligence. Scaling our AI-driven disease predictors, smart feeding calculators, and predictive vet monitoring." }
];

const values = [
  { icon: "🐾", title: "Compassion First", desc: "Every product decision, every hire, every partnership - animal welfare always comes first.", bg: "#FEF2F2", border: "#FCA5A5", accent: "#EF4444", shadowRgb: "239, 68, 68" },
  { icon: "🔬", title: "Science-Backed", desc: "We partner with leading veterinary institutions and never recommend what isn't evidence-based.", bg: "#EFF6FF", border: "#BFDBFE", accent: "#3B82F6", shadowRgb: "59, 130, 246" },
  { icon: "🔍", title: "Radical Transparency", desc: "Open pricing, honest advice, and no hidden fees - ever. What you see is exactly what you get.", bg: "#FFFBEB", border: "#FDE68A", accent: "#D97706", shadowRgb: "217, 119, 6" },
  { icon: "🌱", title: "Sustainability", desc: "Eco-conscious products, paperless records, and carbon-offset delivery on all shop orders.", bg: "#F0FDF4", border: "#BBF7D0", accent: "#22C55E", shadowRgb: "34, 197, 94" },
  { icon: "💪", title: "Community", desc: "We're building a nation of confident, informed, and responsible pet parents - one family at a time.", bg: "#FAF5FF", border: "#E9D5FF", accent: "#8B5CF6", shadowRgb: "139, 92, 246" },
];

const leadership = [
  {
    name: "Dr. Sriram", role: "CEO & Founder",
    img: P.team1, linkedin: "#",
    quote: "\"Every pet deserves the same standard of care as any family member. That's not a tagline — it's a design principle.\"",
    bio: "Board-certified veterinarian and product strategist with 15 years of clinical practice across small animal medicine and digital care. Founded Pawprint to unify the dog care ecosystem.",
    credentials: ["BVSc — Tamil Nadu Veterinary & Animal Sciences University", "MVSc — Small Animal Medicine, IVRI Bareilly", "Ex-Product Lead, Swiggy", "Mentor, Y Combinator India"],
    pet: "Rocky (Beagle)"
  },
  {
    name: "Sharmila", role: "CTO & Co-founder",
    img: P.team2, linkedin: "#",
    quote: "\"The hardest engineering challenge isn't the algorithm — it's making technology disappear so the human-pet bond comes through.\"",
    bio: "Machine learning engineer with a decade at Google (Search, Health AI) and two successful exits. Sharmila architected the AI health assistant and smart symptom engine.",
    credentials: ["B.Tech — IIT Madras, Computer Science", "MSc AI — Carnegie Mellon University", "Ex-Google Brain (Health AI)", "Forbes 30 Under 30 Asia — Technology"],
    pet: "Milo (Beagle)"
  },
  {
    name: "Nikila", role: "Head of Growth",
    img: P.team3, linkedin: "#",
    quote: "\"Growth that doesn't serve the customer isn't growth — it's debt. We grow by making pet parents' lives genuinely easier.\"",
    bio: "Hyperlocal operations leader with 8 years scaling pet care, city launches, supply-side partnerships, and user growth strategy.",
    credentials: ["MBA — Indian School of Business, Hyderabad", "B.Com — Shri Ram College, Delhi", "Ex-Swiggy VP City Operations", "Ex-Ola Expansion Lead"],
    pet: "Butter (Labrador)"
  },
  {
    name: "Arjun", role: "Managing Director",
    img: P.team1, linkedin: "#",
    quote: "\"Building operational frameworks that speak the language of trust and reliability is our everyday mission.\"",
    bio: "Operations director driving strategy, corporate governance, and execution. Arjun ensures the seamless growth of Pawprint's services across 85+ cities.",
    credentials: ["Ex-Ola International Expansion Lead", "MBA — Finance & Operations", "B.Com (Hons) — Delhi University", "10+ Years Executive Leadership"],
    pet: "Diesel (Labrador)"
  }
];

const extended = [
  { name: "Sriram", role: "VP of Product", dept: "Product", img: P.team1, note: "Shapes the roadmap and ensures our pet management features are world-class." },
  { name: "Swathi", role: "Head of Veterinary Care", dept: "Medical", img: P.vet2, note: "Coordinates with veterinary institutions to ensure evidence-based care." },
  { name: "Nikila", role: "Lead UX Designer", dept: "Brand", img: P.team2, note: "Designs beautiful, premium experiences for pet parents." },
  { name: "Sharmila", role: "Head of Grooming Ops", dept: "Operations", img: P.team3, note: "Manages our groomer training and service standards across all cities." },
  { name: "Prabavathi", role: "Lead Software Architect", dept: "Product", img: P.team1, note: "Builds predictive algorithms for the Paws AI health assistant." },
  { name: "Gopinath", role: "VP of Engineering", dept: "Product", img: P.team3, note: "Scales real-time data services and ensures 100% platform uptime." },
  { name: "Swetha", role: "Head of Adoption", dept: "Operations", img: P.team2, note: "Partners with shelters to make verification and meet-and-greets simple." },
  { name: "Abinaya", role: "Brand Copywriter", dept: "Brand", img: P.vet2, note: "Crafts clear, caring guides and resources for our pet community." },
  { name: "Dhivyadharisni", role: "Senior App Developer", dept: "Product", img: P.team1, note: "Develops smooth native mobile experiences for health tracking on the go." },
  { name: "Siva", role: "Logistics Manager", dept: "Operations", img: P.team3, note: "Manages supply chains for eco-conscious products in the Pet Shop." },
  { name: "Vanisree", role: "Customer Support Lead", dept: "Operations", img: P.team2, note: "Ensures 24/7 empathetic support for queries, bookings, and emergencies." },
  { name: "Nandhini", role: "Senior Data Analyst", dept: "Strategy", img: P.vet2, note: "Extracts behavioral insights to personalize dietary and wellness advice." }
];

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

const KB = [
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
  {
    keys: ["services", "what services", "all services", "what do you offer", "what can pawprint"],
    answer: "Pawprint offers 7 service categories with 70+ individual services:\n\n🏥 Health & Care — checkups, vaccines, surgery, emergency\n✂️ Grooming & Hygiene — full groom, bath, nail clipping, de-shedding\n🎓 Training & Behavior — puppy, obedience, aggression management\n🏠 Boarding & Sitting — luxury boarding, daycare, pet sitting\n🏃 Activity & Lifestyle — dog walking, adventure walks, swimming\n⭐ Specialty — microchipping, relocation, pet photography\n🛍️ Retail — food, toys, accessories, training tools\n\nWhich service are you interested in?", page: "services", cta: "Browse All Services"
  },
  {
    keys: ["groom", "grooming", "bath", "haircut", "trim", "nail", "nail clip", "de-shed", "shed", "paw", "ear clean"],
    answer: "Our certified groomers offer:\n• Full Grooming — ₹799 (bath, cut, nail, ears, finishing)\n• Bath & Blow Dry — ₹399\n• Nail Clipping — ₹149\n• De-shedding Treatment — ₹599\n• Skin & Coat Treatment — ₹699\n\nFree pickup & drop available. All sessions use pH-balanced, cruelty-free products. Want to book?", page: "svc-grooming", cta: "Book Grooming"
  },
  {
    keys: ["train", "training", "obedience", "leash", "puppy train", "behavior", "aggressive", "pull", "commands", "tricks"],
    answer: "Our CPDT-certified trainers use 100% force-free, positive reinforcement methods:\n\n• Puppy Training — ₹1,499/month\n• Obedience Training — ₹1,999/month\n• Leash Training — ₹999/month\n• Behavioral Correction — ₹2,499/month\n• Aggression Management — ₹3,499/month\n• Therapy Dog Training — ₹3,999/month\n\n98% success rate across 10,000+ dogs trained. Shall I take you to training?", page: "svc-training", cta: "Book Training"
  },
  {
    keys: ["board", "boarding", "daycare", "dog daycare", "pet sit", "sitting", "overnight", "kennel", "boarding cost", "board price"],
    answer: "Our boarding options:\n\n🏠 Dog Boarding — ₹599/night (CCTV monitored, daily updates)\n👑 Luxury Boarding — ₹1,499/night (AC suite, live camera access)\n🏡 Cage-Free Boarding — ₹899/night (home environment)\n☀️ Dog Daycare — ₹399/day (full-day supervised play)\n🏠 Pet Sitting — ₹499/visit (in your home)\n\nAll facilities have a vet on call. Want to book?", page: "svc-boarding", cta: "Book Boarding"
  },
  {
    keys: ["walk", "dog walk", "walking", "exercise", "hiking", "hike", "swim", "swimming", "adventure", "activity", "play"],
    answer: "Keep your pet active with our GPS-tracked, insured services:\n\n🚶 Dog Walking — ₹199/walk (30 min, real-time GPS)\n🏃 Exercise Sessions — ₹349/session (breed-specific fitness)\n🥾 Adventure Walks — ₹499/walk (90-min trail walks)\n🏊 Swimming Sessions — ₹599/session (hydrotherapy pool)\n🎾 Playtime Activities — ₹249/session (enrichment & games)\n\nAll walkers are background-checked and insured. Book one?", page: "svc-activity", cta: "Book Activity"
  },
  {
    keys: ["shop", "buy", "food", "toy", "toys", "collar", "leash", "accessories", "grooming product", "product", "order", "purchase"],
    answer: "The Pawprint Shop stocks 1,000+ vet-reviewed products:\n\n🍗 Dog Food — Royal Canin, Hills, Drools from ₹499\n🧸 Toys — Kong, tug toys, puzzle feeders from ₹149\n📡 GPS Tracker — ₹3,999 (real-time tracking)\n✂️ Grooming Products — pH-balanced shampoos from ₹199\n🦺 Collars & Leashes — from ₹249\n💊 Treats & Supplements — from ₹199\n\nNext-day delivery available. Want to visit the shop?", page: "shop", cta: "Go to Shop"
  },
  {
    keys: ["lost", "found", "missing", "lost pet", "missing dog", "missing cat", "lost dog", "lost cat", "found dog", "found cat", "report lost"],
    answer: "If your pet is missing, act fast — most pets are found within 24 hours!\n\n📋 Report Lost Pet — fill our form with pet details, last seen location, your contact, and upload photos. We send alerts to nearby Pawprint users immediately.\n\n🔍 Found a Pet — report with photos and location. We match records to help reunite them.\n\n📍 Browse active cases in your city.\n\nWould you like to go to Lost & Found?", page: "lost", cta: "Go to Lost & Found"
  },
  {
    keys: ["breed", "dog breed", "breeds", "labrador", "golden retriever", "german shepherd", "poodle", "bulldog", "husky", "beagle", "indian breed", "pariah", "rajapalayam"],
    answer: "Our Dog Breeds encyclopedia has 67+ recognized breeds with full details:\n\n📋 A–Z list of all breeds\n🇮🇳 8 Indian breeds (Pariah, Rajapalayam, Mudhol Hound, Chippiparai, Kombai, Kanni, Himalayan Sheepdog, Indian Spitz)\n⭐ Most popular breeds\n🛡 Guard dog breeds\n🏡 Family-friendly breeds\n\nEach breed includes origin, temperament, size, lifespan, care guide, and more. Want to explore?", page: "dog-breeds", cta: "Browse Dog Breeds"
  },
  {
    keys: ["video", "videos", "tutorial", "how to train", "training video", "watch", "groom video", "learn", "tips"],
    answer: "Our free Pet Videos library has 12+ expert tutorials:\n\n🎓 Puppy Training (8:24) — Dr. Kiran Patel\n🐕 5 Essential Commands (12:10) — CPDT Trainer\n🦮 Stop Leash Pulling (9:55) — Behavioral Specialist\n✂️ At-Home Grooming (14:30) — Master Groomer\n🏥 10 Warning Signs (11:00) — Head Vet\n🍗 Nutrition Guide (13:15) — Dr. Kiran Patel\n\nAll free, no sign-up needed. Want to watch?", page: "pet-videos", cta: "Watch Videos"
  },
  {
    keys: ["dashboard", "account", "my pets", "login", "sign in", "profile", "register", "signup", "sign up"],
    answer: "Your Pawprint Dashboard lets you:\n\n🐾 Add & manage multiple pet profiles\n💉 Track vaccination history & get reminders\n📅 View upcoming vet & grooming bookings\n📦 Track shop orders\n🏥 Access full health records\n\nSign in to access your dashboard, or create a free account to get started!", page: "dashboard", cta: "Go to Dashboard"
  },
  {
    keys: ["price", "pricing", "cost", "plan", "subscription", "free", "premium", "pro", "membership", "how much"],
    answer: "Pawprint offers flexible plans:\n\n🆓 Free — 1 pet profile, basic listings, community access\n💙 Premium — ₹499/month (5 pets, AI tools, priority booking, 10% shop discount)\n🔶 Pro — ₹999/month (unlimited pets, all features, 20% discount, insurance management)\n🏢 Enterprise — Custom (shelters, vet clinics, bulk tools)\n\nAll plans have a free trial. Want to explore plans?", page: "signup", cta: "See Plans"
  },
  {
    keys: ["about", "who", "company", "founded", "team", "founder", "history", "story", "mission"],
    answer: "Pawprint was founded in 2020 by Dr. Kiran Patel (CEO, veterinarian) and Sneha Krishnamurthy (CTO, ex-Google AI engineer) after struggling to find reliable vet care for rescue dogs.\n\n📊 Today: 45,000+ happy pets · ₹42Cr raised · 85+ cities · 1,200+ vet partners\n🏆 ET Startup of the Year 2024 · Forbes 30 Under 30 · Y Combinator Alumni\n\nOur mission: world-class pet care, accessible to every pet family in India. Want to learn more?", page: "about", cta: "Our Story"
  },
  {
    keys: ["contact", "call", "phone", "email", "address", "support", "help", "reach", "talk to"],
    answer: "Reach us anytime:\n\n📧 hello@pawprint.in\n📞 +91 98765 43210\n📍 Avinashi Road, Coimbatore, Tamil Nadu 641018\n⏰ Mon–Sat, 9 AM – 6 PM IST\n\nFor 24/7 pet emergencies, our vet line is always open. Want to open the contact page?", page: "contact", cta: "Contact Us"
  },
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

// ── Application State variables ──────────────────────────────────
let currentPage = 'home';
let currentLeader = 0;
let dashboardTab = 'overview';
let activeVet = null;
let activeSlot = null;
let selectedBreed = null;
let activeBreedLetter = 'All';
let activeBreedType = 'All';
let breedSizeFilter = 'All';
let breedOriginFilter = 'All';
let activeVideoCategory = 'All';
let lostTab = 'browse';
let lostMode = 'lost';
let lostPhotos = [];
let addPetPhoto = null;
let cart = [];
let adoptFavorites = [];
let selectedAdoptPetId = null;
let activeServiceCat = SERVICE_CATS[0].cat;

// Chatbot states
let chatbotOpen = false;
let chatbotScreen = 'home';
let chatbotMsgs = [];
let chatbotTyping = false;

// ── Dynamic data models for Lost & Found listings ────────────────
let lostListings = [
  {
    id: 1,
    type: "lost",
    name: "Bruno",
    species: "Dog",
    breed: "Labrador Retriever",
    color: "Golden",
    area: "RS Puram",
    date: "2026-06-04",
    contact: "+91 98765 43210",
    reward: "₹5,000",
    img: P.dog1,
    gender: "Male",
    age: "3 years",
    size: "Large (15-30kg)",
    microchip: "981022300481",
    features: "White patch on chest, floppy ears, very friendly.",
    collar: "Yes",
    collarDescription: "Red nylon collar with name tag 'Bruno'",
    time: "14:30",
    address: "12 MG Road, near Central Park",
    city: "Coimbatore",
    landmark: "Opposite City Bank",
    ownerName: "Priya Sharma",
    email: "priya@example.com",
    phone2: "+91 98765 43219",
    currentlyWith: "",
    notes: "Bruno is microchipped. He might be scared of fireworks or loud vehicle noises."
  },
  {
    id: 2,
    type: "found",
    name: "Spotted Kitty",
    species: "Cat",
    breed: "Domestic Shorthair",
    color: "White/Black",
    area: "Gandhipuram",
    date: "2026-06-03",
    contact: "+91 98765 43211",
    reward: "N/A",
    img: P.cat2,
    gender: "Female",
    age: "Under 1 year",
    size: "Small (under 5kg)",
    microchip: "None",
    features: "Black spots around left eye, very vocal.",
    collar: "Yes",
    collarDescription: "Pink collar with small bell, no name tag",
    time: "09:00",
    address: "Crosscut Road, near hot chips",
    city: "Coimbatore",
    landmark: "Near Crosscut bus stop",
    ownerName: "Rahul Nair",
    email: "rahul@example.com",
    phone2: "",
    currentlyWith: "Me (safe at home)",
    notes: "Very affectionate kitty, well behaved. Keeping her safe inside for now."
  },
  {
    id: 3,
    type: "lost",
    name: "Bella",
    species: "Cat",
    breed: "Persian",
    color: "White",
    area: "Peelamedu",
    date: "2026-06-01",
    contact: "+91 87654 32109",
    reward: "₹2,000",
    img: P.cat1,
    gender: "Female",
    age: "2 years",
    size: "Small (under 5kg)",
    microchip: "None",
    features: "Long fluffy white tail, blue eyes, very quiet.",
    collar: "No",
    collarDescription: "",
    time: "18:00",
    address: "PSG College Road",
    city: "Coimbatore",
    landmark: "Opposite PSG Tech gate",
    ownerName: "Siddharth",
    email: "sid@example.com",
    phone2: "",
    currentlyWith: "",
    notes: "Requires special renal diet food. Please contact if seen."
  }
];

// ── Dashboard state models for user's pets ──────────────────────
let userPets = JSON.parse(localStorage.getItem('userPets'));
if (!userPets || userPets.some(p => p.breed === "Persian Cat" || p.breed === "Golden Retriever")) {
  userPets = [
    { name: "Max", breed: "German Shepherd", species: "Dog", age: "3 yrs", gender: "Male", img: "https://images.unsplash.com/photo-1589941013453-ec89f33b5e95?w=600&q=80&fit=crop", health: 95, weight: "35 kg", color: "Black & Tan", microchip: "MX001234", allergies: "None", conditions: "None", nextVet: "Jun 15", nextVacc: "Jul 20", food: "Royal Canin German Shepherd Adult" },
    { name: "Bella", breed: "Pomeranian", species: "Dog", age: "2 yrs", gender: "Female", img: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?w=600&q=80&fit=crop", health: 88, weight: "4.5 kg", color: "Orange Sable", microchip: "MX005678", allergies: "None", conditions: "None", nextVet: "Jul 3", nextVacc: "Aug 5", food: "Purina Pro Plan Small Breed" },
  ];
  localStorage.setItem('userPets', JSON.stringify(userPets));
}
function saveUserPets() {
  localStorage.setItem('userPets', JSON.stringify(userPets));
}

let currentUser = JSON.parse(localStorage.getItem('currentUser'));
if (!currentUser || currentUser.name === "Priya") {
  currentUser = { name: "Geetha", email: "geetha@example.com" };
  localStorage.setItem('currentUser', JSON.stringify(currentUser));
}
function saveCurrentUser() {
  localStorage.setItem('currentUser', JSON.stringify(currentUser));
}


// Testimonials & FAQ data sets
const testis = [
  { name: "Sriram", city: "Coimbatore", initials: "SR", text: "My Golden Retriever, Rocky, used to get extremely anxious during vet trips. With Pawprint's home-vets, he is a happy, healthy pup! Outstanding service!", role: "Rocky's Parent", badge: "🐶 Tail-wag Approved!", dogEmoji: "🐾", wide: true },
  { name: "Swathi", city: "Chennai", initials: "SW", text: "The grooming pickup and drop-off is a lifesaver for my Pomeranian, Coco. She came back smelling like strawberries and looking like a little cloud!", role: "Coco's Mom", badge: "✂️ Sparkle Groomed!", dogEmoji: "🐩", wide: false },
  { name: "Abinaya", city: "Bangalore", initials: "AB", text: "I was looking to adopt a pet and found Daisy, a lovely indie pup, through Pawprint. The verify check and vaccination records were so neat!", role: "Daisy's Parent", badge: "💖 Adopted!", dogEmoji: "🐕", wide: false },
  { name: "Amarnath", city: "Hyderabad", initials: "AM", text: "The AI Health assistant is crazy good. My Beagle kept scratching his ears, and the AI correctly flagged ear mites. A quick home vet visit sorted it.", role: "Sherlock's Dad", badge: "🦴 Chew-toy Tested!", dogEmoji: "🐶", wide: true },
  { name: "Sarika", city: "Coimbatore", initials: "SK", text: "We booked positive training sessions for our husky, Zeus. The trainer was incredibly patient, and Zeus now listens to basic commands perfectly!", role: "Zeus's Parent", badge: "🎓 Certified Trainer!", dogEmoji: "🐺", wide: false },
  { name: "Harish", city: "Mumbai", initials: "HA", text: "Pet Shop delivery was fast and the quality of the chew toys was top-notch. My lab, Simba, has finally met his match with the indestructible bone!", role: "Simba's Dad", badge: "🥎 Fetch Champion!", dogEmoji: "🐕‍🦺", wide: false },
  { name: "Srinath", city: "Trichy", initials: "SN", text: "Lost and Found helped me track down my cat, Leo, when he slipped out of the balcony. The community alert system works wonders!", role: "Leo's Parent", badge: "🐈 Cat Friendly!", dogEmoji: "🐱", wide: false },
  { name: "Ketheeshwaran", city: "Madurai", initials: "KW", text: "Boarding is a major concern when I travel. Pawprint linked me to a certified host who sent hourly photo updates of my pug, Oreo. Truly peaceful!", role: "Oreo's Parent", badge: "🏠 Cozy Bed Approved!", dogEmoji: "🐾", wide: true },
  { name: "Krish", city: "Salem", initials: "KR", text: "The dog breeds guide helped us understand that we needed a low-energy dog for our apartment. Adopted a senior dog and he's absolute perfection.", role: "Milo's Dad", badge: "🍖 Treat Lover!", dogEmoji: "🐕", wide: false },
  { name: "Nikila", city: "Cochin", initials: "NI", text: "Having all vaccine schedules, weight tracking, and medical reports stored in the pet dashboard saves us from carrying huge files to the clinic.", role: "Luna's Mom", badge: "🏥 Healthy Pup!", dogEmoji: "🐩", wide: false }
];
let activeTesti = 0;

const faqs = [
  { q: "How does pet adoption work?", a: "Browse verified shelter listings, apply online, meet the pet, and complete adoption paperwork with our guidance — typically 3–5 business days." },
  { q: "Can I consult a vet online?", a: "Yes. Our video consultation connects you with licensed vets 24/7. For emergencies we also offer rapid in-home vet dispatch." },
  { q: "Is there a free plan?", a: "Yes — free tier includes one pet profile, community access, and basic vet listings. Premium unlocks AI tools, unlimited bookings, and shop discounts." },
  { q: "Which cities is Pawprint in?", a: "Currently live in 85+ cities across India, including all metros and major Tier-2 cities." },
  { q: "How does the AI health assistant work?", a: "Describe your pet's symptoms in plain language. Our AI provides an initial triage and recommends next steps — always encouraging a real vet for anything serious." },
  { q: "How do you verify your service providers?", a: "Every veterinarian, groomer, and trainer on Pawprint undergoes rigorous background checks, certification checks, and in-person interviews to ensure your pet is in safe hands." },
  { q: "What is your refund and cancellation policy?", a: "You can cancel any booking up to 2 hours before the scheduled time for a full refund. Cancellations made within 2 hours are subject to a nominal cancellation fee." },
  { q: "Can I track my pet during grooming or boarding?", a: "Yes! All grooming pickup vehicles and boarding hosts are equipped with GPS tracking and offer live updates, photos, and video calls directly through your dashboard." }
];

/* ================================================================
   ROUTING & CORE NAVIGATION ENGINE
   ================================================================ */
function nav(pageId, subSvc = null) {
  const pageUrlMap = {
    'home': 'index.html',
    'about': 'about.html',
    'services': 'services.html',
    'adopt': 'adopt.html',
    'lost': 'lost.html',
    'shop': 'shop.html',
    'dog-breeds': 'dog-breeds.html',
    'pet-videos': 'pet-videos.html',
    'dashboard': 'dashboard.html',
    'login': 'login.html',
    'signup': 'signup.html',
    'contact': 'contact.html',
    'vet': 'vet.html'
  };

  // If the target pageId starts with 'svc-', redirect to its physical page
  if (pageId.startsWith('svc-')) {
    let url = `${pageId}.html`;
    if (subSvc) {
      url += `?sub=${encodeURIComponent(subSvc)}`;
    }
    window.location.href = url;
    return;
  }

  const targetUrl = pageUrlMap[pageId] || 'index.html';
  window.location.href = targetUrl;
}

function initPage(pageId) {
  currentPage = pageId;

  // Toggle header (navbar) and chatbot visibility for login/signup pages
  const isAuthPage = ['login', 'signup'].includes(pageId);

  const navbar = document.getElementById('main-navbar');
  if (navbar) {
    navbar.style.display = isAuthPage ? 'none' : 'block';
  }

  const chatbotWrapper = document.getElementById('chatbot-wrapper');
  if (chatbotWrapper) {
    chatbotWrapper.style.display = isAuthPage ? 'none' : 'block';
  }

  // Toggle footer visibility
  const footer = document.getElementById('main-footer');
  if (footer) {
    footer.style.display = isAuthPage ? 'none' : 'block';
  }

  // Handle page-section routing active toggles (for backwards compatibility)
  const sections = document.querySelectorAll('.page-section');
  sections.forEach(s => s.classList.remove('active'));

  // Target standard pages vs service category pages
  if (pageId.startsWith('svc-')) {
    const svcCatPage = document.getElementById('page-svc-cat');
    if (svcCatPage) svcCatPage.classList.add('active');
    renderServiceCategoryPage(pageId);
  } else {
    const targetSection = document.getElementById('page-' + pageId);
    if (targetSection) {
      targetSection.classList.add('active');
    }
  }

  // Update active links state on header
  updateNavHeaderStyles(pageId);

  // Custom trigger loads depending on active page
  if (pageId === 'home') {
    startStatsCounters();
    renderHomeDynamicLists();
  } else if (pageId === 'about') {
    renderAboutTabContent();
  } else if (pageId === 'services') {
    renderServicesCategoriesList();
  } else if (pageId === 'adopt') {
    showAdoptList();
  } else if (pageId === 'vet') {
    showVetList();
  } else if (pageId === 'shop') {
    renderShopCategories();
    renderShopProducts('All');
    renderCartDrawer();
  } else if (pageId === 'lost') {
    setLostTab('browse');
  } else if (pageId === 'dashboard') {
    setDashboardTab(dashboardTab);
    
    // Dynamic greeting & vaccine alert widget updating
    const greetingEl = document.querySelector('#page-dashboard h1') || document.querySelector('.dashboard-greeting-title');
    if (greetingEl) {
      greetingEl.innerHTML = `Good morning, ${currentUser.name} 👋`;
    }
    const vaccineAlertText = document.querySelector('.vaccine-alert-text');
    if (vaccineAlertText) {
      let alertPetName = "Max";
      if (currentUser.name !== "Geetha" && userPets.length > 2) {
        alertPetName = userPets[userPets.length - 1].name;
      } else if (userPets.length > 0) {
        alertPetName = userPets[0].name;
      }
      vaccineAlertText.innerHTML = `🛡️ <strong class="vaccine-alert-pet-name">${alertPetName}'s</strong> booster shot is due in <strong>9 days</strong>. Book a certified clinic vet now to maintain immunity.`;
    }
  } else if (pageId === 'signup') {
    setupVerifyInputs();
  } else if (pageId === 'dog-breeds') {
    initBreedsPage();
  } else if (pageId === 'pet-videos') {
    initPetVideosPage();
  }

  // Scroll to top on load
  window.scrollTo({ top: 0 });

  // Set up Go to Top scroll listener
  setupGoToTop();
}

function setupGoToTop() {
  window.addEventListener('scroll', () => {
    const gotop = document.getElementById('gotop-btn');
    if (gotop) {
      if (window.scrollY > 300) {
        gotop.classList.add('visible');
      } else {
        gotop.classList.remove('visible');
      }
    }
  });
}

// Update Active CSS states on navigation buttons
function updateNavHeaderStyles(pageId) {
  const btns = ['home', 'company', 'services', 'adopt', 'explore'];
  btns.forEach(b => {
    const btn = document.getElementById('nav-btn-' + b);
    if (btn) btn.classList.remove('active');
  });

  // Highlight active main tab
  let activeBtn = null;
  if (pageId === 'home') activeBtn = 'home';
  else if (pageId === 'about' || pageId === 'contact') activeBtn = 'company';
  else if (pageId.startsWith('svc-') || pageId === 'services') activeBtn = 'services';
  else if (pageId === 'adopt') activeBtn = 'adopt';
  else if (['shop', 'lost', 'dog-breeds', 'pet-videos', 'dashboard'].includes(pageId)) activeBtn = 'explore';

  if (activeBtn) {
    const btn = document.getElementById('nav-btn-' + activeBtn);
    if (btn) btn.classList.add('active');
  }
}

// Scrolled Navbar effects
window.addEventListener('scroll', () => {
  const navbar = document.getElementById('main-navbar');
  if (!navbar) return;
  if (window.scrollY > 30) {
    navbar.style.background = 'rgba(245, 241, 235, .97)';
    navbar.style.backdropFilter = 'blur(20px)';
    navbar.style.borderBottom = '1px solid var(--color-border)';
  } else {
    navbar.style.background = 'transparent';
    navbar.style.backdropFilter = 'none';
    navbar.style.borderBottom = 'none';
  }
});

// Dropdowns visibility
function toggleDropdown(dropdownId) {
  const menu = document.getElementById(dropdownId);
  const trigger = menu ? menu.previousElementSibling : null;
  const isCurrentlyOpen = menu && menu.style.display === 'block';

  closeAllDropdowns();
  if (!isCurrentlyOpen && menu) {
    // Remove active highlight from all header buttons
    const btns = ['home', 'company', 'services', 'adopt', 'explore'];
    btns.forEach(b => {
      const btn = document.getElementById('nav-btn-' + b);
      if (btn) btn.classList.remove('active');
    });

    menu.style.display = 'block';
    if (trigger) {
      trigger.classList.add('active');
    }
  }
}

function closeAllDropdowns() {
  const dropdowns = document.querySelectorAll('.dropdown-menu');
  dropdowns.forEach(d => d.style.display = 'none');

  const mega = document.getElementById('mega-menu');
  if (mega) {
    mega.style.display = 'none';
  }

  const triggers = document.querySelectorAll('.nav-trigger');
  triggers.forEach(t => {
    t.classList.remove('active');
  });

  // Restore only the current active page header button highlight
  updateNavHeaderStyles(currentPage);
}

// Close dropdowns when clicking outside
document.addEventListener('mousedown', (e) => {
  if (!e.target.closest('.nav-dropdown')) {
    closeAllDropdowns();
  }
});

/* ================================================================
   MEGA MENU BUILDER
   ================================================================ */
function toggleMegaMenu() {
  const mega = document.getElementById('mega-menu');
  const trigger = document.getElementById('nav-btn-services');
  const isCurrentlyOpen = mega.style.display === 'flex';

  closeAllDropdowns();
  if (isCurrentlyOpen) {
    mega.style.display = 'none';
    if (trigger) trigger.classList.remove('active');
  } else {
    // Remove active highlight from all header buttons
    const btns = ['home', 'company', 'services', 'adopt', 'explore'];
    btns.forEach(b => {
      const btn = document.getElementById('nav-btn-' + b);
      if (btn) btn.classList.remove('active');
    });

    mega.style.display = 'flex';
    if (trigger) trigger.classList.add('active');
    renderMegaMenuCats();
  }
}

function renderMegaMenuCats() {
  const list = document.getElementById('mega-cats-list');
  if (!list) return;

  list.innerHTML = SERVICE_CATS.map(sc => {
    const isActive = sc.cat === activeServiceCat;
    return `
      <button onmouseenter="setActiveMegaCat('${sc.cat}')" onclick="nav('${sc.page}')" class="mega-cat-btn ${isActive ? 'active' : ''}">
        <span style="font-size: 17px;">${sc.icon}</span>
        <span>${sc.cat}</span>
        <svg style="margin-left: auto; opacity: .4;" width="7" height="12" viewBox="0 0 7 12" fill="none"><path d="M1 1l5 5-5 5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
      </button>
    `;
  }).join('');

  // Update active category subitems details
  const activeCatData = SERVICE_CATS.find(c => c.cat === activeServiceCat) || SERVICE_CATS[0];
  document.getElementById('mega-active-icon').textContent = activeCatData.icon;
  document.getElementById('mega-active-cat').textContent = activeCatData.cat;

  const viewAllBtn = document.getElementById('mega-view-all-btn');
  if (viewAllBtn) {
    viewAllBtn.onclick = () => nav(activeCatData.page);
  }

  const itemsGrid = document.getElementById('mega-active-items');
  itemsGrid.innerHTML = activeCatData.items.map(it => `
    <button onclick="nav('${it.page}', '${it.label}')" class="mega-subitem-btn">
      <span style="width: 5px; height: 5px; border-radius: 50%; background: var(--color-orange); flex-shrink: 0; display: inline-block;"></span>
      ${it.label}
    </button>
  `).join('');
}

function setActiveMegaCat(catName) {
  activeServiceCat = catName;
  renderMegaMenuCats();
}

// Close mega-menu on mouseleave is handled in setupHoverNavigation

/* ================================================================
   DYNAMIC HOME PAGE COMPILING
   ================================================================ */
function renderHomeDynamicLists() {
  // 1. Bottom Services bar
  const sBar = document.getElementById('home-services-bar');
  if (sBar) {
    const bars = [
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
    ];
    sBar.innerHTML = bars.map((s, i) => `
      <button onclick="nav('${s.page}')" class="home-svc-bar-item" style="border-right: ${i < bars.length - 1 ? '1px solid var(--color-border)' : 'none'};">
        <span style="font-size: 17px;">${s.icon}</span>
        <span style="font-size: 10px; color: var(--color-ink-sft); font-weight: 600; letter-spacing: .04em; text-transform: uppercase; white-space: nowrap;">${s.label}</span>
      </button>
    `).join('');
  }

  // 2. Marquee
  const marquee = document.querySelector('.marquee-sub');
  if (marquee) {
    const items = ["Pet Adoption", "Veterinary Care", "Grooming", "Training", "Smart Tracking", "Pet Shop", "Boarding", "Emergency Care", "AI Health", "Lost & Found"];
    const all = [...items, ...items];
    marquee.innerHTML = all.map(t => `
      <span style="color: rgba(255,255,255,.45); font-size: 11px; font-weight: 700; letter-spacing: .1em; text-transform: uppercase; white-space: nowrap; display: flex; align-items: center; gap: 20px;">
        ${t} <span style="color: var(--color-orange); font-size: 7px;">◆</span>
      </span>
    `).join('');
  }

  // 3. Features
  const features = [
    { icon: "🏥", title: "Veterinary Care", sub: "Book certified vets — home, clinic, or video.", color: C.blue, page: "vet", img: P.vet1 },
    { icon: "✂️", title: "Grooming", sub: "Professional grooming with pickup & drop.", color: C.green, page: "svc-grooming", img: P.groom },
    { icon: "🎓", title: "Training", sub: "Certified trainers using positive methods.", color: C.orange, page: "svc-training", img: P.train },
  ];
  const featuresList = document.getElementById('home-features-list');
  if (featuresList) {
    featuresList.innerHTML = features.map(f => `
      <div class="card card-lift" onclick="nav('${f.page}')" style="display: grid; grid-template-columns: 1fr 200px; cursor: pointer; height: 165px;">
        <div style="padding: 20px 24px; display: flex; flex-direction: column; justify-content: flex-start;">
          <div>
            <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 16px;">
              <span style="font-size: 24px;">${f.icon}</span>
              <h3 class="melody" style="font-size: 22px; font-weight: 700; color: var(--color-ink);">${f.title}</h3>
            </div>
            <p style="font-size: 13.5px; color: var(--color-ink-sft); line-height: 1.45;">${f.sub}</p>
          </div>
          <span style="font-size: 13px; font-weight: 700; color: ${f.color}; margin-top: auto;">Explore → ${f.title}</span>
        </div>
        <div style="overflow: hidden;">
          <img src="${f.img}" style="width: 100%; height: 100%; object-fit: cover;" alt="${f.title}">
        </div>
      </div>
    `).join('');
  }

  // 4. Adoption showcase
  const adoptGrid = document.getElementById('home-adopt-grid');
  if (adoptGrid) {
    const adoptPets = ALL_PETS.slice(0, 4);
    adoptGrid.innerHTML = adoptPets.map(p => `
      <div class="bento-pet-card" onclick="nav('adopt')">
        <div class="photo-box">
          <img src="${p.img}" alt="${p.name}">
          ${p.vacc ? '<div class="badge-box">Vaccinated</div>' : ''}
        </div>
        <div class="info-grid">
          <div class="info-main">
            <div class="pet-name">${p.name}</div>
            <div class="pet-meta">${p.breed} · ${p.loc}</div>
          </div>
          <div class="info-chip">${p.age}</div>
          <div class="info-chip">${p.gender}</div>
          <button class="info-action" onclick="event.stopPropagation(); nav('adopt')">
            Adopt →
          </button>
        </div>
      </div>
    `).join('');
  }

  // 5. Testimonials
  renderHomeTestimonials();

  // 6. FAQs
  const faqList = document.getElementById('home-faqs-list');
  if (faqList) {
    faqList.innerHTML = faqs.slice(0, 5).map((f, i) => `
      <div style="background: var(--color-white); border-radius: 16px; border: 1px solid var(--color-border); overflow: hidden;">
        <button onclick="toggleFaq(${i})" style="width: 100%; display: flex; justify-content: space-between; align-items: center; padding: 20px 26px; background: none; border: none; cursor: pointer; text-align: left;">
          <span style="font-size: 15px; font-weight: 600; color: var(--color-ink); padding-right: 20px; line-height: 1.4;">${f.q}</span>
          <div id="faq-indicator-${i}" style="width: 28px; height: 28px; border-radius: 50%; background: var(--color-cream-dk); display: flex; align-items: center; justify-content: center; flex-shrink: 0; transition: background .2s;">
            <span id="faq-plus-${i}" style="color: var(--color-ink-sft); font-size: 18px; line-height: 1; display: block; transition: transform .25s;">+</span>
          </div>
        </button>
        <div id="faq-body-${i}" style="display: none; padding: 0 26px 20px;">
          <p style="font-size: 14px; color: var(--color-ink-sft); line-height: 1.8; border-top: 1px solid var(--color-border); padding-top: 16px;">${f.a}</p>
        </div>
      </div>
    `).join('');
  }
}

// Testimonials Bento Grid Renderer
function renderHomeTestimonials() {
  const container = document.getElementById('testi-cards-list');
  const dotsList = document.getElementById('testi-dots');
  if (!container) return;

  // Render dots if element exists
  if (dotsList) {
    dotsList.innerHTML = testis.map((_, i) => `
      <button onclick="setActiveTestimonial(${i})"
        style="width: ${i === activeTesti ? '32px' : '10px'}; height: 10px; border-radius: 100px; background: ${i === activeTesti ? 'var(--color-orange)' : 'var(--color-sand)'}; border: none; transition: all .3s; cursor: pointer;"></button>
    `).join('');
  }

  container.innerHTML = testis.map((t, i) => {
    const active = i === activeTesti;
    const themes = ['theme-warm', 'theme-blue', 'theme-green', 'theme-pink', 'theme-orange'];
    const theme = themes[i % themes.length];
    return `
      <div onclick="setActiveTestimonial(${i})" class="dog-card ${theme}" style="
        transform: ${active ? 'translateY(-6px) scale(1.02)' : 'translateY(0)'};
        box-shadow: ${active ? '0 20px 40px rgba(0,0,0,0.12)' : 'none'};">
        <div class="ear-left"></div>
        <div class="ear-right"></div>
        <div class="tail"></div>
        <div class="dog-card-body">
          <div class="paw-watermark">🐾</div>
          
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
            <span style="font-size: 11px; font-weight: 700; text-transform: uppercase; background: rgba(229,93,26,.12); color: var(--color-orange); padding: 4px 12px; border-radius: 100px; letter-spacing: .02em;">${t.badge}</span>
          </div>
          
          <p style="font-size: 14px; line-height: 1.6; color: var(--color-ink-md); margin-bottom: 16px; font-style: italic; display: -webkit-box; -webkit-line-clamp: 4; -webkit-box-orient: vertical; overflow: hidden;">"${t.text}"</p>
          
          <div style="display: flex; gap: 12px; align-items: center; margin-top: auto;">
            <div style="width: 40px; height: 40px; border-radius: 50%; background: var(--color-orange); display: flex; align-items: center; justify-content: center; font-weight: 700; font-size: 13px; color: #fff;">${t.initials}</div>
            <div>
              <div style="font-weight: 700; font-size: 13.5px; color: var(--color-ink);">${t.name}</div>
              <div style="font-size: 11px; color: var(--color-ink-sft); margin-top: 1px;">${t.role} · ${t.city}</div>
            </div>
          </div>
          
          <div class="nose-dot"></div>
        </div>
      </div>
    `;
  }).join('');
}

function setActiveTestimonial(idx) {
  activeTesti = idx;
  renderHomeTestimonials();
}

function toggleFaq(idx) {
  const body = document.getElementById('faq-body-' + idx);
  const ind = document.getElementById('faq-indicator-' + idx);
  const plus = document.getElementById('faq-plus-' + idx);

  if (body.style.display === 'block') {
    body.style.display = 'none';
    ind.style.background = 'var(--color-cream-dk)';
    plus.style.color = 'var(--color-ink-sft)';
    plus.style.transform = 'rotate(0deg)';
  } else {
    body.style.display = 'block';
    ind.style.background = 'var(--color-orange)';
    plus.style.color = '#fff';
    plus.style.transform = 'rotate(45deg)';
  }
}

// ── Stats Counter interpolation ─────────────────────────────────────
function startStatsCounters() {
  const statsList = [
    { target: 45000, label: "Happy Pets", suffix: "+" },
    { target: 8200, label: "Adoptions", suffix: "+" },
    { target: 1200, label: "Vet Partners", suffix: "+" },
    { target: 85, label: "Cities", suffix: "" }
  ];

  const statsContainer = document.getElementById('home-stats-bar');
  if (!statsContainer) return;

  statsContainer.innerHTML = statsList.map((s, i) => `
    <div style="text-align: center;">
      <div id="stat-counter-${i}" class="melody" style="font-size: 52px; font-weight: 700; color: #fff; line-height: 1;">0${s.suffix}</div>
      <div style="font-size: 14px; color: rgba(255,255,255,.65); margin-top: 6px;">${s.label}</div>
    </div>
  `).join('');

  statsList.forEach((stat, idx) => {
    const el = document.getElementById(`stat-counter-${idx}`);
    let start = performance.now();
    const duration = 1800;

    const tick = (now) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const easeProgress = 1 - Math.pow(1 - progress, 3); // Cubic Ease Out
      const val = Math.floor(easeProgress * stat.target);

      if (el) {
        el.textContent = val.toLocaleString() + stat.suffix;
      }
      if (progress < 1) {
        requestAnimationFrame(tick);
      }
    };
    requestAnimationFrame(tick);
  });
}

/* ================================================================
   DYNAMIC ABOUT PAGE COMPILING
   ================================================================ */
function renderAboutTabContent() {
  // 1. Values
  const valGrid = document.getElementById('about-values-grid');
  if (valGrid) {
    valGrid.innerHTML = values.map(v => `
      <div class="value-card" style="--card-bg: ${v.bg}; --card-border: ${v.border}; --card-accent: ${v.accent}; --card-hover-bg: linear-gradient(145deg, ${v.bg} 0%, #FFFFFF 100%); --card-shadow: 0 20px 40px rgba(${v.shadowRgb}, 0.12);">
        <div class="value-icon">${v.icon}</div>
        <div class="value-title melody">${v.title}</div>
        <p class="value-desc">${v.desc}</p>
        <svg class="card-paw-watermark" viewBox="0 0 24 24" fill="currentColor">
          <circle cx="7.5" cy="9.5" r="2" />
          <circle cx="10.5" cy="6.5" r="2" />
          <circle cx="14.5" cy="6.5" r="2" />
          <circle cx="17.5" cy="9.5" r="2" />
          <path d="M12 11.5c-2 0-3.5 1.5-3.5 3.5 0 2.5 1.5 4 3.5 4s3.5-1.5 3.5-4c0-2-1.5-3.5-3.5-3.5z" />
        </svg>
      </div>
    `).join('');
  }

  // 2. Timeline (2023 - 2026)
  const tmGrid = document.getElementById('about-timeline-grid');
  if (tmGrid) {
    tmGrid.innerHTML = milestones.map((m, i) => `
      <div style="padding-top: 56px; position: relative; display: flex; flex-direction: column; height: 100%;">
        <!-- Dot -->
        <div class="timeline-dot-wrap" style="position: absolute; top: 16px; left: 50%; transform: translateX(-50%); z-index: 2;">
          <div class="${i === 3 ? 'timeline-glow-dot' : ''}" style="width: 24px; height: 24px; border-radius: 50%;
            background: ${i === 3 ? 'var(--color-orange)' : 'var(--color-ink-md)'};
            border: 3px solid ${i === 3 ? 'var(--color-orange)' : 'rgba(255,255,255,.3)'};
            box-shadow: ${i === 3 ? '0 0 0 6px rgba(229, 93, 26, 0.18)' : 'none'};"></div>
        </div>
        <!-- Card -->
        <div class="card-lift" style="flex: 1; background: rgba(255,255,255,.06); border: 1px solid rgba(255,255,255,.08); border-radius: 16px; padding: 22px 20px; border-top: ${i === 3 ? '3px solid var(--color-orange)' : '1px solid rgba(255,255,255,.08)'}; text-align: center; display: flex; flex-direction: column; justify-content: flex-start; height: 100%;">
          <div style="font-size: 11px; font-weight: 700; letter-spacing: .08em; text-transform: uppercase; color: var(--color-orange); margin-bottom: 6px;">${m.year}</div>
          <div class="melody" style="font-size: 19px; color: #fff; margin-bottom: 8px; line-height: 1.1;">${m.title}</div>
          <p style="font-size: 12px; color: rgba(255,255,255,.45); line-height: 1.7; margin: 0;">${m.desc}</p>
        </div>
      </div>
    `).join('');
  }

  // 3. Founders side-by-side grid
  const leaderGrid = document.getElementById('leadership-grid');
  if (leaderGrid) {
    leaderGrid.innerHTML = leadership.map(l => `
      <div class="card card-lift founder-card" style="position: relative; overflow: hidden; border-radius: 20px; background: var(--color-white); border: 1px solid var(--color-border-md); display: flex; flex-direction: column; height: 100%;">
        <div style="height: 180px; overflow: hidden; position: relative;">
          <img src="${l.img}" style="width: 100%; height: 100%; object-fit: cover; transition: transform 0.5s cubic-bezier(0.22, 1, 0.36, 1);" alt="${l.name}">
        </div>
        <div style="padding: 16px; display: flex; flex-direction: column; flex: 1; justify-content: space-between;">
          <div style="margin-bottom: 14px;">
            <div class="pill pill-orange" style="font-size: 9px; padding: 3px 8px; margin-bottom: 10px; width: fit-content; text-transform: uppercase;">${l.role}</div>
            <h3 class="melody" style="font-size: 18px; color: var(--color-ink); margin-bottom: 4px; line-height: 1.1;">${l.name}</h3>
          </div>
          <div>
            <a href="${l.linkedin}" target="_blank" class="btn btn-sm btn-outline" style="width: 100%; border-radius: 10px; border: 1.5px solid var(--color-border-md); font-size: 11px; padding: 7px; justify-content: center;">
              <span style="font-weight: 800; font-family: sans-serif; margin-right: 4px; font-size: 12px;">in</span> LinkedIn Profile
            </a>
          </div>
        </div>
      </div>
    `).join('');
  }

  // 4. Extended Team Scrolling Marquee
  const teamMarquee = document.getElementById('about-extended-team-marquee');
  if (teamMarquee) {
    const doubleTeam = [...extended, ...extended];
    teamMarquee.innerHTML = doubleTeam.map(t => `
      <div class="card card-lift team-bento-card" style="width: 240px; height: 240px; flex-shrink: 0; border-radius: 24px; position: relative; overflow: hidden; border: 1px solid var(--color-border-md);">
        <img src="${t.img}" style="width: 100%; height: 100%; object-fit: cover;" alt="${t.name}">
        <div style="position: absolute; inset: 0; background: linear-gradient(to top, rgba(17,17,17,0.85) 0%, rgba(17,17,17,0.2) 60%, transparent 100%); z-index: 1;"></div>
        <!-- Text overlay -->
        <div style="position: absolute; bottom: 0; left: 0; right: 0; padding: 18px; display: flex; flex-direction: column; z-index: 2;">
          <span style="font-size: 10px; font-weight: 700; text-transform: uppercase; color: var(--color-orange); letter-spacing: 0.05em; margin-bottom: 2px;">${t.role}</span>
          <span class="melody" style="font-size: 22px; color: #fff; line-height: 1.1;">${t.name}</span>
        </div>
        <!-- Hover details overlay -->
        <div class="team-bento-hover" style="position: absolute; inset: 0; background: rgba(17,17,17,0.92); padding: 20px; display: flex; flex-direction: column; justify-content: center; text-align: center; opacity: 0; transition: opacity 0.3s cubic-bezier(0.22, 1, 0.36, 1); z-index: 3; pointer-events: none;">
          <span style="font-size: 13.5px; color: rgba(255,255,255,0.8); line-height: 1.6; font-style: italic;">"${t.note}"</span>
        </div>
      </div>
    `).join('');
  }
}

function renderServicesCategoriesList() {
  const container = document.getElementById('services-categories-list');
  if (!container) return;

  container.className = 'services-bento-grid';

  const cats = [
    { icon: "🏥", name: "Health & Care", page: "svc-health", color: C.blue, img: P.vet1, price: "from ₹149", tagline: "Expert medical care for every stage of life.", desc: "From routine checkups and vaccinations to emergency surgeries and physiotherapy — our 1,200+ certified vets have every health need covered.", highlights: ["General Checkups", "Vaccinations", "Emergency Care", "Surgery", "Dental Care", "Puppy & Senior Care"], stats: [["1,200+", "Vets"], ["24/7", "Emergency"], ["4.9★", "Rating"]], layout: 'wide' },
    { icon: "✂️", name: "Grooming & Hygiene", page: "svc-grooming", color: C.green, img: P.groom, price: "from ₹149", tagline: "Professional pampering, every time.", desc: "Certified groomers, premium cruelty-free products, and free pickup & drop — so your pet always walks out looking (and smelling) incredible.", highlights: ["Full Grooming", "Bath & Blow Dry", "Nail Clipping", "De-shedding", "Flea Bath", "Skin & Coat Treatment"], stats: [["500+", "Groomers"], ["Pickup", "& Drop Free"], ["4.9★", "Rating"]], layout: 'standard' },
    { icon: "🎓", name: "Training & Behavior", page: "svc-training", color: C.orange, img: P.train, price: "from ₹799/mo", tagline: "Force-free training that actually works.", desc: "CPDT-certified trainers using only positive reinforcement — from basic puppy commands to obedience, behavioural correction, and therapy dog prep.", highlights: ["Puppy Training", "Obedience Training", "Behavioral Correction", "Aggression Management", "Therapy Dog Training", "Leash Training"], stats: [["200+", "Trainers"], ["98%", "Success Rate"], ["Force-Free", "Methods"]], layout: 'tall' },
    { icon: "🏠", name: "Boarding & Sitting", page: "svc-boarding", color: "#7C3AED", img: P.boarding, price: "from ₹299/visit", tagline: "Safe, loving care when you can't be there.", desc: "CCTV-monitored facilities, background-checked home sitters, cage-free options, and daily photo updates — your pet is always in the best hands.", highlights: ["Dog Boarding", "Luxury Boarding", "Dog Daycare", "Pet Sitting", "Cage-Free Boarding", "Puppy Daycare"], stats: [["CCTV", "24/7"], ["Daily", "Updates"], ["4.9★", "Rating"]], layout: 'wide' },
    { icon: "🏃", name: "Activity & Lifestyle", page: "svc-activity", color: "#D97706", img: P.dog3, price: "from ₹199/walk", tagline: "Active pets are happy pets.", desc: "GPS-tracked walks, canine fitness programmes, adventure hikes, swimming sessions, and outdoor socialisation — keeping your dog physically and mentally thriving.", highlights: ["Dog Walking", "Exercise Sessions", "Adventure Walks", "Swimming Sessions", "Hiking Trips", "Dog Park Visits"], stats: [["GPS", "Every Walk"], ["Insured", "Walkers"], ["10K+", "Walks Done"]], layout: 'standard' },
    { icon: "⭐", name: "Specialty Services", page: "svc-specialty", color: C.red, img: P.about1, price: "Varies", tagline: "Unique care for life's special moments.", desc: "From pet photography and dog parties to hospice care, microchipping, pet relocation, and emotional support dog training — specialised services for when standard isn't enough.", highlights: ["Pet Photography", "Microchipping", "Pet Relocation", "Dog Events & Parties", "Hospice Care", "Rehabilitation Therapy"], stats: [["Specialist", "Team"], ["100%", "Compassionate"], ["5,000+", "Families Helped"]], layout: 'standard' },
    { icon: "🛍️", name: "Retail & Extras", page: "svc-retail", color: "#0EA5E9", img: P.shop1, price: "from ₹99", tagline: "Curated premium products for healthy pets.", desc: "Premium food, toys, accessories, grooming products, training tools, and travel essentials — vet-reviewed and delivered fast.", highlights: ["Dog Food", "Toys", "Collars & Leashes", "Grooming Products", "Training Tools", "Travel Accessories"], stats: [["1,000+", "Products"], ["Vet", "Reviewed"], ["Next-Day", "Delivery"]], layout: 'full' },
  ];

  container.innerHTML = cats.map((cat, index) => {
    return `
      <div class="bento-card card-lift" style="cursor: pointer; border-top: 4px solid ${cat.color};" onclick="nav('${cat.page}')">
        <div style="height: 180px; overflow: hidden; position: relative;">
          <img src="${cat.img}" style="width: 100%; height: 100%; object-fit: cover;" alt="${cat.name}">
          <div style="position: absolute; bottom: 12px; left: 16px; display: flex; align-items: center; gap: 8px; z-index: 2;">
            <span style="font-size: 20px;">${cat.icon}</span>
            <span class="melody" style="color: #fff; font-size: 20px; line-height: 1;">${cat.name}</span>
          </div>
          <div style="position: absolute; inset: 0; background: linear-gradient(to top, rgba(0,0,0,.65) 0%, transparent 60%);"></div>
          <div style="position: absolute; top: 12px; right: 12px; background: rgba(0,0,0,.6); border-radius: 100px; padding: 4px 12px; z-index: 2;">
            <span style="color: #fff; font-size: 11px; font-weight: 700;">${cat.price}</span>
          </div>
        </div>
        <div style="padding: 24px; flex: 1; display: flex; flex-direction: column; justify-content: space-between;">
          <div>
            
            <!-- Stats row -->
            <div style="display: flex; margin-bottom: 18px;">
              <div style="flex: 1; text-align: center; border-right: 1px solid var(--color-border);">
                <div class="melody" style="font-size: 20px; color: ${cat.color}; line-height: 1;">${cat.stats[0][0]}</div>
                <div style="font-size: 10px; color: var(--color-ink-sft); margin-top: 3px;">${cat.stats[0][1]}</div>
              </div>
              <div style="flex: 1; text-align: center;">
                <div class="melody" style="font-size: 20px; color: ${cat.color}; line-height: 1;">${cat.stats[1][0]}</div>
                <div style="font-size: 10px; color: var(--color-ink-sft); margin-top: 3px;">${cat.stats[1][1]}</div>
              </div>
            </div>

            <!-- Explore Button -->
            <button class="btn btn-md" style="width: 100%; background: ${cat.color}; color: #fff; box-shadow: 0 4px 12px ${cat.color}25; justify-content: center; font-weight: 700;" onclick="event.stopPropagation(); nav('${cat.page}')">
              Explore ${cat.name} →
            </button>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

// ── Service category pages template builder ──────────────────────────
const servicePagesData = {
  "svc-health": {
    cat: "Health & Care", icon: "🏥", color: C.blue, heroImg: P.vet1, tagline: "Expert Care,\nHealthier Lives.",
    about: "Certified veterinarians, advanced diagnostics, and compassionate care — for every stage of your pet's life.",
    whyUs: { stats: [["1,200+", "Certified Vets"], ["24/7", "Emergency Care"], ["4.9★", "Average Rating"], ["50K+", "Consultations"]], points: [{ icon: "🏥", title: "Certified Vets Only", desc: "Every vet on Pawprint is VCPN-verified with minimum 3 years of clinical experience." }, { icon: "🔬", title: "Evidence-Based Medicine", desc: "We follow the latest veterinary clinical guidelines — no guesswork, only science." }, { icon: "📋", title: "Digital Health Records", desc: "Every visit, prescription, and report is stored securely and accessible anytime." }, { icon: "🚑", title: "24/7 Emergency", desc: "Our emergency line and rapid-response vets are available round the clock." }] },
    faqItems: [{ q: "How often should I take my dog for a checkup?", a: "Healthy adult dogs benefit from bi-annual checkups. Puppies and senior dogs (7+) should visit every 3–4 months." }, { q: "Are your vets qualified?", a: "All Pawprint vets hold a BVSc or MVSc degree and are registered with the Veterinary Council of India." }, { q: "Can I consult online first?", a: "Absolutely. Our video consultation service connects you with a vet in minutes — available 24/7." }, { q: "What vaccines does my puppy need?", a: "Core vaccines include Distemper, Parvovirus, Hepatitis, and Rabies. Our vets will create a tailored schedule at your first visit." }, { q: "Do you offer home visits?", a: "Yes. All services, including checkups, vaccinations, and deworming, are available as home visits at a small additional charge." }],
    services: [
      { name: "General Checkups", price: "₹299", duration: "30 min", rating: "4.9", img: P.vet1, shortDesc: "Full physical examination, vitals check, and health assessment by a certified vet.", desc: "Our general checkup includes a comprehensive nose-to-tail physical examination. The vet checks eyes, ears, teeth, skin, coat, weight, and all vital signs. You'll receive a written health report and recommendations.", includes: ["Full physical examination", "Vitals & weight check", "Parasite screening", "Dietary recommendations", "Written health report", "Follow-up advice"] },
      { name: "Vaccinations", price: "₹199", duration: "20 min", rating: "4.9", img: P.vet2, shortDesc: "All core and lifestyle vaccines administered by certified veterinarians with digital records.", desc: "We offer complete vaccination drives covering all core vaccines (Distemper, Parvovirus, Rabies) and lifestyle vaccines. You receive a digital health passport with all records and smart reminders for upcoming doses.", includes: ["Core & lifestyle vaccines", "Digital health passport", "Vaccine certificate", "Smart reminder setup", "Post-vaccine guidance", "Free 24h helpline"] },
      { name: "Deworming", price: "₹149", duration: "15 min", rating: "4.8", img: P.groom, shortDesc: "Safe, vet-prescribed deworming treatments for all ages and breeds.", desc: "Deworming is essential every 3–6 months. Our vets assess your pet's weight, age, and risk factors to prescribe the right treatment. Includes follow-up to ensure full efficacy.", includes: ["Weight-based dosing", "Broad-spectrum coverage", "Puppy-safe options", "Follow-up check", "Treatment record", "Preventive schedule"] },
      { name: "Flea & Tick Treatment", price: "₹349", duration: "30 min", rating: "4.8", img: P.train, shortDesc: "Effective flea and tick prevention and treatment for a comfortable, healthy pet.", desc: "Our certified vets provide both topical and systemic flea & tick treatments, selecting the safest and most effective option for your pet's breed, age, and lifestyle.", includes: ["Vet-selected product", "Topical or oral option", "Environmental advice", "Collar options", "Safe for all ages", "Monthly plan available"] },
      { name: "Dental Care", price: "₹599", duration: "45 min", rating: "4.7", img: P.vet1, shortDesc: "Professional dental cleaning and oral health assessment to prevent disease.", desc: "Periodontal disease affects 80% of dogs over 3. Our dental care service includes professional scaling, polishing, full oral exam, and a home care plan.", includes: ["Professional scaling", "Polishing", "Full oral examination", "X-ray if needed", "Home care kit", "Dietary guidance"] },
      { name: "Spay & Neuter", price: "₹3,999", duration: "2–3 hrs", rating: "4.9", img: P.vet2, shortDesc: "Safe, medically supervised spay and neuter procedures by experienced surgeons.", desc: "Our spay/neuter surgeries are performed by experienced veterinary surgeons with full pre-op bloodwork, anesthesia monitoring, and post-op care included.", includes: ["Pre-op blood panel", "General anesthesia", "Expert surgery", "Post-op care kit", "Pain management", "Free follow-up visit"] },
      { name: "Emergency Care", price: "₹999", duration: "On-Demand", rating: "4.9", img: P.vet1, shortDesc: "Urgent veterinary consultation and stabilizing care, available 24/7.", desc: "For immediate medical attention when your pet is in distress or injured. Our trauma-ready veterinary team is always on call to provide critical stabilization, pain management, and diagnostics.", includes: ["24/7 priority triage", "Immediate vitals check", "Oxygen therapy if needed", "Critical diagnostics", "Stabilizing treatment", "Emergency referral support"] },
      { name: "Surgery", price: "from ₹4,999", duration: "Varies", rating: "4.9", img: P.vet2, shortDesc: "Soft-tissue, orthopedic, and minor surgical procedures by senior surgeons.", desc: "Safe, sterile surgical interventions using state-of-the-art anesthesia monitoring. Includes comprehensive pre-op workup and intensive post-operative care planning.", includes: ["Pre-anesthetic blood work", "Isoflurane gas anesthesia", "Continuous vitals monitoring", "Certified surgical assistants", "Post-op pain management", "Suture removal checks"] },
      { name: "Nutrition Consultation", price: "₹499", duration: "45 min", rating: "4.8", img: P.shop1, shortDesc: "Tailored diet plan and weight management advice from pet nutrition experts.", desc: "Get a personalized nutritional analysis based on your pet's breed, age, weight, and health status. Perfect for treating food allergies, obesity, or chronic illnesses.", includes: ["Detailed calorie needs analysis", "Custom meal formulation", "Allergen elimination guide", "Weight management plan", "Smart feeding schedules", "15-day chat support"] },
      { name: "Senior Dog Care", price: "₹799", duration: "60 min", rating: "4.9", img: P.dog3, shortDesc: "Comprehensive wellness check, mobility assessments, and age-specific health care.", desc: "Designed for pets aged 7 and above. We screen for early signs of arthritis, cognitive decline, organ failure, and other age-related conditions to ensure comfortable golden years.", includes: ["Arthritis & mobility screening", "Senior blood profile check", "Organ function assessment", "Joint supplement guidance", "Cognitive wellness tips", "Home adjustments consultation"] },
      { name: "Puppy Care", price: "₹599", duration: "45 min", rating: "4.9", img: P.dog4, shortDesc: "Growth tracking, wellness check, basic screening, and developmental guidance.", desc: "Give your new family member the best start. We cover physical checks, weight tracking, parasite screening, and vital developmental advice on socialization and behavior.", includes: ["Growth & developmental assessment", "First parasite screening", "Vaccination scheduling", "Socialization advice", "Puppy feeding guide", "Flea/tick prevention plan"] },
      { name: "Physiotherapy & Rehab", price: "₹899", duration: "60 min", rating: "4.8", img: P.train, shortDesc: "Post-surgery recovery, laser therapy, and exercises to rebuild muscle and mobility.", desc: "Targeted physical rehabilitation for dogs recovering from spinal issues, bone fractures, or joint surgery. Uses laser therapy, passive stretching, and assisted movements.", includes: ["Individual mobility assessment", "Targeted stretching & massage", "Cold laser therapy session", "Muscle-building exercises", "Home rehab program card", "Progress tracking report"] }
    ]
  },
  "svc-grooming": {
    cat: "Grooming & Hygiene", icon: "✂️", color: C.green, heroImg: P.groom, tagline: "Looking Good,\nFeeling Great.",
    about: "Certified groomers, premium products, and stress-free sessions — because your pet deserves to look and feel their very best.",
    whyUs: { stats: [["500+", "Certified Groomers"], ["4.9★", "Client Rating"], ["Pickup", "& Drop Free"], ["All", "Breeds Welcome"]], points: [{ icon: "✂️", title: "Breed-Certified Groomers", desc: "All groomers complete a 120-hour breed-specific certification programme." }, { icon: "🌿", title: "Premium Products", desc: "We use only pet-safe, cruelty-free, dermatologically tested grooming products." }, { icon: "🚗", title: "Free Pickup & Drop", desc: "Available in all major cities — we come to you, saving you time and stress." }, { icon: "📸", title: "Before & After Photos", desc: "We capture the transformation so you can share your pet's glow-up." }] },
    faqItems: [{ q: "How often should I groom my dog?", a: "Most dogs benefit from professional grooming every 4–8 weeks depending on breed and coat type. Double-coated breeds may need more frequent de-shedding." }, { q: "Is your grooming salon safe for anxious pets?", a: "Yes. We use calm, force-free handling techniques. For very anxious pets, we offer one-on-one sessions with extra patience and breaks." }, { q: "Do you offer mobile grooming?", a: "We offer pickup and drop at no extra charge. Full mobile grooming vans are available in select cities." }, { q: "What shampoo do you use?", a: "We use pH-balanced, breed-appropriate shampoos — medicated options are available for skin conditions on vet recommendation." }, { q: "Can I request a specific grooming style?", a: "Absolutely. Bring reference photos and our groomers will do their best to achieve your desired look." }],
    services: [
      { name: "Full Grooming", price: "₹799", duration: "90 min", rating: "4.9", img: P.groom, shortDesc: "Complete bath, haircut, nail trim, ear clean, and finishing — the full spa experience.", desc: "Our full grooming session covers everything your pet needs: breed-specific shampoo bath, blow dry, haircut, nail clipping, ear cleaning, and a final fragrance spritz. Walk in, walk out pampered.", includes: ["Breed-specific bath", "Professional blow dry", "Custom haircut", "Nail clipping", "Ear cleaning", "Fragrance & bow"] },
      { name: "Bath & Blow Dry", price: "₹399", duration: "45 min", rating: "4.8", img: P.groom, shortDesc: "Thorough medicated or regular bath followed by professional blow dry and brush-out.", desc: "A deep cleanse with premium, pet-safe shampoo followed by a professional blow dry and thorough brush-out to leave your pet's coat clean, tangle-free, and glossy.", includes: ["Medicated or regular shampoo", "Conditioning treatment", "Professional blow dry", "Brush-out", "Coat check", "Basic hygiene check"] },
      { name: "Hair Trimming & Styling", price: "₹499", duration: "60 min", rating: "4.8", img: P.groom, shortDesc: "Expert breed-standard and custom styling by certified groomers.", desc: "Our groomers are trained in breed standards as well as custom cuts. Whether it's a precise Poodle clip or a practical trim, we deliver clean, consistent results.", includes: ["Breed-standard or custom cut", "Scissor & clipper finishing", "Fringe & face trim", "Paw & sanitary trim", "Final inspection", "Style photo"] },
      { name: "Nail Clipping", price: "₹149", duration: "15 min", rating: "4.9", img: P.groom, shortDesc: "Safe, stress-free nail trimming with grinding option for perfectly smooth edges.", desc: "Overgrown nails can cause pain and postural issues. Our groomers use sharp, proper-sized clippers with an optional grinder finish to ensure smooth, safe nails.", includes: ["All four paws", "Quick detection & care", "Grinder finish option", "Paw massage", "Paw pad check", "Moisturiser application"] },
      { name: "Ear Cleaning", price: "₹149", duration: "15 min", rating: "4.8", img: P.groom, shortDesc: "Safe, gentle ear cleaning to prevent yeast and bacterial infections.", desc: "We use veterinary-approved ear flushes to remove wax, dirt, and debris. Includes checking for redness, discharge, or signs of ear mites to keep ears clean and healthy.", includes: ["Gentle debris flushing", "Wax removal with sterile cotton", "Yeast & infection check", "Soothing anti-itch drops", "Ear hair trimming if needed", "Care tips for home"] },
      { name: "Teeth Brushing", price: "₹199", duration: "15 min", rating: "4.7", img: P.vet1, shortDesc: "Plaque removal using enzymatic pet-safe toothpaste for fresh breath.", desc: "Regular brushing helps prevent gum disease. We use pet-safe enzymatic toothpaste (poultry or beef flavored) and specialized finger brushes to clean plaque and freshen breath.", includes: ["Enzymatic pet-safe toothpaste", "Double-headed toothbrush clean", "Plaque build-up analysis", "Gum health inspection", "Oral spray finish", "Dental health report card"] },
      { name: "De-shedding Treatment", price: "₹599", duration: "60 min", rating: "4.9", img: P.groom, shortDesc: "Professional de-shedding to dramatically reduce loose fur and keep your home cleaner.", desc: "Our de-shedding treatment combines a specialised shampoo, high-velocity blow dry, and deshedding brush to remove up to 90% of loose undercoat — leaving your home fur-free.", includes: ["Deshedding shampoo", "Conditioning mask", "High-velocity dry", "Furminator brush", "Coat health check", "Shedding reduction guarantee"] },
      { name: "Flea Bath", price: "₹499", duration: "45 min", rating: "4.8", img: P.groom, shortDesc: "Medicated bath targeting fleas and ticks on contact for rapid relief.", desc: "A specialized treatment bath using highly effective, natural, and veterinary-approved flea/tick shampoos to eliminate active infestations and soothe irritated skin.", includes: ["Flea-elimination shampoo", "15-minute contact soak", "Thorough full-body rinse", "Manual flea combing", "Soothing skin conditioner", "Prevention plan consultation"] },
      { name: "Paw Care", price: "₹249", duration: "20 min", rating: "4.9", img: P.dog4, shortDesc: "Paw pad cleaning, hair trimming, and organic pad balm moisturizing.", desc: "Paws take a lot of wear. We clean the pads, trim excess hair between toes, check for thorns, and massage with organic wax to heal dry, cracked paw pads.", includes: ["Inter-digital hair trimming", "Warm water paw soak & sanitize", "Foreign object check", "Organic pad-soothing balm", "Gentle massage", "Nail tip checking"] },
      { name: "Skin & Coat Treatment", price: "₹699", duration: "45 min", rating: "4.8", img: P.groom, shortDesc: "Deep-conditioning, anti-dandruff, or hot-oil treatment for a glossy coat.", desc: "Perfect for dry, itchy, or dull coats. We apply specialized moisture masks, oatmeal extracts, or organic oils to nourish the skin, eliminate dandruff, and restore coat shine.", includes: ["Oatmeal or hot-oil mask", "Soothing skin massage", "Dandruff flake removal", "Deep conditioning wash", "High-velocity dry", "Brushing and styling"] }
    ]
  },
  "svc-training": {
    cat: "Training & Behavior", icon: "🎓", color: C.orange, heroImg: P.train, tagline: "Well-Trained,\nWell-Loved.",
    about: "Certified, force-free trainers using reward-based science to build obedient, confident, and happy dogs.",
    whyUs: { stats: [["200+", "Certified Trainers"], ["98%", "Success Rate"], ["10,000+", "Dogs Trained"], ["Force-Free", "Methods Only"]], points: [{ icon: "🎓", title: "CPDT-Certified Trainers", desc: "All trainers hold international certifications and follow force-free, science-backed methods." }, { icon: "❤️", title: "No Aversive Tools", desc: "We never use choke chains, prong collars, or shock collars. Positive reinforcement only." }, { icon: "📊", title: "Progress Tracking", desc: "Weekly session reports and a training app to practice between sessions." }, { icon: "🏠", title: "Home & Group Options", desc: "In-home sessions, group classes, and board & train packages available." }] },
    faqItems: [{ q: "What age can I start training my puppy?", a: "Training can begin as early as 8 weeks old. Early socialisation and basic commands at this stage have the most lasting impact." }, { q: "Do you use punishment-based methods?", a: "Never. All Pawprint trainers are force-free certified. We use positive reinforcement exclusively." }, { q: "How many sessions will my dog need?", a: "This varies by the dog and goal. Basic obedience typically takes 6–8 sessions. Behaviour modification may require 3–6 months." }, { q: "Can older dogs be trained?", a: "Absolutely. The saying 'you can't teach an old dog new tricks' is a myth. Dogs of any age respond well to reward-based training." }],
    services: [
      { name: "Puppy Training", price: "₹1,499/mo", duration: "60 min/session", rating: "4.9", img: P.train, shortDesc: "Foundation skills for puppies 8–16 weeks: sit, stay, come, socialisation, and bite inhibition.", desc: "The first weeks are the most important. Our puppy training programme establishes a positive foundation through socialisation, basic commands, and confidence building — all using reward-based methods.", includes: ["Basic commands (sit, stay, come)", "Bite inhibition", "Socialisation exercises", "Leash introduction", "Crate training", "Parent coaching"] },
      { name: "Obedience Training", price: "₹1,999/mo", duration: "60 min/session", rating: "4.9", img: P.train, shortDesc: "Comprehensive obedience for dogs of all ages: heel, down, recall, stay, and off-leash control.", desc: "Our obedience curriculum covers all foundational and advanced commands. Dogs graduate with reliable on- and off-leash responses in a variety of environments.", includes: ["14 core commands", "On & off-leash control", "Distraction training", "Group & solo sessions", "Progress tracking", "Certificate on completion"] },
      { name: "Leash Training", price: "₹999/mo", duration: "45 min/session", rating: "4.8", img: P.dog3, shortDesc: "Stop pulling, reactive barking, and lunging — walk your dog calmly and confidently.", desc: "Loose-leash walking is one of the most requested skills. Our trainers use positive reinforcement and structured exercises to teach dogs to walk calmly beside their owners.", includes: ["Loose-leash fundamentals", "Anti-pull techniques", "Reactive dog protocols", "Equipment guidance", "Real-world practice", "Owner coaching"] },
      { name: "Potty Training", price: "₹999/mo", duration: "45 min/session", rating: "4.8", img: P.train, shortDesc: "Establish clean habits, crate schedules, and bladder control routines.", desc: "Put an end to indoor accidents. We establish strict potty schedules, teach cue words, utilize crate training effectively, and show you how to clean accidents to prevent remarks.", includes: ["Cue word conditioning", "Strict feeding & potty schedule", "Crate training guidance", "Accident management tips", "Owner home setup layout", "Weekly tracking sheets"] },
      { name: "Behavioral Correction", price: "₹2,499/mo", duration: "75 min/session", rating: "4.8", img: P.train, shortDesc: "Identify and correct unwanted behaviors: jumping, barking, chewing, separation anxiety.", desc: "Our certified behaviourists identify the root cause of problem behaviours and develop a tailored modification plan — no punishment, just science-backed positive techniques.", includes: ["Full behaviour assessment", "Custom modification plan", "Root cause analysis", "Weekly sessions", "Progress reports", "Emergency support line"] },
      { name: "Aggression Management", price: "₹2,999/mo", duration: "60 min/session", rating: "4.9", img: P.dog3, shortDesc: "Safe behavioral modification for dog-to-dog or dog-to-human aggression.", desc: "Led by certified veterinary behaviorists. We identify triggers, manage risk, teach safety mechanics, and implement counter-conditioning to reduce aggressive reactions.", includes: ["Detailed triggers analysis", "Safety & muzzle conditioning", "Desensitization sessions", "Counter-conditioning protocols", "Owner safety mechanics", "Direct trainer chat access"] },
      { name: "Socialization Training", price: "₹1,299/mo", duration: "60 min/session", rating: "4.9", img: P.train, shortDesc: "Expose your pet safely to other dogs, people, sounds, and environments.", desc: "Crucial for dogs under 1 year. We guide your dog through controlled exposures to ensure they grow up confident, calm, and friendly around strangers, traffic, and other pets.", includes: ["Controlled dog encounters", "Stranger greetings practice", "Environmental sound checks", "Confidence building games", "Body language coaching", "Graduation certificate"] },
      { name: "Guard Dog Training", price: "₹2,499/mo", duration: "60 min/session", rating: "4.8", img: P.dog3, shortDesc: "Teach alertness, territory defense, and controlled alert barking.", desc: "We focus on safety and obedience first. We train dogs to alert to intruders, bark on command, stand guard, and stop immediately on the handler's release word.", includes: ["Alert-bark conditioning", "Territory patrol checks", "Intruder identification", "Immediate release command", "Handler obedience drills", "Protection assessment"] },
      { name: "Advanced Training", price: "₹2,199/mo", duration: "60 min/session", rating: "4.9", img: P.train, shortDesc: "Agility training, distance commands, hand signals, and off-leash work.", desc: "For dogs that have mastered basic obedience. We introduce complex distance commands, silent hand signals, target tracking, agility obstacles, and reliable off-leash recall.", includes: ["Silent hand signals", "Distance down & stay", "Reliable off-leash recall", "Agility obstacle work", "Object fetch & hold", "Advanced tracking games"] },
      { name: "Therapy Dog Training", price: "₹2,799/mo", duration: "60 min/session", rating: "4.9", img: P.dog2, shortDesc: "Prep for hospital, school, or nursing home visits; emotional stability.", desc: "Prepare your dog to provide comfort and affection. We train for extreme emotional stability, gentle interactions with wheelchairs/walkers, and indifference to loud noises.", includes: ["Medical equipment familiarity", "Gentle pressure touch", "Sudden noise stability", "Crowd & contact management", "Therapy certification prep", "Mock evaluation test"] }
    ]
  },
  "svc-boarding": {
    cat: "Boarding & Sitting", icon: "🏠", color: "#7C3AED", heroImg: P.boarding, tagline: "Home Away\nFrom Home.",
    about: "Secure, CCTV-monitored, comfortable temporary homes for your pets — supervised 24/7.",
    whyUs: { stats: [["CCTV", "24/7"], ["Daily", "Photo updates"], ["Vet", "On call 24/7"], ["All", "Pets insured"]], points: [{ icon: "🛡️", title: "100% Insured", desc: "Every pet boarded is fully covered by our veterinary insurance program." }, { icon: "📹", title: "Live CCTV Access", desc: "Luxury suites feature direct live video feeds accessible via the Pawprint dashboard." }] },
    faqItems: [{ q: "What should I pack for my pet?", a: "We recommend bringing their current food and a familiar smelling blanket/toy. We supply bedding, bowls, and pure drinking water." }],
    services: [
      { name: "Dog Boarding", price: "₹599/night", duration: "Per night", rating: "4.9", img: P.boarding, shortDesc: "Safe, supervised overnight boarding in clean, comfortable facilities.", desc: "Our boarding facilities provide a home-away-from-home experience. Each dog gets their own cozy space, regular feeding, exercise w/ other dogs, and 24/7 supervisor care.", includes: ["Own private cabin", "2 exercise walk sessions/day", "Medication support", "Daily video/photo reports", "Vet checkup on arrival"] },
      { name: "Luxury Boarding", price: "₹1,499/night", duration: "Per night", rating: "4.9", img: P.boarding, shortDesc: "Premium AC suites with live webcam access and custom diet plans.", desc: "The ultimate boarding experience. Private climate-controlled suites, personalized nutrition, interactive playtime sessions, and live camera access so you can watch them anytime.", includes: ["Private AC suite", "Live webcam access", "Custom chef-prepared diet", "Grooming brush session", "Individal playground session"] },
      { name: "Overnight Stay", price: "₹799/night", duration: "Per night", rating: "4.8", img: P.boarding, shortDesc: "Reliable overnight boarding with evening activities and cozy sleeping arrangements.", desc: "Ideal for weekend getaways. Includes standard social playtime, structured dinner and breakfast schedules, and quiet sleeping cabins under constant monitoring.", includes: ["Cozy individual cabin", "Dinner & breakfast feedings", "Evening group play", "24/7 supervisor on site", "Morning walk session"] },
      { name: "Dog Daycare", price: "₹399/day", duration: "Per day", rating: "4.9", img: P.dog4, shortDesc: "Structured daytime care filled with play, social events, and nap times.", desc: "Leave your pet with us while you work. We provide interactive play groups, enrichment toys, scheduled naps, and a safe space to burn off energy.", includes: ["Up to 10 hours stay", "Socialized group play", "Enrichment puzzle games", "Scheduled nap times", "Photo updates at noon", "Fresh water access"] },
      { name: "Pet Sitting", price: "₹499/visit", duration: "60 mins", rating: "4.8", img: P.cat1, shortDesc: "A background-checked sitter visits your home to feed, clean, and play.", desc: "Keep your pets in their own stress-free home. Our certified pet sitters visit to feed, refill water bowls, clean litter boxes or walk, and spend quality time.", includes: ["Feeding & fresh water", "Litter box cleaning", "15-minute walk or play", "Photo/video updates", "Mail & plant watering option", "Sitter background check"] },
      { name: "Home Visit Care", price: "₹799/day", duration: "Per day", rating: "4.9", img: P.dog1, shortDesc: "Multiple home check-ins throughout the day for premium at-home care.", desc: "Includes 3 detailed home visits (morning, noon, evening) by a dedicated sitter. Perfect for cats or independent dogs who prefer staying home but need regular check-ins.", includes: ["3 home visits per day", "Morning/Noon/Night feeding", "Walking & waste pickup", "Administering medications", "Detailed daily check-in logs", "CCTV camera setup option"] },
      { name: "Long-Term Boarding", price: "₹12,000/mo", duration: "Per month", rating: "4.9", img: P.boarding, shortDesc: "Discounted monthly boarding plans for travel or relocation gaps.", desc: "Safe, stress-free boarding for durations longer than 2 weeks. Includes discounted rates, regular health checks, grooming maintenance, and video updates twice a week.", includes: ["Discounted monthly rate", "Bi-weekly bath & groom", "Regular veterinary checks", "Weekly live video call", "Custom nutrition plan", "Pet insurance coverage"] },
      { name: "Cage-Free Boarding", price: "₹899/night", duration: "Per night", rating: "4.9", img: P.boarding, shortDesc: "Open-plan home environment boarding without cages or kennels.", desc: "Dogs live like family inside our verified cage-free boarding homes. They enjoy free access to secure indoor spaces, sofas, and supervised outdoor yards.", includes: ["100% cage-free space", "Constant human supervision", "Sofa & bed sleep access", "Large fenced play yard", "Daily text/photo logs", "Interactive social group"] },
      { name: "Puppy Daycare", price: "₹499/day", duration: "Per day", rating: "4.8", img: P.dog4, shortDesc: "Safe socialization and supervised care tailored for puppies under 6 months.", desc: "Puppies need special attention. We offer frequent potty breaks, gentle socialization with appropriate playmates, crate practice, and hand-feeding to build confidence.", includes: ["Frequent potty breaks (2h)", "Gentle puppy-only groups", "Basic training practice", "Confidence building tasks", "Puppy nutrition schedule", "Candid photo stream"] }
    ]
  },
  "svc-activity": {
    cat: "Activity & Lifestyle", icon: "🏃", color: "#D97706", heroImg: P.dog3, tagline: "Active. Fit.\nHappy.",
    about: "Enriching physical activities, hiking trips, swimming exercises, and walks for high energy dogs.",
    whyUs: { stats: [["GPS", "Insured walks"], ["Insured", "Walkers"], ["10K+", "Walks completed"], ["Safety", "First"]], points: [{ icon: "📍", title: "GPS Live Tracking", desc: "Follow their walking route in real time on our interactive map." }] },
    faqItems: [{ q: "Can I choose the walking route?", a: "Yes, we have pre-approved safe walking paths and you can indicate custom preferences." }],
    services: [
      { name: "Dog Walking", price: "₹199/walk", duration: "30 mins", rating: "4.9", img: P.dog3, shortDesc: "Professional, GPS-tracked walks for physical and mental enrichment.", desc: "Background-checked walkers take your pet on an active, controlled walk. View live GPS map tracking, pooping updates, and photos.", includes: ["GPS live map walk tracking", "Poop and pee reports", "Water bowl replenishment", "Photo updates", "Leash check", "Feet wipe on return"] },
      { name: "Exercise Sessions", price: "₹249/session", duration: "45 mins", rating: "4.8", img: P.dog3, shortDesc: "High-energy workout sessions: fetching, running, and active games.", desc: "For high-energy breeds that need more than a standard walk. We engage your dog in running, fetch, flirt-pole play, and structured cardio games to keep them fit.", includes: ["Running & jogging drills", "Interactive fetch games", "Flirt-pole cardio session", "Agility jumps intro", "Water hydration breaks", "Heart rate tracking check"] },
      { name: "Playtime Activities", price: "₹199/session", duration: "30 mins", rating: "4.9", img: P.dog4, shortDesc: "Interactive brain games, puzzle toys, and basic trick practice.", desc: "Mental stimulation is just as important as physical exercise. We spend time teaching fun tricks, hiding treats in puzzle mats, and playing scent-work games.", includes: ["Puzzle toy challenges", "Scent-work tracking games", "Fun trick learning (high-five)", "Tug & chase sessions", "Cool-down sensory play", "Progress report card"] },
      { name: "Adventure Walks", price: "₹399/walk", duration: "60 mins", rating: "4.9", img: P.dog1, shortDesc: "Off-trail walks in scenic, nature-filled paths with enrichment tracking.", desc: "A premium sensory walk outside the neighborhood. We take your dog to wooded areas, trails, or beaches where they can explore new smells, textures, and open spaces safely.", includes: ["Nature trail travel", "Long-line tracking leash", "Sensory exploration check", "Safety harness inspection", "Post-walk paw sanitizing", "HD photo collection"] },
      { name: "Swimming Sessions", price: "₹799/session", duration: "45 mins", rating: "4.9", img: P.boarding, shortDesc: "Low-impact hydrotherapy and water play in a secure pet pool.", desc: "Excellent for joints and high cardiovascular health. Sessions are supervised by certified hydrotherapists inside our secure indoor pet pool. Life jacket included.", includes: ["Supervised pet pool access", "Pet life-vest rental", "Certified hydrotherapist guide", "Warm water rinsing", "Blow-dry & coat brush", "Treat motivation awards"] },
      { name: "Fitness Training", price: "₹1,499/mo", duration: "45 min/session", rating: "4.8", img: P.train, shortDesc: "Core strength, balance disc exercises, and weight management programs.", desc: "Improve your dog's strength, flexibility, and longevity. We use balance boards, cavaletti poles, and targeted exercises to build core strength and manage weight.", includes: ["Cavaletti pole drills", "Balance disc work", "Core stabilization tasks", "Weight loss tracking plan", "Fitness progress logs", "Home training homework"] },
      { name: "Outdoor Socialization", price: "₹299/session", duration: "60 mins", rating: "4.9", img: P.dog4, shortDesc: "Supervised group walks and interactions in public parks.", desc: "Help your dog feel comfortable in public. We take small, balanced groups of dogs on structured walks through parks, teaching neutral behaviors around other pets and people.", includes: ["Structured group walking", "Public park etiquette", "Neutrality conditioning", "Loose-leash group drills", "Sitter supervision (1:3)", "Socialization log card"] },
      { name: "Hiking Trips", price: "₹1,999/trip", duration: "Half-Day", rating: "4.9", img: P.dog3, shortDesc: "Weekend group hikes to forest trails with transport and safety gear.", desc: "The ultimate doggie day out. We transport a group of dogs to nature reserves for a 3-hour hike. Includes safety harnesses, first-aid, swimming stops, and snack breaks.", includes: ["Round-trip AC transport", "3-hour guided hike", "Safety GPS tag tracking", "Dog first-aid on site", "Snacks & fresh water", "GoPro video highlights"] },
      { name: "Dog Park Visits", price: "₹349/visit", duration: "60 mins", rating: "4.8", img: P.dog4, shortDesc: "Supervised social play sessions at certified off-leash dog parks.", desc: "Let your dog run wild and play off-leash. Our walkers take your pet to fully fenced, clean dog parks and monitor their play to ensure positive and safe interactions.", includes: ["Fenced park admission", "Constant active monitoring", "Playmate matching check", "Hydration intervals", "Feet and body wipe", "Play details report"] }
    ]
  },
  "svc-specialty": {
    cat: "Specialty Services", icon: "⭐", color: "#B45309", heroImg: P.about1, tagline: "Unique Care.\nSpecial Moments.",
    about: "For when normal isn't enough: microchipping, relocation, events, hydrotherapy rehabilitation.",
    whyUs: { stats: [["Specialist", "Experts"], ["5,000+", "Families helped"]], points: [{ icon: "⭐", title: "Certified Specialists", desc: "Relocations and surgeries are managed by verified veterinarians and professionals." }] },
    faqItems: [{ q: "Is microchipping safe?", a: "Yes, microchipping is a quick, safe, standard injection that lasts a lifetime." }],
    services: [
      { name: "Adoption Assistance", price: "₹499", duration: "60 min", rating: "4.9", img: P.cat1, shortDesc: "Expert guidance to find, match, and onboard your perfect rescue pet.", desc: "We evaluate your home environment and lifestyle to match you with compatible shelter animals. We assist with applications, meet-and-greets, and veterinary onboarding.", includes: ["Lifestyle matching assessment", "Shelter list compilation", "Adoption interview practice", "Home check preparation", "Veterinary transition guide", "Onboarding supply list"] },
      { name: "Breeding Consultation", price: "₹999", duration: "60 min", rating: "4.7", img: P.vet2, shortDesc: "Genetic compatibility, health screening, and ethical breeding guidance.", desc: "Veterinary-led consultation focusing on ethical breeding standards. We verify bloodline clearances, review genetic tests, and analyze lineage to prevent hereditary diseases.", includes: ["Genetic test report review", "Bloodline health screening", "Ethical standard guidelines", "Mating cycle timing advice", "Pre-breeding vet checks", "Litter preparation tips"] },
      { name: "Pregnancy & Whelping", price: "₹2,499", duration: "Ongoing", rating: "4.9", img: P.vet1, shortDesc: "Ultrasound checks, whelping kit setup, and active veterinary delivery support.", desc: "Complete maternity care for your dog. Includes gestational ultrasound checks, nutritional guidance, whelping box setup assistance, and an emergency delivery helpline.", includes: ["Gestational ultrasound checks", "Pregnancy nutritional guide", "Whelping box setup check", "Delivery emergency phone", "Post-natal checkup (1st)", "Puppy nursing support"] },
      { name: "Rehabilitation Therapy", price: "₹999/session", duration: "60 min", rating: "4.9", img: P.train, shortDesc: "Hydrotherapy, balance rehab, and laser care for chronic issues or injuries.", desc: "Advanced therapy plans combining warm-water swimming, laser therapy, and passive joint motion exercises to help pets regain mobility after strokes or leg injuries.", includes: ["Hydrotherapy pool session", "Mobility diagnostics check", "Cold laser healing session", "Joint massage & stretches", "Progress metrics report", "Home mobility guidelines"] },
      { name: "Hospice & End-of-Life Care", price: "₹1,499", duration: "Consultation", rating: "4.9", img: P.vet1, shortDesc: "Palliative pain management, quality-of-life checks, and peaceful transitions.", desc: "Compassionate, home-based palliative care to manage pain and maintain dignity for terminally ill or geriatric pets. Includes counseling and peaceful in-home euthanasia options.", includes: ["Palliative pain assessment", "Home comfort setup check", "Medication management card", "Quality of life counseling", "Peaceful in-home transition", "Memorial guidance support"] },
      { name: "Pet Photography", price: "₹2,999", duration: "90 mins", rating: "4.9", img: P.about1, shortDesc: "Professional studio or outdoor photo sessions with props and high-res edits.", desc: "Capture your pet's personality forever. Our professional animal photographer uses high-speed cameras, pet-safe lighting, and toys to capture stunning high-resolution portraits.", includes: ["90-minute photoshoot", "Studio or outdoor option", "Toys & accessories rental", "25 high-resolution edits", "Online digital gallery", "Pet-sitter handling assist"] },
      { name: "Dog Events & Parties", price: "from ₹4,999", duration: "3 hours", rating: "4.8", img: P.dog4, shortDesc: "Custom birthday parties, dog pools, pet cakes, and games management.", desc: "Celebrate milestones in style. We organize dog birthday parties complete with dog-safe cakes, party games, pools, fenced park rentals, and photo/video highlights.", includes: ["Fenced party park rental", "Dog-safe birthday cake", "Interactive agility games", "Pet party favor bags", "Professional coordinator", "Digital invitations designer"] },
      { name: "Emotional Support Dog", price: "₹1,999/mo", duration: "60 min/session", rating: "4.9", img: P.dog2, shortDesc: "Training and evaluation for psychiatric service and emotional support tags.", desc: "We help train your dog to support mental health needs. Includes calming behaviors, pressure therapy, deep-pressure simulation, and ESA documentation support.", includes: ["Psychiatric assistance training", "Deep pressure stimulation", "Calming cue conditioning", "Public transport exposure", "ESA evaluation report", "Official vest and tag"] },
      { name: "Microchipping", price: "₹399", duration: "15 mins", rating: "4.9", img: P.vet1, shortDesc: "Permanent ID implant registered on the national database.", desc: "A painless, standard injection under the shoulder blades. Crucial to reuniting lost pets and standard for international travels.", includes: ["ISO Standard Microchip", "National database registration", "Microchip ID card", "Lost Alert setup", "Vet verification"] },
      { name: "Pet Relocation Services", price: "Varies", duration: "Full Journey", rating: "4.9", img: P.shop2, shortDesc: "IATA-approved crates, flight booking, customs clearance, and road transit.", desc: "Complete domestic and international pet shipping. We handle health certificates, IATA crate sizing, flight reservations, airline check-ins, customs clearance, and road transfers.", includes: ["IATA-certified crate supply", "Import/Export customs paperwork", "Health certificates clearance", "AC pet transport vehicle", "Flight check-in assistance", "Real-time trip updates"] }
    ]
  },
  "svc-retail": {
    cat: "Retail & Extras", icon: "🛍️", color: C.orange, heroImg: P.shop1, tagline: "Vet-Curated.\nNext-Day Delivered.",
    about: "Premium pet foods, interactive puzzle toys, supplements, and designer collars reviewed by our veterinary panel.",
    whyUs: { stats: [["1,000+", "Reviewed items"], ["Fast", "Next-day delivery"]], points: [{ icon: "🛍️", title: "100% Vetted", desc: "We only stock products free of harmful chemicals and low-quality fillers." }] },
    faqItems: [{ q: "Do you offer free delivery?", a: "Yes, all orders above ₹499 qualify for free next-day delivery." }],
    services: [
      { name: "Dog Food", price: "from ₹499", duration: "Next-day", rating: "4.9", img: P.shop1, shortDesc: "Premium kibble and wet food selections for healthy digestion.", desc: "Top brands like Royal Canin, Hill's Science Diet, and organic fresh foods curated by our vets.", includes: ["Vet-approved brands", "Allergy-free formulas", "Next-day home delivery", "Dietary guide card"] },
      { name: "Treats & Supplements", price: "from ₹249", duration: "Next-day", rating: "4.8", img: P.dog2, shortDesc: "Natural, single-ingredient training treats and joint/skin health supplements.", desc: "High-quality dental chews, dehydrated meat treats, and veterinary-approved multivitamins, calcium, and fish oils to support joint, skin, and immune health.", includes: ["Single-ingredient training treats", "Veterinary joint supplements", "Dental care chews selection", "Omega-3 fish oils", "Next-day home delivery", "Allergy info label guide"] },
      { name: "Toys", price: "from ₹199", duration: "Next-day", rating: "4.9", img: P.dog4, shortDesc: "Indestructible rubber chew toys, fetch balls, and interactive puzzles.", desc: "Keep your dog active and smart. We stock extremely durable natural rubber toys, puzzle games from Outward Hound, fetch launchers, and squeaker toys.", includes: ["Natural rubber chew toys", "Interactive puzzle games", "High-bounce fetch balls", "Snuggle heartbeat toys", "Fast doorstep delivery", "Safety check verification"] },
      { name: "Collars & Leashes", price: "from ₹349", duration: "Next-day", rating: "4.8", img: P.train, shortDesc: "Ergonomic no-pull harnesses, nylon leashes, and luxury leather collars.", desc: "Ensure comfortable, safe walks. We offer step-in mesh harnesses, padded anti-pull collars, training leashes, and luxury genuine leather gear in all sizes.", includes: ["No-pull harness selection", "Reflective nylon leashes", "Luxury leather collars", "Car safety belt clips", "Size exchanging support", "Lifetime buckle warranty"] },
      { name: "Beds & Crates", price: "from ₹1,299", duration: "Next-day", rating: "4.9", img: P.boarding, shortDesc: "Orthopedic memory foam beds, travel crates, and warm blankets.", desc: "Premium sleep solutions for all breeds. Orthopedic foam beds for joint relief, travel-ready double-door metal crates, and ultra-soft washable dog blankets.", includes: ["Memory foam mattress beds", "Washable zip-off covers", "Double-door wire crates", "Ultra-soft dog blankets", "Next-day home delivery", "Sizing advice charts"] },
      { name: "Grooming Products", price: "from ₹199", duration: "Next-day", rating: "4.7", img: P.groom, shortDesc: "Medicated shampoos, detangling sprays, nail clippers, and slicker brushes.", desc: "Maintain salon results at home. pH-balanced shampoos, detangling conditioners, professional undercoat grooming brushes, and quick-stop nail trimmers.", includes: ["pH-balanced shampoos", "Detangling coat sprays", "Undercoat rake brushes", "Nail clippers & quick care", "Free grooming guide card", "Medicated skin options"] },
      { name: "Clothing & Extras", price: "from ₹299", duration: "Next-day", rating: "4.8", img: P.dog4, shortDesc: "Winter sweaters, monsoon raincoats, and stylish bandanas.", desc: "Dress your dog for any season. Soft winter jackets, waterproof hood raincoats, customizable cotton birthday bandanas, and booties for hot roads.", includes: ["Warm winter sweaters", "Waterproof raincoats", "Cotton print bandanas", "Road protection booties", "Size exchange service", "Pet-safe dye materials"] },
      { name: "Training Tools", price: "from ₹149", duration: "Next-day", rating: "4.8", img: P.train, shortDesc: "Training clickers, treat pouches, whistle pipes, and long lines.", desc: "Professional tools to support positive reinforcement training. Ergonomic clickers, magnetic-closing treat bags, dual-tone whistles, and 30ft long lines.", includes: ["Ergonomic pet clickers", "Magnetic treat pouches", "Dual-frequency whistles", "30ft nylon long lines", "Treat-dispenser toys", "Quick-start guide books"] },
      { name: "ID Tags", price: "from ₹99", duration: "2-3 Days", rating: "4.9", img: P.shop2, shortDesc: "Custom engraved metal name tags with phone numbers and QR codes.", desc: "Ensure they find their way home. Rust-resistant brass and stainless steel tags engraved with your pet's name, two phone numbers, and optional QR-code digital profile.", includes: ["Stainless steel name tags", "Deep laser engraving", "Rust-proof keyring", "QR-code profile activation", "Free shipping across India", "Silencing rubber bands"] },
      { name: "Travel Accessories", price: "from ₹499", duration: "Next-day", rating: "4.8", img: P.shop2, shortDesc: "Car seat covers, portable water bottles, and travel food bowls.", desc: "Make journeys stress-free. Waterproof car hammock seat covers, one-click locking water squeeze bottles, and collapsible silicone bowls for hikes.", includes: ["Waterproof hammock seat covers", "One-click travel bottles", "Collapsible silicone bowls", "Travel first-aid kit", "Next-day home delivery", "Travel checklist printout"] }
    ]
  }
};

let activeSubPageService = null;
let activeSvcCatPageId = null;

function renderServiceCategoryPage(pageId) {
  activeSvcCatPageId = pageId;
  const data = servicePagesData[pageId];
  const wrapper = document.getElementById('svc-cat-wrapper');
  if (!data || !wrapper) return;

  if (activeSubPageService) {
    // Render detailed booking screen for a subservice
    const s = data.services.find(x => x.name === activeSubPageService);
    if (!s) {
      activeSubPageService = null;
      renderServiceCategoryPage(pageId);
      return;
    }

    wrapper.innerHTML = `
      <div style="padding: 48px 32px 80px; max-width: 1280px; margin: 0 auto;">
        <button class="btn btn-md btn-ghost" style="margin-bottom: 32px;" onclick="closeServiceSubPage()">← Back to ${data.cat}</button>
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 60px; align-items: start;">
          <div>
            <div style="border-radius: 24px; overflow: hidden; height: 380px; margin-bottom: 20px;">
              <img src="${s.img}" style="width: 100%; height: 100%; object-fit: cover;" alt="${s.name}">
            </div>
            <div style="background: var(--color-white); border-radius: 16px; padding: 24px; border: 1px solid var(--color-border);">
              <div class="melody" style="font-size: 18px; color: var(--color-ink); margin-bottom: 12px;">What's Included</div>
              <ul style="list-style: none; padding: 0; display: flex; flex-direction: column; gap: 8px;">
                ${s.includes.map(inc => `
                  <li style="display: flex; align-items: flex-start; gap: 10px; font-size: 14px; color: var(--color-ink-sft); line-height: 1.6;">
                    <span style="width: 18px; height: 18px; border-radius: 50%; background: ${data.color}; display: flex; align-items: center; justify-content: center; font-size: 9px; color: #fff; flex-shrink: 0; margin-top: 2px;">✓</span>
                    ${inc}
                  </li>
                `).join('')}
              </ul>
            </div>
          </div>
          <div>
            <div class="pill" style="background: ${data.color}15; color: ${data.color}; margin-bottom: 16px;">${data.icon} ${data.cat}</div>
            <h1 class="melody" style="font-size: 58px; color: var(--color-ink); line-height: 1; margin-bottom: 12px;">${s.name}</h1>
            <p style="font-size: 17px; color: var(--color-ink-sft); line-height: 1.8; margin-bottom: 24px;">${s.desc}</p>
            
            <div style="display: flex; gap: 16px; margin-bottom: 32px; flex-wrap: wrap;">
              <div style="background: var(--color-white); border-radius: 14px; padding: 14px 20px; border: 1px solid var(--color-border); flex: 1; min-width: 120px;">
                <div style="font-size: 10px; font-weight: 700; letter-spacing: .07em; text-transform: uppercase; color: var(--color-ink-sft); margin-bottom: 4px;">Starting From</div>
                <div class="melody" style="font-size: 26px; color: ${data.color};">${s.price}</div>
              </div>
              <div style="background: var(--color-white); border-radius: 14px; padding: 14px 20px; border: 1px solid var(--color-border); flex: 1; min-width: 120px;">
                <div style="font-size: 10px; font-weight: 700; letter-spacing: .07em; text-transform: uppercase; color: var(--color-ink-sft); margin-bottom: 4px;">Duration</div>
                <div class="melody" style="font-size: 26px; color: var(--color-ink);">${s.duration}</div>
              </div>
              <div style="background: var(--color-white); border-radius: 14px; padding: 14px 20px; border: 1px solid var(--color-border); flex: 1; min-width: 120px;">
                <div style="font-size: 10px; font-weight: 700; letter-spacing: .07em; text-transform: uppercase; color: var(--color-ink-sft); margin-bottom: 4px;">Rating</div>
                <div class="melody" style="font-size: 26px; color: var(--color-orange);">⭐ ${s.rating}</div>
              </div>
            </div>
            
            <!-- Booking Form Card -->
            <div id="subpage-booking-form-box"></div>
          </div>
        </div>
      </div>
    `;
    renderSubPageBookingForm(s.name);
  } else {
    // Render main landing catalog page for category
    wrapper.innerHTML = `
      <section style="position: relative; height: 440px; overflow: hidden;">
        <img src="${data.heroImg}" style="width: 100%; height: 100%; object-fit: cover;" alt="Hero">
        <div style="position: absolute; inset: 0; background: linear-gradient(to right, rgba(17,17,17,.75) 0%, rgba(17,17,17,.35) 60%, transparent 100%);"></div>
        <div style="position: absolute; inset: 0; display: flex; align-items: center;">
          <div style="max-width: 1280px; margin: 0 auto; padding: 0 32px; width: 100%;">
            <div class="pill" style="background: rgba(255,255,255,.15); color: #fff; margin-bottom: 20px; backdrop-filter: blur(4px);">${data.icon} ${data.cat}</div>
            <h1 class="melody" style="font-size: clamp(52px,6vw,88px); color: #fff; line-height: 1; margin-bottom: 16px;">${data.tagline.replace('\n', '<br>')}</h1>
            <p style="font-size: 18px; color: rgba(255,255,255,.75); line-height: 1.7; max-width: 520px; margin-bottom: 28px;">${data.about}</p>
            <div style="display: flex; gap: 14px;">
              <button class="btn btn-lg btn-primary" onclick="openServiceSubPage('${data.services[0].name}')">Book a Service →</button>
              <button class="btn btn-lg btn-ghost" style="color: rgba(255,255,255,.7); border-color: rgba(255,255,255,.3);" onclick="nav('contact')">Talk to Us</button>
            </div>
          </div>
        </div>
      </section>

      <!-- Stats strip -->
      <div style="background: ${data.color}; padding: 20px 0;">
        <div style="max-width: 1280px; margin: 0 auto; padding: 0 32px; display: flex; gap: 48px; justify-content: center; flex-wrap: wrap;">
          ${data.whyUs.stats.map(s => `
            <div style="text-align: center;">
              <div class="melody" style="font-size: 32px; color: #fff; line-height: 1;">${s[0]}</div>
              <div style="font-size: 12px; color: rgba(255,255,255,.7); margin-top: 4px;">${s[1]}</div>
            </div>
          `).join('')}
        </div>
      </div>

      <!-- Services Grid -->
      <section style="padding: 80px 0; background: var(--color-cream);">
        <div style="max-width: 1280px; margin: 0 auto; padding: 0 32px;">
          <div class="pill" style="background: ${data.color}15; color: ${data.color}; margin-bottom: 16px;">${data.icon} All ${data.cat} Services</div>
          <h2 class="melody" style="font-size: clamp(36px,4vw,56px); color: var(--color-ink); margin-bottom: 48px; line-height: 1;">Everything you need,<br>in one place.</h2>
          <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 24px;">
            ${data.services.map(s => `
              <div class="card card-lift" style="cursor: pointer; border-top: 3px solid ${data.color};" onclick="openServiceSubPage('${s.name}')">
                <div style="height: 180px; overflow: hidden; position: relative;">
                  <img src="${s.img}" style="width: 100%; height: 100%; object-fit: cover;" alt="${s.name}">
                  <div style="position: absolute; bottom: 12px; right: 12px; background: rgba(0,0,0,.55); border-radius: 100px; padding: 4px 12px;">
                    <span style="color: #fff; font-size: 12px; font-weight: 600;">${s.price}</span>
                  </div>
                </div>
                <div style="padding: 20px 22px;">
                  <h3 class="melody" style="font-size: 22px; color: var(--color-ink); margin-bottom: 6px;">${s.name}</h3>
                  <p style="font-size: 13px; color: var(--color-ink-sft); line-height: 1.65; margin-bottom: 14px;">${s.shortDesc}</p>
                  <div style="display: flex; justify-content: space-between; align-items: center;">
                    <span style="font-size: 12px; color: var(--color-orange); font-weight: 600;">⭐ ${s.rating} · ${s.duration}</span>
                    <button class="btn btn-sm btn-primary" onclick="event.stopPropagation(); openServiceSubPage('${s.name}')">Book →</button>
                  </div>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      </section>

      <!-- Why choose us -->
      <section style="padding: 80px 0; background: var(--color-ink-md);">
        <div style="max-width: 1280px; margin: 0 auto; padding: 0 32px;">
          <h2 class="melody" style="font-size: clamp(34px,4vw,52px); color: #fff; margin-bottom: 48px; line-height: 1;">Why choose Pawprint<br>for ${data.cat}?</h2>
          <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(240px, 1fr)); gap: 20px;">
            ${data.whyUs.points.map(p => `
              <div style="padding: 28px; border-radius: 20px; background: rgba(255,255,255,.06); border: 1px solid rgba(255,255,255,.08);">
                <div style="font-size: 32px; margin-bottom: 14px;">${p.icon}</div>
                <div class="melody" style="font-size: 20px; color: #fff; margin-bottom: 8px;">${p.title}</div>
                <p style="font-size: 13px; color: rgba(255,255,255,.5); line-height: 1.7;">${p.desc}</p>
              </div>
            `).join('')}
          </div>
        </div>
      </section>


      <!-- Bottom Call To Action -->
      <section style="padding: 60px 0; background: ${data.color};">
        <div style="max-width: 1280px; margin: 0 auto; padding: 0 32px; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 20px;">
          <div>
            <h2 class="melody" style="font-size: 40px; color: #fff; line-height: 1; margin-bottom: 8px;">Ready to book ${data.cat}?</h2>
            <p style="color: rgba(255,255,255,.7); font-size: 16px;">Certified professionals · Guaranteed satisfaction · Easy booking</p>
          </div>
          <div style="display: flex; gap: 12px;">
            <button class="btn btn-lg" style="background: #fff; color: ${data.color}; font-weight: 700;" onclick="openServiceSubPage('${data.services[0].name}')">Book Now →</button>
            <button class="btn btn-lg btn-ghost" style="color: rgba(255,255,255,.7); border-color: rgba(255,255,255,.3);" onclick="nav('contact')">Contact Us</button>
          </div>
        </div>
      </section>
    `;
  }
}

function openServiceSubPage(svcName) {
  activeSubPageService = svcName;
  renderServiceCategoryPage(activeSvcCatPageId);
}

function closeServiceSubPage() {
  activeSubPageService = null;
  renderServiceCategoryPage(activeSvcCatPageId);
}

function renderSubPageBookingForm(svcName) {
  const box = document.getElementById('subpage-booking-form-box');
  if (!box) return;

  box.innerHTML = `
    <div style="background: var(--color-white); border-radius: 20px; border: 1px solid var(--color-border); padding: 32px;" id="booking-form-wrapper">
      <div class="melody" style="font-size: 26px; color: var(--color-ink); margin-bottom: 6px;">Book ${svcName}</div>
      <p style="font-size: 14px; color: var(--color-ink-sft); margin-bottom: 24px;">Fill in your details and we'll confirm within 2 hours.</p>
      
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 14px;">
        <div class="field"><label>Your Full Name</label><input id="bk-name" placeholder="Geetha Sharma"></div>
        <div class="field"><label>Phone Number</label><input id="bk-phone" type="tel" placeholder="+91 98765 43210"></div>
        <div class="field"><label>Email Address</label><input id="bk-email" type="email" placeholder="geetha@email.com"></div>
        <div class="field"><label>Pet's Name</label><input id="bk-pet" placeholder="Bruno"></div>
        <div class="field" style="grid-column: 1 / -1;"><label>Breed / Species</label><input id="bk-breed" placeholder="Labrador / Dog"></div>
        <div class="field"><label>Preferred Date</label><input id="bk-date" type="date"></div>
        <div class="field">
          <label>Preferred Time</label>
          <select id="bk-time">
            <option value="">Select slot…</option>
            <option>9:00 AM</option><option>10:00 AM</option><option>11:00 AM</option><option>12:00 PM</option><option>1:00 PM</option><option>2:00 PM</option><option>3:00 PM</option><option>4:00 PM</option><option>5:00 PM</option><option>6:00 PM</option>
          </select>
        </div>
        <div class="field" style="grid-column: 1 / -1;"><label>Additional Notes</label><textarea id="bk-notes" placeholder="Any specific requirements..." rows="3" style="resize: vertical;"></textarea></div>
      </div>
      <button class="btn btn-lg btn-primary" style="margin-top: 20px; width: 100%;" onclick="submitSubPageBooking('${svcName}')">Confirm Booking →</button>
    </div>
  `;
}

function submitSubPageBooking(svcName) {
  const name = document.getElementById('bk-name').value.trim();
  const phone = document.getElementById('bk-phone').value.trim();
  const date = document.getElementById('bk-date').value.trim();

  if (!name || !phone || !date) {
    alert("Please fill in Name, Phone Number, and Preferred Date.");
    return;
  }

  const wrapper = document.getElementById('booking-form-wrapper');
  if (wrapper) {
    wrapper.innerHTML = `
      <div style="text-align: center; padding: 40px 32px; background: var(--color-green-lt); border-radius: 20px; border: 1px solid rgba(30, 107, 69, 0.2);">
        <div style="font-size: 48px; margin-bottom: 12px;">✅</div>
        <div class="melody" style="font-size: 28px; color: var(--color-ink); margin-bottom: 8px;">Booking Confirmed!</div>
        <p style="color: var(--color-ink-sft); font-size: 14px; line-height: 1.7;">
          We've received your booking for <strong>${svcName}</strong>.<br>
          Our team will call <strong>${phone}</strong> within 2 hours to confirm your slot.
        </p>
        <button class="btn btn-md btn-primary" style="margin-top: 20px;" onclick="closeServiceSubPage()">Back to ${servicePagesData[activeSvcCatPageId].cat} →</button>
      </div>
    `;
  }
}

/* ================================================================
   ADOPT SECTION CLIENT CONTROLLER
   ================================================================ */
function showAdoptList() {
  document.getElementById('adopt-view-list').style.display = 'block';
  document.getElementById('adopt-view-detail').style.display = 'none';
  document.getElementById('adopt-view-form').style.display = 'none';
  document.getElementById('adopt-view-success').style.display = 'none';
  filterPets();
}

function filterPets() {
  const size = document.getElementById('adopt-filter-size').value;
  const gend = document.getElementById('adopt-filter-gender').value;

  const filtered = ALL_PETS.filter(p => {
    return (size === 'All' || p.size === size) &&
      (gend === 'All' || p.gender === gend);
  });

  document.getElementById('adopt-count').textContent = `${filtered.length} dogs found`;

  const grid = document.getElementById('adopt-grid');
  grid.innerHTML = filtered.map(p => {
    const isFav = adoptFavorites.includes(p.id);
    return `
      <div class="bento-pet-card" onclick="viewAdoptDetail(${p.id})">
        <div class="photo-box">
          <img src="${p.img}" alt="${p.name}">
          <button onclick="event.stopPropagation(); toggleAdoptFavoriteInline(${p.id})" class="fav-btn">
            ${isFav ? '❤️' : '🤍'}
          </button>
          ${p.vacc ? '<div class="badge-box">Vaccinated</div>' : ''}
        </div>
        <div class="info-grid">
          <div class="info-main">
            <div class="pet-name">${p.name}</div>
            <div class="pet-meta">${p.breed} · ${p.loc}</div>
          </div>
          <div class="info-chip">${p.age}</div>
          <div class="info-chip">${p.gender}</div>
          <button class="info-action" onclick="event.stopPropagation(); viewAdoptDetail(${p.id})">
            Adopt →
          </button>
        </div>
      </div>
    `;
  }).join('');
}

function toggleAdoptFavoriteInline(id) {
  if (adoptFavorites.includes(id)) {
    adoptFavorites = adoptFavorites.filter(x => x !== id);
  } else {
    adoptFavorites.push(id);
  }
  filterPets();
}

function viewAdoptDetail(id) {
  selectedAdoptPetId = id;
  const p = ALL_PETS.find(x => x.id === id);
  if (!p) return;

  document.getElementById('adopt-view-list').style.display = 'none';
  document.getElementById('adopt-view-detail').style.display = 'block';

  document.getElementById('adopt-detail-img').src = p.img;
  document.getElementById('adopt-detail-pill').textContent = `${p.species} · ${p.loc}`;
  document.getElementById('adopt-detail-name').textContent = p.name;
  document.getElementById('adopt-detail-sub').textContent = `${p.breed} · ${p.age} · ${p.gender}`;
  document.getElementById('adopt-detail-story').textContent = p.story;
  document.getElementById('adopt-detail-size').textContent = p.size;
  document.getElementById('adopt-detail-vacc').textContent = p.vacc ? 'Yes' : 'No';
  document.getElementById('adopt-detail-neut').textContent = p.neut ? 'Yes' : 'No';

  const favBtn = document.getElementById('adopt-fav-btn');
  favBtn.textContent = adoptFavorites.includes(id) ? '❤️ Saved' : '🤍 Save';

  const tags = document.getElementById('adopt-detail-tags');
  tags.innerHTML = p.tags.map(t => `<span style="background: var(--color-white); border: 1px solid var(--color-border); border-radius: 100px; padding: 6px 16px; font-size: 13px; font-weight: 500; color: var(--color-ink-md);">${t}</span>`).join('');
}

function toggleAdoptFavorite() {
  if (adoptFavorites.includes(selectedAdoptPetId)) {
    adoptFavorites = adoptFavorites.filter(x => x !== selectedAdoptPetId);
  } else {
    adoptFavorites.push(selectedAdoptPetId);
  }
  const favBtn = document.getElementById('adopt-fav-btn');
  favBtn.textContent = adoptFavorites.includes(selectedAdoptPetId) ? '❤️ Saved' : '🤍 Save';
}

function showAdoptDetail() {
  document.getElementById('adopt-view-detail').style.display = 'block';
  document.getElementById('adopt-view-form').style.display = 'none';
}

function showAdoptForm() {
  document.getElementById('adopt-view-detail').style.display = 'none';
  document.getElementById('adopt-view-form').style.display = 'block';

  const p = ALL_PETS.find(x => x.id === selectedAdoptPetId);
  if (p) {
    document.getElementById('adopt-form-pet-img').src = p.img;
    document.getElementById('adopt-form-title').textContent = `Adopting ${p.name}`;
    document.getElementById('adopt-form-subtitle').textContent = `${p.breed} · ${p.age} · ${p.loc}`;
    document.getElementById('adopt-form-reason-label').textContent = `Why do you want to adopt ${p.name}? *`;
    document.getElementById('adopt-form-reason').placeholder = `Tell us what made you fall in love with ${p.name} and how you plan to care for them...`;
  }
}

function toggleRentFields() {
  const ownRent = document.getElementById('adopt-form-ownrent').value;
  document.getElementById('adopt-form-rent-field').style.display = ownRent === 'Rent' ? 'flex' : 'none';
}

function submitAdoptionForm() {
  const fname = document.getElementById('adopt-form-fname').value.trim();
  const lname = document.getElementById('adopt-form-lname').value.trim();
  const email = document.getElementById('adopt-form-email').value.trim();
  const phone = document.getElementById('adopt-form-phone').value.trim();
  const reason = document.getElementById('adopt-form-reason').value.trim();
  const agree = document.getElementById('adopt-form-agree').checked;

  if (!fname || !lname || !email || !phone || !reason || !agree) {
    alert("Please fill in all required (*) fields and agree to the terms.");
    return;
  }

  const p = ALL_PETS.find(x => x.id === selectedAdoptPetId);
  document.getElementById('adopt-success-pet-name').textContent = p ? p.name : 'your pet';

  document.getElementById('adopt-view-form').style.display = 'none';
  document.getElementById('adopt-view-success').style.display = 'block';
}

/* ================================================================
   VETERINARY SECTION CLIENT CONTROLLER
   ================================================================ */
function showVetList() {
  document.getElementById('vet-view-list').style.display = 'block';
  document.getElementById('vet-view-success').style.display = 'none';
  renderVets();
}

function renderVets() {
  const list = document.getElementById('vets-list');
  if (!list) return;

  list.innerHTML = vets.map((v, i) => {
    const isBookingThis = activeVet === v.name;
    return `
      <div class="card card-lift" style="overflow: visible;">
        <div style="display: grid; grid-template-columns: 8px 1fr auto; align-items: stretch;">
          <div style="background: ${[C.blue, C.green, C.orange][i % 3]}; border-radius: 20px 0 0 20px;"></div>
          <div style="padding: 36px 40px;">
            <div style="display: grid; grid-template-columns: 64px 1fr; gap: 22px; align-items: start; margin-bottom: 24px;">
              <img src="${v.img}" style="width: 64px; height: 64px; border-radius: 50%; object-fit: cover; border: 3px solid var(--color-cream-dk);" alt="${v.name}">
              <div>
                <div style="display: flex; gap: 12px; align-items: center; margin-bottom: 4px;">
                  <h3 class="melody" style="font-size: 20px; font-weight: 700; color: var(--color-ink);">${v.name}</h3>
                  <span style="background: var(--color-green-lt); color: var(--color-green); padding: 3px 12px; border-radius: 100px; font-size: 11px; font-weight: 700;">🟢 ${v.avail}</span>
                </div>
                <p style="font-size: 14px; color: var(--color-ink-sft); margin-bottom: 6px;">${v.spec} · ${v.exp} experience</p>
                <div style="display: flex; gap: 14px; font-size: 13px; color: var(--color-ink-sft);">
                  <span style="color: var(--color-orange); font-weight: 600;">⭐ ${v.rating}</span>
                  <span>(${v.reviews.toLocaleString()} reviews)</span>
                  <span>🗣 ${v.langs.join(", ")}</span>
                </div>
              </div>
            </div>
            <div>
              <p style="font-size: 11px; font-weight: 700; letter-spacing: .06em; text-transform: uppercase; color: var(--color-ink-sft); margin-bottom: 10px;">Available Slots</p>
              <div style="display: flex; gap: 8px; flex-wrap: wrap;">
                ${v.slots.map(s => {
      const isSelected = isBookingThis && activeSlot === s;
      return `
                    <button onclick="selectVetSlot('${v.name}', '${s}')"
                      style="padding: 8px 16px; border-radius: 100px; border: 1.5px solid ${isSelected ? 'var(--color-blue)' : 'var(--color-border)'}; background: ${isSelected ? 'var(--color-blue-lt)' : 'transparent'}; color: ${isSelected ? 'var(--color-blue)' : 'var(--color-ink-sft)'}; font-size: 13px; font-weight: 500; cursor: pointer; transition: all .18s;">
                      ${s}
                    </button>
                  `;
    }).join('')}
              </div>
              
              <!-- Embedded Schedule Confirmation details -->
              ${isBookingThis ? `
                <div style="margin-top: 18px; display: flex; gap: 12px; align-items: center; animation: fadeIn .3s ease both;">
                  <input type="date" id="vet-booking-date" style="padding: 10px 14px; border-radius: 12px; border: 1.5px solid var(--color-border); font-size: 14px; outline: none; color: var(--color-ink);">
                  <button class="btn btn-md btn-primary" onclick="confirmAppointment('${v.name}')">Confirm ✓</button>
                  <button class="btn btn-md btn-ghost" onclick="cancelVetBooking()">Cancel</button>
                </div>
              ` : ''}
            </div>
          </div>
          <div style="padding: 36px 36px; display: flex; flex-direction: column; justify-content: center; align-items: flex-end; gap: 14px; border-left: 1px solid var(--color-border); min-width: 200px;">
            <div style="text-align: right;">
              <div class="melody" style="font-size: 28px; font-weight: 700; color: var(--color-ink);">${v.price}</div>
              <div style="font-size: 12px; color: var(--color-ink-sft);">per session</div>
            </div>
            <button class="btn btn-md btn-primary" style="width: 100%;" onclick="startBookingDirect('${v.name}')">Book Visit</button>
            <button class="btn btn-md btn-outline" style="width: 100%;" onclick="alert('Opening video consultation channel...')">📹 Video Consult</button>
          </div>
        </div>
      </div>
    `;
  });
}

function selectVetSlot(vetName, slotTime) {
  activeVet = vetName;
  activeSlot = slotTime;
  renderVets();
}

function startBookingDirect(vetName) {
  activeVet = vetName;
  // Pick first slot automatically
  const v = vets.find(x => x.name === vetName);
  activeSlot = v ? v.slots[0] : '';
  renderVets();
}

function cancelVetBooking() {
  activeVet = null;
  activeSlot = null;
  renderVets();
}

function confirmAppointment(vetName) {
  const dateVal = document.getElementById('vet-booking-date').value;
  if (!dateVal) {
    alert("Please select an appointment date.");
    return;
  }

  document.getElementById('vet-success-name').textContent = vetName;
  document.getElementById('vet-success-details').textContent = `${dateVal} at ${activeSlot} · Confirmation SMS sent.`;

  document.getElementById('vet-view-list').style.display = 'none';
  document.getElementById('vet-view-success').style.display = 'block';

  // Clean state
  activeVet = null;
  activeSlot = null;
}

/* ================================================================
   SHOPPING CART & CATALOG ENGINE
   ================================================================ */
let wishlist = [];

function renderShopCategories() {
  const tabs = document.getElementById('shop-categories-tabs');
  if (!tabs) return;

  const cats = ["All", "Food", "Toys", "Accessories", "Medicines", "Grooming", "Tech"];
  tabs.innerHTML = cats.map(c => {
    const isSelected = c === activeBreedType; // Reuse variables safely
    return `
      <button onclick="selectShopCategory('${c}')"
        style="padding: 9px 22px; border-radius: 100px; border: 1.5px solid ${isSelected ? 'var(--color-orange)' : 'var(--color-border)'}; background: ${isSelected ? 'var(--color-orange)' : 'var(--color-white)'}; color: ${isSelected ? '#fff' : 'var(--color-ink-sft)'}; font-size: 14px; font-weight: 500; cursor: pointer; transition: all .2s;">
        ${c}
      </button>
    `;
  }).join('');
}

function selectShopCategory(catName) {
  activeBreedType = catName;
  renderShopCategories();
  renderShopProducts(catName);
}

function renderShopProducts(category) {
  const grid = document.getElementById('shop-products-grid');
  if (!grid) return;

  const shown = category === 'All' ? products : products.filter(p => p.cat === category);

  grid.innerHTML = shown.map(p => {
    const isWished = wishlist.includes(p.id);
    return `
    <div class="card card-lift">
      <div style="position: relative; height: 240px; overflow: hidden;">
        <img src="${p.img}" style="width: 100%; height: 100%; object-fit: cover;" alt="${p.name}">
        ${p.badge ? `<div style="position: absolute; top: 14px; left: 14px; background: ${p.bc}; color: #fff; font-size: 9px; font-weight: 700; padding: 3px 10px; border-radius: 100px; text-transform: uppercase; letter-spacing: .05em;">${p.badge}</div>` : ''}
        <button onclick="event.stopPropagation(); toggleWishlistInline(${p.id})"
          style="position: absolute; top: 14px; right: 14px; width: 36px; height: 36px; border-radius: 50%; background: rgba(255, 255, 255, .9); border: none; font-size: 16px; cursor: pointer; display: flex; align-items: center; justify-content: center; transition: all 0.2s ease;">
          ${isWished ? '❤️' : '🤍'}
        </button>
      </div>
      <div style="padding: 20px 22px;">
        <h3 style="font-size: 16px; font-weight: 700; color: var(--color-ink); margin: 0 0 8px; line-height: 1.3;">${p.name}</h3>
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 14px;">
          <div style="display: flex; gap: 8px; align-items: baseline;">
            <span class="melody" style="font-size: 20px; font-weight: 500; color: var(--color-ink);">₹${p.price.toLocaleString()}</span>
            <span style="font-size: 13px; color: var(--color-sand); text-decoration: line-through;">₹${p.old.toLocaleString()}</span>
          </div>
          <span style="font-size: 12px; color: var(--color-orange); font-weight: 600;">⭐ ${p.rating}</span>
        </div>
        <button class="btn btn-md btn-primary" style="width: 100%;" onclick="addToCart(${p.id})">Add to Cart →</button>
      </div>
    </div>
  `;
  }).join('');
}

function toggleWishlistInline(id) {
  const index = wishlist.indexOf(id);
  if (index > -1) {
    wishlist.splice(index, 1);
  } else {
    wishlist.push(id);
  }
  renderShopProducts(activeBreedType || 'All');
}

// Cart Drawer Operations
function toggleCartDrawer() {
  const drawer = document.getElementById('cart-drawer');
  if (!drawer) return;
  chatbotOpen = false; // Close bot to avoid overlap
  document.getElementById('chatbot-window').style.display = 'none';

  const isCurrentlyOpen = drawer.style.display === 'flex';
  drawer.style.display = isCurrentlyOpen ? 'none' : 'flex';
  renderCartDrawer();
}

function addToCart(productId) {
  const p = products.find(x => x.id === productId);
  if (p) {
    cart.push(p);
    updateCartBadges();
    renderCartDrawer();
    // Auto slide open
    document.getElementById('cart-drawer').style.display = 'flex';
  }
}

function removeFromCart(idx) {
  cart.splice(idx, 1);
  updateCartBadges();
  renderCartDrawer();
}

function updateCartBadges() {
  const count = cart.length;
  const badges = [document.getElementById('shop-cart-badge')];
  badges.forEach(b => {
    if (!b) return;
    if (count > 0) {
      b.style.display = 'flex';
      b.textContent = count;
    } else {
      b.style.display = 'none';
    }
  });
}

function renderCartDrawer() {
  const container = document.getElementById('cart-drawer-items');
  const footer = document.getElementById('cart-drawer-footer');
  const countEl = document.getElementById('cart-drawer-count');

  if (!container || !footer) return;

  countEl.textContent = cart.length;

  if (cart.length === 0) {
    container.innerHTML = `<p style="color: var(--color-ink-sft); text-align: center; margin-top: 60px; font-size: 15px;">Your cart is empty 🛒</p>`;
    footer.style.display = 'none';
  } else {
    container.innerHTML = cart.map((item, i) => `
      <div style="display: flex; gap: 14px; padding: 14px 0; border-bottom: 1px solid var(--color-border); align-items: center;">
        <img src="${item.img}" style="width: 56px; height: 56px; object-fit: cover; border-radius: 10px;" alt="${item.name}">
        <div style="flex: 1;">
          <div style="font-size: 14px; font-weight: 600; color: var(--color-ink); line-height: 1.3;">${item.name}</div>
          <div style="font-size: 15px; font-weight: 700; color: var(--color-orange); margin-top: 4px;">₹${item.price.toLocaleString()}</div>
        </div>
        <button onclick="removeFromCart(${i})" style="background: none; border: none; color: var(--color-sand); cursor: pointer; font-size: 18px; padding: 0 4px;">✕</button>
      </div>
    `).join('');

    const totalVal = cart.reduce((s, p) => s + p.price, 0);
    document.getElementById('cart-drawer-total').textContent = `₹${totalVal.toLocaleString()}`;
    footer.style.display = 'block';
  }
}

function checkoutCart() {
  alert("Proceeding to secure checkout! 🛍️");
  cart = [];
  updateCartBadges();
  toggleCartDrawer();
}

/* ================================================================
   LOST & FOUND MANAGEMENT SYSTEM
   ================================================================ */
function setLostTab(tabId) {
  lostTab = tabId;
  const btnBrowse = document.getElementById('lost-tab-btn-browse');
  const btnReport = document.getElementById('lost-tab-btn-report');

  if (btnBrowse) {
    btnBrowse.style.borderBottom = tabId === 'browse' ? '3px solid var(--color-orange)' : '3px solid transparent';
    btnBrowse.style.color = tabId === 'browse' ? 'var(--color-orange)' : 'var(--color-ink-sft)';
    btnBrowse.style.fontWeight = tabId === 'browse' ? '700' : '500';
  }

  if (btnReport) {
    btnReport.style.borderBottom = tabId === 'report' ? '3px solid var(--color-orange)' : '3px solid transparent';
    btnReport.style.color = tabId === 'report' ? 'var(--color-orange)' : 'var(--color-ink-sft)';
    btnReport.style.fontWeight = tabId === 'report' ? '700' : '500';
  }

  const browseView = document.getElementById('lost-view-browse');
  const reportView = document.getElementById('lost-view-report');
  if (browseView) browseView.style.display = tabId === 'browse' ? 'block' : 'none';
  if (reportView) reportView.style.display = tabId === 'report' ? 'block' : 'none';

  if (tabId === 'browse') {
    renderLostListings();
  } else {
    resetLostForm();
  }
}

function setLostMode(mode) {
  lostMode = mode;
  const btnLost = document.getElementById('lost-mode-btn-lost');
  const btnFound = document.getElementById('lost-mode-btn-found');

  if (btnLost) {
    btnLost.style.background = mode === 'lost' ? 'var(--color-red)' : 'transparent';
    btnLost.style.color = mode === 'lost' ? '#fff' : 'var(--color-ink-sft)';
    btnLost.style.fontWeight = mode === 'lost' ? '700' : '500';
  }

  if (btnFound) {
    btnFound.style.background = mode === 'found' ? 'var(--color-green)' : 'transparent';
    btnFound.style.color = mode === 'found' ? '#fff' : 'var(--color-ink-sft)';
    btnFound.style.fontWeight = mode === 'found' ? '700' : '500';
  }

  // Banner details styling updates (safe checks)
  const banner = document.getElementById('lost-info-banner');
  const bannerText = document.getElementById('lost-info-banner-text');
  const submitBtn = document.getElementById('lost-submit-btn');
  const rewardField = document.getElementById('lost-reward-field');
  const currentlyWith = document.getElementById('lost-field-currently-with-label');
  const currentlyWithSel = document.getElementById('lost-field-currently-with');

  const petNameLabel = document.getElementById('lost-field-name-label');
  const petPhotoZone = document.getElementById('lost-drop-zone');
  const dateLabel = document.getElementById('lost-field-date-label');
  const timeLabel = document.getElementById('lost-field-time-label');
  const addressLabel = document.getElementById('lost-field-address-label');
  const sectionPetTitle = document.getElementById('lost-sec-pet-title');
  const sectionLocTitle = document.getElementById('lost-sec-loc-title');

  if (banner && bannerText) {
    if (mode === 'lost') {
      banner.style.background = 'var(--color-red-lt)';
      banner.style.borderColor = 'rgba(192, 57, 43, 0.2)';
      bannerText.textContent = '🚨 Act fast — most pets are found within the first 24 hours. Fill in as much detail as possible.';
      bannerText.style.color = 'var(--color-red)';
    } else {
      banner.style.background = 'var(--color-green-lt)';
      banner.style.borderColor = 'rgba(30, 107, 69, 0.2)';
      bannerText.textContent = "🙏 Thank you for helping! Fill in as much as you can — even partial info helps match with lost reports.";
      bannerText.style.color = 'var(--color-green)';
    }
  }

  if (submitBtn) {
    if (mode === 'lost') {
      submitBtn.style.background = 'var(--color-red)';
      submitBtn.style.boxShadow = '0 4px 18px rgba(192, 57, 43, 0.27)';
      submitBtn.textContent = '🚨 Submit Lost Pet Report';
    } else {
      submitBtn.style.background = 'var(--color-green)';
      submitBtn.style.boxShadow = '0 4px 18px rgba(30, 107, 69, 0.27)';
      submitBtn.textContent = '🐾 Submit Found Pet Report';
    }
  }

  if (rewardField) rewardField.style.display = mode === 'lost' ? 'flex' : 'none';
  if (currentlyWith) currentlyWith.style.display = mode === 'lost' ? 'none' : 'block';
  if (currentlyWithSel) currentlyWithSel.style.display = mode === 'lost' ? 'none' : 'block';
  
  if (petNameLabel) petNameLabel.textContent = mode === 'lost' ? "Pet's Name *" : "Pet's Name (best guess)";
  if (dateLabel) dateLabel.textContent = mode === 'lost' ? "Date Last Seen *" : "Date Found *";
  if (timeLabel) timeLabel.textContent = mode === 'lost' ? "Approximate Time *" : "Approximate Time";
  if (addressLabel) addressLabel.textContent = mode === 'lost' ? "Street / Address Last Seen *" : "Street / Address Found *";
  if (sectionPetTitle) sectionPetTitle.innerHTML = mode === 'lost' ? "<span>🐾</span> Pet Details" : "<span>🐾</span> Found Pet Details";
  if (sectionLocTitle) sectionLocTitle.innerHTML = mode === 'lost' ? "<span>📍</span> Last Seen Location" : "<span>📍</span> Where was the Pet Found?";
}

function toggleLostCollarDesc() {
  const collarVal = document.getElementById('lost-field-collar').value;
  document.getElementById('lost-field-collardesc-wrapper').style.display = collarVal === 'Yes' ? 'flex' : 'none';
}

function triggerLostPhotosUpload() {
  document.getElementById('lost-photo-input').click();
}

function handleLostPhotos(files) {
  const previewContainer = document.getElementById('lost-photos-preview');
  lostPhotos = []; // Reset locally

  Array.from(files).slice(0, 5).forEach(file => {
    const reader = new FileReader();
    reader.onload = e => {
      lostPhotos.push(e.target.result);
      const img = document.createElement('img');
      img.src = e.target.result;
      img.style.width = '64px';
      img.style.height = '64px';
      img.style.objectFit = 'cover';
      img.style.borderRadius = '10px';
      previewContainer.appendChild(img);
    };
    reader.readAsDataURL(file);
  });
}

function submitLostReport() {
  const name = document.getElementById('lost-field-name').value.trim();
  const spec = document.getElementById('lost-field-species').value;
  const color = document.getElementById('lost-field-color').value.trim();
  const features = document.getElementById('lost-field-features').value.trim();

  const date = document.getElementById('lost-field-date').value;
  const time = document.getElementById('lost-field-time').value;
  const addr = document.getElementById('lost-field-address').value.trim();
  const city = document.getElementById('lost-field-city').value.trim();

  const oName = document.getElementById('lost-field-ownername').value.trim();
  const oPhone = document.getElementById('lost-field-phone').value.trim();
  const oEmail = document.getElementById('lost-field-email').value.trim();

  // Basic validations
  if (lostMode === 'lost') {
    if (!name || !spec || !color || !features || !date || !time || !addr || !city || !oName || !oPhone || !oEmail) {
      alert("Please fill in all required (*) fields.");
      return;
    }
  } else {
    // Found mode requires less details
    if (!spec || !color || !date || !addr || !city || !oName || !oPhone) {
      alert("Please fill in all required (*) fields.");
      return;
    }
  }

  // Push new listings database mock item
  const newListing = {
    id: Date.now(),
    type: lostMode,
    name: lostMode === 'lost' ? name : (name || 'Spotted Pet'),
    species: spec,
    breed: document.getElementById('lost-field-breed').value.trim() || 'Mix',
    color: color,
    area: document.getElementById('lost-field-area').value.trim() || city,
    date: date,
    contact: oPhone,
    reward: lostMode === 'lost' ? (document.getElementById('lost-field-reward').value.trim() || 'N/A') : 'N/A',
    img: lostPhotos[0] || (spec === 'Dog' ? P.dog4 : P.cat2),
    
    // Detailed properties
    gender: document.getElementById('lost-field-gender').value || 'Unknown',
    age: document.getElementById('lost-field-age').value.trim() || 'Unknown',
    size: document.getElementById('lost-field-size').value || 'Unknown',
    microchip: document.getElementById('lost-field-microchip').value.trim() || 'None',
    features: features,
    collar: document.getElementById('lost-field-collar').value || 'No',
    collarDescription: document.getElementById('lost-field-collardesc') ? document.getElementById('lost-field-collardesc').value.trim() : '',
    time: time,
    address: addr,
    city: city,
    landmark: document.getElementById('lost-field-landmark').value.trim() || 'None',
    ownerName: oName,
    email: oEmail,
    phone2: document.getElementById('lost-field-phone2') ? document.getElementById('lost-field-phone2').value.trim() : '',
    currentlyWith: document.getElementById('lost-field-currently-with') ? document.getElementById('lost-field-currently-with').value : '',
    notes: document.getElementById('lost-field-notes').value.trim() || ''
  };

  lostListings.unshift(newListing);

  document.getElementById('lost-form-inputs').style.display = 'none';
  document.getElementById('lost-form-success').style.display = 'block';
}


function resetLostForm() {
  document.getElementById('lost-form-inputs').style.display = 'block';
  document.getElementById('lost-form-success').style.display = 'none';

  // Reset to step 1
  for (let i = 1; i <= 3; i++) {
    const el = document.getElementById(`lost-step-${i}`);
    if (el) el.style.display = i === 1 ? 'block' : 'none';
  }
  currentLostStep = 1;
  updateLostStepIndicator(1);

  // Empty inputs
  const inputs = ['lost-field-name', 'lost-field-species', 'lost-field-breed', 'lost-field-gender', 'lost-field-age', 'lost-field-color', 'lost-field-size', 'lost-field-microchip', 'lost-field-features', 'lost-field-collar', 'lost-field-collardesc', 'lost-field-date', 'lost-field-time', 'lost-field-address', 'lost-field-city', 'lost-field-area', 'lost-field-landmark', 'lost-field-ownername', 'lost-field-phone', 'lost-field-phone2', 'lost-field-email', 'lost-field-currently-with', 'lost-field-notes', 'lost-field-reward'];
  inputs.forEach(i => {
    const el = document.getElementById(i);
    if (el) el.value = '';
  });

  document.getElementById('lost-photos-preview').innerHTML = '';
  lostPhotos = [];
  setLostMode('lost');
}


function getListingCardHtml(l) {
  return `
    <div class="card card-lift" onclick="openLostDetailModal(${l.id})" style="border-radius: 20px; overflow: hidden; cursor: pointer; display: flex; flex-direction: column; background: #fff; border: 1px solid var(--color-border); box-shadow: 0 2px 16px rgba(0,0,0,0.06); transition: transform .2s, box-shadow .2s;" onmouseenter="this.style.transform='translateY(-4px)';this.style.boxShadow='0 12px 36px rgba(0,0,0,0.12)'" onmouseleave="this.style.transform='';this.style.boxShadow='0 2px 16px rgba(0,0,0,0.06)'">
      <!-- Image top -->
      <div style="position: relative; width: 100%; aspect-ratio: 4/3; overflow: hidden; background: var(--color-cream-dk);">
        <img src="${l.img}" style="width: 100%; height: 100%; object-fit: cover; display: block;" alt="${l.name}">
        <!-- Status badge overlay -->
        <div style="position: absolute; top: 12px; left: 12px;">
          <span class="pill ${l.type === 'lost' ? 'pill-red' : 'pill-green'}" style="font-size: 11px; font-weight: 700; backdrop-filter: blur(8px);">${l.type === 'lost' ? '🔴 LOST' : '🟢 FOUND'}</span>
        </div>
        ${l.reward !== 'N/A' ? `<div style="position: absolute; top: 12px; right: 12px; background: var(--color-orange); color: #fff; font-size: 11px; font-weight: 700; padding: 4px 10px; border-radius: 100px;">🏆 Reward</div>` : ''}
      </div>
      <!-- Details below -->
      <div style="padding: 18px 20px 20px; display: flex; flex-direction: column; gap: 10px; flex: 1;">
        <div style="display: flex; align-items: center; justify-content: space-between;">
          <div class="melody" style="font-size: 19px; font-weight: 700; color: var(--color-ink); line-height: 1.1;">${l.name}</div>
          <div style="font-size: 11px; color: var(--color-ink-sft); background: var(--color-cream); padding: 3px 10px; border-radius: 100px;">${l.species}</div>
        </div>
        <div style="font-size: 13px; color: var(--color-ink-sft);">${l.breed} &middot; ${l.color}</div>
        <div style="display: flex; flex-direction: column; gap: 4px; font-size: 12.5px; color: var(--color-ink-sft); border-top: 1px solid var(--color-border); padding-top: 10px; margin-top: 2px;">
          <div style="display: flex; align-items: center; gap: 6px;">📍 <span>${l.area}</span></div>
          <div style="display: flex; align-items: center; gap: 6px;">📅 <span>${l.date}</span></div>
          ${l.reward !== 'N/A' ? `<div style="display: flex; align-items: center; gap: 6px; color: var(--color-orange); font-weight: 600;">🏆 <span>${l.reward}</span></div>` : ''}
        </div>
      </div>
    </div>
  `;
}

function renderLostListings() {
  const grid = document.getElementById('lost-listings-grid');
  if (!grid) return;
  grid.innerHTML = lostListings.map(l => getListingCardHtml(l)).join('');
}

// ── Multi-step form navigation ──
let currentLostStep = 1;

function updateLostStepIndicator(step) {
  for (let i = 1; i <= 3; i++) {
    const dot = document.getElementById(`lost-step-dot-${i}`);
    const label = document.getElementById(`lost-step-label-${i}`);
    if (!dot) continue;
    if (i < step) {
      // Completed
      dot.style.background = 'var(--color-orange)';
      dot.style.color = '#fff';
      dot.style.boxShadow = 'none';
      dot.textContent = '✓';
      if (label) { label.style.color = 'var(--color-orange)'; }
    } else if (i === step) {
      // Active
      dot.style.background = 'var(--color-orange)';
      dot.style.color = '#fff';
      dot.style.boxShadow = '0 4px 14px rgba(230,93,42,0.35)';
      dot.textContent = String(i);
      if (label) { label.style.color = 'var(--color-orange)'; }
    } else {
      // Future
      dot.style.background = 'var(--color-border)';
      dot.style.color = 'var(--color-ink-sft)';
      dot.style.boxShadow = 'none';
      dot.textContent = String(i);
      if (label) { label.style.color = 'var(--color-ink-sft)'; }
    }
  }
  // Connector lines
  const line1 = document.getElementById('lost-step-line-1');
  const line2 = document.getElementById('lost-step-line-2');
  if (line1) line1.style.background = step > 1 ? 'var(--color-orange)' : 'var(--color-border)';
  if (line2) line2.style.background = step > 2 ? 'var(--color-orange)' : 'var(--color-border)';
}

function lostStepNext(fromStep) {
  // Simple per-step validation
  if (fromStep === 1) {
    const spec = document.getElementById('lost-field-species').value;
    const color = document.getElementById('lost-field-color').value.trim();
    if (!spec || !color) {
      alert('Please fill in at least Species and Primary Colour before proceeding.');
      return;
    }
  } else if (fromStep === 2) {
    const date = document.getElementById('lost-field-date').value;
    const city = document.getElementById('lost-field-city').value.trim();
    if (!date || !city) {
      alert('Please fill in at least Date and City before proceeding.');
      return;
    }
  }
  const current = document.getElementById(`lost-step-${fromStep}`);
  const next = document.getElementById(`lost-step-${fromStep + 1}`);
  if (current) current.style.display = 'none';
  if (next) { next.style.display = 'block'; next.style.animation = 'fadeInUp .3s ease both'; }
  currentLostStep = fromStep + 1;
  updateLostStepIndicator(currentLostStep);
  // Scroll to top of form
  const indicator = document.getElementById('lost-step-indicator');
  if (indicator) indicator.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function lostStepBack(fromStep) {
  const current = document.getElementById(`lost-step-${fromStep}`);
  const prev = document.getElementById(`lost-step-${fromStep - 1}`);
  if (current) current.style.display = 'none';
  if (prev) { prev.style.display = 'block'; }
  currentLostStep = fromStep - 1;
  updateLostStepIndicator(currentLostStep);
  const indicator = document.getElementById('lost-step-indicator');
  if (indicator) indicator.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function toggleLostFilterDropdown() {
  const dd = document.getElementById('lost-filter-dropdown');
  if (!dd) return;
  const isOpen = dd.style.display === 'block';
  dd.style.display = isOpen ? 'none' : 'block';
  // Close on outside click
  if (!isOpen) {
    const closeHandler = (e) => {
      const btn = document.getElementById('lost-filter-dropdown-btn');
      if (!dd.contains(e.target) && !btn.contains(e.target)) {
        dd.style.display = 'none';
        document.removeEventListener('click', closeHandler);
      }
    };
    setTimeout(() => document.addEventListener('click', closeHandler), 0);
  }
}

function selectLostFilter(typeFilter, label) {
  const dd = document.getElementById('lost-filter-dropdown');
  const labelEl = document.getElementById('lost-filter-label');
  if (dd) dd.style.display = 'none';
  if (labelEl) labelEl.textContent = '🗂 ' + label;
  // Update button highlight
  const btn = document.getElementById('lost-filter-dropdown-btn');
  if (btn) {
    btn.style.background = typeFilter !== 'All' ? 'var(--color-orange)' : 'var(--color-white)';
    btn.style.color = typeFilter !== 'All' ? '#fff' : 'var(--color-ink)';
    btn.style.borderColor = typeFilter !== 'All' ? 'var(--color-orange)' : 'var(--color-border)';
  }
  filterLostListings(typeFilter);
}

function filterLostListings(typeFilter) {
  let shown = lostListings;
  if (typeFilter !== 'All') {
    shown = lostListings.filter(l => l.type === typeFilter);
  }
  const grid = document.getElementById('lost-listings-grid');
  if (grid) {
    grid.innerHTML = shown.map(l => getListingCardHtml(l)).join('');
  }
}

function searchLostListings() {
  const query = document.getElementById('lost-search').value.toLowerCase();
  const matched = lostListings.filter(l => {
    return l.name.toLowerCase().includes(query) ||
      l.breed.toLowerCase().includes(query) ||
      l.area.toLowerCase().includes(query) ||
      l.color.toLowerCase().includes(query);
  });

  const grid = document.getElementById('lost-listings-grid');
  if (grid) {
    grid.innerHTML = matched.map(l => getListingCardHtml(l)).join('');
  }
}

function openLostDetailModal(id) {
  const listing = lostListings.find(l => l.id == id);
  if (!listing) return;

  const body = document.getElementById('modal-lost-detail-body');
  if (!body) return;

  // Compile full details formatted as a form
  if (listing.type === 'lost') {
    body.innerHTML = `
      <div style="padding: 32px;">
        <!-- Form Header -->
        <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 28px; border-bottom: 2px solid var(--color-red-lt); padding-bottom: 16px;">
          <span style="font-size: 32px;">🔴</span>
          <div>
            <h2 class="melody" style="font-size: 32px; color: var(--color-ink); margin: 0; line-height: 1.1;">I Lost My Pet — Report Form</h2>
            <p style="font-size: 13px; color: var(--color-ink-sft); margin: 4px 0 0 0;">This form was submitted by the owner. Below are the registered details.</p>
          </div>
        </div>

        <!-- Form Body -->
        <div style="display: flex; flex-direction: column; gap: 24px;">
          <!-- Photo Display -->
          <div style="width: 100%; height: 280px; border-radius: 16px; overflow: hidden; background: #eee;">
            <img src="${listing.img}" style="width: 100%; height: 100%; object-fit: cover;" alt="${listing.name}">
          </div>

          <!-- Section 1: Pet Details -->
          <div style="background: var(--color-cream); border-radius: 20px; padding: 24px; border: 1px solid var(--color-border);">
            <h3 style="font-size: 16px; font-weight: 700; color: var(--color-ink); margin-bottom: 20px; display: flex; align-items: center; gap: 8px;">
              <span>🐾</span> Pet Details
            </h3>
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 16px;">
              <div style="display: flex; flex-direction: column; gap: 6px;">
                <label style="font-size: 11px; font-weight: 700; text-transform: uppercase; color: var(--color-ink-sft);">Pet's Name</label>
                <input style="padding: 10px 14px; border-radius: 8px; border: 1.5px solid var(--color-border); background: #fff; color: var(--color-ink); width: 100%; font-size: 14px;" value="${listing.name || ''}" disabled>
              </div>
              <div style="display: flex; flex-direction: column; gap: 6px;">
                <label style="font-size: 11px; font-weight: 700; text-transform: uppercase; color: var(--color-ink-sft);">Species</label>
                <input style="padding: 10px 14px; border-radius: 8px; border: 1.5px solid var(--color-border); background: #fff; color: var(--color-ink); width: 100%; font-size: 14px;" value="${listing.species || ''}" disabled>
              </div>
              <div style="display: flex; flex-direction: column; gap: 6px;">
                <label style="font-size: 11px; font-weight: 700; text-transform: uppercase; color: var(--color-ink-sft);">Breed</label>
                <input style="padding: 10px 14px; border-radius: 8px; border: 1.5px solid var(--color-border); background: #fff; color: var(--color-ink); width: 100%; font-size: 14px;" value="${listing.breed || ''}" disabled>
              </div>
              <div style="display: flex; flex-direction: column; gap: 6px;">
                <label style="font-size: 11px; font-weight: 700; text-transform: uppercase; color: var(--color-ink-sft);">Gender</label>
                <input style="padding: 10px 14px; border-radius: 8px; border: 1.5px solid var(--color-border); background: #fff; color: var(--color-ink); width: 100%; font-size: 14px;" value="${listing.gender || ''}" disabled>
              </div>
              <div style="display: flex; flex-direction: column; gap: 6px;">
                <label style="font-size: 11px; font-weight: 700; text-transform: uppercase; color: var(--color-ink-sft);">Approximate Age</label>
                <input style="padding: 10px 14px; border-radius: 8px; border: 1.5px solid var(--color-border); background: #fff; color: var(--color-ink); width: 100%; font-size: 14px;" value="${listing.age || ''}" disabled>
              </div>
              <div style="display: flex; flex-direction: column; gap: 6px;">
                <label style="font-size: 11px; font-weight: 700; text-transform: uppercase; color: var(--color-ink-sft);">Primary Colour</label>
                <input style="padding: 10px 14px; border-radius: 8px; border: 1.5px solid var(--color-border); background: #fff; color: var(--color-ink); width: 100%; font-size: 14px;" value="${listing.color || ''}" disabled>
              </div>
              <div style="display: flex; flex-direction: column; gap: 6px;">
                <label style="font-size: 11px; font-weight: 700; text-transform: uppercase; color: var(--color-ink-sft);">Size</label>
                <input style="padding: 10px 14px; border-radius: 8px; border: 1.5px solid var(--color-border); background: #fff; color: var(--color-ink); width: 100%; font-size: 14px;" value="${listing.size || ''}" disabled>
              </div>
              <div style="display: flex; flex-direction: column; gap: 6px;">
                <label style="font-size: 11px; font-weight: 700; text-transform: uppercase; color: var(--color-ink-sft);">Microchip ID</label>
                <input style="padding: 10px 14px; border-radius: 8px; border: 1.5px solid var(--color-border); background: #fff; color: var(--color-ink); width: 100%; font-size: 14px;" value="${listing.microchip || 'None'}" disabled>
              </div>
              <div style="display: flex; flex-direction: column; gap: 6px;">
                <label style="font-size: 11px; font-weight: 700; text-transform: uppercase; color: var(--color-ink-sft);">Wearing Collar?</label>
                <input style="padding: 10px 14px; border-radius: 8px; border: 1.5px solid var(--color-border); background: #fff; color: var(--color-ink); width: 100%; font-size: 14px;" value="${listing.collar || 'No'}" disabled>
              </div>
              <div style="display: flex; flex-direction: column; gap: 6px;">
                <label style="font-size: 11px; font-weight: 700; text-transform: uppercase; color: var(--color-ink-sft);">Collar Description</label>
                <input style="padding: 10px 14px; border-radius: 8px; border: 1.5px solid var(--color-border); background: #fff; color: var(--color-ink); width: 100%; font-size: 14px;" value="${listing.collarDescription || 'N/A'}" disabled>
              </div>
            </div>
            <div style="display: flex; flex-direction: column; gap: 6px; margin-top: 16px;">
              <label style="font-size: 11px; font-weight: 700; text-transform: uppercase; color: var(--color-ink-sft);">Distinctive Marks / Features</label>
              <textarea style="padding: 10px 14px; border-radius: 8px; border: 1.5px solid var(--color-border); background: #fff; color: var(--color-ink); width: 100%; font-size: 14px; resize: none; min-height: 60px; font-family: inherit;" disabled>${listing.features || 'None'}</textarea>
            </div>
          </div>

          <!-- Section 2: Last Seen Location -->
          <div style="background: var(--color-cream); border-radius: 20px; padding: 24px; border: 1px solid var(--color-border);">
            <h3 style="font-size: 16px; font-weight: 700; color: var(--color-ink); margin-bottom: 20px; display: flex; align-items: center; gap: 8px;">
              <span>📍</span> Last Seen Location
            </h3>
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 16px;">
              <div style="display: flex; flex-direction: column; gap: 6px;">
                <label style="font-size: 11px; font-weight: 700; text-transform: uppercase; color: var(--color-ink-sft);">Date Last Seen</label>
                <input style="padding: 10px 14px; border-radius: 8px; border: 1.5px solid var(--color-border); background: #fff; color: var(--color-ink); width: 100%; font-size: 14px;" value="${listing.date || ''}" disabled>
              </div>
              <div style="display: flex; flex-direction: column; gap: 6px;">
                <label style="font-size: 11px; font-weight: 700; text-transform: uppercase; color: var(--color-ink-sft);">Approximate Time</label>
                <input style="padding: 10px 14px; border-radius: 8px; border: 1.5px solid var(--color-border); background: #fff; color: var(--color-ink); width: 100%; font-size: 14px;" value="${listing.time || ''}" disabled>
              </div>
              <div style="display: flex; flex-direction: column; gap: 6px;">
                <label style="font-size: 11px; font-weight: 700; text-transform: uppercase; color: var(--color-ink-sft);">City</label>
                <input style="padding: 10px 14px; border-radius: 8px; border: 1.5px solid var(--color-border); background: #fff; color: var(--color-ink); width: 100%; font-size: 14px;" value="${listing.city || 'Coimbatore'}" disabled>
              </div>
              <div style="display: flex; flex-direction: column; gap: 6px;">
                <label style="font-size: 11px; font-weight: 700; text-transform: uppercase; color: var(--color-ink-sft);">Area / Locality</label>
                <input style="padding: 10px 14px; border-radius: 8px; border: 1.5px solid var(--color-border); background: #fff; color: var(--color-ink); width: 100%; font-size: 14px;" value="${listing.area || ''}" disabled>
              </div>
            </div>
            <div style="display: flex; flex-direction: column; gap: 6px; margin-top: 16px;">
              <label style="font-size: 11px; font-weight: 700; text-transform: uppercase; color: var(--color-ink-sft);">Street / Address Last Seen</label>
              <input style="padding: 10px 14px; border-radius: 8px; border: 1.5px solid var(--color-border); background: #fff; color: var(--color-ink); width: 100%; font-size: 14px;" value="${listing.address || ''}" disabled>
            </div>
            <div style="display: flex; flex-direction: column; gap: 6px; margin-top: 16px;">
              <label style="font-size: 11px; font-weight: 700; text-transform: uppercase; color: var(--color-ink-sft);">Nearby Landmark</label>
              <input style="padding: 10px 14px; border-radius: 8px; border: 1.5px solid var(--color-border); background: #fff; color: var(--color-ink); width: 100%; font-size: 14px;" value="${listing.landmark || 'None'}" disabled>
            </div>
          </div>

          <!-- Section 3: Owner & Contact Info -->
          <div style="background: var(--color-cream); border-radius: 20px; padding: 24px; border: 1px solid var(--color-border);">
            <h3 style="font-size: 16px; font-weight: 700; color: var(--color-ink); margin-bottom: 20px; display: flex; align-items: center; gap: 8px;">
              <span>👤</span> Owner & Contact Information
            </h3>
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 16px;">
              <div style="display: flex; flex-direction: column; gap: 6px;">
                <label style="font-size: 11px; font-weight: 700; text-transform: uppercase; color: var(--color-ink-sft);">Your Full Name</label>
                <input style="padding: 10px 14px; border-radius: 8px; border: 1.5px solid var(--color-border); background: #fff; color: var(--color-ink); width: 100%; font-size: 14px;" value="${listing.ownerName || 'Anonymous'}" disabled>
              </div>
              <div style="display: flex; flex-direction: column; gap: 6px;">
                <label style="font-size: 11px; font-weight: 700; text-transform: uppercase; color: var(--color-ink-sft);">Primary Phone</label>
                <input style="padding: 10px 14px; border-radius: 8px; border: 1.5px solid var(--color-border); background: #fff; color: var(--color-ink); width: 100%; font-size: 14px;" value="${listing.contact || ''}" disabled>
              </div>
              <div style="display: flex; flex-direction: column; gap: 6px;">
                <label style="font-size: 11px; font-weight: 700; text-transform: uppercase; color: var(--color-ink-sft);">Alternate Phone</label>
                <input style="padding: 10px 14px; border-radius: 8px; border: 1.5px solid var(--color-border); background: #fff; color: var(--color-ink); width: 100%; font-size: 14px;" value="${listing.phone2 || 'None'}" disabled>
              </div>
              <div style="display: flex; flex-direction: column; gap: 6px;">
                <label style="font-size: 11px; font-weight: 700; text-transform: uppercase; color: var(--color-ink-sft);">Email Address</label>
                <input style="padding: 10px 14px; border-radius: 8px; border: 1.5px solid var(--color-border); background: #fff; color: var(--color-ink); width: 100%; font-size: 14px;" value="${listing.email || ''}" disabled>
              </div>
            </div>
            <div style="display: flex; flex-direction: column; gap: 6px; margin-top: 16px;">
              <label style="font-size: 11px; font-weight: 700; text-transform: uppercase; color: var(--color-ink-sft);">Additional Details / Behaviour Notes</label>
              <textarea style="padding: 10px 14px; border-radius: 8px; border: 1.5px solid var(--color-border); background: #fff; color: var(--color-ink); width: 100%; font-size: 14px; resize: none; min-height: 60px; font-family: inherit;" disabled>${listing.notes || ''}</textarea>
            </div>
            <div style="display: flex; flex-direction: column; gap: 6px; margin-top: 16px; max-width: 300px;">
              <label style="font-size: 11px; font-weight: 700; text-transform: uppercase; color: var(--color-ink-sft);">Reward Offered</label>
              <input style="padding: 10px 14px; border-radius: 8px; border: 1.5px solid var(--color-border); background: #fff; color: var(--color-orange); font-weight: bold; width: 100%; font-size: 14px;" value="${listing.reward || 'N/A'}" disabled>
            </div>
          </div>
        </div>

        <!-- Footer Actions -->
        <div style="display: flex; gap: 12px; justify-content: flex-end; margin-top: 28px; border-top: 1px solid var(--color-border); padding-top: 20px;">
          <button class="btn btn-md btn-outline" onclick="closeLostModal()">Close Form</button>
          <a class="btn btn-md btn-primary" href="tel:${listing.contact}" style="display: inline-flex; align-items: center; justify-content: center; text-decoration: none;">📞 Contact Owner</a>
        </div>
      </div>
    `;
  } else {
    body.innerHTML = `
      <div style="padding: 32px;">
        <!-- Form Header -->
        <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 28px; border-bottom: 2px solid var(--color-green-lt); padding-bottom: 16px;">
          <span style="font-size: 32px;">🟢</span>
          <div>
            <h2 class="melody" style="font-size: 32px; color: var(--color-ink); margin: 0; line-height: 1.1;">I Found a Pet — Report Form</h2>
            <p style="font-size: 13px; color: var(--color-ink-sft); margin: 4px 0 0 0;">This form was submitted by the finder. Below are the registered details.</p>
          </div>
        </div>

        <!-- Form Body -->
        <div style="display: flex; flex-direction: column; gap: 24px;">
          <!-- Photo Display -->
          <div style="width: 100%; height: 280px; border-radius: 16px; overflow: hidden; background: #eee;">
            <img src="${listing.img}" style="width: 100%; height: 100%; object-fit: cover;" alt="${listing.name}">
          </div>

          <!-- Section 1: Found Pet Details -->
          <div style="background: var(--color-cream); border-radius: 20px; padding: 24px; border: 1px solid var(--color-border);">
            <h3 style="font-size: 16px; font-weight: 700; color: var(--color-ink); margin-bottom: 20px; display: flex; align-items: center; gap: 8px;">
              <span>🐾</span> Found Pet Details
            </h3>
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 16px;">
              <div style="display: flex; flex-direction: column; gap: 6px;">
                <label style="font-size: 11px; font-weight: 700; text-transform: uppercase; color: var(--color-ink-sft);">Species</label>
                <input style="padding: 10px 14px; border-radius: 8px; border: 1.5px solid var(--color-border); background: #fff; color: var(--color-ink); width: 100%; font-size: 14px;" value="${listing.species || ''}" disabled>
              </div>
              <div style="display: flex; flex-direction: column; gap: 6px;">
                <label style="font-size: 11px; font-weight: 700; text-transform: uppercase; color: var(--color-ink-sft);">Breed (best guess)</label>
                <input style="padding: 10px 14px; border-radius: 8px; border: 1.5px solid var(--color-border); background: #fff; color: var(--color-ink); width: 100%; font-size: 14px;" value="${listing.breed || ''}" disabled>
              </div>
              <div style="display: flex; flex-direction: column; gap: 6px;">
                <label style="font-size: 11px; font-weight: 700; text-transform: uppercase; color: var(--color-ink-sft);">Gender</label>
                <input style="padding: 10px 14px; border-radius: 8px; border: 1.5px solid var(--color-border); background: #fff; color: var(--color-ink); width: 100%; font-size: 14px;" value="${listing.gender || ''}" disabled>
              </div>
              <div style="display: flex; flex-direction: column; gap: 6px;">
                <label style="font-size: 11px; font-weight: 700; text-transform: uppercase; color: var(--color-ink-sft);">Estimated Age</label>
                <input style="padding: 10px 14px; border-radius: 8px; border: 1.5px solid var(--color-border); background: #fff; color: var(--color-ink); width: 100%; font-size: 14px;" value="${listing.age || ''}" disabled>
              </div>
              <div style="display: flex; flex-direction: column; gap: 6px;">
                <label style="font-size: 11px; font-weight: 700; text-transform: uppercase; color: var(--color-ink-sft);">Colour / Markings</label>
                <input style="padding: 10px 14px; border-radius: 8px; border: 1.5px solid var(--color-border); background: #fff; color: var(--color-ink); width: 100%; font-size: 14px;" value="${listing.color || ''}" disabled>
              </div>
              <div style="display: flex; flex-direction: column; gap: 6px;">
                <label style="font-size: 11px; font-weight: 700; text-transform: uppercase; color: var(--color-ink-sft);">Size</label>
                <input style="padding: 10px 14px; border-radius: 8px; border: 1.5px solid var(--color-border); background: #fff; color: var(--color-ink); width: 100%; font-size: 14px;" value="${listing.size || ''}" disabled>
              </div>
              <div style="display: flex; flex-direction: column; gap: 6px;">
                <label style="font-size: 11px; font-weight: 700; text-transform: uppercase; color: var(--color-ink-sft);">Has Collar?</label>
                <input style="padding: 10px 14px; border-radius: 8px; border: 1.5px solid var(--color-border); background: #fff; color: var(--color-ink); width: 100%; font-size: 14px;" value="${listing.collar || 'No'}" disabled>
              </div>
              <div style="display: flex; flex-direction: column; gap: 6px;">
                <label style="font-size: 11px; font-weight: 700; text-transform: uppercase; color: var(--color-ink-sft);">Collar Description</label>
                <input style="padding: 10px 14px; border-radius: 8px; border: 1.5px solid var(--color-border); background: #fff; color: var(--color-ink); width: 100%; font-size: 14px;" value="${listing.collarDescription || 'N/A'}" disabled>
              </div>
              <div style="display: flex; flex-direction: column; gap: 6px;">
                <label style="font-size: 11px; font-weight: 700; text-transform: uppercase; color: var(--color-ink-sft);">Microchip Scanned?</label>
                <input style="padding: 10px 14px; border-radius: 8px; border: 1.5px solid var(--color-border); background: #fff; color: var(--color-ink); width: 100%; font-size: 14px;" value="${listing.microchip || 'Not yet scanned'}" disabled>
              </div>
            </div>
            <div style="display: flex; flex-direction: column; gap: 6px; margin-top: 16px;">
              <label style="font-size: 11px; font-weight: 700; text-transform: uppercase; color: var(--color-ink-sft);">Distinctive Marks / Features</label>
              <textarea style="padding: 10px 14px; border-radius: 8px; border: 1.5px solid var(--color-border); background: #fff; color: var(--color-ink); width: 100%; font-size: 14px; resize: none; min-height: 60px; font-family: inherit;" disabled>${listing.features || 'None'}</textarea>
            </div>
          </div>

          <!-- Section 2: Found Location -->
          <div style="background: var(--color-cream); border-radius: 20px; padding: 24px; border: 1px solid var(--color-border);">
            <h3 style="font-size: 16px; font-weight: 700; color: var(--color-ink); margin-bottom: 20px; display: flex; align-items: center; gap: 8px;">
              <span>📍</span> Where was the Pet Found?
            </h3>
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 16px;">
              <div style="display: flex; flex-direction: column; gap: 6px;">
                <label style="font-size: 11px; font-weight: 700; text-transform: uppercase; color: var(--color-ink-sft);">Date Found</label>
                <input style="padding: 10px 14px; border-radius: 8px; border: 1.5px solid var(--color-border); background: #fff; color: var(--color-ink); width: 100%; font-size: 14px;" value="${listing.date || ''}" disabled>
              </div>
              <div style="display: flex; flex-direction: column; gap: 6px;">
                <label style="font-size: 11px; font-weight: 700; text-transform: uppercase; color: var(--color-ink-sft);">Approximate Time</label>
                <input style="padding: 10px 14px; border-radius: 8px; border: 1.5px solid var(--color-border); background: #fff; color: var(--color-ink); width: 100%; font-size: 14px;" value="${listing.time || ''}" disabled>
              </div>
              <div style="display: flex; flex-direction: column; gap: 6px;">
                <label style="font-size: 11px; font-weight: 700; text-transform: uppercase; color: var(--color-ink-sft);">City</label>
                <input style="padding: 10px 14px; border-radius: 8px; border: 1.5px solid var(--color-border); background: #fff; color: var(--color-ink); width: 100%; font-size: 14px;" value="${listing.city || 'Coimbatore'}" disabled>
              </div>
              <div style="display: flex; flex-direction: column; gap: 6px;">
                <label style="font-size: 11px; font-weight: 700; text-transform: uppercase; color: var(--color-ink-sft);">Area / Locality</label>
                <input style="padding: 10px 14px; border-radius: 8px; border: 1.5px solid var(--color-border); background: #fff; color: var(--color-ink); width: 100%; font-size: 14px;" value="${listing.area || ''}" disabled>
              </div>
            </div>
            <div style="display: flex; flex-direction: column; gap: 6px; margin-top: 16px;">
              <label style="font-size: 11px; font-weight: 700; text-transform: uppercase; color: var(--color-ink-sft);">Street / Address Found</label>
              <input style="padding: 10px 14px; border-radius: 8px; border: 1.5px solid var(--color-border); background: #fff; color: var(--color-ink); width: 100%; font-size: 14px;" value="${listing.address || ''}" disabled>
            </div>
            <div style="display: flex; flex-direction: column; gap: 6px; margin-top: 16px;">
              <label style="font-size: 11px; font-weight: 700; text-transform: uppercase; color: var(--color-ink-sft);">Nearby Landmark</label>
              <input style="padding: 10px 14px; border-radius: 8px; border: 1.5px solid var(--color-border); background: #fff; color: var(--color-ink); width: 100%; font-size: 14px;" value="${listing.landmark || 'None'}" disabled>
            </div>
          </div>

          <!-- Section 3: Contact Info -->
          <div style="background: var(--color-cream); border-radius: 20px; padding: 24px; border: 1px solid var(--color-border);">
            <h3 style="font-size: 16px; font-weight: 700; color: var(--color-ink); margin-bottom: 20px; display: flex; align-items: center; gap: 8px;">
              <span>👤</span> Finder & Contact Information
            </h3>
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 16px;">
              <div style="display: flex; flex-direction: column; gap: 6px;">
                <label style="font-size: 11px; font-weight: 700; text-transform: uppercase; color: var(--color-ink-sft);">Your Full Name</label>
                <input style="padding: 10px 14px; border-radius: 8px; border: 1.5px solid var(--color-border); background: #fff; color: var(--color-ink); width: 100%; font-size: 14px;" value="${listing.ownerName || 'Anonymous'}" disabled>
              </div>
              <div style="display: flex; flex-direction: column; gap: 6px;">
                <label style="font-size: 11px; font-weight: 700; text-transform: uppercase; color: var(--color-ink-sft);">Primary Phone</label>
                <input style="padding: 10px 14px; border-radius: 8px; border: 1.5px solid var(--color-border); background: #fff; color: var(--color-ink); width: 100%; font-size: 14px;" value="${listing.contact || ''}" disabled>
              </div>
              <div style="display: flex; flex-direction: column; gap: 6px;">
                <label style="font-size: 11px; font-weight: 700; text-transform: uppercase; color: var(--color-ink-sft);">Your Email</label>
                <input style="padding: 10px 14px; border-radius: 8px; border: 1.5px solid var(--color-border); background: #fff; color: var(--color-ink); width: 100%; font-size: 14px;" value="${listing.email || ''}" disabled>
              </div>
              <div style="display: flex; flex-direction: column; gap: 6px;">
                <label style="font-size: 11px; font-weight: 700; text-transform: uppercase; color: var(--color-ink-sft);">Pet Currently With</label>
                <input style="padding: 10px 14px; border-radius: 8px; border: 1.5px solid var(--color-border); background: #fff; color: var(--color-ink); width: 100%; font-size: 14px;" value="${listing.currentlyWith || 'Not specified'}" disabled>
              </div>
            </div>
            <div style="display: flex; flex-direction: column; gap: 6px; margin-top: 16px;">
              <label style="font-size: 11px; font-weight: 700; text-transform: uppercase; color: var(--color-ink-sft);">Additional Notes</label>
              <textarea style="padding: 10px 14px; border-radius: 8px; border: 1.5px solid var(--color-border); background: #fff; color: var(--color-ink); width: 100%; font-size: 14px; resize: none; min-height: 60px; font-family: inherit;" disabled>${listing.notes || ''}</textarea>
            </div>
          </div>
        </div>

        <!-- Footer Actions -->
        <div style="display: flex; gap: 12px; justify-content: flex-end; margin-top: 28px; border-top: 1px solid var(--color-border); padding-top: 20px;">
          <button class="btn btn-md btn-outline" onclick="closeLostModal()">Close Form</button>
          <a class="btn btn-md btn-primary" href="tel:${listing.contact}" style="display: inline-flex; align-items: center; justify-content: center; text-decoration: none; background: var(--color-green); border-color: var(--color-green);">📞 Contact Finder</a>
        </div>
      </div>
    `;
  }

  // Show modal and register background close
  const modal = document.getElementById('modal-lost-detail');
  if (modal) {
    modal.style.display = 'flex';
    modal.onclick = closeLostModal;
    document.body.style.overflow = 'hidden';
  }
}

function closeLostModal() {
  const modal = document.getElementById('modal-lost-detail');
  if (modal) {
    modal.style.display = 'none';
    document.body.style.overflow = '';
  }
}

/* ================================================================
   USER PROFILE DASHBOARD ENGINE
   ================================================================ */
function setDashboardTab(tabId) {
  dashboardTab = tabId;
  const tabs = ['overview', 'pets', 'bookings', 'orders'];
  tabs.forEach(t => {
    const btn = document.getElementById('dash-tab-' + t);
    if (!btn) return;
    btn.style.background = t === tabId ? 'var(--color-orange)' : 'transparent';
    btn.style.color = t === tabId ? '#fff' : 'var(--color-ink-sft)';
    btn.style.fontWeight = t === tabId ? '600' : '400';

    const panel = document.getElementById('dash-view-' + t);
    if (panel) panel.style.display = t === tabId ? 'block' : 'none';
  });

  if (tabId === 'overview') {
    renderDashboardOverview();
  } else if (tabId === 'pets') {
    renderDashboardPets();
  } else if (tabId === 'bookings') {
    renderDashboardBookings();
  } else if (tabId === 'orders') {
    renderDashboardOrders();
  }
}

function renderDashboardOverview() {
  document.getElementById('dash-stat-pets').textContent = userPets.length;

  const hList = document.getElementById('dash-health-list');
  if (!hList) return;

  hList.innerHTML = userPets.map(p => `
    <div style="display: flex; gap: 16px; align-items: center;">
      <img src="${p.img}" style="width: 54px; height: 54px; border-radius: 50%; object-fit: cover; flex-shrink: 0;" alt="${p.name}">
      <div style="flex: 1;">
        <div style="display: flex; justify-content: space-between; margin-bottom: 8px;">
          <div><span style="font-weight: 700; color: var(--color-ink); font-size: 15px;">${p.name}</span><span style="font-size: 13px; color: var(--color-ink-sft); margin-left: 8px;">${p.breed}</span></div>
          <span style="font-weight: 700; color: #22C55E; font-size: 14px;">${p.health}%</span>
        </div>
        <div style="background: var(--color-cream-dk); border-radius: 100px; height: 6px;">
          <div style="background: linear-gradient(90deg, var(--color-green), #22C55E); width: ${p.health}%; height: 6px; border-radius: 100px;"></div>
        </div>
        <div style="font-size: 12px; color: var(--color-ink-sft); margin-top: 5px; display: flex; gap: 14px;">
          <span>Weight: ${p.weight}</span><span>Next vet: ${p.nextVet}</span><span>Vaccine: ${p.nextVacc}</span>
        </div>
      </div>
    </div>
  `).join('');
}

function renderDashboardPets() {
  const grid = document.getElementById('dash-pets-grid');
  if (!grid) return;

  grid.innerHTML = userPets.map(p => `
    <div class="card" style="border-radius: 24px;">
      <div style="height: 180px; overflow: hidden; position: relative;">
        <img src="${p.img}" style="width: 100%; height: 100%; object-fit: cover;" alt="${p.name}">
        <div style="position: absolute; inset: 0; background: linear-gradient(to top, rgba(0,0,0,.45), transparent);"></div>
        <h3 class="melody" style="position: absolute; bottom: 14px; left: 18px; color: #fff; font-size: 24px;">${p.name}</h3>
      </div>
      <div style="padding: 20px 24px; display: flex; flex-direction: column; flex: 1; justify-content: space-between;">
        <p style="color: var(--color-ink-sft); font-size: 14px; margin-bottom: 16px;">${p.breed} · ${p.age || 'Unknown age'} · ${p.weight}</p>
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-bottom: 16px;">
          <div style="background: var(--color-cream); border-radius: 11px; padding: 10px 14px;">
            <div style="font-size: 10px; font-weight: 700; letter-spacing: .06em; text-transform: uppercase; color: var(--color-ink-sft);">Next Vet</div>
            <div style="font-weight: 700; color: var(--color-ink); font-size: 14px; margin-top: 2px;">${p.nextVet}</div>
          </div>
          <div style="background: var(--color-cream); border-radius: 11px; padding: 10px 14px;">
            <div style="font-size: 10px; font-weight: 700; letter-spacing: .06em; text-transform: uppercase; color: var(--color-ink-sft);">Next Vaccine</div>
            <div style="font-weight: 700; color: var(--color-ink); font-size: 14px; margin-top: 2px;">${p.nextVacc}</div>
          </div>
        </div>
        ${p.food ? `<p style="font-size: 12px; color: var(--color-ink-sft); margin-bottom: 12px;">🍽 ${p.food}</p>` : ''}
        ${p.allergies && p.allergies !== 'None' ? `<p style="font-size: 12px; color: var(--color-red); margin-bottom: 12px;">⚠️ Allergies: ${p.allergies}</p>` : ''}
        <div style="display: flex; gap: 10px; margin-top: auto;">
          <button class="btn btn-md btn-ghost" style="flex: 1;" onclick="alert('Profile details edit is mock-only.')">Edit</button>
          <button class="btn btn-md btn-primary" style="flex: 1;" onclick="alert('Loading full health reports charts...')">Health Records</button>
        </div>
      </div>
    </div>
  `).join('') + `
    <!-- Add Pet Card -->
    <div class="add-pet-dash-card" onclick="openAddPetModal()">
      <div style="width: 56px; height: 56px; border-radius: 50%; background: var(--color-orange-lt); display: flex; align-items: center; justify-content: center; font-size: 24px; margin-bottom: 14px; color: var(--color-orange);">+</div>
      <div class="melody" style="color: var(--color-ink-sft); font-size: 20px;">Add a New Pet</div>
      <div style="font-size: 13px; color: var(--color-sand); margin-top: 6px; text-align: center;">Track health, vaccines, diet & more</div>
    </div>
  `;
}

function renderDashboardBookings() {
  const list = document.getElementById('dash-bookings-list');
  if (!list) return;

  const mockBookings = [
    { id: "BK-1082", petName: "Max", service: "Veterinary Consultation", date: "Jun 15, 2026", time: "10:30 AM", provider: "Dr. Kiran Patel", status: "Upcoming", price: "₹650", icon: "🏥" },
    { id: "BK-1054", petName: "Bella", service: "Full Grooming Session", date: "Jun 25, 2026", time: "02:00 PM", provider: "Pawprint Grooming Studio", status: "Upcoming", price: "₹1,499", icon: "✂️" },
    { id: "BK-0982", petName: "Max", service: "Behavioral Puppy Training", date: "Jun 20, 2026", time: "09:00 AM", provider: "Priya Venkatesh", status: "Upcoming", price: "₹1,200", icon: "🎓" },
    { id: "BK-0841", petName: "Bella", service: "Deworming Clinic Visit", date: "May 28, 2026", time: "11:00 AM", provider: "Dr. Kiran Patel", status: "Completed", price: "₹450", icon: "💉" }
  ];

  list.innerHTML = mockBookings.map(b => `
    <div class="card" style="padding: 24px; flex-direction: row; align-items: center; gap: 20px; flex-wrap: wrap;">
      <div style="width: 50px; height: 50px; border-radius: 12px; background: var(--color-cream); display: flex; align-items: center; justify-content: center; font-size: 22px; flex-shrink: 0;">
        ${b.icon}
      </div>
      <div style="flex: 1; min-width: 200px;">
        <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 4px;">
          <span style="font-weight: 700; color: var(--color-ink); font-size: 16px;">${b.service}</span>
          <span class="pill" style="background: var(--color-cream-dk); color: var(--color-ink-sft); font-size: 11px;">${b.id}</span>
        </div>
        <div style="font-size: 13.5px; color: var(--color-ink-sft); display: flex; gap: 12px; flex-wrap: wrap;">
          <span>Pet: <strong>${b.petName}</strong></span>
          <span>Date: <strong>${b.date} · ${b.time}</strong></span>
          <span>With: <strong>${b.provider}</strong></span>
        </div>
      </div>
      <div style="text-align: right; flex-shrink: 0; margin-left: auto;">
        <div style="font-weight: 800; font-size: 16px; color: var(--color-ink);">${b.price}</div>
        <span class="pill" style="margin-top: 6px; display: inline-block; background: ${b.status === 'Upcoming' ? 'var(--color-blue-lt)' : 'var(--color-green-lt)'}; color: ${b.status === 'Upcoming' ? 'var(--color-blue)' : 'var(--color-green)'}; font-weight: 700;">
          ${b.status}
        </span>
      </div>
      <div style="display: flex; gap: 8px; flex-shrink: 0; margin-left: auto; width: 100%; border-top: 1px solid var(--color-border); padding-top: 16px; margin-top: 8px;">
        ${b.status === 'Upcoming' ? `
          <button class="btn btn-sm btn-ghost" onclick="alert('Rescheduling booking ${b.id}...')">Reschedule</button>
          <button class="btn btn-sm btn-primary" style="background: var(--color-red); border-color: var(--color-red); color: white;" onclick="alert('Cancelling booking ${b.id}...')">Cancel</button>
        ` : `
          <button class="btn btn-sm btn-ghost" onclick="alert('Downloading invoice for ${b.id}...')">View Invoice</button>
          <button class="btn btn-sm btn-primary" onclick="alert('Rebooking service...')">Book Again</button>
        `}
      </div>
    </div>
  `).join('');
}

function renderDashboardOrders() {
  const list = document.getElementById('dash-orders-list');
  if (!list) return;

  const mockOrders = [
    { id: "PW-9951", date: "Jun 13, 2026", item: "Reflective Safe-Grip Leash", category: "Accessories", price: "₹1,199", status: "Processing", icon: "🦮" },
    { id: "PW-9904", date: "Jun 12, 2026", item: "Organic Chicken & Oats Treats (Pack of 2)", category: "Food & Treats", price: "₹799", status: "In Transit", icon: "🦴" },
    { id: "PW-9823", date: "Jun 10, 2026", item: "Premium Orthopedic Dog Bed", category: "Bedding", price: "₹2,499", status: "Delivered", icon: "🛏️" }
  ];

  list.innerHTML = mockOrders.map(o => `
    <div class="card" style="padding: 24px; flex-direction: row; align-items: center; gap: 20px; flex-wrap: wrap;">
      <div style="width: 50px; height: 50px; border-radius: 12px; background: var(--color-cream); display: flex; align-items: center; justify-content: center; font-size: 22px; flex-shrink: 0;">
        ${o.icon}
      </div>
      <div style="flex: 1; min-width: 200px;">
        <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 4px;">
          <span style="font-weight: 700; color: var(--color-ink); font-size: 16px;">${o.item}</span>
          <span class="pill" style="background: var(--color-cream-dk); color: var(--color-ink-sft); font-size: 11px;">${o.id}</span>
        </div>
        <div style="font-size: 13.5px; color: var(--color-ink-sft); display: flex; gap: 12px;">
          <span>Category: <strong>${o.category}</strong></span>
          <span>Order Date: <strong>${o.date}</strong></span>
        </div>
      </div>
      <div style="text-align: right; flex-shrink: 0; margin-left: auto;">
        <div style="font-weight: 800; font-size: 16px; color: var(--color-ink);">${o.price}</div>
        <span class="pill" style="margin-top: 6px; display: inline-block; background: ${o.status === 'Processing' ? 'var(--color-orange-lt)' : o.status === 'In Transit' ? 'var(--color-blue-lt)' : 'var(--color-green-lt)'}; color: ${o.status === 'Processing' ? 'var(--color-orange)' : o.status === 'In Transit' ? 'var(--color-blue)' : 'var(--color-green)'}; font-weight: 700;">
          ${o.status}
        </span>
      </div>
      <div style="display: flex; gap: 8px; flex-shrink: 0; margin-left: auto; width: 100%; border-top: 1px solid var(--color-border); padding-top: 16px; margin-top: 8px;">
        ${o.status !== 'Delivered' ? `
          <button class="btn btn-sm btn-ghost" onclick="alert('Tracking order ${o.id}...')">Track Order</button>
          <button class="btn btn-sm btn-primary" onclick="alert('Opening customer support for order ${o.id}...')">Support</button>
        ` : `
          <button class="btn btn-sm btn-ghost" onclick="alert('Opening return policy...')">Return/Replace</button>
          <button class="btn btn-sm btn-primary" onclick="alert('Item added to cart for reorder.')">Buy Again</button>
        `}
      </div>
    </div>
  `).join('');
}

function openAddPetModal() {
  document.getElementById('modal-addpet').style.display = 'flex';
  resetAddPetModal();
}

function closeAddPetModal() {
  document.getElementById('modal-addpet').style.display = 'none';
}

function triggerAddPetPhoto() {
  document.getElementById('addpet-photo-input').click();
}

function handleAddPetPhoto(file) {
  if (!file) return;
  const reader = new FileReader();
  reader.onload = e => {
    addPetPhoto = e.target.result;
    const circle = document.getElementById('addpet-preview-circle');
    circle.innerHTML = `<img src="${e.target.result}" style="width: 100%; height: 100%; object-fit: cover;">`;
  };
  reader.readAsDataURL(file);
}

function submitAddPet() {
  const name = document.getElementById('addpet-name').value.trim();
  const spec = document.getElementById('addpet-species').value;
  const breed = document.getElementById('addpet-breed').value.trim();
  const gend = document.getElementById('addpet-gender').value;

  if (!name || !spec || !breed || !gend) {
    alert("Please fill in Name, Species, Breed, and Gender fields.");
    return;
  }

  const newPetItem = {
    name: name,
    species: spec,
    breed: breed,
    gender: gend,
    dob: document.getElementById('addpet-dob').value,
    color: document.getElementById('addpet-color').value.trim(),
    weight: document.getElementById('addpet-weight').value.trim() || 'N/A',
    microchip: document.getElementById('addpet-microchip').value.trim() || 'N/A',
    allergies: document.getElementById('addpet-allergies').value.trim() || 'None',
    conditions: document.getElementById('addpet-conditions').value.trim() || 'None',
    food: document.getElementById('addpet-food').value.trim(),
    img: addPetPhoto || (spec === 'Dog' ? P.dog4 : P.cat2),
    health: 90,
    nextVet: "TBD",
    nextVacc: "TBD"
  };

  userPets.push(newPetItem);
  saveUserPets();

  document.getElementById('addpet-success-name').textContent = name;
  if (addPetPhoto) {
    const sImg = document.getElementById('addpet-success-img');
    sImg.src = addPetPhoto;
    sImg.style.display = 'block';
  } else {
    document.getElementById('addpet-success-img').style.display = 'none';
  }

  document.getElementById('addpet-step-form').style.display = 'none';
  document.getElementById('addpet-step-success').style.display = 'block';
}

function resetAddPetModal() {
  document.getElementById('addpet-step-form').style.display = 'block';
  document.getElementById('addpet-step-success').style.display = 'none';
  addPetPhoto = null;
  document.getElementById('addpet-preview-circle').innerHTML = `<span style="font-size: 32px;">🐾</span>`;

  const fields = ['addpet-name', 'addpet-breed', 'addpet-dob', 'addpet-color', 'addpet-species', 'addpet-gender', 'addpet-weight', 'addpet-microchip', 'addpet-allergies', 'addpet-conditions', 'addpet-food', 'addpet-vetname', 'addpet-vetphone', 'addpet-emergname', 'addpet-emergphone', 'addpet-notes'];
  fields.forEach(f => {
    const el = document.getElementById(f);
    if (el) el.value = '';
  });
}

function viewPetsTab() {
  closeAddPetModal();
  setDashboardTab('pets');
}

/* ================================================================
   DOG BREEDS DIRECTORY ENGINE
   ================================================================ */
function initBreedsPage() {
  renderBreedOrigins();
  renderBreedLetters();
  filterBreeds();
}

function renderBreedOrigins() {
  const select = document.getElementById('breeds-filter-origin');
  if (!select) return;

  const uniqueOrigins = ['All', ...new Set(ALL_BREEDS.map(b => b.origin))];
  select.innerHTML = uniqueOrigins.map(o => `<option value="${o}">${o === 'All' ? 'All Origins' : o}</option>`).join('');
}

function renderBreedLetters() {
  const container = document.getElementById('breeds-letters-index');
  if (!container) return;

  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  const letters = ['All', ...alphabet];

  container.innerHTML = letters.map(l => {
    const isSelected = activeBreedLetter === l;
    return `
      <button onclick="selectBreedLetter('${l}')"
        style="width: ${l === 'All' ? '44px' : '34px'}; height: 34px; border-radius: 8px; border: 1.5px solid ${isSelected ? 'var(--color-orange)' : 'var(--color-border)'};
        background: ${isSelected ? 'var(--color-orange)' : '#fff'}; color: ${isSelected ? '#fff' : 'var(--color-ink-sft)'}; font-size: 13px; font-weight: ${isSelected ? 700 : 400}; cursor: pointer; transition: all .18s;">
        ${l}
      </button>
    `;
  }).join('');
}

function selectBreedLetter(letter) {
  activeBreedLetter = letter;
  renderBreedLetters();
  filterBreeds();
}

function filterBreedsType(type) {
  activeBreedType = type;
  filterBreeds();
}

function filterBreeds() {
  const query = document.getElementById('breeds-search-input').value.toLowerCase();
  const size = document.getElementById('breeds-filter-size').value;
  const origin = document.getElementById('breeds-filter-origin').value;

  const matched = ALL_BREEDS.filter(b => {
    const matchQuery = b.name.toLowerCase().includes(query) || b.origin.toLowerCase().includes(query);
    const matchType = activeBreedType === 'All' || b.type.includes(activeBreedType);
    const matchSize = size === 'All' || b.size === size;
    const matchOrigin = origin === 'All' || b.origin === origin;
    const matchLetter = activeBreedLetter === 'All' || b.name.startsWith(activeBreedLetter);

    return matchQuery && matchType && matchSize && matchOrigin && matchLetter;
  });

  // Render breeds count
  document.getElementById('breeds-count').textContent = `${matched.length} breeds`;

  // Contextual Header updates
  const header = document.getElementById('breeds-context-header');
  if (activeBreedType !== 'All') {
    header.style.display = 'block';
    if (activeBreedType === 'indian') {
      header.style.background = 'linear-gradient(135deg, rgba(255, 107, 53, 0.08), rgba(255, 140, 85, 0.08))';
      header.style.border = '1px solid rgba(255, 107, 53, 0.2)';
      header.innerHTML = `
        <div style="display: flex; gap: 24px; align-items: center;">
          <div style="font-size: 52px;">🇮🇳</div>
          <div>
            <h2 class="melody" style="font-size: 32px; line-height: 1; margin-bottom: 6px; color: #FF6B35;">Indian Dog Breeds</h2>
            <p style="font-size: 13px; color: var(--color-ink-sft); line-height: 1.65; margin: 0;">Ancient, hardy, and perfectly adapted to the Indian subcontinent — these indigenous breeds are intelligent, low-maintenance, and deeply loyal. Many are endangered today and deserve your love.</p>
          </div>
        </div>
      `;
    } else if (activeBreedType === 'popular') {
      header.style.background = 'linear-gradient(135deg, rgba(229, 93, 26, 0.08), rgba(201, 78, 18, 0.08))';
      header.style.border = '1px solid rgba(229, 93, 26, 0.2)';
      header.innerHTML = `
        <h2 class="melody" style="font-size: 28px; margin-bottom: 6px; color: var(--color-orange);">⭐ Most Popular Breeds</h2>
        <p style="color: var(--color-ink-sft); font-size: 13px; line-height: 1.65; margin: 0;">The world's most beloved and widely recognized dog breeds — chosen for temperament, adaptability, and all-round family compatibility.</p>
      `;
    } else if (activeBreedType === 'guard') {
      header.style.background = 'linear-gradient(135deg, rgba(192, 57, 43, 0.08), rgba(160, 32, 32, 0.08))';
      header.style.border = '1px solid rgba(192, 57, 43, 0.2)';
      header.innerHTML = `
        <h2 class="melody" style="font-size: 28px; margin-bottom: 6px; color: var(--color-red);">🛡 Guard Dog Breeds</h2>
        <p style="color: var(--color-ink-sft); font-size: 13px; line-height: 1.65; margin: 0;">Naturally protective, loyal, and alert — these breeds are ideal for home protection when paired with proper training and socialisation.</p>
      `;
    } else if (activeBreedType === 'family') {
      header.style.background = 'linear-gradient(135deg, rgba(30, 107, 69, 0.08), rgba(21, 92, 56, 0.08))';
      header.style.border = '1px solid rgba(30, 107, 69, 0.2)';
      header.innerHTML = `
        <h2 class="melody" style="font-size: 28px; margin-bottom: 6px; color: var(--color-green);">🏡 Friendly Family Dog Breeds</h2>
        <p style="color: var(--color-ink-sft); font-size: 13px; line-height: 1.65; margin: 0;">Gentle, patient, and great with children — these breeds thrive in family environments and are perfect companions for all ages.</p>
      `;
    }
  } else {
    header.style.display = 'none';
    header.style.border = 'none';
  }

  const grid = document.getElementById('breeds-grid');
  if (matched.length === 0) {
    grid.style.display = 'block';
    grid.innerHTML = `
      <div style="text-align: center; padding: 80px 0;">
        <div style="font-size: 56px; margin-bottom: 16px;">🔍</div>
        <h3 class="melody" style="font-size: 28px; color: var(--color-ink); margin-bottom: 8px;">No breeds found</h3>
        <p style="color: var(--color-ink-sft);">Try a different search term or clear the filters.</p>
        <button class="btn btn-md btn-primary" style="margin-top: 20px;" onclick="resetBreedsFilters()">Clear Filters</button>
      </div>
    `;
  } else {
    grid.style.display = 'grid';
    grid.innerHTML = matched.map(b => `
      <div class="card card-lift" style="cursor: pointer;" onclick="viewBreedDetail('${b.name}')">
        <div style="position: relative; height: 190px; overflow: hidden;">
          <img src="${b.img}" style="width: 100%; height: 100%; object-fit: cover;" alt="${b.name}">
          <div style="position: absolute; inset: 0; background: linear-gradient(to top, rgba(17,17,17,.6) 0%, transparent 50%);"></div>
          
          <div style="position: absolute; bottom: 12px; left: 14px; right: 14px;">
            <h3 class="melody" style="color: #fff; font-size: 20px; line-height: 1; margin-bottom: 2px;">${b.name}</h3>
            <p style="color: rgba(255,255,255,.75); font-size: 11px;">🌍 ${b.origin}</p>
          </div>
        </div>
        <div style="padding: 14px 16px; display: flex; justify-content: space-between; align-items: center; gap: 8px;">
          <div style="flex: 1; min-width: 0;">
            <div style="font-size: 11px; color: var(--color-ink-sft); line-height: 1.4; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${b.temperament}</div>
          </div>
          <div style="display: flex; gap: 6px; flex-shrink: 0;">
            <div style="font-size: 10px; font-weight: 600; color: var(--color-ink-sft); background: var(--color-cream); border-radius: 6px; padding: 3px 8px; white-space: nowrap;">⏳ ${b.lifespan}</div>
          </div>
        </div>
        <div style="padding: 0 16px 14px;">
          <div style="display: flex; align-items: center; justify-content: space-between; padding-top: 10px; border-top: 1px solid var(--color-border);">
            <span style="font-size: 12px; color: var(--color-ink-sft);">Weight: ${b.weight}</span>
            <span style="font-size: 12px; font-weight: 700; color: var(--color-orange);">View Details →</span>
          </div>
        </div>
      </div>
    `).join('');
  }
}

function searchBreeds() {
  filterBreeds();
}

function resetBreedsFilters() {
  document.getElementById('breeds-search-input').value = '';
  document.getElementById('breeds-filter-size').value = 'All';
  document.getElementById('breeds-filter-origin').value = 'All';
  const typeFilter = document.getElementById('breeds-filter-type');
  if (typeFilter) typeFilter.value = 'All';
  activeBreedLetter = 'All';
  activeBreedType = 'All';
  renderBreedLetters();
  filterBreeds();
}

function viewBreedDetail(name) {
  const b = ALL_BREEDS.find(x => x.name === name);
  if (!b) return;

  const modal = document.getElementById('modal-breed-detail');
  const container = document.getElementById('breed-modal-content');
  if (!modal || !container) return;

  const traits = b.type.filter(t => !["indian"].includes(t));
  const traitLabels = { guard: "Guard Dog", family: "Family Dog", popular: "Most Popular", working: "Working Dog", companion: "Companion", sighthound: "Sighthound" };
  const isIndian = b.type.includes("indian");

  container.innerHTML = `
    <!-- Header image -->
    <div style="position: relative; height: 280px; overflow: hidden; border-radius: 28px 28px 0 0;">
      <img src="${b.img}" style="width: 100%; height: 100%; object-fit: cover;" alt="${b.name}">
      <div style="position: absolute; inset: 0; background: linear-gradient(to top, rgba(17,17,17,.8) 0%, transparent 60%);"></div>
      ${isIndian ? `
        <div style="position: absolute; top: 20px; left: 20px;">
          <span style="background: var(--color-orange); color: #fff; padding: 5px 14px; border-radius: 100px; font-size: 11px; font-weight: 700; letter-spacing: 0.05em; text-transform: uppercase; box-shadow: 0 4px 12px rgba(229,93,26,0.3);">🇮🇳 Indian Breed</span>
        </div>
      ` : ''}
      <div style="position: absolute; bottom: 20px; left: 24px; right: 24px; display: flex; justify-content: space-between; align-items: flex-end; flex-wrap: wrap; gap: 16px;">
        <div>
          <h2 class="melody" style="font-size: 40px; color: #fff; line-height: 1.1; margin: 0; text-shadow: 0 2px 4px rgba(0,0,0,0.2);">${b.name}</h2>
          <p style="color: rgba(255,255,255,.85); font-size: 15px; margin: 6px 0 0 0; font-weight: 500;">Origin: ${b.origin}</p>
        </div>
        <div style="display: flex; gap: 8px; flex-wrap: wrap; margin-bottom: 2px;">
          ${traits.map(t => `<span class="glass-badge">${traitLabels[t] || t.charAt(0).toUpperCase() + t.slice(1)}</span>`).join('')}
          <span class="glass-badge">${b.size} Size</span>
        </div>
      </div>
    </div>

    <!-- Content -->
    <div style="padding: 28px 32px 32px;">
      <!-- Stats grid -->
      <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 12px; margin-bottom: 28px;">
        <div style="background: var(--color-blue-lt); border-radius: 14px; padding: 14px 12px; text-align: center; border: 1px solid rgba(29, 95, 196, 0.08);">
          <div style="font-size: 22px; margin-bottom: 6px;">📏</div>
          <div style="font-size: 10px; font-weight: 700; letter-spacing: .06em; text-transform: uppercase; color: var(--color-blue); opacity: 0.8; margin-bottom: 4px;">Size</div>
          <div style="font-weight: 700; color: var(--color-ink); font-size: 13px; line-height: 1.3;">${b.size}</div>
        </div>
        <div style="background: var(--color-orange-lt); border-radius: 14px; padding: 14px 12px; text-align: center; border: 1px solid rgba(229, 93, 26, 0.08);">
          <div style="font-size: 22px; margin-bottom: 6px;">⚖️</div>
          <div style="font-size: 10px; font-weight: 700; letter-spacing: .06em; text-transform: uppercase; color: var(--color-orange); opacity: 0.8; margin-bottom: 4px;">Weight</div>
          <div style="font-weight: 700; color: var(--color-ink); font-size: 13px; line-height: 1.3;">${b.weight}</div>
        </div>
        <div style="background: var(--color-green-lt); border-radius: 14px; padding: 14px 12px; text-align: center; border: 1px solid rgba(30, 107, 69, 0.08);">
          <div style="font-size: 22px; margin-bottom: 6px;">⏳</div>
          <div style="font-size: 10px; font-weight: 700; letter-spacing: .06em; text-transform: uppercase; color: var(--color-green); opacity: 0.8; margin-bottom: 4px;">Lifespan</div>
          <div style="font-weight: 700; color: var(--color-ink); font-size: 13px; line-height: 1.3;">${b.lifespan}</div>
        </div>
        <div style="background: var(--color-cream-dk); border-radius: 14px; padding: 14px 12px; text-align: center; border: 1px solid rgba(17, 17, 17, 0.05);">
          <div style="font-size: 22px; margin-bottom: 6px;">🌍</div>
          <div style="font-size: 10px; font-weight: 700; letter-spacing: .06em; text-transform: uppercase; color: var(--color-ink-sft); margin-bottom: 4px;">Origin</div>
          <div style="font-weight: 700; color: var(--color-ink); font-size: 13px; line-height: 1.3; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;" title="${b.origin}">${b.origin}</div>
        </div>
      </div>

      <!-- Information -->
      <div style="margin-bottom: 24px;">
        <div style="font-size: 11px; font-weight: 700; letter-spacing: .08em; text-transform: uppercase; color: var(--color-ink-sft); margin-bottom: 10px;">Information</div>
        <div style="display: flex; gap: 8px; flex-wrap: wrap;">
          ${b.temperament.split(', ').map(t => `
            <span style="background: var(--color-white); border: 1px solid var(--color-border); border-radius: 100px; padding: 5px 14px; font-size: 13px; color: var(--color-ink-md); font-weight: 500;">${t.split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')}</span>
          `).join('')}
        </div>
      </div>

      <!-- Care guide -->
      <div style="background: var(--color-cream); border-radius: 18px; padding: 22px 24px; margin-bottom: 28px; border: 1px solid var(--color-border);">
        <div style="font-size: 11px; font-weight: 700; letter-spacing: .08em; text-transform: uppercase; color: var(--color-ink-sft); margin-bottom: 14px;">Quick Care Guide</div>
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px 24px;">
          ${[
            ["Exercise Needs", b.size === "Large" ? "High 🔥" : "Moderate ⚡"],
            ["Grooming", b.type.includes("companion") ? "High 🧼" : "Low–Moderate ✂️"],
            ["Good with Kids", b.type.includes("family") ? "Yes ✓" : "With supervision ⚠️"],
            ["Guard Ability", b.type.includes("guard") ? "Excellent 🛡️" : "Low–Moderate 🐕"],
            ["Trainability", b.type.includes("working") || b.type.includes("popular") ? "High 🎓" : "Moderate ⚡"],
            ["Apartment Friendly", b.size === "Small" ? "Yes ✓" : "Needs space 🏡"]
          ].map(([l, v]) => `
            <div style="display: flex; justify-content: space-between; padding: 8px 0; border-bottom: 1px solid var(--color-border);">
              <span style="font-size: 13px; color: var(--color-ink-sft); font-weight: 500;">${l}</span>
              <span style="font-size: 13px; font-weight: 600; color: ${v.includes("✓") || v.includes("Excellent") ? 'var(--color-green)' : 'var(--color-ink)'};">${v}</span>
            </div>
          `).join('')}
        </div>
      </div>

      <div style="display: flex; gap: 12px;">
        <button class="btn btn-lg btn-outline" style="width: 100%; border-radius: 14px; font-weight: 700;" onclick="closeBreedModal()">Close</button>
      </div>
    </div>
  `;
  modal.style.display = 'flex';
}

function closeBreedModal() {
  document.getElementById('modal-breed-detail').style.display = 'none';
}

/* ================================================================
   PET VIDEOS PAGE CLIENT CONTROLLER
   ================================================================ */
function initPetVideosPage() {
  renderVideoCategories();
  renderVideos();
}

function renderVideoCategories() {
  const container = document.getElementById('video-categories-tabs');
  if (!container) return;

  const categories = ["All", "Puppy Training", "Obedience", "Grooming Tips", "Health & Care", "Nutrition", "Behavior", "Fun & Tricks"];
  container.innerHTML = categories.map(c => {
    const isSelected = activeVideoCategory === c;
    return `
      <button onclick="selectVideoCategory('${c}')"
        style="padding: 9px 20px; border-radius: 100px; border: 1.5px solid ${isSelected ? 'var(--color-orange)' : 'var(--color-border)'}; background: ${isSelected ? 'var(--color-orange)' : 'var(--color-white)'}; color: ${isSelected ? '#fff' : 'var(--color-ink-sft)'}; font-size: 14px; font-weight: ${isSelected ? 600 : 400}; cursor: pointer; transition: all .2s;">
        ${c}
      </button>
    `;
  }).join('');
}

function selectVideoCategory(cat) {
  activeVideoCategory = cat;
  renderVideoCategories();
  renderVideos();
}

function renderVideos() {
  const grid = document.getElementById('videos-grid');
  if (!grid) return;

  const filtered = activeVideoCategory === 'All' ? videos : videos.filter(v => v.cat === activeVideoCategory);
  const levelColor = { Beginner: 'var(--color-green)', Intermediate: 'var(--color-orange)', "All Levels": 'var(--color-blue)' };

  grid.innerHTML = filtered.map(v => `
    <div class="card card-lift" style="cursor: pointer;" onclick="openVideoPlayer(${v.id})">
      <div style="position: relative; height: 190px; overflow: hidden;">
        <img src="${v.thumb}" style="width: 100%; height: 100%; object-fit: cover;" alt="${v.title}">
        <div style="position: absolute; inset: 0; background: rgba(17,17,17,.3); display: flex; align-items: center; justify-content: center; opacity: 0; transition: opacity .25s;"
          onmouseenter="this.style.opacity='1'"
          onmouseleave="this.style.opacity='0'">
          <div style="width: 56px; height: 56px; border-radius: 50%; background: rgba(255,255,255,.2); backdrop-filter: blur(4px); display: flex; align-items: center; justify-content: center; font-size: 22px; border: 2px solid rgba(255,255,255,.5);">▶</div>
        </div>
        <div style="position: absolute; top: 10px; left: 10px;">
          <span class="pill" style="background: ${levelColor[v.level]}dd; color: #fff; font-size: 10px;">${v.level}</span>
        </div>
        <div style="position: absolute; bottom: 10px; right: 10px; background: rgba(0,0,0,.7); border-radius: 6px; padding: 3px 8px; color: #fff; font-size: 12px; font-weight: 600;">${v.duration}</div>
      </div>
      <div style="padding: 18px 20px;">
        <div style="display: flex; gap: 8px; margin-bottom: 10px; flex-wrap: wrap;">
          <span style="font-size: 11px; font-weight: 600; color: var(--color-orange);">${v.cat}</span>
          <span style="font-size: 11px; color: var(--color-sand);">·</span>
          <span style="font-size: 11px; color: var(--color-ink-sft);">👁 ${v.views}</span>
        </div>
        <h3 style="font-size: 15px; font-weight: 700; color: var(--color-ink); line-height: 1.35; margin-bottom: 10px;">${v.title}</h3>
        <div style="display: flex; gap: 8px; align-items: center; padding-top: 10px; border-top: 1px solid var(--color-border);">
          <div style="width: 28px; height: 28px; border-radius: 50%; background: var(--color-cream-dk); display: flex; align-items: center; justify-content: center; font-size: 12px;">👤</div>
          <div>
            <div style="font-size: 12px; font-weight: 600; color: var(--color-ink);">${v.instructor}</div>
            <div style="font-size: 11px; color: var(--color-ink-sft);">${v.role}</div>
          </div>
        </div>
      </div>
    </div>
  `).join('');
}

function openVideoPlayer(id) {
  const v = videos.find(x => x.id === id);
  if (!v) return;

  const modal = document.getElementById('modal-video-player');
  const container = document.getElementById('video-modal-container');
  if (!modal || !container) return;

  const levelColor = { Beginner: 'var(--color-green)', Intermediate: 'var(--color-orange)', "All Levels": 'var(--color-blue)' };

  container.innerHTML = `
    <div style="position: relative; background: var(--color-ink); border-radius: 24px 24px 0 0; overflow: hidden; height: 360px;">
      <img src="${v.thumb}" style="width: 100%; height: 100%; object-fit: cover; opacity: .55;" alt="${v.title}">
      <div style="position: absolute; inset: 0; display: flex; align-items: center; justify-content: center;">
        <div style="width: 80px; height: 80px; border-radius: 50%; background: rgba(255,255,255,.15); backdrop-filter: blur(6px); display: flex; align-items: center; justify-content: center; font-size: 36px; cursor: pointer; border: 2px solid rgba(255,255,255,.3);" onclick="alert('Starting full screen mock playback...')">▶</div>
      </div>
      <div style="position: absolute; bottom: 16px; left: 20px; right: 20px; display: flex; justify-content: space-between; align-items: center;">
        <span style="color: #fff; font-size: 13px; font-weight: 600; background: rgba(0,0,0,.6); padding: 4px 10px; border-radius: 6px;">🎬 Full video in Pawprint app</span>
        <span style="color: #fff; font-size: 13px; background: rgba(0,0,0,.6); padding: 4px 10px; border-radius: 6px;">${v.duration}</span>
      </div>
      <button onclick="closeVideoPlayer()" style="position: absolute; top: 16px; right: 16px; width: 36px; height: 36px; border-radius: 50%; background: rgba(255,255,255,.15); border: none; color: #fff; font-size: 18px; cursor: pointer;">✕</button>
    </div>

    <div style="padding: 28px 32px 32px;">
      <div style="display: flex; gap: 10px; margin-bottom: 14px; flex-wrap: wrap;">
        <span class="pill" style="background: ${levelColor[v.level]}15; color: ${levelColor[v.level]}">${v.level}</span>
        <span class="pill pill-dark">${v.cat}</span>
        <span class="pill pill-dark">👁 ${v.views} views</span>
        <span class="pill pill-dark">⏱ ${v.duration}</span>
      </div>
      <h2 class="melody" style="font-size: 28px; color: var(--color-ink); line-height: 1.05; margin-bottom: 10px;">${v.title}</h2>
      <div style="display: flex; gap: 10px; align-items: center; margin-bottom: 16px;">
        <div style="width: 36px; height: 36px; border-radius: 50%; background: var(--color-orange-lt); display: flex; align-items: center; justify-content: center; font-size: 16px;">👤</div>
        <div>
          <div style="font-weight: 700; font-size: 14px; color: var(--color-ink);">${v.instructor}</div>
          <div style="font-size: 12px; color: var(--color-ink-sft);">${v.role}</div>
        </div>
      </div>
      <p style="font-size: 15px; color: var(--color-ink-sft); line-height: 1.75; margin-bottom: 24px;">${v.desc}</p>

      <!-- Chapters list -->
      <div style="background: var(--color-cream); border-radius: 14px; padding: 20px 22px; margin-bottom: 24px;">
        <div style="font-weight: 700; font-size: 14px; color: var(--color-ink); margin-bottom: 12px;">📋 Chapters</div>
        ${v.chapters.map(ch => `
          <div style="display: flex; gap: 12px; align-items: center; padding: 8px 0; border-bottom: 1px solid var(--color-border); &:last-child { border-bottom: none; }">
            <div style="width: 24px; height: 24px; border-radius: 50%; background: var(--color-orange); display: flex; align-items: center; justify-content: center; font-size: 10px; color: #fff; font-weight: 700; flex-shrink: 0;">▶</div>
            <span style="font-size: 13.5px; color: var(--color-ink-md);">${ch}</span>
          </div>
        `).join('')}
      </div>

      <!-- Tags -->
      <div style="display: flex; gap: 8px; flex-wrap: wrap; margin-bottom: 24px;">
        ${v.tags.map(t => `<span style="font-size: 12px; color: var(--color-ink-sft); background: var(--color-white); border: 1px solid var(--color-border); border-radius: 100px; padding: 4px 12px;">${t}</span>`).join('')}
      </div>

      <div style="display: flex; gap: 12px;">
        <button class="btn btn-lg btn-primary" style="flex: 1;" onclick="closeVideoPlayer(); nav('signup');">Watch Full Video — Get App →</button>
        <button class="btn btn-lg btn-outline" onclick="closeVideoPlayer()">Close</button>
      </div>
    </div>
  `;
  modal.style.display = 'flex';
}

function closeVideoPlayer() {
  document.getElementById('modal-video-player').style.display = 'none';
}

/* ================================================================
   AUTHENTICATION ENGINE (LOGIN / SIGNUP)
   ================================================================ */
let signupGender = 'Male';
function setSignupGender(g) {
  signupGender = g;
  const btnM = document.getElementById('gender-male');
  const btnF = document.getElementById('gender-female');
  if (btnM && btnF) {
    btnM.classList.toggle('active', g === 'Male');
    btnF.classList.toggle('active', g === 'Female');
  }
}

function proceedToPetDetails() {
  const name = document.getElementById('signup-name').value.trim();
  const email = document.getElementById('signup-email').value.trim();
  const pass = document.getElementById('signup-password').value.trim();

  if (!name || !email || !pass) {
    alert("Please fill in Name, Email, and Password.");
    return;
  }

  updateSignupProgress(2);
  document.getElementById('signup-step-1').style.display = 'none';
  document.getElementById('signup-step-2').style.display = 'block';
  document.getElementById('signup-step-3').style.display = 'none';
}

function proceedToVerify() {
  const pName = document.getElementById('signup-pet-name').value.trim();
  const breed = document.getElementById('signup-pet-breed').value.trim();
  const age = document.getElementById('signup-pet-age').value.trim();
  const weight = document.getElementById('signup-pet-weight').value.trim();

  if (!pName || !breed || !age || !weight) {
    alert("Please fill in all your dog's profile details.");
    return;
  }

  updateSignupProgress(3);
  document.getElementById('signup-step-1').style.display = 'none';
  document.getElementById('signup-step-2').style.display = 'none';
  document.getElementById('signup-step-3').style.display = 'block';

  setTimeout(() => {
    const firstInput = document.querySelector('.verify-code-input');
    if (firstInput) firstInput.focus();
  }, 100);
}

function backToStep(step) {
  updateSignupProgress(step);
  document.getElementById('signup-step-1').style.display = step === 1 ? 'block' : 'none';
  document.getElementById('signup-step-2').style.display = step === 2 ? 'block' : 'none';
  document.getElementById('signup-step-3').style.display = step === 3 ? 'block' : 'none';
}

function updateSignupProgress(step) {
  const bar = document.getElementById('signup-progress-bar');
  if (bar) {
    bar.style.width = step === 1 ? '0%' : (step === 2 ? '50%' : '100%');
  }
  for (let i = 1; i <= 3; i++) {
    const el = document.getElementById(`signup-step-indicator-${i}`);
    if (el) {
      el.classList.toggle('active', i === step);
      el.classList.toggle('completed', i < step);
    }
  }
}

function setupVerifyInputs() {
  const inputs = document.querySelectorAll('.verify-code-input');
  inputs.forEach((input, index) => {
    input.addEventListener('input', (e) => {
      if (e.target.value.length === 1 && index < inputs.length - 1) {
        inputs[index + 1].focus();
      }
    });
    input.addEventListener('keydown', (e) => {
      if (e.key === 'Backspace' && e.target.value.length === 0 && index > 0) {
        inputs[index - 1].focus();
      }
    });
  });
}

function handleAuthSubmit(type) {
  if (type === 'login') {
    const email = document.getElementById('login-email').value.trim();
    if (!email) {
      alert("Please fill in your email address.");
      return;
    }
    
    // Dynamically retrieve/create user profile name
    const regUser = JSON.parse(localStorage.getItem('currentUser'));
    if (regUser && regUser.email === email) {
      currentUser = regUser;
    } else {
      const defaultName = email.split('@')[0];
      const name = defaultName.charAt(0).toUpperCase() + defaultName.slice(1);
      currentUser = { name: name, email: email };
      saveCurrentUser();
    }
    alert(`Welcome back, ${currentUser.name}! 🐾`);
    nav('dashboard');
  } else {
    // Compile account details and pet details
    const name = document.getElementById('signup-name').value.trim();
    const email = document.getElementById('signup-email').value.trim();
    
    const pName = document.getElementById('signup-pet-name').value.trim();
    const breed = document.getElementById('signup-pet-breed').value.trim();
    const age = document.getElementById('signup-pet-age').value.trim();
    const weight = document.getElementById('signup-pet-weight').value.trim();

    currentUser = { name: name, email: email };
    saveCurrentUser();

    // Add new registered dog
    const newPet = {
      name: pName,
      breed: breed,
      species: "Dog",
      age: age.includes("yr") || age.includes("mo") ? age : `${age} yrs`,
      gender: signupGender,
      img: P.dog4,
      health: 100,
      weight: weight.includes("kg") ? weight : `${weight} kg`,
      color: "Golden Brown",
      microchip: "MX" + Math.floor(100000 + Math.random() * 900000),
      allergies: "None",
      conditions: "None",
      nextVet: "TBD",
      nextVacc: "TBD",
      food: "Premium Kibble"
    };

    userPets.push(newPet);
    saveUserPets();

    alert(`Account created successfully and ${pName} is registered! 🎉`);
    nav('dashboard');
  }
}

/* ================================================================
   CONTACT PAGE CONTROLLER
   ================================================================ */
function submitContactMessage() {
  const name = document.getElementById('contact-name').value.trim();
  const email = document.getElementById('contact-email').value.trim();
  const subject = document.getElementById('contact-subject').value.trim();
  const message = document.getElementById('contact-message').value.trim();

  if (!name || !email || !subject || !message) {
    alert("Please fill in all required message fields.");
    return;
  }

  alert("Message sent! We'll reply within 24 hours 🐾");
  // reset
  document.getElementById('contact-name').value = '';
  document.getElementById('contact-email').value = '';
  document.getElementById('contact-subject').value = '';
  document.getElementById('contact-message').value = '';
}

/* ================================================================
   CHATBOT WIDGET CONTROLLER
   ================================================================ */
function toggleChatbot() {
  chatbotOpen = !chatbotOpen;

  // Close cart drawer to avoid overlap
  document.getElementById('cart-drawer').style.display = 'none';

  const windowEl = document.getElementById('chatbot-window');
  const fab = document.getElementById('chatbot-fab');
  const tooltip = document.getElementById('chatbot-tooltip');

  if (chatbotOpen) {
    windowEl.style.display = 'flex';
    if (tooltip) tooltip.style.display = 'none';
    fab.textContent = '✕';
    fab.style.background = 'rgba(255, 255, 255, 0.12)';
    fab.style.borderColor = 'rgba(255, 255, 255, 0.15)';
    resetChatbotScreen();
  } else {
    windowEl.style.display = 'none';
    fab.textContent = '🐾';
    fab.style.background = 'linear-gradient(135deg, var(--color-orange), #C94E12)';
    fab.style.borderColor = 'var(--color-orange)';
  }
}

function resetChatbotScreen() {
  chatbotScreen = 'home';
  chatbotMsgs = [];
  document.getElementById('chatbot-screen-home').style.display = 'block';
  document.getElementById('chatbot-screen-chat').style.display = 'none';
  document.getElementById('chatbot-home-btn').style.display = 'none';

  loadChatbotPreloads();
}

function loadChatbotPreloads() {
  // Topics grid
  const grid = document.getElementById('chatbot-topics-grid');
  if (grid) {
    grid.innerHTML = QUICK_TOPICS.map(t => `
      <button onclick="handleQuickTopicClick('${t.label}', '${t.query}')" class="chatbot-topic-btn">
        ${t.label}
      </button>
    `).join('');
  }

  // Horizontal chips bar
  const bar = document.getElementById('chatbot-chips-bar');
  if (bar) {
    bar.innerHTML = QUICK_TOPICS.slice(0, 8).map(t => `
      <button onclick="sendQuickQuery('${t.query}')" class="chatbot-chip-btn">
        ${t.label}
      </button>
    `).join('');
  }
}

function openChatInput() {
  chatbotScreen = 'chat';
  document.getElementById('chatbot-screen-home').style.display = 'none';
  document.getElementById('chatbot-screen-chat').style.display = 'flex';
  document.getElementById('chatbot-home-btn').style.display = 'flex';
  document.getElementById('chatbot-input').focus();

  // Render welcome bot message if empty
  if (chatbotMsgs.length === 0) {
    appendBotMessage("Hello! 👋 I'm Paws, Pawprint's AI assistant. How can I help you today?");
  }
}

function handleQuickTopicClick(label, query) {
  openChatInput();
  sendQuickQuery(query);
}

function sendQuickQuery(query) {
  appendUserMessage(query);
  triggerBotReply(query);
}

function sendChatbotMessage() {
  const input = document.getElementById('chatbot-input');
  const text = input.value.trim();
  if (!text) return;

  input.value = '';
  appendUserMessage(text);
  triggerBotReply(text);
}

function appendUserMessage(text) {
  chatbotMsgs.push({ from: 'user', text });
  renderChatMessages();
}

function appendBotMessage(text, page = null, cta = null) {
  chatbotMsgs.push({ from: 'bot', text, page, cta });
  renderChatMessages();
}

function renderChatMessages() {
  const box = document.getElementById('chatbot-messages-box');
  if (!box) return;

  box.innerHTML = chatbotMsgs.map(m => {
    if (m.from === 'user') {
      return `
        <div style="display: flex; flex-direction: column; align-items: flex-end; gap: 4px; width: 100%;">
          <div style="max-width: 80%; background: linear-gradient(135deg, var(--color-orange), #C94E12); color: #fff; padding: 11px 15px; border-radius: 16px 4px 16px 16px; font-size: 13px; line-height: 1.55; box-shadow: 0 4px 16px rgba(229,93,26,0.2);">
            ${m.text}
          </div>
        </div>
      `;
    } else {
      return `
        <div style="display: flex; flex-direction: column; align-items: flex-start; gap: 4px; width: 100%;">
          <div style="display: flex; gap: 6px; align-items: flex-end; max-width: 92%;">
            <div style="width: 26px; height: 26px; border-radius: 8px; background: linear-gradient(135deg, var(--color-orange), #C94E12); display: flex; align-items: center; justify-content: center; font-size: 12px; flex-shrink: 0; color: #fff;">🐾</div>
            <div>
              <div style="background: rgba(255,255,255,.07); border: 1px solid rgba(255,255,255,.09); color: rgba(255,255,255,.88); padding: 12px 15px; border-radius: 4px 16px 16px 16px; font-size: 13px; line-height: 1.65; white-space: pre-line;">
                ${m.text}
              </div>
              ${m.page && m.cta ? `
                <button onclick="nav('${m.page}'); toggleChatbot();" class="btn btn-sm btn-primary" style="margin-top: 8px; font-size: 12px; padding: 7px 16px;">
                  ${m.cta} →
                </button>
              ` : ''}
            </div>
          </div>
        </div>
      `;
    }
  }).join('');

  // Auto scroll
  box.scrollTop = box.scrollHeight;
}

function triggerBotReply(userQuery) {
  chatbotTyping = true;
  renderChatMessages(); // Display typing indicator

  // Append a temporary typing status
  const box = document.getElementById('chatbot-messages-box');
  const typingHTML = `
    <div id="chatbot-typing-bubble" style="display: flex; gap: 6px; align-items: flex-end; width: 100%;">
      <div style="width: 26px; height: 26px; border-radius: 8px; background: linear-gradient(135deg, var(--color-orange), #C94E12); display: flex; align-items: center; justify-content: center; font-size: 12px; flex-shrink: 0; color: #fff;">🐾</div>
      <div style="background: rgba(255,255,255,.07); border: 1px solid rgba(255,255,255,.09); padding: 12px 16px; border-radius: 4px 16px 16px 16px; display: flex; gap: 5px; align-items: center;">
        <div style="width: 7px; height: 7px; border-radius: 50%; background: rgba(255,255,255,.4); animation: blink 1.2s 0s ease-in-out infinite;"></div>
        <div style="width: 7px; height: 7px; border-radius: 50%; background: rgba(255,255,255,.4); animation: blink 1.2s 0.2s ease-in-out infinite;"></div>
        <div style="width: 7px; height: 7px; border-radius: 50%; background: rgba(255,255,255,.4); animation: blink 1.2s 0.4s ease-in-out infinite;"></div>
      </div>
    </div>
  `;
  box.insertAdjacentHTML('beforeend', typingHTML);
  box.scrollTop = box.scrollHeight;

  const delay = 600 + Math.min(userQuery.length * 12, 1000);
  setTimeout(() => {
    // Remove typing bubble
    const typingBubble = document.getElementById('chatbot-typing-bubble');
    if (typingBubble) typingBubble.remove();

    chatbotTyping = false;
    const reply = getBotReply(userQuery);
    appendBotMessage(reply.answer, reply.page, reply.cta);
  }, delay);
}

function getBotReply(text) {
  const q = text.toLowerCase();
  for (const item of KB) {
    if (item.keys.some(k => q.includes(k))) return item;
  }
  return {
    answer: `I'm not sure about that specific topic, but I can help with:\n• Adoption & pets 🐾\n• Veterinary bookings 🏥\n• Grooming & training ✂️\n• Dog breeds & nutrition 🐕\n• Lost & found 📍\n• Pricing & plans 💰\n\nCould you rephrase, or pick a topic from the suggestions?`,
    page: null, cta: null,
  };
}

function openChatWithQuery(query) {
  toggleChatbot();
  openChatInput();
  sendQuickQuery(query);
}

/* ================================================================
   HOVER NAVIGATION SYSTEM
   ================================================================ */
function setupHoverNavigation() {
  const companyTrigger = document.getElementById('nav-btn-company');
  if (companyTrigger) {
    const parent = companyTrigger.closest('.nav-dropdown') || companyTrigger.parentElement;
    if (parent) {
      let timeout = null;
      parent.addEventListener('mouseenter', () => {
        clearTimeout(timeout);
        const menu = document.getElementById('dropdown-company');
        if (menu && menu.style.display !== 'block') {
          closeAllDropdowns();
          const btns = ['home', 'company', 'services', 'adopt', 'explore'];
          btns.forEach(b => {
            const el = document.getElementById('nav-btn-' + b);
            if (el) el.classList.remove('active');
          });
          menu.style.display = 'block';
          companyTrigger.classList.add('active');
        }
      });
      parent.addEventListener('mouseleave', () => {
        timeout = setTimeout(() => {
          closeAllDropdowns();
        }, 150);
      });
    }
  }

  const exploreTrigger = document.getElementById('nav-btn-explore');
  if (exploreTrigger) {
    const parent = exploreTrigger.closest('.nav-dropdown') || exploreTrigger.parentElement;
    if (parent) {
      let timeout = null;
      parent.addEventListener('mouseenter', () => {
        clearTimeout(timeout);
        const menu = document.getElementById('dropdown-explore');
        if (menu && menu.style.display !== 'block') {
          closeAllDropdowns();
          const btns = ['home', 'company', 'services', 'adopt', 'explore'];
          btns.forEach(b => {
            const el = document.getElementById('nav-btn-' + b);
            if (el) el.classList.remove('active');
          });
          menu.style.display = 'block';
          exploreTrigger.classList.add('active');
        }
      });
      parent.addEventListener('mouseleave', () => {
        timeout = setTimeout(() => {
          closeAllDropdowns();
        }, 150);
      });
    }
  }
}

/* ================================================================
   PAGE INITIALIZATION
   ================================================================ */
window.addEventListener('DOMContentLoaded', () => {
  let pageId = window.PAGE_ID || 'home';

  // Special check for services category query parameter
  if (pageId === 'services') {
    const params = new URLSearchParams(window.location.search);
    const cat = params.get('cat');
    if (cat) {
      pageId = cat;
    }
  }

  // Check for specific subservice to open on page load
  const params = new URLSearchParams(window.location.search);
  const subSvc = params.get('sub');
  if (subSvc) {
    activeSubPageService = decodeURIComponent(subSvc);
  }

  initPage(pageId);
  setupHoverNavigation();
});
