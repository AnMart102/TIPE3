-- phpMyAdmin SQL Dump
-- version 5.3.0-dev+20220512.d0c37da63d
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 14-05-2022 a las 23:40:26
-- Versión del servidor: 10.4.24-MariaDB
-- Versión de PHP: 8.1.5

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
  `estado_archivo` enum('En espera','Aprobado','Denagado','Modificacion') NOT NULL DEFAULT 'En espera',
  `id_formulario` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categorias`
--

CREATE TABLE `categorias` (
  `id_categoria` int(11) NOT NULL,
  `Categoria` enum('Artesania','Comida','Ropa y Accesorios','Decoracion','Muebleria') DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `categorias`
--

INSERT INTO `categorias` (`id_categoria`, `Categoria`) VALUES
(1, 'Comida'),
(2, 'Ropa y Accesorios'),
(3, 'Decoracion'),
(4, 'Artesania'),
(5, 'Muebleria');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `direccion`
--

CREATE TABLE `direccion` (
  `id_direccion` int(11) NOT NULL,
  `calle` text NOT NULL,
  `numero` int(11) NOT NULL,
  `CasaDepto` enum('Casa','Departamento','','') DEFAULT NULL,
  `localidad` text NOT NULL,
  `PoblaVilla` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `direccion`
--

INSERT INTO `direccion` (`id_direccion`, `calle`, `numero`, `CasaDepto`, `localidad`, `PoblaVilla`) VALUES
(1, 'rosas', 111, 'Casa', 'cartagena', NULL),
(2, 'trece norte', 210, 'Casa', 'Cartagena', 'Villa');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `formulario_solicitud`
--

CREATE TABLE `formulario_solicitud` (
  `Nombre_pyme` varchar(100) NOT NULL,
  `Descripcion` varchar(1000) NOT NULL,
  `RSH` varchar(100) DEFAULT NULL,
  `Medio_pago` text NOT NULL,
  `Medio_entrega` enum('Delivery','Retiro en tienda') DEFAULT NULL,
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
  `Rut` varchar(12) NOT NULL,
  `id_formulario` int(11) NOT NULL,
  `id_categoria` int(11) NOT NULL,
  `id_subcat` int(11) DEFAULT NULL,
  `id_archivo` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `formulario_solicitud`
--

INSERT INTO `formulario_solicitud` (`Nombre_pyme`, `Descripcion`, `RSH`, `Medio_pago`, `Medio_entrega`, `Empresa_registrada`, `Actividades_SII`, `Patente_permiso`, `R_sanitaria`, `estado_sol`, `Sitio_web`, `Facebook`, `Whatsapp`, `Instagram`, `Comentario_admin`, `Rut`, `id_formulario`, `id_categoria`, `id_subcat`, `id_archivo`) VALUES
('RopasLindas', 'Ropa linda', NULL, 'Efectivo', NULL, 'Si', NULL, NULL, NULL, 'Aprobado', NULL, NULL, NULL, NULL, NULL, '10243567-9', 1, 2, NULL, 0),
('DecoHogarCartagena', 'Tecnologia ventaaaas', NULL, '', NULL, 'No', NULL, NULL, NULL, 'Aprobado', NULL, NULL, NULL, NULL, NULL, '13452388-6', 2, 3, NULL, 0),
('MiArte', 'Arte', NULL, 'Efectivo', 'Delivery', 'Si', NULL, NULL, NULL, 'En espera', NULL, NULL, NULL, NULL, NULL, '10102312-9', 3, 4, 0, 0);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `subcat`
--

CREATE TABLE `subcat` (
  `id_subcat` int(11) NOT NULL,
  `nombre_subcat` text NOT NULL,
  `estado_subcat` enum('En espera','Aprobado','Denegado','Modificacion') NOT NULL DEFAULT 'En espera',
  `id_categoria` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `subcat`
--

INSERT INTO `subcat` (`id_subcat`, `nombre_subcat`, `estado_subcat`, `id_categoria`) VALUES
(1, 'Pinturas', 'Aprobado', 4);

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
  `id_direccion` int(11) NOT NULL,
  `Rol` text NOT NULL DEFAULT 'User'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `usuario`
--

INSERT INTO `usuario` (`Rut`, `Nombre`, `ApellidoP`, `ApellidoM`, `Correo`, `Contrasena`, `Telefono`, `id_direccion`, `Rol`) VALUES
('10102312-9', 'Jose', 'Loyola', 'Hidalgo', 'jlh@gmail.com', '1313', '912121222', 1, 'User'),
('10232134-5', 'Facundo', 'Martinez', 'Gulle', 'facundo.martinez@alumnos.uv.cl', '1010', '967691027', 2, 'Admin'),
('10243567-9', 'Luis ', 'Prat', 'Rojas', 'ehdicwbcehuwb@hotmail.com', '12345', '987654321', 0, 'User'),
('13452388-6', 'Juan', 'Perez', 'Perez', 'perezperez1@gmail.com', '123458', '987654329', 0, 'User');

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
  ADD PRIMARY KEY (`id_archivo`);

--
-- Indices de la tabla `categorias`
--
ALTER TABLE `categorias`
  ADD PRIMARY KEY (`id_categoria`);

--
-- Indices de la tabla `direccion`
--
ALTER TABLE `direccion`
  ADD PRIMARY KEY (`id_direccion`);

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
  ADD PRIMARY KEY (`id_subcat`);

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
  MODIFY `id_archivo` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `direccion`
--
ALTER TABLE `direccion`
  MODIFY `id_direccion` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

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



