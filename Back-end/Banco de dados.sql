CREATE DATABASE IF NOT EXISTS db_registro;

USE db_registro;

CREATE TABLE tb_usuario (
id_usuario INT PRIMARY KEY AUTO_INCREMENT,
nome_usuario VARCHAR(50) NOT NULL,
senha_usuario INT NOT NULL,
email_usuario VARCHAR(100) NOT NULL
);