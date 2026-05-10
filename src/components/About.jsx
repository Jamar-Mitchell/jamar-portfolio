import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const stats = [
  { value: "7+", label: "Years Experience" },
  { value: "6+", label: "Projects Delivered" },
  { value: "40%", label: "QA Cycle Reduction" },
  { value: "3", label: "Industries" },
];

export default function About() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section id="about" className="about" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="section-label">About Me</p>
          <h2 className="section-title">Engineer. Founder. Creative.</h2>
        </motion.div>

        <div className="about__grid">
          <motion.div
            className="about__bio"
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <p>
              I&apos;m a Software Engineer at{" "}
              <a
                href="https://microsoft.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <strong>Microsoft</strong>
              </a>{" "}
              with a passion for building products that make a difference.
              Beyond the day job, I co-founded{" "}
              <a
                href="https://blacktagdevs.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <strong>BlackTagDevs</strong>
              </a>{" "}
              — a creative tech agency delivering full-stack solutions for
              startups and enterprises — and{" "}
              <a
                href="https://rendezview.app"
                target="_blank"
                rel="noopener noreferrer"
              >
                <strong>RendezView</strong>
              </a>
              , an AI-powered event planning platform.
            </p>
            <p>
              My work lives at the intersection of engineering, design, and
              entrepreneurship. I believe in building technology that serves
              communities, creates opportunity, and looks great doing it.
            </p>
            <p>
              When I&apos;m not writing code or designing interfaces, you can
              find me mentoring aspiring developers, supporting HBCU
              entrepreneurs, or architecting the next big thing with my team.
            </p>
          </motion.div>

          <motion.div
            className="about__stats"
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            {stats.map((stat, i) => (
              <div className="about__stat" key={i}>
                <span className="about__stat-value">{stat.value}</span>
                <span className="about__stat-label">{stat.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
