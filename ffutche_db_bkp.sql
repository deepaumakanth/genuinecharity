-- MySQL dump 10.13  Distrib 5.5.47, for debian-linux-gnu (x86_64)
--
-- Host: localhost    Database: ffutche
-- ------------------------------------------------------
-- Server version	5.5.47-0ubuntu0.14.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Current Database: `ffutche`
--

CREATE DATABASE /*!32312 IF NOT EXISTS*/ `ffutche` /*!40100 DEFAULT CHARACTER SET latin1 */;

USE `ffutche`;

--
-- Table structure for table `contributions`
--

DROP TABLE IF EXISTS `contributions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `contributions` (
  `contribution_id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `value` int(11) NOT NULL,
  `contribution_type` varchar(255) NOT NULL,
  `quantity` int(11) NOT NULL,
  PRIMARY KEY (`contribution_id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `contributions`
--

LOCK TABLES `contributions` WRITE;
/*!40000 ALTER TABLE `contributions` DISABLE KEYS */;
INSERT INTO `contributions` VALUES (1,'Sarin','a@b.com','123-456-7893',200,'gold',5),(2,'Sarin','a@b.com','123-456-7893',200,'gold',5),(3,'Sarin','a@b.com','123-456-7893',200,'gold',5),(4,'Sarin','abc@abc.com','123-456-7893',1,'dollars',1),(5,'Sarin','abc@abc.com','123-456-7893',1,'dollars',1),(6,'Sarin','abc@abc.com','123-456-7893',1,'dollars',1);
/*!40000 ALTER TABLE `contributions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `event_committee`
--

DROP TABLE IF EXISTS `event_committee`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `event_committee` (
  `email_id` varchar(255) NOT NULL,
  `event_id` int(11) NOT NULL,
  `role` varchar(255) NOT NULL,
  PRIMARY KEY (`email_id`,`event_id`),
  KEY `fk_event_committee2` (`event_id`),
  CONSTRAINT `fk_event_committee1` FOREIGN KEY (`email_id`) REFERENCES `users` (`email_id`),
  CONSTRAINT `fk_event_committee2` FOREIGN KEY (`event_id`) REFERENCES `events` (`event_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `event_committee`
--

LOCK TABLES `event_committee` WRITE;
/*!40000 ALTER TABLE `event_committee` DISABLE KEYS */;
/*!40000 ALTER TABLE `event_committee` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `events`
--

DROP TABLE IF EXISTS `events`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `events` (
  `event_id` int(11) NOT NULL AUTO_INCREMENT,
  `event_type` varchar(255) NOT NULL,
  `event_name` varchar(255) NOT NULL,
  `event_date` datetime NOT NULL,
  PRIMARY KEY (`event_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `events`
--

LOCK TABLES `events` WRITE;
/*!40000 ALTER TABLE `events` DISABLE KEYS */;
/*!40000 ALTER TABLE `events` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `expenses`
--

DROP TABLE IF EXISTS `expenses`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `expenses` (
  `event_id` int(11) NOT NULL,
  `expense_id` int(11) NOT NULL AUTO_INCREMENT,
  `expense_type` varchar(255) NOT NULL,
  `value` int(11) NOT NULL,
  `quantity` int(11) NOT NULL,
  `purpose` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`expense_id`),
  KEY `fk_expense_event` (`event_id`),
  CONSTRAINT `fk_expense_event` FOREIGN KEY (`event_id`) REFERENCES `events` (`event_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `expenses`
--

LOCK TABLES `expenses` WRITE;
/*!40000 ALTER TABLE `expenses` DISABLE KEYS */;
/*!40000 ALTER TABLE `expenses` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `location`
--

DROP TABLE IF EXISTS `location`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `location` (
  `event_id` int(11) NOT NULL,
  `street` varchar(255) NOT NULL,
  `city` varchar(255) NOT NULL,
  `state` varchar(255) NOT NULL,
  PRIMARY KEY (`event_id`,`street`,`city`,`state`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `location`
--

LOCK TABLES `location` WRITE;
/*!40000 ALTER TABLE `location` DISABLE KEYS */;
/*!40000 ALTER TABLE `location` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `scholarships`
--

DROP TABLE IF EXISTS `scholarships`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `scholarships` (
  `scholarship_id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `amount` int(11) NOT NULL,
  `prerequisite` varchar(255) DEFAULT NULL,
  `expiry` datetime NOT NULL,
  `type` varchar(255) NOT NULL,
  PRIMARY KEY (`scholarship_id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `scholarships`
--

LOCK TABLES `scholarships` WRITE;
/*!40000 ALTER TABLE `scholarships` DISABLE KEYS */;
INSERT INTO `scholarships` VALUES (1,'scholarship1',30000,'graduate','2017-07-28 00:00:00','college'),(2,'scholarship2',40000,'high school graduate','2017-09-12 00:00:00','high school'),(3,'scholarship3',20000,'middle school graduate','2017-02-12 00:00:00','middle school'),(4,'scholarship4',25000,'College Graduate','2017-06-13 00:00:00','Graduate'),(5,'scholarship5',30000,'High school graduate','2016-12-28 00:00:00','High School'),(6,'scholarship6',35000,'High school graduate','2016-12-28 00:00:00','High School'),(7,'scholarship7',35000,'High school graduate','2016-12-28 00:00:00','High School'),(8,'scholarship8',21000,'Middle School graduate','2017-01-25 00:00:00','Elementry School'),(9,'ift540 funds',5000,'shoud have work experience','2020-12-12 00:00:00','Graduate'),(10,'scholarship10',12000,'prereq','2016-11-30 00:00:00','Elementry School'),(11,'scholarship11',25000,'none','2016-12-21 00:00:00','Elementry School'),(12,'scholarship12',28000,'none','2017-01-25 00:00:00','Elementry School'),(13,'scholarship13',24000,'none','2016-12-29 00:00:00','Elementry School');
/*!40000 ALTER TABLE `scholarships` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_applies_scholarship`
--

DROP TABLE IF EXISTS `user_applies_scholarship`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user_applies_scholarship` (
  `email_id` varchar(255) NOT NULL,
  `scholarship_id` int(11) NOT NULL,
  `no_of_children` int(11) NOT NULL,
  `school_termination` varchar(255) NOT NULL,
  `parent_marital_status` varchar(255) NOT NULL,
  `father_name` varchar(255) NOT NULL,
  `father_age` int(11) NOT NULL,
  `phone` int(11) NOT NULL,
  PRIMARY KEY (`email_id`,`scholarship_id`),
  KEY `fk_user_applies_scholarship2` (`scholarship_id`),
  CONSTRAINT `fk_user_applies_scholarship1` FOREIGN KEY (`email_id`) REFERENCES `users` (`email_id`),
  CONSTRAINT `fk_user_applies_scholarship2` FOREIGN KEY (`scholarship_id`) REFERENCES `scholarships` (`scholarship_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_applies_scholarship`
--

LOCK TABLES `user_applies_scholarship` WRITE;
/*!40000 ALTER TABLE `user_applies_scholarship` DISABLE KEYS */;
INSERT INTO `user_applies_scholarship` VALUES ('test2@t.com',1,0,'','','',0,0),('vipul.sarin@gmail.com',1,0,'','','',0,0),('vipul.sarin@gmail.com',2,0,'','','',0,0),('vipul.sarin@gmail.com',5,0,'','','',0,0),('vipul.sarin@gmail.com',6,0,'','','',0,0),('vipul.sarin@gmail.com',7,0,'','','',0,0),('vipul.sarin@gmail.com',8,4,'No','unmarried','abc',23,123),('vipul.sarin@gmail.com',9,4,'No','unmarried','abc',21,123);
/*!40000 ALTER TABLE `user_applies_scholarship` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_participates_event`
--

DROP TABLE IF EXISTS `user_participates_event`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user_participates_event` (
  `email_id` varchar(255) NOT NULL,
  `event_id` int(11) NOT NULL,
  PRIMARY KEY (`email_id`,`event_id`),
  KEY `fk_user_participates_event2` (`event_id`),
  CONSTRAINT `fk_user_participates_event1` FOREIGN KEY (`email_id`) REFERENCES `users` (`email_id`),
  CONSTRAINT `fk_user_participates_event2` FOREIGN KEY (`event_id`) REFERENCES `events` (`event_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_participates_event`
--

LOCK TABLES `user_participates_event` WRITE;
/*!40000 ALTER TABLE `user_participates_event` DISABLE KEYS */;
/*!40000 ALTER TABLE `user_participates_event` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_sponsors_scholarship`
--

DROP TABLE IF EXISTS `user_sponsors_scholarship`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user_sponsors_scholarship` (
  `email_id` varchar(255) NOT NULL,
  `scholarship_id` int(11) NOT NULL,
  PRIMARY KEY (`email_id`,`scholarship_id`),
  KEY `fk_user_scholarship2` (`scholarship_id`),
  CONSTRAINT `fk_user_scholarship1` FOREIGN KEY (`email_id`) REFERENCES `users` (`email_id`),
  CONSTRAINT `fk_user_scholarship2` FOREIGN KEY (`scholarship_id`) REFERENCES `scholarships` (`scholarship_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_sponsors_scholarship`
--

LOCK TABLES `user_sponsors_scholarship` WRITE;
/*!40000 ALTER TABLE `user_sponsors_scholarship` DISABLE KEYS */;
INSERT INTO `user_sponsors_scholarship` VALUES ('vipul.sarin@gmail.com',8),('test2@t.com',9),('vipul.sarin@gmail.com',10),('vipul.sarin@gmail.com',11),('vipul.sarin@gmail.com',12),('vipul.sarin@gmail.com',13);
/*!40000 ALTER TABLE `user_sponsors_scholarship` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `email_id` varchar(255) NOT NULL DEFAULT '',
  `firstname` varchar(255) NOT NULL,
  `lastname` varchar(255) NOT NULL,
  `address` varchar(255) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `sex` varchar(255) DEFAULT NULL,
  `marital_status` varchar(255) DEFAULT NULL,
  `role_type` varchar(255) NOT NULL,
  `occupation` varchar(255) DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  PRIMARY KEY (`email_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES ('','sf','saf','safd','123-456-7893','male','unmarried','','sadf','sarin'),('abc@abc.com','asdf','abcd','asdf','123-456-7893','male','unmarried','','asdf','pass'),('check2@check.com','check','check','check','123-456-7893','male','unmarried','','check','check'),('check3@check.com','check','check','c','123-456-7893','female','unmarried','','check','sarin'),('check4@check.com','check','check','check','123-456-7893','male','unmarried','','check','sarin'),('check5@check.com','check','check','check','123-456-7893','male','unmarried','','check','sarin'),('check6@check.com','check','check','check','123-456-7893','male','unmarried','','check','sarin'),('check7@check.com','check','check','check','123-456-7893','male','unmarried','','check','sarin'),('check9@check.com','check','check','check','123-456-7893','male','unmarried','','check','check'),('check@check.com','check','last','check','123-456-7893','female','married','','check ','check'),('test2@t.com','Test1','test2','ff','','male','unmarried','','','test'),('vipul.sarin@gmail.com','Vipul','Sarin','914 East Lemon Street','123-456-7893','male','unmarried','','Student','sarin');
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

-- Dump completed on 2016-11-27 13:20:24
