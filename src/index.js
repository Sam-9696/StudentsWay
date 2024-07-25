const express = require ('express');
const bodyParser = require('body-parser');

const { PORT } = require('./config/ServerConfig');

const app = express();

const setupAndStartServer = () => {
    
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    app.listen(PORT, async () => {
        console.log(`Server started at port ${PORT}`);
    });
}

setupAndStartServer();