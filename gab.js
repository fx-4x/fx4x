/* compositor */

document.getElementById('buttonCOMP').addEventListener('click', function() {
  document.querySelector('.bg-modalCOMP').style.display = 'flex';
});


document.querySelector('.close').addEventListener('click',function(){
  document.querySelector('.bg-modalCOMP').style.display = 'none';
});


/* escritora */

document.getElementById('buttonESC').addEventListener('click', function() {
  document.querySelector('.bg-modalESCR').style.display = 'flex';
});


document.querySelector('.closeE').addEventListener('click',function(){
  document.querySelector('.bg-modalESCR').style.display = 'none';
});



/* pintor */

document.getElementById('buttonPIN').addEventListener('click', function() {
  document.querySelector('.bg-modalPIN').style.display = 'flex';
});


document.querySelector('.closeP').addEventListener('click',function(){
  document.querySelector('.bg-modalPIN').style.display = 'none';
});



/* COREOGRAFA */

document.getElementById('buttonCOREO').addEventListener('click', function() {
  document.querySelector('.bg-modalCOREO').style.display = 'flex';
});


document.querySelector('.closeC').addEventListener('click',function(){
  document.querySelector('.bg-modalCOREO').style.display = 'none';
});