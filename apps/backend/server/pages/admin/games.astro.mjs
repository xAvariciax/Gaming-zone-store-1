import { e as createComponent, m as maybeRenderHead, h as addAttribute, k as renderComponent, l as renderScript, r as renderTemplate } from '../../chunks/astro/server_DRXPRzXL.mjs';
import 'kleur/colors';
import { B as BACK_ENDPOINT, $ as $$GameItem } from '../../chunks/GameItem_DTRzPxAJ.mjs';
import 'clsx';
import { $ as $$Layout } from '../../chunks/Layout_Of09KicS.mjs';
export { renderers } from '../../renderers.mjs';

const $$GameList = createComponent(async ($$result, $$props, $$slots) => {
  const response = await fetch(`${BACK_ENDPOINT}/api/games`);
  const gamesData = await response.json();
  return renderTemplate`${maybeRenderHead()}<ul${addAttribute(JSON.stringify(gamesData), "data-games")} id="games-list" class="m-0 p-2 list-none overflow-auto flex flex-col gap-8 rounded-md border bg-gradient-to-tr 100  border-gray-300 h-full md:w-[70%] lg:w-[50%]"> <template id="Game-item-template"> ${renderComponent($$result, "GameItem", $$GameItem, { "name": "Elden ring", "quantity": "3", "id": 0, "description": "Descripcion del juego", "url": "https://example.com/image.jpg", "price": "59.99" })} </template> ${gamesData.map((Game) => renderTemplate`${renderComponent($$result, "GameItem", $$GameItem, { "name": Game.name, "quantity": Game.quantity, "id": Game.id, "description": Game.description, "url": Game.url, "price": Game.price })}`)} </ul> ${renderScript($$result, "C:/Users/PC/Downloads/Gaming Zone Store/apps/frontend/src/features/games/GameList.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/PC/Downloads/Gaming Zone Store/apps/frontend/src/features/games/GameList.astro", void 0);

const $$CreateGameForm = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div id="modal-fondo" class="fixed top-0 left-0 w-full h-full backdrop-blur-xs backdrop-brightness-70 z-50 hidden items-center justify-center"> <form id="game-form" class="bg-white p-6 rounded-md flex flex-col gap-4 border border-gray-300 md:w-[70%] lg:w-[50%]"> <h2 class="text-xl font-semibold mb-4">Añadir Nuevo Juego</h2> <div class="flex flex-col gap-2"> <label for="name-input" class="font-medium">Nombre del Juego</label> <div class="relative flex items-center w-full"> <input type="text" name="name-input" id="name-input" class="w-full rounded-md p-2 text-base ring-1 ring-gray-300 focus:outline-none focus:ring-indigo-500" placeholder="Hollow knight"> <span class="absolute right-2.5 hidden text-xl"></span> </div> <p class="text-xs font-light text-red-500 hidden">
El nombre no puede estar vacio.
</p> </div> <div class="flex flex-col gap-2"> <label for="price-input" class="font-medium">Precio</label> <div class="relative flex items-center w-full"> <input type="number" name="price-input" id="price-input" class="w-full rounded-md p-2 text-base ring-1 ring-gray-300 focus:outline-none focus:ring-indigo-500" placeholder="100"> <span class="absolute right-2.5 hidden text-xl"></span> </div> <p class="text-xs font-light text-red-500 hidden">
El precio debe ser un numero entero.
</p> </div> <div class="flex flex-col gap-2"> <label for="image-url-input" class="font-medium">URL de Imagen</label> <div class="relative flex items-center w-full"> <input type="url" name="image-url-input" id="image-url-input" class="w-full rounded-md p-2 text-base ring-1 ring-gray-300 focus:outline-none focus:ring-indigo-500" placeholder="https://example.com/imagen.jpg"> <span class="absolute right-2.5 hidden text-xl"></span> </div> <p class="text-xs font-light text-red-500 hidden">
La URL de la imagen no es válida.
</p> </div> <div class="flex flex-col gap-2"> <label for="console-select" class="font-medium">Tipo de Consola</label> <div class="relative flex items-center w-full"> <select name="console-select" id="console-select" class="w-full rounded-md p-2 text-base ring-1 ring-gray-300 focus:outline-none focus:ring-indigo-500"> <option value="" disabled selected>Selecciona una consola</option> <option value="PC">PC</option> <option value="XBOX">XBOX</option> <option value="PLAYSTATION">PLAYSTATION</option> <option value="NINTENDO SWITCH">NINTENDO SWITCH</option> </select> <span class="absolute right-2.5 hidden text-xl"></span> </div> <p class="text-xs font-light text-red-500 hidden">
Debes seleccionar un tipo de consola.
</p> </div> <div class="flex flex-col gap-2"> <label for="description-textarea" class="font-medium">Descripción</label> <div class="relative flex items-center w-full"> <textarea name="description-textarea" id="description-textarea" rows="4" class="w-full rounded-md p-2 text-base ring-1 ring-gray-300 focus:outline-none focus:ring-indigo-500" placeholder="Escribe una breve descripción del juego..."></textarea> <span class="absolute right-2.5 hidden text-xl"></span> </div> <p class="text-xs font-light text-red-500 hidden">
La descripción no puede estar vacía.
</p> </div> <div class="flex flex-col gap-2"> <label for="quantity-input" class="font-medium">Cantidad</label> <div class="relative flex items-center w-full"> <input type="number" name="quantity-input" id="quantity-input" class="w-full rounded-md p-2 text-base ring-1 ring-gray-300 focus:outline-none focus:ring-indigo-500" placeholder="10"> <span class="absolute right-2.5 hidden text-xl"></span> </div> <p class="text-xs font-light text-red-500 hidden">
La cantidad debe ser un número entero positivo.
</p> </div> <div class="flex justify-end gap-2"> <button type="button" id="cerrar-modal" class="bg-gray-300 py-2 px-4 text-gray-700 text-center uppercase font-medium rounded-md">
Cancelar
</button> <button id="product-form-btn" disabled class="bg-indigo-700 py-2 px-4 text-white text-center uppercase font-medium rounded-md disabled:opacity-50 disabled:cursor-not-allowed">
Añadir juego
</button> </div> </form> </div> ${renderScript($$result, "C:/Users/PC/Downloads/Gaming Zone Store/apps/frontend/src/features/games/CreateGameForm.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/PC/Downloads/Gaming Zone Store/apps/frontend/src/features/games/CreateGameForm.astro", void 0);

const $$Games = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Gesti\xF3n de Juegos" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="container mx-auto px-4 py-8"> <h1 class="text-3xl font-bold mb-8">
Administración de Juegos
</h1> <div class="mb-4"> <button id="abrir-modal" class="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2">
Añadir Nuevo Juego
</button> </div> ${renderComponent($$result2, "GameList", $$GameList, {})} </div> ${renderComponent($$result2, "CreateGameForm", $$CreateGameForm, {})} ` })} ${renderScript($$result, "C:/Users/PC/Downloads/Gaming Zone Store/apps/frontend/src/pages/admin/games.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/PC/Downloads/Gaming Zone Store/apps/frontend/src/pages/admin/games.astro", void 0);

const $$file = "C:/Users/PC/Downloads/Gaming Zone Store/apps/frontend/src/pages/admin/games.astro";
const $$url = "/admin/games";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Games,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
