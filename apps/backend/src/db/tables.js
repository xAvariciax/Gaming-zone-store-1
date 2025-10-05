import db from './index.js';

const createUsersTable = async () => {
  await db.query('DROP TABLE IF EXISTS users');
  await db.query(`
    CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    email TEXT UNIQUE NOT NULL,
    passwordHash TEXT NOT NULL,
    verify_email BOOLEAN DEFAULT false
    role BOOLEAN DEFAULT FALSE
    )
  `);
  console.log('Tabla de usuarios creada');
};

const createGamesTable = async () => {
  await db.query('DROP TABLE IF EXISTS Games');
  await db.query(`
    CREATE TABLE Games (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    description TEXT NOT NULL,
    price NUMERIC NOT NULL,
    url TEXT NOT NULL
    )
  `);
  console.log('Tabla de juegos creada');
};

const createPaymentMethodTable = async () => {
  await db.query('DROP TABLE IF EXISTS payment_method');
  await db.query(`
  CREATE TABLE payment_method (
  id SERIAL PRIMARY KEY,
  bank TEXT NOT NULL,
  phone TEXT NOT NULL,
  cedula TEXT NOT NULL
    )
  `);
  console.log('Tabla de métodos de pago creada');
};

const createOrderStatusType = async () => {
  await db.query(`DROP TYPE IF EXISTS order_status CASCADE`);
  await db.query(`
    CREATE TYPE order_status AS enum ('preparacion', 'preparado', 'camino', 'recibido')
  `);
};

const createPaymentStatusType = async () => {
  await db.query(`DROP TYPE IF EXISTS payment_status CASCADE`);
  await db.query(`
    CREATE TYPE payment_status AS enum ('pendiente', 'aceptado', 'rechazado')
  `);
};

const createOrderTable = async () => {
  await db.query(`
  CREATE TABLE user_order (
  id SERIAL PRIMARY KEY,
  date TIMESTAMPTZ DEFAULT NOW(),
  status order_status,
  payment_status payment_status DEFAULT 'pendiente',
  payment_reference TEXT, 
  monto NUMERIC NOT NULL,
  payment_method_id INTEGER NOT NULL REFERENCES payment_method(id) ON DELETE SET NULL,
  user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE
    )
  `);
  console.log('Tabla del pedido creada');
};

const createOrderGamesTable = async () => {
  await db.query(`
  CREATE TABLE order_products (
  id SERIAL PRIMARY KEY,
  order_id INTEGER NOT NULL REFERENCES user_order(id) ON DELETE CASCADE,
  product_id INTEGER NOT NULL REFERENCES products(id) ON DELETE CASCADE,
  quantity INTEGER NOT NULL DEFAULT 1
    )
  `);
  console.log('Tabla de detalles del pedido creada');
};

const deleteAllTables = async () => {
  await db.query('DROP TABLE IF EXISTS payment');
  await db.query('DROP TABLE IF EXISTS payment_methods');
  await db.query('DROP TABLE IF EXISTS users');
};

const createTables = async () => {
  await deleteAllTables();
  await createUsersTable();
  await createGamesTable();
  await createPaymentMethodTable();
  await createOrderStatusType();
  await createPaymentStatusType();
  await createOrderTable();
  await createOrderGamesTable();
  console.log('Tablas creadas correctamente');
  process.exit(0);
};

createTables();
