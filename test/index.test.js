var Code = require('code');
var Lab = require('lab');
var Hapi = require('hapi');
var Server = require('../lib/index.js');

var lab = exports.lab = Lab.script();
var expect = Code.expect;
var it = lab.test;

it('starts server and return an instance of Hapi server', function (done) {

  Server.init(0, function (err, server) {

    expect(err).to.not.exist();
    expect(server).to.be.instanceof(Hapi.Server);

    server.stop(done);
  });

});
