#!/usr/bin/env node

var program = require('commander'),
    fb = require('./fizzbuzz.js').FizzBuzz;

program
    .version('0.0.1');

program
    .command('fb')
    .description('Start fb Game')
    .action(function(){
        console.log('Hi my Friend!!!');
        fb.start();
        fb.startInput();
        fb.parseInput();
});

program
    .command('bye [name]')
    .description('initialize project configuration')
    .action(function(name){
        console.log('Bye ' + name + ' . It was good to see you!');
});

program
    .command('*')
    .action(function(env){
        console.log('Enter a valid command');
        terminate(true);
});
    
program.parse(process.argv);

