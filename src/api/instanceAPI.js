// import Vue from 'vue';
import Axios from 'axios'
// ! Use this instance and inject so it will be usable.
// Vue.use(Axios);
// * Over here add the required KEY_API that you got after signup at the-one-api platform.
// ! https://the-one-api.dev 
const KEY_API = 'get_the_key_by_yourself'
// * Allow to use this instance to be use once this file imported to any other file, so work will be organize.
export default Axios.create({
    baseURL: 'https://the-one-api.dev/v2/',
    proxy: 'http://localhost:8080/',
    headers: {
        Authorization: 'Bearer ' + KEY_API
    }
});
