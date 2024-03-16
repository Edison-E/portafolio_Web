const navegacion = Vue.createApp({})

navegacion.component('navegacion', {
    template: `
        <nav class="barra_nav">
            <ul>
                <li id="informacion">INFORMACION</li>
                <li id="redes">REDES</li>
                <li><button id="cambiar">☼</button></li>
            </ul>
        </nav> `
});

navegacion.mount('#app')