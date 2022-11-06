import React, { useState } from 'react'
import { Link, useHistory, useParams } from 'react-router-dom';
import ProductService from '../service/ProductService';
import CustomerService from '../service/CustomerService';

const BuyProductComponent = () => {
    const {id} = useParams();
    const history = useHistory();
    const customers = CustomerService.getAll();
    
    const [product, setProduct] = useState(ProductService.getId(id));
    const [selectedCustomer, setSelectedCustomer] = useState({});

    const handleConfirm = () => {
        CustomerService.addProduct(selectedCustomer, product);

        const newCount = ProductService.countDecrement(id);

        setProduct({...product, count: newCount,})
    }

    const handleCancel = () => {
        history.push('/products');
    }

    if (!product.count) {
        return <Link to="/products">Go back to Products</Link>
    }

    return (
        <div>
            <h1>{product.name}</h1>
            <h4>Count: <strong>{product.count}</strong></h4>
            <label>Customers:</label>
            <select 
                onChange={(e) => setSelectedCustomer(e.target.value)} 
                value={selectedCustomer}>
                    <option value="">Please select customer</option>
                    {customers.map((customer) => 
                        <option key={customer.id} value={customer.id}>
                            {customer.name} {customer.surname}
                        </option>
                    )}
                </select>
                <button type="button" onClick={handleConfirm}>Confirm</button>
                <button type="button" onClick={handleCancel}>Cancel</button>
        </div>
    )
}

export default BuyProductComponent
