import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { categories, menuItems } from "../../../data/menu";
import Container from "../../ui/Container";
import Reveal from "../../ui/Reveal";
import SectionTitle from "../../ui/SectionTitle";
import CategoryFilter from "./CategoryFilter";
import MenuCard from "./MenuCard";
import { ShoppingBag, Check } from "lucide-react";

export default function MenuSection() {
  const [active, setActive] = useState("الكل");
  const [toast, setToast] = useState(null);

  const filtered = useMemo(
    () => (active === "الكل" ? menuItems : menuItems.filter((i) => i.category === active)),
    [active]
  );

  const handleOrder = (item) => {
    setToast(item.name);
    setTimeout(() => {
      setToast(null);
    }, 2800);
  };

  return (
    <section id="menu" className="relative bg-latte/40 py-16 md:py-28 overflow-hidden">
      {/* Decorative background glow */}
      <div className="pointer-events-none absolute -start-40 top-1/3 size-96 rounded-full bg-caramel/10 blur-3xl" />
      <div className="pointer-events-none absolute -end-40 bottom-1/4 size-96 rounded-full bg-terracotta/10 blur-3xl" />

      <Container className="relative z-10">
        <SectionTitle
          eyebrow="قائمتنا المختارة"
          title="نكهات صُنعت بحرفية وإتقان"
        />

        <Reveal delay={0.1}>
          <CategoryFilter categories={categories} active={active} onChange={setActive} />
        </Reveal>

        <motion.div
          layout
          className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((item) => (
              <MenuCard key={item.id} item={item} onOrder={handleOrder} />
            ))}
          </AnimatePresence>
        </motion.div>
      </Container>

      {/* Floating Toast Notification on Quick Order */}
      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.9 }}
            className="fixed bottom-6 start-1/2 z-50 -translate-x-1/2 flex items-center gap-3 rounded-full bg-espresso px-5 py-3 text-cream shadow-2xl border border-cream/20 backdrop-blur-md"
          >
            <div className="flex size-7 items-center justify-center rounded-full bg-sage text-white">
              <Check size={16} />
            </div>
            <p className="text-sm font-medium">
              تمت إضافة <span className="font-bold text-caramel">"{toast}"</span> إلى طلبك!
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
