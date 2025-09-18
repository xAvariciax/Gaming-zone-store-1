import db from './index.js';

const createGamesTable = async () => {
  await db.query('DROP TABLE IF EXISTS Games');
  await db.query(`
    CREATE TABLE Games (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    description TEXT NOT NULL
    quantity NUMERIC NOT NULL
    url TEXT NOT NULL
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

const createPaymentMethodsTable = async () => {
  await db.query(`
    CREATE TABLE payment_methods (
    id SERIAL PRIMARY KEY,
    bank TEXT NOT NULL,
    phone TEXT NOT NULL,
    ci TEXT NOT NULL
    )
  `);
  console.log('Tabla de metodos de pagos creada');
};

const createPaymentTable = async () => {
  await db.query(`
    CREATE TABLE payment (
      id SERIAL PRIMARY KEY,
      date TIMESTAMPTZ DEFAULT NOW(),
      payment_reference TEXT,
      user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE SET NULL,
      payment_methods_id INTEGER NOT NULL REFERENCES payment_methods(id) ON DELETE SET NULL,
      status VARCHAR(20) DEFAULT 'pending',
      monto NUMERIC NOT NULL
    )
  `);
  console.log('Tabla de pagos creada');
};

const deleteAllTables = async () => {
  await db.query('DROP TABLE IF EXISTS payment');
  await db.query('DROP TABLE IF EXISTS payment_methods');
  await db.query('DROP TABLE IF EXISTS users');
};

const createTables = async () => {
  await deleteAllTables();
  await createUsersTable();
  await createPaymentMethodsTable();
  await createPaymentTable();
  await createGamesTable();
  console.log('Tablas creadas correctamente');
  process.exit();
};

createTables();
