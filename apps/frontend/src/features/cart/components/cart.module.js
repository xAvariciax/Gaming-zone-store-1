import { atom } from "nanostores";
import { createNotification } from "../../notifications/notificiation.js";
import { BACK_ENDPOINT } from "../../../config/endpoints.js";
import ky from "ky";
const BASE_URL = `${BACK_ENDPOINT}/api/cart/orderGames`;
const CART_STORAGE_KEY = 'localCart';

// ------------------------------------------------------------------------------------------
// Parte 1: Funciones para manejar el carrito en localStorage
// ------------------------------------------------------------------------------------------

/**
 * @typedef CartItem
 * @type {object}
 * @property {number} gameId - El ID del juego
 * @property {number} quantity - La cantidad del Gameo en el carrito.
 * @property {string} name - El nombre del juego 
 * @property {number} price - El precio del juego 
 * @property {string} url - url de imagen del juego
 * @property {string} platform - plataforma del juego
 */

// Obtener el carrito de localStorage
const getCartFromLocalStorage = () => {
  try {
    const localCart = localStorage.getItem(CART_STORAGE_KEY);
    return localCart ? JSON.parse(localCart) : [];
  } catch (error) {
    console.error("Error al obtener el carrito de localStorage:", error);
    return [];
  }
};

// El estado global del carrito. Lo inicializamos con los datos de localStorage.
export const cart = atom(getCartFromLocalStorage());

// Guardar el carrito en localStorage
const saveCartToLocalStorage = (cartData) => {
  localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cartData));
  cart.set(cartData);
};

// Agregar un Game al carrito de localStorage
const addGameToLocalStorage = ({ gameId, quantity = 1, name, price }) => {
    const numericGameId = Number(gameId); 

    const currentCart = getCartFromLocalStorage();
    
    // Usamos el ID numérico para la comparación
    const existingGameIndex = currentCart.findIndex(item => item.gameId === numericGameId);

    if (existingGameIndex > -1) {
        currentCart[existingGameIndex].quantity += quantity;
    } else {
        // Almacenamos el ID como número.
        currentCart.push({ gameId: numericGameId, quantity, name, price }); 
    }

    saveCartToLocalStorage(currentCart);
};

// Actualizar la cantidad de un Game
const updateGameQuantityInLocalStorage = ({ gameId, newQuantity }) => {
  if (newQuantity <= 0) {
    removeGameFromLocalStorage({ gameId });
    return;
  }
  const currentCart = getCartFromLocalStorage();
  const updatedCart = currentCart.map(item =>
    item.gameId === gameId ? { ...item, quantity: newQuantity } : item
  );
  saveCartToLocalStorage(updatedCart);
};

// Eliminar un Game del carrito
// Eliminar un Game del carrito
// Lógica de eliminación
const removeGameFromLocalStorage = ({ gameId }) => {
    const numericGameId = Number(gameId); 
    const currentCart = getCartFromLocalStorage();
    
    // Filtramos para MANTENER solo los elementos cuyo ID NO COINCIDE con el ID a eliminar.
    const updatedCart = currentCart.filter(item => item.gameId !== numericGameId); // <-- Lógica Correcta
    
    saveCartToLocalStorage(updatedCart);
};
// ------------------------------------------------------------------------------------------

// Obtener el carrito de la base de datos.
const getCartFromDatabase = async (orderId) => {
  try {
    const GamesInOrder = await ky.get(`${BASE_URL}/${orderId}`, { credentials: 'include' }).json();
    return GamesInOrder.map(item => ({
      ...item,
      name: item.Game_name,
      price: item.Game_price
    }));
  } catch (error) {
    console.error("Error al obtener el carrito de la base de datos:", error);
    return [];
  }
};

// Sincronizar el carrito de localStorage a la base de datos.
const syncCartWithDatabase = async (userId) => {
  const localCart = getCartFromLocalStorage();
  if (localCart.length === 0) {
    return;
  }

  try {
    // 1. Crea una nueva orden para el usuario
    const orderResponse = await ky.post(`${BACK_ENDPOINT}/api/cart/order`, {
      json: {
        date: new Date().toISOString(),
        status: 'preparacion',
        payment_method_id: 1, // Puedes usar un ID por defecto o pedirlo en la interfaz
        user_id: userId
      },
      credentials: 'include'
    }).json();

    const orderId = orderResponse.id;

    // 2. Agregar Gameo del carrito local a la nueva orden en la DB
    for (const item of localCart) {
      await ky.post(`${BASE_URL}/${orderId}`, {
        json: { gameId: item.gameId, quantity: item.quantity },
        credentials: 'include'
      });
    }

    // 3. Limpia el carrito local y actualiza el estado global
    localStorage.removeItem(CART_STORAGE_KEY);
    cart.set([]);
    
    createNotification({
      title: 'Carrito sincronizado',
      description: 'Tu carrito se ha guardado en tu cuenta.',
      type: 'success'
    });
    
  } catch (error) {
    console.error("Error al sincronizar el carrito:", error);
    createNotification({
      title: 'Error de sincronización',
      description: 'No se pudo guardar tu carrito en la cuenta.',
      type: 'error'
    });
  }
};

const cartService = {
  updateGameQuantityInLocalStorage,
  removeGameFromLocalStorage,
  addGameToLocalStorage,
  getCartFromLocalStorage,
  getCartFromDatabase,
  syncCartWithDatabase, 
};

export default cartService