 
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
      rerun();
      // var current_headline_hex = rgb2hex($('#headline').css("color"));
      // console.log(current_headline_hex);
      // console.log(invertColor(current_headline_hex, 1));
      // no1 = invertColor(current_headline_hex, 1);
      // $(this).css({"color": no1, "background-color": current_headline_hex});
      
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