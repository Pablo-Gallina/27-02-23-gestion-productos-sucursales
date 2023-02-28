import React, { useEffect, useState } from "react";

import InputFormValidation from "../../../components/Inputs/InputFormValidation/InputFormValidation";
import InputSelect from "../../../components/Inputs/InputSelect/InputSelect";
import {
  departamentosOptions,
  municipiosOptions,
} from "../../../utils/constantes";

const SucursalesForm = ({
  departamento,
  municipio,
  errors,
  register,
  control,
}) => {
  const [departamentoSelect, setDepartamentoSelect] = useState(null);
  const [municipioSelect, setMunicipioSelect] = useState(null);

  const handleChange = (e) => {
    setDepartamentoSelect(e ? e.id : null);
  };

  useEffect(() => {
    if (departamento >= 0 && departamento) {
      const id = departamentosOptions[departamento - 1].id;
      setDepartamentoSelect(id);
    }
  }, [departamento]);

  useEffect(() => {
    if (municipio && departamentoSelect) {
      console.log("municipio", municipio);

      // id = index en el array de municipios
      const id = municipiosOptions[departamentoSelect]?.findIndex(
        (m) => m.id === municipio
      );

      console.log("id", id);
      setMunicipioSelect(id);
    }
  }, [municipio, departamentoSelect]);

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
        options={departamentosOptions}
        defaultOptionValue={departamento - 1}
        placeholder="Departamento"
        errors={errors}
        register={register}
        control={control}
        key_name="departamento"
        label="Selecciona el departamento de la sucursal"
        handleChange={handleChange}
        // disabled={true}
        validation
      />

      <InputSelect
        options={municipiosOptions[departamentoSelect]}
        defaultOptionValue={municipioSelect}
        placeholder="Municipio"
        errors={errors}
        register={register}
        control={control}
        key_name="municipio"
        label="Selecciona el municipio de la sucursal"
        disabled={!departamentoSelect}
        validation
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
