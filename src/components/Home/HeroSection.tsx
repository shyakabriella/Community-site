import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${heroBg})`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-wild-charcoal/30 via-wild-charcoal/10 to-wild-charcoal/50" />
      </div>

      {/* Hero text */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-heading font-medium leading-tight text-primary-foreground animate-fade-in-up">
          Nurturing resilient communities,
          <br />
          conserving wild places
        </h1>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/60 rounded-full flex items-start justify-center pt-2">
          <div className="w-1.5 h-1.5 bg-primary-foreground/80 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
