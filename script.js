$(".scissors-round").hide();
$(".scissors-prize").hide();
$(".rock-round").hide();
$(".paper-round").hide();
$(".treasure-chest").hide();

$(".scissors").click(function() {
    $(".round-one").hide();
    $(".scissors-round").fadeIn();
    $(".treasure-chest").fadeIn();
});

$(".treasure-chest").dblclick(function() {
    $(".scissors-round").hide();
    $(".treasure-chest").hide();
    $(".scissors-prize").fadeIn();
});


$(".rock").click(function() {
    $(".round-one").hide();
    $(".rock-round").fadeIn();
});

$(".paper").click(function() {
    $(".round-one").hide();
    $(".paper-round").fadeIn();
});

$(".reset").click(function() {
    $(".round-one").slideDown();
    $(".paper-round").hide();
    $(".rock-round").hide();
    $(".scissors-prize").hide();
});