import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import btdLogo from "../assets/FullLogo.svg";
import rvLogo from "../assets/rendezview-text-logo.svg";

const ventures = [
  {
    name: "BlackTagDevs",
    role: "Co-Founder & Chief Design Officer",
    description:
      "A creative tech agency delivering full-stack solutions for startups and enterprises. We build products, brands, and digital experiences that move culture forward.",
    highlights: [
      "98% Client Satisfaction",
      "4 Core Team Members",
      "30+ Yrs Combined Experience",
      "6+ Projects Shipped",
    ],
    expertise: [
      "Full-Stack Development",
      "AI Tools & Agents",
      "Product Strategy",
      "Design Systems",
    ],
    logo: btdLogo,
    link: "https://blacktagdevs.com",
  },
  {
    name: "RendezView",
    role: "Co-Founder — Frontend Engineering",
    description:
      "An AI-powered platform transforming event planning from idea to execution in under an hour. Connecting vendors and venues with customers through intelligent matching.",
    highlights: [
      "40% User Interest",
      "$100K+ Potential Bookings",
      "25% Conversion Boost",
      "3 Target Markets",
    ],
    expertise: ["React Native", "AI/ML", "Event Planning", "Marketplace"],
    logo: rvLogo,
    link: "https://rendezview.app",
  },
];

export default function FounderSpotlight() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="ventures" className="ventures" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="section-label">Ventures</p>
          <h2 className="section-title">What I&apos;m Building</h2>
        </motion.div>

        <div className="ventures__grid">
          {ventures.map((v, i) => (
            <motion.a
              href={v.link}
              target="_blank"
              rel="noopener noreferrer"
              className="venture-card"
              key={v.name}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              whileHover={{ y: -6 }}
            >
              <div className="venture-card__header">
                <img src={v.logo} alt={v.name} className="venture-card__logo" />
                <span className="venture-card__role">{v.role}</span>
              </div>

              <p className="venture-card__desc">{v.description}</p>

              <div className="venture-card__highlights">
                {v.highlights.map((h) => (
                  <span className="venture-card__highlight" key={h}>
                    {h}
                  </span>
                ))}
              </div>

              <div className="venture-card__expertise">
                {v.expertise.map((e) => (
                  <span className="tag" key={e}>
                    {e}
                  </span>
                ))}
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
