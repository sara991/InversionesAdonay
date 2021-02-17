CREATE DATABASE inversionesadonay;

USE inversionesadonay;

-- TABLE USER


-- LINKS TABLE
CREATE TABLE usuarios (
  id INT(5) NOT NULL AUTO_INCREMENT PRIMARY KEY,
  correo VARCHAR(50) NOT NULL,
  password VARCHAR(60) NOT NULL,
  identidad INT(15) NULL,
  rtn INT(15) NULL,
  nombre VARCHAR(40) NULL,
  apellido VARCHAR(40) NULL,
  direccion VARCHAR(100) NULL,
  telefono INT(8) NULL,
  imagenes longblob NOT NULL,
  celular INT(8) NULL); 

CREATE TABLE roles (
  id INT(3) NOT NULL AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(50) NOT NULL);
