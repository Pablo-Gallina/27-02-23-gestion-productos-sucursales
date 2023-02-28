import React from "react";
import { useTypeDevice } from "../../hooks/useTypeDevice";

import {
  Flex,
  Grid,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import Title from "../Title";
import Button from "../Button";

const ModalForm = ({
  children,
  titleModal,
  isOpen,
  onClose,
  handleSubmit,
  onSubmit,
  textButtonClose = "Cancelar",
  textButtonSubmit = "Guardar",
  loadingButtonSubmit = false,
  imageIconTitle = null,
  isCentered = true,
}) => {
  const { isMobile } = useTypeDevice();
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      size={{ base: "full", md: "6xl" }}
      isCentered={isCentered === false ? isCentered : !isMobile}
    >
      <ModalOverlay
        bg="rgba(0, 0, 0, 0.2)"
        backdropFilter="auto"
        backdropBlur="3px"
        boxShadow="0px 0px 0px 1000px rgba(0, 0, 0, 0.2)"
      />
      <ModalContent paddingTop={3} paddingBottom={5} paddingX={5}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <ModalHeader mb={5}>
            <Flex alignItems="center" gap="3">
              {imageIconTitle && <Image src={imageIconTitle} width="40px" />}
              <Title content={titleModal} black />
            </Flex>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Grid
              templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}
              rowGap={8}
              columnGap={20}
            >
              {children}
            </Grid>
          </ModalBody>

          <ModalFooter
            display="flex"
            flexDirection={{ base: "column-reverse", md: "row" }}
            justifyContent="space-between"
            mt="12"
            gap={{ base: 4, md: 0 }}
          >
            <Button text={textButtonClose} secondary onClick={onClose} />
            <Button
              text={textButtonSubmit}
              primary
              type="submit"
              isLoading={loadingButtonSubmit}
            />
          </ModalFooter>
        </form>
      </ModalContent>
    </Modal>
  );
};

export default ModalForm;
