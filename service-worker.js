"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/comm-pm/index.html","160d6cc6c7afa8572bcfdfa66d74f533"],["/comm-pm/static/css/main.98d13c90.css","fcc42dc78a475179b74157a433883d6d"],["/comm-pm/static/js/main.b12076d1.js","98ec90e91983e64e14009c77ded8998d"],["/comm-pm/static/media/1.234d7cfc.png","234d7cfcc86fc7879afd67f5ad5553b5"],["/comm-pm/static/media/1.27ce2af4.jpg","27ce2af483efa4b5249831e9cd79ff99"],["/comm-pm/static/media/1.34118f79.png","34118f7914bf760a0dc4deb518f45d65"],["/comm-pm/static/media/1.c69d4e14.jpeg","c69d4e1495e1cb4160b2ac2038e28d8e"],["/comm-pm/static/media/1.d2e16b82.jpg","d2e16b827948fc16e4d8ab2ee2bd8022"],["/comm-pm/static/media/2.7058eaa6.png","7058eaa6934bda9f736d27bbf49cfad7"],["/comm-pm/static/media/2.914ae3cf.png","914ae3cf5c483eeabe08149f686d3904"],["/comm-pm/static/media/2.b7d29a20.png","b7d29a202213695d12061ee9f25a3fc0"],["/comm-pm/static/media/2.d9689a23.jpg","d9689a23180f69aa6f1ae9a209390f37"],["/comm-pm/static/media/2.e0d0d512.jpg","e0d0d51241022ebe0f5ac50e3a0468ac"],["/comm-pm/static/media/3.4dab15a5.jpg","4dab15a5abc266d630f098d12dee7fd9"],["/comm-pm/static/media/3.c3f6a221.jpg","c3f6a221c7aeed8dd56173c5b69ba779"],["/comm-pm/static/media/3.d65f81a7.png","d65f81a70e8613cadb8d6ff147e56b55"],["/comm-pm/static/media/4.9ac466cb.jpg","9ac466cbc34e1f2c6ddb451190dfae2b"],["/comm-pm/static/media/4.aeb832a7.jpg","aeb832a794dacff4e392bd455d4415f5"],["/comm-pm/static/media/5.76455ba4.jpg","76455ba4ece8a2c0aaee00a5f6c5a0a4"],["/comm-pm/static/media/5.7abd1c3d.jpeg","7abd1c3d6366f724bb901250bf034766"],["/comm-pm/static/media/5.7c58e8bc.jpg","7c58e8bc8c59155125a2542442c28f97"],["/comm-pm/static/media/5.92ad22fc.jpg","92ad22fc45105ac70a460df2ae835401"],["/comm-pm/static/media/6.6b340022.jpg","6b340022190b5eeb62ddd8b08f5a7655"],["/comm-pm/static/media/6.8104cf20.jpg","8104cf20f153c86c69aa41750bfb6245"],["/comm-pm/static/media/6.8eb53f6a.jpg","8eb53f6a760317df6788f4bbcd4e3c6d"],["/comm-pm/static/media/7.009dbcf3.jpeg","009dbcf39e83aa09b81149aafeec26e9"],["/comm-pm/static/media/7.08b748c0.jpg","08b748c0e263c9b853b3f9afe75c99b0"],["/comm-pm/static/media/7.5d74a42d.jpg","5d74a42d115da7c445c4f459e5a025f9"],["/comm-pm/static/media/beep.a31fbc18.mp3","a31fbc18ed384970bec530aa55e8216a"],["/comm-pm/static/media/flags.9c74e172.png","9c74e172f87984c48ddf5c8108cabe67"],["/comm-pm/static/media/icons.674f50d2.eot","674f50d287a8c48dc19ba404d20fe713"],["/comm-pm/static/media/icons.912ec66d.svg","912ec66d7572ff821749319396470bde"],["/comm-pm/static/media/icons.af7ae505.woff2","af7ae505a9eed503f8b8e6982036873e"],["/comm-pm/static/media/icons.b06871f2.ttf","b06871f281fee6b241d60582ae9369b9"],["/comm-pm/static/media/icons.fee66e71.woff","fee66e712a8a08eef5805a46892932ad"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var c=new URL(e);return"/"===c.pathname.slice(-1)&&(c.pathname+=a),c.toString()},cleanResponse=function(e){if(!e.redirected)return Promise.resolve(e);return("body"in e?Promise.resolve(e.body):e.blob()).then(function(a){return new Response(a,{headers:e.headers,status:e.status,statusText:e.statusText})})},createCacheKey=function(e,a,c,t){var n=new URL(e);return t&&n.pathname.match(t)||(n.search+=(n.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(c)),n.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var c=new URL(a).pathname;return e.some(function(e){return c.match(e)})},stripIgnoredUrlParameters=function(e,a){var c=new URL(e);return c.hash="",c.search=c.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return a.every(function(a){return!a.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),c.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],c=e[1],t=new URL(a,self.location),n=createCacheKey(t,hashParamName,c,/\.\w{8}\./);return[t.toString(),n]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(c){if(!a.has(c)){var t=new Request(c,{credentials:"same-origin"});return fetch(t).then(function(a){if(!a.ok)throw new Error("Request for "+c+" returned a response with status "+a.status);return cleanResponse(a).then(function(a){return e.put(c,a)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(c){return Promise.all(c.map(function(c){if(!a.has(c.url))return e.delete(c)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var a,c=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(a=urlsToCacheKeys.has(c))||(c=addDirectoryIndex(c,"index.html"),a=urlsToCacheKeys.has(c));!a&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(c=new URL("/comm-pm/index.html",self.location).toString(),a=urlsToCacheKeys.has(c)),a&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(c)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(a){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,a),fetch(e.request)}))}});