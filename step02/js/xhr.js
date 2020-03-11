const xhr = new XMLHttpRequest();
xhr.onreadystatechange = function () {
    document.querySelector("#response").innerText = xhr.response;
};

function xhrGet() {
    xhr.open("GET", "https://jsonplaceholder.typicode.com/posts", true);
    xhr.send();
    document.querySelector("#response").innerText = "waiting for server..." ;
};

function xhrPost() {
    const postData = JSON.stringify({
        title: "post title",
        body: "post body",
        userId: 1
    });
    xhr.open("POST", "https://jsonplaceholder.typicode.com/posts", true);
    xhr.setRequestHeader("Content-type", "application/json; charset=UTF-8");
    xhr.send(postData);
    document.querySelector("#response").innerText = "waiting for server..." ;
};

function xhrPut() {
    const putData = JSON.stringify({
        id: 1,
        title: "put title",
        body: "put body",
        userId: 1
    });
    xhr.open("PUT", "https://jsonplaceholder.typicode.com/posts/1", true);
    xhr.setRequestHeader("charset", "UTF-8");
    xhr.setRequestHeader("Content-type", "application/json");
    xhr.send(putData);
    document.querySelector("#response").innerText = "waiting for server..." ;
};

function xhrPatch() {
    const patchData = JSON.stringify({
        title: "patch title"
    });
    xhr.open("PUT", "https://jsonplaceholder.typicode.com/posts/1", true);
    xhr.setRequestHeader("charset", "UTF-8");
    xhr.setRequestHeader("Content-type", "application/json");
    xhr.send(patchData);
    document.querySelector("#response").innerText = "waiting for server..." ;
};

function xhrDelete() {
    xhr.open("DELETE", "https://jsonplaceholder.typicode.com/posts/1", true);
    xhr.send();
    document.querySelector("#response").innerText = "waiting for server..." ;
};

document.querySelector("#xhr-get").addEventListener("click", xhrGet);
document.querySelector("#xhr-post").addEventListener("click", xhrPost);
document.querySelector("#xhr-put").addEventListener("click", xhrPut);
document.querySelector("#xhr-patch").addEventListener("click", xhrPatch);
document.querySelector("#xhr-delete").addEventListener("click", xhrDelete);