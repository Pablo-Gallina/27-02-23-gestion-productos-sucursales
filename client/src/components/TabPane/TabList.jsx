import { TabList as TabListChakra } from "@chakra-ui/react";
import React from "react";

const TabList = ({ children, onClick = () => {} }) => {
  return (
    <TabListChakra
      boxShadow="tab"
      width="350px"
      marginX="auto"
      borderRadius="6"
      p="2"
      onClick={onClick}
    >
      {children}
    </TabListChakra>
  );
};

export default TabList;
