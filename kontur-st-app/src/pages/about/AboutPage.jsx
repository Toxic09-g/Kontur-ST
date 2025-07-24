import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
export default function AboutPage() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const navigate = useNavigate();
    return (
        <section className="min-h-screen bg-white py-16 px-4 sm:px-8 md:px-16 animate-fade-in">

            <div className="max-w-5xl mx-auto">
                <div className="text-left mt-10 ">
                    <button
                        onClick={() => navigate(-1)}
                        className="text-sm bg-gray-100 hover:bg-gray-200 text-gray-800 px-4 py-2 rounded-md transition"
                    >
                        ← Назад
                    </button>
                </div>
                <h1 className="text-4xl font-bold text-[#0b1957] mb-6">О компании</h1>
                <p className="text-lg text-gray-800 mb-4">
                    Товарищество с ограниченной ответственностью <strong>АскомМЕТ</strong> работает на рынке Казахстана с 2011 года. Офис компании находится в городе Астане, а также имеются представительства в городах Алматы, Тараз, Талдыкорган, Кызылорда, Атырау.
                </p>

                <h2 className="text-2xl font-semibold text-[#0b1957] mt-8 mb-3">Широкий спектр оборудования по безопасности:</h2>
                <ul className="list-disc pl-6 text-gray-800 space-y-2">
                    <li>Технические средства защиты информации и обнаружения каналов утечки информации.</li>
                    <li>Антитеррористическое и досмотровое оборудование.</li>
                    <li>Программно-аппаратные средства защиты информации от НСД.</li>
                    <li>Измерительное оборудование для проведения специальных исследований.</li>
                    <li>Оптические приборы (приборы ночного видения).</li>
                </ul>

                <h2 className="text-2xl font-semibold text-[#0b1957] mt-8 mb-3">Наши заказчики:</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mt-4">
                    <img src="/images/clients/mvd.png" alt="МВД РК" className="h-16 object-contain grayscale hover:grayscale-0 transition duration-300" />
                    <img src="/images/clients/mod.png" alt="Минобороны РК" className="h-16 object-contain grayscale hover:grayscale-0 transition duration-300" />
                    <img src="/images/clients/knb.png" alt="КНБ РК" className="h-16 object-contain grayscale hover:grayscale-0 transition duration-300" />
                    <img src="/images/clients/anticor.png" alt="Антикор" className="h-16 object-contain grayscale hover:grayscale-0 transition duration-300" />
                    <img src="/images/clients/finmonitoring.png" alt="Агентство по финмониторингу" className="h-16 object-contain grayscale hover:grayscale-0 transition duration-300" />
                    <img src="/images/clients/ktz.png" alt="Казахстан Темир Жолы" className="h-16 object-contain grayscale hover:grayscale-0 transition duration-300" />
                    <img src="/images/clients/kmg.png" alt="КазМунайГаз" className="h-16 object-contain grayscale hover:grayscale-0 transition duration-300" />
                    <img src="/images/clients/akimat.png" alt="Акиматы" className="h-16 object-contain grayscale hover:grayscale-0 transition duration-300" />
                </div>


                <div className="mt-12">
                    <h2 className="text-2xl font-semibold text-[#0b1957] mt-8 mb-3">Лицензии и Разрешения</h2>
                    <p className="text-gray-800 mb-4">
                        Мы обладаем всеми необходимыми лицензиями и разрешениями для осуществления
                        профессиональной деятельности в области безопасности.
                    </p>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                        <div className="bg-white rounded-lg shadow p-4 hover:shadow-lg transition cursor-pointer">
                            <img src="/images/licenses/license1.jpg" alt="Лицензия 1" className="rounded mb-2" />
                            <p className="text-center text-sm text-gray-600">Лицензия АТ № 049</p>
                        </div>
                        <div className="bg-white rounded-lg shadow p-4 hover:shadow-lg transition cursor-pointer">
                            <img src="/images/licenses/license2.jpg" alt="Лицензия 2" className="rounded mb-2" />
                            <p className="text-center text-sm text-gray-600">Лицензия СК № 722</p>
                        </div>
                        <div className="bg-white rounded-lg shadow p-4 hover:shadow-lg transition cursor-pointer">
                            <img src="/images/licenses/secret.jpg" alt="Разрешение на гос. тайну" className="rounded mb-2" />
                            <p className="text-center text-sm text-gray-600">Разрешение №119/33/1224</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
