import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemCount from './components/ItemCount'
import ItemListContainer from './components/ItemListContainer'

//importar todos los componentes
//import + NOMBRE DEL COMPONENTE + from + RUTA DEL COMPONENTE
import Navbar from "./components/Navbar"
import FetchApi from './examples/FetchApi';
import ItemDetailContainer from './components/ItemDetailContainer';

function App() {

console.log('Hola soy App')
  return (
    <>
      {/* <Navbar></Navbar> */}
      <Navbar />
     {/* <FetchApi/> */}
     <ItemListContainer
      saludo="Hola chicos!" //string
       numero={5} //number
        active={false} //boolean
         list={[1,2,3,4,5,6]} //arrays
          usuario={{nombre:'Laura'}} //objects
           comprar={()=> alert('Compraste!')} //funtions
           />
           <ItemDetailContainer/>
    </>
  )
}

export default App
