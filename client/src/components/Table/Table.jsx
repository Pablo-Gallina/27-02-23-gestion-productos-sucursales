import React from "react";

import {
  Box,
  Fade,
  Skeleton,
  Table as ChakraTable,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";

import { useTable } from "react-table";

const Table = ({ data, columns, loading }) => {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

  return (
    <>
      {loading ? (
        <>
          <Fade in={loading}>
            <Skeleton
              boxShadow="card"
              borderRadius="10px"
              startColor="brand.disabled"
              endColor="brand.gray3"
            >
              <Box height="5vh" mb={2}></Box>
            </Skeleton>
            <Skeleton
              boxShadow="card"
              borderRadius="10px"
              flex={1}
              startColor="brand.disabled"
              endColor="brand.gray3"
            >
              <Box height="68vh"></Box>
            </Skeleton>
          </Fade>
        </>
      ) : (
        <Box overflow="auto">
          <Fade
            in={!loading}
            transition={{ enter: { duration: 1 }, exit: { duration: 1 } }}
          >
            <ChakraTable {...getTableProps()}>
              <Thead>
                {headerGroups.map((headerGroup) => (
                  <Tr {...headerGroup.getHeaderGroupProps()}>
                    {headerGroup.headers.map((column) => (
                      <Th
                        color={"brand.black"}
                        textTransform="inherit"
                        {...column.getHeaderProps()}
                      >
                        {column.render("Header")}
                      </Th>
                    ))}
                  </Tr>
                ))}
              </Thead>

              <Tbody {...getTableBodyProps()}>
                {rows.map((row) => {
                  prepareRow(row);
                  return (
                    <Tr
                      color="brand.black_light"
                      {...row.getRowProps()}
                      _hover={{ bg: "brand.disabled" }}
                    >
                      {row.cells.map((cell) => {
                        return (
                          <Td {...cell.getCellProps()}>
                            {cell.render("Cell")}
                          </Td>
                        );
                      })}
                    </Tr>
                  );
                })}
              </Tbody>
            </ChakraTable>
          </Fade>
        </Box>
      )}
    </>
  );
};

export default Table;
