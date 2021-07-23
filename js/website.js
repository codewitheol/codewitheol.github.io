// Side bar SHOW/HIDE main page divs
$('a').on('click', function () {
  var target = $(this).attr('rel');
  $("#" + target).show().siblings("div").hide();
});

// Init tagcanvas Script
$(document).ready(function() {
    if( ! $('#myCanvas').tagcanvas({
      textColour : '#ffffff',
      outlineColour: 'transparent',
      outlineThickness : 0,
      maxSpeed : 0.03,
      depth : 0.75,
      initial : [0.2,-0.1]
    })) {
      // TagCanvas failed to load
      $('#myCanvasContainer').hide();
    }
  });