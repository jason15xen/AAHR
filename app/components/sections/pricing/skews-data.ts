import type { Skew } from "./types";

export const skews: Skew[] = [
  {
    title: "Residential",
    description: "Your home, elevated.",
    longDescription:
      "ADAM for the home — thoughtful, attentive, and engineered for daily domestic life. Perfect for families, elderly care, and personal assistance.",
    variant: "residential",
    tiers: [
      {
        name: "Companion Base",
        price: "$15,000",
        badge: "Entry",
        features: [
          "Basic household tasks",
          "Voice command interface",
          "12-hour battery life",
          "40 lb payload",
          "Standard COGITRON™-1",
          "1-year warranty",
        ],
      },
      {
        name: "Companion Plus",
        price: "$22,000",
        badge: "Popular",
        features: [
          "Everything in Base",
          "Emotional expression module",
          "Cooking & meal prep",
          "60 lb payload",
          "COGITRON™-2 upgrade",
          "Eldercare protocols",
          "2-year warranty",
        ],
      },
      {
        name: "Companion Elite",
        price: "$35,000",
        badge: "Elite",
        features: [
          "Everything in Plus",
          "Custom skin material",
          "Child-safe motor mode",
          "Eldercare protocol",
          "1M+ parameter LLM",
          "Advanced facial recognition",
          "3-year warranty",
          "White-glove setup",
        ],
      },
    ],
  },
  {
    title: "Commercial",
    description: "Productivity, personified.",
    longDescription:
      "ADAM optimised for offices, retail, hospitality, and healthcare. The Commercial skew drives operational efficiency and customer delight at scale.",
    variant: "commercial",
    tiers: [
      {
        name: "Pro Standard",
        price: "$75,000",
        badge: "Entry",
        features: [
          "Front-of-house assistance",
          "Inventory management",
          "Multi-language support",
          "150 lb payload",
          "COGITRON™-2",
          "Remote management console",
          "2-year warranty",
        ],
      },
      {
        name: "Pro Advanced",
        price: "$120,000",
        badge: "Popular",
        features: [
          "Everything in Standard",
          "CRM & POS integration",
          "200 lb payload",
          "COGITRON™-3",
          "Biometric recognition",
          "Priority support SLA",
          "3-year warranty",
        ],
      },
      {
        name: "Pro Enterprise",
        price: "$200,000",
        badge: "Elite",
        features: [
          "Everything in Advanced",
          "Fleet management (≤10 units)",
          "On-call concierge",
          "API access",
          "Dedicated support",
          "3-year warranty",
          "On-site onboarding",
        ],
      },
    ],
  },
  {
    title: "Industrial",
    description: "Strength without sacrifice.",
    longDescription:
      "ADAM built for factories, warehouses, logistics, and hazardous environments. The Industrial skew delivers maximum power, precision, and endurance.",
    variant: "industrial",
    tiers: [
      {
        name: "Iron Core",
        price: "$350,000",
        badge: "Entry",
        features: [
          "Warehouse & logistics ops",
          "300 lb payload",
          "IP65 ingress protection",
          "COGITRON™-2",
          "Hazard detection suite",
          "16-hour shift operation",
          "2-year warranty",
        ],
      },
      {
        name: "Iron Advanced",
        price: "$500,000",
        badge: "Popular",
        features: [
          "Everything in Core",
          "440 lb payload",
          "IP67 full immersion-proof",
          "COGITRON™-3",
          "Autonomous navigation",
          "Multi-robot coordination",
          "18-hour operation",
          "3-year warranty",
        ],
      },
      {
        name: "Iron Sovereign",
        price: "$750,000",
        badge: "Elite",
        features: [
          "Everything in Advanced",
          "Hazardous materials cert",
          "Extreme temperature rated",
          "Custom armor materials",
          "Multi-frame networks",
          "Custom-build manufacturing",
          "5-year warranty",
          "Military-grade chassis option",
        ],
      },
    ],
  },
];
