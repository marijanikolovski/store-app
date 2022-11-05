class ProductService {
    constructor() {
      this.products = [{
        id: 1,
        name: 'fikus',
        count: 9
      },
      {
        id: 2,
        name: 'orhideja',
        count: 3
      },
      {
        id: 3,
        name: 'kaktus',
        count: 4
      }];
    }
  
    getAll() {
      return [...this.products];
    }
  
    get(id) {
      const product = this.products.find((prod) => prod.id === Number(id));
  
      return product ? {...product} : null
    }

    countIncrement(id) {
      const index = this.products.findIndex(prod => prod.id === id)

      if (index !== -1) {
        this.products[index].count++;
      }

      return this.products[index].count
    }

    countDecrement(id) {
      const index = this.products.findIndex(prod => prod.id === Number(id))

      if (index !== -1 && this.products[index].count > 0) {
        this.products[index].count--;
      }

      return this.products[index].count
    }
  }
  
  export default new ProductService()