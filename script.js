$("#button1").hide();
$("#button2").hide();
$(".background").hide();
$(".Placa").hide();
$("#button").click(function() {
    $("body").css("background-color","black");
});
$(".Rubius").click(function() {
    $("#button1").show();
});
$("#button1").click(function() {
    $("body").css("background-color","white");
});
$(".Rubius").click(function() {
    $(".Rubius").toggle();
    $("#SecondText").text("Change the background!");
});
$("#button1").click(function() {
    $("#SecondText").show();
    $("#SecondText").text("Click on the image!");
    $(".Rubius-text").text("The treasure is you :v");
     $("#button1").text("Just kidding, double click this!");
});
$("#button1").click(function() {
    $("#button2").show();
    $(".Rubius-text").text("Click the red one :v");
    $("#button1").text("Red");
    $("#button2").text("Yellow");
});
$("#button2").click(function() {
    $(".Placa").show();
    $(".Rubius-text").text("There is your treasure!");
    $("#button2").hide();
    $("#button1").text("Subscribe");
});
$("#button2").click(function() {
    $("#button2").hide(); 
});
$(".Placa").dblclick(function() {
    $("body").hide();
});