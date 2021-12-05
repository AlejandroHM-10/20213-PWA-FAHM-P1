console.log("SW: hola mundo");

let ruta = ''
URL.startsWith('https:') ? ruta = '/20213-PWA-FAHM-P1/' : ruta = "/"

self.addEventListener("install", (event) => {
    console.log("SW: Instalado");
});

self.addEventListener("activate", (event) => {
    console.log("SW: Active y controlando la app");
});

self.addEventListener("fetch", (event) => {
    console.log(event.request.url);
    if (event.request.url.includes("pages.css")) {
        let newResp = new Response(`body{
            background-color:black !important;
            color: red;
        }`, {
            headers: {
                "Content-Type": "text/css"
            }
        });
        event.respondWith(newResp);
    }
    if (event.request.url.includes(".jpg")) {
        let newResp = fetch(ruta + "/img/m1.jpg");
        console.log("Es una imagen");
        event.respondWith(newResp);
    }
});

document.getElementById("btn").addEventListener("click", (event) => {
    console.log("Hola");
})