console.log("hola mundo");
const BASE_URL = window.location.href

if (navigator.serviceWorker) {
    console.log("Activado");
    BASE_URL.startsWith('https:') ? url = '/20213-PWA-FAHM-P1/sw.js' : url = "/20213-PWA-FAHM-P1/sw.js"
    navigator.serviceWorker.register('/sw.js')
}