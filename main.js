const app = Vue.createApp({
    data(){
        return {
            titulo: 'Árbores senlleiras',
            descripcion: 'Terán consideración de árbores senlleiras as árbores ou as formacións de calquera especie, tanto autóctona como foránea, situadas en terreos de propiedade pública ou privada, que sexan merecedoras de medidas específicas de protección en atención ás excepcionais características do seu porte, dendrometría, idade, rareza, significación histórica ou cultural, interese científico, educativo, estético, paisaxístico ou calquera outra circunstancia que as faga merecedoras dunha especial protección',
            figure:{
                imagen:'./assets/images/carballo-conxo.jpg',
                especie: 'Quercus robur, L.',
                url: 'https://cmatv.xunta.gal/seccion-organizacion/c/CMAOT_DX_Conservacion_Natureza?content=Direccion_Xeral_Conservacion_Natureza/Biodiversidade/seccion.html&sub=Arbores_senlleiras/',
                autoctonoBool: true,
                valoracion: 5
            }
            
        }
    }
});


const mountedApp = app.mount("#app");


//Puedes modificar los datos con la constante. Ejemplo
//mountedApp.titulo = "Nuevo título"