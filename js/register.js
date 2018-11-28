/* Begin Attribution
    Referenced Matt Gaunt's article: Service Workers: an Introduction
    for understanding where to register the service worker in this project:
    https://developers.google.com/web/fundamentals/primers/service-workers/
    on September 24, 2018
End Attribution */

// register the service worker when the page loads
window.addEventListener('load', function() {
    if (!navigator.serviceWorker) return;
    
    navigator.serviceWorker.register('/sw.js').then(function(reg) {
      console.log('Registration successful! The service worker\'s scope is: ' + reg.scope);
    }).catch(function(err) {
      console.log('Registration failed!');
      console.error(err);
    });
});