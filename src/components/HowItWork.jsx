import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const steps = [
  {
    title: 'Suscríbete',
    description: 'Haz clic en el botón de suscripción y deja que empiecen los buenos momentos.',
    icon: (
      <svg width="80" height="80" viewBox="0 0 80 80" fill="none"><rect width="80" height="80" rx="16" fill="#fff"/><path d="M20 60l10-10 10 10 20-20" stroke="#FF6A3D" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/><rect x="20" y="20" width="40" height="40" rx="8" stroke="#222" strokeWidth="2"/></svg>
    ),
  },
  {
    title: 'Agrega Tareas',
    description: 'Comienza a agregar tareas a tu panel. Agrega tantas como quieras y nos pondremos en marcha.',
    icon: (
      <svg width="80" height="80" viewBox="0 0 80 80" fill="none"><rect width="80" height="80" rx="16" fill="#fff"/><rect x="24" y="24" width="32" height="32" rx="6" stroke="#FF6A3D" strokeWidth="4"/><path d="M32 36h16M32 44h16" stroke="#222" strokeWidth="2" strokeLinecap="round"/></svg>
    ),
  },
  {
    title: 'Disfruta los resultados',
    description: 'Recibe tu trabajo en 24-48 horas. Revisamos hasta que estés feliz.',
    icon: (
      <svg width="80" height="80" viewBox="0 0 80 80" fill="none"><rect width="80" height="80" rx="16" fill="#fff"/><path d="M28 52c4-8 20-8 24 0" stroke="#FF6A3D" strokeWidth="4" strokeLinecap="round"/><circle cx="32" cy="36" r="4" fill="#222"/><circle cx="48" cy="36" r="4" fill="#222"/></svg>
    ),
  },
];

const cardVariants = [
  {
    initial: { y: 0, scale: 1, boxShadow: '0 2px 12px 0 rgba(0,0,0,0.04)' },
    animate: { y: -30, scale: 1.05, boxShadow: '0 8px 32px 0 rgba(255,106,61,0.15)' },
  },
  {
    initial: { y: 0, scale: 1, boxShadow: '0 2px 12px 0 rgba(0,0,0,0.04)' },
    animate: { y: 0, scale: 1.08, boxShadow: '0 8px 32px 0 rgba(255,106,61,0.15)' },
  },
  {
    initial: { y: 0, scale: 1, boxShadow: '0 2px 12px 0 rgba(0,0,0,0.04)' },
    animate: { y: 30, scale: 1.05, boxShadow: '0 8px 32px 0 rgba(255,106,61,0.15)' },
  },
];

export default function HowItWork() {
  const controls = [useAnimation(), useAnimation(), useAnimation()];
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.4 });

  // Lanzar animaciones cuando entra en viewport
  React.useEffect(() => {
    if (inView) {
      controls.forEach((ctrl) => {
        ctrl.start('animate');
      });
    }
  }, [inView]);

  return (
    <section className="w-full py-24 flex flex-col items-center mb-40">
      <div className="mb-8 px-4 flex flex-col items-center">
        <button className="px-6 py-2 rounded-full bg-white text-sm font-semibold mb-8 mx-auto">CÓMO FUNCIONA</button>
        <h2 className="text-5xl font-black text-center mb-6">El trabajo se hace. <span className="text-[#FF6A3D]">Rápido.</span></h2>
        <p className="text-center text-gray-500 text-xl mb-12">Así de fácil es poner tu imaginación a trabajar.</p>
      </div>
      <div ref={ref} className="flex flex-col md:flex-row md:gap-0 gap-0 mt-12 w-full max-w-5xl px-4">
        {steps.map((step, idx) => (
          <motion.div
            key={idx}
            initial="initial"
            animate={controls[idx]}
            variants={cardVariants[idx]}
            transition={{ duration: 0.8, delay: 0.1 * idx, type: 'spring' }}
            className="howitwork-card bg-white rounded-3xl shadow-xl flex-1 flex flex-col items-center p-8 text-center relative z-10 border md:border-0"
            style={{ minHeight: 340 }}
          >
            <div className="mb-6">{step.icon}</div>
            <h3 className="text-2xl font-bold mb-2">{step.title}</h3>
            <p className="text-gray-600 text-base">{step.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
