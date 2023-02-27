import { pool } from "../db.js";

export const getProductos = async (req, res) => {
  try {
    const [rows] = await pool.query(
      "SELECT * FROM categoria_producto WHERE activo = 1"
    );
    res.json(rows);
  } catch (error) {
    return res.status(500).json({ message: "Something goes wrong" });
  }
};

export const getProducto = async (req, res) => {
  try {
    const { id } = req.params;
    const [rows] = await pool.query(
      "SELECT * FROM categoria_producto WHERE id = ?",
      [id]
    );

    if (rows.length <= 0) {
      return res.status(404).json({ message: "Employee not found" });
    }

    res.json(rows[0]);
  } catch (error) {
    return res.status(500).json({ message: "Something goes wrong" });
  }
};

export const deleteProducto = async (req, res) => {
  try {
    const { id } = req.params;
    const [rows] = await pool.query(
      // DELETE FROM categoria_producto WHERE id = ?
      "UPDATE categoria_producto SET activo = 0 WHERE id = ?",
      [id]
    );

    if (rows.affectedRows <= 0) {
      return res.status(404).json({ message: "Employee not found" });
    }

    res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: "Something goes wrong" });
  }
};

export const createProducto = async (req, res) => {
  try {
    const { description, categoria } = req.body;
    const [rows] = await pool.query(
      "INSERT INTO categoria_producto (description, categoria) VALUES (?, ?)",
      [description, categoria]
    );
    res.status(201).json({ id: rows.insertId, description, categoria });
  } catch (error) {
    return res.status(500).json({ message: "Something goes wrong" });
  }
};

export const updateProducto = async (req, res) => {
  try {
    const { id } = req.params;
    const { description, categoria } = req.body;

    const [result] = await pool.query(
      "UPDATE categoria_producto SET description = IFNULL(?, description), categoria = IFNULL(?, categoria) WHERE id = ?",
      [description, categoria, id]
    );

    if (result.affectedRows === 0)
      return res.status(404).json({ message: "Employee not found" });

    const [rows] = await pool.query(
      "SELECT * FROM categoria_producto WHERE id = ?",
      [id]
    );

    res.json(rows[0]);
  } catch (error) {
    return res.status(500).json({ message: "Something goes wrong" });
  }
};
