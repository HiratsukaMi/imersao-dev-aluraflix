function Adicionar(){
    var adicionar = document.getElementById("imagemUrl").value;

    if(adicionar.endsWith(".jpg") || adicionar.endsWith(".png")){
        var listarAnimes = [];
        listarAnimes.push(adicionar);
        Listar(listarAnimes);
    } else {
        alert("Insira um endereço de imagem válido. (.jpg ou .png)");
    }
    document.getElementById("imagemUrl").value = "";
}

function Listar(listarAnimes){
    for (var i = 0; i < listarAnimes.length; i++) {
        var animesFavoritos = "<img src=" + listarAnimes[i] + ">";
        var elementoExibirImagem = document.getElementById("exibirImagem");
        elementoExibirImagem.innerHTML = elementoExibirImagem.innerHTML + animesFavoritos;
    }
}