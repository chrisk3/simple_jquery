$(document).ready(function() {

    $(function() {
    	$('#sortable').sortable();
    });

    $('.cats').hide();

    $('#ninja li').click(function() {
        $(this).find('.ninjas').hide();
        $(this).find('.cats').show();
    });

}); //end ready