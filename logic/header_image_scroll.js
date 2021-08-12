document.getElementById("body").onscroll = function parallax() {

    var scrollTop = document.scrollingElement.scrollTop;
    console.log(scrollTop);
    var target = document.getElementById("header");
    var x = "center";
    var y = scrollTop * 0.4;
    target.style.backgroundPosition = x + " " + y + "px";

}