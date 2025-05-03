import { useEffect, useRef, useState } from "react";

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
    if (!inView || count >= target) return;

    const duration = 2000;
    const stepTime = 20;
    const steps = Math.floor(duration / stepTime);
    const increment = Math.max(Math.ceil(target / steps), 1);

    const interval = setInterval(() => {
      setCount((prev) => {
        const next = prev + increment;
        if (next >= target) {
          clearInterval(interval);
          return target;
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

function Achievements({ data }: Props) {
  return (
    <div className="center p150" id="counter">
      <div className="bubble"></div>

      <h1 className="headerTitle">Achievements</h1>

      {data && (
        <div className="box cards">
          <div className="card">
            <div className="iconInner">
              <img src="/icons/globe.png" alt="" />
            </div>
            <Counter target={data.visitors || 4} />
            <p>Weekly site visitors</p>
          </div>

          <div className="card">
            <div className="iconInner">
              <img src="/icons/books.png" alt="" />
            </div>
            <Counter target={data.courseStudy || 10} />
            <p>University course with study materials</p>
          </div>

          <div className="card">
            <div className="iconInner">
              <img src="/icons/group.png" alt="" />
            </div>
            <Counter target={data.volunteer || 70} />
            <p>Volunteer</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Achievements;
