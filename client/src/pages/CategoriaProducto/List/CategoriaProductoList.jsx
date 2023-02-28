import React, { useEffect, useState } from "react";

import { useDisclosure } from "@chakra-ui/react";
import { HeaderViewContent } from "../../../components/HeaderViewContent/HeaderViewContent";

// import CreateUpdate from "../CreateUpdate/CreateUpdate";

import Table from "../../../components/Table";
import { getCategoriaProductos } from "../../../services/categoriaProducto";
// import { role_name } from "../../../../Utils/constants";
// import { TableButtonBrands } from "../../../../components/Buttons/TableButton";
// import ModalAlert from "../../../../components/Modal/ModalAlert";

const CategoriaProductoList = () => {
  const [categoriaProducto, setCategoriaProducto] = useState([]);
  const [loading, setLoading] = useState(false);

  const columns = React.useMemo(
    () => [
      {
        Header: "Categoría",
        accessor: "categoria",
      },
      {
        Header: "Descripción",
        accessor: "description",
      },

      // {
      //   Header: "",
      //   accessor: "id",
      //   Cell: ({ row }) => (
      //     <TableButtonBrands
      //       row={row}
      //       onClick={onOpen2}
      //       onOpenModalUpdate={onOpen}
      //     />
      //   ),
      // },
    ],
    []
  );

  // modal create update brand
  const { isOpen, onOpen, onClose } = useDisclosure();

  const onOpenModal = (row) => {
    dispatch(setIsUpdate(false));
    onOpen();
  };

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      const data = await getCategoriaProductos();
      setCategoriaProducto(data);
      setLoading(false);
    };

    getData();

    return () => {
      setCategoriaProducto([]);
    };
  }, []);

  return (
    <>
      {/* Modal CreateUpdate */}
      {/* <CreateUpdate isOpen={isOpen} onOpen={onOpen} onClose={onClose} /> */}

      {/* Filter, searcher and create button */}
      <HeaderViewContent
        titleView="Categorías productos"
        textButton="Nueva categ. producto"
        onOpen={onOpenModal}
      />

      {/* Event table */}
      <Table columns={columns} data={categoriaProducto} loading={loading} />
    </>
  );
};

export default CategoriaProductoList;
