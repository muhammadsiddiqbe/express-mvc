CREATE TABLE users(
  id SERIAL PRIMARY KEY NOT NULL,
  login varchar(255) NOT NULL,
  password VARCHAR(255) NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP
);

