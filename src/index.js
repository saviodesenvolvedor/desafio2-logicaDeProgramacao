
function points(victory, defeat = 50) {
    return result = victory - defeat    
}

let cResult = points(101)


    
switch (true) {
    case (cResult <= 10):
        rank = "Ferro"
        break;
    case (cResult  >= 11 && cResult  <= 20):
        rank = "Bronze"
        break;
    case (cResult  >= 21 && cResult  <= 50):
        rank = "Prata"
        break;
    case (cResult  >= 51 && cResult  <= 80):
        rank = "Ouro"
        break;
    case (cResult  >= 81 && cResult  <= 90):
        rank = "Diamante"
        break;
    case (cResult  >= 91 && cResult  <= 100):
        rank = "Lendário"
        break;
    case (cResult  >= 101):
        rank = "Imortal"
        break;
    }

console.log("O Herói tem de saldo de " + cResult + " está no nível de " + rank)
