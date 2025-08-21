// ==================== Images ==================== 
import { Images } from "@/lib/ImgData";
import deleteIcon from "../assets/images/icon-delete.svg";
// ==================== Components ==================== 
import { useCart } from "@/context/CartContext";

const Cart: React.FC = () => {
  const { cartItems, removeFromCart } = useCart();

  return (
    <div className="py-6 px-3 rounded-2xl bg-white shadow-lg w-full md:max-w-[22rem]">
      <p className="text-lg font-bold mb-4">Cart</p>
      {/* Divider */}
      <div className="w-full border-b border-[var(--Grayish-blue)]"></div>
      {cartItems.length > 0 ? (
        <>
          <ul className="space-y-4">
            {cartItems.map((item) => {
              const image = Images.find((img) => img.id === item.id);
              return (
                <li key={item.id} className="flex items-center gap-4 p-3">
                  {image && (
                    <img
                      src={image.thumbnail}
                      alt={image.alt}
                      className="w-14 h-14 object-cover rounded-lg"
                    />
                  )}
                  <div>
                    <span className="block font-medium text-gray-800">
                      {item.productName}
                    </span>
                    <div className="space-x-3">
                      <span className="text-sm text-gray-500">
                        ${item.price} × {item.quantity}
                      </span>
                      <span className="font-semibold text-gray-900">
                        ${item.price * item.quantity}
                      </span>
                    </div>
                  </div>
                  <button
                    className="ml-2 p-2 hover:bg-[var(--pale-orange)] rounded-full"
                    onClick={() => removeFromCart(item.id)}
                  >
                    <img
                      src={deleteIcon}
                      alt="deleteIcon"
                      className="w-5 h-5"
                    />
                  </button>
                </li>
              );
            })}
          </ul>
          <button className="mt-6 w-full bg-[var(--orange)] text-[var(--Very-dark-blue)] font-semibold px-4 py-3 rounded-xl shadow transition cursor-pointer hover:bg-[var(--orange)]/60">
            Checkout
          </button>
        </>
      ) : (
        <div className="flex items-center justify-center h-full">
          <div
            className="h-40 w-[22rem] text-gray-500 font-medium py-6 px-3 rounded-2xl bg-white max-w-full flex items-center justify-center ">
            Your cart is empty
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
