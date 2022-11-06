import React from 'react'
import {Redirect, useParams} from 'react-router-dom'
import CustomerService from '../service/CustomerService';

const LatestPurchasesComponent = () => {
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
                {customer.products.length > 0 ? 
                    customer.products.map((product) => (
                        <li key={product.id}>{product.name}</li>
                )) : 'There are no products'}
            </ul>
        </div>
    )
}

export default LatestPurchasesComponent
