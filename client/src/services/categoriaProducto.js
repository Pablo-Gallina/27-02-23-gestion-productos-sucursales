import axios from "axios";
import { toast } from "react-hot-toast";

export const getCategoriaProductos = async () => {
  try {
    const res = await axios.get(
      "http://localhost:3000/api/categoria_productos"
    );
    return res.data;
  } catch (error) {
    toast.error("Error al obtener las categorias de productos");
    return [];
  }
};

// create categoriaProducto
export const createCategoriaProducto = async (categoriaProducto) => {
  try {
    const res = await axios.post(
      "http://localhost:3000/api/categoria_productos",
      categoriaProducto
    );
    return res.data;
  } catch (error) {
    toast.error("Error al crear la categoria de producto");
    return null;
  }
};

// delete categoriaProducto
export const deleteCategoriaProducto = async (id) => {
  try {
    const res = await axios.delete(
      `http://localhost:3000/api/categoria_productos/${id}`
    );
    return res.data;
  } catch (error) {
    toast.error("Error al eliminar la categoria de producto");
    return null;
  }
};
