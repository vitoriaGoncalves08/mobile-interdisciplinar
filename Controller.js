import Axios from "axios";
const URL_MAIN = 'http://192.168.0.112/3MtecA/Interdisciplinar-master/Controllers/PegaPalavra.php';
const PegaPalavra = async function(termo=''){
    let data = await Axios.get(`${URL_MAIN}?term=${termo}`);
    return data.data;
}

export {
    PegaPalavra

};

