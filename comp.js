/* document.getElementById('button1').addEventListener('click', function() {
  document.querySelector('.notas12').style.display = 'flex';
  document.querySelector('.notas1').style.display = 'none';
}); */

function playa() {
  var audio = document.getElementById("notasa");
  audio.play();
}

function playb() {
  var audio = document.getElementById("notasb");
  audio.play();
}
function playc() {
  var audio = document.getElementById("notasc");
  audio.play();
}
function playd() {
  var audio = document.getElementById("notasd");
  audio.play();
}
function playe() {
  var audio = document.getElementById("notase");
  audio.play();
}
function playf() {
  var audio = document.getElementById("notasf");
  audio.play();
}
function playg() {
  var audio = document.getElementById("notasg");
  audio.play();
}


/* */


$(document).ready(function(){
  $("#notacoes3").hover(function(){
      baixosom.play();
      },
  function(){
    baixosom.load();
  });
});

$(document).ready(function(){
  $("#riscos1").hover(function(){
      baixosom.play();
      },
  function(){
    baixosom.load();
  });
});



var comp5cho = document.getElementsByClassName('comp5cho')[0]
var chopin = document.getElementById('chopin')
comp5cho.addEventListener('mouseover', function() { chopin.play() }, false);
comp5cho.addEventListener('mouseout', function() { chopin.pause() }, false);



var comp7 = document.getElementsByClassName('comp7')[0]
var debussy = document.getElementById('debussy')
comp7.addEventListener('mouseover', function() { debussy.play() }, false);
comp7.addEventListener('mouseout', function() { debussy.pause() }, false);
