import React from 'react';
import { useNavigate } from 'react-router-dom';
//import Owl2Img from '../../images/drones/owl2.png';
//import YellowBirdImg from '../../images/drones/yellowbird.png';

const drones = [
    {
        name: 'OWL2',
        description: 'Многофункциональный дрон для воздушного мониторинга и патрулирования. Оснащён системой стабилизации и камерой высокого разрешения.',
        //image: Owl2Img,
        link: '/drones/owl2',
    },
    {
        name: 'YELLOWBIRD',
        description: 'Компактный беспилотник с расширенными возможностями навигации и передачи видео в реальном времени. Идеален для городской и приграничной разведки.',
        //image: YellowBirdImg,
        link: '/drones/yellowbird',
    },
];

export default function DronesSection() {
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
                Дроны
            </h1>
            <p className="text-gray-600 text-lg mb-12">
                Воздушные решения для мониторинга, разведки и патрулирования в самых разных условиях
            </p>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
                {drones.map((item, idx) => (
                    <div
                        key={idx}
                        className="bg-gray-50 rounded-2xl shadow hover:shadow-md transition overflow-hidden text-left"
                    >
                        <img
                            src={item.image}
                            alt={item.name}
                            className="w-full h-56 object-contain bg-white"
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
