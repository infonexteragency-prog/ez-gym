import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import logo from "@/assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = ["About", "EMS Training", "Reviews", "Location", "Contact"];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto flex items-center justify-between py-3 px-4">
        <a href="#" className="flex items-center gap-3">
          <img src={logo} alt="EZ Fitness Club" className="h-12 w-auto" />
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase().replace(/\s/g, "-")}`}
              className="font-display text-sm tracking-wider text-muted-foreground hover:text-primary transition-colors"
            >
              {link}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-4">
          <a
            href="tel:+96178995638"
            className="flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-sm font-display text-sm tracking-wider hover:brightness-110 transition"
          >
            <Phone className="w-4 h-4" />
            Call Now
          </a>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-foreground"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-background border-t border-border">
          <div className="flex flex-col p-4 gap-4">
            {links.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase().replace(/\s/g, "-")}`}
                onClick={() => setIsOpen(false)}
                className="font-display text-sm tracking-wider text-muted-foreground hover:text-primary transition-colors"
              >
                {link}
              </a>
            ))}
            <a
              href="tel:+96178995638"
              className="flex items-center justify-center gap-2 bg-primary text-primary-foreground px-5 py-3 rounded-sm font-display text-sm tracking-wider"
            >
              <Phone className="w-4 h-4" />
              Call Now
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
