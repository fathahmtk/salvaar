import { Link } from "react-router-dom";
import { HiOutlineArrowLongRight } from "react-icons/hi2";

const KeralaSpecialties = () => {
  return (
    <div className="bg-[#FAF9F6] min-h-screen pb-20">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center z-0 scale-105"
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1582533561751-ef6f6ab93a2e?q=80&w=2000&auto=format&fit=crop')",
            filter: "brightness(0.7)"
          }}
        />
        <div className="relative z-10 text-center px-5">
          <h1 className="text-5xl md:text-7xl font-light text-white mb-6 tracking-widest uppercase">
            Kerala <span className="text-[#D4AF37]">Specialties</span>
          </h1>
          <p className="text-xl md:text-2xl text-white font-light tracking-wide max-w-2xl mx-auto italic">
            "Timeless ethnic styles blended with modern twists from God's Own Country."
          </p>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#FAF9F6] to-transparent" />
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-5 py-16">
        
        {/* Women's Clothing Section */}
        <section className="mb-24 grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <span className="text-[#D4AF37] uppercase tracking-[0.2em] text-sm font-semibold mb-3 block">Fashion & Trends</span>
            <h2 className="text-4xl font-light mb-6">Women's Clothing</h2>
            <p className="text-gray-600 leading-relaxed mb-6 text-lg">
              Kerala's women's wear blends timeless ethnic styles with modern twists. 
              <span className="font-semibold text-black"> Kasavu sarees</span> (off-white cotton with gold borders) remain classic, 
              especially for festivals. Trendy saree colors include black-gold combinations and pastels like mint, peach, and lilac.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              Alongside sarees, <span className="font-semibold text-black">kurti sets and co-ord suits</span> are in high demand—matching kurta-pant or kurta-skirt combos with prints or subtle embroidery. 
              Comfort fabrics like cotton, rayon, and malai mul chanderi suit the climate perfectly.
            </p>
            <Link 
              to="/shop/kerala-specialties" 
              className="inline-flex items-center gap-2 border-b-2 border-black pb-1 hover:text-[#D4AF37] hover:border-[#D4AF37] transition-all duration-300"
            >
              Shop Collection <HiOutlineArrowLongRight />
            </Link>
          </div>
          <div className="order-1 md:order-2 relative">
            <div className="absolute -inset-4 border border-[#D4AF37] -z-10 translate-x-4 translate-y-4" />
            <img 
              src="https://images.unsplash.com/photo-1610030469618-d07b36f78f9f?q=80&w=1000&auto=format&fit=crop" 
              alt="Kerala Fashion" 
              className="w-full h-[500px] object-cover shadow-2xl"
            />
          </div>
        </section>

        {/* Accessories Section */}
        <section className="mb-24 grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="absolute -inset-4 border border-[#D4AF37] -z-10 -translate-x-4 translate-y-4" />
            <img 
              src="https://images.unsplash.com/photo-1515562141207-7a88fb0ce33e?q=80&w=1000&auto=format&fit=crop" 
              alt="Temple Jewelry" 
              className="w-full h-[500px] object-cover shadow-2xl"
            />
          </div>
          <div className="md:pl-10">
            <span className="text-[#D4AF37] uppercase tracking-[0.2em] text-sm font-semibold mb-3 block">Craftsmanship</span>
            <h2 className="text-4xl font-light mb-6">Jewelry & Accessories</h2>
            <p className="text-gray-600 leading-relaxed mb-6 text-lg">
              Classic temple-style sets—gold-plated coin necklaces (<span className="font-semibold text-black">Kasu mala</span>), 
              mango pendants (<span className="font-semibold text-black">Manga mala</span>), and <span className="font-semibold text-black">Palakka mala</span> green-stone necklaces—are perennial best sellers.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              Handbags in ethnic fabrics like coir or banana-fiber totes and artisan clutches add a niche hit to your outfit. 
              Kerala's coastal crafts inspire coconut-shell and bamboo accessories that are gaining global traction.
            </p>
            <Link 
              to="/shop/accessories" 
              className="inline-flex items-center gap-2 border-b-2 border-black pb-1 hover:text-[#D4AF37] hover:border-[#D4AF37] transition-all duration-300"
            >
              Discover Accessories <HiOutlineArrowLongRight />
            </Link>
          </div>
        </section>

        {/* Beauty & Skincare Section */}
        <section className="mb-24 py-16 bg-white shadow-sm border border-gray-100 px-10 rounded-sm">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-[#D4AF37] uppercase tracking-[0.2em] text-sm font-semibold mb-3 block">Wellness</span>
            <h2 className="text-4xl font-light mb-8">Ayurvedic Beauty</h2>
            <p className="text-gray-600 leading-relaxed mb-10 text-lg italic">
              "Kerala's beauty market strongly emphasizes Ayurvedic and natural products. From virgin cold-pressed coconut oil to herbal shampoos, the focus is on clean-label, organic wellness."
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
              <div className="text-center">
                <div className="h-16 w-16 bg-[#F5F5DC] rounded-full mx-auto mb-3 flex items-center justify-center text-[#D4AF37] text-xl font-bold">CO</div>
                <h4 className="font-semibold">Coconut Oil</h4>
              </div>
              <div className="text-center">
                <div className="h-16 w-16 bg-[#F5F5DC] rounded-full mx-auto mb-3 flex items-center justify-center text-[#D4AF37] text-xl font-bold">TU</div>
                <h4 className="font-semibold">Turmeric</h4>
              </div>
              <div className="text-center">
                <div className="h-16 w-16 bg-[#F5F5DC] rounded-full mx-auto mb-3 flex items-center justify-center text-[#D4AF37] text-xl font-bold">AL</div>
                <h4 className="font-semibold">Aloe Vera</h4>
              </div>
              <div className="text-center">
                <div className="h-16 w-16 bg-[#F5F5DC] rounded-full mx-auto mb-3 flex items-center justify-center text-[#D4AF37] text-xl font-bold">NE</div>
                <h4 className="font-semibold">Neem</h4>
              </div>
            </div>
            <Link 
              to="/shop/beauty" 
              className="bg-black text-white px-10 py-3 uppercase tracking-widest hover:bg-[#D4AF37] transition-colors duration-300 inline-block"
            >
              Explore Beauty
            </Link>
          </div>
        </section>

        {/* Handicrafts Section */}
        <section className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-[#D4AF37] uppercase tracking-[0.2em] text-sm font-semibold mb-3 block">Treasures</span>
            <h2 className="text-4xl font-light mb-6">Kerala Specialties & Gifts</h2>
            <p className="text-gray-600 leading-relaxed mb-6 text-lg">
              Beyond fashion, Kerala's local crafts are niche e-commerce hits. The <span className="font-semibold text-black">Aranmula metal mirror</span>, a unique handicraft that commands premium prices, is a distinctive gift choice.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              Houseboat models, coir mats, and bronze idols offer artisanal appeal for health-conscious and culturally aware buyers globally.
            </p>
            <Link 
              to="/shop/handicrafts" 
              className="inline-flex items-center gap-2 border-b-2 border-black pb-1 hover:text-[#D4AF37] hover:border-[#D4AF37] transition-all duration-300"
            >
              View Gifts <HiOutlineArrowLongRight />
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img 
              src="https://images.unsplash.com/photo-1590073242678-70ee3fc28e8e?q=80&w=600&auto=format&fit=crop" 
              alt="Kerala Craft 1" 
              className="w-full h-64 object-cover shadow-lg"
            />
            <img 
              src="https://images.unsplash.com/photo-1596464716127-f2a82984de30?q=80&w=600&auto=format&fit=crop" 
              alt="Kerala Craft 2" 
              className="w-full h-64 object-cover shadow-lg translate-y-4"
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default KeralaSpecialties;
