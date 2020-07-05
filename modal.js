document.getElementById('button').addEventListener('click', function() {
  document.querySelector('.bg-modal').style.display = 'flex';
});


document.querySelector('.close').addEventListener('click',function(){
  document.querySelector('.bg-modal').style.display = 'none';
});



document.getElementById('buttoninfo').addEventListener('click', function() {
  document.querySelector('.bg-modal-info').style.display = 'flex';
});

document.querySelector('.closeinfo').addEventListener('click',function(){
  document.querySelector('.bg-modal-info').style.display = 'none';
});












/* var modal = document.getElementById("modal1");

var btn = document.getElementById("filmeimg");

var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
 *//* 
// Get the modal
var modal = document.getElementsByClassName("modal");

// Get the button that opens the modal
var btn = document.getElementById("filmeimg");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
} */

