const ItemListContainer = ({saludo})=> {
    // const{saludo}=props
// console.log(props, 'props')
console.log('Hola soy ItemListContainer')
    return(
        <div>
            {/* <h2>{props.saludo}</h2> */}
            <h1>{saludo}</h1>
        </div>
    )
}
export default ItemListContainer