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
  `amount_in_ounces` DECIMAL(4,2) NOT NULL,
  `is_sparkling` TINYINT NULL,
  `water_log_comment` VARCHAR(250) NULL,
  `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
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
INSERT INTO `water_tracker` (`id`, `amount_in_ounces`, `is_sparkling`, `water_log_comment`, `created_at`, `updated_at`) VALUES (1, 12.00, 1, 'Bubly cherry flavored sparkling water.', '2022-06-04T07:13:57', '2022-06-12T10:05:12');
INSERT INTO `water_tracker` (`id`, `amount_in_ounces`, `is_sparkling`, `water_log_comment`, `created_at`, `updated_at`) VALUES (2, 12.00, 1, 'Bubly strawberry flavored sparkling water.', '2022-06-04T07:13:57', '2022-06-12T10:05:56');
INSERT INTO `water_tracker` (`id`, `amount_in_ounces`, `is_sparkling`, `water_log_comment`, `created_at`, `updated_at`) VALUES (3, 9.50, 0, 'Black Stag - bottled vanilla iced latte.', '2022-06-04T08:13:57', '2022-06-12T10:07:03');
INSERT INTO `water_tracker` (`id`, `amount_in_ounces`, `is_sparkling`, `water_log_comment`, `created_at`, `updated_at`) VALUES (4, 12.00, 0, 'Filtered tap water. Pur water filter dispenser.', '2022-06-04T09:13:57', '2022-06-12T10:03:09');
INSERT INTO `water_tracker` (`id`, `amount_in_ounces`, `is_sparkling`, `water_log_comment`, `created_at`, `updated_at`) VALUES (5, 8.00, 0, 'Filtered tap water. Pur water filter dispenser.', '2022-06-04T09:13:57', '2022-06-12T10:02:22');
INSERT INTO `water_tracker` (`id`, `amount_in_ounces`, `is_sparkling`, `water_log_comment`, `created_at`, `updated_at`) VALUES (6, 9.50, 0, 'Drank a bottle of Black Stag vanilla iced latte.', '2022-06-11T12:13:01', '2022-06-12T09:59:58');
INSERT INTO `water_tracker` (`id`, `amount_in_ounces`, `is_sparkling`, `water_log_comment`, `created_at`, `updated_at`) VALUES (7, 12.00, 1, 'Bubly passionfruit flavored sparkling water.', '2022-06-11T21:17:56', '2022-06-12T09:58:07');

COMMIT;

