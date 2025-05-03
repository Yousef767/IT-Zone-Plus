import { useEffect } from "react";
import { GlowEffect } from "../GlowEffect";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

// Variants (خففنا الحركة والمدة)
const fadeInUp = {
  hidden: { opacity: 0, y: 15 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.4, ease: "easeOut" },
  }),
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: { delay: i * 0.1, duration: 0.4 },
  }),
};

const slideInLeft = {
  hidden: { opacity: 0, x: -25 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.1, duration: 0.4 },
  }),
};

const slideInRight = {
  hidden: { opacity: 0, x: 25 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.1, duration: 0.4 },
  }),
};


function ITLibrary() {
  useEffect(() => {
    GlowEffect({ className: ".glow" });
  }, []);

  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [inView, controls]);

  return (
    <div className="center" ref={ref}>
      <div className="bubble itbubble"></div>
      <motion.div
        className="box it"
        initial="hidden"
        animate={controls}
        variants={{}}
      >
        {/* Left Section */}
        <motion.div className="left">
          <motion.h1 variants={fadeInUp} custom={0}>IT Library</motion.h1>
          <motion.p variants={fadeInUp} custom={1}>
            Where you can level up your skills
          </motion.p>

          <motion.div className="c w350 glow" variants={slideInLeft} custom={2}>
            <div className="p30Box pb0 gap0">
              <motion.img
                className="w100p"
                src="/icons/ps.png"
                alt=""
                variants={scaleIn}
                custom={3}
              />
              <ul>
                {["Beginner-friendly", "Step-by-step levels", "Interactive challenges", "Team-work skills"].map(
                  (text, i) => (
                    <motion.li key={i} variants={fadeInUp} custom={i + 4}>
                      <img src="/icons/check.svg" alt="" /> {text}
                    </motion.li>
                  )
                )}
              </ul>
              <motion.img
                className="w90p"
                src="/icons/ps-icon.png"
                alt=""
                variants={scaleIn}
                custom={8}
              />
            </div>
          </motion.div>
        </motion.div>

        {/* Right Section */}
        <div className="right">
          <motion.div className="c w100p glow" variants={slideInRight} custom={1}>
            <div className="p30Box textLeft z2">
              <motion.h1 variants={fadeInUp} custom={2}>Road Maps</motion.h1>
              <motion.p variants={fadeInUp} custom={3}>
                Your guide to success starts here explore the road maps
              </motion.p>
            </div>
            <motion.img
              className="road"
              src="/icons/road.png"
              alt=""
              variants={scaleIn}
              custom={4}
            />
          </motion.div>

          <div className="square">
            <div className="two">
              <motion.div className="c glow" variants={scaleIn} custom={5}>
                <img className="artImg" src="/icons/art.png" alt="" />
              </motion.div>

              <motion.div className="c glow" variants={slideInLeft} custom={6}>
                <div className="p30Box tl">
                  <motion.h1 variants={fadeInUp} custom={7}>IT Books</motion.h1>
                </div>
                <motion.img
                  className="itBooks"
                  src="/icons/itBooks.png"
                  alt=""
                  variants={scaleIn}
                  custom={8}
                />
              </motion.div>
            </div>

            <motion.div className="c w50p glow flexStart" variants={slideInRight} custom={9}>
              <div className="p30Box textLeft textCenter">
                <motion.h1 variants={fadeInUp} custom={10}>Programs</motion.h1>
                <motion.p variants={fadeInUp} custom={11}>
                  most essential and widely used software for IT and university needs
                </motion.p>
              </div>
              <motion.img
                className="programs"
                src="/icons/programs.png"
                alt=""
                variants={scaleIn}
                custom={12}
              />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default ITLibrary;
