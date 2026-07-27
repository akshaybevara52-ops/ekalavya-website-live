import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What is the admission procedure?",
    answer:
      "The admission process is simple: Fill out our enquiry form or contact us on WhatsApp, attend a brief counseling session with our team, and complete the admission formalities. We also conduct a diagnostic assessment to place your child in the right batch.",
  },
  {
    question: "What is the fee structure for Sainik School coaching?",
    answer:
      "Our fee structure is affordable and transparent with no hidden charges. Fees vary based on the program (Long Term / Short Term) and batch. Please contact us directly on +91 91107 83437 or WhatsApp for the current fee details and available scholarship options.",
  },
  {
    question: "Do you provide hostel or transport facilities?",
    answer:
      "We can assist families in locating nearby accommodation options in Dasannapet. For transport, we recommend families coordinate locally. Please contact us for guidance on suitable lodging arrangements close to the coaching center.",
  },
  {
    question: "What is the batch size?",
    answer:
      "We maintain small batches of 20–25 students to ensure every child gets personal attention from the faculty. This allows teachers to monitor individual progress closely and address doubts effectively.",
  },
  {
    question: "Do you provide study materials?",
    answer:
      "Yes. All enrolled students receive comprehensive, exam-focused study material covering every subject — Mathematics, General Intelligence, Language, and General Knowledge. Students also get regular practice papers and mock tests modelled on the actual exam pattern.",
  },
  {
    question: "How are parents updated about student progress?",
    answer:
      "We conduct regular parent-teacher meetings and share progress reports. Parents can also reach out to the faculty directly via phone or WhatsApp. We believe in keeping parents involved at every stage of their child's preparation.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 md:px-8 max-w-4xl">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-[#D59F15] font-semibold tracking-wider uppercase text-sm mb-2 block">FAQ</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-5">
            Frequently Asked Questions
          </h2>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                className={`border rounded-2xl overflow-hidden transition-colors duration-200 ${
                  isOpen ? "border-[#D59F15]/50 bg-[#D59F15]/5" : "border-border bg-card"
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="font-semibold text-foreground text-base md:text-lg leading-snug">
                    {faq.question}
                  </span>
                  <span
                    className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center border transition-all duration-300 ${
                      isOpen
                        ? "bg-[#D59F15] border-[#D59F15] text-white rotate-180"
                        : "border-border text-muted-foreground"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <p className="px-6 pb-6 text-muted-foreground leading-relaxed text-base">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
