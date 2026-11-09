import { useCart } from "../store/hooks/useCart";
import { RiDeleteBin6Fill } from "react-icons/ri";

export default function Cart() {
    const {
        cart,
        removeFromCart,
        updateQuantity,
        cartTotal,
        cartSubTotal,
        cartTax,
        clearCart,
    } = useCart();

    return (
        <div className="text-white p-4 md:p-8">
            {/* CART ITEMS */}
            <div className="bg-white text-black rounded-xl shadow-xl p-4 md:p-8">
                {cart.length === 0 ? (
                    <p className="text-center text-gray-500 py-10"> Your cart is empty </p>) : (
                    cart.map((item) => (
                        <div key={item.id} className="border-b-2 border-gray-400 py-6 last:border-none" >
                            <div className="flex flex-col md:flex-row gap-6">

                                {/* IMAGE */}
                                <div className="flex justify-center md:justify-start">
                                    <img src={item.image} alt={item.title} className="h-32 w-42 object-contain bg-gray-100 p-2 rounded-lg border" />
                                </div>

                                <div className="flex-1">
                                    {/* TITLE */}
                                    <div>
                                        <p className="text-sm text-gray-500 font-bold">Product</p>
                                        <h3 className="font-semibold text-lg line-clamp-2">
                                            {item.title}
                                        </h3>
                                    </div>

                                    <div className="flex flex-wrap gap-6 mt-4">
                                        {/* PRICE */}
                                        <div>
                                            <p className="text-sm text-gray-500 font-bold">Price</p>
                                            <p className="font-semibold">
                                                ${item.price.toFixed(2)} </p>
                                        </div>

                                        {/* QUANTITY */}
                                        <div>
                                            <p className="text-sm text-gray-500 mb-2 font-bold"> Quantity</p>

                                            <div className="flex items-center gap-2">
                                                <button
                                                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                                    className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md"
                                                >- </button>

                                                <span className="font-semibold">
                                                    {item.quantity}
                                                </span>

                                                <button
                                                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                    className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded-md"> + </button>
                                            </div>
                                        </div>

                                        {/* TOTAL */}
                                        <div>
                                            <p className="text-sm text-gray-500">Total</p>
                                            <p className="font-semibold">
                                                ${(item.price * item.quantity).toFixed(2)}
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* DELETE */}
                                <div className="flex justify-end md:items-center">
                                    <button
                                        onClick={() => removeFromCart(item.id)}
                                        className="text-red-600 hover:text-red-700" >
                                        <RiDeleteBin6Fill className="text-2xl" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))
                )}
            </div>

            <aside>
                <div className="mt-6 bg-black text-white p-6 rounded-xl w-full md:max-w-sm ml-auto">
                    <h3 className="text-lg font-semibold mb-2">
                        Subtotal: ${cartSubTotal.toFixed(2)}
                    </h3>

                    <h3 className="text-lg font-semibold mb-2">
                        Tax: ${cartTax.toFixed(2)}
                    </h3>

                    <h3 className="text-2xl font-bold text-gray-300">
                        Total: ${cartTotal.toFixed(2)}
                    </h3>
                </div>

                <div className="flex justify-end mt-4">
                    <button
                        onClick={() => clearCart()}
                        className="bg-red-600 hover:bg-red-700 px-5 py-2 rounded-md font-medium">
                        Clear Cart
                    </button>
                </div>
            </aside>
        </div>
    );
}