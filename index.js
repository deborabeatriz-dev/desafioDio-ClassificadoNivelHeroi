const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

var heroi;
var xp;
var classificacao;

console.log(" ")

rl.question("Qual o nome do herói? ", (name) => {
    heroi = name;
    console.log(" ")

    rl.question("Qual a quantidade de XP? ", (quant) => {
        xp = quant;
        console.log(" ")
        classificador(heroi, xp);

        rl.close();
    })
    
})

function classificador(nome, xp){

    if(xp <= 1000){
        classificacao = "Ferro"
    } else if ( xp >= 1001 && xp <= 2000){
        classificacao = "Bronze"
    } else if ( xp >= 2001 && xp <= 5000){
        classificacao = "Prata"
    } else if ( xp >= 5001 && xp <= 7000){
        classificacao = "Ouro"
    } else if ( xp >= 7001 && xp <= 8000){
        classificacao = "Platina"
    } else if ( xp >= 8001 && xp <= 9000){
        classificacao = "Ascendente"
    } else if ( xp >= 9001 && xp <= 10000){
        classificacao = "Imortal"
    } else if ( xp <= 10001){
        classificacao = "Radiante"
    }

    console.log("****************************")
    console.log(" ")
    console.log("O Herói de nome " + heroi + " está no nível de " + classificacao)
    console.log(" ")
    console.log("****************************")
}