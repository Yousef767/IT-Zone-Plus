import { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface AchievementsData {
  visitors?: number;
  courseStudy?: number;
  volunteer?: number;
}
interface Props {
  data: AchievementsData;
}

const Counter = ({ target = 0 }: { target?: number }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  useEffect(() => {
    if (!inView || count >= (target ?? 0)) return;

    const duration = 2000;
    const stepTime = 20;
    const steps = Math.floor(duration / stepTime);
    const increment = Math.max(Math.ceil((target ?? 0) / steps), 1);

    const interval = setInterval(() => {
      setCount((prev) => {
        const next = prev + increment;
        if (next >= (target ?? 0)) {
          clearInterval(interval);
          return target ?? 0;
        }
        return next;
      });
    }, stepTime);

    return () => clearInterval(interval);
  }, [inView, target, count]);

  return (
    <div ref={ref}>
      <h1>{count} +</h1>
    </div>
  );
};

// Animation variants
const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

function Achievements({ data }: Props) {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });

  useEffect(() => {
    if (inView) controls.start("show");
  }, [inView, controls]);

  return (
    <div className="center p150" id="counter" ref={ref}>
      <div className="bubble"></div>
      <motion.h1
        className="headerTitle"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        Achievements
      </motion.h1>

      {data && (
        <motion.div
          className="box cards"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          <motion.div className="card" variants={cardVariants}>
            <div className="iconInner">
              <img src="/icons/globe.png" alt="" />
            </div>
            <Counter target={data.visitors || 4} />
            <p>Weekly site visitors</p>
          </motion.div>

          <motion.div className="card" variants={cardVariants}>
            <div className="iconInner">
              <img src="/icons/books.png" alt="" />
            </div>
            <Counter target={data.courseStudy || 10} />
            <p>University course with study materials</p>
          </motion.div>

          <motion.div className="card" variants={cardVariants}>
            <div className="iconInner">
              <img src="/icons/group.png" alt="" />
            </div>
            <Counter target={data.volunteer || 70} />
            <p>Volunteer</p>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}

export default Achievements;
