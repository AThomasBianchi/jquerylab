$(document).ready(function() {
var $table;

// pop up table form
$(".table").on("click", function() {
  $table = $(this);
  var num = $(this).text();
  var available = $(this).hasClass("available");
  if (available) {
    $("span").text(num);
    $("#form").slideDown();
  }
});

// submit table info
$("#button").on("click", function() {
  event.preventDefault();
  $table.removeClass("available").addClass("reserved");
  $("#form").slideUp();
  $table.append("<div class='resInfo'><p>Name: " + $("#name").val() + "</p><p>Party of: " + $("#party").val() + "</p></div>");
});

// exit form
$("#x").on("click", function() {
  event.preventDefault();
  $("#form").slideUp();
  });

});
