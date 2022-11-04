import React, { useState } from 'react'
import CustomerService from '../service/CustomerService';
import SingleCustomer from '../components/SingleCustomer';

const AppCustomers = () => {
    const [customers, setCustomers] = useState(CustomerService.getAll())

    const hendleDeleteCostomer = (id) => {
        const isDeleted = CustomerService.delete(id)

        if (isDeleted) {
          setCustomers(customers.filter(customer => customer.id !== id));
        }
    }

  return (
    <div>
      <h1>Customers:</h1>
      {customers.map((customer) => (
        <SingleCustomer 
            key={customer.id}
            id={customer.id}
            name={customer.name}
            surname={customer.surname}
            onDeleteCustomer={hendleDeleteCostomer}
        />
      ))
      }
    </div>
  )
}

export default AppCustomers
