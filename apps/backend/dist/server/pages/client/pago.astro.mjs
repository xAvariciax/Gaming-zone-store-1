import { e as createComponent, k as renderComponent, l as renderScript, r as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_DRXPRzXL.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../../chunks/Layout_Of09KicS.mjs';
export { renderers } from '../../renderers.mjs';

const $$Pago = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Registrar Pago" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="container mx-auto p-4 md:p-8 flex justify-center"> <div class="w-full max-w-lg"> <h1 class="text-3xl font-bold text-center mb-6">Información del Pago</h1> <form id="payment-form" class="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md space-y-6"> <div> <label for="payment-method" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
Método de Pago
</label> <select id="payment-method" name="payment_method_id" class="w-full p-3 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md" required> <option value="">Cargando métodos de pago...</option> </select> </div> <div> <label for="payment-reference" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
Últimos 4 dígitos de referencia
</label> <input type="text" id="payment-reference" name="payment_reference" class="w-full p-3 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md" required maxlength="4" title="Debe contener 4 dígitos numéricos."> </div> <div> <label for="monto" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
Monto a Pagar
</label> <input type="number" id="monto" name="monto" class="w-full p-3 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md" required step="0.01"> </div> <button type="submit" class="w-full py-3 px-4 text-white bg-lime-600 rounded-lg hover:bg-lime-700 transition-colors">
Registrar Pago
</button> </form> </div> </main> ` })} ${renderScript($$result, "C:/Users/PC/Downloads/Gaming Zone Store/apps/frontend/src/pages/client/pago.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/PC/Downloads/Gaming Zone Store/apps/frontend/src/pages/client/pago.astro", void 0);

const $$file = "C:/Users/PC/Downloads/Gaming Zone Store/apps/frontend/src/pages/client/pago.astro";
const $$url = "/client/pago";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Pago,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
