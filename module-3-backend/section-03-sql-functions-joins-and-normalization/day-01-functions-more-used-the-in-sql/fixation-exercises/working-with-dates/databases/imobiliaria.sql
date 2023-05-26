CREATE DATABASE  IF NOT EXISTS `imobiliaria` /*!40100 DEFAULT CHARACTER SET latin1 */;
USE `imobiliaria`;
-- MySQL dump 10.13  Distrib 8.0.30, for macos12 (x86_64)
--
-- Host: localhost    Database: imobiliaria
-- ------------------------------------------------------
-- Server version	5.7.41

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
-- Table structure for table `casas`
--

DROP TABLE IF EXISTS `casas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `casas` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `preco` int(11) NOT NULL,
  `quartos` int(11) DEFAULT NULL,
  `banheiros` int(11) DEFAULT NULL,
  `tamanho` int(11) DEFAULT NULL,
  `status` tinyint(1) DEFAULT NULL,
  `cidade` int(11) DEFAULT NULL,
  `piscina` tinyint(1) DEFAULT NULL,
  `descricao` text,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=99 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `casas`
--

LOCK TABLES `casas` WRITE;
/*!40000 ALTER TABLE `casas` DISABLE KEYS */;
INSERT INTO `casas` VALUES (1,20000,1,1,100,1,3,0,'Casa aconchegante com um quarto e um banheiro, ideal para quem busca simplicidade e praticidade. Possui 100 metros quadrados e está localizada em uma cidade tranquila, sem piscina.'),(2,175000,1,1,250,1,2,0,'Espaçosa casa com um quarto e um banheiro, com uma área de 250 metros quadrados. Está localizada em uma cidade que oferece muitas opções de entretenimento, mas não possui piscina.'),(3,150000,4,2,275,1,1,1,'Bela casa de quatro quartos e dois banheiros, com uma ampla área de 275 metros quadrados. Está localizada em uma cidade com ótima infraestrutura, e possui uma linda piscina para lazer.'),(9,575000,2,3,350,1,6,1,'Linda casa com dois quartos e três banheiros, com uma ampla área de 350 metros quadrados. Localizada em uma cidade badalada, possui piscina para diversão e lazer.'),(17,5490000,14,8,2600,1,1,1,'Maravilhosa mansão com 14 quartos e 8 banheiros, com uma área de 2600 metros quadrados. Está localizada em uma cidade famosa e badalada, e possui uma belíssima piscina para os momentos de lazer.'),(19,500000,2,3,700,1,1,1,'Casa moderna com dois quartos e três banheiros, com uma ampla área de 700 metros quadrados. Está localizada em uma cidade com muitas opções de lazer, incluindo uma bela piscina para os momentos de descanso.'),(21,100000,1,1,95,0,2,0,'Casa compacta com um quarto e um banheiro, com 95 metros quadrados. Localizada em uma cidade pequena, não possui piscina.'),(29,490000,3,4,1010,1,1,1,'Casa com três quartos e quatro banheiros, com uma área de 1010 metros quadrados. Está localizada em uma cidade vibrante e possui uma bela piscina para desfrutar com a família e amigos.'),(31,2225000,6,4,595,1,1,1,'Espetacular casa com seis quartos e quatro banheiros, com uma área de 595 metros quadrados. Está localizada em uma cidade movimentada e possui uma bela piscina para os momentos de descontração.'),(54,210000,2,1,150,0,2,0,'Casa charmosa com dois quartos e um banheiro, com uma área de 150 metros quadrados. Localizada em uma cidade pacata, não possui piscina.'),(98,892000,3,3,460,0,3,0,'Casa ampla com três quartos e três banheiros, com uma área de 460 metros quadrados. Está localizada em uma cidade tranquila, sem piscina.');
/*!40000 ALTER TABLE `casas` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;