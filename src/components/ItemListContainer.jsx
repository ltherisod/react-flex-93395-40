import { useState, useEffect } from "react"
import { getProducts } from "../mock/AsyncData"
import ItemList from "./ItemList"

const ItemListContainer = ({saludo})=> {
    const [data, setData]= useState([])


    useEffect(()=>{
        getProducts()
        .then((res)=> setData(res))
    },[])


    // const{saludo}=props
// console.log(props, 'props')
console.log('Hola soy ItemListContainer', data)

    return(
        <div>
            {/* <h2>{props.saludo}</h2> */}
            <h1>{saludo}</h1>
            <ItemList data={data}/>
        </div>
    )
}
export default ItemListContainer