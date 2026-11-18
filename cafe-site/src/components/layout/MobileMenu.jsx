import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { navLinks } from "../../data/links";
import Button from "../ui/Button";

export default function MobileMenu({ open, onClose }) {
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          key="mobile-menu"
          initial={{ opacity: 0, x: "100%" }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: "100%" }}
          transition={{ type: "tween", duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-6 bg-roast/98 px-6 text-cream backdrop-blur-lg md:hidden"
        >
          {navLinks.map((link, i) => (
            <motion.a
              key={link.href}
              href={link.href}
              onClick={onClose}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 + i * 0.07 }}
              className="font-serif text-3xl transition-colors hover:text-caramel"
            >
              {link.label}
            </motion.a>
          ))}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.55 }}>
            <Button href="#reservation" onClick={onClose}>احجز طاولتك</Button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
