var Hapi = require('hapi');
var Home = require('./home.js');
var Inert = require('inert');
var Vision = require('vision');


exports.init = function (port, next) {

  var server = new Hapi.Server();
  server.connection({port: port});
  server.register([Vision, Inert, Home], function (err) {
    if (err) {
      return next(err);
    }

    server.start(function (err) {

      return next(err, server);
    });
  });
};
