function Esegui(com) {
    console.log(com);
    console.log();
    jQuery.ajax({
        url:    "/controll/"+com,
        data:   {vv:    (jQuery("#velocitaV").val()/100),vr:   (jQuery("#velocitaR").val()/100)}
    })
}
function led(val){
    jQuery.ajax({
        url:    "/controll/led",
        data:   {led: val}
    });
}
function animazione(val){
    jQuery.ajax({
        url:    "/controll/anim",
        data:   {animation: val}
    });
}
function Stop() {
    jQuery.ajax("/controll/stop");
}
function inviaA() {
    jQuery.ajax({
        url:    "/controll/alt",
        data:   {altezza:   jQuery("altezza").val()}
    });
}

$('.controlD').mousedown