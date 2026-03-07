import { motion } from "framer-motion";
import { Zap, Star } from "lucide-react";
import heroImg from "@/assets/hero-gym.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="EZ Fitness Club Interior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/40" />
      </div>

      <div className="container mx-auto relative z-10 px-4 pt-24">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <div className="flex items-center gap-2 mb-6">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-primary text-primary" />
              ))}
            </div>
            <span className="text-muted-foreground text-sm font-body">5.0 · 63 Reviews</span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.9] mb-6">
            <span className="text-foreground">Train</span>
            <br />
            <span className="text-gradient-gold">Smarter.</span>
            <br />
            <span className="text-foreground">Not Harder.</span>
          </h1>

          <p className="text-lg text-muted-foreground font-body max-w-lg mb-8 leading-relaxed">
            Lebanon's premier EMS & Fitness center. 20 minutes of EMS training equals 
            4 hours of conventional workout. Transform your body with cutting-edge technology.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="tel:+96178995638"
              className="bg-gradient-gold text-primary-foreground px-8 py-4 rounded-sm font-display text-lg tracking-wider hover:brightness-110 transition flex items-center justify-center gap-2 animate-pulse-glow"
            >
              <Zap className="w-5 h-5" />
              Book Free Trial
            </a>
            <a
              href="#ems-training"
              className="border border-border text-foreground px-8 py-4 rounded-sm font-display text-lg tracking-wider hover:border-primary hover:text-primary transition text-center"
            >
              Learn About EMS
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
