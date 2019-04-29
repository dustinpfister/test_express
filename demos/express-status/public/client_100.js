var xhr = new XMLHttpRequest();
xhr.open('POST', '/data', true);

//xhr.setRequestHeader('Content-type', 'application/json');
xhr.setRequestHeader('Expect', '100-continue');
xhr.send();
