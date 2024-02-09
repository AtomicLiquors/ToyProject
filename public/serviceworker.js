const CACHE_NAME = "version-1";
const urlsToCache = ["index.html", "offline.html"];

const self = this;

const END_POINT = "http://localhost:8080";

// Install Service Worker
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log(cache);
      return cache.addAll(urlsToCache);
    })
  );
});

// Listen for requests
self.addEventListener("fetch", (event) => {
    const { request } = event;
    console.log(request.url);
  if (request.url.startsWith(END_POINT)) {
    event.respondWith(
      fetch(request)
        .then((response) => {
          // Check if the response is valid (status code in the range 200-299)
          if (!response.ok) {
            throw new Error("API request failed");
          }
          // Cache and return the response
          return caches.open(CACHE_NAME).then((cache) => {
            cache.put(request, response.clone());
            return response;
          });
        })
        .catch((response) => {
          // Handle API request failures
          return new Response("API request failed", response);
        })
    );
  } else {
    event.respondWith(
      caches.match(event.request).then(() => {
        return fetch(event.request).catch(() => caches.match("offline.html"));
      })
    );
  }
});

// Activating SW
self.addEventListener("activate", (event) => {
  const cacheWhitelist = [];
  cacheWhitelist.push(CACHE_NAME);

  event.waitUntil(
    caches.keys().then((cacheNames) =>
      Promise.all(
        cacheNames.map((cacheName) => {
          if (!cacheWhitelist.includes(cacheName)) {
            return caches.delete(cacheName);
          }
        })
      )
    )
  );
});
