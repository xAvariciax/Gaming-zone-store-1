import { e as createComponent, f as createAstro, m as maybeRenderHead, h as addAttribute, k as renderComponent, r as renderTemplate } from './astro/server_DRXPRzXL.mjs';
import 'kleur/colors';
import { $ as $$Icon } from './Icon_CAGHTOSM.mjs';

const BACK_ENDPOINT = process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : '';

const $$Astro = createAstro();
const $$GameItem = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$GameItem;
  const { name, quantity, id, description, url, price } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<li${addAttribute(id, "id")} class="flex gap-4 justify-between items-center" data-status="inputs-deshabilitados"> <div class="flex flex-wrap md:flex-nowrap gap-2 flex-grow"> <input class="w-full bg-gray-100 rounded-md p-2 outline-none" type="text"${addAttribute(name, "value")} readonly> <input class="w-full bg-gray-100 rounded-md p-2 outline-none" type="text"${addAttribute(quantity, "value")} readonly> <input class="w-full bg-gray-100 rounded-md p-2 outline-none" type="text"${addAttribute(description, "value")} readonly> <input class="w-full bg-gray-100 rounded-md p-2 outline-none" type="url"${addAttribute(url, "value")} readonly> <input class="w-full bg-gray-100 rounded-md p-2 outline-none" type="url"${addAttribute(price, "value")} readonly> </div> <div class="flex gap-2 items-center"> <button class="edit-btn w-8 h-8 flex justify-center items-center text-gray-600 hover:text-indigo-700"> ${renderComponent($$result, "Icon", $$Icon, { "name": "mdi:account-box-edit-outline", "class": "w-6 h-6", "is:inline": true })} ${renderComponent($$result, "Icon", $$Icon, { "name": "mdi:pencil", "class": "w-6 h-6 hidden", "is:inline": true })} </button> <button class="delete-btn w-8 h-8 flex justify-center items-center text-gray-600 hover:text-red-600"> ${renderComponent($$result, "Icon", $$Icon, { "name": "mdi:alpha-x", "class": "w-6 h-6", "is:inline": true })} </button> <button class="delete-btn w-8 h-8 flex justify-center items-center text-gray-600 hover:text-indigo-700">
agregar al carrito
</button> </div> </li>`;
}, "C:/Users/PC/Downloads/Gaming Zone Store/apps/frontend/src/features/games/GameItem.astro", void 0);

export { $$GameItem as $, BACK_ENDPOINT as B };
