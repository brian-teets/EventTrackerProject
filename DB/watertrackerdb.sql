-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mywatertrackerdb
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `mywatertrackerdb` ;

-- -----------------------------------------------------
-- Schema mywatertrackerdb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `mywatertrackerdb` DEFAULT CHARACTER SET utf8 ;
USE `mywatertrackerdb` ;

-- -----------------------------------------------------
-- Table `water_tracker`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `water_tracker` ;

CREATE TABLE IF NOT EXISTS `water_tracker` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `quantity` DECIMAL(4,2) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;

SET SQL_MODE = '';
DROP USER IF EXISTS wateruser;
SET SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';
CREATE USER 'wateruser' IDENTIFIED BY 'wateruser';

GRANT SELECT, INSERT, TRIGGER, UPDATE, DELETE ON TABLE * TO 'wateruser';

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

-- -----------------------------------------------------
-- Data for table `water_tracker`
-- -----------------------------------------------------
START TRANSACTION;
USE `mywatertrackerdb`;
INSERT INTO `water_tracker` (`id`, `quantity`) VALUES (1, 12.00);

COMMIT;

