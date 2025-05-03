import { Link } from "react-router-dom";
import { motion } from "framer-motion";

// Variants for parent container
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
    },
  },
};

// Variants for text elements
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const fadeInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const fadeInRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

function Hero() {
  return (
    <div className="center">
      <motion.img
        className="ball"
        src="/icons/balls/Ellipse 18.png"
        alt=""
        style={{ top: "40%", left: "25%" }}
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.img
        className="ball"
        src="/icons/balls/Ellipse 19.png"
        alt=""
        style={{ top: "30%", right: "8%" }}
        animate={{ x: [0, 15, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.img
        className="ball"
        src="/icons/balls/Ellipse 20.png"
        alt=""
        style={{ top: "22%", left: "12%" }}
        animate={{ y: [0, 25, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.img
        className="ball"
        src="/icons/balls/Ellipse 21.png"
        alt=""
        style={{ top: "20%", right: "15%" }}
        animate={{ x: [0, -15, 0] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.img
        className="ball"
        src="/icons/balls/Ellipse 22.png"
        alt=""
        style={{ top: "15%", right: "25%" }}
        animate={{ y: [0, -30, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.img
        className="ball"
        src="/icons/balls/Ellipse 23.png"
        alt=""
        style={{ top: "15%", left: "15%" }}
        animate={{ x: [0, 20, 0] }}
        transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="box hero"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          className="bubble"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.6 }}
        />
        <motion.h1 variants={fadeInLeft}>
          Welcome to <br />
          <motion.span
            style={{ display: "inline-block" }}
            variants={fadeInRight}
          >
            IT Zone Plus
          </motion.span>{" "}
          Website
        </motion.h1>

        <motion.p variants={fadeInUp}>
          The first service team at the Faculty of Information Technology at the
          Hashemite University was established in 2015
        </motion.p>

        <motion.div
          variants={fadeInUp}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link to={"/about"} className="btn">
            Read More
          </Link>
        </motion.div>
      </motion.div>

      <motion.div
        className="box heroImage"
        initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ delay: 1.2, duration: 1, ease: "easeOut" }}
      >
        <motion.img
          className="img"
          src="/hero.png"
          alt=""
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.7, duration: 0.8 }}
        />
        <motion.div
          className="btn btn2"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 2, duration: 0.6 }}
        >
          <img src="/icons/team.svg" alt="" />
          Our team
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Hero;
