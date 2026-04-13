import heroImage from "@/assets/hero-landscape.jpg";

const HeroSectionAbout = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <img
        src={heroImage}
        alt="Conservation landscape with scattered trees"
        className="absolute inset-0 w-full h-full object-cover"
        width={1920}
        height={1080}
      />
      <div className="absolute inset-0 bg-earth-deep/40" />
      <div className="relative z-10 flex items-center justify-center h-full">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading text-primary-foreground font-medium tracking-wide">
          Our Theory of Change
        </h1>
      </div>
    </section>
  );
};

export default HeroSectionAbout;
