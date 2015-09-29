function Esegui(com) {
    console.info(com);
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
    console.error('Stop');
    jQuery.ajax("/controll/stop");
}
function inviaA() {
    jQuery.ajax({
        url:    "/controll/alt",
        data:   {altezza:   jQuery("altezza").val()}
    });
}

$(document).on('mousedown',".control",function() {
    Esegui(this.id);
});
$(document).on('mouseup',".control", function() {
    Stop();
})