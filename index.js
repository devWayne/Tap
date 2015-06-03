/**
 * @param {Element} el Description
 * @param {Function} fn Description
 * @return {void} description
 */
function Tap(el, fn) {
    el = el || document.body;
    fn = fn || function() {};
    var tap = true;
    if ('ontouchstart' in window) {
        el.addEventListener('touchmove', function(e) {
            tap = false;
            el.removeEventListener('touchmove', arguments.callee);
        });
        el.addEventListener('touchend', function(e) {
            if (tap) fn(e);
            tap = true;
            el.addEventListener('touchmove', function(e) {
                tap = false;
                el.removeEventListener('touchmove', arguments.callee);
            });

        });
    } else {
        el.addEventListener('click', fn);
    }
    return this;
}
typeof module != 'undefined' ? module.exports = Tap : this[Tap] = Tap;
