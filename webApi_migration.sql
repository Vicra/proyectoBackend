CREATE TABLE `productos` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(50) NULL,
  `marca` VARCHAR(50) NULL,
  `descripcion` VARCHAR(100) NULL,
  `categoria` VARCHAR(100) NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC));


CREATE TABLE `proveedores` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(50) NULL,
  `direccion` VARCHAR(200) NULL,
  `telefono` VARCHAR(15) NULL,
  `celular` VARCHAR(15) NULL,
  `email` VARCHAR(50) NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC),
  UNIQUE INDEX `email_UNIQUE` (`email` ASC));


CREATE TABLE `productos_proveedores` (
  `producto_id` INT NOT NULL,
  `proveedor_id` INT NOT NULL,
  `costo` DECIMAL(13,4) NULL,
  `precio` DECIMAL(13,4) NULL,
  PRIMARY KEY (`producto_id`, `proveedor_id`),
  INDEX `proveedor_id_fk_idx` (`proveedor_id` ASC),
  CONSTRAINT `producto_id_fk`
    FOREIGN KEY (`producto_id`)
    REFERENCES `productos` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `proveedor_id_fk`
    FOREIGN KEY (`proveedor_id`)
    REFERENCES `proveedores` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);

CREATE TABLE `clientes` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(50) NULL,
  `telefono` VARCHAR(15) NULL,
  `celular` VARCHAR(15) NULL,
  `direccion` VARCHAR(200) NULL,
  `email` VARCHAR(50) NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC),
  UNIQUE INDEX `email_UNIQUE` (`email` ASC),
  UNIQUE INDEX `telefono_UNIQUE` (`telefono` ASC),
  UNIQUE INDEX `celular_UNIQUE` (`celular` ASC));

CREATE TABLE `ordenes` (
  `id` INT NOT NULL,
  `cliente_id` INT NULL,
  `fecha` DATETIME NULL,
  `estado` BIT NULL,
  PRIMARY KEY (`id`),
  CONSTRAINT `cliente_id_fk`
    FOREIGN KEY (`id`)
    REFERENCES `clientes` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);


CREATE TABLE `ordenes_productos` (
  `orden_id` INT NOT NULL,
  `producto_id` INT NOT NULL,
  `cantidad` INT NULL,
  PRIMARY KEY (`orden_id`, `producto_id`),
  INDEX `producto_id_fk_idx` (`producto_id` ASC),
  CONSTRAINT `orden_prod_id_fk`
    FOREIGN KEY (`orden_id`)
    REFERENCES `ordenes` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `producto_ord_id_fk`
    FOREIGN KEY (`producto_id`)
    REFERENCES `productos` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);


CREATE TABLE `usuarios` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(50) NULL,
  `email` VARCHAR(50) NULL,
  `contrasena` VARCHAR(200) NULL,
  `usuario` VARCHAR(50) NULL,
  `rol` CHAR NULL DEFAULT 'c' COMMENT 'a = admin\ns  = superusuario' /* comment truncated */ /*c = cajero*/,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC),
  UNIQUE INDEX `email_UNIQUE` (`email` ASC),
  UNIQUE INDEX `usuario_UNIQUE` (`usuario` ASC));


ALTER TABLE `proveedores` 
ADD UNIQUE INDEX `telefono_UNIQUE` (`telefono` ASC),
ADD UNIQUE INDEX `celular_UNIQUE` (`celular` ASC);
