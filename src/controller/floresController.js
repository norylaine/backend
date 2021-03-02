const flores = require('../modal/flores.json');
const fs = require('fs');

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

const salvarFlor = (request, response) => {
    const nome = request.body.nome;
    const nome_cientifico = request.body.nome_cientifico;
    const necessidade_de_sol = request.body.necessidade_de_sol;
    const altura = request.body.altura;
    const epoca_da_florada = request.body.epoca_da_florada;
    const ciclo_de_vida = request.body.ciclo_de_vida;
    const id = request.body.id;

    console.log(request);

    flores.push(
        {
            nome,
            nome_cientifico,
            necessidade_de_sol,
            altura,
            epoca_da_florada,
            ciclo_de_vida,
            id
        }
    );

    fs.writeFile("./src/modal/flores.json", JSON.stringify(flores), (error) => {console.log(error)});

    response.status(201).send(flores);
};

module.exports = {listarTodasFlores, pesquisaPorId, salvarFlor};
