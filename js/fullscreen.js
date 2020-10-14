/**
 *
 * Element.requestFullScreen() polyfill
 * @author Chris Ferdinandi
 * @license MIT
 */
if (!Element['prototype']['requestFullscreen']) {
    Element['prototype']['requestFullscreen'] = Element['prototype']['mozRequestFullscreen'] || Element['prototype']['webkitRequestFullscreen'] || Element['prototype']['msRequestFullscreen'];
}
/**
 * document.exitFullScreen() polyfill
 * @author Chris Ferdinandi
 * @license MIT
 */
if (!document['exitFullscreen']) {
    document['exitFullscreen'] = document['mozExitFullscreen'] || document['webkitExitFullscreen'] || document['msExitFullscreen'];
}
function myFunction(a) {
    if (document['fullscreenElement']) {
        $('#hide')['show']();
        document['exitFullscreen']();
        $('.fa-chevron-circle-down')['hide']();
        $('body')['css']({ 'overflow-y': 'auto' });
    } else {
    }
}
/**
 * document.fullscreenElement polyfill
 * Adapted from https://shaka-player-demo.appspot.com/docs/api/lib_polyfill_fullscreen.js.html
 * @author Chris Ferdinandi
 * @license MIT
 */
if (!document['fullscreenElement']) {
    Object['defineProperty'](document, 'fullscreenElement', {
        'get': function () {
            return document['mozFullScreenElement'] || document['msFullscreenElement'] || document['webkitFullscreenElement'];
        }
    });
    Object['defineProperty'](document, 'fullscreenEnabled', {
        'get': function () {
            return document['mozFullScreenEnabled'] || document['msFullscreenEnabled'] || document['webkitFullscreenEnabled'];
        }
    });
}
document['addEventListener']('click', function (a) {
    if (!a['target']['hasAttribute']('data-toggle-fullscreen'))
        return;
    if (document['fullscreenElement']) {
        document['exitFullscreen']();
    } else {
        document['documentElement']['requestFullscreen']();
    }
}, ![]);