if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let r=Promise.resolve();return o[e]||(r=new Promise(async r=>{if("document"in self){const o=document.createElement("script");o.src=e,document.head.appendChild(o),o.onload=r}else importScripts(e),r()})),r.then(()=>{if(!o[e])throw new Error(`Module ${e} didn’t register its module`);return o[e]})},r=(r,o)=>{Promise.all(r.map(e)).then(e=>o(1===e.length?e[0]:e))},o={require:Promise.resolve(r)};self.define=(r,n,s)=>{o[r]||(o[r]=Promise.resolve().then(()=>{let o={};const a={uri:location.origin+r.slice(1)};return Promise.all(n.map(r=>{switch(r){case"exports":return o;case"module":return a;default:return e(r)}})).then(e=>{const r=s(...e);return o.default||(o.default=r),o})}))}}define("./sw.js",["./workbox-69b5a3b7"],(function(e){"use strict";self.addEventListener("message",e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()}),e.precacheAndRoute([{url:"/bodyworkplans/bundle.css",revision:"7f4a9b18d73ed96c2163ddd9910832f9"},{url:"/bodyworkplans/bundle.js",revision:"5bc7b21b019549288f2be0d6f0e6b5ff"},{url:"/bodyworkplans/bundle.js.map",revision:"ade74f89598aa9a4b82ab7fa893c71e3"},{url:"/bodyworkplans/android-chrome-192x192.png",revision:"bb8201d40343679024cf90dec4f4ddcb"},{url:"/bodyworkplans/android-chrome-512x512.png",revision:"3b7cc7359cc6941d6632d4373910faa8"},{url:"/bodyworkplans/apple-touch-icon.png",revision:"ac56d994ac17c4d1fc03de88f7549831"},{url:"/bodyworkplans/favicon-1080x1080.png",revision:"ba61e7add281ae75008a149d2f9c67f9"},{url:"/bodyworkplans/favicon-16x16.png",revision:"96cefd2adf1156525950563c27aa1e93"},{url:"/bodyworkplans/favicon-32x32.png",revision:"460592938003c9b15f81df54de740b8c"},{url:"/bodyworkplans/favicon-610x610.png",revision:"0ba7239379c61fa35f2d456203015f9b"},{url:"/bodyworkplans/mstile-144x144.png",revision:"f1feb0ae3cb9ca59420e9c18735e500a"},{url:"/bodyworkplans/mstile-150x150.png",revision:"f1ba947a5c52821fc86042677066582d"},{url:"/bodyworkplans/mstile-310x150.png",revision:"b3523fc1ad2789bbc926109288aef308"},{url:"/bodyworkplans/mstile-310x310.png",revision:"875c9550baf34267a6e2d368ed99c18e"},{url:"/bodyworkplans/mstile-70x70.png",revision:"2979594ee89ef5da6c15aed2b83d17f5"},{url:"/bodyworkplans/favicon.ico",revision:"91dd0537e75a3c844883a3e1d3b3a332"},{url:"/bodyworkplans/favicon.svg",revision:"3e80467fbd0aac1a212604f1474a2041"},{url:"/bodyworkplans/safari-pinned-tab.svg",revision:"a46d6381204b697c6dfc8d8abe53684c"},{url:"/bodyworkplans/browserconfig.xml",revision:"37083d7e0036d50fc6878c80473a9fa7"},{url:"/bodyworkplans/index.html",revision:"8e1590803d1553dd95d596b27264897d"},{url:"/bodyworkplans/manifest.json",revision:"63031efaed39909a8b927c5d1e1a5c82"}],{})}));
//# sourceMappingURL=sw.js.map
