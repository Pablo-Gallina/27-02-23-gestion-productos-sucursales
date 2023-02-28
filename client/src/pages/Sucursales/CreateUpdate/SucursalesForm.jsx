import React from "react";

import InputFormValidation from "../../../components/Inputs/InputFormValidation/InputFormValidation";
import InputSelect from "../../../components/Inputs/InputSelect/InputSelect";

const SucursalesForm = ({ errors, register, control }) => {
  return (
    <>
      <InputFormValidation
        placeholder="Ingresa el correo de la sucursal"
        errors={errors}
        register={register}
        key_name="correo"
        label="Escribe el correo de la sucursal"
      />

      <InputFormValidation
        placeholder="Ingresa la dirección de la sucursal"
        errors={errors}
        register={register}
        key_name="direccion"
        label="Escribe la dirección de la sucursal"
      />

      <InputSelect
        options={[
          { value: "1", label: "Activo" },
          { value: "2", label: "Inactivo" },
        ]}
        // defaultOptionValue={eventState}
        placeholder="Departamento"
        errors={errors}
        register={register}
        control={control}
        key_name="departamento"
        label="Selecciona el departamento de la sucursal"
        // disabled={true}
      />

      <InputSelect
        options={[
          { value: "1", label: "Activo" },
          { value: "2", label: "Inactivo" },
        ]}
        // defaultOptionValue={eventState}
        placeholder="Municipio"
        errors={errors}
        register={register}
        control={control}
        key_name="municipio"
        label="Selecciona el municipio de la sucursal"
        // disabled={true}
      />

      <InputFormValidation
        placeholder="Ingresa el teléfono de la sucursal"
        errors={errors}
        register={register}
        key_name="telefono"
        label="Escribe el teléfono de la sucursal"
        type="number"
      />
    </>
  );
};

export default SucursalesForm;
