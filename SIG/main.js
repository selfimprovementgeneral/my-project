
// Quick way to make sure jquery only starts when page is fully ready
$(function() {
    menu = $('nav .dropdown');

$('.open-menu').height($(window).height());});

// Smooth Scrolling
$('.cf').on('click', function(event) {

    console.log(event.target.hash)

    if (this.hash !== '') {

        event.preventDefault();

        const hash = this.hash;

        $('html, body').animate(
            {
                scrollTop: $(hash).offset().top
            },
            800,
            function() {
                window.location.hash = hash;
            }
        );
    }
});