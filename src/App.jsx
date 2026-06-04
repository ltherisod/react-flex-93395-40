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
import { app } from './firebaseConfig';
import { getFirestore, collection, addDoc } from 'firebase/firestore';


function App() {

  console.log('Hola soy App')


  const handleCreateProduct = () => {

    //1) Necesito una referencia a la aplicacion (seria la constante "app")
    //const app = initializeApp(firebaseConfig);

    //2) Necesito una referencia a la base de datos (Firestore)
    const db = getFirestore(app);

    //3) Necesito una referencia a la coleccion (en este caso "products")
    const productCollection = collection(db, "products");

    //4) Hace la consulta
    const miConsulta = addDoc(productCollection, {
      id: 2,
      name: 'Random 2',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates molestiae maxime vero earum reprehenderit impedit temporibus deserunt labore ut! Ipsam dolor consectetur rerum necessitatibus odit! Consectetur maxime quos nobis officiis!',
      stock: 10,
      price: 45000,
      category: 'mas vendidos',
      img: 'https://i.postimg.cc/GpM0ZjVB/darth-vader.png'
    })

    miConsulta
      .then(() => {
        console.log("Producto creado con exito")
      })
      .catch(() => {
        console.log("Error al crear el producto")
      })

  }


  return (
    <>
      <CartProvider>
        <Navbar />
        {/* <button onClick={handleCreateProduct}>crear producto</button> */}
        <Routes>
          <Route path='/' element={<ItemListContainer saludo='Bienvenidos a mi App' alumno='Camila' />} />
          <Route path='/category/:type' element={<ItemListContainer saludo='Categoria ' />} />
          <Route path='/item/:id' element={<ItemDetailContainer />} />
          <Route path='/cart' element={<CartContainer />} />
        </Routes>
      </CartProvider>
    </>
  )
}

export default App
