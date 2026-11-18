import { motion } from "framer-motion";
import { Coffee, MapPin, Phone, Clock, ArrowUp, Instagram, Facebook } from "lucide-react";
import { navLinks } from "../../data/links";
import Container from "../ui/Container";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-roast pb-10 pt-16 text-cream/80 overflow-hidden">
      {/* Decorative ambient gradient */}
      <div className="pointer-events-none absolute -top-24 end-1/4 size-96 rounded-full bg-caramel/10 blur-3xl" />

      <Container className="relative z-10">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand info */}
          <div className="space-y-4">
            <a href="#top" className="inline-flex items-center gap-2.5 font-serif text-2xl font-bold text-cream">
              <span className="flex size-10 items-center justify-center rounded-xl bg-caramel text-cream shadow-md">
                <Coffee size={22} />
              </span>
              بن وحكاية
            </a>
            <p className="text-sm leading-relaxed text-cream/70">
              ملاذك اليومي لتذوق أجود أنواع القهوة المختصة والمخبوزات الطازجة في أجواء تجمع الأصالة والحداثة.
            </p>
            <div className="inline-flex items-center gap-2 rounded-full bg-cream/10 px-3 py-1 text-xs text-caramel">
              <span className="size-2 rounded-full bg-sage animate-pulse" />
              <span>مفتوح اليوم حتى 12:00 منتصف الليل</span>
            </div>
          </div>

          {/* Navigation links */}
          <div>
            <h3 className="mb-4 font-serif text-lg font-bold text-cream">روابط سريعة</h3>
            <ul className="space-y-2.5 text-sm">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="inline-block transition-transform duration-200 hover:-translate-x-1.5 hover:text-caramel"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h3 className="mb-4 font-serif text-lg font-bold text-cream">معلومات الاتصال والزيارة</h3>
            <ul className="space-y-3.5 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="mt-0.5 text-caramel shrink-0" />
                <span>شارع الكورنيش، منطقة ستانلي، الإسكندرية، مصر</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-caramel shrink-0" />
                <span dir="ltr" className="hover:text-caramel transition-colors">+20 100 123 4567</span>
              </li>
              <li className="flex items-center gap-3">
                <Clock size={18} className="text-caramel shrink-0" />
                <span>طوال أيام الأسبوع: 08:00 ص – 12:00 م</span>
              </li>
            </ul>
          </div>

          {/* Social media & Newsletter */}
          <div>
            <h3 className="mb-4 font-serif text-lg font-bold text-cream">تابعنا على المنصات</h3>
            <p className="mb-4 text-xs text-cream/70 leading-relaxed">
              كن أول من يعرف عن أنواع البن الجديدة والفعاليات الشهرية.
            </p>
            <div className="flex gap-3">
              <motion.a
                whileHover={{ y: -4, scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="حساب انستغرام بن وحكاية"
                className="flex size-11 items-center justify-center rounded-2xl border border-cream/15 bg-cream/5 text-cream transition-colors hover:border-caramel hover:bg-caramel hover:text-white shadow-sm"
              >
                <Instagram size={20} />
              </motion.a>
              <motion.a
                whileHover={{ y: -4, scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                aria-label="صفحة فيسبوك بن وحكاية"
                className="flex size-11 items-center justify-center rounded-2xl border border-cream/15 bg-cream/5 text-cream transition-colors hover:border-caramel hover:bg-caramel hover:text-white shadow-sm"
              >
                <Facebook size={20} />
              </motion.a>
            </div>
          </div>
        </div>

        {/* Footer bottom bar */}
        <div className="mt-14 border-t border-cream/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-cream/60">
          <p>© {new Date().getFullYear()} بن وحكاية | كافيه ومحمصة مختصة. جميع الحقوق محفوظة.</p>
          
          <button
            onClick={scrollToTop}
            className="group flex items-center gap-2 rounded-full border border-cream/15 bg-cream/5 px-4 py-2 text-cream/80 transition-all hover:border-caramel hover:bg-caramel hover:text-white"
          >
            <span>العودة للأعلى</span>
            <ArrowUp size={14} className="transition-transform group-hover:-translate-y-0.5" />
          </button>
        </div>
      </Container>
    </footer>
  );
}
