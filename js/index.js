$(function() {
	$('.gao').click (function () {
        $('.hongbao,.select').hide(function() {
            $('.video').show();
            $(".gao").addClass("di");
            $(".hong,.jing").removeClass("di");

        });
    });
    $('.hong').click(function() {
        $('.video,.select').hide(function() {
            $('.hongbao').show();
            $(".hong").addClass("di");
            $(".gao,.jing").removeClass("di");
        });
    });
     $('.jing').click(function() {
        $('.video,.hongbao').hide(function() {
            $('.select').show();
            $(".jing").addClass("di");
            $(".hong,.gao").removeClass("di");
        });
    });

})
