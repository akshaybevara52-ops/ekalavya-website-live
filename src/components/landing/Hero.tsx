import { motion } from "framer-motion";

export function Hero() {
  return (
    <section id="home" className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero.png"
          alt="Students studying"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-[#142D52]/80 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#142D52] via-transparent to-[#142D52]/40" />
      </div>

      <div className="container relative z-10 px-4 md:px-8 pt-32 pb-20 md:pt-40 md:pb-32 flex flex-col items-start text-left max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full max-w-2xl"
        >
          <span className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-white/10 text-white border border-white/20 text-sm font-semibold tracking-wide uppercase mb-8 backdrop-blur-sm">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-[#D59F15]">
              <path fillRule="evenodd" d="M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.497 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.491 4.491 0 01-3.497-1.307 4.491 4.491 0 01-1.307-3.497A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.49 4.49 0 013.497-1.307z" clipRule="evenodd" />
            </svg>
            Premier Coaching Institute
          </span>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white leading-[1.1] mb-6">
            Empowering Students
            <br />for <span className="text-[#D59F15]">Sainik School</span>,
            <br />Navodaya &amp; Academic
            <br />Excellence
          </h1>

          <p className="text-lg md:text-xl text-white/90 max-w-xl mb-10 leading-relaxed">
            Expert Coaching, Experienced Faculty, and Proven Results for a Bright Future. Join the institution that parents trust and students love.
          </p>

          <div className="flex flex-col sm:flex-row items-start gap-4 mb-12">
            <a
              href="#admission"
              className="inline-flex items-center gap-2 bg-[#D59F15] hover:bg-[#b88812] text-white px-8 py-4 rounded-full font-semibold text-lg transition-all shadow-[0_4px_20px_0_rgba(213,159,21,0.4)] hover:shadow-[0_8px_30px_rgba(213,159,21,0.3)] hover:-translate-y-1"
            >
              Enroll Now <span className="text-xl">›</span>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-transparent border-2 border-white/30 hover:border-white text-white px-8 py-4 rounded-full font-semibold text-lg transition-all hover:bg-white/10"
            >
              Contact Us
            </a>
          </div>

          <div className="flex items-center gap-6 text-white/70 text-sm font-medium">
            <a href="#about" className="hover:text-[#D59F15] transition-colors underline underline-offset-4">Learn About Us</a>
            <a href="#courses" className="hover:text-[#D59F15] transition-colors underline underline-offset-4">Explore Our Courses</a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
