import { Link } from "react-router-dom";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { LiaTimesSolid } from "react-icons/lia";
import { BsCartDash } from "react-icons/bs";
import { useCart } from "../store/hooks/useCart"

export default function Header() {
  const [open, setOpen] = useState(false);
  const { cartCount } = useCart();
  // const isFalseOpen = () => setOpen(false)

  return (
    <>
      <div className="shadow-5xl sticky top-0 z-50 py-6 px-10 flex justify-between bg-black text-[#F2CA50] text-xl w-full">

        <button onClick={() => setOpen(true)} className="md:hidden text-2xl">
          <GiHamburgerMenu className="text-3xl" />
        </button>

        <Link to="/" className="text-2xl font-bold"> HERA </Link>

        {/* Mobile-cart */}
        <div className="relative md:hidden flex justify-center">
          <Link to="/cart" > <BsCartDash className="text-2xl font-bold" />
            <span className="absolute left-7 bottom-4 flex justify-center bg-red-900 rounded-full w-8 h-8 block">{cartCount} </span></Link>
        </div>

        <nav className="hidden md:flex gap-8 font-bold">
          <Link to="/product" className="hover:text-white">Product</Link>
          <Link to="/about" className="hover:text-white">About</Link>
          <Link to="/cart" className="hover:text-white">Cart</Link>
          {/* <Link to="/detail" className="hover:text-white">Detail</Link> */}
          <Link to="/contact" className="hover:text-white">Contact</Link>

          <div className="relative">
            <Link to="/cart" > <BsCartDash className="text-2xl font-bold" />
              <span className="absolute left-7 bottom-4 flex justify-center bg-red-900 rounded-full w-8 h-8 block">{cartCount} </span></Link>
          </div>
        </nav>
      </div>

      {open && (
        <div onClick={() => setOpen(false)} className="fixed inset-0 bg-black/50 z-[55] md:hidden"></div>
      )}

      <div className={`fixed top-0 left-0 h-full w-64 bg-black text-[#F2CA50] md:hidden z-[60] transition-transform duration-300  ${open ? "translate-x-0" : "-translate-x-full"}`}>

        <button onClick={() => setOpen(false)} className="p-4 text-2xl" >
          <LiaTimesSolid className="text-4xl" />
        </button>

        <nav className="flex justify-center text-center text-xl flex-col gap-6 p-6 font-bold mx-auto">
          <Link onClick={() => setOpen(false)} className="hover:text-white" to="/product">Product</Link>
          <Link onClick={() => setOpen(false)} className="hover:text-white" to="/about">About</Link>
          <Link onClick={() => setOpen(false)} className="hover:text-white" to="/cart" className="hover:text-white">Cart</Link>
          <Link onClick={() => setOpen(false)} className="hover:text-white" to="/contact">Contact</Link>
          {/* <Link onClick={() => setOpen(false)} className="hover:text-white" to="/detail">Detail</Link> */}
        </nav>
      </div>
    </>
  );
}