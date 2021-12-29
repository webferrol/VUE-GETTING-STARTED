app.component(
    'tree-display',
    {
        template: `
            <article class="main-content__content">
                <h2 class="title">
                    {{figure.especie}}
                    <span v-if="senlleiraBool">
                    Senlleira
                    </span>
                    
                </h2>
                <div role="list" class="comunes">
                    <span role="listitem" 
                        v-for="item in figure.imagenes"  
                        @mouseover="actualizarImagen(item.src)"
                        :key="item.id" 
                        v-bind:style="{ 'color'   : item.color }"
                    >
                        🍃{{item.id}} {{item.nombre}}
                    </span>
                </div>

                <figure class="main-header__img">
                    <img class="image" v-bind:src="figure.imagen" alt="">
                    <figcaption>

                        <mark v-show="figure.autoctonoBool">Autóctono</mark>

                        <strong v-if="figure.valoracion>3">
                            Muy interesante
                        </strong>
                        <strong v-else-if="figure.valoracion>1">
                            Interesante
                        </strong>
                        <strong v-else="figure.valoracion>3">
                            poco interesante interesante
                        </strong>
                        <strong>{{valoracionPositivos}}</strong>
                    </figcaption>
                </figure>
                <ul class="campos">
                    <li v-for="item in figure.detalles">{{item}}</li>
                </ul>
                <div class="valoraciones">
                    <button @click="sumarPositivos()">Sumar positivos</button>
                    <button v-on:click="figure.positivos-=1" :class="[figure.positivos>0 ? 'activeButton' : '']"
                        :disabled="!figure.positivos">Restar positivos</button>
                        <span :class="{ cero: !figure.positivos }">Positivos: {{figure.positivos}}</span>
                </div> 
            </article>
            
        `,
        props:{
            senlleira:{
                type: Boolean
            }
            ,
            figure:{
                type:Object,
                default(){
                    return {
                        id:1,
                        imagen:'./assets/images/carballo-conxo.jpg',
                        imagenes:[
                            {id:1,src:'http://placekitten.com/380/300',color: 'red',nombre:'Arbol 1'},
                            {id:2,src:'http://placekitten.com/360/300',color: 'blue',nombre:'Arbol 2'},
                            {id:3,src:'http://placekitten.com/390/300',color: 'yellow',nombre:'Arbol 3'},
                        ],
                        especie:'Quercus robur, L.',
                        autoctonoBool: true,
                        selleiroBool: true,
                        senlleiro: 'senlleiro, -ra: extraordinario, único',
                        ratio: {
                            tamano: true, 
                            idade: true, 
                            historico: true,
                            rareza: true,
                            beleza:true,
                        },
                        valoracion: 5,
                        positivos: 0
                    }
                }
            } 
        },
        methods: {
            actualizarImagen(src) {                
                this.figure.imagen = src;
            },
            sumarPositivos(){
                this.figure.positivos++
                this.$emit('actualizar-positivos');
            },
        },
        computed: {
            valoracionPositivos() {
                return `Valoracion ${this.figure.valoracion}, positivos: ${this.figure.positivos}`
            },
            senlleiraBool(){
                let ratio = this.figure.ratio?? false;                
                return ratio && ratio.tamano || ratio.idade || ratio.historico || ratio.rareza || ratio.beleza;
            }
        },
    }
);

const mountedApp = app.mount("#app");