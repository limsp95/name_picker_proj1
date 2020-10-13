 
  //add color picker if supported
  if (Modernizr.inputtypes.color) {
    $(".picker").css("display", 'inline-block');
    var c = document.getElementById('colorpicker');
    c.addEventListener('change', function(e) {
      //d.innerHTML = c.value;
      var color = c.value;
      // $("body").css("background", color);
      $('#headline').css("color", color);
      $('#toggle_font_color').css("background", color);
      $('#go').css({"border-color":color, "color":color});
      $('#save').css({"border-color":color, "color":color});
      $("#go").hover(function(){
  $(this).css({"color": "black", "background-color": color});
}, function(){
  $(this).css({"border-color":color, "color":"white", "background-color": "transparent"});
 });
});
};



function pickColor() {
  $("#colorpicker").click();
}

    //gradient picker
  const gp = new Grapick({el: '#gp'});

  // Handlers are color stops
  gp.addHandler(0, '#fffaf0');
  gp.addHandler(100, '#085078');
  var color_gradient;
  // Do stuff on change of the gradient
  gp.on('change', complete => {
    document.body.style.background = gp.getSafeValue();
    color_gradient = gp.getSafeValue();
  });