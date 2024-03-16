const competencias = Vue.createApp({})

competencias.component('competencias', {
    template:
        `
    <div class="compUno">
       <p>RESPONSABLE</p>
    </div>
    <div class="compDos">
       <p>ORGANIZADO</p>
    </div>
    <div class="compTres">
       <p>TRABAJO EQUIPO</p>
    </div>
    <div class="compCuatro">
       <p>ADAPTABILIDAD</p>
    </div>
    `
})

competencias.mount("#appCompt");