self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('pft-unit-cache-v1').then((cache) => cache.addAll([
      './',
      './index.html',
      './manifest.json',
      './sw.js'
    ]))
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((resp) => resp || fetch(event.request))
  );
});
