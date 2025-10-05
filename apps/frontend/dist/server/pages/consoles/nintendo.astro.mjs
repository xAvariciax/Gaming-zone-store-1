import { e as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_Xf6RRQ7R.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../../chunks/Layout_BMVEfbP6.mjs';
/* empty css                                       */
export { renderers } from '../../renderers.mjs';

const $$Nintendo = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<!-- Contenido específico para la página de nintendo -->${renderComponent($$result, "Layout", $$Layout, { "data-astro-cid-xd6ymrmc": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="nintendo" data-astro-cid-xd6ymrmc> <div data-astro-cid-xd6ymrmc> <ul class="bg-white border-3 border-black" data-astro-cid-xd6ymrmc> <li data-astro-cid-xd6ymrmc></li> </ul> </div> </main> ` })} `;
}, "C:/Users/PC/Downloads/Gaming Zone Store/apps/frontend/src/pages/consoles/nintendo.astro", void 0);

const $$file = "C:/Users/PC/Downloads/Gaming Zone Store/apps/frontend/src/pages/consoles/nintendo.astro";
const $$url = "/consoles/nintendo";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Nintendo,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
