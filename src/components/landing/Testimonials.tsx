import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Rajesh Kumar",
    role: "Parent of Sainik School Aspirant",
    quote: "Ekalavya Coaching completely transformed my son's approach to studying. The faculty's dedication and the rigorous mock tests were instrumental in his selection to Sainik School.",
  },
  {
    name: "Sunita Sharma",
    role: "Parent of Navodaya Student",
    quote: "The personalized attention my daughter received here is unmatched. The teachers genuinely care about every student's progress. Highly recommend their Navodaya batch.",
  },
  {
    name: "Amit Patel",
    role: "Former Student",
    quote: "The study materials and doubt-clearing sessions helped me build a very strong foundation in Mathematics. The environment here is highly competitive yet supportive.",
  },
  {
    name: "Priya Desai",
    role: "Parent of Class 8 Student",
    quote: "We enrolled our son for regular tuition and the summer camp. We have seen a remarkable improvement not just in his grades, but in his overall confidence and personality.",
  },
];

export function Testimonials() {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#D59F15] font-semibold tracking-wider uppercase text-sm mb-2 block">Testimonials</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-5">What Parents Say</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-card border border-border rounded-2xl p-8 relative"
            >
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-[#D59F15] rounded-full flex items-center justify-center shadow-lg">
                <Quote className="w-5 h-5 text-white fill-white" />
              </div>

              <div className="flex gap-1 text-[#D59F15] mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#D59F15]" />
                ))}
              </div>

              <p className="text-foreground text-lg font-serif italic mb-8 leading-relaxed">
                "{item.quote}"
              </p>

              <div className="flex items-center gap-4 border-t border-border pt-6">
                <div className="w-12 h-12 bg-[#142D52] rounded-full flex items-center justify-center text-white font-bold text-xl">
                  {item.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-foreground">{item.name}</h4>
                  <p className="text-sm text-muted-foreground">{item.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
