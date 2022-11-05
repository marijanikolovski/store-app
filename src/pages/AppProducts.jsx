import React, { useState } from 'react'
import SingleProductComponent from '../components/SingleProductComponent';
import ProductService from '../service/ProductService'

const AppProducts = () => {
  const [products, setProducts] = useState(ProductService.getAll());
  const [search, setSearch] = useState('')

  const productFiltering = products.filter(product => product.name.toLowerCase().startsWith(search.toLowerCase()))

  const increment = (id) => {
    const index = products.findIndex((product) => product.id === id)
    const newCount = ProductService.countIncrement(id);

    setProducts(
      [...products.slice(0, index), {...products[index], count: newCount}, ...products.slice(index + 1)]
    )
  }

  const decrement = (id) => {
    const index = products.findIndex((product) => product.id === id)
    const newCount = ProductService.countDecrement(id);

    setProducts(
      [...products.slice(0, index), {...products[index], count: newCount}, ...products.slice(index + 1)]
    )
  }

  return (
    <div>
      <h1>Products:</h1>
      <label>Search</label>
      <input type="text" value={search} onChange={({target}) => setSearch(target.value)}/>
      {productFiltering.map((product) => (
        <SingleProductComponent 
          key={product.id}
          id={product.id}
          name={product.name}
          count={product.count}
          increment={increment}
          decrement={decrement}
        />
      ))}
    </div>
  )
}

export default AppProducts


