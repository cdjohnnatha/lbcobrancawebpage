$(function(){

    var rates, amount, total, endDate, initialDate;
    $('#amount').on('input', function(){
        endDate = $('#end_date');
        initialDate = $('#initial_date');
        amount = $(this).val();
        if(endDate.val() !== '' && initialDate.val() !== ''){
            calculateRates();
        }
    });

    $('#taxes_type').on('change', function(){
        if(endDate.val() !== '' && initialDate.val() !== '' && amount !== 0){
            calculateRates();
        }
    });


});

function calculateRates()
{
    var total, amount, ratesType, period, typeTaxes, composed;

    amount = $('#amount').val();
    typeTaxes = $('#taxes_type').find(":selected").text();
    ratesType = $('#rates').find(":selected").text();
    period = ($('#time').attr('period')).split('-');

    if(typeTaxes.indexOf('Simples') !== -1){
        total = amount * ($('#rates').find(":selected").val()/100);
        if(ratesType.indexOf('dia') !== -1){
            total *= parseFloat(period[1]);
        }else{
            total *= parseFloat(period[0]);
        }
    }else{
        composed = parseFloat($('#rates').find(":selected").val()/100);
        if(ratesType.indexOf('dia') !== -1){
           total = amount *  Math.pow((1 + composed), parseFloat(period[1]));
           total = total.toFixed(2);
        }else{
            total = amount * Math.pow((1 + composed), parseFloat(period[0]));
            total.toFixed(2);
        }
    }

    amount = parseFloat(total) + parseFloat(amount);
    console.log(amount);
    $('#taxes').html('R$' + total);
    $('#taxes_total').html('R$' + amount);
}