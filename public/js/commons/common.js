/**
 * Created by claudio on 2.4.17.
 */

$(function(){
  $('.pagination').css({'padding-left':20, 'margin': 0}).addClass('pagination-sm');
  $('.dropdown-toggle').dropdown();



});

function numberFormat(input){
    input.click(function(){
       $(this).val('(')
    });
    input.on('keypress', function(e){
        var value = $(this).val().length;
        var keycode = e.keycode || e.which;
        var formatValue = '';
        if ( keycode != BACKSPACE && keycode != GENERIC_KEYBOARD_EVENT &&
            keycode < CHARACTERS_BEGIN || keycode > CHARACTERS_END ) {
            return false;
        }else{
            if (value > 16 || keycode == 8) {
                return false;
            }
            if(value == 3)
                    formatValue = ') ';
            if(value == 9)
                formatValue = '-';
            if (value == 3 || value == 9) {
                var tmp = $(this).val();
                tmp += formatValue;
                $(this).val(tmp);
            }
        }

    });
}

function daysDiff( date ) {
    var selected, date1, today, timeDiff, label, sectionDays;
    selected = date;
    selected = selected.split('/');
    date1 =  new Date( selected[2], selected[1] - 1, selected[0] ).getTime();
    today = new Date().getTime();
    timeDiff = date1 - today;
    timeDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));
    if( timeDiff < 0) {
        timeDiff *= -1;
        timeDiff = timeDiff + ' vencidos';
    }else{
        timeDiff = timeDiff + ' até vencer';
    }

    return timeDiff;
}

function dateDiff(initialDate, finalDate) {
    if (initialDate !== 0 && endDate !== 0) {
        var timeDiff, days, months, timeInit, timeEnd, label;

        timeInit = initialDate.split('/');
        timeEnd = finalDate.split('/');
        timeInit = new Date(timeInit[2], timeInit[1] - 1, timeInit[0]);
        timeEnd = new Date(timeEnd[2], timeEnd[1] - 1, timeEnd[0]);
        timeDiff = timeEnd.getTime() - timeInit.getTime();
        timeDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));

        months = (timeEnd.getMonth() + 1) - (timeInit.getMonth() + 1);
        if (months > 0) {
            days = timeEnd.getDate();
            days = days - timeInit.getDate();
            if (days < 0) {
                days = timeDiff;
                months = 0;
            }
        } else {
            days = timeDiff;
        }

        if(months > 0){
            label = months + 'meses e ' + days + 'dias';
        }else{
            label = days + 'dias';
        }

        return label;
    }
}