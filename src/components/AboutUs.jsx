import { useEffect, useRef, useState } from "react";

const TEXTS = [
  "This is where ",
  "awwwsite comes in",
  "We make boring things, interesting! Our design is built to scale, adapt, and grow with you. And hey, we don't ghost you after delivery—count on us for ongoing tweaks and upgrades."
];

function useScrollReveal(ref) {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    function onScroll() {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const windowHeight = window.innerHeight || document.documentElement.clientHeight;
      if (rect.top > windowHeight || rect.bottom < 0) {
        setProgress(0);
        return;
      }
      // const visible = Math.min(windowHeight, rect.bottom) - Math.max(0, rect.top); // Eliminada porque no se usa
      // const total = Math.min(rect.height, windowHeight); // Eliminada porque no se usa
      // Progresivo: desde que empieza a entrar hasta que sale
      const scrollPercent = 1 - Math.max(0, Math.min(1, rect.bottom / (windowHeight + rect.height)));
      setProgress(scrollPercent);
    }
    window.addEventListener("scroll", onScroll);
    window.addEventListener("resize", onScroll);
    onScroll();
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [ref]);
  return progress;
}

function ScrollTypewriter({ text, progress, className = "" }) {
  const length = Math.floor(text.length * progress);
  return <span className={className}>{text.slice(0, length)}</span>;
}

export default function AboutUs() {
  const ref = useRef();
  const progress = useScrollReveal(ref);

  // Dividir el progreso entre los tres textos
  // Ahora todo el texto se revela en el primer 50% del scroll
  const t1 = 0.09; // 9% para el primer texto
  const t2 = 0.09; // 9% para el segundo
  const t3 = 0.32; // 32% para el párrafo
  let p1 = Math.min(1, progress / t1);
  let p2 = progress > t1 ? Math.min(1, (progress - t1) / t2) : 0;
  let p3 = progress > t1 + t2 ? Math.min(1, (progress - t1 - t2) / t3) : 0;

  return (
    <section
      ref={ref}
      className="w-[95vw] max-w-7xl mx-auto rounded-3xl relative bg-[#ff592c] min-h-[90vh] flex flex-col items-center justify-center p-10 my-20 overflow-hidden border-8 border-[#f0ece0]"
      style={{ boxShadow: "0 2px 32px 0 rgba(255,106,61,0.10)" }}
    >
      <div className="max-w-4xl w-full text-center relative z-10 flex flex-col items-center gap-4">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
          <ScrollTypewriter text={TEXTS[0]} progress={p1} />
          <ScrollTypewriter text={TEXTS[1]} progress={p2} />
        </h2>
        <p className="mt-6 text-lg md:text-3xl text-white font-medium min-h-[4rem]">
          <ScrollTypewriter text={TEXTS[2]} progress={p3} />
        </p>
        <div className="mt-20 flex justify-center">
          <button className="bg-white hover:bg-[#ffe3d1] text-[#FF5C1B] text-lg font-bold px-10 py-5 rounded-full shadow-lg transition-all duration-300">
            BOOK A CALL
          </button>
        </div>
      </div>
      {/* Esquinas decorativas */}
      <div className="absolute left-0 bottom-0 w-48 h-48 pointer-events-none">
        <svg width="100%" height="100%" viewBox="0 0 200 200" fill="none">
          <path d="M10 190 Q60 120 120 180 Q180 200 200 100" stroke="#fff" strokeWidth="8" fill="none" opacity="0.3" />
          <circle cx="30" cy="170" r="6" fill="#fff" opacity="0.7" />
          <circle cx="60" cy="190" r="3" fill="#fff" opacity="0.7" />
        </svg>
      </div>
      <div className="absolute right-0 top-0 w-64 h-64 pointer-events-none">
        <svg width="100%" height="100%" viewBox="0 0 250 250" fill="none">
          <path d="M250 10 Q180 60 200 120 Q200 180 100 200" stroke="#fff" strokeWidth="8" fill="none" opacity="0.3" />
          <circle cx="230" cy="30" r="6" fill="#fff" opacity="0.7" />
          <circle cx="210" cy="60" r="3" fill="#fff" opacity="0.7" />
        </svg>
      </div>
    </section>
  );
}
