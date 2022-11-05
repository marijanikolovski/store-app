import React from 'react'

const CreateCustomerComponent = ({ onCreateCustomer, newCustomer, setNewCustomer }) => {
  return (
    <form  onSubmit={onCreateCustomer}>
        <label>Name:</label>
        <input 
            required
            type="text"
            value={newCustomer.name}
            onChange={({target}) => setNewCustomer({...newCustomer, name: target.value})}
        />
        <label>Surname:</label>
        <input 
            required
            type="text"
            value={newCustomer.surname}
            onChange={({target}) => setNewCustomer({...newCustomer, surname: target.value})}
        />
        <button>Add new</button>
    </form>
  )
}

export default CreateCustomerComponent
