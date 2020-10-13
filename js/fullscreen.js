/**
 *
 * Element.requestFullScreen() polyfill
 * @author Chris Ferdinandi
 * @license MIT
 */
!Element['prototype']['requestFullscreen'] && (Element['prototype']['requestFullscreen'] = Element['prototype']['mozRequestFullscreen'] || Element['prototype']['webkitRequestFullscreen'] || Element['prototype']['msRequestFullscreen']);
!document['exitFullscreen'] && (document['exitFullscreen'] = document['mozExitFullscreen'] || document['webkitExitFullscreen'] || document['msExitFullscreen']);
function myFunction(a) {
    if (document['fullscreenElement'])
        $('#hide')['show'](), document['exitFullscreen'](), $('.fa-chevron-circle-down')['hide']();
    else {
    }
}
!document['fullscreenElement'] && (Object['defineProperty'](document, 'fullscreenElement', {
    'get': function () {
        return document['mozFullScreenElement'] || document['msFullscreenElement'] || document['webkitFullscreenElement'];
    }
}), Object['defineProperty'](document, 'fullscreenEnabled', {
    'get': function () {
        return document['mozFullScreenEnabled'] || document['msFullscreenEnabled'] || document['webkitFullscreenEnabled'];
    }
}));
document['addEventListener']('click', function (a) {
    if (!a['target']['hasAttribute']('data-toggle-fullscreen'))
        return;
    document['fullscreenElement'] ? document['exitFullscreen']() : document['documentElement']['requestFullscreen']();
}, ![]);