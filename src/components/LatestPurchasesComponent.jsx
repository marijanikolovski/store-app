import React from 'react'
import {Redirect, useParams} from 'react-router-dom'
import CustomerService from '../service/CustomerService';
import ProductService from '../service/ProductService';

const LatestPurchasesComponent = ({ products }) => {
    const {id} = useParams();

    const customer = CustomerService.getId(id);

    if (!customer) {
        return <Redirect to="/customers"/>
    }

    return (
        <div>
            <h1>latest Purchases</h1>
            <p>Name: {customer.name}</p>
            <p>Surname: {customer.surname}</p>
            <h3>List of products:</h3>
            <ul>
                {products ? 
                    customer.products.map((product) => (
                        <li>{product.name}</li>
                )) : 'There are no products'}
            </ul>
        </div>
    )
}

export default LatestPurchasesComponent
