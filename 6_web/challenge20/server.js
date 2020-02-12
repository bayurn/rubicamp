const express = require("express");
const path = require("path");
const sqlite3 = require('sqlite3').verbose();

let db = new sqlite3.Database("database.db", (err) => {
    if (err) throw err;
});

const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.set("views", path.join(__dirname, "views")); // specify the views directory
app.set("view engine", "ejs");

app.use("/", express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
    res.render("index");
});
app.get("/add", (req, res) => {
    res.render("add");
});
app.get("/edit/:id", (req, res) => {
    const id = req.params.id;
    res.render("edit");

});

app.post("/add", (req, res) => {
    `INSERT INTO bread (string, integer, float, date, boolean)
    VALUES ('${string}', ${integer}, ${float}, ${date}, ${boolean})`
    res.redirect("/");
});

app.post("/edit/:id", (req, res) => {
    const { id, string, integer, float, date, boolean } = req.body;
    const index = req.params.id;
    let overWrite = {
        id: id,
        string: string,
        integer: integer,
        float: float,
        date: date,
        boolean: boolean
    };
    writeData(data);
    res.redirect("/");
});

app.get("/delete/:id", (req, res) => {
    const id = req.params.id;
    res.redirect("/");
})

app.listen(3000, () => {
    console.log(`web ini berjalan di port 3000!`);
});