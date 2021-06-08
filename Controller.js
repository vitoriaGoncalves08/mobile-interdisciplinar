import Axios from "axios";
const URL_MAIN = 'http://192.168.15.8/Escola/2b/Interdisciplinar/Controllers/PegaPalavra.php';
const URL_SET = 'http://192.168.15.8/Escola/2b/Interdisciplinar/Controllers/InserirPalavra.php'
const URL_DELETE = 'http://192.168.15.8/Escola/2b/Interdisciplinar/Controllers/DeletaPalavra.php'
const URL_UPDATE = 'http://192.168.15.8/Escola/2b/Interdisciplinar/Controllers/AtualizarPalavra.php'

const PegaPalavra = async function(termo=''){
    let data = await Axios.get(`${URL_MAIN}?term=${termo}`);
    return data.data;
}
const InserePalavra = async function(word){
    let data = await Axios.get(`${URL_SET}?palavra=${word.palavra}&traducao=${word.traducao}&descricao=${word.descricao}`);
    return data.data;
}

const DeletarPalavra = async function(idPalavra = 0)
{
    let req = await Axios.post(URL_DELETE, {id: idPalavra});
    return req.data;
}
const AtualizarPalavra = async function(dadosPalavra)
{
    // console.log(dadosPalavra);
    let req = await Axios.post(URL_UPDATE, {palavra: dadosPalavra});
    return req.data;
}

export {
    PegaPalavra,
    InserePalavra,
    DeletarPalavra,
    AtualizarPalavra,
};

