var http = require('http');
var handler = require('./handler');

var fakejax = function(folder, port, update)  {
  port = port || 8000;

  var handle = handler(folder, update);

  http.createServer(handle).listen(port);

  console.log('Server running at http://127.0.0.1:'+port+'/');
}

module.exports = fakejax;
