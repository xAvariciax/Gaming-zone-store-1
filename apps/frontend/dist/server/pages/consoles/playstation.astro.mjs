import { e as createComponent, k as renderComponent, n as renderScript, r as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_Xf6RRQ7R.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../../chunks/Layout_BMVEfbP6.mjs';
/* empty css                                          */
export { renderers } from '../../renderers.mjs';

const $$Playstation = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "data-astro-cid-yhdwewl5": true }, { "default": async ($$result2) => renderTemplate`  ${maybeRenderHead()}<main class="playstation" data-astro-cid-yhdwewl5> <div class="container" data-astro-cid-yhdwewl5> <h1 data-astro-cid-yhdwewl5>Añadir Nuevo Juego</h1> <form id="itemForm" class="item-form" data-astro-cid-yhdwewl5> <div class="form-group" data-astro-cid-yhdwewl5> <label for="itemName" class="text-white" data-astro-cid-yhdwewl5>Nombre:</label> <input type="text" id="itemName" required data-astro-cid-yhdwewl5> </div> <div class="form-group" data-astro-cid-yhdwewl5> <label for="itemDescription" data-astro-cid-yhdwewl5>Descripción:</label> <textarea id="itemDescription" required data-astro-cid-yhdwewl5></textarea> </div> <div class="form-group" data-astro-cid-yhdwewl5> <label for="itemQuantity" data-astro-cid-yhdwewl5>Cantidad:</label> <input type="number" id="itemQuantity" min="1" required data-astro-cid-yhdwewl5> </div> <div class="form-group" data-astro-cid-yhdwewl5> <label for="itemImage" data-astro-cid-yhdwewl5>URL de la Imagen:</label> <input type="url" id="itemImage" required data-astro-cid-yhdwewl5> </div> <button type="submit" class="submit-button" data-astro-cid-yhdwewl5>Agregar a la lista</button> </form> <!--  lista de los juegos --> <h2 data-astro-cid-yhdwewl5>Lista de Juegos</h2> <ul id="itemList" class="item-list" data-astro-cid-yhdwewl5> <!-- Los elementos de la lista se agregarán aquí dinámicamente --> </ul> </div> </main> ` })} ${renderScript($$result, "C:/Users/PC/Downloads/Gaming Zone Store/apps/frontend/src/pages/consoles/playstation.astro?astro&type=script&index=0&lang.ts")} `;
}, "C:/Users/PC/Downloads/Gaming Zone Store/apps/frontend/src/pages/consoles/playstation.astro", void 0);

const $$file = "C:/Users/PC/Downloads/Gaming Zone Store/apps/frontend/src/pages/consoles/playstation.astro";
const $$url = "/consoles/playstation";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Playstation,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
