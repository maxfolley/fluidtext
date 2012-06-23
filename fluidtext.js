(function ($, window) {
    "use strict";
    var els = $([]),
        numEls = 0,
        methods = {
            init: function (options) {
                return this.each(function () {
                    var $this = $(this),
                        opts = {
                            forceRedraw: false
                        },
                        fluidData;
                    $.extend(opts, options);
                    fluidData  = {
                        initSize: opts.initSize || parseInt($this.css("font-size")),
                        initWidth: opts.initWidth || $this.parent.width()
                    };
                    $this.data("fluidData", fluidData);
                    els = els.add($this);
                    if (opts.forceRedraw === true) {
                        redraw();
                    }
                });
            }
        };
    function redraw() {
        var wDiff = 0,
            el, fluidData, fSize, parentW, $parent, $this;
        els.each(function () {
            $this = $(this);
            $parent = $this.parent()
            if (typeof $parent === "undefined") {
                return;
            }

            fSize = $this.css("font-size");
            parentW = $parent.width();
            fluidData = $this.data("fluidData");
            wDiff = fluidData.initWidth - parentW;
            fSize = fluidData.initSize - (fluidData.initSize/fluidData.initWidth) * wDiff;
            $this.css("font-size", fSize);
        });
    }
    $.fn.fluidText = function (method) {
        if (methods[method]) {
            return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
        } else if (typeof method === "object" || !method) {
            return methods.init.apply(this, arguments);
        } else {
            $.error('Method ' + method + ' does not exist on jQuery.fluidtext');
        }
    };
    $(window).resize(redraw);
}(jQuery, window));
