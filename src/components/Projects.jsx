import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FiExternalLink } from "react-icons/fi";
import projects from "../data/projects";

export default function Projects() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 });

  return (
    <section id="projects" className="projects" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="section-label">Portfolio</p>
          <h2 className="section-title">Projects I&apos;ve Shipped</h2>
        </motion.div>

        <div className="projects__grid">
          {projects.map((project, i) => (
            <motion.div
              className="project-card"
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -6 }}
            >
              <div className="project-card__body">
                <div className="project-card__header">
                  <h3 className="project-card__title">{project.title}</h3>
                  <span className="project-card__category">
                    {project.category}
                  </span>
                </div>

                <p className="project-card__desc">{project.description}</p>

                <div className="project-card__metrics">
                  {project.metrics.map((m) => (
                    <span className="project-card__metric" key={m}>
                      {m}
                    </span>
                  ))}
                </div>

                <div className="project-card__tags">
                  {project.tags.map((tag) => (
                    <span className="tag" key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>

                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-card__link"
                  >
                    <FiExternalLink size={16} />
                    <span>Visit Site</span>
                  </a>
                )}
              </div>

              <div className={`project-card__image${project.imageFit === 'cover' ? ' project-card__image--cover' : ''}`}>
                <img src={project.image} alt={project.title} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
