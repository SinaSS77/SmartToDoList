// load .env data into process.env
require("dotenv").config();

// Web server config
const sassMiddleware = require("./lib/sass-middleware");
const express = require("express");
const db = require("./db/connection");
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 8080;
const app = express();
const cookieSession = require("cookie-session");

app.set("view engine", "ejs");

// Load the logger first so all (static) HTTP requests are logged to STDOUT
// 'dev' = Concise output colored by response status for development use.
//  The :status token will be colored red for server error codes, yellow for client error codes, cyan for redirection codes, and uncolored for all other codes.
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  "/styles",
  sassMiddleware({
    source: __dirname + "/styles",
    destination: __dirname + "/public/styles",
    isSass: false, // false => scss, true => sass
  })
);
app.use(express.static("public"));
app.use(
  cookieSession({
    name: "session",
    keys: ["abcEasyAs123"],
  })
);
// Separated Routes for each Resource
//api/category/endpoint
// Note: Endpoints that return data (eg. JSON) usually start with `/api`
const tasksRoutes = require('./routes/tasks_api');
app.use('/api/tasks', tasksRoutes);

//ures/endpoints
const welcomeRoutes = require("./routes/welcome");
const homeRoutes = require("./routes/home");

app.use("/", welcomeRoutes(db));
app.use("/index", homeRoutes(db));

//LISTENER
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
