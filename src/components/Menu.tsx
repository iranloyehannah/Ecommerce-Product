import React, { useState } from "react";
import HamburgerMenu from "@/assets/images/icon-menu.svg";
import cartIcon from "@/assets/images/icon-cart.svg";
import avatarIcon from "@/assets/images/image-avatar.png";
import closeIcon from "@/assets/images/icon-close.svg";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Cart from "@/components/Cart";
import { useCart } from "@/context/CartContext";
import useIsMobile from "@/hooks/useIsMobile";

const Menu: React.FC = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const { cartItems, isCartOpen, setIsCartOpen } = useCart();
  const isMobile = useIsMobile();

  const totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="w-full h-full relative">
      <div className="flex items-center justify-between w-full h-20 bg-white shadow md:shadow-none px-5 md:px-10">
        {/* Left Section */}
        <div className="flex items-center space-x-5 md:space-x-11">
          <img
            src={HamburgerMenu}
            alt="Menu"
            className="cursor-pointer md:hidden pt-1.5"
            onClick={() => setToggleMenu(true)}
          />
          <span className="font-bold text-3xl tracking-wide text-[var(--Very-dark-blue)]">
            sneakers
          </span>

          {/* Desktop Links */}
          <div className="hidden md:block space-x-6 lg:space-x-10 pt-1.5 font-bold text-sm md:text-base text-[var(--Dark-grayish-blue)]">
            {["Collections", "Men", "Women", "About", "Contact"].map((menu) => (
              <Link
                key={menu}
                to="/"
                className="relative pb-7 transition-colors 
                           after:content-[''] after:absolute after:left-1/2 after:translate-x-[-50%] 
                           after:bottom-0 after:w-16 after:border-b-3 after:border-transparent 
                           hover:after:border-[var(--orange)]"
              >
                {menu}
              </Link>
            ))}
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center space-x-5 md:space-x-7 relative">
          {/* Cart Icon */}
          <div
            className={`relative cursor-pointer ${!isMobile ? "group" : ""}`}
            onClick={() => {
              if (isMobile) setIsCartOpen(!isCartOpen);
            }}
          >
            <img src={cartIcon} alt="cartIcon" />
            {totalQuantity > 0 && (
              <span className="absolute -top-2 -right-2 bg-[var(--orange)] text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold">
                {totalQuantity}
              </span>
            )}

            {/* Desktop Hover Cart */}
            {!isMobile && (
              <div className="hidden md:block absolute top-7 -right-27 w-[80vw] max-w-[352px] sm:w-[400px] bg-white rounded-xl shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <Cart />
              </div>
            )}
          </div>

          {/* Avatar */}
          <img
            src={avatarIcon}
            alt="avatarIcon"
            className="w-9 h-9 hover:border-2 border-[var(--orange)] rounded-full cursor-pointer"
          />
        </div>
      </div>

      {/* Divider */}
      <div className="hidden md:flex w-full border-b border-[var(--Grayish-blue)]"></div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {toggleMenu && (
          <motion.nav
            className="fixed top-0 left-0 w-full h-full bg-black/75 z-[9999] md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setToggleMenu(false)}
          >
            <motion.div
              className="w-[15rem] h-full bg-white py-5 px-4"
              initial={{ x: -250 }}
              animate={{ x: 0 }}
              exit={{ x: -250 }}
              transition={{ type: "tween", duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={closeIcon}
                alt="closeIcon"
                className="cursor-pointer"
                onClick={() => setToggleMenu(false)}
              />
              <div className="flex flex-col space-y-6 pt-6 font-bold">
                {["Collections", "Men", "Women", "About", "Contact"].map(
                  (menu) => (
                    <Link
                      key={menu}
                      to="/"
                      className="relative pb-2 transition-colors hover:after:border-[var(--orange)]"
                    >
                      {menu}
                    </Link>
                  )
                )}
              </div>
            </motion.div>
          </motion.nav>
        )}
      </AnimatePresence>

      {/* Cart Modal (Mobile Only) */}
      <AnimatePresence>
        {isMobile && isCartOpen && (
          <motion.div
            className="absolute z-50 top-24 left-1/2 -translate-x-1/2 
                 w-[90vw] max-w-[600px] sm:w-[560px] md:w-[600px]"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            <Cart />
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Menu;
