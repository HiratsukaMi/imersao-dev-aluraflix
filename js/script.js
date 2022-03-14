var listarAnimes = [
    "https://pbs.twimg.com/media/FG4lfWOXsAELWZo.jpg",
    "https://media.fstatic.com/ISRLig7-uY-j4ysi5XsdiddZj6M=/290x478/smart/media/movies/covers/2021/09/20210906_174824.jpg",
    "https://media.fstatic.com/3Uj1A9nrI9gLCRtS8-eJ_DwpGso=/290x478/smart/media/movies/covers/2013/06/None_tNone_498.jpg",
    "https://upload.wikimedia.org/wikipedia/pt/6/64/Arte_Fruits_Basket.jpg",
    "https://www.anitube.site/wp-content/uploads/Akagami-No-Shirayuki-hime.jpg",
    "https://resize.cdn.otakumode.com/full/u/179db04b5e814882b5cc0c9603219af6.jpg",
    "https://odiariodeumcontadordehistorias.files.wordpress.com/2016/12/yuri-on-ice.jpg",
    "https://i.pinimg.com/originals/4c/46/44/4c4644fccebed32417929830763bdcb5.jpg",
    "https://www.kolpaper.com/wp-content/uploads/2020/11/Jujutsu-Kaisen-Wallpaper-Smartphone.jpg"
  ];
  var listarNomes = [
    "Haikyuu",
    "Fullmetal Alchemist Brotherhood",
    "Digimon Tamers",
    "Fruits Basket",
    "Akagami no Shirayuki-hime",
    "Demon Slayer",
    "Yuri on Ice",
    "Noragami",
    "Jujutsu Kaisen"
  ];
  var elementoExibirImagem = document.getElementById("exibirImagem");
  
  Listar();
  
  function Adicionar() {
    var adicionarImagem = document.getElementById("imagemUrl").value;
    var adicionarNome = document.getElementById("nomeAnime").value;
  
    if (
      adicionarNome != "" &&
      adicionarNome != "undefined" &&
      (adicionarImagem.endsWith(".jpg") || adicionarImagem.endsWith(".png"))
    ) {
      listarAnimes.push(adicionarImagem);
      listarNomes.push(adicionarNome);
      Listar();
    } else {
      alert("Verifique se todas as informações estão corretas.");
    }
    document.getElementById("imagemUrl").value = "";
    document.getElementById("nomeAnime").value = "";
  }
  
  function Listar() {
    elementoExibirImagem.innerHTML = "";
    for (var i = 0; i < listarAnimes.length; i++) {
      elementoExibirImagem.innerHTML =
        elementoExibirImagem.innerHTML +
        '<div class="box"><img src="' +
        listarAnimes[i] +
        '"/><br><h3>' +
        listarNomes[i] +
        "</h3></div>";
    }
  }

/*function Excluir() {
    var excluirNome = document.getElementById("nomeAnimeExcluir").value;

    alert("Funcionando");    
}*/