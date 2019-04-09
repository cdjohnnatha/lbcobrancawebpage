/**
 * Created by claudio on 17/06/17.
 */

$(function() {
    var arr, situation;
    arr = [];
    $( '.expiration-date-td' ).each( function() {
        arr.push($(this).html());
    });

    $( '.delayed-days-td' ).each( function(index) {
        situation = $( this ).closest( 'td' ).next().find( 'span' ).attr( 'name' );
        if( situation != 2)
            $(this).html(daysDiff(arr[index]));
    });

});