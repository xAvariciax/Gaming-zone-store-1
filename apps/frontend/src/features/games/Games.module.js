import { atom } from "nanostores";
import { createNotification } from "../notifications/notificiation.js";
import { BACK_ENDPOINT } from "../../config/endpoints.js"; 
import ky from "ky"; 
const BASE_URL = `${BACK_ENDPOINT}/api/games`;
/** 
 * @typedef Games
 * @type {object}
 * @property {Number} id El id del juego
 * @property {string} name El nombre del juego
 * @property {Number} quanty El numero del juego
 * @property {string} description la descripcion del juego
 * @property {string} url la imagen del juego
 * @property {Number} price el precio del juego
 * 
 */
/** 
 * @type {import('nanostores').WritableAtom<Games[]>}
 */
export const games = atom([]);

/**
 * Agrega un Game al array de Games
 * @param {Games} newGames
 */
const addGames = async (newGames) => {
  try {
    const gamesCreated = await ky.post(BASE_URL, {json: newGames, credentials: 'include'}).json();
    // 2. Actualiza el store 'games' con el nuevo juego
    games.set([...games.get(), gamesCreated]); 
    // gamesFiltered.set(gamesFiltered.get().concat(gamesCreated)); // Esto fallará si gamesFiltered no está definido aquí
    createNotification({title: 'Game creado!',type: 'success'});
  } catch (error) {
    console.log(error);
    // 3. Maneja el error de forma segura
    if (error.response) {
      const errorData = await error.response.json();
      const description = errorData.errors ? errorData.errors.map(e => e.message).join(', ') : 'Error desconocido';
      createNotification({
        title: 'Ups! Hubo un error',
        description: description,
        type: 'error'
      });
    } else {
      createNotification({
        title: 'Ups! Hubo un error',
        description: error.message,
        type: 'error'
      });
    }
  }
}

// Icons
const editIcon = `
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
            </svg> 
`

const editingIcon = `
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" />
</svg>
`

/**
 * Renderiza los Games
 * @param {Element} list La lista en el HTML donde vamos a cargar los Games
 */

/**
 * Renderiza los Games
 */
const renderGames = (list) => {
    // Borrar la lista del html
    list.innerHTML = '';
    // 1. Por cada Gameo del array, creo y agrego el  Gameo al HTML
    games.get().forEach(Game => { // Usa games.get() para obtener el array
        // console.log(game);

        // 1. Crear el li
        const li = document.createElement('li');

        // 2. Agregar la clase al li
        li.classList.add('Games-list-item');

        // 3. Agregar el id al li
        li.id = Game.id;
        // 3.1 Establecer el status
        li.setAttribute('status', 'disabled-inputs')
				// 4. Crear div del input
				const inputsDiv = `
				<div class="inputs-container">
          <input class="Games-list-item-name-input" type="text" value="${Game.name}" readonly>
          <input class="Games-list-item-phone-input" type="text" value="${Game.phone}" readonly>
        </div>
				`;

				// Forma 1
				li.innerHTML = inputsDiv;
				// 5. Crear div de los botones
				const btnsDiv = `
				<div class="btns-container">
          <button class="edit-btn">
            ${editIcon}         
          </button>
          <button class="delete-btn">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
				`;

				// Podria llamarlos y crear la estructura del li de esta forma 1
				li.innerHTML = li.innerHTML + btnsDiv;

				// 6. Crear la estructura del li
				// Pero usaremos la siguiente forma 2
				const liChildren = `
				${inputsDiv}
				${btnsDiv}
				`;
				li.innerHTML = liChildren;
				// 7. Agregar el li a la ul
				list.appendChild(li)
				

    });
    
}

/**
 * Guarda el array de los Games en el navegador
 */
const saveGamesInBrowser = () => {
  localStorage.setItem('Games', JSON.stringify(games.get())); // Usa games.get()
}

/**
 * Obtener los Games del navegador y guardarlos en el array
 */
const getGamesFromBrowser = () => {
  // 1. Obtener la lista de localStorage
    const GamesLocalJson = localStorage.getItem('Games');
    // 2.Transformar de JSON a JavaScript
    const GamesLocal = JSON.parse(GamesLocalJson);
    // 3. Guardar los Games
    if (GamesLocal) {
    games.set(GamesLocal); // Usa games.set()
  }
}

/**
 * Elimina un Gameo del array de Games
 * @param {string} id El id del Gameo a eliminar
 */
const removeGame = async (id) => {
  const url = `${BASE_URL}/${id}`;
  try {
    const gameDeleted = await ky.delete(url, { credentials: 'include'}).json();
    games.set(games.get().filter(game => game.id != gameDeleted.id));
    createNotification({
      title: 'gameo eliminado!',
      description: `${gameDeleted.name}`,
      type: 'success'
    });
  } catch (error) {
    console.log(error);
    const errorData = await error.response.json();
    createNotification({
      title: 'Ups! Hubo un error',
      description: errorData.error,
      type: 'error'
    });
  }
};

/**
 * Actualizar un Game
 * @param {Game} updatedGame El Game actualizado
 */

const updateGame = async (gameToUpdate) => {
  const url = `${BASE_URL}/${gameToUpdate.id}`;
  try {
    const gameUpdated = await ky.put(url, {json: gameToUpdate, credentials: 'include'}).json();
    games.set(games.get().map(game => {
      if (game.id == gameUpdated.id) { 
        return gameUpdated;
      } else {
        return game;
      }
    }));
    createNotification({
      title: 'game actualizado!',
      description: `${gameUpdated.name}`,
      type: 'success'
    });
  } catch (error) {
    console.log(error);
    const errorData = await error.response.json();
    createNotification({
      title: 'Ups! Hubo un error',
      description: errorData.error,
      type: 'error'
    });
  }
};


  
export default {
  addGames,
  renderGames,
  saveGamesInBrowser,
  getGamesFromBrowser,
  removeGame,
  updateGame,
  editIcon,
  editingIcon,
}
