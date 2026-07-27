import { motion } from "framer-motion";
import { Users, Target, Clock, Trophy } from "lucide-react";

export function Stats() {
  const stats = [
    { icon: Users,  value: "500+", label: "Students Enrolled" },
    { icon: Target, value: "95%",  label: "Success Rate" },
    { icon: Clock,  value: "10+",  label: "Years Experience" },
    { icon: Trophy, value: "50+",  label: "Sainik/Navodaya Selections" },
  ];

  return (
    <section className="relative z-20 -mt-16 sm:-mt-24 mb-16 px-4 md:px-8">
      <div className="container mx-auto">
        <div className="bg-[#142D52] rounded-2xl shadow-2xl overflow-hidden border border-white/10">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-white/10">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 md:p-8 flex flex-col items-center text-center group"
              >
                <div className="w-12 h-12 rounded-full bg-[#D59F15]/10 flex items-center justify-center text-[#D59F15] mb-4 group-hover:bg-[#D59F15] group-hover:text-white transition-colors duration-300">
                  <stat.icon className="w-6 h-6" />
                </div>
                <h3 className="text-3xl md:text-4xl font-serif font-bold text-white mb-2">{stat.value}</h3>
                <p className="text-white/70 text-sm font-medium uppercase tracking-wider">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
