!function () {
    function e() {
        document.querySelector(".preloader").style.opacity = "0";
        document.querySelector(".preloader").style.display = "none";
    }

    window.onload = function () {
        window.setTimeout(e, 500);
    };

    window.onscroll = function () {
        var e = document.querySelector(".navbar-area"),
            o = e.offsetTop;
        window.pageYOffset > o ? e.classList.add("sticky") : e.classList.remove("sticky");
        var t = document.querySelector(".scroll-top");
        document.body.scrollTop > 50 || document.documentElement.scrollTop > 50 ? t.style.display = "flex" : t.style.display = "none";
    };

    (new WOW).init();

    let o = document.querySelector(".mobile-menu-btn");
    o.addEventListener("click", (function () {
        o.classList.toggle("active");
    }));

    // jQuery code for handling FAQ items
    $(".elem__faq").on("click", function () {
        $(this).toggleClass("active");
        $(this).find(".content").slideToggle(400);
        if ($(this).hasClass("active")) {
            $(this).find(".head>span").text("-");
        } else {
            $(this).find(".head>span").text("+");
        }
    });
}();
