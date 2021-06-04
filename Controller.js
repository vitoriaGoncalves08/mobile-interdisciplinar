import Axios from "axios";
const URL_MAIN = 'http://192.168.15.8/Escola/2b/Interdisciplinar/Controllers/PegaPalavra.php';
const URL_SET = 'http://192.168.15.8/Escola/2b/Interdisciplinar/Controllers/InserirPalavra.php'
const PegaPalavra = async function(termo=''){
    let data = await Axios.get(`${URL_MAIN}?term=${termo}`);
    return data.data;
}
const InserePalavra = async function(word){
    let data = await Axios.get(`${URL_SET}?palavra=${word.palavra}&traducao=${word.traducao}&descricao=${word.descricao}`);
    return data.data;
}
export {
    PegaPalavra,
    InserePalavra
};

