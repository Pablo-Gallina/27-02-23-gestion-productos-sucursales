import React, { useState } from "react";
import { Button as ButtonChakra } from "@chakra-ui/button";
import { Image, Menu, MenuButton } from "@chakra-ui/react";
import MenuTableIcon from "../../assets/img/icons/menu-table-icon.svg";

const TableButton = ({
  disabled = false,
  width = "48px",
  height = "10px",
  isLoading = false,
  children,
}) => {
  const [isHover, setIsHover] = useState(false);

  return (
    <Menu>
      {({ isOpen }) => (
        <>
          <MenuButton
            as={ButtonChakra}
            maxHeight={height}
            maxWidth={width}
            transition="all 0.3s cubic-bezier(.08,.52,.52,1)"
            borderRadius="6px"
            bg={"transparent"}
            borderColor="secondary.500"
            leftIcon={
              <Image
                src={MenuTableIcon}
                style={{
                  filter:
                    isHover || isOpen ? "brightness(100%) invert(1)" : "none",
                }}
                alt="menu-icon"
                ml="2"
              />
            }
            _hover={{ bg: "brand.disabled" }}
            _active={{
              bg: "brand.disabled",
            }}
            disabled={disabled || isLoading}
            isLoading={isLoading}
            loadingText="Verificando..."
            onMouseOver={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
          />
          {children}
        </>
      )}
    </Menu>
  );
};

export default TableButton;
