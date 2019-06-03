$(function () {
    // Owl Carousel
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 0,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            300: {
                items: 1,
                nav: false,
                loop: true,
                dots: false,
                autoplay: true,
                autoplayTimeout: 3000,
                autoplayHoverPause: true,
                autoplaySpeed: 2000
            },
            1000: {
                items: 3,
                nav: true,
                loop: true,
                mouseDrag: true,
                dots: false,
                autoplay: true,
                autoplayTimeout: 5000,
                autoplayHoverPause: true,
                autoplaySpeed: 2000
            }
        }
    });
    // Bootstrap Carousel
    $('#carouselHighlight').carousel({
        interval: 2000
    })

    window.onscroll = function () { navfixedScroll() };
    // Get the navbar
    var navbar = document.getElementById("nav");
    // Get the offset position of the navbar
    var sticky = navbar.offsetTop;
    // Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
    function navfixedScroll() {
        if (window.pageYOffset > sticky+200) {
            navbar.classList.add("sticky")
        } else {
            navbar.classList.remove("sticky");
        }
    }
})