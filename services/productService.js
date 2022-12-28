const nodemon = require("nodemon");

class ProductService {

  constructor() {
    this.products = [
      {
        id: 1001,
        name: "Playera Eternal",
        price: 300,
        marca: "marca",
        linea: "linea",
        stock: 1,
        image: "url",
        status: 1
      },
      {
        id: 1002,
        name: "Sudadera Invencible",
        price: 400,
        marca: "marca",
        linea: "linea",
        stock: 1,
        image: "url",
        status: 1
      },
      {
        id: 1003,
        name: "Tenis Tonal 90",
        price: 550,
        marca: "marca",
        linea: "linea",
        stock: 1,
        image: "url",
        status: 0
      }];
  }

  create(data) {
    const newProduct = {
      ...data
    }
    this.products.push(newProduct);
    return newProduct;
  }

  find() {
    return this.products;
  }

  findActives() {
    const activeProducts = this.products.filter(function (item) {
      return item.status === 1
    })
    return activeProducts;
  }

  findOne(id) {
    return this.products.find(item => item.id == id);
  }

  update(id, changes) {
    const index = this.products.findIndex(item => item.id == id);
    if (index === -1) {
      throw new Error("Product not found")
    }
    const product = this.products[index];
    this.products[index] = {
      ...product,
      ...changes
    };
    return this.products[index];
  }

  delete(id, changes) {
    const index = this.products.findIndex(item => item.id == id);
    if (index === -1) {
      throw new Error("Product not found")
    }
    const product = this.products[index];
    this.products[index] = {
      ...product,
      ...changes
    };
    return this.products[index];
  }

}





module.exports = ProductService
