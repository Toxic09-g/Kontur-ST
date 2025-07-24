import React from "react"
const logos = [
    { src: require('../images/partners/cisco.png'), link: 'https://www.cisco.com/' },
    { src: require('../images/partners/pelco.png'), link: 'https://www.pelco.com/' },
    { src: require('../images/partners/hikvision.png'), link: 'https://www.hikvision.com/en/' },
    { src: require('../images/partners/milestone.png'), link: 'https://www.milestonesys.com/' },
    { src: require('../images/partners/asia.png'), link: 'https://asia-soft.kz/' },
    { src: require('../images/partners/avigilon.png'), link: 'https://www.avigilon.com/ru' },
    { src: require('../images/partners/balt.png'), link: 'https://baltinfocom.ru/' },
    { src: require('../images/partners/briefcam.png'), link: 'https://www.briefcam.com/' },
    { src: require('../images/partners/logo_basic.png'), link: 'https://specinteh.com.ua/' },
    { src: require('../images/partners/hanwa.png'), link: 'https://www.hanwhavision.com/ru/' },
    { src: require('../images/partners/hewlett.png'), link: 'https://www.hpe.com/us/en/home.html' },
    { src: require('../images/partners/hytera.png'), link: 'https://www.hytera.com/ru/home.html' },
    { src: require('../images/partners/infowatch.png'), link: 'https://www.infowatch.ru/' },
    { src: require('../images/partners/intant.png'), link: 'https://intant.kz/' },
    { src: require('../images/partners/irisity.png'), link: 'https://irisity.com/' },
    { src: require('../images/partners/kodos.png'), link: 'https://kodos.ru/' },
    { src: require('../images/partners/macroscop.png'), link: 'https://macroscop.com/' },
    { src: require('../images/partners/magos.png'), link: 'https://magossystems.com/' },
    { src: require('../images/partners/motorola.png'), link: 'https://www.motorolasolutions.com/ru_ru.html' },
    { src: require('../images/partners/parsec.png'), link: 'https://www.parsec.ru/' },
    { src: require('../images/partners/polycom.png'), link: 'https://polycom-moscow.ru/' },
    { src: require('../images/partners/rajant.png'), link: 'https://rajant.com/' },
    { src: require('../images/partners/set.png'), link: 'https://www.set-1.ru/' },
    { src: require('../images/partners/logo.png'), link: 'https://taip.su/' },
    { src: require('../images/partners/logo-infinet.png'), link: 'https://infinetwireless.com/' },
]

export default function Partners() {
    return (
        <section id="partners" className="bg-[#f9fafb] py-16 scroll-mt-20">

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2  className="anchor-offset text-4xl font-bold text-[#001b60] text-center mb-12">
                    Наши партнёры
                </h2>


                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 items-center justify-items-center animate-fade-in">
                    {logos.map((partner, idx) => (
                        <a
                            href={partner.link}
                            key={idx}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:scale-105 transition-transform"
                        >
                            <img
                                src={partner.src}
                                alt="partner logo"
                                className="h-16 object-contain grayscale hover:grayscale-0 transition duration-300"
                            />
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}
