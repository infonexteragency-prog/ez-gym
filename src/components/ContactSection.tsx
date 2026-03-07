import { motion } from "framer-motion";
import { Phone, Instagram, MessageCircle, Zap } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 bg-background relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary blur-[200px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center"
        >
          <span className="text-primary font-display text-sm tracking-[0.2em] mb-4 block">
            GET STARTED
          </span>
          <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Ready to <span className="text-gradient-gold">Transform?</span>
          </h2>
          <p className="text-muted-foreground font-body text-lg mb-10">
            Book your free trial session today. Experience the power of EMS training 
            and see why we're rated 5.0 by our members.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a
              href="tel:+96178995638"
              className="bg-gradient-gold text-primary-foreground px-8 py-4 rounded-sm font-display text-lg tracking-wider hover:brightness-110 transition flex items-center justify-center gap-2 shadow-gold"
            >
              <Phone className="w-5 h-5" />
              +961 78 995 638
            </a>
            <a
              href="https://wa.me/96178995638"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-border text-foreground px-8 py-4 rounded-sm font-display text-lg tracking-wider hover:border-primary hover:text-primary transition flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp
            </a>
          </div>

          <div className="flex items-center justify-center gap-6">
            <a
              href="https://www.instagram.com/ezgymlb"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition"
            >
              <Instagram className="w-5 h-5" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
