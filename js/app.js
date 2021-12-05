console.log("hola mundo");

let ruta = ''
URL.startsWith('https:') ? ruta = '/20213-PWA-FAHM-P1/' : ruta = "/"

if (navigator.serviceWorker) {
    console.log("Activado");
    navigator.serviceWorker.register(ruta + '/sw.js')
}