import { e as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_Xf6RRQ7R.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_BMVEfbP6.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<!-- TODO: Tipo de letra inter --><!-- TODO: Cambiar la descripcion -->${renderComponent($$result, "Layout", $$Layout, { "title": "Home" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="min-h-screen flex flex-col justify-center gap-4 px-4 max-w-7xl mx-auto md:items-center md:w-[70%] lg:flex-row"> <h1 class="text-blue-700 text-5xl md:text-6xl lg:text-7xl">Gaming Zone Store</h1> <div class="flex flex-col gap-4"> <p class="text-justify md:text-base lg:text-xl text-white">Bienvenido a Gaming Zone Store, Consigue todo lo que necesitas para ser un verdadero gamer aqui</p> <a class="bg-blue-700 py-4 px-8 text-white no-underline text-center uppercase font-medium text-xl rounded-md hover:bg-blue-800 transition-all duration-200 ease-in" href="/login">Comienza Ya!</a> </div> </main> ` })}`;
}, "C:/Users/PC/Downloads/Gaming Zone Store/apps/frontend/src/pages/index.astro", void 0);

const $$file = "C:/Users/PC/Downloads/Gaming Zone Store/apps/frontend/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
