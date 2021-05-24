import React, { createContext, useState, useEffect } from "react";

interface IProductContext {
    cart: number;
    sendProductToCart(): void;
}

const ProductContext = createContext<IProductContext>({} as IProductContext);

export const ProductProvider: React.FC = ({ children }) => {
    const [cart, setCartNumber] = useState<number>(0);

    useEffect(() => {
        if (cart)
            sessionStorage.setItem('cart', cart.toString())
    }, [cart])
    
    useEffect(() => {
        setCartNumber(parseInt(sessionStorage.getItem('cart') || '0'))
    }, [])

    function sendProductToCart() {
        setCartNumber(cart + 1);
    }

    return (
        <ProductContext.Provider value={{ cart, sendProductToCart }}>
            {children}
        </ProductContext.Provider>
    );
};

export default ProductContext;
