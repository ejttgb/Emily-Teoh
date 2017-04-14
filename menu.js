$(document).ready(function() {
  $('.menu-trigger').click(function(){
      $('.navigation ul').slideToggle(500);

   }); //ends slide toggle function

$(window).resize(function() {
    if( $(window).width() > 700 ) {
      $ ('.navigation ul').removeAttr('style')
    }
});//end resize

});//end ready function
