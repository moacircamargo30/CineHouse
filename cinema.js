var cinema = 'nomeDaLoja'
console.log(cinema)

var filme1 = [1,'Rambo: Até o fim',1.29,'Silvester Stallone, Paz Vega, Yvette Monreal',2019,true]
var filme2 = [2,'Velozes e Furiosos',1.46,'Vin Diesel, Paul Walker, MIchelle Rodrigues, Jordana Brewster',2015,false]
var catalogo = [filme1,filme2]

var filme3 = [3,'Matrix',2.4,'Keanu Reeves',2020, true]

// FUNÇÃO ADICIONA FILMES

var filme=[3,'Matrix',2.4,'Keanu Reeves',2020, true]

function adicionaFilme(filme) {
catalogo.push(filme)
}
console.log(adicionaFilme(filme))
console.log(catalogo)

// FUNÇÃO BUSCAR FILME
function buscarFilme(numFilme) {
var filmeBuscado = catalogo[numFilme]
return filmeBuscado
}
console.log(buscarFilme(2))

//FUNÇÃO ALTERAR STATUS DE EM CARTAZ

function alterarStatusFilme(numeroFilme) {

    let alteraStatus = !catalogo[numeroFilme][5]
    catalogo[numeroFilme].pop()
    catalogo[numeroFilme].push(alteraStatus)
    
    return catalogo[numeroFilme]
    }
    
console.log(alterarStatusFilme(0))

