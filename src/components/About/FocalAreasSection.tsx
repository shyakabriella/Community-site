import ecosystemsImage from "@/assets/ecosystems.jpg";
import educationImage from "@/assets/education.jpg";
import leadersImage from "@/assets/leaders.jpg";
import communityImage from "@/assets/community.jpg";

const focalAreas = [
  {
    title: "Conserving Ecosystems",
    image: ecosystemsImage,
    alt: "Elephants in savanna at sunset",
  },
  {
    title: "Future Foundations",
    image: educationImage,
    alt: "Children in rural classroom",
  },
  {
    title: "Tomorrow's Leaders",
    image: leadersImage,
    alt: "Graduate celebrating",
  },
  {
    title: "Thriving Communities",
    image: communityImage,
    alt: "Community hands joined together",
  },
];

const FocalAreasSection = () => {
  return (
    <section className="bg-background py-12 md:py-20">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 mb-12">
        <h3 className="font-heading text-2xl md:text-3xl font-medium text-foreground text-center mb-6">
          Our Theory of Change
        </h3>
        <p className="text-base md:text-lg text-muted-foreground leading-relaxed font-body text-center">
          Our Theory of Change recognises that resilient communities are needed to conserve earth's wild places, and that conserved wild places ensure resilience for humankind. Our work is structured around four focal areas.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
        {focalAreas.map((area) => (
          <div key={area.title} className="relative group overflow-hidden cursor-pointer">
            <img
              src={area.image}
              alt={area.alt}
              className="w-full aspect-square object-cover transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
              width={960}
              height={960}
            />
            <div className="absolute inset-0 bg-earth-deep/50 group-hover:bg-earth-deep/60 transition-colors duration-500" />
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
              <h4 className="font-heading text-xl md:text-2xl text-primary-foreground font-medium tracking-wide">
                {area.title}
              </h4>
              <span className="text-sm text-primary-foreground/80 font-body underline underline-offset-4 group-hover:text-primary-foreground transition-colors">
                Learn more
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FocalAreasSection;
