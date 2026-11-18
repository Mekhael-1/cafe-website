import { motion } from "framer-motion";
import { cn } from "../../../lib/utils";

export default function CategoryFilter({ categories, active, onChange }) {
  return (
    <div className="no-scrollbar -mx-4 overflow-x-auto px-4 md:mx-0 md:overflow-visible md:px-0">
      <div role="tablist" className="mx-auto flex w-max gap-2 md:w-auto md:justify-center">
        {categories.map((cat) => {
          const isActive = active === cat;
          return (
            <button
              key={cat}
              role="tab"
              aria-selected={isActive}
              onClick={() => onChange(cat)}
              className={cn(
                "relative min-h-11 whitespace-nowrap rounded-full px-5 text-sm font-medium transition-colors",
                isActive ? "text-cream" : "text-espresso hover:text-caramel"
              )}
            >
              {isActive && (
                <motion.span
                  layoutId="active-pill"
                  className="absolute inset-0 rounded-full bg-espresso"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              <span className="relative z-10">{cat}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
