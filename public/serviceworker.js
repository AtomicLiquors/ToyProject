const CACHE_NAME = "version-1";
const urlsToCache = ["index.html", "offline.html"];

const self = this;

const CLIENT_END_POINT = "http://localhost:5173";
const SERVER_END_POINT = "http://localhost:8080";

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener("fetch", (event) => {
  const { request } = event;
  console.log(request);
  if (request.url.startsWith(SERVER_END_POINT)) {
    event.respondWith(
      fetch(request)
        .then(async (response) => {
          // Check if the response is valid 
          handleErrors(response);
          // Cache and return the response
          console.log("Success");
          if (request.method === 'GET') {
            const cache = await caches.open(CACHE_NAME);
            cache.put(request, response.clone());
          }
          return response;
        })
        .catch((error) => {
          console.log("Failure: ");
          postMessageToClient(error);
          return new Response("API request failed", error);
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

const handleErrors = (response) => {
  if(!response.ok){
    console.log(response);
    console.log(response.status);
    throw new Error("API Request failed");
  }
}

const postMessageToClient = (response) => {
  self.clients.matchAll().then((clients) => {
    clients.forEach((client) => {
      client.postMessage(response);
    });
  });
}