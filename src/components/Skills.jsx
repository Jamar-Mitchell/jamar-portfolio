import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  SiReact,
  SiTypescript,
  SiJavascript,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiPython,
  SiFirebase,
  SiPostgresql,
  SiGit,
  SiDocker,
  SiVercel,
  SiFigma,
  SiFramer,
  SiVite,
  SiVitest,
  SiTestinglibrary,
  SiPosthog,
  SiSentry,
  SiStorybook,
  SiGooglecloud,
  SiGithubactions,
  SiRedis,
  SiCelery,
  SiTurborepo,
  SiRailway,
} from "react-icons/si";
import { VscAzure } from "react-icons/vsc";
import skills from "../data/skills";

const iconMap = {
  React: SiReact,
  "React Native": SiReact,
  TypeScript: SiTypescript,
  JavaScript: SiJavascript,
  "Next.js": SiNextdotjs,
  "Tailwind CSS": SiTailwindcss,
  "Framer Motion": SiFramer,
  "HTML/CSS": null,
  "Node.js": SiNodedotjs,
  Express: SiNodedotjs,
  Python: SiPython,
  Firebase: SiFirebase,
  PostgreSQL: SiPostgresql,
  "REST APIs": null,
  Git: SiGit,
  Azure: VscAzure,
  Docker: SiDocker,
  Vercel: SiVercel,
  Vite: SiVite,
  "CI/CD": null,
  Vitest: SiVitest,
  Playwright: null,
  "Testing Library": SiTestinglibrary,
  PostHog: SiPosthog,
  Sentry: SiSentry,
  Storybook: SiStorybook,
  "Google Cloud": SiGooglecloud,
  "GitHub Actions": SiGithubactions,
  Redis: SiRedis,
  Celery: SiCelery,
  Turborepo: SiTurborepo,
  Railway: SiRailway,
  Figma: SiFigma,
  "UI/UX Design": null,
  "Design Systems": null,
  Branding: null,
  Prototyping: null,
};

const categoryLabels = {
  frontend: "Frontend",
  backend: "Backend",
  tools: "Tools & Platforms",
  testing: "Testing & Analytics",
  infrastructure: "Infrastructure",
  design: "Design",
};

export default function Skills() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="skills" className="skills" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="section-label">Skills</p>
          <h2 className="section-title">Tech Stack & Expertise</h2>
        </motion.div>

        <div className="skills__categories">
          {Object.entries(skills).map(([category, items], ci) => (
            <motion.div
              className="skills__category"
              key={category}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: ci * 0.1 }}
            >
              <h3 className="skills__category-title">
                {categoryLabels[category]}
              </h3>
              <div className="skills__items">
                {items.map((skill, si) => {
                  const Icon = iconMap[skill];
                  return (
                    <motion.div
                      className="skill-chip"
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={inView ? { opacity: 1, scale: 1 } : {}}
                      transition={{
                        duration: 0.3,
                        delay: ci * 0.1 + si * 0.05,
                      }}
                      whileHover={{
                        scale: 1.08,
                        backgroundColor: "rgba(0, 212, 255, 0.1)",
                      }}
                    >
                      {Icon && <Icon className="skill-chip__icon" />}
                      <span>{skill}</span>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
