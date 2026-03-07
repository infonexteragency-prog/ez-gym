import { Zap } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-8">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <img src={logo} alt="EZ Fitness Club" className="h-10" />
        <p className="text-muted-foreground font-body text-sm text-center">
          © {new Date().getFullYear()} EZ Fitness Club. All rights reserved. Hamra & Jdeideh, Beirut.
        </p>
        <div className="flex items-center gap-1 text-primary">
          <Zap className="w-4 h-4" />
          <span className="font-display text-sm tracking-wider">EMS & FITNESS</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
