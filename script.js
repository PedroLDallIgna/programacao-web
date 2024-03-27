function makeRequest(url) {
    fetch("sample.json")
    .then(function(result) {
        console.log(result.json());
    })
    .catch((err) => console.log(err));
}

function ajax(url) {
    httpRequest = new XMLHttpRequest();
    httpRequest.open("GET", url);
    httpRequest.send();
    if (httpRequest.readyState === 4) {
        if (httpRequest.status === 200) {
            let body = JSON.parse(httpRequest.responseText);
        }
    }
}