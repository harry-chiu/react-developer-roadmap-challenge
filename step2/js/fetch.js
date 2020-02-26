function fetchGet() {
    document.querySelector("#response").innerText = "waiting for server...";
    fetch("https://jsonplaceholder.typicode.com/posts")
        .then(response => response.json())
        .then(json => document.querySelector("#response").innerText = JSON.stringify(json));
};

function fetchPost() {
    document.querySelector("#response").innerText = "waitint for server...";
    fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        },
        body: JSON.stringify({
            title: "post title",
            body: "post body",
            userId: 1
        })
    })
        .then(response => response.json())
        .then(json => document.querySelector("#response").innerText = JSON.stringify(json));
};

function fetchPut() {
    document.querySelector("#response").innerText = "waiting for server...";
    fetch("https://jsonplaceholder.typicode.com/posts/1", {
        method: "PUT",
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        },
        body: JSON.stringify({
            id: 1,
            title: "put title",
            body: "put body",
            userId: 1
        })
    })
        .then(response => response.json())
        .then(json => document.querySelector("#response").innerText = JSON.stringify(json));
};

function fetchPatch() {
    document.querySelector("#response").innerText = "waiting for server...";
    fetch("https://jsonplaceholder.typicode.com/posts/1", {
        method: "PATCH",
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        },
        body: JSON.stringify({
            id: 1,
            title: "patch title",
        })
    })
        .then(response => response.json())
        .then(json => document.querySelector("#response").innerText = JSON.stringify(json));
};

function fetchDelete() {
    document.querySelector("#response").innerText = "waiting for server...";
    fetch("https://jsonplaceholder.typicode.com/posts/1", {
        method: "DELETE"
    })
        .then(response => response.json())
        .then(json => document.querySelector("#response").innerText = JSON.stringify(json));
};

document.querySelector("#fetch-get").addEventListener("click", fetchGet);
document.querySelector("#fetch-post").addEventListener("click", fetchPost);
document.querySelector("#fetch-put").addEventListener("click", fetchPut);
document.querySelector("#fetch-patch").addEventListener("click", fetchPatch);
document.querySelector("#fetch-delete").addEventListener("click", fetchDelete);