// JavaScript Document

function set_up_band_db(){
	//alert("DB");
	
	
		//main stage = 0
		//second stage = 1
		//thrid stage = 2
		//fourth = 3
		//fifth = 4
		
		db.transaction(function (tx) {		
		
		//tx.executeSql('DROP TABLE bands');
		tx.executeSql('CREATE TABLE IF NOT EXISTS bands (id UNIQUE, band_name TEXT, stage TEXT, day INTEGER, start_time INTEGER, finish_time INTEGER, band_fav INTEGER, stage_rank INTEGER, day_name)');
		
		//Friday
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (1, "Summer Camp", "Obelisk Arena", 20150717, 1230, 1315, 0, 0, "Friday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (2, "Ed Harcourt", "Obelisk Arena", 20150717, 1335, 1420, 0, 0, "Friday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (3, "Nitin Sawhar", "Obelisk Arena", 20150717, 1430, 1515, 0, 0, "Friday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (4, "Femi Kuti & The Positive Force", "Obelisk Arena", 20150717, 1540, 1640, 0, 0, "Friday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (5, "Santigold", "Obelisk Arena", 20150717, 1700, 1800, 0, 0, "Friday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (6, "Wild Beasts", "Obelisk Arena", 20150717, 1830, 1930, 0, 0, "Friday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (7, "Caribou", "Obelisk Arena", 20150717, 2000, 2100, 0, 0, "Friday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (8, "Alt J", "Obelisk Arena", 20150717, 2130, 2305, 0, 0, "Friday")');
//Saturday
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (9, "Jp Cooper", "Obelisk Arena", 20150718, 1230, 1315, 0, 0, "Saturday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (10, "Benjamin Booker", "Obelisk Arena", 20150718, 1335, 1420, 0, 0, "Saturday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (11, "Badly Drawn Boy", "Obelisk Arena", 20150718, 1440, 1540, 0, 0, "Saturday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (12, "Jose Gonzales", "Obelisk Arena", 20150718, 1555, 1640, 0, 0, "Saturday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (13, "Lianne La Havas", "Obelisk Arena", 20150718, 1705, 1805, 0, 0, "Saturday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (14, "Laura Marling", "Obelisk Arena", 20150718, 1830, 1930, 0, 0, "Saturday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (15, "James Blake", "Obelisk Arena", 20150718, 2000, 2100, 0, 0, "Saturday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (16, "Portishead", "Obelisk Arena", 20150718, 2130, 2305, 0, 0, "Saturday")');
//Sunday
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (17, "Naomi Shelton & The Gospel Queens", "Obelisk Arena", 201507129, 1430, 1515, 0, 0, "Sunday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (18, "The Boomtown Rats", "Obelisk Arena", 201507129, 1540, 1640, 0, 0, "Sunday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (19, "Seasick Steve", "Obelisk Arena", 201507129, 1705, 1805, 0, 0, "Sunday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (20, "Warpaint", "Obelisk Arena", 201507129, 1830, 1930, 0, 0, "Sunday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (21, "Manic Street Preachers", "Obelisk Arena", 201507129, 2000, 2100, 0, 0, "Sunday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (22, "Noel Gallaghers High Flying Birds", "Obelisk Arena", 201507129, 2130, 2305, 0, 0, "Sunday")');



//Friday
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (23, "Soak", "BBC Radio 6 Music Stage", 20150717, 1200, 1240, 0, 1, "Friday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (24, "The Districts", "BBC Radio 6 Music Stage", 20150717, 1255, 1335, 0, 1, "Friday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (25, "Black Rivers", "BBC Radio 6 Music Stage", 20150717, 1350, 1430, 0, 1, "Friday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (26, "Unknown Mortal Orchestra", "BBC Radio 6 Music Stage", 20150717, 1455, 1535, 0, 1, "Friday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (27, "King Creosote", "BBC Radio 6 Music Stage", 20150717, 1555, 1635, 0, 1, "Friday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (28, "Toro Y Moi", "BBC Radio 6 Music Stage", 20150717, 1655, 1740, 0, 1, "Friday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (29, "Omar Souleyman", "BBC Radio 6 Music Stage", 20150717, 1800, 1855, 0, 1, "Friday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (30, "Public Service Broadcasting", "BBC Radio 6 Music Stage", 20150717, 1920, 2005, 0, 1, "Friday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (31, "Django Django", "BBC Radio 6 Music Stage", 20150717, 2030, 2115, 0, 1, "Friday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (32, "Jon Hopkins", "BBC Radio 6 Music Stage", 20150717, 2145, 2300, 0, 1, "Friday")');
//Saturday
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (33, "Tom Robinson & Band", "BBC Radio 6 Music Stage", 20150718, 1255, 1335, 0, 1, "Saturday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (34, "Drenge", "BBC Radio 6 Music Stage", 20150718, 1350, 1430, 0, 1, "Saturday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (35, "Thurston Moore Band", "BBC Radio 6 Music Stage", 20150718, 1455, 1535, 0, 1, "Saturday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (36, "Sun Kil Moon", "BBC Radio 6 Music Stage", 20150718, 1555, 1635, 0, 1, "Saturday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (37, "Wolf Alice", "BBC Radio 6 Music Stage", 20150718, 1655, 1740, 0, 1, "Saturday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (38, "The Charlatans", "BBC Radio 6 Music Stage", 20150718, 1800, 1855, 0, 1, "Saturday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (39, "Savages", "BBC Radio 6 Music Stage", 20150718, 1920, 2005, 0, 1, "Saturday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (40, "Catfish & The Bottlemen", "BBC Radio 6 Music Stage", 20150718, 2030, 2115, 0, 1, "Saturday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (41, "The Vaccines", "BBC Radio 6 Music Stage", 20150718, 2145, 2300, 0, 1, "Saturday")');
//Sunday
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (42, "A Winged Victory For The Sullen", "BBC Radio 6 Music Stage", 201507129, 1450, 1530, 0, 1, "Sunday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (43, "Kindness", "BBC Radio 6 Music Stage", 201507129, 1545, 1630, 0, 1, "Sunday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (44, "Kwabs", "BBC Radio 6 Music Stage", 201507129, 1655, 1740, 0, 1, "Sunday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (45, "Young Fathers", "BBC Radio 6 Music Stage", 201507129, 1805, 1900, 0, 1, "Sunday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (46, "Years & Years", "BBC Radio 6 Music Stage", 201507129, 1920, 2005, 0, 1, "Sunday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (47, "La Roux", "BBC Radio 6 Music Stage", 201507129, 2030, 2115, 0, 1, "Sunday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (48, "Sbtrkt", "BBC Radio 6 Music Stage", 201507129, 2145, 2300, 0, 1, "Sunday")');
		
		
		
		
		//Friday
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (49, "Dolores Haze", "iArena", 20150717, 1210, 1250, 0, 2, "Friday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (50, "Timber Timbre", "iArena", 20150717, 1320, 1400, 0, 2, "Friday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (51, "Curtis Harding", "iArena", 20150717, 1425, 1505, 0, 2, "Friday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (52, "King Gizzard & The Lizard Wizard", "iArena", 20150717, 1525, 1610, 0, 2, "Friday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (53, "Songhoy Blues", "iArena", 20150717, 1645, 1740, 0, 2, "Friday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (54, "Ezra Furman", "iArena", 20150717, 1820, 1905, 0, 2, "Friday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (55, "The Pains Of Being Pure At Heart", "iArena", 20150717, 1935, 2020, 0, 2, "Friday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (56, "Bill Wells & Aiden Mofatt", "iArena", 20150717, 2055, 2210, 0, 2, "Friday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (57, "Ben Ufo", "iArena", 20150717, 2300, 0000, 0, 2, "Friday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (58, "Alexander Nut", "iArena", 20150717, 0000, 0100, 0, 2, "Friday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (59, "The Busy Twist", "iArena", 20150717, 0100, 0200, 0, 2, "Friday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (60, "United Vibrations", "iArena", 20150717, 0200, 0300, 0, 2, "Friday")');
//Saturday
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (61, "Izzy Bizu", "iArena", 20150718, 1110, 1150, 0, 2, "Saturday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (62, "Haelos", "iArena", 20150718, 1200, 1240, 0, 2, "Saturday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (63, "Ben Khan", "iArena", 20150718, 1255, 1335, 0, 2, "Saturday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (64, "Nadine Shah", "iArena", 20150718, 1355, 1435, 0, 2, "Saturday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (65, "Marika Hackman", "iArena", 20150718, 1450, 1530, 0, 2, "Saturday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (66, "The Twilight Sad", "iArena", 20150718, 1545, 1625, 0, 2, "Saturday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (67, "Leon Bridges", "iArena", 20150718, 1645, 1730, 0, 2, "Saturday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (68, "Ibeyi", "iArena", 20150718, 1750, 1845, 0, 2, "Saturday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (69, "Grandbrothers", "iArena", 20150718, 1900, 1945, 0, 2, "Saturday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (70, "Kiasmos", "iArena", 20150718, 2010, 2055, 0, 2, "Saturday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (71, "Clark", "iArena", 20150718, 2110, 2225, 0, 2, "Saturday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (72, "Dj Ez", "iArena", 20150718, 2300, 0000, 0, 2, "Saturday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (73, "Monki", "iArena", 20150718, 0000, 0100, 0, 2, "Saturday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (74, "The Four Owls", "iArena", 20150718, 0100, 0200, 0, 2, "Saturday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (75, "Wekha", "iArena", 20150718, 0200, 0300, 0, 2, "Saturday")');
//Sunday
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (76, "Duke Garwood", "iArena", 201507129, 1210, 1255, 0, 2, "Sunday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (77, "Admiral Fallow", "iArena", 201507129, 1315, 1400, 0, 2, "Sunday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (78, "Dm Stith", "iArena", 201507129, 1425, 1510, 0, 2, "Sunday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (79, "Susanne Sundfor", "iArena", 201507129, 1525, 1605, 0, 2, "Sunday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (80, "Shura", "iArena", 201507129, 1625, 1705, 0, 2, "Sunday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (81, "Jack Garratt", "iArena", 201507129, 1730, 1810, 0, 2, "Sunday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (82, "Adult Jazz", "iArena", 201507129, 1845, 1940, 0, 2, "Sunday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (83, "Zola Jesus", "iArena", 201507129, 2000, 2050, 0, 2, "Sunday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (84, "The 2 Bears", "iArena", 201507129, 2120, 2220, 0, 2, "Sunday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (85, "Brand New Wayo", "iArena", 201507129, 2300, 2355, 0, 2, "Sunday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (86, "Nerija", "iArena", 201507129, 0000, 0100, 0, 2, "Sunday")');


//Friday
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (87, "Superglu", "The Lake Stage", 20150717, 1205, 1245, 0, 3, "Friday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (88, "Clarence Clarity", "The Lake Stage", 20150717, 1305, 1345, 0, 3, "Friday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (89, "Honne", "The Lake Stage", 20150717, 1405, 1445, 0, 3, "Friday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (90, "Man Made", "The Lake Stage", 20150717, 1510, 1550, 0, 3, "Friday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (91, "Sundara Karma", "The Lake Stage", 20150717, 1610, 1645, 0, 3, "Friday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (92, "Outfit", "The Lake Stage", 20150717, 1720, 1805, 0, 3, "Friday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (93, "Formation", "The Lake Stage", 20150717, 1835, 1910, 0, 3, "Friday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (94, "To Kill A King", "The Lake Stage", 20150717, 1950, 2055, 0, 3, "Friday")');
//Saturday
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (95, "Neon Waltz", "The Lake Stage", 20150718, 1225, 1305, 0, 3, "Saturday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (96, "Denai Moore", "The Lake Stage", 20150718, 1430, 1510, 0, 3, "Saturday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (97, "Boxed In", "The Lake Stage", 20150718, 1525, 1605, 0, 3, "Saturday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (98, "Petite Meller", "The Lake Stage", 20150718, 1625, 1705, 0, 3, "Saturday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (99, "Oscar", "The Lake Stage", 20150718, 1730, 1815, 0, 3, "Saturday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (100, "Pretty Vicious", "The Lake Stage", 20150718, 1840, 1935, 0, 3, "Saturday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (101, "Prides", "The Lake Stage", 20150718, 2010, 2055, 0, 3, "Saturday")');
//Sunday
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (102, "Frett", "The Lake Stage", 201507129, 1205, 1235, 0, 3, "Sunday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (103, "Superglu", "The Lake Stage", 201507129, 1250, 1320, 0, 3, "Sunday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (104, "Izzys Daughter", "The Lake Stage", 201507129, 1345, 1420, 0, 3, "Sunday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (105, "Gwenno", "The Lake Stage", 201507129, 1440, 1525, 0, 3, "Sunday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (106, "Charlie Cunningham", "The Lake Stage", 201507129, 1535, 1615, 0, 3, "Sunday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (107, "Eaves", "The Lake Stage", 201507129, 1635, 1730, 0, 3, "Sunday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (108, "Aquilo", "The Lake Stage", 201507129, 1750, 1825, 0, 3, "Sunday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (109, "Gulf", "The Lake Stage", 201507129, 1845, 1940, 0, 3, "Sunday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (110, "Rae Morris", "The Lake Stage", 201507129, 2005, 2055, 0, 3, "Sunday")');



//Friday
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (111, "Matt Woods", "The Alcove", 20150717, 1305, 1345, 0, 4, "Friday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (112, "Nao", "The Alcove", 20150717, 1415, 1455, 0, 4, "Friday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (113, "Max Jury", "The Alcove", 20150717, 1515, 1555, 0, 4, "Friday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (114, "Tor Miller", "The Alcove", 20150717, 1620, 1705, 0, 4, "Friday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (115, "Clean Cut Kid", "The Alcove", 20150717, 1735, 1815, 0, 4, "Friday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (116, "Seafret", "The Alcove", 20150717, 1835, 1915, 0, 4, "Friday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (117, "Oliver Daldry", "The Alcove", 20150717, 1935, 2015, 0, 4, "Friday")');
//Saturday
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (118, "Cove Hithe", "The Alcove", 20150718, 1320, 1400, 0, 4, "Saturday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (119, "Douglas Dare", "The Alcove", 20150718, 1430, 1510, 0, 4, "Saturday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (120, "R Seiliog", "The Alcove", 20150718, 1525, 1555, 0, 4, "Saturday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (121, "Real Lies", "The Alcove", 20150718, 1625, 1705, 0, 4, "Saturday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (122, "Jane Weaver", "The Alcove", 20150718, 1730, 1810, 0, 4, "Saturday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (123, "Lonelady", "The Alcove", 20150718, 1840, 1910, 0, 4, "Saturday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (124, "Josef Salvat", "The Alcove", 20150718, 1930, 2015, 0, 4, "Saturday")');
//Sunday
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (125, "Adam French", "The Alcove", 201507129, 1345, 1415, 0, 4, "Sunday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (126, "C Duncan", "The Alcove", 201507129, 1435, 1505, 0, 4, "Sunday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (127, "Tuff Love", "The Alcove", 201507129, 1535, 1605, 0, 4, "Sunday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (128, "Dmas", "The Alcove", 201507129, 1625, 1700, 0, 4, "Sunday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (129, "Rat Boy", "The Alcove", 201507129, 1725, 1800, 0, 4, "Sunday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (130, "Bad Breeding", "The Alcove", 201507129, 1825, 1855, 0, 4, "Sunday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (131, "Vessels", "The Alcove", 201507129, 1920, 2010, 0, 4, "Sunday")');


//Friday
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (132, "Jon Richardson", "Comedy", 20150717, 1600, 1630, 0, 5, "Friday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (133, "Elliot Steel", "Comedy", 20150717, 1500, 1530, 0, 5, "Friday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (134, "Russell Kane", "Comedy", 20150717, 1500, 1530, 0, 5, "Friday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (135, "Matt Forde", "Comedy", 20150717, 1500, 1530, 0, 5, "Friday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (136, "Angela Barnes", "Comedy", 20150717, 1500, 1530, 0, 5, "Friday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (137, "Daniel Sloss", "Comedy", 20150717, 1500, 1530, 0, 5, "Friday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (138, "Sarah Kendall", "Comedy", 20150717, 1500, 1530, 0, 5, "Friday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (139, "Matt Richardson", "Comedy", 20150717, 1500, 1530, 0, 5, "Friday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (140, "Dane Baptiste", "Comedy", 20150717, 1500, 1530, 0, 5, "Friday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (141, "Alan Davies", "Comedy", 20150717, 1500, 1530, 0, 5, "Friday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (142, "Elis James", "Comedy", 20150717, 1500, 1530, 0, 5, "Friday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (143, "Alex Edelman", "Comedy", 20150717, 1500, 1530, 0, 5, "Friday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (144, "Phil Wang", "Comedy", 20150717, 1500, 1530, 0, 5, "Friday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (145, "Zoe Lyons", "Comedy", 20150717, 1500, 1530, 0, 5, "Friday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (146, "Guilty Pleasures", "Comedy", 20150717, 1500, 1530, 0, 5, "Friday")');
//Saturday
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (147, "David Odoherty", "Comedy", 20150718, 1600, 1630, 0, 5, "Saturday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (148, "Marcus Brigstocke", "Comedy", 20150718, 1500, 1530, 0, 5, "Saturday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (149, "Sara Pascoe", "Comedy", 20150718, 1500, 1530, 0, 5, "Saturday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (150, "Joe Lycett", "Comedy", 20150718, 1500, 1530, 0, 5, "Saturday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (151, "Andrew Maxwell", "Comedy", 20150718, 1500, 1530, 0, 5, "Saturday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (152, "Tiffany Stevenson", "Comedy", 20150718, 1500, 1530, 0, 5, "Saturday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (153, "John Robins", "Comedy", 20150718, 1500, 1530, 0, 5, "Saturday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (154, "Rob Delaney", "Comedy", 20150718, 1500, 1530, 0, 5, "Saturday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (155, "Ivo Graham", "Comedy", 20150718, 1500, 1530, 0, 5, "Saturday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (156, "Rob Beckett", "Comedy", 20150718, 1500, 1530, 0, 5, "Saturday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (157, "Funz And Gamez", "Comedy", 20150718, 1500, 1530, 0, 5, "Saturday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (158, "Nish Kumar", "Comedy", 20150718, 1500, 1530, 0, 5, "Saturday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (159, "Buttoned Down Disco", "Comedy", 20150718, 1500, 1530, 0, 5, "Saturday")');
//Sunday
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (160, "Jason Manford", "Comedy", 201507129, 1600, 1630, 0, 5, "Sunday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (161, "Shappi Khorsandi", "Comedy", 201507129, 1500, 1530, 0, 5, "Sunday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (162, "Jason Byrne", "Comedy", 201507129, 1500, 1530, 0, 5, "Sunday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (163, "James Acaster", "Comedy", 201507129, 1500, 1530, 0, 5, "Sunday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (164, "Holly Walsh", "Comedy", 201507129, 1500, 1530, 0, 5, "Sunday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (165, "Katherine Ryan", "Comedy", 201507129, 1500, 1530, 0, 5, "Sunday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (166, "Romesh Ranganathan", "Comedy", 201507129, 1500, 1530, 0, 5, "Sunday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (167, "Aisling Bea", "Comedy", 201507129, 1500, 1530, 0, 5, "Sunday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (168, "Tom Deacon", "Comedy", 201507129, 1500, 1530, 0, 5, "Sunday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (169, "The Last Leg Live With Adam Hills Josh Widdicombe And Alex Brooker", "Comedy", 201507129, 1500, 1530, 0, 5, "Sunday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (170, "Carl Donnelly", "Comedy", 201507129, 1500, 1530, 0, 5, "Sunday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (171, "Jarlath Regan", "Comedy", 201507129, 1500, 1530, 0, 5, "Sunday")');
		

	});
	
	
	//updates here
	db.transaction(function(tx){
		//tx.executeSql('UPDATE bands SET start_time=1700 WHERE id=1');
		//tx.executeSql('DELETE FROM bands WHERE id=74');
		//Friday

		set_up_main_page();
	});
}













