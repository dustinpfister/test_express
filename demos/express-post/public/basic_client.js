var xhr = new XMLHttpRequest();
xhr.open('POST', '/', true);
xhr.onreadystatechange = function () {
    console.log(this.response)
};
xhr.setRequestHeader('Content-type', 'application/json');
xhr.send(JSON.stringify({
  foo: 'bar',
  n: 40
}));
