// set up canvas
var canvasObj = utils.createCanvas({
    width: 320,
    height: 240
}),
canvas = canvasObj.canvas,
ctx = canvasObj.ctx;

// info object
var save = utils.load('network_pointers', 0);
save = save || {};
var infoObj = {
    action: 'info',
    name: save.name || 'user_' + (1 + Math.floor(Math.random() * 9998))
};

// update
var update = function(res, obj){
   var obj = JSON.parse(res);
   ctx.fillStyle = 'black';
   ctx.fillRect(0,0, canvas.width, canvas.height);
   ctx.strokeStyle = 'white';
   Object.keys(obj.pointers).forEach(function(key){
       var pt = obj.pointers[key];
       ctx.fillStyle = 'blue';
       ctx.beginPath();
       ctx.arc(pt.x, pt.y, 10, 0, Math.PI * 2);
       ctx.stroke();
       ctx.fill();
       ctx.fillStyle = 'white';
       ctx.textAlign = 'center';
       ctx.fillText(pt.name, pt.x, pt.y);
   });
};

// info loop
var loop = function(){
    sendObject(infoObj, update);
    setTimeout(loop, 3000);
};
loop();

// set name
var setName = document.getElementById('set_name');
setName.value = infoObj.name;
setName.addEventListener('change', function(e){
    infoObj.name = e.target.value;
    var save = {
        name: infoObj.name
    };
    utils.save('network_pointers', 0, save);
});
