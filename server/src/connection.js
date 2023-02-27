import { createPool } from "mysql2/promiselll";

export const pool = createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "companydb",
});
