import { Link } from "react-router-dom";
import { HiOutlineArrowLongRight } from "react-icons/hi2";

const KeralaHeritageSection = () => {
    return (
        <section className="max-w-screen-2xl mx-auto px-5 py-24 overflow-hidden">
            <div className="flex flex-col lg:flex-row items-center gap-16">
                {/* Image Content */}
                <div className="w-full lg:w-1/2 relative group">
                    <div className="absolute -inset-4 border border-[#D4AF37] opacity-30 group-hover:opacity-100 transition-opacity duration-700 -z-10 translate-x-4 translate-y-4" />
                    <div className="relative overflow-hidden aspect-[4/5] shadow-2xl">
                        <img
                            src="/assets/kerala_heritage.png"
                            alt="Kerala Heritage Fashion"
                            className="w-full h-full object-cover transform transition-transform duration-1000 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-700" />
                    </div>
                    {/* Decorative Elements */}
                    <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#D4AF37] opacity-10 blur-3xl -z-10" />
                </div>

                {/* Text Content */}
                <div className="w-full lg:w-1/2 flex flex-col items-start">
                    <span className="text-[#D4AF37] uppercase tracking-[0.3em] text-sm font-semibold mb-6 flex items-center gap-4">
                        <span className="w-12 h-px bg-[#D4AF37]" />
                        Seasonal Feature
                    </span>
                    <h2 className="text-5xl md:text-6xl font-extralight mb-8 leading-tight tracking-tight">
                        The Golden <br />
                        <span className="font-normal italic">Kerala Heritage</span>
                    </h2>
                    <p className="text-gray-500 text-lg md:text-xl leading-relaxed mb-10 max-w-lg font-light">
                        Discover a curated collection of traditional Kasavu sarees and temple-style jewelry that blends timeless ethnic craftsmanship with contemporary silhouettes.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-6 items-center">
                        <Link
                            to="/kerala-specialties"
                            className="px-10 py-4 bg-black text-white uppercase tracking-widest text-sm hover:bg-[#D4AF37] transition-all duration-500 shadow-xl"
                        >
                            Explore Collection
                        </Link>
                        <Link
                            to="/shop/kerala-specialties"
                            className="group flex items-center gap-3 text-sm uppercase tracking-widest font-semibold py-4 px-6 hover:text-[#D4AF37] transition-colors duration-300"
                        >
                            Shop Now
                            <HiOutlineArrowLongRight className="text-xl group-hover:translate-x-2 transition-transform duration-300" />
                        </Link>
                    </div>

                    {/* Stats/Features */}
                    <div className="mt-16 grid grid-cols-2 md:grid-cols-3 gap-8 border-t border-gray-100 pt-10 w-full">
                        <div>
                            <h4 className="text-[#D4AF37] text-2xl font-light mb-1">100%</h4>
                            <p className="text-xs uppercase tracking-tighter text-gray-400">Handloom Cotton</p>
                        </div>
                        <div>
                            <h4 className="text-[#D4AF37] text-2xl font-light mb-1">Authentic</h4>
                            <p className="text-xs uppercase tracking-tighter text-gray-400">GI Tagged Crafts</p>
                        </div>
                        <div className="hidden md:block">
                            <h4 className="text-[#D4AF37] text-2xl font-light mb-1">Modern</h4>
                            <p className="text-xs uppercase tracking-tighter text-gray-400">Fusion Cuts</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default KeralaHeritageSection;
