export default function Hero() {
    return (
        <section className="w-[90vw] max-w-7xl mx-auto rounded-3xl relative bg-white h-screen flex items-center justify-center p-10 mb-30 overflow-hidden">
            <div className="max-w-5xl text-center relative z-10">
                <div className="flex flex-col items-center gap-4">
                    <h1 className="text-4xl md:text-8xl font-bold leading-tight tracking-tight text-gray-900">
                        Branding that's<br />
                        <span className="inline-block relative">
                            crazy good
                        </span>
                    </h1>
                </div>
                <p className="mt-8 text-base md:text-xl text-gray-700 max-w-2xl mx-auto">
                    We create brands that turn heads and drop jaws. Ready to stand out?
                </p>
                <div className="mt-12 flex justify-center">
                    <button className="bg-[#FF6A3D] hover:bg-[#ff8a3d] text-white text-xl font-bold px-12 py-5 rounded-full shadow-lg transition-all duration-300">
                        LET'S DO IT
                    </button>
                </div>
            </div>
        </section>
    );
}
  