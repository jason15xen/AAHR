import type { TechCard, EngineeringStat } from "./types";

export const techCards: TechCard[] = [
  {
    num: "01",
    title: "Neuromorphic Computing",
    body: "Our COGITRON™ chip architecture combines custom ASIC silicon with NVIDIA graphics cores to process sensation and decision simultaneously at up to 14 TFLOPS — enabling human-comparable reaction times in a package no larger than a human fist.",
  },
  {
    num: "02",
    title: "Biomechanical Locomotion",
    body: "Extensive motion-capture research across 10,000+ hours has yielded fluid, stable bipedal movement adaptable to uneven terrain, stairs, and dynamic environments.",
  },
  {
    num: "03",
    title: "Custom Servo Engineering",
    body: "Every joint in ADAM runs on our in-house TORQ™ servo system — precision brushless motors with integrated torque sensing, zero-backlash gearing, and fail-safe braking. Rated to 1,000,000+ cycles, our servos are the mechanical heart of every ADAM unit across all three skews.",
    highlight: true,
    tags: ["TORQ™ Servo System", "Zero-Backlash Gearing", "Integrated Torque Sensing", "Fail-Safe Braking"],
  },
  {
    num: "04",
    title: "Adaptive Machine Learning",
    body: "ADAM doesn't just execute commands — it learns from deployment. Residential units achieve 94% task-adaptation within 48 hours. Industrial units self-optimise shift routines in real time.",
  },
];

export const engineeringStats: EngineeringStat[] = [
  { value: "100%", label: "In-House Engineering", variant: "cream" },
  { value: "14 TFLOPS", label: "COGITRON™ Processing", variant: "gold" },
  { value: "1M+", label: "Servo Cycle Rating", variant: "cream" },
  { value: "4 hrs", label: "Runtime Per Pack", variant: "gold" },
  { value: "24 hrs", label: "Max Runtime w/ Swaps", variant: "cream" },
];
