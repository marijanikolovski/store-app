import React, { useState } from 'react'
import SingleProductComponent from '../components/SingleProductComponent';
import ProductService from '../service/ProductService'

const AppProducts = () => {
  const [products, setProducts] = useState(ProductService.getAll());

  return (
    <div>
      <h1>Products:</h1>
      {products.map((product) => (
        <SingleProductComponent 
          name={product.name}
        />
      ))}
    </div>
  )
}

export default AppProducts


