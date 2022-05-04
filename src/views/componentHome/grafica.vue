<template>
    <main>
        <div class="row g-4 mb-4">
            <div class="col-12 col-lg-12">
                <div class="app-card app-card-chart h-100 shadow-sm">
                    <div class="app-card-header p-3">
                        <div class="row justify-content-between align-items-center">
                            <div class="col-auto">
                                <h4 class="app-card-title">Seleccione un formulario de la lista</h4>
                            </div><!--//col-->
                            <div class="col-auto">
                                <div class="card-header-action">
                                    <select class="form-select form-select-sm ml-auto d-inline-flex w-auto" v-model="id_formulario">
                                 <option value="">---Seleccione---</option>
                                <option :value="item.id"  v-for="item in formularios" :key="item.id">{{item.nombre}}</option>
                            </select>
                                </div><!--//card-header-actions-->
                            </div><!--//col-->
                        </div><!--//row-->
                    </div><!--//app-card-header-->
                    <div class="app-card-body p-3 p-lg-12">
                        <div class="mb-3 d-flex">   
                            
                        </div>
                        <div class="chart-container"><div class="chartjs-size-monitor"><div class="chartjs-size-monitor-expand"><div class=""></div></div><div class="chartjs-size-monitor-shrink"><div class=""></div></div></div>
                            <canvas id="grafico" style="display: block; width: 724px; height: 482px;" width="724" height="482" class="chartjs-render-monitor"></canvas>
                        </div>
                    </div><!--//app-card-body-->
                </div><!--//app-card-->
            </div><!--//col-->            
        </div>
    </main>
</template>
<script>
import sFormularioService from '../../services/sFormularioService';
import sRespuestasUsuarioService from '../../services/sRespuestasUsuarioService';
import Chart from 'chart.js/auto';

    export default {
        data (){
            return {
               formularios:[], 
               respuestas:[],
               id_formulario:'',
            }
        },
        methods:{
            async listarFormularios(){
                const response = await sFormularioService.index();
                this.formularios= response.data;
            },
            async cargarRespuestas(id_form){
                const response = await sRespuestasUsuarioService.showByIdForm(id_form);
                this.respuestas=response.data;
                this.respuestas.forEach((e) => {
                    e.detalles_secciones.forEach((x,y) => {
                        e.detalles_secciones[y]['detalles'] = 
                        e.detalles.filter(a=> parseInt(a.pregunta.seccion.id) === parseInt(x.id_seccion))
                    });
                });
                this.$nextTick(() => this.radar());
            },
            radar(){
                var grafico_radar = document.getElementById('grafico');

                //const nombre_formulario=this.formulario.nombre;
                let label=[];
                let promedios_individuales=[];
                var sums=0;
                this.respuestas.forEach((e) => {
                    e.detalles_secciones.forEach((x,y) => {
                        label[y]=x.seccion.nombre;
                        e.detalles_secciones.filter(a=> parseInt(a.seccion.id) === parseInt(x.id_seccion))
                        promedios_individuales[y]=x.puntaje_total/x.seccion.numero_preguntas;
                        sums +=promedios_individuales[y];
                    });
                });

                /* this.respuestas_usuario.detalles_secciones.forEach((e,i) => {
                label[i]=e.seccion.nombre;
                promedios[i]=e.puntaje_total/e.seccion.numero_preguntas;
                }); */

                //promedio general de cada empresa en todas sus seccions
    console.log(sums);
                var sumaPromedio=0;
                

                
                for(var i=0 ;i<promedios_individuales.length;i++){
                    sumaPromedio=parseFloat(promedios_individuales[i])+parseFloat(sumaPromedio);
                }

               sumaPromedio/(promedios_individuales.length);
                //this.promedio=parseFloat(prom = Number.parseFloat(prom).toFixed(2));


                new Chart(grafico_radar, {
                    type: 'bar',
                    data:  {
                        labels:label,
                        datasets: [{
                            label: 'Promedio',
                            data:promedios_individuales,
                            fill: false,
                            backgroundColor: 'rgba(255, 128, 0, 0.2)',
                            borderColor: 'rgb(255, 128, 0)',
                            pointBackgroundColor: 'rgb(255, 128, 0)',
                            pointBorderColor: '#fff',
                            pointHoverBackgroundColor: '#fff',
                            pointHoverBorderColor: 'rgb(255, 128, 0)',
                            
                        },
                       ],
                        
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
        },
        watch:{
            id_formulario: {
                handler: function () {
                    this.cargarRespuestas(this.id_formulario);
                },
             deep: true
            }
        },
        created(){
            this.listarFormularios();
        }
    }
</script>
