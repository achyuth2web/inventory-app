#! /usr/bin/env node

const { Client } = require("pg");
require("dotenv").config();

const SQL = `
CREATE TABLE IF NOT EXISTS categories (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  name  VARCHAR ( 255 ),
  description VARCHAR ( 255 ),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS products (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  category_id INTEGER REFERENCES categories(id) ON DELETE CASCADE,
  name  VARCHAR ( 255 ),
  item_size VARCHAR ( 255 ),
  color VARCHAR ( 255 ),
  price FLOAT,
  description VARCHAR ( 255 ),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);`;

async function main() {
  console.log("seeding...");
  const client = new Client({
    connectionString: process.env.DB_CONNECTION_STRING,
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done");
}

main();
