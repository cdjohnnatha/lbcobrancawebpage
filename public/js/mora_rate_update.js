
// $(function(){
//     var real_val = $('input[name=real_value]').val();
//     var discount = document.getElementById("discount");

//     interest = document.getElementById("interest_rate");
//     console.log(interest.value);
//     value = Number(real_val) - Number(discount.value) + Number(real_val)*Number(interest.value);

//     var elem = document.getElementById("total_value").setAttribute('value', value);
//     $('#interest_rate').change(function(){
//         var total = Number($('input[name=real_value]').val()) + Number($('#interest_rate').val())*Number($('input[name=real_value]').val()) - Number($('#discount').val());
//         $('#total_value').val(total);
//     });

//     $('#discount').change(function(){
//         var total = Number($('input[name=real_value]').val()) + Number($('#interest_rate').val())*Number($('input[name=real_value]').val()) - Number($('#discount').val());
//         $('#total_value').val(total);
//     });

// });

$(function(){
    $('#rate_type').on('change', function(){
        $('input[name=num_of_days]').attr('disabled', false);
        $('input[name=rate_type_value]').attr('disabled', false);
        $('input[name=rate_type_future_value]').attr('disabled', false);
        $('input[name=period]').attr('disabled', false);

        if( $(this).val() == "4"){
            // console.log($(this).val());
            $('input[name=num_of_days]').attr('disabled', 'disabled');

        }
        else if( $(this).val() == "3"){
            // console.log($(this).val());
            $('input[name=period]').attr('disabled', 'disabled');      
        }
        else if( $(this).val() == "2"){
            // console.log($(this).val());
            $('input[name=rate_type_future_value]').attr('disabled', 'disabled');
        }
        else if( $(this).val() == "1"){
            // console.log($(this).val());
            $('input[name=rate_type_value]').attr('disabled', 'disabled');     
        }else{
            // console.log($(this).val());
        }
    });
});

$(function(){
    $('input[name=interest_rate]').on('change', function(){
        var interest_rate = $('input[name=interest_rate]').val();
        console.log(interest_rate);
        if(interest_rate.indexOf('.') > -1){
            var tmp = Number(interest_rate) * 100;
            $('input[name=interest_rate]').val(tmp + "%");

            console.log('Interest Rate has DOT.')

        }else if(interest_rate.indexOf('%') > -1){
            console.log("Interest rate has percentage character.");

        }else if(isNumber(interest_rate)){
            console.log('Interest rate is a number but dont has neither DOT nor PERCENTAGE.')
            $('input[name=interest_rate]').val(interest_rate + "%");

        }else {
            console.log('Interest Rate is not a number of percentage.')
        }

    });
});

$(function(){
    var btn = document.getElementById('calculate_button');
    btn.addEventListener("click", function() {
        calculate();
    });
});

$(function(){
    var btn = document.getElementById('clean_button');
    btn.addEventListener("click", function() {
        cleanFields();
    });
});

function isNumber(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}

function calculate(){
    if($('#rate_type').val() == 1){
        console.log('Valor presente');
        if($('#rate').val() == 0){
            console.log("Juros Simples Selecionado.");
            if($('#period1').val() == "d"){
                //day rate
                console.log('Day rate.');
                if($('#num_of_days_select').val() == 'd1'){
                    // $('#rate_type_future_value').val(Number($('#rate_type_value').val())*Math.pow(1+Number($('#period').val()/100), Number($('#num_of_days_input').val())));
                    $('#rate_type_value').val($('#rate_type_future_value').val()/(1 + Number($('#period').val()/100) * Number($('#num_of_days_input').val())));
                    console.log('Valor presente - '+ $('#rate_type_value').val());
                    console.log("Taxa - " + $('#period').val()/100 );
                    console.log('Numero de dias - ' + $('#num_of_days_input').val()); 
                    console.log('Valor Futuro - ' + $('#rate_type_future_value').val());
                    console.log('Valor Futuro - ' + $('#rate_type_future_value').val());                  
                }
                else if($('#num_of_days_select').val() == 'm1'){
                    $('#num_of_days_input').val(Number($('#num_of_days_input').val())*30);
                    $('#num_of_days_select').val('d1');
                    // $('#rate_type_future_value').val(Number($('#rate_type_value').val())*Math.pow(1+Number($('#period').val()/100), Number($('#num_of_days_input').val())));
                    $('#rate_type_value').val($('#rate_type_future_value').val()/(1 + Number($('#period').val()/100) * Number($('#num_of_days_input').val())));
                    console.log('Valor presente - '+ $('#rate_type_value').val());
                    console.log("Taxa - " + $('#period').val()/100 );
                    console.log('Numero de dias - ' + $('#num_of_days_input').val());
                    console.log('Valor Futuro - ' + $('#rate_type_future_value').val());
                }
                else {
                    $('#num_of_days_input').val(Number($('#num_of_days_input').val())*360);
                    $('#num_of_days_select').val('d1');
                    // $('#rate_type_future_value').val(Number($('#rate_type_value').val())*Math.pow(1+Number($('#period').val()/100), Number($('#num_of_days_input').val())));
                    $('#rate_type_value').val($('#rate_type_future_value').val()/(1 + Number($('#period').val()/100) * Number($('#num_of_days_input').val())));
                    console.log('Valor presente - '+ $('#rate_type_value').val());
                    console.log("Taxa - " + $('#period').val()/100 );
                    console.log('Numero de dias - ' + $('#num_of_days_input').val());
                    console.log('Valor Futuro - ' + $('#rate_type_future_value').val());
                }
            }else if($('#period1').val() == "m"){
                //month rate
                console.log('Month rate.');
                if($('#num_of_days_select').val() == 'd1'){
                    $('#num_of_days_input').val(Number($('#num_of_days_input').val())/30);
                    $('#num_of_days_select').val('m1');
                    $('#rate_type_value').val($('#rate_type_future_value').val()/(1 + Number($('#period').val()/100) * Number($('#num_of_days_input').val())));
                    console.log('Valor presente - '+ $('#rate_type_value').val());
                    console.log("Taxa - " + $('#period').val()/100 );
                    console.log('Numero de dias - ' + $('#num_of_days_input').val());
                    console.log('Valor Futuro - ' + $('#rate_type_future_value').val());
                }
                else if($('#num_of_days_select').val() == 'm1'){
                    console.log('Unidades corretas.');
                    $('#rate_type_value').val($('#rate_type_future_value').val()/(1 + Number($('#period').val()/100) * Number($('#num_of_days_input').val())));
                    console.log('Valor presente - '+ $('#rate_type_value').val());
                    console.log("Taxa - " + $('#period').val()/100 );
                    console.log('Numero de dias - ' + $('#num_of_days_input').val());
                    console.log('Valor Futuro - ' + $('#rate_type_future_value').val());
                }
                else {
                    $('#num_of_days_input').val(Number($('#num_of_days_input').val())*12);
                    $('#num_of_days_select').val('m1');
                    $('#rate_type_value').val($('#rate_type_future_value').val()/(1 + Number($('#period').val()/100) * Number($('#num_of_days_input').val())));
                    console.log('Valor presente - '+ $('#rate_type_value').val());
                    console.log("Taxa - " + $('#period').val()/100 );
                    console.log('Numero de dias - ' + $('#num_of_days_input').val());
                    console.log('Valor Futuro - ' + $('#rate_type_future_value').val());
                }

            }else{
                //year rate
                console.log('Year rate.');
                if($('#num_of_days_select').val() == 'd1'){
                    $('#num_of_days_input').val(Number($('#num_of_days_input').val())/360);
                    $('#num_of_days_select').val('y1');
                    $('#rate_type_value').val($('#rate_type_future_value').val()/(1 + Number($('#period').val()/100) * Number($('#num_of_days_input').val())));
                    console.log('Valor presente - '+ $('#rate_type_value').val());
                    console.log("Taxa - " + $('#period').val()/100 );
                    console.log('Numero de dias - ' + $('#num_of_days_input').val());  
                    console.log('Valor Futuro - ' + $('#rate_type_future_value').val());
                }
                else if($('#num_of_days_select').val() == 'm1'){
                    $('#num_of_days_input').val(Number($('#num_of_days_input').val())/30);
                    $('#num_of_days_select').val('y1');
                    $('#rate_type_value').val($('#rate_type_future_value').val()/(1 + Number($('#period').val()/100) * Number($('#num_of_days_input').val())));
                    console.log('Valor presente - '+ $('#rate_type_value').val());
                    console.log("Taxa - " + $('#period').val()/100 );
                    console.log('Numero de dias - ' + $('#num_of_days_input').val());
                    console.log('Valor Futuro - ' + $('#rate_type_future_value').val());
                }
                else {
                    console.log('Unidades corretas.');
                    $('#rate_type_value').val($('#rate_type_future_value').val()/(1 + Number($('#period').val()/100) * Number($('#num_of_days_input').val())));
                    console.log('Valor presente - '+ $('#rate_type_value').val());
                    console.log("Taxa - " + $('#period').val()/100 );
                    console.log('Numero de dias - ' + $('#num_of_days_input').val());
                    console.log('Valor Futuro - ' + $('#rate_type_future_value').val());

                }
            }

        }else {
            console.log("Juros Composto Selecionado.");
            if($('#period1').val() == "d"){
                //day rate
                console.log('Day rate.');
                if($('#num_of_days_select').val() == 'd1'){
                    $('#rate_type_value').val($('#rate_type_future_value').val()/(1 + Number($('#period').val()/100) * Number($('#num_of_days_input').val())));
                    console.log('Valor presente - '+ $('#rate_type_value').val());
                    console.log("Taxa - " + $('#period').val()/100 );
                    console.log('Numero de dias - ' + $('#num_of_days_input').val());
                    console.log('Valor Futuro - ' + $('#rate_type_future_value').val());
                }
                else if($('#num_of_days_select').val() == 'm1'){
                    $('#num_of_days_input').val(Number($('#num_of_days_input').val())*30);
                    $('#num_of_days_select').val('d1');
                    console.log('setting1')
                    $('#rate_type_value').val($('#rate_type_future_value').val()/(1 + Number($('#period').val()/100) * Number($('#num_of_days_input').val())));
                    console.log('Valor presente - '+ $('#rate_type_value').val());
                    console.log("Taxa - " + $('#period').val()/100 );
                    console.log('Numero de dias - ' + $('#num_of_days_input').val());
                    console.log('Valor Futuro - ' + $('#rate_type_future_value').val());

                }
                else {
                    $('#num_of_days_input').val(Number($('#num_of_days_input').val())*360);
                    $('#num_of_days_select').val('d1');
                    $('#rate_type_value').val($('#rate_type_future_value').val()/(1 + Number($('#period').val()/100) * Number($('#num_of_days_input').val())));
                    console.log('Valor presente - '+ $('#rate_type_value').val());
                    console.log("Taxa - " + $('#period').val()/100 );
                    console.log('Numero de dias - ' + $('#num_of_days_input').val());
                    console.log('Valor Futuro - ' + $('#rate_type_future_value').val());
                }
            }else if($('#period1').val() == "m"){
                //month rate
                console.log('Month rate.');
                if($('#num_of_days_select').val() == 'd1'){
                    $('#num_of_days_input').val(Number($('#num_of_days_input').val())/30);
                    $('#num_of_days_select').val('m1');
                    $('#rate_type_value').val($('#rate_type_future_value').val()/(1 + Number($('#period').val()/100) * Number($('#num_of_days_input').val())));
                    console.log('Valor presente - '+ $('#rate_type_value').val());
                    console.log("Taxa - " + $('#period').val()/100 );
                    console.log('Numero de dias - ' + $('#num_of_days_input').val());
                    console.log('Valor Futuro - ' + $('#rate_type_future_value').val());
                }
                else if($('#num_of_days_select').val() == 'm1'){
                    console.log('Unidades corretas.');
                    $('#rate_type_value').val($('#rate_type_future_value').val()/(1 + Number($('#period').val()/100) * Number($('#num_of_days_input').val())));
                    console.log('Valor presente - '+ $('#rate_type_value').val());
                    console.log("Taxa - " + $('#period').val()/100 );
                    console.log('Numero de dias - ' + $('#num_of_days_input').val());
                    console.log('Valor Futuro - ' + $('#rate_type_future_value').val());
                }
                else {
                    $('#num_of_days_input').val(Number($('#num_of_days_input').val())*12);
                    $('#num_of_days_select').val('m1');
                    $('#rate_type_value').val($('#rate_type_future_value').val()/(1 + Number($('#period').val()/100) * Number($('#num_of_days_input').val())));
                    console.log('Valor presente - '+ $('#rate_type_value').val());
                    console.log("Taxa - " + $('#period').val()/100 );
                    console.log('Numero de dias - ' + $('#num_of_days_input').val());
                    console.log('Valor Futuro - ' + $('#rate_type_future_value').val());
                }

            }else{
                //year rate
                console.log('Year rate.');
                if($('#num_of_days_select').val() == 'd1'){
                    $('#num_of_days_input').val(Number($('#num_of_days_input').val())/360);
                    $('#num_of_days_select').val('y1');
                    $('#rate_type_value').val($('#rate_type_future_value').val()/(1 + Number($('#period').val()/100) * Number($('#num_of_days_input').val())));
                    console.log('Valor presente - '+ $('#rate_type_value').val());
                    console.log("Taxa - " + $('#period').val()/100 );
                    console.log('Numero de dias - ' + $('#num_of_days_input').val());
                    console.log('Valor Futuro - ' + $('#rate_type_future_value').val());
                }
                else if($('#num_of_days_select').val() == 'm1'){
                    $('#num_of_days_input').val(Number($('#num_of_days_input').val())/30);
                    $('#num_of_days_select').val('y1');
                    $('#rate_type_value').val($('#rate_type_future_value').val()/(1 + Number($('#period').val()/100) * Number($('#num_of_days_input').val())));
                }
                else {
                    console.log('Unidades corretas.');
                    $('#rate_type_value').val($('#rate_type_future_value').val()/(1 + Number($('#period').val()/100) * Number($('#num_of_days_input').val())));
                    console.log('Valor presente - '+ $('#rate_type_value').val());
                    console.log("Taxa - " + $('#period').val()/100 );
                    console.log('Numero de dias - ' + $('#num_of_days_input').val());
                    console.log('Valor Futuro - ' + $('#rate_type_future_value').val());

                }
            }
        }

    }
    else if($('#rate_type').val() == 2){
        console.log('Valor Futuro');
        if($('#rate').val() == 0){
            console.log("Juros Simples Selecionado.");
            if($('#period1').val() == "d"){
                //day rate
                console.log('Day rate.');
                if($('#num_of_days_select').val() == 'd1'){
                    // $('#rate_type_future_value').val(Number($('#rate_type_value').val())*Math.pow(1+Number($('#period').val()/100), Number($('#num_of_days_input').val())));
                    $('#rate_type_future_value').val(Number($('#rate_type_value').val())*(1 + Number($('#period').val()/100) * Number($('#num_of_days_input').val())));$('#rate_type_future_value').val(Number($('#rate_type_value').val())*(1 + Number($('#period').val()/100) * Number($('#num_of_days_input').val())));
                    console.log('Valor presente - '+ $('#rate_type_value').val());
                    console.log("Taxa - " + $('#period').val()/100 );
                    console.log('Numero de dias - ' + $('#num_of_days_input').val()); 
                    console.log('Valor Futuro - ' + $('#rate_type_future_value').val());
                    console.log('Valor Futuro - ' + $('#rate_type_future_value').val());                  
                }
                else if($('#num_of_days_select').val() == 'm1'){
                    $('#num_of_days_input').val(Number($('#num_of_days_input').val())*30);
                    $('#num_of_days_select').val('d1');
                    // $('#rate_type_future_value').val(Number($('#rate_type_value').val())*Math.pow(1+Number($('#period').val()/100), Number($('#num_of_days_input').val())));
                    $('#rate_type_future_value').val(Number($('#rate_type_value').val())*(1 + Number($('#period').val()/100) * Number($('#num_of_days_input').val())));$('#rate_type_future_value').val(Number($('#rate_type_value').val())*(1 + Number($('#period').val()/100) * Number($('#num_of_days_input').val())));
                    console.log('Valor presente - '+ $('#rate_type_value').val());
                    console.log("Taxa - " + $('#period').val()/100 );
                    console.log('Numero de dias - ' + $('#num_of_days_input').val());
                    console.log('Valor Futuro - ' + $('#rate_type_future_value').val());
                }
                else {
                    $('#num_of_days_input').val(Number($('#num_of_days_input').val())*360);
                    $('#num_of_days_select').val('d1');
                    // $('#rate_type_future_value').val(Number($('#rate_type_value').val())*Math.pow(1+Number($('#period').val()/100), Number($('#num_of_days_input').val())));
                    $('#rate_type_future_value').val(Number($('#rate_type_value').val())*(1 + Number($('#period').val()/100) * Number($('#num_of_days_input').val())));$('#rate_type_future_value').val(Number($('#rate_type_value').val())*(1 + Number($('#period').val()/100) * Number($('#num_of_days_input').val())));
                    console.log('Valor presente - '+ $('#rate_type_value').val());
                    console.log("Taxa - " + $('#period').val()/100 );
                    console.log('Numero de dias - ' + $('#num_of_days_input').val());
                    console.log('Valor Futuro - ' + $('#rate_type_future_value').val());
                }
            }else if($('#period1').val() == "m"){
                //month rate
                console.log('Month rate.');
                if($('#num_of_days_select').val() == 'd1'){
                    $('#num_of_days_input').val(Number($('#num_of_days_input').val())/30);
                    $('#num_of_days_select').val('m1');
                    $('#rate_type_future_value').val(Number($('#rate_type_value').val())*(1 + Number($('#period').val()/100) * Number($('#num_of_days_input').val())));
                    console.log('Valor presente - '+ $('#rate_type_value').val());
                    console.log("Taxa - " + $('#period').val()/100 );
                    console.log('Numero de dias - ' + $('#num_of_days_input').val());
                    console.log('Valor Futuro - ' + $('#rate_type_future_value').val());
                }
                else if($('#num_of_days_select').val() == 'm1'){
                    console.log('Unidades corretas.');
                    $('#rate_type_future_value').val(Number($('#rate_type_value').val())*(1 + Number($('#period').val()/100) * Number($('#num_of_days_input').val())));
                    console.log('Valor presente - '+ $('#rate_type_value').val());
                    console.log("Taxa - " + $('#period').val()/100 );
                    console.log('Numero de dias - ' + $('#num_of_days_input').val());
                    console.log('Valor Futuro - ' + $('#rate_type_future_value').val());
                }
                else {
                    $('#num_of_days_input').val(Number($('#num_of_days_input').val())*12);
                    $('#num_of_days_select').val('m1');
                    $('#rate_type_future_value').val(Number($('#rate_type_value').val())*(1 + Number($('#period').val()/100) * Number($('#num_of_days_input').val())));
                    console.log('Valor presente - '+ $('#rate_type_value').val());
                    console.log("Taxa - " + $('#period').val()/100 );
                    console.log('Numero de dias - ' + $('#num_of_days_input').val());
                    console.log('Valor Futuro - ' + $('#rate_type_future_value').val());
                }

            }else{
                //year rate
                console.log('Year rate.');
                if($('#num_of_days_select').val() == 'd1'){
                    $('#num_of_days_input').val(Number($('#num_of_days_input').val())/360);
                    $('#num_of_days_select').val('y1');
                    $('#rate_type_future_value').val(Number($('#rate_type_value').val())*(1 + Number($('#period').val()/100) * Number($('#num_of_days_input').val())));
                    console.log('Valor presente - '+ $('#rate_type_value').val());
                    console.log("Taxa - " + $('#period').val()/100 );
                    console.log('Numero de dias - ' + $('#num_of_days_input').val());  
                    console.log('Valor Futuro - ' + $('#rate_type_future_value').val());
                }
                else if($('#num_of_days_select').val() == 'm1'){
                    $('#num_of_days_input').val(Number($('#num_of_days_input').val())/30);
                    $('#num_of_days_select').val('y1');
                    $('#rate_type_future_value').val(Number($('#rate_type_value').val())*(1 + Number($('#period').val()/100) * Number($('#num_of_days_input').val())));
                    console.log('Valor presente - '+ $('#rate_type_value').val());
                    console.log("Taxa - " + $('#period').val()/100 );
                    console.log('Numero de dias - ' + $('#num_of_days_input').val());
                    console.log('Valor Futuro - ' + $('#rate_type_future_value').val());
                }
                else {
                    console.log('Unidades corretas.');
                    $('#rate_type_future_value').val(Number($('#rate_type_value').val())*(1 + Number($('#period').val()/100) * Number($('#num_of_days_input').val())));
                    console.log('Valor presente - '+ $('#rate_type_value').val());
                    console.log("Taxa - " + $('#period').val()/100 );
                    console.log('Numero de dias - ' + $('#num_of_days_input').val());
                    console.log('Valor Futuro - ' + $('#rate_type_future_value').val());

                }
            }

        }else {
            console.log("Juros Composto Selecionado.");
            if($('#period1').val() == "d"){
                //day rate
                console.log('Day rate.');
                if($('#num_of_days_select').val() == 'd1'){
                    $('#rate_type_future_value').val(Number($('#rate_type_value').val())*Math.pow(1+Number($('#period').val()/100), Number($('#num_of_days_input').val())));
                    console.log('Valor presente - '+ $('#rate_type_value').val());
                    console.log("Taxa - " + $('#period').val()/100 );
                    console.log('Numero de dias - ' + $('#num_of_days_input').val());
                    console.log('Valor Futuro - ' + $('#rate_type_future_value').val());
                }
                else if($('#num_of_days_select').val() == 'm1'){
                    $('#num_of_days_input').val(Number($('#num_of_days_input').val())*30);
                    $('#num_of_days_select').val('d1');
                    console.log('setting1')
                    $('#rate_type_future_value').val(Number($('#rate_type_value').val())*Math.pow(1+Number($('#period').val()/100), Number($('#num_of_days_input').val())));
                    console.log('Valor presente - '+ $('#rate_type_value').val());
                    console.log("Taxa - " + $('#period').val()/100 );
                    console.log('Numero de dias - ' + $('#num_of_days_input').val());
                    console.log('Valor Futuro - ' + $('#rate_type_future_value').val());

                }
                else {
                    $('#num_of_days_input').val(Number($('#num_of_days_input').val())*360);
                    $('#num_of_days_select').val('d1');
                    $('#rate_type_future_value').val(Number($('#rate_type_value').val())*Math.pow(1+Number($('#period').val()/100), Number($('#num_of_days_input').val())));
                    console.log('Valor presente - '+ $('#rate_type_value').val());
                    console.log("Taxa - " + $('#period').val()/100 );
                    console.log('Numero de dias - ' + $('#num_of_days_input').val());
                    console.log('Valor Futuro - ' + $('#rate_type_future_value').val());
                }
            }else if($('#period1').val() == "m"){
                //month rate
                console.log('Month rate.');
                if($('#num_of_days_select').val() == 'd1'){
                    $('#num_of_days_input').val(Number($('#num_of_days_input').val())/30);
                    $('#num_of_days_select').val('m1');
                    $('#rate_type_future_value').val(Number($('#rate_type_value').val())*Math.pow(1+Number($('#period').val()/100), Number($('#num_of_days_input').val())));
                    console.log('Valor presente - '+ $('#rate_type_value').val());
                    console.log("Taxa - " + $('#period').val()/100 );
                    console.log('Numero de dias - ' + $('#num_of_days_input').val());
                    console.log('Valor Futuro - ' + $('#rate_type_future_value').val());
                }
                else if($('#num_of_days_select').val() == 'm1'){
                    console.log('Unidades corretas.');
                    $('#rate_type_future_value').val(Number($('#rate_type_value').val())*Math.pow(1+Number($('#period').val()/100), Number($('#num_of_days_input').val())));
                    console.log('Valor presente - '+ $('#rate_type_value').val());
                    console.log("Taxa - " + $('#period').val()/100 );
                    console.log('Numero de dias - ' + $('#num_of_days_input').val());
                    console.log('Valor Futuro - ' + $('#rate_type_future_value').val());
                }
                else {
                    $('#num_of_days_input').val(Number($('#num_of_days_input').val())*12);
                    $('#num_of_days_select').val('m1');
                    $('#rate_type_future_value').val(Number($('#rate_type_value').val())*Math.pow(1+Number($('#period').val()/100), Number($('#num_of_days_input').val())));
                    console.log('Valor presente - '+ $('#rate_type_value').val());
                    console.log("Taxa - " + $('#period').val()/100 );
                    console.log('Numero de dias - ' + $('#num_of_days_input').val());
                    console.log('Valor Futuro - ' + $('#rate_type_future_value').val());
                }

            }else{
                //year rate
                console.log('Year rate.');
                if($('#num_of_days_select').val() == 'd1'){
                    $('#num_of_days_input').val(Number($('#num_of_days_input').val())/360);
                    $('#num_of_days_select').val('y1');
                    $('#rate_type_future_value').val(Number($('#rate_type_value').val())*Math.pow(1+Number($('#period').val()/100), Number($('#num_of_days_input').val())));
                    console.log('Valor presente - '+ $('#rate_type_value').val());
                    console.log("Taxa - " + $('#period').val()/100 );
                    console.log('Numero de dias - ' + $('#num_of_days_input').val());
                    console.log('Valor Futuro - ' + $('#rate_type_future_value').val());
                }
                else if($('#num_of_days_select').val() == 'm1'){
                    $('#num_of_days_input').val(Number($('#num_of_days_input').val())/30);
                    $('#num_of_days_select').val('y1');
                    $('#rate_type_future_value').val(Number($('#rate_type_value').val())*Math.pow(1+Number($('#period').val()/100), Number($('#num_of_days_input').val())));
                }
                else {
                    console.log('Unidades corretas.');
                    $('#rate_type_future_value').val(Number($('#rate_type_value').val())*Math.pow(1+Number($('#period').val()/100), Number($('#num_of_days_input').val())));
                    console.log('Valor presente - '+ $('#rate_type_value').val());
                    console.log("Taxa - " + $('#period').val()/100 );
                    console.log('Numero de dias - ' + $('#num_of_days_input').val());
                    console.log('Valor Futuro - ' + $('#rate_type_future_value').val());

                }
            }
        }
    }
    else if($('#rate_type').val() == 3){
        console.log('Taxa de Juros');
        if($('#rate').val() == 0){
            console.log("Juros Simples Selecionado.");
            if($('#period1').val() == "d"){
                //day rate
                console.log('Day rate.');
                if($('#num_of_days_select').val() == 'd1'){
                    // $('#rate_type_future_value').val(Number($('#rate_type_value').val())*Math.pow(1+Number($('#period').val()/100), Number($('#num_of_days_input').val())));
                    //$('#rate_type_value').val($('#rate_type_future_value').val()/(1 + Number($('#period').val()/100) * Number($('#num_of_days_input').val())));
                    $('#num_of_days_input').val((Number($('#rate_type_future_value').val()) - Number($('#rate_type_value').val())) / Number($('#period').val())*Number($('#rate_type_value').val()) )
                    console.log('Valor presente - '+ $('#rate_type_value').val());
                    console.log("Taxa - " +  $('#period').val() );
                    console.log('Numero de dias - ' + $('#num_of_days_input').val()); 
                    console.log('Valor Futuro - ' + $('#rate_type_future_value').val());
                    console.log('Valor Futuro - ' + $('#rate_type_future_value').val());                  
                }
                else if($('#num_of_days_select').val() == 'm1'){
                    $('#num_of_days_input').val(Number($('#num_of_days_input').val())*30);
                    $('#num_of_days_select').val('d1');
                    // $('#rate_type_future_value').val(Number($('#rate_type_value').val())*Math.pow(1+Number($('#period').val()/100), Number($('#num_of_days_input').val())));
                    //$('#rate_type_value').val($('#rate_type_future_value').val()/(1 + Number($('#period').val()/100) * Number($('#num_of_days_input').val())));
                    $('#num_of_days_input').val((Number($('#rate_type_future_value').val()) - Number($('#rate_type_value').val())) / Number($('#period').val())*Number($('#rate_type_value').val()) )
                    console.log('Valor presente - '+ $('#rate_type_value').val());
                    console.log("Taxa - " +  $('#period').val() );
                    console.log('Numero de dias - ' + $('#num_of_days_input').val());
                    console.log('Valor Futuro - ' + $('#rate_type_future_value').val());
                }
                else {
                    $('#num_of_days_input').val(Number($('#num_of_days_input').val())*360);
                    $('#num_of_days_select').val('d1');
                    // $('#rate_type_future_value').val(Number($('#rate_type_value').val())*Math.pow(1+Number($('#period').val()/100), Number($('#num_of_days_input').val())));
                    //$('#rate_type_value').val($('#rate_type_future_value').val()/(1 + Number($('#period').val()/100) * Number($('#num_of_days_input').val())));
                    $('#num_of_days_input').val((Number($('#rate_type_future_value').val()) - Number($('#rate_type_value').val())) / Number($('#period').val())*Number($('#rate_type_value').val()) )
                    console.log('Valor presente - '+ $('#rate_type_value').val());
                    console.log("Taxa - " +  $('#period').val() );
                    console.log('Numero de dias - ' + $('#num_of_days_input').val());
                    console.log('Valor Futuro - ' + $('#rate_type_future_value').val());
                }
            }else if($('#period1').val() == "m"){
                //month rate
                console.log('Month rate.');
                if($('#num_of_days_select').val() == 'd1'){
                    $('#num_of_days_input').val(Number($('#num_of_days_input').val())/30);
                    $('#num_of_days_select').val('m1');
                    //$('#rate_type_value').val($('#rate_type_future_value').val()/(1 + Number($('#period').val()/100) * Number($('#num_of_days_input').val())));
                    $('#num_of_days_input').val((Number($('#rate_type_future_value').val()) - Number($('#rate_type_value').val())) / Number($('#period').val())*Number($('#rate_type_value').val()) )
                    console.log('Valor presente - '+ $('#rate_type_value').val());
                    console.log("Taxa - " +  $('#period').val() );
                    console.log('Numero de dias - ' + $('#num_of_days_input').val());
                    console.log('Valor Futuro - ' + $('#rate_type_future_value').val());
                }
                else if($('#num_of_days_select').val() == 'm1'){
                    console.log('Unidades corretas.');
                    //$('#rate_type_value').val($('#rate_type_future_value').val()/(1 + Number($('#period').val()/100) * Number($('#num_of_days_input').val())));
                    $('#num_of_days_input').val((Number($('#rate_type_future_value').val()) - Number($('#rate_type_value').val())) / Number($('#period').val())*Number($('#rate_type_value').val()) )
                    console.log('Valor presente - '+ $('#rate_type_value').val());
                    console.log("Taxa - " +  $('#period').val() );
                    console.log('Numero de dias - ' + $('#num_of_days_input').val());
                    console.log('Valor Futuro - ' + $('#rate_type_future_value').val());
                }
                else {
                    $('#num_of_days_input').val(Number($('#num_of_days_input').val())*12);
                    $('#num_of_days_select').val('m1');
                    //$('#rate_type_value').val($('#rate_type_future_value').val()/(1 + Number($('#period').val()/100) * Number($('#num_of_days_input').val())));
                    $('#num_of_days_input').val((Number($('#rate_type_future_value').val()) - Number($('#rate_type_value').val())) / Number($('#period').val())*Number($('#rate_type_value').val()) )
                    console.log('Valor presente - '+ $('#rate_type_value').val());
                    console.log("Taxa - " +  $('#period').val() );
                    console.log('Numero de dias - ' + $('#num_of_days_input').val());
                    console.log('Valor Futuro - ' + $('#rate_type_future_value').val());
                }

            }else{
                //year rate
                console.log('Year rate.');
                if($('#num_of_days_select').val() == 'd1'){
                    $('#num_of_days_input').val(Number($('#num_of_days_input').val())/360);
                    $('#num_of_days_select').val('y1');
                    //$('#rate_type_value').val($('#rate_type_future_value').val()/(1 + Number($('#period').val()/100) * Number($('#num_of_days_input').val())));
                    $('#num_of_days_input').val((Number($('#rate_type_future_value').val()) - Number($('#rate_type_value').val())) / Number($('#period').val())*Number($('#rate_type_value').val()) )
                    console.log('Valor presente - '+ $('#rate_type_value').val());
                    console.log("Taxa - " + $('#period').val()/100 );
                    console.log('Numero de dias - ' + $('#num_of_days_input').val());  
                    console.log('Valor Futuro - ' + $('#rate_type_future_value').val());
                }
                else if($('#num_of_days_select').val() == 'm1'){
                    $('#num_of_days_input').val(Number($('#num_of_days_input').val())/30);
                    $('#num_of_days_select').val('y1');
                    //$('#rate_type_value').val($('#rate_type_future_value').val()/(1 + Number($('#period').val()/100) * Number($('#num_of_days_input').val())));
                    $('#num_of_days_input').val((Number($('#rate_type_future_value').val()) - Number($('#rate_type_value').val())) / Number($('#period').val())*Number($('#rate_type_value').val()) )
                    console.log('Valor presente - '+ $('#rate_type_value').val());
                    console.log("Taxa - " + $('#period').val()/100 );
                    console.log('Numero de dias - ' + $('#num_of_days_input').val());
                    console.log('Valor Futuro - ' + $('#rate_type_future_value').val());
                }
                else {
                    console.log('Unidades corretas.');
                    //$('#rate_type_value').val($('#rate_type_future_value').val()/(1 + Number($('#period').val()/100) * Number($('#num_of_days_input').val())));
                    $('#num_of_days_input').val((Number($('#rate_type_future_value').val()) - Number($('#rate_type_value').val())) / Number($('#period').val())*Number($('#rate_type_value').val()) )
                    console.log('Valor presente - '+ $('#rate_type_value').val());
                    console.log("Taxa - " + $('#period').val()/100 );
                    console.log('Numero de dias - ' + $('#num_of_days_input').val());
                    console.log('Valor Futuro - ' + $('#rate_type_future_value').val());

                }
            }

        }else {
            console.log("Juros Composto Selecionado.");
            if($('#period1').val() == "d"){
                //day rate
                console.log('Day rate.');
                if($('#num_of_days_select').val() == 'd1'){
                    $('#period').val( Number(nthroot( Number($('#rate_type_future_value').val()) / Number($('#rate_type_value').val()) , Number($('#num_of_days_input').val()) ) - 1) )
                    console.log('Valor presente - '+ $('#rate_type_value').val());
                    console.log("Taxa - " + $('#period').val()/100 );
                    console.log('Numero de dias - ' + $('#num_of_days_input').val());
                    console.log('Valor Futuro - ' + $('#rate_type_future_value').val());
                }
                else if($('#num_of_days_select').val() == 'm1'){
                    $('#num_of_days_input').val(Number($('#num_of_days_input').val())*30);
                    $('#num_of_days_select').val('d1');
                    console.log('setting1')
                    $('#period').val( Number(nthroot( Number($('#rate_type_future_value').val()) / Number($('#rate_type_value').val()) , Number($('#num_of_days_input').val()) ) - 1) )
                    console.log('Valor presente - '+ $('#rate_type_value').val());
                    console.log("Taxa - " + $('#period').val()/100 );
                    console.log('Numero de dias - ' + $('#num_of_days_input').val());
                    console.log('Valor Futuro - ' + $('#rate_type_future_value').val());

                }
                else {
                    $('#num_of_days_input').val(Number($('#num_of_days_input').val())*360);
                    $('#num_of_days_select').val('d1');
                    $('#period').val( Number(nthroot( Number($('#rate_type_future_value').val()) / Number($('#rate_type_value').val()) , Number($('#num_of_days_input').val()) ) - 1) )
                    console.log('Valor presente - '+ $('#rate_type_value').val());
                    console.log("Taxa - " + $('#period').val()/100 );
                    console.log('Numero de dias - ' + $('#num_of_days_input').val());
                    console.log('Valor Futuro - ' + $('#rate_type_future_value').val());
                }
            }else if($('#period1').val() == "m"){
                //month rate
                console.log('Month rate.');
                if($('#num_of_days_select').val() == 'd1'){
                    $('#num_of_days_input').val(Number($('#num_of_days_input').val())/30);
                    $('#num_of_days_select').val('m1');
                    $('#period').val( Number(nthroot( Number($('#rate_type_future_value').val()) / Number($('#rate_type_value').val()) , Number($('#num_of_days_input').val()) ) - 1) )
                    console.log('Valor presente - '+ $('#rate_type_value').val());
                    console.log("Taxa - " + $('#period').val()/100 );
                    console.log('Numero de dias - ' + $('#num_of_days_input').val());
                    console.log('Valor Futuro - ' + $('#rate_type_future_value').val());
                }
                else if($('#num_of_days_select').val() == 'm1'){
                    console.log('Unidades corretas.');
                    $('#period').val( Number(nthroot( Number($('#rate_type_future_value').val()) / Number($('#rate_type_value').val()) , Number($('#num_of_days_input').val()) ) - 1) )
                    console.log('Valor presente - '+ $('#rate_type_value').val());
                    console.log("Taxa - " + $('#period').val()/100 );
                    console.log('Numero de dias - ' + $('#num_of_days_input').val());
                    console.log('Valor Futuro - ' + $('#rate_type_future_value').val());
                }
                else {
                    $('#num_of_days_input').val(Number($('#num_of_days_input').val())*12);
                    $('#num_of_days_select').val('m1');
                    $('#period').val( Number(nthroot( Number($('#rate_type_future_value').val()) / Number($('#rate_type_value').val()) , Number($('#num_of_days_input').val()) ) - 1) )
                    console.log('Valor presente - '+ $('#rate_type_value').val());
                    console.log("Taxa - " + $('#period').val()/100 );
                    console.log('Numero de dias - ' + $('#num_of_days_input').val());
                    console.log('Valor Futuro - ' + $('#rate_type_future_value').val());
                }

            }else{
                //year rate
                console.log('Year rate.');
                if($('#num_of_days_select').val() == 'd1'){
                    $('#num_of_days_input').val(Number($('#num_of_days_input').val())/360);
                    $('#num_of_days_select').val('y1');
                    $('#period').val( Number(nthroot( Number($('#rate_type_future_value').val()) / Number($('#rate_type_value').val()) , Number($('#num_of_days_input').val()) ) - 1) )
                    console.log('Valor presente - '+ $('#rate_type_value').val());
                    console.log("Taxa - " + $('#period').val()/100 );
                    console.log('Numero de dias - ' + $('#num_of_days_input').val());
                    console.log('Valor Futuro - ' + $('#rate_type_future_value').val());
                }
                else if($('#num_of_days_select').val() == 'm1'){
                    $('#num_of_days_input').val(Number($('#num_of_days_input').val())/30);
                    $('#num_of_days_select').val('y1');
                    $('#period').val( Number(nthroot( Number($('#rate_type_future_value').val()) / Number($('#rate_type_value').val()) , Number($('#num_of_days_input').val()) ) - 1) )
                }
                else {
                    console.log('Unidades corretas.');
                    $('#period').val( Number(nthroot( Number($('#rate_type_future_value').val()) / Number($('#rate_type_value').val()) , Number($('#num_of_days_input').val()) ) - 1) )
                    console.log('Valor presente - '+ $('#rate_type_value').val());
                    console.log("Taxa - " + $('#period').val()/100 );
                    console.log('Numero de dias - ' + $('#num_of_days_input').val());
                    console.log('Valor Futuro - ' + $('#rate_type_future_value').val());

                }
            }
        }
    }
    else if($('#rate_type').val() == 4){
        console.log('Prazo de Pagamento');
        if($('#rate').val() == 0){
            console.log("Juros Simples Selecionado.");
            if($('#period1').val() == "d"){
                //day rate
                console.log('Day rate.');
                if($('#num_of_days_select').val() == 'd1'){
                    // $('#rate_type_future_value').val(Number($('#rate_type_value').val())*Math.pow(1+Number($('#period').val()/100), Number($('#num_of_days_input').val())));
                    //$('#rate_type_value').val($('#rate_type_future_value').val()/(1 + Number($('#period').val()/100) * Number($('#num_of_days_input').val())));
                    var dividendo = Number($('#rate_type_future_value').val()) - Number($('#rate_type_value').val())
                    var divisor = (Number($('#period').val())/100)*Number($('#rate_type_value').val())
                    $('#num_of_days_input').val(dividendo/divisor)
                    console.log('Valor presente - '+ $('#rate_type_value').val());
                    console.log("Taxa - " +  $('#period').val() );
                    console.log('Numero de dias - ' + $('#num_of_days_input').val()); 
                    console.log('Valor Futuro - ' + $('#rate_type_future_value').val());
                    console.log('Valor Futuro - ' + $('#rate_type_future_value').val());                  
                }
                else if($('#num_of_days_select').val() == 'm1'){
                    $('#num_of_days_input').val(Number($('#num_of_days_input').val())*30);
                    $('#num_of_days_select').val('d1');
                    // $('#rate_type_future_value').val(Number($('#rate_type_value').val())*Math.pow(1+Number($('#period').val()/100), Number($('#num_of_days_input').val())));
                    //$('#rate_type_value').val($('#rate_type_future_value').val()/(1 + Number($('#period').val()/100) * Number($('#num_of_days_input').val())));
                    var dividendo = Number($('#rate_type_future_value').val()) - Number($('#rate_type_value').val())
                    var divisor = (Number($('#period').val())/100)*Number($('#rate_type_value').val())
                    $('#num_of_days_input').val(dividendo/divisor)
                    console.log('Valor presente - '+ $('#rate_type_value').val());
                    console.log("Taxa - " +  $('#period').val() );
                    console.log('Numero de dias - ' + $('#num_of_days_input').val());
                    console.log('Valor Futuro - ' + $('#rate_type_future_value').val());
                }
                else {
                    $('#num_of_days_input').val(Number($('#num_of_days_input').val())*360);
                    $('#num_of_days_select').val('d1');
                    // $('#rate_type_future_value').val(Number($('#rate_type_value').val())*Math.pow(1+Number($('#period').val()/100), Number($('#num_of_days_input').val())));
                    //$('#rate_type_value').val($('#rate_type_future_value').val()/(1 + Number($('#period').val()/100) * Number($('#num_of_days_input').val())));
                    var dividendo = Number($('#rate_type_future_value').val()) - Number($('#rate_type_value').val())
                    var divisor = (Number($('#period').val())/100)*Number($('#rate_type_value').val())
                    $('#num_of_days_input').val(dividendo/divisor)
                    console.log('Valor presente - '+ $('#rate_type_value').val());
                    console.log("Taxa - " +  $('#period').val() );
                    console.log('Numero de dias - ' + $('#num_of_days_input').val());
                    console.log('Valor Futuro - ' + $('#rate_type_future_value').val());
                }
            }else if($('#period1').val() == "m"){
                //month rate
                console.log('Month rate.');
                if($('#num_of_days_select').val() == 'd1'){
                    $('#num_of_days_input').val(Number($('#num_of_days_input').val())/30);
                    $('#num_of_days_select').val('m1');
                    //$('#rate_type_value').val($('#rate_type_future_value').val()/(1 + Number($('#period').val()/100) * Number($('#num_of_days_input').val())));
                    var dividendo = Number($('#rate_type_future_value').val()) - Number($('#rate_type_value').val())
                    var divisor = (Number($('#period').val())/100)*Number($('#rate_type_value').val())
                    $('#num_of_days_input').val(dividendo/divisor)
                    console.log('Valor presente - '+ $('#rate_type_value').val());
                    console.log("Taxa - " +  $('#period').val() );
                    console.log('Numero de dias - ' + $('#num_of_days_input').val());
                    console.log('Valor Futuro - ' + $('#rate_type_future_value').val());
                }
                else if($('#num_of_days_select').val() == 'm1'){
                    console.log('Unidades corretas.');
                    //$('#rate_type_value').val($('#rate_type_future_value').val()/(1 + Number($('#period').val()/100) * Number($('#num_of_days_input').val())));
                    var dividendo = Number($('#rate_type_future_value').val()) - Number($('#rate_type_value').val())
                    var divisor = (Number($('#period').val())/100)*Number($('#rate_type_value').val())
                    $('#num_of_days_input').val(dividendo/divisor)
                    console.log('Valor presente - '+ $('#rate_type_value').val());
                    console.log('Valor Futuro - ' + $('#rate_type_future_value').val());
                    console.log("Taxa - " +  $('#period').val()/100 );
                    console.log('Numero de meses - ' + $('#num_of_days_input').val());
                    
                    console.log(Number($('#rate_type_future_value').val()) - Number($('#rate_type_value').val()))
                    console.log((Number($('#period').val())/100)*Number($('#rate_type_value').val()))
                    console.log("Resultado")
                    console.log(dividendo/divisor)
                }
                else {
                    $('#num_of_days_input').val(Number($('#num_of_days_input').val())*12);
                    $('#num_of_days_select').val('m1');
                    //$('#rate_type_value').val($('#rate_type_future_value').val()/(1 + Number($('#period').val()/100) * Number($('#num_of_days_input').val())));
                    var dividendo = Number($('#rate_type_future_value').val()) - Number($('#rate_type_value').val())
                    var divisor = (Number($('#period').val())/100)*Number($('#rate_type_value').val())
                    $('#num_of_days_input').val(dividendo/divisor)
                    console.log('Valor presente - '+ $('#rate_type_value').val());
                    console.log("Taxa - " +  $('#period').val() );
                    console.log('Numero de dias - ' + $('#num_of_days_input').val());
                    console.log('Valor Futuro - ' + $('#rate_type_future_value').val());
                }

            }else{
                //year rate
                console.log('Year rate.');
                if($('#num_of_days_select').val() == 'd1'){
                    $('#num_of_days_input').val(Number($('#num_of_days_input').val())/360);
                    $('#num_of_days_select').val('y1');
                    //$('#rate_type_value').val($('#rate_type_future_value').val()/(1 + Number($('#period').val()/100) * Number($('#num_of_days_input').val())));
                    var dividendo = Number($('#rate_type_future_value').val()) - Number($('#rate_type_value').val())
                    var divisor = (Number($('#period').val())/100)*Number($('#rate_type_value').val())
                    $('#num_of_days_input').val(dividendo/divisor)
                    console.log('Valor presente - '+ $('#rate_type_value').val());
                    console.log("Taxa - " + $('#period').val()/100 );
                    console.log('Numero de dias - ' + $('#num_of_days_input').val());  
                    console.log('Valor Futuro - ' + $('#rate_type_future_value').val());
                }
                else if($('#num_of_days_select').val() == 'm1'){
                    $('#num_of_days_input').val(Number($('#num_of_days_input').val())/30);
                    $('#num_of_days_select').val('y1');
                    //$('#rate_type_value').val($('#rate_type_future_value').val()/(1 + Number($('#period').val()/100) * Number($('#num_of_days_input').val())));
                    var dividendo = Number($('#rate_type_future_value').val()) - Number($('#rate_type_value').val())
                    var divisor = (Number($('#period').val())/100)*Number($('#rate_type_value').val())
                    $('#num_of_days_input').val(dividendo/divisor)
                    console.log('Valor presente - '+ $('#rate_type_value').val());
                    console.log("Taxa - " + $('#period').val()/100 );
                    console.log('Numero de dias - ' + $('#num_of_days_input').val());
                    console.log('Valor Futuro - ' + $('#rate_type_future_value').val());
                }
                else {
                    console.log('Unidades corretas.');
                    //$('#rate_type_value').val($('#rate_type_future_value').val()/(1 + Number($('#period').val()/100) * Number($('#num_of_days_input').val())));
                    var dividendo = Number($('#rate_type_future_value').val()) - Number($('#rate_type_value').val())
                    var divisor = (Number($('#period').val())/100)*Number($('#rate_type_value').val())
                    $('#num_of_days_input').val(dividendo/divisor)
                    console.log('Valor presente - '+ $('#rate_type_value').val());
                    console.log("Taxa - " + $('#period').val()/100 );
                    console.log('Numero de dias - ' + $('#num_of_days_input').val());
                    console.log('Valor Futuro - ' + $('#rate_type_future_value').val());

                }
            }

        }else {
            console.log("Juros Composto Selecionado.");
            if($('#period1').val() == "d"){
                //day rate
                console.log('Day rate.');
                if($('#num_of_days_select').val() == 'd1'){
                    //$('#period').val( Number(nthroot( Number($('#rate_type_future_value').val()) / Number($('#rate_type_value').val()) , Number($('#num_of_days_input').val()) ) - 1) )
                    var dividendo = Math.log10(Number($('#rate_type_future_value').val()) / Number($('#rate_type_value').val()))
                    var divisor = Math.log10(1 + (Number($('#period').val()))/100)
                    $('#num_of_days_input').val( dividendo / divisor)
                    console.log('Valor presente - '+ $('#rate_type_value').val());
                    console.log("Taxa - " + $('#period').val()/100 );
                    console.log('Numero de dias - ' + $('#num_of_days_input').val());
                    console.log('Valor Futuro - ' + $('#rate_type_future_value').val());
                }
                else if($('#num_of_days_select').val() == 'm1'){
                    $('#num_of_days_input').val(Number($('#num_of_days_input').val())*30);
                    $('#num_of_days_select').val('d1');
                    console.log('setting1')
                    //$('#period').val( Number(nthroot( Number($('#rate_type_future_value').val()) / Number($('#rate_type_value').val()) , Number($('#num_of_days_input').val()) ) - 1) )
                    var dividendo = Math.log10(Number($('#rate_type_future_value').val()) / Number($('#rate_type_value').val()))
                    var divisor = Math.log10(1 + (Number($('#period').val()))/100)
                    $('#num_of_days_input').val( dividendo / divisor)
                    console.log('Valor presente - '+ $('#rate_type_value').val());
                    console.log("Taxa - " + $('#period').val()/100 );
                    console.log('Numero de dias - ' + $('#num_of_days_input').val());
                    console.log('Valor Futuro - ' + $('#rate_type_future_value').val());

                }
                else {
                    $('#num_of_days_input').val(Number($('#num_of_days_input').val())*360);
                    $('#num_of_days_select').val('d1');
                    //$('#period').val( Number(nthroot( Number($('#rate_type_future_value').val()) / Number($('#rate_type_value').val()) , Number($('#num_of_days_input').val()) ) - 1) )
                    var dividendo = Math.log10(Number($('#rate_type_future_value').val()) / Number($('#rate_type_value').val()))
                    var divisor = Math.log10(1 + (Number($('#period').val()))/100)
                    $('#num_of_days_input').val( dividendo / divisor)
                    console.log('Valor presente - '+ $('#rate_type_value').val());
                    console.log("Taxa - " + $('#period').val()/100 );
                    console.log('Numero de dias - ' + $('#num_of_days_input').val());
                    console.log('Valor Futuro - ' + $('#rate_type_future_value').val());
                }
            }else if($('#period1').val() == "m"){
                //month rate
                console.log('Month rate.');
                if($('#num_of_days_select').val() == 'd1'){
                    $('#num_of_days_input').val(Number($('#num_of_days_input').val())/30);
                    $('#num_of_days_select').val('m1');
                    //$('#period').val( Number(nthroot( Number($('#rate_type_future_value').val()) / Number($('#rate_type_value').val()) , Number($('#num_of_days_input').val()) ) - 1) )
                    var dividendo = Math.log10(Number($('#rate_type_future_value').val()) / Number($('#rate_type_value').val()))
                    var divisor = Math.log10(1 + (Number($('#period').val()))/100)
                    $('#num_of_days_input').val( dividendo / divisor)
                    console.log('Valor presente - '+ $('#rate_type_value').val());
                    console.log("Taxa - " + $('#period').val()/100 );
                    console.log('Numero de dias - ' + $('#num_of_days_input').val());
                    console.log('Valor Futuro - ' + $('#rate_type_future_value').val());
                }
                else if($('#num_of_days_select').val() == 'm1'){
                    console.log('Unidades corretas.');
                    //$('#period').val( Number(nthroot( Number($('#rate_type_future_value').val()) / Number($('#rate_type_value').val()) , Number($('#num_of_days_input').val()) ) - 1) )
                    var dividendo = Math.log10(Number($('#rate_type_future_value').val()) / Number($('#rate_type_value').val()))
                    var divisor = Math.log10(1 + (Number($('#period').val()))/100)
                    $('#num_of_days_input').val( dividendo / divisor)
                    console.log('Valor presente - '+ $('#rate_type_value').val());
                    console.log("Taxa - " + $('#period').val()/100 );
                    console.log('Numero de dias - ' + $('#num_of_days_input').val());
                    console.log('Valor Futuro - ' + $('#rate_type_future_value').val());
                }
                else {
                    $('#num_of_days_input').val(Number($('#num_of_days_input').val())*12);
                    $('#num_of_days_select').val('m1');
                    //$('#period').val( Number(nthroot( Number($('#rate_type_future_value').val()) / Number($('#rate_type_value').val()) , Number($('#num_of_days_input').val()) ) - 1) )
                    var dividendo = Math.log10(Number($('#rate_type_future_value').val()) / Number($('#rate_type_value').val()))
                    var divisor = Math.log10(1 + (Number($('#period').val()))/100)
                    $('#num_of_days_input').val( dividendo / divisor)
                    console.log('Valor presente - '+ $('#rate_type_value').val());
                    console.log("Taxa - " + $('#period').val()/100 );
                    console.log('Numero de dias - ' + $('#num_of_days_input').val());
                    console.log('Valor Futuro - ' + $('#rate_type_future_value').val());
                }

            }else{
                //year rate
                console.log('Year rate.');
                if($('#num_of_days_select').val() == 'd1'){
                    $('#num_of_days_input').val(Number($('#num_of_days_input').val())/360);
                    $('#num_of_days_select').val('y1');
                    //$('#period').val( Number(nthroot( Number($('#rate_type_future_value').val()) / Number($('#rate_type_value').val()) , Number($('#num_of_days_input').val()) ) - 1) )
                    var dividendo = Math.log10(Number($('#rate_type_future_value').val()) / Number($('#rate_type_value').val()))
                    var divisor = Math.log10(1 + (Number($('#period').val()))/100)
                    $('#num_of_days_input').val( dividendo / divisor)
                    console.log('Valor presente - '+ $('#rate_type_value').val());
                    console.log("Taxa - " + $('#period').val()/100 );
                    console.log('Numero de dias - ' + $('#num_of_days_input').val());
                    console.log('Valor Futuro - ' + $('#rate_type_future_value').val());
                }
                else if($('#num_of_days_select').val() == 'm1'){
                    $('#num_of_days_input').val(Number($('#num_of_days_input').val())/30);
                    $('#num_of_days_select').val('y1');
                    //$('#period').val( Number(nthroot( Number($('#rate_type_future_value').val()) / Number($('#rate_type_value').val()) , Number($('#num_of_days_input').val()) ) - 1) )
                    var dividendo = Math.log10(Number($('#rate_type_future_value').val()) / Number($('#rate_type_value').val()))
                    var divisor = Math.log10(1 + (Number($('#period').val()))/100)
                    $('#num_of_days_input').val( dividendo / divisor)
                }
                else {
                    console.log('Unidades corretas.');
                    //$('#period').val( Number(nthroot( Number($('#rate_type_future_value').val()) / Number($('#rate_type_value').val()) , Number($('#num_of_days_input').val()) ) - 1) )
                    var dividendo = Math.log10(Number($('#rate_type_future_value').val()) / Number($('#rate_type_value').val()))
                    var divisor = Math.log10(1 + (Number($('#period').val()))/100)
                    $('#num_of_days_input').val( dividendo / divisor)
                    console.log('Valor presente - '+ $('#rate_type_value').val());
                    console.log("Taxa - " + $('#period').val()/100 );
                    console.log('Numero de dias - ' + $('#num_of_days_input').val());
                    console.log('Valor Futuro - ' + $('#rate_type_future_value').val());

                }
            }
        }

    }
    else {
        console.log("Nothing selected.");
    }
}

function cleanFields(){
   $('#rate_type_value').val('0.00');
    $('#period').val('0');
    $('#num_of_days_input').val('0');
    $('#rate_type_future_value').val('0.00');
    $('#rate_type').val('0');
    $('input[name=num_of_days]').attr('disabled', false);
    $('input[name=rate_type_value]').attr('disabled', false);
    $('input[name=rate_type_future_value]').attr('disabled', false);
    $('input[name=period]').attr('disabled', false);
    $('#rate_type').val('0');
    $('#rate').val('0');
    $('#period1').val('d');
    $('#num_of_days_select').val('d1');
}

function nthroot(x, n) {
  try {
    var negate = n % 2 == 1 && x < 0;
    if(negate)
      x = -x;
    var possible = Math.pow(x, 1 / n);
    n = Math.pow(possible, n);
    if(Math.abs(x - n) < 1 && (x > 0 == n > 0))
      return negate ? -possible : possible;
  } catch(e){}
}

