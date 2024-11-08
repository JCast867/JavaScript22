$(document).ready(function () {
    let fontSize = 16;
    $("#get").click(function (e) {
        e.preventDefault();

        var fName = $("#fName").val();
        var lName = $("#lName").val();
        var email = $("#email").val();

        $("#list").append(`<p>${fName} ${lName} entered their email as ${email}.</p>`);
    });

    $("#darkmode").click(function() {
        $("body").toggleClass("dark-mode");
        $(".container").toggleClass("dark-container");
    });

    $("#increaseFont").click(function () {
        fontSize += 2;
        $(".container *").css("font-size", fontSize + "px");
    });

    $("#decreaseFont").click(function () {
        fontSize = Math.max(12, fontSize - 2);
        $(".container *").css("font-size", fontSize + "px");
    });

});