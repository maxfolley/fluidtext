fluidtext
=========

A jQuery plugin for resizing text as its parent's width is resized.

Usage
-----

    /*
     * If forceRedraw is true, it will redraw the text on the function call
     * otherwise it waits for the window to be resized
     */
    $("p").fluidText({pct: 4, foceRedraw: true});

To adjust the percantage (usefol if you're doing responsive):


    $("p").fluidText("setPercent", {pct: 6});
