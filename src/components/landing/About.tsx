import { motion } from "framer-motion";
import { useLocation } from "wouter";

export function About() {
  const [, navigate] = useLocation();

  return (
    <section id="about" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-[#142D52] rounded-2xl p-8 flex flex-col gap-4"
          >
            <h3 className="text-2xl font-serif font-bold text-white">About Us</h3>
            <p className="text-white/70 leading-relaxed">
              Learn about our mission, vision, values and the dedicated faculty behind our students' success.
            </p>
            <button
              onClick={() => navigate("/about")}
              className="text-[#D59F15] font-semibold hover:underline underline-offset-4 mt-auto text-left"
            >
              Learn More →
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-[#D59F15] rounded-2xl p-8 flex flex-col gap-4"
          >
            <h3 className="text-2xl font-serif font-bold text-[#142D52]">Our Courses</h3>
            <p className="text-[#142D52]/80 leading-relaxed">
              Sainik School, Navodaya, Summer Camp and Tuition programs — all crafted for guaranteed results.
            </p>
            <a
              href="#courses"
              className="text-[#142D52] font-semibold hover:underline underline-offset-4 mt-auto"
            >
              View All Courses →
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
