var velocidade = 10, velocidadeV = 2, timer;

window.onload = function () {
    carregaElementos();
};

function carregaElementos() {
    timer = setInterval(tratorAnimation, 100);
    document.getElementById("trator").style.left = 922 + "px";
    document.getElementById("trator").style.top = 350 + "px";
    document.getElementById("trator_sombra").style.left = 922 + "px";
    document.getElementById("trator_sombra").style.top = 390 + "px";
    document.getElementById("nuvem").style.left = 380 + "px";
    document.getElementById("nuvem").style.top = 140 + "px";
    document.getElementById("nuvem2").style.left = 380 + "px";
    document.getElementById("nuvem2").style.top = 108 + "px";

}


function tratorAnimation() {
    document.getElementById("trator").style.left = parseInt(document.getElementById("trator").style.left) + velocidade + "px";
    document.getElementById("trator_sombra").style.left = parseInt(document.getElementById("trator_sombra").style.left) + velocidade + "px";
    document.getElementById("nuvem").style.left = parseInt(document.getElementById("nuvem").style.left) - velocidade + "px";
    document.getElementById("nuvem2").style.left = parseInt(document.getElementById("nuvem2").style.left) - velocidade + "px";


    if (parseInt(document.getElementById("trator").style.left) >= 400) {
        velocidade = -10;
    }
    if (parseInt(document.getElementById("trator").style.top) <= 380) {
        document.getElementById("trator").style.top = 325 + "px";
        document.getElementById("trator_sombra").style.top = 370 + "px";
    }

    if (parseInt(document.getElementById("nuvem").style.left) >= 880) {
        document.getElementById("nuvem").style.left = 380 + "px";
    }
    if (parseInt(document.getElementById("nuvem2").style.left) >= 830) {
        document.getElementById("nuvem2").style.left = 380 + "px";
    }


    document.getElementById("trator").style.top = parseInt(document.getElementById("trator").style.top) + velocidadeV + "px";
    document.getElementById("trator_sombra").style.top = parseInt(document.getElementById("trator_sombra").style.top) + velocidadeV + "px";

    if (parseInt(document.getElementById("trator").style.left) <= 800) {
        document.getElementById("trator").style.transform = "rotate(-10deg)";
        document.getElementById("trator_sombra").style.transform = "rotate(-10deg)";
    }

    if (parseInt(document.getElementById("trator").style.left) <= 750) {
        document.getElementById("trator").style.transform = "rotate(-10deg)";
        document.getElementById("trator_sombra").style.transform = "rotate(-10deg)";
    }

    if (parseInt(document.getElementById("trator").style.left) <= 710) {
        document.getElementById("trator").style.transform = "rotate(-12deg)";
        document.getElementById("trator_sombra").style.transform = "rotate(-10deg)";
        velocidadeV = 2;
    }

    document.getElementById("trator").style.top = parseInt(document.getElementById("trator").style.top) - velocidadeV + "px";
    document.getElementById("trator_sombra").style.top = parseInt(document.getElementById("trator_sombra").style.top) - velocidadeV + "px";

    if (parseInt(document.getElementById("trator").style.left) <= 690) {
        document.getElementById("trator").style.transform = "rotate(-14deg)";
        document.getElementById("trator_sombra").style.transform = "rotate(-14deg)";
        velocidadeV = 1;
    }

    if (parseInt(document.getElementById("trator").style.left) <= 650) {
        document.getElementById("trator").style.transform = "rotate(-16deg)";
        document.getElementById("trator_sombra").style.transform = "rotate(-16deg)";
    }

    if (parseInt(document.getElementById("trator").style.left) <= 640) {
        document.getElementById("trator").style.transform = "rotate(-19eg)";
        document.getElementById("trator_sombra").style.transform = "rotate(-19eg)";
        velocidadeV = 2;
    }

    if (parseInt(document.getElementById("trator").style.left) <= 620) {
        document.getElementById("trator").style.transform = "rotate(-22deg)";
        document.getElementById("trator_sombra").style.transform = "rotate(-22deg)";
    }

    if (parseInt(document.getElementById("trator").style.left) <= 605) {
        document.getElementById("trator").style.transform = "rotate(-24deg)";
        document.getElementById("trator_sombra").style.transform = "rotate(-24deg)";
    }

    if (parseInt(document.getElementById("trator").style.left) <= 595) {
        document.getElementById("trator").style.transform = "rotate(-26deg)";
        document.getElementById("trator_sombra").style.transform = "rotate(-26deg)";
    }

    if (parseInt(document.getElementById("trator").style.left) <= 350) {
        document.getElementById("trator").style.left = 922 + "px";
        document.getElementById("trator_sombra").style.left = 922 + "px";
        velocidadeV = -2;
        document.getElementById("trator").style.transform = "rotate(0deg)";
        document.getElementById("trator_sombra").style.transform = "rotate(0deg)";
    }

}