document.getElementById("body").onscroll = function parallax() {

    var scrollTop = document.scrollingElement.scrollTop;
    var target = document.querySelector(":root");
    var value = scrollTop * 0.7;
    var newPosition = "center " + value + "px";
    target.style.backgroundPosition = newPosition;

}