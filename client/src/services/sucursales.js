import axios from "axios";
import { toast } from "react-hot-toast";

export const getSucursales = async () => {
  try {
    const res = await axios.get("http://localhost:3000/api/sucursales");
    return res.data;
  } catch (error) {
    toast.error("Error al obtener las sucursales");
    return [];
  }
};

// get categoriaProducto by id
export const getSucursalById = async (id) => {
  try {
    const res = await axios.get(`http://localhost:3000/api/sucursales/${id}`);
    return res.data;
  } catch (error) {
    toast.error("Error al obtener la sucursal");
    return null;
  }
};

// create categoriaProducto
export const createSucursal = async (categoriaProducto) => {
  try {
    const res = await axios.post(
      "http://localhost:3000/api/sucursales",
      categoriaProducto
    );
    return res.data;
  } catch (error) {
    toast.error("Error al crear la sucursal");
    return null;
  }
};

// delete categoriaProducto
export const deleteSucursal = async (id) => {
  try {
    const res = await axios.delete(
      `http://localhost:3000/api/sucursales/${id}`
    );
    return res.data;
  } catch (error) {
    toast.error("Error al eliminar la sucursal");
    return null;
  }
};

// patch categoriaProducto
export const patchSucursal = async (id, categoriaProducto) => {
  try {
    const res = await axios.patch(
      `http://localhost:3000/api/sucursales/${id}`,
      categoriaProducto
    );
    return res.data;
  } catch (error) {
    toast.error("Error al actualizar la sucursal");
    return null;
  }
};
