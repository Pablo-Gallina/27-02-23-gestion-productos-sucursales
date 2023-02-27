CREATE DATABASE IF NOT EXISTS companydb;

USE companydb;

CREATE TABLE categoria_producto (
  id INT(11) NOT NULL AUTO_INCREMENT,
  description VARCHAR(255) DEFAULT NULL,
  categoria VARCHAR(60) DEFAULT NULL,
  creado TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  modificado TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  activo TINYINT(1) NOT NULL DEFAULT '1',
  PRIMARY KEY(id)
);

CREATE TABLE categoria_sucursales (
  id INT(11) NOT NULL AUTO_INCREMENT,
  correo VARCHAR(60) DEFAULT NULL,
  departamento VARCHAR(60) DEFAULT NULL,
  municipio VARCHAR(60) DEFAULT NULL,
  telefono VARCHAR(20) DEFAULT NULL,
  direccion VARCHAR(60) DEFAULT NULL,
  creado TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  modificado TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  activo TINYINT(1) NOT NULL DEFAULT '1',
  PRIMARY KEY(id)
);

DESCRIBE employee;

INSERT INTO employee values 
  (1, 'Ryan Ray', 20000),
  (2, 'Joe McMillan', 40000),
  (3, 'John Carter', 50000);

SELECT * FROM employee;