console.log("hola mundo");

if (navigator.serviceWorker) {
    console.log("Activado");
    navigator.serviceWorker.register('/sw.js')
}