import { Tab as TabChakra } from "@chakra-ui/react";

const Tab = ({ children, onClick = () => {} }) => {
  return (
    <TabChakra
      w="200px"
      h="33px"
      borderRadius="6"
      color="brand.gray"
      _selected={{
        bg: "secondary.50",
        color: "secondary.500",
      }}
      _hover={{
        color: "secondary.500",
      }}
      onClick={onClick}
    >
      {children}
    </TabChakra>
  );
};

export default Tab;
