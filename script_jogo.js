var conta = 0, vedacao, audio, posinicial = 0, timer1, timer2, timer3, timer4, timerA1, timerA2, timerA3, timerA4;
var timer_1, timer_2, timer_3, timer_4, timer5, timer6, timer7, timer8, timer9, timer10, timer11, timer12, timer13, timer14, timer15, timer16, timer17, timer18, timer19, timer20, timer21, timer22, timer23, timer24, timer25;
var timerB1, timerB2, timerB3, timerB4;
var timerC1, timerC2, timerC3, timerC4;
var timerD1, timerD2, timerD3, timerD4;
var timerE1, timerE2, timerE3, timerE4;
var timerF1, timerF2, timerF3, timerF4;
var timerG1, timerG2, timerG3, timerG4;
var timerH1, timerH2, timerH3, timerH4;
var spriteNumero = 1, terreno, estuf, rega;
var velocidade = 10;
var boneco, timerm1;
var obj1Altura, obj1Largura, obj2Altura, obj2Largura, obj3Altura, obj3Largura, obj4Altura, obj4Largura, obj5Altura,
    obj5Largura, obj6Altura, obj6Largura, obj7Altura, obj7Largura, obj8Altura, obj8Largura, obj9Altura, obj9Largura,
    obj10Altura, obj10Largura, obj11Altura, obj11Largura;
var fechar = new Audio();
var som_next = new Audio();
var som_ant = new Audio();
var he = window.innerHeight;
var wi = window.innerWidth;
var compterra1 = 1, compterra2 = 1, compterra3 = 1, compterra4 = 1, compterra5 = 1, compterra6 = 1, compterra7 = 1;
var complanta1 = 0, complanta2 = 0, complanta3 = 0, complanta4 = 0, complanta5 = 0, complanta6 = 0, complanta7 = 0,
    complanta8 = 0, complanta9 = 0;
var veloc_rain = 10;
var tiempo, tiempo2, tiempo3, tiempo4, tiempo5, tiempo6, tiempo7, tiempo8, tiempo9, tiempo10, tneve0, tneve1, tneve2,
    tneve3, tneve4, tneve5, tneve6, tneve7, tneve8, c = 0, cata, cata2, cata3, cata4, cata5, cata6, cata7, cata8, cata9,
    naleatorio1, naleatorio2, naleatorio3, naleatorio4, naleatorio5, naleatorio6, naleatorio7, naleatorio8, naleatorio9,
    trata1, trata2, trata3, trata4, trata5, trata6, trata7, trata8, trata9, snowtimer, nevar, snowtimer2, snowtimer3, snowtimer4, snowtimer5, snowtimer6, snowtimer7, snowtimer8, snowtimer9;
var temporizador, fumo, fumo2;


window.onload = function () {

    if (localStorage.getItem("autenticado") == "1") {
        document.getElementById('registo_form').innerHTML = " ";
        document.getElementById('login_form').innerHTML = " ";
        carregaElementos();
        som();
        document.getElementById('next').onclick = next;
        document.getElementById('ant').onclick = post;
        document.getElementById('next2').onclick = next2;
        document.getElementById('ant2').onclick = post2;

        //Colision com Biblioteca faz
        document.getElementById('next3').onclick = next3;
        document.getElementById('ant3').onclick = post3;
        document.getElementById('next4').onclick = next4;
        document.getElementById('ant4').onclick = post4;
        document.getElementById('next5').onclick = next5;
        document.getElementById('ant5').onclick = post5;


        window.onkeypress = function (evt) {
            processaTecla(evt);
        };

        document.getElementById('nome_jogador').innerHTML = localStorage.getItem("name");


        document.getElementById('placa1').onclick = comprarTerreno;
        document.getElementById('placa2').onclick = comprarTerreno2;
        document.getElementById('placa3').onclick = comprarTerreno3;
        document.getElementById('placa4').onclick = comprarTerreno4;
        document.getElementById('placa5').onclick = comprarTerreno5;
        document.getElementById('placa6').onclick = comprarTerreno6;
        document.getElementById('placa7').onclick = comprarTerreno7;

        document.getElementById('fechar_money').onclick = function () {
            document.getElementById('money').style.display = "none";
        };
    }


    else {
        document.getElementById("reg_submit").onclick = function () {
            if(document.getElementById("user_reg").value=="" || document.getElementById("name_reg").value=="" || document.getElementById("pass_reg").value=="") {
                alert("Preencha todos os campos.");



            }else{
                localStorage.setItem("login", document.getElementById("user_reg").value);
                localStorage.setItem("name", document.getElementById("name_reg").value);
                localStorage.setItem("pass", document.getElementById("pass_reg").value);
                document.getElementById('registo_form').innerHTML = " ";
                document.getElementById('login_form').style.display = "block";
            }
        };

        document.getElementById("submit_btn").onclick = function () {
            if (document.getElementById("name").value != localStorage.getItem("login"))
                document.getElementById("header_nome").innerHTML = "login errado";
            else {
                if (document.getElementById("pass").value != localStorage.getItem("pass"))
                    document.getElementById("header_nome").innerHTML = "pass errada";
                else {
                    document.getElementById("header_nome").innerHTML = localStorage.getItem("login");
                    localStorage.setItem("autenticado", 1);
                }

            }
        }
    }

};


function carregaElementos() {

    document.getElementById("main").innerHTML += "<img id='cloud' src='imagens/nuvem.png'>";
    document.getElementById("main").innerHTML += "<img id='cloud2' src='imagens/nuvem2.png'>";
    document.getElementById("cloud").style.left = 1 +"px";
    document.getElementById("cloud").style.top= 100 +"px";
    document.getElementById("cloud2").style.left = 1 +"px";
    document.getElementById("cloud2").style.top= 80 +"px";
    document.getElementById("cloud").style.display = "block";
    document.getElementById("cloud2").style.display = "block";
    document.getElementById("cloud").style.zIndex = "50px";
    document.getElementById("cloud2").style.zIndex = "50px";
    temporizador = setInterval(mexerCloud, 90);

    document.body.style.backgroundColor = "#7D8952";
    document.getElementById('area').style.display = "block";
    document.getElementById('casa').style.display = "block";
    document.getElementById('menu').style.display = "block";

    document.getElementById('fundo_jogo').style.display = "block";
    document.getElementById('vedacao_img').style.display = "block";
    document.getElementById('icon_som').style.display = "block";

    document.getElementById('barra').style.display = "block";
    document.getElementById('notas').style.display = "block";
    document.getElementById('moedas').style.display = "block";

    document.getElementById('placa1').style.display = "block";
    document.getElementById('placa2').style.display = "block";
    document.getElementById('placa3').style.display = "block";
    document.getElementById('placa4').style.display = "block";
    document.getElementById('placa5').style.display = "block";
    document.getElementById('placa6').style.display = "block";
    document.getElementById('placa7').style.display = "block";



    //PERSONAGEM
    document.getElementById("main").innerHTML += "<img id='jogador' src='imagens/spritef.png'>";
    boneco = document.getElementById("jogador");
    boneco.style.left = 700 + "px";
    boneco.style.top = 100 + "px";


    //PLANTAÇÕES
    while (conta < 9) {
        conta++;
        document.getElementById("area").innerHTML += "<div class='quadradinhos' id='quadrado" + conta + "'>";
        document.getElementById("quadrado" + conta).innerHTML += "<div class='square3' id='mudaCorA" + conta + "'>";
        document.getElementById("quadrado" + conta).innerHTML += "<div class='square2' id='mudaCorB" + conta + "'>";
        document.getElementById("quadrado" + conta).innerHTML += "<div class='square1' id='mudaCorC" + conta + "'>";
    }

    //VEDAÇÃO
    for (vedacao = 0; vedacao < 31; vedacao++) {
        document.getElementById('vedacao').innerHTML += "<img src='imagens/fence.png' id='vedacao_" + vedacao + "'>";
        document.getElementById('vedacao_' + vedacao).style.position = "absolute";
        document.getElementById('vedacao_' + vedacao).style.top = 155 + "px";
        document.getElementById('vedacao_' + vedacao).style.width = 50 + "px";
        posinicial += 48;
        document.getElementById('vedacao_' + vedacao).style.left = posinicial + 'px';
    }


    //ESTUFAS
    for (estuf = 0; estuf < 9; estuf++) {
        document.getElementById('estufa').innerHTML += "<img src='imagens/estufa2.png' class='estufa' id='estufa_" + estuf + "'>";
        document.getElementById('estufa_' + estuf).style.display = "none";
    }

    //RAIN
    for (rega = 0; rega < 9; rega++) {
        document.getElementById('rega').innerHTML += "<img src='imagens/rain.png' class='rega' id='rega_" + rega + "'>";
        document.getElementById('rega_' + rega).style.display = "none";
    }

    //NEVE
    for (nevar = 1; nevar < 10; nevar++) {
        document.getElementById('nevao').innerHTML += "<img src='imagens/snow.png' class='snow' id='nevao_" + nevar + "'>";
        document.getElementById('nevao_' + nevar).style.display = "none";
    }


    //COLISÃO

    document.getElementById("box1").style.height = "50px";
    document.getElementById("box1").style.width = "50px";

    document.getElementById("box2").style.height = "50px";
    document.getElementById("box2").style.width = "50px";

    document.getElementById("box3").style.height = "50px";
    document.getElementById("box3").style.width = "50px";

    document.getElementById("box4").style.height = "50px";
    document.getElementById("box4").style.width = "50px";

    document.getElementById("box5").style.height = "50px";
    document.getElementById("box5").style.width = "50px";

    document.getElementById("box6").style.height = "50px";
    document.getElementById("box6").style.width = "50px";

    document.getElementById("box7").style.height = "50px";
    document.getElementById("box7").style.width = "50px";

    document.getElementById("box8").style.height = "50px";
    document.getElementById("box8").style.width = "50px";

    document.getElementById("box9").style.height = "50px";
    document.getElementById("box9").style.width = "50px";

    document.getElementById("box10").style.height = "122px";
    document.getElementById("box10").style.width = "50px";

    document.getElementById("jogador").style.height = "142px";
    document.getElementById("jogador").style.width = "66.28px";

    obj1Altura = parseInt(document.getElementById("box1").style.height);
    obj1Largura = parseInt(document.getElementById("box1").style.width);

    obj3Altura = parseInt(document.getElementById("box2").style.height);
    obj3Largura = parseInt(document.getElementById("box2").style.width);

    obj4Altura = parseInt(document.getElementById("box3").style.height);
    obj4Largura = parseInt(document.getElementById("box3").style.width);

    obj5Altura = parseInt(document.getElementById("box4").style.height);
    obj5Largura = parseInt(document.getElementById("box4").style.width);

    obj6Altura = parseInt(document.getElementById("box5").style.height);
    obj6Largura = parseInt(document.getElementById("box5").style.width);

    obj7Altura = parseInt(document.getElementById("box6").style.height);
    obj7Largura = parseInt(document.getElementById("box6").style.width);

    obj8Altura = parseInt(document.getElementById("box7").style.height);
    obj8Largura = parseInt(document.getElementById("box7").style.width);

    obj9Altura = parseInt(document.getElementById("box8").style.height);
    obj9Largura = parseInt(document.getElementById("box8").style.width);

    obj10Altura = parseInt(document.getElementById("box9").style.height);
    obj10Largura = parseInt(document.getElementById("box9").style.width);

    obj11Altura = parseInt(document.getElementById("box10").style.height);
    obj11Largura = parseInt(document.getElementById("box10").style.width);


    obj2Altura = parseInt(document.getElementById("jogador").style.height);
    obj2Largura = parseInt(document.getElementById("jogador").style.width);


    document.getElementById("box1").style.left = 830 + "px";
    document.getElementById("box1").style.top = 305 + "px";

    document.getElementById("jogador").style.left = 550 + "px";
    document.getElementById("jogador").style.top = 150 + "px";

    document.getElementById("box2").style.left = 985 + "px";
    document.getElementById("box2").style.top = 345 + "px";

    document.getElementById("box3").style.left = 1145 + "px";
    document.getElementById("box3").style.top = 390 + "px";

    document.getElementById("box4").style.left = 695 + "px";
    document.getElementById("box4").style.top = 370 + "px";

    document.getElementById("box5").style.left = 855 + "px";
    document.getElementById("box5").style.top = 415 + "px";

    document.getElementById("box6").style.left = 1005 + "px";
    document.getElementById("box6").style.top = 460 + "px";

    document.getElementById("box7").style.left = 560 + "px";
    document.getElementById("box7").style.top = 440 + "px";

    document.getElementById("box8").style.left = 715 + "px";
    document.getElementById("box8").style.top = 480 + "px";

    document.getElementById("box9").style.left = 870 + "px";
    document.getElementById("box9").style.top = 525 + "px";

    document.getElementById("box10").style.left = 174 + "px";
    document.getElementById("box10").style.top = 266 + "px";


    //COMPRA DA ÁRVORE
    document.getElementById('comprar1').onclick = function () {
        if (parseInt(document.getElementById('moedas_txt').innerHTML) >= parseInt(document.getElementById('a1').innerHTML)) {
            document.getElementById('moedas_txt').innerHTML = parseInt(document.getElementById('moedas_txt').innerHTML) - parseInt(document.getElementById('a1').innerHTML);
            document.getElementById('mercado').style.display = "none";

            switch (terreno) {
                case 1:
                    document.getElementById('tree1').style.display = "block";
                    document.getElementById('tree1').style.top = "225px";
                    document.getElementById('tree1').style.left = "815px";
                    document.getElementById('mudaCorC3').style.background = "#A2CA54";
                    document.getElementById('mudaCorB3').style.background = "#96AF5A";
                    document.getElementById('mudaCorA3').style.background = "#8BA340";
                    complanta1 = 1;
                    timer1 = setInterval(tree1, 15000);
                    cata = setInterval(catastrofe1, 150000);

                    break;

                case 2:
                    document.getElementById('tree_1').style.display = "block";
                    document.getElementById('tree_1').style.top = "270px";
                    document.getElementById('tree_1').style.left = "970px";
                    document.getElementById('mudaCorC6').style.background = "#A2CA54";
                    document.getElementById('mudaCorB6').style.background = "#96AF5A";
                    document.getElementById('mudaCorA6').style.background = "#8BA340";
                    complanta2 = 1;
                    timer_1 = setInterval(tree_1, 15000);
                    cata2 = setInterval(catastrofe2, 150000);
                    break;

                case 3:
                    document.getElementById('tree5').style.display = "block";
                    document.getElementById('tree5').style.top = "315px";
                    document.getElementById('tree5').style.left = "1130px";
                    document.getElementById('mudaCorC9').style.background = "#A2CA54";
                    document.getElementById('mudaCorB9').style.background = "#96AF5A";
                    document.getElementById('mudaCorA9').style.background = "#8BA340";
                    complanta3 = 1;
                    timer5 = setInterval(tree5, 15000);
                    cata3 = setInterval(catastrofe3, 150000);
                    break;

                case 4:
                    document.getElementById('tree9').style.display = "block";
                    document.getElementById('tree9').style.top = "288px";
                    document.getElementById('tree9').style.left = "680px";
                    document.getElementById('mudaCorC2').style.background = "#A2CA54";
                    document.getElementById('mudaCorB2').style.background = "#96AF5A";
                    document.getElementById('mudaCorA2').style.background = "#8BA340";
                    complanta4 = 1;
                    timer5 = setInterval(tree9, 15000);
                    cata4 = setInterval(catastrofe4, 150000);
                    break;

                case 5:
                    document.getElementById('tree13').style.display = "block";
                    document.getElementById('tree13').style.top = "340px";
                    document.getElementById('tree13').style.left = "835px";
                    document.getElementById('mudaCorC5').style.background = "#A2CA54";
                    document.getElementById('mudaCorB5').style.background = "#96AF5A";
                    document.getElementById('mudaCorA5').style.background = "#8BA340";
                    complanta5 = 1;
                    timer5 = setInterval(tree13, 15000);
                    cata5 = setInterval(catastrofe5, 150000);
                    break;

                case 6:
                    document.getElementById('tree17').style.display = "block";
                    document.getElementById('tree17').style.top = "370px";
                    document.getElementById('tree17').style.left = "990px";
                    document.getElementById('mudaCorC8').style.background = "#A2CA54";
                    document.getElementById('mudaCorB8').style.background = "#96AF5A";
                    document.getElementById('mudaCorA8').style.background = "#8BA340";
                    complanta6 = 1;
                    timer5 = setInterval(tree17, 15000);
                    cata6 = setInterval(catastrofe6, 150000);
                    break;

                case 7:
                    document.getElementById('tree21').style.display = "block";
                    document.getElementById('tree21').style.top = "360px";
                    document.getElementById('tree21').style.left = "545px";
                    document.getElementById('mudaCorC1').style.background = "#A2CA54";
                    document.getElementById('mudaCorB1').style.background = "#96AF5A";
                    document.getElementById('mudaCorA1').style.background = "#8BA340";
                    complanta7 = 1;
                    timer5 = setInterval(tree21, 15000);
                    cata7 = setInterval(catastrofe7, 150000);
                    break;

                case 8:
                    document.getElementById('tree25').style.display = "block";
                    document.getElementById('tree25').style.top = "405px";
                    document.getElementById('tree25').style.left = "700px";
                    document.getElementById('mudaCorC4').style.background = "#A2CA54";
                    document.getElementById('mudaCorB4').style.background = "#96AF5A";
                    document.getElementById('mudaCorA4').style.background = "#8BA340";
                    complanta8 = 1;
                    timer5 = setInterval(tree25, 15000);
                    cata8 = setInterval(catastrofe8, 150000);
                    break;

                case 9:
                    document.getElementById('tree29').style.display = "block";
                    document.getElementById('tree29').style.top = "450px";
                    document.getElementById('tree29').style.left = "855px";
                    document.getElementById('mudaCorC7').style.background = "#A2CA54";
                    document.getElementById('mudaCorB7').style.background = "#96AF5A";
                    document.getElementById('mudaCorA7').style.background = "#8BA340";
                    complanta9 = 1;
                    timer5 = setInterval(tree29, 15000);
                    cata9 = setInterval(catastrofe9, 150000);
                    break;
            }
        } else {
            document.getElementById('money').style.display = "block";
            document.getElementById('mercado').style.display = "none";
        }
    };


    //CATASTROFES COMPRAR1

    function catastrofe1() {
        naleatorio1 = parseInt(Math.random() * 2);

        if (naleatorio1 == 1) {
            trata1 = parseInt(Math.random() * 2);
            if (trata1 == 1) {

                document.getElementById('nevao_1').style.display = "block";
                document.getElementById("nevao_1").style.left = 820+"px";
                document.getElementById("nevao_1").style.top = 140+"px";
                document.getElementById("mudaCorC3").style.backgroundColor = "white";
                snowtimer = setInterval(nevarAnimation1, 100);
                //CLIQUE NA BARRA
                document.getElementById('elem3').onclick = function () {
                    if (parseInt(document.getElementById('moedas_txt').innerHTML) >= parseInt(document.getElementById('apareceNota').innerHTML)) {
                        document.getElementById('moedas_txt').innerHTML = parseInt(document.getElementById('moedas_txt').innerHTML) - parseInt(document.getElementById('apareceNota').innerHTML);
                        document.getElementById("estufa_0").style.display = "block";
                        document.getElementById("estufa_0").style.top = "104px";
                        document.getElementById("estufa_0").style.left = "747px";
                        document.getElementById("estufa_0").style.transform = "rotate(2deg)";

                        tneve0 = setInterval(estufar, 10000);
                        document.getElementById('nevao_1').style.display = "none";
                        document.getElementById("mudaCorC3").style.backgroundColor = "#A2CA54";
                    } else {
                        document.getElementById('money').style.display = "block";
                    }
                };


            } else {
                if (trata1 == 0) {
                    document.getElementById("mudaCorC3").style.backgroundColor = "#EFCE6B";
                    document.getElementById('elem5').onclick = function () {
                        if (parseInt(document.getElementById('moedas_txt').innerHTML) >= parseInt(document.getElementById('apareceTerra').innerHTML)) {
                            document.getElementById('moedas_txt').innerHTML = parseInt(document.getElementById('moedas_txt').innerHTML) - parseInt(document.getElementById('apareceTerra').innerHTML);
                            document.getElementById("rega_0").style.left = "820px";
                            document.getElementById("rega_0").style.top = "140px";
                            document.getElementById("rega_0").style.display = "block";
                            document.getElementById('nevao_1').style.display = "none";
                            tiempo2 = setInterval(chover, 100);
                            document.getElementById("mudaCorC3").style.backgroundColor = "#A2CA54";
                            c = 0;
                        } else {
                            document.getElementById('money').style.display = "block";
                        }
                    };

                }

            }

        }

        else {
            document.getElementById('elem5').onclick = function () {
                document.getElementById('money').style.display = "block";
            };
            document.getElementById('elem3').onclick = function () {
                document.getElementById('money').style.display = "block";
            };

        }
    }

    function catastrofe2() {
        naleatorio2 = parseInt(Math.random() * 2);
        if (naleatorio2 == 1) {
            trata2 = parseInt(Math.random() * 2);
            if (trata2 == 1) {
                document.getElementById('nevao_2').style.display = "block";
                document.getElementById("nevao_2").style.left = 1000 + "px";
                document.getElementById("nevao_2").style.top = 200 + "px";
                document.getElementById("mudaCorC6").style.backgroundColor = "white";
                snowtimer = setInterval(nevarAnimation2, 100);
                //CLIQUE NA BARRA
                document.getElementById('elem3').onclick = function () {
                    if (parseInt(document.getElementById('moedas_txt').innerHTML) >= parseInt(document.getElementById('apareceNota').innerHTML)) {
                        document.getElementById('moedas_txt').innerHTML = parseInt(document.getElementById('moedas_txt').innerHTML) - parseInt(document.getElementById('apareceNota').innerHTML);
                        document.getElementById("estufa_1").style.display = "block";
                        document.getElementById("estufa_1").style.top = "152px";
                        document.getElementById("estufa_1").style.left = "903px";
                        document.getElementById("estufa_1").style.transform = "rotate(2deg)";
                        tneve1 = setInterval(estufar, 10000);
                        document.getElementById('nevao_2').style.display = "none";
                        document.getElementById("mudaCorC6").style.backgroundColor = "#A2CA54";
                    } else {
                        document.getElementById('money').style.display = "block";
                    }
                };


            } else {
                if (trata2 == 0) {
                    document.getElementById("mudaCorC6").style.backgroundColor = "#EFCE6B";
                    document.getElementById('elem5').onclick = function () {
                        if (parseInt(document.getElementById('moedas_txt').innerHTML) >= parseInt(document.getElementById('apareceTerra').innerHTML)) {
                            document.getElementById('moedas_txt').innerHTML = parseInt(document.getElementById('moedas_txt').innerHTML) - parseInt(document.getElementById('apareceTerra').innerHTML);
                            document.getElementById("rega_1").style.left = "1000px";
                            document.getElementById("rega_1").style.top = "200px";
                            document.getElementById("rega_1").style.display = "block";
                            tiempo3 = setInterval(chover2, 100);
                            document.getElementById("mudaCorC6").style.backgroundColor = "#A2CA54";
                            c = 0;
                        } else {
                            document.getElementById('money').style.display = "block";
                        }
                    };
                }

            }

        } else {
            document.getElementById('elem5').onclick = function () {
            };
            document.getElementById('elem3').onclick = function () {
            };

        }
    }

    function catastrofe3() {
        naleatorio3 = parseInt(Math.random() * 2);
        if (naleatorio3 == 1) {
            trata3 = parseInt(Math.random() * 2);
            if (trata3 == 1) {
                document.getElementById('nevao_3').style.display = "block";
                document.getElementById("nevao_3").style.left = 1150 + "px";
                document.getElementById("nevao_3").style.top = 240 + "px";
                document.getElementById("mudaCorC9").style.backgroundColor = "white";
                snowtimer3 = setInterval(nevarAnimation3, 100);
                //CLIQUE NA BARRA
                document.getElementById('elem3').onclick = function () {
                    if (parseInt(document.getElementById('moedas_txt').innerHTML) >= parseInt(document.getElementById('apareceNota').innerHTML)) {
                        document.getElementById('moedas_txt').innerHTML = parseInt(document.getElementById('moedas_txt').innerHTML) - parseInt(document.getElementById('apareceNota').innerHTML);
                        document.getElementById("estufa_2").style.display = "block";
                        document.getElementById("estufa_2").style.top = "191px";
                        document.getElementById("estufa_2").style.left = "1060px";
                        document.getElementById("estufa_2").style.transform = "rotate(5deg)";
                        tneve2 = setInterval(estufar, 10000);
                        document.getElementById("mudaCorC9").style.backgroundColor = "#A2CA54";
                    } else {
                        document.getElementById('money').style.display = "block";
                    }
                };


            } else {
                if (trata3 == 0) {
                    document.getElementById("mudaCorC9").style.backgroundColor = "#EFCE6B";
                    document.getElementById('elem5').onclick = function () {
                        if (parseInt(document.getElementById('moedas_txt').innerHTML) >= parseInt(document.getElementById('apareceTerra').innerHTML)) {
                            document.getElementById('moedas_txt').innerHTML = parseInt(document.getElementById('moedas_txt').innerHTML) - parseInt(document.getElementById('apareceTerra').innerHTML);
                            document.getElementById("rega_2").style.left = "1150px";
                            document.getElementById("rega_2").style.top = "240px";
                            document.getElementById("rega_2").style.display = "block";
                            tiempo4 = setInterval(chover3, 100);
                            document.getElementById("mudaCorC9").style.backgroundColor = "#A2CA54";
                            c = 0;
                        } else {
                            document.getElementById('money').style.display = "block";
                        }
                    };
                }

            }

        } else {
            document.getElementById('elem5').onclick = function () {
            };
            document.getElementById('elem3').onclick = function () {
            };

        }
    }


    function catastrofe4() {
        naleatorio4 = parseInt(Math.random() * 2);
        if (naleatorio4 == 1) {
            trata4 = parseInt(Math.random() * 2);
            if (trata4 == 1) {
                document.getElementById('nevao_4').style.display = "block";
                document.getElementById("nevao_4").style.left = 693 + "px";
                document.getElementById("nevao_4").style.top = 222 + "px";
                document.getElementById("mudaCorC2").style.backgroundColor = "white";
                snowtimer4 = setInterval(nevarAnimation4, 100);
                //CLIQUE NA BARRA
                document.getElementById('elem3').onclick = function () {
                    if (parseInt(document.getElementById('moedas_txt').innerHTML) >= parseInt(document.getElementById('apareceNota').innerHTML)) {
                        document.getElementById('moedas_txt').innerHTML = parseInt(document.getElementById('moedas_txt').innerHTML) - parseInt(document.getElementById('apareceNota').innerHTML);
                        document.getElementById("estufa_3").style.display = "block";
                        document.getElementById("estufa_3").style.top = "172px";
                        document.getElementById("estufa_3").style.left = "611px";
                        document.getElementById("estufa_3").style.transform = "rotate(5deg)";
                        tneve3 = setInterval(estufar, 10000);
                        document.getElementById("mudaCorC2").style.backgroundColor = "#A2CA54";
                    } else {
                        document.getElementById('money').style.display = "block";
                    }
                };


            } else {
                if (trata4 == 0) {
                    document.getElementById("mudaCorC2").style.backgroundColor = "#EFCE6B";
                    document.getElementById('elem5').onclick = function () {
                        if (parseInt(document.getElementById('moedas_txt').innerHTML) >= parseInt(document.getElementById('apareceTerra').innerHTML)) {
                            document.getElementById('moedas_txt').innerHTML = parseInt(document.getElementById('moedas_txt').innerHTML) - parseInt(document.getElementById('apareceTerra').innerHTML);
                            document.getElementById("rega_3").style.left = "693px";
                            document.getElementById("rega_3").style.top = "222px";
                            document.getElementById("rega_3").style.display = "block";
                            tiempo5 = setInterval(chover4, 100);
                            document.getElementById("mudaCorC2").style.backgroundColor = "#A2CA54";
                            c = 0;
                        } else {
                            document.getElementById('money').style.display = "block";
                        }
                    };
                }

            }

        } else {
            document.getElementById('elem5').onclick = function () {
            };
            document.getElementById('elem3').onclick = function () {
            };

        }
    }

    function catastrofe5() {
        naleatorio5 = parseInt(Math.random() * 2);
        if (naleatorio5 == 1) {
            trata5 = parseInt(Math.random() * 2);
            if (trata5 == 1) {
                document.getElementById('nevao_5').style.display = "block";
                document.getElementById("nevao_5").style.left = 870 + "px";
                document.getElementById("nevao_5").style.top = 275 + "px";
                document.getElementById("mudaCorC5").style.backgroundColor = "white";
                snowtimer5 = setInterval(nevarAnimation5, 100);
                //CLIQUE NA BARRA
                document.getElementById('elem3').onclick = function () {
                    if (parseInt(document.getElementById('moedas_txt').innerHTML) >= parseInt(document.getElementById('apareceNota').innerHTML)) {
                        document.getElementById('moedas_txt').innerHTML = parseInt(document.getElementById('moedas_txt').innerHTML) - parseInt(document.getElementById('apareceNota').innerHTML);
                        document.getElementById("estufa_4").style.display = "block";
                        document.getElementById("estufa_4").style.top = "218px";
                        document.getElementById("estufa_4").style.left = "764px";
                        document.getElementById("estufa_4").style.transform = "rotate(5deg)";
                        tneve4 = setInterval(estufar, 10000);
                        document.getElementById("mudaCorC5").style.backgroundColor = "#A2CA54";
                    } else {
                        document.getElementById('money').style.display = "block";
                    }
                };


            } else {
                if (trata5 == 0) {
                    document.getElementById("mudaCorC5").style.backgroundColor = "#EFCE6B";
                    document.getElementById('elem5').onclick = function () {
                        if (parseInt(document.getElementById('moedas_txt').innerHTML) >= parseInt(document.getElementById('apareceTerra').innerHTML)) {
                            document.getElementById('moedas_txt').innerHTML = parseInt(document.getElementById('moedas_txt').innerHTML) - parseInt(document.getElementById('apareceTerra').innerHTML);
                            document.getElementById("rega_4").style.left = "870px";
                            document.getElementById("rega_4").style.top = "275px";
                            document.getElementById("rega_4").style.display = "block";
                            tiempo6 = setInterval(chover5, 100);
                            document.getElementById("mudaCorC5").style.backgroundColor = "#A2CA54";
                            c = 0;
                        } else {
                            document.getElementById('money').style.display = "block";
                        }
                    };
                }

            }

        } else {
            document.getElementById('elem5').onclick = function () {
            };
            document.getElementById('elem3').onclick = function () {
            };

        }
    }

    function catastrofe6() {
        naleatorio6 = parseInt(Math.random() * 2);
        if (naleatorio6 == 1) {
            trata6 = parseInt(Math.random() * 2);
            if (trata6 == 1) {
                document.getElementById('nevao_6').style.display = "block";
                document.getElementById("nevao_6").style.left = 1010 + "px";
                document.getElementById("nevao_6").style.top = 300 + "px";
                document.getElementById("mudaCorC8").style.backgroundColor = "white";
                snowtimer6 = setInterval(nevarAnimation6, 100);
                //CLIQUE NA BARRA
                document.getElementById('elem3').onclick = function () {
                    if (parseInt(document.getElementById('moedas_txt').innerHTML) >= parseInt(document.getElementById('apareceNota').innerHTML)) {
                        document.getElementById('moedas_txt').innerHTML = parseInt(document.getElementById('moedas_txt').innerHTML) - parseInt(document.getElementById('apareceNota').innerHTML);
                        document.getElementById("estufa_5").style.display = "block";
                        document.getElementById("estufa_5").style.top = "259px";
                        document.getElementById("estufa_5").style.left = "924px";
                        document.getElementById("estufa_5").style.transform = "rotate(5deg)";
                        tneve5 = setInterval(estufar, 10000);
                        document.getElementById("mudaCorC8").style.backgroundColor = "#A2CA54";
                    } else {
                        document.getElementById('money').style.display = "block";
                    }
                };


            } else {
                if (trata6 == 0) {
                    document.getElementById("mudaCorC8").style.backgroundColor = "#EFCE6B";
                    document.getElementById('elem5').onclick = function () {
                        if (parseInt(document.getElementById('moedas_txt').innerHTML) >= parseInt(document.getElementById('apareceTerra').innerHTML)) {
                            document.getElementById('moedas_txt').innerHTML = parseInt(document.getElementById('moedas_txt').innerHTML) - parseInt(document.getElementById('apareceTerra').innerHTML);
                            document.getElementById("rega_5").style.left = "1010px";
                            document.getElementById("rega_5").style.top = "300px";
                            document.getElementById("rega_5").style.display = "block";
                            tiempo7 = setInterval(chover6, 100);
                            document.getElementById("mudaCorC8").style.backgroundColor = "#A2CA54";
                            c = 0;
                        } else {
                            document.getElementById('money').style.display = "block";
                        }
                    };
                }

            }

        } else {
            document.getElementById('elem5').onclick = function () {
            };
            document.getElementById('elem3').onclick = function () {
            };

        }
    }

    function catastrofe7() {
        naleatorio7 = parseInt(Math.random() * 2);
        if (naleatorio7 == 1) {
            trata7 = parseInt(Math.random() * 2);
            if (trata7 == 1) {
                document.getElementById('nevao_7').style.display = "block";
                document.getElementById("nevao_7").style.left = 570 + "px";
                document.getElementById("nevao_7").style.top = 300 + "px";
                document.getElementById("mudaCorC1").style.backgroundColor = "white";
                snowtimer7 = setInterval(nevarAnimation7, 100);
                //CLIQUE NA BARRA
                document.getElementById('elem3').onclick = function () {
                    if (parseInt(document.getElementById('moedas_txt').innerHTML) >= parseInt(document.getElementById('apareceNota').innerHTML)) {
                        document.getElementById('moedas_txt').innerHTML = parseInt(document.getElementById('moedas_txt').innerHTML) - parseInt(document.getElementById('apareceNota').innerHTML);
                        document.getElementById("estufa_6").style.display = "block";
                        document.getElementById("estufa_6").style.top = "250px";
                        document.getElementById("estufa_6").style.left = "475px";
                        document.getElementById("estufa_6").style.transform = "rotate(5deg)";
                        tneve6 = setInterval(estufar, 10000);
                        document.getElementById("mudaCorC1").style.backgroundColor = "#A2CA54";
                    } else {
                        document.getElementById('money').style.display = "block";
                    }
                };


            } else {
                if (trata7 == 0) {
                    document.getElementById("mudaCorC1").style.backgroundColor = "#EFCE6B";
                    document.getElementById('elem5').onclick = function () {
                        if (parseInt(document.getElementById('moedas_txt').innerHTML) >= parseInt(document.getElementById('apareceTerra').innerHTML)) {
                            document.getElementById('moedas_txt').innerHTML = parseInt(document.getElementById('moedas_txt').innerHTML) - parseInt(document.getElementById('apareceTerra').innerHTML);
                            document.getElementById("rega_6").style.left = "570px";
                            document.getElementById("rega_6").style.top = "300px";
                            document.getElementById("rega_6").style.display = "block";
                            tiempo8 = setInterval(chover7, 100);
                            document.getElementById("mudaCorC1").style.backgroundColor = "#A2CA54";
                            c = 0;
                        } else {
                            document.getElementById('money').style.display = "block";
                        }
                    };
                }

            }

        } else {
            document.getElementById('elem5').onclick = function () {
            };
            document.getElementById('elem3').onclick = function () {
            };

        }
    }

    function catastrofe8() {
        naleatorio8 = parseInt(Math.random() * 2);
        if (naleatorio8 == 1) {
            trata8 = parseInt(Math.random() * 2);
            if (trata8 == 1) {
                document.getElementById('nevao_8').style.display = "block";
                document.getElementById("nevao_8").style.left = 728 + "px";
                document.getElementById("nevao_8").style.top = 338 + "px";
                document.getElementById("mudaCorC4").style.backgroundColor = "white";
                snowtimer8 = setInterval(nevarAnimation8, 100);
                //CLIQUE NA BARRA
                document.getElementById('elem3').onclick = function () {
                    if (parseInt(document.getElementById('moedas_txt').innerHTML) > parseInt(document.getElementById('apareceNota').innerHTML)) {
                        document.getElementById('moedas_txt').innerHTML = parseInt(document.getElementById('moedas_txt').innerHTML) - parseInt(document.getElementById('apareceNota').innerHTML);
                        document.getElementById("estufa_7").style.display = "block";
                        document.getElementById("estufa_7").style.top = "300px";
                        document.getElementById("estufa_7").style.left = "629px";
                        document.getElementById("estufa_7").style.transform = "rotate(5deg)";
                        tneve7 = setInterval(estufar, 10000);
                        document.getElementById("mudaCorC4").style.backgroundColor = "#A2CA54";
                    } else {
                        document.getElementById('money').style.display = "block";
                    }
                };


            } else {
                if (trata8 == 0) {
                    document.getElementById("mudaCorC4").style.backgroundColor = "#EFCE6B";
                    document.getElementById('elem5').onclick = function () {
                        if (parseInt(document.getElementById('moedas_txt').innerHTML) >= parseInt(document.getElementById('apareceTerra').innerHTML)) {
                            document.getElementById('moedas_txt').innerHTML = parseInt(document.getElementById('moedas_txt').innerHTML) - parseInt(document.getElementById('apareceTerra').innerHTML);
                            document.getElementById("rega_7").style.left = "728px";
                            document.getElementById("rega_7").style.top = "338px";
                            document.getElementById("rega_7").style.display = "block";
                            tiempo9 = setInterval(chover8, 100);
                            document.getElementById("mudaCorC4").style.backgroundColor = "#A2CA54";
                            c = 0;
                        } else {
                            document.getElementById('money').style.display = "block";
                        }
                    };
                }

            }

        } else {
            document.getElementById('elem5').onclick = function () {
            };
            document.getElementById('elem3').onclick = function () {
            };

        }
    }

    function catastrofe9() {
        naleatorio9 = parseInt(Math.random() * 2);
        if (naleatorio9 == 1) {
            trata9 = parseInt(Math.random() * 2);
            if (trata9 == 1) {
                document.getElementById('nevao_9').style.display = "block";
                document.getElementById("nevao_9").style.left = 890 + "px";
                document.getElementById("nevao_9").style.top = 380 + "px";
                document.getElementById("mudaCorC7").style.backgroundColor = "white";
                snowtimer9 = setInterval(nevarAnimation9, 100);
                //CLIQUE NA BARRA
                document.getElementById('elem3').onclick = function () {
                    if (parseInt(document.getElementById('moedas_txt').innerHTML) > parseInt(document.getElementById('apareceNota').innerHTML)) {
                        document.getElementById('moedas_txt').innerHTML = parseInt(document.getElementById('moedas_txt').innerHTML) - parseInt(document.getElementById('apareceNota').innerHTML);
                        document.getElementById("estufa_8").style.display = "block";
                        document.getElementById("estufa_8").style.top = "349px";
                        document.getElementById("estufa_8").style.left = "785px";
                        document.getElementById("estufa_8").style.transform = "rotate(5deg)";
                        tneve8 = setInterval(estufar, 10000);
                        document.getElementById("mudaCorC7").style.backgroundColor = "#A2CA54";
                    } else {
                        document.getElementById('money').style.display = "block";
                    }
                };


            } else {
                if (trata9 == 0) {
                    document.getElementById("mudaCorC7").style.backgroundColor = "#EFCE6B";
                    document.getElementById('elem5').onclick = function () {
                        if (parseInt(document.getElementById('moedas_txt').innerHTML) >= parseInt(document.getElementById('apareceTerra').innerHTML)) {
                            document.getElementById('moedas_txt').innerHTML = parseInt(document.getElementById('moedas_txt').innerHTML) - parseInt(document.getElementById('apareceTerra').innerHTML);
                            document.getElementById("rega_8").style.left = "890px";
                            document.getElementById("rega_8").style.top = "380px";
                            document.getElementById("rega_8").style.display = "block";
                            tiempo10 = setInterval(chover9, 100);
                            document.getElementById("mudaCorC7").style.backgroundColor = "#A2CA54";
                            c = 0;
                        } else {
                            document.getElementById('money').style.display = "block";
                        }
                    };
                }

            }

        } else {
            document.getElementById('elem5').onclick = function () {
            };
            document.getElementById('elem3').onclick = function () {
            };

        }
    }

    function nevarAnimation1() {
        velocidade = 10;

        if (c < 10) {
            if (parseInt(document.getElementById("nevao_1").style.top) >= 320) {
                c++;
                document.getElementById("nevao_1").style.top = parseInt(document.getElementById("nevao_1").style.top) + velocidade + "px";
                document.getElementById("nevao_1").style.top = "140px";
            }else {
                document.getElementById("nevao_1").style.top = parseInt(document.getElementById("nevao_1").style.top) + velocidade + "px";
            }
        } else {
            document.getElementById("nevao_1").style.display = "none";
            c=0;
            clearInterval(snowtimer);
        }
    }

    function nevarAnimation2() {
        if (c < 10) {
            if (parseInt(document.getElementById("nevao_2").style.top) >= 320) {
                c++;
                document.getElementById("nevao_2").style.top = parseInt(document.getElementById("nevao_2").style.top) + veloc_rain + "px";
                document.getElementById("nevao_2").style.top = "240px";
            } else {
                document.getElementById("nevao_2").style.top = parseInt(document.getElementById("nevao_2").style.top) + veloc_rain + "px";
            }
        } else {
            document.getElementById("nevao_2").style.display = "none";
            c=0;
            clearInterval(snowtimer2);
        }
    }

    function nevarAnimation3() {
        if (c < 10) {
            if (parseInt(document.getElementById("nevao_3").style.top) >= 380) {
                c++;
                document.getElementById("nevao_3").style.top = parseInt(document.getElementById("nevao_3").style.top) + veloc_rain + "px";
                document.getElementById("nevao_3").style.top = "200px";
            } else {
                document.getElementById("nevao_3").style.top = parseInt(document.getElementById("nevao_3").style.top) + veloc_rain + "px";
            }
        } else {
            document.getElementById("nevao_3").style.display = "none";
            c=0;
            clearInterval(snowtimer3);
        }
    }

    function nevarAnimation4() {
        if (c < 10) {
            if (parseInt(document.getElementById("nevao_4").style.top) >= 390) {
                c++;
                document.getElementById("nevao_4").style.top = parseInt(document.getElementById("nevao_4").style.top) + veloc_rain + "px";
                document.getElementById("nevao_4").style.top = "200px";
            } else {
                document.getElementById("nevao_4").style.top = parseInt(document.getElementById("nevao_4").style.top) + veloc_rain + "px";
            }
        } else {
            document.getElementById("nevao_4").style.display = "none";
            c=0;
            clearInterval(snowtimer4);
        }
    }

    function nevarAnimation5() {
        if (c < 10) {
            if (parseInt(document.getElementById("nevao_5").style.top) >= 415) {
                c++;
                document.getElementById("nevao_5").style.top = parseInt(document.getElementById("nevao_5").style.top) + veloc_rain + "px";
                document.getElementById("nevao_5").style.top = "275px";
            } else {
                document.getElementById("nevao_5").style.top = parseInt(document.getElementById("nevao_5").style.top) + veloc_rain + "px";
            }
        } else {
            document.getElementById("nevao_5").style.display = "none";
            c=0;
            clearInterval(snowtimer5);
        }
    }

    function nevarAnimation6() {
        if (c < 10) {
            if (parseInt(document.getElementById("nevao_6").style.top) >= 460) {
                c++;
                document.getElementById("nevao_6").style.top = parseInt(document.getElementById("nevao_6").style.top) + veloc_rain + "px";
                document.getElementById("nevao_6").style.top = "275px";
            } else {
                document.getElementById("nevao_6").style.top = parseInt(document.getElementById("nevao_6").style.top) + veloc_rain + "px";
            }
        } else {
            document.getElementById("nevao_6").style.display = "none";
            c=0;
            clearInterval(snowtimer6);
        }
    }

    function nevarAnimation7() {
        if (c < 10) {
            if (parseInt(document.getElementById("nevao_7").style.top) >= 420) {
                c++;
                document.getElementById("nevao_7").style.top = parseInt(document.getElementById("nevao_7").style.top) + veloc_rain + "px";
                document.getElementById("nevao_7").style.top = "300px";
            } else {
                document.getElementById("nevao_7").style.top = parseInt(document.getElementById("nevao_7").style.top) + veloc_rain + "px";
            }
        } else {
            document.getElementById("nevao_7").style.display = "none";
            c=0;
            clearInterval(snowtimer7);
        }
    }

    function nevarAnimation8() {
        if (c < 10) {
            if (parseInt(document.getElementById("nevao_8").style.top) >= 475) {
                c++;
                document.getElementById("nevao_8").style.top = parseInt(document.getElementById("nevao_8").style.top) + veloc_rain + "px";
                document.getElementById("nevao_8").style.top = "338px";
            } else {
                document.getElementById("nevao_8").style.top = parseInt(document.getElementById("nevao_8").style.top) + veloc_rain + "px";
            }
        } else {
            document.getElementById("nevao_8").style.display = "none";
            c=0;
            clearInterval(snowtimer8);
        }
    }

    function nevarAnimation9() {
        if (c < 10) {
            if (parseInt(document.getElementById("nevao_9").style.top) >= 515) {
                c++;
                document.getElementById("nevao_9").style.top = parseInt(document.getElementById("nevao_9").style.top) + veloc_rain + "px";
                document.getElementById("nevao_9").style.top = "380px";
            } else {
                document.getElementById("nevao_9").style.top = parseInt(document.getElementById("nevao_9").style.top) + veloc_rain + "px";
            }
        } else {
            document.getElementById("nevao_9").style.display = "none";
            c=0;
            clearInterval(snowtimer9);
        }
    }




    document.getElementById('comprar2').onclick = function () {
        if (parseInt(document.getElementById('moedas_txt').innerHTML) >= parseInt(document.getElementById('a2').innerHTML)) {
            document.getElementById('moedas_txt').innerHTML = parseInt(document.getElementById('moedas_txt').innerHTML) - parseInt(document.getElementById('a2').innerHTML);
            document.getElementById('mercado').style.display = "none";
            document.getElementById('treeA1').style.display = "block";
            document.getElementById('mudaCorC6').style.background = "#A2CA54";
            document.getElementById('mudaCorB6').style.background = "#96AF5A";
            document.getElementById('mudaCorA6').style.background = "#8BA340";
            teste2 = 1;
            timerA1 = setInterval(treeA1, 30000);
            cata = setInterval(catastrofe2, 150000);
        } else {
            document.getElementById('money').style.display = "block";
            document.getElementById('mercado').style.display = "none";
        }
    };


    document.getElementById('comprar3').onclick = function () {
        if (parseInt(document.getElementById('moedas_txt').innerHTML) >= parseInt(document.getElementById('a3').innerHTML)) {
            document.getElementById('moedas_txt').innerHTML = parseInt(document.getElementById('moedas_txt').innerHTML) - parseInt(document.getElementById('a3').innerHTML);
            document.getElementById('mercado').style.display = "none";
            document.getElementById('treeB1').style.display = "block";
            document.getElementById('mudaCorC9').style.background = "#A2CA54";
            document.getElementById('mudaCorB9').style.background = "#96AF5A";
            document.getElementById('mudaCorA9').style.background = "#8BA340";
            timerB1 = setInterval(treeB1, 75000);
            cata = setInterval(catastrofe3, 150000);
        } else {
            document.getElementById('money').style.display = "block";
            document.getElementById('mercado').style.display = "none";
        }
    };


    document.getElementById('comprar4').onclick = function () {
        if (parseInt(document.getElementById('moedas_txt').innerHTML) >= parseInt(document.getElementById('a4').innerHTML)) {
            document.getElementById('moedas_txt').innerHTML = parseInt(document.getElementById('moedas_txt').innerHTML) - parseInt(document.getElementById('a4').innerHTML);
            document.getElementById('mercado').style.display = "none";
            document.getElementById('treeC1').style.display = "block";
            document.getElementById('mudaCorC2').style.background = "#A2CA54";
            document.getElementById('mudaCorB2').style.background = "#96AF5A";
            document.getElementById('mudaCorA2').style.background = "#8BA340";
            timerC1 = setInterval(treeC1, 120000);
            cata = setInterval(catastrofe4, 150000);
        } else {
            document.getElementById('money').style.display = "block";
            document.getElementById('mercado').style.display = "none";
        }
    };


    document.getElementById('comprar5').onclick = function () {
        if (parseInt(document.getElementById('moedas_txt').innerHTML) >= parseInt(document.getElementById('a5').innerHTML)) {
            document.getElementById('moedas_txt').innerHTML = parseInt(document.getElementById('moedas_txt').innerHTML) - parseInt(document.getElementById('a5').innerHTML);
            document.getElementById('mercado').style.display = "none";
            document.getElementById('treeD1').style.display = "block";
            document.getElementById('mudaCorC5').style.background = "#A2CA54";
            document.getElementById('mudaCorB5').style.background = "#96AF5A";
            document.getElementById('mudaCorA5').style.background = "#8BA340";
            timerD1 = setInterval(treeD1, 150000);
            cata = setInterval(catastrofe5, 150000);
        } else {
            document.getElementById('money').style.display = "block";
            document.getElementById('mercado').style.display = "none";
        }
    };


    document.getElementById('comprar6').onclick = function () {
        if (parseInt(document.getElementById('moedas_txt').innerHTML) >= parseInt(document.getElementById('a6').innerHTML)) {
            document.getElementById('moedas_txt').innerHTML = parseInt(document.getElementById('moedas_txt').innerHTML) - parseInt(document.getElementById('a6').innerHTML);
            document.getElementById('mercado').style.display = "none";
            document.getElementById('treeE1').style.display = "block";
            document.getElementById('mudaCorC8').style.background = "#A2CA54";
            document.getElementById('mudaCorB8').style.background = "#96AF5A";
            document.getElementById('mudaCorA8').style.background = "#8BA340";
            timerE1 = setInterval(treeE1, 180000);
            cata = setInterval(catastrofe6, 150000);
        } else {
            document.getElementById('money').style.display = "block";
            document.getElementById('mercado').style.display = "none";
        }
    };


    document.getElementById('comprar7').onclick = function () {
        if (parseInt(document.getElementById('notas_txt').innerHTML) >= parseInt(document.getElementById('a7').innerHTML)) {
            document.getElementById('notas_txt').innerHTML = parseInt(document.getElementById('notas_txt').innerHTML) - parseInt(document.getElementById('a7').innerHTML);
            document.getElementById('mercado').style.display = "none";
            document.getElementById('treeF1').style.display = "block";
            document.getElementById('mudaCorC1').style.background = "#A2CA54";
            document.getElementById('mudaCorB1').style.background = "#96AF5A";
            document.getElementById('mudaCorA1').style.background = "#8BA340";
            timerF1 = setInterval(treeF1, 225000);
            cata = setInterval(catastrofe7, 150000);
        } else {
            document.getElementById('money').style.display = "block";
            document.getElementById('mercado').style.display = "none";
        }
    };


    document.getElementById('comprar8').onclick = function () {
        if (parseInt(document.getElementById('notas_txt').innerHTML) >= parseInt(document.getElementById('a8').innerHTML)) {
            document.getElementById('notas_txt').innerHTML = parseInt(document.getElementById('notas_txt').innerHTML) - parseInt(document.getElementById('a8').innerHTML);
            document.getElementById('mercado').style.display = "none";
            document.getElementById('treeG1').style.display = "block";
            document.getElementById('mudaCorC4').style.background = "#A2CA54";
            document.getElementById('mudaCorB4').style.background = "#96AF5A";
            document.getElementById('mudaCorA4').style.background = "#8BA340";
            timerG1 = setInterval(treeG1, 300000);
            cata = setInterval(catastrofe8, 150000);
        } else {
            document.getElementById('money').style.display = "block";
            document.getElementById('mercado').style.display = "none";
        }
    };


    document.getElementById('comprar9').onclick = function () {
        if (parseInt(document.getElementById('notas_txt').innerHTML) >= parseInt(document.getElementById('a8').innerHTML)) {
            document.getElementById('notas_txt').innerHTML = parseInt(document.getElementById('notas_txt').innerHTML) - parseInt(document.getElementById('a8').innerHTML);
            document.getElementById('mercado').style.display = "none";
            document.getElementById('treeH1').style.display = "block";
            document.getElementById('mudaCorC7').style.background = "#A2CA54";
            document.getElementById('mudaCorB7').style.background = "#96AF5A";
            document.getElementById('mudaCorA7').style.background = "#8BA340";
            timerH1 = setInterval(treeH1, 450000);
            cata = setInterval(catastrofe9, 150000);
        } else {
            document.getElementById('money').style.display = "block";
            document.getElementById('mercado').style.display = "none";
        }
    };

}


//LIMPAR TIEMPO ESTUFA
function estufar() {
    clearInterval(tneve0);
    clearInterval(tneve1);
    clearInterval(tneve2);
    clearInterval(tneve3);
    clearInterval(tneve4);
    clearInterval(tneve5);
    clearInterval(tneve6);
    clearInterval(tneve7);
    clearInterval(tneve8);
    document.getElementById("estufa_0").style.display = "none";
    document.getElementById("estufa_1").style.display = "none";
    document.getElementById("estufa_2").style.display = "none";
    document.getElementById("estufa_3").style.display = "none";
    document.getElementById("estufa_4").style.display = "none";
    document.getElementById("estufa_5").style.display = "none";
    document.getElementById("estufa_6").style.display = "none";
    document.getElementById("estufa_7").style.display = "none";
    document.getElementById("estufa_8").style.display = "none";
}

function chover() {
    if (c < 3) {
        if (parseInt(document.getElementById("rega_0").style.top) >= 320) {
            c++;
            document.getElementById("rega_0").style.top = parseInt(document.getElementById("rega_0").style.top) + veloc_rain + "px";
            document.getElementById("rega_0").style.top = "140px";
        } else {
            document.getElementById("rega_0").style.top = parseInt(document.getElementById("rega_0").style.top) + veloc_rain + "px";
        }
    } else {
        document.getElementById("rega_0").style.display = "none";
        pararegar();
    }
}

function chover2() {
    if (c < 3) {
        if (parseInt(document.getElementById("rega_1").style.top) >= 320) {
            c++;
            document.getElementById("rega_1").style.top = parseInt(document.getElementById("rega_1").style.top) + veloc_rain + "px";
            document.getElementById("rega_1").style.top = "240px";
        } else {
            document.getElementById("rega_1").style.top = parseInt(document.getElementById("rega_1").style.top) + veloc_rain + "px";
        }
    } else {
        document.getElementById("rega_1").style.display = "none";
        pararegar();
    }
}

function chover3() {
    if (c < 3) {
        if (parseInt(document.getElementById("rega_2").style.top) >= 380) {
            c++;
            document.getElementById("rega_2").style.top = parseInt(document.getElementById("rega_2").style.top) + veloc_rain + "px";
            document.getElementById("rega_2").style.top = "200px";
        } else {
            document.getElementById("rega_2").style.top = parseInt(document.getElementById("rega_2").style.top) + veloc_rain + "px";
        }
    } else {
        document.getElementById("rega_2").style.display = "none";
        pararegar();
    }
}

function chover4() {
    if (c < 3) {
        if (parseInt(document.getElementById("rega_3").style.top) >= 390) {
            c++;
            document.getElementById("rega_3").style.top = parseInt(document.getElementById("rega_3").style.top) + veloc_rain + "px";
            document.getElementById("rega_3").style.top = "200px";
        } else {
            document.getElementById("rega_3").style.top = parseInt(document.getElementById("rega_3").style.top) + veloc_rain + "px";
        }
    } else {
        document.getElementById("rega_3").style.display = "none";
        pararegar();
    }
}

function chover5() {
    if (c < 3) {
        if (parseInt(document.getElementById("rega_4").style.top) >= 415) {
            c++;
            document.getElementById("rega_4").style.top = parseInt(document.getElementById("rega_4").style.top) + veloc_rain + "px";
            document.getElementById("rega_4").style.top = "275px";
        } else {
            document.getElementById("rega_4").style.top = parseInt(document.getElementById("rega_4").style.top) + veloc_rain + "px";
        }
    } else {
        document.getElementById("rega_4").style.display = "none";
        pararegar();
    }
}

function chover6() {
    if (c < 3) {
        if (parseInt(document.getElementById("rega_5").style.top) >= 460) {
            c++;
            document.getElementById("rega_5").style.top = parseInt(document.getElementById("rega_5").style.top) + veloc_rain + "px";
            document.getElementById("rega_5").style.top = "275px";
        } else {
            document.getElementById("rega_5").style.top = parseInt(document.getElementById("rega_5").style.top) + veloc_rain + "px";
        }
    } else {
        document.getElementById("rega_5").style.display = "none";
        pararegar();
    }
}

function chover7() {
    if (c < 3) {
        if (parseInt(document.getElementById("rega_6").style.top) >= 420) {
            c++;
            document.getElementById("rega_6").style.top = parseInt(document.getElementById("rega_6").style.top) + veloc_rain + "px";
            document.getElementById("rega_6").style.top = "300px";
        } else {
            document.getElementById("rega_6").style.top = parseInt(document.getElementById("rega_6").style.top) + veloc_rain + "px";
        }
    } else {
        document.getElementById("rega_6").style.display = "none";
        pararegar();
    }
}

function chover8() {
    if (c < 3) {
        if (parseInt(document.getElementById("rega_7").style.top) >= 475) {
            c++;
            document.getElementById("rega_7").style.top = parseInt(document.getElementById("rega_7").style.top) + veloc_rain + "px";
            document.getElementById("rega_7").style.top = "338px";
        } else {
            document.getElementById("rega_7").style.top = parseInt(document.getElementById("rega_7").style.top) + veloc_rain + "px";
        }
    } else {
        document.getElementById("rega_7").style.display = "none";
        pararegar();
    }
}

function chover9() {
    if (c < 3) {
        if (parseInt(document.getElementById("rega_8").style.top) >= 515) {
            c++;
            document.getElementById("rega_8").style.top = parseInt(document.getElementById("rega_8").style.top) + veloc_rain + "px";
            document.getElementById("rega_8").style.top = "380px";
        } else {
            document.getElementById("rega_8").style.top = parseInt(document.getElementById("rega_8").style.top) + veloc_rain + "px";
        }
    } else {
        document.getElementById("rega_8").style.display = "none";
        pararegar();
    }
}

function pararegar() {
    document.getElementById("rega_0").style.display = "none";
    document.getElementById("rega_1").style.display = "none";
    document.getElementById("rega_2").style.display = "none";
    document.getElementById("rega_3").style.display = "none";
    document.getElementById("rega_4").style.display = "none";
    document.getElementById("rega_5").style.display = "none";
    document.getElementById("rega_6").style.display = "none";
    document.getElementById("rega_7").style.display = "none";
    document.getElementById("rega_8").style.display = "none";
    clearInterval(tiempo2);
    clearInterval(tiempo3);
    clearInterval(tiempo4);
    clearInterval(tiempo5);
    clearInterval(tiempo6);
    clearInterval(tiempo7);
    clearInterval(tiempo8);
    clearInterval(tiempo9);
}


function tree1() {
    document.getElementById('tree1').style.display = "none";
    document.getElementById('tree2').style.display = "block";
    document.getElementById('tree2').style.top = "225px";
    document.getElementById('tree2').style.left = "808px";
    timer2 = setTimeout(tree2, 15000);
}

function tree_1() {
    document.getElementById('tree_1').style.display = "none";
    document.getElementById('tree_2').style.display = "block";
    document.getElementById('tree_2').style.top = "265px";
    document.getElementById('tree_2').style.left = "965px";
    timer_2 = setTimeout(tree_2, 15000);
}

function tree5() {
    document.getElementById('tree5').style.display = "none";
    document.getElementById('tree6').style.display = "block";
    document.getElementById('tree6').style.top = "320px";
    document.getElementById('tree6').style.left = "1120px";
    timer6 = setTimeout(tree6, 15000);
}

function tree2() {
    document.getElementById('tree2').style.display = "none";
    document.getElementById('tree3').style.display = "block";
    document.getElementById('tree3').style.top = "162px";
    document.getElementById('tree3').style.left = "808px";
    timer3 = setTimeout(tree3, 15000);
}

function tree_2() {
    document.getElementById('tree_2').style.display = "none";
    document.getElementById('tree_3').style.display = "block";
    document.getElementById('tree_3').style.top = "220px";
    document.getElementById('tree_3').style.left = "965px";
    timer_3 = setTimeout(tree_3, 15000);
}

function tree6() {
    document.getElementById('tree6').style.display = "none";
    document.getElementById('tree7').style.display = "block";
    document.getElementById('tree7').style.top = "250px";
    document.getElementById('tree7').style.left = "1120px";
    timer7 = setTimeout(tree7, 15000);
}

function tree3() {
    document.getElementById('tree3').style.display = "none";
    document.getElementById('tree4').style.display = "block";
    document.getElementById('tree4').style.top = "145px";
    document.getElementById('tree4').style.left = "778px";
    timer4 = setTimeout(tree4, 100);
}

function tree_3() {
    document.getElementById('tree_3').style.display = "none";
    document.getElementById('tree_4').style.display = "block";
    document.getElementById('tree_4').style.top = "190px";
    document.getElementById('tree_4').style.left = "930px";
    timer_4 = setTimeout(tree4, 100);
}

function tree7() {
    document.getElementById('tree7').style.display = "none";
    document.getElementById('tree8').style.display = "block";
    document.getElementById('tree8').style.top = "235px";
    document.getElementById('tree8').style.left = "1085px";
    timer8 = setTimeout(tree4, 15000);
}

function tree9() {
    document.getElementById('tree9').style.display = "none";
    document.getElementById('tree10').style.display = "block";
    document.getElementById('tree10').style.top = "290px";
    document.getElementById('tree10').style.left = "675px";
    timer9 = setTimeout(tree10, 15000);
}

function tree10() {
    document.getElementById('tree10').style.display = "none";
    document.getElementById('tree11').style.display = "block";
    document.getElementById('tree11').style.top = "230px";
    document.getElementById('tree11').style.left = "675px";
    timer10 = setTimeout(tree11, 15000);
}

function tree11() {
    document.getElementById('tree11').style.display = "none";
    document.getElementById('tree12').style.display = "block";
    document.getElementById('tree12').style.top = "235px";
    document.getElementById('tree12').style.left = "650px";
    timer11 = setTimeout(tree4, 100);
}

function tree13() {
    document.getElementById('tree13').style.display = "none";
    document.getElementById('tree14').style.display = "block";
    document.getElementById('tree14').style.top = "350px";
    document.getElementById('tree14').style.left = "835px";
    timer12 = setTimeout(tree14, 15000);
}

function tree14() {
    document.getElementById('tree14').style.display = "none";
    document.getElementById('tree15').style.display = "block";
    document.getElementById('tree15').style.top = "270px";
    document.getElementById('tree15').style.left = "825px";
    timer13 = setTimeout(tree15, 15000);
}

function tree15() {
    document.getElementById('tree15').style.display = "none";
    document.getElementById('tree16').style.display = "block";
    document.getElementById('tree16').style.top = "280px";
    document.getElementById('tree16').style.left = "805px";
    timer14 = setTimeout(tree4, 100);
}

function tree17() {
    document.getElementById('tree17').style.display = "none";
    document.getElementById('tree18').style.display = "block";
    document.getElementById('tree18').style.top = "382px";
    document.getElementById('tree18').style.left = "985px";
    timer15 = setTimeout(tree18, 15000);
}

function tree18() {
    document.getElementById('tree18').style.display = "none";
    document.getElementById('tree19').style.display = "block";
    document.getElementById('tree19').style.top = "326px";
    document.getElementById('tree19').style.left = "990px";
    timer16 = setTimeout(tree19, 15000);
}

function tree19() {
    document.getElementById('tree19').style.display = "none";
    document.getElementById('tree20').style.display = "block";
    document.getElementById('tree20').style.top = "325px";
    document.getElementById('tree20').style.left = "960px";
    timer17 = setTimeout(tree4, 100);
}

function tree21() {
    document.getElementById('tree21').style.display = "none";
    document.getElementById('tree22').style.display = "block";
    document.getElementById('tree22').style.top = "360px";
    document.getElementById('tree22').style.left = "535px";
    timer18 = setTimeout(tree22, 15000);
}

function tree22() {
    document.getElementById('tree22').style.display = "none";
    document.getElementById('tree23').style.display = "block";
    document.getElementById('tree23').style.top = "315px";
    document.getElementById('tree23').style.left = "535px";
    timer19 = setTimeout(tree23, 15000);
}

function tree23() {
    document.getElementById('tree23').style.display = "none";
    document.getElementById('tree24').style.display = "block";
    document.getElementById('tree24').style.top = "308px";
    document.getElementById('tree24').style.left = "515px";
    timer20 = setTimeout(tree4, 100);
}

function tree25() {
    document.getElementById('tree25').style.display = "none";
    document.getElementById('tree26').style.display = "block";
    document.getElementById('tree26').style.top = "410px";
    document.getElementById('tree26').style.left = "695px";
    timer21 = setTimeout(tree26, 15000);
}

function tree26() {
    document.getElementById('tree26').style.display = "none";
    document.getElementById('tree27').style.display = "block";
    document.getElementById('tree27').style.top = "335px";
    document.getElementById('tree27').style.left = "695px";
    timer22 = setTimeout(tree27, 15000);
}

function tree27() {
    document.getElementById('tree27').style.display = "none";
    document.getElementById('tree28').style.display = "block";
    document.getElementById('tree28').style.top = "350px";
    document.getElementById('tree28').style.left = "670px";
    timer23 = setTimeout(tree4, 100);
}

function tree29() {
    document.getElementById('tree29').style.display = "none";
    document.getElementById('tree30').style.display = "block";
    document.getElementById('tree30').style.top = "445px";
    document.getElementById('tree30').style.left = "850px";
    timer24 = setTimeout(tree30, 15000);
}

function tree30() {
    document.getElementById('tree30').style.display = "none";
    document.getElementById('tree31').style.display = "block";
    document.getElementById('tree31').style.top = "385px";
    document.getElementById('tree31').style.left = "850px";
    timer25 = setTimeout(tree31, 15000);
}

function tree31() {
    document.getElementById('tree31').style.display = "none";
    document.getElementById('tree32').style.display = "block";
    document.getElementById('tree32').style.top = "390px";
    document.getElementById('tree32').style.left = "825px";
    timer25 = setTimeout(tree4, 100);
}

//ÁRVORE DO COMPRAR2
function treeA1() {
    document.getElementById('treeA1').style.display = "none";
    document.getElementById('treeA2').style.display = "block";
    timerA2 = setTimeout(treeA2, 30000);
}

function treeA2() {
    document.getElementById('treeA2').style.display = "none";
    document.getElementById('treeA3').style.display = "block";
    timerA3 = setTimeout(treeA3, 30000);
}

function treeA3() {
    document.getElementById('treeA3').style.display = "none";
    document.getElementById('treeA4').style.display = "block";
    timerA4 = setTimeout(tree4, 30000);
}


//ÁRVORE DO COMPRAR3
function treeB1() {
    document.getElementById('treeB1').style.display = "none";
    document.getElementById('treeB2').style.display = "block";
    document.getElementById('treeB2').style.top = "310px";
    document.getElementById('treeB2').style.left = "1125px";
    timerB2 = setTimeout(treeB2, 75000);
}

function treeB2() {
    document.getElementById('treeB2').style.display = "none";
    document.getElementById('treeB3').style.display = "block";
    document.getElementById('treeB3').style.top = "255px";
    document.getElementById('treeB3').style.left = "1125px";
    timerB3 = setTimeout(treeB3, 75000);
}

function treeB3() {
    document.getElementById('treeB3').style.display = "none";
    document.getElementById('treeB4').style.display = "block";
    document.getElementById('treeB4').style.top = "245px";
    document.getElementById('treeB4').style.left = "1100px";
    document.getElementById('treeB2').style.display = "none";
    document.getElementById('treeB3').style.display = "none";
    timerB4 = setTimeout(treeM, 50);
}


//ÁRVORE DO COMPRAR4
function treeC1() {
    document.getElementById('treeC1').style.display = "none";
    document.getElementById('treeC2').style.display = "block";
    timerC2 = setTimeout(treeC2, 120000);
}

function treeC2() {
    document.getElementById('treeC2').style.display = "none";
    document.getElementById('treeC3').style.display = "block";
    timerC3 = setTimeout(treeC3, 120000);
}

function treeC3() {
    document.getElementById('treeC3').style.display = "none";
    document.getElementById('treeC4').style.display = "block";
    document.getElementById('treeC2').style.display = "none";
    document.getElementById('treeC3').style.display = "none";
    timerC4 = setTimeout(treeM, 50);
}


//ÁRVORE DO COMPRAR5
function treeD1() {
    document.getElementById('treeD1').style.display = "none";
    document.getElementById('treeD2').style.display = "block";
    timerD2 = setTimeout(treeD2, 150000);
}

function treeD2() {
    document.getElementById('treeD2').style.display = "none";
    document.getElementById('treeD3').style.display = "block";
    timerD3 = setTimeout(treeD3, 150000);
}

function treeD3() {
    document.getElementById('treeD3').style.display = "none";
    document.getElementById('treeD4').style.display = "block";
    document.getElementById('treeD2').style.display = "none";
    document.getElementById('treeD3').style.display = "none";
    timerD4 = setTimeout(tree4, 100);
}


//ÁRVORE DO COMPRAR6
function treeE1() {
    document.getElementById('treeE1').style.display = "none";
    document.getElementById('treeE2').style.display = "block";
    timerE2 = setTimeout(treeE2, 180000);
}

function treeE2() {
    document.getElementById('treeE2').style.display = "none";
    document.getElementById('treeE3').style.display = "block";
    timerE3 = setTimeout(treeE3, 180000);
}

function treeE3() {
    document.getElementById('treeE3').style.display = "none";
    document.getElementById('treeE4').style.display = "block";
    document.getElementById('treeE2').style.display = "none";
    document.getElementById('treeE3').style.display = "none";
    timerE4 = setTimeout(tree4, 100);
}


//ÁRVORE DO COMPRAR7
function treeF1() {
    document.getElementById('treeF1').style.display = "none";
    document.getElementById('treeF2').style.display = "block";
    timerF2 = setTimeout(treeF2, 225000);
}

function treeF2() {
    document.getElementById('treeF2').style.display = "none";
    document.getElementById('treeF3').style.display = "block";
    timerF3 = setTimeout(treeF3, 225000);
}

function treeF3() {
    document.getElementById('treeF3').style.display = "none";
    document.getElementById('treeF4').style.display = "block";
    document.getElementById('treeF2').style.display = "none";
    document.getElementById('treeF3').style.display = "none";
    timerF4 = setTimeout(maisNota, 100000);
}


//ÁRVORE DO COMPRAR8
function treeG1() {
    document.getElementById('treeG1').style.display = "none";
    document.getElementById('treeG2').style.display = "block";
    timerG2 = setTimeout(treeG2, 300000);
}

function treeG2() {
    document.getElementById('treeG2').style.display = "none";
    document.getElementById('treeG3').style.display = "block";
    timerG3 = setTimeout(treeG3, 300000);
}

function treeG3() {
    document.getElementById('treeG3').style.display = "none";
    document.getElementById('treeG4').style.display = "block";
    document.getElementById('treeG2').style.display = "none";
    document.getElementById('treeG3').style.display = "none";
    timerG4 = setTimeout(maisNota, 100000);
}


//ÁRVORE DO COMPRAR9
function treeH1() {
    document.getElementById('treeH1').style.display = "none";
    document.getElementById('treeH2').style.display = "block";
    timerH2 = setTimeout(treeH2, 450000);
}

function treeH2() {
    document.getElementById('treeH2').style.display = "none";
    document.getElementById('treeH3').style.display = "block";
    timerH3 = setTimeout(treeH3, 450000);
}

function treeH3() {
    document.getElementById('treeH3').style.display = "none";
    document.getElementById('treeH4').style.display = "block";
    document.getElementById('treeH2').style.display = "none";
    document.getElementById('treeH3').style.display = "none";
    timerH4 = setTimeout(maisNota, 100000);
}


function tree4() {
    timerm1 = setInterval(maisDinheiro, 240000);
}

function treeM() {
    timerM = setInterval(maisDinheiro2, 240000);
}

function maisDinheiro() {
    document.getElementById('moedas_txt').innerHTML = parseInt(document.getElementById('moedas_txt').innerHTML) + 2;
}

function maisDinheiro2() {
    document.getElementById('moedas_txt').innerHTML = parseInt(document.getElementById('moedas_txt').innerHTML) + 4;
}


function maisNota() {
    document.getElementById('notas_txt').innerHTML = parseInt(document.getElementById('notas_txt').innerHTML) + 1;
}


function comprarTerreno() {
    document.getElementById('terreno1').style.display = "block";

    document.getElementById('fechar_terreno').onclick = function () {
        document.getElementById('terreno1').style.display = "none";
    };

    document.getElementById('comprarTerreno1').onclick = function () {
        if (parseInt(document.getElementById('moedas_txt').innerHTML) >= parseInt(document.getElementById('terra_dinheiro').innerHTML)) {
            document.getElementById('moedas_txt').innerHTML = parseInt(document.getElementById('moedas_txt').innerHTML) - parseInt(document.getElementById('terra_dinheiro').innerHTML);
            document.getElementById('placa1').style.display = "none";
            document.getElementById('terreno1').style.display = "none";
            compterra1 = 0;
        } else {
            document.getElementById('money').style.display = "block";
            document.getElementById('terreno1').style.display = "none";
        }
    };
}


function comprarTerreno2() {
    document.getElementById('terreno2').style.display = "block";

    document.getElementById('fechar_terreno2').onclick = function () {
        document.getElementById('terreno2').style.display = "none";
    };

    document.getElementById('comprarTerreno2').onclick = function () {
        if (parseInt(document.getElementById('moedas_txt').innerHTML) >= parseInt(document.getElementById('terra_dinheiro2').innerHTML)) {
            document.getElementById('moedas_txt').innerHTML = parseInt(document.getElementById('moedas_txt').innerHTML) - parseInt(document.getElementById('terra_dinheiro2').innerHTML);
            document.getElementById('placa2').style.display = "none";
            document.getElementById('terreno2').style.display = "none";
            compterra2 = 0;
        } else {
            document.getElementById('money').style.display = "block";
            document.getElementById('terreno2').style.display = "none";
        }
    };
}


function comprarTerreno3() {
    document.getElementById('terreno3').style.display = "block";

    document.getElementById('fechar_terreno3').onclick = function () {
        document.getElementById('terreno3').style.display = "none";
    };

    document.getElementById('comprarTerreno3').onclick = function () {
        if (parseInt(document.getElementById('moedas_txt').innerHTML) >= parseInt(document.getElementById('terra_dinheiro3').innerHTML)) {
            document.getElementById('moedas_txt').innerHTML = parseInt(document.getElementById('moedas_txt').innerHTML) - parseInt(document.getElementById('terra_dinheiro3').innerHTML);
            document.getElementById('placa3').style.display = "none";
            document.getElementById('terreno3').style.display = "none";
            compterra3 = 0;
        } else {
            document.getElementById('money').style.display = "block";
            document.getElementById('terreno3').style.display = "none";
        }
    };
}


function comprarTerreno4() {
    document.getElementById('terreno4').style.display = "block";

    document.getElementById('fechar_terreno4').onclick = function () {
        document.getElementById('terreno4').style.display = "none";
    };

    document.getElementById('comprarTerreno4').onclick = function () {
        if (parseInt(document.getElementById('moedas_txt').innerHTML) >= parseInt(document.getElementById('terra_dinheiro4').innerHTML)) {
            document.getElementById('moedas_txt').innerHTML = parseInt(document.getElementById('moedas_txt').innerHTML) - parseInt(document.getElementById('terra_dinheiro4').innerHTML);
            document.getElementById('placa4').style.display = "none";
            document.getElementById('terreno4').style.display = "none";
            compterra4 = 0;
        } else {
            document.getElementById('money').style.display = "block";
            document.getElementById('terreno4').style.display = "none";
        }
    };
}


function comprarTerreno5() {
    document.getElementById('terreno5').style.display = "block";

    document.getElementById('fechar_terreno5').onclick = function () {
        document.getElementById('terreno5').style.display = "none";
    };

    document.getElementById('comprarTerreno5').onclick = function () {
        if (parseInt(document.getElementById('moedas_txt').innerHTML) >= parseInt(document.getElementById('terra_dinheiro5').innerHTML)) {
            document.getElementById('moedas_txt').innerHTML = parseInt(document.getElementById('moedas_txt').innerHTML) - parseInt(document.getElementById('terra_dinheiro5').innerHTML);
            document.getElementById('placa5').style.display = "none";
            document.getElementById('terreno5').style.display = "none";
            compterra5 = 0;
        } else {
            document.getElementById('money').style.display = "block";
            document.getElementById('terreno5').style.display = "none";
        }
    };
}


function comprarTerreno6() {
    document.getElementById('terreno6').style.display = "block";

    document.getElementById('fechar_terreno6').onclick = function () {
        document.getElementById('terreno6').style.display = "none";
    };

    document.getElementById('comprarTerreno6').onclick = function () {
        if (parseInt(document.getElementById('moedas_txt').innerHTML) >= parseInt(document.getElementById('terra_dinheiro6').innerHTML)) {
            document.getElementById('moedas_txt').innerHTML = parseInt(document.getElementById('moedas_txt').innerHTML) - parseInt(document.getElementById('terra_dinheiro6').innerHTML);
            document.getElementById('placa6').style.display = "none";
            document.getElementById('terreno6').style.display = "none";
            compterra6 = 0;
        } else {
            document.getElementById('money').style.display = "block";
            document.getElementById('terreno6').style.display = "none";
        }
    };
}


function comprarTerreno7() {
    document.getElementById('terreno7').style.display = "block";

    document.getElementById('fechar_terreno7').onclick = function () {
        document.getElementById('terreno7').style.display = "none";
    };

    document.getElementById('comprarTerreno7').onclick = function () {
        if (parseInt(document.getElementById('moedas_txt').innerHTML) >= parseInt(document.getElementById('terra_dinheiro7').innerHTML)) {
            document.getElementById('moedas_txt').innerHTML = parseInt(document.getElementById('moedas_txt').innerHTML) - parseInt(document.getElementById('terra_dinheiro7').innerHTML);
            document.getElementById('placa7').style.display = "none";
            document.getElementById('terreno7').style.display = "none";
            compterra7 = 0;
        } else {
            document.getElementById('money').style.display = "block";
            document.getElementById('terreno7').style.display = "none";
        }
    };
}


//MERCADO POP UP
function mercadoPop() {

    document.getElementById('mercado').style.display = "block";
    document.getElementById('arvores').style.display = "block";
    document.getElementById('arvores2').style.display = "none";
    document.getElementById('arvores3').style.display = "none";
    document.getElementById('next').style.display = "block";
    document.getElementById('ant').style.display = "none";
    document.getElementById('next2').style.display = "none";
    document.getElementById('ant2').style.display = "none";

    document.getElementById('fechar').onclick = function () {
        document.getElementById('mercado').style.display = "none";
        fechar.src = "audio/fechar.mp3";
        fechar.play();
    };

    document.getElementById('next').style.marginTop = -220 + "px";

}


function next() {
    som_next.src = "audio/next.mp3";
    som_next.play();
    document.getElementById('arvores').style.display = "none";
    document.getElementById('arvores2').style.display = "block";
    document.getElementById('arvores3').style.display = "none";
    document.getElementById('next2').style.display = "block";
    document.getElementById('next').style.display = "none";
    document.getElementById('ant').style.display = "block";
    document.getElementById('ant2').style.display = "none";
    document.getElementById('next').style.marginTop = 190 + "px";
}


function post() {
    som_ant.src = "audio/anterior.mp3";
    som_ant.play();
    mercadoPop();
}


function next2() {

    som_next.src = "audio/next.mp3";
    som_next.play();

    document.getElementById('arvores').style.display = "none";
    document.getElementById('arvores2').style.display = "none";
    document.getElementById('arvores3').style.display = "block";
    document.getElementById('ant2').style.display = "block";
    document.getElementById('ant').style.display = "none";
}


function post2() {
    som_ant.src = "audio/anterior.mp3";
    som_ant.play();
    next();

}


//Biblioteca

function biblioteca() {

    document.getElementById('biblioteca').style.display = "block";
    document.getElementById('manual_pagina').style.display = "block";
    document.getElementById('book1').style.display = "block";
    document.getElementById('manual_pagina02').style.display = "none";
    document.getElementById('manual_pagina03').style.display = "none";
    document.getElementById('manual_pagina04').style.display = "none";
    document.getElementById('next3').style.display = "block";
    document.getElementById('ant3').style.display = "none";
    document.getElementById('next4').style.display = "none";
    document.getElementById('ant4').style.display = "none";
    document.getElementById('next5').style.display = "none";
    document.getElementById('ant5').style.display = "none";

    document.getElementById('fechar02').onclick = function () {
        document.getElementById('biblioteca').style.display = "none";
        fechar.src = "audio/fechar.mp3";
        fechar.play();
    };


}


//PAGINAS BIBLIOTECA

function next3() {
    som_next.src = "audio/next.mp3";
    som_next.play();
    document.getElementById('manual_pagina').style.display = "none";
    document.getElementById('manual_pagina02').style.display = "block";
    document.getElementById('manual_pagina03').style.display = "none";
    document.getElementById('manual_pagina04').style.display = "none";
    document.getElementById('next4').style.display = "block";
    document.getElementById('next3').style.display = "none";
    document.getElementById('ant3').style.display = "block";
    document.getElementById('ant4').style.display = "none";
    document.getElementById('next5').style.display = "none";
    document.getElementById('ant5').style.display = "none";
}


function post3() {
    som_ant.src = "audio/anterior.mp3";
    som_ant.play();
    biblioteca();
}


function next4() {

    som_next.src = "audio/next.mp3";
    som_next.play();

    document.getElementById('manual_pagina').style.display = "none";
    document.getElementById('manual_pagina02').style.display = "none";
    document.getElementById('manual_pagina03').style.display = "block";
    document.getElementById('manual_pagina04').style.display = "none";
    document.getElementById('next4').style.display = "none";
    document.getElementById('next3').style.display = "none";
    document.getElementById('ant3').style.display = "none";
    document.getElementById('ant4').style.display = "block";
    document.getElementById('ant5').style.display = "none";
    document.getElementById('next5').style.display = "block";

}


function post4() {
    som_ant.src = "audio/anterior.mp3";
    som_ant.play();
    next3();
}


function next5() {
    som_next.src = "audio/next.mp3";
    som_next.play();

    document.getElementById('manual_pagina').style.display = "none";
    document.getElementById('manual_pagina02').style.display = "none";
    document.getElementById('manual_pagina03').style.display = "none";
    document.getElementById('manual_pagina04').style.display = "block";
    document.getElementById('next4').style.display = "none";
    document.getElementById('next3').style.display = "none";
    document.getElementById('ant3').style.display = "none";
    document.getElementById('ant4').style.display = "none";
    document.getElementById('ant5').style.display = "block";
    document.getElementById('next5').style.display = "none";
}


function post5() {
    som_ant.src = "audio/anterior.mp3";
    som_ant.play();
    next4();
}


//PAGINAS MERCADO
function next() {
    som_next.src = "audio/next.mp3";
    som_next.play();
    document.getElementById('arvores').style.display = "none";
    document.getElementById('arvores2').style.display = "block";
    document.getElementById('arvores3').style.display = "none";
    document.getElementById('next2').style.display = "block";
    document.getElementById('next').style.display = "none";
    document.getElementById('ant').style.display = "block";
    document.getElementById('ant2').style.display = "none";
    document.getElementById('next').style.marginTop = 190 + "px";
}


function post() {
    som_ant.src = "audio/anterior.mp3";
    som_ant.play();
    mercadoPop();
}


function next2() {
    som_next.src = "audio/next.mp3";
    som_next.play();

    document.getElementById('arvores').style.display = "none";
    document.getElementById('arvores2').style.display = "none";
    document.getElementById('arvores3').style.display = "block";
    document.getElementById('ant2').style.display = "block";
    document.getElementById('ant').style.display = "none";
}


function post2() {
    som_ant.src = "audio/anterior.mp3";
    som_ant.play();
    next();
}


// SPRITE
function processaTecla(evt) {
    switch (evt.key) {
        case 'w':
            dirSprite();
            if (parseInt(boneco.style.top) - velocidade > 80) {
                boneco.style.top = parseInt(boneco.style.top) - velocidade + "px";
            }
            break;
        case 's':
            esqSprite();
            if (parseInt(boneco.style.top) + velocidade < he - 140) {
                boneco.style.top = parseInt(boneco.style.top) + velocidade + "px";
            }
            break;
        case 'a':
            esqSprite();
            if (parseInt(boneco.style.left) - velocidade > 0) {
                boneco.style.left = parseInt(boneco.style.left) - velocidade + "px";
            }
            break;
        case 'd':
            dirSprite();
            if (parseInt(boneco.style.left) + velocidade < wi - 50) {
                boneco.style.left = parseInt(boneco.style.left) + velocidade + "px";
            }
            break;
        case 'm':
            if (audio.muted == true) {
                audio.muted = false;
                document.getElementById('icon_som').style.backgroundImage = "url(imagens/som.svg)";
            } else {
                document.getElementById('icon_som').style.backgroundImage = "url(imagens/sem_som.svg)";
                audio.muted = true;
            }
            break;
    }


    //COLISÃO


    var obj1X = parseInt(document.getElementById("box1").style.left);
    var obj1Y = parseInt(document.getElementById("box1").style.top);

    var obj3X = parseInt(document.getElementById("box2").style.left);
    var obj3Y = parseInt(document.getElementById("box2").style.top);

    var obj4X = parseInt(document.getElementById("box3").style.left);
    var obj4Y = parseInt(document.getElementById("box3").style.top);

    var obj5X = parseInt(document.getElementById("box4").style.left);
    var obj5Y = parseInt(document.getElementById("box4").style.top);

    var obj6X = parseInt(document.getElementById("box5").style.left);
    var obj6Y = parseInt(document.getElementById("box5").style.top);

    var obj7X = parseInt(document.getElementById("box6").style.left);
    var obj7Y = parseInt(document.getElementById("box6").style.top);

    var obj8X = parseInt(document.getElementById("box7").style.left);
    var obj8Y = parseInt(document.getElementById("box7").style.top);

    var obj9X = parseInt(document.getElementById("box8").style.left);
    var obj9Y = parseInt(document.getElementById("box8").style.top);

    var obj10X = parseInt(document.getElementById("box9").style.left);
    var obj10Y = parseInt(document.getElementById("box9").style.top);

    var obj11X = parseInt(document.getElementById("box10").style.left);
    var obj11Y = parseInt(document.getElementById("box10").style.top);


    var obj2X = parseInt(document.getElementById("jogador").style.left);
    var obj2Y = parseInt(document.getElementById("jogador").style.top);

    //colisão no eixo dos XX
    if (obj1X < obj2X + obj2Largura && obj1X + obj1Largura > obj2X) {
        //colisão no eixo dos YY
        if (obj1Y < obj2Y + obj2Altura && obj1Y + obj1Altura > obj2Y) {
            if (complanta1 != 1) {
                mercadoPop();
                terreno = 1;
            }
        }
        else {
            document.getElementById('mercado').style.display = "none";
        }
    }
    else {
        document.getElementById('mercado').style.display = "none";


        if (obj3X < obj2X + obj2Largura && obj3X + obj3Largura > obj2X) {
            //colisão no eixo dos YY
            if (obj3Y < obj2Y + obj2Altura && obj3Y + obj3Altura > obj2Y) {
                if (complanta2 != 1) {
                    mercadoPop();
                    terreno = 2;
                }
            }
            else {
                document.getElementById('mercado').style.display = "none";
            }
        } else {
            document.getElementById('mercado').style.display = "none";


            if (obj4X < obj2X + obj2Largura && obj4X + obj4Largura > obj2X) {
                //colisão no eixo dos YY
                if (obj4Y < obj2Y + obj2Altura && obj4Y + obj4Altura > obj2Y) {
                    if (compterra1 == 0) {
                        if (complanta3 != 1) {
                            mercadoPop();
                            terreno = 3;
                        }
                    }
                }
                else {
                    document.getElementById('mercado').style.display = "none";
                }

            } else {
                document.getElementById('mercado').style.display = "none";
                if (obj5X < obj2X + obj2Largura && obj5X + obj5Largura > obj2X) {
                    //colisão no eixo dos YY
                    if (obj5Y < obj2Y + obj2Altura && obj5Y + obj5Altura > obj2Y) {
                        if (compterra2 == 0) {
                            if (complanta4 != 1) {
                                mercadoPop();
                                terreno = 4;
                            }
                        }
                    }
                    else {
                        document.getElementById("jogador").style.opacity = "1";
                    }
                } else {
                    document.getElementById("jogador").style.opacity = "1";
                    if (obj6X < obj2X + obj2Largura && obj6X + obj6Largura > obj2X) {
                        //colisão no eixo dos YY
                        if (obj6Y < obj2Y + obj2Altura && obj6Y + obj6Altura > obj2Y) {
                            if (compterra3 == 0) {
                                if (complanta5 != 1) {
                                    mercadoPop();
                                    terreno = 5;
                                }
                            }
                        }
                        else {
                            document.getElementById("jogador").style.opacity = "1";
                        }
                    } else {
                        document.getElementById("jogador").style.opacity = "1";
                        if (obj7X < obj2X + obj2Largura && obj7X + obj7Largura > obj2X) {
                            //colisão no eixo dos YY
                            if (obj7Y < obj2Y + obj2Altura && obj7Y + obj7Altura > obj2Y) {
                                if (compterra4 == 0) {
                                    if (complanta6 != 1) {
                                        mercadoPop();
                                        terreno = 6;
                                    }
                                }
                            }
                            else {
                                document.getElementById("jogador").style.opacity = "1";
                            }
                        } else {
                            document.getElementById("jogador").style.opacity = "1";
                            if (obj8X < obj2X + obj2Largura && obj8X + obj8Largura > obj2X) {
                                //colisão no eixo dos YY
                                if (obj8Y < obj2Y + obj2Altura && obj8Y + obj8Altura > obj2Y) {
                                    if (compterra5 == 0) {
                                        if (complanta7 != 1) {
                                            mercadoPop();
                                            terreno = 7;
                                        }
                                    }
                                }
                                else {
                                    document.getElementById("jogador").style.opacity = "1";
                                }
                            } else {
                                document.getElementById("jogador").style.opacity = "1";
                                if (obj9X < obj2X + obj2Largura && obj9X + obj9Largura > obj2X) {
                                    //colisão no eixo dos YY
                                    if (obj9Y < obj2Y + obj2Altura && obj9Y + obj9Altura > obj2Y) {
                                        if (compterra6 == 0) {
                                            if (complanta8 != 1) {
                                                mercadoPop();
                                                terreno = 8;
                                            }
                                        }
                                    }
                                    else {
                                        document.getElementById("jogador").style.opacity = "1";
                                    }
                                } else {
                                    document.getElementById("jogador").style.opacity = "1";
                                    if (obj10X < obj2X + obj2Largura && obj10X + obj10Largura > obj2X) {
                                        //colisão no eixo dos YY
                                        if (obj10Y < obj2Y + obj2Altura && obj10Y + obj10Altura > obj2Y) {
                                            if (compterra7 == 0) {
                                                if (complanta9 != 1) {
                                                    mercadoPop();
                                                    terreno = 9;
                                                }
                                            }
                                        }
                                    } else {
                                        document.getElementById("jogador").style.opacity = "1";
                                        if (obj11X < obj2X + obj2Largura && obj11X + obj11Largura > obj2X) {
                                            //colisão no eixo dos YY
                                            if (obj11Y < obj2Y + obj2Altura && obj11Y + obj11Altura > obj2Y) {
                                                biblioteca();
                                                document.getElementById('biblioteca').style.display = "block";
                                            }
                                            else {
                                                document.getElementById('biblioteca').style.display = "none";

                                            }
                                        } else {
                                            document.getElementById('biblioteca').style.display = "none";

                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }

}


function dirSprite() {
    if (spriteNumero == 6) {
        spriteNumero = 1;
    }
    boneco.src = "imagens/spritefdir" + spriteNumero + ".png";
    spriteNumero++;
}

function esqSprite() {
    if (spriteNumero == 6) {
        spriteNumero = 1;
    }
    boneco.src = "imagens/spritefesq" + spriteNumero + ".png";
    spriteNumero++;
}

function mexerCloud() {
    fumo = parseInt(document.getElementById("cloud").style.left);
    document.getElementById("cloud").style.left = fumo + 9 + "px";

    if (fumo >= window.innerWidth) {
        document.getElementById("cloud").style.top = parseInt(Math.random()*(100 + 1))+ "px";
        document.getElementById("cloud").style.left=0;
    }

    fumo2 = parseInt(document.getElementById("cloud2").style.left);
    document.getElementById("cloud2").style.left = fumo2 + 10 + "px";

    if (fumo2 >= window.innerWidth) {
        document.getElementById("cloud2").style.top = parseInt(Math.random()*(100 + 1))+ "px";
        document.getElementById("cloud2").style.left=0;
    }

}

//SOM
function som() {
    audio = new Audio();
    audio.src = "audio/musica_jogo01.mp3";
    audio.play();
    audio.muted = false;
    audio.loop = true;

    document.getElementById('icon_som').onclick = function () {

        if (audio.muted == true) {
            audio.muted = false;
            document.getElementById('icon_som').style.backgroundImage = "url(imagens/som.svg)";
        } else {
            document.getElementById('icon_som').style.backgroundImage = "url(imagens/sem_som.svg)";
            audio.muted = true;
        }

    };
}




