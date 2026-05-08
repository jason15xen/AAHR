import type { InvestmentTier, CryptoOption } from "./types";

export const investmentTiers: InvestmentTier[] = [
  {
    name: "Associate",
    price: "$25,000",
    variant: "cream",
    perks: [
      "Quarterly investor report",
      "Annual shareholder meeting",
      "Digital certificate",
      "IR newsletter",
    ],
  },
  {
    name: "Principal",
    price: "$100,000",
    variant: "red",
    badge: "Most Popular",
    perks: [
      "All Associate benefits",
      "Bi-annual facility tours",
      "Priority next-round access",
      "Named in annual report",
      "Direct IR line",
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
      "Prototype demonstrations",
      "Advisory council seat",
      "Dedicated account manager",
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
    tag: "All tiers accepted",
  },
  {
    name: "Ethereum",
    symbol: "ETH",
    color: "#627EEA",
    glyph: "Ξ",
    address: "0x71C7656EC7ab88b098defB751B7401B5f6d8976F",
    tag: "All tiers accepted",
  },
  {
    name: "USD Coin",
    symbol: "USDC",
    color: "#2775CA",
    glyph: "$",
    address: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
    tag: "Preferred — no volatility",
  },
  {
    name: "Solana",
    symbol: "SOL",
    color: "#9945FF",
    glyph: "S",
    address: "7xKXtg2CW87d97TXJSDpbD5jBkheTqA83TZRuJosgHkv",
    tag: "Principal & Patron only",
  },
  {
    name: "Tether",
    symbol: "USDT",
    color: "#26A17B",
    glyph: "₮",
    address: "0xdAC17F958D2ee523a2206206994597C13D831ec7",
    tag: "Stablecoin · All tiers",
  },
  {
    name: "Ripple",
    symbol: "XRP",
    color: "#23292F",
    glyph: "✕",
    address: "rHb9CJAWyB4rj91VRWn96DkukG4bwdtyTh",
    tag: "Principal & Patron only",
  },
];
