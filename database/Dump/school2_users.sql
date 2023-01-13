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
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `FirstName` varchar(255) NOT NULL,
  `LastName` varchar(255) NOT NULL,
  `Email` varchar(255) NOT NULL,
  `Password` varchar(255) NOT NULL,
  `Role_id` int NOT NULL,
  `Student_id` int DEFAULT NULL,
  PRIMARY KEY (`id`,`FirstName`),
  KEY `Student_id` (`Student_id`),
  KEY `roles_idx` (`Role_id`),
  CONSTRAINT `roles` FOREIGN KEY (`Role_id`) REFERENCES `roles` (`id`),
  CONSTRAINT `users_ibfk_1` FOREIGN KEY (`Student_id`) REFERENCES `students` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=43 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'test','test','test@gmail.com','test1234',1,1),(2,'arber','bytyqi','arber@gmail.com','test1234',2,NULL),(4,'Edis','Galushi','edis@gmail.com','password',2,NULL),(5,'Maksut','Pirku','maksi@gmail.com','pass',2,NULL),(6,'test3','test3','test@gmail.com','test1234',1,2),(7,'test3','test3','test@gmail.com','test1234',1,2),(8,'test3','test3','test@gmail.com','test1234',1,2),(9,'test3','test3','test@gmail.com','test1234',1,2),(10,'test3','test3','test@gmail.com','test1234',1,2),(16,'test3','test3','test@gmail.com','test1234',1,2),(18,'test3','test3','test@gmail.com','test1234',1,2),(19,'test3','test3','test@gmail.com','test1234',1,2),(21,'test3','test3','test@gmail.com','test1234',1,2),(22,'test3','test3','test@gmail.com','test1234',1,2),(23,'test3','test3','test@gmail.com','test1234',1,2),(24,'test3','test3','test@gmail.com','test1234',1,2),(25,'test3','test3','test@gmail.com','test1234',1,2),(26,'test3','test3','test@gmail.com','test1234',1,2),(27,'test3','test3','test@gmail.com','test1234',1,2),(28,'test3','test3','test@gmail.com','test1234',1,2),(29,'test3','test3','test6@gmail.com','test',1,2),(30,'test3','test3','test7@gmail.com','tnxninx',1,2),(31,'endrit122005@gmail.com','Tytynxhiu','endrit122005sosmo@gmail.com','12345678',1,2),(32,'endrit','Tytynxhiu','endrit122005@gmail.comdbusb','12345678',1,2),(33,'endrit','Tytynxhiu','endiniufenoiaosinaoi','12354687',1,2),(34,'endrit','Tytynxhiu','nisdannsdina\\ol','12345678',1,2),(35,'Endrit','Tytynxhiu','tendrit@gmail.com','12345678',1,1),(36,'Zana','Kume Tytynxhiu','zana@gmail.com','12345678',1,2),(37,'Endrit','Tytynxhiu','tendritt@gmail.com','12345678',1,2),(38,'Valton','Tytynxhiu','valton@gmail.com','12345678',1,2),(39,'Endirt','Tytynxhiu','endrit122005@gmail.com','12345678',1,2),(40,'endrit','tytynxhiu','eondoi','12345678',1,2),(41,'Endrit','Tytynxhiu','endoib','r nvcpot',1,2),(42,'Endrit','Tytynxhiu','fnovp','12345678',1,2);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-01-14  0:11:54
