document.addEventListener('scroll', function() {
    let header = document.getElementById("header");
    let scrollPos = window.pageYOffset;
    if (scrollPos > 5) {
        header.style.backgroundColor = "rgba(37, 37, 46, 0.9)";
    } else {
        header.style.background = "none";
    }
});

window.addEventListener('load', 'resize', function() {
    const content = document.querySelector('#content');
    const contentHeight = content.offsetHeight;
  
    const hr = document.querySelector('#page_bottom');
    const remainingHeight = 100 - contentHeight;
    hr.style.marginBottom = `${remainingHeight}vh`;
});