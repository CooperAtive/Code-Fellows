//aliases for stdin/out
var stdin = process.stdin,
    stdout = process.stdout;
var async = require('async');
//create user interface for reading input
var readline = require('readline');
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

var inputArr = [];
exports.FizzBuzz = {
    start: function(){
        stdout.write("Welcome to FizzBuzz Playground!\n" +
                     "This program can take any number of instructions\n" +
                     "For example to get the output for a standard FizzBuzz\n" +
                     "on the numbers 1-10 like:\n" +
                     "1 2 Fizz 4 Buzz Fizz 7 8 Fizz FizzBuzz\n" +
                     "Enter:\n" +
                     "3 Fizz, 5 Buzz, 10\n" +
                     "So, lets get started!\n");
    },
    startInput: function() {
        async.series([
            function(callback) {
                rl.question("", function(input) {
                    inputArr.push(input); 
                    rl.close();
                    callback();
                });
            },
            function(callback) {
                rl.output.write(inputArr[0]);
                callback();
            }
        ]);
    },
    parseInput: function() {
        if (inputArr[0]) console.log(inputArr[0]);
        var parsedInput = inputArr[0].split(",");
        //rl.output.write(parsedInput);
    }
}

