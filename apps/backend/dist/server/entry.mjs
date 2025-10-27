import { renderers } from './renderers.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_B0Fd6ZAm.mjs';
import { manifest } from './manifest_BU9Hqslq.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/admin/games.astro.mjs');
const _page2 = () => import('./pages/admin/payment-methods.astro.mjs');
const _page3 = () => import('./pages/admin/payments-admin.astro.mjs');
const _page4 = () => import('./pages/carrito.astro.mjs');
const _page5 = () => import('./pages/client/client-products.astro.mjs');
const _page6 = () => import('./pages/client/my-orders.astro.mjs');
const _page7 = () => import('./pages/client/pago.astro.mjs');
const _page8 = () => import('./pages/consoles/nintendo.astro.mjs');
const _page9 = () => import('./pages/consoles/pc.astro.mjs');
const _page10 = () => import('./pages/consoles/playstation.astro.mjs');
const _page11 = () => import('./pages/consoles/xbox.astro.mjs');
const _page12 = () => import('./pages/consoles.astro.mjs');
const _page13 = () => import('./pages/login.astro.mjs');
const _page14 = () => import('./pages/signup.astro.mjs');
const _page15 = () => import('./pages/verify/_token_.astro.mjs');
const _page16 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["../../node_modules/astro/dist/assets/endpoint/node.js", _page0],
    ["src/pages/admin/games.astro", _page1],
    ["src/pages/admin/payment-methods.astro", _page2],
    ["src/pages/admin/payments-admin.astro", _page3],
    ["src/pages/carrito.astro", _page4],
    ["src/pages/client/client-products.astro", _page5],
    ["src/pages/client/my-orders.astro", _page6],
    ["src/pages/client/pago.astro", _page7],
    ["src/pages/consoles/nintendo.astro", _page8],
    ["src/pages/consoles/pc.astro", _page9],
    ["src/pages/consoles/playstation.astro", _page10],
    ["src/pages/consoles/xbox.astro", _page11],
    ["src/pages/consoles.astro", _page12],
    ["src/pages/login.astro", _page13],
    ["src/pages/signup.astro", _page14],
    ["src/pages/verify/[token].astro", _page15],
    ["src/pages/index.astro", _page16]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./_noop-actions.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "mode": "middleware",
    "client": "file:///C:/Users/PC/Downloads/Gaming%20Zone%20Store/apps/frontend/dist/client/",
    "server": "file:///C:/Users/PC/Downloads/Gaming%20Zone%20Store/apps/frontend/dist/server/",
    "host": false,
    "port": 4321,
    "assets": "_astro",
    "experimentalStaticHeaders": false
};
const _exports = createExports(_manifest, _args);
const handler = _exports['handler'];
const startServer = _exports['startServer'];
const options = _exports['options'];
const _start = 'start';
if (Object.prototype.hasOwnProperty.call(serverEntrypointModule, _start)) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { handler, options, pageMap, startServer };
