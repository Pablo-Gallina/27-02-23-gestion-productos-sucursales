import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Image,
} from "@chakra-ui/react";
import React from "react";
import { Controller } from "react-hook-form";
import Select from "react-select";
import { theme } from "../../../theme";
import ErrorIcon from "../../../assets/img/icons/error-icon.svg";

export const customStyles = (error) => {
  if (error) {
    console.log();
  }

  const error_color = theme.colors.brand.error;
  const primary_color = theme.colors.brand.primary;
  const white = theme.colors.brand.white;
  const disabled_color = theme.colors.brand.disabled;
  const black_color = theme.colors.brand.black;
  const gray_color = theme.colors.brand.gray;
  const border_color = error ? error_color : primary_color;

  return {
    option: (provided, state) => {
      return {
        ...provided,
        color: state.isFocused ? white : black_color,
        backgroundColor: state.isFocused ? primary_color : white,
        minHeight: "48px",
        paddingTop: "13px",
        ":active": {
          backgroundColor: "#0740A3",
          color: white,
        },
      };
    },
    control: (provided, state) => ({
      ...provided,
      backgroundColor: state.isDisabled ? disabled_color : white,

      borderWidth: "1px",
      borderColor: state.isFocused || error ? border_color : gray_color,
      outline: state.isFocused || error ? `1px solid ${border_color}` : "none",
      height: 48,
      minWidth: 100,
      width: "100%",
      boxShadow: "none",
      ":hover": {
        borderColor: state.isFocused || error ? border_color : gray_color,
      },
      transition: "all 0.2s",
    }),

    singleValue: (provided, state) => {
      const opacity = state.isDisabled ? 0.5 : 1;
      const transition = "opacity 300ms";
      const color = state.isDisabled ? "#000" : black_color;
      return { ...provided, opacity, transition, color };
    },
    placeholder: (defaultStyles) => {
      return {
        ...defaultStyles,
        color: gray_color,
      };
    },
  };
};

const InputSelect = ({
  placeholder,
  options,
  disabled,
  error = false,
  success = false,
  errors = "",
  register,
  key_name,
  label = "",
  type = "text",
  marginBottom = "",
  marginTop = "",
  control,
  validation = false,
  defaultValue = true,
  defaultValueFirts = false,
  defaultOptionValue = null,
  lableEmpty = false,
  handleChange = () => {},
}) => {
  const handleChangeType = (option) => {
    handleChange(option);
  };

  return (
    <FormControl isInvalid={errors[key_name]} position="relative">
      {(label || lableEmpty) && (
        <FormLabel color={lableEmpty ? "white" : ""}>
          {lableEmpty ? "." : label}
        </FormLabel>
      )}
      <Controller
        control={control}
        name={key_name}
        rules={
          validation
            ? {
                required: "This is required",
              }
            : {}
        }
        render={({ field: { onChange, value, ref, name } }) => (
          <Select
            key={defaultOptionValue}
            className={"react-select"}
            classNamePrefix={"react-select"}
            placeholder={placeholder}
            options={options}
            onChange={(val) => {
              onChange(val.id);
              handleChangeType(val);
            }}
            styles={customStyles(errors && errors[key_name])}
            defaultValue={
              defaultOptionValue ? options[defaultOptionValue] : null
            }
            isDisabled={disabled}
          />
        )}
      />
      {errors[key_name] && errors[key_name].message && (
        <Image
          src={ErrorIcon}
          alt={"icon"}
          width="19px"
          marginRight="7px"
          marginTop="7px"
          position={"absolute"}
          top={10}
          right={1}
        />
      )}
      <FormErrorMessage>
        {errors[key_name] && errors[key_name].message}
      </FormErrorMessage>
    </FormControl>
  );
};

export default InputSelect;
