import express from "express";
import morgan from "morgan";
import cors from "cors";

import categoriaProductosRoutes from "./routes/categoria_productos.routes.js";
import sucursalesRoutes from "./routes/sucursales.routes.js";
import indexRoutes from "./routes/index.routes.js";

const app = express();

// Middlewares
app.use(morgan("dev"));
app.use(express.json());
app.use(cors());

// Routes
app.use("/", indexRoutes);
app.use("/api", categoriaProductosRoutes);
app.use("/api", sucursalesRoutes);

app.use((req, res, next) => {
  res.status(404).json({ message: "Not found" });
});

export default app;
