import React from "react";
import { Routes, Route } from "react-router-dom";

import PublicRoutes from "./PublicRoutes";

const Rutas = () => {
  return (
    <Routes>
      <Route path="*" element={<PublicRoutes />} />
    </Routes>
  );
};

export default Rutas;
