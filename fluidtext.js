(function($, window) {
    var els = $([]),
        numEls = 0;
    function redraw() {
        var el, elData; 
        els.each(function () {
            el = $(this);
            elData = el.data("elData");
            el.css("font-size", elData.parent.width() * elData.fontPct);
        });
    }
    $.fn.fluidText = function (pct, forceRedraw) {
        var elData = {
            parent: this.parent(),
            fontPct: pct/100
        }
        this.data("elData", elData);
        els = els.add(this);

        if (typeof forceRedraw !== "undefined" && forceRedraw === true) {
            redraw();
        }
        return this;
    };
    // Adjust the percentage 
    $.fn.fluidTextSetPct = function (pct, forceRedraw) {
        var elData = this.data("elData");
        if (typeof elData === "undefined") {
            return;
        }
        elData.fontPct = pct/100;
        this.data("elData", elData);

        if (typeof forceRedraw !== "undefined" && forceRedraw === true) {
            redraw();
        }
        return this;
    }
    $(window).resize(redraw);
})(jQuery, window);
