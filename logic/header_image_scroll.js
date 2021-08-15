document.getElementById("body").onscroll = function parallax() {

    var scrollTop = document.scrollingElement.scrollTop;
    var target = document.getElementById("header");
    var value = scrollTop * 0.3;
    var newPosition = "center " + value + "px";
    target.style.backgroundPosition = newPosition;

}