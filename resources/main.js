document.addEventListener('scroll', function() {
    let header = document.getElementById("header");
    let scrollPos = window.pageYOffset;
    if (scrollPos > 5) {
        header.style.backgroundColor = "rgba(37, 37, 46, 0.9)";
    } else {
        header.style.background = "none";
    }
});

window.addEventListener('load', function() {
    const content = document.getElementById('content');
    
    if (content.offsetHeight > window.innerHeight) {
      content.style.position = 'absolute';
    }
});