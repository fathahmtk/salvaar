import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store";
import { Link } from "react-router-dom";
import { HiOutlineFire } from "react-icons/hi2";
import ProductItem from "./ProductItem";
import { setProducts } from "../features/shop/shopSlice";
import customFetch from "../axios/custom";

const TrendingSection = () => {
    const dispatch = useDispatch();
    const { products } = useSelector((state: RootState) => state.shop);

    useEffect(() => {
        if (products.length === 0) {
            customFetch.get("/products")
                .then(({ data }) => {
                    dispatch(setProducts(data));
                })
                .catch((error) => console.error("Failed to fetch products:", error));
        }
    }, [dispatch, products.length]);

    // Filter trending products (popularity > 4 or stock < 10)
    const trendingProducts = products
        .filter(p => p.popularity > 4 || p.stock < 15)
        .sort((a, b) => b.popularity - a.popularity)
        .slice(0, 4);

    return (
        <section className="bg-[#111] text-white py-32 overflow-hidden">
            <div className="max-w-screen-2xl mx-auto px-5">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                    <div>
                        <div className="flex items-center gap-2 text-red-500 mb-4 animate-pulse">
                            <HiOutlineFire />
                            <span className="text-[10px] uppercase tracking-[0.3em] font-bold">Trading Now</span>
                        </div>
                        <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase leading-none">
                            The <span className="text-transparent stroke-text-white">Hype</span> <br />
                            List
                        </h2>
                    </div>
                    <p className="text-gray-400 max-w-sm font-light leading-relaxed text-sm">
                        Pieces that are moving fast. Secure these high-demand items before they vanish into the archives.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {trendingProducts.map((product) => (
                        <div key={product.id} className="relative group">
                            {/* Live Indicator */}
                            <div className="absolute top-4 left-4 z-10 flex items-center gap-2 bg-red-600/90 backdrop-blur text-white px-3 py-1 rounded-full text-[10px] uppercase font-bold tracking-wider">
                                <span className="w-1.5 h-1.5 bg-white rounded-full animate-ping" />
                                Selling Fast
                            </div>

                            <ProductItem {...product} />
                        </div>
                    ))}
                </div>

                <div className="mt-20 text-center">
                    <Link to="/shop" className="inline-block border-b border-white pb-1 text-xs uppercase tracking-[0.3em] hover:text-[#D4AF37] hover:border-[#D4AF37] transition-all">
                        View Full Report
                    </Link>
                </div>
            </div>
            <style>{`
            .stroke-text-white {
                -webkit-text-stroke: 1px white;
            }
        `}</style>
        </section>
    );
};

export default TrendingSection;
