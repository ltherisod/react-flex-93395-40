///1. IMPORTAR EL HOOK
import{useState} from 'react'

const ItemCount = ()=> {
    // const estado = useState(0)
    // const valor= estado[0]
    // const setValor= estado[1]
    //CONST [VARIABLE DE ESTADO ,  FUNCION MODIFICADORA]= USESTATE(VALOR INICIAL)
    //string
    //boolean
    //obj
    //array
    //null
    //number
    // if(pepe){

    //     const [valor, setValor] = useState(0)
    // }
    //declaracion de estado
    const [valor, setValor] = useState(0)


     const sumar = ()=> {
        setValor(valor + 1)
     }
        const restar = ()=> {
            if(valor > 0){
                //modif del estado
                setValor(valor - 1)
            }
     }
    console.log('Hola soy ItemCount')
    return(
        <div>
            <button onClick={restar}>-</button>
            <span>{valor}</span>
            <button onClick={sumar}>+</button>
        </div>
    )
}
export default ItemCount