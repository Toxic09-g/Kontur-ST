import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { useNavigate } from 'react-router-dom';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useRef, useEffect, useState } from "react";
import Video from '../assets/services/video_nabludenie.png';
import Switch from '../assets/services/switch.png';
import Terror from '../assets/services/terror.png';
import Sts from '../assets/services/sts.png';
import background from '../assets/main_background.png';
const services = [
  {
    title: "Системы видеонаблюдения и видеоаналитики",
    description:
      "Интеллектуальные системы видеоконтроля с функциями видеоаналитики. Поддержка биометрических идентификаторов, распознавания лиц и номерных знаков, построение маршрутов движения, контроль зон, детекция оставленных и пропавших предметов. Решения для обеспечения безопасности на объектах любого масштаба.",
    image: Video,
     link: "/video"
  },
  {
    title: "Локально вычислительные системы",
    description:
      "Разработка и внедрение IT-инфраструктуры: серверные стойки, коммутаторы, маршрутизаторы, системы хранения данных и управления. Поддержка мониторинга, виртуализации и резервного копирования. Обеспечение бесперебойной и защищённой работы сетей.",
    image: Switch,
    link: "/localsystems"
  },
  {
    title: "Средства Антитеррористической Защиты",
    description:
      "Проектирование и реализация систем контроля доступа, металлодетекторов, турникетов, охранных сигнализаций и аварийного оповещения. Комплексные меры по усилению безопасности в соответствии с нормативными требованиями.",
    image: Terror,
    link: "/antiterror"
  },
  
  {
    title: "Цифровая криминалистика",
    description:
      "Решения для выявления и расследования киберпреступлений с использованием современных технологий: анализ компьютеров, мобильных устройств, сетей и оперативной памяти. Поддержка правоохранительных органов, госструктур и служб безопасности.",
    image: Sts,
    link: "/digitalforensics",
  },
  {
    title: "Дроны",
    description:
      "Современные решения в области скрытого аудио- и видеонаблюдения, систем подавления БПЛА, перехвата и защиты информации. Включают в себя профессиональное оборудование для контроля и обнаружения угроз в чувствительных зонах и на стратегически важных объектах.",
    image: Sts,
    link: "/drones",
  },
  {
    title: "Анти-БПЛА",
    description:
      "Современные решения в области скрытого аудио- и видеонаблюдения, систем подавления БПЛА, перехвата и защиты информации. Включают в себя профессиональное оборудование для контроля и обнаружения угроз в чувствительных зонах и на стратегически важных объектах.",
    image: Sts,
    link:"/antidrone"
  },
  {
    title: "СТС",
    description:
      "Разработка, производство, реализация и ремонт специальных технических средств (СТС) для субъектов оперативно-розыскной деятельности (Лицензия АТ № 049), реализацию средств криптографической защиты информации (Лицензия СК № 722), а также проводит работы со сведениями, составляющими государственные секреты РК (Разрешение №119/33/1224). Поставка, инсталляция оборудования и систем для выявления каналов утечки информации и выполнения работ по специальным исследованиям и аттестации объектов информатизации.",
    image: Sts,
    protected: true
  },
];

export default function ServicesSection() {
   const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [pendingProtectedLink, setPendingProtectedLink] = useState('');
  const navigate = useNavigate();

  const handleProtectedClick = (link) => {
    setPendingProtectedLink(link);
    setShowModal(true);
  };

  const handleLogin = () => {
    if (login === 'admin' && password === 'P@ssw0rd2025$') {
      setError('');
      setShowModal(false);
      navigate(pendingProtectedLink);
    } else {
      setError('Неверный логин или пароль');
    }
  };

  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.on("slideChange", () => {
        setActiveIndex(swiperRef.current.realIndex);
      });
    }
  }, []);
  return (
    <section id="services" className="min-h-screen w-full flex flex-col justify-center bg-[#f9fafb] py-12 animate-fade-in" style={{
        backgroundImage: `linear-gradient(to right, rgba(0, 112, 210, 0.85), rgba(0, 84, 122, 0.56)), url(${background})`,
      }}>
      <h2 className="text-4xl font-bold text-center text-[white] mb-10">
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
                className={`cursor-pointer relative bg-white shadow-xl rounded-2xl flex flex-col lg:flex-row items-stretch w-full h-[450px] transition-all duration-300 overflow-hidden group
                  ${activeIndex === idx ? "z-20 scale-100 blur-none" : "z-10 scale-[0.985] blur-[1px] group-hover:scale-[0.99] group-hover:blur-[0.5px]"}`}
              >
                <div className="relative z-10 p-10 flex flex-col justify-between w-full lg:w-3/5">
                  <div>
                    <h3 className="text-2xl font-bold text-[#0b1957] mb-4">
                      {service.title}
                    </h3>
                    <p className="text-gray-700 mb-6">{service.description}</p>
                  </div>
                  <div className="flex gap-4">
                    <button
                      onClick={() => {
                        service.protected
                          ? handleProtectedClick('/sts')
                          : navigate(service.link);
                      }}
                      className="bg-gradient-to-r from-[#0070d2] to-[#00a8f3] text-white px-4 py-2 rounded-md hover:bg-[#2563eb] transition"
                    >
                      Подробнее
                    </button>
                  </div>
                </div>
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

      {/* Модалка логина */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-xl shadow-xl w-80">
            <h2 className="text-xl font-bold text-center mb-4">Доступ к СТС</h2>
            <input
              type="text"
              placeholder="Логин"
              value={login}
              onChange={(e) => setLogin(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 mb-2"
            />
            <input
              type="password"
              placeholder="Пароль"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 mb-2"
            />
            {error && <p className="text-red-500 text-sm mb-2">{error}</p>}
            <div className="flex justify-end gap-2 mt-2">
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 text-gray-600 hover:text-black"
              >
                Отмена
              </button>
              <button
                onClick={handleLogin}
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                Войти
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
