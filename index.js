const express = require('express');
const app = express();
const port = 3000;
const routes = require('./routes');
const http = require('http');
app.server = http.createServer(app);
const helmet = require('helmet');
const bodyParser = require('body-parser');

const db = require('./db');

db.connect(() => { });

app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
app.use(bodyParser.text());
app.use(helmet());
app.use((req, res, next) => {
	res.header('Access-Control-Allow-Methods', '*');
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
	next();
});

app.use('/', routes);

app.server.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});