const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(express.json());


app.get('/', (req,res) => {
    res.send('Welcome to Daily Code Buffer in Heroku Auto Deployment!!');
});

const port = 5000

const port = process.env.PORT || '5000';
app.listen(port, () => console.log(`Server started on Port ${port}`));

app.get("/",(req,res) => {
    res.send("tes lagi yaa")
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