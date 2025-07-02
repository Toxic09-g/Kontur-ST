import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useRef, useEffect, useState } from "react";
import Video from '../assets/services/video_nabludenie.png';
import Switch from '../assets/services/switch.png';
import Terror from '../assets/services/terror.png';
import Sts from '../assets/services/sts.png';

const services = [
  {
    title: "Системы видеонаблюдения и видеоаналитики",
    description:
      "Интеллектуальные системы видеоконтроля с функциями видеоаналитики. Поддержка биометрических идентификаторов, распознавания лиц и номерных знаков, построение маршрутов движения, контроль зон, детекция оставленных и пропавших предметов. Решения для обеспечения безопасности на объектах любого масштаба.",
    image: Video,
  },
  {
    title: "Локально вычислительные системы",
    description:
      "Разработка и внедрение IT-инфраструктуры: серверные стойки, коммутаторы, маршрутизаторы, системы хранения данных и управления. Поддержка мониторинга, виртуализации и резервного копирования. Обеспечение бесперебойной и защищённой работы сетей.",
    image: Switch,
  },
  {
    title: "Средства Антитеррористической Защиты",
    description:
      "Проектирование и реализация систем контроля доступа, металлодетекторов, турникетов, охранных сигнализаций и аварийного оповещения. Комплексные меры по усилению безопасности в соответствии с нормативными требованиями.",
    image: Terror,
  },
  {
    title: "СТС",
    description:
      "Современные решения в области скрытого аудио- и видеонаблюдения, систем подавления БПЛА, перехвата и защиты информации. Включают в себя профессиональное оборудование для контроля и обнаружения угроз в чувствительных зонах и на стратегически важных объектах.",
    image: Sts,
  },
];

export default function ServicesSection() {
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.on("slideChange", () => {
        setActiveIndex(swiperRef.current.realIndex);
      });
    }
  }, []);

  return (
    <section id="services" className="min-h-screen w-full flex flex-col justify-center bg-[#f9fafb] py-12">
      <h2 className="text-4xl font-bold text-center text-[#0b1957] mb-10">
        Наши услуги
      </h2>

      <div className="w-full flex justify-center">
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={-100}
          slidesPerView={1.5}
          centeredSlides={true}
          navigation
          pagination={{ clickable: true }}
          allowTouchMove={false}
          simulateTouch={false}
          className="w-full select-text relative z-0 overflow-visible"
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
            setActiveIndex(swiper.realIndex);
          }}
        >
          {services.map((service, idx) => (
            <SwiperSlide key={idx}>
              <div
                onClick={() => swiperRef.current?.slideTo(idx)}
                className={`cursor-pointer relative bg-white shadow-xl rounded-2xl flex flex-col lg:flex-row items-stretch w-full h-[400px] transition-all duration-300 overflow-hidden ${
                  activeIndex === idx
                    ? "z-20 scale-100 blur-none"
                    : "z-10 scale-[0.985] blur-[1px] hover:scale-[0.99] hover:blur-[0.5px]"
                }`}
              >
                {/* Текст */}
                <div className="relative z-10 p-10 flex flex-col justify-between w-full lg:w-3/5 ">
                  <div>
                    <h3 className="text-2xl font-bold text-[#0b1957] mb-4">
                      {service.title}
                    </h3>
                    <p className="text-gray-700 mb-6">{service.description}</p>
                  </div>
                  <div className="flex gap-4">
                    <button className="bg-[#1d4ed8] text-white px-4 py-2 rounded-md hover:bg-[#2563eb] transition">
                      Попробовать
                    </button>
                    <button className="text-[#1d4ed8] font-medium hover:underline">
                      Подробнее
                    </button>
                  </div>
                </div>

                {/* Фото */}
                <div className="relative z-10 w-full lg:w-2/5 h-full">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
