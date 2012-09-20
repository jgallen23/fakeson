
var fs = require('fs');
var path = require('path');
var exists = fs.existsSync || path.existsSync
var vm = require('vm');
var mock = require('mockdata');
mock.real = true;

var fakeson = function(filename, stringify, pretty) {
  stringify = (typeof stringify == 'boolean') ? stringify : true;
  var source = fs.readFileSync(filename) ;
  var basepath = path.dirname(filename);

  var sandbox = {};
  for (var key in mock) {
    (function(key) {
      sandbox[key] = function() {
        return mock[key].apply(mock, arguments);
      }
    })(key);
  }
  sandbox.array = function(min, max, file) {
    var n = mock.range(min, max);

    var arr = [];
    for (var i = 0; i < n; i++) {
      var o = fakeson(path.join(basepath, file), false);
      arr.push(o);
    }

    return arr;
  }

  vm.runInNewContext('var result = ' + source, sandbox);
  var result = sandbox.result;
  pretty = (pretty) ? '\t' : '';
  return (stringify) ? JSON.stringify(result, null, pretty) : result;
}

module.exports = fakeson;
