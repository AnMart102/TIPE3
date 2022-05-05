-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 04-05-2022 a las 19:27:21
-- Versión del servidor: 10.4.18-MariaDB
-- Versión de PHP: 8.0.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `tipecartagena`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `administrador`
--

CREATE TABLE `administrador` (
  `Rut` varchar(10) NOT NULL,
  `Nombre` varchar(50) NOT NULL,
  `ApellidoP` varchar(100) NOT NULL,
  `ApellidoM` varchar(100) NOT NULL,
  `Correo` varchar(100) NOT NULL,
  `Contrasena` varchar(16) NOT NULL,
  `Telefono` varchar(13) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `administrador`
--

INSERT INTO `administrador` (`Rut`, `Nombre`, `ApellidoP`, `ApellidoM`, `Correo`, `Contrasena`, `Telefono`) VALUES
('20415814-2', 'Fernando', 'Vargas', 'Castillo', 'Fernando.vargas@alumnos.uv.cl', '1234', NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categorias`
--

CREATE TABLE `categorias` (
  `Rut` varchar(10) DEFAULT NULL,
  `Categoria` enum('Artesania','Comida','Ropa y Accesorios','Decoracion','Muebleria') DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `formulario_solicitud`
--

CREATE TABLE `formulario_solicitud` (
  `Nombre_pyme` varchar(100) NOT NULL,
  `Descripcion` varchar(1000) NOT NULL,
  `RSH` varchar(100) DEFAULT NULL,
  `Medio_pago` varchar(100) DEFAULT NULL,
  `Medio_entrega` varchar(100) DEFAULT NULL,
  `Empresa_registrada` enum('Si','No') NOT NULL,
  `Actividades_SII` varchar(100) DEFAULT NULL,
  `Patente_permiso` varchar(100) DEFAULT NULL,
  `R_sanitaria` varchar(100) DEFAULT NULL,
  `estado_sol` enum('En espera','Aprobado','Denegado','Modificacion') DEFAULT NULL,
  `Sitio_web` varchar(200) DEFAULT NULL,
  `Facebook` varchar(100) DEFAULT NULL,
  `Whatsapp` varchar(100) DEFAULT NULL,
  `Instagram` varchar(100) DEFAULT NULL,
  `Comentario_admin` varchar(1000) DEFAULT NULL,
  `Rut` varchar(12) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuario`
--

CREATE TABLE `usuario` (
  `Rut` varchar(10) NOT NULL,
  `Nombre` varchar(50) NOT NULL,
  `ApellidoP` varchar(100) NOT NULL,
  `ApellidoM` varchar(100) NOT NULL,
  `Correo` varchar(100) NOT NULL,
  `Contrasena` varchar(16) NOT NULL,
  `Telefono` varchar(13) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `administrador`
--
ALTER TABLE `administrador`
  ADD PRIMARY KEY (`Rut`);

--
-- Indices de la tabla `categorias`
--
ALTER TABLE `categorias`
  ADD KEY `Rut` (`Rut`);

--
-- Indices de la tabla `formulario_solicitud`
--
ALTER TABLE `formulario_solicitud`
  ADD KEY `formulario_solicitud_ibfk_1` (`Rut`);

--
-- Indices de la tabla `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`Rut`);

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `categorias`
--
ALTER TABLE `categorias`
  ADD CONSTRAINT `categorias_ibfk_1` FOREIGN KEY (`Rut`) REFERENCES `usuario` (`Rut`) ON DELETE CASCADE;

--
-- Filtros para la tabla `formulario_solicitud`
--
ALTER TABLE `formulario_solicitud`
  ADD CONSTRAINT `formulario_solicitud_ibfk_1` FOREIGN KEY (`Rut`) REFERENCES `usuario` (`Rut`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
