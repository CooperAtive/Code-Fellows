var async = require ('async');

var inputArr = [];
var start = function(){
            stdout.write(
                "Welcome to FizzBuzz Playground!\n" +
                "This program can take any number of instructions\n" +
                "For example to get the output for a standard FizzBuzz\n" +
                "on the numbers 1-10 like:\n" +
                "1 2 Fizz 4 Buzz Fizz 7 8 Fizz FizzBuzz\n" +
                "Enter:\n" +
                "3 Fizz, 5 Buzz, 10\n" +
                "So, lets get started!\n");
            }
var startInput = function() {
                    rl.question("", function(input) {
                       inputArr.push(input); 
                        rl.close();
                    });
                }
var printInput = function() {
                     rl.output.write(inputArr[0]);
                     callback();
                }
var parseInput = function() {
                    console.log("parseInput");
                    //var parsedInput = inputArr[0].split(",");
                    //rl.output.write(parsedInput);
                }

async.series([ startInput(),
                printInput(),
                parseInput()
            ]);
    
