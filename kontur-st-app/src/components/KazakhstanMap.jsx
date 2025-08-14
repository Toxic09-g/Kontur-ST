// BranchesSection.jsx
import React, { useState } from "react";
import Map from "./CleanMap";

export const CITY_COLORS = {
  "Астана":       "#9B4DFF",
  "Алматы":       "#4DFFE0",
  "Кокшетау":     "#4D9BFF",
  "Кызылорда":    "#FFD24D",
  "Тараз":        "#FF6FAE",
  "Талдыкорган":  "#6F4DFE",
  "Атырау":       "#FF914D",
};

const OFFICES = [
  { city: "Астана" },
  { city: "Алматы" },
  { city: "Кокшетау" },
  { city: "Кызылорда" },
  { city: "Тараз" },
  { city: "Талдыкорган" },
  { city: "Атырау" },
];

export default function KazakhstanMap() {
  const [hoveredCity, setHoveredCity] = useState(null);

  return (
    <section id="branches" className="relative py-16 text-white bg-[#23153c] ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 inline-flex  items-center gap-2 rounded-full px-3 py-1 font-semibold bg-white/10 ring-1 ring-white/15">
          <h2 className="text-3xl sm:text-4xl font-semibold">Филиалы</h2>
        </div>

        <div className="grid gap-6 grid-cols-1 md:grid-cols-[1.7fr_1fr] items-stretch">
          {/* Карта */}
          <div
            className="
              relative rounded-3xl overflow-hidden
              bg-[#17152b]/60 backdrop-blur-md
              ring-1 ring-white/10
              shadow-[inset_0_1px_0_rgba(255,255,255,0.16),inset_0_-1px_0_rgba(0,0,0,0.35),0_18px_40px_rgba(0,0,0,0.45)]
              h-[420px] md:h-[460px]
            "
          >
            <Map
              hoveredCity={hoveredCity}
              setHoveredCity={setHoveredCity}
              CITY_COLORS={CITY_COLORS}
            />

            {/* мягкие подсветки */}
            <div
              aria-hidden
              className="pointer-events-none absolute -top-20 -left-20 h-56 w-56 rounded-full blur-3xl opacity-20"
              style={{
                background:
                  "radial-gradient(50% 50% at 50% 50%, rgba(155,77,255,0.6) 0%, rgba(155,77,255,0) 70%)",
              }}
            />
            <div
              aria-hidden
              className="pointer-events-none absolute -bottom-16 -right-12 h-48 w-48 rounded-full blur-3xl opacity-20"
              style={{
                background:
                  "radial-gradient(50% 50% at 50% 50%, rgba(77,255,224,0.5) 0%, rgba(77,255,224,0) 70%)",
              }}
            />
          </div>

          {/* Список */}
          <aside
            className="
              rounded-3xl p-5 sm:p-6
              bg-[#17152b]/60 backdrop-blur-md
              ring-1 ring-white/10
              shadow-[inset_0_1px_0_rgba(255,255,255,0.16),inset_0_-1px_0_rgba(0,0,0,0.35),0_18px_40px_rgba(0,0,0,0.45)]
              h-[420px] md:h-[460px]
              flex flex-col overflow-hidden
            "
          >
            <h3 className="text-lg font-semibold">Офисы и контакты</h3>

            <ul className="mt-4 space-y-3 flex-1 overflow-y-auto pr-2 neon-scroll">
              {OFFICES.map(({ city }) => {
                const color = CITY_COLORS[city] || "#9B4DFF";
                const active = hoveredCity === city;
                return (
                  <li
                    key={city}
                    className={`
                      rounded-2xl p-4 ring-1 ring-white/10
                      flex items-start gap-3 cursor-pointer transition
                      ${active ? "bg-white/10" : "bg-white/5 hover:bg-white/7"}
                    `}
                    onMouseEnter={() => setHoveredCity(city)}
                    onMouseLeave={() => setHoveredCity(null)}
                    data-city={city}
                  >
                    <span
                      className="mt-1 h-2.5 w-2.5 rounded-full shrink-0"
                      style={{
                        backgroundColor: color,
                        filter: active
                          ? `drop-shadow(0 0 8px ${color}) drop-shadow(0 0 12px ${color})`
                          : `drop-shadow(0 0 5px ${color}66)`,
                      }}
                    />
                    <div className="leading-tight">
                      <div className="font-medium">{city}</div>
                    </div>
                  </li>
                );
              })}
            </ul>

            <div className="mt-4 grid grid-cols-1 gap-3">
              <a
                href="#contacts"
                className="rounded-xl px-4 py-2.5 text-center text-sm font-semibold bg-gradient-to-r from-[#6F4DFE] to-[#9B4DFF] hover:opacity-95 transition"
              >
                Связаться с нами
              </a>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
