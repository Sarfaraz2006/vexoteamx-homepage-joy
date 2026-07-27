import { createFileRoute } from "@tanstack/react-router";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Download,
  Moon,
  Code,
  Palette,
  Layout,
  Smartphone,
  Globe,
  Figma,
  Mail,
  MapPin,
  Phone,
  Send,
  Rocket,
  Zap,
  Shield,
  ArrowRight,
  ExternalLink,
} from "lucide-react";
import heroPerson from "@/assets/hero-person.png";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "VexoTeamX — Frontend Development Studio" },
      {
        name: "description",
        content:
          "VexoTeamX builds fast, modern frontend experiences — 30+ projects delivered, 100+ satisfied clients.",
      },
      { property: "og:title", content: "VexoTeamX — Frontend Development Studio" },
      {
        property: "og:description",
        content:
          "VexoTeamX builds fast, modern frontend experiences — 30+ projects delivered, 100+ satisfied clients.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
});

const navLinks = ["Home", "About", "Skills", "Services", "Portfolio", "Contact"];

const stats = [
  { value: "10+", label: ["Years of", "experience"] },
  { value: "30+", label: ["Projects", "completed"] },
  { value: "5+", label: ["Technologies", "mastered"] },
  { value: "100+", label: ["Satisfied", "Client"] },
];

const skills = [
  { name: "React / Next.js", percent: 95 },
  { name: "TypeScript", percent: 92 },
  { name: "Tailwind CSS", percent: 90 },
  { name: "UI/UX Design", percent: 85 },
  { name: "Node.js", percent: 78 },
];

const services = [
  {
    icon: Layout,
    title: "Web Development",
    desc: "Fast, responsive websites built with modern stacks and clean architecture.",
  },
  {
    icon: Smartphone,
    title: "App Interfaces",
    desc: "Pixel-perfect mobile and web app UIs that feel native and delightful.",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    desc: "User-centered design systems, wireframes, and polished visual experiences.",
  },
  {
    icon: Globe,
    title: "SEO & Performance",
    desc: "Optimized Core Web Vitals, accessibility, and search-ready page structures.",
  },
  {
    icon: Figma,
    title: "Design to Code",
    desc: "Turn Figma mockups into production-ready components with precision.",
  },
  {
    icon: Rocket,
    title: "Product Launch",
    desc: "End-to-end support from prototype to deployment and beyond.",
  },
];

const portfolio = [
  {
    title: "E-Commerce Dashboard",
    tags: ["React", "Tailwind"],
    color: "from-neon/20 to-blue-500/20",
  },
  {
    title: "Fintech Mobile App",
    tags: ["TypeScript", "UI/UX"],
    color: "from-magenta/20 to-purple-500/20",
  },
  {
    title: "SaaS Landing Page",
    tags: ["Next.js", "SEO"],
    color: "from-emerald-400/20 to-neon/20",
  },
  {
    title: "Creative Agency Site",
    tags: ["Design", "Animation"],
    color: "from-amber-400/20 to-rose-500/20",
  },
];

const testimonials = [
  {
    name: "Aman Sharma",
    role: "Founder, ScaleUp",
    text: "VexoTeamX delivered our product UI in record time. The attention to detail was incredible.",
  },
  {
    name: "Priya Patel",
    role: "Product Manager",
    text: "Professional, responsive, and technically sharp. They turned our Figma designs into flawless code.",
  },
  {
    name: "Rahul Verma",
    role: "CTO, TechLabs",
    text: "Our site performance scores jumped from 42 to 96 after their rebuild. Highly recommended.",
  },
];

function Index() {
  return (
    <main className="hero-surface min-h-screen w-full px-4 py-6 sm:px-8 sm:py-10">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-3xl bg-card/85 shadow-[var(--shadow-panel)] ring-1 ring-border backdrop-blur">
        <header className="flex flex-wrap items-center justify-between gap-4 px-6 py-5 sm:px-10">
          <span className="font-display text-2xl font-extrabold italic tracking-tight text-glow">
            VexoTeamX
          </span>

          <nav className="order-3 flex w-full flex-wrap items-center gap-6 text-sm text-muted-foreground md:order-none md:w-auto">
            {navLinks.map((link, i) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className={
                  i === 0
                    ? "border-b-2 border-neon pb-1 font-medium text-neon"
                    : "pb-1 transition-colors hover:text-neon"
                }
              >
                {link}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <button
              aria-label="Toggle theme"
              className="flex size-8 items-center justify-center rounded-full bg-secondary text-neon"
            >
              <Moon className="size-4" />
            </button>
            <a
              href="#"
              className="btn-magenta inline-flex items-center gap-2 rounded-md px-4 py-2 text-sm font-semibold"
            >
              Download CV <Download className="size-4" />
            </a>
          </div>
        </header>

        <section id="home" className="grid items-center gap-10 px-6 pb-14 pt-8 sm:px-10 md:grid-cols-2">
          <div className="relative mx-auto w-full max-w-sm">
            <div className="absolute inset-4 rounded-full bg-neon/25 blur-3xl" />
            <div className="relative aspect-[9/11] overflow-hidden rounded-[48%_48%_45%_45%/40%_40%_60%_60%] ring-2 ring-neon/60 shadow-[var(--shadow-glow)]">
              <img
                src={heroPerson}
                alt="VexoTeamX lead frontend developer"
                width={900}
                height={1100}
                className="size-full object-cover object-top"
              />
            </div>
          </div>

          <div>
            <p className="text-sm text-muted-foreground">Hello, We are</p>
            <h1 className="mt-2 font-display text-4xl font-extrabold tracking-tight sm:text-5xl">
              VexoTeamX
            </h1>
            <p className="mt-2 font-display text-xl font-semibold sm:text-2xl">
              And We build <span className="text-neon text-glow">Frontend Experiences</span>
              <span className="ml-0.5 animate-pulse text-neon">|</span>
            </p>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">
              A small, sharp team crafting fast websites, product UIs and design systems. Clean
              code, pixel-accurate interfaces and delivery you can rely on.
            </p>

            <div className="mt-5 flex gap-4 text-neon">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="Social link"
                  className="transition-opacity hover:opacity-70"
                >
                  <Icon className="size-5" />
                </a>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#contact" className="btn-neon rounded-md px-6 py-2 text-sm font-medium">
                Hire Us
              </a>
              <a href="#contact" className="btn-neon rounded-md px-6 py-2 text-sm font-medium">
                Contact Us
              </a>
            </div>
          </div>
        </section>

        <div className="grid grid-cols-2 gap-y-8 border-t border-border px-6 py-8 sm:px-10 md:grid-cols-4">
          {stats.map((s, i) => (
            <div
              key={s.value}
              className={`flex items-center justify-center gap-3 ${i > 0 ? "md:border-l md:border-border" : ""}`}
            >
              <span className="font-display text-3xl font-extrabold sm:text-4xl">{s.value}</span>
              <span className="text-xs leading-tight text-muted-foreground">
                {s.label[0]}
                <br />
                {s.label[1]}
              </span>
            </div>
          ))}
        </div>

        {/* About */}
        <section id="about" className="border-t border-border px-6 py-16 sm:px-10">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-sm font-semibold uppercase tracking-widest text-neon">About Us</span>
            <h2 className="section-title mt-3">We Design & Build Digital Products</h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground">
              VexoTeamX is a frontend-focused studio that helps startups and established brands
              ship beautiful, high-performance interfaces. We combine design thinking with modern
              engineering — from the first wireframe to the final deploy.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {[
              { icon: Zap, title: "Fast Delivery", desc: "Sprints that keep momentum without cutting corners." },
              { icon: Shield, title: "Reliable Code", desc: "Type-safe, tested, and ready to scale." },
              { icon: Code, title: "Clean Architecture", desc: "Maintainable components and design systems." },
            ].map((item) => (
              <div
                key={item.title}
                className="card-glow rounded-2xl p-6 text-center"
              >
                <div className="mx-auto flex size-12 items-center justify-center rounded-full bg-neon/10 text-neon">
                  <item.icon className="size-6" />
                </div>
                <h3 className="mt-4 font-display text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="border-t border-border px-6 py-16 sm:px-10">
          <div className="text-center">
            <span className="text-sm font-semibold uppercase tracking-widest text-neon">Our Skills</span>
            <h2 className="section-title mt-3">Technologies We Master</h2>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {skills.map((skill) => (
              <div key={skill.name} className="card-glow rounded-2xl p-6">
                <div className="flex items-center justify-between">
                  <span className="font-display text-sm font-semibold">{skill.name}</span>
                  <span className="text-sm text-neon">{skill.percent}%</span>
                </div>
                <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-secondary">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-neon to-neon-soft shadow-[0_0_12px_var(--color-neon)]"
                    style={{ width: `${skill.percent}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Services */}
        <section id="services" className="border-t border-border px-6 py-16 sm:px-10">
          <div className="text-center">
            <span className="text-sm font-semibold uppercase tracking-widest text-neon">Services</span>
            <h2 className="section-title mt-3">What We Can Do For You</h2>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.title}
                className="card-glow group rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex size-12 items-center justify-center rounded-xl bg-neon/10 text-neon transition-colors group-hover:bg-neon/20">
                  <service.icon className="size-6" />
                </div>
                <h3 className="mt-4 font-display text-lg font-semibold">{service.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{service.desc}</p>
                <a
                  href="#contact"
                  className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-neon transition-opacity hover:opacity-70"
                >
                  Learn more <ArrowRight className="size-4" />
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Portfolio */}
        <section id="portfolio" className="border-t border-border px-6 py-16 sm:px-10">
          <div className="text-center">
            <span className="text-sm font-semibold uppercase tracking-widest text-neon">Portfolio</span>
            <h2 className="section-title mt-3">Recent Projects</h2>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {portfolio.map((project) => (
              <div
                key={project.title}
                className="card-glow group relative overflow-hidden rounded-2xl"
              >
                <div
                  className={`aspect-[16/10] bg-gradient-to-br ${project.color} flex items-center justify-center`}
                >
                  <Layout className="size-16 text-white/40 transition-transform duration-300 group-hover:scale-110" />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between">
                    <h3 className="font-display text-lg font-semibold">{project.title}</h3>
                    <a
                      href="#"
                      aria-label="Open project"
                      className="text-neon transition-opacity hover:opacity-70"
                    >
                      <ExternalLink className="size-5" />
                    </a>
                  </div>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-neon/30 bg-neon/10 px-3 py-1 text-xs font-medium text-neon"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials */}
        <section className="border-t border-border px-6 py-16 sm:px-10">
          <div className="text-center">
            <span className="text-sm font-semibold uppercase tracking-widest text-neon">Testimonials</span>
            <h2 className="section-title mt-3">What Clients Say</h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {testimonials.map((t) => (
              <div key={t.name} className="card-glow rounded-2xl p-6">
                <div className="flex gap-1 text-neon">
                  {[...Array(5)].map((_, i) => (
                    <Zap key={i} className="size-4 fill-current" />
                  ))}
                </div>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">“{t.text}”</p>
                <div className="mt-6 flex items-center gap-3">
                  <div className="flex size-10 items-center justify-center rounded-full bg-neon/10 font-display text-sm font-bold text-neon">
                    {t.name[0]}
                  </div>
                  <div>
                    <p className="text-sm font-semibold">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="border-t border-border px-6 py-16 sm:px-10">
          <div className="text-center">
            <span className="text-sm font-semibold uppercase tracking-widest text-neon">Contact</span>
            <h2 className="section-title mt-3">Let's Work Together</h2>
          </div>

          <div className="mt-12 grid gap-10 lg:grid-cols-2">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex size-11 items-center justify-center rounded-full bg-neon/10 text-neon">
                  <Mail className="size-5" />
                </div>
                <div>
                  <p className="text-sm font-semibold">Email</p>
                  <p className="text-sm text-muted-foreground">hello@vexoteamx.com</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex size-11 items-center justify-center rounded-full bg-neon/10 text-neon">
                  <Phone className="size-5" />
                </div>
                <div>
                  <p className="text-sm font-semibold">Phone</p>
                  <p className="text-sm text-muted-foreground">+91 98765 43210</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex size-11 items-center justify-center rounded-full bg-neon/10 text-neon">
                  <MapPin className="size-5" />
                </div>
                <div>
                  <p className="text-sm font-semibold">Location</p>
                  <p className="text-sm text-muted-foreground">India (Remote Worldwide)</p>
                </div>
              </div>

              <div className="flex gap-4 pt-2 text-neon">
                {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    aria-label="Social link"
                    className="flex size-10 items-center justify-center rounded-full bg-neon/10 transition-colors hover:bg-neon/20"
                  >
                    <Icon className="size-5" />
                  </a>
                ))}
              </div>
            </div>

            <form className="card-glow rounded-2xl p-6 sm:p-8" onSubmit={(e) => e.preventDefault()}>
              <div className="grid gap-5">
                <div>
                  <label htmlFor="name" className="text-sm font-medium">
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Your name"
                    className="mt-2 w-full rounded-lg border border-border bg-secondary px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-neon focus:outline-none focus:ring-1 focus:ring-neon"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    className="mt-2 w-full rounded-lg border border-border bg-secondary px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-neon focus:outline-none focus:ring-1 focus:ring-neon"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    placeholder="Tell us about your project..."
                    className="mt-2 w-full rounded-lg border border-border bg-secondary px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-neon focus:outline-none focus:ring-1 focus:ring-neon"
                  />
                </div>
                <button
                  type="submit"
                  className="btn-magenta inline-flex items-center justify-center gap-2 rounded-lg px-6 py-2.5 text-sm font-semibold"
                >
                  Send Message <Send className="size-4" />
                </button>
              </div>
            </form>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-border px-6 py-8 sm:px-10">
          <div className="flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
            <span className="font-display text-xl font-extrabold italic tracking-tight text-glow">
              VexoTeamX
            </span>
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} VexoTeamX. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-muted-foreground">
              <a href="#" className="transition-colors hover:text-neon">
                Privacy
              </a>
              <a href="#" className="transition-colors hover:text-neon">
                Terms
              </a>
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}
