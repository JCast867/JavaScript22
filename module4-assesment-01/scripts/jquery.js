
$(document).ready(function() {
    $("#name").click(function() {
        var name = $("#fullName");
        name.animate({width: '300px', opacity: '0.5'}, "slow");
        name.animate({width: '700px', opacity: '1'}, "slow");
        name.animate({width: '1100px', opacity: '0.5'}, "slow");
        name.animate({width: '700px', opacity: '1'}, "slow");
        name.animate({height: '200px'});
        name.animate({height: '25px'});
    });
});

$(document).ready(function() {
    $("#stop").click(function() {
        $("#fullName").stop();
        $("#fullName").stop();
        $("#fullName").stop();
        $("#fullName").stop();
        $("#fullName").stop();
        $("#fullName").stop();
    });
});

$(document).ready(function() {
    $("#hide").click(function() {
        $("#panel").hide("slow", function() {
            alert("The paragraph classes are now hidden!");
        });
    });
});

$(document).ready(function() {
    $("#chain").click(function() {
        $("#info").slideUp().slideDown().css("color", "green").hide();
    })
})