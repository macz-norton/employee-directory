import axios from "axios";

const BASEURL = "https://randomuser.me/api/";

const API = {
    getUsers: function(numEmployees) {
        return axios.get(BASEURL + `?results=${numEmployees}`);
    }
};

export default API;