import { useState } from "react";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export function Admission() {
  const [form, setForm] = useState({
    studentName: "",
    parentName: "",
    phone: "",
    currentClass: "",
    course: "",
  });

  const handleWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    const text = encodeURIComponent(
      `Hello Ekalavya Coaching Center,\n\nI would like to enquire about admission.\n\nStudent Name: ${form.studentName}\nParent/Guardian Name: ${form.parentName}\nPhone: ${form.phone}\nCurrent Class: ${form.currentClass}\nCourse Interested In: ${form.course}\n\nPlease provide more details.`
    );
    window.open(`https://wa.me/919110783437?text=${text}`, "_blank");
  };

  const inputClass =
    "w-full border border-border bg-background text-foreground rounded-xl px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-[#D59F15] focus:border-transparent transition-all placeholder:text-muted-foreground";
  const labelClass = "block text-sm font-semibold text-foreground mb-1.5";

  return (
    <section id="admission" className="py-20 md:py-28 bg-[#142D52]">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Left: info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">Start Your Journey Today</h2>
            <p className="text-white/70 text-lg mb-12 leading-relaxed">
              Take the first step towards a bright academic future. Fill out the form to register for our upcoming batches.
            </p>

            <div className="space-y-6">
              {[
                { num: "1", label: "Submit Application" },
                { num: "2", label: "Counseling Session" },
                { num: "3", label: "Confirm Admission" },
              ].map((step) => (
                <div key={step.num} className="flex items-center gap-5">
                  <div className="w-12 h-12 rounded-full bg-[#D59F15] text-white font-bold text-xl flex items-center justify-center shrink-0 shadow-lg">
                    {step.num}
                  </div>
                  <span className="text-white font-semibold text-lg">{step.label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-white dark:bg-card rounded-3xl p-8 md:p-10 shadow-2xl">
              <h3 className="text-2xl font-serif font-bold text-[#142D52] dark:text-foreground mb-8">Admission Enquiry</h3>
              <form onSubmit={handleWhatsApp} className="space-y-5">
                <div>
                  <label className={labelClass}>Student Name</label>
                  <input
                    type="text"
                    placeholder="Enter student's full name"
                    className={inputClass}
                    value={form.studentName}
                    onChange={(e) => setForm({ ...form, studentName: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <label className={labelClass}>Parent/Guardian Name</label>
                  <input
                    type="text"
                    placeholder="Enter parent/guardian name"
                    className={inputClass}
                    value={form.parentName}
                    onChange={(e) => setForm({ ...form, parentName: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <label className={labelClass}>Phone Number</label>
                  <input
                    type="tel"
                    placeholder="+91 xxxxx xxxxx"
                    className={inputClass}
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <label className={labelClass}>Current Class</label>
                  <select
                    className={inputClass}
                    value={form.currentClass}
                    onChange={(e) => setForm({ ...form, currentClass: e.target.value })}
                    required
                  >
                    <option value="">Select class</option>
                    {["Class 4", "Class 5", "Class 6", "Class 7", "Class 8", "Class 9", "Class 10"].map((c) => (
                      <option key={c} value={c}>{c}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className={labelClass}>Course Interested In</label>
                  <select
                    className={inputClass}
                    value={form.course}
                    onChange={(e) => setForm({ ...form, course: e.target.value })}
                    required
                  >
                    <option value="">Select course</option>
                    <option value="Sainik School Coaching">Sainik School Coaching</option>
                    <option value="Navodaya Coaching">Navodaya Coaching</option>
                    <option value="Foundation (Class 1-5)">Foundation (Class 1-5)</option>
                    <option value="Tuition (Class 6-10)">Tuition (Class 6-10)</option>
                    <option value="Summer Camp">Summer Camp</option>
                  </select>
                </div>
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#20b858] text-white py-4 rounded-xl font-bold text-lg transition-colors shadow-lg"
                >
                  <MessageCircle className="w-6 h-6" />
                  Send Enquiry on WhatsApp
                </button>
              </form>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
