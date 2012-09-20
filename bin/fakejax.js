#!/usr/bin/env node

var fs = require('fs');
var version = JSON.parse(fs.readFileSync(__dirname + '/../package.json', 'utf8')).version

var opt = require('optimist')
    .usage('fakejax '+ version +'\nUsage: $0 [options] [folder]')
    .options('p', {
      alias: 'port',
      describe: 'Port to run the server on',
      type: 'int',
      default: 8000
    })
    .option('u', {
      alias: 'update',
      describe: 're-run fake data on every hit',
      type: 'boolean',
      default: false
    })
    .options('h', {
      alias: 'help',
      descripe: 'Show help info'
    });

var argv = opt.argv;

if (argv.help) {
  return opt.showHelp();
}

if (argv._.length == 1) {
  var folder = argv._[0];

  var fakejax = require('../lib/fakejax');

  fakejax(folder, argv.port, argv.update);


}
