import camera from '../assets/camera.png';
import router from '../assets/router.png'
import security from '../assets/security.png'
import sts from '../assets/sts.png'
import background from '../assets/main_background.png';
export default function HeroSection() {
  const features = [
    {
      icon: <img src={camera} alt="Системы видеонаблюдения" className="w-8 h-8 mx-auto" />,
      title: "Системы видеонаблюдения и видеоаналитики",
      text: "Передовые технологии безопасности",
    },
    {
      icon: <img src={router} alt="Локально вычислительные системы" className="w-8 h-8 mx-auto" />,
      title: "Локально вычислительные системы",
      text: "Надёжная IT-инфраструктура 24/7",
    },
    {
      icon: <img src={security} alt="Средства Антитерро- ристической Защиты" className="w-8 h-8 mx-auto" />,
      title: "Средства Антитерро- ристической Защиты",
      text: "Комплексный контроль доступа",
    },
    {
      icon: <img src={sts} alt="СТС" className="w-8 h-8 mx-auto" />,
      title: "СТС",
      text: "Специальные технические средства",
    },
  ];

  return (
   <section 
  className="relative text-white min-h-[calc(100vh-5rem)] bg-cover bg-center bg-no-repeat flex items-start justify-between flex-col pt-24 pb-12"
  style={{
    backgroundImage: `linear-gradient(to right, rgba(30, 64, 175, 0.79), rgba(37,99,235,0.6)), url(${background})`,
  }}
>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-12">
          {/* Левая часть */}
          <div className="flex-1">
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-6">
              Комплексные решения <br />
              в области
              <span className="text-blue-300"> безопасности и видеонаблюдения</span> <br />
            </h1>
            <p className="text-lg text-gray-200 mb-8 max-w-md">
              Профессиональная поставка оборудования, установка и поддержка вашей инфраструктуры безопасности.
            </p>
            <div className="flex gap-4 flex-wrap">
              <button className="bg-white text-blue-700 font-semibold px-6 py-3 rounded-lg shadow hover:bg-gray-100">
                Связаться
              </button>
              <button className="border border-white text-white font-semibold px-6 py-3 rounded-lg hover:bg-white hover:text-blue-700 transition">
                Подробнее
              </button>
            </div>
          </div>

          {/* Правая часть */}
          <div className="flex-1 grid grid-cols-2 gap-4">
            {features.map((item, index) => (
              <div
                key={index}
                className="transition-transform duration-300 hover:-rotate-2 hover:scale-105 cursor-pointer bg-white bg-opacity-10 p-6 rounded-xl text-center backdrop-blur-sm"
              >
                <div className="text-2xl mb-2">
                  {item.icon}
                </div>
                <h3 className="font-semibold">{item.title}</h3>
                <p className="text-sm text-blue-100">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Волна снизу */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
        <svg
          className="relative block w-full h-24"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="#ffffff"
            d="M0,224L60,213.3C120,203,240,181,360,192C480,203,600,245,720,245.3C840,245,960,203,1080,170.7C1200,139,1320,117,1380,106.7L1440,96L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          ></path>
        </svg>
      </div>
    </section>
  );
}

