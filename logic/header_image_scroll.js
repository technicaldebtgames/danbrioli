/*if (!window.has_run_root_modification) {

    window.has_run_root_modification = true;
    var root = document.querySelector("html");
    root.setAttribute("style", "font-size: 62.5%; background-color: #784421; background-position: center 0; background-size: 100% auto; background-attachment: scroll; background-repeat: no-repeat;");

}*/

/*document.getElementById("body").onscroll = function parallax() {

    var scrollTop = document.scrollingElement.scrollTop;
    var target = document.getElementById("banner-image");
    var value = scrollTop * 0.7;
    var newPosition = "center " + value + "px";
    target.style.backgroundPosition = newPosition;

}*/

document.getElementById("body").onscroll = function parallax() {

    var scrollTop = document.scrollingElement.scrollTop;
    var target = document.getElementById("banner-image");
    var value = scrollTop * 0.65;
    var newTop = value + "px";
    target.style.top = newTop;

}