import { motion } from "framer-motion";

export default function Projects() {
  const projects = [
    {
      image: "https://picsum.photos/800/600?random=1",
      url: "#",
    },
    {
      image: "https://picsum.photos/800/600?random=2",
      url: "#",
    },
    {
      image: "https://picsum.photos/800/600?random=3",
      url: "#",
    },
    {
      image: "https://picsum.photos/800/600?random=4",
      url: "#",
    },
    {
      image: "https://picsum.photos/800/600?random=5",
      url: "#",
    },
    {
      image: "https://picsum.photos/800/600?random=6",
      url: "#",
    },
  ];

  return (
    <section className="bg-black min-h-screen py-50 px-4 md:px-12">
      <div className="max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-block mb-8"
        >
          <span className="bg-white text-black font-semibold rounded-full px-6 py-2 text-sm tracking-widest shadow-sm">
            ✱ PROJECTS
          </span>
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-4xl md:text-7xl font-bold text-white mb-6"
        >
          Designs that you'll love
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="text-lg md:text-2xl text-gray-300 mb-24"
        >
          Branding is our thing, we're kinda good at it.
        </motion.p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 md:gap-14">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 + index * 0.1 }}
              className="group relative block rounded-2xl overflow-hidden"
              style={{ boxShadow: "0 2px 24px 0 rgba(0,0,0,0.12)" }}
            >
              <img
                src={project.image}
                alt={`Proyecto ${index + 1}`}
                className="w-full h-64 md:h-72 object-cover bg-gray-200"
                draggable="false"
              />
              <motion.a
                href={project.url}
                initial={{ opacity: 0, y: 20 }}
                whileHover={{ opacity: 1, y: 0 }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity"
                style={{ textDecoration: 'none' }}
              >
                <span className="flex items-center gap-2 bg-white/90 text-black font-semibold px-6 py-3 rounded-full shadow-lg text-base md:text-lg">
                  Ver proyecto
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L21 12m0 0l-3.75 5.25M21 12H3" />
                  </svg>
                </span>
              </motion.a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
  