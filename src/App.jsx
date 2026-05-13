import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemCount from './components/ItemCount'
import ItemListContainer from './components/ItemListContainer'

//importar todos los componentes
//import + NOMBRE DEL COMPONENTE + from + RUTA DEL COMPONENTE
import Navbar from "./components/Navbar"

function App() {

console.log('Hola soy App')
  return (
    <>
      {/* <Navbar></Navbar> */}
      <Navbar />
      <ItemCount stock={10}/>
     <ItemListContainer
      saludo="Hola chicos!" //string
       numero={5} //number
        active={false} //boolean
         list={[1,2,3,4,5,6]} //arrays
          usuario={{nombre:'Laura'}} //objects
           comprar={()=> alert('Compraste!')} //funtions
           />
    </>
  )
}

export default App
