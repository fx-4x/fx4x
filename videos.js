/* var $rauchen = $('.rauchen');

$rauchen.on('mouseenter focus', function() {
    $rauchen.get(0).play;
});

$rauchen.on('mouseout blur', function() {
    $rauchen.get(0).pause;
}); */


var coreo4img = document.getElementsByClassName('coreo4img')[0]
var rauchen = document.getElementById('rauchen')
coreo4img.addEventListener('mouseover', function() { rauchen.play() }, false);
coreo4img.addEventListener('mouseout', function() { rauchen.pause() }, false);


var tracos3 = document.getElementsByClassName('tracos3')[0]
var bretsch = document.getElementById('bretsch')
tracos3.addEventListener('mouseover', function() { bretsch.play() }, false);
tracos3.addEventListener('mouseout', function() { bretsch.pause() }, false);


