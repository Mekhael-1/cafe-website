import { motion } from "framer-motion";
import { Sparkles, Flame, Plus, Check } from "lucide-react";
import { useState } from "react";
import { asset } from "../../../lib/utils";

export default function MenuCard({ item, onOrder }) {
  const [ordered, setOrdered] = useState(false);

  const handleOrder = () => {
    setOrdered(true);
    if (onOrder) onOrder(item);
    setTimeout(() => setOrdered(false), 2000);
  };

  return (
    <motion.article
      layout
      initial={{ opacity: 0, scale: 0.94 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.94 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -8, transition: { duration: 0.25 } }}
      className="group relative flex h-full flex-col justify-between overflow-hidden rounded-3xl bg-white p-3.5 sm:p-4 shadow-sm transition-all duration-300 hover:shadow-2xl hover:shadow-caramel/15 border border-espresso/10"
    >
      <div>
        {/* Frame container for the product image: Perfectly centered, sized to card, with rounded inner border */}
        <div className="relative aspect-square sm:aspect-[4/3] w-full overflow-hidden rounded-2xl bg-cream/50 flex items-center justify-center p-2 border border-espresso/5">
          {item.badge && (
            <span className="absolute top-3 end-3 z-10 inline-flex items-center gap-1.5 rounded-full bg-caramel/95 px-3 py-1 text-xs font-bold text-cream shadow-md backdrop-blur-md transition-transform duration-300 group-hover:scale-105">
              <Sparkles size={13} className="text-cream" />
              {item.badge}
            </span>
          )}
          
          <img
            src={asset(item.img)}
            alt={item.name}
            loading="lazy"
            className="h-full w-full object-cover object-center rounded-xl transition-transform duration-700 ease-out group-hover:scale-108"
          />

          {/* Soft vignette overlay on hover */}
          <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-t from-espresso/40 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          
          {/* Subtle light sweep reflection */}
          <div className="pointer-events-none absolute -inset-full top-0 block h-full w-1/2 -skew-x-12 bg-gradient-to-r from-transparent to-white/20 opacity-0 transition-all duration-700 group-hover:inset-full group-hover:opacity-100" />
        </div>

        {/* Content details */}
        <div className="px-2 pt-4 pb-2">
          <div className="flex items-start justify-between gap-2.5">
            <h3 className="font-serif text-lg font-bold text-espresso sm:text-xl transition-colors duration-300 group-hover:text-caramel">
              {item.name}
            </h3>
            <span className="whitespace-nowrap rounded-xl bg-caramel/10 px-2.5 py-1 font-sans text-base font-bold text-caramel">
              {item.price} ج.م
            </span>
          </div>
          
          <p className="mt-2.5 text-sm leading-relaxed text-espresso/75 line-clamp-2">
            {item.desc}
          </p>
        </div>
      </div>

      {/* Footer Info: Calories & Quick Add Button */}
      <div className="mt-3 border-t border-espresso/5 bg-cream/30 px-3 py-2.5 rounded-2xl flex items-center justify-between">
        {item.calories ? (
          <div className="flex items-center gap-1.5 text-xs font-semibold text-espresso/60">
            <Flame size={14} className="text-terracotta" />
            <span>{item.calories}</span>
          </div>
        ) : (
          <span />
        )}

        <button
          onClick={handleOrder}
          type="button"
          aria-label={`طلب ${item.name}`}
          className={`flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-xs font-bold transition-all duration-200 active:scale-95 ${
            ordered
              ? "bg-sage text-white shadow-sm"
              : "bg-espresso/5 text-espresso hover:bg-caramel hover:text-white"
          }`}
        >
          {ordered ? (
            <>
              <Check size={14} />
              <span>تمت الإضافة!</span>
            </>
          ) : (
            <>
              <Plus size={14} />
              <span>طلب سريع</span>
            </>
          )}
        </button>
      </div>
    </motion.article>
  );
}
