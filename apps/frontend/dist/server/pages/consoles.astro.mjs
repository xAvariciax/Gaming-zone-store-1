import { e as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_Xf6RRQ7R.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_BMVEfbP6.mjs';
/* empty css                                    */
export { renderers } from '../renderers.mjs';

const $$Consoles = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<!-- lista de consolas -->${renderComponent($$result, "Layout", $$Layout, { "data-astro-cid-xtxsqqt6": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main data-astro-cid-xtxsqqt6> <main class="w-full flex flex-col items-center p-4 md:p-10" data-astro-cid-xtxsqqt6> <h1 class="text-black text-4xl font-extrabold text-center bg-#f0f4f83b border-4 border-black p-4 md:text-5xl lg:text-6xl" data-astro-cid-xtxsqqt6>
Consolas
</h1> <ul id="consoles" class="w-full flex flex-wrap justify-center gap-4 mt-6 md:gap-8 lg:gap-12" data-astro-cid-xtxsqqt6> <li class="bg-gray-100 p-3 rounded-lg shadow-md transition-all duration-300 hover:bg-gray-200" data-astro-cid-xtxsqqt6> <a href="/consoles/pc" class="text-lg font-semibold text-gray-800 hover:text-blue-600 md:text-xl lg:text-2xl" data-astro-cid-xtxsqqt6>
PC
</a> </li> <li class="bg-gray-100 p-3 rounded-lg shadow-md transition-all duration-300 hover:bg-gray-200" data-astro-cid-xtxsqqt6> <a href="/consoles/playstation" class="text-lg font-semibold text-gray-800 hover:text-blue-600 md:text-xl lg:text-2xl" data-astro-cid-xtxsqqt6>
PlayStation
</a> </li> <li class="bg-gray-100 p-3 rounded-lg shadow-md transition-all duration-300 hover:bg-gray-200" data-astro-cid-xtxsqqt6> <a href="/consoles/xbox" class="text-lg font-semibold text-gray-800 hover:text-blue-600 md:text-xl lg:text-2xl" data-astro-cid-xtxsqqt6>
Xbox
</a> </li> <li class="bg-gray-100 p-3 rounded-lg shadow-md transition-all duration-300 hover:bg-gray-200" data-astro-cid-xtxsqqt6> <a href="/consoles/nintendo" class="text-lg font-semibold text-gray-800 hover:text-blue-600 md:text-xl lg:text-2xl" data-astro-cid-xtxsqqt6>
Nintendo
</a> </li> </ul> </main> </main> ` })} `;
}, "C:/Users/PC/Downloads/Gaming Zone Store/apps/frontend/src/pages/consoles.astro", void 0);

const $$file = "C:/Users/PC/Downloads/Gaming Zone Store/apps/frontend/src/pages/consoles.astro";
const $$url = "/consoles";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Consoles,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
