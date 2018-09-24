const staticCacheName = 'rest-reviews-cache-v3';

// After registration, callback for install event should:
// 1. open / create custom cache if it does not exist
// 2. add page resources to cache by passing array into addAll()
self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open(staticCacheName).then(function(cache) {
            return cache.addAll([
                '/',
                '/index.html',
                '/restaurant.html',
                '/css/styles.css',
                '/data/restaurants.json',
                '/js/dbhelper.js',
                '/js/main.js',
                '/js/restaurant_info.js',
                '/img/1.jpg',
                '/img/2.jpg',
                '/img/3.jpg',
                '/img/4.jpg',
                '/img/5.jpg',
                '/img/6.jpg',
                '/img/7.jpg',
                '/img/8.jpg',
                '/img/9.jpg',
                '/img/10.jpg'
            ]);
        })
    );
});

self.addEventListener('fetch', function(event) {
    // TODO: respond with an entry from the cache if there is one.
    // If there isn't, fetch from the network.
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
                    });

                    return response;
                }
            )
            // End reference to helper code abstraction
        })
    );
});

