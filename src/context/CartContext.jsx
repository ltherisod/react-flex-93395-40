//1. IMPORTAR CREATECONTEXT
import { createContext, useState } from "react";


//2. CREO EL CONTEXTO
export const CartContext = createContext()


//3. CREO EL PROVIDER

export const CartProvider = ({children})=>{
    const [cart, setCart]= useState([])

    //funciones

    //agregar un item al carrito
    const addItem = (item, qty)=> {
        // console.log(item, qty)
         //console.log({...item, quantity:qty})
         if(isInCart(item.id)){
            //ya existe
            setCart(
                cart.map((prod)=> {
                    if(prod.id === item.id){
                        //sumar cantidades
                        return {...prod, quantity: prod.quantity + qty}
                    }else{
                        //retorno sin modif
                        return prod
                    }
                })
            )
         }else{

             setCart([...cart,{...item, quantity:qty}])
         }
    }

    //borrar el carrito
    const clear = ()=> {
        setCart([])
    }

    //eliminar un item
    const removeItem = (id)=> {

        setCart(cart.filter((prod)=> prod.id !== id))

    }

    //si esta dentro del carrito
    const isInCart = (id)=> {
        return cart.some((prod)=> prod.id === id)
    }


    const total = ()=>{
        return cart.reduce((acc, prod)=> acc += (prod.quantity * prod.price), 0)
    }


       const totalImp = ()=>{
        return cart.reduce((acc, prod)=> acc += (prod.quantity * prod.price), 1.5)
    }

    const totalQty = ()=> {
        return cart.reduce((acc, prod)=> acc+= prod.quantity, 0)
    }



    return(
        <CartContext.Provider value={{cart, addItem, clear, removeItem, total, totalQty}}>
           {children}
        </CartContext.Provider>
    )
}