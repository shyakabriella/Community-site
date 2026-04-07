import React, { useEffect } from "react";

const venues = [
  {
    title: "Lakeview Garden",
    size: "5,005 SQ. FT. | UP TO 350 GUESTS",
    image: "/home1.jpg",
    description:
      "Set against a verdant backdrop with stunning views of a tranquil lake in the foothills of the Sierra Nevada Mountains, the Lakeview Garden is an expansive outdoor venue that exudes storybook charm. The natural beauty creates a serene and romantic setting, perfect for exchanging vows under the sky.",
  },
  {
    title: "Legacy Lodge Patio",
    size: "1,400 SQ. FT. | UP TO 100 GUESTS",
    image: "/home2.jpg",
    description:
      "After gathering to witness your ceremony, guests are invited to enjoy a sophisticated reception on the Legacy Lodge Patio. An ideal setting for mixing and mingling before the official festivities, every detail here is framed by serene lake and lush landscapes.",
  },
  {
    title: "Legacy Lodge",
    size: "3,901 SQ. FT. | UP TO 350 GUESTS",
    image: "/home3.jpg",
    description:
      "For the reception, the spacious Legacy Lodge transforms into a dreamy venue, blending rustic charm with elegant touches. This enchanting space combines breathtaking views with refined design, setting the stage for unforgettable celebrations.",
  },
];

export default function Venues() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#efeee8] text-[#1f1f1f]">
      
      {/* HERO */}
      <section className="relative h-[65vh] overflow-hidden">
        <img
          src="/home4.jpg"
          alt="venues hero"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />

        <div className="relative z-10 flex items-center justify-center h-full text-center">
          <h1
            className="text-white text-[48px] md:text-[80px]"
            style={{ fontFamily: '"Cormorant Garamond", serif' }}
          >
            Venues
          </h1>
        </div>
      </section>

      {/* INTRO */}
      <section className="text-center py-16 px-6">
        <p className="text-[#a88f53] uppercase tracking-[0.2em] text-[13px]">
          Dreamy Wedding Venues Fresno CA
        </p>

        <h2
          className="mt-3 text-[42px] md:text-[60px] text-[#203549]"
          style={{ fontFamily: '"Cormorant Garamond", serif' }}
        >
          Storybook Splendor
        </h2>

        <p className="mt-6 max-w-[700px] mx-auto text-[16px] leading-[1.9] text-[#444]">
          Discover the enchanting beauty of our exclusive wedding venues at the heart
          of a picturesque California ranch near Fresno, CA. Each venue offers a unique
          blend of natural splendor and elegant charm, perfect for creating timeless memories.
        </p>

        <div className="mt-8 flex justify-center gap-4 flex-wrap">
          <button className="bg-[#a88f53] text-white px-8 py-3 uppercase text-sm tracking-wider">
            Take a Tour
          </button>
          <button className="bg-[#a88f53] text-white px-8 py-3 uppercase text-sm tracking-wider">
            See Capacity Chart
          </button>
        </div>
      </section>

      {/* VENUES LIST */}
      <section className="max-w-[1300px] mx-auto px-6 pb-20 space-y-24">
        {venues.map((venue, index) => (
          <div
            key={venue.title}
            className={`grid md:grid-cols-2 gap-10 items-center ${
              index % 2 === 1 ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* IMAGE */}
            <div className={`${index % 2 === 1 ? "order-2 md:order-1" : ""}`}>
              <img
                src={venue.image}
                alt={venue.title}
                className="w-full h-[420px] object-cover"
              />
            </div>

            {/* TEXT */}
            <div className={`${index % 2 === 1 ? "order-1 md:order-2" : ""}`}>
              <h3
                className="text-[34px] md:text-[44px] text-[#203549]"
                style={{ fontFamily: '"Cormorant Garamond", serif' }}
              >
                {venue.title}
              </h3>

              <p className="mt-2 text-[#6a6a6a] uppercase text-[13px] tracking-wider">
                {venue.size}
              </p>

              <p className="mt-6 text-[16px] leading-[1.9] text-[#333]">
                {venue.description}
              </p>
            </div>
          </div>
        ))}
      </section>

      {/* CTA */}
      <section className="bg-[#203549] text-center py-16 px-6">
        <h2
          className="text-white text-[36px] md:text-[52px]"
          style={{ fontFamily: '"Cormorant Garamond", serif' }}
        >
          Let’s Plan Your Perfect Event
        </h2>

        <p className="text-white/80 mt-4 max-w-[600px] mx-auto">
          From intimate gatherings to grand celebrations, we help you create
          unforgettable moments in the perfect setting.
        </p>

        <button className="mt-8 bg-[#a88f53] text-white px-8 py-3 uppercase text-sm tracking-wider">
          Start Planning
        </button>
      </section>
    </div>
  );
}