fluidtext
=========

A jQuery plugin for resizing text as its parent's width is resized.

Usage
-----

    /*
     * First parameter is the percentage of the text relavent to its parent size
     * Second parameter is optional, if true it will redraw the text on the function call
     * otherwise it waits for the window to be resized
     */
    $("p").fluidText(4);

To adjust the percantage (usefol if you're doing responsive):


    $("p").fluidTextSetPct(6);
