import React from "react";
import TableButton from "./TableButton";
import { MenuItem, MenuList } from "@chakra-ui/react";
import { deleteCategoriaProducto } from "../../services/categoriaProducto";
import { toast } from "react-hot-toast";

// import { useDispatch } from "react-redux";
// import {
//   getBrand,
//   setIsUpdate,
//   setBrandSelected,
// } from "../../../redux/features/brandSlice";

const TableButtonAction = ({ name, row, getData, onOpenModalUpdate }) => {
  // const dispatch = useDispatch();

  const handleDelete = async () => {
    const delete_data = deleteCategoriaProducto(row.values.id);

    await toast.promise(delete_data, {
      loading: "Eliminando...",
      success: "Eliminado con éxito",
      error: "Error al eliminar la marca",
    });

    getData();
  };

  const handleUpdateBrand = () => {
    // const { id: brand_id } = row.values;
    // dispatch(getBrand(brand_id));
    // dispatch(setIsUpdate(true));
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
