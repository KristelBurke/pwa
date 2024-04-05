// Make sure that sw are supported
if ('serviceWorker' in navigator) {
 window.addEventListener('load', () => {
   navigator.serviceWorker
   .register('../sw_cashed_pages.js')
    .then(reg => console.log('Service Worker: Registered'))
    .catch(err => console.log(`Service Worker: Error: ${err}`))
 }); 
}