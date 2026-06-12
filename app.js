/* ================================================================
   PAWPRINT  —  Complete Application Logic  v3
   ================================================================ */

// ── Global Design Tokens ──────────────────────────────────────────
const C = {
  cream:   "#F5F1EB",
  creamDk: "#EDE8DF",
  white:   "#FFFFFF",
  ink:     "#111111",
  inkMd:   "#222222",
  inkSft:  "#555555",
  sand:    "#C9C2B5",
  orange:  "#E55D1A",
  orangeLt:"#FEF0E7",
  blue:    "#1D5FC4",
  blueLt:  "#EBF2FF",
  green:   "#1E6B45",
  greenLt: "#E8F5EE",
  red:     "#C0392B",
  redLt:   "#FDECEA",
  border:  "rgba(17,17,17,0.10)",
  borderMd:"rgba(17,17,17,0.18)",
};

const P = {
  hero:    "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=1400&q=80&fit=crop",
  dog1:    "https://images.unsplash.com/photo-1561037404-61cd46aa615b?w=600&q=80&fit=crop",
  dog2:    "https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?w=600&q=80&fit=crop",
  dog3:    "https://images.unsplash.com/photo-1477884213360-7e9d7dcc1e48?w=600&q=80&fit=crop",
  dog4:    "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=600&q=80&fit=crop",
  cat1:    "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=600&q=80&fit=crop",
  cat2:    "https://images.unsplash.com/photo-1573865526739-10659fec78a5?w=600&q=80&fit=crop",
  vet1:    "https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?w=700&q=80&fit=crop",
  vet2:    "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&q=80&fit=crop",
  groom:   "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?w=700&q=80&fit=crop",
  train:   "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=700&q=80&fit=crop",
  shop1:   "https://images.unsplash.com/photo-1589924691995-400dc9ecc119?w=500&q=80&fit=crop",
  shop2:   "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=500&q=80&fit=crop",
  about1:  "https://images.unsplash.com/photo-1450778869180-41d0601e046e?w=900&q=80&fit=crop",
  about2:  "https://images.unsplash.com/photo-1444212477490-ca407925329e?w=600&q=80&fit=crop",
  team1:   "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&q=80&fit=crop",
  team2:   "https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=400&q=80&fit=crop",
  team3:   "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&q=80&fit=crop",
  lost1:   "https://images.unsplash.com/photo-1518717758536-85ae29035b6d?w=600&q=80&fit=crop",
  lost2:   "https://images.unsplash.com/photo-1533743983669-94fa5c4338ec?w=600&q=80&fit=crop",
  community:"https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=600&q=80&fit=crop",
  boarding: "https://images.unsplash.com/photo-1548767797-d8c844163c4a?w=600&q=80&fit=crop",
};

// ── Service Mega-Menu Categories ───────────────────────────────────
const SERVICE_CATS = [
  {
    cat: "Health & Care", icon: "🏥", page: "svc-health",
    items: [
      {label:"General Checkups",       page:"svc-health"},
      {label:"Vaccinations",           page:"svc-health"},
      {label:"Deworming",              page:"svc-health"},
      {label:"Flea & Tick Treatment",  page:"svc-health"},
      {label:"Dental Care",            page:"svc-health"},
      {label:"Spay & Neuter",          page:"svc-health"},
      {label:"Emergency Care",         page:"svc-health"},
      {label:"Surgery",                page:"svc-health"},
      {label:"Nutrition Consultation", page:"svc-health"},
      {label:"Senior Dog Care",        page:"svc-health"},
      {label:"Puppy Care",             page:"svc-health"},
      {label:"Physiotherapy & Rehab",  page:"svc-health"},
    ],
  },
  {
    cat: "Grooming & Hygiene", icon: "✂️", page: "svc-grooming",
    items: [
      {label:"Full Grooming",              page:"svc-grooming"},
      {label:"Bath & Blow Dry",            page:"svc-grooming"},
      {label:"Hair Trimming & Styling",    page:"svc-grooming"},
      {label:"Nail Clipping",              page:"svc-grooming"},
      {label:"Ear Cleaning",               page:"svc-grooming"},
      {label:"Teeth Brushing",             page:"svc-grooming"},
      {label:"De-shedding Treatment",      page:"svc-grooming"},
      {label:"Flea Bath",                  page:"svc-grooming"},
      {label:"Paw Care",                   page:"svc-grooming"},
      {label:"Skin & Coat Treatment",      page:"svc-grooming"},
    ],
  },
  {
    cat: "Training & Behavior", icon: "🎓", page: "svc-training",
    items: [
      {label:"Puppy Training",             page:"svc-training"},
      {label:"Obedience Training",         page:"svc-training"},
      {label:"Leash Training",             page:"svc-training"},
      {label:"Potty Training",             page:"svc-training"},
      {label:"Behavioral Correction",      page:"svc-training"},
      {label:"Aggression Management",      page:"svc-training"},
      {label:"Socialization Training",     page:"svc-training"},
      {label:"Guard Dog Training",         page:"svc-training"},
      {label:"Advanced Training",          page:"svc-training"},
      {label:"Therapy Dog Training",       page:"svc-training"},
    ],
  },
  {
    cat: "Boarding & Sitting", icon: "🏠", page: "svc-boarding",
    items: [
      {label:"Dog Boarding",       page:"svc-boarding"},
      {label:"Luxury Boarding",    page:"svc-boarding"},
      {label:"Overnight Stay",     page:"svc-boarding"},
      {label:"Dog Daycare",        page:"svc-boarding"},
      {label:"Pet Sitting",        page:"svc-boarding"},
      {label:"Home Visit Care",    page:"svc-boarding"},
      {label:"Long-Term Boarding", page:"svc-boarding"},
      {label:"Cage-Free Boarding", page:"svc-boarding"},
      {label:"Puppy Daycare",      page:"svc-boarding"},
    ],
  },
  {
    cat: "Activity & Lifestyle", icon: "🏃", page: "svc-activity",
    items: [
      {label:"Dog Walking",            page:"svc-activity"},
      {label:"Exercise Sessions",      page:"svc-activity"},
      {label:"Playtime Activities",    page:"svc-activity"},
      {label:"Adventure Walks",        page:"svc-activity"},
      {label:"Swimming Sessions",      page:"svc-activity"},
      {label:"Fitness Training",       page:"svc-activity"},
      {label:"Outdoor Socialization",  page:"svc-activity"},
      {label:"Hiking Trips",           page:"svc-activity"},
      {label:"Dog Park Visits",        page:"svc-activity"},
    ],
  },
  {
    cat: "Specialty Services", icon: "⭐", page: "svc-specialty",
    items: [
      {label:"Adoption Assistance",             page:"svc-specialty"},
      {label:"Breeding Consultation",           page:"svc-specialty"},
      {label:"Pregnancy & Whelping",            page:"svc-specialty"},
      {label:"Rehabilitation Therapy",          page:"svc-specialty"},
      {label:"Hospice & End-of-Life Care",      page:"svc-specialty"},
      {label:"Pet Photography",                 page:"svc-specialty"},
      {label:"Dog Events & Parties",            page:"svc-specialty"},
      {label:"Emotional Support Dog",           page:"svc-specialty"},
      {label:"Microchipping",                   page:"svc-specialty"},
      {label:"Pet Relocation Services",         page:"svc-specialty"},
    ],
  },
  {
    cat: "Retail & Extras", icon: "🛍️", page: "svc-retail",
    items: [
      {label:"Dog Food",              page:"svc-retail"},
      {label:"Treats & Supplements",  page:"svc-retail"},
      {label:"Toys",                  page:"svc-retail"},
      {label:"Collars & Leashes",     page:"svc-retail"},
      {label:"Beds & Crates",         page:"svc-retail"},
      {label:"Grooming Products",     page:"svc-retail"},
      {label:"Clothing & Extras",     page:"svc-retail"},
      {label:"Training Tools",        page:"svc-retail"},
      {label:"ID Tags",               page:"svc-retail"},
      {label:"Travel Accessories",    page:"svc-retail"},
    ],
  },
];

// ── Database lists ───────────────────────────────────────────────
const ALL_PETS = [
  { id:1, name:"Bruno",   breed:"Labrador Retriever",  species:"Dog",  size:"Large",  gender:"Male",   age:"2 yrs", img:P.dog1, loc:"Coimbatore", vacc:true,  neut:false, tags:["Friendly","Energetic","Loves kids"],   story:"Bruno was rescued from a flood shelter. Fully trained, loves fetch, and is wonderful with children." },
  { id:2, name:"Luna",    breed:"Persian Cat",         species:"Cat",  size:"Small",  gender:"Female", age:"1 yr",  img:P.cat1, loc:"Chennai",    vacc:true,  neut:true,  tags:["Calm","Indoor","Affectionate"],        story:"Luna was found as a stray kitten. She's grown into a gentle, affectionate soul who loves warm laps." },
  { id:3, name:"Milo",    breed:"Beagle",              species:"Dog",  size:"Medium", gender:"Male",   age:"3 yrs", img:P.dog2, loc:"Bangalore",  vacc:true,  neut:true,  tags:["Curious","Playful","Social"],          story:"Milo is a therapy dog candidate who responds to 20+ commands and has never met a stranger." },
  { id:4, name:"Cleo",    breed:"Tabby Cat",           species:"Cat",  size:"Small",  gender:"Female", age:"8 mo",  img:P.cat2, loc:"Hyderabad",  vacc:true,  neut:false, tags:["Kitten","Playful","Spirited"],         story:"Cleo is full of energy and personality — she will absolutely steal your socks and your heart." },
  { id:5, name:"Rex",     breed:"German Shepherd",     species:"Dog",  size:"Large",  gender:"Male",   age:"4 yrs", img:P.dog3, loc:"Mumbai",     vacc:true,  neut:false, tags:["Loyal","Trained","Protective"],        story:"Rex is a retired police assistance dog. Disciplined, loyal, and ready for a loving family home." },
  { id:6, name:"Daisy",   breed:"Golden Retriever",    species:"Dog",  size:"Large",  gender:"Female", age:"1 yr",  img:P.dog4, loc:"Pune",       vacc:false, neut:false, tags:["Gentle","Puppy","Playful"],            story:"Daisy is the softest soul you'll ever meet. Loves cuddles, belly rubs, and chasing butterflies." },
];

const vets = [
  { name:"Dr. Meera Iyer",    spec:"Small Animal Medicine", exp:"15 yrs", rating:4.9, reviews:1240, img:P.vet2,  price:"₹499", slots:["9:00 AM","11:00 AM","2:00 PM","4:00 PM","6:00 PM"], avail:"Today",    langs:["Tamil","English","Hindi"] },
  { name:"Dr. Rajan Pillai",  spec:"Exotic Pets & Birds",   exp:"12 yrs", rating:4.8, reviews:870,  img:P.team2, price:"₹599", slots:["10:00 AM","12:00 PM","3:00 PM","5:00 PM"],            avail:"Today",    langs:["Malayalam","English"] },
  { name:"Dr. Anita Desai",   spec:"Veterinary Surgery",    exp:"20 yrs", rating:4.9, reviews:2100, img:P.team3, price:"₹799", slots:["8:00 AM","1:00 PM","4:30 PM","7:00 PM"],             avail:"Tomorrow", langs:["Hindi","English","Marathi"] },
];

const products = [
  { id:1, name:"Royal Canin Medium Adult 4kg", cat:"Food",        price:2499, old:2999, img:P.shop1, rating:4.8, rev:1240, badge:"Best Seller", bc:C.orange },
  { id:2, name:"Kong Extreme Chew Toy",        cat:"Toys",        price:899,  old:1100, img:P.dog2,  rating:4.7, rev:890,  badge:"Popular",     bc:C.blue },
  { id:3, name:"GPS Pet Tracker Pro 2026",     cat:"Tech",        price:3999, old:4999, img:P.shop2, rating:4.9, rev:456,  badge:"New",          bc:C.green },
  { id:4, name:"Himalaya PetCare Shampoo",     cat:"Grooming",    price:349,  old:449,  img:P.groom, rating:4.6, rev:2100, badge:"",             bc:"" },
  { id:5, name:"Complete Pet First Aid Kit",   cat:"Medicines",   price:799,  old:999,  img:P.vet1,  rating:4.8, rev:560,  badge:"Essential",    bc:C.red },
  { id:6, name:"Premium Adjustable Harness",   cat:"Accessories", price:1299, old:1599, img:P.train, rating:4.7, rev:780,  badge:"",             bc:"" },
];

const milestones = [
  { year:"2025", title:"Born from Love (Idea)", desc:"Frustrated by disconnected records and hard-to-reach vet clinics, Dr. Kiran and Sneha sketch a blueprint of Pawprint on a napkin." },
  { year:"2026", title:"Execution & Launch", desc:"Making the dream a reality. Launched pet onboarding, verified vet directory, and custom shelters. Expanded to 85+ Indian cities." },
  { year:"2027", title:"Shining Future", desc:"Leading with intelligence. Scaling our AI-driven disease predictors, smart feeding calculators, and predictive vet monitoring." },
];

const values = [
  { icon:"🐾❤️", title:"Compassion First",    desc:"Every product decision, every hire, every partnership - animal welfare always comes first.", bg:"#FEF2F2", border:"#FCA5A5", accent:"#EF4444", shadowRgb:"239, 68, 68" },
  { icon:"🦮🔬", title:"Science-Backed",      desc:"We partner with leading veterinary institutions and never recommend what isn't evidence-based.", bg:"#EFF6FF", border:"#BFDBFE", accent:"#3B82F6", shadowRgb:"59, 130, 246" },
  { icon:"🐕🔍", title:"Radical Transparency",desc:"Open pricing, honest advice, and no hidden fees - ever. What you see is exactly what you get.", bg:"#FFFBEB", border:"#FDE68A", accent:"#D97706", shadowRgb:"217, 119, 6" },
  { icon:"🌱🐾", title:"Sustainability",       desc:"Eco-conscious products, paperless records, and carbon-offset delivery on all shop orders.", bg:"#F0FDF4", border:"#BBF7D0", accent:"#22C55E", shadowRgb:"34, 197, 94" },
  { icon:"🐩🐺", title:"Community",           desc:"We're building a nation of confident, informed, and responsible pet parents - one family at a time.", bg:"#FAF5FF", border:"#E9D5FF", accent:"#8B5CF6", shadowRgb:"139, 92, 246" },
];

const leadership = [
  {
    name:"Dr. Kiran Patel", role:"CEO & Co-founder",
    img:P.team1, linkedin:"#",
    quote:"\"Every pet deserves the same standard of care as any family member. That's not a tagline — it's a design principle.\"",
    bio:"Board-certified veterinarian with 15 years of clinical practice across small animal medicine, emergency care, and rehabilitation. Founded Pawprint after his third rescue dog, Diesel, nearly died due to a missed diagnosis. Dr. Kiran leads product vision and all veterinary partnerships.",
    credentials:["BVSc — Tamil Nadu Veterinary & Animal Sciences University","MVSc — Small Animal Medicine, IVRI Bareilly","VCPN Certified Veterinary Professional","Mentor, Y Combinator India"],
  },
  {
    name:"Sneha Krishnamurthy", role:"CTO & Co-founder",
    img:P.team2, linkedin:"#",
    quote:"\"The hardest engineering challenge isn't the algorithm — it's making technology disappear so the human-pet bond comes through.\"",
    bio:"Machine learning engineer with a decade at Google (Search, Health AI) and two successful exits before Pawprint. Sneha architected the AI health assistant, smart symptom engine, and real-time GPS infrastructure. She is a STEM mentor and frequent speaker at AI India conferences.",
    credentials:["B.Tech — IIT Madras, Computer Science","MSc AI — Carnegie Mellon University","Ex-Google Brain (Health AI)","Forbes 30 Under 30 Asia — Technology"],
  },
  {
    name:"Arjun Mehta", role:"Head of Growth",
    img:P.team3, linkedin:"#",
    quote:"\"Growth that doesn't serve the customer isn't growth — it's debt. We grow by making pet parents' lives genuinely easier.\"",
    bio:"Hyperlocal operations leader with 8 years at Swiggy (scaled 0→500 cities) and Ola (international expansion). At Pawprint, Arjun owns city launches, supply-side partnerships, and all growth functions. He has a rescue Labrador named Butter who supervises his Zoom calls.",
    credentials:["MBA — Indian School of Business, Hyderabad","B.Com — Shri Ram College, Delhi","Ex-Swiggy VP City Operations","Ex-Ola International Expansion Lead"],
  },
];

const extended = [
  { name:"Sriram",            role:"VP of Product",          dept:"Product",    img:P.team1,    note:"Shapes the roadmap and ensures our pet management features are world-class." },
  { name:"Swathi",            role:"Head of Veterinary Care", dept:"Medical",    img:P.vet2,    note:"Coordinates with veterinary institutions to ensure evidence-based care." },
  { name:"Nikila",            role:"Lead UX Designer",       dept:"Brand",      img:P.team2,    note:"Designs beautiful, premium experiences for pet parents." },
  { name:"Sharmila",          role:"Head of Grooming Ops",   dept:"Operations", img:P.team3,    note:"Manages our groomer training and service standards across all cities." },
  { name:"Prabavathi",        role:"Lead Software Architect", dept:"Product",    img:P.team1,    note:"Builds predictive algorithms for the Paws AI health assistant." },
  { name:"Gopinath",          role:"VP of Engineering",      dept:"Product",    img:P.team3,    note:"Scales real-time data services and ensures 100% platform uptime." },
  { name:"Swetha",            role:"Head of Adoption",       dept:"Operations", img:P.team2,    note:"Partners with shelters to make verification and meet-and-greets simple." },
  { name:"Abinaya",           role:"Brand Copywriter",       dept:"Brand",      img:P.vet2,    note:"Crafts clear, caring guides and resources for our pet community." },
  { name:"Dhivyadharisni",    role:"Senior App Developer",   dept:"Product",    img:P.team1,    note:"Develops smooth native mobile experiences for health tracking on the go." },
  { name:"Siva",              role:"Logistics Manager",      dept:"Operations", img:P.team3,    note:"Manages supply chains for eco-conscious products in the Pet Shop." },
  { name:"Vanisree",          role:"Customer Support Lead",  dept:"Operations", img:P.team2,    note:"Ensures 24/7 empathetic support for queries, bookings, and emergencies." },
  { name:"Nandhini",          role:"Senior Data Analyst",    dept:"Strategy",   img:P.vet2,    note:"Extracts behavioral insights to personalize dietary and wellness advice." }
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
  { name:"Affenpinscher",               origin:"Germany",                       size:"Small",  type:["companion"],              temperament:"Curious, stubborn, playful",        lifespan:"12–14 yrs", weight:"3–6 kg",   img:"https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=400&q=75&fit=crop" },
  { name:"Afghan Hound",                origin:"Afghanistan",                   size:"Large",  type:["sighthound"],             temperament:"Aloof, dignified, independent",     lifespan:"12–14 yrs", weight:"23–27 kg", img:"https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=400&q=75&fit=crop" },
  { name:"Airedale Terrier",            origin:"United Kingdom",                size:"Large",  type:["guard","family"],         temperament:"Confident, alert, intelligent",     lifespan:"11–14 yrs", weight:"18–29 kg", img:"https://images.unsplash.com/photo-1477884213360-7e9d7dcc1e48?w=400&q=75&fit=crop" },
  { name:"Akita",                       origin:"Japan",                         size:"Large",  type:["guard"],                  temperament:"Loyal, dignified, protective",      lifespan:"10–13 yrs", weight:"32–59 kg", img:"https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?w=400&q=75&fit=crop" },
  { name:"Alaskan Malamute",            origin:"United States",                 size:"Large",  type:["working"],                temperament:"Affectionate, loyal, playful",      lifespan:"10–14 yrs", weight:"34–43 kg", img:"https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=400&q=75&fit=crop" },
  { name:"American Bulldog",            origin:"United States",                 size:"Large",  type:["guard","family"],         temperament:"Friendly, assertive, energetic",    lifespan:"10–15 yrs", weight:"27–54 kg", img:"https://images.unsplash.com/photo-1561037404-61cd46aa615b?w=400&q=75&fit=crop" },
  { name:"Anatolian Shepherd Dog",      origin:"Turkey",                        size:"Large",  type:["guard"],                  temperament:"Independent, reserved, protective", lifespan:"11–13 yrs", weight:"41–68 kg", img:"https://images.unsplash.com/photo-1477884213360-7e9d7dcc1e48?w=400&q=75&fit=crop" },
  { name:"Australian Cattle Dog",       origin:"Australia",                     size:"Medium", type:["working","family"],       temperament:"Alert, curious, intelligent",       lifespan:"12–16 yrs", weight:"14–16 kg", img:"https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=400&q=75&fit=crop" },
  { name:"Australian Shepherd",         origin:"United States",                 size:"Medium", type:["working","family"],       temperament:"Energetic, intelligent, loyal",     lifespan:"12–15 yrs", weight:"16–32 kg", img:"https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=400&q=75&fit=crop" },
  { name:"Basenji",                     origin:"Congo",                         size:"Small",  type:["companion"],              temperament:"Independent, clever, energetic",    lifespan:"13–14 yrs", weight:"9–11 kg",  img:"https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?w=400&q=75&fit=crop" },
  { name:"Basset Hound",                origin:"France",                        size:"Medium", type:["family"],                 temperament:"Tenacious, friendly, calm",         lifespan:"12–13 yrs", weight:"20–29 kg", img:"https://images.unsplash.com/photo-1477884213360-7e9d7dcc1e48?w=400&q=75&fit=crop" },
  { name:"Beagle",                      origin:"United Kingdom",                size:"Medium", type:["family","popular"],       temperament:"Curious, merry, friendly",          lifespan:"12–15 yrs", weight:"9–11 kg",  img:"https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?w=400&q=75&fit=crop" },
  { name:"Belgian Malinois",            origin:"Belgium",                       size:"Large",  type:["guard","working"],        temperament:"Confident, alert, hardworking",     lifespan:"14–16 yrs", weight:"25–30 kg", img:"https://images.unsplash.com/photo-1477884213360-7e9d7dcc1e48?w=400&q=75&fit=crop" },
  { name:"Bernese Mountain Dog",        origin:"Switzerland",                   size:"Large",  type:["family","popular"],       temperament:"Gentle, calm, affectionate",        lifespan:"7–10 yrs",  weight:"32–52 kg", img:"https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=400&q=75&fit=crop" },
  { name:"Bichon Frise",                origin:"Spain",                         size:"Small",  type:["companion","family"],     temperament:"Cheerful, playful, gentle",         lifespan:"14–15 yrs", weight:"5–10 kg",  img:"https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=400&q=75&fit=crop" },
  { name:"Border Collie",               origin:"United Kingdom",                size:"Medium", type:["working","popular"],      temperament:"Intelligent, energetic, responsive","lifespan":"12–15 yrs", weight:"14–20 kg", img:"https://images.unsplash.com/photo-1561037404-61cd46aa615b?w=400&q=75&fit=crop" },
  { name:"Boston Terrier",              origin:"United States",                 size:"Small",  type:["companion","family"],     temperament:"Friendly, lively, intelligent",     lifespan:"13–15 yrs", weight:"5–11 kg",  img:"https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?w=400&q=75&fit=crop" },
  { name:"Boxer",                       origin:"Germany",                       size:"Large",  type:["guard","family","popular"],temperament:"Playful, patient, loyal",           lifespan:"10–12 yrs", weight:"25–32 kg", img:"https://images.unsplash.com/photo-1561037404-61cd46aa615b?w=400&q=75&fit=crop" },
  { name:"Bulldog",                     origin:"United Kingdom",                size:"Medium", type:["companion","popular"],    temperament:"Calm, courageous, friendly",        lifespan:"8–10 yrs",  weight:"18–25 kg", img:"https://images.unsplash.com/photo-1477884213360-7e9d7dcc1e48?w=400&q=75&fit=crop" },
  { name:"Cane Corso",                  origin:"Italy",                         size:"Large",  type:["guard"],                  temperament:"Stable, quiet, reserved",           lifespan:"10–12 yrs", weight:"40–50 kg", img:"https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=400&q=75&fit=crop" },
  { name:"Chihuahua",                   origin:"Mexico",                        size:"Small",  type:["companion","popular"],    temperament:"Charming, bold, alert",             lifespan:"14–16 yrs", weight:"1–3 kg",   img:"https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?w=400&q=75&fit=crop" },
  { name:"Chow Chow",                   origin:"China",                         size:"Large",  type:["guard","companion"],      temperament:"Aloof, loyal, quiet",               lifespan:"9–15 yrs",  weight:"20–32 kg", img:"https://images.unsplash.com/photo-1477884213360-7e9d7dcc1e48?w=400&q=75&fit=crop" },
  { name:"Cocker Spaniel",              origin:"United Kingdom",                size:"Medium", type:["family","popular"],       temperament:"Playful, affectionate, gentle",     lifespan:"12–15 yrs", weight:"7–14 kg",  img:"https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=400&q=75&fit=crop" },
  { name:"Dachshund",                   origin:"Germany",                       size:"Small",  type:["companion","popular"],    temperament:"Stubborn, clever, lively",          lifespan:"12–16 yrs", weight:"4–15 kg",  img:"https://images.unsplash.com/photo-1561037404-61cd46aa615b?w=400&q=75&fit=crop" },
  { name:"Doberman Pinscher",           origin:"Germany",                       size:"Large",  type:["guard","popular"],        temperament:"Alert, loyal, fearless",            lifespan:"10–13 yrs", weight:"32–45 kg", img:"https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?w=400&q=75&fit=crop" },
  { name:"French Bulldog",              origin:"France",                        size:"Small",  type:["companion","popular"],    temperament:"Adaptable, playful, smart",         lifespan:"10–12 yrs", weight:"8–13 kg",  img:"https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=400&q=75&fit=crop" },
  { name:"German Shepherd",             origin:"Germany",                       size:"Large",  type:["guard","working","popular"],temperament:"Confident, courageous, smart",     lifespan:"9–13 yrs",  weight:"22–40 kg", img:"https://images.unsplash.com/photo-1477884213360-7e9d7dcc1e48?w=400&q=75&fit=crop" },
  { name:"Golden Retriever",            origin:"Scotland",                      size:"Large",  type:["family","popular"],       temperament:"Friendly, intelligent, devoted",    lifespan:"10–12 yrs", weight:"25–35 kg", img:P.dog4 },
  { name:"Indian Pariah Dog",           origin:"India",                         size:"Medium", type:["indian","family"],        temperament:"Hardy, intelligent, alert",         lifespan:"13–15 yrs", weight:"15–25 kg", img:P.dog3 },
  { name:"Rajapalayam",                 origin:"India",                         size:"Large",  type:["indian","guard"],         temperament:"Affectionate, guard, courageous",   lifespan:"10–12 yrs", weight:"30–45 kg", img:P.dog1 },
  { name:"Mudhol Hound",                origin:"India",                         size:"Large",  type:["indian","sighthound"],    temperament:"Graceful, alert, loyal",            lifespan:"12–14 yrs", weight:"22–28 kg", img:P.dog2 },
  { name:"Kombai",                      origin:"India",                         size:"Medium", type:["indian","guard"],         temperament:"Fierce, loyal, protective",         lifespan:"12–15 yrs", weight:"25–30 kg", img:P.dog4 },
];

const KB = [
  { keys:["adopt","adoption","pet","find pet","rescue","shelter","get a dog","get a cat","foster"],
    answer:"We have 6 verified pets available right now — Bruno (Labrador, 2yrs, Coimbatore), Luna (Persian Cat, Chennai), Milo (Beagle, Bangalore), Cleo (Tabby Kitten, Hyderabad), Rex (German Shepherd, Mumbai), and Daisy (Golden Retriever, Pune). All are health-checked. The adoption process takes 3–5 business days: browse, apply online, meet & greet, then paperwork. Would you like me to take you to the adoption listings? 🐾", page:"adopt", cta:"Browse Pets" },
  { keys:["how adopt","adoption process","adoption steps","adoption form","apply adopt"],
    answer:"The Pawprint adoption process has 4 steps:\n1️⃣ Browse verified pet listings and save your favourites\n2️⃣ Submit an online adoption application (takes ~5 minutes)\n3️⃣ Our team arranges a meet & greet with the pet\n4️⃣ Complete paperwork and take your new family member home 🎉\nThe whole process typically takes 3–5 business days. Shall I take you to the listings?", page:"adopt", cta:"Start Adoption" },
  { keys:["adoption fee","adoption cost","how much adopt","price adopt"],
    answer:"Adoption through Pawprint is completely free — there's no platform fee. Shelters may charge a small adoption fee (typically ₹500–₹2,000) which goes directly to animal welfare. This usually includes vaccinations already given. Want to browse available pets?", page:"adopt", cta:"View Pets" },
  { keys:["vet","veterinary","doctor","animal doctor","book vet","vet appointment","consultation","checkup"],
    answer:"We have 1,200+ certified vets across 85 cities. You can book:\n• Clinic visit (from ₹299)\n• Home visit (small additional charge)\n• Video consultation — available 24/7\n\nTop vets include Dr. Meera Iyer (Small Animal Medicine, ⭐4.9), Dr. Rajan Pillai (Exotic Pets, ⭐4.8), and Dr. Anita Desai (Surgery, ⭐4.9). Want to book an appointment?", page:"vet", cta:"Book a Vet" },
  { keys:["emergency","urgent","emergency vet","24/7 vet","vet emergency","critical","sick dog","sick cat"],
    answer:"🚨 For pet emergencies, Pawprint offers 24/7 emergency vet dispatch. A certified vet can be at your location within 60 minutes. Emergency call-out starts at ₹999. Our emergency line also provides first-aid guidance over the phone while the vet is on the way. Shall I take you to the booking page?", page:"vet", cta:"Emergency Booking" },
  { keys:["video consult","online vet","consult online","video call vet"],
    answer:"Video consultations with licensed vets are available 24/7 on Pawprint — no travel needed. Just choose a vet, select 'Video Consult', and join from your phone or laptop. Sessions typically last 15–30 minutes. Price varies by vet (₹299–₹799). Want to book one?", page:"vet", cta:"Book Video Consult" },
  { keys:["services","what services","all services","what do you offer","what can pawprint"],
    answer:"Pawprint offers 7 service categories with 70+ individual services:\n\n🏥 Health & Care — checkups, vaccines, surgery, emergency\n✂️ Grooming & Hygiene — full groom, bath, nail clipping, de-shedding\n🎓 Training & Behavior — puppy, obedience, aggression management\n🏠 Boarding & Sitting — luxury boarding, daycare, pet sitting\n🏃 Activity & Lifestyle — dog walking, adventure walks, swimming\n⭐ Specialty — microchipping, relocation, pet photography\n🛍️ Retail — food, toys, accessories, training tools\n\nWhich service are you interested in?", page:"services", cta:"Browse All Services" },
  { keys:["groom","grooming","bath","haircut","trim","nail","nail clip","de-shed","shed","paw","ear clean"],
    answer:"Our certified groomers offer:\n• Full Grooming — ₹799 (bath, cut, nail, ears, finishing)\n• Bath & Blow Dry — ₹399\n• Nail Clipping — ₹149\n• De-shedding Treatment — ₹599\n• Skin & Coat Treatment — ₹699\n\nFree pickup & drop available. All sessions use pH-balanced, cruelty-free products. Want to book?", page:"svc-grooming", cta:"Book Grooming" },
  { keys:["train","training","obedience","leash","puppy train","behavior","aggressive","pull","commands","tricks"],
    answer:"Our CPDT-certified trainers use 100% force-free, positive reinforcement methods:\n\n• Puppy Training — ₹1,499/month\n• Obedience Training — ₹1,999/month\n• Leash Training — ₹999/month\n• Behavioral Correction — ₹2,499/month\n• Aggression Management — ₹3,499/month\n• Therapy Dog Training — ₹3,999/month\n\n98% success rate across 10,000+ dogs trained. Shall I take you to training?", page:"svc-training", cta:"Book Training" },
  { keys:["board","boarding","daycare","dog daycare","pet sit","sitting","overnight","kennel","boarding cost","board price"],
    answer:"Our boarding options:\n\n🏠 Dog Boarding — ₹599/night (CCTV monitored, daily updates)\n👑 Luxury Boarding — ₹1,499/night (AC suite, live camera access)\n🏡 Cage-Free Boarding — ₹899/night (home environment)\n☀️ Dog Daycare — ₹399/day (full-day supervised play)\n🏠 Pet Sitting — ₹499/visit (in your home)\n\nAll facilities have a vet on call. Want to book?", page:"svc-boarding", cta:"Book Boarding" },
  { keys:["walk","dog walk","walking","exercise","hiking","hike","swim","swimming","adventure","activity","play"],
    answer:"Keep your pet active with our GPS-tracked, insured services:\n\n🚶 Dog Walking — ₹199/walk (30 min, real-time GPS)\n🏃 Exercise Sessions — ₹349/session (breed-specific fitness)\n🥾 Adventure Walks — ₹499/walk (90-min trail walks)\n🏊 Swimming Sessions — ₹599/session (hydrotherapy pool)\n🎾 Playtime Activities — ₹249/session (enrichment & games)\n\nAll walkers are background-checked and insured. Book one?", page:"svc-activity", cta:"Book Activity" },
  { keys:["shop","buy","food","toy","toys","collar","leash","accessories","grooming product","product","order","purchase"],
    answer:"The Pawprint Shop stocks 1,000+ vet-reviewed products:\n\n🍗 Dog Food — Royal Canin, Hills, Drools from ₹499\n🧸 Toys — Kong, tug toys, puzzle feeders from ₹149\n📡 GPS Tracker — ₹3,999 (real-time tracking)\n✂️ Grooming Products — pH-balanced shampoos from ₹199\n🦺 Collars & Leashes — from ₹249\n💊 Treats & Supplements — from ₹199\n\nNext-day delivery available. Want to visit the shop?", page:"shop", cta:"Go to Shop" },
  { keys:["lost","found","missing","lost pet","missing dog","missing cat","lost dog","lost cat","found dog","found cat","report lost"],
    answer:"If your pet is missing, act fast — most pets are found within 24 hours!\n\n📋 Report Lost Pet — fill our form with pet details, last seen location, your contact, and upload photos. We send alerts to nearby Pawprint users immediately.\n\n🔍 Found a Pet — report with photos and location. We match records to help reunite them.\n\n📍 Browse active cases in your city.\n\nWould you like to go to Lost & Found?", page:"lost", cta:"Go to Lost & Found" },
  { keys:["breed","dog breed","breeds","labrador","golden retriever","german shepherd","poodle","bulldog","husky","beagle","indian breed","pariah","rajapalayam"],
    answer:"Our Dog Breeds encyclopedia has 67+ recognized breeds with full details:\n\n📋 A–Z list of all breeds\n🇮🇳 8 Indian breeds (Pariah, Rajapalayam, Mudhol Hound, Chippiparai, Kombai, Kanni, Himalayan Sheepdog, Indian Spitz)\n⭐ Most popular breeds\n🛡 Guard dog breeds\n🏡 Family-friendly breeds\n\nEach breed includes origin, temperament, size, lifespan, care guide, and more. Want to explore?", page:"dog-breeds", cta:"Browse Dog Breeds" },
  { keys:["video","videos","tutorial","how to train","training video","watch","groom video","learn","tips"],
    answer:"Our free Pet Videos library has 12+ expert tutorials:\n\n🎓 Puppy Training (8:24) — Dr. Kiran Patel\n🐕 5 Essential Commands (12:10) — CPDT Trainer\n🦮 Stop Leash Pulling (9:55) — Behavioral Specialist\n✂️ At-Home Grooming (14:30) — Master Groomer\n🏥 10 Warning Signs (11:00) — Head Vet\n🍗 Nutrition Guide (13:15) — Dr. Kiran Patel\n\nAll free, no sign-up needed. Want to watch?", page:"pet-videos", cta:"Watch Videos" },
  { keys:["dashboard","account","my pets","login","sign in","profile","register","signup","sign up"],
    answer:"Your Pawprint Dashboard lets you:\n\n🐾 Add & manage multiple pet profiles\n💉 Track vaccination history & get reminders\n📅 View upcoming vet & grooming bookings\n📦 Track shop orders\n🏥 Access full health records\n\nSign in to access your dashboard, or create a free account to get started!", page:"dashboard", cta:"Go to Dashboard" },
  { keys:["price","pricing","cost","plan","subscription","free","premium","pro","membership","how much"],
    answer:"Pawprint offers flexible plans:\n\n🆓 Free — 1 pet profile, basic listings, community access\n💙 Premium — ₹499/month (5 pets, AI tools, priority booking, 10% shop discount)\n🔶 Pro — ₹999/month (unlimited pets, all features, 20% discount, insurance management)\n🏢 Enterprise — Custom (shelters, vet clinics, bulk tools)\n\nAll plans have a free trial. Want to explore plans?", page:"signup", cta:"See Plans" },
  { keys:["about","who","company","founded","team","founder","history","story","mission"],
    answer:"Pawprint was founded in 2020 by Dr. Kiran Patel (CEO, veterinarian) and Sneha Krishnamurthy (CTO, ex-Google AI engineer) after struggling to find reliable vet care for rescue dogs.\n\n📊 Today: 45,000+ happy pets · ₹42Cr raised · 85+ cities · 1,200+ vet partners\n🏆 ET Startup of the Year 2024 · Forbes 30 Under 30 · Y Combinator Alumni\n\nOur mission: world-class pet care, accessible to every pet family in India. Want to learn more?", page:"about", cta:"Our Story" },
  { keys:["contact","call","phone","email","address","support","help","reach","talk to"],
    answer:"Reach us anytime:\n\n📧 hello@pawprint.in\n📞 +91 98765 43210\n📍 Avinashi Road, Coimbatore, Tamil Nadu 641018\n⏰ Mon–Sat, 9 AM – 6 PM IST\n\nFor 24/7 pet emergencies, our vet line is always open. Want to open the contact page?", page:"contact", cta:"Contact Us" },
  { keys:["vaccination","vaccine","vaccinate","rabies","parvo","distemper","shot","immunise"],
    answer:"Core vaccines every dog needs:\n\n💉 Distemper + Parvo + Hepatitis (DA2PP) — every 3 years after puppy series\n💉 Rabies — annually or every 3 years (law requires it)\n💉 Kennel Cough (Bordetella) — annually for social dogs\n💉 Leptospirosis — annually in high-risk areas\n\nPuppy first vaccines start at 6–8 weeks. Our vets create a personalised schedule and send digital reminders. Want to book a vaccination?", page:"vet", cta:"Book Vaccination" },
  { keys:["feed","food","diet","what to feed","how much food","puppy food","adult food","nutrition","eat","meal","raw"],
    answer:"General feeding guidelines by life stage:\n\n🐶 Puppies (under 1yr) — 3–4 meals/day, puppy formula with high protein (28%+)\n🐕 Adults (1–7yrs) — 2 meals/day, body weight ×30kcal approximately\n👴 Seniors (7yr+) — 2 smaller meals, lower calorie, joint support formula\n\nAvoid: chocolate, grapes, onions, xylitol, avocado — all toxic to dogs.\n\nOur AI nutrition tool gives personalised recommendations based on breed & weight. Shall I take you there?", page:"svc-health", cta:"Nutrition Consultation" },
  { keys:["microchip","chip","microchipping","id","identify","identification"],
    answer:"Microchipping is the most reliable form of permanent pet ID — it's a tiny ISO chip implanted painlessly under the skin (similar to a vaccine injection). At Pawprint:\n\n💉 Cost: ₹399\n⏱ Duration: 15 minutes\n📋 Includes national database registration\n🆔 ID card issued\n🔔 Lost pet alert setup\n\nWe highly recommend microchipping for all pets. Want to book?", page:"svc-specialty", cta:"Book Microchipping" },
  { keys:["spay","neuter","sterilise","sterilize","castrate","surgery","spayed"],
    answer:"Spaying (females) and neutering (males) offers major health benefits — reduced cancer risk, longer lifespan, and better behaviour. At Pawprint:\n\n💰 Cost: from ₹3,999\n⏱ Procedure: 2–3 hours under general anaesthesia\n✅ Includes: pre-op blood panel, anaesthesia monitoring, post-op care kit, pain management & free follow-up\n\nRecommended age: 6–12 months (varies by breed). Want to book a consultation?", page:"vet", cta:"Book Consultation" },
  { keys:["hi","hello","hey","hii","helo","namaste","good morning","good evening","good afternoon","start","begin"],
    answer:"Hello! 👋 I'm Paws, Pawprint's AI assistant. I know everything about our platform — services, adoption, vets, shop, dog breeds, training, and more.\n\nWhat can I help you with today?", page:null, cta:null },
  { keys:["thank","thanks","thank you","great","awesome","perfect","good","helpful"],
    answer:"Happy to help! 🐾 Is there anything else you'd like to know about Pawprint — adoption, services, vets, or anything else?", page:null, cta:null },
  { keys:["bye","goodbye","see you","later","done","exit","close"],
    answer:"Goodbye! 🐾 Come back anytime — Paws is always here. Wishing you and your pets a wonderful day! 🌟", page:null, cta:null },
];

const QUICK_TOPICS = [
  {label:"🐾 Adopt a Pet",      query:"I want to adopt a pet"},
  {label:"🏥 Book a Vet",       query:"How do I book a vet?"},
  {label:"✂️ Grooming",         query:"Tell me about grooming services"},
  {label:"🎓 Pet Training",     query:"What training options do you have?"},
  {label:"🐕 Dog Breeds",       query:"Tell me about dog breeds"},
  {label:"🏠 Boarding",         query:"What boarding options are available?"},
  {label:"📍 Lost & Found",     query:"How do I report a lost pet?"},
  {label:"💉 Vaccination",      query:"What vaccines does my pet need?"},
  {label:"🛍️ Shop",             query:"What's in the pet shop?"},
  {label:"💰 Pricing & Plans",  query:"What are the pricing plans?"},
  {label:"🍗 Pet Nutrition",    query:"What should I feed my dog?"},
  {label:"🎬 Pet Videos",       query:"Show me pet training videos"},
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
  { type:"lost", name:"Bruno", species:"Dog", breed:"Labrador Retriever", color:"Golden", area:"RS Puram", date:"2026-06-04", contact:"+91 98765 43210", reward:"₹5,000", img:P.dog1 },
  { type:"found", name:"Spotted Kitty", species:"Cat", breed:"Domestic Shorthair", color:"White/Black", area:"Gandhipuram", date:"2026-06-03", contact:"+91 98765 43211", reward:"N/A", img:P.cat2 },
  { type:"lost", name:"Bella", species:"Cat", breed:"Persian", color:"White", area:"Peelamedu", date:"2026-06-01", contact:"+91 87654 32109", reward:"₹2,000", img:P.cat1 },
];

// ── Dashboard state models for user's pets ──────────────────────
let userPets = [
  { name:"Max",   breed:"Golden Retriever", species:"Dog",  age:"3 yrs",  gender:"Male",   img:P.dog1, health:95, weight:"32 kg", color:"Golden",  microchip:"MX001234", allergies:"None", conditions:"None", nextVet:"Jun 15", nextVacc:"Jul 20", food:"Royal Canin Medium Adult" },
  { name:"Bella", breed:"Persian Cat",      species:"Cat",  age:"2 yrs",  gender:"Female", img:P.cat1, health:88, weight:"4.2 kg",color:"White",   microchip:"MX005678", allergies:"Dairy",conditions:"None", nextVet:"Jul 3",  nextVacc:"Aug 5",  food:"Whiskas Adult Tuna" },
];

// Testimonials & FAQ data sets
const testis = [
  { name:"Sriram",         city:"Coimbatore", initials:"SR", text:"My Golden Retriever, Rocky, used to get extremely anxious during vet trips. With Pawprint's home-vets, he is a happy, healthy pup! Outstanding service!", role:"Rocky's Parent", badge:"🐶 Tail-wag Approved!", dogEmoji:"🐾", wide:true },
  { name:"Swathi",         city:"Chennai",    initials:"SW", text:"The grooming pickup and drop-off is a lifesaver for my Pomeranian, Coco. She came back smelling like strawberries and looking like a little cloud!", role:"Coco's Mom", badge:"✂️ Sparkle Groomed!", dogEmoji:"🐩", wide:false },
  { name:"Abinaya",        city:"Bangalore",  initials:"AB", text:"I was looking to adopt a pet and found Daisy, a lovely indie pup, through Pawprint. The verify check and vaccination records were so neat!", role:"Daisy's Parent", badge:"💖 Adopted!", dogEmoji:"🐕", wide:false },
  { name:"Amarnath",       city:"Hyderabad",  initials:"AM", text:"The AI Health assistant is crazy good. My Beagle kept scratching his ears, and the AI correctly flagged ear mites. A quick home vet visit sorted it.", role:"Sherlock's Dad", badge:"🦴 Chew-toy Tested!", dogEmoji:"🐶", wide:true },
  { name:"Sarika",         city:"Coimbatore", initials:"SK", text:"We booked positive training sessions for our husky, Zeus. The trainer was incredibly patient, and Zeus now listens to basic commands perfectly!", role:"Zeus's Parent", badge:"🎓 Certified Trainer!", dogEmoji:"🐺", wide:false },
  { name:"Harish",         city:"Mumbai",     initials:"HA", text:"Pet Shop delivery was fast and the quality of the chew toys was top-notch. My lab, Simba, has finally met his match with the indestructible bone!", role:"Simba's Dad", badge:"🥎 Fetch Champion!", dogEmoji:"🐕‍🦺", wide:false },
  { name:"Srinath",        city:"Trichy",     initials:"SN", text:"Lost and Found helped me track down my cat, Leo, when he slipped out of the balcony. The community alert system works wonders!", role:"Leo's Parent", badge:"🐈 Cat Friendly!", dogEmoji:"🐱", wide:false },
  { name:"Ketheeshwaran",  city:"Madurai",    initials:"KW", text:"Boarding is a major concern when I travel. Pawprint linked me to a certified host who sent hourly photo updates of my pug, Oreo. Truly peaceful!", role:"Oreo's Parent", badge:"🏠 Cozy Bed Approved!", dogEmoji:"🐾", wide:true },
  { name:"Krish",          city:"Salem",      initials:"KR", text:"The dog breeds guide helped us understand that we needed a low-energy dog for our apartment. Adopted a senior dog and he's absolute perfection.", role:"Milo's Dad", badge:"🍖 Treat Lover!", dogEmoji:"🐕", wide:false },
  { name:"Nikila",         city:"Cochin",     initials:"NI", text:"Having all vaccine schedules, weight tracking, and medical reports stored in the pet dashboard saves us from carrying huge files to the clinic.", role:"Luna's Mom", badge:"🏥 Healthy Pup!", dogEmoji:"🐩", wide:false }
];
let activeTesti = 0;

const faqs = [
  { q:"How does pet adoption work?",         a:"Browse verified shelter listings, apply online, meet the pet, and complete adoption paperwork with our guidance — typically 3–5 business days." },
  { q:"Can I consult a vet online?",          a:"Yes. Our video consultation connects you with licensed vets 24/7. For emergencies we also offer rapid in-home vet dispatch." },
  { q:"Is there a free plan?",               a:"Yes — free tier includes one pet profile, community access, and basic vet listings. Premium unlocks AI tools, unlimited bookings, and shop discounts." },
  { q:"Which cities is Pawprint in?",        a:"Currently live in 85+ cities across India, including all metros and major Tier-2 cities." },
  { q:"How does the AI health assistant work?", a:"Describe your pet's symptoms in plain language. Our AI provides an initial triage and recommends next steps — always encouraging a real vet for anything serious." },
  { q:"How do you verify your service providers?", a:"Every veterinarian, groomer, and trainer on Pawprint undergoes rigorous background checks, certification checks, and in-person interviews to ensure your pet is in safe hands." },
  { q:"What is your refund and cancellation policy?", a:"You can cancel any booking up to 2 hours before the scheduled time for a full refund. Cancellations made within 2 hours are subject to a nominal cancellation fee." },
  { q:"Can I track my pet during grooming or boarding?", a:"Yes! All grooming pickup vehicles and boarding hosts are equipped with GPS tracking and offer live updates, photos, and video calls directly through your dashboard." }
];

/* ================================================================
   ROUTING & CORE NAVIGATION ENGINE
   ================================================================ */
function nav(pageId) {
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

  // If the target pageId starts with 'svc-', redirect to services.html with category query param
  if (pageId.startsWith('svc-')) {
    window.location.href = `services.html?cat=${pageId}`;
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
  viewAllBtn.setAttribute('onclick', `nav('${activeCatData.page}')`);

  const itemsGrid = document.getElementById('mega-active-items');
  itemsGrid.innerHTML = activeCatData.items.map(it => `
    <button onclick="nav('${it.page}')" class="mega-subitem-btn">
      <span style="width: 5px; height: 5px; border-radius: 50%; background: var(--color-orange); flex-shrink: 0; display: inline-block;"></span>
      ${it.label}
    </button>
  `).join('');
}

function setActiveMegaCat(catName) {
  activeServiceCat = catName;
  renderMegaMenuCats();
}

// Close mega-menu on mouseleave
document.getElementById('mega-menu').addEventListener('mouseleave', () => {
  closeAllDropdowns();
});

/* ================================================================
   DYNAMIC HOME PAGE COMPILING
   ================================================================ */
function renderHomeDynamicLists() {
  // 1. Bottom Services bar
  const sBar = document.getElementById('home-services-bar');
  if (sBar) {
    const bars = [
      {icon:"🏥",label:"Veterinary",  page:"vet"},
      {icon:"✂️",label:"Grooming",    page:"svc-grooming"},
      {icon:"🎓",label:"Training",    page:"svc-training"},
      {icon:"🏠",label:"Boarding",    page:"svc-boarding"},
      {icon:"🐾",label:"Adopt",       page:"adopt"},
      {icon:"🛍️",label:"Shop",        page:"shop"},
      {icon:"🐕",label:"Breeds",      page:"dog-breeds"},
      {icon:"📍",label:"Lost & Found",page:"lost"},
      {icon:"🎬",label:"Videos",      page:"pet-videos"},
      {icon:"🤖",label:"AI Health",   page:"svc-health"},
    ];
    sBar.innerHTML = bars.map((s,i) => `
      <button onclick="nav('${s.page}')" class="home-svc-bar-item" style="border-right: ${i<bars.length-1?'1px solid var(--color-border)':'none'};">
        <span style="font-size: 17px;">${s.icon}</span>
        <span style="font-size: 10px; color: var(--color-ink-sft); font-weight: 600; letter-spacing: .04em; text-transform: uppercase; white-space: nowrap;">${s.label}</span>
      </button>
    `).join('');
  }

  // 2. Marquee
  const marquee = document.querySelector('.marquee-sub');
  if (marquee) {
    const items = ["Pet Adoption","Veterinary Care","Grooming","Training","Smart Tracking","Pet Shop","Boarding","Emergency Care","AI Health","Lost & Found"];
    const all = [...items,...items];
    marquee.innerHTML = all.map(t => `
      <span style="color: rgba(255,255,255,.45); font-size: 11px; font-weight: 700; letter-spacing: .1em; text-transform: uppercase; white-space: nowrap; display: flex; align-items: center; gap: 20px;">
        ${t} <span style="color: var(--color-orange); font-size: 7px;">◆</span>
      </span>
    `).join('');
  }

  // 3. Features
  const features = [
    { icon:"🏥", title:"Veterinary Care", sub:"Book certified vets — home, clinic, or video.", color:C.blue, page:"vet", img:P.vet1 },
    { icon:"✂️", title:"Grooming",        sub:"Professional grooming with pickup & drop.",   color:C.green,  page:"svc-grooming", img:P.groom },
    { icon:"🎓", title:"Training",        sub:"Certified trainers using positive methods.",   color:C.orange, page:"svc-training", img:P.train },
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
      <div class="card card-lift" onclick="nav('adopt')" style="cursor: pointer;">
        <div style="position: relative; height: 220px; overflow: hidden;">
          <img src="${p.img}" style="width: 100%; height: 100%; object-fit: cover;" alt="${p.name}">
          <div style="position: absolute; inset: 0; background: linear-gradient(to top, rgba(0,0,0,.55) 0%, transparent 50%);"></div>
          ${p.vacc ? '<div style="position: absolute; top: 12px; left: 12px; background: var(--color-green); color: #fff; font-size: 9px; font-weight: 700; padding: 3px 9px; border-radius: 100px; text-transform: uppercase; letter-spacing: .05em;">Vaccinated</div>' : ''}
          <div style="position: absolute; bottom: 14px; left: 14px;">
            <div style="color: #fff; font-size: 18px; font-weight: 700; letter-spacing: -.02em;">${p.name}</div>
            <div style="color: rgba(255,255,255,.75); font-size: 11px; margin-top: 2px;">${p.breed} · ${p.age} · ${p.loc}</div>
          </div>
        </div>
        <div style="padding: 12px 14px; display: flex; justify-content: space-between; align-items: center;">
          <span style="font-size: 12px; color: var(--color-ink-sft);">${p.gender}</span>
          <button class="btn btn-sm btn-primary" onclick="event.stopPropagation(); nav('adopt')">Adopt</button>
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
    { target: 8200,  label: "Adoptions", suffix: "+" },
    { target: 1200,  label: "Vet Partners", suffix: "+" },
    { target: 85,    label: "Cities", suffix: "" }
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

  // 2. Timeline (2025 - 2027)
  const tmGrid = document.getElementById('about-timeline-grid');
  if (tmGrid) {
    tmGrid.innerHTML = milestones.map((m, i) => `
      <div style="padding-top: 56px; position: relative;">
        <!-- Dot -->
        <div class="timeline-dot-wrap" style="position: absolute; top: 16px; left: 50%; transform: translateX(-50%); z-index: 2;">
          <div class="${i===2 ? 'timeline-glow-dot' : ''}" style="width: 24px; height: 24px; border-radius: 50%;
            background: ${i===2 ? 'var(--color-orange)' : 'var(--color-ink-md)'};
            border: 3px solid ${i===2 ? 'var(--color-orange)' : 'rgba(255,255,255,.3)'};
            box-shadow: ${i===2 ? '0 0 0 6px rgba(229, 93, 26, 0.18)' : 'none'};"></div>
        </div>
        <!-- Card -->
        <div class="card-lift" style="background: rgba(255,255,255,.06); border: 1px solid rgba(255,255,255,.08); border-radius: 16px; padding: 22px 20px; border-top: ${i===2 ? '3px solid var(--color-orange)' : '1px solid rgba(255,255,255,.08)'}; text-align: center;">
          <div style="font-size: 11px; font-weight: 700; letter-spacing: .08em; text-transform: uppercase; color: var(--color-orange); margin-bottom: 6px;">${m.year}</div>
          <div class="melody" style="font-size: 19px; color: #fff; margin-bottom: 8px; line-height: 1.1;">${m.title}</div>
          <p style="font-size: 12px; color: rgba(255,255,255,.45); line-height: 1.7;">${m.desc}</p>
        </div>
      </div>
    `).join('');
  }

  // 3. Founders side-by-side grid
  const leaderGrid = document.getElementById('leadership-grid');
  if (leaderGrid) {
    leaderGrid.innerHTML = leadership.map(l => `
      <div class="card card-lift founder-card" style="position: relative; overflow: hidden; border-radius: 24px; background: var(--color-white); border: 1px solid var(--color-border-md); display: flex; flex-direction: column; height: 100%;">
        <div style="height: 330px; overflow: hidden; position: relative;">
          <img src="${l.img}" style="width: 100%; height: 100%; object-fit: cover; transition: transform 0.5s cubic-bezier(0.22, 1, 0.36, 1);" alt="${l.name}">
          </div>
        <div style="padding: 24px; display: flex; flex-direction: column; flex: 1; justify-content: space-between;">
          <div style="margin-bottom: 20px;">
            <div class="pill pill-orange" style="font-size: 10px; padding: 4px 10px; margin-bottom: 12px; width: fit-content; text-transform: uppercase;">${l.role}</div>
            <h3 class="melody" style="font-size: 26px; color: var(--color-ink); margin-bottom: 8px; line-height: 1.1;">${l.name}</h3>
            
          </div>
          <div>
            <div style="font-size: 10px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; color: var(--color-sand); margin-bottom: 8px;">Key Background</div>
            <div style="display: flex; flex-direction: column; gap: 6px; margin-bottom: 20px;">
              ${l.credentials.slice(0, 2).map(c => `
                <div style="display: flex; align-items: flex-start; gap: 8px; font-size: 12.5px; color: var(--color-ink); line-height: 1.4;">
                  <span style="color: var(--color-orange); font-weight: 700; flex-shrink: 0; margin-top: 1px;">✓</span>
                  <span>${c}</span>
                </div>
              `).join('')}
            </div>
            <a href="${l.linkedin}" target="_blank" class="btn btn-sm btn-outline" style="width: 100%; border-radius: 12px; border: 1.5px solid var(--color-border-md); font-size: 12px; padding: 8px; justify-content: center;">
              <span style="font-weight: 800; font-family: sans-serif; margin-right: 4px; font-size: 13px;">in</span> View LinkedIn Profile
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

function setActiveLeader(idx) {
  // Tabs removed, renderAboutTabContent is static
}

/* ================================================================
   DYNAMIC SERVICES PAGE COMPILING
   ================================================================ */
function renderServicesCategoriesList() {
  const container = document.getElementById('services-categories-list');
  if (!container) return;

  const cats = [
    { icon:"🏥", name:"Health & Care", page:"svc-health", color:C.blue, img:P.vet1, price:"from ₹149", tagline:"Expert medical care for every stage of life.", desc:"From routine checkups and vaccinations to emergency surgeries and physiotherapy — our 1,200+ certified vets have every health need covered.", highlights:["General Checkups","Vaccinations","Emergency Care","Surgery","Dental Care","Puppy & Senior Care"], stats:[["1,200+ ","Vets"],["24/7","Emergency"],["4.9★","Rating"]] },
    { icon:"✂️", name:"Grooming & Hygiene", page:"svc-grooming", color:C.green, img:P.groom, price:"from ₹149", tagline:"Professional pampering, every time.", desc:"Certified groomers, premium cruelty-free products, and free pickup & drop — so your pet always walks out looking (and smelling) incredible.", highlights:["Full Grooming","Bath & Blow Dry","Nail Clipping","De-shedding","Flea Bath","Skin & Coat Treatment"], stats:[["500+","Groomers"],["Pickup","& Drop Free"],["4.9★","Rating"]] },
    { icon:"🎓", name:"Training & Behavior", page:"svc-training", color:C.orange, img:P.train, price:"from ₹799/mo", tagline:"Force-free training that actually works.", desc:"CPDT-certified trainers using only positive reinforcement — from basic puppy commands to advanced obedience, behavioural correction, and therapy dog preparation.", highlights:["Puppy Training","Obedience Training","Behavioral Correction","Aggression Management","Therapy Dog Training","Leash Training"], stats:[["200+","Trainers"],["98%","Success Rate"],["Force-Free","Methods"]] },
    { icon:"🏠", name:"Boarding & Sitting", page:"svc-boarding", color:"#7C3AED", img:P.boarding, price:"from ₹299/visit", tagline:"Safe, loving care when you can't be there.", desc:"CCTV-monitored facilities, background-checked home sitters, cage-free options, and daily photo updates — your pet is always in the best hands.", highlights:["Dog Boarding","Luxury Boarding","Dog Daycare","Pet Sitting","Cage-Free Boarding","Puppy Daycare"], stats:[["CCTV","24/7"],["Daily","Updates"],["4.9★","Rating"]] },
    { icon:"🏃", name:"Activity & Lifestyle", page:"svc-activity", color:"#D97706", img:P.dog3, price:"from ₹199/walk", tagline:"Active pets are happy pets.", desc:"GPS-tracked walks, canine fitness programmes, adventure hikes, swimming sessions, and outdoor socialisation — keeping your dog physically and mentally thriving.", highlights:["Dog Walking","Exercise Sessions","Adventure Walks","Swimming Sessions","Hiking Trips","Dog Park Visits"], stats:[["GPS","Every Walk"],["Insured","Walkers"],["10K+","Walks Done"]] },
    { icon:"⭐", name:"Specialty Services", page:"svc-specialty", color:"#B45309", img:P.about1, price:"Varies", tagline:"Unique care for life's special moments.", desc:"From pet photography and dog parties to hospice care, microchipping, pet relocation, and emotional support dog training — specialised services for when standard isn't enough.", highlights:["Pet Photography","Microchipping","Pet Relocation","Dog Events & Parties","Hospice Care","Rehabilitation Therapy"], stats:[["Specialist","Team"],["100%","Compassionate"],["5,000+","Families Helped"]] },
    { icon:"🛍️", name:"Retail & Extras", page:"svc-retail", color:C.orange, img:P.shop1, price:"from ₹99", tagline:"Everything your pet needs, curated by vets.", desc:"Premium food, toys, accessories, grooming products, training tools, and travel essentials — vet-reviewed and delivered fast.", highlights:["Dog Food","Toys","Collars & Leashes","Grooming Products","Training Tools","Travel Accessories"], stats:[["1,000+","Products"],["Vet","Reviewed"],["Next-Day","Delivery"]] },
  ];

  container.innerHTML = cats.map(cat => `
    <div class="card card-lift" style="cursor: pointer; border-top: 4px solid ${cat.color};" onclick="nav('${cat.page}')">
      <div style="height: 200px; overflow: hidden; position: relative;">
        <img src="${cat.img}" style="width: 100%; height: 100%; object-fit: cover;" alt="${cat.name}">
        <div style="position: absolute; inset: 0; background: linear-gradient(to top, rgba(0,0,0,.5) 0%, transparent 55%);"></div>
        <div style="position: absolute; bottom: 14px; left: 16px; display: flex; align-items: center; gap: 8px;">
          <span style="font-size: 22px;">${cat.icon}</span>
          <span class="melody" style="color: #fff; font-size: 20px; line-height: 1;">${cat.name}</span>
        </div>
        <div style="position: absolute; top: 12px; right: 12px; background: rgba(0,0,0,.55); border-radius: 100px; padding: 4px 12px;">
          <span style="color: #fff; font-size: 12px; font-weight: 600;">${cat.price}</span>
        </div>
      </div>
      <div style="padding: 22px 24px;">
        <p style="font-size: 13px; color: var(--color-ink-sft); line-height: 1.7; margin-bottom: 16px;">${cat.desc}</p>
        <div style="display: flex; flex-wrap: wrap; gap: 6px; margin-bottom: 18px;">
          ${cat.highlights.map(h => `
            <span style="font-size: 11px; font-weight: 500; color: ${cat.color}; background: ${cat.color}12; padding: 3px 10px; border-radius: 100px; border: 1px solid ${cat.color}22;">
              ${h}
            </span>
          `).join('')}
        </div>
        <div style="display: flex; gap: 0; border-top: 1px solid var(--color-border); padding-top: 14px;">
          ${cat.stats.map(s => `
            <div style="flex: 1; text-align: center; border-right: 1px solid var(--color-border); &:last-child { border-right: none; }">
              <div class="melody" style="font-size: 16px; color: ${cat.color}; line-height: 1;">${s[0]}</div>
              <div style="font-size: 10px; color: var(--color-ink-sft); margin-top: 3px;">${s[1]}</div>
            </div>
          `).join('')}
        </div>
      </div>
      <div style="padding: 0 24px 20px; display: flex; justify-content: space-between; align-items: center;">
        <span style="font-size: 13px; color: var(--color-ink-sft);">${cat.highlights.length} services available</span>
        <button class="btn btn-sm btn-primary" style="background: ${cat.color}; box-shadow: 0 4px 14px ${cat.color}44;" onclick="event.stopPropagation(); nav('${cat.page}')">Explore →</button>
      </div>
    </div>
  `).join('');
}

// ── Service category pages template builder ──────────────────────────
const servicePagesData = {
  "svc-health": {
    cat: "Health & Care", icon: "🏥", color: C.blue, heroImg: P.vet1, tagline: "Expert Care,\nHealthier Lives.",
    about: "Certified veterinarians, advanced diagnostics, and compassionate care — for every stage of your pet's life.",
    whyUs: { stats:[["1,200+","Certified Vets"],["24/7","Emergency Care"],["4.9★","Average Rating"],["50K+","Consultations"]], points:[{icon:"🏥",title:"Certified Vets Only",desc:"Every vet on Pawprint is VCPN-verified with minimum 3 years of clinical experience."},{icon:"🔬",title:"Evidence-Based Medicine",desc:"We follow the latest veterinary clinical guidelines — no guesswork, only science."},{icon:"📋",title:"Digital Health Records",desc:"Every visit, prescription, and report is stored securely and accessible anytime."},{icon:"🚑",title:"24/7 Emergency",desc:"Our emergency line and rapid-response vets are available round the clock."}] },
    faqItems: [{q:"How often should I take my dog for a checkup?",a:"Healthy adult dogs benefit from bi-annual checkups. Puppies and senior dogs (7+) should visit every 3–4 months."},{q:"Are your vets qualified?",a:"All Pawprint vets hold a BVSc or MVSc degree and are registered with the Veterinary Council of India."},{q:"Can I consult online first?",a:"Absolutely. Our video consultation service connects you with a vet in minutes — available 24/7."},{q:"What vaccines does my puppy need?",a:"Core vaccines include Distemper, Parvovirus, Hepatitis, and Rabies. Our vets will create a tailored schedule at your first visit."},{q:"Do you offer home visits?",a:"Yes. All services, including checkups, vaccinations, and deworming, are available as home visits at a small additional charge."}],
    services: [
      { name:"General Checkups",   price:"₹299",  duration:"30 min", rating:"4.9", img:P.vet1,  shortDesc:"Full physical examination, vitals check, and health assessment by a certified vet.", desc:"Our general checkup includes a comprehensive nose-to-tail physical examination. The vet checks eyes, ears, teeth, skin, coat, weight, and all vital signs. You'll receive a written health report and recommendations.", includes:["Full physical examination","Vitals & weight check","Parasite screening","Dietary recommendations","Written health report","Follow-up advice"] },
      { name:"Vaccinations",       price:"₹199",  duration:"20 min", rating:"4.9", img:P.vet2,  shortDesc:"All core and lifestyle vaccines administered by certified veterinarians with digital records.", desc:"We offer complete vaccination drives covering all core vaccines (Distemper, Parvovirus, Rabies) and lifestyle vaccines. You receive a digital health passport with all records and smart reminders for upcoming doses.", includes:["Core & lifestyle vaccines","Digital health passport","Vaccine certificate","Smart reminder setup","Post-vaccine guidance","Free 24h helpline"] },
      { name:"Deworming",          price:"₹149",  duration:"15 min", rating:"4.8", img:P.groom, shortDesc:"Safe, vet-prescribed deworming treatments for all ages and breeds.", desc:"Deworming is essential every 3–6 months. Our vets assess your pet's weight, age, and risk factors to prescribe the right treatment. Includes follow-up to ensure full efficacy.", includes:["Weight-based dosing","Broad-spectrum coverage","Puppy-safe options","Follow-up check","Treatment record","Preventive schedule"] },
      { name:"Flea & Tick Treatment", price:"₹349", duration:"30 min", rating:"4.8", img:P.train, shortDesc:"Effective flea and tick prevention and treatment for a comfortable, healthy pet.", desc:"Our certified vets provide both topical and systemic flea & tick treatments, selecting the safest and most effective option for your pet's breed, age, and lifestyle.", includes:["Vet-selected product","Topical or oral option","Environmental advice","Collar options","Safe for all ages","Monthly plan available"] },
      { name:"Dental Care",        price:"₹599",  duration:"45 min", rating:"4.7", img:P.vet1,  shortDesc:"Professional dental cleaning and oral health assessment to prevent disease.", desc:"Periodontal disease affects 80% of dogs over 3. Our dental care service includes professional scaling, polishing, full oral exam, and a home care plan.", includes:["Professional scaling","Polishing","Full oral examination","X-ray if needed","Home care kit","Dietary guidance"] },
      { name:"Spay & Neuter",      price:"₹3,999",duration:"2–3 hrs",rating:"4.9", img:P.vet2,  shortDesc:"Safe, medically supervised spay and neuter procedures by experienced surgeons.", desc:"Our spay/neuter surgeries are performed by experienced veterinary surgeons with full pre-op bloodwork, anesthesia monitoring, and post-op care included.", includes:["Pre-op blood panel","General anesthesia","Expert surgery","Post-op care kit","Pain management","Free follow-up visit"] },
    ]
  },
  "svc-grooming": {
    cat: "Grooming & Hygiene", icon: "✂️", color: C.green, heroImg: P.groom, tagline: "Looking Good,\nFeeling Great.",
    about: "Certified groomers, premium products, and stress-free sessions — because your pet deserves to look and feel their very best.",
    whyUs: { stats:[["500+","Certified Groomers"],["4.9★","Client Rating"],["Pickup","& Drop Free"],["All","Breeds Welcome"]],points:[{icon:"✂️",title:"Breed-Certified Groomers",desc:"All groomers complete a 120-hour breed-specific certification programme."},{icon:"🌿",title:"Premium Products",desc:"We use only pet-safe, cruelty-free, dermatologically tested grooming products."},{icon:"🚗",title:"Free Pickup & Drop",desc:"Available in all major cities — we come to you, saving you time and stress."},{icon:"📸",title:"Before & After Photos",desc:"We capture the transformation so you can share your pet's glow-up."}] },
    faqItems: [{q:"How often should I groom my dog?",a:"Most dogs benefit from professional grooming every 4–8 weeks depending on breed and coat type. Double-coated breeds may need more frequent de-shedding."},{q:"Is your grooming salon safe for anxious pets?",a:"Yes. We use calm, force-free handling techniques. For very anxious pets, we offer one-on-one sessions with extra patience and breaks."},{q:"Do you offer mobile grooming?",a:"We offer pickup and drop at no extra charge. Full mobile grooming vans are available in select cities."},{q:"What shampoo do you use?",a:"We use pH-balanced, breed-appropriate shampoos — medicated options are available for skin conditions on vet recommendation."},{q:"Can I request a specific grooming style?",a:"Absolutely. Bring reference photos and our groomers will do their best to achieve your desired look."}],
    services: [
      { name:"Full Grooming",         price:"₹799",  duration:"90 min", rating:"4.9", img:P.groom, shortDesc:"Complete bath, haircut, nail trim, ear clean, and finishing — the full spa experience.", desc:"Our full grooming session covers everything your pet needs: breed-specific shampoo bath, blow dry, haircut, nail clipping, ear cleaning, and a final fragrance spritz. Walk in, walk out pampered.", includes:["Breed-specific bath","Professional blow dry","Custom haircut","Nail clipping","Ear cleaning","Fragrance & bow"] },
      { name:"Bath & Blow Dry",       price:"₹399",  duration:"45 min", rating:"4.8", img:P.groom, shortDesc:"Thorough medicated or regular bath followed by professional blow dry and brush-out.", desc:"A deep cleanse with premium, pet-safe shampoo followed by a professional blow dry and thorough brush-out to leave your pet's coat clean, tangle-free, and glossy.", includes:["Medicated or regular shampoo","Conditioning treatment","Professional blow dry","Brush-out","Coat check","Basic hygiene check"] },
      { name:"Hair Trimming & Styling",price:"₹499", duration:"60 min", rating:"4.8", img:P.groom, shortDesc:"Expert breed-standard and custom styling by certified groomers.", desc:"Our groomers are trained in breed standards as well as custom cuts. Whether it's a precise Poodle clip or a practical trim, we deliver clean, consistent results.", includes:["Breed-standard or custom cut","Scissor & clipper finishing","Fringe & face trim","Paw & sanitary trim","Final inspection","Style photo"] },
      { name:"Nail Clipping",         price:"₹149",  duration:"15 min", rating:"4.9", img:P.groom, shortDesc:"Safe, stress-free nail trimming with grinding option for perfectly smooth edges.", desc:"Overgrown nails can cause pain and postural issues. Our groomers use sharp, proper-sized clippers with an optional grinder finish to ensure smooth, safe nails.", includes:["All four paws","Quick detection & care","Grinder finish option","Paw massage","Paw pad check","Moisturiser application"] },
      { name:"De-shedding Treatment", price:"₹599",  duration:"60 min", rating:"4.9", img:P.groom, shortDesc:"Professional de-shedding to dramatically reduce loose fur and keep your home cleaner.", desc:"Our de-shedding treatment combines a specialised shampoo, high-velocity blow dry, and deshedding brush to remove up to 90% of loose undercoat — leaving your home fur-free.", includes:["Deshedding shampoo","Conditioning mask","High-velocity dry","Furminator brush","Coat health check","Shedding reduction guarantee"] },
    ]
  },
  "svc-training": {
    cat: "Training & Behavior", icon: "🎓", color: C.orange, heroImg: P.train, tagline: "Well-Trained,\nWell-Loved.",
    about: "Certified, force-free trainers using reward-based science to build obedient, confident, and happy dogs.",
    whyUs: { stats:[["200+","Certified Trainers"],["98%","Success Rate"],["10,000+","Dogs Trained"],["Force-Free","Methods Only"]],points:[{icon:"🎓",title:"CPDT-Certified Trainers",desc:"All trainers hold international certifications and follow force-free, science-backed methods."},{icon:"❤️",title:"No Aversive Tools",desc:"We never use choke chains, prong collars, or shock collars. Positive reinforcement only."},{icon:"📊",title:"Progress Tracking",desc:"Weekly session reports and a training app to practice between sessions."},{icon:"🏠",title:"Home & Group Options",desc:"In-home sessions, group classes, and board & train packages available."}] },
    faqItems: [{q:"What age can I start training my puppy?",a:"Training can begin as early as 8 weeks old. Early socialisation and basic commands at this stage have the most lasting impact."},{q:"Do you use punishment-based methods?",a:"Never. All Pawprint trainers are force-free certified. We use positive reinforcement exclusively."},{q:"How many sessions will my dog need?",a:"This varies by the dog and goal. Basic obedience typically takes 6–8 sessions. Behaviour modification may require 3–6 months."},{q:"Can older dogs be trained?",a:"Absolutely. The saying 'you can't teach an old dog new tricks' is a myth. Dogs of any age respond well to reward-based training."}],
    services: [
      { name:"Puppy Training",        price:"₹1,499/mo", duration:"60 min/session", rating:"4.9", img:P.train, shortDesc:"Foundation skills for puppies 8–16 weeks: sit, stay, come, socialisation, and bite inhibition.", desc:"The first weeks are the most important. Our puppy training programme establishes a positive foundation through socialisation, basic commands, and confidence building — all using reward-based methods.", includes:["Basic commands (sit, stay, come)","Bite inhibition","Socialisation exercises","Leash introduction","Crate training","Parent coaching"] },
      { name:"Obedience Training",    price:"₹1,999/mo", duration:"60 min/session", rating:"4.9", img:P.train, shortDesc:"Comprehensive obedience for dogs of all ages: heel, down, recall, stay, and off-leash control.", desc:"Our obedience curriculum covers all foundational and advanced commands. Dogs graduate with reliable on- and off-leash responses in a variety of environments.", includes:["14 core commands","On & off-leash control","Distraction training","Group & solo sessions","Progress tracking","Certificate on completion"] },
      { name:"Leash Training",        price:"₹999/mo",   duration:"45 min/session", rating:"4.8", img:P.dog3, shortDesc:"Stop pulling, reactive barking, and lunging — walk your dog calmly and confidently.", desc:"Loose-leash walking is one of the most requested skills. Our trainers use positive reinforcement and structured exercises to teach dogs to walk calmly beside their owners.", includes:["Loose-leash fundamentals","Anti-pull techniques","Reactive dog protocols","Equipment guidance","Real-world practice","Owner coaching"] },
      { name:"Behavioral Correction", price:"₹2,499/mo", duration:"75 min/session", rating:"4.8", img:P.train, shortDesc:"Identify and correct unwanted behaviors: jumping, barking, chewing, separation anxiety.", desc:"Our certified behaviourists identify the root cause of problem behaviours and develop a tailored modification plan — no punishment, just science-backed positive techniques.", includes:["Full behaviour assessment","Custom modification plan","Root cause analysis","Weekly sessions","Progress reports","Emergency support line"] },
    ]
  },
  "svc-boarding": {
    cat: "Boarding & Sitting", icon: "🏠", color: "#7C3AED", heroImg: P.boarding, tagline: "Home Away\nFrom Home.",
    about: "Secure, CCTV-monitored, comfortable temporary homes for your pets — supervised 24/7.",
    whyUs: { stats:[["CCTV","24/7"],["Daily","Photo updates"],["Vet","On call 24/7"],["All","Pets insured"]],points:[{icon:"🛡️",title:"100% Insured",desc:"Every pet boarded is fully covered by our veterinary insurance program."},{icon:"📹",title:"Live CCTV Access",desc:"Luxury suites feature direct live video feeds accessible via the Pawprint dashboard."}] },
    faqItems: [{q:"What should I pack for my pet?",a:"We recommend bringing their current food and a familiar smelling blanket/toy. We supply bedding, bowls, and pure drinking water."}],
    services: [
      { name:"Dog Boarding",       price:"₹599/night", duration:"Per night",    rating:"4.9", img:P.boarding, shortDesc:"Safe, supervised overnight boarding in clean, comfortable facilities.", desc:"Our boarding facilities provide a home-away-from-home experience. Each dog gets their own cozy space, regular feeding, exercise w/ other dogs, and 24/7 supervisor care.", includes:["Own private cabin","2 exercise walk sessions/day","Medication support","Daily video/photo reports","Vet checkup on arrival"] },
      { name:"Luxury Boarding",    price:"₹1,499/night", duration:"Per night",   rating:"4.9", img:P.boarding, shortDesc:"Premium AC suites with live webcam access and custom diet plans.", desc:"The ultimate boarding experience. Private climate-controlled suites, personalized nutrition, interactive playtime sessions, and live camera access so you can watch them anytime.", includes:["Private AC suite","Live webcam access","Custom chef-prepared diet","Grooming brush session","Individal playground session"] }
    ]
  },
  "svc-activity": {
    cat: "Activity & Lifestyle", icon: "🏃", color: "#D97706", heroImg: P.dog3, tagline: "Active. Fit.\nHappy.",
    about: "Enriching physical activities, hiking trips, swimming exercises, and walks for high energy dogs.",
    whyUs: { stats:[["GPS","Insured walks"],["Insured","Walkers"],["10K+","Walks completed"],["Safety","First"]],points:[{icon:"📍",title:"GPS Live Tracking",desc:"Follow their walking route in real time on our interactive map."}] },
    faqItems: [{q:"Can I choose the walking route?",a:"Yes, we have pre-approved safe walking paths and you can indicate custom preferences."}],
    services: [
      { name:"Dog Walking",            price:"₹199/walk", duration:"30 mins", rating:"4.9", img:P.dog3, shortDesc:"Professional, GPS-tracked walks for physical and mental enrichment.", desc:"Background-checked walkers take your pet on an active, controlled walk. View live GPS map tracking, pooping updates, and photos.", includes:["GPS live map walk tracking","Poop and pee reports","Water bowl replenishment","Photo updates","Leash check","Feet wipe on return"] }
    ]
  },
  "svc-specialty": {
    cat: "Specialty Services", icon: "⭐", color: "#B45309", heroImg: P.about1, tagline: "Unique Care.\nSpecial Moments.",
    about: "For when normal isn't enough: microchipping, relocation, events, hydrotherapy rehabilitation.",
    whyUs: { stats:[["Specialist","Experts"],["5,000+","Families helped"]],points:[{icon:"⭐",title:"Certified Specialists",desc:"Relocations and surgeries are managed by verified veterinarians and professionals."}] },
    faqItems: [{q:"Is microchipping safe?",a:"Yes, microchipping is a quick, safe, standard injection that lasts a lifetime."}],
    services: [
      { name:"Microchipping",          price:"₹399",  duration:"15 mins", rating:"4.9", img:P.vet1, shortDesc:"Permanent ID implant registered on the national database.", desc:"A painless, standard injection under the shoulder blades. Crucial to reuniting lost pets and standard for international travels.", includes:["ISO Standard Microchip","National database registration","Microchip ID card","Lost Alert setup","Vet verification"] }
    ]
  },
  "svc-retail": {
    cat: "Retail & Extras", icon: "🛍️", color: C.orange, heroImg: P.shop1, tagline: "Vet-Curated.\nNext-Day Delivered.",
    about: "Premium pet foods, interactive puzzle toys, supplements, and designer collars reviewed by our veterinary panel.",
    whyUs: { stats:[["1,000+","Reviewed items"],["Fast","Next-day delivery"]],points:[{icon:"🛍️",title:"100% Vetted",desc:"We only stock products free of harmful chemicals and low-quality fillers."}] },
    faqItems: [{q:"Do you offer free delivery?",a:"Yes, all orders above ₹499 qualify for free next-day delivery."}],
    services: [
      { name:"Dog Food Selection",     price:"from ₹499", duration:"Next-day", rating:"4.9", img:P.shop1, shortDesc:"Premium kibble and wet food selections for healthy digestion.", desc:"Top brands like Royal Canin, Hill's Science Diet, and organic fresh foods curated by our vets.", includes:["Vet-approved brands","Allergy-free formulas","Next-day home delivery","Dietary guide card"] }
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

      <!-- FAQ list accordion -->
      <section style="padding: 80px 0; background: var(--color-cream);">
        <div style="max-width: 800px; margin: 0 auto; padding: 0 32px;">
          <h2 class="melody" style="font-size: clamp(32px,4vw,50px); color: var(--color-ink); margin-bottom: 40px; line-height: 1;">Frequently Asked<br>Questions</h2>
          <div style="display: flex; flex-direction: column; gap: 4px;">
            ${data.faqItems.map((f, i) => `
              <div style="background: var(--color-white); border-radius: 16px; border: 1px solid var(--color-border); overflow: hidden;">
                <button onclick="toggleServiceCatFaq(${i})" style="width: 100%; display: flex; justify-content: space-between; align-items: center; padding: 18px 24px; background: none; border: none; cursor: pointer; text-align: left;">
                  <span style="font-size: 15px; font-weight: 600; color: var(--color-ink); padding-right: 20px; line-height: 1.4;">${f.q}</span>
                  <div id="svcfaq-indicator-${i}" style="width: 26px; height: 26px; border-radius: 50%; background: var(--color-cream-dk); display: flex; align-items: center; justify-content: center; flex-shrink: 0; transition: background .2s;">
                    <span id="svcfaq-plus-${i}" style="color: var(--color-ink-sft); font-size: 16px; display: block; transition: transform .25s;">+</span>
                  </div>
                </button>
                <div id="svcfaq-body-${i}" style="display: none; padding: 0 24px 18px;">
                  <p style="font-size: 14px; color: var(--color-ink-sft); line-height: 1.8; border-top: 1px solid var(--color-border); padding-top: 14px;">${f.a}</p>
                </div>
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

function toggleServiceCatFaq(idx) {
  const body = document.getElementById('svcfaq-body-' + idx);
  const ind = document.getElementById('svcfaq-indicator-' + idx);
  const plus = document.getElementById('svcfaq-plus-' + idx);
  const color = servicePagesData[activeSvcCatPageId].color;

  if (body.style.display === 'block') {
    body.style.display = 'none';
    ind.style.background = 'var(--color-cream-dk)';
    plus.style.color = 'var(--color-ink-sft)';
    plus.style.transform = 'rotate(0deg)';
  } else {
    body.style.display = 'block';
    ind.style.background = color;
    plus.style.color = '#fff';
    plus.style.transform = 'rotate(45deg)';
  }
}

function renderSubPageBookingForm(svcName) {
  const box = document.getElementById('subpage-booking-form-box');
  if (!box) return;

  box.innerHTML = `
    <div style="background: var(--color-white); border-radius: 20px; border: 1px solid var(--color-border); padding: 32px;" id="booking-form-wrapper">
      <div class="melody" style="font-size: 26px; color: var(--color-ink); margin-bottom: 6px;">Book ${svcName}</div>
      <p style="font-size: 14px; color: var(--color-ink-sft); margin-bottom: 24px;">Fill in your details and we'll confirm within 2 hours.</p>
      
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 14px;">
        <div class="field"><label>Your Full Name</label><input id="bk-name" placeholder="Priya Sharma"></div>
        <div class="field"><label>Phone Number</label><input id="bk-phone" type="tel" placeholder="+91 98765 43210"></div>
        <div class="field"><label>Email Address</label><input id="bk-email" type="email" placeholder="priya@email.com"></div>
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
  const spec = document.getElementById('adopt-filter-species').value;
  const size = document.getElementById('adopt-filter-size').value;
  const gend = document.getElementById('adopt-filter-gender').value;

  const filtered = ALL_PETS.filter(p => {
    return (spec === 'All' || p.species === spec) &&
           (size === 'All' || p.size === size) &&
           (gend === 'All' || p.gender === gend);
  });

  document.getElementById('adopt-count').textContent = `${filtered.length} pets found`;

  const grid = document.getElementById('adopt-grid');
  grid.innerHTML = filtered.map(p => {
    const isFav = adoptFavorites.includes(p.id);
    return `
      <div class="card card-lift" style="cursor: pointer;" onclick="viewAdoptDetail(${p.id})">
        <div style="position: relative; height: 260px;">
          <img src="${p.img}" style="width: 100%; height: 100%; object-fit: cover;" alt="${p.name}">
          <div style="position: absolute; inset: 0; background: linear-gradient(to top, rgba(0,0,0,.55) 0%, transparent 50%);"></div>
          <button onclick="event.stopPropagation(); toggleAdoptFavoriteInline(${p.id})"
            style="position: absolute; top: 14px; right: 14px; width: 36px; height: 36px; border-radius: 50%; background: rgba(255, 255, 255, .9); border: none; font-size: 16px; cursor: pointer; display: flex; align-items: center; justify-content: center;">
            ${isFav ? '❤️' : '🤍'}
          </button>
          ${p.vacc ? '<div style="position: absolute; top: 14px; left: 14px; background: var(--color-green); color: #fff; font-size: 9px; font-weight: 700; padding: 3px 9px; border-radius: 100px; text-transform: uppercase; letter-spacing: .05em;">Vaccinated</div>' : ''}
          <div style="position: absolute; bottom: 16px; left: 18px;">
            <div class="melody" style="color: #fff; font-size: 22px; font-weight: 700; line-height: 1;">${p.name}</div>
            <div style="color: rgba(255,255,255,.75); font-size: 12px; margin-top: 3px;">${p.breed} · ${p.loc}</div>
          </div>
        </div>
        <div style="padding: 16px 18px; display: flex; justify-content: space-between; align-items: center;">
          <div style="display: flex; gap: 6px;">
            <span style="background: var(--color-cream-dk); border-radius: 100px; padding: 4px 10px; font-size: 11px; color: var(--color-ink-sft); font-weight: 600;">${p.age}</span>
            <span style="background: var(--color-cream-dk); border-radius: 100px; padding: 4px 10px; font-size: 11px; color: var(--color-ink-sft); font-weight: 600;">${p.gender}</span>
          </div>
          <button class="btn btn-sm btn-primary" onclick="event.stopPropagation(); viewAdoptDetail(${p.id})">Adopt →</button>
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
function renderShopCategories() {
  const tabs = document.getElementById('shop-categories-tabs');
  if (!tabs) return;

  const cats = ["All","Food","Toys","Accessories","Medicines","Grooming","Tech"];
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

  grid.innerHTML = shown.map(p => `
    <div class="card card-lift">
      <div style="position: relative; height: 240px; overflow: hidden;">
        <img src="${p.img}" style="width: 100%; height: 100%; object-fit: cover;" alt="${p.name}">
        ${p.badge ? `<div style="position: absolute; top: 14px; left: 14px; background: ${p.bc}; color: #fff; font-size: 9px; font-weight: 700; padding: 3px 10px; border-radius: 100px; text-transform: uppercase; letter-spacing: .05em;">${p.badge}</div>` : ''}
        <button onclick="event.stopPropagation(); toggleWishlistInline(${p.id})"
          style="position: absolute; top: 14px; right: 14px; width: 36px; height: 36px; border-radius: 50%; background: rgba(255, 255, 255, .9); border: none; font-size: 16px; cursor: pointer; display: flex; align-items: center; justify-content: center;">
          🤍
        </button>
      </div>
      <div style="padding: 20px 22px;">
        <span style="font-size: 10px; font-weight: 700; letter-spacing: .07em; text-transform: uppercase; color: var(--color-ink-sft);">${p.cat}</span>
        <h3 style="font-size: 16px; font-weight: 700; color: var(--color-ink); margin: 6px 0 8px; line-height: 1.3;">${p.name}</h3>
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 14px;">
          <div style="display: flex; gap: 8px; align-items: baseline;">
            <span class="melody" style="font-size: 20px; font-weight: 700; color: var(--color-ink);">₹${p.price.toLocaleString()}</span>
            <span style="font-size: 13px; color: var(--color-sand); text-decoration: line-through;">₹${p.old.toLocaleString()}</span>
          </div>
          <span style="font-size: 12px; color: var(--color-orange); font-weight: 600;">⭐ ${p.rating}</span>
        </div>
        <button class="btn btn-md btn-primary" style="width: 100%;" onclick="addToCart(${p.id})">Add to Cart →</button>
      </div>
    </div>
  `).join('');
}

function toggleWishlistInline(id) {
  alert("Added to wishlist!");
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
  
  btnBrowse.style.background = tabId === 'browse' ? 'var(--color-orange)' : 'transparent';
  btnBrowse.style.color = tabId === 'browse' ? '#fff' : 'var(--color-ink-sft)';
  btnBrowse.style.fontWeight = tabId === 'browse' ? '600' : '400';

  btnReport.style.background = tabId === 'report' ? 'var(--color-orange)' : 'transparent';
  btnReport.style.color = tabId === 'report' ? '#fff' : 'var(--color-ink-sft)';
  btnReport.style.fontWeight = tabId === 'report' ? '600' : '400';

  document.getElementById('lost-view-browse').style.display = tabId === 'browse' ? 'block' : 'none';
  document.getElementById('lost-view-report').style.display = tabId === 'report' ? 'block' : 'none';

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

  btnLost.style.background = mode === 'lost' ? 'var(--color-red)' : 'transparent';
  btnLost.style.color = mode === 'lost' ? '#fff' : 'var(--color-ink-sft)';
  btnLost.style.fontWeight = mode === 'lost' ? '700' : '500';

  btnFound.style.background = mode === 'found' ? 'var(--color-green)' : 'transparent';
  btnFound.style.color = mode === 'found' ? '#fff' : 'var(--color-ink-sft)';
  btnFound.style.fontWeight = mode === 'found' ? '700' : '500';

  // Banner details styling updates
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

  if (mode === 'lost') {
    banner.style.background = 'var(--color-red-lt)';
    banner.style.borderColor = 'rgba(192, 57, 43, 0.2)';
    bannerText.textContent = '🚨 Act fast — most pets are found within the first 24 hours. Fill in as much detail as possible.';
    bannerText.style.color = 'var(--color-red)';
    submitBtn.style.background = 'var(--color-red)';
    submitBtn.style.boxShadow = '0 4px 18px rgba(192, 57, 43, 0.27)';
    submitBtn.textContent = '🚨 Submit Lost Pet Report';
    rewardField.style.display = 'flex';
    currentlyWith.style.display = 'none';
    currentlyWithSel.style.display = 'none';
    petNameLabel.textContent = "Pet's Name *";
    dateLabel.textContent = "Date Last Seen *";
    timeLabel.textContent = "Approximate Time *";
    addressLabel.textContent = "Street / Address Last Seen *";
    sectionPetTitle.innerHTML = "<span>🐾</span> Pet Details";
    sectionLocTitle.innerHTML = "<span>📍</span> Last Seen Location";
  } else {
    banner.style.background = 'var(--color-green-lt)';
    banner.style.borderColor = 'rgba(30, 107, 69, 0.2)';
    bannerText.textContent = "🙏 Thank you for helping! Fill in as much as you can — even partial info helps match with lost reports.";
    bannerText.style.color = 'var(--color-green)';
    submitBtn.style.background = 'var(--color-green)';
    submitBtn.style.boxShadow = '0 4px 18px rgba(30, 107, 69, 0.27)';
    submitBtn.textContent = '🐾 Submit Found Pet Report';
    rewardField.style.display = 'none';
    currentlyWith.style.display = 'block';
    currentlyWithSel.style.display = 'block';
    petNameLabel.textContent = "Pet's Name (best guess)";
    dateLabel.textContent = "Date Found *";
    timeLabel.textContent = "Approximate Time";
    addressLabel.textContent = "Street / Address Found *";
    sectionPetTitle.innerHTML = "<span>🐾</span> Found Pet Details";
    sectionLocTitle.innerHTML = "<span>📍</span> Where was the Pet Found?";
  }
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
    type: lostMode,
    name: lostMode === 'lost' ? name : 'Spotted Pet',
    species: spec,
    breed: document.getElementById('lost-field-breed').value.trim() || 'Mix',
    color: color,
    area: document.getElementById('lost-field-area').value.trim() || city,
    date: date,
    contact: oPhone,
    reward: lostMode === 'lost' ? (document.getElementById('lost-field-reward').value.trim() || 'N/A') : 'N/A',
    img: lostPhotos[0] || (spec === 'Dog' ? P.dog4 : P.cat2)
  };

  lostListings.unshift(newListing);

  document.getElementById('lost-form-inputs').style.display = 'none';
  document.getElementById('lost-form-success').style.display = 'block';
}

function resetLostForm() {
  document.getElementById('lost-form-inputs').style.display = 'flex';
  document.getElementById('lost-form-success').style.display = 'none';

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

function renderLostListings() {
  const grid = document.getElementById('lost-listings-grid');
  if (!grid) return;

  grid.innerHTML = lostListings.map(l => `
    <div class="card card-lift" style="border-top: 4px solid ${l.type === 'lost' ? 'var(--color-red)' : 'var(--color-green)'};">
      <div style="display: grid; grid-template-columns: 120px 1fr; align-items: stretch; height: 100%;">
        <div style="height: 100%;"><img src="${l.img}" style="width: 100%; height: 100%; object-fit: cover;" alt="${l.name}"></div>
        <div style="padding: 20px 22px;">
          <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 10px;">
            <div>
              <div class="pill ${l.type === 'lost' ? 'pill-red' : 'pill-green'}" style="margin-bottom: 6px;">${l.type === 'lost' ? '🔴 LOST' : '🟢 FOUND'}</div>
              <div class="melody" style="font-size: 18px; font-weight: 700; color: var(--color-ink);">${l.name}</div>
            </div>
          </div>
          <div style="font-size: 13px; color: var(--color-ink-sft); line-height: 1.6;">
            <div>${l.species} · ${l.breed} · ${l.color}</div>
            <div style="margin-top: 4px;">📍 ${l.area}</div>
            <div style="margin-top: 2px;">📅 ${l.date}</div>
            ${l.reward !== 'N/A' ? `<div style="margin-top: 4px; color: var(--color-orange); font-weight: 600;">🏆 Reward: ${l.reward}</div>` : ''}
          </div>
          <button class="btn btn-sm btn-outline" style="margin-top: 12px;" onclick="alert('Contact details: ${l.contact}')">📞 Contact</button>
        </div>
      </div>
    </div>
  `).join('');
}

function filterLostListings(typeFilter) {
  let shown = lostListings;
  if (typeFilter !== 'All') {
    shown = lostListings.filter(l => l.type === typeFilter);
  }
  const grid = document.getElementById('lost-listings-grid');
  if (grid) {
    grid.innerHTML = shown.map(l => `
      <div class="card card-lift" style="border-top: 4px solid ${l.type === 'lost' ? 'var(--color-red)' : 'var(--color-green)'};">
        <div style="display: grid; grid-template-columns: 120px 1fr; align-items: stretch; height: 100%;">
          <div style="height: 100%;"><img src="${l.img}" style="width: 100%; height: 100%; object-fit: cover;" alt="${l.name}"></div>
          <div style="padding: 20px 22px;">
            <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 10px;">
              <div>
                <div class="pill ${l.type === 'lost' ? 'pill-red' : 'pill-green'}" style="margin-bottom: 6px;">${l.type === 'lost' ? '🔴 LOST' : '🟢 FOUND'}</div>
                <div class="melody" style="font-size: 18px; font-weight: 700; color: var(--color-ink);">${l.name}</div>
              </div>
            </div>
            <div style="font-size: 13px; color: var(--color-ink-sft); line-height: 1.6;">
              <div>${l.species} · ${l.breed} · ${l.color}</div>
              <div style="margin-top: 4px;">📍 ${l.area}</div>
              <div style="margin-top: 2px;">📅 ${l.date}</div>
              ${l.reward !== 'N/A' ? `<div style="margin-top: 4px; color: var(--color-orange); font-weight: 600;">🏆 Reward: ${l.reward}</div>` : ''}
            </div>
            <button class="btn btn-sm btn-outline" style="margin-top: 12px;" onclick="alert('Contact details: ${l.contact}')">📞 Contact</button>
          </div>
        </div>
      </div>
    `).join('');
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
    grid.innerHTML = matched.map(l => `
      <div class="card card-lift" style="border-top: 4px solid ${l.type === 'lost' ? 'var(--color-red)' : 'var(--color-green)'};">
        <div style="display: grid; grid-template-columns: 120px 1fr; align-items: stretch; height: 100%;">
          <div style="height: 100%;"><img src="${l.img}" style="width: 100%; height: 100%; object-fit: cover;" alt="${l.name}"></div>
          <div style="padding: 20px 22px;">
            <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 10px;">
              <div>
                <div class="pill ${l.type === 'lost' ? 'pill-red' : 'pill-green'}" style="margin-bottom: 6px;">${l.type === 'lost' ? '🔴 LOST' : '🟢 FOUND'}</div>
                <div class="melody" style="font-size: 18px; font-weight: 700; color: var(--color-ink);">${l.name}</div>
              </div>
            </div>
            <div style="font-size: 13px; color: var(--color-ink-sft); line-height: 1.6;">
              <div>${l.species} · ${l.breed} · ${l.color}</div>
              <div style="margin-top: 4px;">📍 ${l.area}</div>
              <div style="margin-top: 2px;">📅 ${l.date}</div>
              ${l.reward !== 'N/A' ? `<div style="margin-top: 4px; color: var(--color-orange); font-weight: 600;">🏆 Reward: ${l.reward}</div>` : ''}
            </div>
            <button class="btn btn-sm btn-outline" style="margin-top: 12px;" onclick="alert('Contact details: ${l.contact}')">📞 Contact</button>
          </div>
        </div>
      </div>
    `).join('');
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
      <div style="padding: 20px 24px;">
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
        <div style="display: flex; gap: 10px;">
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
        style="width: ${l==='All'?'44px':'34px'}; height: 34px; border-radius: 8px; border: 1.5px solid ${isSelected ? 'var(--color-orange)' : 'var(--color-border)'};
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
      header.style.background = 'linear-gradient(135deg, #FF6B35, #FF8C55)';
      header.innerHTML = `
        <div style="display: flex; gap: 24px; align-items: center; color: #fff;">
          <div style="font-size: 52px;">🇮🇳</div>
          <div>
            <h2 class="melody" style="font-size: 32px; line-height: 1; margin-bottom: 6px;">Indian Dog Breeds</h2>
            <p style="font-size: 15px; color: rgba(255,255,255,.8); line-height: 1.7;">Ancient, hardy, and perfectly adapted to the Indian subcontinent — these indigenous breeds are intelligent, low-maintenance, and deeply loyal. Many are endangered today and deserve your love.</p>
          </div>
        </div>
      `;
    } else if (activeBreedType === 'popular') {
      header.style.background = 'linear-gradient(135deg, var(--color-orange), #C94E12)';
      header.innerHTML = `
        <h2 class="melody" style="font-size: 28px; color: #fff; margin-bottom: 6px;">⭐ Most Popular Breeds</h2>
        <p style="color: rgba(255,255,255,.8); font-size: 15px;">The world's most beloved and widely recognized dog breeds — chosen for temperament, adaptability, and all-round family compatibility.</p>
      `;
    } else if (activeBreedType === 'guard') {
      header.style.background = 'linear-gradient(135deg, var(--color-red), #A02020)';
      header.innerHTML = `
        <h2 class="melody" style="font-size: 28px; color: #fff; margin-bottom: 6px;">🛡 Guard Dog Breeds</h2>
        <p style="color: rgba(255,255,255,.8); font-size: 15px;">Naturally protective, loyal, and alert — these breeds are ideal for home protection when paired with proper training and socialisation.</p>
      `;
    } else if (activeBreedType === 'family') {
      header.style.background = 'linear-gradient(135deg, var(--color-green), #155C38)';
      header.innerHTML = `
        <h2 class="melody" style="font-size: 28px; color: #fff; margin-bottom: 6px;">🏡 Friendly Family Dog Breeds</h2>
        <p style="color: rgba(255,255,255,.8); font-size: 15px;">Gentle, patient, and great with children — these breeds thrive in family environments and are perfect companions for all ages.</p>
      `;
    }
  } else {
    header.style.display = 'none';
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
          
          <div style="position: absolute; top: 10px; left: 10px; display: flex; gap: 5px; flex-wrap: wrap;">
            ${b.type.includes("indian") ? '<span style="background: #FF6B35; color: #fff; font-size: 9px; font-weight: 700; padding: 2px 8px; border-radius: 100px;">🇮🇳 Indian</span>' : ''}
            ${b.type.includes("popular") ? '<span style="background: var(--color-orange); color: #fff; font-size: 9px; font-weight: 700; padding: 2px 8px; border-radius: 100px;">⭐ Popular</span>' : ''}
            ${b.type.includes("guard") ? '<span style="background: var(--color-red); color: #fff; font-size: 9px; font-weight: 700; padding: 2px 8px; border-radius: 100px;">🛡 Guard</span>' : ''}
            ${b.type.includes("family") ? '<span style="background: var(--color-green); color: #fff; font-size: 9px; font-weight: 700; padding: 2px 8px; border-radius: 100px;">🏡 Family</span>' : ''}
          </div>

          <div style="position: absolute; top: 10px; right: 10px; background: rgba(0,0,0,.6); border-radius: 100px; padding: 3px 9px;">
            <span style="color: #fff; font-size: 10px; font-weight: 600;">${b.size}</span>
          </div>

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

  container.innerHTML = `
    <div style="display: grid; grid-template-columns: 280px 1fr; gap: 32px; padding: 40px;">
      <div>
        <div style="border-radius: 20px; overflow: hidden; height: 320px; box-shadow: 0 16px 40px rgba(0,0,0,.15); margin-bottom: 20px;">
          <img src="${b.img}" style="width: 100%; height: 100%; object-fit: cover;" alt="${b.name}">
        </div>
        <div style="background: var(--color-cream); border-radius: 14px; padding: 18px; border: 1px solid var(--color-border);">
          <div style="font-size: 11px; font-weight: 700; letter-spacing: .06em; text-transform: uppercase; color: var(--color-ink-sft); margin-bottom: 8px;">Key Specs</div>
          <div style="font-size: 13px; color: var(--color-ink-sft); display: flex; flex-direction: column; gap: 8px;">
            <div>🌎 Origin: <strong>${b.origin}</strong></div>
            <div>⏳ Lifespan: <strong>${b.lifespan}</strong></div>
            <div>⚖️ Weight: <strong>${b.weight}</strong></div>
            <div>📏 Size: <strong>${b.size}</strong></div>
          </div>
        </div>
      </div>
      <div>
        <h2 class="melody" style="font-size: 44px; color: var(--color-ink); margin-bottom: 12px;">${b.name}</h2>
        <div style="display: flex; gap: 8px; flex-wrap: wrap; margin-bottom: 20px;">
          ${b.type.map(t => `<span class="pill pill-orange">${t}</span>`).join('')}
        </div>
        <p style="font-size: 15px; color: var(--color-ink-sft); line-height: 1.8; margin-bottom: 24px;">
          <strong>Temperament:</strong> ${b.temperament}. This breed is known for its adaptations, distinct physical structures, and companion behaviors. Detailed care guides are accessible inside the Pawprint Mobile app.
        </p>
        <div style="display: flex; gap: 12px; margin-top: 32px;">
          <button class="btn btn-md btn-primary" onclick="closeBreedModal(); nav('adopt');">Adopt this Breed →</button>
          <button class="btn btn-md btn-outline" onclick="closeBreedModal(); nav('vet');">Consult a Vet</button>
        </div>
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
function proceedToVerify() {
  const name = document.getElementById('signup-name').value.trim();
  const email = document.getElementById('signup-email').value.trim();
  const pass = document.getElementById('signup-password').value.trim();

  if (!name || !email || !pass) {
    alert("Please fill in Name, Email, and Password.");
    return;
  }

  document.getElementById('signup-step-1').style.display = 'none';
  document.getElementById('signup-step-2').style.display = 'block';
}

function handleAuthSubmit(type) {
  if (type === 'login') {
    const email = document.getElementById('login-email').value.trim();
    if (!email) {
      alert("Please fill in your email address.");
      return;
    }
    alert("Welcome back! 🐾");
  } else {
    alert("Account created successfully! 🎉");
  }
  nav('home');
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

  initPage(pageId);
});
