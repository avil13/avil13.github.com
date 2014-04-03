jQuery(document).ready(function($) {
    var CSSLoad = function(file) {
        // $('link[rel=stylesheet]').remove(); // del CSS
        var link = document.createElement("link");
        link.setAttribute("rel", "stylesheet");
        link.setAttribute("type", "text/css");
        link.setAttribute("href", file);
        document.getElementsByTagName("head")[0].appendChild(link);
    };

    var showRecomendation = function() {

    };


    $(document).on({
        'touchmove': showRecomendation()
    });
});