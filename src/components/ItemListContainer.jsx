import Button from "./Button"


const ItemListContainer = ({ saludo }) => {

    //aca habria que hacer un estado cuyo valor inicial sea un array vacio

    /* 
    Sintaxis de promesas : 

        Promise
            .then(()=>{})
            .catch(()=>{})

    */

    fetch('https://dummyjson.com/products') //Esto trae datos binarios (0s y 1s)
        .then((res) => {
            return res.json()
        })
        .then((data) => {
            console.log(data)
            //aca habria que modificar el estado de linea 6 para que reciba "data"
        })
        .catch(()=>{
            console.error('Error fetching products')
        })

    return (
        <div>
            <h1>{saludo}</h1>
            {/* JSON.stringify(miEstado) */}
            <Button texto="Contactanos" unCallback={(evt) => {
                console.log(evt)
            }} />
        </div>
    )
}

export default ItemListContainer