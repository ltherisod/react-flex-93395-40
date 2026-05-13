import React from 'react'
//1. Se importa de react
import {useState} from 'react'


const ItemCount = () => {
    const[count, setCount ]= useState(1)
   
//const [variableDeEstado, FuncionModificadora]= useState(ValorInicial)

const sumar = ()=> {
    setCount(count + 1)
}
const restar= ()=> {
    if(count > 0){

        setCount(count - 1)
    }
}





console.log('ItemCount')
  return (
    <div>
        <button className='btn btn-danger' onClick={restar} disabled={count === 0}>-</button>
        <span className='btn '>{count}</span>
        <button className='btn btn-success' onClick={sumar}>+</button>
        <button className='btn btn-primary'  >Comprar</button>
    </div>
  )
}

export default ItemCount