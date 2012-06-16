(function ($, window) {
    "use strict";
    var els = $([]),
        numEls = 0;
    function redraw() {
        var el, fluidData; 
        els.each(function () {
            el = $(this);
            fluidData = el.data("fluidData");
            el.css("font-size", fluidData.parent.width() * fluidData.fontPct);
        });
    }
    var methods = {
        init: function () {
            return this.each(function (options) {
                var $this = $(this),
                    opts = {
                        forceRedraw: false,
                        pct: 10
                    },
                    fluidData;
                $.extend(opts, options);
                fluidData  = {
                    parent: $this.parent(),
                    fontPct: opts.pct / 100
                }
                $this.data("fluidData", fluidData);
                els = els.add($this);

                if (opts.forceRedraw === true) {
                    redraw();
                }
            });
        },
        setPercent: function (options) {
            return this.each(function () {
                var $this = $(this), 
                    fluidData = $this.data("fluidData"),
                    opts = {
                        forceRedraw: false;
                        pct: 10
                    };
                if (typeof fluidData === "undefined") {
                    return;
                }
                $.extend(opts, options);
                fluidData.fontPct = opts.pct / 100;
                $this.data("fluidData", fluidData);

                if (opts.forceRedraw === true) {
                    redraw();
                }
            });
        }
    };
    $.fn.fluidText = function (method) {
        if (methods[method]) {
            return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
        } else if (typeof method === "object" || !method) {
            return methods.init.apply(this, arguments);
        } else {
            $.error('Method ' + method + ' does not exist on jQuery.spriter');
        }
    };
    $(window).resize(redraw);
}(jQuery, window));
