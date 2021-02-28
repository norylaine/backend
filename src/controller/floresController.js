const flores = require('../modal/flores.json');

const listarTodasFlores = (request, response) => {
    response.status(200).send(flores);
};

const pesquisaPorId = (request, response) => {
    const florEncontrada = flores.filter((flor) => {
        return flor.id === Number(request.params.id)
    });
    
    if (florEncontrada.length > 0) {
        response.status(200).send(florEncontrada);
    } else{
        response.status(404).send("Flor não encontrada");
    }
};

module.exports = {listarTodasFlores, pesquisaPorId};
