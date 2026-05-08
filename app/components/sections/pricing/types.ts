export type SkewVariant = "residential" | "commercial" | "industrial";

export type Tier = {
  name: string;
  price: string;
  badge?: string;
  features: string[];
};

export type Skew = {
  title: string;
  description: string;
  longDescription: string;
  variant: SkewVariant;
  tiers: Tier[];
};
