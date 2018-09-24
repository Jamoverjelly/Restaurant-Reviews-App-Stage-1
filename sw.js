const staticCacheName = 'rest-reviews-static-v1';

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





// self.addEventListener('fetch', function(event) {
//     // TODO: respond with an entry from the cache if there is one.
//     // If there isn't, fetch from the network.
//     event.respondWith(
//         caches.match(event.request).then(function(response) {
//             if (response) {
//                 console.log('Found ', event.request, ' in cache');
//                 return response;
//             }
//             else {
//                 console.log('Unable to retrieve ', event.request, ' in cache. Fetching now.');
//                 return fetch(event.request).then(function(response) {
//                     const clonedResponse = response.clone();
//                     caches.open(staticCacheName).then(function(cache) {
//                         cache.put(event.request, clonedResponse);
//                     })
//                     return response;
//                 }).catch(function(err) {
//                     console.error(err);
//                 });
//             }
//         })
//     );
// });