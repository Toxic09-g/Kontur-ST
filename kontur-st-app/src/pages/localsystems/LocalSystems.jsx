import React from 'react';
import { useNavigate } from 'react-router-dom';
import CiscoImg from '../../images/localsystems/cisco.jpg'
import FortinetImg from '../../images/localsystems/fortinet.jpg';
import HuaweiImg from '../../images/localsystems/huawei.jpg';
import RuijieImg from '../../images/localsystems/ruiji.jpg';
import TplinkImg from '../../images/localsystems/tplink.png';

const systems = [
    {
        name: 'Cisco',
        description: 'Сетевое оборудование и решения для предприятий любого масштаба.',
        image: CiscoImg,
        link: '/local/cisco',
    },
    {
        name: 'Fortinet',
        description: 'Интегрированные решения в области сетевой безопасности и SD-WAN.',
        image: FortinetImg,
        link: '/local/fortinet',
    },
    {
        name: 'Huawei',
        description: 'IT-инфраструктура, серверы, коммутаторы и решения для ЦОД.',
        image: HuaweiImg,
        link: '/local/huawei',
    },
    {
        name: 'Ruijie',
        description: 'Инновационные коммутаторы, точки доступа и решения для бизнеса.',
        image: RuijieImg,
        link: '/local/ruijie',
    },
    {
        name: 'TP-Link',
        description: 'Надежные маршрутизаторы, точки доступа и сетевые решения.',
        image: TplinkImg,
        link: '/local/tplink',
    },
];

export default function LocalSystems() {
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
                Локально вычислительные системы
            </h1>
            <p className="text-gray-600 text-lg mb-12">
                Оборудование и решения от мировых производителей
            </p>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
                {systems.map((item, idx) => (
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
