export default {
    data(){
        return {
                
                dato:[],
                ingresoDato:'',
                AgregarUno:'',
                mapeo:''
        }
        
    },
    methods:{
        enviar(){
            this.dato.push({dato:this.ingresoDato}),
            this.ingresoDato=""
            console.log(this.dato);
        },
        eliminarprimero(){
            this.dato.shift();
        },
        eliminarelultimoelemento(){
            this.dato.pop();
        },
        eliminarcualquierelemento(){
            // if(DatoEliminarCualquier == dato){
            //     this.dato.splice()
            // }
            
        },
        eliminar(m){
            this.dato.splice(m,1);
        },
        // eliminar todo
        agregarprincipio(){
            this.dato.unshift({
                dato:this.AgregarUno,
                
            })
            this.AgregarUno=""
        },
        agregarfinnal(){
            this.dato.push({dato:this.AgregarFin}),
            this.AgregarFin=""
            console.log(this.dato);
        },
        mapeo(){
            this.mapeo.map((dato)=>(dato))
        }
    }
    
}