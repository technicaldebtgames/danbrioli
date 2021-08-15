document.getElementById("body").onscroll = function parallax() {

    var scrollTop = document.scrollingElement.scrollTop;
    var target = document.getElementById("banner-image-container");
    var value = scrollTop * 0.65;
    var newTop = value + "px";
    target.style.top = newTop;

}