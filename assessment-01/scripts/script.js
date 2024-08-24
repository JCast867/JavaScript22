function scriptFunction() {
    document.getElementById("start").innerHTML="Changed by the external script";
}

function changeWidth() {
    var image = document.getElementById("wrestler");
    image.style.width = "500px";
}

function changeTextColor() {
    var par = document.getElementById("start");
    par.style.color = "blue";
}