import { Link } from "react-router-dom";
import { HiOutlineArrowLongRight } from "react-icons/hi2";

const KeralaHeritageSection = () => {
    return (
        <section className="max-w-screen-2xl mx-auto px-5 py-32 overflow-hidden bg-white/30">
            <div className="flex flex-col lg:flex-row items-center gap-24">
                {/* Text Content */}
                <div className="w-full lg:w-[45%] flex flex-col items-start order-2 lg:order-1">
                    <div className="inline-flex items-center gap-4 mb-8 bg-[#D4AF37]/10 px-4 py-2 rounded-full glassmorphism border-[#D4AF37]/20">
                        <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse" />
                        <span className="text-[#D4AF37] uppercase tracking-[0.25em] text-xs font-bold">
                            Heritage Editorial
                        </span>
                    </div>

                    <h2 className="text-6xl md:text-8xl font-black mb-10 leading-[0.9] tracking-tighter uppercase">
                        The <span className="text-transparent stroke-text">Soul</span> of <br />
                        <span className="text-[#D4AF37]">Kerala</span>
                    </h2>

                    <p className="text-gray-600 text-xl leading-relaxed mb-12 max-w-lg font-light font-serif-luxury italic">
                        "Where ancient handloom traditions meet the sharp silhouettes of modern high-fashion."
                    </p>

                    <div className="flex flex-col sm:flex-row gap-8 items-center w-full sm:w-auto">
                        <Link
                            to="/kerala-specialties"
                            className="w-full sm:w-auto px-12 py-5 bg-black text-white uppercase tracking-widest text-xs font-bold hover:bg-[#D4AF37] transition-all duration-700 shadow-2xl hover:-translate-y-1 active:translate-y-0"
                        >
                            The Collection
                        </Link>
                        <Link
                            to="/shop/kerala-specialties"
                            className="group flex items-center gap-4 text-xs uppercase tracking-[0.3em] font-black hover:text-[#D4AF37] transition-colors duration-300"
                        >
                            Shop Pieces
                            <HiOutlineArrowLongRight className="text-2xl group-hover:translate-x-3 transition-transform duration-500" />
                        </Link>
                    </div>
                </div>

                {/* Image Content */}
                <div className="w-full lg:w-[55%] relative group order-1 lg:order-2">
                    {/* Layered Decorative Elements */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-[#D4AF37]/10 rounded-full rotate-45 -z-10 group-hover:rotate-90 transition-transform duration-1000" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] border border-[#D4AF37]/5 rounded-full -rotate-12 -z-10 group-hover:-rotate-45 transition-transform duration-1000" />

                    <div className="relative overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3)] group-hover:shadow-[0_80px_120px_-20px_rgba(212,175,55,0.2)] transition-all duration-700">
                        <img
                            src="/assets/kerala_heritage.png"
                            alt="Kerala Heritage Fashion"
                            className="w-full h-full object-cover transform transition-transform duration-1000 group-hover:scale-105 scale-[1.02]"
                        />
                        {/* Glass Backdrop Label */}
                        <div className="absolute bottom-10 left-10 p-8 glassmorphism max-w-[280px] hidden md:block translate-y-4 group-hover:translate-y-0 transition-transform duration-700">
                            <h4 className="text-xl font-bold mb-2 uppercase">Handloom Kasavu</h4>
                            <p className="text-sm text-gray-500 font-light leading-tight">Authentic Balaramapuram weaves crafted for the modern woman.</p>
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
    .stroke - text {
    -webkit - text - stroke: 1px black;
}
        .group: hover.stroke - text {
    -webkit - text - stroke: 1px #D4AF37;
}
`}</style>
        </section>
    );
};

export default KeralaHeritageSection;
