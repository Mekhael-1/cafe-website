import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn, Eye, Sparkles } from "lucide-react";
import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";
import Reveal from "../ui/Reveal";

const photos = [
  { id: 1, src: "/img/gallery/decor1.jpg", title: "ركن التحضير والترشيح V60", tag: "تحضير يدوي", desc: "ترشيح يدوي دقيق بمحاصيل إثيوبية وكولومبية منتقاة بعناية لتقديم نكهة نقية." },
  { id: 2, src: "/img/gallery/decor2.jpg", title: "الجلسة الخارجية الصباحية", tag: "جلسات هادئة", desc: "أشعة الشمس الصباحية مع نسيم عليل ورائحة القهوة الطازجة تبدأ بها يومك." },
  { id: 3, src: "/img/gallery/barsta 1.avif", title: "رسم اللاتيه آرت الحرفي", tag: "باريستا محترف", desc: "إتقان فني في صب الحليب المبخر بدقة لإنتاج رسومات دقيقة وتجربة بصرية فريدة." },
  { id: 4, src: "/img/gallery/decor 3.jpg", title: "ركن القراءة والكتب", tag: "مساحة هادئة", desc: "إضاءة دافئة وكتب ملهمة مع زوايا مريحة للعمل أو القراءة والتأمل." },
  { id: 5, src: "/img/gallery/eat 1.jpg", title: "تشكيلة المخبوزات اليومية", tag: "مخبوزات طازجة", desc: "مخبوزات تخرج ساخنة من الفرن كل صباح بمكونات طبيعية وزبدة فرنسية." },
  { id: 6, src: "/img/gallery/decor4.jpg", title: "أجواء المساء الدافئة", tag: "أجواء ساحرة", desc: "إضاءات هادئة وموسيقى كلاسيكية تجعل المساء في بن وحكاية تجربة لا تُنسى." },
];

const spans = ["row-span-2", "", "", "row-span-2", "", ""];

export default function Gallery() {
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  return (
    <section id="gallery" className="relative overflow-hidden py-16 md:py-28">
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute inset-0 -z-0">
        <div className="absolute top-1/4 start-1/2 -translate-x-1/2 size-96 rounded-full bg-caramel/5 blur-3xl" />
      </div>

      <Container className="relative z-10">
        <SectionTitle eyebrow="المعرض الحي" title="لحظات وأجواء من داخل مكاننا" />
        
        <div className="grid auto-rows-[12rem] grid-cols-2 gap-4 sm:auto-rows-[14rem] sm:gap-5 md:grid-cols-3 lg:auto-rows-[16rem]">
          {photos.map((p, i) => (
            <Reveal
              key={p.id}
              delay={(i % 3) * 0.08}
              className={`${spans[i]} group relative cursor-pointer overflow-hidden rounded-3xl border border-espresso/10 bg-espresso/5 shadow-sm transition-all duration-500 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-caramel/15`}
            >
              <div onClick={() => setSelectedPhoto(p)} className="h-full w-full">
                <motion.img
                  src={p.src}
                  alt={p.title}
                  loading="lazy"
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className="h-full w-full object-cover"
                />
                
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-espresso/90 via-espresso/30 to-transparent opacity-0 backdrop-blur-[2px] transition-all duration-300 group-hover:opacity-100 flex flex-col justify-end p-5 text-cream">
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold text-caramel mb-1">
                    <Sparkles size={12} />
                    {p.tag}
                  </span>
                  <p className="font-serif text-base sm:text-lg font-bold leading-snug">{p.title}</p>
                </div>

                {/* Hover Action Badge */}
                <div className="absolute top-3 end-3 flex size-10 items-center justify-center rounded-full bg-espresso/70 text-cream opacity-0 backdrop-blur-md transition-all duration-300 group-hover:opacity-100 group-hover:scale-100 scale-75 shadow-lg">
                  <ZoomIn size={18} />
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedPhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedPhoto(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-roast/90 p-4 backdrop-blur-md"
          >
            <motion.div
              initial={{ scale: 0.88, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.88, opacity: 0, y: 20 }}
              transition={{ type: "spring", stiffness: 350, damping: 28 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-h-[92vh] max-w-4xl overflow-hidden rounded-3xl bg-espresso border border-cream/15 shadow-2xl"
            >
              <button
                onClick={() => setSelectedPhoto(null)}
                className="absolute top-4 end-4 z-20 flex size-10 items-center justify-center rounded-full bg-roast/80 text-cream transition hover:bg-caramel hover:scale-110 active:scale-95"
                aria-label="إغلاق"
              >
                <X size={20} />
              </button>
              
              <div className="relative aspect-[4/3] max-h-[65vh] w-full bg-roast">
                <img
                  src={selectedPhoto.src}
                  alt={selectedPhoto.title}
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="bg-espresso p-6 text-cream border-t border-cream/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-caramel mb-1">
                    <Sparkles size={12} />
                    {selectedPhoto.tag}
                  </span>
                  <h4 className="font-serif text-xl sm:text-2xl font-bold">{selectedPhoto.title}</h4>
                  <p className="mt-1 text-sm text-cream/70 max-w-lg leading-relaxed">{selectedPhoto.desc}</p>
                </div>
                <div className="flex items-center gap-2 self-end sm:self-center">
                  <span className="rounded-full bg-cream/10 px-3 py-1 text-xs text-cream/80 border border-cream/10">بن وحكاية ©</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
