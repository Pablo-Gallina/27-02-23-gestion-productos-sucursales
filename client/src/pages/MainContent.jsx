import { useState, lazy, Suspense } from "react";

import { Box, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";

import Tab from "../components/TabPane/Tab";
import TabList from "../components/TabPane/TabList";
import Spinner from "../components/Spinner";

const CategoriaProducto = lazy(() => import("./CategoriaProducto/List"));
// const Brands = lazy(() => import("./Brands/List"));
// const Variants = lazy(() => import("./Variants/List"));

const MainContent = () => {
  const [module, setModule] = useState({
    categories: true,
    brands: false,
    variants: false,
  });

  const { categories, brands, variants } = module;

  return (
    <Box mx={{ base: "0", md: "20vw" }} mt="8">
      {/* Tab Pane */}
      <Tabs variant="unstyled">
        <TabList>
          <Tab
            onClick={() =>
              setModule({
                categories: true,
                brands: false,
                variants: false,
              })
            }
          >
            Categ. productos
          </Tab>
          <Tab
            onClick={() =>
              setModule({
                categories: false,
                brands: true,
                variants: false,
              })
            }
          >
            Sucursales
          </Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            {categories && (
              <Suspense fallback={<Spinner />}>
                <CategoriaProducto />
              </Suspense>
            )}
          </TabPanel>
          <TabPanel>
            {brands && (
              <Suspense fallback={<Spinner />}>
                {/* <Brands /> */}
                <h1 className="text-2xl font-bold">Marcas</h1>
              </Suspense>
            )}
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};

export default MainContent;
