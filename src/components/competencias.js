const competencias = Vue.createApp({})

competencias.component('competencias', {
   template:
      `
    <div class="primero">  
     <div class="circulo_uno">RESPONSABLE</div>
     <div class="circulo_dos">ORGANIZADO</div>
    </div>
  
    <div class="segundo">
     <div class="circulo_tres">TRABAJO EQUIPO</div>
     <div class="circulo_cuatro">ADAPTABILIDAD</div>
    </div>
    `
})

competencias.mount("#appCompt");