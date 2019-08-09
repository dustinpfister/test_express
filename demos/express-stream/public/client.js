// new GET Request to /file
var xml = new XMLHttpRequest();
xml.open('GET', '/file');
// on ready state
xml.onreadystatechange = function () {
    if(this.readyState === 4 && this.status === 200){
        document.getElementById('out').innerText = this.response;
    }
};
// update process bar
xml.onprogress = function (a) {
    var per = a.loaded / a.total,
    w = 320 * per,
    bar = document.getElementById('process-bar');
    bar.style.width = w + 'px';
};
xml.send();
