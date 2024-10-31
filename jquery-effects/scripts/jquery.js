
// show and hide name
$(document).ready(function() {
    $("#name").click(function() {
        $("#fullName").toggle();
    });
});


// fade
$(document).ready(function() {
    $("#fade").click(function() {
        $("#info").fadeToggle("slow");
    });
});

// slide
$(document).ready(function() {
    $("#slide").click(function() {
        $("#panel").slideToggle("slow");
    });
});
