import { motion } from "framer-motion";
import { CalendarDays, ArrowRight } from "lucide-react";

const news = [
  {
    tag: "Announcements",
    date: "June 2025",
    title: "Sainik School Entrance 2025: Important Dates Announced",
    excerpt:
      "AISSEE 2025–26 important dates have been released. Registrations open soon. Contact us immediately to secure your seat in our upcoming preparation batch.",
  },
  {
    tag: "Preparation Tips",
    date: "May 2025",
    title: "How to Prepare for Navodaya Mental Ability Test",
    excerpt:
      "The Mental Ability Test carries the highest weightage in JNVST. Our faculty has compiled a proven preparation strategy with topic-wise practice schedule.",
  },
  {
    tag: "Admissions Open",
    date: "April 2025",
    title: "New Batches Starting – June 2025",
    excerpt:
      "Admissions are now open for the 2025–26 academic year. Both Long Term & Short Term batches for Sainik and Navodaya commence in June 2025. Limited seats!",
  },
  {
    tag: "Results",
    date: "March 2025",
    title: "18 Selections in AISSEE + 22 in JNVST 2025",
    excerpt:
      "Our students continue to shine! 18 selections in Sainik School and 22 in Navodaya Vidyalaya this year — the best results in our center's history.",
  },
];

const tagColors: Record<string, string> = {
  Announcements: "bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-400",
  "Preparation Tips": "bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-400",
  "Admissions Open": "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-400",
  Results: "bg-purple-100 text-purple-700 dark:bg-purple-900/40 dark:text-purple-400",
};

export function NewsUpdates() {
  return (
    <section id="news" className="py-20 md:py-28 bg-[#142D52]">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-[#D59F15] font-semibold tracking-wider uppercase text-sm mb-2 block">NEWS &amp; UPDATES</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-5">Latest Announcements</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {news.map((item, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#D59F15]/40 rounded-3xl p-7 flex flex-col gap-4 transition-all duration-300 group cursor-pointer"
            >
              <div className="flex items-center justify-between gap-4 flex-wrap">
                <span className={`text-xs font-semibold px-3 py-1 rounded-full ${tagColors[item.tag] ?? "bg-white/10 text-white/70"}`}>
                  {item.tag}
                </span>
                <div className="flex items-center gap-1.5 text-white/45 text-sm">
                  <CalendarDays className="w-3.5 h-3.5" />
                  <span>{item.date}</span>
                </div>
              </div>

              <div>
                <h3 className="text-white font-bold text-lg leading-snug mb-2 group-hover:text-[#D59F15] transition-colors">
                  {item.title}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed">{item.excerpt}</p>
              </div>

              <div className="mt-auto pt-2 flex items-center gap-1.5 text-[#D59F15] text-sm font-semibold">
                Read More <ArrowRight className="w-4 h-4" />
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
