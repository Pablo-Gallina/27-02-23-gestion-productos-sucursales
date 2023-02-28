import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

// import { useDispatch, useSelector } from "react-redux";

import ModalForm from "../../../components/ModalForm";
import CategoriaProductoForm from "./CategoriaProductoForm";
import { Skeleton } from "@chakra-ui/react";
import {
  createCategoriaProducto,
  getCategoriaProductoById,
  patchCategoriaProducto,
} from "../../../services/categoriaProducto";
import { toast } from "react-hot-toast";

const CreateUpdate = ({ isOpen, onClose, getData, isUpdate, dataUpdate }) => {
  const [loading_save, setLoadingSave] = useState(false);
  const [loading, setLoading] = useState(false);

  const modalTitle = isUpdate ? "Editar Cat. Producto" : "Nueva Cat. Producto";
  const buttonTitle = isUpdate
    ? "Actualizar Cat. Producto"
    : "Agregar Cat. Producto";

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    if (isUpdate) {
      setLoadingSave(true);
      const update = patchCategoriaProducto(dataUpdate.id, data);

      await toast.promise(update, {
        loading: "Actualizando...",
        success: "Categoría actualizada con éxito",
        error: "Error al actualizar la categoría",
      });

      setLoadingSave(false);
    } else {
      const create = createCategoriaProducto(data);

      await toast.promise(create, {
        loading: "Creando...",
        success: "Categoría creada con éxito",
        error: "Error al crear la categoría",
      });
    }

    onClose();

    await getData();
  };

  const getDataUpdate = async () => {
    setLoading(true);
    const data = await getCategoriaProductoById(dataUpdate.id);

    setLoading(false);
    reset(data);
  };

  useEffect(() => {
    if (isUpdate) {
      getDataUpdate();
    }
  }, [isUpdate]);

  return (
    <>
      <ModalForm
        titleModal={modalTitle}
        isOpen={isOpen}
        onClose={onClose}
        handleSubmit={handleSubmit}
        onSubmit={onSubmit}
        textButtonClose="Cancelar"
        textButtonSubmit={buttonTitle}
        loadingButtonSubmit={loading_save}
      >
        {loading ? (
          <>
            <Skeleton
              height="80px"
              boxShadow="card"
              borderRadius="10px"
              startColor="brand.disabled"
              endColor="brand.gray3"
            />
            <Skeleton
              height="80px"
              boxShadow="card"
              borderRadius="10px"
              startColor="brand.disabled"
              endColor="brand.gray3"
            />
          </>
        ) : (
          <CategoriaProductoForm errors={errors} register={register} />
        )}
      </ModalForm>
    </>
  );
};

export default CreateUpdate;
