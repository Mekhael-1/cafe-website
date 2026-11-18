import { motion } from "framer-motion";
import { cn } from "../../lib/utils";

const variants = {
  primary: "bg-caramel text-cream hover:bg-terracotta",
  dark: "bg-espresso text-cream hover:bg-roast",
  outline: "border border-espresso/30 text-espresso hover:bg-espresso hover:text-cream",
  light: "border border-cream/40 text-cream hover:bg-cream hover:text-espresso",
};

export default function Button({ href, variant = "primary", className, children, ...props }) {
  const classes = cn(
    "inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-6 py-2.5 text-sm font-semibold transition-colors sm:text-base",
    variants[variant],
    className
  );
  const motionProps = { whileTap: { scale: 0.96 }, whileHover: { scale: 1.03 } };

  if (href) {
    return (
      <motion.a href={href} className={classes} {...motionProps} {...props}>
        {children}
      </motion.a>
    );
  }
  return (
    <motion.button className={classes} {...motionProps} {...props}>
      {children}
    </motion.button>
  );
}
