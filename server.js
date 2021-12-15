const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 5000

//parse requests of content-type - application/json
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//parser application/json
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//panggil routes
var routes = require('./routes');
routes(app);

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});