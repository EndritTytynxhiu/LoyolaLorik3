-- MySQL dump 10.13  Distrib 8.0.31, for Win64 (x86_64)
--
-- Host: localhost    Database: school2
-- ------------------------------------------------------
-- Server version	8.0.31

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `classinfo`
--

DROP TABLE IF EXISTS `classinfo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `classinfo` (
  `Id` int NOT NULL AUTO_INCREMENT,
  `Class_id` int NOT NULL,
  `Students_id` int NOT NULL,
  `Vititshkollor` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`Id`),
  KEY `Class_id` (`Class_id`),
  KEY `bioxb_idx` (`Students_id`),
  CONSTRAINT `bioxb` FOREIGN KEY (`Students_id`) REFERENCES `students` (`id`),
  CONSTRAINT `classinfo_ibfk_1` FOREIGN KEY (`Class_id`) REFERENCES `class` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `classinfo`
--

LOCK TABLES `classinfo` WRITE;
/*!40000 ALTER TABLE `classinfo` DISABLE KEYS */;
INSERT INTO `classinfo` VALUES (1,1,1,'2021-2022'),(2,1,2,'2021-2022'),(3,1,3,'2021-2022'),(4,1,4,'2021-2022'),(5,2,1,'2021-2022'),(6,2,2,'2021-2022'),(7,2,3,'2021-2022'),(8,2,4,'2021-2022'),(9,3,1,'2021-2022'),(10,3,2,'2021-2022'),(11,3,3,'2021-2022'),(13,1,5,'2021-2022'),(14,1,5,'2021-2022'),(15,1,5,'2021-2022'),(16,1,8,'2021-2022'),(17,1,7,'2021-2022'),(18,1,6,'2021-2022'),(21,1,6,'2021-2022');
/*!40000 ALTER TABLE `classinfo` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-01-29 13:06:27
