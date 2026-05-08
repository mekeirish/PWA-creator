const CACHE_NAME = 'pwa-studio-v1';
const assetsToCache = [
    './',
    './index.html',
    './manifest.json',
    './icon.png'
];

// Installation : Mise en cache des fichiers
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.addAll(assetsToCache);
        })
    );
});

// Fetch : Servir les fichiers depuis le cache si hors-ligne
self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            return response || fetch(event.request);
        })
    );
});
