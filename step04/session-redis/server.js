const express = require("express");
const session = require("express-session");
const redis = require("redis");
const RedisStore = require("connect-redis")(session);
const redisClient = redis.createClient();

const app = express();

app.use(session({
    store: new RedisStore({ client: redisClient }),
    secret: "SOME_SECRET_TOKEN",
    resave: false
}));

app.get("/", (request, response) => {
    if (request.session.isVisit) {
        request.session.isVisit++;
        response.send(`第 ${isVisit} 次訪問`);
    } else {
        request.session.isVisit = 1;
        response.send("第一次訪問");
    };
});

const port = process.env.PORT || 6379;

app.listen(port, () => {
    console.log(`Listening on Port ${port}`);
});