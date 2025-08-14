// Partners.jsx
import React from "react";

const logos = [
    { src: require('../images/partners/cisco.png'), link: 'https://www.cisco.com/' },
    { src: require('../images/partners/magos.png'), link: 'https://magossystems.com/' },
    { src: require('../images/partners/rajant.png'), link: 'https://www.rajant.com/' },
    { src: require('../images/partners/hytera.png'), link: 'https://www.hytera.com/' },
    { src: require('../images/partners/motorola.png'), link: 'https://www.motorolasolutions.com/' },
    { src: require('../images/partners/pelco.png'), link: 'https://www.pelco.com/' },
    { src: require('../images/partners/avigilon.png'), link: 'https://www.avigilon.com/' },
    { src: require('../images/partners/milestone.png'), link: 'https://www.milestonesys.com/' },
    { src: require('../images/partners/briefcam.png'), link: 'https://www.briefcam.com/' },
    { src: require('../images/partners/polycom.png'), link: 'https://www.poly.com/' },
    { src: require('../images/partners/logo-infinet.png'), link: 'https://infinetwireless.com/' },
    { src: require('../images/partners/logo.png'), link: 'https://taip.su/' },
    { src: require('../images/partners/balt.png'), link: 'https://baltinfocom.ru/' },
    { src: require('../images/partners/set.png'), link: 'https://www.set-1.ru/' },
    { src: require('../images/partners/parsec.png'), link: 'https://www.parsec.ru/' },
    { src: require('../images/partners/asia.png'), link: 'https://asia-soft.kz/' },

    { src: require('../images/partners/dell.png'), link: 'https://www.dell.com/' },
    { src: require('../images/partners/huawei.png'), link: 'https://www.huawei.com/' },
    { src: require('../images/partners/samsung.png'), link: 'https://www.samsung.com/' },
    { src: require('../images/partners/bolid.jpg'), link: 'https://www.bolid.ru/' },
    { src: require('../images/partners/recfaces.png'), link: 'https://recfaces.com/' },
    { src: require('../images/partners/forti.png'), link: 'https://www.fortinet.com/' },
    { src: require('../images/partners/geek.png'), link: 'https://geeklink.com.cn/' },
    { src: require('../images/partners/wds.png'), link: 'https://wds.kz/' },
    { src: require('../images/partners/elco.jpg'), link: 'https://elco.kg/' },
    { src: require('../images/partners/ko.png'), link: 'https://kontur-systems.kz/' },
    { src: require('../images/partners/sibir.png'), link: 'https://sibirtelecom.ru/' },
    { src: require('../images/partners/lg.png'), link: 'https://www.lg.com/' },
    { src: require('../images/partners/ace6.png'), link: 'https://www.ace6.com.sg/' },
    { src: require('../images/partners/alan.png'), link: '' },
];

export default function Partners() {
    return (
        <section id="partners" className="relative py-16 text-white bg-[#23153c]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Заголовок */}
                <div className="mb-10 flex items-end justify-between gap-4">
                    <div className="mb-8 inline-flex  items-center gap-2 rounded-full px-3 py-1 font-semibold bg-white/10 ring-1 ring-white/15">
                        <h2 className="text-3xl sm:text-4xl font-semibold">Наши партнеры</h2>
                    </div>

                    <a
                        href="#contacts"
                        className="
              hidden sm:inline-block rounded-full px-5 py-2.5 text-sm font-semibold
              text-white bg-gradient-to-r from-[#6F4DFE] to-[#9B4DFF]
              shadow-[inset_0_1px_0_rgba(255,255,255,0.2),0_10px_20px_rgba(111,77,254,0.35)]
              hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.25),0_12px_24px_rgba(111,77,254,0.45)]
              transition
            "
                    >
                        Стать партнёром
                    </a>
                </div>

                {/* Сетка карточек */}
                <ul
                    className="
            grid gap-4 sm:gap-5
            grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-7
          "
                >
                    {logos.map((item, idx) => {
                        const alt = item.alt || (item.link ? new URL(item.link).hostname.replace('www.', '') : `partner-${idx}`);

                        return (
                            <li key={idx} className="group relative">
                                <a
                                    href={item.link || '#'}
                                    target={item.link ? "_blank" : "_self"}
                                    rel="noreferrer"
                                    className="
      relative block h-[92px] sm:h-[100px]
      rounded-2xl bg-white
      ring-1 ring-black/5
      px-4 py-3
      flex items-center justify-center
      shadow-md transition-transform duration-300
      hover:scale-105 hover:shadow-xl
    "
                                    aria-label={alt}
                                    title={alt}
                                >
                                    {/* Неоновый ореол при ховере */}
                                    <span
                                        aria-hidden
                                        className="
        absolute inset-0 rounded-2xl opacity-0
        group-hover:opacity-100 transition duration-300
      "
                                        style={{
                                            boxShadow: "0 0 20px rgba(155,77,255,0.6), 0 0 40px rgba(77,255,224,0.5)",
                                        }}
                                    />

                                    <img
                                        src={item.src}
                                        alt={alt}
                                        loading="lazy"
                                        className="
        max-h-9 sm:max-h-10 object-contain
        opacity-95 transition duration-300
        group-hover:opacity-100 group-hover:scale-105
      "
                                    />
                                </a>
                            </li>

                        );
                    })}
                </ul>
            </div>

            {/* мягкие фоновые пятна секции (в фирменных цветах) */}
            <div
                aria-hidden
                className="pointer-events-none absolute -top-10 left-8 h-44 w-44 rounded-full blur-3xl opacity-30"
                style={{
                    background:
                        "radial-gradient(50% 50% at 50% 50%, rgba(155,77,255,0.5) 0%, rgba(155,77,255,0) 70%)",
                }}
            />
            <div
                aria-hidden
                className="pointer-events-none absolute -bottom-10 right-12 h-40 w-40 rounded-full blur-3xl opacity-25"
                style={{
                    background:
                        "radial-gradient(50% 50% at 50% 50%, rgba(77,255,224,0.45) 0%, rgba(77,255,224,0) 70%)",
                }}
            />
        </section>
    );
}
