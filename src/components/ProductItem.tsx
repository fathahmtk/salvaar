const ProductItem = ({
  id,
  image,
  title,
  category,
  price,
  popularity: _popularity,
  stock: _stock,
}: {
  id: string;
  image: string;
  title: string;
  category: string;
  price: number;
  popularity: number;
  stock: number;
}) => {
  return (
    <div className="group flex flex-col gap-6 relative">
      {/* Image Container */}
      <Link
        to={`/product/${id}`}
        className="block relative aspect-[3/4] overflow-hidden bg-gray-50 shadow-sm group-hover:shadow-xl transition-all duration-700"
      >
        <img
          src={`/assets/${image}`}
          alt={title}
          className="w-full h-full object-cover transform transition-transform duration-1000 group-hover:scale-110"
        />
        {/* Hover Quick Action */}
        <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
          <div className="px-6 py-3 glassmorphism-dark text-white text-xs uppercase tracking-[0.2em] font-bold translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
            View Details
          </div>
        </div>
      </Link>

      {/* Info */}
      <div className="flex flex-col gap-2">
        <div className="flex justify-between items-start gap-4">
          <Link
            to={`/product/${id}`}
            className="flex-1"
          >
            <h3 className="text-black text-sm uppercase tracking-widest font-black leading-tight group-hover:text-[#D4AF37] transition-colors duration-300">
              {title}
            </h3>
            <p className="text-gray-400 text-[10px] uppercase tracking-[0.2em] mt-1">
              {formatCategoryName(category)}
            </p>
          </Link>
          <p className="text-black text-sm font-bold tracking-tight">
            ${price}
          </p>
        </div>

        {/* Action Button */}
        <div className="pt-2">
          <Link
            to={`/product/${id}`}
            className="block w-full text-center py-4 border border-black text-black text-[10px] uppercase tracking-[0.3em] font-black hover:bg-black hover:text-white transition-all duration-500"
          >
            Quick Add
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
