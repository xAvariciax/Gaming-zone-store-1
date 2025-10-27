import { e as createComponent, f as createAstro, m as maybeRenderHead, h as addAttribute, k as renderComponent, r as renderTemplate, l as renderScript } from '../../chunks/astro/server_DRXPRzXL.mjs';
import 'kleur/colors';
import { $ as $$Icon } from '../../chunks/Icon_CAGHTOSM.mjs';
import 'clsx';
import { $ as $$Layout } from '../../chunks/Layout_Of09KicS.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
const $$PaymentMethodItem = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$PaymentMethodItem;
  const { id, bank, phone, cedula } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<li${addAttribute(id, "id")} class="flex gap-4 justify-between items-center bg-gray-100 p-4 rounded-md" data-status="inputs-deshabilitados"> <div class="flex flex-wrap md:flex-nowrap gap-2 flex-grow"> <input class="w-full bg-gray-100 rounded-md p-2 outline-none" type="text" name="bank"${addAttribute(bank, "value")} readonly> <input class="w-full bg-gray-100 rounded-md p-2 outline-none" type="text" name="phone"${addAttribute(phone, "value")} readonly> <input class="w-full bg-gray-100 rounded-md p-2 outline-none" type="text" name="cedula"${addAttribute(cedula, "value")} readonly> </div> <div class="flex gap-2 items-center"> <button class="edit-btn w-8 h-8 flex justify-center items-center text-gray-600 hover:text-indigo-700"> ${renderComponent($$result, "Icon", $$Icon, { "name": "mdi:account-box-edit-outline", "class": "w-6 h-6", "is:inline": true })} ${renderComponent($$result, "Icon", $$Icon, { "name": "mdi:content-save-edit", "class": "w-6 h-6 hidden", "is:inline": true })} </button> <button class="delete-btn w-8 h-8 flex justify-center items-center text-gray-600 hover:text-red-600"> ${renderComponent($$result, "Icon", $$Icon, { "name": "mdi:alpha-x", "class": "w-6 h-6", "is:inline": true })} </button> </div> </li>`;
}, "C:/Users/PC/Downloads/Gaming Zone Store/apps/frontend/src/components/paymentMethods/PaymentMethodItem.astro", void 0);

const $$PaymentMethodsList = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<ul id="payment-methods-list" class="m-0 p-2 list-none overflow-auto flex flex-col gap-8 rounded-md border border-gray-300 h-full md:w-[70%] lg:w-[50%]"> <template id="payment-method-item-template"> ${renderComponent($$result, "PaymentMethodItem", $$PaymentMethodItem, { "bank": "Banesco", "phone": "04166141129", "cedula": "31742897", "id": 0 })} </template> </ul> ${renderScript($$result, "C:/Users/PC/Downloads/Gaming Zone Store/apps/frontend/src/components/paymentMethods/PaymentMethodsList.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/PC/Downloads/Gaming Zone Store/apps/frontend/src/components/paymentMethods/PaymentMethodsList.astro", void 0);

const $$CreatePaymentMethodForm = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div id="modal-fondo" class="fixed top-0 left-0 w-full h-full backdrop-blur-xs backdrop-brightness-70 z-50 hidden items-center justify-center"> <form id="payment-methods-form" class="bg-white p-6 rounded-md flex flex-col gap-4 border border-gray-300 md:w-[70%] lg:w-[50%]"> <h2 class="text-xl font-semibold mb-4">Añadir Nuevo Método de Pago</h2> <div class="flex flex-col gap-2"> <label for="bank-input" class="font-medium">Nombre del Método de Pago</label> <div class="relative flex items-center w-full"> <input type="text" name="bank-input" id="bank-input" class="w-full rounded-md p-2 text-base ring-1 ring-gray-300 focus:outline-none focus:ring-indigo-500" placeholder="Mercantil"> <span class="absolute right-2.5 hidden text-xl"></span> </div> <p class="text-xs font-light text-red-500 hidden">
El campo no puede estar vacio.
</p> </div> <div class="flex flex-col gap-2"> <label for="phone-input" class="font-medium">Número de Teléfono</label> <div class="relative flex items-center w-full"> <input type="text" name="phone-input" id="phone-input" class="w-full rounded-md p-2 text-base ring-1 ring-gray-300 focus:outline-none focus:ring-indigo-500" placeholder="04161234567"> <span class="absolute right-2.5 hidden text-xl"></span> </div> <p class="text-xs font-light text-red-500 hidden">
Tiene que ser un número venezolano válido.
</p> </div> <div class="flex flex-col gap-2"> <label for="cedula-input" class="font-medium">Cédula de Identidad</label> <div class="relative flex items-center w-full"> <input type="text" name="cedula-input" id="cedula-input" class="w-full rounded-md p-2 text-base ring-1 ring-gray-300 focus:outline-none focus:ring-indigo-500" placeholder="31234567"> <span class="absolute right-2.5 hidden text-xl"></span> </div> <p class="text-xs font-light text-red-500 hidden">
El campo no puede estar vacio.
</p> </div> <div class="flex justify-end gap-2"> <button type="button" id="cerrar-modal" class="bg-gray-300 py-2 px-4 text-gray-700 text-center uppercase font-medium rounded-md">Cancelar</button> <button id="payment-methods-form-btn" disabled class="bg-indigo-700 py-2 px-4 text-white text-center uppercase font-medium rounded-md disabled:opacity-50 disabled:cursor-not-allowed">Añadir Método de Pago</button> </div> </form> </div> ${renderScript($$result, "C:/Users/PC/Downloads/Gaming Zone Store/apps/frontend/src/components/paymentMethods/CreatePaymentMethodForm.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/PC/Downloads/Gaming Zone Store/apps/frontend/src/components/paymentMethods/CreatePaymentMethodForm.astro", void 0);

const $$PaymentMethods = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Gesti\xF3n de M\xE9todos de Pago" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="container mx-auto px-4 py-8"> <h1 class="text-3xl font-bold mb-8">Panel de Administración de Métodos de Pago</h1> <div class="mb-4"> <button id="abrir-modal" class="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2">
Añadir Nuevo Método de Pago
</button> </div> ${renderComponent($$result2, "PaymentMethodsList", $$PaymentMethodsList, {})} </div> ${renderComponent($$result2, "CreatePaymentMethodForm", $$CreatePaymentMethodForm, {})} ` })} ${renderScript($$result, "C:/Users/PC/Downloads/Gaming Zone Store/apps/frontend/src/pages/admin/payment-methods.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/PC/Downloads/Gaming Zone Store/apps/frontend/src/pages/admin/payment-methods.astro", void 0);

const $$file = "C:/Users/PC/Downloads/Gaming Zone Store/apps/frontend/src/pages/admin/payment-methods.astro";
const $$url = "/admin/payment-methods";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$PaymentMethods,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
