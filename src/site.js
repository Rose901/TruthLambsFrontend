
//menu toggle-button

$(document).ready(function () {
    $(".menu-icon").on("click",function() {

        $(".menu").toggleClass("showing");

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