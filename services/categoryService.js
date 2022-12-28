const nodemon = require("nodemon");

class CategoryService {

  constructor() {
    this.categories = [
      {
        id: 100,
        name: "Playera",
        status: 1
      },
      {
        id: 102,
        name: "Sudadera",
        status: 1
      },
      {
        id: 103,
        name: "Pantalon",
        status: 1
      }];
  }

  create(data) {
    const newCategory = {
      ...data
    }
    this.categories.push(newCategory);
    return newCategory;
  }

  find() {
    return this.categories;
  }

  findActives() {
    const activeCategories = this.categories.filter(function (item) {
      return item.status === 1
    })
    return activeCategories;
  }

  findOne(id) {
    return this.categories.find(item => item.id == id);
  }

  update(id, changes) {
    const index = this.categories.findIndex(item => item.id == id);
    if (index === -1) {
      throw new Error("Category not found")
    }
    const category = this.categories[index];
    this.categories[index] = {
      ...category,
      ...changes
    };
    return this.categories[index];
  }

  delete(id, changes) {
    const index = this.categories.findIndex(item => item.id == id);
    if (index === -1) {
      throw new Error("Category not found")
    }
    const category = this.categories[index];
    this.categories[index] = {
      ...category,
      ...changes
    };
    return this.categories[index];
  }

}

module.exports = CategoryService
