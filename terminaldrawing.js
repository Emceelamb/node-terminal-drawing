var c = require('colors');
var exec = require("child_process").exec;

// Do not print returned undefined
// module.exports.repl.ignoreUndefined = true;
process.stdin.emit('data', "module.exports.repl.ignoreUndefined = true;\n");

// reset console
clear = function () {
  return process.stdout.write('\033c');
}
// console.log('console reset loaded...')

// sleep function

function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}

// console.log('Sleep');

// exec('.load ./terminaldrawing.js', function(error, stdout, stderr) {
//     console.log('stdout: ' + stdout);
//     console.log('stderr: ' + stderr);
//     if (error !== null) {
//         console.log('exec error: ' + error);
//     }
// });

// // Welcome Message
// function welcome(){
//   console.log('Hey!!!');
//   sleep(3000);
//   console.log('.');
//   sleep(3000);
//   console.log('..');
//   sleep(3000);
//   console.log('...');
//   sleep(3000);
//   console.log("You're ready to draw!");
//   sleep(8000);
// }
//
//
// // welcome();
clear();
