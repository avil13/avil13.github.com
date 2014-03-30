jQuery(document).ready(function($) {
    $('.fomat-input').keyup(function() {
        var txt = $(this).val();
        $('.format-output').text(txt);
    });


    $('#formatting').click(function() {
        var thSep = $('#thSep').val();
        var dcSep = $('#dcSep').val();

       $('.format-output').text($('.fomat-input').val());


        $('.format-output').numeric_format({
            thSep: thSep,
            dcSep: dcSep
        });

        return false;
    });
});