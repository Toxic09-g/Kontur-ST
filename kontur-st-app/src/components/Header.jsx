import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import { useTranslation } from 'react-i18next';
import { HiOutlineMenu, HiX } from 'react-icons/hi';

export default function Header() {
  const { i18n } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem('lng', lng);
  };

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [menuOpen]);

  return (
    <header className="w-full bg-white shadow fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between h-[80px]">
        {/* Лого и название */}
        <div className="flex items-center gap-3">
          <Link to="/" className="transition-transform hover:scale-105">
            <img src={logo} alt="АскомМЕТ" className="h-12 w-auto" />
          </Link>
          <div className="text-lg font-semibold bg-gradient-to-r from-[#0070d2] to-[#00a8f3] bg-clip-text text-transparent">
            АскомМЕТ
            <span className="block text-sm text-[#0070d2]">IT решения в различных областях</span>
          </div>
        </div>

        {/* Бургер-меню */}
        <div className="md:hidden">
          {menuOpen ? (
            <HiX className="w-7 h-7 text-gray-800 cursor-pointer" onClick={() => setMenuOpen(false)} />
          ) : (
            <HiOutlineMenu className="w-7 h-7 text-gray-800 cursor-pointer" onClick={() => setMenuOpen(true)} />
          )}
        </div>

        {/* Десктоп меню */}
        <nav className="hidden md:flex gap-8 font-medium text-gray-700 items-center">
  {[
    { href: "/about", label: "О нас", isLink: true },
    { href: "#services", label: "Услуги" },
    { href: "#filial", label: "Филиалы" },
    { href: "#partners", label: "Партнеры" },
    { href: "#contacts", label: "Контакты" },
  ].map(({ href, label, isLink }) =>
    isLink ? (
      <Link
        to={href}
        key={label}
        className="relative transition hover:text-transparent bg-clip-text bg-gradient-to-r from-[#0070d2] to-[#00a8f3] 
          after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 
          hover:after:w-full after:transition-all after:duration-300 
          after:bg-gradient-to-r after:from-[#0070d2] after:to-[#00a8f3]"
      >
        {label}
      </Link>
    ) : (
      <a
        href={href}
        key={label}
        className="relative transition hover:text-transparent bg-clip-text bg-gradient-to-r from-[#0070d2] to-[#00a8f3] 
          after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 
          hover:after:w-full after:transition-all after:duration-300 
          after:bg-gradient-to-r after:from-[#0070d2] after:to-[#00a8f3]"
      >
        {label}
      </a>
    )
  )}

  <button className="bg-gradient-to-r from-[#0070d2] to-[#00a8f3] text-white px-4 py-1.5 rounded-lg shadow hover:opacity-90">
    Связаться
  </button>

  <div className="flex gap-2 ml-2">
    {['ru', 'en', 'kz'].map((lng) => (
      <button
        key={lng}
        onClick={() => changeLanguage(lng)}
        className={`text-sm px-2 ${i18n.language === lng
          ? 'text-transparent bg-clip-text bg-gradient-to-r from-[#0070d2] to-[#00a8f3] font-bold'
          : 'text-gray-600 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#0070d2] hover:to-[#00a8f3]'}`}
      >
        {lng.toUpperCase()}
      </button>
    ))}
  </div>
</nav>

      </div>

      {/* Мобильное меню */}
      <div
        className={`absolute top-[80px] left-0 w-full bg-white z-50 shadow-md rounded-b-lg mobile-menu-transition ${menuOpen ? 'mobile-menu-open' : ''
          }`}
      >
        <ul className="divide-y divide-gray-200">
          <li className="px-6 py-4 font-medium text-gray-800 hover:text-blue-600">
            <Link to="/about"  onClick={() => setMenuOpen(false)}>О нас</Link>
          </li>
          <li className="px-6 py-4 font-medium text-gray-800 hover:text-blue-600">
            <a href="#services" onClick={() => setMenuOpen(false)}>Услуги</a>
          </li>
          <li className="px-6 py-4 font-medium text-gray-800 hover:text-blue-600">
            <a href="#filial" onClick={() => setMenuOpen(false)}>Филиалы</a>
          </li>
          <li className="px-6 py-4 font-medium text-gray-800 hover:text-blue-600">
            <a href="#partners" onClick={() => setMenuOpen(false)}>Партнеры</a>
          </li>
          <li className="px-6 py-4 font-medium text-gray-800 hover:text-blue-600">
            <a href="#contacts" onClick={() => setMenuOpen(false)}>Контакты</a>
          </li>
          <li className="px-6 py-4">
            <button className="w-full bg-gradient-to-r from-[#0070d2] to-[#00a8f3] text-white py-2 rounded-md shadow hover:opacity-90">
              Связаться
            </button>
          </li>
          <li className="px-6 py-4 flex justify-center gap-4">
            {['ru', 'en', 'kz'].map((lng) => (
              <button
                key={lng}
                onClick={() => changeLanguage(lng)}
                className={`text-sm ${i18n.language === lng ? 'text-blue-600 font-bold' : 'text-gray-600 hover:text-blue-500'}`}
              >
                {lng.toUpperCase()}
              </button>
            ))}
          </li>
        </ul>
      </div>


    </header>
  );
}
