const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const apiRoutes = require('./routes/api.js');
const dotEnv = require('dotenv').config();
const helmet = require('helmet');
const app = express();
const connect = require('./database/connection');

if (dotEnv.error) {
    throw dotEnv.error;
}

// Connecting to mysql database
connect();

app.use('/public', express.static(process.cwd() + '/public'));
app.use('/client', express.static(process.cwd() + '/client'));
app.use(cors({ origin: '*' }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Security
app.use(helmet({
    frameguard: {
        action: 'deny'
    },
    contentSecurityPolicy: {
        directives: {"imgSrc": ["'self'",'hyperdev.com']}
    },
    dnsPrefetchControl: false
}));

// Routes for the app
apiRoutes(app);

// 404 Middleware
app.use((req, res) => {
    res.status(404)
        .type('text')
        .send('Not found');
});

app.listen(process.env.port || 3000, () => {
    process.env.port
        ? console.log("Server is running on port " + process.env.port)
        : console.log("Server is running on port 3000");
});

module.exports = app;
