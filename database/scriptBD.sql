-- Script Database

--CREATE DATABASE company

-- Select database

CREATE TABLE person (
    id INTEGER IDENTITY(1,1) PRIMARY KEY, 
    name VARCHAR(64)
)

INSERT INTO person(name) 
VALUES('Camara'), ('Lucas')