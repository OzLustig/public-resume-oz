//import modules installed at the previous step. We need them to run Node.js server and send emails
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');

// create a new Express application instance
const app = express();

app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.setHeader('Access-Control-Allow-Methods', 'POST, GET, PATCH, DELETE, OPTIONS');
  next();
});

// Configure the usage of cors
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/resumeApp'));

//start application server on port 3000
let server = app.listen(process.env.PORT || 3000, () => {
  console.log('The server started on port', server.address().port);
});

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname + '/dist/resumeApp/index.html'));
});

app.post('/sendmail', prepareToSend);

function prepareToSend(req, result) {
  const send = require('gmail-send')({
    user: '<Your own mail user name>',
    pass: '<Your own password>',
    to: '<Your own mail address>',
    subject: new String('A message has been received from ').concat(req.body.email),
    text: new String(req.body.name)
      .concat(' has sent the following message: ')
      .concat(req.body.message)
  });

  send(function(err, res, full) {
    if (err) return console.log('send() callback returned: err:', err);
    console.log('send() callback returned: res:', res);
    result.json({ res1: res });
  });
}
