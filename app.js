const app = Vue.createApp({
    data(){
        return {
            titulo: 'Árbores senlleiras',
            descripcion: 'Terán consideración de árbores senlleiras as árbores ou as formacións de calquera especie, tanto autóctona como foránea, situadas en terreos de propiedade pública ou privada, que sexan merecedoras de medidas específicas de protección en atención ás excepcionais características do seu porte, dendrometría, idade, rareza, significación histórica ou cultural, interese científico, educativo, estético, paisaxístico ou calquera outra circunstancia que as faga merecedoras dunha especial protección',
            url: 'https://cmatv.xunta.gal/seccion-organizacion/c/CMAOT_DX_Conservacion_Natureza?content=Direccion_Xeral_Conservacion_Natureza/Biodiversidade/seccion.html&sub=Arbores_senlleiras/#audioidContido',
            total: 0,
            campo: true,
            arboles: [{
                id:1,
                imagen:'http://placekitten.com/380/300',
                imagenes:[
                    {id:1,src:'http://placekitten.com/380/300',color: 'red',nombre:'Arbol 1'},
                    {id:2,src:'http://placekitten.com/360/300',color: 'blue',nombre:'Arbol 2'},
                    {id:3,src:'http://placekitten.com/390/300',color: 'yellow',nombre:'Arbol 3'},
                ],
                ratio:{
                    idade: false
                },
                especie:'Quercus robur, L.',
                autoctonoBool: true,
                valoracion: 5,
                positivos: 0
            },
            {
                id:2,
                imagen:'http://placekitten.com/380/300',
                imagenes:[
                    {id:1,src:'http://placekitten.com/380/300',color: 'red',nombre:'Arbol 1'},
                    {id:2,src:'http://placekitten.com/360/300',color: 'blue',nombre:'Arbol 2'},
                    {id:3,src:'http://placekitten.com/390/300',color: 'yellow',nombre:'Arbol 3'},
                ],
                ratio: {
                    tamano: false, 
                    idade: true, 
                    historico: true,
                    rareza: true,
                    beleza:true,
                },
                especie:'Quercus pirenaica, L.',
                autoctonoBool: false,
                valoracion: 5,
                positivos: 0
            }]
        }
    },
    methods: {
        actualizarPositivos(){
            this.total++;
        }
    },
   
});





//Puedes modificar los datos con la constante. Ejemplo
//mountedApp.titulo = "Nuevo título"