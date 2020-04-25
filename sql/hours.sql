DROP TABLE IF EXISTS hours;

CREATE TABLE hours(
    id SERIAL PRIMARY KEY,
    day TEXT NOT NULL CHECK (day != ''),
    open_h VARCHAR,
    open_m VARCHAR,
    close_h VARCHAR,
    close_m VARCHAR
);

INSERT INTO hours
(day, open_h, open_m, close_h, close_m)
VALUES
('Montag', NULL, NULL, NULL, NULL),
('Dienstag', NULL, NULL, NULL, NULL),
('Mittwoch', NULL, NULL, NULL, NULL),
('Donnerstag', '12', '00', '18', '00'),
('Freitag', '12', '00', '18', '00'),
('Samstag', '12', '00', '16', '00');
