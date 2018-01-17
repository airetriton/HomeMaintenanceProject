$(document).ready(function(){

    var click = document.createElement("audio");
click.setAttribute("src", "../public/sounds/click.wav");

$(".click").on("click", function(){

    click.play();
});


    $('[data-toggle="popover"]').popover();   
});