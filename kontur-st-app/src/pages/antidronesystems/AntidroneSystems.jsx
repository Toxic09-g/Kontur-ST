import React from 'react';
import { useNavigate } from 'react-router-dom';
// import Owl2Img from '../../images/antidrone/owl2.png';
// import YellowBirdImg from '../../images/antidrone/yellowbird2.png';
// import YellowBirdM2Img from '../../images/antidrone/yellowbird_m2.png';
// import DeltaImg from '../../images/antidrone/delta.png';

const antidroneSystems = [
    {
        name: 'OWL2',
        description: 'Система радиочастотного обнаружения и пеленгации БПЛА. Подходит для объектов различной сложности.',
        // image: Owl2Img,
        link: '/antidrone/owl2',
    },
    {
        name: 'YELLOWBIRD-2',
        description: 'Обнаружение дронов с помощью акустических сенсоров и радиочастотного анализа. Эффективен в городских условиях.',
        // image: YellowBirdImg,
        link: '/antidrone/yellowbird2',
    },
    {
        name: 'YELLOWBIRD-M2',
        description: 'Мобильный комплекс обнаружения БПЛА с возможностью оперативного развёртывания.',
        // image: YellowBirdM2Img,
        link: '/antidrone/yellowbird-m2',
    },
    {
        name: 'DELTA',
        description: 'Ситуационный центр управления и мониторинга обстановки для защиты от дронов и других угроз.',
        // image: DeltaImg,
        link: '/antidrone/delta',
    },
];

export default function AntidroneSystems() {
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
            <h1 className="text-4xl font-bold text-[#0a1b52] mb-6">Анти-БПЛА</h1>
            <p className="text-gray-600 text-lg mb-12">
                Технологии обнаружения и подавления беспилотных летательных аппаратов
            </p>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
                {antidroneSystems.map((item, idx) => (
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
