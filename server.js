'use strict';

const express = require('express');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  res.send('Hello World');
});

var server_port = process.env.OPENSHIFT_NODEJS_PORT || 8080

var server_ip_address = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1'

 

app.listen(server_port, server_ip_address, function () {

  console.log( "Listening on " + server_ip_address + ", port " + server_port )

});
