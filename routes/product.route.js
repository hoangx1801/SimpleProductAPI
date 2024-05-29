const express = require("express");
const router = express.Router();

const {
  getProducts,
  getSingleProduct,
  createProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/product.controller.js");

router.get("/products/", getProducts);
router.get("/product/:id", getSingleProduct);
router.post("/product", createProduct);
router.put("/product/:id", updateProduct);
router.delete("/product/:id", deleteProduct);

module.exports = router;
