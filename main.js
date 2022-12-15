
$('.nav a').click(function(){
  $('html, body').animate({
      scrollTop: $( $(this).attr('href') ).offset().top
  }, 500);
  return false;
});

///set interval

var countDownDate = new Date("Dec 17, 2022 20:00:00").getTime();

// Update the count down every 1 second
var countdownfunction = setInterval(function() {

  // Get todays date and time
  var now = new Date().getTime();
  
  // Find the distance between now an the count down date
  var distance = countDownDate - now;
  
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
  // Output the result in an element with id="demo"
  let view = '<div class="time">'+
              '<div class="value-time">'+days+'</div>'+
              '<div class="sub-time">days</div>'+
             '</div>'+
             '<div class="time">'+
              '<div class="value-time">'+hours+'</div>'+
              '<div class="sub-time">hours</div>'+
             '</div>'+
             '<div class="time">'+
              '<div class="value-time">'+minutes+'</div>'+
              '<div class="sub-time">minutes</div>'+
             '</div>'+
             '<div class="time">'+
              '<div class="value-time">'+seconds+'</div>'+
              '<div class="sub-time">second</div>'+
             '</div>';
  document.getElementById("saveTheDate").innerHTML = view;
  
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(countdownfunction);
    let exp = '<div class="time">'+
              '<div class="value-time">00</div>'+
              '<div class="sub-time">days</div>'+
             '</div>'+
             '<div class="time">'+
              '<div class="value-time">00</div>'+
              '<div class="sub-time">hours</div>'+
             '</div>'+
             '<div class="time">'+
              '<div class="value-time">00</div>'+
              '<div class="sub-time">minutes</div>'+
             '</div>'+
             '<div class="time">'+
              '<div class="value-time">00</div>'+
              '<div class="sub-time">second</div>'+
             '</div>';
    document.getElementById("saveTheDate").innerHTML = exp;
  }
}, 1000);


$('.slide-bride').slick({
  infinite: true,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});
//audio
var audio = document.getElementById('audio');
//open lagu
$('.speaker .play-off').click(function(){
  $('.play-off').hide();
  $('.play-on').show();
  audio.play();
})
$('.speaker .play-on').click(function(){
  $('.play-on').hide();
  $('.play-off').show();
  audio.pause();
})

$('#OpenEnvitation').click(function(){
  $('html, body').animate({
    scrollTop: $('#quote').offset().top
  }, 500);
  $('.speaker').show();
  $('.play-off').hide();
  $('.play-on').show();
  $('#home').removeClass('fixed');
  $('.nav').removeClass('hidden');
  audio.play();
  $('#OpenEnvitation').hide()
})