import React from 'react';
import { useNavigate } from 'react-router-dom';
import image1 from '../../images/forensic/1.png';
import image2 from '../../images/forensic/2.png';
import image3 from '../../images/forensic/3.png';
import image4 from '../../images/forensic/4.png';
import image5 from '../../images/forensic/5.png';
import image6 from '../../images/forensic/6.png';
import image7 from '../../images/forensic/7.png';
import image8 from '../../images/forensic/8.png';
import image9 from '../../images/forensic/9.png';
import image10 from '../../images/forensic/10.png';
import image11 from '../../images/forensic/11.png';


const softwareTools = [
    {
        name: 'Мобильный Криминалист Эксперт Плюс',
        description: 'Мощный инструмент для анализа файловых систем, поиска улик и восстановления данных.',
        image: image1,
        link: '/forensics/xways',
    },
    {
        name: 'Мобильный Криминалист Десктоп',
        description: 'Программный продукт для извлечения и анализа данных с мобильных устройств.',
        image: image2,
        link: '/forensics/cellebrite',
    },
    {
        name: 'Elcomsoft Premium Forensic Bundle',
        description: 'Программный продукт для извлечения и анализа данных с мобильных устройств.',
        image: image3,
        link: '/forensics/cellebrite',
    },
    {
        name: 'Аналитический Центр Криминалист',
        description: 'Программный продукт для извлечения и анализа данных с мобильных устройств.',
        image: image4,
        link: '/forensics/cellebrite',
    },
    {
        name: 'VR-Expert',
        description: 'Программный продукт для извлечения и анализа данных с мобильных устройств.',
        image: image5,
        link: '/forensics/cellebrite',
    },
];

const hardwareTools = [
    {
        name: 'Аппаратно-программный комплекс «Дубль-1»',
        description: 'Современное устройство для создания криминалистических копий с жестких дисков.',
        image: image6,
        link: '/forensics/tx1',
    },
    {
        name: 'Аппаратно-программный комплекс «Дубль-1» исп.2',
        description: 'Аппаратное решение для клонирования и анализа носителей данных.',
        image: image7,
        link: '/forensics/falcon',
    },
    {
        name: 'Аппаратно-программный комплекс «Дубль-К»',
        description: 'Современное устройство для создания криминалистических копий с жестких дисков.',
        image: image8,
        link: '/forensics/tx1',
    },
    {
        name: 'Аппаратно-программный комплекс «Дубль-А»',
        description: 'Аппаратное решение для клонирования и анализа носителей данных.',
        image: image9,
        link: '/forensics/falcon',
    },
    {
        name: 'Блокиратор USB – USB, Блокиратор USB – SATA',
        description: 'Современное устройство для создания криминалистических копий с жестких дисков.',
        image: image10,
        link: '/forensics/tx1',
    },
    {
        name: 'Устройство деактивации автоматической блокировки экрана',
        description: 'Аппаратное решение для клонирования и анализа носителей данных.',
        image: image11,
        link: '/forensics/falcon',
    },
];

export default function DigitalForensics() {
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
                Цифровая криминалистика
            </h1>
            <p className="text-gray-600 text-lg mb-12">
                Программные и аппаратные средства для анализа цифровых доказательств
            </p>

            <h2 className="text-2xl font-bold text-left text-[#0a1b52] mb-4">Программные средства</h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2 mb-12">
                {softwareTools.map((item, idx) => (
                    <div
                        key={idx}
                        className="bg-gray-50 rounded-2xl shadow hover:shadow-md transition overflow-hidden text-left"
                    >
                        <div className="w-full h-56 bg-white flex items-center justify-center">
                            <img
                                src={item.image}
                                alt={item.name}
                                className="h-44 object-contain"
                            />
                        </div>
                        <div className="p-6">
                            <h3 className="text-2xl font-semibold text-[#0a1b52] mb-2">
                                {item.name}
                            </h3>
                            <p className="text-gray-700 mb-4">{item.description}</p>

                        </div>
                    </div>
                ))}
            </div>

            <h2 className="text-2xl font-bold text-left text-[#0a1b52] mb-4">Аппаратные средства</h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
                {hardwareTools.map((item, idx) => (
                    <div
                        key={idx}
                        className="bg-gray-50 rounded-2xl shadow hover:shadow-md transition overflow-hidden text-left"
                    >
                        <div className="w-full h-56  flex items-center justify-center">
                            <img
                                src={item.image}
                                alt={item.name}
                                className="h-44 object-contain"
                            />
                        </div>
                        <div className="p-6">
                            <h3 className="text-2xl font-semibold text-[#0a1b52] mb-2">
                                {item.name}
                            </h3>
                            <p className="text-gray-700 mb-4">{item.description}</p>

                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
