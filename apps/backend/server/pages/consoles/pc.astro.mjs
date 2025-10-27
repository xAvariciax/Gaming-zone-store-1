import { e as createComponent, k as renderComponent, l as renderScript, r as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_DRXPRzXL.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../../chunks/Layout_Of09KicS.mjs';
/* empty css                                 */
export { renderers } from '../../renderers.mjs';

const $$Pc = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<!-- Contenido específico para la página de nintendo -->${renderComponent($$result, "Layout", $$Layout, { "data-astro-cid-uknmn7va": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="pc" data-astro-cid-uknmn7va> <div data-astro-cid-uknmn7va> <ul class="bg-white border-3 border-black" data-astro-cid-uknmn7va> <li data-astro-cid-uknmn7va></li> </ul> </div> </main> ` })}  ${renderScript($$result, "C:/Users/PC/Downloads/Gaming Zone Store/apps/frontend/src/pages/consoles/pc.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/PC/Downloads/Gaming Zone Store/apps/frontend/src/pages/consoles/pc.astro", void 0);

const $$file = "C:/Users/PC/Downloads/Gaming Zone Store/apps/frontend/src/pages/consoles/pc.astro";
const $$url = "/consoles/pc";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Pc,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
