import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import experienceData from "../data/experience";

function TimelineItem({ item, index }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <motion.div
      ref={ref}
      className={`timeline__item ${index % 2 === 0 ? "timeline__item--left" : "timeline__item--right"}`}
      initial={{ opacity: 0, x: index % 2 === 0 ? -60 : 60 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6 }}
    >
      <div className="timeline__dot" />
      <div className="timeline__card">
        <span className="timeline__period">{item.period}</span>
        <h3 className="timeline__role">{item.role}</h3>
        <h4 className="timeline__company">{item.company}</h4>
        <p className="timeline__desc">{item.description}</p>
        <div className="timeline__tags">
          {item.tags.map((tag) => (
            <span className="tag" key={tag}>
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function Experience() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="experience" className="experience" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="section-label">Experience</p>
          <h2 className="section-title">Where I&apos;ve Been Building</h2>
        </motion.div>

        <div className="timeline">
          <div className="timeline__line" />

          {experienceData.map((item, i) => (
            <TimelineItem key={item.id} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
