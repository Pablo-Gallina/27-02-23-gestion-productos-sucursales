import React from "react";
import { Text } from "@chakra-ui/react";

const Title = ({
  content,
  black = false,
  fontWeight = "bold",
  sizeBase = "4xl",
  smBase = "5xl",
}) => {
  return (
    <Text
      fontSize={{ base: sizeBase, sm: smBase }}
      color={black ? "brand.black" : "secondary.500"}
      fontWeight={fontWeight}
      as="h1"
    >
      {content}
    </Text>
  );
};

export default Title;
