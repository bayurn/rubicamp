CREATE TABLE bread (
    id      INTEGER     PRIMARY KEY     AUTOINCREMENT,
    integer INTEGER,
    string  TEXT,
    float   FLOAT,
    date    DATE,
    boolean BOOLEAN
);

INSERT INTO bread (string, integer, float, date, boolean)
VALUES ('Mumu', 121, 79.90, 2017-03-23, 'true'),
('Mimi', 122, 99.40, 2019-09-13, 'false'),
('Momo', 123, 79.90, 2017-07-16, 'true');

SELECT * FROM bread WHERE id = 2 
AND string = 'Mimi' AND integer = 122 AND 
float = '99.40' AND boolean = 'false' 
AND date BETWEEN 1991 AND 1997;