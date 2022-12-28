const express = require("express");

const BrandService = require("./../services/brandService")

const router = express.Router();
const service = new BrandService();

router.get("/all", (req, res) => {
  const brands = service.find();
  res.status(200).json(brands);
})

router.get("/", (req, res) => {
  const brands = service.findActives();
  res.status(200).json(brands);
})

router.get("/:id", (req, res) => {
  const { id } = req.params;
  const brand = service.findOne(id);

  if (!brand) {
    res.status(404).json({
      message: `La marca con id ${id} no existe`
    });
  } else if (brand.status == 0) {
    res.status(409).json({
      message: `La marca con id ${id} ya no está disponible`
    });
  } else {
    res.status(200).json(brand);
  }
});

router.post("/", (req, res) => {
  const body = req.body;
  const newBrand = service.create(body);
  res.status(201).json(newBrand);
});

router.put("/:id", (req, res) => {
  const { id } = req.params;
  const body = req.body;
  const brand = service.update(id, body);
  res.status(202).json(brand);
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;
  const body = req.body;
  const brand = service.delete(id, body);
  res.status(202).json(brand);
});

module.exports = router;
