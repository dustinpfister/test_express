var xhr = new XMLHttpRequest();
xhr.open('POST', '/', true);
xhr.onreadystatechange = function () {

    if (this.readyState === 4) {
        document.getElementById('out').innerHTML = this.response;
    }
};
xhr.setRequestHeader('Content-type', 'application/json');
xhr.send(JSON.stringify({
        base: 2,
        pow: 4
    }));
