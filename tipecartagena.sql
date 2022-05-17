-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 17-05-2022 a las 08:29:27
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
-- Estructura de tabla para la tabla `archivos`
--

CREATE TABLE `archivos` (
  `id_archivo` int(11) NOT NULL,
  `archivo` mediumblob NOT NULL,
  `estado_archivo` enum('En espera','Aprobado','Denagado','Modificacion') NOT NULL,
  `id_formulario` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `archivos`
--

INSERT INTO `archivos` (`id_archivo`, `archivo`, `estado_archivo`, `id_formulario`) VALUES
(1, 0x686f6c612e706466, 'En espera', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categorias`
--

CREATE TABLE `categorias` (
  `id_categorias` int(11) NOT NULL,
  `categorias` enum('Artesania','Comida','Ropa y Accesorios','Decoracion','Muebleria') NOT NULL,
  `id_formulario` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `categorias`
--

INSERT INTO `categorias` (`id_categorias`, `categorias`, `id_formulario`) VALUES
(1, 'Ropa y Accesorios', 1),
(2, 'Decoracion', 2),
(3, 'Artesania', 3);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `direccion`
--

CREATE TABLE `direccion` (
  `Rut` varchar(10) NOT NULL,
  `calle` text NOT NULL,
  `numero` int(5) NOT NULL,
  `CasaDepto` enum('casa','depto') NOT NULL,
  `localidad` text NOT NULL,
  `PoblaVilla` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `direccion`
--

INSERT INTO `direccion` (`Rut`, `calle`, `numero`, `CasaDepto`, `localidad`, `PoblaVilla`) VALUES
('10243567-9', 'aguagua', 12, 'casa', 'santiago', 'Pobla choro');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `formulario_solicitud`
--

CREATE TABLE `formulario_solicitud` (
  `id_formulario` int(11) NOT NULL,
  `Nombre_pyme` varchar(100) NOT NULL,
  `Descripcion` varchar(1000) NOT NULL,
  `RSH` varchar(100) DEFAULT NULL,
  `Medio_pago` text NOT NULL,
  `Medio_entrega` enum('Delivery','Retiro en tienda') DEFAULT NULL,
  `Horario` text NOT NULL,
  `Empresa_registrada` enum('Si','No') NOT NULL,
  `Actividades_SII` varchar(100) DEFAULT NULL,
  `Patente_permiso` varchar(100) DEFAULT NULL,
  `R_sanitaria` varchar(100) DEFAULT NULL,
  `estado_sol` enum('En espera','Aprobado','Denegado','Modificacion') DEFAULT 'En espera',
  `Sitio_web` varchar(200) DEFAULT NULL,
  `Facebook` varchar(100) DEFAULT NULL,
  `Whatsapp` varchar(100) DEFAULT NULL,
  `Instagram` varchar(100) DEFAULT NULL,
  `Comentario_admin` varchar(1000) DEFAULT NULL,
  `tipoTienda` enum('Tienda Fisica','Tienda Virtual','Tienda Virtual y Fisica') NOT NULL,
  `Rut` varchar(12) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `formulario_solicitud`
--

INSERT INTO `formulario_solicitud` (`id_formulario`, `Nombre_pyme`, `Descripcion`, `RSH`, `Medio_pago`, `Medio_entrega`, `Horario`, `Empresa_registrada`, `Actividades_SII`, `Patente_permiso`, `R_sanitaria`, `estado_sol`, `Sitio_web`, `Facebook`, `Whatsapp`, `Instagram`, `Comentario_admin`, `tipoTienda`, `Rut`) VALUES
(1, 'RopasLindas', 'Ropa linda', NULL, 'Efectivo', NULL, '', 'Si', NULL, NULL, NULL, 'Aprobado', NULL, NULL, NULL, NULL, NULL, 'Tienda Fisica', '10243567-9'),
(2, 'DecoHogarCartagena', 'Tecnologia ventaaaas', NULL, '', NULL, '', 'No', NULL, NULL, NULL, 'Aprobado', NULL, NULL, NULL, NULL, NULL, 'Tienda Fisica', '13452388-6'),
(3, 'MiArte', 'Arte', NULL, 'Efectivo', 'Delivery', '', 'Si', NULL, NULL, NULL, 'En espera', NULL, NULL, NULL, NULL, NULL, 'Tienda Fisica', '10102312-9');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `subcat`
--

CREATE TABLE `subcat` (
  `id_subcat` int(11) NOT NULL,
  `sub_cat` text NOT NULL,
  `Estado_subcat` enum('En espera','Aprobado','Denegado','Modificacion') NOT NULL,
  `id_categorias` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `subcat`
--

INSERT INTO `subcat` (`id_subcat`, `sub_cat`, `Estado_subcat`, `id_categorias`) VALUES
(1, 'macarena', 'En espera', 1);

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
  `Telefono` varchar(13) NOT NULL,
  `Rol` text NOT NULL DEFAULT 'User'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `usuario`
--

INSERT INTO `usuario` (`Rut`, `Nombre`, `ApellidoP`, `ApellidoM`, `Correo`, `Contrasena`, `Telefono`, `Rol`) VALUES
('10102312-9', 'Jose', 'Loyola', 'Hidalgo', 'jlh@gmail.com', '1313', '912121222', 'User'),
('10232134-5', 'Facundo', 'Martinez', 'Gulle', 'facundo.martinez@alumnos.uv.cl', '1010', '967691027', 'Admin'),
('10243567-9', 'Luis ', 'Prat', 'Rojas', 'ehdicwbcehuwb@hotmail.com', '12345', '987654321', 'User'),
('13452388-6', 'Juan', 'Perez', 'Perez', 'perezperez1@gmail.com', '123458', '987654329', 'User');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `administrador`
--
ALTER TABLE `administrador`
  ADD PRIMARY KEY (`Rut`);

--
-- Indices de la tabla `archivos`
--
ALTER TABLE `archivos`
  ADD PRIMARY KEY (`id_archivo`),
  ADD KEY `id_formulario` (`id_formulario`);

--
-- Indices de la tabla `categorias`
--
ALTER TABLE `categorias`
  ADD PRIMARY KEY (`id_categorias`),
  ADD KEY `id_formulario` (`id_formulario`);

--
-- Indices de la tabla `direccion`
--
ALTER TABLE `direccion`
  ADD KEY `Rut` (`Rut`);

--
-- Indices de la tabla `formulario_solicitud`
--
ALTER TABLE `formulario_solicitud`
  ADD PRIMARY KEY (`id_formulario`),
  ADD KEY `formulario_solicitud_ibfk_1` (`Rut`);

--
-- Indices de la tabla `subcat`
--
ALTER TABLE `subcat`
  ADD PRIMARY KEY (`id_subcat`),
  ADD KEY `id_categorias` (`id_categorias`);

--
-- Indices de la tabla `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`Rut`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `archivos`
--
ALTER TABLE `archivos`
  MODIFY `id_archivo` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `categorias`
--
ALTER TABLE `categorias`
  MODIFY `id_categorias` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `formulario_solicitud`
--
ALTER TABLE `formulario_solicitud`
  MODIFY `id_formulario` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `subcat`
--
ALTER TABLE `subcat`
  MODIFY `id_subcat` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `archivos`
--
ALTER TABLE `archivos`
  ADD CONSTRAINT `archivos_ibfk_1` FOREIGN KEY (`id_formulario`) REFERENCES `formulario_solicitud` (`id_formulario`);

--
-- Filtros para la tabla `categorias`
--
ALTER TABLE `categorias`
  ADD CONSTRAINT `categorias_ibfk_1` FOREIGN KEY (`id_formulario`) REFERENCES `formulario_solicitud` (`id_formulario`);

--
-- Filtros para la tabla `direccion`
--
ALTER TABLE `direccion`
  ADD CONSTRAINT `direccion_ibfk_1` FOREIGN KEY (`Rut`) REFERENCES `usuario` (`Rut`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `subcat`
--
ALTER TABLE `subcat`
  ADD CONSTRAINT `subcat_ibfk_1` FOREIGN KEY (`id_categorias`) REFERENCES `categorias` (`id_categorias`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
