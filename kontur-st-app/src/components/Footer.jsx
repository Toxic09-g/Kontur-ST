// src/components/Footer.jsx
import React from "react";
import { HiOutlinePhone, HiOutlineMail, HiOutlineLocationMarker } from "react-icons/hi";
import { FaTelegramPlane, FaWhatsapp } from "react-icons/fa";

const nav = {
    products: [
        { label: "Видеонаблюдение и видеоаналитика", href: "#services" },
        { label: "Локально вычислительные системы", href: "#services" },
        { label: "Средства антитеррористической защиты", href: "#services" },
        { label: "Цифровая криминалистика", href: "#services" },
        { label: "Системы радиосвязи Mesh", href: "#services" },
        { label: "Дрон-системы освещения", href: "#services" },
        { label: "Анти-БПЛА", href: "#services" },
        { label: "СТС", href: "#services" },
    ],
    company: [
        { label: "О нас", href: "#about" },
        { label: "Услуги", href: "#branches" },
        { label: "Филиалы", href: "#partners" },
        { label: "Контакты", href: "#contacts" },
    ],

};

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="relative bg-[#23153c] text-white">
            {/* фоновые подсветки */}
            <div
                aria-hidden
                className="pointer-events-none absolute -top-10 left-8 h-52 w-52 rounded-full blur-3xl opacity-25 "
                style={{
                    background:
                        "radial-gradient(50% 50% at 50% 50%, rgba(155,77,255,0.45) 0%, rgba(155,77,255,0) 70%)",
                }}
            />
            <div
                aria-hidden
                className="pointer-events-none absolute -bottom-10 right-12 h-48 w-48 rounded-full blur-3xl opacity-25"
                style={{
                    background:
                        "radial-gradient(50% 50% at 50% 50%, rgba(77,255,224,0.4) 0%, rgba(77,255,224,0) 70%)",
                }}
            />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-[100px] ">
                {/* верхняя панель: CTA */}
                <div
                    className="
            relative -translate-y-8 rounded-2xl p-6 md:p-8
            bg-[#17152b]/70 backdrop-blur-md ring-1 ring-white/10
            shadow-[0_10px_30px_rgba(0,0,0,0.45),0_0_24px_rgba(111,77,254,0.28)] mb-[50px]
          "
                >
                    <div className="grid gap-6 md:grid-cols-[1.5fr_1fr] items-center ">
                        <div>
                            <h3 className="text-xl sm:text-2xl font-semibold">Готовы обсудить проект?</h3>
                            <p className="mt-2 text-white/70">
                                Подскажем оптимальную архитектуру, подготовим смету и сроки внедрения.
                            </p>
                        </div>
                        <div className="flex gap-3 md:justify-end">
                            <a
                                href="#cta"
                                className="
                  rounded-full px-5 py-2.5 text-sm font-semibold text-white
                  bg-gradient-to-r from-[#6F4DFE] to-[#9B4DFF]
                  shadow-[inset_0_1px_0_rgba(255,255,255,0.2),0_10px_20px_rgba(111,77,254,0.35)]
                  hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.25),0_12px_24px_rgba(111,77,254,0.45)]
                  transition
                "
                            >
                                Заказать консультацию
                            </a>
                            <a
                                href="#contacts"
                                className="rounded-full px-5 py-2.5 text-sm font-semibold text-white/90 ring-1 ring-white/15 bg-white/5 hover:bg-white/10 transition"
                            >
                                Написать нам
                            </a>
                        </div>
                    </div>
                </div>

                {/* основной контент */}
                <div className="grid gap-10 md:grid-cols-[1.1fr_1fr_1fr] pb-10">
                    {/* бренд + контакты */}
                    <div>
                        <a href="/" className="inline-flex items-center gap-3">
                            <div className="h-9 w-9 rounded-md bg-white/10 ring-1 ring-white/15" />
                            <div className="leading-none">
                                <div className="text-xl font-semibold tracking-[0.08em]">КОНТУР-СТ</div>
                                <div className="text-[11px] -mt-0.5 tracking-[0.2em] text-white/60">
                                    Комплексные решения под ключ
                                </div>
                            </div>
                        </a>

                        <ul className="mt-5 space-y-3 text-sm">
                            <li className="flex items-start gap-2.5 text-white/80">
                                <HiOutlinePhone className="mt-0.5 h-5 w-5 text-white/60" />
                                <a className="hover:text-white transition" href="tel:+77000000000">
                                    +7 (700) 000-00-00
                                </a>
                            </li>
                            <li className="flex items-start gap-2.5 text-white/80">
                                <HiOutlineMail className="mt-0.5 h-5 w-5 text-white/60" />
                                <a className="hover:text-white transition" href="mailto:info@kontur-st.kz">
                                    info@kontur-st.kz
                                </a>
                            </li>
                            <li className="flex items-start gap-2.5 text-white/80">
                                <HiOutlineLocationMarker className="mt-0.5 h-5 w-5 text-white/60" />
                                <span>Казахстан, Астана</span>
                            </li>
                        </ul>

                        {/* соцсети */}
                        <div className="mt-5 flex items-center gap-2">
                            {[
                                { Icon: FaTelegramPlane, href: "https://t.me/" },
                                { Icon: FaWhatsapp, href: "https://wa.me/77028542963" },
                            ].map(({ Icon, href }, i) => (
                                <a
                                    key={i}
                                    href={href}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="
                    inline-flex h-10 w-10 items-center justify-center rounded-full
                    bg-white/5 ring-1 ring-white/10 text-white/90
                    hover:bg-white/10 hover:text-white transition
                    [filter:drop-shadow(0_0_6px_rgba(155,77,255,0.35))]
                  "
                                >
                                    <Icon className="h-4.5 w-4.5" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* колонки ссылок */}
                    <FooterCol title="Решения" items={nav.products} />
                    <FooterCol title="Компания" items={nav.company} />
                    
                </div>

                {/* линия/копирайт */}
                <div className="border-t border-white/10 py-6 text-sm text-white/60 flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
                    <div>© {year} КОНТУР-СТ. Все права защищены.</div>

                </div>
            </div>
        </footer>
    );
}

function FooterCol({ title, items = [] }) {
    return (
        <div>
            <h4 className="text-white/90 font-semibold">{title}</h4>
            <ul className="mt-3 space-y-2.5 text-sm">
                {items.map((i) => (
                    <li key={i.label}>
                        <a
                            href={i.href}
                            className="text-white/70 hover:text-white transition hover:underline underline-offset-4"
                        >
                            {i.label}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
}
