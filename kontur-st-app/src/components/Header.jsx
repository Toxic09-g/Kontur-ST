export default function Header() {
  return (
    <header className="w-full shadow-sm bg-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">

        {/* Левая часть: логотип и название */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded bg-blue-600 flex items-center justify-center text-white text-xl font-bold">
            <span>🛡️</span>
          </div>
          <div className="text-lg font-semibold text-gray-800">
            Контур-СТ <span className="block text-sm text-blue-600">IT решения в различных областях</span>
          </div>
        </div>

        {/* Правая часть: навигация + кнопка */}
        <div className="flex items-center gap-8 ml-auto">
          <nav className="hidden md:flex gap-8 font-medium text-gray-700">
            <a href="#about" className="relative group transition hover:text-blue-600">
              О нас
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#services" className="relative group transition hover:text-blue-600">
              Услуги
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#projects" className="relative group transition hover:text-blue-600">
              Проекты
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#contacts" className="relative group transition hover:text-blue-600">
              Партнеры
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#contacts" className="relative group transition hover:text-blue-600">
              Контакты
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
          </nav>



          <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg shadow">
            Связаться
          </button>
        </div>

      </div>
    </header>
  );
}
