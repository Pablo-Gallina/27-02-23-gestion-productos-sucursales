import React from "react";
import { Button as ButtonChakra } from "@chakra-ui/button";

const Button = ({
  text = "Button",
  primary = false,
  secondary = false,
  outline = false,
  icon = false,
  alt = "icon",
  disabled = false,
  type = "button",
  width = "200px",
  height = "48px",
  isLoading = false,
  mr = "0",
  onClick = () => {},
}) => {
  // Custom button

  const hover_style = {
    bg: "brand.warning",
  };
  if (secondary) {
    hover_style.bg = "secondary.800";
  }

  if (outline) {
    hover_style.bg = "secondary.500";
    hover_style.color = "white";
  }
  return (
    <ButtonChakra
      height={height}
      width={{ base: "100%", md: width }}
      transition="all 0.3s cubic-bezier(.08,.52,.52,1)"
      border={outline && "2px"}
      borderRadius="6px"
      fontSize="15px"
      fontWeight="semibold"
      mr={mr}
      bg={
        primary
          ? "primary.500"
          : secondary
          ? "secondary.500"
          : outline
          ? "transparent"
          : ""
      }
      borderColor="secondary.500"
      color={
        primary
          ? "brand.white"
          : secondary
          ? "brand.white"
          : outline
          ? "secondary.500"
          : ""
      }
      leftIcon={icon && <img src={icon} alt={alt} />}
      _hover={hover_style}
      _active={{
        bg: primary
          ? "brand.warning"
          : secondary
          ? "secondary.300"
          : outline
          ? "secondary.300"
          : "",
        transform: "scale(0.98)",
        borderColor: "secondary.300",
      }}
      disabled={disabled || isLoading}
      type={type}
      isLoading={isLoading}
      loadingText="Verificando..."
      onClick={onClick}
    >
      {text}
    </ButtonChakra>
  );
};

export default Button;
