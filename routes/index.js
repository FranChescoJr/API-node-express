const express = require("express");

const loginRouter = require("./loginRouter");
const productsRouter = require("./productsRouter");
const brandsRouter = require("./brandsRouter");
const categoriesRouter = require("./categoriesRouter");

function routerApi(app) {
  const router = express.Router();
  app.use("/api/v1", router);

  router.use("/login", loginRouter);
  router.use("/products", productsRouter);
  router.use("/brands", brandsRouter);
  router.use("/categories", categoriesRouter);
}

module.exports = routerApi;
