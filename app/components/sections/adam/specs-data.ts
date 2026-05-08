import type { Spec } from "./SpecTable";
import type { Unit } from "./UnitToggle";

export const specsData: Record<Unit, Spec[]> = {
  imperial: [
    { label: "Height", value: '5\'11" (71 in)' },
    { label: "Weight", value: "176 lbs" },
    { label: "Payload Capacity", value: "Up to 440 lbs (Industrial)" },
    { label: "Lift Range (Arms)", value: "0 – 7'6\"" },
    { label: "Walking Speed (Max)", value: "4.2 mph" },
    { label: "Battery Range", value: "Up to 18 hours" },
    { label: "Operating Temperature", value: "-4°F to 122°F" },
    { label: "Ingress Protection", value: "IP54 (Residential) / IP67 (Industrial)" },
    {
      label: "Processor",
      value: "COGITRON™-3 Neural Chip — 14 TFLOPS (Custom ASIC + NVIDIA Cores)",
    },
    { label: "Vision", value: "Stereo 4K + IR, 220° FOV" },
  ],
  metric: [
    { label: "Height", value: "180 cm" },
    { label: "Weight", value: "80 kg" },
    { label: "Payload Capacity", value: "Up to 200 kg (Industrial)" },
    { label: "Lift Range (Arms)", value: "0 – 230 cm" },
    { label: "Walking Speed (Max)", value: "6.8 km/h" },
    { label: "Battery Range", value: "Up to 18 hours" },
    { label: "Operating Temperature", value: "-20°C to 50°C" },
    { label: "Ingress Protection", value: "IP54 (Residential) / IP67 (Industrial)" },
    {
      label: "Processor",
      value: "COGITRON™-3 Neural Chip — 14 TFLOPS (Custom ASIC + NVIDIA Cores)",
    },
    { label: "Vision", value: "Stereo 4K + IR, 220° FOV" },
  ],
};
