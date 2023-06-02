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
    const hr = document.querySelector('#page_bottom');
    const bodyHeight = document.body.offsetHeight;
    let remainingHeight = `calc(100vh - ${bodyHeight}px)`;
    
    if (contentHeight + bodyHeight >= window.innerHeight) {
        // If the content and body height exceed the viewport height,
        // set the margin bottom to 0
        hr.style.marginBottom = '0';
    } else {
        // Otherwise, set the margin bottom to the remaining height
        hr.style.marginBottom = remainingHeight;
    }
});