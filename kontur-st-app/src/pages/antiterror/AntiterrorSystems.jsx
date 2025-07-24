import React from 'react';
import { useNavigate } from 'react-router-dom';
// import SignalGenImg from '../../images/antiterror/signal_generator.jpg';
// import BlockerImg from '../../images/antiterror/wireless_blocker.jpg';
// import ThermalImg from '../../images/antiterror/thermal_complex.jpg';
// import InspectionImg from '../../images/antiterror/inspection_complex.jpg';
// import CarDetectImg from '../../images/antiterror/car_detection.jpg';
// import StationImg from '../../images/antiterror/stationary_complex.jpg';

const antiterrorSystems = [
  {
    name: 'Генератор сигналов',
    description: 'Устройство для создания помех и противодействия нежелательной радиосвязи в зонах повышенной чувствительности.',
    //image: SignalGenImg,
    link: '/antiterror/signal-generator',
  },
  {
    name: 'Блокиратор беспроводной связи',
    description: 'Эффективная защита от дистанционного управления дронами и взрывными устройствами.',
    //image: BlockerImg,
    link: '/antiterror/wireless-blocker',
  },
  {
    name: 'Тепловизионный комплекс',
    description: 'Обнаружение объектов по тепловому излучению для обеспечения безопасности в тёмное время суток и при плохой видимости.',
    //image: ThermalImg,
    link: '/antiterror/thermal-complex',
  },
  {
    name: 'Досмотровой комплекс',
    description: 'Аппаратура для осмотра транспортных средств и багажа на контрольных точках.',
    //image: InspectionImg,
    link: '/antiterror/inspection-complex',
  },
  {
    name: 'Комплекс выявления слежки за автомобилем в потоке',
    description: 'Технология для обнаружения скрытой слежки и анализа маршрутов транспортных средств.',
    //image: CarDetectImg,
    link: '/antiterror/car-tracking',
  },
  {
    name: 'Стационарный комплекс ретрансляционных помех',
    description: 'Стационарное решение для создания мощных радиопомех в стратегически важных зонах.',
    //image: StationImg,
    link: '/antiterror/jamming-stationary',
  },
];

export default function AntiterrorSystems() {
  const navigate = useNavigate();

  return (
    <div className="bg-white py-16 px-4 md:px-10 max-w-7xl mx-auto text-center">
      <div className="text-left mt-10 ">
        <button
          onClick={() => navigate(-1)}
          className="text-sm bg-gray-100 hover:bg-gray-200 text-gray-800 px-4 py-2 rounded-md transition"
        >
          ← Назад
        </button>
      </div>
      <h1 className="text-4xl font-bold text-[#0a1b52] mb-6">
        Средства Антитеррористической Защиты
      </h1>
      <p className="text-gray-600 text-lg mb-12">
        Комплексные технологии и решения для обеспечения общественной и государственной безопасности
      </p>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
        {antiterrorSystems.map((item, idx) => (
          <div
            key={idx}
            className="bg-gray-50 rounded-2xl shadow hover:shadow-md transition overflow-hidden text-left"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-56 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-[#0a1b52] mb-2">
                {item.name}
              </h3>
              <p className="text-gray-700 mb-4">{item.description}</p>
              <button
                onClick={() => navigate(item.link)}
                className="bg-gradient-to-r from-[#0070d2] to-[#00a8f3] text-white px-5 py-2 rounded-full hover:scale-105 transition"
              >
                Подробнее
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
