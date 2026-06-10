import React, { useEffect, useState } from 'react'
import { getOneProduct } from '../mock/asyncData'
import ItemDetail from './ItemDetail'
import { useNavigate, useParams } from 'react-router-dom'
import LoaderComponent from './LoaderComponent'
import { doc, getDoc } from 'firebase/firestore'
import { db } from '../firebaseConfig'

const ItemDetailContainer = () => {
    const[detail, setDetail]= useState({})
    const [loading, setLoading]= useState(true)
    const {id} = useParams()
    const navigate= useNavigate()
   useEffect(()=>{
   const docRef = doc(db, "items", id)
   getDoc(docRef)
    .then((res)=> {
      if(res.data()){
        setDetail({id:res.id, ...res.data()})
      }else{
        navigate('/producto-invalido')
      }
    })
    .catch((error)=> console.log(error))
    .finally(()=> setLoading(false))
},[id])

  return (
    <>
       {loading ? <LoaderComponent text="Cargando detalle..."/> : <ItemDetail detail={detail} />}
    </>
  )
}

export default ItemDetailContainer