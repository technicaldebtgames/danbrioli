if (!window.has_run_root_modification) {

    window.has_run_root_modification = true;
    var root = document.querySelector(":root");
    root.setAttribute("style", "font-size: 62.5%; background-color: #784421; background-position: center 0; background-size: 100% auto; background-repeat: no-repeat;");

}

document.getElementById("body").onscroll = function parallax() {

    var scrollTop = document.scrollingElement.scrollTop;
    var target = document.querySelector(":root");
    var value = scrollTop * 0.7;
    var newPosition = "center " + value + "px";
    target.style.backgroundPosition = newPosition;

}