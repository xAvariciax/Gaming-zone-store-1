import { e as createComponent, k as renderComponent, l as renderScript, r as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_DRXPRzXL.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../../chunks/Layout_Of09KicS.mjs';
export { renderers } from '../../renderers.mjs';

const $$PaymentsAdmin = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Panel de Administrador - Pagos Pendientes" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="container mx-auto p-4 md:p-8"> <h1 class="text-3xl font-bold text-center mb-8">
Pagos Pendientes de Revisión
</h1> <div id="pending-orders-container" class="space-y-6 max-w-5xl mx-auto"> <p id="loading-message" class="text-center text-gray-500">
Cargando pagos pendientes...
</p> </div> </main> ` })} ${renderScript($$result, "C:/Users/PC/Downloads/Gaming Zone Store/apps/frontend/src/pages/admin/payments-admin.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/PC/Downloads/Gaming Zone Store/apps/frontend/src/pages/admin/payments-admin.astro", void 0);

const $$file = "C:/Users/PC/Downloads/Gaming Zone Store/apps/frontend/src/pages/admin/payments-admin.astro";
const $$url = "/admin/payments-admin";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$PaymentsAdmin,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
