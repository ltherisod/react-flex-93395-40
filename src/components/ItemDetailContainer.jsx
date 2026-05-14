import React, { useEffect, useState } from 'react'
import { getOneProduct } from '../mock/AsyncData'
import ItemDetail from './ItemDetail'

const ItemDetailContainer = () => {
    const [detail, setDetail]= useState({})

    useEffect(()=>{
        getOneProduct('02')//pasa a ser dinamico con navegacion
        .then((res)=> setDetail(res))
    },[])
  return (
    <div><ItemDetail detail={detail}/></div>
  )
}

export default ItemDetailContainer