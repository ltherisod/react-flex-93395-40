import React from 'react'
//1. Se importa de react
import {useState, useEffect} from 'react'


const ItemCount = () => {
    const[count, setCount ]= useState(1)
    const[purchase, setPurchase ]= useState(false) //ejemplo
   
//const [variableDeEstado, FuncionModificadora]= useState(ValorInicial)

const sumar = ()=> {
    setCount(count + 1)
}
const restar= ()=> {
    if(count > 0){

        setCount(count - 1)
    }
}

const comprar = ()=> {
    setPurchase(!purchase)
}


// useEffect(()=>{
//     //codigo
// },[array de dependencias])

//1. SIN EL ARRAY DE DEPENDENCIAS
//SE EJECUTA SIEMPRE
//USO: CASI NUNCA/NUNCA

useEffect(()=>{
    console.log('ME EJECUTO SIEMPRE!!!!')
})


//2. CON EL ARRAY DE DEPENDENCIAS VACIO
//SE EJECUTA CUANDO MONTA EL COMPONENTE
//USO: CASI SIEMPRE/ SIEMPRE

useEffect(()=>{
    console.log('ME EJECUTO UNA SOLA VEZ, CUANDO SE MONTA EL COMPONENTE')
},[])

//3. CON EL ARRAY DE DEPENDENCIAS CON DATOS
//SE EJECUTA CUANDO MONTA EL COMPONENTE Y SIEMPRE QUE LO QUE ESTE ESCUCHANDO CAMBIE
//USO: CASI SIEMPRE/ SIEMPRE

useEffect(()=>{
    console.log('ME EJECUTO CUANDO SE MONTA EL COMPONENTE Y SIEMPRE QUE PURCHASE CAMBIE', purchase)
},[purchase])




console.log('ItemCount')
  return (
    <div>
        <button className='btn btn-danger' onClick={restar} disabled={count === 0}>-</button>
        <span className='btn '>{count}</span>
        <button className='btn btn-success' onClick={sumar}>+</button>
        <button className='btn btn-primary'onClick={comprar}>Comprar</button>
    </div>
  )
}

export default ItemCount