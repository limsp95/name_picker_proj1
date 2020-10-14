var text;
var names = new Array('lim', 'lim2', 'lim3', 'Jospeh\x20Lustberg\x20Lustberg', 'JospehLustberg\x20Lustberg\x20Lustberg', '林林林', '林林林1', '林林林', '林林林1', '林林林', '林林林1', 'SpringLuckinbill\x20Luckinbill', 'JospehLustberg\x20Lustberg\x20Lustberg', 'SpringLuckinbill\x20Luckinbill', 'JospehLustberg\x20Lustberg\x20Lustberg', 'Spring\x20Luckinbill\x20Luckinbill', 'JospehLustberg\x20Lustberg\x20Lustberg', 'Spring\x20Luckinbill\x20Luckinbill', 'Ciera\x20Chionchio', 'Marleen\x20Litchard', 'Eldridge\x20Brynga\x20Brynga', 'Leif\x20Dinho', 'Gigi\x20Kornblatt', 'Idell\x20Chagollan', 'Michale\x20Mcclod', 'lim\x20lim\x20lim', 'lim2\x20lim2\x20lim2', 'lim3\x20lim3\x20', 'lim3\x20lim3\x20', 'Jospeh\x20Lustberg\x20Lustberg', 'JospehLustberg\x20Lustberg\x20Lustberg', 'SpringLuckinbill\x20Luckinbill', 'JospehLustberg\x20Lustberg\x20Lustberg', 'SpringLuckinbill\x20Luckinbill', 'JospehLustberg\x20Lustberg\x20Lustberg', 'Spring\x20Luckinbill\x20Luckinbill', 'JospehLustberg\x20Lustberg\x20Lustberg', 'Spring\x20Luckinbill\x20Luckinbill', 'Ciera\x20Chionchio', 'Marleen\x20Litchard', 'Eldridge\x20Brynga\x20Brynga', 'Leif\x20Dinho', 'Gigi\x20Kornblatt', 'Idell\x20Chagollan', 'Michale\x20Mcclod');
function reset() {
    setTimeout('$(\x27#go\x27).removeAttr(\x27disabled\x27)', 0x2afd);
    var a = '';
    if (gup('names') != '') {
        var b = gup('names');
        a = b['replace'](/101/g, '\x0a');
        a = a['replace'](/%20/g, '\x20');
    } else {
        var b = new Array('JJ', 'lim', 'lim2', 'lim3', 'Jospeh\x20Lustberg\x20Lustberg', 'JospehLustberg\x20Lustberg\x20Lustberg', '林林林', '林林林1', '林林林', '林林林1', '林林林', '林林林1', 'SpringLuckinbill\x20Luckinbill', 'JospehLustberg\x20Lustberg\x20Lustberg', 'SpringLuckinbill\x20Luckinbill', 'JospehLustberg\x20Lustberg\x20Lustberg', 'Spring\x20Luckinbill\x20Luckinbill', 'JospehLustberg\x20Lustberg\x20Lustberg', 'Spring\x20Luckinbill\x20Luckinbill', 'Ciera\x20Chionchio', 'Marleen\x20Litchard', 'Eldridge\x20Brynga\x20Brynga', 'Leif\x20Dinho', 'Gigi\x20Kornblatt', 'Idell\x20Chagollan', 'Michale\x20Mcclod', 'lim\x20lim\x20lim', 'lim2\x20lim2\x20lim2', 'lim3\x20lim3\x20', 'lim3\x20lim3\x20', 'Jospeh\x20Lustberg\x20Lustberg', 'JospehLustberg\x20Lustberg\x20Lustberg', 'SpringLuckinbill\x20Luckinbill', 'JospehLustberg\x20Lustberg\x20Lustberg', 'SpringLuckinbill\x20Luckinbill', 'JospehLustberg\x20Lustberg\x20Lustberg', 'Spring\x20Luckinbill\x20Luckinbill', 'JospehLustberg\x20Lustberg\x20Lustberg', 'Spring\x20Luckinbill\x20Luckinbill', 'Ciera\x20Chionchio', 'Marleen\x20Litchard', 'Eldridge\x20Brynga\x20Brynga', 'Leif\x20Dinho', 'Gigi\x20Kornblatt', 'Idell\x20Chagollan', 'Michale\x20Mcclod');
        for (var c in b) {
            name = b[c];
            if (name == '' || typeof name == undefined) {
            } else {
                a = a + name + '\x0a';
            }
        }
    }
    $('#namesbox')['val'](a);
}
function gup(a) {
    a = a['replace'](/[\[]/, '\x5c[')['replace'](/[\]]/, '\x5c]');
    var b = '[\x5c?&]' + a + '=([^&#]*)';
    var c = new RegExp(b);
    var d = c['exec'](window['location']['href']);
    if (d == null)
        return '';
    else
        return d[0x1];
}
function randOrd() {
    return Math['round'](Math['random']()) - 0.5;
}
function home() {
    $('#varnote')['show']();
    $('#go')['show']();
    $('#names')['hide']();
    $('#namesbox')['hide']();
    $('#headline')['text']('Lucky\x20Draw')['fadeIn']();
}
function save() {
    $('#varnote')['hide']();
    $('#popdown')['show']();
    $('#values')['hide']();
    $('#go')['hide']();
    $('div')['remove']('#result1');
    savenames = $('#namesbox')['val']();
    savenames = savenames['replace'](/\n\r?/g, '101');
    $('#headline')['fadeOut']();
    $('#headline')['text']('The\x20name\x20list\x20is\x20saved\x20and\x20updated.')['fadeIn']();
    $('#names')['show']();
    $('#namesbox')['attr']('disabled', 'disabled');
}
function namelist() {
    $('#varnote')['hide']();
    $('#space_go')['hide']();
    $('#go')['hide']();
    $('#namesbox')['show']();
    $('#namesbox')['removeAttr']('disabled', 'disabled');
    $('#headline')['text']('Please\x20insert\x20the\x20guest\x20name\x20here.');
    $('#popdown')['show']();
    $('#values')['hide']();
    $('#names')['show']();
    $('#save')['css']({ 'display': 'grid' });
}
function go() {
    $('#upload_image')['hide']();
    $('#go')['hide']();
    $('#space_go')['hide']();
    $('.fa-chevron-circle-down')['show']();
    document['documentElement']['requestFullscreen']();
    $('#varnote')['hide']();
    $('#hide')['hide']();
    $('body')['css']({ 'overflow-y': 'hidden' });
    $('#go')['attr']('disabled', 'disabled');
    $('#list')['attr']('disabled', 'disabled');
    $('#save')['attr']('disabled', 'disabled');
    $('#headline')['slideUp']();
    $('#namesbox')['slideDown']();
    var a = 0x1;
    a = 0x1;
    $('div')['remove']('#result1');
    names = $('#namesbox')['val']();
    if (document['all']) {
        names = names['split']('\x0a');
    } else {
        names = names['split']('\x0a');
    }
    $('#values')['show']();
    $('.name')['show']();
    $('#popdown')['hide']();
    $('div')['remove']('.name');
    $('div')['remove']('.extra');
    $('#playback')['html']('');
    newtop = names['length'] * 0xc8 * -0x1;
    $('#values')['css']({ 'top': +newtop });
    names['sort'](randOrd);
    var b = new Array('apple', 'pear', 'orange', 'banana');
    for (var c in names) {
        if (names[c] == '' || typeof names[c] == undefined) {
            a = a - 0x1;
        } else {
            name = names[c];
            $('#values')['append']('<div\x20id=result' + a + '\x20class=name>' + name + '</div>');
            $('[id*=\x27result\x27]:not(#result1)')['css']('color', $('#headline')['css']('color'));
        }
        a = a + 0x1;
    }
    for (var c in names) {
        if (names[c] == '' || typeof names[c] == undefined) {
        } else {
            name = names[c];
            $('#values')['append']('<div\x20class=name>' + name + '</div>');
        }
        a = a + 0x1;
    }
    for (var c in names) {
        if (names[c] == '' || typeof names[c] == undefined) {
        } else {
            name = names[c];
            $('#values')['append']('<div\x20class=name>' + name + '</div>');
        }
        a = a + 0x1;
    }
    text = $('#result1')['text']();
    $('#values')['animate']({ 'top': '+176' }, 0x1388);
    setTimeout('standout(text)', 0x1388);
}
function standout(a) {
    $('#result1')['removeClass']('name');
    $('.name')['animate']({ 'opacity': 0.25 });
    $('#result1')['animate']({ 'height': '+=80px' });
    $('#result1')['append']('<div\x20class=\x22extra\x22><a\x20class=\x22button\x20tooltip\x22\x20id=\x22rm\x22\x20href=\x22#\x22\x20onClick=\x22removevictim();\x22><i\x20class=\x22fa\x20fa-arrow-right\x22\x20aria-hidden=\x22true\x22></i><span\x20class=\x22tooltiptext\x22>Back\x20to\x20home\x20for\x20next\x20roll</span></a></div>');
    $('#go')['removeAttr']('disabled', 'disabled');
    $('#list')['removeAttr']('disabled', 'disabled');
    $('#save')['removeAttr']('disabled', 'disabled');
    $('#headline')['text']('Congratulations,\x20the\x20winner\x20is');
    $('#headline')['slideDown']();
}
function removevictim() {
    var a = '';
    for (var b in names) {
        name = names[b];
        if (name == '' || name == text || typeof name == undefined) {
        } else {
            a = a + '\x0a' + name;
        }
    }
    $('#namesbox')['val']('');
    $('#namesbox')['val'](a);
    $('div')['remove']('#result1');
    $('div')['remove']('.name');
    $('div')['remove']('.extra');
    $('#headline')['text']('OK,\x20done!\x20Let\x27s\x20see\x20who\x20is\x20next?\x20Just\x20click\x20\x22GO!\x22\x20button\x20for\x20next\x20roll.');
    $('#varnote')['show']();
    $('#headline')['slideDown']();
    $('#go')['show']()['slideUp'](0x1f4)['delay'](0xc8)['slideDown'](0x1f4);
    $('#space_go')['show']();
}