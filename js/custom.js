// SideNav Initialization
//$(".button-collapse").sideNav();

//Animation init
new WOW().init();

//Modal
$('#myModal').on('shown.bs.modal', function () {
    $('#myInput').focus()
})

// Material Select Initialization
$(document).ready(function () {
    $('.mdb-select').material_select();
});

// MDB Lightbox Init
$(function () {
    $("#mdb-lightbox-ui").load("../mdb-addons/mdb-lightbox-ui.html");
});

// Gallery
$(document).ready(function () {
    let flbutton = $('.filter-button');

    flbutton.click(function () {
        var value = $(this).attr('data-filter');

        if (value === "all") {
            $('.filter').show('1000');
        }
        else {
            $(".filter").not('.' + value).hide('1500');
            $('.filter').filter('.' + value).show('1000');

        }


        if (flbutton.removeClass("btn-success")) {
            flbutton.addClass("btn-outline-success");
            $(this).removeClass("btn-outline-success");
        }
        $(this).addClass("btn-success");
    });
});