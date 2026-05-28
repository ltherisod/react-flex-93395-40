import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemCount from './components/ItemCount'
import ItemListContainer from './components/ItemListContainer'
import Navbar from "./components/Navbar"
import ItemDetailContainer from './components/ItemDetailContainer';
import { Route, Routes } from 'react-router-dom';
//IMPORTAR EL PROVEEDOR PARA DAR ACCESO AL CONTEXT
import { CartProvider } from './context/CartContext';
import CartContainer from './components/CartContainer';

function App() {

console.log('Hola soy App')
  return (
    <>
      <CartProvider>
      <Navbar/>
        <Routes>
          <Route path='/' element={<ItemListContainer saludo='Bienvenidos a mi App' alumno='Camila'/>}/>
          <Route path='/category/:type' element={<ItemListContainer saludo='Categoria '/>}/>
          <Route path='/item/:id' element={ <ItemDetailContainer/>}/>
          <Route path='/cart' element={<CartContainer/>}/>
        </Routes>
      </CartProvider>
    </>
  )
}

export default App
