"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/portfolio-site/index.html","6c12f90329de4966e507edbfb0f5bb0a"],["/portfolio-site/static/css/main.a7be607c.css","9f15c1ac3e0c6a362314511173ddc9b8"],["/portfolio-site/static/js/main.9b9df095.js","f16d2c9c8e4413508d4d5a7d5a38c141"],["/portfolio-site/static/media/arrow.85fc7430.svg","85fc7430c6a4d600aee64dc5dc2d8066"],["/portfolio-site/static/media/code.5118310d.svg","5118310da9aeb98ecfe0745b24372f9c"],["/portfolio-site/static/media/contact.e9419679.svg","e94196796fcd701aa3076f765520642a"],["/portfolio-site/static/media/desktop.532437dc.svg","532437dc93416db50420799b4186ae50"],["/portfolio-site/static/media/gametime.4d624267.png","4d6242677765b57186be374fffb80bef"],["/portfolio-site/static/media/github-logo.76d344f0.svg","76d344f08412543c74ccd1fb2493d607"],["/portfolio-site/static/media/jetfuel.645cfbde.png","645cfbdea0a5aeaa8cecbb8c725ac6fd"],["/portfolio-site/static/media/libraries.2cb3f87a.svg","2cb3f87a31a167fb437c2afe4a41a2db"],["/portfolio-site/static/media/linkedin-button.63a10ca3.svg","63a10ca3dbc3b9bbe400b69c49bba3b9"],["/portfolio-site/static/media/movietracker.69175f63.png","69175f63f9bcaaa98bdff5b3c1619ea8"],["/portfolio-site/static/media/test.dd1fc20b.svg","dd1fc20ba54e33fa7b5dfcf422537f38"],["/portfolio-site/static/media/tools.141935d6.svg","141935d6930dc17904800170e0207d7d"],["/portfolio-site/static/media/trivial.3c1e64b2.png","3c1e64b2f3f49ed85312192a7ad102b7"],["/portfolio-site/static/media/twitter.d142a9a3.svg","d142a9a3d9cdb0d5b6d76ece3bcecd2e"],["/portfolio-site/static/media/weatherly.92a6d216.png","92a6d2161064f1c69bb2512a7aec3cf5"],["/portfolio-site/static/media/workflow.98b6fa55.svg","98b6fa559083fa5dd0dbd3ead7799bc0"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,a,r){var n=new URL(e);return r&&n.pathname.match(r)||(n.search+=(n.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),n.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],r=new URL(t,self.location),n=createCacheKey(r,hashParamName,a,/\.\w{8}\./);return[r.toString(),n]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var r=new Request(a,{credentials:"same-origin"});return fetch(r).then(function(t){if(!t.ok)throw new Error("Request for "+a+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(a,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!t.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,"index.html"),t=urlsToCacheKeys.has(a));!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(a=new URL("/portfolio-site/index.html",self.location).toString(),t=urlsToCacheKeys.has(a)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});