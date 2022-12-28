const express = require("express");

const CategoryService = require("./../services/categoryService")

const router = express.Router();
const service = new CategoryService();

router.get("/all", (req, res) => {
  const categories = service.find();
  res.status(200).json(categories);
})

router.get("/", (req, res) => {
  const categories = service.findActives();
  res.status(200).json(categories);
})

router.get("/:id", (req, res) => {
  const { id } = req.params;
  const category = service.findOne(id);

  if (!category) {
    res.status(404).json({
      message: `La categoría con id ${id} no existe`
    });
  } else if (category.status == 0) {
    res.status(409).json({
      message: `La categoría con id ${id} ya no está disponible`
    });
  } else {
    res.status(200).json(category);
  }
});

router.post("/", (req, res) => {
  const body = req.body;
  const newCategory = service.create(body);
  res.status(201).json(newCategory);
});

router.put("/:id", (req, res) => {
  const { id } = req.params;
  const body = req.body;
  const category = service.update(id, body);
  res.status(202).json(category);
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;
  const body = req.body;
  const category = service.delete(id, body);
  res.status(202).json(category);
});

module.exports = router;
