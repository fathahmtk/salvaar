import { HiBars3 } from "react-icons/hi2";
import { HiOutlineUser } from "react-icons/hi2";
import { HiOutlineMagnifyingGlass } from "react-icons/hi2";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { Link } from "react-router-dom";
import SidebarMenu from "./SidebarMenu";
import { useState } from "react";

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  return (
    <>
      <header className="sticky top-0 z-40 w-full glassmorphism">
        <div className="max-w-screen-2xl flex text-center justify-between items-center py-5 px-5 mx-auto max-sm:px-5 max-[400px]:px-3">
          <HiBars3 className="text-2xl max-sm:text-xl mr-20 max-lg:mr-0 cursor-pointer hover:text-[#D4AF37] transition-colors" onClick={() => setIsSidebarOpen(true)} />
          <Link
            to="/"
            className="text-3xl font-bold tracking-[0.2em] max-sm:text-2xl max-[400px]:text-xl uppercase group"
          >
            SHZYN<span className="text-[#D4AF37] group-hover:text-black transition-colors duration-500">STUDIOS</span>
          </Link>
          <div className="flex gap-6 items-center max-sm:gap-3">
            <Link to="/search" className="hover:text-[#D4AF37] transition-colors">
              <HiOutlineMagnifyingGlass className="text-2xl max-sm:text-xl" />
            </Link>
            <Link to="/login" className="hover:text-[#D4AF37] transition-colors">
              <HiOutlineUser className="text-2xl max-sm:text-xl" />
            </Link>
            <Link to="/cart" className="hover:text-[#D4AF37] transition-colors relative">
              <HiOutlineShoppingBag className="text-2xl max-sm:text-xl" />
            </Link>
          </div>
        </div>
      </header>
      <SidebarMenu isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
    </>
  );
};
export default Header;
