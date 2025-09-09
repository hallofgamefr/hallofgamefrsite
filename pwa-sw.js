self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open("hog-cache").then((cache) => {
      return cache.addAll([
        "/hallofgamefrsite/",
        "/hallofgamefrsite/index.html",
        "/hallofgamefrsite/HOG_Logo.png"
      ]);
    })
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
