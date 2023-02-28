import React, { useEffect } from "react";
import { useForm } from "react-hook-form";

// import { useDispatch, useSelector } from "react-redux";

import ModalForm from "../../../components/ModalForm";
import CategoriaProductoForm from "./CategoriaProductoForm";
import { Skeleton } from "@chakra-ui/react";
import { createCategoriaProducto } from "../../../services/categoriaProducto";
import { toast } from "react-hot-toast";

const CreateUpdate = ({ isOpen, onClose, getData }) => {
  // const brandSelected = useSelector(selectBrandDataUpdate);
  // const loading = useSelector(selectLoadingupdateBrand);
  // const isUpdate = useSelector(selectIsUpdate);
  const isUpdate = false;
  const loading = false;
  // const dispatch = useDispatch();
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
    const create = createCategoriaProducto(data);

    await toast.promise(create, {
      loading: "Creando...",
      success: "Categoría creada con éxito",
      error: "Error al crear la categoría",
    });

    onClose();

    await getData();
    // if (isUpdate) {
    //   dispatch(updateBrand({ ...data, onClose, reset }));
    // } else {
    //   dispatch(createBrand({ ...data, onClose, reset }));
    // }
  };

  // useEffect(() => {
  //   if (isUpdate) {
  //     reset(brandSelected);
  //   } else {
  //     reset({});
  //   }
  // }, [isUpdate, brandSelected]);

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
        // loadingButtonSubmit={loading_save}
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
