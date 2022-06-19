$(document).ready(function () {
    $('.navbar-phone').on('click', function (e) {
        e.preventDefault();
        $('.navbar').slideToggle('navbar-show');
    });
});