(function($){
  $(function(){

    //materialize features init
    $('.button-collapse').sideNav();
    $('.parallax').parallax();
    $('#callback').modal();    

    //smooth anchor scrolling
    $(".jump").on("click", function (event)
     {
        event.preventDefault();
        var i  = $(this).attr('href');
        t = $(i).offset().top;
        $('body,html').animate({scrollTop: t}, 2000, 'easeOutExpo');
    });
  }); // end of document ready
})(jQuery); // end of jQuery name space
