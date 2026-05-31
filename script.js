var block = document.getElementById("block");
var hole = document.getElementById("block");

hole.addEventListener("animationiteration", () => (
    var random = -((Math.random()*300)+150;
    hole.style.top = random + "px";
));
setInterval(function() {
    var characterTop = window.getComputedStyle(character)
},10);

