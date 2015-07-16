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
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (17, "Naomi Shelton & The Gospel Queens", "Obelisk Arena", 20150719, 1430, 1515, 0, 0, "Sunday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (18, "The Boomtown Rats", "Obelisk Arena", 20150719, 1540, 1640, 0, 0, "Sunday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (19, "Seasick Steve", "Obelisk Arena", 20150719, 1705, 1805, 0, 0, "Sunday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (20, "Warpaint", "Obelisk Arena", 20150719, 1830, 1930, 0, 0, "Sunday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (21, "Manic Street Preachers", "Obelisk Arena", 20150719, 2000, 2100, 0, 0, "Sunday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (22, "Noel Gallaghers High Flying Birds", "Obelisk Arena", 20150719, 2130, 2305, 0, 0, "Sunday")');



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
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (42, "A Winged Victory For The Sullen", "BBC Radio 6 Music Stage", 20150719, 1450, 1530, 0, 1, "Sunday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (43, "Kindness", "BBC Radio 6 Music Stage", 20150719, 1545, 1630, 0, 1, "Sunday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (44, "Kwabs", "BBC Radio 6 Music Stage", 20150719, 1655, 1740, 0, 1, "Sunday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (45, "Young Fathers", "BBC Radio 6 Music Stage", 20150719, 1805, 1900, 0, 1, "Sunday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (46, "Years & Years", "BBC Radio 6 Music Stage", 20150719, 1920, 2005, 0, 1, "Sunday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (47, "La Roux", "BBC Radio 6 Music Stage", 20150719, 2030, 2115, 0, 1, "Sunday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (48, "Sbtrkt", "BBC Radio 6 Music Stage", 20150719, 2145, 2300, 0, 1, "Sunday")');
		
		
		
		
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
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (76, "Duke Garwood", "iArena", 20150719, 1210, 1255, 0, 2, "Sunday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (77, "Admiral Fallow", "iArena", 20150719, 1315, 1400, 0, 2, "Sunday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (78, "Dm Stith", "iArena", 20150719, 1425, 1510, 0, 2, "Sunday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (79, "Susanne Sundfor", "iArena", 20150719, 1525, 1605, 0, 2, "Sunday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (80, "Shura", "iArena", 20150719, 1625, 1705, 0, 2, "Sunday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (81, "Jack Garratt", "iArena", 20150719, 1730, 1810, 0, 2, "Sunday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (82, "Adult Jazz", "iArena", 20150719, 1845, 1940, 0, 2, "Sunday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (83, "Zola Jesus", "iArena", 20150719, 2000, 2050, 0, 2, "Sunday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (84, "The 2 Bears", "iArena", 20150719, 2120, 2220, 0, 2, "Sunday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (85, "Brand New Wayo", "iArena", 20150719, 2300, 2355, 0, 2, "Sunday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (86, "Nerija", "iArena", 20150719, 0000, 0100, 0, 2, "Sunday")');


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
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (102, "Frett", "The Lake Stage", 20150719, 1205, 1235, 0, 3, "Sunday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (103, "Superglu", "The Lake Stage", 20150719, 1250, 1320, 0, 3, "Sunday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (104, "Izzys Daughter", "The Lake Stage", 20150719, 1345, 1420, 0, 3, "Sunday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (105, "Gwenno", "The Lake Stage", 20150719, 1440, 1525, 0, 3, "Sunday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (106, "Charlie Cunningham", "The Lake Stage", 20150719, 1535, 1615, 0, 3, "Sunday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (107, "Eaves", "The Lake Stage", 20150719, 1635, 1730, 0, 3, "Sunday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (108, "Aquilo", "The Lake Stage", 20150719, 1750, 1825, 0, 3, "Sunday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (109, "Gulf", "The Lake Stage", 20150719, 1845, 1940, 0, 3, "Sunday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (110, "Rae Morris", "The Lake Stage", 20150719, 2005, 2055, 0, 3, "Sunday")');



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
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (125, "Adam French", "The Alcove", 20150719, 1345, 1415, 0, 4, "Sunday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (126, "C Duncan", "The Alcove", 20150719, 1435, 1505, 0, 4, "Sunday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (127, "Tuff Love", "The Alcove", 20150719, 1535, 1605, 0, 4, "Sunday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (128, "Dmas", "The Alcove", 20150719, 1625, 1700, 0, 4, "Sunday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (129, "Rat Boy", "The Alcove", 20150719, 1725, 1800, 0, 4, "Sunday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (130, "Bad Breeding", "The Alcove", 20150719, 1825, 1855, 0, 4, "Sunday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (131, "Vessels", "The Alcove", 20150719, 1920, 2010, 0, 4, "Sunday")');


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
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (160, "Jason Manford", "Comedy", 20150719, 1600, 1630, 0, 5, "Sunday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (161, "Shappi Khorsandi", "Comedy", 20150719, 1500, 1530, 0, 5, "Sunday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (162, "Jason Byrne", "Comedy", 20150719, 1500, 1530, 0, 5, "Sunday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (163, "James Acaster", "Comedy", 20150719, 1500, 1530, 0, 5, "Sunday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (164, "Holly Walsh", "Comedy", 20150719, 1500, 1530, 0, 5, "Sunday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (165, "Katherine Ryan", "Comedy", 20150719, 1500, 1530, 0, 5, "Sunday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (166, "Romesh Ranganathan", "Comedy", 20150719, 1500, 1530, 0, 5, "Sunday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (167, "Aisling Bea", "Comedy", 20150719, 1500, 1530, 0, 5, "Sunday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (168, "Tom Deacon", "Comedy", 20150719, 1500, 1530, 0, 5, "Sunday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (169, "The Last Leg Live With Adam Hills Josh Widdicombe And Alex Brooker", "Comedy", 20150719, 1500, 1530, 0, 5, "Sunday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (170, "Carl Donnelly", "Comedy", 20150719, 1500, 1530, 0, 5, "Sunday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (171, "Jarlath Regan", "Comedy", 20150719, 1500, 1530, 0, 5, "Sunday")');
		

	});
	
	
	//updates here
	db.transaction(function(tx){
		//tx.executeSql('UPDATE bands SET start_time=1700 WHERE id=1');
		//tx.executeSql('DELETE FROM bands WHERE id=74');
		//Friday
		tx.executeSql('UPDATE bands SET day="20150719" WHERE day="201507129"');
		
		
		//Friday
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (172, "Booka Brass Band", "Other Voices", 20150717, 1335, 1415, 0, 6, "Friday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (173, "Rozi Plain", "Other Voices", 20150717, 1435, 1515, 0, 6, "Friday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (174, "Fight Like Apes", "Other Voices", 20150717, 1535, 1615, 0, 6, "Friday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (175, "This Is The Kit", "Other Voices", 20150717, 1630, 1720, 0, 6, "Friday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (176, "All Tvvins", "Other Voices", 20150717, 1740, 1825, 0, 6, "Friday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (177, "All We Are", "Other Voices", 20150717, 1845, 1930, 0, 6, "Friday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (178, "Le Galaxie", "Other Voices", 20150717, 2000, 2100, 0, 6, "Friday")');
//Saturday
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (179, "Zachary Lucky", "Other Voices", 20150718, 1435, 1515, 0, 6, "Saturday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (180, "Colm Mac Con Iomare", "Other Voices", 20150718, 1535, 1615, 0, 6, "Saturday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (181, "Bleeding Heart Pigeons", "Other Voices", 20150718, 1635, 1720, 0, 6, "Saturday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (182, "Mahalia", "Other Voices", 20150718, 1740, 1825, 0, 6, "Saturday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (183, "Nathaniel Rateliffe And The Night Sweats", "Other Voices", 20150718, 1845, 1930, 0, 6, "Saturday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (184, "The Unthanks", "Other Voices", 20150718, 2000, 2100, 0, 6, "Saturday")');
//Sunday
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (185, "Eaves", "Other Voices", 20150719, 1435, 1515, 0, 6, "Sunday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (186, "Guest", "Other Voices", 20150719, 1535, 1615, 0, 6, "Sunday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (187, "Jape", "Other Voices", 20150719, 1635, 1720, 0, 6, "Sunday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (188, "Aquilo", "Other Voices", 20150719, 1740, 1825, 0, 6, "Sunday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (189, "East India Youth", "Other Voices", 20150719, 1845, 1930, 0, 6, "Sunday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (190, "Young Fathers", "Other Voices", 20150719, 2150, 2250, 0, 6, "Sunday")');


tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (191, "Clare Maguire", "The Lake Stage", 20150718, 1120, 1145, 0, 3, "Saturday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (192, "Beach Baby", "The Lake Stage", 20150718, 1240, 1310, 0, 3, "Saturday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (193, "Blossoms", "The Lake Stage", 20150718, 1420, 1500, 0, 3, "Saturday")');


tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (194, "Monki", "iArena", 20150719, 0110, 0150, 0, 2, "Sunday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (195, "Mella Dee", "iArena", 20150719, 0200, 0250, 0, 2, "Sunday")');

tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (196, "Theo Verney", "The Lake Stage", 20150719, 1345, 1420, 0, 3, "Sunday")');

tx.executeSql('DELETE FROM bands WHERE id=103');
tx.executeSql('UPDATE bands SET day="20150718",day_name="Saturday" WHERE id=102 ');
tx.executeSql('UPDATE bands SET start_time=1325 WHERE id=95 ');
tx.executeSql('UPDATE bands SET start_time=1250, finish_time=1325 WHERE id=104 ');

		
		
	});
		
		db.transaction(function(tx){
		
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (197, "Gareth Malone presents Voices and the Latitude Choir", "Obelisk Arena", 20150719, 1230, 1315, 0, 0, "Sunday")');
		tx.executeSql('DELETE FROM bands WHERE id=146');
		tx.executeSql('DELETE FROM bands WHERE id=159');
		tx.executeSql('DELETE FROM bands WHERE id=158');
		tx.executeSql('DELETE FROM bands WHERE id=170');
		tx.executeSql('DELETE FROM bands WHERE id=171');
		tx.executeSql('DELETE FROM bands WHERE id=188');
		
		//insert stornoway
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (198, "Stornoway", "Other Voices", 20150719, 1850, 2020, 0, 6, "Sunday")');
		
		
	tx.executeSql(' UPDATE bands SET start_time=1230, finish_time=1315 WHERE band_name="Summer Camp" ');
tx.executeSql(' UPDATE bands SET start_time=1335, finish_time=1425 WHERE band_name="Ed Harcourt" ');
tx.executeSql(' UPDATE bands SET start_time=1445, finish_time=1535 WHERE band_name="Nitin Sawhar" ');
tx.executeSql(' UPDATE bands SET start_time=1600, finish_time=1655 WHERE band_name="Femi Kuti & The Positive Force" ');
tx.executeSql(' UPDATE bands SET start_time=1720, finish_time=1810 WHERE band_name="Santigold" ');
tx.executeSql(' UPDATE bands SET start_time=1840, finish_time=1930 WHERE band_name="Wild Beasts" ');
tx.executeSql(' UPDATE bands SET start_time=2000, finish_time=2100 WHERE band_name="Caribou" ');
tx.executeSql(' UPDATE bands SET start_time=2130, finish_time=2300 WHERE band_name="Alt J" ');
tx.executeSql(' UPDATE bands SET start_time=1200, finish_time=1300 WHERE band_name="Jp Cooper" ');
tx.executeSql(' UPDATE bands SET start_time=1320, finish_time=1400 WHERE band_name="Benjamin Booker" ');
tx.executeSql(' UPDATE bands SET start_time=1420, finish_time=1520 WHERE band_name="Badly Drawn Boy" ');
tx.executeSql(' UPDATE bands SET start_time=1545, finish_time=1640 WHERE band_name="Jose Gonzales" ');
tx.executeSql(' UPDATE bands SET start_time=1705, finish_time=1800 WHERE band_name="Lianne La Havas" ');
tx.executeSql(' UPDATE bands SET start_time=1830, finish_time=1930 WHERE band_name="Laura Marling" ');
tx.executeSql(' UPDATE bands SET start_time=2000, finish_time=2100 WHERE band_name="James Blake" ');
tx.executeSql(' UPDATE bands SET start_time=2130, finish_time=2300 WHERE band_name="Portishead" ');
tx.executeSql(' UPDATE bands SET start_time=1350, finish_time=1450 WHERE band_name="Naomi Shelton & The Gospel Queens" ');
tx.executeSql(' UPDATE bands SET start_time=1520, finish_time=1620 WHERE band_name="The Boomtown Rats" ');
tx.executeSql(' UPDATE bands SET start_time=1715, finish_time=1815 WHERE band_name="Seasick Steve" ');
tx.executeSql(' UPDATE bands SET start_time=1830, finish_time=1930 WHERE band_name="Warpaint" ');
tx.executeSql(' UPDATE bands SET start_time=2000, finish_time=2100 WHERE band_name="Manic Street Preachers" ');
tx.executeSql(' UPDATE bands SET start_time=2130, finish_time=2300 WHERE band_name="Noel Gallaghers High Flying Birds" ');



tx.executeSql(' UPDATE bands SET start_time=1530, finish_time=1640 WHERE band_name="Booka Brass Band" ');
tx.executeSql(' UPDATE bands SET start_time=1640, finish_time=1735 WHERE band_name="Rozi Plain" ');
tx.executeSql(' UPDATE bands SET start_time=1735, finish_time=1850 WHERE band_name="Fight Like Apes" ');
tx.executeSql(' UPDATE bands SET start_time=1850, finish_time=2010 WHERE band_name="This Is The Kit" ');
tx.executeSql(' UPDATE bands SET start_time=2010, finish_time=2140 WHERE band_name="All Tvvins" ');
tx.executeSql(' UPDATE bands SET start_time=2140, finish_time=2310 WHERE band_name="All We Are" ');
tx.executeSql(' UPDATE bands SET start_time=2310, finish_time=0010 WHERE band_name="Le Galaxie" ');
tx.executeSql(' UPDATE bands SET start_time=1530, finish_time=1645 WHERE band_name="Zachary Lucky" ');
tx.executeSql(' UPDATE bands SET start_time=1645, finish_time=1805 WHERE band_name="Colm Mac Con Iomare" ');
tx.executeSql(' UPDATE bands SET start_time=1805, finish_time=1920 WHERE band_name="Bleeding Heart Pigeons" ');
tx.executeSql(' UPDATE bands SET start_time=1920, finish_time=2040 WHERE band_name="Mahalia" ');
tx.executeSql(' UPDATE bands SET start_time=2040, finish_time=2220 WHERE band_name="Nathaniel Rateliffe And The Night Sweats" ');
tx.executeSql(' UPDATE bands SET start_time=2220, finish_time=2320 WHERE band_name="The Unthanks" ');
tx.executeSql(' UPDATE bands SET start_time=1530, finish_time=1620 WHERE id=185 ');
tx.executeSql(' UPDATE bands SET start_time=1620, finish_time=1720 WHERE band_name="Guest" ');
tx.executeSql(' UPDATE bands SET start_time=1720, finish_time=1850 WHERE band_name="Jape" ');
tx.executeSql(' UPDATE bands SET start_time=1850, finish_time=2020 WHERE band_name="Stornoway" ');
tx.executeSql(' UPDATE bands SET start_time=2020, finish_time=2150 WHERE band_name="East India Youth" ');
tx.executeSql(' UPDATE bands SET start_time=2150, finish_time=2250 WHERE id=190 ');


tx.executeSql(' UPDATE bands SET start_time=1105, finish_time=1205 WHERE band_name="Phil Wang" ');
tx.executeSql(' UPDATE bands SET start_time=1215, finish_time=1245 WHERE band_name="Alex Edelman" ');
tx.executeSql(' UPDATE bands SET start_time=1245, finish_time=1315 WHERE band_name="Elis James" ');
tx.executeSql(' UPDATE bands SET start_time=1315, finish_time=1400 WHERE band_name="Alan Davies" ');
tx.executeSql(' UPDATE bands SET start_time=1410, finish_time=1435 WHERE band_name="Dane Baptiste" ');
tx.executeSql(' UPDATE bands SET start_time=1425, finish_time=1500 WHERE band_name="Matt Richardson" ');
tx.executeSql(' UPDATE bands SET start_time=1500, finish_time=1530 WHERE band_name="Sarah Kendall" ');
tx.executeSql(' UPDATE bands SET start_time=1530, finish_time=1600 WHERE band_name="Daniel Sloss" ');
tx.executeSql(' UPDATE bands SET start_time=1605, finish_time=1635 WHERE band_name="Angela Barnes" ');
tx.executeSql(' UPDATE bands SET start_time=1635, finish_time=1700 WHERE band_name="Matt Forde" ');
tx.executeSql(' UPDATE bands SET start_time=1700, finish_time=1745 WHERE band_name="Russell Kane" ');
tx.executeSql(' UPDATE bands SET start_time=1750, finish_time=1800 WHERE band_name="Elliot Steel" ');
tx.executeSql(' UPDATE bands SET start_time=1800, finish_time=1845 WHERE band_name="Jon Richardson" ');
tx.executeSql(' UPDATE bands SET start_time=1105, finish_time=1205 WHERE band_name="Funz And Gamez" ');
tx.executeSql(' UPDATE bands SET start_time=1210, finish_time=1240 WHERE band_name="Rob Beckett" ');
tx.executeSql(' UPDATE bands SET start_time=1240, finish_time=1305 WHERE band_name="Ivo Graham" ');
tx.executeSql(' UPDATE bands SET start_time=1305, finish_time=1350 WHERE band_name="Rob Delaney" ');
tx.executeSql(' UPDATE bands SET start_time=1400, finish_time=1430 WHERE band_name="John Robins" ');
tx.executeSql(' UPDATE bands SET start_time=1430, finish_time=1500 WHERE band_name="Tiffany Stevenson" ');
tx.executeSql(' UPDATE bands SET start_time=1500, finish_time=1545 WHERE band_name="Andrew Maxwell" ');
tx.executeSql(' UPDATE bands SET start_time=1555, finish_time=1625 WHERE band_name="Joe Lycett" ');
tx.executeSql(' UPDATE bands SET start_time=1625, finish_time=1705 WHERE band_name="Sarah Pascoe" ');
tx.executeSql(' UPDATE bands SET start_time=1705, finish_time=1750 WHERE band_name="Marcus Brigstocke" ');
tx.executeSql(' UPDATE bands SET start_time=1800, finish_time=1845 WHERE band_name="David Odoherty" ');
tx.executeSql(' UPDATE bands SET start_time=1105, finish_time=1200 WHERE band_name="The Last Leg Live With Adam Hills Josh Widdicombe And Alex Brooker" ');
tx.executeSql(' UPDATE bands SET start_time=1210, finish_time=1240 WHERE band_name="Tom Deacon" ');
tx.executeSql(' UPDATE bands SET start_time=1240, finish_time=1315 WHERE band_name="Aisling Bea" ');
tx.executeSql(' UPDATE bands SET start_time=1315, finish_time=1355 WHERE band_name="Romesh Ranganathan" ');
tx.executeSql(' UPDATE bands SET start_time=1355, finish_time=1440 WHERE band_name="Katherine Ryan" ');
tx.executeSql(' UPDATE bands SET start_time=1445, finish_time=1515 WHERE band_name="Holly Walsh" ');
tx.executeSql(' UPDATE bands SET start_time=1515, finish_time=1545 WHERE band_name="James Acaster" ');
tx.executeSql(' UPDATE bands SET start_time=1545, finish_time=1630 WHERE band_name="Jason Byrne" ');
tx.executeSql(' UPDATE bands SET start_time=1635, finish_time=1715 WHERE band_name="Shappi Khorsandi" ');
tx.executeSql(' UPDATE bands SET start_time=1715, finish_time=1815 WHERE band_name="Jason Manford" ');

tx.executeSql(' UPDATE bands SET start_time=1625, finish_time=1705 WHERE band_name="Sara Pascoe" ');
		
		
		
		});
		
		db.transaction(function(tx){
		
		
		tx.executeSql('DELETE FROM bands WHERE id=145');
		tx.executeSql('DELETE FROM bands WHERE id=29');
		
		tx.executeSql(' UPDATE bands SET start_time=2140, finish_time=2240 WHERE band_name="All We Are" ');
tx.executeSql(' UPDATE bands SET start_time=2010, finish_time=2110 WHERE band_name="All Tvvins" ');
tx.executeSql(' UPDATE bands SET start_time=1850, finish_time=1940 WHERE band_name="This Is The Kit" ');
tx.executeSql(' UPDATE bands SET start_time=1720, finish_time=1820 WHERE band_name="Fight Like Apes" ');
tx.executeSql(' UPDATE bands SET start_time=1640, finish_time=1710 WHERE band_name="Rozi Plain" ');
tx.executeSql(' UPDATE bands SET start_time=1530, finish_time=1620 WHERE band_name="Booka Brass Band" ');
tx.executeSql(' UPDATE bands SET start_time=2040, finish_time=2140, band_name="Nathaniel Rateliff And The Night Sweats" WHERE id=183 ');
tx.executeSql(' UPDATE bands SET start_time=1920, finish_time=2005 WHERE band_name="Mahalia" ');
tx.executeSql(' UPDATE bands SET start_time=1805, finish_time=1850 WHERE band_name="Bleeding Heart Pigeons" ');
tx.executeSql(' UPDATE bands SET start_time=1645, finish_time=1735, band_name="Colm Mac Con Iomaire" WHERE id=180 ');
tx.executeSql(' UPDATE bands SET start_time=1530, finish_time=1615 WHERE band_name="Zachary Lucky" ');
tx.executeSql(' UPDATE bands SET start_time=2020, finish_time=2120 WHERE band_name="East India Youth" ');
tx.executeSql(' UPDATE bands SET start_time=1850, finish_time=1950 WHERE band_name="Stornoway" ');
tx.executeSql(' UPDATE bands SET start_time=2200, finish_time=2300 WHERE band_name="Jon Hopkins" ');
tx.executeSql(' UPDATE bands SET start_time=2030, finish_time=2130 WHERE band_name="Django Django" ');
tx.executeSql(' UPDATE bands SET start_time=1900, finish_time=2000 WHERE band_name="Public Service Broadcasting" ');
tx.executeSql(' UPDATE bands SET start_time=1750, finish_time=1840 WHERE band_name="Toro Y Moi" ');
tx.executeSql(' UPDATE bands SET start_time=1630, finish_time=1730 WHERE band_name="King Creosote" ');
tx.executeSql(' UPDATE bands SET start_time=1520, finish_time=1610 WHERE band_name="Unknown Mortal Orchestra" ');
tx.executeSql(' UPDATE bands SET start_time=1415, finish_time=1500 WHERE band_name="Black Rivers" ');
tx.executeSql(' UPDATE bands SET start_time=1315, finish_time=1355 WHERE band_name="The Districts" ');
tx.executeSql(' UPDATE bands SET start_time=1215, finish_time=1255 WHERE band_name="Soak" ');
tx.executeSql(' UPDATE bands SET start_time=2200, finish_time=2300 WHERE band_name="The Vaccines" ');
tx.executeSql(' UPDATE bands SET start_time=2045, finish_time=2130 WHERE band_name="Catfish & The Bottlemen" ');
tx.executeSql(' UPDATE bands SET start_time=1940, finish_time=2015 WHERE band_name="Savages" ');
tx.executeSql(' UPDATE bands SET start_time=1750, finish_time=1850 WHERE band_name="The Charlatans" ');
tx.executeSql(' UPDATE bands SET start_time=1630, finish_time=1720 WHERE band_name="Wolf Alice" ');
tx.executeSql(' UPDATE bands SET start_time=1510, finish_time=1600 WHERE band_name="Sun Kil Moon" ');
tx.executeSql(' UPDATE bands SET start_time=1405, finish_time=1455 WHERE band_name="Thurston Moore Band" ');
tx.executeSql(' UPDATE bands SET start_time=1310, finish_time=1350 WHERE band_name="Drenge" ');
tx.executeSql(' UPDATE bands SET start_time=1210, finish_time=1250 WHERE band_name="Tom Robinson & Band" ');
tx.executeSql(' UPDATE bands SET start_time=2145, finish_time=2300 WHERE band_name="Sbtrkt" ');
tx.executeSql(' UPDATE bands SET start_time=1935, finish_time=2035 WHERE band_name="La Roux" ');
tx.executeSql(' UPDATE bands SET start_time=1805, finish_time=1855 WHERE band_name="Years & Years" ');
tx.executeSql(' UPDATE bands SET start_time=1655, finish_time=1740 WHERE id=45 ');
tx.executeSql(' UPDATE bands SET start_time=1545, finish_time=1630 WHERE band_name="Kwabs" ');
tx.executeSql(' UPDATE bands SET start_time=1450, finish_time=1530 WHERE band_name="Kindness" ');
tx.executeSql(' UPDATE bands SET start_time=1350, finish_time=1430 WHERE band_name="A Winged Victory For The Sullen" ');
		
tx.executeSql(' UPDATE bands SET band_name="Sample Answer", start_time=1620, finish_time=1650 WHERE id=186 ');	
tx.executeSql(' UPDATE bands SET start_time=1530, finish_time=1600 WHERE id=185 ');
tx.executeSql(' UPDATE bands SET band_name="Nitin Sawhney" WHERE id=3 ');
		
		
		});
		
		db.transaction(function(tx){
		
		
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (199, "Gengahr", "iArena", 20150717, 1810, 1850, 0, 2, "Friday")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (200, "Beaty Heart", "iArena", 20150719, 1245, 1315, 0, 2, "Sunday")');
		
		tx.executeSql('DELETE FROM bands WHERE id=73');
		tx.executeSql('DELETE FROM bands WHERE id=60');
		
		tx.executeSql(' UPDATE bands SET start_time=2130, finish_time=2215, band_name="Bill Wells & Aidan Mofatt" WHERE id=56 ');
tx.executeSql(' UPDATE bands SET start_time=2020, finish_time=2105 WHERE band_name="The Pains Of Being Pure At Heart" ');
tx.executeSql(' UPDATE bands SET start_time=1905, finish_time=1955 WHERE band_name="Ezra Furman" ');
tx.executeSql(' UPDATE bands SET start_time=1700, finish_time=1745 WHERE band_name="Songhoy Blues" ');
tx.executeSql(' UPDATE bands SET start_time=1555, finish_time=1635 WHERE band_name="King Gizzard & The Lizard Wizard" ');
tx.executeSql(' UPDATE bands SET start_time=1425, finish_time=1530 WHERE band_name="Curtis Harding" ');
tx.executeSql(' UPDATE bands SET start_time=1325, finish_time=1420 WHERE band_name="Timber Timbre" ');
tx.executeSql(' UPDATE bands SET start_time=1225, finish_time=1305 WHERE band_name="Dolores Haze" ');
tx.executeSql(' UPDATE bands SET start_time=2145, finish_time=2245 WHERE band_name="Clark" ');
tx.executeSql(' UPDATE bands SET start_time=2040, finish_time=2125 WHERE band_name="Kiasmos" ');
tx.executeSql(' UPDATE bands SET start_time=1945, finish_time=2020 WHERE band_name="Grandbrothers" ');
tx.executeSql(' UPDATE bands SET start_time=1850, finish_time=1925 WHERE band_name="Ibeyi" ');
tx.executeSql(' UPDATE bands SET start_time=1750, finish_time=1830 WHERE band_name="Leon Bridges" ');
tx.executeSql(' UPDATE bands SET start_time=1645, finish_time=1725 WHERE band_name="The Twilight Sad" ');
tx.executeSql(' UPDATE bands SET start_time=1540, finish_time=1620 WHERE band_name="Marika Hackman" ');
tx.executeSql(' UPDATE bands SET start_time=1430, finish_time=1510 WHERE band_name="Nadine Shah" ');
tx.executeSql(' UPDATE bands SET start_time=1340, finish_time=1410 WHERE band_name="Ben Khan" ');
tx.executeSql(' UPDATE bands SET start_time=1250, finish_time=1320 WHERE band_name="Haelos" ');
tx.executeSql(' UPDATE bands SET start_time=1200, finish_time=1230 WHERE band_name="Izzy Bizu" ');
tx.executeSql(' UPDATE bands SET start_time=2155, finish_time=2240 WHERE band_name="The 2 Bears" ');
tx.executeSql(' UPDATE bands SET start_time=2055, finish_time=2135 WHERE band_name="Zola Jesus" ');
tx.executeSql(' UPDATE bands SET start_time=1955, finish_time=2035 WHERE band_name="Adult Jazz" ');
tx.executeSql(' UPDATE bands SET start_time=1905, finish_time=1935 WHERE band_name="Jack Garratt" ');
tx.executeSql(' UPDATE bands SET start_time=1810, finish_time=1845 WHERE band_name="Shura" ');
tx.executeSql(' UPDATE bands SET start_time=1700, finish_time=1740 WHERE band_name="Susanne Sundfor" ');
tx.executeSql(' UPDATE bands SET start_time=1550, finish_time=1630 WHERE band_name="Dm Stith" ');
tx.executeSql(' UPDATE bands SET start_time=1445, finish_time=1530 WHERE band_name="Admiral Fallow" ');
tx.executeSql(' UPDATE bands SET start_time=1340, finish_time=1425 WHERE band_name="Duke Garwood" ');
tx.executeSql(' UPDATE bands SET start_time=0200, finish_time=0300 WHERE band_name="Ben Ufo" ');
tx.executeSql(' UPDATE bands SET start_time=0100, finish_time=0200 WHERE band_name="Alexander Nut" ');
tx.executeSql(' UPDATE bands SET start_time=2300, finish_time=0100 WHERE band_name="The Busy Twist" ');
tx.executeSql(' UPDATE bands SET start_time=0200, finish_time=0300 WHERE band_name="Dj Ez" ');
tx.executeSql(' UPDATE bands SET start_time=2345, finish_time=0030, band_name="Werkha" WHERE id=75 ');
tx.executeSql(' UPDATE bands SET start_time=2300, finish_time=2345 WHERE band_name="The Four Owls" ');
tx.executeSql(' UPDATE bands SET start_time=0200, finish_time=0300 WHERE band_name="Monki" ');
tx.executeSql(' UPDATE bands SET start_time=0100, finish_time=0200 WHERE band_name="Mella Dee" ');
tx.executeSql(' UPDATE bands SET start_time=0000, finish_time=0100 WHERE band_name="Brand New Wayo" ');
tx.executeSql(' UPDATE bands SET start_time=2300, finish_time=2340 WHERE band_name="Nerija" ');
		
		});
		
		
		
	db.transaction(function(tx){
		
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (201, "Georgia", "The Lake Stage", 20150717, 1430, 1500, 0, 3, "Friday")');
		
		tx.executeSql('DELETE FROM bands WHERE id=191');
		tx.executeSql('UPDATE bands SET start_time=1720, finish_time=1755 WHERE id=107 ');
		
		
		
		
		tx.executeSql(' UPDATE bands SET start_time=2045, finish_time=2130 WHERE band_name="To Kill A King" ');
tx.executeSql(' UPDATE bands SET start_time=1935, finish_time=2015 WHERE band_name="Formation" ');
tx.executeSql(' UPDATE bands SET start_time=1755, finish_time=1825 WHERE band_name="Sundara Karma" ');
tx.executeSql(' UPDATE bands SET start_time=1845, finish_time=1915 WHERE band_name="Outfit" ');
tx.executeSql(' UPDATE bands SET start_time=1705, finish_time=1735 WHERE band_name="Man Made" ');
tx.executeSql(' UPDATE bands SET start_time=1610, finish_time=1640 WHERE band_name="Honne" ');
tx.executeSql(' UPDATE bands SET start_time=1520, finish_time=1550 WHERE band_name="Clarence Clarity" ');
tx.executeSql(' UPDATE bands SET start_time=1340, finish_time=1410 WHERE band_name="Superglu" ');
tx.executeSql(' UPDATE bands SET start_time=2045, finish_time=2130 WHERE band_name="Prides" ');
tx.executeSql(' UPDATE bands SET start_time=1935, finish_time=2015 WHERE band_name="Pretty Vicious" ');
tx.executeSql(' UPDATE bands SET start_time=1845, finish_time=1915 WHERE band_name="Oscar" ');
tx.executeSql(' UPDATE bands SET start_time=1755, finish_time=1825 WHERE band_name="Petite Meller" ');
tx.executeSql(' UPDATE bands SET start_time=1700, finish_time=1730 WHERE band_name="Boxed In" ');
tx.executeSql(' UPDATE bands SET start_time=1610, finish_time=1640 WHERE band_name="Denai Moore" ');
tx.executeSql(' UPDATE bands SET start_time=1520, finish_time=1550 WHERE band_name="Blossoms" ');
tx.executeSql(' UPDATE bands SET start_time=1430, finish_time=1500 WHERE band_name="Neon Waltz" ');
tx.executeSql(' UPDATE bands SET start_time=1330, finish_time=1400 WHERE band_name="Beach Baby" ');
tx.executeSql(' UPDATE bands SET start_time=1230, finish_time=1300 WHERE band_name="Frett" ');
tx.executeSql(' UPDATE bands SET start_time=2045, finish_time=2130 WHERE band_name="Rae Morris" ');
tx.executeSql(' UPDATE bands SET start_time=1930, finish_time=2015 WHERE band_name="Gulf" ');
tx.executeSql(' UPDATE bands SET start_time=1825, finish_time=1900 WHERE band_name="Aquilo" ');
tx.executeSql(' UPDATE bands SET start_time=1620, finish_time=1650 WHERE band_name="Charlie Cunningham" ');
tx.executeSql(' UPDATE bands SET start_time=1515, finish_time=1550 WHERE band_name="Gwenno" ');
tx.executeSql(' UPDATE bands SET start_time=1415, finish_time=1445 WHERE band_name="Theo Verney" ');
tx.executeSql(' UPDATE bands SET start_time=1325, finish_time=1355 WHERE band_name="Izzys Daughter" ');
tx.executeSql(' UPDATE bands SET start_time=2000, finish_time=2030 WHERE band_name="Seafret" ');
tx.executeSql(' UPDATE bands SET start_time=1900, finish_time=1930 WHERE band_name="Clean Cut Kid" ');
tx.executeSql(' UPDATE bands SET start_time=1800, finish_time=1830 WHERE band_name="Tor Miller" ');
tx.executeSql(' UPDATE bands SET start_time=1700, finish_time=1730 WHERE band_name="Max Jury" ');
tx.executeSql(' UPDATE bands SET start_time=1600, finish_time=1630 WHERE band_name="Nao" ');
tx.executeSql(' UPDATE bands SET start_time=1500, finish_time=1530 WHERE band_name="Matt Woods" ');
tx.executeSql(' UPDATE bands SET start_time=1400, finish_time=1430 WHERE band_name="Oliver Daldry" ');
tx.executeSql(' UPDATE bands SET start_time=2000, finish_time=2030 WHERE band_name="Josef Salvat" ');
tx.executeSql(' UPDATE bands SET start_time=1900, finish_time=1930 WHERE band_name="Lonelady" ');
tx.executeSql(' UPDATE bands SET start_time=1800, finish_time=1830 WHERE band_name="Jane Weaver" ');
tx.executeSql(' UPDATE bands SET start_time=1700, finish_time=1730 WHERE band_name="Real Lies" ');
tx.executeSql(' UPDATE bands SET start_time=1600, finish_time=1630 WHERE id=120 ');
tx.executeSql(' UPDATE bands SET start_time=1500, finish_time=1530 WHERE band_name="Douglas Dare" ');
tx.executeSql(' UPDATE bands SET start_time=1400, finish_time=1430 WHERE band_name="Cove Hithe" ');
tx.executeSql(' UPDATE bands SET start_time=2000, finish_time=2030 WHERE band_name="Vessels" ');
tx.executeSql(' UPDATE bands SET start_time=1900, finish_time=1930 WHERE band_name="Bad Breeding" ');
tx.executeSql(' UPDATE bands SET start_time=1800, finish_time=1830 WHERE band_name="Rat Boy" ');
tx.executeSql(' UPDATE bands SET start_time=1700, finish_time=1730 WHERE band_name="Dmas" ');
tx.executeSql(' UPDATE bands SET start_time=1600, finish_time=1630 WHERE band_name="Tuff Love" ');
tx.executeSql(' UPDATE bands SET start_time=1500, finish_time=1530 WHERE band_name="C Duncan" ');
tx.executeSql(' UPDATE bands SET start_time=1400, finish_time=1430 WHERE band_name="Adam French" ');
		
		
		set_up_main_page();
	});
}













