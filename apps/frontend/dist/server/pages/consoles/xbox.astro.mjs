import { e as createComponent, k as renderComponent, n as renderScript, r as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_Xf6RRQ7R.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../../chunks/Layout_BMVEfbP6.mjs';
/* empty css                                   */
export { renderers } from '../../renderers.mjs';

const $$Xbox = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`<!-- Contenido específico para la página de Xbox -->${renderComponent($$result, "Layout", $$Layout, { "data-astro-cid-uqjwebif": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="Xbox" data-astro-cid-uqjwebif> <div data-astro-cid-uqjwebif> <ul class="bg-white border-3 border-black" data-astro-cid-uqjwebif> <li data-astro-cid-uqjwebif></li> </ul> </div> </main> ` })} ${renderScript($$result, "C:/Users/PC/Downloads/Gaming Zone Store/apps/frontend/src/pages/consoles/xbox.astro?astro&type=script&index=0&lang.ts")} `;
}, "C:/Users/PC/Downloads/Gaming Zone Store/apps/frontend/src/pages/consoles/xbox.astro", void 0);

const $$file = "C:/Users/PC/Downloads/Gaming Zone Store/apps/frontend/src/pages/consoles/xbox.astro";
const $$url = "/consoles/xbox";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Xbox,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
