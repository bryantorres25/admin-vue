import Service from "./Service";
const baseurl = '/api/dashboard-count';
export default {
    index(params = {}) {
        return Service.get(`${baseurl}`, {
            params: params,
        });
    },
}