import { motion } from "framer-motion";

const achievements = [
  {
    num: "1",
    title: "15+ Selections in Sainik School (2024)",
    subtitle: "Across various states in India",
  },
  {
    num: "2",
    title: "20+ Selections in Navodaya (2024)",
    subtitle: "Class VI entrance exams",
  },
  {
    num: "3",
    title: "100% Pass Result in Boards",
    subtitle: "For Class 10th tuition batches",
  },
];

export function Results() {
  return (
    <section id="results" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Text side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-[#D59F15] font-semibold tracking-wider uppercase text-sm mb-2 block">Our Pride</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6 leading-tight">
              Consistent Record of Selections
            </h2>
            <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
              Year after year, our students secure top ranks in Sainik School and Navodaya Vidyalaya entrance exams. Our results speak for the quality of education we impart.
            </p>

            <h3 className="text-[#D59F15] font-semibold uppercase tracking-wider text-sm mb-6">Recent Achievements</h3>

            <div className="space-y-5">
              {achievements.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.12 }}
                  className="flex items-start gap-5"
                >
                  <div className="w-10 h-10 rounded-full bg-[#D59F15] text-white font-bold text-lg flex items-center justify-center shrink-0 shadow-lg">
                    {item.num}
                  </div>
                  <div className="pt-1">
                    <p className="font-bold text-foreground text-lg leading-snug">{item.title}</p>
                    <p className="text-muted-foreground text-sm mt-1">{item.subtitle}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-10 flex gap-4 flex-wrap">
              <div className="bg-[#142D52] text-white px-6 py-3 rounded-2xl text-center">
                <span className="block text-2xl font-serif font-bold text-[#D59F15]">Top</span>
                <span className="text-xs uppercase tracking-wider text-white/70">Performers</span>
              </div>
              <a
                href="#admission"
                className="inline-flex items-center gap-2 bg-[#D59F15] hover:bg-[#b88812] text-white px-8 py-3 rounded-full font-semibold transition-colors self-center"
              >
                Join Our Next Batch
              </a>
            </div>
          </motion.div>

          {/* Image side */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="rounded-3xl overflow-hidden shadow-2xl aspect-[4/5]">
              <img
                src="/images/gallery-real-1.jpg"
                alt="Proud Students"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#142D52]/60 via-transparent to-transparent" />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-[#D59F15] rounded-2xl p-5 shadow-xl hidden md:block">
              <p className="text-[#142D52] font-bold text-3xl font-serif">95%</p>
              <p className="text-[#142D52]/80 text-sm font-semibold">Success Rate</p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
