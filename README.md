# [Bobcat v0.1](http://github.com/craigcollie)
Woah. You to show a loader on your site?

Dependencies for this plugin are:
* Desandro's imagesLoaded [https://github.com/desandro/imagesloaded](https://github.com/desandro/imagesloaded)
* Modernizr
* No jQuery

Alternatively, you can use the JS verson of LessCSS [http://lesscss.org/](http://lesscss.org/).

## Included files

* `index.html` - A demonstration of the loader
* `/js/bobcat.js` - The loader.
* `/js/EventEmitter.js` - Part of the imagesLoaded suite
* `/js/eventie.js` - Part of the imagesLoaded suite
* `/js/imagesLoaded.js` - Part of the imagesLoaded suite

## How to use it

    <div id="loader">
        <div id="bar"><div id="loader-bar"><div id="loader-bar-img"></div></div></div>
        <div id="loader-percentage"><span id="loader-text">0</span>%</div>
        <div id="loader-update">Initializing...</div>
    </div>

## Running the script
Ensure you've loaded Modernizr first, then load bobcat.js. When you initialize bobcat, define the paths of the scripts that you want modernizr to load.
Once everything has been loaded, including all images on the site you can run any DOM ready functions in the bobcatLoaded function.

    <script src="//cdnjs.cloudflare.com/ajax/libs/modernizr/2.6.2/modernizr.min.js"></script>
    <script src="js/bobcat.js" type="text/javascript"></script>
    <script type="text/javascript">
        bobcat.lift({
            paths: [
                "js/EventEmitter.js",
                "js/eventie.js",
                "js/imagesloaded.js"
            ]}
        );
        window.bobcatLoaded = function(instance){
            //  Do something
        };
    </script>

## I need help!

Oh, ok. Fork this project, leave a comment or drop me an email.
