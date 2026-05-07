import type { Spec } from "./SpecTable";
import type { Unit } from "./UnitToggle";

export const specsData: Record<Unit, Spec[]> = {
  imperial: [
    { label: "Height", value: "5 ft 9 in" },
    { label: "Weight", value: "147 lb" },
    { label: "Payload Capacity", value: "Up to 44 lb (industrial)" },
    { label: "Lift Range (Arms)", value: "0–74 in" },
    { label: "Release Speed (Hand)", value: "4.5 mph" },
    { label: "Battery Range", value: "Up to 18 hours" },
    { label: "Operating Temperature", value: "-4° F to 122° F" },
    {
      label: "Ingress Protection",
      value: "IP54 (Residential) / IP65 (Industrial)",
    },
    {
      label: "Processor",
      value: "COGNORTAY™ Custom Chip — 14 TFLOPS, 1M+ params",
    },
    { label: "Chassis", value: "Steel, AL, BL & 100% TPU" },
  ],
  metric: [
    { label: "Height", value: "175 cm" },
    { label: "Weight", value: "67 kg" },
    { label: "Payload Capacity", value: "Up to 20 kg (industrial)" },
    { label: "Lift Range (Arms)", value: "0–188 cm" },
    { label: "Release Speed (Hand)", value: "7.2 km/h" },
    { label: "Battery Range", value: "Up to 18 hours" },
    { label: "Operating Temperature", value: "-20° C to 50° C" },
    {
      label: "Ingress Protection",
      value: "IP54 (Residential) / IP65 (Industrial)",
    },
    {
      label: "Processor",
      value: "COGNORTAY™ Custom Chip — 14 TFLOPS, 1M+ params",
    },
    { label: "Chassis", value: "Steel, AL, BL & 100% TPU" },
  ],
};
