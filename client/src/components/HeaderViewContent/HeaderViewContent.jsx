import React from "react";

import { Flex } from "@chakra-ui/react";

import Button from "../Button";
import Title from "../Title/Title";

export const HeaderViewContent = ({ titleView, textButton, onOpen }) => {
  return (
    <Flex
      position="sticky"
      top="0"
      bg="white"
      zIndex="1"
      justifyContent="space-between"
      alignItems={{ base: "start", md: "center" }}
      mb="10"
      flexDirection={{ base: "column", sm: "row" }}
    >
      <Title content={titleView} black />
      <Flex gap={2}>
        <Button text={textButton} secondary onClick={onOpen} />
      </Flex>
    </Flex>
  );
};
