function Tap(el, fn) {

    this.el = el;
    this.fn = fn || function() {};
    this.tap = true;
    if ('ontouchstart' in window) {
        this.el.addEventListener('touchmove', function(e) {
            this.tap = false;
            this.el.removeEventListener('touchmove', arguments.callee);
        }.bind(this));
        this.el.addEventListener('touchend', function(e) {
            if (this.tap) this.fn(e);
            this.tap = true;
            this.el.addEventListener('touchmove', function(e) {
                this.tap = false;
                this.el.removeEventListener('touchmove', arguments.callee);
            }.bind(this));

        }.bind(this));
    } else {
        this.el.addEventListener('click', fn);
    }
}
typeof module != 'undefined' ? module.exports = Tap : this[Tap] = Tap;
