import rainforestImage from "@/assets/rainforest-aerial.jpg";
import craneImage from "@/assets/wildlife-crane.jpg";
import MethodologyImage from "@/assets/methodology.png";

const ContentSection = () => {
  return (
    <div className="bg-background">
      {/* Mission Statement */}
      <section className="max-w-4xl mx-auto px-6 lg:px-8 py-16 md:py-20">
        <h2 className="font-heading text-xl md:text-2xl font-medium text-foreground leading-relaxed mb-6">
          Supporting the conservation of natural landscapes and the sustainable
          development of the communities that depend on them
        </h2>
        <p className="text-base md:text-lg text-muted-foreground leading-relaxed font-body">
          Our overall vision is a future where the communities we partner with
          actively advocate for and support the restoration and conservation of
          the landscapes and seascapes we work in — and derive meaningful
          socio-economic benefit from these areas.
        </p>
      </section>

      {/* Our History */}
      <section>
        <h3 className="font-heading text-2xl md:text-3xl font-medium text-foreground text-center mb-10">
          Our History
        </h3>

        <div className="w-full">
          <img
            src={rainforestImage}
            alt="Aerial view of lush rainforest canopy"
            className="w-full h-[50vh] md:h-[60vh] object-cover"
            loading="lazy"
            width={1920}
            height={1080}
          />
        </div>

        <div className="max-w-4xl mx-auto px-6 lg:px-8 py-12 md:py-16">
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed font-body mb-6">
            We are an independent, tax-exempt non-profit organisation dedicated
            to conservation and community empowerment. Founded over three
            decades ago, our roots lie in partnering with communities living
            near protected areas — believing that conservation succeeds only
            when people benefit from it.
          </p>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed font-body">
            Through landmark agreements, land has been returned to its ancestral
            owners while being kept within conservation boundaries. Our partner
            communities have chosen conservation as the best path for their
            land, recognising the long-term benefits this brings.
          </p>
        </div>

        <div className="w-full">
          <img
            src={craneImage}
            alt="Black crane in misty mountain valley"
            className="w-full h-[50vh] md:h-[60vh] object-cover"
            loading="lazy"
            width={1920}
            height={1080}
          />
        </div>

        <div className="max-w-4xl mx-auto px-6 lg:px-8 py-12 md:py-16">
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed font-body mb-8">
            Our vision remains the same after all these years. Our footprint has
            grown to span multiple landscapes and over 70 communities, and our
            sense of urgency has only increased. We've committed to doubling our
            impact:
          </p>
          <ul className="space-y-4 text-base md:text-lg text-muted-foreground font-body">
            <li className="flex gap-3">
              <span className="text-accent font-bold mt-0.5">•</span>
              <span>
                To reach more community residents with quality outcomes
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-accent font-bold mt-0.5">•</span>
              <span>
                To expand our footprint to include landscapes across new
                continents
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-accent font-bold mt-0.5">•</span>
              <span>
                To deepen collaboration with national park authorities,
                governments, and local communities
              </span>
            </li>
          </ul>
        </div>
      </section>

      {/* Our Methodology */}
      <section className="py-12 md:py-16">
        <h3 className="font-heading text-2xl md:text-3xl font-medium text-foreground text-center mb-6">
          Our Methodology
        </h3>
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed font-body text-center mb-10">
            Our work is anchored by a core methodology that encompasses a
            "listen, learn and co-create philosophy" — recognising that it is
            our privilege to work collaboratively with partner communities and
            conservation stakeholders.
          </p>
          <div className="bg-earth-sand rounded-lg p-8 md:p-12 text-center">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center gap-3">
                <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center">
                  <span className="text-accent text-2xl font-heading font-bold">
                    1
                  </span>
                </div>
                <h4 className="font-heading text-lg font-medium text-foreground">
                  Listen
                </h4>
                <p className="text-sm text-muted-foreground font-body">
                  Understand community needs and conservation challenges
                </p>
              </div>
              <div className="flex flex-col items-center gap-3">
                <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center">
                  <span className="text-accent text-2xl font-heading font-bold">
                    2
                  </span>
                </div>
                <h4 className="font-heading text-lg font-medium text-foreground">
                  Learn
                </h4>
                <p className="text-sm text-muted-foreground font-body">
                  Research, assess and develop evidence-based solutions
                </p>
              </div>
              <div className="flex flex-col items-center gap-3">
                <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center">
                  <span className="text-accent text-2xl font-heading font-bold">
                    3
                  </span>
                </div>
                <h4 className="font-heading text-lg font-medium text-foreground">
                  Co-create
                </h4>
                <p className="text-sm text-muted-foreground font-body">
                  Build and implement programs hand in hand with communities
                </p>
              </div>
            </div>
          </div>
          <div className="mt-10">
            <img
              src={MethodologyImage}
              alt="Methodology Image"
              className="w-full h-[400px] object-cover rounded-lg shadow-md"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContentSection;
