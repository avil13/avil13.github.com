/**
* use
jQuery(document).ready(function($) {
    $('p.nead-formatting').numeric_format({thSep:' ', dcSep:','});
});

https://github.com/avil13/jQuery-numeric_format
*/

(function($) {
    $.fn.numeric_format = function(options) {
        if (this === undefined) {
            return ("error");
        }

        var settings = $.extend({
            'thSep': ' ', // Проверка указания разделителя разрядов
            'dcSep': ',' // Проверка указания десятичного разделителя
        }, options);



        var Do = function(el) {
            var str = $(el).html().toString();

            var val = str.replace(/[^\d\.\,]/g, "");

            while(val[val.length-1]==='.'||val[val.length-1]===','){
                val = val.substring(0, val.length-1);
            }

            var res = val.toString();
            var lZero = (val < 0); // Признак отрицательного числа

            // Определение длины форматируемой части
            var fLen = res.lastIndexOf('.'); // До десятичной точки
            fLen = (fLen > -1) ? fLen : res.length;

            // Выделение временного буфера
            var tmpRes = res.substring(fLen);
            var cnt = -1;
            for (var ind = fLen; ind > 0; ind--) {
                cnt++; // Формируем временный буфер

                if (((cnt % 3) === 0) && (ind !== fLen) && (!lZero || (ind > 1))) {
                    tmpRes = settings.thSep + tmpRes;
                }

                tmpRes = res.charAt(ind - 1) + tmpRes;
            }

            var r = str.replace(new RegExp(val, 'g'), tmpRes.replace('.', settings.dcSep));

            $(el).html(r);
        };


        for (var i = this.length - 1; i >= 0; i--) {
            Do(this[i]);
        }

    };
})(jQuery);
