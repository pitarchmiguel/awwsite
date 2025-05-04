import React, { useState, useEffect, useRef } from "react";

const cards = [
  {
    title: "Digital Marketing",
    desc: "Drive revenue growth with tailored campaigns that hit the mark every time. Real-time feedback? Yes, please.",
    highlight: ["WE", "MAKE YOUR", "MARKETING", "IMPOSSIBLE TO", "IGNORE!"],
    colors: ["#FF6A3D", "#FF6A3D", "#ec4899", "#FF6A3D", "#60a5fa"]
  },
  {
    title: "Brand Strategy",
    desc: "We build unforgettable brands with unique positioning and clear messaging.",
    highlight: ["BRAND", "STRATEGY", "THAT", "SETS YOU", "APART"],
    colors: ["#FFCB6B", "#FF6A3D", "#ec4899", "#FF6A3D", "#60a5fa"]
  },
  {
    title: "Content Creation",
    desc: "Engage your audience with creative content that tells your story.",
    highlight: ["CONTENT", "THAT", "INSPIRES", "AND", "CONVERTS"],
    colors: ["#60a5fa", "#FF6A3D", "#ec4899", "#FFCB6B", "#FF6A3D"]
  }
];

export default function Services() {
  const [active, setActive] = useState(0);
  const [hover, setHover] = useState(false);
  const intervalRef = useRef();

  useEffect(() => {
    if (hover) return; // Pausa autoplay en hover
    intervalRef.current = setInterval(() => {
      setActive((prev) => (prev + 1) % cards.length);
    }, 4000);
    return () => clearInterval(intervalRef.current);
  }, [hover]);

  const goTo = (idx) => {
    setActive((idx + cards.length) % cards.length);
  };

  return (
    <section
      className="w-full bg-black px-0 py-0 flex min-h-screen md:h-screen relative"
      style={{ position: "relative" }}
    >
      <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row justify-center gap-0 md:gap-8">
        {/* Columna izquierda */}
        <div className="flex-1 flex flex-col justify-start items-start max-w-xl bg-black px-6 py-20">
          <span className="inline-block bg-white/10 text-white px-4 py-1 rounded-full text-xs font-semibold tracking-widest mb-6 border border-white/20">
            SERVICES
          </span>
          <h2 className="text-5xl md:text-6xl font-bold text-white leading-tight mb-4">
            What exactly do <span className="text-[#FF6A3D]">we do?</span>
          </h2>
          <p className="text-gray-300 text-lg mt-2">
            Skills that go beyond expectations—and crush the competition.
          </p>
        </div>
        {/* Columna derecha, slider */}
        <div className="flex-1 flex flex-col justify-start items-center gap-8 px-6 py-20">
          <div
            className="w-full flex flex-col items-center"
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
          >
            <div className="relative w-full flex justify-center items-center min-h-[420px] pb-8">
              {cards.map((card, idx) => (
                <div
                  key={idx}
                  className={`bg-[#181818] rounded-2xl p-8 shadow-lg max-w-md w-full absolute transition-all duration-500 pb-20 ${idx === active ? 'opacity-100 z-10 scale-100' : 'opacity-0 z-0 scale-95 pointer-events-none'}`}
                  style={{ top: 0, left: 0, minHeight: 550 }}
                >
                  <div className="flex items-center mb-4">
                    <span className="w-6 h-6 rounded-full bg-[#FF6A3D] flex items-center justify-center mr-3">
                      <svg width="16" height="16" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="12" fill="#FF6A3D"/></svg>
                    </span>
                    <h3 className="text-xl font-bold text-white">{card.title}</h3>
                  </div>
                  <p className="text-gray-300 mb-6 text-sm">
                    {card.desc}
                  </p>
                  {/* Imagen/ilustración con texto llamativo */}
                  <div className="bg-gray-300 rounded-xl overflow-hidden flex items-center justify-center aspect-[4/3] relative">
                    {/* Simulación de la ilustración y texto */}
                    <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
                      {card.highlight.map((word, i) => (
                        <span
                          key={i}
                          className={`block text-2xl md:text-3xl font-extrabold drop-shadow-lg leading-none`}
                          style={{ color: card.colors[i], textShadow: '2px 2px 0 #fff' }}
                        >
                          {word}
                        </span>
                      ))}
                    </div>
                    {/* Fondo simulado */}
                    <svg viewBox="0 0 300 200" className="w-full h-full" preserveAspectRatio="none">
                      <ellipse cx="150" cy="120" rx="120" ry="80" fill="#FFCB6B" />
                      <ellipse cx="80" cy="180" rx="60" ry="30" fill="#181818" />
                    </svg>
                  </div>
                  {/* Botones de flecha en la esquina inferior derecha */}
                  {idx === active && (
                    <div className="absolute bottom-6 right-6 flex gap-2 z-20">
                      <button
                        className="bg-[#222] hover:bg-[#FF6A3D] text-white rounded-full w-10 h-10 flex items-center justify-center transition-colors duration-200"
                        onClick={() => goTo(active - 1)}
                        aria-label="Anterior"
                      >
                        <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><path d="M15 19l-7-7 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                      </button>
                      <button
                        className="bg-[#222] hover:bg-[#FF6A3D] text-white rounded-full w-10 h-10 flex items-center justify-center transition-colors duration-200"
                        onClick={() => goTo(active + 1)}
                        aria-label="Siguiente"
                      >
                        <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                      </button>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
