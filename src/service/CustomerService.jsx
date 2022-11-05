class CustomerService {
    constructor() {
        this.nextId = 4;
        this.customers = 
        [{
            id: 1,
            name: "Svetlana",
            surname: "Marinkovic",
          },
          {
            id: 2,
            name: "Judmila",
            surname: "Spasic",
          },
          {
            id: 3,
            name: "Persida",
            surname: "Boskovic",
          },
        ];
      }  

      getAll() {
        return this.customers;
      }

      getId(id) {
        return this.customers.find(customer => customer.id === Number(id))
      }

      delete(id) {
        const index = this.customers.findIndex((customer) => customer.id === id);
    
        if (index === -1) {
          return false;
        }
    
        this.customers.splice(index, 1);
    
        return true
      }

      create(newCustomer) {
        this.customers.push({id: this.nextId, ...newCustomer});
        this.nextId++;

        return this.customers[this.customers.length-1];
    }
}

export default new CustomerService()
