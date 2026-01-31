self.addEventListener("install", event => {
  event.waitUntil(
    caches.open("meu-cronometro").then(cache => {
      return cache.addAll([
        "index.html",
        "manifest.json",
        "icon.jpg"
      ]);
    })
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(resp => {
      return resp || fetch(event.request);
    })
  );
});
