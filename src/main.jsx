import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
 
    <App />
  ,
)


//index.js

console.log(1) //sync / bloqueante
console.log(2) //sync / bloqueante
fetch().then().catch() //async / no - bloqueante
console.log(3)
console.log("Holaa")
