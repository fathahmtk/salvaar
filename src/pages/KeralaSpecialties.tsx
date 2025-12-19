import { Link } from "react-router-dom";
import { HiOutlineArrowLongRight } from "react-icons/hi2";

const KeralaSpecialties = () => {
  return (
    <div className="bg-[#FAF9F6] min-h-screen pb-32">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center z-0 scale-100 group-hover:scale-105 transition-transform duration-[2000ms]"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1582533561751-ef6f6ab93a2e?q=80&w=2000&auto=format&fit=crop')",
          }}
        />
        <div className="absolute inset-0 bg-black/40 z-[1]" />

        <div className="relative z-10 text-center px-5 max-w-4xl">
          <div className="mb-8 inline-block px-6 py-2 glassmorphism border-white/30 text-white text-xs uppercase tracking-[0.4em] font-black">
            The Regional Edit
          </div>
          <h1 className="text-7xl md:text-9xl font-black text-white mb-8 tracking-tighter uppercase leading-[0.8]">
            Kerala <br />
            <span className="text-transparent stroke-text-white">Heritage</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 font-light tracking-wide max-w-2xl mx-auto font-serif-luxury italic">
            "Timeless handloom traditions reimaged for the modern silhouette."
          </p>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10 animate-bounce">
          <div className="w-px h-16 bg-gradient-to-b from-white to-transparent" />
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-screen-2xl mx-auto px-5 py-32 space-y-48">

        {/* Women's Clothing Section - Layered Design */}
        <section className="relative">
          <div className="flex flex-col lg:flex-row items-center gap-20">
            <div className="w-full lg:w-1/2 order-2 lg:order-1 relative">
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-[#D4AF37]/10 -z-10 rounded-full blur-3xl" />
              <span className="text-[#D4AF37] uppercase tracking-[0.4em] text-xs font-black mb-6 block">KASAVU & COTTONS</span>
              <h2 className="text-5xl md:text-7xl font-black mb-10 tracking-tighter uppercase">Women's <br />Editorial</h2>
              <div className="space-y-6 text-gray-600 text-lg font-light leading-relaxed max-w-xl">
                <p>
                  Kerala's sartorial identity is defined by the <span className="font-bold text-black border-b border-[#D4AF37]">Kasavu Saree</span>—a masterpiece of minimalist luxury featuring unbleached cotton and pure gold zari.
                </p>
                <p>
                  Today, we modernize this heritage with sharp-cut kurtis, functional co-ord sets, and contemporary draping techniques that bring 2,000 years of tradition into the boardroom and the gala.
                </p>
              </div>
              <div className="mt-12">
                <Link
                  to="/shop/kerala-specialties"
                  className="group flex items-center gap-6 text-xs uppercase tracking-[0.4em] font-black"
                >
                  <span className="px-10 py-5 bg-black text-white group-hover:bg-[#D4AF37] transition-all duration-500 shadow-2xl">Shop The Vibe</span>
                  <HiOutlineArrowLongRight className="text-3xl group-hover:translate-x-4 transition-transform duration-500" />
                </Link>
              </div>
            </div>

            <div className="w-full lg:w-1/2 order-1 lg:order-2">
              <div className="relative aspect-[4/5] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.2)]">
                <img
                  src="https://images.unsplash.com/photo-1610030469618-d07b36f78f9f?q=80&w=1000&auto=format&fit=crop"
                  alt="Kerala Fashion"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                />
                <div className="absolute top-0 right-0 p-12 glassmorphism border-none text-right hidden xl:block">
                  <span className="text-5xl font-black text-[#D4AF37] opacity-20 block mb-2">01</span>
                  <p className="text-[10px] items-end uppercase tracking-[0.3em] font-black">Handloom <br />Excellence</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Jewelry Section - Modern Split */}
        <section className="bg-black text-white -mx-5 px-10 py-32 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
            <div className="absolute top-[-20%] right-[-10%] w-[60%] aspect-square border border-white rounded-full animate-spin-slow" />
          </div>

          <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row items-center gap-24">
            <div className="w-full lg:w-1/2 relative group">
              <img
                src="https://images.unsplash.com/photo-1515562141207-7a88fb0ce33e?q=80&w=1000&auto=format&fit=crop"
                alt="Temple Jewelry"
                className="w-full h-auto object-cover border border-white/20 group-hover:border-[#D4AF37]/50 transition-all duration-1000"
              />
              <div className="absolute -bottom-8 -left-8 glassmorphism border-white/10 p-6 text-black">
                <span className="text-xs font-black tracking-widest uppercase mb-1 block">Palakka Mala</span>
                <p className="text-[10px] font-light italic">The Emerald Weave</p>
              </div>
            </div>

            <div className="w-full lg:w-1/2">
              <span className="text-[#D4AF37] uppercase tracking-[0.5em] text-[10px] font-black mb-6 block">ORNAMENTAL ART</span>
              <h2 className="text-5xl md:text-7xl font-black mb-10 tracking-tighter uppercase leading-tight">The <span className="italic font-light">Temple</span> <br />Jewelry Kit</h2>
              <p className="text-gray-400 text-lg leading-relaxed font-light mb-12">
                From the iconic <span className="text-white italic">Kasu Mala</span> coin sets to the ruby-encrusted <span className="text-white italic">Manga Mala</span>, Kerala's jewelry is a masterclass in symbolic luxury. Every piece is a story of craft passed through centuries.
              </p>
              <Link
                to="/shop/accessories"
                className="inline-block px-12 py-5 border border-white/30 text-white uppercase tracking-[0.4em] text-[10px] font-black hover:bg-white hover:text-black transition-all duration-700"
              >
                Explore Gold
              </Link>
            </div>
          </div>
        </section>

        {/* Beauty & Lifestyle - Minimalist Cards */}
        <section className="grid lg:grid-cols-2 gap-32 items-stretch">
          {/* Beauty */}
          <div className="flex flex-col">
            <div className="relative aspect-video mb-12 overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1000&auto=format&fit=crop"
                alt="Ayurveda"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-8 left-8">
                <h3 className="text-3xl font-black text-white uppercase tracking-tighter">Ayurvedic <br />Alchemy</h3>
              </div>
            </div>
            <p className="text-gray-600 font-light text-lg mb-8 leading-relaxed">
              Cold-pressed oils, organic turmeric, and wild-harvested herbs. Discover the clean-label wellness secrets of the Malabar coast.
            </p>
            <Link to="/shop/beauty" className="text-xs font-black uppercase tracking-[0.4em] flex items-center gap-4 hover:text-[#D4AF37] transition-colors">
              Beauty Shop <HiOutlineArrowLongRight className="text-2xl" />
            </Link>
          </div>

          {/* Crafts */}
          <div className="flex flex-col">
            <div className="relative aspect-video mb-12 overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1590073242678-70ee3fc28e8e?q=80&w=1000&auto=format&fit=crop"
                alt="Handicrafts"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-8 left-8">
                <h3 className="text-3xl font-black text-white uppercase tracking-tighter">Artisanal <br />Curations</h3>
              </div>
            </div>
            <p className="text-gray-600 font-light text-lg mb-8 leading-relaxed">
              From the legendary Aranmula metal mirrors to hand-woven coir, these are the objects that define a culture.
            </p>
            <Link to="/shop/handicrafts" className="text-xs font-black uppercase tracking-[0.4em] flex items-center gap-4 hover:text-[#D4AF37] transition-colors">
              The Archive <HiOutlineArrowLongRight className="text-2xl" />
            </Link>
          </div>
        </section>
      </div>

      <style>{`
        .stroke-text-white {
          -webkit-text-stroke: 1px white;
        }
        .animate-spin-slow {
            animation: spin 30s linear infinite;
        }
        @keyframes spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default KeralaSpecialties;
