import React, { useState } from "react";
import { HiOutlineGlobeAlt, HiOutlineMenu, HiX } from "react-icons/hi";
import { useTranslation } from "react-i18next";

const nav = [
  { key: "about", href: "#about" },
  { key: "services", href: "#services" },
  { key: "branches", href: "#news" },
  { key: "contacts", href: "#contacts" }
];

const langs = [
  { code: "ru", labelKey: "lang.short.ru" },
  { code: "en", labelKey: "lang.short.en" },
  { code: "kk", labelKey: "lang.short.kk" }
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [langMenu, setLangMenu] = useState(false);
  const { t, i18n } = useTranslation("header"); // <- namespace "header"

  const currentLang = i18n.language?.split("-")[0] || "ru";

  const changeLang = async (lng) => {
    setLangMenu(false);
    if (lng !== currentLang) await i18n.changeLanguage(lng);
  };

  return (
  <header className="fixed top-0 left-0 w-full z-[100]">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="mt-6 flex items-center justify-center">
        <div
          className="
            relative w-full rounded-[18px] px-4 sm:px-6
            bg-[#17152b]/65 backdrop-blur-sm
            ring-1 ring-white/10
          "
        >
          <div className="flex items-center gap-4">
            {/* ЛОГО */}
            <a href="/" className="flex items-center gap-2 py-3 sm:py-4 pr-2">
              <div className="h-7 w-7 rounded-md bg-white/10 ring-1 ring-white/15" />
              <div className="leading-none">
                <div className="text-[20px] font-semibold tracking-[0.08em] text-white">
                  {t("brand.title")}
                </div>
                <div className="text-[10px] -mt-0.5 tracking-[0.2em] text-white/60">
                  {t("brand.tagline")}
                </div>
              </div>
            </a>

            {/* NAV десктоп */}
            <nav className="hidden md:flex items-center gap-6 text-[15px]">
              {nav.map((item) => (
                <a
                  key={item.key}
                  href={item.href}
                  className="text-white/80 hover:text-white transition py-4"
                >
                  {t(`nav.${item.key}`)}
                </a>
              ))}
            </nav>

            <div className="ml-auto flex items-center gap-3">
              {/* Язык (dropdown) */}
              <div className="relative hidden sm:block">
                <button
                  className="
                    flex items-center gap-2
                    rounded-full border border-white/10 px-3 py-2
                    text-sm text-white/90 hover:text-white hover:border-white/20 transition
                    bg-white/5
                  "
                  onClick={() => setLangMenu((v) => !v)}
                  aria-haspopup="menu"
                  aria-expanded={langMenu}
                  aria-label={t("lang.choose")}
                >
                  <HiOutlineGlobeAlt className="h-4 w-4" />
                  {t(`lang.short.${currentLang}`)}
                </button>

                {langMenu && (
                  <div
                    className="absolute left-0 top-full mt-2 min-w-[140px]
                               rounded-xl bg-[#1a1830] ring-1 ring-white/10 p-1 shadow-xl z-50"
                    role="menu"
                  >
                    {langs.map(({ code, labelKey }) => (
                      <button
                        key={code}
                        onClick={() => changeLang(code)}
                        className={`w-full text-left px-3 py-2 rounded-lg text-sm text-white/90 hover:bg-white/5 ${
                          currentLang === code ? "opacity-100" : "opacity-80"
                        }`}
                        role="menuitem"
                      >
                        {t(labelKey)}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* CTA */}
              <a
                href="#cta"
                className="
                  hidden md:inline-block
                  rounded-full px-5 py-2.5
                  text-sm font-semibold text-white
                  bg-gradient-to-r from-[#6F4DFE] to-[#9B4DFF]
                  shadow-[inset_0_1px_0_rgba(255,255,255,0.2),0_10px_20px_rgba(111,77,254,0.35)]
                  hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.25),0_12px_24px_rgba(111,77,254,0.45)]
                  transition
                "
              >
                {t("cta")}
              </a>

              {/* Бургер */}
              <button
                className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-full bg-white/5 ring-1 ring-white/10 text-white"
                onClick={() => setOpen(true)}
                aria-label="Открыть меню"
              >
                <HiOutlineMenu className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Мобильное меню */}
      {open && (
        <div className="md:hidden fixed inset-0 z-[60] bg-[#0c0a1f]/70 backdrop-blur-sm">
          <div
            className="absolute left-1/2 -translate-x-1/2 top-6 w-[92%] max-w-[560px]
                       rounded-2xl p-4 bg-gradient-to-b from-[#1a1830] to-[#18162d]
                       ring-1 ring-white/10 shadow-2xl"
          >
            <div className="flex items-center justify-between">
              <div className="text-white/90 font-semibold">{t("menu")}</div>
              <button
                onClick={() => setOpen(false)}
                className="h-9 w-9 inline-flex items-center justify-center rounded-full bg-white/5 ring-1 ring-white/10 text-white"
                aria-label="Закрыть меню"
              >
                <HiX className="h-6 w-6" />
              </button>
            </div>

            <nav className="mt-2 grid">
              {nav.map((item) => (
                <a
                  key={item.key}
                  href={item.href}
                  className="px-3 py-3 text-base text-white/90 hover:text-white rounded-lg hover:bg-white/5 transition"
                  onClick={() => setOpen(false)}
                >
                  {t(`nav.${item.key}`)}
                </a>
              ))}

              <div className="mt-2 flex items-center gap-2 px-2">
                <div className="relative">
                  <button
                    className="flex items-center gap-2 rounded-full border border-white/10 px-3 py-2 text-sm text-white/90 bg-white/5"
                    onClick={() => setLangMenu((v) => !v)}
                    aria-haspopup="menu"
                    aria-expanded={langMenu}
                  >
                    <HiOutlineGlobeAlt className="h-4 w-4" />
                    {t(`lang.short.${currentLang}`)}
                  </button>
                  {langMenu && (
                    <div
                      className="absolute left-0 top-full mt-2 min-w-[140px] rounded-xl bg-[#1a1830] ring-1 ring-white/10 p-1 shadow-xl z-50"
                      role="menu"
                    >
                      {langs.map(({ code, labelKey }) => (
                        <button
                          key={code}
                          onClick={() => changeLang(code)}
                          className={`w-full text-left px-3 py-2 rounded-lg text-sm text-white/90 hover:bg-white/5 ${
                            currentLang === code ? "opacity-100" : "opacity-80"
                          }`}
                          role="menuitem"
                        >
                          {t(labelKey)}
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                <a
                  href="#cta"
                  className="ml-auto rounded-full px-4 py-2 text-sm font-semibold text-white bg-gradient-to-r from-[#6F4DFE] to-[#9B4DFF]"
                  onClick={() => setOpen(false)}
                >
                  {t("consult")}
                </a>
              </div>
            </nav>
          </div>
        </div>
      )}
    </div>
  </header>
);

}
