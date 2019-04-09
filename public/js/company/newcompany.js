/**
 * Created by claudio on 27/04/17.
 */

const BACKSPACE = 8;
const CHARACTERS_BEGIN = 48;
const CHARACTERS_END = 57;
const KEYPAD_BEGIN = 96;
const KEYPAD_END = 105;
const GENERIC_KEYBOARD_EVENT = 0;
const LEFT_ARROW = 37;
const RIGHT_ARROW = 39;

$(function(){
    var identification = $('#identification-input');



    identification.on('keypress', function(e){
        var value = $(this).val().length;
        var keycode = e.keycode || e.which;
        var formatValue = '';
        if ( keycode != BACKSPACE && keycode != GENERIC_KEYBOARD_EVENT &&
            keycode < CHARACTERS_BEGIN || keycode > CHARACTERS_END ) {
            return false;
        }else{
            if (value > 17 || keycode == 8) {
                return false;
            }

            switch (value) {
                case 2:
                    formatValue = '.';
                    break;
                case 6:
                    formatValue = '.';
                    break;
                case 10:
                    formatValue = '/';
                    break;
                case 15:
                    formatValue = '-';
                    break;
            }
            if (value >= 2) {
                var tmp = $(this).val();
                tmp += formatValue;
                $(this).val(tmp);
            }
        }

    });

    numberFormat($('#phone-input'));

});

