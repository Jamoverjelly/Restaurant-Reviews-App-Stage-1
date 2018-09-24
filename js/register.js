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