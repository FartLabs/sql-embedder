CREATE TABLE authors (
  id BIGINT PRIMARY KEY,
  name text NOT NULL,
  bio text
);

-- getAuthor gets an author by id.
SELECT
  *
FROM
  authors
WHERE
  id = ?
LIMIT
  1;

-- listAuthors lists all authors.
SELECT
  *
FROM
  authors
ORDER BY
  name;

-- createAuthor creates a new author.
INSERT INTO
  authors (name, bio)
VALUES
  (?, ?)
RETURNING
  *;

-- updateAuthor updates an author by id.
UPDATE
  authors
SET
  name = ?,
  bio = ?
WHERE
  id = ?;

-- deleteAuthor deletes an author by id.
DELETE FROM
  authors
WHERE
  id = ?;

-- updateAuthor updates an author by id.
UPDATE
  authors
SET
  name = ?,
  bio = ?
WHERE
  id = ?
RETURNING
  *;
