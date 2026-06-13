import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  BriefcaseBusiness,
  CalendarDays,
  Camera,
  Check,
  ChevronRight,
  Code2,
  FileText,
  GitBranch,
  Link,
  MessageCircle,
  Quote,
  Send,
  Sparkles,
  Trophy,
  Users,
} from "lucide-react";
import { CommunityPanel } from "@/components/community-panel";
import { FAQ } from "@/components/faq";
import { Logo } from "@/components/logo";
import { Counter, Reveal } from "@/components/motion";
import { Navbar } from "@/components/navbar";

const offers = [
  {
    number: "01",
    icon: BriefcaseBusiness,
    title: "Internship Guidance",
    text: "Verified openings, application playbooks, resume feedback, and honest insights from students who've done it.",
    meta: "Opportunities · Referrals · Reviews",
    color: "blue",
  },
  {
    number: "02",
    icon: Code2,
    title: "DSA Grind",
    text: "Structured challenges, daily accountability, problem breakdowns, and peers who make consistency feel possible.",
    meta: "Daily POTD · Streaks · Solutions",
    color: "violet",
  },
  {
    number: "03",
    icon: BookOpen,
    title: "Coding Notes",
    text: "Community-vetted notes, roadmaps, cheat sheets, and explainers that save you hours of scattered searching.",
    meta: "Curated · Practical · Searchable",
    color: "cyan",
  },
  {
    number: "04",
    icon: Trophy,
    title: "Events & Hackathons",
    text: "Discover worthwhile events early, form teams fast, and build projects with ambitious people across campuses.",
    meta: "Team up · Ship fast · Win together",
    color: "pink",
  },
];

const schedule = [
  ["MON", "Internship Updates", "Fresh roles, deadlines & application strategy", BriefcaseBusiness],
  ["TUE", "DSA Challenge", "One problem. Multiple approaches. Zero excuses.", Code2],
  ["WED", "Resume Review", "Specific feedback that gets your work noticed", FileText],
  ["THU", "Coding Notes", "A focused learning drop from the community", BookOpen],
  ["FRI", "Mock Interviews", "Practice out loud. Improve without the pressure.", MessageCircle],
  ["WEEKEND", "Hackathons & Events", "Find a team, build something, tell the story", Trophy],
];

const testimonials = [
  {
    quote:
      "The internship alerts are great, but the real unlock was seeing how other students prepare. I stopped guessing and started following a system.",
    name: "Ananya Sharma",
    role: "SWE Intern · Bengaluru",
    initials: "AS",
  },
  {
    quote:
      "I went from solving DSA randomly to a 50-day streak. The Tuesday challenges and solution discussions made consistency genuinely fun.",
    name: "Kabir Mehta",
    role: "CSE '27 · Pune",
    initials: "KM",
  },
  {
    quote:
      "Found my hackathon team here on a Friday night. We shipped in 36 hours, made the finals, and we're still building together.",
    name: "Ishita Rao",
    role: "Product Builder · Delhi",
    initials: "IR",
  },
];

export default function Home() {
  return (
    <main id="top">
      <Navbar />

      <section className="hero section">
        <div className="hero-art" />
        <div className="hero-orb orb-one" />
        <div className="hero-orb orb-two" />
        <div className="grid-overlay" />
        <div className="container hero-inner">
          <Reveal className="hero-copy">
            <div className="eyebrow">
              <span className="eyebrow-dot" />
              Built by students, for students
              <ChevronRight size={14} />
            </div>
            <h1>
              Helping students
              <br />
              become <span className="gradient-text">industry ready.</span>
            </h1>
            <p className="hero-sub">
              Internships, DSA, coding prep, hackathons, peer learning, and
              career growth — all in one active student community.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#join">
                <MessageCircle size={18} />
                Join WhatsApp community
                <ArrowUpRight size={17} />
              </a>
              <a className="button button-ghost" href="#offer">
                Explore resources <ArrowRight size={17} />
              </a>
            </div>
            <div className="hero-trust">
              <div className="avatar-stack hero-avatars">
                <i>R</i>
                <i>M</i>
                <i>A</i>
                <i>K</i>
              </div>
              <div>
                <div className="stars">★★★★★</div>
                <span>Loved by 1,200+ ambitious students</span>
              </div>
            </div>
          </Reveal>
          <div className="hero-visual">
            <div className="float-tag tag-one">
              <span>
                <Check size={13} />
              </span>
              Internship unlocked
            </div>
            <CommunityPanel />
            <div className="float-tag tag-two">
              <Sparkles size={14} />
              +24 resources today
            </div>
          </div>
        </div>
        <div className="container hero-stats">
          <div>
            <strong>
              <Counter value={1200} suffix="+" />
            </strong>
            <span>active students</span>
          </div>
          <div>
            <strong>
              <Counter value={48} suffix="K+" />
            </strong>
            <span>problems solved</span>
          </div>
          <div>
            <strong>
              <Counter value={320} suffix="+" />
            </strong>
            <span>opportunities shared</span>
          </div>
          <div className="status-stat">
            <i />
            <span>
              Community status
              <b>Very active</b>
            </span>
          </div>
        </div>
      </section>

      <section className="logo-strip" aria-label="Community focus areas">
        <div className="marquee">
          <span>LEARN IN PUBLIC</span><i>✦</i>
          <span>BUILD CONSISTENTLY</span><i>✦</i>
          <span>GROW TOGETHER</span><i>✦</i>
          <span>SHIP REAL WORK</span><i>✦</i>
          <span>LEARN IN PUBLIC</span><i>✦</i>
          <span>BUILD CONSISTENTLY</span><i>✦</i>
        </div>
      </section>

      <section className="section offer-section" id="offer">
        <div className="container">
          <Reveal className="section-heading split-heading">
            <div>
              <span className="kicker">THE LAUNCHPAD EDGE</span>
              <h2>Everything you need to move <span>forward.</span></h2>
            </div>
            <p>
              Less noise, more momentum. Practical support for every stage of
              your student-to-industry journey.
            </p>
          </Reveal>
          <div className="offer-grid">
            {offers.map((offer, index) => (
              <Reveal key={offer.title} delay={index * 0.08}>
                <article className={`offer-card ${offer.color}`}>
                  <div className="offer-top">
                    <span className="offer-icon"><offer.icon /></span>
                    <span className="offer-number">{offer.number}</span>
                  </div>
                  <h3>{offer.title}</h3>
                  <p>{offer.text}</p>
                  <div className="offer-meta">
                    {offer.meta}
                    <ArrowUpRight size={16} />
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section experience-section" id="community">
        <div className="container experience-grid">
          <Reveal className="experience-copy">
            <span className="kicker">MORE THAN A GROUP CHAT</span>
            <h2>A community that actually <span>shows up.</span></h2>
            <p>
              Get the energy of a study room, the clarity of a roadmap, and
              the network of a great campus — wherever you are.
            </p>
            <ul className="feature-list">
              <li><span><MessageCircle /></span><div><b>High-signal discussions</b><p>Focused channels, useful answers, zero spam.</p></div></li>
              <li><span><Trophy /></span><div><b>Progress that feels visible</b><p>Streaks, challenges, and community leaderboards.</p></div></li>
              <li><span><Users /></span><div><b>Find your people</b><p>Meet teammates, mentors, and accountability partners.</p></div></li>
            </ul>
            <a className="text-link" href="#join">
              Step inside the community <ArrowRight size={17} />
            </a>
          </Reveal>
          <Reveal className="experience-canvas" delay={0.15}>
            <div className="roadmap-window">
              <div className="window-bar">
                <div className="traffic-lights"><i /><i /><i /></div>
                <span>career-roadmap.fig</span>
                <small>82%</small>
              </div>
              <div className="roadmap-body">
                <div className="roadmap-title">
                  <small>YOUR ROADMAP</small>
                  <b>From campus to career</b>
                  <span>Q3 · 2026</span>
                </div>
                <div className="roadmap-track">
                  {["Foundations", "DSA", "Projects", "Apply", "Interview"].map((item, i) => (
                    <div className={i < 3 ? "complete" : i === 3 ? "current" : ""} key={item}>
                      <i>{i < 3 ? <Check size={12} /> : i + 1}</i>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
                <div className="mini-cards">
                  <div>
                    <span className="mini-icon purple"><Code2 /></span>
                    <small>CURRENT FOCUS</small>
                    <b>Build 2 production projects</b>
                    <span className="progress"><i /></span>
                    <em>68% complete</em>
                  </div>
                  <div>
                    <span className="mini-icon blue"><CalendarDays /></span>
                    <small>NEXT MILESTONE</small>
                    <b>Start applying strategically</b>
                    <p>Opens in 12 days <ArrowRight size={14} /></p>
                  </div>
                </div>
              </div>
            </div>
            <div className="collab-card">
              <div className="avatar-stack"><i>N</i><i>S</i><i>J</i></div>
              <span><b>Team formed!</b> HackBuild &apos;26</span>
              <Check size={16} />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section weekly-section" id="weekly">
        <div className="container">
          <Reveal className="section-heading centered-heading">
            <span className="kicker">A RHYTHM THAT KEEPS YOU MOVING</span>
            <h2>There&apos;s always something <span>worth showing up for.</span></h2>
            <p>Small, consistent actions. Compounding career momentum.</p>
          </Reveal>
          <div className="timeline">
            {schedule.map(([day, title, description, Icon], index) => {
              const ActivityIcon = Icon as typeof Code2;
              return (
                <Reveal className="timeline-item" key={day as string} delay={index * 0.06}>
                  <div className="timeline-day">{day as string}</div>
                  <div className="timeline-dot"><ActivityIcon size={16} /></div>
                  <div className="timeline-content">
                    <b>{title as string}</b>
                    <span>{description as string}</span>
                  </div>
                  <ChevronRight size={17} />
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section stories-section" id="stories">
        <div className="container">
          <Reveal className="section-heading split-heading">
            <div>
              <span className="kicker">REAL PEOPLE. REAL MOMENTUM.</span>
              <h2>Small wins become <span>big stories.</span></h2>
            </div>
            <p>Progress looks different for everyone. The point is not doing it alone.</p>
          </Reveal>
          <div className="testimonial-grid">
            {testimonials.map((testimonial, index) => (
              <Reveal key={testimonial.name} delay={index * 0.1}>
                <article className="testimonial">
                  <Quote />
                  <p>“{testimonial.quote}”</p>
                  <div>
                    <span className="testimonial-avatar">{testimonial.initials}</span>
                    <span><b>{testimonial.name}</b><small>{testimonial.role}</small></span>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
          <Reveal className="stats-band">
            <div><strong><Counter value={1248} suffix="+" /></strong><span>Active students</span></div>
            <div><strong><Counter value={48200} suffix="+" /></strong><span>DSA problems solved</span></div>
            <div><strong><Counter value={186} suffix="+" /></strong><span>Hackathons shared</span></div>
            <div><strong><Counter value={760} suffix="+" /></strong><span>Resources uploaded</span></div>
          </Reveal>
        </div>
      </section>

      <section className="section faq-section" id="faq">
        <div className="container faq-grid">
          <Reveal className="faq-copy">
            <span className="kicker">QUESTIONS, ANSWERED</span>
            <h2>Good to know before you <span>jump in.</span></h2>
            <p>Still curious? Join in and ask us directly. We&apos;re friendly, promise.</p>
            <a className="text-link" href="#join">Talk to the community <ArrowUpRight size={17} /></a>
          </Reveal>
          <Reveal delay={0.1}><FAQ /></Reveal>
        </div>
      </section>

      <section className="section cta-section" id="join">
        <div className="container">
          <Reveal className="cta-card">
            <div className="cta-grid" />
            <div className="cta-glow" />
            <span className="kicker"><i /> YOUR NEXT CHAPTER STARTS HERE</span>
            <h2>Ready to level up<br />your <span>career?</span></h2>
            <p>Join 1,200+ students learning, building, and moving forward together.</p>
            <a className="button button-primary button-large" href="https://chat.whatsapp.com/KJHsHAYEy9k8EnjUfGQJTn" target="_blank" rel="noreferrer">
              <MessageCircle size={20} /> Join the WhatsApp community <ArrowUpRight size={18} />
            </a>
            <small>Free forever <i /> No spam <i /> Leave anytime</small>
          </Reveal>
        </div>
      </section>

      <footer>
        <div className="container footer-main">
          <div className="footer-brand">
            <Logo />
            <p>Helping ambitious students turn consistent effort into career momentum.</p>
            <div className="socials">
              <a href="https://instagram.com" aria-label="Instagram"><Camera /></a>
              <a href="https://linkedin.com" aria-label="LinkedIn"><Link /></a>
              <a href="#join" aria-label="Community updates"><Send /></a>
              <a href="https://github.com" aria-label="GitHub"><GitBranch /></a>
            </div>
          </div>
          <div className="footer-links">
            <div><b>Explore</b><a href="#offer">What we offer</a><a href="#community">Community</a><a href="#weekly">Weekly plan</a><a href="#stories">Stories</a></div>
            <div><b>Resources</b><a href="#offer">DSA roadmap</a><a href="#offer">Internship tracker</a><a href="#offer">Resume guide</a><a href="#offer">Event calendar</a></div>
            <div><b>Community</b><a href="#join">Join WhatsApp</a><a href="#join">Code of conduct</a><a href="#join">Partner with us</a><a href="#faq">FAQ</a></div>
          </div>
        </div>
        <div className="container footer-bottom">
          <span>© 2026 Launchpad Community.</span>
          <span>Made with intent, caffeine, and clean commits.</span>
        </div>
      </footer>
    </main>
  );
}
