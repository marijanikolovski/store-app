import React from 'react'

const SingleProductComponent = ({ name , count}) => {
  return (
    <div>
      <ul>
        <li>Name: <strong>{name}</strong></li>
        <li>Count: <strong>{count}</strong></li>
        <button><strong>+</strong></button>
        <button><strong>-</strong></button>
      </ul>
    </div>
  )
}

export default SingleProductComponent
