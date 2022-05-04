import Service from "./Service";

const baseurl = '/api/form-respuestas-usuario';

export default {
    index() {
        return Service.get(`${baseurl}`);
    },
    store(obj) {
        return Service.post(`${baseurl}/store`, obj);
    },
    show(id) {
        return Service.get(`${baseurl}/show/${id}`);
    },
    showByIdFormulario(id) {
        return Service.get(`${baseurl}/show-by-idFormulario/${id}`);
    },
    showByIdUser(id, id_formulario) {
        return Service.get(`${baseurl}/show-by-idUser/${id}/${id_formulario}`);
    },
    showByIdForm(id_formulario) {
        return Service.get(`${baseurl}/show-by-idForm/${id_formulario}`);
    },
    update(obj) {
        return Service.put(`${baseurl}/update`, obj);
    },
    updateInterpretacion(obj) {
        return Service.put(`${baseurl}/updateInterpretacion`, obj);
    },
    delete(id) {
        return Service.delete(`${baseurl}/delete/${id}`);
    },
    saveChart(obj) {
        return Service.post(`${baseurl}/saveChart`, obj);
    },
    print(id) {
        window.open(`${process.env.VUE_APP_API_URL}${baseurl}/print/${id}`);
    },
}