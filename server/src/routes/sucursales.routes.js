import { Router } from "express";
import {
  createSucursal,
  deleteSucursal,
  getSucursal,
  getSucursales,
  updateSucursal,
} from "../controllers/sucursales.controller.js";

const router = Router();

// GET all Employees
router.get("/sucursales", getSucursales);

// GET An Employee
router.get("/sucursales/:id", getSucursal);

// DELETE An Employee
router.delete("/sucursales/:id", deleteSucursal);

// INSERT An Employee
router.post("/sucursales", createSucursal);

router.patch("/sucursales/:id", updateSucursal);

export default router;
