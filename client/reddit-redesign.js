$(document).ready(function(){
    $('#hot, #new, #top').click(function(event) {
      $('#hot').removeClass("active");
      $('#top').removeClass("active");
      $('#new').removeClass("active");
      $(this).toggleClass("active");
    });
});
