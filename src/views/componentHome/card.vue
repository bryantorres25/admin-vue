<template>
    <main>
        <div class="row">
            <div class="col-lg-3 col-sm-12 col-md-4">
                <div class="card  mb-3">
                    <div class="card-body bg-primary text-center text-white">
                        <i class="fa fa-user-tie fa-3x"></i>
                    </div>
                    <div class="card-footer text-dark bg-transparent border-success ">
                        <div class="col-12  ">
                            <span class="text-bold">Usuarios registrados</span> 
                        </div>
                        <div class="col-12 d-flex justify-content-end">
                            <span class="badge bg-primary">{{datos[1]}}</span> 
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-3 col-sm-12 col-md-4">
                <div class="card  mb-3">
                    <div class="card-body bg-warning text-center text-white">
                       <i class="fas fa-industry fa-3x"></i>
                    </div>
                    <div class="card-footer text-dark bg-transparent border-warning ">
                        <div class="col-12  ">
                            <span class="text-bold">Empresas registradas</span> 
                        </div>
                        <div class="col-12 d-flex justify-content-end">
                            <span class="badge bg-warning">{{datos[0]}}</span> 
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-3 col-sm-12 col-md-4">
                <div class="card  mb-3">
                    <div class="card-body bg-info text-center text-white">
                        <i class="fab fa-wpforms fa-3x"></i>
                    </div>
                    <div class="card-footer text-dark bg-transparent border-info ">
                        <div class="col-12  ">
                            <span class="text-bold">Formularios registrados</span> 
                        </div>
                        <div class="col-12 d-flex justify-content-end">
                            <span class="badge bg-info">{{datos[2]}}</span> 
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-3 col-sm-12 col-md-4">
                <div class="card  mb-3">
                    <div class="card-body bg-orange text-center text-white">
                        <i class="fas fa-clipboard-check fa-3x"></i>
                    </div>
                    <div class="card-footer text-dark bg-transparent border-orange ">
                        <div class="col-12  ">
                            <span class="text-bold">Respuestas Diligenciadas</span> 
                        </div>
                        <div class="col-12 d-flex justify-content-end">
                            <span class="badge bg-orange">{{datos[3]}}</span> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>
<script>
import dashboardService from '../../services/dashboardService';
export default {
    data(){
        return {
            datos:[]
        }
    },
    methods: {
        async cargarDatos(){
            const response = await dashboardService.index();
            this.datos=response.data;
        }
    },
    created(){
        this.cargarDatos();
    }
}
</script>

