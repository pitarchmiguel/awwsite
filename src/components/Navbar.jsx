import { useState } from 'react';

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="w-[90vw] max-w-7xl bg-white rounded-3xl p-4 md:px-12 md:py-8 flex items-center justify-between mx-auto my-4">
            <div className="flex-shrink-0">
                <h1 className="text-xl">a<span className="font-bold text-[#FF5C1B]">www</span>site</h1>
            </div>

            <ul className="hidden md:flex gap-12 text-lg font-medium">
                <li><a href="#" className="hover:text-gray-600 transition-colors duration-300">Work</a></li>
                <li><a href="#" className="hover:text-gray-600 transition-colors duration-300">Capabilities</a></li>
                <li><a href="#" className="hover:text-gray-600 transition-colors duration-300">Process</a></li>
                <li><a href="#" className="hover:text-gray-600 transition-colors duration-300">Pricing</a></li>
            </ul>

            <div className="flex items-center gap-4">
                <a href="#" className="hidden md:inline-block bg-[#FF5C1B] hover:bg-[#e04e0f] text-white font-bold py-3 px-8 rounded-full text-lg transition-colors duration-300 shadow-md">BOOK A CALL</a>
                <button 
                    className="md:hidden z-50 transition-transform duration-300 ease-in-out"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    <svg 
                        className="w-8 h-8 transition-all duration-300 ease-in-out" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                    >
                        {isMenuOpen ? (
                            <path 
                                strokeLinecap="round" 
                                strokeLinejoin="round" 
                                strokeWidth={2} 
                                d="M6 18L18 6M6 6l12 12" 
                                className="transition-all duration-300 ease-in-out"
                            />
                        ) : (
                            <path 
                                strokeLinecap="round" 
                                strokeLinejoin="round" 
                                strokeWidth={2} 
                                d="M4 6h16M4 12h16M4 18h16" 
                                className="transition-all duration-300 ease-in-out"
                            />
                        )}
                    </svg>
                </button>
            </div>

            <div 
                className={`fixed inset-0 bg-white z-40 md:hidden transition-all duration-500 ease-in-out transform ${
                    isMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
                }`}
            >
                <div className="flex flex-col items-center justify-center h-full space-y-10">
                    <ul className="flex flex-col items-center space-y-8 text-3xl font-bold">
                        <li>
                            <a 
                                href="#" 
                                className="block hover:text-gray-600" 
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Work
                            </a>
                        </li>
                        <li>
                            <a 
                                href="#" 
                                className="block hover:text-gray-600" 
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Capabilities
                            </a>
                        </li>
                        <li>
                            <a 
                                href="#" 
                                className="block hover:text-gray-600" 
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Process
                            </a>
                        </li>
                        <li>
                            <a 
                                href="#" 
                                className="block hover:text-gray-600" 
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Pricing
                            </a>
                        </li>
                    </ul>
                    <a href="#" className="bg-[#FF5C1B] hover:bg-[#e04e0f] text-white font-bold py-4 px-12 rounded-full text-2xl transition-colors duration-300 shadow-md">BOOK A CALL</a>
                </div>
            </div>
        </nav>
    );
}
  