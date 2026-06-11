import React from 'react'
import { Link } from 'react-router-dom'

const EmptyCart = () => {
  return (
    <div  style={{
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '10px'
      }}>
        <h1 className='page-title'>Tu carrito esta vacio!😱 </h1>
        <h2 className='page-title'>Te invitamos a ver nuestros productos </h2>
        <Link to='/'className='btn btn-dark' >Ir a comprar</Link>
    </div>
  )
}

export default EmptyCart