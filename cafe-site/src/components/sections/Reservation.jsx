import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle2, Calendar, Clock, Users, User, Phone, MessageSquare, Coffee, Sparkles } from "lucide-react";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import SectionTitle from "../ui/SectionTitle";
import Button from "../ui/Button";

const times = [
  "09:00 ص", "10:30 ص", "12:00 م", "01:30 م", 
  "03:00 م", "04:30 م", "06:00 م", "07:30 م", 
  "09:00 م", "10:30 م"
];

const seatingPreferences = [
  "صالة داخلية هادئة",
  "جلسة خارجية (تراس مشمس)",
  "ركن عمل / بار القهوة",
  "طاولة عائلية خاصة"
];

export default function Reservation() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({
    name: "",
    phone: "",
    date: "",
    time: "06:00 م",
    guests: "2",
    seating: "صالة داخلية هادئة",
    notes: "",
  });

  const onChange = (e) => setData((d) => ({ ...d, [e.target.name]: e.target.value }));

  const onSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSent(true);
    }, 600);
  };

  const today = new Date().toISOString().split("T")[0];

  return (
    <section id="reservation" className="relative py-16 md:py-28 bg-latte/30 overflow-hidden">
      {/* Decorative background blurs */}
      <div className="pointer-events-none absolute -bottom-24 start-1/4 size-80 rounded-full bg-caramel/15 blur-3xl" />

      <Container className="relative z-10">
        <div className="mx-auto max-w-3xl">
          <SectionTitle eyebrow="تجربة خاصة ومريحة" title="احجز طاولتك المفضلة مسبقاً" />
          
          <Reveal delay={0.1}>
            <div className="relative overflow-hidden rounded-3xl bg-white p-6 shadow-xl border border-espresso/10 sm:p-10 md:p-12 transition-all duration-300 hover:shadow-2xl hover:shadow-caramel/10">
              <AnimatePresence mode="wait">
                {sent ? (
                  <motion.div
                    key="done"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="py-10 text-center"
                  >
                    <div className="mx-auto mb-5 inline-flex size-20 items-center justify-center rounded-full bg-sage/15 text-sage">
                      <CheckCircle2 size={46} />
                    </div>
                    <h3 className="font-serif text-3xl font-bold text-espresso">تم تأكيد طلب حجزك بنجاح!</h3>
                    <p className="mx-auto mt-4 max-w-md text-base leading-relaxed text-espresso/75">
                      شكراً لك يا <span className="font-bold text-caramel">{data.name}</span>. لقد استلمنا تفاصيل حجزك ليوم{" "}
                      <span className="font-semibold text-espresso">{data.date}</span> في تمام{" "}
                      <span className="font-semibold text-espresso">{data.time}</span> لعدد ({data.guests}) أفراد، في قسم{" "}
                      <span className="font-semibold text-espresso">({data.seating})</span>.
                    </p>
                    <div className="mt-8">
                      <Button
                        type="button"
                        onClick={() => {
                          setSent(false);
                          setData({
                            name: "",
                            phone: "",
                            date: "",
                            time: "06:00 م",
                            guests: "2",
                            seating: "صالة داخلية هادئة",
                            notes: "",
                          });
                        }}
                        variant="outline"
                      >
                        حجز موعد جديد
                      </Button>
                    </div>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    onSubmit={onSubmit}
                    exit={{ opacity: 0 }}
                    className="space-y-6"
                  >
                    <div className="grid gap-5 sm:grid-cols-2">
                      {/* Name */}
                      <div>
                        <label className="mb-2 flex items-center gap-1.5 text-sm font-semibold text-espresso">
                          <User size={16} className="text-caramel" />
                          الاسم الكامل
                        </label>
                        <input
                          required
                          type="text"
                          name="name"
                          placeholder="مثال: أحمد عبد الله"
                          value={data.name}
                          onChange={onChange}
                          className="w-full rounded-2xl border border-espresso/15 bg-cream/30 px-4 py-3 text-sm outline-none transition focus:border-caramel focus:bg-white focus:ring-2 focus:ring-caramel/20"
                        />
                      </div>

                      {/* Phone */}
                      <div>
                        <label className="mb-2 flex items-center gap-1.5 text-sm font-semibold text-espresso">
                          <Phone size={16} className="text-caramel" />
                          رقم الهاتف / الواتساب
                        </label>
                        <input
                          required
                          type="tel"
                          name="phone"
                          dir="ltr"
                          placeholder="+20 100 123 4567"
                          value={data.phone}
                          onChange={onChange}
                          className="w-full rounded-2xl border border-espresso/15 bg-cream/30 px-4 py-3 text-end text-sm outline-none transition focus:border-caramel focus:bg-white focus:ring-2 focus:ring-caramel/20"
                        />
                      </div>

                      {/* Date */}
                      <div>
                        <label className="mb-2 flex items-center gap-1.5 text-sm font-semibold text-espresso">
                          <Calendar size={16} className="text-caramel" />
                          تاريخ الحجز
                        </label>
                        <input
                          required
                          type="date"
                          name="date"
                          min={today}
                          value={data.date}
                          onChange={onChange}
                          className="w-full rounded-2xl border border-espresso/15 bg-cream/30 px-4 py-3 text-sm outline-none transition focus:border-caramel focus:bg-white focus:ring-2 focus:ring-caramel/20"
                        />
                      </div>

                      {/* Time */}
                      <div>
                        <label className="mb-2 flex items-center gap-1.5 text-sm font-semibold text-espresso">
                          <Clock size={16} className="text-caramel" />
                          الوقت المفضل
                        </label>
                        <select
                          name="time"
                          value={data.time}
                          onChange={onChange}
                          className="w-full rounded-2xl border border-espresso/15 bg-cream/30 px-4 py-3 text-sm outline-none transition focus:border-caramel focus:bg-white focus:ring-2 focus:ring-caramel/20"
                        >
                          {times.map((t) => (
                            <option key={t} value={t}>{t}</option>
                          ))}
                        </select>
                      </div>

                      {/* Guests */}
                      <div>
                        <label className="mb-2 flex items-center gap-1.5 text-sm font-semibold text-espresso">
                          <Users size={16} className="text-caramel" />
                          عدد الضيوف
                        </label>
                        <select
                          name="guests"
                          value={data.guests}
                          onChange={onChange}
                          className="w-full rounded-2xl border border-espresso/15 bg-cream/30 px-4 py-3 text-sm outline-none transition focus:border-caramel focus:bg-white focus:ring-2 focus:ring-caramel/20"
                        >
                          {[1, 2, 3, 4, 5, 6, "7 - 10 (مجموعة)", "+10 (مناسبة خاصة)"].map((n) => (
                            <option key={n} value={n}>{n} فرد</option>
                          ))}
                        </select>
                      </div>

                      {/* Seating Preference */}
                      <div>
                        <label className="mb-2 flex items-center gap-1.5 text-sm font-semibold text-espresso">
                          <Coffee size={16} className="text-caramel" />
                          تفضيل الجلسة
                        </label>
                        <select
                          name="seating"
                          value={data.seating}
                          onChange={onChange}
                          className="w-full rounded-2xl border border-espresso/15 bg-cream/30 px-4 py-3 text-sm outline-none transition focus:border-caramel focus:bg-white focus:ring-2 focus:ring-caramel/20"
                        >
                          {seatingPreferences.map((seat) => (
                            <option key={seat} value={seat}>{seat}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Notes */}
                    <div>
                      <label className="mb-2 flex items-center gap-1.5 text-sm font-semibold text-espresso">
                        <MessageSquare size={16} className="text-caramel" />
                        ملاحظات أو مناسبة خاصة (اختياري)
                      </label>
                      <textarea
                        name="notes"
                        rows={3}
                        placeholder="احتفال بعيد ميلاد، رغبة في زاوية عمل هادئة مع مأخذ كهرباء، أو أي تفضيل آخر..."
                        value={data.notes}
                        onChange={onChange}
                        className="w-full rounded-2xl border border-espresso/15 bg-cream/30 px-4 py-3 text-sm outline-none transition focus:border-caramel focus:bg-white focus:ring-2 focus:ring-caramel/20 resize-none"
                      />
                    </div>

                    <Button
                      type="submit"
                      variant="dark"
                      disabled={loading}
                      className="w-full py-4 text-base shadow-xl shadow-espresso/10 transition-all hover:bg-caramel"
                    >
                      {loading ? "جاري تسجيل الحجز..." : "تأكيد وحجز الطاولة الآن"}
                    </Button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
