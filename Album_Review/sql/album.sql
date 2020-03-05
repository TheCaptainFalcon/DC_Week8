CREATE DATABASE album;

-- Table 1
CREATE TABLE album (
    id serial PRIMARY KEY,
    name varchar,
    genre text,
    artist varchar
);

-- Table 2
CREATE TABLE reviewer (
    id serial PRIMARY KEY,
    name text NOT NULL,
    email varchar
);

-- Table 3
CREATE TABLE review (
    id serial PRIMARY KEY,
    reviewer_id int,
    album_id int,
    title text,
    review text,
    FOREIGN KEY (reviewer_id) REFERENCES reviewer (id),
    FOREIGN KEY (album_id) REFERENCES album (id)
);

-- Table 1 Values
INSERT INTO album (name, genre, artist)
    VALUES 
    ('Oracular Spectacular', 'Pop', 'MGMT'),
    ('Boz Skaggs', 'Blues', 'Boz Skaggs'), 
    ('Yankee Hotel Foxtrot', 'Rock Fusion', 'Wilco');

-- Table 2 Values
INSERT INTO reviewer (name, email)
    VALUES 
    ('Joseph Kim', 'jkim@gmail.com'), 
    ('Peter Jones', 'pjones@gmail.com'), 
    ('Jamario Davis', 'jdavis@gmail.com');

-- Table 3 Values
INSERT INTO review (reviewer_id, album_id, title, review)
    VALUES 
    (1, 1, 'Whoa blew my mind', 'fringilla mollis urna, non tempor metus auctor quis. Suspenetus, et vesta blandit at.'),
    (2, 2, 'OMG this album rocks', 'Lorem im a lorem vitae mattis.'),
    (3, 3, 'Horrific record', 'Lorem ipsum dolor sit amet, cat efficitumi sed nulla. Integer in mollis sem. Vivamus ulla');
