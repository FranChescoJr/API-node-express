const express = require("express");

const ProductService = require("./../services/productService")

const router = express.Router();
const service = new ProductService();

router.get("/all", (req, res) => {
  const products = service.find();
  res.status(200).json(products);
})

router.get("/", (req, res) => {
  const products = service.findActives();
  res.status(200).json(products);
})

router.get("/:id", (req, res) => {
  const { id } = req.params;
  const product = service.findOne(id);

  if (!product) {
    res.status(404).json({
      message: `El producto con id ${id} no existe`
    });
  } else if (product.status == 0) {
    res.status(409).json({
      message: `El producto con id ${id} ya no está disponible`
    });
  } else {
    res.status(200).json(product);
  }
});

router.post("/", (req, res) => {
  const body = req.body;
  const newProduct = service.create(body);
  res.status(201).json(newProduct);
});

router.put("/:id", (req, res) => {
  const { id } = req.params;
  const body = req.body;
  const product = service.update(id, body);
  res.status(202).json(product);
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;
  const body = req.body;
  const product = service.delete(id, body);
  res.status(202).json(product);
});

module.exports = router;

