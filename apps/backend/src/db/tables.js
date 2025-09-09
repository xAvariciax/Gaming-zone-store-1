import db from './index.js';

const createGamesTable = async () => {
  await db.query('DROP TABLE IF EXISTS Games');
  await db.query(`
    CREATE TABLE Games (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    phone TEXT NOT NULL
    )
  `);
  console.log('Tabla de juegos creada');
};

const createUsersTable = async () => {
  await db.query('DROP TABLE IF EXISTS users');
  await db.query(`
    CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    email TEXT UNIQUE NOT NULL,
    passwordHash TEXT NOT NULL,
    verify_email BOOLEAN DEFAULT false
    )
  `);
  console.log('Tabla de usuarios creada');
};

const createTables = async () => {
  await createGamesTable();
  await createUsersTable();
  console.log('Tablas creadas correctamente');
  process.exit();
};

createTables();
