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
    const content = document.querySelector('#content');
    const contentHeight = content.offsetHeight;
  
    const hr = document.querySelector('#page_bottom');
    let remainingHeight = Math.floor(100 - contentHeight);
    
    if (remainingHeight < 0) {
        // If remaining height is negative, set it to 0
        remainingHeight = 0;
    }
  
    hr.style.marginBottom = `${remainingHeight}vh`;
});

window.addEventListener('resize', function() {
    const content = document.querySelector('#content');
    const contentHeight = content.offsetHeight;
  
    const hr = document.querySelector('#page_bottom');
    let remainingHeight = Math.floor(100 - contentHeight);
    
    if (remainingHeight < 0) {
        // If remaining height is negative, set it to 0
        remainingHeight = 0;
    }
  
    hr.style.marginBottom = `${remainingHeight}vh`;
});