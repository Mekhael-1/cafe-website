import { Coffee, Flame, HeartHandshake, Award, Sparkles, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import SectionTitle from "../ui/SectionTitle";

const features = [
  {
    icon: Coffee,
    title: "بن مختص 100%",
    desc: "نستورد محاصيل بن منتقاة بعناية من أفضل مزارع إثيوبيا، كولومبيا واليمن بتقييم كبينغ لا يقل عن 85 نقطة.",
    badge: "محاصيل معتمدة",
  },
  {
    icon: Flame,
    title: "تحميص حرفي طازج",
    desc: "نحمص أسبوعياً بأحدث المحامص المتطورة لضمان خروج جميع النكهات والإيحاءات العطرية بأعلى دقة.",
    badge: "إنتاج أسبوعي",
  },
  {
    icon: HeartHandshake,
    title: "أجواء ملهمة ومريحة",
    desc: "مساحات مجهزة بهدوء فائق، إضاءة مدروسة ومقاعد مريحة لتكون مكتبك المفضل أو لقاءك الأدفأ.",
    badge: "جلسات متنوعة",
  },
  {
    icon: Award,
    title: "باريستا محترفون",
    desc: "فريق معتمد وذو شغف يقدم لك كل كوب بمعايير استخلاص دقيقة ومقاييس حرارة وحبيبات مضبوطة بالميزان.",
    badge: "معايير عالمية",
  },
];

export default function Features() {
  return (
    <section id="features" className="relative py-16 md:py-28 bg-latte/30 overflow-hidden">
      <Container>
        <SectionTitle eyebrow="سر التميز والجودة" title="لماذا يختارنا عشاق القهوة؟" />
        
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feat, i) => {
            const Icon = feat.icon;
            return (
              <Reveal key={feat.title} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -8, transition: { duration: 0.25 } }}
                  className="group relative h-full flex flex-col justify-between rounded-3xl bg-white p-7 shadow-sm border border-espresso/10 transition-all duration-300 hover:shadow-xl hover:shadow-caramel/10"
                >
                  <div>
                    <div className="mb-5 flex items-center justify-between">
                      <div className="flex size-14 items-center justify-center rounded-2xl bg-caramel/10 text-caramel transition-colors duration-300 group-hover:bg-caramel group-hover:text-white">
                        <Icon size={28} />
                      </div>
                      <span className="rounded-full bg-cream px-3 py-1 text-xs font-bold text-espresso/70 border border-espresso/5">
                        {feat.badge}
                      </span>
                    </div>

                    <h3 className="font-serif text-xl font-bold text-espresso transition-colors duration-300 group-hover:text-caramel">
                      {feat.title}
                    </h3>
                    
                    <p className="mt-3 text-sm leading-relaxed text-espresso/75">
                      {feat.desc}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-espresso/5 flex items-center gap-1.5 text-xs font-semibold text-caramel opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <Sparkles size={14} />
                    <span>تجربة تستحق التكرار</span>
                  </div>
                </motion.div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
