import React from 'react';
import { useNavigate } from 'react-router-dom';
import Avigilon from '../../images/video/avigilon.jpg'
import Wisenet from '../../images/video/wisenet.jpg'
import Milestone from '../../images/video/milestone.png'
import Recfaces from '../../images/video/recfaces.png'
const solutions = [
  {
    name: 'Motorola Solutions',
    description: 'Интеллектуальные видеорешения с глубоким ИИ, обеспечивающие безопасность и эффективный мониторинг на крупных объектах.',
    image: Avigilon,
    link: '/video/motorola',
  },
  {
    name: 'Wisenet',
    description: 'Решения от Hanwha Vision с поддержкой 4K, тепловизоров и облачного мониторинга.',
    image: Wisenet,
    link: '/video/wisenet',
  },
  {
    name: 'Milestone Systems',
    description: 'Платформа видеоменеджмента VMS с гибкой интеграцией и масштабируемостью.',
    image: Milestone,
    link: '/video/milestone',
  },
  {
    name: 'RecFaces',
    description: 'Системы биометрической идентификации по лицу для контроля доступа, безопасности и аналитики.',
    image: Recfaces,
    link: '/video/recfaces',
  },
];

export default function VideoSolutions() {
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
        Решения по видеонаблюдению
      </h1>
      <p className="text-gray-600 text-lg mb-12">
        Ознакомьтесь с нашими ключевыми продуктами и платформами
      </p>

      <div className="grid gap-8 md:grid-cols-2">
        {solutions.map((item, idx) => (
          <div
            key={idx}
            className="bg-gray-50 rounded-2xl shadow hover:shadow-md transition overflow-hidden text-left"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-56 object-cover" // без mb-4
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
