// src/components/CleanMap.jsx
import React, { useMemo, useState } from "react";
import KazakhstanMapShape from "./KazakhstanMapShape";
import "./KazakhstanMap.css";

// Список точек на карте + соответствие path.id
const REGIONS = [
  { shapeId: "akmola",    name: "Астана",       cx: 600, cy: 177 },
  { shapeId: "almaty",    name: "Алматы",       cx: 727, cy: 445 },
  { shapeId: "akmola",    name: "Кокшетау",     cx: 555, cy: 110 },  // тот же контур, что и Астана
  { shapeId: "kyzylorda", name: "Кызылорда",    cx: 460, cy: 390 },
  { shapeId: "taraz",     name: "Тараз",        cx: 600, cy: 448 },
  { shapeId: "taldik",    name: "Талдыкорган",  cx: 750, cy: 390 },  // тот же контур, что и Алматы
  { shapeId: "atyrau",    name: "Атырау",       cx: 170, cy: 320 },
];

// Быстрое соответствие "город справа" -> id контура
const NAME_TO_SHAPE = REGIONS.reduce((acc, r) => {
  acc[r.name] = r.shapeId;
  return acc;
}, {});

export default function CleanMap({ hoveredCity, setHoveredCity, CITY_COLORS = {} }) {
  // локальный hover по точкам на карте
  const [activeRegionId, setActiveRegionId] = useState(null);

  // Если ховер из списка — берём его; иначе — локальный
  const hoveredShapeFromList = useMemo(
    () => (hoveredCity ? NAME_TO_SHAPE[hoveredCity] ?? null : null),
    [hoveredCity]
  );
  const hoveredShape = hoveredShapeFromList ?? activeRegionId;

  return (
    <svg
      viewBox="0 0 1000 549"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full transition-transform duration-500"
    >
      {/* Контур карты получает актуальный hoveredShape */}
      <KazakhstanMapShape hoveredRegion={hoveredShape} />

      {/* Точки филиалов */}
      <g className="regions">
        {REGIONS.map((r) => {
          const color = CITY_COLORS[r.name] || "#9B4DFF";
          const isHover = hoveredCity === r.name || hoveredShape === r.shapeId;
          const coreR = isHover ? 9.5 : 8;

          return (
            <g
              key={`${r.name}-${r.cx}-${r.cy}`}
              onMouseEnter={() => {
                setActiveRegionId(r.shapeId);    // подсветить контур
                setHoveredCity?.(r.name);        // синхрон с правым списком
              }}
              onMouseLeave={() => {
                setActiveRegionId(null);
                setHoveredCity?.(null);
              }}
              style={{ cursor: "pointer" }}
            >
              {/* неоновое свечение тем же цветом */}
              <circle
                cx={r.cx}
                cy={r.cy}
                r={coreR}
                className={`map-dot${isHover ? " map-dot--active" : ""}`}
                fill={color}
                stroke={isHover ? "white" : "transparent"}
                strokeWidth={isHover ? 2 : 0}
                style={{
                  transition: "all .18s ease",
                  filter: isHover
                    ? `drop-shadow(0 0 6px ${color}) drop-shadow(0 0 12px ${color}) drop-shadow(0 0 18px ${color})`
                    : `drop-shadow(0 0 4px ${color}99)`,
                }}
              />

              {/* тултип по желанию */}
              {isHover && (
                <foreignObject x={r.cx + 10} y={r.cy - 44} width={200} height={80}>
                  <div
                    xmlns="http://www.w3.org/1999/xhtml"
                    className="region-tooltip"
                    style={{
                      background: "white",
                      color: "#111",
                      borderRadius: 10,
                      padding: "6px 10px",
                      fontSize: 12,
                      fontWeight: 600,
                      boxShadow: "0 8px 24px rgba(0,0,0,.25)",
                      border: "1px solid rgba(0,0,0,.06)",
                      width: "max-content",
                      maxWidth: 160,
                    }}
                  >
                    <span
                      style={{
                        display: "inline-block",
                        width: 8,
                        height: 8,
                        borderRadius: 999,
                        marginRight: 8,
                        background: color,
                        boxShadow: `0 0 8px ${color}`,
                        verticalAlign: "middle",
                      }}
                    />
                    {r.name}
                  </div>
                </foreignObject>
              )}
            </g>
          );
        })}
      </g>
    </svg>
  );
}
