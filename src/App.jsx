import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Toaster } from 'react-hot-toast';
import ItemCount from './components/ItemCount'
import ItemListContainer from './components/ItemListContainer'
import Navbar from "./components/Navbar"
import ItemDetailContainer from './components/ItemDetailContainer';
import { Route, Routes } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import CartContainer from './components/CartContainer';
import Error from './components/Error';
import Checkout from './components/Checkout';



function App() {

  return (
    <>
      <Toaster
        position="top-right"
        reverseOrder={false}
        gutter={8}
        containerClassName=""
        containerStyle={{}}
        toastOptions={{
          // Define default options
          className: '',
          duration: 4000,
          style: {
            background: '#363636',
            color: '#fff',
          },
          // Default options for specific types
          success: {
            duration: 3000,
          },
        }}
      />
      <CartProvider>
        <Navbar />
        <Routes>
          <Route path='/' element={<ItemListContainer saludo='Bienvenidos a mi App' alumno='Camila' />} />
          <Route path='/category/:type' element={<ItemListContainer saludo='Categoria ' />} />
          <Route path='/item/:id' element={<ItemDetailContainer />} />
          <Route path='/cart' element={<CartContainer />} />
           <Route path='/checkout' element={<Checkout />} />
          <Route path='*' element={<Error/>}/>
        </Routes>
      </CartProvider>
    </>
  )
}

export default App
