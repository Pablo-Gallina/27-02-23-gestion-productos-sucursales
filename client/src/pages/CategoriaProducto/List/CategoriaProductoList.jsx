import React, { useEffect, useState } from "react";

import { useDisclosure } from "@chakra-ui/react";
import { HeaderViewContent } from "../../../components/HeaderViewContent/HeaderViewContent";

import Table from "../../../components/Table";
import CreateUpdate from "../CreateUpdate/CreateUpdate";
import { getCategoriaProductos } from "../../../services/categoriaProducto";
import { TableButtonAction } from "../../../components/TableButton";

const CategoriaProductoList = () => {
  const [categoriaProducto, setCategoriaProducto] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isUpdate, setIsUpdate] = useState(false);
  const [dataUpdate, setDataUpdate] = useState({});

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

      {
        Header: "",
        accessor: "id",
        Cell: ({ row }) => (
          <TableButtonAction
            name="Categoría"
            row={row}
            getData={getData}
            onOpenModalUpdate={onOpen}
            setIsUpdate={setIsUpdate}
            setDataUpdate={setDataUpdate}
          />
        ),
      },
    ],
    []
  );

  // modal create update brand
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleCloseModal = () => {
    setIsUpdate(false);
    onClose();
  };

  const onOpenModal = (row) => {
    // dispatch(setIsUpdate(false));
    onOpen();
  };

  const getData = async () => {
    setLoading(true);
    const data = await getCategoriaProductos();
    setCategoriaProducto(data);
    setLoading(false);
  };

  useEffect(() => {
    getData();

    return () => {
      setCategoriaProducto([]);
    };
  }, []);

  return (
    <>
      {/* Modal CreateUpdate */}
      <CreateUpdate
        isOpen={isOpen}
        onOpen={onOpen}
        onClose={handleCloseModal}
        getData={getData}
        isUpdate={isUpdate}
        dataUpdate={dataUpdate}
      />

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
