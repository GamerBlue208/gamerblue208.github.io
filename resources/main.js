document.addEventListener('scroll', function() {
    let header = document.getElementById("header");
    let scrollPos = window.pageYOffset;
    if (scrollPos > 5) {
        header.style.backgroundColor = "rgba(37, 37, 46, 0.9)";
    } else {
        header.style.background = "none";
    }
});

window.addEventListener('scroll', function() {
    var container = document.querySelector('.container');
    var containerHeight = container.offsetHeight;
    var windowHeight = window.innerHeight;
    var scrollPosition = window.scrollY || window.pageYOffset;
  
    if (scrollPosition >= containerHeight - windowHeight) {
      container.classList.add('animate');
    }
  });