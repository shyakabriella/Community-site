const pillars = [
  {
    title: "CONSERVING ECOSYSTEMS",
    description: "Supporting resilient, biodiverse landscapes and seascapes",
    image: "https://wildimpact.earth/wp-content/uploads/sites/13/conserving-ecosystems-helicopter-rhino.jpg",
    link: "#conserving-ecosystems",
  },
  {
    title: "FUTURE FOUNDATIONS",
    description: "Developing community education and healthcare infrastructure",
    image: "https://wildimpact.earth/wp-content/uploads/sites/13/Education-teacher-at-blackboard-e1627656573532.jpg",
    link: "#future-foundations",
  },
  {
    title: "TOMORROW'S LEADERS",
    description: "Unlocking new-generation talent, influence, and potential of young leaders",
    image: "https://res.cloudinary.com/wild-impact/images/t_Website-1920x1080-fill-gravity=auto-Q_Auto=Best/v1727855869/Africa/CLEF-graduation-hat-/CLEF-graduation-hat-.jpg?_i=AA",
    link: "#tomorrows-leaders",
  },
  {
    title: "THRIVING COMMUNITIES",
    description: "Nurturing climate resilience and sustainable livelihoods",
    image: "https://wildimpact.earth/wp-content/uploads/sites/13/hands.jpg",
    link: "#thriving-communities",
  },
];

const PillarsSection = () => {
  return (
    <section className="wild-section">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {pillars.map((pillar, index) => (
          <a
            key={pillar.title}
            href={pillar.link}
            className="group wild-card-hover block"
          >
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg mb-4">
              <img
                src={pillar.image}
                alt={pillar.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-wild-charcoal/60 to-transparent" />
            </div>
            <h3 className="wild-heading-sm mb-2">{pillar.title}</h3>
            <p className="text-sm font-body text-muted-foreground leading-relaxed">
              {pillar.description}
            </p>
            <span className="inline-block mt-3 text-sm font-body font-medium text-primary hover:underline">
              Learn More →
            </span>
          </a>
        ))}
      </div>
    </section>
  );
};

export default PillarsSection;
