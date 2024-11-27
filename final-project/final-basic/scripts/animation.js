$(document).ready(function () {
  $("#animateButton").on("click", function () {
    // calculate the center position
    var windowWidth = $(window).width();
    var divWidth = $("#animatedDiv").outerWidth();
    var centerPosition = windowWidth / 2 - divWidth / 2;

    // animate the div to the center of the viewport
    $("#animatedDiv").animate(
      {
        left: centerPosition + "px",
      },
      "slow"
    );
  });
});
