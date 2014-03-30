jQuery(document).ready(function($) {

    $('#form').submit(function() {
        var data = $('#form').form_data(),
            txt = JSON.stringify(data, undefined, 4);
        $('#cnsle').html(txt);

        return false;
    });


    $('.hider').click(function() {
        var $t = $(this).parent('label').children('input, select, textarea');

        $t.prop('disabled', !$t.prop('disabled'));

        return false;
    });


});