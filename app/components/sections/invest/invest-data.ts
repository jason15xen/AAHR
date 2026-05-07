import type { InvestmentTier, CryptoOption } from "./types";

export const investmentTiers: InvestmentTier[] = [
  {
    name: "Associate",
    price: "$25,000",
    variant: "cream",
    perks: [
      "Quarterly investor reports",
      "Annual shareholder meeting",
      "Digital certificate",
      "Limited-edition merch",
    ],
  },
  {
    name: "Principal",
    price: "$100,000",
    variant: "red",
    badge: "Most Popular",
    perks: [
      "All Associate benefits",
      "Bi-annual factory tours",
      "Co-branding opportunities",
      "Prototype demo invitation",
      "Direct development line",
    ],
  },
  {
    name: "Patron",
    price: "$500,000",
    variant: "gold",
    perks: [
      "All Principal benefits",
      "Board observer seat",
      "Co-branding opportunities",
      "Prototype design demos",
      "Dedicated investor manager",
    ],
  },
];

export const cryptoOptions: CryptoOption[] = [
  {
    name: "Bitcoin",
    symbol: "BTC",
    color: "#F7931A",
    glyph: "₿",
    address: "bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh",
  },
  {
    name: "Ethereum",
    symbol: "ETH",
    color: "#627EEA",
    glyph: "Ξ",
    address: "0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb",
  },
  {
    name: "USD Coin",
    symbol: "USDC",
    color: "#2775CA",
    glyph: "$",
    address: "0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb",
  },
  {
    name: "Solana",
    symbol: "SOL",
    color: "#14F195",
    glyph: "S",
    address: "9xQeWvG816bUx9EPjHmaT23YvVM2ZWbrrpZb9PusVRiE",
  },
  {
    name: "Tether",
    symbol: "USDT",
    color: "#26A17B",
    glyph: "₮",
    address: "TQrZ6kXYNA7WzsfzSp3aWJ4EH6X7sUEMUk",
  },
  {
    name: "Ripple",
    symbol: "XRP",
    color: "#23292F",
    glyph: "✕",
    address: "rPdvC6ccq8hCdPKSPJkPmyZ4Mi1oG2FFkT",
  },
];
