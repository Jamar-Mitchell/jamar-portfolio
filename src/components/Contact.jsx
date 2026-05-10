import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { HiOutlineMail, HiOutlineDocumentDownload } from "react-icons/hi";

const links = [
  {
    icon: FaLinkedinIn,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/jamar-mitchell-456b18b5/",
  },
  {
    icon: FaGithub,
    label: "GitHub",
    href: "https://github.com/jamar-mitchell",
  },
  {
    icon: HiOutlineMail,
    label: "Email",
    href: "mailto:jamarkeanumitchell@gmail.com",
  },
];

export default function Contact() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section id="contact" className="contact" ref={ref}>
      <div className="container">
        <motion.div
          className="contact__inner"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="section-label">Contact</p>
          <h2 className="section-title">Let&apos;s Build Something</h2>
          <p className="contact__desc">
            Whether you have a project in mind, want to collaborate, or just
            want to say hello — my inbox is always open.
          </p>

          <div className="contact__links">
            {links.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="contact__link"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                whileHover={{ y: -4, scale: 1.05 }}
              >
                <link.icon size={22} />
                <span>{link.label}</span>
              </motion.a>
            ))}
          </div>

          <motion.a
            href="/Jamar Mitchell Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--primary contact__resume"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.5 }}
            whileHover={{ scale: 1.04 }}
          >
            <HiOutlineDocumentDownload size={20} />
            Download Resume
          </motion.a>
        </motion.div>

        <footer className="footer">
          <div className="footer__line" />
        </footer>
      </div>
    </section>
  );
}
