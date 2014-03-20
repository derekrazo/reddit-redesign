$(document).ready(function(){


    $('#hot, #new, #top').click(function(event) {
      $('#hot').removeClass("active-button");
      $('#top').removeClass("active-button");
      $('#new').removeClass("active-button");
      $(this).toggleClass("active-button");
      console.log("hi");

    });

  $('.left-sidebar-item-container').click(function(event) {
       $('.left-sidebar-item-tab').removeClass('active-tab-orange');
     });


    $('.left-sidebar-search-bar').hover(function() {
      $('.left-sidebar-search-icon').addClass('opacity-up');
    });


    $('.left-sidebar-search-bar-container').hover(function() {
      $('.left-sidebar-search-icon').removeClass('opacity-up');
      $('.left-sidebar-search-bar').removeClass('active-search-bar');
    });

    $('.left-sidebar-item-container').click(function() {
      $('.left-sidebar-item-tab').removeClass('active-tab');
      $(this).children('.left-sidebar-item-tab').addClass('active-tab');
    });




    $('.right-sidebar-search-bar').hover(function() {
      $('.right-sidebar-search-icon').addClass('opacity-up');
    });

    $('.right-sidebar-search-bar-container').hover(function() {
      $('.right-sidebar-search-icon').removeClass('opacity-up');
      $('.right-sidebar-search-bar').removeClass('active-search-bar');
    });

    $('.top').click(function(event) {
      $('.top').removeClass("active-tab-orange");
      $('.left-sidebar-item-tab').removeClass("active-tab");
      $(this).children('.left-sidebar-item-tab').addClass('active-tab-orange');
    });


});


