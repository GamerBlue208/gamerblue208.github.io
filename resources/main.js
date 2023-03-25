let header = document.getElementById("header");

document.addEventListener('scroll', function() {
    let scrollPos = window.pageYOffset;
    if (scrollPos > 5) {
        header.style.backgroundColor = "rgba(37, 37, 46, 0.9)";
    } else {
        header.style.background = "none";
    }
});
