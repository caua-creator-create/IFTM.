import carros from "./carros.js";   

    let CARRO_ATUAL = 1;
    let idsSlideShow;

    document.getElementById("imgCarro").addEventListener("mouseenter", pauseSlideShow);
    document.getElementById("imgCarro").addEventListener("mouseout", playSlideShow);
    document.getElementById("tempo").addEventListener("change", function(){
        alert(document.getElementById("tempo").value);
    });


    function exibirCarro(){
        document.getElementById("imgCarro").src= `img/${carros[CARRO_ATUAL].src}`;
        document.getElementById("nome").innerHTML = carros[CARRO_ATUAL].nome;
        document.getElementById("potencia").innerHTML = carros[CARRO_ATUAL].potencia;
    }

    function atualizarCarro(){
        if (CARRO_ATUAL > carros.length - 1) CARRO_ATUAL++;
        else CARRO_ATUAL = 0;
        exibirCarro();
    }
    
    function playSlideShow() {
        idsSlideShow = setInterval(atualizarCarro, 1000);
        
    }

    function pauseSlideShow() {
        clearInterval(idsSlideShow);
    }

    function main(){
        exibirCarro();
        playSlideShow();
    }

    main();