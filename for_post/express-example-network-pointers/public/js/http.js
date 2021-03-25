var sendObject = function(obj, done){
    obj = obj || {};
    obj.action = obj.action || 'info_request';
    var xhr = new XMLHttpRequest();
    xhr.open('POST', '/', true);
    xhr.onreadystatechange = function () {
        if (this.readyState === 4) {
            //document.getElementById('out').innerHTML = this.response;
            done.call(this, this.response, obj);
        }
    };
    xhr.setRequestHeader('Content-type', 'application/json');
    xhr.send(JSON.stringify(obj));
};

var sendDeltaObject = function(obj, done){
    obj = obj || {};
    done = done || function(){};
    obj.action = obj.action || 'delta';
    obj.deltaY = opt.deltaY || 0;
    obj.deltaX = obj.deltaX || 0;
    sendObject(obj, done);
};