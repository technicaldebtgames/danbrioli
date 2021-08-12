document.getElementById("body").onscroll = function parallax() {

    var scrollTop = document.scrollingElement.scrollTop;
    var target = document.getElementById("header");
    target.style.backgroundPosition = "center " + (scrollTop * 0.3) + "px";

}