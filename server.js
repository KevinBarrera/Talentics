var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.urlencoded({
	extended: true
}));

app.get('/', (req, res) => {
	res.sendFile(__dirname + '/index.html');
});

app.get('/otra_ruta', (req, res) => {
	res.send('Esta es la nueva ruta');
});

app.post('/mi_ruta', (req, res) => {
	console.log(req.body);
	res.send('Comunicacion con el poljo');
});

app.listen(8000, () => {
	console.log('Server is running on port 8000');
});