CREATE TABLE `labbo`.`contato` (
  `idcontato` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(45) NOT NULL,
  `empresa` VARCHAR(45) NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  `telefone` VARCHAR(45) NOT NULL,
  `qntColaboradores` VARCHAR(45) NOT NULL,
  `verbaMarketing` VARCHAR(45) NOT NULL,
  `interesse` VARCHAR(45) NOT NULL,
  `observacao` VARCHAR(45) NOT NULL,
  `data` DATE NOT NULL,
  PRIMARY KEY (`idcontato`));
