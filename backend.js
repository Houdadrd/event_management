const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Connection à la base de donnée
const con = mysql.createConnection({
    user: "root",
    host:"localhost",
    password:"",
    database: "events"
})

const port = 3000;

//l'inscription de l'utilisateur
app.post('/Signup', (req, res) => {
    const login = req.body.login;
    const nom = req.body.nom;
    const motDePasse = req.body.motDePasse;
    const prenom = req.body.prenom;
    const telephone = req.body.telephone;
 
    con.query("INSERT INTO user (nom, prenom, telephone, login, motDePasse) VALUES (?, ?, ?, ?, ?)", [nom, prenom, telephone, login, motDePasse], 
    (err, result) => {
        if(err) {
            console.error(err);
            res.status(500).send({message: "Internal Server Error"});
        } else {
            if(result.affectedRows > 0) {
                res.status(200).send(result);
            } else {
                res.status(400).send({message: "ENTER CORRECT DETAILS!"});
            }
        }
    }
    );
})
// Connection 
app.post("/login", (req, res) => {
    const login = req.body.login;
    const motDePasse = req.body.motDePasse;
    con.query("SELECT * FROM user WHERE login = ? AND motDePasse = ?", 
        [login, motDePasse], 
        (err, result) => {
            if(err){
                console.error(err);
                res.status(500).send({message: "Internal Server Error"});
            } else {
                if(result.length > 0){
                    res.send(result);
                } else {
                    res.status(401).send({message: "Invalid login or password. Please try again."});
                }
            }
        }
    )
})
app.listen(port, () =>{
    console.log(`App listening on port ${port}`)
})