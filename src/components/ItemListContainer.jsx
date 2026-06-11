import { useEffect, useState } from "react"
import Item from "./Item"
import ItemList from "./ItemList"
import { useParams } from "react-router-dom"
import LoaderComponent from "./LoaderComponent"
import { collection, getDocs, query, where } from "firebase/firestore"
import { db } from "../firebaseConfig"



const ItemListContainer = ({saludo, alumno})=> {
    const[data, setData]= useState([])
    const [loader, setLoader]= useState(false)
    const {type}= useParams()

        useEffect(()=> {
             setLoader(true)
            const prodColl= type ? query(collection(db, "items"), where("category", "==", type)):collection(db, "items")
             getDocs(prodColl)
             .then((res)=> {
                const list = res.docs.map((doc)=> {
                    return {
                        id: doc.id,
                        ...doc.data()
                    }
                })
                setData(list)
             })
             .catch((error)=> console.log(error))
             .finally(()=> setLoader(false))
        },[type])


    return( 
    <>
    
    {
        loader 
        ? <LoaderComponent text={type ? "Cargando categoria..." : "Cargando productos..."}/>
        : <div>
       <h1 className='page-title'>{saludo}{type && <span style={{textTransform:'capitalize'}}>{type}</span>}</h1> 
       <ItemList data={data}/>
    </div>
    }
    </>
    )
}

export default ItemListContainer