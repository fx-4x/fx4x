/* var linha1var = document.getElementsByClassName('linha1')[0],
    $boxTwo = $('.linha1:eq(1)');

document.getElementsByClassName('toggleButton')[0].onclick = function() {
  if(this.innerHTML === 'Play') 
  { 
    this.innerHTML = 'Pause';
    boxOne.classList.add('st0');
  } else {
    this.innerHTML = 'Play';
    var computedStyle = window.getComputedStyle(linha1var),
/*         marginLeft = computedStyle.getPropertyValue('margin-left');
 */    /* boxOne.style.marginLeft = marginLeft; */
/*     boxOne.classList.remove('st0');    
  }  
}  */
/* 
document.getElementById('btn').addEventListener('click', function () {
    document.querySelector('.st0').classList.add('draw');
  }); */
/* 
  $(function linha() {
    $('#x1').click(function() {
      $('#st0').addClass('.st0');
    });
  });

  $( "#x1" ).click(function() {
    $( "#st0" ).play('.st0');
  }); */


  function ani(){
    document.getElementById('Layer_1').classList.add('st02');
  }

  function ani2(){
    document.getElementById('Linha2').classList.add('st32');
  }

  function ani3(){
    document.getElementById('linha3').classList.add('st52');
  }

  function ani4(){
    document.getElementById('linha4').classList.add('st72');
  }



  function play1() {
    var audio = document.getElementById("somescri1");
    audio.play();
  }

  function play2() {
    var audio = document.getElementById("somescri2");
    audio.play();
  }

  function play3() {
    var audio = document.getElementById("somescri3");
    audio.play();
  }

  function play4() {
    var audio = document.getElementById("somescri4");
    audio.play();
  }