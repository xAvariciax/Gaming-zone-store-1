import { e as createComponent, k as renderComponent, l as renderScript, r as renderTemplate, m as maybeRenderHead, h as addAttribute } from '../../chunks/astro/server_DRXPRzXL.mjs';
import 'kleur/colors';
import { B as BACK_ENDPOINT, $ as $$GameItem } from '../../chunks/GameItem_DTRzPxAJ.mjs';
import { $ as $$Layout } from '../../chunks/Layout_Of09KicS.mjs';
/* empty css                                          */
export { renderers } from '../../renderers.mjs';

const $$Playstation = createComponent(async ($$result, $$props, $$slots) => {
  const response = await fetch(`${BACK_ENDPOINT}/api/games`);
  const gamesData = await response.json();
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "data-astro-cid-yhdwewl5": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="playstation" data-astro-cid-yhdwewl5> <ul${addAttribute(JSON.stringify(gamesData), "data-games")} id="games-list" class="m-0 p-2 list-none overflow-auto flex flex-col gap-8 rounded-md border bg-gradient-to-tr 100  border-gray-300 h-full md:w-[70%] lg:w-[50%]" data-astro-cid-yhdwewl5> <template id="Game-item-template" data-astro-cid-yhdwewl5> ${renderComponent($$result2, "GameItem", $$GameItem, { "name": "Elden ring", "quantity": "3", "id": 0, "description": "Descripcion del juego", "url": "https://example.com/image.jpg", "price": "59.99", "data-astro-cid-yhdwewl5": true })} </template> ${gamesData.map((Game) => renderTemplate`${renderComponent($$result2, "GameItem", $$GameItem, { "name": Game.name, "quantity": Game.quantity, "id": Game.id, "description": Game.description, "url": Game.url, "price": Game.price, "data-astro-cid-yhdwewl5": true })}`)} </ul> </main> ` })} ${renderScript($$result, "C:/Users/PC/Downloads/Gaming Zone Store/apps/frontend/src/pages/consoles/playstation.astro?astro&type=script&index=0&lang.ts")} `;
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
