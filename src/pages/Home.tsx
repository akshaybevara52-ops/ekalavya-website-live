import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { Stats } from "@/components/landing/Stats";
import { About } from "@/components/landing/About";
import { Courses } from "@/components/landing/Courses";
import { WhyChooseUs } from "@/components/landing/WhyChooseUs";
import { Results } from "@/components/landing/Results";
import { Gallery } from "@/components/landing/Gallery";
import { Admission } from "@/components/landing/Admission";
import { Testimonials } from "@/components/landing/Testimonials";
import { Contact } from "@/components/landing/Contact";
import { FAQ } from "@/components/landing/FAQ";
import { NewsUpdates } from "@/components/landing/NewsUpdates";
import { Footer } from "@/components/landing/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground overflow-x-hidden selection:bg-[#D59F15] selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <About />
        <Courses />
        <WhyChooseUs />
        <Results />
        <Testimonials />
        <Gallery />
        <FAQ />
        <NewsUpdates />
        <Admission />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}