const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const apiRoutes = require('./routes/api.js');
const dotEnv = require('dotenv').config();
const helmet = require('helmet');

if (dotEnv.error) {
    throw dotEnv.error;
} else {
    console.log(dotEnv.parsed);
}

const app = express();

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

// Sample front-end
app.route('/:project/')
    .get((req, res) => {
       res.sendFile(process.cwd() + '/views/issue.html');
    });

// Index page (static HTML)
app.route('/')
    .get((req, res) => {
        res.sendFile(process.cwd() + '/views/index.html');
    });

// Routing for API
apiRoutes(app);

// 404 Middleware
// app.use((req, res) => {
//     res.status(404)
//         .type('text')
//         .send('Not found');
// });

// Start server and tests!
app.listen(process.env.port || 3000, () => {
    process.env.port
        ? console.log("Listening on port " + process.env.port)
        : console.log("Listening on port 3000");
});

module.exports = app;
