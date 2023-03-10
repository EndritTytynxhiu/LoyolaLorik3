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
-- Table structure for table `classteacherinfo`
--

DROP TABLE IF EXISTS `classteacherinfo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `classteacherinfo` (
  `Class_id` int NOT NULL,
  `Teacher_id` int NOT NULL,
  `Subject_id` int NOT NULL,
  `Vitishkollor` varchar(255) DEFAULT NULL,
  KEY `Class_id` (`Class_id`),
  KEY `classteacherinfo_ibfk_2_idx` (`Subject_id`),
  KEY `bnck_idx` (`Teacher_id`),
  CONSTRAINT `bnck` FOREIGN KEY (`Teacher_id`) REFERENCES `users` (`id`),
  CONSTRAINT `classteacherinfo_ibfk_1` FOREIGN KEY (`Class_id`) REFERENCES `class` (`id`),
  CONSTRAINT `kv` FOREIGN KEY (`Subject_id`) REFERENCES `subject` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `classteacherinfo`
--

LOCK TABLES `classteacherinfo` WRITE;
/*!40000 ALTER TABLE `classteacherinfo` DISABLE KEYS */;
INSERT INTO `classteacherinfo` VALUES (1,2,3,'2021-2022'),(2,4,9,'2021-2022'),(1,4,9,'2021-2022'),(3,4,9,'2021-2022'),(2,2,3,'2021-2022'),(3,2,3,'2021-2022'),(1,5,10,'2021-2022'),(2,5,10,'2021-2022'),(3,5,10,'2021-2022'),(1,2,7,'2021-2022'),(1,2,7,'2021-2022'),(1,2,7,NULL),(1,2,7,NULL),(1,2,7,NULL),(1,2,7,NULL),(5,2,9,NULL),(5,2,9,NULL),(5,2,9,'2022-2023'),(5,2,9,'2022-2023'),(5,5,10,'2022-2023');
/*!40000 ALTER TABLE `classteacherinfo` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-02-13 23:30:43
