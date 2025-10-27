import { e as createComponent, f as createAstro, m as maybeRenderHead, h as addAttribute, l as renderScript, r as renderTemplate, k as renderComponent } from '../../chunks/astro/server_DRXPRzXL.mjs';
import 'kleur/colors';
import 'clsx';
import { $ as $$Layout } from '../../chunks/Layout_Of09KicS.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
const $$ProductCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ProductCard;
  const { name, price, id } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<li class="flex flex-col gap-2 p-4 border rounded-md shadow-sm"> <h3 class="text-xl font-semibold text-gray-800">${name}</h3> <p class="text-lg text-gray-600">$${price}</p> <div class="flex items-center gap-2 mt-auto"> <button class="add-to-cart-btn w-full py-2 px-4 text-sm font-medium text-white bg-lime-600 rounded-lg hover:bg-lime-700"${addAttribute(id, "data-product-id")}${addAttribute(name, "data-product-name")}${addAttribute(price, "data-product-price")}>
Añadir al carrito
</button> </div> </li> ${renderScript($$result, "C:/Users/PC/Downloads/Gaming Zone Store/apps/frontend/src/components/client/ProductCard.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/PC/Downloads/Gaming Zone Store/apps/frontend/src/components/client/ProductCard.astro", void 0);

const $$ClientProductsList = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<ul id="products-list-client" class="m-0 p-2 list-none overflow-auto flex-col gap-8 rounded-md h-full md:w-[70%] lg:w-[50%] hidden"> <template id="product-item-template"> ${renderComponent($$result, "ProductCard", $$ProductCard, { "name": "Hollow knight", "price": 0, "id": 0 })} </template> </ul> ${renderScript($$result, "C:/Users/PC/Downloads/Gaming Zone Store/apps/frontend/src/components/client/ClientProductsList.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/PC/Downloads/Gaming Zone Store/apps/frontend/src/components/client/ClientProductsList.astro", void 0);

const $$ClientProducts = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Productos", "lang": "es" }, { "default": ($$result2) => renderTemplate` <title>Productos</title> ` })} ${maybeRenderHead()}<main> ${renderComponent($$result, "ClientProductsList", $$ClientProductsList, {})} </main> `;
}, "C:/Users/PC/Downloads/Gaming Zone Store/apps/frontend/src/pages/client/client-products.astro", void 0);

const $$file = "C:/Users/PC/Downloads/Gaming Zone Store/apps/frontend/src/pages/client/client-products.astro";
const $$url = "/client/client-products";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$ClientProducts,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
