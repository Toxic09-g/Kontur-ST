import { useMemo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Keyboard,
  Mousewheel,
  EffectCoverflow,
  A11y,
  Autoplay,
} from "swiper/modules";

// Swiper стили
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

// Неоновые иконки (SVG с currentColor)
const IconCam = (p)=>(
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...p}>
    <rect x="3" y="7" width="18" height="10" rx="2.5"/><path d="M7.5 7l1.4-2h6.2l1.4 2"/><circle cx="12" cy="12" r="3.2"/>
  </svg>
);
const IconSOC = (p)=>(
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...p}>
    <rect x="3.5" y="5.5" width="17" height="13" rx="2.5"/><path d="M7 9h10M7 12h10M7 15h6"/>
  </svg>
);
const IconWifi = (p)=>(
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...p}>
    <path d="M2 8a16 16 0 0 1 20 0"/><path d="M5 12a11 11 0 0 1 14 0"/><path d="M8.5 16a6 6 0 0 1 7 0"/><circle cx="12" cy="19.5" r="1.4" fill="currentColor"/>
  </svg>
);
const IconShield = (p)=>(
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...p}>
    <path d="M12 22s8-3.8 8-10.5V6.5L12 3 4 6.5v5C4 18.2 12 22 12 22z"/><path d="M9 12.5l2 2 4-4"/>
  </svg>
);
const IconServer = (p)=>(
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...p}>
    <rect x="3" y="3" width="18" height="7" rx="2"/><rect x="3" y="14" width="18" height="7" rx="2"/><circle cx="7" cy="6.5" r="1" fill="currentColor"/><circle cx="7" cy="17.5" r="1" fill="currentColor"/>
  </svg>
);
const IconDrone = (p)=>(
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...p}>
    <circle cx="5" cy="5" r="2.5"/><circle cx="19" cy="5" r="2.5"/><rect x="6.5" y="9" width="11" height="6" rx="2"/><path d="M9 15v2.5l3 1.8 3-1.8V15"/>
  </svg>
);
const IconAntiUAV = (p)=>(
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...p}>
    <circle cx="12" cy="12" r="9"/><path d="M12 12l6-3"/><path d="M2 2l20 20"/>
  </svg>
);
const IconForensics = (p)=>(
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...p}>
    <circle cx="10" cy="10" r="6"/><path d="M14 14l6 6"/>
  </svg>
);

const SERVICES = [
  { title:"Видеонаблюдение и видеоаналитика", desc:"От камер до аналитики. Масштабируемые комплексы, интеграция с ИИ.", color:"#9B4DFF", glow:"rgba(155,77,255,.9)", Icon:IconCam },
  { title:"Кибербезопасность и SOC", desc:"Мониторинг, реагирование, защита инфраструктуры и данных 24/7.", color:"#4DFFE0", glow:"rgba(77,255,224,.9)", Icon:IconSOC },
  { title:"Сети и связь, Wi-Fi, IoT", desc:"Проектирование, внедрение и оптимизация проводных/беспроводных сетей.", color:"#4D9BFF", glow:"rgba(77,155,255,.9)", Icon:IconWifi },
  { title:"СКУД и безопасность периметра", desc:"Контроль доступа, охрана периметра, интеграция подсистем.", color:"#FF4D6D", glow:"rgba(255,77,109,.9)", Icon:IconShield },
  { title:"Локальные вычислительные системы", desc:"Серверы, хранилища, виртуализация и Edge-решения.", color:"#6F4DFE", glow:"rgba(111,77,254,.9)", Icon:IconServer },
  { title:"Дрон-системы освещения", desc:"Сценарии подсветки, интеграция с видео, управление и аналитика.", color:"#FF914D", glow:"rgba(255,145,77,.9)", Icon:IconDrone },
  { title:"Анти-БПЛА", desc:"Обнаружение, сопровождение и противодействие беспилотникам.", color:"#FF4DA6", glow:"rgba(255,77,166,.9)", Icon:IconAntiUAV },
  { title:"Цифровая криминалистика", desc:"Сбор и анализ цифровых следов, экспертиза данных, отчётность.", color:"#FFD24D", glow:"rgba(255,210,77,.9)", Icon:IconForensics },
];

export default function ServicesCarousel() {
  const breakpoints = useMemo(() => ({
    0:   { slidesPerView: 1.05, spaceBetween: 16 },
    640: { slidesPerView: 1.4,  spaceBetween: 18 },
    768: { slidesPerView: 2.1,  spaceBetween: 20 },
    1024:{ slidesPerView: 3.05, spaceBetween: 22 },
    1280:{ slidesPerView: 3.3,  spaceBetween: 24 },
  }), []);

  return (
    <section id="services" className="relative py-16 text-white bg-[#23153c]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div className="mb-8 inline-flex  items-center gap-2 rounded-full px-3 py-1 font-semibold bg-white/10 ring-1 ring-white/15">
          <h2 className="text-3xl sm:text-4xl font-semibold">Услуги</h2>
        </div>

          <div className="hidden md:flex items-center gap-2">
            <button className="swiper-prev h-10 w-10 rounded-full bg-white/10 ring-1 ring-white/15 hover:bg-white/15 backdrop-blur-sm">‹</button>
            <button className="swiper-next h-10 w-10 rounded-full bg-white/10 ring-1 ring-white/15 hover:bg-white/15 backdrop-blur-sm">›</button>
          </div>
        </div>

        <Swiper
          modules={[Navigation, Pagination, Keyboard, Mousewheel, EffectCoverflow, A11y, Autoplay]}
          effect="coverflow"
          coverflowEffect={{ rotate: 12, stretch: 0, depth: 140, modifier: 1, slideShadows: false }}
          autoplay={{ delay: 4500, disableOnInteraction: false }}
          mousewheel={{ forceToAxis: true, sensitivity: 0.8 }}
          keyboard={{ enabled: true }}
          navigation={{ nextEl: ".swiper-next", prevEl: ".swiper-prev" }}
          pagination={{ clickable: true, dynamicBullets: true }}
          a11y={{ prevSlideMessage: "Назад", nextSlideMessage: "Вперёд" }}
          breakpoints={breakpoints}
          centeredSlides
          className="!pb-12"
        >
          {SERVICES.map(({ title, desc, color, glow, Icon }, i) => (
            <SwiperSlide key={i}>
              <article className="rounded-2xl p-[1px] ">
                <div className="
      rounded-3xl h-full p-8
      bg-[#17152b]/60 backdrop-blur-md
      ring-1 ring-white/10
      shadow-[inset_0_1px_0_rgba(255,255,255,0.16),inset_0_-1px_0_rgba(0,0,0,0.35),0_18px_40px_rgba(0,0,0,0.45)]
      flex flex-col justify-between
    ">
                  {/* Неоновые мягкие «ореолы» */}
                 

                  <div className="flex items-start gap-4">
                    <div className="h-12 w-12 rounded-2xl bg-white/5 ring-1 ring-white/10 flex items-center justify-center">
                      <Icon
                        className="h-6 w-6"
                        style={{ color, filter: `drop-shadow(0 0 10px ${glow}) drop-shadow(0 0 18px ${glow})` }}
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold leading-snug">{title}</h3>
                      <p className="text-sm text-white/70 mt-2">{desc}</p>
                    </div>
                  </div>

                  <div className="mt-5 flex items-center justify-between">
                    
                    <span className="text-xs px-2.5 py-1 rounded-full"
                          style={{ color, boxShadow: `inset 0 0 20px ${glow}`, background: "rgba(255,255,255,0.06)", cursor: "pointer"}}>
                      Подробнее
                    </span>
                  </div>
                </div>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
