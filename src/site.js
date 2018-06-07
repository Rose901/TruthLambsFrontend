
//menu toggle-button

$(document).ready(function () {

    $('.footer-title-link').on('click', function() {
        let colDiv = $(this).parent().parent();
        let rowDiv = colDiv.parent();
        rowDiv.find('.footer-content').removeClass("showing");
        colDiv.find('.footer-content').addClass("showing");
    });

    $('#add-question-button').magnificPopup();

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


var modal = document.getElementById('loginForm');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}







