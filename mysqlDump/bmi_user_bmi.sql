-- MySQL dump 10.13  Distrib 8.0.16, for macos10.14 (x86_64)
--
-- Host: localhost    Database: bmi
-- ------------------------------------------------------
-- Server version	8.0.17

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
 SET NAMES utf8 ;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `user_bmi`
--

DROP TABLE IF EXISTS `user_bmi`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `user_bmi` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `gender` varchar(45) DEFAULT NULL,
  `height_m` float DEFAULT NULL,
  `weight_kg` float DEFAULT NULL,
  `bmi` float DEFAULT NULL,
  `bmi_category` varchar(100) DEFAULT NULL,
  `health_risk` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=48 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_bmi`
--

LOCK TABLES `user_bmi` WRITE;
/*!40000 ALTER TABLE `user_bmi` DISABLE KEYS */;
INSERT INTO `user_bmi` VALUES (27,'Male',1.71,96,56.1404,'Very severely obese','Very high risk'),(28,'Male',1.8,77,42.7778,'Very severely obese','Very high risk'),(29,'Male',1.61,85,52.795,'Very severely obese','Very high risk'),(30,'Female',1.5,70,46.6667,'Very severely obese','Very high risk'),(31,'Female',1.66,62,37.3494,'Severel obese','High'),(32,'Female',1.67,82,49.1018,'Very severely obese','Very high risk'),(33,'Male',1.61,85,52.795,'Very severely obese','Very high risk'),(34,'Male',1.8,77,42.7778,'Very severely obese','Very high risk'),(35,'Female',1.67,82,49.1018,'Very severely obese','Very high risk'),(36,'Female',1.66,62,37.3494,'Severel obese','High'),(37,'Female',1.5,70,46.6667,'Very severely obese','Very high risk'),(38,'Male',1.71,96,56.1404,'Very severely obese','Very high risk'),(39,'Female',1.5,70,46.6667,'Very severely obese','Very high risk'),(40,'Male',1.71,96,56.1404,'Very severely obese','Very high risk'),(41,'Female',1.67,82,49.1018,'Very severely obese','Very high risk'),(42,'Male',1.71,96,56.1404,'Very severely obese','Very high risk'),(43,'Male',1.61,85,52.795,'Very severely obese','Very high risk'),(44,'Female',1.5,70,46.6667,'Very severely obese','Very high risk'),(45,'Male',1.8,77,42.7778,'Very severely obese','Very high risk'),(46,'Female',1.66,62,37.3494,'Severel obese','High'),(47,'Female',1.67,82,49.1018,'Very severely obese','Very high risk');
/*!40000 ALTER TABLE `user_bmi` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-12-10 11:48:07
