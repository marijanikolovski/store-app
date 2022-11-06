import React from 'react'
import { Link } from 'react-router-dom'

const SingleProductComponent = ({ id, name , count, increment, decrement}) => {
  return (
    <div>
      <ul>
        <li>Name: <strong>{name}</strong></li>
        <li>Count: <strong>{count}</strong></li>
        <Link to={`/products/${id}`}>Buy</Link>
        <button onClick={() => increment(id)}><strong>+</strong></button>
        <button onClick={() => decrement(id)}><strong>-</strong></button>
      </ul>
    </div>
  )
}

export default SingleProductComponent
