const landscapes = [
  {
    country: "Chile",
    name: "Araucanía",
    image: "https://wildimpact.earth/wp-content/uploads/sites/13/Chile-Araucania-trees-with-pattern.png",
    link: "#araucania",
  },
  {
    country: "Mozambique",
    name: "Bazaruto Archipelago",
    image: "https://wildimpact.earth/wp-content/uploads/sites/13/Mozambique-Bazaruto-Archipelago-landscape-with-pattern.png",
    link: "#bazaruto",
  },
  {
    country: "Punakha | Bhutan",
    name: "Jigme Dorji",
    image: "https://wildimpact.earth/wp-content/uploads/sites/13/Bhutan-Jigme-Dorji-landscape-with-pattern.png",
    link: "#jigme-dorji",
  },
  {
    country: "South Africa",
    name: "Greater iSimangaliso",
    image: "https://wildimpact.earth/wp-content/uploads/sites/13/isimagaliso-giraffe-zebra.jpg",
    link: "#isimangaliso",
  },
  {
    country: "Tanzania",
    name: "Lake Manyara",
    image: "https://wildimpact.earth/wp-content/uploads/sites/13/Tanzania-Lake-Manyara-landscape-with-pattern.png",
    link: "#lake-manyara",
  },
  {
    country: "Tanzania",
    name: "Ngorongoro Crater",
    image: "https://wildimpact.earth/wp-content/uploads/sites/13/Tanzania-Ngorongoro-landscape-with-pattern.png",
    link: "#ngorongoro",
  },
  {
    country: "Tanzania",
    name: "Northern Serengeti | Pololeti",
    image: "https://wildimpact.earth/wp-content/uploads/sites/13/Tanzania-Northern-Serengeti-trees-with-pattern.png",
    link: "#northern-serengeti",
  },
  {
    country: "Tanzania",
    name: "West and Central Serengeti",
    image: "https://wildimpact.earth/wp-content/uploads/sites/13/Tanzania-Western-Serengeti-landscape-with-pattern.png",
    link: "#western-serengeti",
  },
  {
    country: "Tanzania",
    name: "Mnemba Island",
    image: "https://wildimpact.earth/wp-content/uploads/sites/13/mnemba.jpg",
    link: "#mnemba",
  },
];

const LandscapesGrid = () => {
  return (
    <section id="landscapes" className="wild-section bg-secondary">
      <h2 className="wild-heading-lg text-center mb-12">
        Discover our landscapes and seascapes
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {landscapes.map((landscape) => (
          <a
            key={landscape.name}
            href={landscape.link}
            className="group block overflow-hidden rounded-xl wild-card-hover"
          >
            <div className="relative aspect-[3/2] overflow-hidden">
              <img
                src={landscape.image}
                alt={`${landscape.name}, ${landscape.country}`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-wild-charcoal/70 via-wild-charcoal/20 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-xs font-body tracking-wider text-primary-foreground/80 mb-1">
                  {landscape.country}
                </p>
                <h3 className="text-lg font-heading font-semibold text-primary-foreground">
                  {landscape.name}
                </h3>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default LandscapesGrid;
