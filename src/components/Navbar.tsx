import { useState } from "react";
import { Globe, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

/* ---------------- TYPES ---------------- */
type Landscape = Record<string, string>;
type Landscapes = Record<string, Landscape>;

/* ---------------- DATA ---------------- */
const landscapes: Landscapes = {
  Bhutan: {
    Jigme_Dorji: "/landscapes/bhutan/jigmeDorji",
  },
  Botswana: {
    Okavango_Delta: "/landscapes/botswana/okavangoDelta",
  },
  Chile: {
    Araucania: "/landscapes/chile/araucania",
  },
  Kenya: {
    MasaiMara: "/landscapes/kenya/masaiMara",
  },
  Mozambique: {
    Bazaruto_Archipelago: "/landscapes/mozambique/bazarutoArchipelago",
  },
  Namibia: {
    Sossusvlei: "/landscapes/namibia/sossusvlei",
  },
  SouthAfrica: {
    Greater_Kruger: "/landscapes/southAfrica/greaterKruger",
    IS_imangaliso: "/landscapes/southAfrica/iSimangaliso",
  },
};

/* ---------------- COMPONENT ---------------- */
const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [hoveredCountry, setHoveredCountry] = useState<string | null>(null);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="flex items-center justify-between px-6 md:px-10 py-4">
        
        {/* LOGO */}
        <Link to="/" className="cursor-pointer flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-wild-sunset flex items-center justify-center">
            <svg viewBox="0 0 24 24" className="w-6 h-6 fill-primary-foreground">
              <circle cx="12" cy="12" r="4" />
              {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
                <line
                  key={angle}
                  x1="12"
                  y1="2"
                  x2="12"
                  y2="5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  className="text-primary-foreground"
                  transform={`rotate(${angle} 12 12)`}
                />
              ))}
            </svg>
          </div>

          <div>
            <span className="font-heading text-lg font-semibold tracking-wide text-foreground">
              WILD IMPACT
            </span>
            <span className="hidden md:inline text-xs text-muted-foreground ml-3 tracking-wider">
              Earth · Wildlife · Humankind
            </span>
          </div>
        </Link>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-8">
          
          <Link
            to="/about"
            className="text-sm font-body font-medium text-foreground hover:text-primary transition-colors"
          >
            About us
          </Link>

          <Link
            to="/news"
            className="text-sm font-body font-medium text-foreground hover:text-primary transition-colors"
          >
            News
          </Link>

          {/* DROPDOWN */}
          <div className="relative group">
            <button className="flex items-center gap-2 text-sm font-body font-medium text-foreground hover:text-primary transition-colors">
              <Globe className="w-4 h-4" />
              Our Landscapes
            </button>

            <div className="absolute left-0 mt-3 bg-background border border-border rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity">
              {Object.keys(landscapes).map((country) => (
                <div
                  key={country}
                  className="relative px-4 py-2 hover:bg-secondary cursor-pointer"
                  onMouseEnter={() => setHoveredCountry(country)}
                  onMouseLeave={() => setHoveredCountry(null)}
                >
                  {country}

                  {hoveredCountry === country && (
                    <div className="absolute top-0 left-full -ml-px bg-background border border-border rounded-lg shadow-lg min-w-[180px]">
                      {Object.entries(landscapes[country]).map(([city, url]) => (
                        <Link
                          key={city}
                          to={url}
                          className="block px-3 py-1 text-sm hover:text-yellow-800"
                        >
                          {city}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <a href="#donate" className="wild-btn-primary">
            DONATE
          </a>
        </div>

        {/* MOBILE BUTTON */}
        <button
          className="p-2 text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {mobileOpen && (
        <div className="md:hidden bg-background border-t border-border px-6 py-6 space-y-4">
          <Link to="/about" className="block text-sm font-medium">
            About us
          </Link>

          <Link to="/news" className="block text-sm font-medium">
            News
          </Link>

          <a href="#landscapes" className="block text-sm font-medium">
            Our Landscapes
          </a>

          <a href="#donate" className="wild-btn-primary w-full text-center">
            DONATE
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;