import React, { useContext, useState } from 'react'
import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom'
import toast from 'react-hot-toast'
import Swal from 'sweetalert2'



const CartView = () => {
  const {cart, clear, removeItem, total}= useContext(CartContext)
 
  const handleClear = ()=> {
    Swal.fire({
        title:'¿Estás seguro de borrar todo el carrito?',
        text:'Se va a perder toda la info',
        icon:'question',
        showDenyButton:true,
        denyButtonText:'No',
        confirmButtonText:'Si'
    }).then((result)=>{
        if(result.isConfirmed){
            clear()
        }
    })
  }
    
  return (
    <div>
        <h1 className='page-title'>Tu carrito 🛒</h1>
        <div>
            {
                // cart.map((compra)=> <CartItem key={compra.id} compra={compra}/>)
                cart.map((compra)=> (
                    <div key={compra.id} style={{display:'flex', justifyContent:'space-between', alignItems:'center', padding:'2rem', width:'100%'}}>
                            <img src={compra.img} alt={compra.name} style={{width:'10rem'}}/>
                            <span>{compra.name}</span>
                            <span>{compra.quantity}</span>
                            <span>${compra.price}</span>
                            <span>precio final: ${compra.price * compra.quantity}</span>
                            <button className='btn btn-danger' onClick={()=>removeItem(compra.id)}>X</button>
                    </div>
                ))
            }
        </div>
        <span>Total a pagar: ${total()} ,00 </span>
        <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', width:'80%', padding:'2rem'}}>
            <button className='btn btn-danger' onClick={handleClear} >Vaciar carrito</button>
            <Link className='btn btn-success' to='/checkout'>Termirar compra</Link>
        </div>
    </div>
  )
}

export default CartView