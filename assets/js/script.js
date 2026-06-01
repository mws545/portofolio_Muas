$(document).ready(function () {
    // Toggle responsive navbar menu untuk HP
    $('#menu').click(function () {
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });

    // Tutup menu saat di-scroll
    $(window).on('scroll load', function () {
        $('#menu').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');
    });

    // Smooth scroll saat menu diklik
    $('a[href*="#"]').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top,
        }, 500, 'linear');
    });

    // Animasi Teks Berjalan (Typed.js)
    // Ditaruh di dalam sini agar jalan setelah semua elemen HTML siap
    if ($('.typing-text').length > 0) {
        var typed = new Typed(".typing-text", {
            strings: ["Muas", "Full Stack Developer", "Web Developer", "Information Systems Student"],
            loop: true,
            typeSpeed: 60,
            backSpeed: 30,
            backDelay: 1000,
        });
    }
});