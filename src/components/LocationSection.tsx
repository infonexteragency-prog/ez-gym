import { motion } from "framer-motion";
import { MapPin, Clock, Phone } from "lucide-react";

const LocationSection = () => {
  return (
    <section id="location" className="py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-display text-sm tracking-[0.2em] mb-4 block">
            FIND US
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Visit <span className="text-gradient-gold">EZ Fitness</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="bg-card border border-border rounded-sm p-6">
              <h3 className="font-display text-xl text-foreground mb-4 flex items-center gap-2">
                <Zap className="w-5 h-5 text-primary" />
                Hamra Branch
              </h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-primary mt-0.5" />
                  <span className="text-muted-foreground font-body text-sm">
                    Hamra, Beirut, Lebanon
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-primary mt-0.5" />
                  <div className="text-muted-foreground font-body text-sm">
                    <p>Mon - Sat: 6:00 AM - 10:00 PM</p>
                    <p>Sunday: Closed</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-primary mt-0.5" />
                  <a href="tel:+96178995638" className="text-primary font-body text-sm hover:underline">
                    +961 78 995 638
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-card border border-border rounded-sm p-6">
              <h3 className="font-display text-xl text-foreground mb-4 flex items-center gap-2">
                <ZapIcon className="w-5 h-5 text-primary" />
                Jdeideh Branch
              </h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-primary mt-0.5" />
                  <span className="text-muted-foreground font-body text-sm">
                    Jdeideh, Mount Lebanon
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-primary mt-0.5" />
                  <div className="text-muted-foreground font-body text-sm">
                    <p>Mon - Sat: 6:00 AM - 10:00 PM</p>
                    <p>Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-sm overflow-hidden border border-border min-h-[400px]"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3312.0!2d35.4795!3d33.8969!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzPCsDUzJzQ5LjAiTiAzNcKwMjgnNDYuMCJF!5e0!3m2!1sen!2slb!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: 400 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="EZ Fitness Club Location"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Fix: use Zap from lucide
import { Zap as ZapIcon } from "lucide-react";

export default LocationSection;
