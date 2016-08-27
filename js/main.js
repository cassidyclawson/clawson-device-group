$(document).ready(function() {
    $("#splash_on").hide();
    $("#splash_off h1").click(show_splash);
    $("#splash_off").delay(2000).queue(show_splash);
});

function show_splash(event) {
    $("#splash_off").hide();
    $("#splash_on").fadeIn(600);
}
