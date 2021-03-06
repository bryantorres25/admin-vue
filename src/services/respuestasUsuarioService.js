import Service from "./Service";
const baseurl = '/api/respuestas-usuario';
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
    showByIdUser(id, id_formulario) {
        return Service.get(`${baseurl}/show-by-idUser/${id}/${id_formulario}`);
    },
    showByIdForm(id_formulario) {
        return Service.get(`${baseurl}/show-by-idForm/${id_formulario}`);
    },
    update(obj) {
        return Service.put(`${baseurl}/update`, obj);
    },
    delete(id) {
        return Service.delete(`${baseurl}/delete/${id}`);
    },
}