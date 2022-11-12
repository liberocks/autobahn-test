CREATE TABLE IF NOT EXISTS `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  `deleted_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `USER_ID_UNIQUE` (`id`),
  UNIQUE KEY `USER_EMAIL_UNIQUE` (`email`),
  KEY `USER_DELETED_AT_IDX` (`deleted_at`)
);