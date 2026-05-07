import { BulbIcon, ChartIcon, ShieldIcon, CompassIcon } from "../../ui/Icons";

export type DifferenceItem = {
  title: string;
  body: string;
  icon: React.ReactNode;
};

export const differenceItems: DifferenceItem[] = [
  {
    title: "Vertical Integration",
    body: "By owning our entire technology stack, from chassis to cyborg, we eliminate third-party margins and capture more of the value chain end-to-end.",
    icon: <BulbIcon />,
  },
  {
    title: "Three Revenue Streams",
    body: "ADAM's three distinct skews (Residential, Commercial, Industrial) create diversified revenue with growing margins from base to industrial. This translates to higher margins and broader market scale.",
    icon: <ChartIcon />,
  },
  {
    title: "Proprietary IP Portfolio",
    body: "Our two technologies — proprietary, with patents pending on TORQ™ and COGNORTAY™ — form the technical moat: barriers to entry with extra firepower against innovation, scaling, and potential by yields.",
    icon: <ShieldIcon />,
  },
  {
    title: "First-Mover Advantage",
    body: "Established as the only US-side seed funding investment in 2025. AAA is positioned ahead of the humanoid robotics chase. Our projected market by 2027 represents unprecedented growth potential for early-stage investors.",
    icon: <CompassIcon />,
  },
];
