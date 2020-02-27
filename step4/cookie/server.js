const express = require("express");
const cookieParser = require("cookie-parser");

const app = express();

app.use(cookieParser());

app.get("/", (request, response) => {
    if (request.cookies.isVisit) {
        console.log(request.cookies);
        response.send("再次訪問");
    } else {
        response.cookie("isVisit", 1, { maxAge: 60 * 1000 });
        response.send("第一次訪問");
    };
});

const port = process.env.PORT || 80;

app.listen(port, () => {
    console.log(`Listening on Port ${port}`);
});