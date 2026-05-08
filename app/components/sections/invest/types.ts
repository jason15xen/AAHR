export type TierVariant = "cream" | "red" | "gold";

export type InvestmentTier = {
  name: string;
  price: string;
  variant: TierVariant;
  badge?: string;
  perks: string[];
};

export type CryptoOption = {
  name: string;
  symbol: string;
  color: string;
  glyph: string;
  address: string;
  tag: string;
};
