import { motion, useScroll, useTransform } from "framer-motion";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import headshot from "../assets/headshot.jpeg";

export default function Hero() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 600], [0, -120]);
  const y2 = useTransform(scrollY, [0, 600], [0, -60]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);

  return (
    <section id="home" className="hero">
      {/* Background headshot — large, faded into the dark */}
      <motion.div
        className="hero__bg-image"
        style={{ y: y2 }}
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
      >
        <img src={headshot} alt="" aria-hidden="true" />
      </motion.div>

      {/* Smoke / mist overlays */}
      <div className="hero__smoke hero__smoke--1" />
      <div className="hero__smoke hero__smoke--2" />
      <div className="hero__smoke hero__smoke--3" />
      <div className="hero__overlay" />

      <div className="hero__content container">
        <motion.div
          className="hero__text"
          style={{ y: y1, opacity }}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="hero__greeting">Hi, I&apos;m</p>
          <h1 className="hero__name">Jamar Mitchell</h1>
          <h2 className="hero__title">Software Engineer & Founder</h2>
          <div className="hero__title-socials">
            <a
              href="https://www.linkedin.com/in/jamar-mitchell-456b18b5/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://github.com/jamar-mitchell"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
          </div>
          <p className="hero__desc">
            Building products at Microsoft by day, scaling ventures through
            BlackTagDevs and RendezView by night. I craft digital experiences at
            the intersection of engineering, design, and entrepreneurship.
          </p>
          <div className="hero__actions">
            <a href="#projects" className="btn btn--primary">
              View My Work
            </a>
            <a href="#contact" className="btn btn--outline">
              Let&apos;s Talk
            </a>
          </div>

          <div className="hero__socials">
            <a
              href="https://www.linkedin.com/in/jamar-mitchell-456b18b5/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://github.com/jamar-mitchell"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="hero__scroll-indicator"
        animate={{ y: [0, 12, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <span />
      </motion.div>
    </section>
  );
}
