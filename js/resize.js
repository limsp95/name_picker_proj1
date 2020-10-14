function makeResizableDiv(a) {
<<<<<<< obf
    const b = document['querySelector'](a), c = document['querySelectorAll'](a + '\x20.resizer'), d = 0x14;
    let e = 0x0, f = 0x0, g = 0x0, h = 0x0, j = 0x0, k = 0x0;
    for (let l = 0x0; l < c['length']; l++) {
        const m = c[l];
        m['addEventListener']('mousedown', function (p) {
            p['preventDefault'](), e = parseFloat(getComputedStyle(b, null)['getPropertyValue']('width')['replace']('px', '')), f = parseFloat(getComputedStyle(b, null)['getPropertyValue']('height')['replace']('px', '')), g = b['getBoundingClientRect']()['left'], h = b['getBoundingClientRect']()['top'], j = p['pageX'], k = p['pageY'], window['addEventListener']('mousemove', n), window['addEventListener']('mouseup', o);
        });
        function n(p) {
            if (m['classList']['contains']('bottom-right')) {
                const q = e + (p['pageX'] - j), r = f + (p['pageY'] - k);
                q > d && (b['style']['width'] = q + 'px'), r > d && (b['style']['height'] = r + 'px');
            } else {
                if (m['classList']['contains']('bottom-left')) {
                    const s = f + (p['pageY'] - k), t = e - (p['pageX'] - j);
                    s > d && (b['style']['height'] = s + 'px'), t > d && (b['style']['width'] = t + 'px', b['style']['left'] = g + (p['pageX'] - j) + 'px');
                } else {
                    if (m['classList']['contains']('top-right')) {
                        const u = e + (p['pageX'] - j), v = f - (p['pageY'] - k);
                        u > d && (b['style']['width'] = u + 'px'), v > d && (b['style']['height'] = v + 'px', b['style']['top'] = h + (p['pageY'] - k) + 'px');
                    } else {
                        const w = e - (p['pageX'] - j), x = f - (p['pageY'] - k);
                        w > d && (b['style']['width'] = w + 'px', b['style']['left'] = g + (p['pageX'] - j) + 'px'), x > d && (b['style']['height'] = x + 'px', b['style']['top'] = h + (p['pageY'] - k) + 'px');
                    }
=======
    const b = document['querySelector'](a);
    const c = document['querySelectorAll'](a + '\x20.resizer');
    const d = 0x14;
    let e = 0x0;
    let f = 0x0;
    let g = 0x0;
    let h = 0x0;
    let j = 0x0;
    let k = 0x0;
    for (let l = 0x0; l < c['length']; l++) {
        const m = c[l];
        m['addEventListener']('mousedown', function (p) {
            p['preventDefault']();
            e = parseFloat(getComputedStyle(b, null)['getPropertyValue']('width')['replace']('px', ''));
            f = parseFloat(getComputedStyle(b, null)['getPropertyValue']('height')['replace']('px', ''));
            g = b['getBoundingClientRect']()['left'];
            h = b['getBoundingClientRect']()['top'];
            j = p['pageX'];
            k = p['pageY'];
            window['addEventListener']('mousemove', n);
            window['addEventListener']('mouseup', o);
        });
        function n(p) {
            if (m['classList']['contains']('bottom-right')) {
                const q = e + (p['pageX'] - j);
                const r = f + (p['pageY'] - k);
                if (q > d) {
                    b['style']['width'] = q + 'px';
                }
                if (r > d) {
                    b['style']['height'] = r + 'px';
                }
            } else if (m['classList']['contains']('bottom-left')) {
                const s = f + (p['pageY'] - k);
                const t = e - (p['pageX'] - j);
                if (s > d) {
                    b['style']['height'] = s + 'px';
                }
                if (t > d) {
                    b['style']['width'] = t + 'px';
                    b['style']['left'] = g + (p['pageX'] - j) + 'px';
                }
            } else if (m['classList']['contains']('top-right')) {
                const u = e + (p['pageX'] - j);
                const v = f - (p['pageY'] - k);
                if (u > d) {
                    b['style']['width'] = u + 'px';
                }
                if (v > d) {
                    b['style']['height'] = v + 'px';
                    b['style']['top'] = h + (p['pageY'] - k) + 'px';
                }
            } else {
                const w = e - (p['pageX'] - j);
                const x = f - (p['pageY'] - k);
                if (w > d) {
                    b['style']['width'] = w + 'px';
                    b['style']['left'] = g + (p['pageX'] - j) + 'px';
                }
                if (x > d) {
                    b['style']['height'] = x + 'px';
                    b['style']['top'] = h + (p['pageY'] - k) + 'px';
>>>>>>> bw_ofs
                }
            }
        }
        function o() {
            window['removeEventListener']('mousemove', n);
        }
    }
}
makeResizableDiv('.resizable');
var resizeableImage = function (a) {
    var b, c = new Image(), a = $(a)['get'](0x0), d = {}, e = ![], f = 0x3c, g = 0x3c, h = 0x708, i = 0x76c, j = 0x1f4, k = document['createElement']('canvas');
<<<<<<< obf
    imageData = null, init = function () {
        $('.js-loadfile')['change'](function (l) {
            var m = l['target']['files'], n = new FileReader();
            n['onload'] = function (o) {
                imageData = n['result'], loadData();
            }, n['readAsDataURL'](m[0x0]);
        }), $('.js-reset')['click'](function () {
            if (imageData)
                loadData();
            $('.resize-handle')['show']();
        }), c['src'] = a['src'], $(a)['height'](j)['wrap']('<div\x20class=\x22resize-container\x22></div>')['before']('<span\x20class=\x22resize-handle\x20resize-handle-nw\x22></span>')['before']('<span\x20class=\x22resize-handle\x20resize-handle-ne\x22></span>')['after']('<span\x20class=\x22resize-handle\x20resize-handle-se\x22></span>')['after']('<span\x20class=\x22resize-handle\x20resize-handle-sw\x22></span>'), b = $('.resize-container'), b['prepend']('<div\x20class=\x22resize-container-ontop\x22></div>'), b['on']('mousedown\x20touchstart', '.resize-handle', startResize), b['on']('mousedown\x20touchstart', '.resize-container-ontop', startMoving), $('.js-crop')['on']('click', crop);
    }, loadData = function () {
        a['src'] = imageData, c['src'] = a['src'], b['css']('display', 'inline-block'), $(a)['css']({
            'width': 'auto',
            'height': j
        }), $(c)['bind']('load', function () {
            resizeImageCanvas($(a)['width'](), $(a)['height']());
        });
    }, startResize = function (l) {
        l['preventDefault'](), l['stopPropagation'](), saveEventState(l), $(document)['on']('mousemove\x20touchmove', resizing), $(document)['on']('mouseup\x20touchend', endResize);
    }, endResize = function (l) {
        resizeImageCanvas($(a)['width'](), $(a)['height']()), l['preventDefault'](), $(document)['off']('mouseup\x20touchend', endResize), $(document)['off']('mousemove\x20touchmove', resizing);
    }, saveEventState = function (l) {
        d['container_width'] = b['width'](), d['container_height'] = b['height'](), d['container_left'] = b['offset']()['left'], d['container_top'] = b['offset']()['top'], d['mouse_x'] = (l['clientX'] || l['pageX'] || l['originalEvent']['touches'][0x0]['clientX']) + $(window)['scrollLeft'](), d['mouse_y'] = (l['clientY'] || l['pageY'] || l['originalEvent']['touches'][0x0]['clientY']) + $(window)['scrollTop'](), typeof l['originalEvent']['touches'] !== 'undefined' && (d['touches'] = [], $['each'](l['originalEvent']['touches'], function (m, n) {
            d['touches'][m] = {}, d['touches'][m]['clientX'] = 0x0 + n['clientX'], d['touches'][m]['clientY'] = 0x0 + n['clientY'];
        })), d['evnt'] = l;
    }, resizing = function (l) {
        var m = {}, n, o, p, q, r = b['offset']();
        m['x'] = (l['clientX'] || l['pageX'] || l['originalEvent']['touches'][0x0]['clientX']) + $(window)['scrollLeft'](), m['y'] = (l['clientY'] || l['pageY'] || l['originalEvent']['touches'][0x0]['clientY']) + $(window)['scrollTop']();
        if ($(d['evnt']['target'])['hasClass']('resize-handle-se'))
            n = m['x'] - d['container_left'], o = m['y'] - d['container_top'], p = d['container_left'], q = d['container_top'];
        else {
            if ($(d['evnt']['target'])['hasClass']('resize-handle-sw'))
                n = d['container_width'] - (m['x'] - d['container_left']), o = m['y'] - d['container_top'], p = m['x'], q = d['container_top'];
            else {
                if ($(d['evnt']['target'])['hasClass']('resize-handle-nw'))
                    n = d['container_width'] - (m['x'] - d['container_left']), o = d['container_height'] - (m['y'] - d['container_top']), p = m['x'], q = m['y'], (e || l['shiftKey']) && (q = m['y'] - (n / c['width'] * c['height'] - o));
                else
                    $(d['evnt']['target'])['hasClass']('resize-handle-ne') && (n = m['x'] - d['container_left'], o = d['container_height'] - (m['y'] - d['container_top']), p = d['container_left'], q = m['y'], (e || l['shiftKey']) && (q = m['y'] - (n / c['width'] * c['height'] - o)));
            }
        }
        (e || l['shiftKey']) && (o = n / c['width'] * c['height']), n > f && o > g && n < h && o < i && (resizeImage(n, o), b['offset']({
            'left': p,
            'top': q
        }));
    }, resizeImage = function (l, m) {
        $(a)['width'](l)['height'](m);
    }, resizeImageCanvas = function (l, m) {
        k['width'] = l, k['height'] = m, k['getContext']('2d')['drawImage'](c, 0x0, 0x0, l, m), $(a)['attr']('src', k['toDataURL']('image/png'));
    }, startMoving = function (l) {
        l['preventDefault'](), l['stopPropagation'](), saveEventState(l), $(document)['on']('mousemove\x20touchmove', moving), $(document)['on']('mouseup\x20touchend', endMoving);
    }, endMoving = function (l) {
        l['preventDefault'](), $(document)['off']('mouseup\x20touchend', endMoving), $(document)['off']('mousemove\x20touchmove', moving);
    }, moving = function (l) {
        var m = {}, n;
        l['preventDefault'](), l['stopPropagation'](), n = l['originalEvent']['touches'], m['x'] = (l['clientX'] || l['pageX'] || n[0x0]['clientX']) + $(window)['scrollLeft'](), m['y'] = (l['clientY'] || l['pageY'] || n[0x0]['clientY']) + $(window)['scrollTop'](), b['offset']({
=======
    imageData = null;
    init = function () {
        $('.js-loadfile')['change'](function (l) {
            var m = l['target']['files'];
            var n = new FileReader();
            n['onload'] = function (o) {
                imageData = n['result'];
                loadData();
            };
            n['readAsDataURL'](m[0x0]);
        });
        $('.js-reset')['click'](function () {
            if (imageData)
                loadData();
            $('.resize-handle')['show']();
        });
        c['src'] = a['src'];
        $(a)['height'](j)['wrap']('<div\x20class=\x22resize-container\x22></div>')['before']('<span\x20class=\x22resize-handle\x20resize-handle-nw\x22></span>')['before']('<span\x20class=\x22resize-handle\x20resize-handle-ne\x22></span>')['after']('<span\x20class=\x22resize-handle\x20resize-handle-se\x22></span>')['after']('<span\x20class=\x22resize-handle\x20resize-handle-sw\x22></span>');
        b = $('.resize-container');
        b['prepend']('<div\x20class=\x22resize-container-ontop\x22></div>');
        b['on']('mousedown\x20touchstart', '.resize-handle', startResize);
        b['on']('mousedown\x20touchstart', '.resize-container-ontop', startMoving);
        $('.js-crop')['on']('click', crop);
    };
    loadData = function () {
        a['src'] = imageData;
        c['src'] = a['src'];
        b['css']('display', 'inline-block');
        $(a)['css']({
            'width': 'auto',
            'height': j
        });
        $(c)['bind']('load', function () {
            resizeImageCanvas($(a)['width'](), $(a)['height']());
        });
    };
    startResize = function (l) {
        l['preventDefault']();
        l['stopPropagation']();
        saveEventState(l);
        $(document)['on']('mousemove\x20touchmove', resizing);
        $(document)['on']('mouseup\x20touchend', endResize);
    };
    endResize = function (l) {
        resizeImageCanvas($(a)['width'](), $(a)['height']());
        l['preventDefault']();
        $(document)['off']('mouseup\x20touchend', endResize);
        $(document)['off']('mousemove\x20touchmove', resizing);
    };
    saveEventState = function (l) {
        d['container_width'] = b['width']();
        d['container_height'] = b['height']();
        d['container_left'] = b['offset']()['left'];
        d['container_top'] = b['offset']()['top'];
        d['mouse_x'] = (l['clientX'] || l['pageX'] || l['originalEvent']['touches'][0x0]['clientX']) + $(window)['scrollLeft']();
        d['mouse_y'] = (l['clientY'] || l['pageY'] || l['originalEvent']['touches'][0x0]['clientY']) + $(window)['scrollTop']();
        if (typeof l['originalEvent']['touches'] !== 'undefined') {
            d['touches'] = [];
            $['each'](l['originalEvent']['touches'], function (m, n) {
                d['touches'][m] = {};
                d['touches'][m]['clientX'] = 0x0 + n['clientX'];
                d['touches'][m]['clientY'] = 0x0 + n['clientY'];
            });
        }
        d['evnt'] = l;
    };
    resizing = function (l) {
        var m = {}, n, o, p, q, r = b['offset']();
        m['x'] = (l['clientX'] || l['pageX'] || l['originalEvent']['touches'][0x0]['clientX']) + $(window)['scrollLeft']();
        m['y'] = (l['clientY'] || l['pageY'] || l['originalEvent']['touches'][0x0]['clientY']) + $(window)['scrollTop']();
        if ($(d['evnt']['target'])['hasClass']('resize-handle-se')) {
            n = m['x'] - d['container_left'];
            o = m['y'] - d['container_top'];
            p = d['container_left'];
            q = d['container_top'];
        } else if ($(d['evnt']['target'])['hasClass']('resize-handle-sw')) {
            n = d['container_width'] - (m['x'] - d['container_left']);
            o = m['y'] - d['container_top'];
            p = m['x'];
            q = d['container_top'];
        } else if ($(d['evnt']['target'])['hasClass']('resize-handle-nw')) {
            n = d['container_width'] - (m['x'] - d['container_left']);
            o = d['container_height'] - (m['y'] - d['container_top']);
            p = m['x'];
            q = m['y'];
            if (e || l['shiftKey']) {
                q = m['y'] - (n / c['width'] * c['height'] - o);
            }
        } else if ($(d['evnt']['target'])['hasClass']('resize-handle-ne')) {
            n = m['x'] - d['container_left'];
            o = d['container_height'] - (m['y'] - d['container_top']);
            p = d['container_left'];
            q = m['y'];
            if (e || l['shiftKey']) {
                q = m['y'] - (n / c['width'] * c['height'] - o);
            }
        }
        if (e || l['shiftKey']) {
            o = n / c['width'] * c['height'];
        }
        if (n > f && o > g && n < h && o < i) {
            resizeImage(n, o);
            b['offset']({
                'left': p,
                'top': q
            });
        }
    };
    resizeImage = function (l, m) {
        $(a)['width'](l)['height'](m);
    };
    resizeImageCanvas = function (l, m) {
        k['width'] = l;
        k['height'] = m;
        k['getContext']('2d')['drawImage'](c, 0x0, 0x0, l, m);
        $(a)['attr']('src', k['toDataURL']('image/png'));
    };
    startMoving = function (l) {
        l['preventDefault']();
        l['stopPropagation']();
        saveEventState(l);
        $(document)['on']('mousemove\x20touchmove', moving);
        $(document)['on']('mouseup\x20touchend', endMoving);
    };
    endMoving = function (l) {
        l['preventDefault']();
        $(document)['off']('mouseup\x20touchend', endMoving);
        $(document)['off']('mousemove\x20touchmove', moving);
    };
    moving = function (l) {
        var m = {}, n;
        l['preventDefault']();
        l['stopPropagation']();
        n = l['originalEvent']['touches'];
        m['x'] = (l['clientX'] || l['pageX'] || n[0x0]['clientX']) + $(window)['scrollLeft']();
        m['y'] = (l['clientY'] || l['pageY'] || n[0x0]['clientY']) + $(window)['scrollTop']();
        b['offset']({
>>>>>>> bw_ofs
            'left': m['x'] - (d['mouse_x'] - d['container_left']),
            'top': m['y'] - (d['mouse_y'] - d['container_top'])
        });
        if (d['touches'] && d['touches']['length'] > 0x1 && n['length'] > 0x1) {
<<<<<<< obf
            var o = d['container_width'], p = d['container_height'], q = d['touches'][0x0]['clientX'] - d['touches'][0x1]['clientX'];
=======
            var o = d['container_width'], p = d['container_height'];
            var q = d['touches'][0x0]['clientX'] - d['touches'][0x1]['clientX'];
>>>>>>> bw_ofs
            q = q * q;
            var r = d['touches'][0x0]['clientY'] - d['touches'][0x1]['clientY'];
            r = r * r;
            var s = Math['sqrt'](q + r);
<<<<<<< obf
            q = l['originalEvent']['touches'][0x0]['clientX'] - n[0x1]['clientX'], q = q * q, r = l['originalEvent']['touches'][0x0]['clientY'] - n[0x1]['clientY'], r = r * r;
            var t = Math['sqrt'](q + r), u = t / s;
            o = o * u, p = p * u, resizeImage(o, p);
        }
    }, crop = function () {
        $('.crop-wrapper')['css']({ 'background-color': 'transparent' });
        var l, m = $('.overlay')['offset']()['left'] - b['offset']()['left'], n = $('.overlay')['offset']()['top'] - b['offset']()['top'], o = $('.overlay')['width'](), p = $('.overlay')['height']();
        l = document['createElement']('canvas'), l['width'] = o, l['height'] = p, l['getContext']('2d')['drawImage'](a, m, n, o, p, 0x0, 0x0, o, p);
        var q = l['toDataURL']('image/png');
        a['src'] = q, c['src'] = a['src'], $(a)['bind']('load', function () {
=======
            q = l['originalEvent']['touches'][0x0]['clientX'] - n[0x1]['clientX'];
            q = q * q;
            r = l['originalEvent']['touches'][0x0]['clientY'] - n[0x1]['clientY'];
            r = r * r;
            var t = Math['sqrt'](q + r);
            var u = t / s;
            o = o * u;
            p = p * u;
            resizeImage(o, p);
        }
    };
    crop = function () {
        $('.crop-wrapper')['css']({ 'background-color': 'transparent' });
        var l, m = $('.overlay')['offset']()['left'] - b['offset']()['left'], n = $('.overlay')['offset']()['top'] - b['offset']()['top'], o = $('.overlay')['width'](), p = $('.overlay')['height']();
        l = document['createElement']('canvas');
        l['width'] = o;
        l['height'] = p;
        l['getContext']('2d')['drawImage'](a, m, n, o, p, 0x0, 0x0, o, p);
        var q = l['toDataURL']('image/png');
        a['src'] = q;
        c['src'] = a['src'];
        $(a)['bind']('load', function () {
>>>>>>> bw_ofs
            $(this)['css']({
                'width': o,
                'height': p
            })['unbind']('load')['parent']()['css']({
                'top': $('.overlay')['offset']()['top'] - $('.crop-wrapper')['offset']()['top'],
                'left': $('.overlay')['offset']()['left'] - $('.crop-wrapper')['offset']()['left']
            });
<<<<<<< obf
        }), $('.resize-handle')['hide']();
    }, init();
=======
        });
        $('.resize-handle')['hide']();
    };
    init();
>>>>>>> bw_ofs
};
resizeableImage($('.resize-image'));