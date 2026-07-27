import { motion } from "framer-motion";
import { UserCheck, Trophy, Target, BookOpen, PenTool, HeartHandshake } from "lucide-react";

export function WhyChooseUs() {
  const features = [
    {
      icon: UserCheck,
      title: "Experienced Faculty",
      description: "Dedicated educators with years of experience in competitive coaching."
    },
    {
      icon: Trophy,
      title: "Proven Track Record",
      description: "Highest selection rate for Sainik & Navodaya schools in the region."
    },
    {
      icon: Target,
      title: "Individual Attention",
      description: "Small batch sizes to ensure personalized focus on every student's weak areas."
    },
    {
      icon: BookOpen,
      title: "Comprehensive Material",
      description: "Carefully curated study resources that cover the latest exam patterns."
    },
    {
      icon: PenTool,
      title: "Regular Mock Tests",
      description: "Weekly assessments and full-length tests to build exam temperament."
    },
    {
      icon: HeartHandshake,
      title: "Holistic Development",
      description: "Focus on mental discipline, time management, and confidence building."
    }
  ];

  return (
    <section className="py-20 md:py-28 bg-[#FCFAF8] dark:bg-background border-y border-border">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#D59F15] font-semibold tracking-wider uppercase text-sm mb-2 block">The Ekalavya Advantage</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#142D52] dark:text-white mb-6">Why Choose Us?</h2>
          <p className="text-muted-foreground text-lg">We don't just teach; we mentor. Our holistic approach ensures students are prepared not just for exams, but for life's challenges.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-card p-8 rounded-2xl shadow-sm border border-border hover:shadow-md transition-shadow group"
            >
              <div className="w-12 h-12 bg-[#FCFAF8] dark:bg-[#142D52] rounded-full flex items-center justify-center text-[#D59F15] mb-6 group-hover:bg-[#D59F15] group-hover:text-white transition-colors">
                <feature.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold font-serif text-[#142D52] dark:text-white mb-3">{feature.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}