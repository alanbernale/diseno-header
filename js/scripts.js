$(function () {

    var flag = 0;

    $('[data-toggle="tooltip"]').tooltip()

    $('#menu_hamburger, #menu_hamburger-md').click(function (e) {
        e.stopPropagation();
        if(flag == 0) {
            $('#sidebar-navigation').addClass('show')
            $('.sidebar__overlay').addClass('show')
            flag = 1
        }
    })

    $('#icon_times').click(function () {
        if(flag == 1) {
            $('#sidebar-navigation').removeClass('show')
            $('.sidebar__overlay').removeClass('show')
            flag = 0;
        }
    })

    $('.categories__item > a').click(function () {
        $(this).next('ul').toggleClass('show');
        console.log(this);
    })

    $('.categories__subitem > a').click(function () {
        $(this).next('ul').toggleClass('show');
    })

    $('body').click(function() {
        if(flag == 1 ) {
            $('#sidebar-navigation').removeClass('show')
            $('.sidebar__overlay').removeClass('show')
            flag = 0;
        }
    })

    $(document).keyup(function (e) {
        if(e.keyCode== 27 && flag == 1) {
            $('#sidebar-navigation').removeClass('show')
            $('.sidebar__overlay').removeClass('show')
            flag = 0;
        }
    })

    $('#sidebar-navigation').click(function(e) {
        e.stopPropagation();
    })
})