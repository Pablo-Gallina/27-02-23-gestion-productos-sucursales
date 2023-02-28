import React, { useEffect, useState } from "react";

import { useDisclosure } from "@chakra-ui/react";
import { HeaderViewContent } from "../../../components/HeaderViewContent/HeaderViewContent";

import Table from "../../../components/Table";
import CreateUpdate from "../CreateUpdate/CreateUpdate";
import { TableButtonAction } from "../../../components/TableButton";
import { getSucursales } from "../../../services/sucursales";

const SucursalesList = () => {
  const [sucursales, setSucursales] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isUpdate, setIsUpdate] = useState(false);
  const [dataUpdate, setDataUpdate] = useState({});

  const columns = React.useMemo(
    () => [
      {
        Header: "Correo",
        accessor: "correo",
      },
      {
        Header: "dirección",
        accessor: "direccion",
      },

      {
        Header: "telefono",
        accessor: "telefono",
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
    onOpen();
  };

  const getData = async () => {
    setLoading(true);
    const data = await getSucursales();
    setSucursales(data);
    setLoading(false);
  };

  useEffect(() => {
    getData();

    return () => {
      setSucursales([]);
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

      {/* Title and create button */}
      <HeaderViewContent
        titleView="Sucursales"
        textButton="Nueva Sucursal"
        onOpen={onOpenModal}
      />

      {/* Category table */}
      <Table columns={columns} data={sucursales} loading={loading} />
    </>
  );
};

export default SucursalesList;
