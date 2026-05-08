const CACHE_NAME = 'pwa-studio-v2'; // Changé en v2
const assetsToCache = ['./', './index.html', './manifest.json', './icon.png'];

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => cache.addAll(assetsToCache))
    );
    self.skipWaiting(); // Force la mise à jour immédiate
});

self.addEventListener('fetch', (event) => {
    // Stratégie : Essayer internet d'abord, sinon cache
    event.respondWith(
        fetch(event.request).catch(() => caches.match(event.request))
    );
});
