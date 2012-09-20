var assert = require('assert');

var fakeson = require('../lib/fakeson');

suite('fakejson', function() {

  test('output as json object', function() {
    var json = fakeson(__dirname+'/fixtures/name.json', false);
    assert.equal(typeof json, 'object');
  });

  test('output as string', function() {
    var json = fakeson(__dirname+'/fixtures/name.json');
    assert.equal(typeof json, 'string');
  });

  test('none', function() {
    var json = fakeson(__dirname+'/fixtures/none.json', false);
    assert.equal(json.test, 123);

  });

  test('name', function() {
    var json = fakeson(__dirname+'/fixtures/name.json', false);
    assert.ok(json.name);
  });

  test('array', function() {
    var json = fakeson(__dirname+'/fixtures/array.json', false);
    assert.notEqual(json.array.length, 0);
    assert.notEqual(json.array.length, 1);
    assert.ok((json.array.length < 6));
    assert.ok((json.array.length > 1));
    assert.ok(json.array[0].name);
  });

  test('all', function() {
    var json = fakeson(__dirname+'/fixtures/all.json', false);
    assert.ok(json.chars);
    assert.ok(json.name);
    assert.ok((json.num < 10));
    assert.equal(json.bigNumber.length, 5);
    assert.ok(json.site);
    assert.ok(json.url);
    assert.ok(json.date);
    assert.ok((json.sentences.split('.').length > 4));
    assert.equal(typeof json.bool, "boolean");
    assert.ok(json.color);
    assert.ok(json.word);
    assert.ok((json.range > 4))
  });

  test('invalid', function() {
    assert.throws(function() {
      var json = fakeson(__dirname+'/fixtures/invalid.json');
    });
  });


  test('pretty output as string', function() {
    var json = fakeson(__dirname+'/fixtures/array.json', true, true);
    assert.notEqual(json.indexOf('\t'), -1);

    var json = fakeson(__dirname+'/fixtures/array.json');
    assert.equal(json.indexOf('\t'), -1);
  });

  
});

