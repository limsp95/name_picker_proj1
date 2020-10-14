function rerun() {    
$("#go").hover(function(){

      var current_headline_hex = rgb2hex($('#headline').css("color"));
      no1 = invertColor(current_headline_hex, 1);
  $(this).css({"color": no1, "background-color": current_headline_hex});
}, function(){
  
  $(this).css({"border-color":$('#headline').css("color"), "color":$('#headline').css("color"), "background-color": "transparent"});
 });

$("#save").hover(function(){

      var current_headline_hex = rgb2hex($('#headline').css("color"));
      no1 = invertColor(current_headline_hex, 1);
  $(this).css({"color": no1, "background-color": current_headline_hex});
}, function(){
  
  $(this).css({"border-color":$('#headline').css("color"), "color":$('#headline').css("color"), "background-color": "transparent"});
 });
}
<<<<<<< obf
// rgb to hex
=======
>>>>>>> bw_ofs
function rgb2hex(a) {
    var b = [
        '0',
        '1',
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '8',
        '9',
        'a',
        'b',
        'c',
        'd',
        'e',
        'f'
    ];
    a = a['match'](/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
    function c(d) {
        return isNaN(d) ? '00' : b[(d - d % 0x10) / 0x10] + b[d % 0x10];
    }
    return '#' + c(a[0x1]) + c(a[0x2]) + c(a[0x3]);
}
function invertColor(a, c) {
    if (a['indexOf']('#') === 0x0) {
        a = a['slice'](0x1);
    }
    if (a['length'] === 0x3) {
        a = a[0x0] + a[0x0] + a[0x1] + a[0x1] + a[0x2] + a[0x2];
    }
    if (a['length'] !== 0x6) {
        throw new Error('Invalid\x20HEX\x20color.');
    }
    var d = parseInt(a['slice'](0x0, 0x2), 0x10), e = parseInt(a['slice'](0x2, 0x4), 0x10), f = parseInt(a['slice'](0x4, 0x6), 0x10);
    if (c) {
        return d * 0.299 + e * 0.587 + f * 0.114 > 0xba ? '#000000' : '#FFFFFF';
    }
    d = (0xff - d)['toString'](0x10);
    e = (0xff - e)['toString'](0x10);
    f = (0xff - f)['toString'](0x10);
    return '#' + padZero(d) + padZero(e) + padZero(f);
}
function padZero(a, b) {
    b = b || 0x2;
    var c = new Array(b)['join']('0');
    return (c + a)['slice'](-b);
}

window.setInterval(function(){
  rerun()
}, 1000);