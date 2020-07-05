

var myImages1 = new Array();
myImages1.push("imagens/1x.png");
myImages1.push("imagens/2x.png");
myImages1.push("imagens/3x.png");
myImages1.push("imagens/4x.png");
myImages1.push("imagens/5x.png");
myImages1.push("imagens/6x.png");


function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

var myImages12 = new Array();
myImages12.push("imagens/co5.png");
myImages12.push("imagens/co1.png");
myImages12.push("imagens/co2.png");
myImages12.push("imagens/co4.png");
myImages12.push("imagens/coreo2.png");


function pickimg1() {
  document.randimg.src = myImages1[getRandomInt(0, myImages1.length - 1)];

  document.randimg12.src = myImages12[getRandomInt(0, myImages12.length - 1)];
}



var myImages2 = new Array();
myImages2.push("imagens/21x.png");
myImages2.push("imagens/22x.png");
myImages2.push("imagens/23x.png");
myImages2.push("imagens/24x.png");

var myImages22 = new Array();
myImages22.push("imagens/coreo7.png");
myImages22.push("imagens/co3.png");
myImages22.push("imagens/co6.png");
myImages22.push("imagens/co7.png");

function sgetRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function pickimg2() {
  document.randimg2.src = myImages2[getRandomInt(0, myImages2.length - 1)];

  document.randimg22.src = myImages22[getRandomInt(0, myImages22.length - 1)];
}




var myImages3 = new Array();
myImages3.push("imagens/31x.png");
myImages3.push("imagens/32x.png");
myImages3.push("imagens/33x.png");
myImages3.push("imagens/34x.png");

var myImages32 = new Array();
myImages32.push("imagens/coreo9.png");
myImages32.push("imagens/co8.png");
myImages32.push("imagens/co9.png");
myImages32.push("imagens/co10.png");


function sgetRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function pickimg3() {
  document.randimg3.src = myImages3[getRandomInt(0, myImages3.length - 1)];

  document.randimg32.src = myImages32[getRandomInt(0, myImages32.length - 1)];
}




/* exemplo antigo */

/* $(document).ready(function () {
    $('#cruz3x1167').click(function () {
        $('#cruz3x1167').css("transform", "translate(80px,200px)");
    });
}); */