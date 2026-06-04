import { collection, getDocs, getFirestore, query, where, orderBy, startAt, startAfter } from "firebase/firestore";
import { app } from "../firebaseConfig";

const productos = [
    {
        id: '01',
        name: 'Random 1',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates molestiae maxime vero earum reprehenderit impedit temporibus deserunt labore ut! Ipsam dolor consectetur rerum necessitatibus odit! Consectetur maxime quos nobis officiis!',
        stock: 20,
        price: 25000,
        category: 'nuevos',
        img: 'https://picsum.photos/200'
    },
    {
        id: '02',
        name: 'Random 2',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates molestiae maxime vero earum reprehenderit impedit temporibus deserunt labore ut! Ipsam dolor consectetur rerum necessitatibus odit! Consectetur maxime quos nobis officiis!',
        stock: 10,
        price: 45000,
        category: 'mas vendidos',
        img: 'https://i.postimg.cc/GpM0ZjVB/darth-vader.png'
    },
    {
        id: '03',
        name: 'Random 3',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates molestiae maxime vero earum reprehenderit impedit temporibus deserunt labore ut! Ipsam dolor consectetur rerum necessitatibus odit! Consectetur maxime quos nobis officiis!',
        stock: 30,
        price: 55000,
        category: 'ofertas',
        img: 'https://i.postimg.cc/vB1KCwWM/D-NQ-NP-2X-790947-MLU74201862127-012024-F.webp'
    },
    {
        id: '04',
        name: 'Random 4',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates molestiae maxime vero earum reprehenderit impedit temporibus deserunt labore ut! Ipsam dolor consectetur rerum necessitatibus odit! Consectetur maxime quos nobis officiis!',
        stock: 5,
        price: 25000,
        category: 'ofertas',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjEgjGu7SUxB4Ggx9sAYNoW5X4xQnO1E-WOA&'
    }
]


export const getProducts = () => {

    //1) Necesito una referencia a la aplicacion (seria la constante "app")
    //const app = initializeApp(firebaseConfig);

    //2) Necesito una referencia a la base de datos (Firestore)
    const db = getFirestore(app);

    //3) Necesito una referencia a la coleccion (en este caso "products")
    const productCollection = collection(db, "products");

    //4) Hace la consulta (trae TODOS los documentos de la coleccion "products")
    //const miConsulta = getDocs(productCollection);

    //4) Hace la consulta (trae documentos filtrados)
    const miFiltro = query(productCollection, where("category", "==", "nuevos"));
    const miConsulta = getDocs(miFiltro);

    return miConsulta
        .then((data) => {

            /* 
            
            const arrayDeReferencias = data.docs
            
            const arrayDeDatos = []

            arrayDeReferencias.forEach((doc) => {
                arrayDeDatos.push(doc.data())
            })

            */

            const arrayDeDatos = data.docs.map((doc) => doc.data())

            return arrayDeDatos

        })
        .catch(() => {
            console.log("Error al crear el producto")
        })


    /* return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productos)
        }, 3000)
    }) */
}

export const getOneProduct = (id) => {
    return new Promise((resolve) => {
        let prd = productos.find((item) => item.id === id)
        setTimeout(() => {
            resolve(prd)
        }, 3000)
    })
}
