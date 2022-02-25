const d = document;
const main = d.querySelector("main");

// Método para cargar cualquier página
const getHTML = async (url) => {
    console.log(url);
    try {
        let res = await fetch(url);
        // Aquí es donde deberías revisar res.ok, antes de obtener los datos
        if(!res.ok) {
            throw {status: res.status, statusText: res.statusText};
        }
        let data = await res.text();
        console.log(main);
        main.innerHTML = data;
    } catch (err) {
        console.log('Error:', err);
        let message = err.statusText || "Ocurrio un error";
    }
}

// Obtener contenido de página principal al cargar el dom
//d.addEventListener("DOMContentLoaded", () => getHTML('client.html'));

// Escuchar clics en documento y analizar para cargar contenido
d.addEventListener('click', e => {
    // Verificar que se trata de un enlace y tiene la clase link
    if(e.target.tagName == 'A' && e.target.classList.contains('enlace')) {
        // Cancelar evento
        e.preventDefault();
        // Cargar contenido, enviando solo URL del enlace
        let cargado = getHTML(e.target.href);
        main.innerHTML = "";
        main.innerHTML = cargado;
    }
});