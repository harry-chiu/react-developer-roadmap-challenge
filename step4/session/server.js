const express = require("express");
const session = require("express-session");

const app = express();

app.use(session({
    secret: "recommand 128 bytes random string",
    cookie: { maxAge: 60 * 1000 }
}));

app.get("/", (request, response) => {
    if (request.session.isVisit) {
        request.session.isVisit++;
        response.send(`第 ${request.session.isVisit} 次訪問`);
    } else {
        request.session.isVisit = 1;
        response.send("第一次訪問");
        console.log(request.session);
    };
});

const port = process.env.PORT || 80;

app.listen(port, () => {
    console.log(`Listening on Port ${port}`);
});