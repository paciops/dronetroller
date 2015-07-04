var express = require('express');
var router = express.Router();
var drone = require('ar-drone');
var client = drone.createClient();
client.config('video:video_codec','131');

router.get('/takeoff', function(request,response,next){
    client.takeoff();
    response.send('takeoff');
});

router.get('/land', function(request,response,next){
    client.land();
    response.send('land');
});

router.get('/right', function(request,response,next){
    response.send('right');
    client.right(request.query.vv);
});

router.get('/left', function(request,response,next){
    response.send('left');
    client.left(request.query.vv);
});

router.get('/up', function(request,response,next){
    response.send('up');
    client.up(request.query.vv);
});

router.get('/down', function(request,response,next){
    response.send('down');
    client.down(request.query.vv);
});

router.get('/front', function(request,response,next){
    response.send('front');
    client.front(request.query.vv);
});

router.get('/back', function(request,response,next){
    response.send('back');
    client.back(request.query.vv);
});

router.get('/rSx', function(request,response,next){
    response.send('rSx');
    client.counterClockwise(request.query.vr);
});

router.get('/rDx', function(request,response,next){
    response.send('rDx');
    client.clockwise(request.query.vr);
});

router.get('/emerg', function(request,response,next){
    response.send('Emergenza');
    client.disableEmergency();
});

router.get('/stop', function(request,response,next){
    client.stop();
    response.send('stop');
});
router.get('/Led', function(request,response,next){
    client.animateLeds(request.query.led,100,3);
    response.send('LED = '+request.query.led);
});
router.get('/Anim', function(request,response,next){
    client.animate(request.query.animation,1000);
    response.send('Animation = '+request.query.animation);
});
router.get('/alt', function(request,response,next){
    client.config('control:altitude_max',request.query.altezza*1000);
    response.send('Altitude max = '+request.query.altezza+'m');
});
module.exports = router;