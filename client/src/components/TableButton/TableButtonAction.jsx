import React from "react";
import TableButton from "./TableButton";
import { MenuItem, MenuList } from "@chakra-ui/react";
import { deleteCategoriaProducto } from "../../services/categoriaProducto";
import { toast } from "react-hot-toast";
import { deleteSucursal } from "../../services/sucursales";

const TableButtonAction = ({
  name,
  row,
  getData,
  onOpenModalUpdate,
  setIsUpdate,
  setDataUpdate,
  isSucursal = false,
}) => {
  const handleDelete = async () => {
    if (isSucursal) {
      const delete_data = deleteSucursal(row.values.id);

      await toast.promise(delete_data, {
        loading: "Eliminando...",
        success: "Eliminado con éxito",
        error: "Error al eliminar la sucursal",
      });
    } else {
      const delete_data = deleteCategoriaProducto(row.values.id);

      await toast.promise(delete_data, {
        loading: "Eliminando...",
        success: "Eliminado con éxito",
        error: "Error al eliminar la categoría",
      });
    }
    getData();
  };

  const handleUpdateBrand = () => {
    setDataUpdate(row.values);
    setIsUpdate(true);
    onOpenModalUpdate();
  };

  return (
    <TableButton>
      <MenuList>
        {/* <MenuItem onClick={handleViewEvent}>Ver evento</MenuItem> */}
        <MenuItem onClick={handleUpdateBrand}>Editar {name}</MenuItem>
        <MenuItem onClick={handleDelete}>Eliminar {name}</MenuItem>
      </MenuList>
    </TableButton>
  );
};

export default TableButtonAction;
