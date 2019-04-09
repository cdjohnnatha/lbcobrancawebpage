$(document).ready(function(){

    var options, from, to, initialDate, endDate, timeDays, amount;
    initialDate = 0;
    endDate = 0;
    options = {
          dateFormat: 'dd/mm/yy',
          dayNames: ['Domingo','Segunda','Terça','Quarta','Quinta','Sexta','Sábado'],
          dayNamesMin: ['D','S','T','Q','Q','S','S','D'],
          dayNamesShort: ['Dom','Seg','Ter','Qua','Qui','Sex','Sáb','Dom'],
          monthNames: ['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'],
          monthNamesShort: ['Jan','Fev','Mar','Abr','Mai','Jun','Jul','Ago','Set','Out','Nov','Dez'],
          nextText: 'Próximo',
          prevText: 'Anterior'
      };

    from = $('#initial_date').datepicker(options).on( "change", function() {
        initialDate = $(this).val();
        to.datepicker('option', 'minDate',  $(this).datepicker('getDate')).datepicker('refresh');
        calculateDays();
        amount = $('#amount').val();
        if(amount != '' && to != ''){
            calculateRates();
        }
    });
    to = $('#end_date').datepicker(options).on( "change", function() {
        endDate = $(this).val();
        from.datepicker('option', 'maxDate', $(this).datepicker('getDate')).datepicker('refresh');
        calculateDays();
        amount = $('#amount').val();
        if(from.val() != '' && amount != '' && to != ''){
            calculateRates();
        }
    });

    function calculateDays()
    {
        if(initialDate !== 0 && endDate !== 0) {
            var label, days, months, timeInit, timeEnd;

            timeInit = initialDate.split('/');
            timeEnd = endDate.split('/');
            timeInit = new Date(timeInit[2], timeInit[1] - 1, timeInit[0]);
            timeEnd = new Date(timeEnd[2], timeEnd[1] - 1, timeEnd[0]);
            timeDays = timeEnd.getTime() - timeInit.getTime();
            timeDays = Math.ceil(timeDays / (1000 * 3600 * 24));

            months = (timeEnd.getMonth() +1) - (timeInit.getMonth() +1);

            if(months > 0){
                days = timeEnd.getDate();
                days = days - timeInit.getDate();
                if(days < 0){
                    days = timeDays;
                    if(months === 1)
                        months = 0;
                    else{
                        if(days > 31) {
                            days = 31 - ((months * 31) - days);
                            months--;
                        }
                    }
                }
            }else{
                days = timeDays;
            }

            if(months > 0){
                if(days > 0)
                    label = months + ' meses e ' + days + ' dias';
                else
                    label = months + ' meses';
            }else{
                label = days + ' dias';
            }
            $('#time').html(label).attr('period', months + '-'+days);

        }
    }

  });