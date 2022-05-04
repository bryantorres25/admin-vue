<template>
    <main>
        <section id="about" class="about">
        <div class="container-fluid">
            <h3 class="text-orange"> Resultado</h3>
            <h3 class="app-page-title text-danger"> Formulario: {{formulario.nombre}}</h3>
            <div class="card mt-4 border-success" >
                <div class="card-body " >
                    <div class="row">
                        <div class="col-lg-6 col-md-12 col-sm-12 ">
                            <h6>Nombre de Empresa: {{empresa.nombre}}</h6>
                        </div>
                        <div class="col-lg-6 col-md-12 col-sm-12 ">
                            <h6>Nit: {{empresa.nit}}</h6>
                        </div>
                        <div class="col-lg-6 col-md-12 col-sm-12 ">
                            <h6>Dirección: {{empresa.direccion}}</h6>
                        </div>
                        <div class="col-lg-6 col-md-12 col-sm-12 ">
                            <h6>Teléfono: {{empresa.telefono}}</h6>
                        </div>
                        <div class="col-lg-6 col-md-12 col-sm-12 ">
                            <h6>Email: {{empresa.email}}</h6>
                        </div>
                        <div class="col-lg-6 col-md-12 col-sm-12 ">
                            <h6>Representante Legal: {{empresa.representante}}</h6>
                        </div>
                    </div>
                </div>
            </div>
            <div class="card border-success mt-4">
                <div class="card-body ">
                    <div class="row">
                        <div class="col-lg-12 col-md-12 col-sm-12 bg-light">
                            <canvas id="grafico" width="500" ></canvas>
                            <table class="table table-bordered">
                                <thead>
                                    <tr >
                                        <td class="table-info">Promedio: {{promedio}}</td>
                                        <td v-if="promedio>0 && promedio<=1.95" class="table-danger">NIVEL : BAJO</td>
                                        <td v-if="promedio>1.95 && promedio<=2.95" class="table-secondary">NIVEL : BAJO-MEDIO</td>
                                        <td v-if="promedio>2.95 && promedio<=3.95" class="table-warning">NIVEL : MEDIO</td>
                                        <td v-if="promedio>3.95 && promedio<=4.95" class="table-info">NIVEL : ALTO-MEDIO</td>
                                        <td v-if="promedio>4.95 && promedio<=5" class="table-success">NIVEL : ALTO</td>
                                    </tr>
                                </thead>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row mt-4">
                <div class="col-lg-4 col-md-4 mb-2" v-for="det in respuestas_usuario.detalles_secciones" :key="det.id">
                    <div class="card"
                        :class="{
                            'border-danger':decimal((det.puntaje_total)/det.seccion.numero_preguntas)>0 && decimal((det.puntaje_total)/det.seccion.numero_preguntas)<=1.95 , 
                            'border-secondary':decimal((det.puntaje_total)/det.seccion.numero_preguntas)>1.95 && decimal((det.puntaje_total)/det.seccion.numero_preguntas)<=2.95,
                            'border-warning':decimal((det.puntaje_total)/det.seccion.numero_preguntas)>2.95 && decimal((det.puntaje_total)/det.seccion.numero_preguntas)<=3.95,
                            'border-info':decimal((det.puntaje_total)/det.seccion.numero_preguntas)>3.95 && decimal((det.puntaje_total)/det.seccion.numero_preguntas)<=4.95,
                            'border-success':decimal((det.puntaje_total)/det.seccion.numero_preguntas)>4.95 && decimal((det.puntaje_total)/det.seccion.numero_preguntas)<=5
                        }">
                        
                        <div class="card-header" >
                            <h5 class="text-orange">{{det.seccion.nombre}}</h5>
                        </div>
                        <div class="card-body">
                            <h6 >Puntaje Obtenido: {{det.puntaje_total}} puntos, de {{det.seccion.puntaje_maximo}} posibles</h6>
                            <h6 >Total de preguntas: {{det.seccion.numero_preguntas}} </h6>
                            <h6> Promedio : {{decimal((det.puntaje_total)/det.seccion.numero_preguntas)}}</h6>
                        </div>
                        <div class="card-footer" 
                            :class="{
                                'bg-danger':decimal((det.puntaje_total)/det.seccion.numero_preguntas)>0 && decimal((det.puntaje_total)/det.seccion.numero_preguntas)<=1.95 , 
                                'bg-secondary':decimal((det.puntaje_total)/det.seccion.numero_preguntas)>1.95 && decimal((det.puntaje_total)/det.seccion.numero_preguntas)<=2.95,
                                'bg-warning':decimal((det.puntaje_total)/det.seccion.numero_preguntas)>2.95 && decimal((det.puntaje_total)/det.seccion.numero_preguntas)<=3.95,
                                'bg-info':decimal((det.puntaje_total)/det.seccion.numero_preguntas)>3.95 && decimal((det.puntaje_total)/det.seccion.numero_preguntas)<=4.95,
                                'bg-success':decimal((det.puntaje_total)/det.seccion.numero_preguntas)>4.95 && decimal((det.puntaje_total)/det.seccion.numero_preguntas)<=5
                            }"
                        >
                            <span v-if="decimal((det.puntaje_total)/det.seccion.numero_preguntas)>0 && decimal((det.puntaje_total)/det.seccion.numero_preguntas)<=1.95" class="text-white">NIVEL : BAJO</span>
                            <span v-if="decimal((det.puntaje_total)/det.seccion.numero_preguntas)>1.95 && decimal((det.puntaje_total)/det.seccion.numero_preguntas)<=2.95" class="text-white">NIVEL : BAJO-MEDIO</span>
                            <span v-if="decimal((det.puntaje_total)/det.seccion.numero_preguntas)>2.95 && decimal((det.puntaje_total)/det.seccion.numero_preguntas)<=3.95" class="text-white">NIVEL : MEDIO</span>
                            <span v-if="decimal((det.puntaje_total)/det.seccion.numero_preguntas)>3.95 && decimal((det.puntaje_total)/det.seccion.numero_preguntas)<=4.95" class="text-white">NIVEL : ALTO-MEDIO</span>
                            <span v-if="decimal((det.puntaje_total)/det.seccion.numero_preguntas)>4.95 && decimal((det.puntaje_total)/det.seccion.numero_preguntas)<=5" class="text-white">NIVEL : ALTO</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="card mt-4 border-danger">
                <div class="card-body">
                    <div class="mt-2" v-for="seccion in respuestas_usuario.detalles_secciones" :key="seccion.id_seccion">
                        <h6 class="text-orange">{{seccion.seccion.nombre}}</h6>
                        <table class="table table-bordered">
                            <thead>
                                <tr>
                                    <th class="table-info">Pregunta</th>
                                    <th class="table-warning text-center">Nivel Actual</th>
                                    <th class="table-success text-center">Nivel Deseado</th>
                                    <th class="table-info text-center">Estado</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="det in seccion.detalles" :key="det.id">
                                    <td>{{det.pregunta.nombre}}</td>
                                    <td class="text-center">{{det.respuesta}}</td>
                                    <td class="text-center">{{seccion.seccion.nivel_deseado}}</td>
                                    <td class="text-center">
                                        <span v-if="det.respuesta<=1" class="text-danger ">Bajo</span>
                                        <span v-if="det.respuesta>1 && det.respuesta<=2" class="text-secondary">Bajo-Medio</span>
                                        <span v-if="det.respuesta>2 && det.respuesta<=3" class="text-warning">Medio</span>
                                        <span v-if="det.respuesta>3 && det.respuesta<=4" class="text-info ">Alto-Medio</span>
                                        <span v-if="det.respuesta>4 && det.respuesta<=5" class="text-success ">Alto</span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div class="card mt-4 border-warning">
                <div class="card-header">Interpretaciones</div>
                <div class="card-body">
                
                    <p >{{interpretacion}}</p>
                </div>
            </div>
            
            <div class="col-12 d-flex justify-content-end py-4"> 
                <button @click=" abrirModal();" type="button" class="btn app-btn-primary ">
                    Interpretacion&nbsp;<i class="fas fa-plus"></i>
                </button>
            </div>
            <div class="modal fade" id="modal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-lg modal-dialog-centered" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Interpretacion</h5>
                            <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <form >
                                <div class="form-group mb-3">
                                   <textarea  v-model="modal_interpretacion" class="form-control" cols="30" rows="30" style="height:150px"></textarea>
                                </div>  
                            </form>
                        </div>
                        <div class="modal-footer">
                            <button class="btn app-btn-primary" @click="save();">
                                Guardar<i class="fas fa-save fa-fw"></i>
                            </button>
                            <button type="button" class="btn app-btn-danger" data-bs-dismiss="modal">Cerrar<i class="fas fa-times-circle fa-fw"></i></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <p class="text-center"><button class="btn app-btn-primary btn-sm mt-2 " @click="imprimir();"><i class="fa fa-print fa-fw"></i>Imprimir</button></p>
        </section>
    </main>
</template>
<script>
import sRespuestasUsuarioService from '../../services/sRespuestasUsuarioService';
import sFormularioService from '../../services/sFormularioService';
import {Modal} from 'bootstrap';
import Swal from 'sweetalert2';
import Chart from 'chart.js/auto';
import empresaService from '../../services/empresaService';
export default {
    data(){
        return{
            id_usuario:'',
            id_formulario:'',
            respuestas_usuario:[],
            formulario:{},
            empresa:{},
            promedio:'',
            interpretacion:'',
            modal_interpretacion:'',
        }
    },
    methods: {
        export(){
            const canva = document.getElementById('grafico');
            const urlData = canva.toDataURL('image/png', 1);
            return  urlData;
        },
        async cargarRespuestas(){
            const response = await sRespuestasUsuarioService.showByIdUser(this.id_usuario,this.id_formulario);
            this.respuestas_usuario=response.data;
            this.interpretacion=response.data.interpretacion;
            this.modal_interpretacion=response.data.interpretacion;
            this.respuestas_usuario.detalles_secciones.forEach((e,i) => {
                this.respuestas_usuario.detalles_secciones[i]['detalles'] = 
                this.respuestas_usuario.detalles.filter(x=> parseInt(x.pregunta.seccion.id) === parseInt(e.id_seccion))
            });
        },
        async cargarFormulario(){
            const response = await sFormularioService.show(this.id_formulario);
            this.formulario=response.data;
        },
        radar(){
            var grafico_radar = document.getElementById('grafico');

            //const nombre_formulario=this.formulario.nombre;
            let label=[];
            let promedios=[];

            this.respuestas_usuario.detalles_secciones.forEach((e,i) => {
               label[i]=e.seccion.nombre;
               promedios[i]=e.puntaje_total/e.seccion.numero_preguntas;
            });

            //promedio general de cada empresa en todas sus seccions

            var sumaPromedio=0;
            var prom=0;


            for(var i=0 ;i<promedios.length;i++){
                sumaPromedio=parseFloat(promedios[i])+parseFloat(sumaPromedio);
            }

            prom=sumaPromedio/(promedios.length);
            this.promedio=parseFloat(prom = Number.parseFloat(prom).toFixed(2));


            new Chart(grafico_radar, {
                type: 'radar',
                data:  {
                    labels:label,
                    datasets: [{
                        label: 'Nivel Actual',
                        data:promedios,
                        fill: false,
                        backgroundColor: 'rgba(255, 128, 0, 0.2)',
                        borderColor: 'rgb(255, 128, 0)',
                        pointBackgroundColor: 'rgb(255, 128, 0)',
                        pointBorderColor: '#fff',
                        pointHoverBackgroundColor: '#fff',
                        pointHoverBorderColor: 'rgb(255, 128, 0)',
                        
                    },
                    {
                        label: 'Nivel Deseado',
                        data:[5,5,5,5,5],
                        fill: false,
                        backgroundColor: 'rgba(26, 168, 0, 0.2)',
                        borderColor: 'rgb(26, 168, 0)',
                        pointBackgroundColor: 'rgb(26, 168, 0)',
                        pointBorderColor: '#fff',
                        pointHoverBackgroundColor: '#fff',
                        pointHoverBorderColor: 'rgb(26, 168, 0)',
                        
                    }],
                    
                },
                options: {
                    elements: {
                        line: {
                            borderWidth: 2
                        }
                    }
                }
            });
            
        },
        decimal(value){
            return Number.parseFloat(value).toFixed(2);
        },
        async cargarEmpresa(){
            const response = await empresaService.showByIdUser(this.id_usuario);
            this.empresa = response.data;
        },
        async imprimir(){
             await sRespuestasUsuarioService.saveChart({
               id_respuesta:this.respuestas_usuario.id,
               data:this.export()
           });
            await sRespuestasUsuarioService.print(this.respuestas_usuario.id);
        },
        async abrirModal(){
            this.modalShow();
        },
        modalShow(){
            var myModal = new Modal(document.getElementById('modal'));
            myModal.show();
        },
        modalHide(){
           let myModal = document.getElementById('modal');
            let m = Modal.getInstance(myModal)
            m.hide();
        },
        async save(){
            let obj={
                id:this.respuestas_usuario.id,
                interpretacion:this.modal_interpretacion,
            }          
                
            await sRespuestasUsuarioService.updateInterpretacion(obj);
            this.modalHide();
           Swal.fire('Datos guardados con exito','', 'success');
            await this.cargarRespuestas();     
        }
        
    },
    async created(){
        this.id_formulario=this.$route.params.id_formulario;
        this.id_usuario=this.$route.params.id_user;
        await this.cargarRespuestas();
        await this.cargarFormulario();
        await this.cargarEmpresa();
        this.$nextTick(() => this.radar());
    }
}
</script>


