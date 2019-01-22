$(document).ready(function () {

  var copyText = "babrar@edu.uwaterloo.ca";
  var clip = new Clipboard('.copy');
  clip.on("success", function () {
    setTimeout(function() { alert("Copied!      " + copyText); }, 1);
  });

  $(".welcome").hide();
  $(".welcome").fadeIn(4000);

  var hoverColors = [
    "rgba(51, 170, 51, .15)",
    "rgba(220, 20, 60, .1)",
    "rgba(255, 255, 0, .3)",
    "rgba(148, 0, 211, .15)"
  ]

  $("#links").children().hover(function() {
    var color = hoverColors[Math.floor(Math.random() * hoverColors.length)];
    $(this).css("background-color", color);
  },function() {
    $(this).css("background-color","rgba(51, 170, 51, 0)");
  });

  // Add smooth scrolling to all links
  $("a").on('click', function (event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function () {

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    }
  });
});