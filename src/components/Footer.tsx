const Footer = () => {
  return (
    <footer className="bg-wild-charcoal px-6 md:px-12 lg:px-24 py-16">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="font-heading text-xl font-semibold text-primary-foreground mb-4">
              WILD IMPACT
            </h3>
            <p className="text-sm font-body text-primary-foreground/60 leading-relaxed">
              Earth · Wildlife · Humankind
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-xs font-body font-semibold tracking-[0.2em] uppercase text-primary-foreground/60 mb-4">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {["About us", "Our Landscapes", "Theory of Change", "News", "Contact"].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-sm font-body text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-body font-semibold tracking-[0.2em] uppercase text-primary-foreground/60 mb-4">
              Get in Touch
            </h4>
            <p className="text-sm font-body text-primary-foreground/80 leading-relaxed mb-4">
              Join us in our mission to conserve wild places and nurture resilient communities.
            </p>
            <a href="#donate" className="inline-flex items-center justify-center px-8 py-3 bg-wild-sunset text-primary-foreground font-body text-sm font-medium tracking-wider uppercase transition-all duration-300 hover:bg-wild-gold">
              DONATE
            </a>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 pt-8">
          <p className="text-xs font-body text-primary-foreground/40 text-center">
            © {new Date().getFullYear()} Wild Impact. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
