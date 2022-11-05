import React, { useState } from 'react'
import SingleProductComponent from '../components/SingleProductComponent';
import ProductService from '../service/ProductService'

const AppProducts = () => {
  const [products, setProducts] = useState(ProductService.getAll());
  const [search, setSearch] = useState('')

  const productFiltering = products.filter(product => product.name.toLowerCase().startsWith(search.toLowerCase()))

  return (
    <div>
      <h1>Products:</h1>
      <label>Search</label>
      <input type="text" value={search} onChange={({target}) => setSearch(target.value)}/>
      {productFiltering.map((product) => (
        <SingleProductComponent 
          key={product.id}
          name={product.name}
          count={product.count}
        />
      ))}
    </div>
  )
}

export default AppProducts


