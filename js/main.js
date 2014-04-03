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

        CSSLoad('/css/touch.css');

        $('.social-text').click(function() {
            $(this).hide();
            $('.social-btns').find('a').show();
            return false;
        });
    };


    if (Modernizr.touch) {
        showRecomendation();
    }

});