const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(express.json());

const listener = app.listen(process.env.PORT || 3000, () => {
    console.log('App is listening on port ' + listener.Address().port)
});

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