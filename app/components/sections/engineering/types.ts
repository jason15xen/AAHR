export type TechCard = {
  num: string;
  title: string;
  body: string;
  highlight?: boolean;
  tags?: string[];
};

export type EngineeringStat = {
  value: string;
  label: string;
  variant: "gold" | "cream";
};
