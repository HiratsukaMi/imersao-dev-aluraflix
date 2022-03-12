var listarAnimes = [];
var listarNomes = [];

function Adicionar(){
    var adicionarImagem = document.getElementById("imagemUrl").value;
    var adicionarNome = document.getElementById("nomeAnime").value;

    if((adicionarNome != "" && adicionarNome != "undefined") && (adicionarImagem.endsWith(".jpg") || adicionarImagem.endsWith(".png"))){
        listarAnimes.push(adicionarImagem);
        listarNomes.push(adicionarNome);
        Listar();
    } else {
        alert("Verifique se todas as informações estão corretas.");
    }
    document.getElementById("imagemUrl").value = "";
    document.getElementById("nomeAnime").value = "";
}

function Listar(){
    var elementoExibirImagem = document.getElementById("exibirImagem");
    elementoExibirImagem.innerHTML = "";
    for (var i = 0; i < listarAnimes.length; i++) {
        elementoExibirImagem.innerHTML = elementoExibirImagem.innerHTML + '<div class="box"><img src="' + listarAnimes[i] + '"/><br><h3>'+ listarNomes[i] +'</h3></div>';
    }
}