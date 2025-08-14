import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
export default function HeroSection({ onContactClick }) {
  const { t } = useTranslation("hero");
  const leftRef = useRef(null);
  const rightCardRef = useRef(null);

  // ================== CountUp ==================
  const useInView = (options) => {
    const ref = useRef(null);
    const [inView, setInView] = useState(false);

    useEffect(() => {
      const node = ref.current;
      if (!node) return;
      const obs = new IntersectionObserver(
        ([entry]) => setInView(entry.isIntersecting),
        { threshold: 0.25, ...options }
      );
      obs.observe(node);
      return () => obs.disconnect();
    }, [options]);

    return [ref, inView];
  };

  const CountUp = ({
    end = 0,
    duration = 2000,
    decimals = 0,
    prefix = "",
    suffix = "",
    className = "",
  }) => {
    const [ref, inView] = useInView();
    const [value, setValue] = useState(0);
    const startedRef = useRef(false);

    useEffect(() => {
      if (!inView || startedRef.current) return;
      startedRef.current = true;

      const start = performance.now();
      const from = 0;
      const to = end;

      const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);

      const tick = (now) => {
        const elapsed = now - start;
        const p = Math.min(1, elapsed / duration);
        const eased = easeOutCubic(p);
        const current = from + (to - from) * eased;
        setValue(current);
        if (p < 1) requestAnimationFrame(tick);
      };

      requestAnimationFrame(tick);
    }, [inView, end, duration]);

    const formatted =
      decimals > 0
        ? value.toFixed(decimals)
        : Math.round(value).toString();

    return (
      <span ref={ref} className={className}>
        {prefix}
        {formatted}
        {suffix}
      </span>
    );
  };
  // ============================================

  // Vanta init
  useEffect(() => {
    const timeout = setTimeout(() => {
      if (typeof window.setVanta === "function") {
        window.setVanta();
      }
    }, 100);
    return () => clearTimeout(timeout);
  }, []);

  // Подгон правой высоты под левую (только на md+)
  useEffect(() => {
    const applyEqualHeight = () => {
      const card = rightCardRef.current;
      const left = leftRef.current;
      if (!card || !left) return;

      if (window.innerWidth >= 768) {
        const h = left.offsetHeight;
        card.style.height = `${h}px`;
      } else {
        card.style.height = "auto";
      }
    };

    const ro = new ResizeObserver(applyEqualHeight);
    if (leftRef.current) ro.observe(leftRef.current);
    window.addEventListener("resize", applyEqualHeight);
    applyEqualHeight();

    return () => {
      window.removeEventListener("resize", applyEqualHeight);
      ro.disconnect();
    };
  }, []);

  // ---------- ИКОНКИ (SVG с currentColor) ----------
  const IconCamera = (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect x="3" y="6.5" width="18" height="12" rx="2.5" />
      <path d="M7.5 6.5l1.6-2h5.8l1.6 2" />
      <circle cx="12" cy="12.5" r="3.5" />
      <circle cx="12" cy="12.5" r="1.2" fill="currentColor" />
    </svg>
  );
  const IconServer = (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect x="3" y="3" width="18" height="7" rx="2" />
      <rect x="3" y="14" width="18" height="7" rx="2" />
      <circle cx="7" cy="6.5" r="1" fill="currentColor" />
      <circle cx="7" cy="17.5" r="1" fill="currentColor" />
    </svg>
  );
  const IconShield = (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M12 22s8-3.8 8-10.5V6.5L12 3 4 6.5v5C4 18.2 12 22 12 22z" />
      <path d="M9 12.5l2 2 4-4" />
    </svg>
  );
  const IconFingerprint = (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M12 11a4 4 0 0 1 4 4c0 3 1 5 1 5" />
      <path d="M8 11a4 4 0 0 0-2 3c0 3-1 6-1 6" />
      <path d="M12 7a8 8 0 0 1 8 8c0 4 1 7 1 7" />
      <path d="M4 10a8 8 0 0 1 8-6" />
      <path d="M12 14a2 2 0 0 1 2 2c0 2 .7 4 .7 4" />
    </svg>
  );
  const IconAntenna = (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <circle cx="12" cy="12" r="1.8" fill="currentColor" />
      <path d="M15.5 8.5a5 5 0 0 1 0 7" />
      <path d="M18.5 6a8 8 0 0 1 0 12" />
      <path d="M8.5 8.5a5 5 0 0 0 0 7" />
      <path d="M5.5 6a8 8 0 0 0 0 12" />
    </svg>
  );
  const IconDrone = (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <circle cx="5" cy="5" r="2.5" />
      <circle cx="19" cy="5" r="2.5" />
      <rect x="6.5" y="9" width="11" height="6" rx="2" />
      <path d="M5 7.5v2M19 7.5v2" />
      <path d="M9 15v2.5l3 1.8 3-1.8V15" />
    </svg>
  );
  const IconRadar = (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 12l6-3" />
      <circle cx="18" cy="9" r="1" fill="currentColor" />
      <path d="M2 2l20 20" />
    </svg>
  );
  const IconKey = (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <circle cx="7.5" cy="11.5" r="3.5" />
      <path d="M10.5 11.5H21v3h-3v2h-3v-2h-2.5" />
    </svg>
  );
  const directions = [
    { tKey: "directions.video", color: "#9B4DFF", glow: "rgba(155,77,255,0.85)", Icon: IconCamera },
    { tKey: "directions.local", color: "#6F4DFE", glow: "rgba(111,77,254,0.85)", Icon: IconServer },
    { tKey: "directions.anti_terror", color: "#FF4D6D", glow: "rgba(255,77,109,0.85)", Icon: IconShield },
    { tKey: "directions.forensics", color: "#4DFFE0", glow: "rgba(77,255,224,0.85)", Icon: IconFingerprint },
    { tKey: "directions.mesh", color: "#FFD24D", glow: "rgba(255,210,77,0.85)", Icon: IconAntenna },
    { tKey: "directions.drone_light", color: "#FF914D", glow: "rgba(255,145,77,0.85)", Icon: IconDrone },
    { tKey: "directions.anti_uav", color: "#FF4DA6", glow: "rgba(255,77,166,0.85)", Icon: IconRadar },
    { tKey: "directions.sts", color: "#4D9BFF", glow: "rgba(77,155,255,0.85)", Icon: IconKey },
  ];

  return (
    <section id="canva" className="relative max-h-[800px] text-white bg-transparent overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen pt-[120px] grid grid-cols-1 md:grid-cols-2 gap-8 items-start relative z-10">

        {/* Левая колонка */}
        <div ref={leftRef} className="flex flex-col justify-center">
          <h1
            className="text-4xl sm:text-4xl md:text-4xl font-semibold leading-tight"
            dangerouslySetInnerHTML={{ __html: t("title") }}
          />
          <p className="mt-4 max-w-xl text-base sm:text-lg text-white/85">
            {t("description")}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <button
              onClick={onContactClick}
              className="rounded-full px-6 py-3 text-sm font-semibold text-white bg-gradient-to-r from-[#6F4DFE] to-[#9B4DFF] shadow-[0_10px_20px_rgba(111,77,254,0.35)] hover:shadow-[0_12px_24px_rgba(111,77,254,0.45)] transition"
            >
              {t("button_about")}
            </button>
          </div>

          {/* Быстрые факты */}
          <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="rounded-xl bg-white/5 ring-1 ring-white/10 p-4 text-center backdrop-blur-sm">
              <div className="text-2xl font-semibold">
                <CountUp end={10} suffix="+" />
              </div>
              <div className="text-xs text-white/70 mt-1">{t("facts.experience")}</div>
            </div>
            <div className="rounded-xl bg-white/5 ring-1 ring-white/10 p-4 text-center backdrop-blur-sm">
              <div className="text-2xl font-semibold">
                <CountUp end={300} suffix="+" />
              </div>
              <div className="text-xs text-white/70 mt-1">{t("facts.projects")}</div>
            </div>
            <div className="rounded-xl bg-white/5 ring-1 ring-white/10 p-4 text-center backdrop-blur-sm">
              <div className="text-2xl font-semibold flex items-baseline justify-center gap-1">
                <CountUp end={24} />
                <span className="text-base text-white/80">/7</span>
              </div>
              <div className="text-xs text-white/70 mt-1">{t("facts.support")}</div>
            </div>
            <div className="rounded-xl bg-white/5 ring-1 ring-white/10 p-4 text-center backdrop-blur-sm">
              <div className="text-2xl font-semibold">ISO</div>
              <div className="text-xs text-white/70 mt-1">{t("facts.iso")}</div>
            </div>
          </div>
        </div>

        {/* Правая колонка */}
        <div className="mt-6 md:mt-0">
          <div
            ref={rightCardRef}
            className="relative rounded-2xl p-6 sm:p-8 w-full bg-[#17152b]/60 backdrop-blur-sm ring-1 ring-white/10 overflow-hidden flex flex-col"
          >
            <div className="shrink-0">
              <div className="text-sm uppercase tracking-widest text-white/60">
                {t("directions_title")}
              </div>

              <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
                {directions.map(({ tKey, color, glow, Icon }, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-3 rounded-xl bg-white/5 ring-1 ring-white/10 px-4 py-3 hover:bg-white/7 transition"
                  >
                    <Icon
                      aria-hidden
                      style={{
                        color,
                        filter: `drop-shadow(0 0 8px ${glow}) drop-shadow(0 0 14px ${glow})`,
                      }}
                      className="w-[22px] h-[22px] shrink-0"
                    />
                    <span className="text-sm">{t(tKey)}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-auto pt-6 grid grid-cols-1 gap-3">
              <a
                href="#contacts"
                className="rounded-xl px-4 py-3 text-center text-sm font-semibold bg-gradient-to-r from-[#6F4DFE] to-[#9B4DFF] shadow-[0_10px_20px_rgba(111,77,254,0.35)] hover:shadow-[0_12px_24px_rgba(111,77,254,0.45)] transition"
              >
                {t("button_services")}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}