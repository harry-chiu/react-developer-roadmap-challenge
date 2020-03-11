const fs = require("fs");
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();

app.use(cors());
app.use(bodyParser.json());

// GET - users
app.get("/api/users", (request, response) => {
    fs.readFile("./users.json", "utf8", (error, rawData) => {
        if (!error) {
            const data = JSON.parse(rawData);
            response.send(data);
        };
    });
});

// GET - specify user
app.get("/api/users/:id", (request, response) => {
    fs.readFile("./users.json", "utf8", (error, rawData) => {
        if (!error) {
            const data = JSON.parse(rawData);
            const filterData = data.filter(user => user.id.toString() === request.params.id);
            response.send(filterData);
        };
    });
});

// POST
app.post("/api/users", (request, response) => {
    fs.readFile("./users.json", "utf8", (error, rawData) => {
        if (!error) {
            // Simulate new a user
            const newUser = {
                id: rawData.length + 1,
                name: request.body.name,
                email: request.body.email
            };
            console.log("New user: ", newUser);

            response.send(newUser);
        };
    });
});

// PATCH
app.patch("/api/users/:id", (request, response) => {
    fs.readFile("./users.json", "utf8", (error, rawData) => {
        if (!error) {
            // Simulate update a user
            const data = JSON.parse(rawData);
            const updatedUser = data.filter(user => user.id.toString() === request.params.id);

            updatedUser.email = request.body.email;

            console.log("Update user: ", updatedUser);

            response.send(updatedUser);
        };
    });
});

// DELETE
app.delete("/api/users/:id", (request, response) => {
    console.log("Delete user: ", {});

    response.send({});
});

const port = process.env.PORT || 80;

app.listen(port, () => {
    console.log(`Listening on Port ${port}`);
});