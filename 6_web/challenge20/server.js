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
    db.serialize(() => {
        let sqlgetData = `SELECT * FROM bread;`
        db.all(sqlgetData, (err, row) => {
            if (err) throw err
            res.render("index", { data: row });
        })
    })
});
app.get("/add", (req, res) => {
    const id = req.params.id;
    res.render("add");
});
app.get("/edit/:id", (req, res) => {
    let id = req.params.id;
    // const { string, integer, float, date, boolean } = req.body;
    let sqleditData = `SELECT * FROM bread WHERE id = ${id};`
    db.get(sqleditData, (err, row) => {
        if (err) {
            throw err;
        };
        res.render("edit", { item: row });
    });
});

// app.get('/edit/:id', (req, res) => {
//     let id = req.params.id;
//     const sqlEdit = `SELECT * FROM bread WHERE id = ?`;
//     db.get(sqlEdit, id, (err, item) => {
//         if (err) throw err;
//         res.render('edit', { item })
//     })
// });

app.post("/add", (req, res) => {
    const { string, integer, float, date, boolean } = req.body;
    db.serialize(() => {
        let sqladdData = `INSERT INTO bread (string, integer, float, date, boolean)
        VALUES ('${string}', '${integer}', '${float}', '${date}', '${boolean}')`
        db.run(sqladdData, (err, row) => {
            if (err) throw err;
            res.redirect("/");
        });
    });
});

app.post("/edit/:id", (req, res) => {
    const id = req.params.id;
    const { string, integer, float, date, boolean } = req.body;

        let sqleditData = `UPDATE bread SET string = '${string}', integer = '${integer}', float = '${float}', date = '${date}', boolean = '${boolean}'
        WHERE id = '${id}';`
        console.log(sqleditData);
        
        
        db.run(sqleditData, err => {
            if (err) {
                throw err;
            };
        });
        res.redirect("/");
    });
// });

// app.post('/edit/:id', (req, res) => {
//     let id = req.params.id;
//     const sqlNewValue = `UPDATE bread SET string = ?, integer = ?, float = ?, date = ?, boolean = ? WHERE id = ?`;
//     const input = [req.body.string, req.body.integer, req.body.float, req.body.date, req.body.boolean, id];
//     db.run(sqlNewValue, input, (err) => {
//         if (err) throw err;
//         console.log(input);

//         res.redirect('/')
//     })
// });

app.get("/delete/:id", (req, res) => {
    const id = req.params.id;
    db.serialize(() => {
        let sqldeleteData = `DELETE FROM bread WHERE id = ${id}`
        console.log(sqldeleteData);
        db.run(sqldeleteData, (err, row) => {
            if (err) throw err;
            res.redirect("/");
        })
    })
})

app.listen(3001, () => {
    console.log(`web ini berjalan di port 3001!`);
});