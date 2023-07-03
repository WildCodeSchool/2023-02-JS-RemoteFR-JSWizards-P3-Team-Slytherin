CREATE TABLE user (
  id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  lastname VARCHAR(50) NOT NULL,
  firstname VARCHAR(50) NOT NULL,
  email VARCHAR(255) NOT NULL,
  hashedPassword VARCHAR(255) NOT NULL,
  birthday DATE NULL,
  adminStatus BOOLEAN DEFAULT false
) ENGINE=InnoDB DEFAULT CHARSET=UTF8MB4;

CREATE TABLE workshop (
  id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  active BOOLEAN DEFAULT 0 NOT NULL,
  workshopDate DATE NOT NULL,
  personNb INT NULL
) ENGINE=InnoDB DEFAULT CHARSET=UTF8MB4;

CREATE TABLE user_workshop (
  id_workshop INT NOT NULL,
  id_user INT NOT NULL,
  note1 INT NULL,
  note2 INT NULL,
  note3 INT NULL,
  comment TEXT NULL,
  CONSTRAINT fk_workshop_user
  FOREIGN KEY (id_workshop)
  REFERENCES workshop(id),
  CONSTRAINT fk_user_workshop
  FOREIGN KEY (id_user)
  REFERENCES user(id)
) ENGINE=InnoDB DEFAULT CHARSET=UTF8MB4;

CREATE TABLE receipe (
  id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  measuring INT NOT NULL,
  id_user INT NOT NULL,
  CONSTRAINT fk_receipe_user
  FOREIGN KEY (id_user)
  REFERENCES user(id)
) ENGINE=InnoDB DEFAULT CHARSET=UTF8MB4;

CREATE TABLE wine(
id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
wineName VARCHAR(100) NOT NULL,
castle VARCHAR(100) NULL,
grapeVariety VARCHAR(100) NULL,
wineYear YEAR NOT NULL,
wineDescription TEXT NOT NULL,
wineType VARCHAR(20) NOT NULL,
wineImage VARCHAR(150)
) ENGINE=InnoDB DEFAULT CHARSET=UTF8MB4;

CREATE TABLE wine_workshop(
id_wine INT NOT NULL, 
id_workshop INT NOT NULL, 
CONSTRAINT fk_wine_workshop FOREIGN KEY (id_wine) REFERENCES wine(id),
CONSTRAINT fk_workshop_wine FOREIGN KEY (id_workshop) REFERENCES workshop(id)
) ENGINE=InnoDB DEFAULT CHARSET=UTF8MB4;

CREATE TABLE glossary(
id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
word VARCHAR(50) NULL,
wordDefinition TEXT NULL
) ENGINE=InnoDB DEFAULT CHARSET=UTF8MB4;

CREATE TABLE tasting(
id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
score INT,
id_workshop INT NOT NULL,
id_receipe INT NOT NULL,
color VARCHAR(50) NULL,
clarity VARCHAR(50) NULL,
density VARCHAR(50) NULL,
intensity VARCHAR(50) NULL,
noseFruits VARCHAR(50) NULL,
noseFlowers VARCHAR(50) NULL,
nosePlants VARCHAR(50) NULL,
noseSpices VARCHAR(50) NULL,
noseAmpyreumatique VARCHAR(50) NULL,
noseMineral VARCHAR(50) NULL,
mouthFruits VARCHAR(50) NULL,
mouthFlowers VARCHAR(50) NULL,
mouthPlants VARCHAR(50) NULL,
mouthSpices VARCHAR(50) NULL,
mouthAmpyreumatique VARCHAR(50) NULL,
mouthMineral VARCHAR(50) NULL,
persistance VARCHAR(50) NULL,
smooth VARCHAR(50) NULL,
acidity VARCHAR(50) NULL,
tanin VARCHAR(50) NULL,
alcohol VARCHAR(50) NULL,
CONSTRAINT fk_workshop_testing FOREIGN KEY (id_workshop) REFERENCES workshop(id),
CONSTRAINT fk_receipe_testing FOREIGN KEY (id_receipe) REFERENCES receipe(id)
) ENGINE=InnoDB CHARSET=utf8mb4;
