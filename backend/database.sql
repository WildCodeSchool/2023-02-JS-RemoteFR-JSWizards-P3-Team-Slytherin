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

CREATE TABLE recipe (
  id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  measuring INT NOT NULL,
  id_user INT NOT NULL,
  CONSTRAINT fk_recipe_user
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
wineImage VARCHAR(150) DEFAULT "default.jpg"
) ENGINE=InnoDB DEFAULT CHARSET=UTF8MB4;

CREATE TABLE wine_workshop(
id_workshop INT NOT NULL, 
id_wine INT NULL,
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
id_recipe INT NOT NULL,
id_user INT NOT NULL,
id_wine INT NOT NULL,
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
CONSTRAINT fk_workshop_tasting FOREIGN KEY (id_workshop) REFERENCES workshop(id),
CONSTRAINT fk_recipe_tasting FOREIGN KEY (id_recipe) REFERENCES recipe(id),
CONSTRAINT fk_user_tasting FOREIGN KEY (id_user) REFERENCES user(id),
CONSTRAINT fk_wine_tasting FOREIGN KEY (id_wine) REFERENCES wine(id)
) ENGINE=InnoDB CHARSET=utf8mb4;

INSERT INTO `user` VALUES (1,'admin','admin','admin@admin.fr','$argon2id$v=19$m=65536,t=5,p=1$JvUeRISXzJlRxSj+LTG2qQ$k22+I+Q6kc95sORXJDXCzmf1L4ckAwYiso/hjX4VIyc','1985-01-01',1),
(2,'user','user','user@user.fr','$argon2id$v=19$m=65536,t=5,p=1$Vs3jjpmaJkv5vmD5Tt3wvg$W7usz0nor1B1DZK+zXr1NPctYsF8LXJsWSloSCVXtaY','1994-02-02', 0);

INSERT INTO `wine` VALUES (1, 'La Villageoise', 'Castel', 'rouge qui tache', 2024, 'A déguster avec vos pires amis pour oublier vos soirées', 'rouge', 'vin1.jpg'),
(2, 'Cheval noir', 'Saint Emilion', 'merlot', 2020, 'Ce Saint Émilion fin et élégant se distingue par des tanins soyeux, des notes de fruits rouges, d’épices et de cannelle, le tout enrobé de subtiles notes boisées.', 'rouge', 'vin2.jpg'),
(3, 'Jurancon', 'Uroulat', 'petit manseng', 2018, 'Équilibré et plein finesse par son harmonie entre la douceur du fruit et la nervosité de son acidité, ce vin moelleux est un vrai petit bijou. Ses arômes de fruits frais (abricot, mangue, fruits exotiques) se prolongent dans une finale délicieuse et gourmande, jamais alourdie par une liqueur excessive.', 'blanc', 'vin3.jpg'),
(4, 'La Clarté de Haut-Brion', 'Second vin du Château Haut-Brion', 'blanc', 2017, 'Aux yeux de l amateur, le Château Haut-Brion s affirme comme le seigneur des Graves, seule propriété du secteur à avoir obtenu son classement aux côtés des prestigieux 1ers Crus du Médoc en 1855.', 'blanc', 'vin4.jpg'),
(5, 'Terrazas de los Andes Malbec', 'Mendoza', 'Malbec', 2018, 'Avec du rôti, Avec de la viande, Avec de la volaille, Avec des grillades, Avec du steak, Avec du gibier, Avec des plats mijotés', 'rouge', 'vin5.jpg'),
(6, 'La Villageoise', 'Castel', 'rouge qui tache', 2024, 'A déguster avec vos pires amis pour oublier vos soirées', 'rouge', 'vin6.jpg'),
(7, 'Coteaux du Layon', 'Layon', 'chenin B', 2018, 'Le coteaux-du-Layon est un vin blanc moelleux d appellation d origine contrôlée produit sur les coteaux bordant le Layon.', 'rouge', 'vin7.jpg');

INSERT INTO `workshop` VALUES (1, 1, '2023-09-06', 7), 
(2, 0, '2023-06-05', 10),
(3, 0, '2023-07-02', 5);
