import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

// import { useDispatch, useSelector } from "react-redux";

import ModalForm from "../../../components/ModalForm";
import SucursalesForm from "./SucursalesForm";
import { Skeleton } from "@chakra-ui/react";
import {
  createSucursal,
  getSucursalById,
  patchSucursal,
} from "../../../services/sucursales";
import { toast } from "react-hot-toast";

const CreateUpdate = ({ isOpen, onClose, getData, isUpdate, dataUpdate }) => {
  const [loading_save, setLoadingSave] = useState(false);
  const [loading, setLoading] = useState(false);

  const modalTitle = isUpdate ? "Editar sucursal" : "Nueva sucursal";
  const buttonTitle = isUpdate ? "Actualizar sucursal" : "Agregar sucursal";

  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    if (isUpdate) {
      setLoadingSave(true);
      const update = patchSucursal(dataUpdate.id, data);

      await toast.promise(update, {
        loading: "Actualizando...",
        success: "sucursal actualizada con éxito",
        error: "Error al actualizar la sucursal",
      });

      setLoadingSave(false);
    } else {
      const create = createSucursal(data);

      await toast.promise(create, {
        loading: "Creando...",
        success: "sucursal creada con éxito",
        error: "Error al crear la sucursal",
      });
    }

    onClose();

    await getData();
  };

  const getDataUpdate = async () => {
    setLoading(true);
    const data = await getSucursalById(dataUpdate.id);

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
          <SucursalesForm
            errors={errors}
            register={register}
            control={control}
          />
        )}
      </ModalForm>
    </>
  );
};

export default CreateUpdate;
