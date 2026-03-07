import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const reviews = [
  {
    name: "Joe Yucef",
    time: "a year ago",
    text: "I recently tried EZGYMLB and had an amazing experience! From the moment I walked in, I was impressed by the clean, well-equipped facilities and the welcoming atmosphere. The staff is incredibly friendly and knowledgeable, always ready to help.",
  },
  {
    name: "Farah R.",
    time: "a year ago",
    text: "I've been training with Jimmy for 2 months now and I can see amazing results! Jimmy is a great trainer, well experienced, patient, encouraging and very positive that the session's time flies no matter how hard the training is.",
  },
  {
    name: "Maria Tayyar",
    time: "a year ago",
    text: "I remember being very anxious when starting EMS training since I used to hate fitness training, but after one or two sessions I started enjoying my workout. Thanks to Coach Jimmy in Hamra and Coach Kevin in Jdeideh branch, I feel very motivated.",
  },
];

const ReviewsSection = () => {
  return (
    <section id="reviews" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-display text-sm tracking-[0.2em] mb-4 block">
            TESTIMONIALS
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            What Our <span className="text-gradient-gold">Members</span> Say
          </h2>
          <div className="flex items-center justify-center gap-2 mt-4">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-primary text-primary" />
              ))}
            </div>
            <span className="text-2xl font-display text-foreground">5.0</span>
            <span className="text-muted-foreground font-body">· 63 reviews</span>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((review, i) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="bg-card border border-border rounded-sm p-6 relative group hover:border-primary/50 transition-colors"
            >
              <Quote className="w-8 h-8 text-primary/20 mb-4" />
              <p className="text-muted-foreground font-body leading-relaxed mb-6 text-sm">
                "{review.text}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center font-display text-primary text-sm">
                  {review.name[0]}
                </div>
                <div>
                  <div className="font-display text-sm text-foreground">{review.name}</div>
                  <div className="text-xs text-muted-foreground font-body">{review.time}</div>
                </div>
              </div>
              <div className="flex gap-0.5 mt-3">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="w-3.5 h-3.5 fill-primary text-primary" />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
