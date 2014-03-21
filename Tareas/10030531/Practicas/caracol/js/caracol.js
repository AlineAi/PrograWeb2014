var prof;
var sub;
var baj;
var resultado;

resultado= prof-sub+baj;


$('#derecha').dblclick(function() {
    var caracol = $('#caracol');
    caracol.animate({
        'left': caracol.css('left') + 50 + 'px'
    }, 1000);
});

$('#derecha').click(function() {
    var caracol = $('#caracol');
    caracol.animate({
           left : parseInt(caracol.css('left'))+50)
    },2000);
});