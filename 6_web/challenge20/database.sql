CREATE TABLE bread (
    ID      INTEGER     PRIMARY KEY     AUTOINCREMENT,
    integer INTEGER,
    string  TEXT,
    float   FLOAT,
    date    DATE,
    boolean BOOLEAN
);

INSERT INTO bread (string, integer, float, date, boolean)
VALUES ('Mumu', 121, 79.90, 2017-03-23, 'true'),
('Mimi', 122, 99.40, 2019, 'false'),
('Momo', 123, 79.90, 2017-03-23, 'true');

DELETE * FROM bread;