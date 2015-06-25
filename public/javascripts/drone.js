function Esegui(com) {
    console.log(com);
    console.log();
    jQuery.ajax({
        url:    "/controll/"+com,
        data:   {vv:    (jQuery("#velocitaV").val()/100),vr:   (jQuery("#velocitaR").val()/100)}
    })
}
function ledA(){
    jQuery.ajax({
        url:    "/controll/led",
        data:   {led: jQuery("#led option:selected").text()}
    });
}
function animazione(){
    jQuery.ajax({
        url:    "/controll/anim",
        data:   {animation: jQuery("#animation option:selected").text()}
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