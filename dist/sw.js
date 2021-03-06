const staticCacheName = 'rest-reviews-cache-v6';

// After registration, callback for install event should:
// 1. open / create custom cache if it does not exist
// 2. add page resources to cache by passing array into addAll()
self.addEventListener('install', function(event) {
    console.log("Service worker installed");
    event.waitUntil(
        caches.open(staticCacheName).then(function(cache) {
            return cache.addAll([
                'dist/',
                'dist/index.html',
                'dist/restaurant.html',
                'dist/css/styles.css',
                'dist/data/restaurants.json',
                'dist/js/dbhelper.js',
                'dist/js/main.js',
                'dist/js/restaurant_info.js',
                'dist/img/1.jpg',
                'dist/img/2.jpg',
                'dist/img/3.jpg',
                'dist/img/4.jpg',
                'dist/img/5.jpg',
                'dist/img/6.jpg',
                'dist/img/7.jpg',
                'dist/img/8.jpg',
                'dist/img/9.jpg',
                'dist/img/10.jpg'
            ]);
        })
    );
    console.log("Cache successful");
});

self.addEventListener('activate', function(event) {
    console.log('Service worker activated');
    event.waitUntil(
      caches.keys().then(function(cacheNames) {
        return Promise.all(
          cacheNames.filter(function(cacheName) {
            return cacheName.startsWith('rest-reviews') &&
                   cacheName != staticCacheName;
          }).map(function(cacheName) {
            return cache.delete(cacheName);
          })
        );
      })
    );
    console.log("Previous cache deleted");
  });

self.addEventListener('fetch', function(event) {
    // TODO: respond with an entry from the cache if there is one.
    // If there isn't, fetch from the network.
    console.log("Service worker starting fetch");
    event.respondWith(
        caches.match(event.request).then(function(response) {
            // if match in cache exists, return response
            if (response) {
                return response;
            }

            /* Begin Attribution
                Referenced Matt Gaunt's article: Service Workers: an Introduction
                for support in setting up response clone in sw's fetch event:
                https://developers.google.com/web/fundamentals/primers/service-workers/
                on September 24, 2018
            End Attribution */

            // Begin reference to helper code abstraction
            
            /*
            No match in cache? Clone the request.
            Then we will clone the response,
            providing two response objects;
            one to send to browser to load,
            and the other to send to the cache for storage.
            */
            let fetchRequest = event.request.clone();

            // return result of call to fetch, retrieving request from network
            return fetch(fetchRequest).then(
                function(response) {
                    // check state of response
                    if(!response || response.type !== 200 || response.type !== 'basic') {
                        return response;
                    }

                    // Having passed the checks, now clone the response.
                    // Save clone in variable for storing in cache.
                    // Return original response to browser for consumption.
                    let responseToCache = response.clone();

                    // saving cloned response in cache
                    caches.open(staticCacheName).then(function(cache) {
                        cache.put(event.request, responseToCache);
                        console.log("New data added to cache ", event.request.url);
                    });

                    return response;
                }
            // End reference to helper code abstraction
            // If any errors occur, catch and report them
            ).catch(function(err) {
                console.log("An error was encountered.")
                console.error(err);
            });
        })
    );
});

