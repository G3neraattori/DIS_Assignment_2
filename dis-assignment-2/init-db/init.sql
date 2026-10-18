CREATE DATABASE dis_db2;
CREATE DATABASE dis_db3;

CREATE TABLE IF NOT EXISTS tasks (
	id       serial  PRIMARY KEY,
	title    text    NOT NULL,
	priority integer NOT NULL DEFAULT 1
);
INSERT INTO tasks (title, priority) VALUES
  ('Create tasks for db1', 1),
  ('Write some code for db1', 2),
  ('Write some documentation for db1', 3),
  ('Do some stuff in db1', 5);

\c dis_db2;
CREATE TABLE IF NOT EXISTS tasks (
	id       serial  PRIMARY KEY,
	title    text    NOT NULL,
	priority integer NOT NULL DEFAULT 1
);
INSERT INTO tasks (title, priority) VALUES
  ('Create tasks for db2', 1),
  ('Write some code for db2', 2),
  ('Write some documentation for db2', 3),
  ('Do some stuff in db2', 5);

\c dis_db3
CREATE TABLE IF NOT EXISTS tasks (
	id       serial  PRIMARY KEY,
	title    text    NOT NULL,
	priority integer NOT NULL DEFAULT 1
);
INSERT INTO tasks (title, priority) VALUES
  ('Create tasks for db3', 1),
  ('Write some code for db3', 2),
  ('Write some documentation for db3', 3),
  ('Do some stuff in db3', 5);
