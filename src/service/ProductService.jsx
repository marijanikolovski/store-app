class ProductService {
    constructor() {
      this.products = [{
        id: 1,
        name: 'fikus',
      },{
        id: 2,
        name: 'orhideja',
      },{
        id: 3,
        name: 'kaktus',
      }];
    }
  
    getAll() {
      return [...this.products];
    }
  
    get(id) {
      const product = this.products.find((prod) => prod.id === Number(id));
  
      return product ? {...product} : null
    }
  }
  
  export default new ProductService()