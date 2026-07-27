import { motion } from "framer-motion";
import { Phone, MapPin, Mail, Clock, MessageCircle, Map } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#D59F15] font-semibold tracking-wider uppercase text-sm mb-2 block">Get In Touch</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-5">We're Here to Help</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">

          {/* Contact details */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-[#D59F15]/10 rounded-full flex items-center justify-center text-[#D59F15] shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-foreground mb-1">Visit Us</h4>
                <a
                  href="https://www.google.com/maps/place/EKALAVYA+SAINIK+%26+NAVODAYA+COACHING+CENTER+-+VZM/@18.1060931,83.4222725,17z/data=!3m1!4b1!4m6!3m5!1s0x3a3bfb5af24ecc77:0x7a3c5b276a6680d1!8m2!3d18.1060931!4d83.4222725!16s%2Fg%2F11nhtdg37w!18m1!1e1"
                  target="_blank"
                  rel="noreferrer"
                  className="text-muted-foreground leading-relaxed hover:text-[#D59F15] transition-colors"
                >
                  EKALAVYA SAINIK & NAVODAYA COACHING CENTER - VZM,<br />
                  MAIN ROAD, Dasannapet,<br />
                  Vizianagaram, Andhra Pradesh 535002
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-[#D59F15]/10 rounded-full flex items-center justify-center text-[#D59F15] shrink-0">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-foreground mb-1">Call / WhatsApp</h4>
                <a href="tel:+919110783437" className="text-muted-foreground hover:text-[#D59F15] transition-colors block">+91 91107 83437</a>
                <a
                  href="https://wa.me/919110783437"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-[#25D366] font-semibold hover:underline mt-1"
                >
                  <MessageCircle className="w-4 h-4" /> Chat on WhatsApp
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-[#D59F15]/10 rounded-full flex items-center justify-center text-[#D59F15] shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-foreground mb-1">Email Us</h4>
                <a href="mailto:ekalavyavzm@gmail.com" className="text-muted-foreground hover:text-[#D59F15] transition-colors">
                  ekalavyavzm@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-[#D59F15]/10 rounded-full flex items-center justify-center text-[#D59F15] shrink-0">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-foreground mb-1">Working Hours</h4>
                <p className="text-muted-foreground">Mon - Sat: 8:00 AM - 8:00 PM</p>
                <p className="text-muted-foreground">Sunday: 9:00 AM - 1:00 PM</p>
              </div>
            </div>

            <div className="flex gap-4 pt-2">
              <a
                href="https://www.google.com/maps/place/EKALAVYA+SAINIK+%26+NAVODAYA+COACHING+CENTER+-+VZM/@18.1060931,83.4222725,17z/data=!3m1!4b1!4m6!3m5!1s0x3a3bfb5af24ecc77:0x7a3c5b276a6680d1!8m2!3d18.1060931!4d83.4222725!16s%2Fg%2F11nhtdg37w!18m1!1e1"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-[#142D52] hover:bg-[#1A3A6B] text-white px-6 py-3 rounded-full font-semibold text-sm transition-colors"
              >
                <Map className="w-4 h-4" /> Open in Google Maps
              </a>
              <a
                href="https://wa.me/919110783437"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20b858] text-white px-6 py-3 rounded-full font-semibold text-sm transition-colors"
              >
                <MessageCircle className="w-4 h-4" /> Chat on WhatsApp
              </a>
            </div>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl overflow-hidden shadow-xl border border-border h-[420px]"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3805.013!2d83.4222725!3d18.1060931!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3bfb5af24ecc77%3A0x7a3c5b276a6680d1!2sEKALAVYA%20SAINIK%20%26%20NAVODAYA%20COACHING%20CENTER%20-%20VZM!5e0!3m2!1sen!2sin!4v1720000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ekalavya Coaching Center Location"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
