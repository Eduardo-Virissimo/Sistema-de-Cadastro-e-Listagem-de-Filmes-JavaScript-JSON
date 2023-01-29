codigo = document.getElementById('codigo')
nome = document.getElementById('nome')
genero = document.getElementById('genero')
pais = document.getElementById('pais')
lancamento = document.getElementById('lancamento')

relatorio = document.getElementsByName('relatorio')

filmesVector = []

function Filmes(codigo, nome, genero, pais, lancamento, relatorio){

    this.codigo = codigo
    this.nome = nome
    this.genero = genero
    this.pais = pais
    this.lancamento = lancamento
    this.relatorio = relatorio

}

function Cadastrar(){

    if(relatoriosim.checked == true){
        exibir = relatoriosim.value
    }
    else{
        exibir = relatorionao.value
    }

    filmesVector = []
    filmesVector = JSON.parse(localStorage.getItem("filme"))
    let filme = new Filmes(codigo.value, nome.value, genero.value, pais.value, lancamento.value, exibir)

    if(filmesVector == null){

        filmesVector = []
        filmesVector.push(filme)
        localStorage.setItem("filme", JSON.stringify(filmesVector))

    }else{

        filmesVector.push(filme)
        localStorage.setItem("filme", JSON.stringify(filmesVector))

    }    
}

function ListarFilmes(){

    lista = ""
    cadastrados = JSON.parse(localStorage.getItem("filme"))
    for(i = 0;i < cadastrados.length; i++){
        if(cadastrados[i].relatorio == 'sim'){
            lista += cadastrados[i].codigo+ " | " +cadastrados[i].nome+ " | " +cadastrados[i].genero+" | "+cadastrados[i].pais+" | "+cadastrados[i].lancamento+ '<br>'
        }
    }

    document.getElementById("listagemdiv").innerHTML = lista


}
