import Axios from "axios";
const URL_MAIN = 'http://192.168.15.8/Escola/2b/Interdisciplinar/Controllers/PegaPalavra.php';
const PegaPalavra = async function(termo=''){
    let data = await Axios.get(`${URL_MAIN}?term=${termo}`);
    return data.data;
}

export {
    PegaPalavra

};

