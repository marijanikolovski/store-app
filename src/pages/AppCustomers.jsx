import React, { useState } from 'react'
import CustomerService from '../service/CustomerService';
import SingleCustomer from '../components/SingleCustomer';
import CreateCustomerComponent from '../components/CreateCustomerComponent';

const AppCustomers = () => {
    const [newCustomer, setNewCustomer] = useState({
        name: '',
        surname: ''
      })

    const [customers, setCustomers] = useState(CustomerService.getAll())

    const hendleDeleteCostomer = (id) => {
        const isDeleted = CustomerService.delete(id)

        if (isDeleted) {
          setCustomers(customers.filter(customer => customer.id !== id));
        }
    }

    const handleCreateCustomer = (e) => {
        e.preventDefault();
    
        const newCustomerResponse = CustomerService.create(newCustomer);

        setCustomers([...customers, newCustomerResponse])

        setNewCustomer({
          name: '',
          surname: ''
        })
      }

  return (
    <div>
      <h1>Customers:</h1>
      <CreateCustomerComponent 
        key={customers.id}
        newCustomer={newCustomer}
        setNewCustomer={setNewCustomer}
        onCreateCustomer={handleCreateCustomer}
      />
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
