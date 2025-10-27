import { e as createComponent, k as renderComponent, l as renderScript, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_DRXPRzXL.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_Of09KicS.mjs';
export { renderers } from '../renderers.mjs';

const $$Login = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="h-[calc(100vh-4rem)] flex flex-col gap-8 p-4 max-w-[90rem] mx-auto items-center justify-center"> <div id="notification-container" class="bg-red-600 border-3 border-black"></div> <div class="w-full max-w-md p-4 md:px-8 space-y-6 bg-white dark:bg-gray-800 rounded-lg shadow-md"> <h1 class="text-2xl font-bold text-center text-gray-900 dark:text-white">Inicia sesion</h1> <form id="signup-form" class="space-y-6" novalidate> <!-- Email Field --> <div> <label for="email" class="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">Correo</label> <input type="email" id="email" name="email" class="w-full px-4 py-2 text-gray-900 bg-gray-50 border rounded-lg focus:ring-blue-500 focus:outline-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white transition-colors duration-200"> </div> <!-- Password Field --> <div> <label for="password" class="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">Contraseña</label> <input type="password" id="password" name="password" class="w-full px-4 py-2 text-gray-900 bg-gray-50 border rounded-lg focus:ring-blue-500 focus:outline-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white transition-colors duration-200"> </div> <!-- Submit Button --> <button type="submit" id="submit-button" class="w-full px-5 py-3 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 disabled:bg-gray-400 disabled:cursor-not-allowed dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 dark:disabled:bg-gray-600 transition-colors duration-200">
Iniciar sesion
</button> </form> </div> </main> ` })} ${renderScript($$result, "C:/Users/PC/Downloads/Gaming Zone Store/apps/frontend/src/pages/login.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/PC/Downloads/Gaming Zone Store/apps/frontend/src/pages/login.astro", void 0);

const $$file = "C:/Users/PC/Downloads/Gaming Zone Store/apps/frontend/src/pages/login.astro";
const $$url = "/login";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Login,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
