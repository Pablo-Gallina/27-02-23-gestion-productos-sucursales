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
