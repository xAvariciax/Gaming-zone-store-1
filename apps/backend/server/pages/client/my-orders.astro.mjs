import { e as createComponent, k as renderComponent, l as renderScript, r as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_DRXPRzXL.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../../chunks/Layout_Of09KicS.mjs';
export { renderers } from '../../renderers.mjs';

const $$MyOrders = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Mis Pedidos" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="container mx-auto p-4 md:p-8"> <h1 class="text-3xl font-bold text-center mb-8">Historial de Pedidos</h1> <div id="orders-container" class="space-y-4 max-w-4xl mx-auto"> <p id="loading-message">Cargando tus pedidos...</p> </div> </main> ` })} ${renderScript($$result, "C:/Users/PC/Downloads/Gaming Zone Store/apps/frontend/src/pages/client/my-orders.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/PC/Downloads/Gaming Zone Store/apps/frontend/src/pages/client/my-orders.astro", void 0);

const $$file = "C:/Users/PC/Downloads/Gaming Zone Store/apps/frontend/src/pages/client/my-orders.astro";
const $$url = "/client/my-orders";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$MyOrders,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
