import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import SectionTitle from "../ui/SectionTitle";
import { Coffee, Award, Users, ShieldCheck, HeartHandshake } from "lucide-react";
import { motion } from "framer-motion";
import { asset } from "../../lib/utils";

const stats = [
  { value: "+12", label: "نوع بن مختص", icon: Coffee },
  { value: "+5,000", label: "زبون سعيد", icon: Users },
  { value: "100%", label: "تحميص طازج", icon: Award },
];

export default function About() {
  return (
    <section id="about" className="relative py-16 md:py-28 overflow-hidden">
      <Container>
        <div className="grid items-center gap-12 md:grid-cols-2 lg:gap-20">
          {/* Left Column: Image with floating badge & decorative frames */}
          <Reveal>
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Back decorative colored box */}
              <div className="absolute -inset-4 rounded-3xl bg-caramel/10 -rotate-2 -z-10" />
              
              <div className="overflow-hidden rounded-3xl border-2 border-espresso/10 bg-espresso shadow-2xl">
                <motion.img
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.6 }}
                  src={asset("/img/cafe 1.jpg")}
                  alt="محمصة كافيه بن وحكاية"
                  loading="lazy"
                  className="aspect-[4/5] w-full object-cover"
                />
              </div>

              {/* Floating Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="absolute -bottom-6 -end-4 rounded-2xl bg-espresso p-5 text-cream shadow-2xl border border-cream/15 flex items-center gap-4"
              >
                <div className="flex size-12 items-center justify-center rounded-xl bg-caramel text-cream font-bold">
                  <Coffee size={24} />
                </div>
                <div>
                  <p className="font-serif text-2xl font-bold text-caramel">منذ 2018</p>
                  <p className="text-xs text-cream/80">نصنع القهوة بحب وشغف</p>
                </div>
              </motion.div>
            </div>
          </Reveal>

          {/* Right Column: Story & Philosophy */}
          <div>
            <SectionTitle
              eyebrow="حكايتنا وشغفنا"
              title="مكان صُنع لتقدير القهوة واللحظات الصادقة"
              className="md:text-start md:mb-6"
            />
            
            <Reveal delay={0.1}>
              <p className="leading-loose text-espresso/80 sm:text-lg">
                بدأت حكايتنا بشغف أصيل نحو استكشاف نكهات البن المختص الحقيقية. نسافر ونتواصل مباشرة مع مزارع البن في إثيوبيا، كولومبيا، واليمن، لنختار المحاصيل ذات التقييمات العالمية الأعلى.
              </p>
            </Reveal>

            <Reveal delay={0.18}>
              <p className="mt-4 leading-loose text-espresso/75">
                في محمصتنا الخاصة، نضبط بروفايلات التحميص بدقة متناهية لإبراز الإيحاءات الطبيعية للفاكهة، الأزهار والكراميل. بنينا "بن وحكاية" ليكون ملجأك الهادئ، ومكتبك المريح، ومساحة تجمعك بمن تحب على فنجان لا يُنسى.
              </p>
            </Reveal>

            {/* Stats Row */}
            <div className="mt-8 grid grid-cols-3 gap-3 sm:gap-5">
              {stats.map((s, i) => {
                const Icon = s.icon;
                return (
                  <Reveal key={s.label} delay={0.25 + i * 0.1}>
                    <motion.div
                      whileHover={{ y: -4 }}
                      className="group rounded-2xl bg-latte/70 p-4 text-center transition-all duration-300 hover:bg-latte hover:shadow-md border border-espresso/5"
                    >
                      <div className="mx-auto mb-2 flex size-8 items-center justify-center rounded-full bg-caramel/15 text-caramel transition-colors group-hover:bg-caramel group-hover:text-white">
                        <Icon size={16} />
                      </div>
                      <p className="font-serif text-2xl font-bold text-caramel sm:text-3xl">{s.value}</p>
                      <p className="mt-1 text-xs font-semibold text-espresso/70 sm:text-sm">{s.label}</p>
                    </motion.div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
