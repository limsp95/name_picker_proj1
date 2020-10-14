if (Modernizr['inputtypes']['color']) {
    $('.picker')['css']('display', 'inline-block');
    var c = document['getElementById']('colorpicker');
    c['addEventListener']('change', function (a) {
        var b = c['value'];
<<<<<<< obf
        $('#headline')['css']('color', b), $('#toggle_font_color')['css']('background', b), $('#go')['css']({
            'border-color': b,
            'color': b
        }), $('#save')['css']({
            'border-color': b,
            'color': b
        }), rerun();
=======
        $('#headline')['css']('color', b);
        $('#toggle_font_color')['css']('background', b);
        $('#go')['css']({
            'border-color': b,
            'color': b
        });
        $('#save')['css']({
            'border-color': b,
            'color': b
        });
        rerun();
>>>>>>> bw_ofs
    });
}
;
function pickColor() {
    $('#colorpicker')['click']();
}
const gp = new Grapick({ 'el': '#gp' });
<<<<<<< obf
gp['addHandler'](0x0, '#fffaf0'), gp['addHandler'](0x64, '#085078');
var color_gradient;
gp['on']('change', a => {
    document['body']['style']['background'] = gp['getSafeValue'](), color_gradient = gp['getSafeValue']();
=======
gp['addHandler'](0x0, '#fffaf0');
gp['addHandler'](0x64, '#085078');
var color_gradient;
gp['on']('change', a => {
    document['body']['style']['background'] = gp['getSafeValue']();
    color_gradient = gp['getSafeValue']();
>>>>>>> bw_ofs
});