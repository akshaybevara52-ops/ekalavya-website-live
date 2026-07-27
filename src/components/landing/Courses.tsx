import { motion, type Variants } from "framer-motion";
import { CheckCircle2, Clock, Sun } from "lucide-react";

const courses = [
  {
    title: "Sainik School Coaching",
    description: "Expertly structured preparation for AISSEE (All India Sainik Schools Entrance Examination) for Class 6 & 9 aspirants.",
    color: "bg-[#142D52]",
    textColor: "text-white",
    batches: [
      {
        type: "Long Term",
        schedule: "Full Day",
        time: "9:00 AM – 4:00 PM",
        details: "Intensive full-day program for Class 4 & 6 aspirants. Maximum preparation time with structured sessions, lunch break, and individual mentoring.",
        features: ["Complete AISSEE Syllabus Coverage", "Mathematics, GK & Reasoning", "Daily Practice Sessions", "Weekly Mock Tests", "Doubt Clearing Included", "Study Materials Provided"],
      },
      {
        type: "Short Term",
        schedule: "After School",
        time: "5:00 PM – 8:00 PM",
        details: "Flexible evening batches for students who attend school in the morning. High-yield sessions covering the most important exam topics.",
        features: ["Core AISSEE Topics Covered", "Mathematics & Reasoning Focus", "Weekend Mock Tests", "Study Material Provided", "Doubt Clearing Sessions", "Ideal for School-going Students"],
      },
    ],
  },
  {
    title: "Navodaya Coaching",
    description: "Comprehensive preparation for JNVST (Jawahar Navodaya Vidyalaya Selection Test) for Class 5 students.",
    color: "bg-[#1A3A6B]",
    textColor: "text-white",
    batches: [
      {
        type: "Long Term",
        schedule: "Full Day",
        time: "9:00 AM – 4:00 PM",
        details: "Full-day coaching for Class 5 students. All three exam sections — Mental Ability, Arithmetic, and Language — covered with dedicated daily sessions.",
        features: ["Complete JNVST Syllabus", "Mental Ability Test Prep", "Arithmetic & Language Test", "Daily Practice Papers", "Weekly Assessments", "Individual Attention Guaranteed"],
      },
      {
        type: "Short Term",
        schedule: "After School",
        time: "5:00 PM – 8:00 PM",
        details: "Evening batch for Class 5 students needing JNVST preparation alongside regular school. Focused sessions on high-weightage topics.",
        features: ["Key JNVST Sections Covered", "Mental Ability & Aptitude", "Language Proficiency Training", "Practice Papers & Tests", "Ideal for School-going Students", "Study Material Provided"],
      },
    ],
  },
];

const otherPrograms = [
  {
    title: "Summer Camp Program",
    subtitle: "Holistic development during summer breaks",
    description: "A 30-day intensive summer program that goes beyond academics. Students develop communication skills, digital literacy, creative thinking, and the confidence needed for interviews.",
    features: ["Personality Development", "Spoken English", "Computer Basics", "Creative Activities", "Leadership Skills"],
  },
  {
    title: "Tuition Classes",
    subtitle: "Classes 1 to 10 · All Boards",
    description: "Regular after-school tuition covering CBSE, ICSE, and State Board curricula. Small batches ensure every student gets the attention they need to excel in school exams.",
    features: ["Classes 1 to 10", "Mathematics", "Science", "English", "Social Studies"],
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export function Courses() {
  return (
    <section id="courses" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#D59F15] font-semibold tracking-wider uppercase text-sm mb-2 block">What We Offer</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-5">Our Programs</h2>
          <p className="text-muted-foreground text-lg">Expertly crafted programs designed to build strong foundations and ensure competitive success.</p>
        </div>

        {/* Sainik + Navodaya */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-10 mb-16"
        >
          {courses.map((course, ci) => (
            <motion.div key={ci} variants={itemVariants} className={`${course.color} rounded-3xl overflow-hidden`}>
              <div className="p-8 md:p-10 border-b border-white/10">
                <h3 className={`text-2xl md:text-3xl font-serif font-bold ${course.textColor} mb-2`}>{course.title}</h3>
                <p className="text-white/70 text-base">Choose the batch that fits your schedule</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-white/10">
                {course.batches.map((batch, bi) => (
                  <div key={bi} className="p-8 md:p-10">
                    <div className="flex items-center gap-3 mb-1">
                      <span className="text-[#D59F15] font-bold text-lg">{batch.type}</span>
                      <span className="bg-white/10 text-white/70 text-xs px-3 py-1 rounded-full font-medium">{batch.schedule}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-white/60 text-sm mb-4">
                      <Clock className="w-4 h-4" />
                      <span>{batch.time}</span>
                    </div>
                    <p className="text-white/80 text-sm leading-relaxed mb-5">{batch.details}</p>
                    <ul className="space-y-2 mb-6">
                      {batch.features.map((f, fi) => (
                        <li key={fi} className="flex items-center gap-2.5 text-white/80 text-sm">
                          <CheckCircle2 className="w-4 h-4 text-[#D59F15] shrink-0" />
                          {f}
                        </li>
                      ))}
                    </ul>
                    <a
                      href="#admission"
                      className="inline-flex items-center gap-2 bg-[#D59F15] hover:bg-[#b88812] text-white px-6 py-3 rounded-full font-semibold text-sm transition-colors"
                    >
                      Enroll – {course.title.split(" ")[0]} ({batch.type})
                    </a>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Other Programs */}
        <div className="mb-6">
          <span className="text-[#D59F15] font-semibold tracking-wider uppercase text-sm mb-2 block text-center">Other Programs</span>
          <h3 className="text-3xl font-serif font-bold text-foreground text-center mb-10">Additional offerings to support holistic learning</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {otherPrograms.map((prog, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="border border-border rounded-3xl p-8 bg-card hover:border-[#D59F15]/50 transition-colors"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-[#D59F15]/10 flex items-center justify-center shrink-0">
                  <Sun className="w-6 h-6 text-[#D59F15]" />
                </div>
                <div>
                  <h4 className="text-xl font-serif font-bold text-foreground">{prog.title}</h4>
                  <p className="text-[#D59F15] text-sm font-semibold">{prog.subtitle}</p>
                </div>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed mb-5">{prog.description}</p>
              <ul className="space-y-2 mb-6">
                {prog.features.map((f, fi) => (
                  <li key={fi} className="flex items-center gap-2.5 text-foreground text-sm">
                    <CheckCircle2 className="w-4 h-4 text-[#D59F15] shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <a href="#admission" className="inline-flex items-center gap-2 bg-[#142D52] hover:bg-[#1A3A6B] text-white px-6 py-3 rounded-full font-semibold text-sm transition-colors">
                Enroll in {prog.title.split(" ")[0]}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
