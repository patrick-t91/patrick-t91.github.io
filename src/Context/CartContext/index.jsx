import { createContext } from 'react'
import { useState, useEffect } from 'react'

export const CartContext = createContext()

export const CartContextComponent = ({children}) => {
    const [cart, setCart] = useState([])
    const [price, setPrice] = useState (0)
    const [cartLength, setCartLength] = useState(0)
    const [countState, setCountState] = useState(true)

    const handleCountState = () => {
        setCountState(!countState)
    }

    const addItem = (item, quantity) => {
        const producto = cart.find (element => element.item === item);
        if (producto) {
            let cartAux = [...cart]; 
            cartAux.producto.quantity+= quantity;
            setCart(cartAux);
        } else {
            const cartAux = [...cart, {
                item,
                quantity,
            }];
            setCart(cartAux);
        }
        handleCountState()
    }

    const removeItem = (item) => {
        let itemsToStay = cart.filter(element => element.item !== item)
        setCart(itemsToStay)
    }

    const clearCart = () => {
        setCart([])
    }

    useEffect ( () => {
        let price = 0
        for (let producto of cart) {
                price += producto.item.precio*producto.quantity
            }
        return (
            setPrice(price)
        )    
    }, [cart])
    
    useEffect ( () => {
        let cartLength = 0;
        for (let producto of cart) {
            cartLength += producto.quantity
        }
        return (
            setCartLength(cartLength)
        )
    }, [cart])

    useEffect ( () => {
        setCountState(true)
    }, [])

    return (
    <CartContext.Provider value={{cart, price, cartLength, countState, addItem, removeItem, clearCart}}>
        {children}
    </CartContext.Provider>
    )
}