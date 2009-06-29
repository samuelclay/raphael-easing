# Raphael animation easing plugin

##### Derived from jQuery Easing Plugin (version 1.3): <http://gsgd.co.uk/sandbox/jquery/easing/>

View a demo of animation easing techniques here: <http://demos.daylife.com/samuel/svg_photo_flipper_prototype.xhtml>

**NOTE:** As of June 2009, this plugin requires a forked version of RaphaelJS. You can download it here: <https://github.com/conesus/raphael/tree>. Hopefully, these forked changes will be merged with the master Raphael JS code.

## To use:

 1.  Include the `raphael.easing.1.3.js` file after your `raphael.js` file.
 2.  Specify the easing technique in the `.animate()` function, like so:

    `Element.animate({'scale': [1.25, 1.25]}, 750, 'easeOutCubic', callback);`

### Available easing techniques:

 -  linear
 -  easeInQuad
 -  easeOutQuad
 -  easeInOutQuad
 -  easeInCubic
 -  easeOutCubic
 -  easeInOutCubic
 -  easeInQuart
 -  easeOutQuart
 -  easeInOutQuart
 -  easeInQuint
 -  easeOutQuint
 -  easeInOutQuint
 -  easeInExpo
 -  easeOutExpo
 -  easeInOutExpo
 -  easeInElastic
 -  easeOutElastic
 -  easeInOutElastic
 -  easeInBounce
 -  easeOutBounce
 -  easeInOutBounce
