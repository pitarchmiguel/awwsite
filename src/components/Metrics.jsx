import { motion, useSpring, useTransform } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function Metrics() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        const element = document.querySelector('#metrics-section');
        if (element) {
            observer.observe(element);
        }

        return () => {
            if (element) {
                observer.unobserve(element);
            }
        };
    }, []);

    // Componente para animar el número y mostrarlo correctamente
    const AnimatedNumber = ({ value, suffix = "+" }) => {
        const spring = useSpring(0, {
            stiffness: 50,
            damping: 20,
            mass: 1
        });
        const displayValue = useTransform(spring, (latest) => Math.round(latest));
        const [current, setCurrent] = useState(0);

        useEffect(() => {
            if (isVisible) {
                spring.set(value);
            }
        }, [isVisible, value, spring]);

        useEffect(() => {
            return displayValue.on('change', v => setCurrent(v));
        }, [displayValue]);

        return (
            <span>{current}{suffix}</span>
        );
    };

    return (
        <section id="metrics-section" className="h-screen bg-[#f0ece0] flex items-center justify-center">
            <div className="max-w-7xl mx-auto px-6 w-full">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Nuestros números hablan por sí solos
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Cada proyecto es una historia de éxito, cada cliente una relación de confianza
                    </p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
                    <div className="space-y-2 text-center">
                        <motion.div 
                            className="text-5xl font-bold text-gray-900"
                            initial={{ opacity: 0, y: 20 }}
                            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                        >
                            <AnimatedNumber value={100} />
                        </motion.div>
                        <div className="text-gray-500 text-sm tracking-wide">PROYECTOS</div>
                    </div>
                    <div className="space-y-2 text-center">
                        <motion.div 
                            className="text-5xl font-bold text-gray-900"
                            initial={{ opacity: 0, y: 20 }}
                            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                        >
                            <AnimatedNumber value={50} />
                        </motion.div>
                        <div className="text-gray-500 text-sm tracking-wide">CLIENTES</div>
                    </div>
                    <div className="space-y-2 text-center">
                        <motion.div 
                            className="text-5xl font-bold text-gray-900"
                            initial={{ opacity: 0, y: 20 }}
                            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                        >
                            <AnimatedNumber value={5} />
                        </motion.div>
                        <div className="text-gray-500 text-sm tracking-wide">AÑOS</div>
                    </div>
                    <div className="space-y-2 text-center">
                        <motion.div 
                            className="text-5xl font-bold text-gray-900"
                            initial={{ opacity: 0, y: 20 }}
                            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                        >
                            24/7
                        </motion.div>
                        <div className="text-gray-500 text-sm tracking-wide">SOPORTE</div>
                    </div>
                </div>
            </div>
        </section>
    );
} 