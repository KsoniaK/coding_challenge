USE coding_challenge;
CREATE TABLE `USER` (
	`id_user` INT(4) NOT NULL AUTO_INCREMENT,
	`nom_user` varchar(255) NOT NULL,
    `mdp_user` varchar(255) NOT NULL UNIQUE,
	PRIMARY KEY (`id_user`)
);
CREATE TABLE `GENRE` (
	`id_genre` INT(4) NOT NULL AUTO_INCREMENT,
	`nom_genre` varchar(255) NOT NULL,
	PRIMARY KEY (`id_genre`)
);
CREATE TABLE `APPARTENIR` (
	`id_genre` INT(4) NOT NULL,
	`id_media` INT(4) NOT NULL
);
CREATE TABLE `MEDIA` (
	`id_media` INT(4) NOT NULL AUTO_INCREMENT,
	`titre_media` varchar(255) NOT NULL UNIQUE,
	`image_media` varchar(255) NOT NULL,
	`date_sortie_media` integer(7) NOT NULL,
	PRIMARY KEY (`id_media`)
);
