import { useState, createContext, useEffect } from "react";
export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState(() => {
        const savedCart = localStorage.getItem('HERA');
        return savedCart ? JSON.parse(savedCart) : []
    })

    useEffect(() => {
        localStorage.setItem('HERA', JSON.stringify(cart));
    }, [cart])

    // addToCart
    const addToCart = (product, quantityToAdd) => {
        setCart((prevCart) => {
            const existingItemIndex = prevCart.findIndex((item) => (item.id === product.id));

            // console.log(existingItemIndex)
            // console.log(product + "" + quantityToAdd)
            
            if (existingItemIndex > -1) {
                const updateCart = [...prevCart];
                updateCart[existingItemIndex] = {
                    ...updateCart[existingItemIndex],
                    quantity: updateCart[existingItemIndex].quantity + quantityToAdd,
                };
                return updateCart
            } else {
                return [...prevCart, { ...product, quantity: quantityToAdd }]
            }
        })
    }

    // Remove from cart
    const removeFromCart = (productId) => {
        setCart((prevCart) => prevCart.filter((item) => item.id !== productId))
    }

    // updateCart
    const updateQuantity = (productId, newQuantity) => {
        if (newQuantity  < 0 ) return ;

        setCart((prevCart) => prevCart.map((item) =>
            item.id === productId ? { ...item, quantity: newQuantity } : item
        ))
    }

    // clear cart 
    const clearCart = () => {
        setCart([]);
    }

    // Total quantity of items in the cart icon
    const cartCount = cart.reduce((total, item) => total + item.quantity, 0);


    // Total cost of product before tax
    const cartSubTotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);

    // Est. tax rate
    const cartTax = cartSubTotal * 0.08;

    // Final Total
    const cartTotal = cartSubTotal + cartTax;

    const contextValue = {
        cartTotal, cartTax, cartCount, clearCart, cartSubTotal, updateQuantity, addToCart, removeFromCart, cart
    }

    return (
        <CartContext.Provider value={contextValue}>
            {children}
        </CartContext.Provider> 
    )
}

// export const useCart = () => {
//     const context = useContext(CartContext)

//     if(context === undefined){
//         throw new Error('useCart must be use withing a Provider Wrapper')
//     }
//     return context;
// }

// export {CartProvider, useCart};

// if you want to make use of .jsx you can only export once