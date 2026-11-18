import { useState } from "react";
import { motion, useMotionValueEvent, useScroll, useSpring } from "framer-motion";
import { Coffee, Menu as MenuIcon, X } from "lucide-react";
import { navLinks } from "../../data/links";
import MobileMenu from "./MobileMenu";
import Button from "../ui/Button";
import Container from "../ui/Container";
import { cn } from "../../lib/utils";

export default function Navbar() {
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const { scrollY, scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });

  useMotionValueEvent(scrollY, "change", (y) => {
    const prev = scrollY.getPrevious() ?? 0;
    setHidden(y > prev && y > 150 && !open);
    setScrolled(y > 50);
  });

  const solid = scrolled || open;

  return (
    <>
      <motion.header
        animate={{ y: hidden ? "-110%" : 0 }}
        transition={{ duration: 0.3 }}
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
          solid ? "bg-cream/90 shadow-sm backdrop-blur-md" : "bg-transparent",
          open && "bg-transparent shadow-none backdrop-blur-none"
        )}
      >
        <Container className="flex h-16 items-center justify-between md:h-20">
          <a href="#top" className={cn("flex items-center gap-2 font-serif text-2xl font-bold", open ? "text-cream" : "text-espresso")}>
            <Coffee className="text-caramel" size={26} />
            بن وحكاية
          </a>

          <nav className="hidden items-center gap-6 lg:gap-8 md:flex" aria-label="التنقل الرئيسي">
            {navLinks.filter(l => l.href !== "#reservation").map((link) => (
              <a key={link.href} href={link.href} className="group relative text-sm font-medium lg:text-base transition-colors hover:text-caramel">
                {link.label}
                <span className="absolute -bottom-1 start-0 h-0.5 w-0 bg-caramel transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
            <Button href="#reservation" className="px-5 py-2">احجز طاولة</Button>
          </nav>

          <button
            className={cn("flex size-11 items-center justify-center md:hidden", open ? "text-cream" : "text-espresso")}
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "إغلاق القائمة" : "فتح القائمة"}
            aria-expanded={open}
          >
            {open ? <X size={26} /> : <MenuIcon size={26} />}
          </button>
        </Container>

        <motion.div style={{ scaleX: progress }} className="h-0.5 origin-right bg-caramel" />
      </motion.header>

      <MobileMenu open={open} onClose={() => setOpen(false)} />
    </>
  );
}
