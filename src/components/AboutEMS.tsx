import { motion } from "framer-motion";
import { Zap, Clock, Flame, TrendingUp } from "lucide-react";
import emsImg from "@/assets/ems-training.jpg";

const stats = [
  { icon: Clock, value: "20 min", label: "Per Session" },
  { icon: Flame, value: "500+", label: "Calories Burned" },
  { icon: TrendingUp, value: "90%", label: "Muscle Activation" },
  { icon: Zap, value: "4x", label: "More Effective" },
];

const AboutEMS = () => {
  return (
    <section id="ems-training" className="py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary font-display text-sm tracking-[0.2em] mb-4 block">
              REVOLUTIONARY TRAINING
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              What is <span className="text-gradient-gold">EMS Training?</span>
            </h2>
            <p className="text-muted-foreground font-body leading-relaxed mb-6">
              Electrical Muscle Stimulation (EMS) uses targeted electrical impulses to activate 
              up to 90% of your muscles simultaneously — far more than conventional exercise. 
              Each 20-minute session delivers the equivalent of a 4-hour traditional workout.
            </p>
            <p className="text-muted-foreground font-body leading-relaxed mb-8">
              Perfect for busy professionals, athletes seeking an edge, or anyone looking to 
              transform their fitness journey. Our expert coaches guide you through every session 
              at our Hamra and Jdeideh locations.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {stats.map(({ icon: Icon, value, label }) => (
                <div
                  key={label}
                  className="bg-card border border-border rounded-sm p-4 flex items-center gap-3"
                >
                  <div className="w-10 h-10 rounded-sm bg-primary/10 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-display text-xl text-foreground">{value}</div>
                    <div className="text-xs text-muted-foreground font-body">{label}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-sm">
              <img
                src={emsImg}
                alt="EMS Training at EZ Fitness Club"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
            </div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 border-2 border-primary rounded-sm" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutEMS;
