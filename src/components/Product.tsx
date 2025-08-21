// ==================== React State  ====================
import { useState } from "react";
// ==================== Icons ====================
import { FaPlus, FaMinus } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
// ==================== Components ====================
import { type ProductsData } from "@/lib/ProductData";
import { useCart } from "@/context/CartContext";

interface ProductData {
  products: ProductsData[];
}
const ProductTag: React.FC<ProductData> = ({ products }) => {
  const [count, setCount] = useState(0);
  const { addToCart, setIsCartOpen } = useCart();

  const countPlus = () => setCount(count + 1);
  const countMinus = () => setCount(count > 0 ? count - 1 : count);

  // Automatically Opens Cart
  const handleAddToCart = (product: ProductsData) => {
    if (count > 0) {
      addToCart(product, count);
      setIsCartOpen(true);
      setCount(0);
    }
  };

  return (
    <div className=" w-full max-w-[500px] ">
      {products.map((product) => (
        <article
          key={product.id}
          className="flex flex-col gap-10 h-[450px] font-normal text-base  p-6 rounded-lg m-2"
        >
          {/* Product Header */}
          <div className="space-y-2 font-bold ">
            <p className="text-[var(--Dark-grayish-blue)] ">{product.name}</p>
            <h2 className="text-2xl md:text-[40px] text-[var(--Very-dark-blue)] text-wrap">
              {product.productName}
            </h2>
          </div>

          {/* Product Info */}
          <div className="space-y-5">
            <p className="text-[var(--Dark-grayish-blue)]">
              {product.description}
            </p>

            <div className="grid grid-cols-2 items-center sm:flex sm:items-start sm:flex-col sm:gap-0">
              {/* Price + %Off) */}
              <div className="flex items-center gap-2.5">
                <span className="font-bold text-2xl md:text-lg tracking-wide">{`$${product.price}.00`}</span>
                <span className="bg-[var(--Very-dark-blue)] text-white px-2 rounded-md">
                  {`${product.priceOff}%`}
                </span>
              </div>

              {/* Discount) */}
              <span className="line-through text-[var(--Dark-grayish-blue)] justify-self-end sm:justify-self-auto sm:mt-1">
                {`$${product.discount}.00`}
              </span>
            </div>
          </div>

          {/* Add to Cart */}
          <div className="flex flex-col sm:flex-row gap-4 w-full">
            {/* Counter */}
            <div className="flex items-center justify-between rounded-lg w-full sm:w-1/3 h-10 py-6 px-4 bg-[var(--Light-grayish-blue)]">
              <FaMinus
                className="text-[var(--orange)] cursor-pointer "
                onClick={countMinus}
              />
              <span className="font-medium">{count}</span>
              <FaPlus
                className="text-[var(--orange)] cursor-pointer"
                onClick={countPlus}
              />
            </div>

            {/* Cart Button */}
            <button
              className="flex items-center justify-center gap-2 rounded-lg px-20 py-3 font-bold cursor-pointer
           bg-[var(--orange)] hover:bg-[var(--orange)]/60
           shadow-[0_4px_10px_var(--orange)] md:[box-shadow:none]"
              onClick={() => handleAddToCart(product)}
            >
              <MdOutlineShoppingCart size={20} />
              <span>Add to cart</span>
            </button>
          </div>
        </article>
      ))}
    </div>
  );
};

export default ProductTag;
