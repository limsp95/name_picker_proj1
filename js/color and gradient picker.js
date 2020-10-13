if (Modernizr['inputtypes']['color']) {
    $('.picker')['css']('display', 'inline-block');
    var c = document['getElementById']('colorpicker');
    c['addEventListener']('change', function (a) {
        var b = c['value'];
        $('#headline')['css']('color', b), $('#toggle_font_color')['css']('background', b), $('#go')['css']({
            'border-color': b,
            'color': b
        }), $('#save')['css']({
            'border-color': b,
            'color': b
        }), rerun();
    });
}
;
function pickColor() {
    $('#colorpicker')['click']();
}
const gp = new Grapick({ 'el': '#gp' });
gp['addHandler'](0x0, '#fffaf0'), gp['addHandler'](0x64, '#085078');
var color_gradient;
gp['on']('change', a => {
    document['body']['style']['background'] = gp['getSafeValue'](), color_gradient = gp['getSafeValue']();
});