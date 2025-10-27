import { e as createComponent, k as renderComponent, l as renderScript, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_DRXPRzXL.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_Of09KicS.mjs';
export { renderers } from '../renderers.mjs';

const $$Signup = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="h-[calc(100vh-4rem)] flex flex-col gap-8 p-4 max-w-[90rem] mx-auto items-center justify-center"> <div class="w-full max-w-md p-4 md:px-8 space-y-6 bg-white dark:bg-gray-800 rounded-lg shadow-md"> <h1 class="text-2xl font-bold text-center text-gray-900 dark:text-white">Crea tu cuenta</h1> <form id="signup-form" class="space-y-6" novalidate> <!-- Email Field --> <div> <label for="email" class="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">Correo</label> <input type="email" id="email" name="email" placeholder="tu.email@ejemplo.com" class="w-full px-4 py-2 text-gray-900 bg-gray-50 border rounded-lg focus:ring-blue-500 focus:outline-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white transition-colors duration-200"> <p id="email-helper" class="mt-2 text-xs text-gray-500 dark:text-gray-400">
Por favor ingresa un direccion de correo valida.
</p> </div> <!-- Password Field --> <div> <label for="password" class="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">Contraseña</label> <input type="password" id="password" name="password" placeholder="••••••••" class="w-full px-4 py-2 text-gray-900 bg-gray-50 border rounded-lg focus:ring-blue-500 focus:outline-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white transition-colors duration-200"> <p id="password-helper" class="mt-2 text-xs text-gray-500 dark:text-gray-400">
Debe tener al menos 6 caracteres e incluir una letra, un número y un carácter especial (!@#$%^&*).
</p> </div> <!-- Verify Password Field --> <div> <label for="verify-password" class="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">Verificar contraseña</label> <input type="password" id="verify-password" name="verify-password" placeholder="••••••••" class="w-full px-4 py-2 text-gray-900 bg-gray-50 border rounded-lg focus:ring-blue-500 focus:outline-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white transition-colors duration-200"> <p id="verify-password-helper" class="mt-2 text-xs text-gray-500 dark:text-gray-400">
La contraseña tiene que coincidir.
</p> </div> <!-- Submit Button --> <button type="submit" id="submit-button" disabled class="w-full px-5 py-3 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 disabled:bg-gray-400 disabled:cursor-not-allowed dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 dark:disabled:bg-gray-600 transition-colors duration-200">
Registrar
</button> </form> </div> </main> ` })} ${renderScript($$result, "C:/Users/PC/Downloads/Gaming Zone Store/apps/frontend/src/pages/signup.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/PC/Downloads/Gaming Zone Store/apps/frontend/src/pages/signup.astro", void 0);

const $$file = "C:/Users/PC/Downloads/Gaming Zone Store/apps/frontend/src/pages/signup.astro";
const $$url = "/signup";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Signup,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
