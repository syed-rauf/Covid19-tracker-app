const CASHE_NAME = "Covid19App";
const CASHE_FILES = [];

self.addEventListener("install", (event) => {
  event.waitUntil(
    (async () => {
      let cache = await caches.open(CASHE_NAME);
      console.log("[Service Worker] Caching all: app shell and content");
      await cache.addAll(CASHE_FILES);
    })()
  );
});

self.addEventListener("fetch", (e) => {
  e.respondWith(
    (async () => {
      const r = await caches.match(e.request);
      console.log(`[Service Worker] Fetching resource: ${e.request.url}`);
      if (r) {
        return r;
      }
      const response = await fetch(e.request);
      const cache = await caches.open(CASHE_NAME);
      console.log(`[Service Worker] Caching new resource: ${e.request.url}`);
      cache.put(e.request, response.clone());
      return response;
    })()
  );
});
