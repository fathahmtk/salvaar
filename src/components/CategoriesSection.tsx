import { Link } from "react-router-dom";
import { HiOutlineArrowLongRight } from "react-icons/hi2";

const categories = [
  {
    title: "Special Edition",
    image: "luxury category 1.png",
    link: "special-edition",
    colSpan: "col-span-1 md:col-span-2 lg:col-span-1",
    rowSpan: "row-span-1 md:row-span-2",
  },
  {
    title: "Luxury Collection",
    image: "luxury category 2.png",
    link: "luxury-collection",
    colSpan: "col-span-1",
    rowSpan: "row-span-1",
  },
  {
    title: "Summer Edition",
    image: "luxury category 3.png",
    link: "summer-edition",
    colSpan: "col-span-1",
    rowSpan: "row-span-1",
  },
  {
    title: "Unique Collection",
    image: "luxury category 4.png",
    link: "unique-collection",
    colSpan: "col-span-1 md:col-span-2 lg:col-span-2",
    rowSpan: "row-span-1",
  }
];

const CategoriesSection = () => {
  return (
    <section className="max-w-screen-2xl mx-auto px-5 py-32">
      <div className="flex justify-between items-end mb-16">
        <div>
          <span className="text-[#D4AF37] uppercase tracking-[0.25em] text-xs font-bold block mb-4">Curated Edits</span>
          <h2 className="text-5xl md:text-6xl font-black tracking-tighter uppercase">
            Shop By <span className="italic font-serif-luxury font-light">Category</span>
          </h2>
        </div>
        <Link to="/shop" className="hidden md:flex items-center gap-4 uppercase text-xs font-bold tracking-[0.2em] hover:text-[#D4AF37] transition-colors group">
          View All <HiOutlineArrowLongRight className="text-2xl group-hover:translate-x-2 transition-transform" />
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[300px] lg:auto-rows-[400px]">
        {categories.map((cat, index) => (
          <Link
            key={index}
            to={`/shop/${cat.link}`}
            className={`group relative overflow-hidden ${cat.colSpan} ${cat.rowSpan}`}
          >
            <img
              src={`/assets/${cat.image}`}
              alt={cat.title}
              className="w-full h-full object-cover transition-transform duration-[1.5s] ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500" />

            <div className="absolute bottom-8 left-8">
              <h3 className="text-white text-2xl lg:text-3xl font-bold uppercase tracking-wide leading-none mb-2 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                {cat.title}
              </h3>
              <span className="text-white/80 text-[10px] uppercase tracking-[0.2em] opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 flex items-center gap-2">
                Explore <HiOutlineArrowLongRight />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};
export default CategoriesSection;
