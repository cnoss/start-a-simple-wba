/* Eyecandy Showcase

Färbt die Showcase Items hübsch ein
############################################################################ */


var eyecandyShowcase = {};
eyecandyShowcase.basecolor = [147, 19, 206];
eyecandyShowcase.lastAdd = 0;
eyecandyShowcase.getColor = function() {

    var a = Math.random() + 0.5;
    while (Math.abs(eyecandyShowcase.lastAdd - a) < 0.1) { a = Math.random() + 0.4; }
    eyecandyShowcase.lastAdd = a;
    var color = eyecandyShowcase.basecolor;
    return color.join(",") + "," + a;
}

document.addEventListener("DOMContentLoaded", function(event) {

    // Alle Elemente mit der Klasse showcase__item sammeln …
    var showcase__items = document.querySelectorAll('.showcase__item'),
        i;

    // Über die Elemente interieren …
    for (i = 0; i < showcase__items.length; i++) {
        var rgba = eyecandyShowcase.getColor();
        showcase__items[i].style.backgroundColor = "rgba(" + rgba + ")";
    }


});