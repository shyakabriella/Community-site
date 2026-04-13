import { useEffect, useState, useRef } from "react";

const stats = [
  { value: 3, label: "CONTINENTS" },
  { value: 9, label: "LANDSCAPES" },
  { value: 85, label: "COMMUNITIES" },
];

const useCountUp = (target: number, duration = 2000, startCounting: boolean) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!startCounting) return;
    let start = 0;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [target, duration, startCounting]);

  return count;
};

const StatItem = ({ value, label, startCounting }: { value: number; label: string; startCounting: boolean }) => {
  const count = useCountUp(value, 2000, startCounting);
  return (
    <div className="text-center">
      <div className="text-5xl md:text-7xl font-heading font-bold text-foreground mb-2">
        {count}
      </div>
      <div className="wild-heading-sm">{label}</div>
    </div>
  );
};

const ImpactStats = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="wild-section" ref={ref}>
      <h2 className="wild-heading-lg text-center mb-16">Our sphere of impact</h2>
      <div className="grid grid-cols-3 gap-8 max-w-3xl mx-auto mb-16">
        {stats.map((stat) => (
          <StatItem key={stat.label} {...stat} startCounting={visible} />
        ))}
      </div>
      <div className="max-w-4xl mx-auto">
        <img
          src="https://wildimpact.earth/wp-content/uploads/sites/13/World-of-WI-Map_presentation-slide.png"
          alt="Wild Impact global map showing our areas of operation"
          className="w-full h-auto"
          loading="lazy"
        />
      </div>
    </section>
  );
};

export default ImpactStats;
