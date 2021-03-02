const express = require('express');
const app = express();
const port = 8080;
const bodyParser = require("body-parser");

app.listen(port, () => {
    console.log(`o servidor está rodando na porta ${port}`)
});

app.use(bodyParser.json());

const index = require('./src/routes/index');
const flores = require("./src/routes/floresRoutes");

app.use("/", index);
app.use("/flores", flores);