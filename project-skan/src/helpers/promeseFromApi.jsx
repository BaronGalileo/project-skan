import axios from "axios";

// path url api
// auth данные аутенцификации храняться в redux store
function getDataFromApi(path, auth) {


        return axios.get(path, { headers: {"Authorization" : `Bearer ${auth.token}`} })

}

export {getDataFromApi}