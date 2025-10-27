/** 
  * @typedef Link
  * @type {object}
  * @property {'link' | 'button'} type El tipo de link
  * @property {string} text Lo que va dentro del link
  * @property {string | null} path El href del link
  * @property {function | null} handler La funcion del boton
*/

import AuthModule from "../features/auth/auth.module.js";

/**
 * @param {string} pathname La url actual.
 * @returns {Link[]}
 */
export const getLinks = (pathname) => {
  /** @type {Link[]} */
  let links = [];
  if (pathname === '/admin' || pathname === '/consoles') {
    links.push({ 
      text: 'Cerrar sesion',
      path: '/', 
      handler: async () => {
        await AuthModule.logoutUser();
        location.replace('/');
      }
    });
    links.push({
      text: 'admin',
      path: '/admin',
      handler: async () => {
        await AuthModule.getLoggedUser();
        location.replace('/admin');
      }
    });
    links.push({ 
      text: 'carrito',
      path: '/carrito', 
      handler: async () => {
        await AuthModule.getLoggedUser();
        location.replace('/carrito');
      }
    });
  }

  if (pathname === '/login') {
    links.push({text: 'Home', path: '/'});
    links.push({text: 'Registro', path: '/signup'});
  }

  if (pathname === '/signup') {
    links.push({text: 'Home', path: '/'});
    links.push({text: 'Login', path: '/login'});
  }

  if (pathname === '/') {
    links.push({text: 'Login', path: '/login'});
    links.push({text: 'Registro', path: '/signup'});
  }

  return links;
}