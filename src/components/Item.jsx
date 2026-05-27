import React from 'react'
import { Link } from 'react-router-dom'

const Item = ({prod}) => {
    // console.log(prod)
  return (
    <div className="card" style={{width:'18rem'}}>
  <img src={prod.img} className="card-img-top" alt={prod.name}/>
  <div className="card-body">
    <h5 className="card-title">{prod.name}</h5>
    <p className="card-text">${prod.price},00</p>
    <Link className="btn btn-primary" to={`/item/${prod.id}`}>Ver Más</Link>
  </div>
</div>
  )
}

export default Item