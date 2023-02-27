import React from "react";
import { Routes, Route } from "react-router-dom";

// Verifiacion de rutas publicas que no se muestran al estar logueado
import PublicRouter from "./config/PublicRouter";

// pages
import Payment from "../pages/PaymentPage";

const PublicRoutes = () => {
  /* RUTAS PUBLICAS */
  return (
    <>
      {/* <Navbar /> */}
      {/* Login, acceso si no se esta logueado */}
      <Routes>
        <Route
          end
          path="/"
          element={
            <PublicRouter>
              <Payment />
            </PublicRouter>
          }
        />
        {/* Register, acceso si no se esta logueado */}

        <Route path="*" element={<h2>404</h2>} />
      </Routes>
    </>
  );
};

export default PublicRoutes;
