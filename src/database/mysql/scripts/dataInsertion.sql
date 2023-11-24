USE book_my_show_2;
-- Delete records before inserting new ones
# DELETE FROM THEATRES_SHOWS;
# DELETE FROM SHOWS;
# DELETE FROM SCREENS;
DELETE FROM THEATRES;

-- Reset auto increment count of following tables to start from 1
# ALTER TABLE THEATRES AUTO_INCREMENT = 1;
# ALTER TABLE SHOWS AUTO_INCREMENT = 1;
# ALTER TABLE SCREENS AUTO_INCREMENT = 1;
# ALTER TABLE THEATRES_SHOWS AUTO_INCREMENT = 1;

-- Insert THEATRES
INSERT INTO THEATRES 
  ( name, address, city, pin_code, contact_no, email_id, createdAt, updatedAt)
VALUES 
  ( 'PVR Forum', 'Forum Shopping Mall', 'Bengaluru', 560034, 1234567890, 'CjQpD@example.com', CURRENT_DATE, current_date),
  ( 'INOX IMAX', 'IMAX Mall', 'Bengaluru', 560029, 1234567890, 'CjQpD@example.com', CURRENT_DATE, current_date),
  ( 'Cinepolis', 'Forum Shantiniketan', 'Bengaluru', 560029, 1234567890, 'CjQpD@example.com', CURRENT_DATE, current_date),
  ( 'Cinepolis', 'Royal Minakshi Mall', 'Bengaluru', 560029, 1234567890, 'CjQpD@example.com', CURRENT_DATE, current_date),
  ( 'INOX', 'Inox Seegahalli', 'Bengaluru', 560049, 1234567890, 'CjQpD@example.com', CURRENT_DATE, current_date);

-- Insert SHOWS
# INSERT INTO SHOWS
#   ( name, release_date, show_type, show_duration_in_minutes, show_price, age_limit_in_years)
# VALUES
#   ( 'KGF', '2022-12-12', 'Drama', 180, 300, 18),
#   ( 'RRR', '2022-12-12', 'Drama', 180, 300, 18),
#   ( 'Bahubali', '2022-12-12', 'Drama', 180, 300, 18),
#   ( 'Spiderman: No Way Home', '2022-12-12', 'Drama', 180, 300, 18),
#   ( 'Dangal', '2022-12-12', 'Drama', 180, 300, 18),
#   ( 'Avengers: Endgame', '2022-12-12', 'Drama', 180, 300, 18),
#   ( 'Shershaah', '2022-12-12', 'Drama', 180, 300, 18),
#   ( 'Baahubali 2', '2022-12-12', 'Drama', 180, 300, 18),
#   ( 'DDLJ', '2022-12-12', 'Drama', 180, 300, 18),
#   ( 'Dilwale Dulhania Le Jayenge', '2022-12-12', 'Drama', 180, 300, 18);

-- Insert SCREENS
# INSERT INTO SCREENS
#   ( screen_name, screen_capacity, theatre_id)
# VALUES
#   ( 'Screen 1', 100, 1),
#   ( 'Screen 2', 100, 1),
#   ( 'Screen 3', 100, 1),
#   ( 'Screen 4', 100, 1),
#   ( 'Screen 5', 100, 1),
#   ( 'Screen A', 100, 2),
#   ( 'Screen B', 100, 2),
#   ( 'Screen C', 100, 2),
#   ( 'Screen D', 100, 2),
#   ( 'Screen E', 100, 2),
#   ( 'Screen 1', 100, 3),
#   ( 'Screen 2', 100, 3),
#   ( 'Screen 3', 100, 3),
#   ( 'Screen 4', 100, 3),
#   ( 'Screen 5', 100, 3),
#   ( 'Screen 1', 100, 4),
#   ( 'Screen 2', 100, 4),
#   ( 'Screen 3', 100, 4),
#   ( 'Screen 4', 100, 4),
#   ( 'Screen 5', 100, 4),
#   ( 'Screen 1', 100, 5),
#   ( 'Screen 2', 100, 5),
#   ( 'Screen 3', 100, 5),
#   ( 'Screen 4', 100, 5),
#   ( 'Screen 5', 100, 5);

-- Insert THEATRES_SHOWS
# INSERT INTO THEATRES_SHOWS
#   ( theatre_id, show_id, show_start_time, show_end_time, screen_id, show_start_date, show_end_date)
# VALUES
#   ( 1, 1, '10:00:00', '12:00:00', 1, '2023-10-01 00:00:00', '2023-10-31 14:00:00'),
#   ( 1, 2, '10:00:00', '12:00:00', 2, '2023-10-01 00:00:00', '2023-10-31 14:00:00'),
#   ( 1, 3, '10:00:00', '12:00:00', 3, '2023-11-01 00:00:00', '2023-11-30 22:00:00'),
#   ( 1, 4, '10:00:00', '12:00:00', 4, '2023-11-01 00:00:00', '2023-11-30 22:00:00'),
#   ( 1, 5, '10:00:00', '12:00:00', 5, '2023-11-01 00:00:00', '2023-12-25 22:00:00'),
#   ( 2, 10, '10:00:00', '12:00:00', 6, '2023-10-01 00:00:00', '2023-10-31 14:00:00'),
#   ( 2, 9, '10:00:00', '12:00:00', 7, '2023-10-01 00:00:00', '2023-10-31 14:00:00'),
#   ( 2, 8, '10:00:00', '12:00:00', 8, '2023-11-01 00:00:00', '2023-11-30 22:00:00'),
#   ( 2, 7, '10:00:00', '12:00:00', 9, '2023-11-01 00:00:00', '2023-11-30 22:00:00'),
#   ( 2, 6, '10:00:00', '12:00:00', 10, '2023-11-01 00:00:00', '2023-12-25 22:00:00'),
#   ( 3, 2, '10:00:00', '12:00:00', 11, '2023-11-01 00:00:00', '2023-12-25 22:00:00'),
#   ( 3, 3, '10:00:00', '12:00:00', 12, '2023-11-01 00:00:00', '2023-12-25 22:00:00'),
#   ( 3, 4, '10:00:00', '12:00:00', 13, '2023-10-01 00:00:00', '2023-10-31 14:00:00'),
#   ( 3, 5, '10:00:00', '12:00:00', 14, '2023-10-01 00:00:00', '2023-10-31 14:00:00'),
#   ( 3, 6, '10:00:00', '12:00:00', 15, '2023-10-01 00:00:00', '2023-10-31 14:00:00'),
#   ( 4, 4, '10:00:00', '12:00:00', 16, '2023-10-01 00:00:00', '2023-10-31 14:00:00'),
#   ( 4, 5, '10:00:00', '12:00:00', 17, '2023-11-01 00:00:00', '2023-12-25 22:00:00'),
#   ( 4, 6, '10:00:00', '12:00:00', 18, '2023-11-01 00:00:00', '2023-12-25 22:00:00'),
#   ( 4, 7, '10:00:00', '12:00:00', 19, '2023-11-01 00:00:00', '2023-12-25 22:00:00'),
#   ( 4, 8, '10:00:00', '12:00:00', 20, '2023-11-01 00:00:00', '2023-12-25 22:00:00'),
#   ( 5, 1, '10:00:00', '12:00:00', 21, '2023-11-30 00:00:00', '2023-12-31 22:00:00' ),
#   ( 5, 2, '10:00:00', '12:00:00', 22, '2023-11-30 00:00:00', '2023-12-31 22:00:00' ),
#   ( 5, 3, '10:00:00', '12:00:00', 23, '2023-11-30 00:00:00', '2023-12-31 22:00:00' ),
#   ( 5, 4, '10:00:00', '12:00:00', 24, '2023-11-30 00:00:00', '2023-12-31 22:00:00' ),
#   ( 5, 5, '10:00:00', '12:00:00', 25, '2023-11-30 00:00:00', '2023-12-31 22:00:00' );

