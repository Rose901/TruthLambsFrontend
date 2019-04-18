
//menu toggle-button

$(document).ready(function () {

    $('.footer-title-link').on('click', function () {
        let colDiv = $(this).parent().parent();
        let rowDiv = colDiv.parent();
        rowDiv.find('.footer-content').removeClass("showing");
        colDiv.find('.footer-content').addClass("showing");
    });

    $('#add-question-button').magnificPopup();
    $('#loginBtn').magnificPopup();

});

//navbar nav-item nav-link active

/*$(function () {
    $('.nav-link').click(function(){
        $('.nav-link').removerClass(".active");
        $('this').addClass(".active");
        return false;
    });
    
});
*/

$('.navbar-nav .nav-item .nav-link').click(function(){
    $(this).addClass('active');
    $(this).parent().children('.nav-link').not(this).removeClass('active');
  });

  

//Srollong Effect
$(window).on("scroll", function () {
    if ($(window).scrollTop()) {
        $('#nav').addClass('white');
    }
    else {
        $('#nav').removeClass('white');

    }

})


var modal = document.getElementById('loginForm');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


// donation form js

$(function () {

    
    $('#Details').click(() => {
        $('#Details').parent().addClass('active')
        $('#Personal-info').parent().removeClass("active");
        $('#Payment').parent().removeClass("active");
        $('.step-1').show();
        $('.step-2').hide();
        $('.step-3').hide();

    });

    $('#Personal-info').click(() => {
        $('#Personal-info').parent().addClass('active')
        $('#Payment').parent().removeClass("active");
        $('#Details').parent().removeClass("active");
        $('.step-2').show();
        $('.step-1').hide();
        $('.step-3').hide();
    });

    $('#Payment').click(() => {
        $('#Payment').parent().addClass('active');
        $('#Personal-info').parent().removeClass('active')
        $('#Details').parent().removeClass("active");
        $('.step-3').show();
        $('.step-2').hide();
        $('.step-1').hide();

    });


    // document is ready now
    $('#credit-card').change(function (eventObject) {
        // todo: open bank form popup
        $('#credit-card-info').show();
    });

    $('.credit-card-radio').click(() => {
        $('#credit-card').prop('checked', true);
        $('#credit-card').change();
    })


    $('#bank-account').change(function (eventObject) {
        // todo: open bank form popup
        $('#credit-card-info').hide();
    });

    $('.bank-radio').click(() => {
        $('#bank-account').prop('checked', true);
        $('#bank-account').change();
    })

    // buttons for donation pages
    $('.next-btn-1').click(()=>{
        $('.step-2').show();
        $('.step-1').hide();
        $('#Personal-info').parent().addClass('active')
        $('#Payment').parent().removeClass("active");
        $('#Details').parent().removeClass("active");

    })

    $('.previous-btn-1').click(()=>{
        $('.step-1').show();
        $('.step-2').hide();
        $('#Details').parent().addClass('active')
        $('#Personal-info').parent().removeClass("active");
        $('#Payment').parent().removeClass("active");

    })

    $('.next-btn-2').click(()=>{
        $('.step-3').show();
        $('.step-2').hide();
        $('#Payment').parent().addClass('active');
        $('#Personal-info').parent().removeClass('active')
        $('#Details').parent().removeClass("active");

    })

    $('.previous-btn-2').click(()=>{
        $('.step-2').show();
        $('.step-3').hide();
        $('#Personal-info').parent().addClass('active')
        $('#Payment').parent().removeClass("active");
        $('#Details').parent().removeClass("active");

    })

    $('#cover-fees').change(function(){
        $(this).parent().find('p').toggleClass('Additional')
    })

    // FAQ
    // $('.question-heading').click((event) => { 
    //     $(event.currentTarget).parent().find('p').toggleClass( 'FAQ-answer' );
    //     event.preventDefault();
    // });
    $('.question-heading').click(function(event){ 
        $(this).parent().find('p').toggleClass( 'FAQ-answer' );
        event.preventDefault();
    });

    
 
    $('#loginForm').find('input, textarea').on('keyup blur focus', function (e) {
      var $this = $(this),
          label = $this.prev('label');
    
          if (e.type === 'keyup') {
            if ($this.val() === '') {
              label.removeClass('active highlight');
            } else {
              label.addClass('active highlight');
            }
        } else if (e.type === 'blur') {
            if( $this.val() === '' ) {
                label.removeClass('active highlight'); 
                } else {
                label.removeClass('highlight');   
                }   
        } else if (e.type === 'focus') {
          
          if( $this.val() === '' ) {
                label.removeClass('highlight'); 
                } 
          else if( $this.val() !== '' ) {
                label.addClass('highlight');
                }
        }
    
    });
  
  
    $('.tab a').on('click', function (e) {
      
      e.preventDefault();
      
      $(this).parent().addClass('active');
      $(this).parent().siblings().removeClass('active');
      
      target = $(this).attr('href');
  
      $('.tab-content > div').not(target).hide();
      
      $(target).fadeIn(600);
      
    });

});

// Prayer Request

$(function () {

    
    $('.prayer-topic').click((e) => {
        e.preventDefault();

        $('.prayer-content-1').show();
        $('.prayer-content-2 ').hide();

    });

    $('.prayer-group').click((e) => {
        e.preventDefault();

        $('.prayer-content-2').show();
        $('.prayer-content-1').hide();
        
    });
});