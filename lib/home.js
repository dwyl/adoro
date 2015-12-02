exports.register = function(server, options, next) {
  server.views({
    engines: {
      html: require('handlebars')
    },
    path: 'views',
    layoutPath: 'views/layout',
    layout: 'default',
    //helpersPath: 'views/helpers',
    //partialsPath: 'views/partials'
  });
  server.route([{
    method: 'GET',
    path: '/',
    handler: function(request, reply) {
      // Render the view with the custom greeting
      var data = {
        title: 'This is Index!',
        message: 'Hello, World. You crazy handlebars layout'
      };

      return reply.view('index', data);
    }

  }]);

  return next();
};


exports.register.attributes = {
  name: 'Home'
};
