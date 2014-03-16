$(document).ready(function(){
    $('#hot, #new, #top').click(function(event) {
      $('#hot').removeClass("active-button");
      $('#top').removeClass("active-button");
      $('#new').removeClass("active-button");
      $(this).toggleClass("active-button");
    });

    $('.sidebar-search-bar').hover(function() {
      $('.sidebar-search-icon').addClass('opacity-up');
    });


    $('.sidebar-search-bar-container').hover(function() {
      $('.sidebar-search-icon').removeClass('opacity-up');
      $('.sidebar-search-bar').removeClass('active-search-bar');
    });






});


