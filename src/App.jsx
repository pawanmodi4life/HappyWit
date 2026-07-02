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

const Button = ({ className = "", children, ...props }) => (
  <button
    className={`inline-flex items-center justify-center px-5 py-2.5 font-semibold transition ${className}`}
    {...props}
  >
    {children}
  </button>
);

const Card = ({ className = "", children, ...props }) => (
  <div className={className} {...props}>{children}</div>
);

const CardContent = ({ className = "", children, ...props }) => (
  <div className={className} {...props}>{children}</div>
);

const services = [
  {
    title: "Brand Launches",
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
    title: "Community Gatherings",
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
  {
    icon: Route,
    title: "Audience Journey Design",
    desc: "Designing every touchpoint from invite to post-event engagement.",
  },
  {
    icon: Users,
    title: "Live Engagement Ideas",
    desc: "Creating participation-led moments that audiences remember.",
  },
  {
    icon: UserCheck,
    title: "Smart Registration Flows",
    desc: "Simple, smooth and personalized guest onboarding.",
  },
  {
    icon: Sparkles,
    title: "Personalized Experiences",
    desc: "Tailored moments based on audience profiles and interests.",
  },
  {
    icon: LayoutGrid,
    title: "Interactive Brand Zones",
    desc: "Immersive spaces that encourage exploration and engagement.",
  },
  {
    icon: FileText,
    title: "Content-Led Planning",
    desc: "Building experiences around stories, not just logistics.",
  },
  {
    icon: Share2,
    title: "Social Amplification",
    desc: "Designed for sharing, content creation and digital reach.",
  },
  {
    icon: BarChart3,
    title: "Post-Event Insights",
    desc: "Understanding engagement, participation and impact.",
  },
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
  {
    title: "Human Upgrade Festival",
    desc: "A future-focused transformation experience where technology, wellness, creativity, money, career and culture come together.",
    icon: Sparkles,
  },
  {
    title: "Leadership Experience 2.0",
    desc: "A smarter leadership summit format designed around participation, insight and meaningful conversations.",
    icon: Compass,
  },
  {
    title: "Employee Festival",
    desc: "Recognition, culture, learning and belonging combined into one immersive employee platform.",
    icon: HeartHandshake,
  },
  {
    title: "Community Experience Platform",
    desc: "A year-round engagement ecosystem that extends beyond a single-day event.",
    icon: Users,
  },
  {
    title: "Dealer Enagament 2.0",
    desc: "Gamified engagement, immersive showcases and partner-led growth experiences.",
    icon: Trophy,
  },
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
    role: "Creative Intelligence Experience Director",
    experience: "15 Years Experience",
    image: "https://i.ibb.co/RpxP0bYL/Chat-GPT-Image-Jun-3-2026-07-33-02-PM.png",
    desc: "15 years of experience across concept development, storytelling, 2D design, 3D visualization and AI-enhanced experience planning. Specializes in creating ideas, experiences and creative frameworks that connect brands with people.",
    skills: ["Creative Strategy", "Storytelling", "Experience Design", "2D Design", "3D Visualization", "AI Experiences"],
  },


  {
    name: "Rahul Tiwari",
    role: "Operational Intelligence Experience Director",
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
  

  <div className="flex items-center">
    <img
      src="https://i.ibb.co/p68ZYTDW/Logo.png"
      alt="HappyWit"
      className="h-12 md:h-14 w-auto"
    />
  </div>
</div>
            <div className="hidden gap-8 text-sm text-black/60 lg:flex">
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#experience">Experience</a>
            <a href="#team">Team</a>
            <a href="#contact">Contact</a>
          </div>
          <a href="https://wa.me/918851221600"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-[#111827] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#1F2937]">
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
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full bg-[#111827] px-7 py-3 text-sm font-semibold text-white transition hover:bg-[#1F2937]"
              >
                Start Your Experience <ArrowRight className="ml-2" size={18} />
              </a>
              <a
                href="#experience"
                className="inline-flex items-center justify-center rounded-full border border-black/10 bg-white/80 px-7 py-3 text-sm font-semibold text-[#111827] transition hover:bg-white"
              >
                View Our Experience
              </a>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.15 }} className="relative">
            <div className="relative mx-auto overflow-hidden rounded-[2rem] border border-black/10 bg-white p-3 shadow-[0_28px_90px_rgba(37,99,235,0.12)] sm:rounded-[3rem]">
              <div className="relative overflow-hidden rounded-[1.6rem] sm:rounded-[2.4rem]">
                <img
                  src={heroImage}
                  alt="Immersive live experience with audience energy"
                  className={`h-[420px] w-full object-cover sm:h-[560px] ${imageTone}`}
                  loading="eager"
                />
                <div className={brandOverlay} />
              </div>
              <div className="absolute bottom-6 left-6 right-6 rounded-[1.5rem] border border-white/40 bg-white/85 p-5 shadow-lg backdrop-blur-xl">
                <div className="flex items-start gap-4">
                  <div className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-[#EEF3FF] text-[#2563EB]">
                    <Lightbulb size={24} />
                  </div>
                  <div className="min-w-0">
                    <div className="text-sm font-semibold text-[#6B7280]">Experience Method</div>
                    <div className="mt-1 break-words text-xl font-black leading-tight text-[#111827]">
                      People first. Technology where it matters.
                    </div>
                    <p className="mt-2 break-words text-sm leading-relaxed text-[#6B7280]">
                      Designed to engage, amplify and be remembered.
                    </p>
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
            <p className="mt-6 text-xl leading-relaxed text-[#4B5563]">
              Most agencies focus on logistics. HappyWit focuses on audience emotion, creative storytelling, technology and live engagement to create experiences that connect deeply and deliver measurable impact.
            </p>
          </div>
          <div className="overflow-hidden rounded-[2.5rem] border border-black/10 bg-white p-3 shadow-sm">
            <div className="relative overflow-hidden rounded-[2rem]">
              <img
                src={aboutImage}
                alt="Creative strategy workshop and experience planning"
                className={`h-[360px] w-full object-cover md:h-[480px] ${imageTone}`}
                loading="lazy"
              />
              <div className={brandOverlay} />
            </div>
            <div className="grid gap-3 p-4 sm:grid-cols-3">
              {["Experience-first", "Emotion-led", "AI-enhanced"].map((item) => (
                <div key={item} className="rounded-2xl bg-[#F8FAFC] p-4 text-center font-bold text-[#111827]">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="bg-white px-6 py-24 md:px-12 lg:px-20">
        <div className="mx-auto max-w-5xl text-center">
          <p className="mb-4 font-semibold text-[#2563EB]">Services</p>
          <h2 className="break-words text-4xl font-black tracking-[-0.035em] sm:text-5xl md:text-6xl">Designed for brands that want to be felt, not just seen.</h2>
          <p className="mx-auto mt-7 max-w-3xl text-xl leading-relaxed text-[#4B5563]">
            From corporate experiences to brand launches, community formats and premium celebrations, we design every touchpoint around audience engagement and memory.
          </p>
        </div>
        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {services.map(({ title, desc, icon: Icon, image }) => (
            <Card key={title} className="group h-full overflow-hidden rounded-[2rem] border-black/10 bg-[#F8FAFC] text-[#111827] shadow-sm transition hover:-translate-y-2 hover:shadow-xl">
              <CardContent className="relative h-full p-3">
                <div className="relative overflow-hidden rounded-[1.5rem]">
                  <img
                    src={image}
                    alt={title}
                    className={`aspect-[4/3] w-full object-cover transition duration-500 group-hover:scale-105 ${imageTone}`}
                    loading="lazy"
                  />
                  <div className={brandOverlay} />
                </div>
                <div className="p-4">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#EEF3FF] text-[#2563EB]">
                    <Icon size={26} />
                  </div>
                  <h3 className="break-words text-xl font-black leading-tight sm:text-2xl">{title}</h3>
                  <p className="mt-4 break-words text-sm leading-relaxed text-[#6B7280]">{desc}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="bg-[#EEF3FF] px-6 py-24 md:px-12 lg:px-20">
        <div className="mb-12 max-w-4xl">
          <p className="mb-4 font-semibold text-[#FF9900]">How We Think</p>
          <h2 className="break-words text-4xl font-black tracking-[-0.035em] sm:text-5xl md:text-6xl">A simple process for meaningful experiences.</h2>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {approach.map(([num, title, desc]) => (
            <div key={title} className="relative h-full min-w-0 rounded-[2rem] border border-black/10 bg-white p-6 shadow-sm sm:p-7">
              <div className="mb-12 text-5xl font-black text-black/10">{num}</div>
              <h3 className="break-words text-2xl font-black sm:text-3xl">{title}</h3>
              <p className="mt-4 break-words text-sm leading-relaxed text-[#6B7280]">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 py-24 md:px-12 lg:px-20">
        <div className="grid min-w-0 gap-12 lg:grid-cols-1 xl:grid-cols-[0.8fr_1.2fr] xl:items-center">
          <div>
            <p className="mb-4 font-semibold text-[#2563EB]">What We Bring</p>
            <h2 className="break-words text-4xl font-black tracking-[-0.035em] sm:text-5xl md:text-6xl">Practical creativity with intelligent engagement.</h2>
            <p className="mt-6 text-xl leading-relaxed text-[#4B5563]">
              We use technology only where it improves the audience experience, the brand outcome or the quality of insight.
            </p>
          </div>
          <div className="grid min-w-0 gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {capabilities.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="group min-w-0 rounded-3xl border border-black/10 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#EEF3FF] text-[#2563EB]">
                  <Icon size={24} />
                </div>
                <h3 className="mt-5 break-words text-lg font-black leading-tight text-[#111827] sm:text-xl">
                  {title}
                </h3>
                <p className="mt-3 break-words text-sm leading-relaxed text-[#6B7280]">
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="experience" className="bg-white px-6 py-24 md:px-12 lg:px-20">
        <div className="mx-auto mb-14 max-w-5xl text-center">
          <p className="mb-4 font-semibold text-[#FF9900]">Experience Credibility</p>
          <h2 className="break-words text-4xl font-black tracking-[-0.035em] sm:text-5xl md:text-6xl">Built on years of real-world experience.</h2>
          <p className="mx-auto mt-6 max-w-3xl text-xl leading-relaxed text-[#4B5563]">
            We bring deep hands-on experience across categories, geographies and event formats.
          </p>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((item) => (
            <div key={item.label} className="rounded-[2rem] border border-black/10 bg-[#F8FAFC] p-7 text-center shadow-sm">
              <div className="text-5xl font-black tracking-[-0.04em] text-[#2563EB]">{item.value}</div>
              <p className="mt-3 font-semibold text-[#4B5563]">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#EEF3FF] px-6 py-24 md:px-12 lg:px-20">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div>
            <p className="mb-4 font-semibold text-[#2563EB]">Experience Footprint</p>
            <h2 className="break-words text-4xl font-black tracking-[-0.035em] sm:text-5xl md:text-6xl">Experience across borders.</h2>
            <p className="mt-6 text-xl leading-relaxed text-[#4B5563]">
              A premium view of the geographies and experience formats supported through years of creative and event-industry work.
            </p>
            <div className="mt-8 rounded-[2rem] border border-black/10 bg-white p-6 shadow-sm">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#EEF3FF] text-[#2563EB]">
                <MapPin size={23} />
              </div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#6B7280]">Selected Region</p>
              <h3 className="mt-2 text-3xl font-black text-[#111827]">{activeFootprint.country}</h3>
              <p className="mt-3 break-words leading-relaxed text-[#4B5563]">{activeFootprint.work}</p>
            </div>
          </div>

          <div className="overflow-hidden rounded-[2.5rem] border border-black/10 bg-white p-4 shadow-sm sm:p-6">
            <div className="relative aspect-[1.55/1] min-h-[360px] overflow-hidden rounded-[2rem] bg-[radial-gradient(circle_at_50%_48%,rgba(37,99,235,0.12),transparent_34%),linear-gradient(135deg,#F8FAFC,#EEF3FF)]">
              <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(37,99,235,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(37,99,235,0.08)_1px,transparent_1px)] bg-[size:48px_48px]" />
              <div className="absolute left-1/2 top-1/2 h-[78%] w-[78%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#2563EB]/10" />
              <div className="absolute left-1/2 top-1/2 h-[58%] w-[58%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#2563EB]/10" />
              <div className="absolute left-1/2 top-1/2 h-[38%] w-[38%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#2563EB]/10" />
              <div className="absolute left-[10%] right-[10%] top-1/2 h-px bg-[#2563EB]/10" />
              <div className="absolute bottom-[12%] top-[12%] left-1/2 w-px bg-[#2563EB]/10" />

              <svg viewBox="0 0 900 560" className="absolute inset-0 h-full w-full" aria-hidden="true">
                <path d="M612 268 C580 228 520 205 435 185 C365 168 330 146 300 116" fill="none" stroke="#2563EB" strokeOpacity="0.24" strokeWidth="2" strokeDasharray="7 8" />
                <path d="M612 268 C590 292 560 327 520 408" fill="none" stroke="#2563EB" strokeOpacity="0.24" strokeWidth="2" strokeDasharray="7 8" />
                <path d="M612 268 C690 278 745 318 756 408" fill="none" stroke="#2563EB" strokeOpacity="0.24" strokeWidth="2" strokeDasharray="7 8" />
                <path d="M612 268 C638 285 663 312 681 325" fill="none" stroke="#2563EB" strokeOpacity="0.24" strokeWidth="2" strokeDasharray="7 8" />
                <path d="M612 268 C585 253 560 249 540 252" fill="none" stroke="#FF9900" strokeOpacity="0.3" strokeWidth="2" strokeDasharray="7 8" />
              </svg>

              <div className="absolute left-6 top-6 rounded-full border border-black/10 bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#6B7280] shadow-sm backdrop-blur">
                Global Experience Footprint
              </div>

              {footprint.map((item) => {
                const isActive = activeFootprint.country === item.country;
                return (
                  <button
                    key={item.country}
                    type="button"
                    onClick={() => setActiveFootprint(item)}
                    className="absolute -translate-x-1/2 -translate-y-1/2 focus:outline-none"
                    style={{ left: item.x, top: item.y }}
                    aria-label={`View ${item.country} experience footprint`}
                  >
                    <span className={`absolute left-1/2 top-1/2 h-9 w-9 -translate-x-1/2 -translate-y-1/2 rounded-full ${isActive ? "bg-[#2563EB]/20" : "bg-[#2563EB]/10"} ${isActive ? "animate-ping" : ""}`} />
                    <span className={`relative flex h-5 w-5 items-center justify-center rounded-full border-2 border-white shadow-lg ${isActive ? "bg-[#FF9900]" : "bg-[#2563EB]"}`}>
                      <span className="h-2 w-2 rounded-full bg-white" />
                    </span>
                    <span className={`absolute left-1/2 top-7 hidden -translate-x-1/2 whitespace-nowrap rounded-full border border-black/10 bg-white px-3 py-1 text-xs font-semibold shadow-sm sm:block ${isActive ? "text-[#111827]" : "text-[#6B7280]"}`}>
                      {item.country}
                    </span>
                  </button>
                );
              })}
            </div>

            <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {footprint.map((item) => (
                <button
                  key={item.country}
                  type="button"
                  onClick={() => setActiveFootprint(item)}
                  className={`rounded-2xl border px-4 py-3 text-left text-sm font-semibold transition ${activeFootprint.country === item.country ? "border-[#2563EB] bg-[#EEF3FF] text-[#2563EB]" : "border-black/10 bg-[#F8FAFC] text-[#4B5563] hover:bg-white"}`}
                >
                  {item.country}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-24 md:px-12 lg:px-20">
        <div className="mb-12 max-w-4xl">
          <p className="mb-4 font-semibold text-[#FF9900]">Signature Experience Concepts</p>
          <h2 className="break-words text-4xl font-black tracking-[-0.035em] sm:text-5xl md:text-6xl">Ideas we believe in.</h2>
          <p className="mt-6 text-xl leading-relaxed text-[#4B5563]">
            These are original HappyWit experience directions that can become future IPs, brand programs or culture-led platforms.
          </p>
        </div>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-5">
          {signatureConcepts.map(({ title, desc, icon: Icon }) => (
            <div key={title} className="min-w-0 rounded-[2rem] border border-black/10 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#EEF3FF] text-[#2563EB]">
                <Icon size={24} />
              </div>
              <h3 className="break-words text-xl font-black leading-tight">{title}</h3>
              <p className="mt-4 break-words text-sm leading-relaxed text-[#6B7280]">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white px-6 py-24 md:px-12 lg:px-20">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div>
            <p className="mb-4 font-semibold text-[#2563EB]">Experience Categories</p>
            <h2 className="break-words text-4xl font-black tracking-[-0.035em] sm:text-5xl md:text-6xl">What we have helped create.</h2>
            <p className="mt-6 text-xl leading-relaxed text-[#4B5563]">
              Most event partners manage logistics. We design experiences.

            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {experienceCategories.map((item) => (
              <div key={item} className="flex min-w-0 items-start gap-3 rounded-[1.5rem] border border-black/10 bg-[#F8FAFC] p-5 shadow-sm">
                <Globe2 className="mt-1 shrink-0 text-[#2563EB]" size={22} />
                <span className="break-words font-semibold text-[#4B5563]">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="team" className="bg-[#EEF3FF] px-6 py-24 md:px-12 lg:px-20">
        <div className="mx-auto mb-12 max-w-4xl text-center">
          <p className="mb-4 font-semibold text-[#2563EB]">Leadership Team</p>
          <h2 className="break-words text-4xl font-black tracking-[-0.035em] sm:text-5xl md:text-6xl">Creativity With Purpose. Experiences With Impact.</h2>
          <p className="mx-auto mt-6 max-w-3xl text-xl leading-relaxed text-[#4B5563]">
            HappyWit is led by a combination of experience design, storytelling, production and operational expertise.
          </p>
        </div>
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-2 xl:grid-cols-3">
          {team.map((member) => (
            <div key={member.name} className="overflow-hidden rounded-[2rem] border border-black/10 bg-white p-3 shadow-sm">
              <img
                src={member.image}
                alt={`${member.name} leadership profile`}
                className={`h-80 w-full rounded-[1.5rem] object-cover object-center ${portraitTone}`}
                loading="lazy"
              />
              <div className="p-6">
                <div className="mb-5 inline-flex rounded-full bg-[#EEF3FF] px-4 py-2 text-sm font-semibold text-[#2563EB]">
                  {member.experience}
                </div>
                <h3 className="break-words text-3xl font-black">{member.name}</h3>
                <p className="mt-2 font-semibold text-[#2563EB]">{member.role}</p>
                <p className="mt-4 break-words leading-relaxed text-[#6B7280]">{member.desc}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {member.skills.map((skill) => (
                    <span key={skill} className="rounded-full bg-[#F8FAFC] px-3 py-2 text-xs font-semibold text-[#4B5563]">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="difference" className="px-6 py-24 md:px-12 lg:px-20">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="mb-4 font-semibold text-[#FF9900]">The HappyWit Difference</p>
            <h2 className="break-words text-4xl font-black leading-[0.95] tracking-[-0.04em] sm:text-5xl md:text-6xl">
              We don't design events.
              <br />
              We design what people remember.
            </h2>
            <p className="mt-8 text-xl leading-relaxed text-[#4B5563]">
              Every experience is built around human emotion, audience behavior and meaningful participation — not just production and logistics.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {[
              {
                title: "Emotion",
                desc: "People remember how they felt. Every experience begins with understanding audience emotion.",
              },
              {
                title: "Connection",
                desc: "Emotion create connection. Every experience starts with meaning before a stage is designed.",
              },
              {
                title: "Participation",
                desc: "People engage when involved. We design moments where audiences become active participants.",
              },
              {
                title: "AI Enhanced",
                desc: "Technology should amplify human experiences, not replace them. We use it to create smarter engagement.",
              },
            ].map((item) => (
              <div key={item.title} className="min-w-0 rounded-[2rem] border border-black/10 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
                <h3 className="break-words text-2xl font-black text-[#111827]">{item.title}</h3>
                <p className="mt-3 break-words text-sm leading-relaxed text-[#6B7280]">{item.desc}</p>
              </div>
            ))}

            <div className="col-span-full rounded-[2rem] bg-[#111827] p-8 text-white shadow-xl">
              <div className="text-sm font-semibold uppercase tracking-[0.2em] text-white/55">Result</div>
              <h3 className="mt-3 break-words text-4xl font-black">Memorable Experiences</h3>
              <p className="mt-4 text-white/70">Emotion + Connection + Participation + Technology</p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="relative px-6 py-24 md:px-12 lg:px-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(37,99,235,0.10),transparent_32%),radial-gradient(circle_at_20%_80%,rgba(255,153,0,0.12),transparent_34%)]" />
        <div className="relative overflow-hidden rounded-[3rem] border border-black/10 bg-[#111827] shadow-2xl">
          <div className="grid lg:grid-cols-2">
            <div className="flex flex-col justify-center p-8 text-white sm:p-10 lg:p-14">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-white/45">Contact</p>
              <h2 className="mt-5 break-words text-4xl font-black leading-[0.95] tracking-[-0.035em] sm:text-5xl md:text-6xl">
                Let's Create
                <br />
                Something Remarkable
              </h2>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/70">
                Every experience starts with a emotion. Let's create yours.
              </p>

              <div className="mt-9 grid gap-5 sm:grid-cols-2">
                
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/40">Mobile</p>
                  <a href="tel:+919999538659" className="mt-1 block break-words text-lg font-semibold text-white hover:text-[#FF9900]">+91 8851221600</a>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/40">Email</p>
                  <a href="mailto:hello@happywitevents.com" className="mt-1 block break-words text-lg font-semibold text-white hover:text-[#FF9900]">hello@happywitevents.com</a>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/40">Website</p>
                  <a href="https://www.happywitevents.com" target="_blank" rel="noopener noreferrer" className="mt-1 block break-words text-lg font-semibold text-white hover:text-[#FF9900]">www.happywitevents.com</a>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/40">LinkedIN</p>
                  <a href="https://www.linkedin.com/company/happywit-experiences/" target="_blank" rel="noopener noreferrer" className="mt-1 block break-words text-lg font-semibold text-white hover:text-[#FF9900]">happywit-experiences</a>
                </div>
              </div>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
                <a
                  href="https://wa.me/918851221600"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-[#FF9900] px-7 py-3 text-sm font-semibold text-white transition hover:bg-[#e88a00]"
                >
                  Book a Discovery Call <ArrowRight className="ml-2" size={18} />
                </a>
                <p className="text-sm font-medium text-white/55">Experience-led. Human-centered. AI-enhanced.</p>
              </div>
            </div>

            <div className="relative min-h-[380px] lg:min-h-[680px]">
              <img
                src={footerImage}
                alt="HappyWit immersive experience environment"
                className={`absolute inset-0 h-full w-full object-cover ${imageTone}`}
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-[#2563EB]/20 via-transparent to-[#FF9900]/18" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#111827]/80 via-[#111827]/15 to-transparent lg:bg-gradient-to-r lg:from-[#111827] lg:via-[#111827]/10 lg:to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 rounded-[1.5rem] border border-white/20 bg-white/15 p-5 text-white backdrop-blur-xl lg:bottom-8 lg:left-8 lg:right-8">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/60">Closing Thought</p>
                <p className="mt-2 text-2xl font-black leading-tight">Every great experience begins with one meaningful moment.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
