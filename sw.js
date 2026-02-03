const CACHE_NAME = 'watertap-v2';
const ASSETS = [
  './',
  './index.html',
  './manifest.json'
];

// تثبيت ملفات الكاش
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
});

// جلب البيانات من الكاش عند انقطاع الإنترنت
self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((res) => res || fetch(e.request))
  );
});