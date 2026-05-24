import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Sparkles,
  Layers,
  Zap,
  Users,
  Mic2,
  Hotel,
  Lightbulb,
  PenTool,
  Film,
  Rocket,
  BarChart3,
} from "lucide-react";

const services = [
  {
    icon: <Lightbulb className="h-6 w-6" />,
    title: "Campaign Ideation",
    text: "Concept narratives, theme development, storytelling frameworks and disruptive event formats.",
  },
  {
    icon: <PenTool className="h-6 w-6" />,
    title: "Graphic Design",
    text: "Visual identity systems, 2D/3D creative development, branding collaterals and launch creatives.",
  },
  {
    icon: <Hotel className="h-6 w-6" />,
    title: "Immersive Event Experiences",
    text: "End-to-end planning, immersive event design, stage experiences and execution for conferences, launches and gala nights.",
  },
];

export default function HappyWitWebsite() {
  return (
    <main className="min-h-screen bg-[#F4F7FC] text-[#07182F] p-10">
      <h1 className="text-6xl font-black">HappyWit Event Studio</h1>
      <p className="mt-6 text-xl text-slate-600">
        GitHub-ready deployment package generated successfully.
      </p>

      <div className="mt-16 grid gap-6 md:grid-cols-3">
        {services.map((service) => (
          <div key={service.title} className="rounded-3xl bg-[#07182F] p-8 text-white">
            <div className="mb-6">{service.icon}</div>
            <h3 className="text-2xl font-bold">{service.title}</h3>
            <p className="mt-4 text-white/70">{service.text}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
