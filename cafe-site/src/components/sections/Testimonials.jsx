import { useState } from "react";
import { Quote, Star, Sparkles, CheckCircle, PlusCircle, X, Send, Heart } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { testimonials as initialTestimonials } from "../../data/testimonials";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import SectionTitle from "../ui/SectionTitle";
import Button from "../ui/Button";

export default function Testimonials() {
  const [list, setList] = useState(initialTestimonials);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [hoverRating, setHoverRating] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    role: "",
    rating: 5,
    text: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.text.trim()) return;

    const newReview = {
      id: Date.now(),
      name: formData.name.trim(),
      role: formData.role.trim() || "عميل مميز",
      rating: formData.rating,
      text: formData.text.trim(),
      isNew: true,
    };

    setList((prev) => [newReview, ...prev]);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setIsModalOpen(false);
      setFormData({ name: "", role: "", rating: 5, text: "" });
    }, 1800);
  };

  return (
    <section id="testimonials" className="relative bg-roast py-16 md:py-28 overflow-hidden text-cream">
      {/* Background soft ambient accents */}
      <div className="pointer-events-none absolute -top-32 start-10 size-80 rounded-full bg-caramel/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 end-10 size-80 rounded-full bg-terracotta/10 blur-3xl" />

      <Container className="relative z-10">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row md:items-end mb-12">
          <SectionTitle
            eyebrow="آراء وتجارب روادنا"
            title="ماذا قالوا عن تجربتهم معنا"
            light
            className="mb-0 text-center md:text-start"
          />

          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsModalOpen(true)}
            className="inline-flex items-center gap-2 rounded-full bg-caramel px-6 py-3 text-sm font-bold text-cream shadow-lg shadow-caramel/25 transition-all hover:bg-terracotta"
          >
            <PlusCircle size={18} />
            <span>شاركنا تقييمك وتجربتك</span>
          </motion.button>
        </div>

        {/* Reviews Grid */}
        <motion.div layout className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {list.map((t, i) => (
              <motion.div
                key={t.id}
                layout
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
              >
                <motion.figure
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ duration: 0.25 }}
                  className="group relative flex h-full flex-col justify-between rounded-3xl border border-cream/10 bg-cream/5 p-7 text-cream backdrop-blur-sm transition-all duration-300 hover:border-caramel/50 hover:bg-cream/10 hover:shadow-2xl hover:shadow-caramel/15"
                >
                  {/* Subtle top indicator for user reviews */}
                  {t.isNew && (
                    <span className="absolute -top-3 start-6 rounded-full bg-caramel px-3 py-0.5 text-[11px] font-bold text-white shadow-md animate-pulse">
                      تقييم جديد ✨
                    </span>
                  )}

                  <div>
                    <div className="mb-5 flex items-center justify-between">
                      <div className="flex size-11 items-center justify-center rounded-2xl bg-caramel/15 text-caramel transition-colors group-hover:bg-caramel group-hover:text-white">
                        <Quote size={22} />
                      </div>
                      
                      {/* Rating Stars */}
                      <div className="flex gap-1 text-caramel" aria-label={`تقييم ${t.rating || 5} نجوم`}>
                        {Array.from({ length: 5 }).map((_, k) => (
                          <Star
                            key={k}
                            size={16}
                            className={k < (t.rating || 5) ? "fill-caramel text-caramel" : "text-cream/20"}
                          />
                        ))}
                      </div>
                    </div>

                    <blockquote className="text-base leading-loose text-cream/90 font-normal">
                      "{t.text}"
                    </blockquote>
                  </div>

                  <figcaption className="mt-6 border-t border-cream/10 pt-4 flex items-center justify-between">
                    <div>
                      <p className="font-serif text-lg font-bold text-cream group-hover:text-caramel transition-colors">
                        {t.name}
                      </p>
                      <p className="text-xs text-cream/60">{t.role}</p>
                    </div>
                    <span className="flex items-center gap-1 rounded-full bg-sage/20 px-2.5 py-1 text-[11px] font-semibold text-sage">
                      <CheckCircle size={12} />
                      عميل موثق
                    </span>
                  </figcaption>
                </motion.figure>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </Container>

      {/* Write a Review Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsModalOpen(false)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-roast/90 p-4 backdrop-blur-md"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", stiffness: 350, damping: 28 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-lg overflow-hidden rounded-3xl bg-espresso border border-cream/15 p-6 sm:p-8 shadow-2xl text-cream"
            >
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-5 end-5 flex size-9 items-center justify-center rounded-full bg-white/10 text-cream transition hover:bg-caramel hover:rotate-90"
                aria-label="إغلاق"
              >
                <X size={18} />
              </button>

              <div className="mb-6">
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-caramel mb-1">
                  <Sparkles size={14} />
                  رأيك يهمنا ويصنع الفرق
                </span>
                <h3 className="font-serif text-2xl font-bold">أضف تقييمك للمكان</h3>
                <p className="text-xs text-cream/70 mt-1">شاركنا انطباعك عن القهوة، المخبوزات، أو الخدمة والأجواء.</p>
              </div>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-10 text-center"
                >
                  <div className="mx-auto mb-4 flex size-16 items-center justify-center rounded-full bg-sage/20 text-sage">
                    <Heart size={32} className="fill-sage animate-bounce" />
                  </div>
                  <h4 className="font-serif text-2xl font-bold">شكراً جزيلاً لرأيك!</h4>
                  <p className="mt-2 text-sm text-cream/70">تمت إضافة تقييمك بنجاح وسيظهر للجميع في القائمة.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Rating Selector */}
                  <div>
                    <label className="block text-xs font-medium text-cream/80 mb-2">تقييمك بالنجوم:</label>
                    <div className="flex items-center gap-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          type="button"
                          onClick={() => setFormData({ ...formData, rating: star })}
                          onMouseEnter={() => setHoverRating(star)}
                          onMouseLeave={() => setHoverRating(0)}
                          className="p-1 transition-transform hover:scale-125 focus:outline-none"
                        >
                          <Star
                            size={28}
                            className={`transition-colors ${
                              (hoverRating || formData.rating) >= star
                                ? "fill-caramel text-caramel"
                                : "text-cream/25"
                            }`}
                          />
                        </button>
                      ))}
                      <span className="ms-2 text-xs font-bold text-caramel">
                        {formData.rating} من 5 نجوم
                      </span>
                    </div>
                  </div>

                  {/* Name and Role */}
                  <div className="grid gap-3 sm:grid-cols-2">
                    <div>
                      <label className="block text-xs font-medium text-cream/80 mb-1.5">الاسم الكامل *</label>
                      <input
                        required
                        type="text"
                        placeholder="مثال: ياسمين عادل"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full rounded-2xl border border-cream/15 bg-white/5 px-4 py-2.5 text-sm text-cream placeholder:text-cream/30 outline-none transition focus:border-caramel focus:bg-white/10 focus:ring-1 focus:ring-caramel"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-cream/80 mb-1.5">المهنة / الصفة (اختياري)</label>
                      <input
                        type="text"
                        placeholder="مثال: محبة للقهوة المختصة"
                        value={formData.role}
                        onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                        className="w-full rounded-2xl border border-cream/15 bg-white/5 px-4 py-2.5 text-sm text-cream placeholder:text-cream/30 outline-none transition focus:border-caramel focus:bg-white/10 focus:ring-1 focus:ring-caramel"
                      />
                    </div>
                  </div>

                  {/* Review Text */}
                  <div>
                    <label className="block text-xs font-medium text-cream/80 mb-1.5">تجربتك وتقييمك *</label>
                    <textarea
                      required
                      rows={3}
                      placeholder="صف تجربتك معنا، ما الذي أعجبك أكثر شيئ؟"
                      value={formData.text}
                      onChange={(e) => setFormData({ ...formData, text: e.target.value })}
                      className="w-full rounded-2xl border border-cream/15 bg-white/5 px-4 py-2.5 text-sm text-cream placeholder:text-cream/30 outline-none transition focus:border-caramel focus:bg-white/10 focus:ring-1 focus:ring-caramel resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 rounded-2xl bg-caramel py-3 text-sm font-bold text-cream shadow-lg shadow-caramel/25 transition hover:bg-terracotta"
                  >
                    <Send size={16} />
                    <span>نشر التقييم الآن</span>
                  </motion.button>
                </form>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
