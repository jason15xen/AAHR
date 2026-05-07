import type { TechCard, EngineeringStat } from "./types";

export const techCards: TechCard[] = [
  {
    num: "01",
    title: "Neuromorphic Computing",
    body: "Our COGNORTAY™ chip architecture mimics human neural networks. Built from scratch in Austin, this allows sub-millisecond inference, learning offloading rather than dependence on cloud, balancing for AI tasks like image recognition, motion control, and natural language. It is the brain of every ADAM android.",
  },
  {
    num: "02",
    title: "Biomechanical Locomotion",
    body: "A motor-tendon-capture research scheme called BIOLOG. Each ADAM is built using elastic muscle activation and full-body skeletal scaling, while moving as a complement to the mechanical board of every ADAM and means all three skews bear deployment.",
  },
  {
    num: "03",
    title: "Proprietary Technology",
    body: "Every joint in ADAM uses our in-house TORQ™ servo system. Aviation-bristled motors with integrated torque sensing, ratio reduction, and AI-safe hooking. Industry-leading partnerships with TORQ™ and BUSTROBO begin to build us we are.",
    highlight: true,
    tags: ["TORQ™ Servo System", "Bare-Bones Hosting", "BIOLOG Mods"],
  },
  {
    num: "04",
    title: "Adaptive Machine Learning",
    body: "ADAM doesn't just execute commands — it learns from deployment. Lessons from one ADAM are uploaded to a learning lake, supporting all teams ahead with software updates so each ADAM grows.",
  },
];

export const engineeringStats: EngineeringStat[] = [
  { value: "100%", label: "In-House Engineering", variant: "gold" },
  { value: "14 TFLOPS", label: "COGNORTAY™ Processing", variant: "cream" },
  { value: "1M+", label: "LLM Parameters", variant: "cream" },
  { value: "4 hrs", label: "Real-Time Per Task", variant: "cream" },
  { value: "24 hrs", label: "Run Endurance Per Charge", variant: "gold" },
];
