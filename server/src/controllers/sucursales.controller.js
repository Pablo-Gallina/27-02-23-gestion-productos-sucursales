import { pool } from "../db.js";

export const getSucursales = async (req, res) => {
  try {
    const [rows] = await pool.query(
      "SELECT * FROM sucursales WHERE activo = 1"
    );
    res.json(rows);
  } catch (error) {
    return res.status(500).json({ message: "Something goes wrong" });
  }
};

export const getSucursal = async (req, res) => {
  try {
    const { id } = req.params;
    const [rows] = await pool.query("SELECT * FROM sucursales WHERE id = ?", [
      id,
    ]);

    if (rows.length <= 0) {
      return res.status(404).json({ message: "Employee not found" });
    }

    res.json(rows[0]);
  } catch (error) {
    return res.status(500).json({ message: "Something goes wrong" });
  }
};

export const deleteSucursal = async (req, res) => {
  try {
    const { id } = req.params;
    const [rows] = await pool.query(
      // DELETE FROM sucursales WHERE id = ?
      "UPDATE sucursales SET activo = 0 WHERE id = ?",
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

export const createSucursal = async (req, res) => {
  try {
    const { correo, departamento, municipio, telefono, direccion } = req.body;
    const [rows] = await pool.query(
      "INSERT INTO sucursales (correo, departamento, municipio, telefono, direccion) VALUES (?, ?, ?, ?, ?)",
      [correo, departamento, municipio, telefono, direccion]
    );
    res.status(201).json({
      id: rows.insertId,
      correo,
      departamento,
      municipio,
      telefono,
      direccion,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Something goes wrong" });
  }
};

export const updateSucursal = async (req, res) => {
  try {
    const { id } = req.params;
    const { correo, departamento, municipio, telefono, direccion } = req.body;

    const [result] = await pool.query(
      "UPDATE sucursales SET correo = IFNULL(?, correo), departamento = IFNULL(?, departamento), municipio = IFNULL(?, municipio), telefono = IFNULL(?, telefono), direccion = IFNULL(?, direccion) WHERE id = ?",
      [correo, departamento, municipio, telefono, direccion, id]
    );

    if (result.affectedRows === 0)
      return res.status(404).json({ message: "Employee not found" });

    const [rows] = await pool.query("SELECT * FROM sucursales WHERE id = ?", [
      id,
    ]);

    res.json(rows[0]);
  } catch (error) {
    return res.status(500).json({ message: "Something goes wrong" });
  }
};
