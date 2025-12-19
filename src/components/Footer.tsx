import SocialMediaFooter from "./SocialMediaFooter";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#111] text-white pt-24 pb-10 border-t border-white/10">
      <div className="max-w-screen-2xl mx-auto px-5 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-20 mb-20">
          {/* Brand Column */}
          <div className="space-y-6">
            <Link to="/" className="text-2xl font-black tracking-[0.2em] uppercase block">
              SHZYN<span className="text-[#D4AF37]">STUDIOS</span>
            </Link>
            <p className="text-gray-400 font-light text-sm leading-relaxed max-w-xs">
              Redefining modern luxury through sustainable craft and avant-garde design.
            </p>
            <SocialMediaFooter />
          </div>

          {/* Links Columns */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] mb-8 text-[#D4AF37]">Shop</h4>
            <ul className="space-y-4 text-sm text-gray-400 font-light">
              <li><Link to="/shop/new-arrivals" className="hover:text-white transition-colors">New Arrivals</Link></li>
              <li><Link to="/shop/accessories" className="hover:text-white transition-colors">Accessories</Link></li>
              <li><Link to="/kerala-specialties" className="hover:text-white transition-colors">Kerala Edit</Link></li>
              <li><Link to="/shop/sale" className="hover:text-white transition-colors">Sale</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] mb-8 text-[#D4AF37]">Company</h4>
            <ul className="space-y-4 text-sm text-gray-400 font-light">
              <li><Link to="/about" className="hover:text-white transition-colors">Our Story</Link></li>
              <li><Link to="/sustainability" className="hover:text-white transition-colors">Sustainability</Link></li>
              <li><Link to="/careers" className="hover:text-white transition-colors">Careers</Link></li>
              <li><Link to="/press" className="hover:text-white transition-colors">Press</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] mb-8 text-[#D4AF37]">Newsletter</h4>
            <p className="text-gray-400 font-light text-sm mb-6">
              Subscribe to receive updates, access to exclusive deals, and more.
            </p>
            <form className="flex flex-col gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-white/5 border border-white/10 px-4 py-3 text-sm focus:outline-none focus:border-[#D4AF37] transition-colors"
              />
              <button className="bg-white text-black text-xs font-bold uppercase tracking-[0.2em] py-3 hover:bg-[#D4AF37] hover:text-white transition-all duration-300">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-gray-500 uppercase tracking-widest font-medium">
          <p>© 2025 SHZYN STUDIOS. All Rights Reserved.</p>
          <div className="flex gap-8">
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
