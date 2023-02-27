import { Router } from "express";
import {
  createProducto,
  deleteProducto,
  getProducto,
  getProductos,
  updateProducto,
} from "../controllers/categoria_productos.controller.js";

const router = Router();

// GET all Employees
router.get("/categoria_productos", getProductos);

// GET An Employee
router.get("/categoria_productos/:id", getProducto);

// DELETE An Employee
router.delete("/categoria_productos/:id", deleteProducto);

// INSERT An Employee
router.post("/categoria_productos", createProducto);

router.patch("/categoria_productos/:id", updateProducto);

export default router;
