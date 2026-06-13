const fs = require('fs');

const rawData = `Dog Breed	Weight (kg)	Origin	Life Span	Breed Type
Labrador Retriever	25–36	Canada	10–12 yrs	Family, Sporting
Golden Retriever	25–34	Scotland	10–12 yrs	Family, Sporting
German Shepherd	22–40	Germany	9–13 yrs	Guard, Working
Beagle	9–14	England	12–15 yrs	Family, Hound
Poodle	20–32	Germany/France	10–18 yrs	Companion, Sporting
Rottweiler	35–60	Germany	8–10 yrs	Guard, Working
Bulldog	18–25	England	8–10 yrs	Companion
Dachshund	7–15	Germany	12–16 yrs	Family, Hound
Siberian Husky	16–27	Siberia, Russia	12–15 yrs	Working, Sled
Boxer	25–36	Germany	10–12 yrs	Guard, Family
Great Dane	45–90	Germany	7–10 yrs	Guard, Giant
Doberman Pinscher	30–45	Germany	10–13 yrs	Guard, Working
Shih Tzu	4–7	China	10–18 yrs	Companion
Chihuahua	1.5–3	Mexico	14–17 yrs	Companion
Pug	6–8	China	12–15 yrs	Companion
Border Collie	14–20	Scotland	12–15 yrs	Herding
Australian Shepherd	18–30	USA	12–15 yrs	Herding
Cocker Spaniel	11–15	England	10–14 yrs	Family, Sporting
Pomeranian	1.8–3.5	Germany/Poland	12–16 yrs	Companion
Maltese	3–4	Malta	12–15 yrs	Companion
Yorkshire Terrier	2–3.5	England	11–15 yrs	Companion
French Bulldog	8–14	France	10–12 yrs	Companion
Bernese Mountain Dog	35–55	Switzerland	7–10 yrs	Working, Family
Saint Bernard	54–82	Switzerland	8–10 yrs	Rescue, Working
Akita	30–59	Japan	10–14 yrs	Guard, Working
Alaskan Malamute	34–43	Alaska, USA	10–14 yrs	Sled, Working
Basset Hound	20–29	France	10–12 yrs	Hound
Bloodhound	36–50	Belgium	10–12 yrs	Tracking, Hound
Cane Corso	40–50	Italy	9–12 yrs	Guard
Chow Chow	20–32	China	8–12 yrs	Guard, Companion
Dalmatian	20–32	Croatia	11–13 yrs	Family, Sporting
English Springer Spaniel	18–25	England	12–14 yrs	Sporting
German Shorthaired Pointer	20–32	Germany	12–14 yrs	Sporting
Greyhound	27–40	England	10–14 yrs	Sighthound
Jack Russell Terrier	6–8	England	13–16 yrs	Terrier
Newfoundland	45–68	Canada	8–10 yrs	Rescue, Working
Samoyed	20–30	Russia	12–14 yrs	Family, Working
Shetland Sheepdog	6–12	Scotland	12–14 yrs	Herding
Weimaraner	25–41	Germany	10–13 yrs	Sporting
Whippet	11–18	England	12–15 yrs	Sighthound
American Pit Bull Terrier	14–30	USA	12–16 yrs	Working, Companion
Bullmastiff	45–59	England	7–10 yrs	Guard
Belgian Malinois	20–34	Belgium	12–14 yrs	Guard, Working
Australian Cattle Dog	15–22	Australia	12–16 yrs	Herding
Boston Terrier	5–11	USA	11–13 yrs	Companion
Cairn Terrier	6–8	Scotland	13–15 yrs	Terrier
Chinese Crested	3–6	China	13–18 yrs	Companion
English Mastiff	54–104	England	6–10 yrs	Guard, Giant
Havanese	3–6	Cuba	14–16 yrs	Companion
Irish Setter	25–34	Ireland	12–15 yrs	Sporting
Italian Greyhound	3–6	Italy	14–15 yrs	Companion
Keeshond	14–18	Netherlands	12–15 yrs	Companion
Lhasa Apso	5–8	Tibet	12–15 yrs	Companion
Miniature Schnauzer	5–9	Germany	12–15 yrs	Companion, Terrier
Papillon	2.5–5	France	13–16 yrs	Companion
Pembroke Welsh Corgi	10–14	Wales	12–15 yrs	Herding
Rhodesian Ridgeback	30–39	Zimbabwe	10–12 yrs	Hound, Guard
Shiba Inu	8–11	Japan	13–16 yrs	Companion
Staffordshire Bull Terrier	11–17	England	12–14 yrs	Family, Terrier
Vizsla	20–30	Hungary	12–15 yrs	Sporting
West Highland White Terrier	6–10	Scotland	12–16 yrs	Terrier
Afghan Hound	23–34	Afghanistan	12–14 yrs	Sighthound
American Eskimo Dog	8–16	Germany/USA	12–15 yrs	Companion
Basenji	9–11	Central Africa	12–16 yrs	Hound
Bichon Frise	5–8	France	14–15 yrs	Companion
Boerboel	50–90	South Africa	9–11 yrs	Guard
Briard	25–41	France	10–12 yrs	Herding
Collie	18–34	Scotland	12–14 yrs	Family, Herding
Flat-Coated Retriever	25–36	England	8–10 yrs	Sporting
Giant Schnauzer	25–48	Germany	10–12 yrs	Guard, Working`;

// Existing images from pawprint-website.jsx
const existingBreeds = [
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

// Popular breeds mapping (helper check)
const popularList = [
  "Labrador Retriever", "Golden Retriever", "German Shepherd", "Beagle", "Poodle",
  "Rottweiler", "Bulldog", "Dachshund", "Siberian Husky", "Boxer", "Great Dane",
  "Doberman Pinscher", "Shih Tzu", "Chihuahua", "Pug", "Border Collie",
  "Australian Shepherd", "Cocker Spaniel", "Pomeranian", "Maltese", "Yorkshire Terrier",
  "French Bulldog", "Bernese Mountain Dog", "Saint Bernard", "Akita", "Alaskan Malamute",
  "Basset Hound", "Bloodhound", "Cane Corso", "Chow Chow", "Dalmatian", "Greyhound",
  "Jack Russell Terrier", "Newfoundland", "Samoyed", "Weimaraner", "Pembroke Welsh Corgi",
  "Shiba Inu", "Afghan Hound", "Bichon Frise", "Collie"
];

// parse the tab-separated lines
const lines = rawData.split('\n').slice(1);
const parsed = [];

for (const line of lines) {
  if (!line.trim()) continue;
  const parts = line.split('\t');
  if (parts.length < 5) continue;
  const [name, weight, origin, lifespan, rawTypes] = parts.map(p => p.trim());

  // Determine size
  let size = 'Medium';
  const weightMax = parseInt(weight.split('–')[1] || weight.split('-')[1] || weight);
  if (weightMax <= 10) size = 'Small';
  else if (weightMax > 25) size = 'Large';

  // Determine type categories
  const types = rawTypes.split(', ').map(t => t.toLowerCase());
  const typeArr = [];
  if (types.includes('family')) typeArr.push('family');
  if (types.includes('guard')) typeArr.push('guard');
  if (popularList.includes(name)) typeArr.push('popular');
  // keep other custom raw type labels too
  for (const t of types) {
    if (t !== 'family' && t !== 'guard' && t !== 'popular') {
      typeArr.push(t);
    }
  }

  // Find existing temperament and img if possible
  const exist = existingBreeds.find(b => b.name.toLowerCase() === name.toLowerCase());
  const temperament = exist ? exist.temperament : 'Affectionate, active, adaptable';
  const img = exist ? exist.img : 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=400&q=75&fit=crop';

  parsed.push({
    name,
    origin,
    size,
    type: typeArr,
    temperament,
    lifespan,
    weight: weight + ' kg',
    img
  });
}

// Add the Indian breeds back!
const indianBreeds = existingBreeds.filter(b => b.type.includes('indian'));
parsed.push(...indianBreeds);

// Format as JS code
const output = JSON.stringify(parsed, null, 2);
fs.writeFileSync('c:\\Users\\HP\\OneDrive\\Documents\\GitHub\\Pawprint\\scratch\\output_breeds.json', output);
console.log("Parsed " + parsed.length + " breeds successfully.");
