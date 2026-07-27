import { motion } from "framer-motion";
import { CheckCircle2, GraduationCap } from "lucide-react";
import { Navbar } from "@/components/landing/Navbar";
import { Footer } from "@/components/landing/Footer";

const highlights = [
  "Experienced & Dedicated Faculty",
  "Comprehensive Study Material",
  "Regular Mock Tests & Analysis",
  "Personalized Attention",
  "Discipline & Value Education",
  "Excellent Track Record",
  "Affordable Fee Structure",
  "Merit-Based Scholarships",
];

const coreValues = [
  {
    title: "Dedication",
    description: "Every teacher at Ekalavya is personally invested in each student's success — not just their marks.",
  },
  {
    title: "Innovation",
    description: "We constantly evolve our teaching methods to match modern exam patterns and student needs.",
  },
  {
    title: "Results",
    description: "Our proven track record of 95%+ success rate speaks for our commitment to excellence.",
  },
  {
    title: "Community",
    description: "We foster a supportive environment where students motivate each other to aim higher.",
  },
];

const stats = [
  { value: "500+", label: "Students Enrolled" },
  { value: "95%",  label: "Success Rate" },
  { value: "10+",  label: "Years Experience" },
  { value: "50+",  label: "Sainik/Navodaya Selections" },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground overflow-x-hidden">
      <Navbar />

      {/* Hero */}
      <section className="pt-40 pb-20 bg-[#142D52] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img src="/images/gallery-1.png" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            <span className="text-[#D59F15] font-semibold tracking-wider uppercase text-sm mb-4 block">Our Story</span>
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-white mb-6 leading-tight">
              About Ekalavya
            </h1>
            <p className="text-white/70 text-xl leading-relaxed">
              Over a decade of shaping young minds for Sainik School, Navodaya Vidyalaya, and academic excellence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* About detail */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div className="rounded-3xl overflow-hidden shadow-2xl aspect-[4/3]">
                <img
                  src="/images/gallery-1.png"
                  alt="About Ekalavya"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-5 -right-5 bg-[#D59F15] text-[#142D52] font-bold px-6 py-4 rounded-2xl shadow-xl hidden md:block">
                <p className="text-3xl font-serif">10+</p>
                <p className="text-sm font-semibold">Years of educational excellence<br />and proven results.</p>
              </div>
            </motion.div>

            {/* Text */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <span className="text-[#D59F15] font-semibold tracking-wider uppercase text-sm mb-2 block">About Our Institute</span>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6 leading-tight">
                Shaping the Leaders of Tomorrow
              </h2>
              <p className="text-muted-foreground text-lg mb-4 leading-relaxed">
                EKALAVYA Coaching Center is a premier educational institution dedicated to preparing students for prestigious schools like Sainik School, Navodaya Vidyalaya, and RMS, alongside providing top-tier academic tuition.
              </p>
              <p className="text-muted-foreground text-lg mb-4 leading-relaxed">
                Founded with a vision to bridge the gap between potential and achievement, we have grown into a thriving institution with over 500 enrolled students and a family of passionate educators who believe in every child's potential.
              </p>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                Our mission is to nurture young minds with rigorous academic training, character development, and strategic exam preparation to unlock their full potential.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {highlights.map((item, i) => (
                  <div key={i} className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-5 h-5 text-[#D59F15] shrink-0" />
                    <span className="text-foreground font-medium text-sm">{item}</span>
                  </div>
                ))}
              </div>

              <div className="flex gap-4 mt-10 flex-wrap">
                <a href="/#courses" className="bg-[#142D52] hover:bg-[#1A3A6B] text-white px-6 py-3 rounded-full font-semibold transition-colors">
                  Explore Courses
                </a>
                <a href="/#admission" className="bg-[#D59F15] hover:bg-[#b88812] text-white px-6 py-3 rounded-full font-semibold transition-colors">
                  Enroll Now
                </a>
              </div>
            </motion.div>
          </div>

          {/* Director */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-[#142D52] rounded-3xl p-10 md:p-14 mb-24"
          >
            <span className="text-[#D59F15] font-semibold tracking-wider uppercase text-sm mb-4 block">Leadership</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-10">Meet Our Director</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="flex flex-col items-start gap-6">
                <img
                  src="/images/director.jpg"
                  alt="Mam H. Bhagya Lakshmi — Director & Instructor"
                  className="w-48 h-48 rounded-2xl object-cover border-4 border-[#D59F15] shadow-xl"
                />
                <div>
                  <h3 className="text-2xl font-serif font-bold text-white">Mam H. Bhagya Lakshmi</h3>
                  <p className="text-[#D59F15] font-semibold mt-1">Director &amp; Head Instructor · Ekalavya</p>
                  <p className="text-white/50 text-sm mt-1">Trusted by 500+ families</p>
                </div>
                <div>
                  <p className="text-white/60 text-xs uppercase tracking-wider mb-2 font-semibold">Academic Qualifications</p>
                  <div className="flex flex-wrap gap-2">
                    {["M.Sc Mathematics", "M.Ed", "B.Ed", "D.Ed"].map((q) => (
                      <span key={q} className="bg-white/10 text-white text-xs font-semibold px-3 py-1 rounded-full">{q}</span>
                    ))}
                  </div>
                </div>
              </div>

              <div>
                <blockquote className="text-white/90 text-xl font-serif italic leading-relaxed mb-8 border-l-4 border-[#D59F15] pl-6">
                  "Every child has a spark of greatness inside them. My purpose is to help that spark become a flame — one lesson at a time."
                </blockquote>
                <p className="text-white/70 leading-relaxed mb-4">
                  With deep expertise in Mathematics and a passion for transforming students' academic journeys, Mam Bhagya Lakshmi founded Ekalavya with one goal — to make quality coaching accessible to every child who dares to dream of a Sainik or Navodaya seat.
                </p>
                <p className="text-white/70 leading-relaxed">
                  Her hands-on teaching approach, rigorous test series, and personal mentoring have produced hundreds of successful Sainik School and Navodaya Vidyalaya selections over the years.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Mission & Vision */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="border border-border rounded-3xl p-8 bg-card"
            >
              <div className="w-12 h-12 bg-[#D59F15]/10 rounded-2xl flex items-center justify-center mb-5">
                <GraduationCap className="w-6 h-6 text-[#D59F15]" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-foreground mb-4">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To provide affordable, high-quality education that empowers students from all backgrounds to compete and succeed in prestigious national school entrance exams and build a strong academic foundation for life.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="border border-border rounded-3xl p-8 bg-card"
            >
              <div className="w-12 h-12 bg-[#142D52]/10 rounded-2xl flex items-center justify-center mb-5">
                <GraduationCap className="w-6 h-6 text-[#142D52] dark:text-white" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-foreground mb-4">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To be recognized as the most trusted coaching institute in the region — where every student who walks in walks out more confident, more capable, and ready to take on the world's most competitive academic challenges.
              </p>
            </motion.div>
          </div>

          {/* Core Values */}
          <div className="mb-24">
            <div className="text-center mb-12">
              <span className="text-[#D59F15] font-semibold tracking-wider uppercase text-sm mb-2 block">What We Stand For</span>
              <h2 className="text-4xl font-serif font-bold text-foreground">Our Core Values</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {coreValues.map((val, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="border border-border rounded-2xl p-7 bg-card hover:border-[#D59F15]/50 transition-colors"
                >
                  <h4 className="text-lg font-serif font-bold text-foreground mb-3">{val.title}</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">{val.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Stats bar */}
          <div className="bg-[#142D52] rounded-2xl overflow-hidden">
            <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-white/10">
              {stats.map((s, i) => (
                <div key={i} className="p-8 flex flex-col items-center text-center">
                  <p className="text-4xl font-serif font-bold text-[#D59F15] mb-2">{s.value}</p>
                  <p className="text-white/70 text-sm font-medium uppercase tracking-wider">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
