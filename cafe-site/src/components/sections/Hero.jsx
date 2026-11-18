import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, Coffee, Sparkles, Flame, Clock } from "lucide-react";
import Button from "../ui/Button";
import Container from "../ui/Container";

const container = { hidden: {}, show: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } } };
const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section id="top" ref={ref} className="relative flex min-h-[100svh] items-center overflow-hidden bg-gradient-to-b from-latte via-cream to-cream">
      {/* Background Animated Blobs */}
      <motion.div style={{ y: bgY }} className="pointer-events-none absolute inset-0 -z-0" aria-hidden>
        <motion.div
          animate={{ scale: [1, 1.15, 1], opacity: [0.25, 0.35, 0.25] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-24 -start-24 size-80 rounded-full bg-caramel/25 blur-3xl md:size-[32rem]"
        />
        <motion.div
          animate={{ scale: [1.15, 1, 1.15], opacity: [0.2, 0.3, 0.2] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-24 -end-24 size-96 rounded-full bg-terracotta/20 blur-3xl md:size-[36rem]"
        />
      </motion.div>

      <Container className="relative z-10 pb-20 pt-28 md:pt-36">
        <motion.div style={{ y: contentY, opacity }} className="grid items-center gap-12 md:grid-cols-2 lg:gap-16">
          {/* Right Text Column */}
          <motion.div variants={container} initial="hidden" animate="show" className="text-center md:text-start">
            <motion.div variants={item} className="mb-4 inline-flex items-center gap-2 rounded-full border border-terracotta/20 bg-terracotta/10 px-4 py-1.5 text-xs sm:text-sm font-bold text-terracotta backdrop-blur-sm">
              <Sparkles size={14} className="animate-spin-slow" />
              <span>محمصة طازجة كل صباح • تحميص حرفي 100%</span>
            </motion.div>

            <motion.h1 variants={item} className="font-serif text-[clamp(2.5rem,6.5vw,5.5rem)] font-extrabold leading-[1.12] text-espresso">
              لكل فنجان <span className="relative inline-block text-caramel">حكاية
                <svg className="absolute -bottom-2 start-0 w-full" viewBox="0 0 200 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 10C50 3 150 3 198 10" stroke="#C65D3B" strokeWidth="4" strokeLinecap="round" />
                </svg>
              </span> تستحق أن تُروى
            </motion.h1>

            <motion.p variants={item} className="mx-auto mt-6 max-w-lg text-base leading-relaxed text-espresso/80 md:mx-0 md:text-lg">
              نحمّص حبوبنا الفاخرة بأعلى معايير الإتقان، ونقدم لك كوباً ينقلك إلى عالم من الدفء والروقان في كل رشفة.
            </motion.p>

            <motion.div variants={item} className="mt-8 flex flex-col items-center justify-center gap-3.5 sm:flex-row md:justify-start">
              <Button href="#menu" variant="primary" className="shadow-lg shadow-caramel/25">
                استكشف القائمة
              </Button>
              <Button href="#reservation" variant="outline">
                احجز طاولتك
              </Button>
            </motion.div>

            {/* Quick highlights metrics */}
            <motion.div variants={item} className="mt-10 flex items-center justify-center gap-6 border-t border-espresso/10 pt-6 sm:gap-8 md:justify-start text-xs sm:text-sm font-medium text-espresso/70">
              <div className="flex items-center gap-2">
                <Coffee size={18} className="text-caramel" />
                <span>+12 محصول بن</span>
              </div>
              <div className="flex items-center gap-2">
                <Flame size={18} className="text-terracotta" />
                <span>تحميص يومي</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={18} className="text-sage" />
                <span>يومياً 8 ص – 12 م</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Left Visual Interactive Orb */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="relative mx-auto aspect-square w-full max-w-xs sm:max-w-sm lg:max-w-md"
          >
            {/* Outer Decorative Ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 rounded-full border-2 border-dashed border-caramel/30"
            >
              <span className="absolute -top-3 start-1/2 size-6 -translate-x-1/2 rounded-full bg-caramel shadow-md" />
              <span className="absolute -bottom-3 start-1/2 size-5 -translate-x-1/2 rounded-full bg-terracotta shadow-md" />
            </motion.div>

            {/* Main Visual Disc */}
            <div className="absolute inset-4 overflow-hidden rounded-full bg-espresso shadow-2xl border-4 border-cream">
              <div className="absolute inset-0 bg-radial-gradient from-espresso/80 via-roast to-[#0a0503]" />
              
              {/* Steaming Floating Cup */}
              <motion.div
                animate={{ y: [0, -16, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-0 flex flex-col items-center justify-center text-cream"
              >
                <div className="relative">
                  {/* Floating Steam particles */}
                  <motion.div
                    animate={{ y: [-5, -25], opacity: [0.7, 0] }}
                    transition={{ duration: 2.2, repeat: Infinity, ease: "easeOut" }}
                    className="absolute -top-6 start-6 size-3 rounded-full bg-cream/40 blur-xs"
                  />
                  <motion.div
                    animate={{ y: [-5, -30], opacity: [0.8, 0] }}
                    transition={{ duration: 2.8, repeat: Infinity, ease: "easeOut", delay: 0.7 }}
                    className="absolute -top-8 start-14 size-4 rounded-full bg-cream/50 blur-xs"
                  />
                  <Coffee strokeWidth={1.2} className="size-32 text-caramel drop-shadow-lg sm:size-40" />
                </div>
                <span className="mt-3 font-serif text-lg font-bold tracking-wide text-cream">بن وحكاية</span>
                <span className="text-xs text-cream/60">منذ 2018</span>
              </motion.div>
            </div>

            {/* Floating Floating Badges around orb */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute -top-2 start-0 rounded-2xl bg-white/95 px-4 py-2 shadow-xl border border-espresso/10 backdrop-blur-md flex items-center gap-2 text-xs font-bold text-espresso"
            >
              <span className="flex size-2 rounded-full bg-sage animate-ping" />
              <span>جودة استثنائية 90+</span>
            </motion.div>

            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-2 end-2 rounded-2xl bg-white/95 px-4 py-2 shadow-xl border border-espresso/10 backdrop-blur-md flex items-center gap-2 text-xs font-bold text-caramel"
            >
              <Sparkles size={14} />
              <span>جلسات هادئة ودافئة</span>
            </motion.div>
          </motion.div>
        </motion.div>
      </Container>

      {/* Scroll Down Indicator */}
      <motion.a
        href="#about"
        aria-label="انزل إلى قسم من نحن"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-1 text-espresso/60 hover:text-caramel transition-colors sm:flex"
      >
        <span className="text-xs font-medium">اكتشف المزيد</span>
        <ArrowDown size={18} />
      </motion.a>
    </section>
  );
}
