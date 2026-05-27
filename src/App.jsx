import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemCount from './components/ItemCount'
import ItemListContainer from './components/ItemListContainer'
import Navbar from "./components/Navbar"
import ItemDetailContainer from './components/ItemDetailContainer';
import { Route, Routes } from 'react-router-dom';

function App() {

console.log('Hola soy App')
  return (
    <>
      <Navbar/>
    <Routes>
      <Route path='/' element={<ItemListContainer saludo='Bienvenidos a mi App' alumno='Camila'/>}/>
      <Route path='/category/:type' element={<ItemListContainer saludo='Categoria '/>}/>
      <Route path='/item/:id' element={ <ItemDetailContainer/>}/>
    </Routes>
    </>
  )
}

export default App
