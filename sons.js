//var audio = $("#coreosom")[0];
//$("#coreo2").mouseenter(function () {
//    audio.play();
//});

$(document).ready(function(){
    $("#coreo2").hover(function(){
        coreosom.play();
        },
    function(){
        coreosom.load();
    });
});

/* $(document).ready(function(){
    $("#coreo5img").hover(function(){
        coreosom.play();
        },
    function(){
        coreosom.load();
    });
}); */

$(document).ready(function(){
    $("#graphs").hover(function(){
        coreosom.play();
        },
    function(){
        coreosom.load();
    });
});



/* PINTOR */

function brush() {
    var audio = document.getElementById("brush");
    audio.play();
  }

  function cam() {
    var audio = document.getElementById("cam");
    audio.play();
  }