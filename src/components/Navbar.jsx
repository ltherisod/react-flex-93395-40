//importo el css
import "../css/Navbar.css"
import styles from "../css/Navbar.module.css"
//IMPORT DE IMG
import logoReact from "../assets/react.svg"
import CartWidget from "./CartWidget"

const Navbar =()=> {
    return(
        //  <nav className={styles.navContainer}></nav>
        <nav className='nav-container'>
            <a className='a-nav' href="">
                {/* IMAGENES EN PUBLIC */}
                <img src='../img/logo-shop.png' alt='logo' style={{width:'9rem'}}/>
                {/* IMAGENES EN SRC/ASSETS */}
                  {/* <img src={logoReact} alt='logo' style={{width:'9rem'}}/> */}
            </a>
            <a className='a-nav' href="">Nuevos</a>
            <a className='a-nav' href="">Ofertas</a>
            <a className='a-nav' href="">Mas Vendidos</a>
            <CartWidget/>
        </nav>
    )
}

export default Navbar