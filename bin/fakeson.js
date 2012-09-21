#!/usr/bin/env node

var fs = require('fs');
var version = JSON.parse(fs.readFileSync(__dirname + '/../package.json', 'utf8')).version

var opt = require('optimist')
    .usage('fakeson '+ version +'\nUsage: $0 [options] [file]')
    .options('p', {
      alias: 'pretty',
      describe: 'Pretty print json output',
      type: 'boolean',
      default: false
    })
    //.option('m', {
      //alias: 'minify',
      //describe: 'Minify output',
      //type: 'boolean'
    //})
    //.options('l', {
      //alias: 'ls',
      //describe: 'List available modules',
      //type: 'boolean'
    //})
    .options('h', {
      alias: 'help',
      descripe: 'Show help info'
    });

var argv = opt.argv;

if (argv.help) {
  return opt.showHelp();
}

if (argv._.length == 1) {
  var fakeson = require('../lib/fakeson');
  var file = argv._[0];

  var json = fakeson(file, true, argv.pretty);
  process.stdout.write(json);

}
