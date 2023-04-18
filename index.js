var express = require('express');
var server = express();

//server.get('/.well-known/apple-app-site-association', function(request, response)
// This will be call by APPLE TO VERIFY THE APP-SITE-ASSOCIATION 
// Make the 'apple-app-site-association' accessable to apple to verify the association
server.get('/.well-known/apple-app-site-association', function(request, response) {
  response.sendFile(__dirname +  '/.well-known/apple-app-site-association.json');
});

// HOME PAGE
server.get('/home', function(request, response) {
  response.sendFile(__dirname +  '/home.html');
});

// ABOUT PAGE
server.get('/about', function(request, response) {
  response.sendFile(__dirname +  '/about.html');
});


server.listen(80, () => console.log('Test universal link is listening, port 80'));