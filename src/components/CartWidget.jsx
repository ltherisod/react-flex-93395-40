import { TiShoppingCart } from "react-icons/ti";
import Badge from 'react-bootstrap/Badge';
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
const CartWidgetRI = ()=> {
    const {cart, totalQty}= useContext(CartContext)
    const navigate= useNavigate()
    return(
        <div onClick={()=>navigate('/cart')} style={{cursor: 'pointer'}}>
            <TiShoppingCart fontSize={'1.5rem'} />
           { cart.length > 0 && <Badge bg='danger'>{totalQty()}</Badge>}
        </div>
    )
}
export default CartWidgetRI