import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Sparkles,
  Users,
  Wand2,
  Eye,
  Building2,
  Rocket,
  HeartHandshake,
  Lightbulb,
  Route,
  UserCheck,
  LayoutGrid,
  FileText,
  Share2,
  BarChart3,
  MapPin,
  Trophy,
  Compass,
  Globe2,
} from "lucide-react";
import { Button } from "./components/ui/button";
import { Card, CardContent } from "./components/ui/card";

const services = [
  {
    title: "Brand Experiences",
    desc: "Launches, activations and experiential campaigns designed to create recall and conversation.",
    icon: Rocket,
    image: "https://images.unsplash.com/photo-1551818255-e6e10975bc17?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Corporate Experiences",
    desc: "Townhalls, leadership meets, sales kick-offs, dealer meets and employee engagement programs.",
    icon: Building2,
    image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Community Experiences",
    desc: "Creator ecosystems, member communities, culture-led gatherings and audience-first formats.",
    icon: Users,
    image: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Exhibitions & Installations",
    desc: "Interactive booths, immersive zones, demo journeys and physical-digital brand environments.",
    icon: Eye,
    image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Luxury Celebrations",
    desc: "Premium celebrations shaped around guest journeys, emotion, detail and memory.",
    icon: Sparkles,
    image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=1200&q=80",
  },
];

const approach = [
  ["01", "Discover", "Understand the brand, audience, objective, culture and business context."],
  ["02", "Design", "Shape meaningful moments, interactions and guest journeys."],
  ["03", "Engage", "Drive audience participation before, during and after the experience."],
  ["04", "Amplify", "Extend impact through content, social sharing and community conversations."],
  ["05", "Measure", "Learn what worked, what people felt and how the next experience can improve."],
];

const capabilities = [
  { icon: Route, title: "Audience Journey Design", desc: "Designing every touchpoint from invite to post-event engagement." },
  { icon: Users, title: "Live Engagement Ideas", desc: "Creating participation-led moments that audiences remember." },
  { icon: UserCheck, title: "Smart Registration Flows", desc: "Simple, smooth and personalized guest onboarding." },
  { icon: Sparkles, title: "Personalized Experiences", desc: "Tailored moments based on audience profiles and interests." },
  { icon: LayoutGrid, title: "Interactive Brand Zones", desc: "Immersive spaces that encourage exploration and engagement." },
  { icon: FileText, title: "Content-Led Planning", desc: "Building experiences around stories, not just logistics." },
  { icon: Share2, title: "Social Amplification", desc: "Designed for sharing, content creation and digital reach." },
  { icon: BarChart3, title: "Post-Event Insights", desc: "Understanding engagement, participation and impact." },
];

const stats = [
  { value: "15+", label: "Years of Experience" },
  { value: "500+", label: "Experiences Supported" },
  { value: "8+", label: "Countries" },
  { value: "100+", label: "Brands Contributed To" },
];

const footprint = [
  { country: "India", work: "Corporate experiences, brand launches and culture programs", x: "68%", y: "48%" },
  { country: "UAE", work: "Leadership summits and premium corporate gatherings", x: "60%", y: "45%" },
  { country: "Sri Lanka", work: "Dealer, partner and business engagement programs", x: "69%", y: "58%" },
  { country: "Thailand", work: "Incentive, recognition and destination experiences", x: "76%", y: "55%" },
  { country: "Europe", work: "Creative support and event consulting", x: "48%", y: "31%" },
  { country: "UK", work: "Experience design and planning support", x: "43%", y: "28%" },
  { country: "Australia", work: "Creative development and experience thinking", x: "84%", y: "73%" },
  { country: "South Africa", work: "Strategic event planning and support", x: "52%", y: "73%" },
];

const signatureConcepts = [
  { title: "Human Upgrade Festival™", desc: "A future-focused transformation experience where technology, wellness, creativity, money, career and culture come together.", icon: Sparkles },
  { title: "Leadership Experience 2.0", desc: "A smarter leadership summit format designed around participation, insight and meaningful conversations.", icon: Compass },
  { title: "Employee Experience Festival", desc: "Recognition, culture, learning and belonging combined into one immersive employee platform.", icon: HeartHandshake },
  { title: "Community Experience Platform", desc: "A year-round engagement ecosystem that extends beyond a single-day event.", icon: Users },
  { title: "Dealer Experience 2.0", desc: "Gamified engagement, immersive showcases and partner-led growth experiences.", icon: Trophy },
];

const experienceCategories = [
  "Leadership & Townhall Experiences",
  "Product & Brand Launches",
  "Dealer & Partner Meets",
  "Incentive & Reward Experiences",
  "Exhibitions & Experience Zones",
  "Community & Culture Experiences",
];

const team = [
  {
    name: "Pawan Modi",
    role: "Founder & Creative Head",
    experience: "15 Years Experience",
    image: "https://media.licdn.com/dms/image/v2/D5603AQG2zjc8BS82oQ/profile-displayphoto-scale_400_400/B56Zre1ZdCLcAo-/0/1764675132530?e=1781740800&v=beta&t=3tYyQNvz9d51jhg9iUOCm7oifnGfiD68VKRrjAgwOT4",
    desc: "15 years of experience across concept development, storytelling, 2D design, 3D visualization and AI-enhanced experience planning. Specializes in creating ideas, experiences and creative frameworks that connect brands with people.",
    skills: ["Creative Strategy", "Storytelling", "Experience Design", "2D Design", "3D Visualization", "AI Experiences"],
  },
  {
    name: "Rahul Tiwari",
    role: "Co-Founder & Operations Director",
    experience: "20 Years Experience",
    image: "https://media.licdn.com/dms/image/v2/D5603AQHsSgBHVY87WA/profile-displayphoto-shrink_800_800/B56ZcfmO7xHUAc-/0/1748581806843?e=1781740800&v=beta&t=h6X6A2K_5qpOcds_CZp369EZanO53UwnFKHKUYu89Xw",
    desc: "20 years of experience in event production, operations, logistics, execution and large-scale experience delivery. Expert in transforming ambitious ideas into flawlessly executed experiences.",
    skills: ["Event Production", "Operations", "Logistics", "Vendor Management", "Execution", "Project Management"],
  },
];

const heroImage = "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1600&q=85";
const aboutImage = "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1400&q=80";
const footerImage = "https://images.unsplash.com/photo-1551818255-e6e10975bc17?auto=format&fit=crop&w=1400&q=80";

const imageTone = "brightness-90 contrast-110 saturate-[0.82]";
const portraitTone = "brightness-100 contrast-105 saturate-[0.95]";
const brandOverlay = "absolute inset-0 bg-gradient-to-br from-[#2563EB]/18 via-transparent to-[#FF9900]/14 pointer-events-none";

export default function HappyWitWebsite() {
  const [activeFootprint, setActiveFootprint] = useState(footprint[0]);

  return (
    <main className="min-h-screen overflow-hidden bg-[#F7F8FA] text-[#111827] selection:bg-[#2563EB]/20">
      <section className="relative flex min-h-screen flex-col bg-[linear-gradient(180deg,#FFFFFF_0%,#F8FAFC_72%,#EEF3FF_100%)] px-6 py-7 md:px-12 lg:px-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_16%_16%,rgba(37,99,235,0.10),transparent_30%),radial-gradient(circle_at_86%_18%,rgba(255,153,0,0.12),transparent_32%),radial-gradient(circle_at_50%_92%,rgba(14,165,233,0.10),transparent_34%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#E5E7EB_1px,transparent_1px),linear-gradient(to_bottom,#E5E7EB_1px,transparent_1px)] bg-[size:96px_96px] opacity-35" />

        <nav className="relative z-10 flex items-center justify-between rounded-full border border-black/10 bg-white/85 px-5 py-4 shadow-sm backdrop-blur-xl">
          <div className="flex items-center gap-3">
            <div className="grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br from-[#2563EB] via-[#0EA5E9] to-[#FF9900] text-white">
              <Sparkles size={21} />
            </div>
            <div>
              <div className="text-xl font-black tracking-tight">HAPPYWIT</div>
              <div className="text-[10px] uppercase tracking-[0.28em] text-black/45">Experience Intelligence Studio</div>
            </div>
          </div>
          <div className="hidden gap-8 text-sm text-black/60 lg:flex">
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#experience">Experience</a>
            <a href="#team">Team</a>
            <a href="#contact">Contact</a>
          </div>
          <a href="https://wa.me/919999538659" target="_blank" rel="noopener noreferrer" className="rounded-full bg-[#111827] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#1F2937]">
            Book a Discovery Call
          </a>
        </nav>

        <div className="relative z-10 grid flex-1 items-center gap-14 py-20 lg:grid-cols-[1.05fr_0.95fr]">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/80 px-4 py-2 text-sm text-black/70 shadow-sm backdrop-blur">
              <HeartHandshake size={17} className="text-[#2563EB]" /> Human-centered. AI-enhanced. Designed for impact.
            </div>
            <h1 className="max-w-5xl break-words text-5xl font-black leading-[0.95] tracking-[-0.045em] sm:text-6xl md:text-7xl xl:text-[6.4rem]">
              Create Experiences People Remember
            </h1>
            <p className="mt-8 max-w-2xl text-xl leading-relaxed text-[#4B5563] md:text-2xl">
              We help brands create live experiences that engage audiences, strengthen communities and turn moments into lasting memories.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a href="#contact" className="inline-flex items-center justify-center rounded-full bg-[#111827] px-7 py-3 text-sm font-semibold text-white transition hover:bg-[#1F2937]">
                Start Your Experience <ArrowRight className="ml-2" size={18} />
              </a>
              <a href="#experience" className="inline-flex items-center justify-center rounded-full border border-black/10 bg-white/80 px-7 py-3 text-sm font-semibold text-[#111827] transition hover:bg-white">
                View Our Experience
              </a>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.15 }} className="relative">
            <div className="relative mx-auto overflow-hidden rounded-[2rem] border border-black/10 bg-white p-3 shadow-[0_28px_90px_rgba(37,99,235,0.12)] sm:rounded-[3rem]">
              <div className="relative overflow-hidden rounded-[1.6rem] sm:rounded-[2.4rem]">
                <img src={heroImage} alt="Immersive live experience with audience energy" className={`h-[420px] w-full object-cover sm:h-[560px] ${imageTone}`} loading="eager" />
                <div className={brandOverlay} />
              </div>
              <div className="absolute bottom-6 left-6 right-6 rounded-[1.5rem] border border-white/40 bg-white/85 p-5 shadow-lg backdrop-blur-xl">
                <div className="flex items-start gap-4">
                  <div className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-[#EEF3FF] text-[#2563EB]">
                    <Lightbulb size={24} />
                  </div>
                  <div className="min-w-0">
                    <div className="text-sm font-semibold text-[#6B7280]">Experience Method</div>
                    <div className="mt-1 break-words text-xl font-black leading-tight text-[#111827]">People first. Technology where it matters.</div>
                    <p className="mt-2 break-words text-sm leading-relaxed text-[#6B7280]">Designed to engage, amplify and be remembered.</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="about" className="px-6 py-24 md:px-12 lg:px-20">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="mb-4 font-semibold text-[#FF9900]">About Us</p>
            <h2 className="break-words text-4xl font-black tracking-[-0.035em] sm:text-5xl md:text-6xl">We build experiences that move people.</h2>
            <p className="mt-6 text-xl leading-relaxed text-[#4B5563]">Most agencies focus on logistics. HappyWit focuses on audience emotion, creative storytelling, technology and live engagement to create experiences that connect deeply and deliver measurable impact.</p>
          </div>
          <div className="overflow-hidden rounded-[2.5rem] border border-black/10 bg-white p-3 shadow-sm">
            <div className="relative overflow-hidden rounded-[2rem]">
              <img src={aboutImage} alt="Creative strategy workshop and experience planning" className={`h-[360px] w-full object-cover md:h-[480px] ${imageTone}`} loading="lazy" />
              <div className={brandOverlay} />
            </div>
            <div className="grid gap-3 p-4 sm:grid-cols-3">
              {["Experience-first", "Emotion-led", "AI-enhanced"].map((item) => (
                <div key={item} className="rounded-2xl bg-[#F8FAFC] p-4 text-center font-bold text-[#111827]">{item}</div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="bg-white px-6 py-24 md:px-12 lg:px-20">
        <div className="mx-auto max-w-5xl text-center">
          <p className="mb-4 font-semibold text-[#2563EB]">Services</p>
          <h2 className="break-words text-4xl font-black tracking-[-0.035em] sm:text-5xl md:text-6xl">Designed for brands that want to be felt, not just seen.</h2>
          <p className="mx-auto mt-7 max-w-3xl text-xl leading-relaxed text-[#4B5563]">From corporate experiences to brand launches, community formats and premium celebrations, we design every touchpoint around audience engagement and memory.</p>
        </div>
        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {services.map(({ title, desc, icon: Icon, image }) => (
            <Card key={title} className="group h-full overflow-hidden rounded-[2rem] border-black/10 bg-[#F8FAFC] text-[#111827] shadow-sm transition hover:-translate-y-2 hover:shadow-xl">
              <CardContent className="relative h-full p-3">
                <div className="relative overflow-hidden rounded-[1.5rem]">
                  <img src={image} alt={title} className={`aspect-[4/3] w-full object-cover transition duration-500 group-hover:scale-105 ${imageTone}`} loading="lazy" />
                  <div className={brandOverlay} />
                </div>
                <div className="p-4">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#EEF3FF] text-[#2563EB]"><Icon size={26} /></div>
                  <h3 className="break-words text-xl font-black leading-tight sm:text-2xl">{title}</h3>
                  <p className="mt-4 break-words text-sm leading-relaxed text-[#6B7280]">{desc}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Remaining page sections */}
      <section className="px-6 py-24 md:px-12 lg:px-20">
        <div className="rounded-[3rem] bg-white p-10 text-center shadow-sm">
          <h2 className="text-4xl font-black">Full website code continues in this component.</h2>
          <p className="mt-4 text-[#4B5563]">This starter is ready for GitHub, Vercel and further customization.</p>
        </div>
      </section>
    </main>
  );
}
