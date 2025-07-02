import phoneIcon from '../assets/footer/phone.png';
import mailIcon from '../assets/footer/mail.png';
import geoIcon from '../assets/footer/geo.png';
import clockIcon from '../assets/footer/clock.png';

export default function Footer() {
    return (
        <footer id="contacts" className="bg-[#0b1120] text-white py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 md:grid-cols-3 gap-x-24 gap-y-10 text-left">
                {/* О компании */}
                <div>
                    <h2 className="text-xl font-bold mb-2">Контур-СТ</h2>
                    <p className="text-blue-400 mb-4">Security Solutions</p>
                    <p className="text-gray-400 mb-6">
                        Профессиональная поставка оборудования, установка и поддержка вашей инфраструктуры безопасности.
                    </p>
                    <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded">
                        Связаться
                    </button>
                </div>

                {/* Контакты */}
                <div>
                    <h2 className="text-xl font-bold mb-4">Контакты</h2>
                    <ul className="text-gray-300 space-y-4">
                        <li className="flex items-start gap-3">
                            <img src={phoneIcon} alt="Phone" className="w-6 h-6 mt-1" />
                            <div>
                                <p className="text-white font-semibold">+7 (777) 777-7777</p>
                                <p className="text-sm text-gray-400">24/7 Emergency Line</p>
                            </div>
                        </li>
                        <li className="flex items-start gap-3">
                            <img src={mailIcon} alt="Email" className="w-6 h-6 mt-1" />
                            <div>
                                <p className="text-white font-semibold">info@konturst.kz</p>
                                <p className="text-sm text-gray-400">Общие вопросы</p>
                            </div>
                        </li>
                        <li className="flex items-start gap-3">
                            <img src={geoIcon} alt="Address" className="w-6 h-6 mt-1" />
                            <div>
                                <p className="text-white font-semibold">123 Security Ave</p>
                                <p className="text-sm text-gray-400">Business District, City 12345</p>
                            </div>
                        </li>
                        <li className="flex items-start gap-3">
                            <img src={clockIcon} alt="Hours" className="w-6 h-6 mt-1" />
                            <div>
                                <p className="text-white font-semibold">Mon–Fri: 8:00 - 18:00</p>
                                <p className="text-sm text-gray-400">24/7 Emergency Support</p>
                            </div>
                        </li>
                    </ul>
                </div>

                {/* Услуги */}
                <div>
                    <h2 className="text-xl font-bold mb-4">Услуги</h2>
                    <ul className="text-gray-300 space-y-2">
                        <li>Системы видеонаблюдения и видеоаналитики</li>
                        <li>Локально вычислительные системы</li>
                        <li>Средства Антитеррористической Защиты</li>
                        <li>СТС</li>
                    </ul>
                </div>
            </div>

            {/* Нижняя строка футера */}
            <div className="border-t border-gray-700 mt-10">
                <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-6 text-sm text-gray-400 flex flex-col md:flex-row justify-between items-center">
                    <p>© 2025 Контур-СТ. Все права защищены. Перепечатка и цитирование материалов запрещены.</p>
                   
                </div>
            </div>
        </footer>
    );
}
