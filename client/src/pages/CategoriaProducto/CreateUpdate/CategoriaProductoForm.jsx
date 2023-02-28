import React from "react";

import InputFormValidation from "../../../components/Inputs/InputFormValidation/InputFormValidation";

const CategoriaProductoForm = ({ errors, register }) => {
  return (
    <>
      <InputFormValidation
        placeholder="Ingresa la categoría"
        errors={errors}
        register={register}
        key_name="categoria"
        label="Escribe el nombre de la categoría"
      />

      <InputFormValidation
        placeholder="Ingresa la descripción de la categoría"
        errors={errors}
        register={register}
        key_name="description"
        label="Escribe la descripción de la categoría"
      />
    </>
  );
};

export default CategoriaProductoForm;
