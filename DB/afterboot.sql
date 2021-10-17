-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema afterbootdb
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `afterbootdb` ;

-- -----------------------------------------------------
-- Schema afterbootdb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `afterbootdb` DEFAULT CHARACTER SET utf8 ;
USE `afterbootdb` ;

-- -----------------------------------------------------
-- Table `study`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `study` ;

CREATE TABLE IF NOT EXISTS `study` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `language` VARCHAR(45) NULL,
  `focus` VARCHAR(45) NULL,
  `study_date` DATE NULL,
  `start` TIME NULL,
  `end` TIME NULL,
  `comment` VARCHAR(240) NULL,
  `image_url` VARCHAR(6000) NULL,
  `pages` VARCHAR(45) NULL,
  `source` VARCHAR(100) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;

SET SQL_MODE = '';
GRANT USAGE ON *.* TO afterbootuser@localhost;
 DROP USER afterbootuser@localhost;
SET SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';
CREATE USER 'afterbootuser'@'localhost' IDENTIFIED BY 'afterbootuser';

GRANT SELECT, INSERT, TRIGGER, UPDATE, DELETE ON TABLE * TO 'afterbootuser'@'localhost';

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

-- -----------------------------------------------------
-- Data for table `study`
-- -----------------------------------------------------
START TRANSACTION;
USE `afterbootdb`;
INSERT INTO `study` (`id`, `language`, `focus`, `study_date`, `start`, `end`, `comment`, `image_url`, `pages`, `source`) VALUES (1, 'Java', 'Lambda Expressions', '2021-10-08', '16:30:00', '17:15:00', 'Still not comfortable with lambdas.  Getting there.', 'https://www.informit.com/ShowCover.aspx?isbn=9780135166307&type=f', '246-252', 'Core Java Volume I - Fundamentals Cay S. Horstmann');
INSERT INTO `study` (`id`, `language`, `focus`, `study_date`, `start`, `end`, `comment`, `image_url`, `pages`, `source`) VALUES (2, 'SQL', 'Join Statements', '2021-10-09', '14:15:00', '15:00:00', 'Grr...inner joins. SO FRUSTRATING!!!', 'https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9781/5932/9781593278274.jpg', '86-89', 'Practical SQL: A Beginner\'s Guide to Storytelling with Data - Anthony DeBarros');
INSERT INTO `study` (`id`, `language`, `focus`, `study_date`, `start`, `end`, `comment`, `image_url`, `pages`, `source`) VALUES (3, 'JavaScript', 'Functions with Parameters', '2021-10-09', '15:05:00', '15:50:00', 'JavaScript is entirely new to me.  Be patient.', 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1538787006i/42190863._UY630_SR1200,630_.jpg', '1-10', 'Modern JavaScript Web Development Cookbook - Federico Kereki');
INSERT INTO `study` (`id`, `language`, `focus`, `study_date`, `start`, `end`, `comment`, `image_url`, `pages`, `source`) VALUES (4, 'Python', 'Functions and Setup', '2021-10-10', '08:00:00', '09:00:00', 'Python seems pretty intuitive to start.  Eager to learn another language.', 'https://cdn11.bigcommerce.com/s-igquupw3/images/stencil/1280x1280/products/1397376/28379366/9781718500969__19083.1611850396.jpg?c=2', '1-29', 'Learn Python Visually: Creative Coding with Processing - Tristan Bunn');
INSERT INTO `study` (`id`, `language`, `focus`, `study_date`, `start`, `end`, `comment`, `image_url`, `pages`, `source`) VALUES (5, 'Unity', 'Game Loop and Update Method', '2021-10-10', '09:25:00', '10:00:00', 'Excited to learn to develop games.  C# is a bit challenging.', 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1554690154i/44859757._UY630_SR1200,630_.jpg', '1-5', 'Game Development Patterns with Unity 2019 - David Baron');

COMMIT;

