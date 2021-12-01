const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const port = 5000

app.get("/",(req,res) => {
    res.send("tes tes")
});

app.listen(process.env.PORT || port, () => {
    console.log("you did it!")
});

//parser application/json
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//panggil routes
var routes = require('./routes');
routes(app);

app.listen(3000, () => {
    console.log(`Server started on port`);
});