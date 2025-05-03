import { useEffect } from "react";
import { GlowEffect } from "../GlowEffect";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

// Animation variants
const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 40 },
  show: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

function Majors() {
  useEffect(() => {
    GlowEffect({ className: ".majorGlow" });
  }, []);

  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });

  useEffect(() => {
    if (inView) controls.start("show");
  }, [inView, controls]);

  return (
    <div className="center" ref={ref}>
      <motion.h1
        className="headerTitle"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        Majors
      </motion.h1>

      <motion.div
        className="box majors"
        variants={containerVariants}
        initial="hidden"
        animate={controls}
      >
        {[
          { icon: "/icons/cs.svg", label: "computer science" },
          { icon: "/icons/cis.svg", label: "Computer Information Systems" },
          { icon: "/icons/se.svg", label: "Software Engineering" },
          { icon: "/icons/bit.svg", label: "Business Information Technology" },
          { icon: "/icons/cyber.svg", label: "cyber security" },
          { icon: "/icons/ai.svg", label: "artificial intelligence" },
        ].map((major, idx) => (
          <motion.div
            key={idx}
            className={`major majorGlow ${idx % 2 === 1 ? "pc" : idx % 3 === 0 ? "gc" : ""}`}
            variants={itemVariants}
          >
            <img src={major.icon} alt={major.label} />
            {major.label}
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default Majors;
