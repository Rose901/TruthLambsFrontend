
//menu toggle-button

$(document).ready(function () {
    $('.footer-title-link').on('click', function() {
        let colDiv = $(this).parent().parent();
        let rowDiv = colDiv.parent();
        rowDiv.find('.footer-content').removeClass("showing");
        colDiv.find('.footer-content').addClass("showing");
    });
});


//Srollong Effect
$(window).on("scroll",  function(){
    if ($(window).scrollTop()){
     $('#nav').addClass('white');
    }
  else{
    $('#nav').removeClass('white');

  }

})