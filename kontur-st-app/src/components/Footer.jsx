import phoneIcon from '../assets/footer/phone.png';
import mailIcon from '../assets/footer/mail.png';
import geoIcon from '../assets/footer/geo.png';
import clockIcon from '../assets/footer/clock.png';
import { Link } from 'react-router-dom';
export default function Footer() {
    return (
        <footer id="contacts" className="bg-[#0b1120] text-white py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 md:grid-cols-3 gap-x-24 gap-y-10 text-left">
                {/* О компании */}

                <div>
                    <h2 className="text-xl font-extrabold mb-2 bg-gradient-to-r from-[#0070d2] to-[#00a8f3] bg-clip-text text-transparent">АскомМЕТ</h2>
                    <p className="font-bold bg-gradient-to-r from-[#0070d2] to-[#00a8f3] bg-clip-text text-transparent mb-4">IT решения в различных областях</p>
                    <p className="text-gray-400 mb-6">
                        Профессиональная поставка оборудования, установка и поддержка вашей инфраструктуры безопасности.
                    </p>
                    <button className="bg-gradient-to-r from-[#0070d2] to-[#00a8f3] hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded">
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
                                <p className="text-white font-semibold">+7 (7172) 532 707</p>
                                <p className="text-white font-semibold">+7 (701) 357 82 01</p>
                                <p className="text-sm text-gray-400">24/7 Emergency Line</p>
                            </div>
                        </li>
                        <li className="flex items-start gap-3">
                            <img src={mailIcon} alt="Email" className="w-6 h-6 mt-1" />
                            <div>
                                <p className="text-white font-semibold">info@askommet.kz</p>
                                <p className="text-sm text-gray-400">Общие вопросы</p>
                            </div>
                        </li>
                        <li className="flex items-start gap-3">
                            <img src={geoIcon} alt="Address" className="w-6 h-6 mt-1" />
                            <div>
                                <p className="text-white font-semibold">Астана</p>
                                <p className="text-sm text-gray-400">ул. Бауыржан Момышулы 12, офис 210</p>
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

                <div>
                    <h2 className="text-xl font-bold mb-4">Услуги</h2>
                    <ul className="text-gray-300 space-y-2">
                        <li><Link to="/video" className="hover:text-white transition">Системы видеонаблюдения и видеоаналитики</Link></li>
                        <li><Link to="/localsystems" className="hover:text-white transition">Локально вычислительные системы</Link></li>
                        <li><Link to="/antiterror" className="hover:text-white transition">Средства Антитеррористической Защиты</Link></li>
                        <li><Link to="/digitalforensics" className="hover:text-white transition">Цифровая криминалистика</Link></li>
                        <li><Link to="/drones" className="hover:text-white transition">Дроны</Link></li>
                        <li><Link to="/antidrone" className="hover:text-white transition">Анти-БПЛА</Link></li>
                        <li><Link to="/sts" className="hover:text-white transition">СТС</Link></li>
                    </ul>
                </div>
            </div>

            {/* Нижняя строка футера */}
            <div className="border-t border-gray-700 mt-10">
                <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-6 text-sm text-gray-400 flex flex-col md:flex-row justify-between items-center">
                    <p>© 2025 АскомМЕТ. Все права защищены. Перепечатка и цитирование материалов запрещены.</p>

                </div>
            </div>
        </footer>
    );
}
