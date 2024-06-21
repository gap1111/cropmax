$(document).ready(function() {
    window.onscroll = function() { myFunction() };

    var header = document.getElementById("myHeader");
    var sticky = header.offsetTop;

    function myFunction() {
        if (window.pageYOffset > sticky) {
            header.classList.add("sticky");
        } else {
            header.classList.remove("sticky");
        }
    }


    $('.slider-2').owlCarousel({
        items: 1,
        nav: true,
        loop: true,
        dots: false,
        margin: 15
    })
});