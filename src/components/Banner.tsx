import { Link } from "react-router-dom";
import { HiOutlineArrowLongDown } from "react-icons/hi2";

const Banner = () => {
  return (
    <div className="relative w-full h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Dynamic Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed z-0 scale-105 animate-pulse-slow"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=2532&auto=format&fit=crop')" }}
      >
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center text-white px-5 max-w-5xl mx-auto flex flex-col items-center gap-8">
        <span className="inline-block px-4 py-1 border border-white/30 rounded-full glassmorphism text-xs uppercase tracking-[0.3em] font-medium backdrop-blur-sm">
          New Collection 2025
        </span>

        <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter uppercase leading-[0.9]">
          Redefine <br />
          <span className="text-transparent stroke-text-white italic font-serif-luxury">Luxury</span>
        </h1>

        <p className="max-w-xl text-lg md:text-xl font-light tracking-wide text-gray-200">
          Where avant-garde design meets timeless elegance. Explore the new era of fashion at SHZYN STUDIOS.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 mt-8">
          <Link
            to="/shop"
            className="px-10 py-4 bg-white text-black text-sm uppercase tracking-[0.2em] font-bold hover:bg-[#D4AF37] hover:text-white transition-all duration-300 shadow-lg hover:shadow-[#D4AF37]/50"
          >
            Shop Now
          </Link>
          <Link
            to="/shop"
            className="px-10 py-4 border border-white text-white text-sm uppercase tracking-[0.2em] font-bold hover:bg-white hover:text-black transition-all duration-300"
          >
            Spring Edit
          </Link>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce text-white/50">
        <span className="text-[10px] uppercase tracking-[0.2em]">Scroll</span>
        <HiOutlineArrowLongDown className="text-xl" />
      </div>

      <style>{`
        .stroke-text-white {
          -webkit-text-stroke: 1px white;
        }
        .animate-pulse-slow {
            animation: sublteZoom 20s infinite alternate;
        }
        @keyframes sublteZoom {
            0% { transform: scale(1); }
            100% { transform: scale(1.1); }
        }
      `}</style>
    </div>
  );
};
export default Banner;
