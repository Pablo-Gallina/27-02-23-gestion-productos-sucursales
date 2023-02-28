import React from "react";

import { Input, InputGroup, InputRightElement } from "@chakra-ui/input";
import { Image } from "@chakra-ui/react";

import {
  FormControl,
  FormErrorMessage,
  FormLabel,
} from "@chakra-ui/form-control";

import ErrorIcon from "../../../assets/img/icons/error-icon.svg";
import useZIndex from "../../../hooks/useZIndex.jsx";

const InputFormValidation = ({
  placeholder,
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
  validation = true,
  minLength = 4,
  maxLength = 20,
}) => {
  const { zIndex, onFocus, onBlur } = useZIndex();
  return (
    <FormControl isInvalid={errors[key_name]}>
      {label && <FormLabel>{label}</FormLabel>}
      <InputGroup>
        <Input
          minHeight="48px"
          autoComplete="off"
          id={key_name}
          placeholder={placeholder}
          borderColor={
            error ? "brand.error" : success ? "brand.success" : "brand.gray"
          }
          _placeholder={{ color: "brand.gray" }}
          focusBorderColor={
            errors[key_name]
              ? "brand.error"
              : success
              ? "brand.success"
              : "secondary.500"
          }
          style={{
            boxSizing: "border-box",
          }}
          disabled={disabled}
          _hover={{
            borderColor: error
              ? "brand.error"
              : success
              ? "brand.success"
              : "brand.gray",
          }}
          _disabled={{
            backgroundColor: "brand.disabled",
            cursor: "not-allowed",
            _hover: { borderColor: "brand.gray" },
          }}
          {...register(
            key_name,
            validation
              ? {
                  required: "This is required",
                  minLength: {
                    value: minLength,
                    message: `Minimum length should be ${minLength}`,
                  },
                  maxLength: {
                    value: maxLength,
                    message: `Maximum length should be ${maxLength}`,
                  },
                }
              : {}
          )}
          type={type}
          marginBottom={marginBottom}
          marginTop={marginTop}
          onFocus={onFocus}
          onBlur={onBlur}
        />
        {errors[key_name] && errors[key_name].message && (
          <InputRightElement
            zIndex={zIndex}
            children={
              <Image
                src={ErrorIcon}
                alt={"icon"}
                width="19px"
                marginRight="7px"
                marginTop="7px"
              />
            }
          />
        )}
        {/* {success && (
          <InputRightElement
            zIndex={1}
            children={
              <Image
                src={SuccessIcon}
                alt={"icon"}
                width="19px"
                marginRight="7px"
                marginTop="7px"
              />
            }
          />
        )} */}
      </InputGroup>
      <FormErrorMessage>
        {errors[key_name] && errors[key_name].message}
      </FormErrorMessage>
    </FormControl>
  );
};

export default InputFormValidation;
