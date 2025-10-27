import { e as createComponent, f as createAstro, m as maybeRenderHead, h as addAttribute, k as renderComponent, r as renderTemplate, l as renderScript } from '../chunks/astro/server_DRXPRzXL.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_Of09KicS.mjs';
import { $ as $$Icon } from '../chunks/Icon_CAGHTOSM.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$CartItem = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$CartItem;
  const { game, quantity } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="cart-item flex items-center justify-between gap-4 p-4 border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm"${addAttribute(game.id, "data-product-id")}> <!-- <div class="flex-shrink-0">
    <img
      src="/placeholder-image.jpg"
      alt={product.name}
      class="w-20 h-20 object-cover rounded-md"
    />
  </div> --> <div class="flex-grow min-w-0"> <h3 class="text-lg font-semibold text-gray-800 dark:text-gray-100 truncate"> ${game.name} </h3> <p class="text-gray-600 dark:text-gray-400">
$${game.price.toFixed(2)} </p> </div> <div class="flex items-center gap-2"> <button class="decrease-quantity-btn p-1 text-gray-600 dark:text-gray-300 hover:text-red-600 transition-colors" aria-label="Disminuir cantidad"> ${renderComponent($$result, "Icon", $$Icon, { "name": "mdi:minus-circle", "class": "w-6 h-6" })} </button> <span class="quantity text-lg font-bold text-gray-900 dark:text-white w-8 text-center">${quantity}</span> <button class="increase-quantity-btn p-1 text-gray-600 dark:text-gray-300 hover:text-lime-600 transition-colors" aria-label="Aumentar cantidad"> ${renderComponent($$result, "Icon", $$Icon, { "name": "mdi:plus-circle", "class": "w-6 h-6" })} </button> </div> <div class="flex-shrink-0"> <button class="remove-item-btn p-1 text-gray-600 dark:text-gray-300 hover:text-red-600 transition-colors" aria-label="Eliminar producto"> ${renderComponent($$result, "Icon", $$Icon, { "name": "mdi:trash-can-outline", "class": "w-6 h-6" })} </button> </div> </div>`;
}, "C:/Users/PC/Downloads/Gaming Zone Store/apps/frontend/src/features/cart/components/CartItem.astro", void 0);

const $$CartList = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<ul id="products-cart-list" class="m-0 p-2 list-none overflow-auto flex flex-col gap-8 rounded-md border border-gray-300 h-full md:w-[70%] lg:w-[50%]"> <template id="product-cart-item-template"> ${renderComponent($$result, "CartItem", $$CartItem, { "product": { id: 0, name: "", price: 0 }, "quantity": 0 })} </template> <p id="empty-cart-message" class="text-center text-gray-500 hidden">
Aún no has agregado productos a tu carrito.
</p> </ul> ${renderScript($$result, "C:/Users/PC/Downloads/Gaming Zone Store/apps/frontend/src/features/cart/components/CartList.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/PC/Downloads/Gaming Zone Store/apps/frontend/src/features/cart/components/CartList.astro", void 0);

const $$Carrito = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Tu Carrito de Compras" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="container mx-auto p-4 md:p-8 space-y-8"> <div id="cart-container" class="flex flex-col lg:flex-row gap-8 items-start"> ${renderComponent($$result2, "CartList", $$CartList, {})} <aside class="w-full lg:w-1/3 p-6 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md space-y-4 sticky top-4"> <h2 class="text-2xl font-bold text-gray-900 dark:text-white">
Resumen de compras
</h2> <div class="space-y-2"> <div class="flex justify-between font-bold text-gray-900 dark:text-white"> <span>Total:</span> <span id="total-price">$0.00</span> </div> </div> <a id="checkout-button" href="/client/pago" class="block text-center w-full py-3 px-4 text-white bg-lime-600 rounded-lg hover:bg-lime-700 transition-colors">
Proceder al Pago
</a> <p id="checkout-disabled-message" class="text-center text-sm text-gray-500">
Agrega Juegos para proceder al pago.
</p> </aside> </div> </main> ` })} ${renderScript($$result, "C:/Users/PC/Downloads/Gaming Zone Store/apps/frontend/src/pages/carrito.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/PC/Downloads/Gaming Zone Store/apps/frontend/src/pages/carrito.astro", void 0);

const $$file = "C:/Users/PC/Downloads/Gaming Zone Store/apps/frontend/src/pages/carrito.astro";
const $$url = "/carrito";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Carrito,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
