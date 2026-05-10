import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";
import experienceData from "../data/experience";

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);
  return isMobile;
}

function TimelineItem({ item, index }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <div
      ref={ref}
      className={`timeline__item ${index % 2 === 0 ? "timeline__item--left" : "timeline__item--right"}`}
    >
      <div className="timeline__dot" />
      <motion.div
        className="timeline__card"
        initial={{ opacity: 0, x: index % 2 === 0 ? -60 : 60 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
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
      </motion.div>
    </div>
  );
}

function MobileExperienceCard({ item }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <motion.div
      ref={ref}
      className="exp-mobile__card"
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
    >
      <div className="exp-mobile__dot" />
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
    </motion.div>
  );
}

export default function Experience() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const isMobile = useIsMobile();

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

        {isMobile ? (
          <div className="exp-mobile">
            {experienceData.map((item) => (
              <MobileExperienceCard key={item.id} item={item} />
            ))}
          </div>
        ) : (
          <div className="timeline">
            <div className="timeline__line" />
            {experienceData.map((item, i) => (
              <TimelineItem key={item.id} item={item} index={i} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
