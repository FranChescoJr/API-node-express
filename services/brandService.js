const nodemon = require("nodemon");

class BrandService {

  constructor() {
    this.brands = [
      {
        id: 1,
        name: "Adidas",
        status: 1
      },
      {
        id: 2,
        name: "Nike",
        status: 1
      },
      {
        id: 3,
        name: "Puma",
        status: 0
      }];
  }

  create(data) {
    const newBrand = {
      ...data
    }
    this.brands.push(newBrand);
    return newBrand;
  }

  find() {
    return this.brands;
  }

  findActives() {
    const activeBrands = this.brands.filter(function (item) {
      return item.status === 1
    })
    return activeBrands;
  }

  findOne(id) {
    return this.brands.find(item => item.id == id);
  }

  update(id, changes) {
    const index = this.brands.findIndex(item => item.id == id);
    if (index === -1) {
      throw new Error("Brand not found")
    }
    const brand = this.brands[index];
    this.brands[index] = {
      ...brand,
      ...changes
    };
    return this.brands[index];
  }

  delete(id, changes) {
    const index = this.brands.findIndex(item => item.id == id);
    if (index === -1) {
      throw new Error("Brand not found")
    }
    const brand = this.brands[index];
    this.brands[index] = {
      ...brand,
      ...changes
    };
    return this.brands[index];
  }

}

module.exports = BrandService
