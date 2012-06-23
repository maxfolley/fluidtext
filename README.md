fluidtext
=========

A jQuery plugin for resizing text as its parent's width is resized.

Usage
-----

    /*
     * initSize - initial font size 
     * initWidth - initial width of parent element
     * When resized, the font size will be calulated using the difference between the elements  current width and the passed initWidth value
     */
    $("p").fluidText({initSize: 14, initWidth: 300});
