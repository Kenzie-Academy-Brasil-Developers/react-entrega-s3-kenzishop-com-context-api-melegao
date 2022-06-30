import { createContext, useState } from "react";
import { v4 as uuidv4 } from 'uuid';

export const CartContext = createContext()

export const CartProvider = ({children}) => {

    const [cartItens, setCartItens] = useState([]);

    const addToCart = (product) => {
        const newProduct = {
            image: product.image,
            price: product.price,
            name: product.name,
            id: uuidv4()
        };
        
        setCartItens([...cartItens, newProduct])
    }

    const removeFromCart = (product) => {

        const newCart = cartItens.filter((elem) => elem.id !== product.id)
        setCartItens(newCart)
    }

    return (
        <CartContext.Provider value={{cartItens, addToCart, removeFromCart}}>
            {children}
        </CartContext.Provider>
    )
}