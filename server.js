const express = require('express');
const app = express();
const port = 8080;

app.listen(port, () => {
    console.log(`o servidor está rodando na porta ${port}`)
});

const index = require('./src/routes/index');
const flores = require("./src/routes/floresRoutes");

app.use("/", index);
app.use("/flores", flores);