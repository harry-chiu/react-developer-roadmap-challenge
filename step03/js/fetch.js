class User {
    getUsers = () => {
        fetch("http://127.0.0.1:80/api/users")
            .then(response => response.json())
            .then(json => document.querySelector("#response").innerText = JSON.stringify(json));
    };

    getUser = () => {
        fetch("http://127.0.0.1:80/api/users/1")
            .then(response => response.json())
            .then(json => document.querySelector("#response").innerText = JSON.stringify(json));
    };

    newUser = () => {
        fetch("http://127.0.0.1:80/api/users", {
            method: "POST",
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            },
            body: JSON.stringify({
                name: "User6",
                email: "user6@example.com"
            })
        })
            .then(response => response.json())
            .then(json => document.querySelector("#response").innerText = JSON.stringify(json));
    };

    updateUser = () => {
        fetch("http://127.0.0.1:80/api/users/1", {
            method: "PATCH",
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            },
            body: JSON.stringify({
                email: "user6@patch.com"
            })
        })
            .then(response => response.json())
            .then(json => document.querySelector("#response").innerText = JSON.stringify(json));
    };

    deleteUser = () => {
        fetch("http://127.0.0.1:80/api/users/1", {
            method: "DELETE",
        })
            .then(response => response.json())
            .then(json => document.querySelector("#response").innerText = JSON.stringify(json));
    };
};

const user = new User();

document.querySelector("#get-users").addEventListener("click", user.getUsers);
document.querySelector("#get-user").addEventListener("click", user.getUser);
document.querySelector("#new-user").addEventListener("click", user.newUser);
document.querySelector("#update-user").addEventListener("click", user.updateUser);
document.querySelector("#delete-user").addEventListener("click", user.deleteUser);