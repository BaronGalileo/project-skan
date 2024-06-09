import axios from "axios";

// path url api
// auth данные аутенцификации храняться в redux store
// post string означает POST запрос
function getDataFromApi(path, auth, request, post) {
        
        if(post) {
             return axios.post(path, { headers: {"Authorization" : `Bearer ${auth.token}`} }, request)   
        }

        else return axios.get(path, { headers: {"Authorization" : `Bearer ${auth.token}`} }, request)

}

function findKey(obj, keys) {
        let result = obj;
        for (const key of keys) {
        if (Object.hasOwn(result, key) === false) {
        return null;
        } else {
        result = result[key];
        }
        } return result;
        }

export {getDataFromApi, findKey}