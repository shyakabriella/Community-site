const RebrandSection = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[600px]">
        {/* Image side */}
        <div className="relative h-80 lg:h-auto">
          <img
            src="https://res.cloudinary.com/wild-impact/images/v1732541847/South-America/Ecuador/South-America-Ecuador-rainforest-experiences-cloud-forest-aerial/South-America-Ecuador-rainforest-experiences-cloud-forest-aerial.jpg?_i=AA"
            alt="Aerial view of cloud forest in Ecuador"
            className="absolute inset-0 w-full h-full object-cover"
            loading="lazy"
          />
        </div>

        {/* Content side */}
        <div className="bg-wild-earth p-10 md:p-16 lg:p-20 flex flex-col justify-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-medium leading-tight text-primary-foreground mb-6">
            Africa Foundation has gone global
          </h2>
          <p className="text-base md:text-lg font-body font-light leading-relaxed text-primary-foreground/80 mb-4">
            Our name change from Africa Foundation to Wild Impact as of July 2024 marks our expansion
            beyond Africa, to Asia and South America, enabling us to grow and deepen our global impact
            in partnership with &Beyond.
          </p>
          <p className="text-base md:text-lg font-body font-light leading-relaxed text-primary-foreground/80 mb-8">
            While our brand is changing, our trusted methodology will continue to anchor our work and
            inform all our impact activities.
          </p>
          <a
            href="#why-wild-impact"
            className="inline-flex items-center justify-center self-start px-8 py-3 border border-primary-foreground/60 text-primary-foreground font-body text-sm font-medium tracking-wider uppercase transition-all duration-300 hover:bg-primary-foreground/10"
          >
            Read More
          </a>
        </div>
      </div>
    </section>
  );
};

export default RebrandSection;
