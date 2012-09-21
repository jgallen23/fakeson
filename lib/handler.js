var path = require('path');
var fakeson = require('./fakeson');


module.exports = function(folder, update) {

  var cache = {};

  return function(req, res) {
    var url = req.url;

    var fullpath = path.join(folder, req.url+'.fakeson');

    try {

      var jsonString;
      if (!update && cache[fullpath]) {
        jsonString = cache[fullpath];
      } else {
        jsonString = fakeson(fullpath);
        cache[fullpath] = jsonString;
      }

      res.writeHead(200, {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      });

      res.end(jsonString);

    } catch(e) {
      res.writeHead(500);
      res.end(e.message);
    }
  }
}
